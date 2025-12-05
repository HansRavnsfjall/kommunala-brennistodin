import { U as v } from "./health-check-dashboard.context-CVn1OCAb.js";
import { css as f, property as R, state as m, customElement as _, html as s, nothing as c } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as b } from "@umbraco-cms/backoffice/lit-element";
import { UmbTextStyles as g } from "@umbraco-cms/backoffice/style";
import { ensureSlash as $, path as E } from "@umbraco-cms/backoffice/router";
import { StatusResultTypeModel as h } from "@umbraco-cms/backoffice/external/backend-api";
var S = Object.defineProperty, H = Object.getOwnPropertyDescriptor, x = (e) => {
  throw TypeError(e);
}, d = (e, t, o, a) => {
  for (var i = a > 1 ? void 0 : a ? H(t, o) : t, r = e.length - 1, n; r >= 0; r--)
    (n = e[r]) && (i = (a ? n(t, o, i) : n(i)) || i);
  return a && i && S(t, o, i), i;
}, O = (e, t, o) => t.has(e) || x("Cannot " + o), D = (e, t, o) => t.has(e) ? x("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, o), y = (e, t, o) => (O(e, t, "access private method"), o), p, C, k;
let u = class extends b {
  constructor() {
    super(), D(this, p), this._tagResults = [], this.consumeContext(v, (e) => {
      this._healthCheckContext = e, !(!this._healthCheckContext || !this.manifest?.meta.label) && (this._api = this._healthCheckContext?.apis.get(this.manifest?.meta.label), this._api && this.observe(
        this._api.results,
        (t) => {
          this._keyResults = t;
        },
        "_observeApiResults"
      ));
    });
  }
  render() {
    return s`<a href="${$(E()) + this.manifest?.meta.label}">
			<uui-box class="group-box"> ${this.manifest?.meta.label} ${y(this, p, C).call(this)} </uui-box>
		</a>`;
  }
  filterResults(e) {
    const t = {
      success: 0,
      warning: 0,
      error: 0,
      info: 0
    };
    return e.forEach((o) => {
      switch (o) {
        case h.SUCCESS:
          t.success += 1;
          break;
        case h.WARNING:
          t.warning += 1;
          break;
        case h.ERROR:
          t.error += 1;
          break;
        case h.INFO:
          t.info += 1;
          break;
      }
    }), t;
  }
};
p = /* @__PURE__ */ new WeakSet();
C = function() {
  const e = [];
  return this._keyResults?.checks?.forEach((t) => {
    t?.results?.forEach((o) => {
      e.push(o.resultType ?? h.ERROR);
    });
  }), this._tagResults = e, s`<div>${y(this, p, k).call(this, this.filterResults(this._tagResults))}</div>`;
};
k = function(e) {
  return s`${e.success > 0 ? s`<uui-tag look="secondary" color="positive">
					<uui-icon name="check"></uui-icon>
					${e.success}
				</uui-tag> ` : c}
		${e.warning > 0 ? s`<uui-tag look="secondary" color="warning">
					<uui-icon name="alert"></uui-icon>
					${e.warning}
				</uui-tag>` : c}
		${e.error > 0 ? s`<uui-tag look="secondary" color="danger">
					<uui-icon name="remove"></uui-icon>
					${e.error}
				</uui-tag>` : c}
		${e.info > 0 ? s`<uui-tag look="secondary">
					<uui-icon name="info"></uui-icon>
					${e.info}
				</uui-tag>` : c} `;
};
u.styles = [
  g,
  f`
			.group-box {
				position: relative;
			}

			.group-box:hover::after {
				content: '';
				width: 100%;
				height: 100%;
				position: absolute;
				top: 0;
				bottom: 0;
				left: 0;
				right: 0;
				border-radius: var(--uui-border-radius);
				transition: opacity 100ms ease-out 0s;
				opacity: 0.33;
				outline-color: var(--uui-color-selected);
				outline-width: 4px;
				outline-style: solid;
			}

			a {
				text-align: center;
				font-weight: bold;
				cursor: pointer;
				text-decoration: none;
				color: var(--uui-color-text);
				margin-bottom: var(--uui-size-space-3);
				display: block;
			}

			uui-icon {
				padding-right: var(--uui-size-space-2);
			}
		`
];
d([
  R({ type: Object })
], u.prototype, "manifest", 2);
d([
  m()
], u.prototype, "_tagResults", 2);
d([
  m()
], u.prototype, "_keyResults", 2);
u = d([
  _("umb-health-check-group-box-overview")
], u);
var P = Object.defineProperty, U = Object.getOwnPropertyDescriptor, w = (e, t, o, a) => {
  for (var i = a > 1 ? void 0 : a ? U(t, o) : t, r = e.length - 1, n; r >= 0; r--)
    (n = e[r]) && (i = (a ? n(t, o, i) : n(i)) || i);
  return a && i && P(t, o, i), i;
};
let l = class extends b {
  constructor() {
    super(), this.consumeContext(v, (e) => {
      this._healthCheckDashboardContext = e;
    });
  }
  async _onHealthCheckHandler() {
    this._buttonState = "waiting", await this._healthCheckDashboardContext?.checkAll(), this._buttonState = "success";
  }
  render() {
    return s`
			<uui-box>
				<div id="header" slot="header">
					<h2>Health Check</h2>
					<uui-button
						label="Perform all checks"
						color="positive"
						look="primary"
						.state="${this._buttonState}"
						@click="${this._onHealthCheckHandler}">
						Perform all checks
					</uui-button>
				</div>
				<div class="grid">

					${// As well as the visual presentation, this amend to the rendering based on button state is necessary
    // in order to trigger an update after the checks are complete (this.requestUpdate() doesn't suffice).
    this._buttonState !== "waiting" ? s`<umb-extension-slot
									type="healthCheck"
									default-element="umb-health-check-group-box-overview"></umb-extension-slot>` : s`<uui-loader></uui-loader>`}
					</umb-extension-slot>
				</div>
			</uui-box>
		`;
  }
};
l.styles = [
  g,
  f`
			:host {
				display: block;
				padding: var(--uui-size-layout-1);
			}

			uui-box + uui-box {
				margin-top: var(--uui-size-space-5);
			}

			#header {
				width: 100%;
				display: flex;
				justify-content: space-between;
				align-items: center;
			}

			#header h2 {
				font-size: var(--uui-type-h5-size);
				margin: 0;
			}

			.grid {
				display: grid;
				gap: var(--uui-size-space-4);
				grid-template-columns: repeat(auto-fit, minmax(250px, auto));
			}
		`
];
w([
  m()
], l.prototype, "_buttonState", 2);
l = w([
  _("umb-dashboard-health-check-overview")
], l);
const M = l;
export {
  l as UmbDashboardHealthCheckOverviewElement,
  M as default
};
//# sourceMappingURL=health-check-overview.element-DyAgalnt.js.map
