import "./donut-slice.element-a3-k1WNw.js";
import { U as S } from "./logviewer-workspace.context-token-uhPS_Su7.js";
import { UmbTextStyles as D } from "@umbraco-cms/backoffice/style";
import { css as m, state as y, property as C, customElement as _, html as g, LitElement as U } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as x } from "@umbraco-cms/backoffice/lit-element";
import { query as L, toQueryString as T, path as V } from "@umbraco-cms/backoffice/router";
var z = Object.defineProperty, W = Object.getOwnPropertyDescriptor, $ = (e) => {
  throw TypeError(e);
}, c = (e, t, r, o) => {
  for (var a = o > 1 ? void 0 : o ? W(t, r) : t, i = e.length - 1, s; i >= 0; i--)
    (s = e[i]) && (a = (o ? s(t, r, a) : s(a)) || a);
  return o && a && z(t, r, a), a;
}, f = (e, t, r) => t.has(e) || $("Cannot " + r), p = (e, t, r) => (f(e, t, "read from private field"), r ? r.call(e) : t.get(e)), w = (e, t, r) => t.has(e) ? $("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), R = (e, t, r, o) => (f(e, t, "write to private field"), t.set(e, r), r), d = (e, t, r) => (f(e, t, "access private method"), r), n, l, E, O, P, b;
let u = class extends x {
  constructor() {
    super(), w(this, l), this._startDate = "", this._endDate = "", this.horizontal = !1, w(this, n), this.consumeContext(S, (e) => {
      R(this, n, e), d(this, l, E).call(this);
    });
  }
  render() {
    return g`
			<div class="input-container">
				<uui-label for="start-date">From:</uui-label>
				<umb-input-date
					@change=${d(this, l, O)}
					id="start-date"
					type="date"
					label="From"
					.max=${p(this, n)?.today ?? ""}
					.value=${this._startDate}></umb-input-date>
			</div>
			<div class="input-container">
				<uui-label for="end-date">To: </uui-label>
				<umb-input-date
					@change=${d(this, l, P)}
					id="end-date"
					type="date"
					label="To"
					.min=${this._startDate}
					.max=${p(this, n)?.today ?? ""}
					.value=${this._endDate}></umb-input-date>
			</div>
		`;
  }
};
n = /* @__PURE__ */ new WeakMap();
l = /* @__PURE__ */ new WeakSet();
E = function() {
  p(this, n) && this.observe(
    p(this, n).dateRange,
    (e) => {
      this._startDate = e.startDate, this._endDate = e.endDate;
    },
    "_observeDateRange"
  );
};
O = function(e) {
  this._startDate = e.target.value, d(this, l, b).call(this);
};
P = function(e) {
  this._endDate = e.target.value, d(this, l, b).call(this);
};
b = function() {
  p(this, n)?.setDateRange({ startDate: this._startDate, endDate: this._endDate });
  const e = L(), t = T({
    ...e,
    startDate: this._startDate,
    endDate: this._endDate
  });
  window.history.pushState({}, "", `${V()}?${t}`);
};
u.styles = [
  D,
  m`
			:host {
				display: flex;
				flex-direction: column;
				gap: var(--uui-size-space-3);
			}
			umb-input-date {
				width: 100%;
			}

			:host([horizontal]) .input-container {
				display: flex;
				align-items: baseline;
				gap: var(--uui-size-space-3);
			}
		`
];
c([
  y()
], u.prototype, "_startDate", 2);
c([
  y()
], u.prototype, "_endDate", 2);
c([
  C({ type: Boolean, reflect: !0 })
], u.prototype, "horizontal", 2);
u = c([
  _("umb-log-viewer-date-range-selector")
], u);
var F = Object.getOwnPropertyDescriptor, M = (e, t, r, o) => {
  for (var a = o > 1 ? void 0 : o ? F(t, r) : t, i = e.length - 1, s; i >= 0; i--)
    (s = e[i]) && (a = s(a) || a);
  return a;
};
let h = class extends U {
  render() {
    return g`<uui-box id="to-many-logs-warning">
			<h3>Unable to view logs</h3>
			<p>Today's log file is too large to be viewed and would cause performance problems.</p>
			<p>If you need to view the log files, narrow your date range or try opening them manually.</p>
		</uui-box>`;
  }
};
h.styles = [
  m`
			:host {
				text-align: center;
			}
		`
];
h = M([
  _("umb-log-viewer-too-many-logs-warning")
], h);
var k = Object.getOwnPropertyDescriptor, q = (e, t, r, o) => {
  for (var a = o > 1 ? void 0 : o ? k(t, r) : t, i = e.length - 1, s; i >= 0; i--)
    (s = e[i]) && (a = s(a) || a);
  return a;
};
let v = class extends x {
  render() {
    return g`
			<umb-workspace-editor
				headline=${this.localize.term("treeHeaders_logViewer")}
				.enforceNoFooter=${!0}></umb-workspace-editor>
		`;
  }
};
v.styles = [
  D,
  m`
			:host {
				display: block;
				width: 100%;
				height: 100%;

				--umb-log-viewer-debug-color: var(--uui-color-default-emphasis);
				--umb-log-viewer-information-color: var(--uui-color-positive);
				--umb-log-viewer-warning-color: var(--uui-color-warning);
				--umb-log-viewer-error-color: var(--uui-color-danger);
				--umb-log-viewer-fatal-color: var(--uui-palette-black);
				--umb-log-viewer-verbose-color: var(--uui-color-current);
			}

			uui-tab-group {
				--uui-tab-divider: var(--uui-color-border);
				border-left: 1px solid var(--uui-color-border);
				border-right: 1px solid var(--uui-color-border);
			}
		`
];
v = q([
  _("umb-logviewer-workspace")
], v);
export {
  v as UmbLogViewerWorkspaceElement,
  v as element
};
//# sourceMappingURL=logviewer-workspace.element-BReZdNbK.js.map
