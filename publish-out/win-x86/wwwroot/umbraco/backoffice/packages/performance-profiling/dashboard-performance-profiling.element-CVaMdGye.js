import { UmbTextStyles as P } from "@umbraco-cms/backoffice/style";
import { html as n, unsafeHTML as u, css as S, state as m, query as v, customElement as y } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as D } from "@umbraco-cms/backoffice/lit-element";
import { ProfilingService as c } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecute as _ } from "@umbraco-cms/backoffice/resources";
var $ = Object.defineProperty, E = Object.getOwnPropertyDescriptor, d = (t) => {
  throw TypeError(t);
}, l = (t, e, i, s) => {
  for (var r = s > 1 ? void 0 : s ? E(e, i) : e, f = t.length - 1, g; f >= 0; f--)
    (g = t[f]) && (r = (s ? g(e, i, r) : g(r)) || r);
  return s && r && $(e, i, r), r;
}, w = (t, e, i) => e.has(t) || d("Cannot " + i), z = (t, e, i) => e.has(t) ? d("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), p = (t, e, i) => (w(t, e, "access private method"), i), a, h, b;
let o = class extends D {
  constructor() {
    super(...arguments), z(this, a), this._profilingStatus = !0, this._isDebugMode = !0;
  }
  firstUpdated() {
    this._getProfilingStatus();
  }
  async _getProfilingStatus() {
    const { data: t } = await _(this, c.getProfilingStatus());
    t && (this._profilingStatus = t.enabled ?? !1);
  }
  async _changeProfilingStatus() {
    const { error: t } = await _(
      this,
      c.putProfilingStatus({ body: { enabled: !this._profilingStatus } })
    );
    t ? p(this, a, h).call(this, this._profilingStatus) : p(this, a, h).call(this, !this._profilingStatus);
  }
  render() {
    return n`
			<uui-box headline=${this.localize.term("profiling_performanceProfiling")}>
				${typeof this._profilingStatus > "u" ? n`<uui-loader></uui-loader>` : p(this, a, b).call(this)}
			</uui-box>
		`;
  }
};
a = /* @__PURE__ */ new WeakSet();
h = function(t) {
  this._toggle.checked = t, this._profilingStatus = t;
};
b = function() {
  return this._isDebugMode ? n`
					${u(this.localize.term("profiling_performanceProfilingDescription"))}

					<uui-toggle
						id="toggle"
						label=${this.localize.term("profiling_activateByDefault")}
						label-position="left"
						?checked="${this._profilingStatus}"
						@change="${this._changeProfilingStatus}"></uui-toggle>

					<h4>${this.localize.term("profiling_reminder")}</h4>

					${u(this.localize.term("profiling_reminderDescription"))}
				` : n` ${u(this.localize.term("profiling_profilerEnabledDescription"))} `;
};
o.styles = [
  P,
  S`
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
  m()
], o.prototype, "_profilingStatus", 2);
l([
  m()
], o.prototype, "_isDebugMode", 2);
l([
  v("#toggle")
], o.prototype, "_toggle", 2);
o = l([
  y("umb-dashboard-performance-profiling")
], o);
const T = o;
export {
  o as UmbDashboardPerformanceProfilingElement,
  T as default
};
//# sourceMappingURL=dashboard-performance-profiling.element-CVaMdGye.js.map
