import { UmbTextStyles as b } from "@umbraco-cms/backoffice/style";
import { unsafeHTML as u, html as s, css as P, state as d, query as S, customElement as v } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as y } from "@umbraco-cms/backoffice/lit-element";
import { ProfilingService as h } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecute as c } from "@umbraco-cms/backoffice/resources";
var D = Object.defineProperty, $ = Object.getOwnPropertyDescriptor, m = (t) => {
  throw TypeError(t);
}, l = (t, e, i, a) => {
  for (var r = a > 1 ? void 0 : a ? $(e, i) : e, f = t.length - 1, g; f >= 0; f--)
    (g = t[f]) && (r = (a ? g(e, i, r) : g(r)) || r);
  return a && r && D(e, i, r), r;
}, E = (t, e, i) => e.has(t) || m("Cannot " + i), w = (t, e, i) => e.has(t) ? m("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), _ = (t, e, i) => (E(t, e, "access private method"), i), n, p;
let o = class extends y {
  constructor() {
    super(...arguments), w(this, n), this._profilingStatus = !0, this._isDebugMode = !0;
  }
  firstUpdated() {
    this._getProfilingStatus();
  }
  async _getProfilingStatus() {
    const { data: t } = await c(this, h.getProfilingStatus());
    t && (this._profilingStatus = t.enabled ?? !1);
  }
  async _changeProfilingStatus() {
    const { error: t } = await c(
      this,
      h.putProfilingStatus({ body: { enabled: !this._profilingStatus } })
    );
    t ? _(this, n, p).call(this, this._profilingStatus) : _(this, n, p).call(this, !this._profilingStatus);
  }
  renderProfilingStatus() {
    return this._isDebugMode ? s`
					${u(this.localize.term("profiling_performanceProfilingDescription"))}

					<uui-toggle
						id="toggle"
						label=${this.localize.term("profiling_activateByDefault")}
						label-position="left"
						?checked="${this._profilingStatus}"
						@change="${this._changeProfilingStatus}"></uui-toggle>

					<h4>${this.localize.term("profiling_reminder")}</h4>

					${u(this.localize.term("profiling_reminderDescription"))}
				` : s` ${u(this.localize.term("profiling_profilerEnabledDescription"))} `;
  }
  render() {
    return s`
			<uui-box headline=${this.localize.term("profiling_performanceProfiling")}>
				${typeof this._profilingStatus > "u" ? s`<uui-loader></uui-loader>` : this.renderProfilingStatus()}
			</uui-box>
		`;
  }
};
n = /* @__PURE__ */ new WeakSet();
p = function(t) {
  this._toggle.checked = t, this._profilingStatus = t;
};
o.styles = [
  b,
  P`
			:host {
				display: block;
				padding: var(--uui-size-layout-1);
			}

			uui-toggle {
				font-weight: bold;
			}

			h4 {
				margin-bottom: 0;
			}

			h4 + p {
				margin-top: 0;
			}
		`
];
l([
  d()
], o.prototype, "_profilingStatus", 2);
l([
  d()
], o.prototype, "_isDebugMode", 2);
l([
  S("#toggle")
], o.prototype, "_toggle", 2);
o = l([
  v("umb-dashboard-performance-profiling")
], o);
const O = o;
export {
  o as UmbDashboardPerformanceProfilingElement,
  O as default
};
//# sourceMappingURL=dashboard-performance-profiling.element-BxUm_lpX.js.map
