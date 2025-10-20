import { U as E } from "./logviewer-workspace.context-token-uhPS_Su7.js";
import { UmbTextStyles as se } from "@umbraco-cms/backoffice/style";
import { css as z, state as v, customElement as P, nothing as R, html as l, property as ye } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as M } from "@umbraco-cms/backoffice/lit-element";
var Le = Object.defineProperty, xe = Object.getOwnPropertyDescriptor, oe = (e) => {
  throw TypeError(e);
}, I = (e, t, i, s) => {
  for (var r = s > 1 ? void 0 : s ? xe(t, i) : t, o = e.length - 1, a; o >= 0; o--)
    (a = e[o]) && (r = (s ? a(t, i, r) : a(r)) || r);
  return s && r && Le(t, i, r), r;
}, B = (e, t, i) => t.has(e) || oe("Cannot " + i), n = (e, t, i) => (B(e, t, "read from private field"), t.get(e)), $ = (e, t, i) => t.has(e) ? oe("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), ae = (e, t, i, s) => (B(e, t, "write to private field"), t.set(e, i), i), D = (e, t, i) => (B(e, t, "access private method"), i), h, y, p, b, ne, le, ue, V;
let L = class extends M {
  constructor() {
    super(), $(this, b), $(this, h, 999), $(this, y, 1), this._savedSearches = [], this._total = 0, $(this, p), $(this, V, (e) => l` <li>
			<uui-menu-item
				label="${e.name ?? ""}"
				title="${e.name ?? ""}"
				href=${`section/settings/workspace/logviewer/view/search/?lq=${encodeURIComponent(
      e.query ?? ""
    )}`}>
				<uui-icon slot="icon" name="icon-search"></uui-icon>${e.name}
			</uui-menu-item>
		</li>`), this.consumeContext(E, (e) => {
      ae(this, p, e), n(this, p)?.getSavedSearches({ skip: 0, take: n(this, h) }), D(this, b, ne).call(this);
    });
  }
  render() {
    return l` <uui-box id="saved-searches" headline="Saved searches">
			<ul>
				${n(this, V).call(this, { name: "All logs", query: "" })} ${this._savedSearches.map(n(this, V))}
			</ul>
			${this._total > n(this, h) ? l`<uui-pagination
						.current=${n(this, y)}
						.total=${Math.ceil(this._total / n(this, h))}
						@change=${D(this, b, ue)}></uui-pagination>` : R}
		</uui-box>`;
  }
};
h = /* @__PURE__ */ new WeakMap();
y = /* @__PURE__ */ new WeakMap();
p = /* @__PURE__ */ new WeakMap();
b = /* @__PURE__ */ new WeakSet();
ne = function() {
  n(this, p) && this.observe(n(this, p).savedSearches, (e) => {
    this._savedSearches = e?.items ?? [], this._total = e?.total ?? 0;
  });
};
le = function() {
  const e = n(this, y) * n(this, h) - n(this, h);
  n(this, p)?.getSavedSearches({ skip: e, take: n(this, h) });
};
ue = function(e) {
  ae(this, y, e.target.current), D(this, b, le).call(this);
};
V = /* @__PURE__ */ new WeakMap();
L.styles = [
  se,
  z`
			uui-box {
				height: 100%;
			}

			ul {
				list-style: none;
				margin: 0;
				padding: 0;
				border: 0;
				font-size: 100%;
				font: inherit;
				vertical-align: baseline;
			}

			li {
				display: flex;
				align-items: center;
			}

			li uui-icon {
				margin-right: 1em;
			}

			uui-menu-item {
				width: 100%;
			}
		`
];
I([
  v()
], L.prototype, "_savedSearches", 2);
I([
  v()
], L.prototype, "_total", 2);
L = I([
  P("umb-log-viewer-saved-searches-overview")
], L);
var Se = Object.defineProperty, Oe = Object.getOwnPropertyDescriptor, ve = (e) => {
  throw TypeError(e);
}, H = (e, t, i, s) => {
  for (var r = s > 1 ? void 0 : s ? Oe(t, i) : t, o = e.length - 1, a; o >= 0; o--)
    (a = e[o]) && (r = (s ? a(t, i, r) : a(r)) || r);
  return s && r && Se(t, i, r), r;
}, X = (e, t, i) => t.has(e) || ve("Cannot " + i), u = (e, t, i) => (X(e, t, "read from private field"), t.get(e)), T = (e, t, i) => t.has(e) ? ve("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), he = (e, t, i, s) => (X(e, t, "write to private field"), t.set(e, i), i), A = (e, t, i) => (X(e, t, "access private method"), i), g, x, d, C, ge, ce, pe;
let S = class extends M {
  constructor() {
    super(), T(this, C), T(this, g, 10), T(this, x, 1), this._total = 0, this._messageTemplates = [], T(this, d), this.consumeContext(E, (e) => {
      he(this, d, e), u(this, d)?.getMessageTemplates(0, u(this, g)), A(this, C, ge).call(this);
    });
  }
  render() {
    return l`
			<uui-box headline="Common Log Messages" id="saved-searches">
				<p style="font-style: italic;">Total Unique Message types: ${this._total}</p>

				<uui-table>
					${this._messageTemplates ? this._messageTemplates.map(
      (e) => l`<uui-table-row>
										<uui-table-cell>
											<a
												href=${`section/settings/workspace/logviewer/view/search/?lq=${encodeURIComponent(
        `@MessageTemplate='${e.messageTemplate}'`
      )}`}>
												<span>${e.messageTemplate}</span> <span>${e.count}</span>
											</a>
										</uui-table-cell>
									</uui-table-row>`
    ) : ""}
				</uui-table>
				${this._total > u(this, g) ? l`<uui-pagination
							.current=${u(this, x)}
							.total=${Math.ceil(this._total / u(this, g))}
							@change=${A(this, C, pe)}></uui-pagination>` : R}
			</uui-box>
		`;
  }
};
g = /* @__PURE__ */ new WeakMap();
x = /* @__PURE__ */ new WeakMap();
d = /* @__PURE__ */ new WeakMap();
C = /* @__PURE__ */ new WeakSet();
ge = function() {
  u(this, d) && this.observe(u(this, d).messageTemplates, (e) => {
    this._messageTemplates = e?.items ?? [], this._total = e?.total ?? 0;
  });
};
ce = function() {
  const e = u(this, x) * u(this, g) - u(this, g);
  u(this, d)?.getMessageTemplates(e, u(this, g));
};
pe = function(e) {
  he(this, x, e.target.current), A(this, C, ce).call(this);
};
S.styles = [
  se,
  z`
			uui-pagination {
				margin-top: var(--uui-size-layout-1);
			}

			#show-more-templates-btn {
				margin-top: var(--uui-size-space-5);
			}

			a {
				display: flex;
				align-items: center;
				justify-content: space-between;
				text-decoration: none;
				color: inherit;
			}

			uui-table-cell {
				padding: 10px 20px;
				height: unset;
			}

			uui-table-row {
				cursor: pointer;
			}

			uui-table-row:hover > uui-table-cell {
				background-color: var(--uui-color-surface-alt);
			}
		`
];
H([
  v()
], S.prototype, "_total", 2);
H([
  v()
], S.prototype, "_messageTemplates", 2);
S = H([
  P("umb-log-viewer-message-templates-overview")
], S);
var Ee = Object.defineProperty, Pe = Object.getOwnPropertyDescriptor, de = (e) => {
  throw TypeError(e);
}, F = (e, t, i, s) => {
  for (var r = s > 1 ? void 0 : s ? Pe(t, i) : t, o = e.length - 1, a; o >= 0; o--)
    (a = e[o]) && (r = (s ? a(t, i, r) : a(r)) || r);
  return s && r && Ee(t, i, r), r;
}, J = (e, t, i) => t.has(e) || de("Cannot " + i), G = (e, t, i) => (J(e, t, "read from private field"), t.get(e)), j = (e, t, i) => t.has(e) ? de("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), Me = (e, t, i, s) => (J(e, t, "write to private field"), t.set(e, i), i), ee = (e, t, i) => (J(e, t, "access private method"), i), _, U, _e, me;
let w = class extends M {
  constructor() {
    super(), j(this, U), j(this, _), this._logLevelCount = null, this.logLevelCount = [], this._logLevelCountFilter = [], this.consumeContext(E, (e) => {
      Me(this, _, e), G(this, _)?.getLogCount(), ee(this, U, me).call(this);
    });
  }
  willUpdate(e) {
    e.has("_logLevelCountFilter") && this.setLogLevelCount();
  }
  setLogLevelCount() {
    this.logLevelCount = this._logLevelCount ? Object.entries(this._logLevelCount).filter(([e]) => !this._logLevelCountFilter.includes(e)) : [];
  }
  // TODO: Stop using this complex code in render methods, instead changes to _logLevelCount should trigger a state prop containing the keys. And then try to make use of the repeat LIT method:
  render() {
    return l`
			<uui-box id="types" headline="Log types">
				<div id="log-types-container">
					<div id="legend">
						<ul>
							${this._logLevelCount ? Object.keys(this._logLevelCount).map(
      (e) => l`<li>
												<button
													@click=${(t) => {
        t.target?.classList.toggle("active"), ee(this, U, _e).call(this, e);
      }}>
													<uui-icon
														name="icon-record"
														style="color: var(--umb-log-viewer-${e.toLowerCase()}-color);"></uui-icon
													>${e}
												</button>
											</li>`
    ) : ""}
						</ul>
					</div>
					<umb-donut-chart .description=${"In chosen date range you have this number of log message of type:"}>
						${this._logLevelCount ? this.logLevelCount.map(
      ([e, t]) => l`<umb-donut-slice
											.name=${e}
											.amount=${t}
											.kind=${"messages"}
											.color="${`var(--umb-log-viewer-${e.toLowerCase()}-color)`}"></umb-donut-slice> `
    ) : ""}
					</umb-donut-chart>
				</div>
			</uui-box>
		`;
  }
};
_ = /* @__PURE__ */ new WeakMap();
U = /* @__PURE__ */ new WeakSet();
_e = function(e) {
  if (this._logLevelCountFilter.includes(e)) {
    this._logLevelCountFilter = this._logLevelCountFilter.filter((t) => t !== e);
    return;
  }
  this._logLevelCountFilter = [...this._logLevelCountFilter, e];
};
me = function() {
  G(this, _) && this.observe(G(this, _).logCount, (e) => {
    this._logLevelCount = e ?? null, this.setLogLevelCount();
  });
};
w.styles = [
  z`
			#log-types-container {
				display: flex;
				gap: var(--uui-size-space-4);
				flex-direction: column-reverse;
				align-items: center;
				justify-content: space-between;
			}

			button {
				all: unset;
				display: flex;
				align-items: center;
				cursor: pointer;
			}

			button:focus {
				outline: 1px solid var(--uui-color-focus);
			}

			button.active {
				text-decoration: line-through;
			}

			#chart {
				width: 150px;
				aspect-ratio: 1;
				background:
					radial-gradient(white 40%, transparent 41%),
					conic-gradient(
						var(--umb-log-viewer-debug-color) 0% 20%,
						var(--umb-log-viewer-information-color) 20% 40%,
						var(--umb-log-viewer-warning-color) 40% 60%,
						var(--umb-log-viewer-error-color) 60% 80%,
						var(--umb-log-viewer-fatal-color) 80% 100%
					);
				margin: 10px;
				display: inline-block;
				border-radius: 50%;
			}

			ul {
				list-style: none;
				margin: 0;
				padding: 0;
				border: 0;
				font-size: 100%;
				font: inherit;
				vertical-align: baseline;
			}

			li {
				display: flex;
				align-items: center;
			}

			li uui-icon {
				margin-right: 1em;
			}
		`
];
F([
  v()
], w.prototype, "_logLevelCount", 2);
F([
  v()
], w.prototype, "logLevelCount", 2);
F([
  v()
], w.prototype, "_logLevelCountFilter", 2);
w = F([
  P("umb-log-viewer-log-types-chart")
], w);
var Te = Object.defineProperty, Ve = Object.getOwnPropertyDescriptor, we = (e) => {
  throw TypeError(e);
}, K = (e, t, i, s) => {
  for (var r = s > 1 ? void 0 : s ? Ve(t, i) : t, o = e.length - 1, a; o >= 0; o--)
    (a = e[o]) && (r = (s ? a(t, i, r) : a(r)) || r);
  return s && r && Te(t, i, r), r;
}, Q = (e, t, i) => t.has(e) || we("Cannot " + i), q = (e, t, i) => (Q(e, t, "read from private field"), t.get(e)), te = (e, t, i) => t.has(e) ? we("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), Ue = (e, t, i, s) => (Q(e, t, "write to private field"), t.set(e, i), i), We = (e, t, i) => (Q(e, t, "access private method"), i), m, N, fe;
let k = class extends M {
  constructor() {
    super(), te(this, N), te(this, m), this._loggers = [], this.loggerName = "Global", this.consumeContext(E, (e) => {
      Ue(this, m, e), q(this, m)?.getSavedSearches(), We(this, N, fe).call(this);
    });
  }
  render() {
    return l`${this._loggers.length > 0 ? this._loggers.find((e) => e.name === this.loggerName)?.level : R}`;
  }
};
m = /* @__PURE__ */ new WeakMap();
N = /* @__PURE__ */ new WeakSet();
fe = function() {
  q(this, m) && this.observe(q(this, m).loggers, (e) => {
    this._loggers = e ?? [];
  });
};
K([
  v()
], k.prototype, "_loggers", 2);
K([
  ye()
], k.prototype, "loggerName", 2);
k = K([
  P("umb-log-viewer-log-level-overview")
], k);
var ke = Object.defineProperty, ze = Object.getOwnPropertyDescriptor, $e = (e) => {
  throw TypeError(e);
}, Y = (e, t, i, s) => {
  for (var r = s > 1 ? void 0 : s ? ze(t, i) : t, o = e.length - 1, a; o >= 0; o--)
    (a = e[o]) && (r = (s ? a(t, i, r) : a(r)) || r);
  return s && r && ke(t, i, r), r;
}, Z = (e, t, i) => t.has(e) || $e("Cannot " + i), O = (e, t, i) => (Z(e, t, "read from private field"), t.get(e)), ie = (e, t, i) => t.has(e) ? $e("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), Fe = (e, t, i, s) => (Z(e, t, "write to private field"), t.set(e, i), i), re = (e, t, i) => (Z(e, t, "access private method"), i), c, W, be, Ce;
let f = class extends M {
  constructor() {
    super(), ie(this, W), this._canShowLogs = !1, ie(this, c), this.consumeContext(E, (t) => {
      Fe(this, c, t), re(this, W, be).call(this), re(this, W, Ce).call(this), O(this, c)?.getLogLevels(0, 100);
    });
  }
  render() {
    return l`
			<div id="logviewer-layout">
				<div id="info">
					<uui-box id="time-period" headline="Time Period">
						<umb-log-viewer-date-range-selector></umb-log-viewer-date-range-selector>
					</uui-box>

					<uui-box id="errors" headline="Number of Errors">
						<uui-button
							label="Show error logs"
							href=${`section/settings/workspace/logviewer/view/search/?lq=${encodeURIComponent(
      "@Level='Fatal' or @Level='Error' or Has(@Exception)"
    )}`}>
							<h2 id="error-count">
								${this._errorCount === void 0 ? l`<uui-loader></uui-loader>` : this._errorCount}
							</h2>
						</uui-button>
					</uui-box>

					<uui-box id="level" headline="Log level">
						<h2 id="log-level"><umb-log-viewer-log-level-overview></umb-log-viewer-log-level-overview></h2>
					</uui-box>

					<umb-log-viewer-log-types-chart id="types"></umb-log-viewer-log-types-chart>
				</div>

				${this._canShowLogs ? l`<div id="saved-searches-container">
								<umb-log-viewer-saved-searches-overview></umb-log-viewer-saved-searches-overview>
							</div>

							<div id="common-messages-container">
								<umb-log-viewer-message-templates-overview></umb-log-viewer-message-templates-overview>
							</div>` : l`<umb-log-viewer-to-many-logs-warning id="to-many-logs-warning"></umb-log-viewer-to-many-logs-warning>`}
			</div>
		`;
  }
};
c = /* @__PURE__ */ new WeakMap();
W = /* @__PURE__ */ new WeakSet();
be = function() {
  O(this, c) && this.observe(O(this, c).logCount, (e) => {
    this._errorCount = e?.error;
  });
};
Ce = function() {
  O(this, c) && this.observe(O(this, c).canShowLogs, (e) => {
    this._canShowLogs = e ?? !1;
  });
};
f.styles = [
  z`
			:host {
				display: block;
				margin: var(--uui-size-layout-1);
			}

			#logviewer-layout {
				padding-bottom: var(--uui-size-layout-1);
				display: grid;
				grid-template-columns: 7fr 2fr;
				grid-template-rows: auto auto;
				gap: 20px 20px;
				grid-auto-flow: row;
				grid-template-areas:
					'saved-searches info'
					'common-messages info';
			}

			#info {
				grid-area: info;
				align-self: start;
				display: grid;
				grid-template-columns: repeat(2, 1fr);
				grid-template-rows: repeat(4, max-content);
				gap: 20px 20px;
			}

			#time-period {
				grid-area: 1 / 1 / 2 / 3;
			}

			#errors {
				grid-area: 2 / 1 / 3 / 2;
				--uui-box-default-padding: 0;
			}

			#errors > uui-button {
				width: 100%;
			}

			#level {
				grid-area: 2 / 2 / 3 / 3;
			}

			#log-level {
				color: var(--uui-color-positive);
				text-align: center;
				margin: 0;
			}

			#types {
				grid-area: 3 / 1 / 5 / 3;
			}

			#saved-searches-container,
			to-many-logs-warning {
				grid-area: saved-searches;
			}

			#common-messages-container {
				grid-area: common-messages;
				--uui-box-default-padding: 0 var(--uui-size-space-5, 18px) var(--uui-size-space-5, 18px)
					var(--uui-size-space-5, 18px);
			}

			#common-messages-container > uui-box {
				height: 100%;
			}

			uui-label:nth-of-type(2) {
				display: block;
				margin-top: var(--uui-size-space-5);
			}

			#error-count {
				font-size: 3rem;
				text-align: center;
				color: var(--uui-color-danger);
				margin: 0;
			}
		`
];
Y([
  v()
], f.prototype, "_errorCount", 2);
Y([
  v()
], f.prototype, "_canShowLogs", 2);
f = Y([
  P("umb-log-viewer-overview-view")
], f);
const Re = f;
export {
  Re as default
};
//# sourceMappingURL=index-BXplpJww.js.map
