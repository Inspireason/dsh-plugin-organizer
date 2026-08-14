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
		const { IconChevronDownOutline14, IconSearchOutline16 } = _deepseek_ai_dsh_client_ui_primitives;
		//#region \0dsh-css:dsh-plugin-organizer/GroupedInventoryTab.module.css
		const css = ".dpo_section{width:100%;max-width:760px;color:var(--dsw-alias-label-primary);flex-direction:column;gap:14px;display:flex}.dpo_status,.dpo_failure p{margin:0}.dpo_status,.dpo_failure{color:var(--dsw-alias-label-tertiary);font-size:13px;line-height:20px}.dpo_failure{color:var(--dsw-alias-state-error-primary);align-items:center;gap:10px;display:flex}.dpo_failure button{border:1px solid var(--dsw-alias-border-l2);color:var(--dsw-alias-label-primary);font:inherit;cursor:pointer;background:0 0;border-radius:6px;padding:4px 10px}.dpo_catalog{flex-direction:column;gap:12px;display:flex}.dpo_search{width:100%;color:var(--dsw-alias-label-tertiary);align-items:center;display:flex;position:relative}.dpo_search>svg{pointer-events:none;position:absolute;left:12px}.dpo_search input{border:1px solid var(--dsw-alias-border-l2);background:var(--dsw-alias-bg-layer-1);width:100%;height:36px;color:var(--dsw-alias-label-primary);font:inherit;border-radius:8px;outline:none;padding:0 34px 0 36px;font-size:13px}.dpo_search input::placeholder{color:var(--dsw-alias-label-tertiary)}.dpo_search input:focus-visible{border-color:var(--dsw-alias-state-business-primary);box-shadow:0 0 0 2px color-mix(in srgb, var(--dsw-alias-state-business-primary) 18%, transparent)}.dpo_toolbar{justify-content:flex-end;align-items:center;gap:8px;display:flex}.dpo_toolbar button{border:1px solid var(--dsw-alias-border-l2);color:var(--dsw-alias-label-secondary);font:inherit;cursor:pointer;background:0 0;border-radius:6px;padding:3px 10px;font-size:12px;line-height:18px}.dpo_toolbar button:hover{color:var(--dsw-alias-label-primary);border-color:var(--dsw-alias-label-dimmed)}.dpo_group{flex-direction:column;gap:8px;display:flex}.dpo_groupHead{width:100%;box-sizing:border-box;color:var(--dsw-alias-label-primary);font:inherit;text-align:left;cursor:pointer;background:var(--dsw-alias-bg-layer-3);border:1px solid var(--dsw-alias-border-l2);border-radius:10px;align-items:center;gap:8px;padding:10px 12px;display:flex}.dpo_groupHead:hover{border-color:var(--dsw-alias-label-dimmed)}.dpo_groupHead:focus-visible{outline:2px solid var(--dsw-alias-state-business-primary);outline-offset:-2px}.dpo_groupTitle{min-width:0;flex:1;font-size:13px;font-weight:600;line-height:20px}.dpo_groupCount{color:var(--dsw-alias-label-tertiary);font-variant-numeric:tabular-nums;font-size:12px;line-height:18px}.dpo_chevron{color:var(--dsw-alias-label-tertiary);flex:none;transition:transform .14s var(--ds-ease-in-out)}.dpo_group[data-open=true] .dpo_groupHead .dpo_chevron{transform:rotate(180deg)}.dpo_cards{grid-template-columns:repeat(2,minmax(0,1fr));align-items:start;gap:10px;margin:0;padding:0;list-style:none;display:grid}.dpo_card{border:1px solid var(--dsw-alias-border-l2);background:var(--dsw-alias-bg-layer-3);border-radius:10px;min-width:0;overflow:hidden}.dpo_card[data-open=true]{border-color:var(--dsw-alias-border-l1);box-shadow:var(--dsw-shadow-lv1)}.dpo_cardContent{box-sizing:border-box;width:100%;min-height:52px;color:inherit;font:inherit;text-align:left;cursor:pointer;background:0 0;border:0;justify-content:space-between;align-items:center;gap:12px;padding:12px 14px;display:flex}.dpo_cardContent:hover,.dpo_card[data-open=true]>.dpo_cardContent{background:var(--dsw-alias-interactive-bg-hover)}.dpo_cardContent:focus-visible{outline:2px solid var(--dsw-alias-state-business-primary);outline-offset:-2px}.dpo_cardTitle{text-overflow:ellipsis;white-space:nowrap;min-width:0;font-size:14px;font-weight:600;line-height:20px;overflow:hidden}.dpo_cardTrailing{color:var(--dsw-alias-label-tertiary);flex:none;align-items:center;gap:7px;display:inline-flex}.dpo_statusDot{background:var(--dsw-alias-label-tertiary);border-radius:999px;flex:none;width:7px;height:7px;display:inline-block}.dpo_statusDot[data-phase=active]{background:var(--dsw-alias-state-success-primary)}.dpo_statusDot[data-phase=failed]{background:var(--dsw-alias-state-error-primary)}.dpo_statusDot[data-phase=loading]{background:var(--dsw-alias-state-business-primary)}.dpo_configTag{background:var(--dsw-alias-bg-layer-1);min-height:20px;color:var(--dsw-alias-label-secondary);white-space:nowrap;border-radius:5px;align-items:center;padding:1px 6px;font-size:11px;line-height:16px;display:inline-flex}.dpo_configTag[data-enabled=true]{background:color-mix(in srgb, var(--dsw-alias-state-success-primary) 10%, transparent);color:var(--dsw-alias-state-success-primary)}.dpo_cardDetails{border-top:1px solid var(--dsw-alias-border-l2);background:var(--dsw-alias-bg-module-platform);padding:10px 14px 12px}.dpo_entryValue{overflow-wrap:anywhere;color:var(--dsw-alias-label-primary);font-family:var(--ds-font-family-code);font-size:12px;line-height:18px;display:block}.dpo_details{grid-template-columns:76px minmax(0,1fr);gap:6px 10px;margin:8px 0 0;display:grid}.dpo_details div{display:contents}.dpo_details dt{color:var(--dsw-alias-label-tertiary);font-size:11px;line-height:17px}.dpo_details dd{overflow-wrap:anywhere;min-width:0;color:var(--dsw-alias-label-secondary);margin:0;font-size:12px;line-height:17px}.dpo_visuallyHidden{clip:rect(0 0 0 0);clip-path:inset(50%);white-space:nowrap;width:1px;height:1px;position:absolute;overflow:hidden}.dpo_empty{color:var(--dsw-alias-label-tertiary);margin:0;font-size:13px}@media (prefers-reduced-motion:no-preference){.dpo_chevron{transition:transform .14s var(--ds-ease-in-out)}}@media (width<=680px){.dpo_cards{grid-template-columns:minmax(0,1fr)}}";
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
			group: "dpo_group",
			groupHead: "dpo_groupHead",
			groupTitle: "dpo_groupTitle",
			groupCount: "dpo_groupCount",
			chevron: "dpo_chevron",
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
		//#endregion
		//#region lib/types/client/GroupedInventoryTab.js
		/**
		* Grouped plugin inventory: official (@deepseek-ai/*) and third-party
		* sections, each collapsible, with the same per-plugin cards as the flat
		* inventory tab. Official plugins are collapsed by default — they dominate
		* the list — while third-party plugins start expanded.
		*/
		function GroupedInventoryTab({ list, t }) {
			const catalogId = react.useId();
			const [request, setRequest] = react.useState(0);
			const [query, setQuery] = react.useState("");
			const [state, setState] = react.useState({ status: "loading" });
			const [expanded, setExpanded] = react.useState(null);
			const [collapsed, setCollapsed] = react.useState({ official: true, thirdParty: false });
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
			const toggleGroup = (kind) => {
				setCollapsed((previous) => ({ ...previous, [kind]: !previous[kind] }));
			};
			const expandAll = () => setCollapsed({ official: false, thirdParty: false });
			const collapseAll = () => setCollapsed({ official: true, thirdParty: true });
			const renderCard = (entry) => {
				const status = phaseLabel(entry.fiberPhase, t);
				const title = moduleShortName(entry.moduleName);
				const configuration = t(entry.enabled ? "enabledTag" : "disabledTag");
				const open = expanded === entry.entryId;
				const detailId = `${catalogId}-details-${encodeURIComponent(entry.entryId)}`;
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
										jsx(IconChevronDownOutline14, { className: styles.chevron, size: 12, "aria-hidden": "true" })
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
								})
							]
						}) : null
					]
				}, entry.entryId);
			};
			const renderGroup = (kind, title, entries) => {
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
								jsx(IconChevronDownOutline14, { className: styles.chevron, size: 14, "aria-hidden": "true" }),
								jsx("span", { className: styles.groupTitle, children: title }),
								jsx("span", {
									className: styles.groupCount,
									"data-group-count": entries.length,
									children: entries.length
								})
							]
						}),
						open ? jsx("ul", {
							id: groupId,
							className: styles.cards,
							children: entries.map(renderCard)
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
									jsx("button", { type: "button", onClick: expandAll, children: t("expandAll") }),
									jsx("button", { type: "button", onClick: collapseAll, children: t("collapseAll") })
								]
							}),
							state.snapshot.entries.length === 0 ? jsx("p", { className: styles.empty, children: t("empty") }) : null,
							state.snapshot.entries.length > 0 && filteredEntries.length === 0 ? jsx("p", { className: styles.empty, children: t("emptySearch") }) : null,
							filteredEntries.length > 0 ? jsxs(Fragment, {
								children: [
									renderGroup("official", t("official"), official),
									renderGroup("thirdParty", t("thirdParty"), thirdParty)
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
			expandAll: "全部展开",
			collapseAll: "全部折叠",
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
			unloading: "卸载中"
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
			expandAll: "Expand all",
			collapseAll: "Collapse all",
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
			unloading: "Unloading"
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
