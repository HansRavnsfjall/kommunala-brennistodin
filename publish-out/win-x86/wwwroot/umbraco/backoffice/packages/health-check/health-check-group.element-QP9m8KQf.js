import { U as w } from "./health-check-dashboard.context-CVn1OCAb.js";
import { css as b, property as _, state as h, customElement as f, html as r, ifDefined as C, nothing as u, unsafeHTML as x } from "@umbraco-cms/backoffice/external/lit";
import { HealthCheckService as S, StatusResultTypeModel as d } from "@umbraco-cms/backoffice/external/backend-api";
import { UmbLitElement as g } from "@umbraco-cms/backoffice/lit-element";
import { UmbTextStyles as k } from "@umbraco-cms/backoffice/style";
import { tryExecute as R } from "@umbraco-cms/backoffice/resources";
var E = Object.defineProperty, V = Object.getOwnPropertyDescriptor, m = (e, t, i, o) => {
  for (var a = o > 1 ? void 0 : o ? V(t, i) : t, n = e.length - 1, c; n >= 0; n--)
    (c = e[n]) && (a = (o ? c(t, i, a) : c(a)) || a);
  return o && a && E(t, i, a), a;
};
let l = class extends g {
  async _onActionClick(e) {
    e.preventDefault(), this._buttonState = "waiting";
    const { error: t } = await R(this, S.postHealthCheckExecuteAction({ body: this.action }));
    if (t) {
      this._buttonState = "failed";
      return;
    }
    this._buttonState = "success", this.dispatchEvent(new CustomEvent("action-executed"));
  }
  render() {
    return r` <div class="action uui-text">
			<p>${this.action.description || r`<span class="no-description">This action has no description</span>`}</p>
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
          return r` <div class="required-value">
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
          return r`<div class="required-value">
						<uui-label for="action">Set new value:</uui-label>
						<uui-input
							id="action"
							type="text"
							pattern="${C(this.action.providedValueValidationRegex ?? void 0)}"
							@input=${(e) => this.action.providedValue = e.target.value}
							placeholder="Value"
							.value=${this.action.providedValue ?? ""}
							required></uui-input>
					</div>`;
        default:
          return r`<div class="required-value">
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
l.styles = [
  k,
  b`
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
m([
  _({ reflect: !0 })
], l.prototype, "action", 2);
m([
  h()
], l.prototype, "_buttonState", 2);
l = m([
  f("umb-dashboard-health-check-action")
], l);
var H = Object.defineProperty, A = Object.getOwnPropertyDescriptor, y = (e) => {
  throw TypeError(e);
}, p = (e, t, i, o) => {
  for (var a = o > 1 ? void 0 : o ? A(t, i) : t, n = e.length - 1, c; n >= 0; n--)
    (c = e[n]) && (a = (o ? c(t, i, a) : c(a)) || a);
  return o && a && H(t, i, a), a;
}, D = (e, t, i) => t.has(e) || y("Cannot " + i), O = (e, t, i) => t.has(e) ? y("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), q = (e, t, i) => (D(e, t, "access private method"), i), v, $;
let s = class extends g {
  constructor() {
    super(), O(this, v), this.consumeContext(w, (e) => {
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
    return r` <a href="section/settings/dashboard/health-check"> &larr; Back to overview </a>
			${this._group ? q(this, v, $).call(this) : u}`;
  }
  renderCheckResults(e) {
    if (!this._idResults)
      return u;
    const t = this._idResults.find((i) => i.id === e);
    return t ? r`<uui-icon-registry-essential>
			<div class="check-results-wrapper">
				${t.results?.map((i) => r`<div class="check-result">
						<div class="check-result-description">
							<span>${this.renderIcon(i.resultType)}</span>
							<p>${x(i.message)}</p>
						</div>

						${i.actions ? this.renderActions(i.actions) : u}
						${i.readMoreLink ? r`<uui-button
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
  renderIcon(e) {
    switch (e) {
      case d.SUCCESS:
        return r`<uui-icon style="color: var(--uui-color-positive);" name="check"></uui-icon>`;
      case d.WARNING:
        return r`<uui-icon style="color: var(--uui-color-warning-standalone);" name="alert"></uui-icon>`;
      case d.ERROR:
        return r`<uui-icon style="color: var(--uui-color-danger);" name="remove"></uui-icon>`;
      case d.INFO:
        return r`<uui-icon style="color:black;" name="info"></uui-icon>`;
      default:
        return u;
    }
  }
  renderActions(e) {
    return e.length ? r` <div class="action-wrapper">
				${e.map(
      (t) => r`<umb-dashboard-health-check-action
							.action=${t}
							@action-executed=${() => this._buttonHandler()}></umb-dashboard-health-check-action>`
    )}
			</div>` : u;
  }
};
v = /* @__PURE__ */ new WeakSet();
$ = function() {
  return r`
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
				${this._group?.checks?.map((e) => r`<uui-box headline="${e.name || "?"}">
						<p>${e.description}</p>
						${e.id ? this.renderCheckResults(e.id) : u}
					</uui-box>`)}
			</div>
		`;
};
s.styles = [
  k,
  b`
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
p([
  _()
], s.prototype, "groupName", 2);
p([
  h()
], s.prototype, "_buttonState", 2);
p([
  h()
], s.prototype, "_group", 2);
p([
  h()
], s.prototype, "_idResults", 2);
s = p([
  f("umb-dashboard-health-check-group")
], s);
const M = s;
export {
  s as UmbDashboardHealthCheckGroupElement,
  M as default
};
//# sourceMappingURL=health-check-group.element-QP9m8KQf.js.map
