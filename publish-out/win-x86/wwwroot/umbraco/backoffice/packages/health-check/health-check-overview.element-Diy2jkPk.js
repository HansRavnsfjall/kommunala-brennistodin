import { U as d } from "./health-check-dashboard.context-CVn1OCAb.js";
import { css as b, property as x, state as m, customElement as v, html as s, nothing as c } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as f } from "@umbraco-cms/backoffice/lit-element";
import { UmbTextStyles as g } from "@umbraco-cms/backoffice/style";
import { ensureSlash as y, path as C } from "@umbraco-cms/backoffice/router";
import { StatusResultTypeModel as l } from "@umbraco-cms/backoffice/external/backend-api";
var k = Object.defineProperty, w = Object.getOwnPropertyDescriptor, p = (e, t, i, r) => {
  for (var o = r > 1 ? void 0 : r ? w(t, i) : t, a = e.length - 1, u; a >= 0; a--)
    (u = e[a]) && (o = (r ? u(t, i, o) : u(o)) || o);
  return r && o && k(t, i, o), o;
};
let n = class extends f {
  constructor() {
    super(), this._tagResults = [], this.consumeContext(d, (e) => {
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
    return s`<a href="${y(C()) + this.manifest?.meta.label}">
			<uui-box class="group-box"> ${this.manifest?.meta.label} ${this._renderStatus()} </uui-box>
		</a>`;
  }
  _renderStatus() {
    const e = [];
    return this._keyResults?.checks?.forEach((t) => {
      t?.results?.forEach((i) => {
        e.push(i.resultType ?? l.ERROR);
      });
    }), this._tagResults = e, s`<div>${this._renderCheckResults(this.filterResults(this._tagResults))}</div>`;
  }
  _renderCheckResults(e) {
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
  }
  filterResults(e) {
    const t = {
      success: 0,
      warning: 0,
      error: 0,
      info: 0
    };
    return e.forEach((i) => {
      switch (i) {
        case l.SUCCESS:
          t.success += 1;
          break;
        case l.WARNING:
          t.warning += 1;
          break;
        case l.ERROR:
          t.error += 1;
          break;
        case l.INFO:
          t.info += 1;
          break;
      }
    }), t;
  }
};
n.styles = [
  g,
  b`
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
p([
  x({ type: Object })
], n.prototype, "manifest", 2);
p([
  m()
], n.prototype, "_tagResults", 2);
p([
  m()
], n.prototype, "_keyResults", 2);
n = p([
  v("umb-health-check-group-box-overview")
], n);
var R = Object.defineProperty, $ = Object.getOwnPropertyDescriptor, _ = (e, t, i, r) => {
  for (var o = r > 1 ? void 0 : r ? $(t, i) : t, a = e.length - 1, u; a >= 0; a--)
    (u = e[a]) && (o = (r ? u(t, i, o) : u(o)) || o);
  return r && o && R(t, i, o), o;
};
let h = class extends f {
  constructor() {
    super(), this.consumeContext(d, (e) => {
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
h.styles = [
  g,
  b`
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
_([
  m()
], h.prototype, "_buttonState", 2);
h = _([
  v("umb-dashboard-health-check-overview")
], h);
const U = h;
export {
  h as UmbDashboardHealthCheckOverviewElement,
  U as default
};
//# sourceMappingURL=health-check-overview.element-Diy2jkPk.js.map
