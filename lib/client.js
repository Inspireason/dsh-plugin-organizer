window.__ModuleLoader__.load({
	id: "dsh-plugin-organizer",
	factory: (require) => {
		var module = { exports: {} };
		var exports = module.exports;
		Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
		let react_jsx_runtime = require("react/jsx-runtime");
		let react = require("react");
		let _deepseek_ai_dsh_client_ui_primitives = require("@deepseek-ai/dsh-client-ui-primitives");
		const { jsx, jsxs, Fragment } = react_jsx_runtime;
		const { IconChevronRightOutline14, IconChevronLeftOutline14, IconSearchOutline16, IconFolderClose16, IconFolderOpen16 } = _deepseek_ai_dsh_client_ui_primitives;
		//#region \0dsh-css:dsh-plugin-organizer/GroupedInventoryTab.module.css
		const css = ".dpo_section{width:100%;max-width:760px;color:var(--dsw-alias-label-primary);flex-direction:column;gap:14px;display:flex}.dpo_status,.dpo_failure p{margin:0}.dpo_status,.dpo_failure{color:var(--dsw-alias-label-tertiary);font-size:13px;line-height:20px}.dpo_failure{color:var(--dsw-alias-state-error-primary);align-items:center;gap:10px;display:flex}.dpo_failure button{border:1px solid var(--dsw-alias-border-l2);color:var(--dsw-alias-label-primary);font:inherit;cursor:pointer;background:0 0;border-radius:6px;padding:4px 10px}.dpo_catalog{flex-direction:column;gap:12px;display:flex}.dpo_search{width:100%;color:var(--dsw-alias-label-tertiary);align-items:center;display:flex;position:relative}.dpo_search>svg{pointer-events:none;position:absolute;left:12px}.dpo_search input{border:1px solid var(--dsw-alias-border-l2);background:var(--dsw-alias-bg-layer-1);width:100%;height:36px;color:var(--dsw-alias-label-primary);font:inherit;border-radius:8px;outline:none;padding:0 34px 0 36px;font-size:13px}.dpo_search input::placeholder{color:var(--dsw-alias-label-tertiary)}.dpo_search input:focus-visible{border-color:var(--dsw-alias-state-business-primary);box-shadow:0 0 0 2px color-mix(in srgb, var(--dsw-alias-state-business-primary) 18%, transparent)}.dpo_toolbar{justify-content:space-between;align-items:center;gap:8px;display:flex}.dpo_toolbarLeft{flex:1}.dpo_toolbarRight{align-items:center;gap:6px;display:flex}.dpo_toolbar button{border:1px solid var(--dsw-alias-border-l2);color:var(--dsw-alias-label-secondary);font:inherit;cursor:pointer;background:0 0;border-radius:6px;padding:3px 10px;font-size:12px;line-height:18px}.dpo_toolbar button:hover{color:var(--dsw-alias-label-primary);border-color:var(--dsw-alias-label-dimmed)}.dpo_group{flex-direction:column;gap:8px;display:flex}.dpo_groupHead{width:100%;box-sizing:border-box;color:var(--dsw-alias-label-primary);font:inherit;text-align:left;cursor:pointer;background:var(--dsw-alias-bg-layer-3);border:1px solid var(--dsw-alias-border-l2);border-radius:10px;align-items:center;gap:8px;padding:10px 12px;display:flex}.dpo_groupHead:hover{border-color:var(--dsw-alias-label-dimmed)}.dpo_groupHead:focus-visible{outline:2px solid var(--dsw-alias-state-business-primary);outline-offset:-2px}.dpo_groupTitle{min-width:0;flex:1;font-size:13px;font-weight:600;line-height:20px}.dpo_groupCount{color:var(--dsw-alias-label-tertiary);font-variant-numeric:tabular-nums;font-size:12px;line-height:18px}.dpo_chevron{color:var(--dsw-alias-label-tertiary);flex:none;transition:transform .14s var(--ds-ease-in-out)}.dpo_group[data-open=true] .dpo_groupHead .dpo_chevron{transform:rotate(90deg)}.dpo_subgroups{flex-direction:column;gap:8px;display:flex}.dpo_subgroup{flex-direction:column;gap:6px;display:flex}.dpo_subgroupHead{width:100%;box-sizing:border-box;color:var(--dsw-alias-label-secondary);font:inherit;text-align:left;cursor:pointer;background:var(--dsw-alias-bg-layer-1);border:1px solid var(--dsw-alias-border-l2);border-radius:8px;align-items:center;gap:6px;padding:6px 10px;display:flex}.dpo_subgroupHead:hover{border-color:var(--dsw-alias-label-dimmed)}.dpo_subgroupTitle{min-width:0;flex:1;font-size:12px;font-weight:500;line-height:18px}.dpo_subgroupCount{color:var(--dsw-alias-label-tertiary);font-variant-numeric:tabular-nums;font-size:11px;line-height:17px}.dpo_subgroup[data-open=true] .dpo_subgroupHead .dpo_chevron{transform:rotate(-90deg)}.dpo_card[data-open=true] .dpo_chevron{transform:rotate(90deg)}.dpo_cards{grid-template-columns:repeat(2,minmax(0,1fr));align-items:start;gap:10px;margin:0;padding:0;list-style:none;display:grid}.dpo_card{border:1px solid var(--dsw-alias-border-l2);background:var(--dsw-alias-bg-layer-3);border-radius:10px;min-width:0;overflow:hidden}.dpo_card[data-open=true]{border-color:var(--dsw-alias-border-l1);box-shadow:var(--dsw-shadow-lv1)}.dpo_cardContent{box-sizing:border-box;width:100%;min-height:52px;color:inherit;font:inherit;text-align:left;cursor:pointer;background:0 0;border:0;justify-content:space-between;align-items:center;gap:12px;padding:12px 14px;display:flex}.dpo_cardContent:hover,.dpo_card[data-open=true]>.dpo_cardContent{background:var(--dsw-alias-interactive-bg-hover)}.dpo_cardContent:focus-visible{outline:2px solid var(--dsw-alias-state-business-primary);outline-offset:-2px}.dpo_cardTitle{text-overflow:ellipsis;white-space:nowrap;min-width:0;font-size:14px;font-weight:600;line-height:20px;overflow:hidden}.dpo_cardTrailing{color:var(--dsw-alias-label-tertiary);flex:none;align-items:center;gap:7px;display:inline-flex}.dpo_statusDot{background:var(--dsw-alias-label-tertiary);border-radius:999px;flex:none;width:7px;height:7px;display:inline-block}.dpo_statusDot[data-phase=active]{background:var(--dsw-alias-state-success-primary)}.dpo_statusDot[data-phase=failed]{background:var(--dsw-alias-state-error-primary)}.dpo_statusDot[data-phase=loading]{background:var(--dsw-alias-state-business-primary)}.dpo_configTag{background:var(--dsw-alias-bg-layer-1);min-height:20px;color:var(--dsw-alias-label-secondary);white-space:nowrap;border-radius:5px;align-items:center;padding:1px 6px;font-size:11px;line-height:16px;display:inline-flex}.dpo_configTag[data-enabled=true]{background:color-mix(in srgb, var(--dsw-alias-state-success-primary) 10%, transparent);color:var(--dsw-alias-state-success-primary)}.dpo_cardDetails{border-top:1px solid var(--dsw-alias-border-l2);background:var(--dsw-alias-bg-module-platform);padding:10px 14px 12px}.dpo_entryValue{overflow-wrap:anywhere;color:var(--dsw-alias-label-primary);font-family:var(--ds-font-family-code);font-size:12px;line-height:18px;display:block}.dpo_details{grid-template-columns:76px minmax(0,1fr);gap:6px 10px;margin:8px 0 0;display:grid}.dpo_details div{display:contents}.dpo_details dt{color:var(--dsw-alias-label-tertiary);font-size:11px;line-height:17px}.dpo_details dd{overflow-wrap:anywhere;min-width:0;color:var(--dsw-alias-label-secondary);margin:0;font-size:12px;line-height:17px}.dpo_assign{grid-template-columns:1fr auto;gap:8px;align-items:center;margin-top:10px;display:grid}.dpo_assign select{border:1px solid var(--dsw-alias-border-l2);background:var(--dsw-alias-bg-layer-1);height:30px;color:var(--dsw-alias-label-primary);font:inherit;border-radius:6px;padding:0 8px;font-size:12px}.dpo_assign button{border:1px solid var(--dsw-alias-border-l2);color:var(--dsw-alias-label-secondary);font:inherit;cursor:pointer;background:0 0;border-radius:6px;padding:3px 10px;font-size:12px}.dpo_assign button:hover{color:var(--dsw-alias-label-primary);border-color:var(--dsw-alias-label-dimmed)}.dpo_visuallyHidden{clip:rect(0 0 0 0);clip-path:inset(50%);white-space:nowrap;width:1px;height:1px;position:absolute;overflow:hidden}.dpo_empty{color:var(--dsw-alias-label-tertiary);margin:0;font-size:13px}@media (prefers-reduced-motion:no-preference){.dpo_chevron{transition:transform .14s var(--ds-ease-in-out)}}@media (width<=680px){.dpo_cards{grid-template-columns:minmax(0,1fr)}}";
		const tagId = "dsh-plugin-organizer/GroupedInventoryTab.module.css";
		if (typeof document !== "undefined" && document.querySelector("style[data-plugin-css=" + JSON.stringify(tagId) + "]") === null) {
			const tag = document.createElement("style");
			tag.dataset.plugin = "dsh-plugin-organizer";
			tag.dataset.pluginCss = tagId;
			tag.textContent = css;
			document.head.appendChild(tag);
		}
		//#endregion
		const styles = {
			section: "dpo_section",
			catalog: "dpo_catalog",
			search: "dpo_search",
			visuallyHidden: "dpo_visuallyHidden",
			toolbar: "dpo_toolbar",
			toolbarLeft: "dpo_toolbarLeft",
			toolbarRight: "dpo_toolbarRight",
			group: "dpo_group",
			groupHead: "dpo_groupHead",
			groupTitle: "dpo_groupTitle",
			groupCount: "dpo_groupCount",
			chevron: "dpo_chevron",
			subgroups: "dpo_subgroups",
			subgroup: "dpo_subgroup",
			subgroupHead: "dpo_subgroupHead",
			subgroupTitle: "dpo_subgroupTitle",
			subgroupCount: "dpo_subgroupCount",
			cards: "dpo_cards",
			card: "dpo_card",
			cardContent: "dpo_cardContent",
			cardTitle: "dpo_cardTitle",
			cardTrailing: "dpo_cardTrailing",
			statusDot: "dpo_statusDot",
			configTag: "dpo_configTag",
			cardDetails: "dpo_cardDetails",
			entryValue: "dpo_entryValue",
			details: "dpo_details",
			assign: "dpo_assign",
			status: "dpo_status",
			failure: "dpo_failure",
			empty: "dpo_empty"
		};
		//#region lib/types/client/helpers.js
		/** Localized accessible label for one root Fiber phase. */
		const PHASE_KEYS = {
			pending: "pending",
			loading: "loadingPhase",
			active: "active",
			failed: "failed",
			unloading: "unloading"
		};
		/** Localized accessible label for one root Fiber phase. */
		function phaseLabel(phase, t) {
			return phase === null ? t("unobserved") : t(PHASE_KEYS[phase]);
		}
		/** Compact a module specifier without guessing whether its Loader id was generated. */
		function moduleShortName(moduleName) {
			return (moduleName.startsWith("@") ? moduleName.slice(moduleName.indexOf("/") + 1) : moduleName).replace(/^cordis:/, "").replace(/^cordis-plugin-/, "").replace(/^dsh-(?:host-|client-)?/, "");
		}
		/** Whether an inventory row matches the local catalog query. */
		function matches(entry, normalizedQuery) {
			if (normalizedQuery.length === 0) return true;
			return [entry.moduleName, entry.entryId].some((value) => value.toLocaleLowerCase().includes(normalizedQuery));
		}
		/** Lowercase a value for matching; tolerate undefined. */
		function norm(value) {
			return (value ?? "").toLocaleLowerCase();
		}
		/** Read a JSON object from localStorage; returns {} on absence/malformation. */
		function readStore(key) {
			try {
				const raw = globalThis.localStorage?.getItem(key);
				return raw ? JSON.parse(raw) : {};
			} catch {
				return {};
			}
		}
		/** Write a JSON object to localStorage (no-op when unavailable). */
		function writeStore(key, value) {
			try {
				globalThis.localStorage?.setItem(key, JSON.stringify(value));
			} catch {}
		}
		//#endregion
		//#region lib/types/client/classify.js
		/**
		* Third-party purpose categories, matched against module name + entry id.
		* The inventory remote exposes no description, so classification relies on
		* the package/entry naming vocabulary.
		*/
		const CATEGORY_RULES = [
			{ id: "ui", keywords: ["sidebar", "theme", "layout", "panel", "view", "editor", "terminal", "browser", "tray", "ui", "web"] },
			{ id: "agents", keywords: ["agent", "team", "subagent", "workflow", "dispatch", "spawn", "collab"] },
			{ id: "permission", keywords: ["permission", "approval", "sandbox", "security", "policy", "mode", "auto"] },
			{ id: "vision", keywords: ["vision", "image", "image-", "matting", "matte", "ocr", "see", "visual"] },
			{ id: "obsidian", keywords: ["obsidian", "vault", "note", "markdown"] },
			{ id: "tooling", keywords: ["tool", "organizer", "organize", "manager", "inventory", "search", "fetch", "extract", "collect", "storage", "sync"] }
		];
		/** Display order for third-party categories. */
		const CATEGORY_ORDER = ["ui", "agents", "permission", "vision", "obsidian", "tooling", "other"];
		/** localStorage keys for manual assignments / custom labels / collapse state. */
		const ASSIGN_KEY = "dsh-plugin-organizer.assignments.v1";
		const LABEL_KEY = "dsh-plugin-organizer.labels.v1";
		const COLLAPSE_KEY = "dsh-plugin-organizer.collapsed.v1";
		/** Auto-classify one third-party plugin by keyword match on module name + entry id. */
		function autoCategory(entry) {
			const haystack = norm(entry.moduleName) + " " + norm(entry.entryId);
			for (const rule of CATEGORY_RULES) if (rule.keywords.some((k) => haystack.includes(k))) return rule.id;
			return "other";
		}
		//#endregion
		//#region lib/types/client/GroupedInventoryTab.js
		/**
		* Grouped plugin inventory: official (@deepseek-ai/*) and third-party
		* sections, each collapsible. Third-party plugins are further grouped into
		* purpose categories (auto keyword match + manual assignment, persisted in
		* localStorage), each category collapsible.
		*/
		function GroupedInventoryTab({ list, t }) {
			const catalogId = react.useId();
			const [request, setRequest] = react.useState(0);
			const [query, setQuery] = react.useState("");
			const [state, setState] = react.useState({ status: "loading" });
			const [expanded, setExpanded] = react.useState(null);
			const [collapsed, setCollapsed] = react.useState(() => readStore(COLLAPSE_KEY));
			const [assignments, setAssignments] = react.useState(() => readStore(ASSIGN_KEY));
			const [labels, setLabels] = react.useState(() => readStore(LABEL_KEY));
			const [picking, setPicking] = react.useState(null);
			const [pendingAssign, setPendingAssign] = react.useState("");
			react.useEffect(() => {
				let current = true;
				Promise.resolve().then(() => list()).then((snapshot) => {
					if (current) setState({ status: "ready", snapshot });
				}, () => {
					if (current) setState({ status: "error" });
				});
				return () => {
					current = false;
				};
			}, [list, request]);
			const normalizedQuery = query.trim().toLocaleLowerCase();
			const filteredEntries = react.useMemo(() => state.status === "ready" ? state.snapshot.entries.filter((entry) => matches(entry, normalizedQuery)) : [], [normalizedQuery, state]);
			react.useEffect(() => {
				if (expanded !== null && !filteredEntries.some((entry) => entry.entryId === expanded)) setExpanded(null);
			}, [expanded, filteredEntries]);
			const retry = () => {
				setState({ status: "loading" });
				setRequest((value) => value + 1);
			};
			const searching = normalizedQuery.length > 0;
			/**
			* Official plugins are DSH/Cordis built-ins: every @deepseek-ai/* package
			* plus the cordis:* pseudo-modules (the root `cordis:include` config-tree
			* loader, etc.). Everything else is third-party.
			*/
			const isOfficial = (moduleName) => moduleName.startsWith("@deepseek-ai/") || moduleName.startsWith("cordis:");
			const official = filteredEntries.filter((entry) => isOfficial(entry.moduleName));
			const thirdParty = filteredEntries.filter((entry) => !isOfficial(entry.moduleName));
			// Third-party category membership: manual assignment wins; otherwise auto keyword match.
			const categoryOf = (entry) => assignments[entry.entryId] ?? autoCategory(entry);
			const categoryIds = [...new Set([...CATEGORY_ORDER, ...thirdParty.map(categoryOf)])];
			const subgroups = categoryIds.map((id) => ({
				id,
				label: labels[id] ?? t(`cat.${id}`),
				entries: thirdParty.filter((entry) => categoryOf(entry) === id)
			})).filter((group) => group.entries.length > 0);
			const toggleGroup = (kind) => {
				const next = { ...collapsed, [kind]: !collapsed[kind] };
				writeStore(COLLAPSE_KEY, next);
				setCollapsed(next);
			};
			const expandAll = () => {
				writeStore(COLLAPSE_KEY, {});
				setCollapsed({});
			};
			const collapseAll = () => {
				const next = {};
				for (const kind of ["official", "thirdParty", ...subgroups.map((g) => `sub:${g.id}`)]) next[kind] = true;
				writeStore(COLLAPSE_KEY, next);
				setCollapsed(next);
			};
			const resetAssignments = () => {
				writeStore(ASSIGN_KEY, {});
				writeStore(LABEL_KEY, {});
				setAssignments({});
				setLabels({});
			};
			const startPick = (entry) => {
				setPicking(entry.entryId);
				setPendingAssign(categoryOf(entry));
			};
			const commitAssign = () => {
				if (picking === null) return;
				const next = { ...assignments };
				const auto = autoCategory({ moduleName: picking, entryId: picking });
				if (pendingAssign === "" || pendingAssign === auto) delete next[picking];
				else next[picking] = pendingAssign;
				writeStore(ASSIGN_KEY, next);
				setAssignments(next);
				setPicking(null);
				setPendingAssign("");
			};
			const renderCard = (entry) => {
				const status = phaseLabel(entry.fiberPhase, t);
				const title = moduleShortName(entry.moduleName);
				const configuration = t(entry.enabled ? "enabledTag" : "disabledTag");
				const open = expanded === entry.entryId;
				const detailId = `${catalogId}-details-${encodeURIComponent(entry.entryId)}`;
				const pickingThis = picking === entry.entryId;
				return jsxs("li", {
					className: styles.card,
					"data-plugin-entry": entry.entryId,
					"data-open": open ? "true" : void 0,
					children: [
						jsxs("button", {
							className: styles.cardContent,
							type: "button",
							"aria-expanded": open,
							"aria-controls": detailId,
							"aria-label": entry.enabled ? `${title}, ${status}, ${configuration}` : `${title}, ${configuration}`,
							onClick: () => {
								setExpanded((current) => current === entry.entryId ? null : entry.entryId);
							},
							children: [
								jsx("strong", { className: styles.cardTitle, title: entry.moduleName, children: title }),
								jsxs("span", {
									className: styles.cardTrailing,
									children: [
										entry.enabled ? jsx("span", {
											className: styles.statusDot,
											"data-phase": entry.fiberPhase ?? "unobserved",
											role: "img",
											"aria-label": status,
											title: status
										}) : null,
										jsx("span", {
											className: styles.configTag,
											"data-enabled": entry.enabled ? "true" : "false",
											children: configuration
										}),
										jsx(IconChevronRightOutline14, { className: styles.chevron, size: 12, "aria-hidden": "true" })
									]
								})
							]
						}),
						open ? jsxs("div", {
							className: styles.cardDetails,
							id: detailId,
							children: [
								jsx("code", {
									className: styles.entryValue,
									"data-loader-entry": true,
									children: entry.entryId
								}),
								jsxs("dl", {
									className: styles.details,
									children: [
										jsxs("div", { children: [jsx("dt", { children: t("configuration") }), jsx("dd", { children: configuration })] }),
										entry.enabled ? jsxs("div", { children: [jsx("dt", { children: t("cordis") }), jsx("dd", { children: status })] }) : null
									]
								}),
								jsxs("div", {
									className: styles.assign,
									children: [
										pickingThis ? jsxs(Fragment, {
											children: [
												jsx("select", {
													"aria-label": t("assignTo"),
													value: pendingAssign,
													onChange: (event) => {
														setPendingAssign(event.currentTarget.value);
													},
													children: [
														jsx("option", { value: "", children: t("auto") }),
														...subgroups.map((g) => jsx("option", { value: g.id, children: g.label }, g.id))
													]
												}),
												jsx("button", { type: "button", onClick: commitAssign, children: t("save") })
											]
										}) : jsx("button", {
											type: "button",
											onClick: () => startPick(entry),
											children: t("assign")
										})
									]
								})
							]
						}) : null
					]
				}, entry.entryId);
			};
			const renderSubgroup = (group) => {
				const open = searching || !collapsed[`sub:${group.id}`];
				const groupId = `${catalogId}-subgroup-${group.id}`;
				return jsxs("section", {
					className: styles.subgroup,
					"data-open": open ? "true" : void 0,
					"data-subgroup": group.id,
					children: [
						jsxs("button", {
							type: "button",
							className: styles.subgroupHead,
							"aria-expanded": open,
							"aria-controls": groupId,
							onClick: () => toggleGroup(`sub:${group.id}`),
							children: [
								jsx(IconFolderClose16, { size: 13, "aria-hidden": "true" }),
								jsx("span", { className: styles.subgroupTitle, children: group.label }),
								jsx("span", {
									className: styles.subgroupCount,
									"data-subgroup-count": group.entries.length,
									children: group.entries.length
								}),
								jsx(IconChevronLeftOutline14, { className: styles.chevron, size: 12, "aria-hidden": "true" })
							]
						}),
						open ? jsx("ul", {
							id: groupId,
							className: styles.cards,
							children: group.entries.map(renderCard)
						}) : null
					]
				}, group.id);
			};
			const renderGroup = (kind, title, entries, children) => {
				const open = searching || !collapsed[kind];
				const groupId = `${catalogId}-group-${kind}`;
				return jsxs("section", {
					className: styles.group,
					"data-open": open ? "true" : void 0,
					children: [
						jsxs("button", {
							type: "button",
							className: styles.groupHead,
							"aria-expanded": open,
							"aria-controls": groupId,
							onClick: () => toggleGroup(kind),
							children: [
								jsx(IconChevronRightOutline14, { className: styles.chevron, size: 14, "aria-hidden": "true" }),
								jsx("span", { className: styles.groupTitle, children: title }),
								jsx("span", {
									className: styles.groupCount,
									"data-group-count": entries.length,
									children: entries.length
								})
							]
						}),
						open ? jsx("div", {
							id: groupId,
							className: styles.subgroups,
							children
						}) : null
					]
				}, kind);
			};
			return jsxs("div", {
				className: styles.section,
				"aria-busy": state.status === "loading",
				children: [
					state.status === "loading" ? jsx("p", { className: styles.status, children: t("loading") }) : null,
					state.status === "error" ? jsxs("div", {
						className: styles.failure,
						children: [
							jsx("p", { role: "alert", children: t("error") }),
							jsx("button", { type: "button", onClick: retry, children: t("retry") })
						]
					}) : null,
					state.status === "ready" ? jsxs("div", {
						className: styles.catalog,
						children: [
							jsxs("label", {
								className: styles.search,
								children: [
									jsx(IconSearchOutline16, { "aria-hidden": "true" }),
									jsx("span", { className: styles.visuallyHidden, children: t("search") }),
									jsx("input", {
										type: "search",
										value: query,
										placeholder: t("search"),
										"aria-label": t("search"),
										onChange: (event) => {
											setQuery(event.currentTarget.value);
										}
									})
								]
							}),
							jsxs("div", {
								className: styles.toolbar,
								children: [
									jsx("div", { className: styles.toolbarLeft, children: jsx("span", { className: styles.empty, children: t("autoHint") }) }),
									jsxs("div", {
										className: styles.toolbarRight,
										children: [
											jsx("button", { type: "button", onClick: expandAll, children: t("expandAll") }),
											jsx("button", { type: "button", onClick: collapseAll, children: t("collapseAll") }),
											jsx("button", { type: "button", onClick: resetAssignments, children: t("reset") })
										]
									})
								]
							}),
							state.snapshot.entries.length === 0 ? jsx("p", { className: styles.empty, children: t("empty") }) : null,
							state.snapshot.entries.length > 0 && filteredEntries.length === 0 ? jsx("p", { className: styles.empty, children: t("emptySearch") }) : null,
							filteredEntries.length > 0 ? jsxs(Fragment, {
								children: [
									renderGroup("official", t("official"), official, jsx("ul", { className: styles.cards, children: official.map(renderCard) })),
									renderGroup("thirdParty", t("thirdParty"), thirdParty, jsxs(Fragment, { children: subgroups.map(renderSubgroup) }))
								]
							}) : null
						]
					}) : null
				]
			});
		}
		//#endregion
		//#region lib/types/client/locales.js
		/** Copy dictionaries for the grouped inventory Settings tab. */
		/** Simplified Chinese dictionary and key source of truth. */
		const zh = {
			tab: "官方/第三方",
			loading: "正在读取插件…",
			error: "暂时无法读取插件。",
			retry: "重试",
			search: "搜索插件",
			official: "官方插件",
			thirdParty: "第三方插件",
			autoHint: "第三方插件按用途自动分组，点卡片可手动调整",
			expandAll: "全部展开",
			collapseAll: "全部折叠",
			reset: "恢复自动分类",
			empty: "暂无插件。",
			emptySearch: "没有匹配的插件。",
			enabledTag: "已启用",
			disabledTag: "已停用",
			configuration: "配置状态",
			cordis: "Cordis 状态",
			unobserved: "未挂载",
			pending: "等待依赖",
			loadingPhase: "加载中",
			active: "已挂载",
			failed: "挂载失败",
			unloading: "卸载中",
			assign: "调整分类",
			assignTo: "移动到分类",
			auto: "自动推荐",
			save: "保存",
			"cat.ui": "界面/工作台",
			"cat.agents": "Agent 协作",
			"cat.permission": "权限/安全",
			"cat.vision": "视觉/图片",
			"cat.obsidian": "Obsidian",
			"cat.tooling": "管理/工具",
			"cat.other": "其他"
		};
		/** English dictionary checked against the Chinese key set. */
		const en = {
			tab: "Official / 3rd-party",
			loading: "Reading plugins…",
			error: "Plugins are temporarily unavailable.",
			retry: "Retry",
			search: "Search plugins",
			official: "Official plugins",
			thirdParty: "Third-party plugins",
			autoHint: "Third-party plugins auto-grouped by purpose; open a card to reassign",
			expandAll: "Expand all",
			collapseAll: "Collapse all",
			reset: "Reset to auto",
			empty: "No plugins are available.",
			emptySearch: "No matching plugins.",
			enabledTag: "Enabled",
			disabledTag: "Disabled",
			configuration: "Configuration",
			cordis: "Cordis status",
			unobserved: "Not mounted",
			pending: "Waiting for dependencies",
			loadingPhase: "Loading",
			active: "Mounted",
			failed: "Mount failed",
			unloading: "Unloading",
			assign: "Assign",
			assignTo: "Move to category",
			auto: "Auto",
			save: "Save",
			"cat.ui": "UI / workspace",
			"cat.agents": "Agent collaboration",
			"cat.permission": "Permission / security",
			"cat.vision": "Vision / images",
			"cat.obsidian": "Obsidian",
			"cat.tooling": "Management / tools",
			"cat.other": "Other"
		};
		//#endregion
		//#region lib/types/client/index.js
		/** Dictionary namespace owned by this plugin. */
		const NS = "settings.pluginOrganizer";
		/** Services required by the Settings registration and generated Remote face. */
		const inject = [
			"slots",
			"locale",
			"remote",
			"remote.pluginInventory"
		];
		/** Contribute the grouped inventory tab to the Plugins settings section. */
		function apply(ctx) {
			ctx.effect(() => ctx.locale.register(NS, {
				zh,
				en
			}), "plugin-organizer: dictionaries");
			const t = ctx.locale.bind(NS);
			const list = async () => {
				const result = await ctx.remote.pluginInventory.list();
				if (!result.ok) throw new Error(`pluginInventory.list failed: ${result.error.code}: ${result.error.message}`);
				return result.value;
			};
			const injected = () => ({ list });
			ctx.slots.inject("settings.plugins.tab", () => ctx.slots.register({
				name: "settings.plugins.tab",
				id: "grouped",
				order: 5,
				label: () => t("tab"),
				locale: NS,
				inject: injected
			}, GroupedInventoryTab));
		}
		//#endregion
		exports.NS = NS;
		exports.apply = apply;
		exports.inject = inject;
		return module.exports;
	}
});
