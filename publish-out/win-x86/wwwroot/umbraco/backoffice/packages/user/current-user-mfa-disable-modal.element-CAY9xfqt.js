import "./current-user.store.token-N-3TWEFa.js";
import { UmbCurrentUserRepository as w } from "./current-user.repository-CzsCrtUS.js";
import "@umbraco-cms/backoffice/user";
import "@umbraco-cms/backoffice/class-api";
import "@umbraco-cms/backoffice/observable-api";
import { UMB_NOTIFICATION_CONTEXT as g } from "@umbraco-cms/backoffice/notification";
import { html as _, css as z, state as I, query as x, customElement as M } from "@umbraco-cms/backoffice/external/lit";
import { UmbModalBaseElement as D } from "@umbraco-cms/backoffice/modal";
import { UmbTextStyles as U } from "@umbraco-cms/backoffice/style";
import { isApiError as $ } from "@umbraco-cms/backoffice/resources";
var N = Object.defineProperty, S = Object.getOwnPropertyDescriptor, b = (t) => {
  throw TypeError(t);
}, h = (t, e, i, r) => {
  for (var a = r > 1 ? void 0 : r ? S(e, i) : e, d = t.length - 1, m; d >= 0; d--)
    (m = t[d]) && (a = (r ? m(e, i, a) : m(a)) || a);
  return r && a && N(e, i, a), a;
}, p = (t, e, i) => e.has(t) || b("Cannot " + i), v = (t, e, i) => (p(t, e, "read from private field"), i ? i.call(t) : e.get(t)), c = (t, e, i) => e.has(t) ? b("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), E = (t, e, i, r) => (p(t, e, "write to private field"), e.set(t, i), i), l = (t, e, i) => (p(t, e, "access private method"), i), f, u, o, y, C, n;
let s = class extends D {
  constructor() {
    super(), c(this, o), c(this, f, new w(this)), c(this, u), this.consumeContext(g, (t) => {
      E(this, u, t);
    });
  }
  render() {
    return this.data ? _`
			<uui-form>
				<form id="authForm" name="authForm" @submit=${l(this, o, y)} novalidate>
					<umb-body-layout headline=${this.data.displayName}>
						<div id="main">
							<p>
								<umb-localize key="user_2faDisableText">
									If you wish to disable this two-factor provider, then you must enter the code shown on your
									authentication device:
								</umb-localize>
							</p>

							<uui-form-layout-item class="text-center">
								<uui-label for="code" slot="label" required>
									<umb-localize key="user_2faCodeInput"></umb-localize>
								</uui-label>
								<uui-input
									id="code"
									name="code"
									type="text"
									inputmode="numeric"
									autocomplete="one-time-code"
									required
									required-message=${this.localize.term("general_required")}
									label=${this.localize.term("user_2faCodeInputHelp")}
									placeholder=${this.localize.term("user_2faCodeInputHelp")}></uui-input>
							</uui-form-layout-item>
						</div>
						<div slot="actions">
							<uui-button
								type="button"
								look="secondary"
								.label=${this.localize.term("general_close")}
								@click=${l(this, o, C)}>
								${this.localize.term("general_close")}
							</uui-button>
							<uui-button
								.state=${this._buttonState}
								type="submit"
								look="primary"
								.label=${this.localize.term("buttons_save")}>
								${this.localize.term("general_submit")}
							</uui-button>
						</div>
					</umb-body-layout>
				</form>
			</uui-form>
		` : _`<uui-loader-bar></uui-loader-bar>`;
  }
};
f = /* @__PURE__ */ new WeakMap();
u = /* @__PURE__ */ new WeakMap();
o = /* @__PURE__ */ new WeakSet();
y = async function(t) {
  if (t.preventDefault(), this._codeInput.setCustomValidity(""), !this.data) throw new Error("No data provided");
  const e = t.target;
  if (!e.checkValidity()) return;
  const r = new FormData(e).get("code");
  if (!r) return;
  this._buttonState = "waiting";
  const { error: a } = await v(this, f).disableMfaProvider(this.data.providerName, r);
  a ? (this._buttonState = "failed", $(a) ? a.body.operationStatus === "InvalidCode" ? (this._codeInput.setCustomValidity(this.localize.term("user_2faInvalidCode")), this._codeInput.focus()) : l(this, o, n).call(this, this.localize.term("user_2faProviderIsNotDisabledMsg", this.data.displayName ?? this.data.providerName), "warning") : l(this, o, n).call(this, a.message, "warning")) : (l(this, o, n).call(this, this.localize.term("user_2faProviderIsDisabledMsg", this.data.displayName ?? this.data.providerName)), this.modalContext?.submit(), this._buttonState = "success");
};
C = async function() {
  this.modalContext?.submit();
};
n = async function(t, e) {
  v(this, u)?.peek(e ?? "positive", {
    data: {
      headline: this.localize.term("member_2fa"),
      message: t
    }
  });
};
s.styles = [
  U,
  z`
			#authForm {
				height: 100%;
			}

			#code {
				width: 100%;
				max-width: 300px;
			}

			.text-center {
				text-align: center;
			}
		`
];
h([
  I()
], s.prototype, "_buttonState", 2);
h([
  x("#code")
], s.prototype, "_codeInput", 2);
s = h([
  M("umb-current-user-mfa-disable-modal")
], s);
const H = s;
export {
  s as UmbCurrentUserMfaDisableModalElement,
  H as default
};
//# sourceMappingURL=current-user-mfa-disable-modal.element-CAY9xfqt.js.map
