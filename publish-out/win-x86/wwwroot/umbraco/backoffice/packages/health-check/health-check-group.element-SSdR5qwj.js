import { U as S } from "./health-check-dashboard.context-CVn1OCAb.js";
import { css as _, property as f, state as v, customElement as g, html as a, ifDefined as R, nothing as u, unsafeHTML as E } from "@umbraco-cms/backoffice/external/lit";
import { HealthCheckService as V, StatusResultTypeModel as h } from "@umbraco-cms/backoffice/external/backend-api";
import { UmbLitElement as k } from "@umbraco-cms/backoffice/lit-element";
import { UmbTextStyles as y } from "@umbraco-cms/backoffice/style";
import { tryExecute as H } from "@umbraco-cms/backoffice/resources";
var A = Object.defineProperty, D = Object.getOwnPropertyDescriptor, b = (e, t, i, o) => {
  for (var r = o > 1 ? void 0 : o ? D(t, i) : t, n = e.length - 1, c; n >= 0; n--)
    (c = e[n]) && (r = (o ? c(t, i, r) : c(r)) || r);
  return o && r && A(t, i, r), r;
};
let p = class extends k {
  async _onActionClick(e) {
    e.preventDefault(), this._buttonState = "waiting";
    const { error: t } = await H(this, V.postHealthCheckExecuteAction({ body: this.action }));
    if (t) {
      this._buttonState = "failed";
      return;
    }
    this._buttonState = "success", this.dispatchEvent(new CustomEvent("action-executed"));
  }
  render() {
    return a` <div class="action uui-text">
			<p>${this.action.description || a`<span class="no-description">This action has no description</span>`}</p>
			<uui-form>
				<form @submit=${(e) => this._onActionClick(e)}>
					${this._renderValueRequired()}
					<uui-button
						type="submit"
						look="primary"
						color="positive"
						label="${this.action.name || "Action"}"
						.state=${this._buttonState}>
						${this.action.name || "Action"}
					</uui-button>
				</form>
			</uui-form>
		</div>`;
  }
  _renderValueRequired() {
    if (this.action.valueRequired)
      switch (this.action.providedValueValidation) {
        case "email":
          return a` <div class="required-value">
						<uui-label for="action">Set new value:</uui-label>
						<uui-input
							id="action"
							type="email"
							@input=${(e) => this.action.providedValue = e.target.value}
							placeholder="Value"
							.value=${this.action.providedValue ?? ""}
							required></uui-input>
					</div>`;
        case "regex":
          return a`<div class="required-value">
						<uui-label for="action">Set new value:</uui-label>
						<uui-input
							id="action"
							type="text"
							pattern="${R(this.action.providedValueValidationRegex ?? void 0)}"
							@input=${(e) => this.action.providedValue = e.target.value}
							placeholder="Value"
							.value=${this.action.providedValue ?? ""}
							required></uui-input>
					</div>`;
        default:
          return a`<div class="required-value">
						<uui-label for="action">Set new value:</uui-label>
						<uui-input
							id="action"
							type="text"
							@input=${(e) => this.action.providedValue = e.target.value}
							placeholder="Value"
							.value=${this.action.providedValue ?? ""}
							required></uui-input>
					</div>`;
      }
    return u;
  }
};
p.styles = [
  y,
  _`
			:host {
				margin: var(--uui-size-space-4) 0;
				display: block;
				border-radius: var(--uui-border-radius);
				background-color: var(--uui-color-surface-alt);
			}
			form {
				margin: 0;
				padding: 0;
			}

			p {
				padding-top: 0;
				margin-top: 0;
			}

			.action {
				padding: var(--uui-size-space-5) var(--uui-size-space-6);
				width: 100%;
			}

			.action uui-label {
				display: block;
			}

			.action uui-button {
				flex-shrink: 1;
			}

			.no-description {
				color: var(--uui-color-border-emphasis);
				font-style: italic;
			}

			.required-value {
				margin: 0 0 var(--uui-size-space-4);
			}
		`
];
b([
  f({ reflect: !0 })
], p.prototype, "action", 2);
b([
  v()
], p.prototype, "_buttonState", 2);
p = b([
  g("umb-dashboard-health-check-action")
], p);
var O = Object.defineProperty, q = Object.getOwnPropertyDescriptor, $ = (e) => {
  throw TypeError(e);
}, d = (e, t, i, o) => {
  for (var r = o > 1 ? void 0 : o ? q(t, i) : t, n = e.length - 1, c; n >= 0; n--)
    (c = e[n]) && (r = (o ? c(t, i, r) : c(r)) || r);
  return o && r && O(t, i, r), r;
}, P = (e, t, i) => t.has(e) || $("Cannot " + i), T = (e, t, i) => t.has(e) ? $("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), m = (e, t, i) => (P(e, t, "access private method"), i), l, w, C, x;
let s = class extends k {
  constructor() {
    super(), T(this, l), this.consumeContext(S, (e) => {
      this._healthCheckContext = e, this._api = this._healthCheckContext?.apis.get(this.groupName), this._api && (this._api.getGroupChecks(this.groupName), this.observe(this._api.checks, (t) => {
        this._group = t;
      }), this.observe(this._api.results, (t) => {
        this._idResults = t?.checks;
      }));
    });
  }
  async _buttonHandler() {
    this._buttonState = "waiting", await this._api?.checkGroup(this.groupName), this._buttonState = "success";
  }
  render() {
    return a` <a href="section/settings/dashboard/health-check"> &larr; Back to overview </a>
			${this._group ? m(this, l, w).call(this) : u}`;
  }
  renderCheckResults(e) {
    if (!this._idResults)
      return u;
    const t = this._idResults.find((i) => i.id === e);
    return t ? a`<uui-icon-registry-essential>
			<div class="check-results-wrapper">
				${t.results?.map((i) => a`<div class="check-result">
						<div class="check-result-description">
							<span>${m(this, l, C).call(this, i.resultType)}</span>
							<p>${E(i.message)}</p>
						</div>

						${i.actions ? m(this, l, x).call(this, i.actions) : u}
						${i.readMoreLink ? a`<uui-button
									label="Read more"
									color="default"
									look="primary"
									target="_blank"
									href="${i.readMoreLink}">
									Read more
									<uui-icon name="icon-out"></uui-icon>
								</uui-button>` : u}
					</div>`)}
			</div>
		</uui-icon-registry-essential>` : u;
  }
};
l = /* @__PURE__ */ new WeakSet();
w = function() {
  return a`
			<div class="header">
				<h2>${this._group?.name}</h2>
				<uui-button
					label="Perform checks"
					color="positive"
					look="primary"
					.state="${this._buttonState}"
					@click="${this._buttonHandler}">
					Perform checks
				</uui-button>
			</div>
			<div class="checks-wrapper">
				${this._group?.checks?.map((e) => a`<uui-box headline="${e.name || "?"}">
						<p>${e.description}</p>
						${e.id ? this.renderCheckResults(e.id) : u}
					</uui-box>`)}
			</div>
		`;
};
C = function(e) {
  switch (e) {
    case h.SUCCESS:
      return a`<uui-icon style="color: var(--uui-color-positive);" name="check"></uui-icon>`;
    case h.WARNING:
      return a`<uui-icon style="color: var(--uui-color-warning-standalone);" name="alert"></uui-icon>`;
    case h.ERROR:
      return a`<uui-icon style="color: var(--uui-color-danger);" name="remove"></uui-icon>`;
    case h.INFO:
      return a`<uui-icon style="color:black;" name="info"></uui-icon>`;
    default:
      return u;
  }
};
x = function(e) {
  return e.length ? a` <div class="action-wrapper">
				${e.map(
    (t) => a`<umb-dashboard-health-check-action
							.action=${t}
							@action-executed=${() => this._buttonHandler()}></umb-dashboard-health-check-action>`
  )}
			</div>` : u;
};
s.styles = [
  y,
  _`
			:host {
				display: block;
				margin: var(--uui-size-layout-1);
			}

			uui-box + uui-box {
				margin-top: var(--uui-size-space-5);
			}

			p {
				margin: 0;
			}

			.header {
				display: flex;
				justify-content: space-between;
				align-items: center;
			}

			.check-results-wrapper .check-result {
				padding-top: var(--uui-size-space-5);
			}

			.check-results-wrapper .check-result:not(:last-child) {
				border-bottom: 1px solid var(--uui-color-divider-standalone);
				padding-bottom: var(--uui-size-space-5);
			}

			.check-results-wrapper uui-button {
				margin-block-start: 1em;
			}

			.check-result-description {
				display: flex;
			}

			.check-result-description span {
				width: 36px;
			}

			uui-icon {
				vertical-align: sub;
			}
		`
];
d([
  f()
], s.prototype, "groupName", 2);
d([
  v()
], s.prototype, "_buttonState", 2);
d([
  v()
], s.prototype, "_group", 2);
d([
  v()
], s.prototype, "_idResults", 2);
s = d([
  g("umb-dashboard-health-check-group")
], s);
const j = s;
export {
  s as UmbDashboardHealthCheckGroupElement,
  j as default
};
//# sourceMappingURL=health-check-group.element-SSdR5qwj.js.map
