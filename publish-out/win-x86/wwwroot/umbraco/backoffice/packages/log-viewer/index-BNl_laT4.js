import { property as w, customElement as x, LitElement as Ie, ifDefined as B, html as s, css as P, queryAll as Be, state as h, query as N, when as He } from "@umbraco-cms/backoffice/external/lit";
import { U as q } from "./logviewer-workspace.context-token-uhPS_Su7.js";
import { debounce as Re, escapeHTML as Xe } from "@umbraco-cms/backoffice/utils";
import { LogLevelModel as Je, DirectionModel as ue } from "@umbraco-cms/backoffice/external/backend-api";
import { UmbLitElement as k } from "@umbraco-cms/backoffice/lit-element";
import { query as ee, path as de, toQueryString as te } from "@umbraco-cms/backoffice/router";
import { UmbTextStyles as ve } from "@umbraco-cms/backoffice/style";
import { U as Ke } from "./log-viewer-search-input-modal.modal-token-BOty9lVH.js";
import { Subject as Ye, tap as Ze, debounceTime as je } from "@umbraco-cms/backoffice/external/rxjs";
import { umbConfirmModal as et, umbOpenModal as tt } from "@umbraco-cms/backoffice/modal";
import "./log-viewer-search-input-modal.element-DMBMYwuM.js";
var it = Object.defineProperty, rt = Object.getOwnPropertyDescriptor, ge = (e, t, i, o) => {
  for (var r = o > 1 ? void 0 : o ? rt(t, i) : t, a = e.length - 1, l; a >= 0; a--)
    (l = e[a]) && (r = (o ? l(t, i, r) : l(r)) || r);
  return o && r && it(t, i, r), r;
};
let X = class extends Ie {
  constructor() {
    super(...arguments), this.levelMap = {
      Verbose: { look: "secondary" },
      Debug: {
        look: "primary",
        style: "background-color: var(--umb-log-viewer-debug-color)"
      },
      Information: { look: "primary", color: "positive" },
      Warning: { look: "primary", color: "warning" },
      Error: { look: "primary", color: "danger" },
      Fatal: {
        look: "primary",
        style: "background-color: var(--umb-log-viewer-fatal-color)"
      }
    };
  }
  render() {
    return s`<uui-tag
			look=${B(this.level ? this.levelMap[this.level]?.look : void 0)}
			color=${B(this.level ? this.levelMap[this.level]?.color : void 0)}
			style="${B(this.level ? this.levelMap[this.level]?.style : void 0)}"
			>${this.level}<slot></slot
		></uui-tag>`;
  }
};
ge([
  w()
], X.prototype, "level", 2);
X = ge([
  x("umb-log-viewer-level-tag")
], X);
var ot = Object.defineProperty, st = Object.getOwnPropertyDescriptor, me = (e) => {
  throw TypeError(e);
}, ie = (e, t, i, o) => {
  for (var r = o > 1 ? void 0 : o ? st(t, i) : t, a = e.length - 1, l; a >= 0; a--)
    (l = e[a]) && (r = (o ? l(t, i, r) : l(r)) || r);
  return o && r && ot(t, i, r), r;
}, re = (e, t, i) => t.has(e) || me("Cannot " + i), J = (e, t, i) => (re(e, t, "read from private field"), t.get(e)), he = (e, t, i) => t.has(e) ? me("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), at = (e, t, i, o) => (re(e, t, "write to private field"), t.set(e, i), i), y = (e, t, i) => (re(e, t, "access private method"), i), M, m, fe, I, _e, be, we;
let z = class extends k {
  constructor() {
    super(), he(this, m), this._logLevelFilter = [], he(this, M), this.setLogLevelDebounce = Re(y(this, m, I), 300), this.consumeContext(q, (e) => {
      at(this, M, e), y(this, m, fe).call(this);
    });
  }
  render() {
    return s`
			<umb-dropdown label="Select log levels">
				<span slot="label">
					Log Level:
					${this._logLevelFilter.length > 0 ? this._logLevelFilter.map((e) => s`<span class="log-level-button-indicator">${e}</span>`) : "All"}
				</span>
				${y(this, m, we).call(this)}
			</umb-dropdown>
		`;
  }
};
M = /* @__PURE__ */ new WeakMap();
m = /* @__PURE__ */ new WeakSet();
fe = function() {
  J(this, M) && this.observe(J(this, M).logLevelsFilter, (e) => {
    this._logLevelFilter = e ?? [];
  });
};
I = function() {
  if (!J(this, M)) return;
  const e = Array.from(this._logLevelSelectorCheckboxes).filter((i) => i.checked).map((i) => i.value);
  let t = ee();
  e.length ? t = { ...t, loglevels: e.join(",") } : delete t.loglevels, window.history.pushState({}, "", `${de()}?${te(t)}`);
};
_e = function() {
  this._logLevelSelectorCheckboxes.forEach((e) => e.checked = !0), y(this, m, I).call(this);
};
be = function() {
  this._logLevelSelectorCheckboxes.forEach((e) => e.checked = !1), y(this, m, I).call(this);
};
we = function() {
  return s`
			<div id="log-level-selector" @change=${this.setLogLevelDebounce}>
				${Object.values(Je).map(
    (e) => s`<uui-checkbox
							class="log-level-menu-item"
							.checked=${this._logLevelFilter.includes(e)}
							.value=${e}
							label="${e}">
							<umb-log-viewer-level-tag .level=${e}></umb-log-viewer-level-tag>
						</uui-checkbox>`
  )}
				<uui-button
					class="log-level-menu-item"
					@click=${y(this, m, _e)}
					label=${this.localize.term("general_selectAll")}></uui-button>
				<uui-button class="log-level-menu-item" @click=${y(this, m, be)} label="Deselect all"
					>Deselect all</uui-button
				>
			</div>
		`;
};
z.styles = [
  P`
			#log-level-selector {
				padding: var(--uui-box-default-padding, var(--uui-size-space-5, 18px));
				width: 150px;
				background-color: var(--uui-color-surface);
				box-shadow: var(--uui-shadow-depth-3);
				display: flex;
				flex-direction: column;
				gap: var(--uui-size-space-3);
			}

			.log-level-button-indicator {
				font-weight: 600;
			}

			.log-level-button-indicator:not(:last-of-type)::after {
				content: ', ';
			}
		`
];
ie([
  Be("#log-level-selector > uui-checkbox")
], z.prototype, "_logLevelSelectorCheckboxes", 2);
ie([
  h()
], z.prototype, "_logLevelFilter", 2);
z = ie([
  x("umb-log-viewer-log-level-filter-menu")
], z);
var lt = Object.defineProperty, nt = Object.getOwnPropertyDescriptor, ye = (e) => {
  throw TypeError(e);
}, g = (e, t, i, o) => {
  for (var r = o > 1 ? void 0 : o ? nt(t, i) : t, a = e.length - 1, l; a >= 0; a--)
    (l = e[a]) && (r = (o ? l(t, i, r) : l(r)) || r);
  return o && r && lt(t, i, r), r;
}, ct = (e, t, i) => t.has(e) || ye("Cannot " + i), ut = (e, t, i) => t.has(e) ? ye("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), ht = (e, t, i) => (ct(e, t, "access private method"), i), K, $e;
let u = class extends k {
  constructor() {
    super(...arguments), ut(this, K), this.timestamp = "", this.level = "", this.messageTemplate = "", this.renderedMessage = "", this.properties = [], this.open = !1, this.exception = "", this._searchMenuData = [
      {
        label: "Search with Google",
        title: "#logViewer_searchThisMessageWithGoogle",
        href: () => `https://www.google.com/search?q=${this.renderedMessage}`,
        icon: "icon-google"
      },
      {
        label: "Search with Bing",
        title: "Search this message with Microsoft Bing",
        href: () => `https://www.bing.com/search?q=${this.renderedMessage}`,
        icon: "icon-search"
      },
      {
        label: "Search in Umbraco Forum",
        title: "Search this message on the Umbraco forum",
        href: () => `https://forum.umbraco.com/search?q=${this.renderedMessage}`,
        icon: "icon-umbraco"
      },
      {
        label: "Search in Umbraco Forum with Google",
        title: "Search Umbraco Forum using Google",
        href: () => `https://www.google.com/?q=site:forum.umbraco.com%20${this.renderedMessage}`,
        icon: "icon-google"
      },
      {
        label: "Search Umbraco source code",
        title: "Search the Umbraco source code on GitHub",
        href: () => `https://github.com/umbraco/Umbraco-CMS/search?q=${this.properties.find((e) => e.name === "SourceContext")?.value}`,
        icon: "icon-github"
      },
      {
        label: "Search Umbraco Issues",
        title: "Search Umbraco Issues on GitHub",
        href: () => `https://github.com/umbraco/Umbraco-CMS/issues?q=${this.properties.find((e) => e.name === "SourceContext")?.value}`,
        icon: "icon-github"
      }
    ], this._propertiesWithSearchMenu = ["HttpRequestNumber", "SourceContext", "MachineName"];
  }
  willUpdate(e) {
    e.has("timestamp") && (this.date = new Date(this.timestamp));
  }
  updated(e) {
    e.has("open") && (this.open ? this.details.setAttribute("open", "true") : this.details.removeAttribute("open"));
  }
  _findLogsWithProperty({ name: e, value: t }) {
    if (!e) return "";
    let i = ee(), o = t ?? "";
    return isNaN(+(t ?? "")) && (o = "'" + t + "'"), i = {
      ...i,
      lq: `${e}=${o}`
    }, te(i);
  }
  render() {
    return s`
			<details @open=${ht(this, K, $e)}>
				<summary>
					<div id="timestamp">${this.date?.toLocaleString()}</div>
					<div id="level">
						<umb-log-viewer-level-tag .level=${this.level ? this.level : "Information"}></umb-log-viewer-level-tag>
					</div>
					<div id="machine">${this.properties.find((e) => e.name === "MachineName")?.value}</div>
					<div id="message"><uui-scroll-container>${this.renderedMessage}</uui-scroll-container></div>
				</summary>
				${this.exception ? s`<pre id="exception">${this.exception}</pre>` : ""}
				<ul id="properties-list">
					<li class="property">
						<div class="property-name">Timestamp</div>
						<div class="property-value">${this.date?.toLocaleString()}</div>
					</li>
					<li class="property">
						<div class="property-name">@MessageTemplate</div>
						<div class="property-value">${this.messageTemplate}</div>
					</li>
					${this.properties.map(
      (e) => s`<li class="property">
								<div class="property-name">${e.name}:</div>
								<div class="property-value">
									${e.value}
									${this._propertiesWithSearchMenu.includes(e.name ?? "") ? s`<uui-button
												compact
												look="secondary"
												label="Find logs with ${e.name}"
												title="Find logs with ${e.name}"
												href=${`section/settings/workspace/logviewer/view/search/?${this._findLogsWithProperty(
        e
      )}`}>
												<uui-icon name="icon-search"></uui-icon>
											</uui-button>` : ""}
								</div>
							</li>`
    )}
				</ul>
				<umb-dropdown look="secondary" placement="bottom-start" id="search-button" label="Search">
					<span slot="label"><uui-icon name="icon-search"></uui-icon> Search</span>
					${this._searchMenuData.map(
      (e) => s`
							<uui-menu-item
								class="search-item"
								href=${e.href()}
								target="_blank"
								label=${e.label}
								title=${e.title}>
								${He(
        e.icon,
        (t) => s`<uui-icon slot="icon" name=${t}></uui-icon>`,
        () => s`<uui-icon slot="icon" name="icon-search"></uui-icon>`
      )}
							</uui-menu-item>
						`
    )}
				</umb-dropdown>
			</details>
		`;
  }
};
K = /* @__PURE__ */ new WeakSet();
$e = function(e) {
  this.open = e.target.open;
};
u.styles = [
  ve,
  P`
			:host > details {
				border-top: 1px solid var(--uui-color-border);
			}

			:host(:last-child) > details {
				border-bottom: 1px solid var(--uui-color-border);
			}

			summary {
				display: flex;
			}

			details[open] {
				margin-bottom: var(--uui-size-space-3);
			}

			summary:hover {
				background-color: var(--uui-color-surface-emphasis);
				color: var(--uui-color-interactive-emphasis);
			}

			#properties-list {
				padding: 0;
				list-style: none;
			}

			.property {
				padding: 10px 20px;
				display: flex;
				border-top: 1px solid var(--uui-color-border);
			}

			.property:first-child {
				border-top: transparent;
			}

			#properties-list,
			pre {
				margin: 0 var(--uui-size-layout-1);
				border: 1px solid var(--uui-color-border);
				border-radius: var(--uui-border-radius);
				background-color: var(--uui-color-background);
				margin-bottom: var(--uui-size-space-3);
			}

			pre {
				border-left: 4px solid #d42054;
				display: block;
				font-family:
					Lato,
					Helvetica Neue,
					Helvetica,
					Arial,
					sans-serif;
				line-height: 20px;
				overflow-x: auto;
				padding: 9.5px;
				white-space: pre-wrap;
			}

			summary > div {
				box-sizing: border-box;
				padding: 10px 20px;
				display: flex;
				align-items: center;
			}

			#timestamp {
				flex: 1 0 14ch;
			}

			#level,
			#machine {
				flex: 1 0 14ch;
			}

			uui-menu-item {
				--uui-menu-item-flat-structure: 1;
			}

			#message {
				flex: 6 0 14ch;
				word-break: break-all;
			}
			#search-button {
				margin-left: var(--uui-size-layout-1);
			}

			.property-name,
			.property-value {
				display: flex;
				align-items: center;
			}

			.property-name {
				font-weight: 600;
				flex: 1 1 20ch;
			}

			.property-value {
				flex: 3 0 20ch;
			}

			.search-item {
				width: 100%;
			}
		`
];
g([
  N("details")
], u.prototype, "details", 2);
g([
  w()
], u.prototype, "timestamp", 2);
g([
  h()
], u.prototype, "date", 2);
g([
  w()
], u.prototype, "level", 2);
g([
  w()
], u.prototype, "messageTemplate", 2);
g([
  w()
], u.prototype, "renderedMessage", 2);
g([
  w({ attribute: !1 })
], u.prototype, "properties", 2);
g([
  w({ type: Boolean })
], u.prototype, "open", 2);
g([
  w()
], u.prototype, "exception", 2);
u = g([
  x("umb-log-viewer-message")
], u);
var pt = Object.defineProperty, dt = Object.getOwnPropertyDescriptor, xe = (e) => {
  throw TypeError(e);
}, D = (e, t, i, o) => {
  for (var r = o > 1 ? void 0 : o ? dt(t, i) : t, a = e.length - 1, l; a >= 0; a--)
    (l = e[a]) && (r = (o ? l(t, i, r) : l(r)) || r);
  return o && r && pt(t, i, r), r;
}, oe = (e, t, i) => t.has(e) || xe("Cannot " + i), v = (e, t, i) => (oe(e, t, "read from private field"), t.get(e)), pe = (e, t, i) => t.has(e) ? xe("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), vt = (e, t, i, o) => (oe(e, t, "write to private field"), t.set(e, i), i), A = (e, t, i) => (oe(e, t, "access private method"), i), n, S, Se, Le, Ce, Me;
let _ = class extends k {
  constructor() {
    super(), pe(this, S), this._sortingDirection = ue.ASCENDING, this._logs = [], this._logsTotal = 0, this._isLoading = !0, pe(this, n), this.consumeContext(q, (e) => {
      vt(this, n, e), A(this, S, Se).call(this);
    });
  }
  _renderPagination() {
    if (!this._logsTotal) return "";
    const e = Math.ceil(this._logsTotal / 100);
    return e <= 1 ? "" : s`<div id="pagination">
			<uui-pagination
				.total=${e}
				firstlabel=${this.localize.term("general_first")}
				previouslabel=${this.localize.term("general_previous")}
				nextlabel=${this.localize.term("general_next")}
				lastlabel=${this.localize.term("general_last")}
				@change="${A(this, S, Ce)}"></uui-pagination>
		</div>`;
  }
  render() {
    return s`<uui-box>
				<div id="header" slot="header">
					<div id="timestamp">
						Timestamp
						<uui-button compact @click=${A(this, S, Le)} label="Sort logs">
							<uui-symbol-sort
								?descending=${this._sortingDirection === ue.DESCENDING}
								active></uui-symbol-sort>
						</uui-button>
					</div>
					<div id="level">Level</div>
					<div id="machine">Machine name</div>
					<div id="message">Message</div>
				</div>
				<div id="main">
					${this._isLoading ? s` <span id="empty"> <uui-loader-circle></uui-loader-circle>Loading log messages... </span> ` : s`${A(this, S, Me).call(this)}`}
				</div>
			</uui-box>
			${this._renderPagination()} `;
  }
};
n = /* @__PURE__ */ new WeakMap();
S = /* @__PURE__ */ new WeakSet();
Se = function() {
  v(this, n) && (this.observe(v(this, n).logs, (e) => {
    this._logs = e ?? [];
  }), this.observe(v(this, n).isLoadingLogs, (e) => {
    this._isLoading = e === null ? this._isLoading : e;
  }), this.observe(v(this, n).logsTotal, (e) => {
    this._logsTotal = e ?? 0;
  }), this.observe(v(this, n).sortingDirection, (e) => {
    this._sortingDirection = e;
  }));
};
Le = function() {
  v(this, n)?.toggleSortOrder(), v(this, n)?.setCurrentPage(1), v(this, n)?.getLogs();
};
Ce = function(e) {
  const t = e.target.current;
  v(this, n)?.setCurrentPage(t), v(this, n)?.getLogs(), this._logsScrollContainer.scrollTop = 0;
};
Me = function() {
  return s`${this._logs.length > 0 ? s` ${this._logs.map(
    (e) => s`<umb-log-viewer-message
							.timestamp=${e.timestamp ?? ""}
							.level=${e.level ?? ""}
							.renderedMessage=${e.renderedMessage ?? ""}
							.properties=${e.properties ?? []}
							.exception=${e.exception ?? ""}
							.messageTemplate=${e.messageTemplate ?? ""}></umb-log-viewer-message>`
  )}` : s`
					<span id="empty">
						<uui-icon name="icon-search"></uui-icon>Sorry, we cannot find what you are looking for.
					</span>
				`}`;
};
_.styles = [
  P`
			uui-pagination {
				display: block;
				margin-bottom: var(--uui-size-layout-1);
			}
			uui-box {
				--uui-box-default-padding: 0;
			}

			:host {
				height: 100%;
				display: flex;
				flex-direction: column;
			}
			#header {
				display: flex;
				font-weight: 600;
				width: 100%;
			}

			#header > div {
				box-sizing: border-box;
				padding: 10px 20px;
				display: flex;
				align-items: center;
			}

			#main {
				display: flex;
				flex-direction: column;
				width: 100%;
			}

			#timestamp {
				flex: 1 0 14ch;
			}

			#level,
			#machine {
				flex: 1 0 14ch;
			}

			#message {
				flex: 6 0 14ch;
			}

			#empty {
				display: flex;
				justify-content: center;
				align-items: center;
				gap: var(--uui-size-space-3);
				margin: var(--uui-size-space-5) 0;
			}

			#pagination {
				display: block;
				margin: var(--uui-size-space-5) 0;
			}
		`
];
D([
  N("#logs-scroll-container")
], _.prototype, "_logsScrollContainer", 2);
D([
  h()
], _.prototype, "_sortingDirection", 2);
D([
  h()
], _.prototype, "_logs", 2);
D([
  h()
], _.prototype, "_logsTotal", 2);
D([
  h()
], _.prototype, "_isLoading", 2);
_ = D([
  x("umb-log-viewer-messages-list")
], _);
var gt = Object.defineProperty, mt = Object.getOwnPropertyDescriptor, Ee = (e) => {
  throw TypeError(e);
}, se = (e, t, i, o) => {
  for (var r = o > 1 ? void 0 : o ? mt(t, i) : t, a = e.length - 1, l; a >= 0; a--)
    (l = e[a]) && (r = (o ? l(t, i, r) : l(r)) || r);
  return o && r && gt(t, i, r), r;
}, ae = (e, t, i) => t.has(e) || Ee("Cannot " + i), C = (e, t, i) => (ae(e, t, "read from private field"), i ? i.call(e) : t.get(e)), F = (e, t, i) => t.has(e) ? Ee("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), ft = (e, t, i, o) => (ae(e, t, "write to private field"), t.set(e, i), i), G = (e, t, i) => (ae(e, t, "access private method"), i), Y, $, L, Pe, le, Z, ke;
let U = class extends k {
  constructor() {
    super(), F(this, L), this._poolingConfig = { enabled: !1, interval: 0 }, F(this, Y, [2e3, 5e3, 1e4, 2e4, 3e4]), F(this, $), F(this, Z, (e) => {
      C(this, $)?.setPollingInterval(e), G(this, L, ke).call(this);
    }), this.consumeContext(q, (e) => {
      ft(this, $, e), G(this, L, Pe).call(this);
    });
  }
  render() {
    return s`
			<uui-button-group>
				<uui-button label="Start pooling" @click=${G(this, L, le)}
					>${this._poolingConfig.enabled ? s`<uui-icon name="icon-axis-rotation" id="polling-enabled-icon"></uui-icon>Polling
								${this._poolingConfig.interval / 1e3} seconds` : "Polling"}</uui-button
				>

				<umb-dropdown id="polling-rate-dropdown" compact label="Choose pooling time">
					${C(this, Y).map(
      (e) => s`<uui-menu-item
								label="Every ${e / 1e3} seconds"
								@click-label=${() => C(this, Z).call(this, e)}></uui-menu-item>`
    )}
				</umb-dropdown>
			</uui-button-group>
		`;
  }
};
Y = /* @__PURE__ */ new WeakMap();
$ = /* @__PURE__ */ new WeakMap();
L = /* @__PURE__ */ new WeakSet();
Pe = function() {
  C(this, $) && this.observe(C(this, $).polling, (e) => {
    this._poolingConfig = { ...e };
  });
};
le = function() {
  C(this, $)?.togglePolling();
};
Z = /* @__PURE__ */ new WeakMap();
ke = function() {
  this._dropdownElement && (this._dropdownElement.open = !1), G(this, L, le).call(this);
};
U.styles = [
  P`
			#polling-enabled-icon {
				margin-right: var(--uui-size-space-3);
				margin-bottom: 1px;
				-webkit-animation: rotate-center 0.8s ease-in-out infinite both;
				animation: rotate-center 0.8s ease-in-out infinite both;
			}

			@-webkit-keyframes rotate-center {
				0% {
					-webkit-transform: rotate(0);
					transform: rotate(0);
				}
				100% {
					-webkit-transform: rotate(360deg);
					transform: rotate(360deg);
				}
			}
			@keyframes rotate-center {
				0% {
					-webkit-transform: rotate(0);
					transform: rotate(0);
				}
				100% {
					-webkit-transform: rotate(360deg);
					transform: rotate(360deg);
				}
			}
		`
];
se([
  N("#polling-rate-dropdown")
], U.prototype, "_dropdownElement", 2);
se([
  h()
], U.prototype, "_poolingConfig", 2);
U = se([
  x("umb-log-viewer-polling-button")
], U);
var _t = Object.defineProperty, bt = Object.getOwnPropertyDescriptor, De = (e) => {
  throw TypeError(e);
}, O = (e, t, i, o) => {
  for (var r = o > 1 ? void 0 : o ? bt(t, i) : t, a = e.length - 1, l; a >= 0; a--)
    (l = e[a]) && (r = (o ? l(t, i, r) : l(r)) || r);
  return o && r && _t(t, i, r), r;
}, ne = (e, t, i) => t.has(e) || De("Cannot " + i), c = (e, t, i) => (ne(e, t, "read from private field"), t.get(e)), H = (e, t, i) => t.has(e) ? De("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), wt = (e, t, i, o) => (ne(e, t, "write to private field"), t.set(e, i), i), f = (e, t, i) => (ne(e, t, "access private method"), i), E, p, d, Oe, Ve, ze, Ue, We, Te, qe, Ae;
let b = class extends k {
  constructor() {
    super(), H(this, d), this._savedSearches = [], this._inputQuery = "", this._showLoader = !1, this._isQuerySaved = !1, H(this, E, new Ye()), H(this, p), this.consumeContext(q, (e) => {
      wt(this, p, e), f(this, d, Oe).call(this), c(this, p)?.getSavedSearches();
    }), c(this, E).pipe(
      Ze(() => this._showLoader = !0),
      je(250)
    ).subscribe((e) => {
      c(this, p)?.setFilterExpression(e), f(this, d, Ue).call(this, e), this._isQuerySaved = this._savedSearches.some((t) => t.query === e), this._showLoader = !1;
    });
  }
  render() {
    return s`
			<uui-input
				id="search-input"
				label="Search logs"
				.placeholder=${"Search logs..."}
				slot="trigger"
				@input=${f(this, d, Ve)}
				.value=${this._inputQuery}>
				${this._showLoader ? s`<div id="loader-container" slot="append">
							<uui-loader-circle></uui-loader-circle>
						</div>` : ""}
				${this._inputQuery ? s`${this._isQuerySaved ? "" : s`<uui-button compact slot="append" label="Save search" @click=${f(this, d, Ae)}
										><uui-icon name="icon-favorite"></uui-icon
									></uui-button>`}<uui-button compact slot="append" label="Clear" @click=${f(this, d, We)}
								><uui-icon name="icon-delete"></uui-icon
							></uui-button>` : s``}
				<umb-dropdown id="search-dropdown" slot="append" label=${this.localize.term("logViewer_savedSearches")}>
					<span slot="label"><umb-localize key="logViewer_savedSearches">Saved searches</umb-localize></span>
					<uui-scroll-container id="saved-searches-container" role="list">
						${this._savedSearches.map(
      (e) => s`<li class="saved-search-item">
									<button
										label="Search for ${e.name}"
										class="saved-search-item-button"
										@click=${() => f(this, d, ze).call(this, e.query ?? "")}>
										<span class="saved-search-item-name">${e.name}</span>
										<span class="saved-search-item-query">${e.query}</span></button
									><uui-button
										label="Remove saved search"
										color="danger"
										@click=${() => f(this, d, qe).call(this, e.name ?? "")}
										><uui-icon name="icon-trash"></uui-icon
									></uui-button>
								</li>`
    )}
					</uui-scroll-container>
				</umb-dropdown>
			</uui-input>
		`;
  }
};
E = /* @__PURE__ */ new WeakMap();
p = /* @__PURE__ */ new WeakMap();
d = /* @__PURE__ */ new WeakSet();
Oe = function() {
  c(this, p) && (this.observe(c(this, p).savedSearches, (e) => {
    this._savedSearches = e?.items ?? [], this._isQuerySaved = this._savedSearches.some((t) => t.query === this._inputQuery);
  }), this.observe(c(this, p).filterExpression, (e) => {
    this._inputQuery = e, this._isQuerySaved = this._savedSearches.some((t) => t.query === e);
  }));
};
Ve = function(e) {
  const t = e.target;
  c(this, E).next(t.value);
};
ze = function(e) {
  c(this, E).next(e), this._searchDropdownElement.open = !1;
};
Ue = function(e) {
  let t = ee();
  t = {
    ...t,
    lq: e
  }, window.history.pushState({}, "", `${de()}?${te(t)}`);
};
We = function() {
  c(this, E).next(""), c(this, p)?.setFilterExpression("");
};
Te = function(e) {
  c(this, p)?.saveSearch(e);
};
qe = async function(e) {
  await et(this, {
    headline: this.localize.term("logViewer_deleteSavedSearch"),
    content: this.localize.term("defaultdialogs_confirmdelete", Xe(e)),
    color: "danger",
    confirmLabel: "Delete"
  }), c(this, p)?.removeSearch({ name: e });
};
Ae = async function() {
  tt(this, Ke, {
    data: { query: this._inputQuery }
  }).then((e) => {
    e && (f(this, d, Te).call(this, e), this._isQuerySaved = !0);
  }).catch(() => {
  });
};
b.styles = [
  P`
			:host {
				display: flex;
				align-items: center;
				justify-content: space-between;
				gap: var(--uui-size-space-4);
			}

			#search-input {
				width: 100%;
			}

			#saved-searches-button {
				flex-shrink: 0;
			}

			#saved-searches-popover {
				flex: 1;
			}

			#loader-container {
				display: flex;
				justify-content: center;
				align-items: center;
				margin: 0 var(--uui-size-space-4);
			}

			.saved-search-item {
				display: flex;
				justify-content: space-between;
				align-items: stretch;
				border-bottom: 1px solid #e9e9eb;
			}

			.saved-search-item-button {
				display: flex;
				font-family: inherit;
				flex: 1;
				background: 0 0;
				padding: 0 0;
				border: 0;
				clear: both;
				cursor: pointer;
				display: flex;
				font-weight: 400;
				line-height: 20px;
				text-align: left;
				align-items: center;
				white-space: nowrap;
				color: var(--uui-color-interactive);
			}

			.saved-search-item-button:hover {
				background-color: var(--uui-color-surface-emphasis, rgb(250, 250, 250));
				color: var(--color-standalone);
			}

			.saved-search-item-name {
				font-weight: 600;
				margin: 0 var(--uui-size-space-3);
			}

			#polling-symbol-expand,
			#saved-search-expand-symbol,
			uui-symbol-sort {
				margin-left: var(--uui-size-space-3);
			}
		`
];
O([
  N("#search-dropdown")
], b.prototype, "_searchDropdownElement", 2);
O([
  h()
], b.prototype, "_savedSearches", 2);
O([
  h()
], b.prototype, "_inputQuery", 2);
O([
  h()
], b.prototype, "_showLoader", 2);
O([
  h()
], b.prototype, "_isQuerySaved", 2);
b = O([
  x("umb-log-viewer-search-input")
], b);
var yt = Object.defineProperty, $t = Object.getOwnPropertyDescriptor, Fe = (e) => {
  throw TypeError(e);
}, Qe = (e, t, i, o) => {
  for (var r = o > 1 ? void 0 : o ? $t(t, i) : t, a = e.length - 1, l; a >= 0; a--)
    (l = e[a]) && (r = (o ? l(t, i, r) : l(r)) || r);
  return o && r && yt(t, i, r), r;
}, ce = (e, t, i) => t.has(e) || Fe("Cannot " + i), Q = (e, t, i) => (ce(e, t, "read from private field"), t.get(e)), R = (e, t, i) => t.has(e) ? Fe("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), Ge = (e, t, i, o) => (ce(e, t, "write to private field"), t.set(e, i), i), xt = (e, t, i) => (ce(e, t, "access private method"), i), W, V, j, Ne;
let T = class extends k {
  constructor() {
    super(), R(this, j), this._canShowLogs = !0, R(this, W), R(this, V), this.consumeContext(q, (t) => {
      Ge(this, W, t), xt(this, j, Ne).call(this);
    });
  }
  render() {
    return s`
			<umb-body-layout header-transparent header-fit-height>
				<div id="header" slot="header">
					<div id="levels-container">
						<umb-log-viewer-log-level-filter-menu></umb-log-viewer-log-level-filter-menu>
						<div id="dates-polling-container">
							<umb-log-viewer-date-range-selector horizontal></umb-log-viewer-date-range-selector>
							<umb-log-viewer-polling-button> </umb-log-viewer-polling-button>
						</div>
					</div>
					<div id="input-container">
						<umb-log-viewer-search-input></umb-log-viewer-search-input>
					</div>
				</div>

				${this._canShowLogs ? s`<umb-log-viewer-messages-list></umb-log-viewer-messages-list>` : s`<umb-log-viewer-to-many-logs-warning id="to-many-logs-warning"></umb-log-viewer-to-many-logs-warning>`}
			</umb-body-layout>
		`;
  }
};
W = /* @__PURE__ */ new WeakMap();
V = /* @__PURE__ */ new WeakMap();
j = /* @__PURE__ */ new WeakSet();
Ne = function() {
  Q(this, V) && Q(this, V).destroy(), Q(this, W) && Ge(this, V, this.observe(Q(this, W).canShowLogs, (e) => {
    this._canShowLogs = e ?? this._canShowLogs;
  }));
};
T.styles = [
  ve,
  P`
			:host {
				margin-bottom: var(--uui-size-space-2);
			}

			uui-box {
				--uui-box-default-padding: 0;
			}

			#header {
				display: flex;
				flex-direction: column;
				gap: var(--uui-size-space-4);
				width: 100%;
			}

			#levels-container,
			#input-container {
				display: flex;
				align-items: center;
				gap: var(--uui-size-space-4);
				width: 100%;
			}

			#levels-container {
				justify-content: space-between;
			}

			#dates-polling-container {
				display: flex;
				align-items: baseline;
			}

			umb-log-viewer-search-input {
				flex: 1;
			}

			umb-log-viewer-date-range-selector {
				flex-direction: row;
			}
		`
];
Qe([
  h()
], T.prototype, "_canShowLogs", 2);
T = Qe([
  x("umb-log-viewer-search-view")
], T);
const Wt = T;
export {
  Wt as default
};
//# sourceMappingURL=index-BNl_laT4.js.map
