// Capture a real screenshot of the plugin's "Official / 3rd-party" tab.
// Drives headless Edge via CDP (no puppeteer dependency; Node 24 native WebSocket).
import { spawn } from "node:child_process";
import { mkdirSync, writeFileSync, rmSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const OUT_DIR = join(ROOT, "assets");
const OUT_FILE = join(OUT_DIR, "screenshot-grouped-tab.png");
const APP_URL = process.env.DSH_URL ?? "http://127.0.0.1:3080";
const PORT = 9223;
const EDGE = process.env.EDGE_PATH ?? "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";
const PROFILE = join(ROOT, ".tmp-edge-profile");

mkdirSync(OUT_DIR, { recursive: true });
rmSync(PROFILE, { recursive: true, force: true });

const edge = spawn(EDGE, [
  "--headless=new",
  "--disable-gpu",
  "--no-first-run",
  "--no-default-browser-check",
  "--disable-features=msEdgeFirstRunExperience",
  "--remote-debugging-port=" + PORT,
  "--user-data-dir=" + PROFILE,
  "about:blank",
], { stdio: "ignore" });

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function waitForJsonList() {
  for (let i = 0; i < 60; i++) {
    try {
      const res = await fetch(`http://127.0.0.1:${PORT}/json/list`);
      const list = await res.json();
      const page = list.find((t) => t.type === "page");
      if (page?.webSocketDebuggerUrl) return page.webSocketDebuggerUrl;
    } catch {}
    await sleep(250);
  }
  throw new Error("Edge CDP endpoint not reachable");
}

class CDP {
  constructor(ws) { this.ws = ws; this.id = 0; this.pending = new Map(); }
  static async connect(url) {
    const ws = new WebSocket(url);
    await new Promise((res, rej) => { ws.onopen = res; ws.onerror = rej; });
    const c = new CDP(ws);
    ws.onmessage = (ev) => {
      const msg = JSON.parse(ev.data);
      if (msg.id && c.pending.has(msg.id)) {
        const { resolve, reject } = c.pending.get(msg.id);
        c.pending.delete(msg.id);
        msg.error ? reject(new Error(msg.error.message)) : resolve(msg.result);
      }
    };
    return c;
  }
  send(method, params = {}) {
    const id = ++this.id;
    return new Promise((resolve, reject) => {
      this.pending.set(id, { resolve, reject });
      this.ws.send(JSON.stringify({ id, method, params }));
    });
  }
  close() { try { this.ws.close(); } catch {} }
}

async function evalJs(cdp, expression) {
  const r = await cdp.send("Runtime.evaluate", {
    expression,
    returnByValue: true,
    awaitPromise: true,
  });
  if (r.exceptionDetails) throw new Error("page eval failed: " + JSON.stringify(r.exceptionDetails));
  return r.result.value;
}

async function waitFor(cdp, expression, timeoutMs = 30000) {
  const start = Date.now();
  for (;;) {
    const ok = await evalJs(cdp, expression);
    if (ok) return;
    if (Date.now() - start > timeoutMs) throw new Error("timeout waiting for: " + expression);
    await sleep(300);
  }
}

const wsUrl = await waitForJsonList();
const cdp = await CDP.connect(wsUrl);

await cdp.send("Page.enable");
await cdp.send("Runtime.enable");
await cdp.send("Emulation.setDeviceMetricsOverride", {
  width: 1440, height: 900, deviceScaleFactor: 1, mobile: false,
});
await cdp.send("Page.navigate", { url: APP_URL });
await waitFor(cdp, `document.querySelector('button[aria-haspopup="dialog"]') !== null`, 40000);
await sleep(2500);

// 1. Open Settings via the sidebar trigger.
await evalJs(cdp, `document.querySelector('button[aria-haspopup="dialog"]').click()`);
await waitFor(cdp, `document.querySelector('[role="dialog"]') !== null`);

// 2. Open the Plugins section (nav cell whose label contains 插件 / Plugins).
const opened = await evalJs(cdp, `(() => {
  const cells = [...document.querySelectorAll('[role="dialog"] button')];
  const cell = cells.find((b) => b.textContent.trim().includes('插件') || b.textContent.trim().toLowerCase().includes('plugins'));
  if (!cell) return false;
  cell.click();
  return true;
})()`);
if (!opened) throw new Error("Plugins nav cell not found");
await waitFor(cdp, `[...document.querySelectorAll('[role="tab"]')].some((t) => t.textContent.trim() !== '')`);

// 3. Switch to the plugin's own grouped tab (官方/第三方).
const switched = await evalJs(cdp, `(() => {
  const tabs = [...document.querySelectorAll('[role="tab"]')];
  const tab = tabs.find((t) => t.textContent.includes('官方/第三方') || t.textContent.toLowerCase().includes('official'));
  if (!tab) return false;
  tab.click();
  return true;
})()`);
if (!switched) throw new Error("Official/3rd-party tab not found");
await waitFor(cdp, `document.querySelector('[data-group-count]') !== null`);
await sleep(1800);

// Verify the rendered state (group titles + counts) before capturing.
const state = await evalJs(cdp, `(() => {
  const groups = [...document.querySelectorAll('[data-group-count]')];
  return groups.map((g) => {
    const head = g.closest('section');
    const title = head?.querySelector('[class*="groupTitle"]')?.textContent ?? '';
    return { title, count: g.textContent.trim() };
  });
})()`);
console.log("rendered groups:", JSON.stringify(state));

// Crop to the settings dialog so the screenshot is focused.
const box = await evalJs(cdp, `(() => {
  const dlg = document.querySelector('[role="dialog"]');
  if (!dlg) return null;
  const r = dlg.getBoundingClientRect();
  return { x: r.x, y: r.y, width: r.width, height: r.height };
})()`);
const shot = await cdp.send("Page.captureScreenshot", {
  format: "png",
  fromSurface: true,
  ...(box ? { clip: { ...box, scale: 1 } } : {}),
});
const buf = Buffer.from(shot.data, "base64");
writeFileSync(OUT_FILE, buf);
console.log("saved " + OUT_FILE + " (" + buf.length + " bytes)" + (box ? ` clip=${Math.round(box.width)}x${Math.round(box.height)}` : ""));

cdp.close();
// Give Edge a moment to release the profile dir before cleanup.
setTimeout(() => {
  try { edge.kill(); } catch {}
  setTimeout(() => rmSync(PROFILE, { recursive: true, force: true }), 1500);
}, 300);
