// Pre-publish sanity check: verify the artifacts `npm publish` would ship.
// Fails loudly instead of publishing a broken package.
import { existsSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const manifest = JSON.parse(readFileSync(join(root, "package.json"), "utf8"));

const failures = [];
const check = (label, ok) => {
  if (!ok) failures.push(label);
  else console.log(`ok - ${label}`);
};

// The client bundle the browser half loads at /plugins/<id>/client.js.
check("lib/client.js exists", existsSync(join(root, "lib/client.js")));
// The bundle mount layer `dsh plugin add` reconciles into dsh.profile.bundles.
check("cordis.patch.yml exists", existsSync(join(root, "cordis.patch.yml")));
check("dsh.bundle.patch declared", typeof manifest.dsh?.bundle?.patch === "string");
check("dsh.client.platform is web", manifest.dsh?.client?.platform === "web");
check("exports[./client] present", typeof manifest.exports?.["./client"] === "string");

const client = readFileSync(join(root, "lib/client.js"), "utf8");
check("client bundle id matches package name", client.includes(`id: "${manifest.name}"`));
check("client bundle registers a factory", client.includes("window.__ModuleLoader__.load"));

if (failures.length > 0) {
  console.error(`\nprepublish check failed:\n  - ${failures.join("\n  - ")}`);
  process.exit(1);
}
console.log("\nready to publish");
