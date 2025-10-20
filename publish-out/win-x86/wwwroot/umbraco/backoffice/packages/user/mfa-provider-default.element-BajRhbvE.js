import { UserService as f } from "@umbraco-cms/backoffice/external/backend-api";
import { css as _, property as l, state as u, query as b, customElement as v, html as m } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as y } from "@umbraco-cms/backoffice/lit-element";
import { UmbApiError as g, tryExecute as C } from "@umbraco-cms/backoffice/resources";
import { UMB_NOTIFICATION_CONTEXT as w } from "@umbraco-cms/backoffice/notification";
import { UmbTextStyles as N } from "@umbraco-cms/backoffice/style";
var z = Object.defineProperty, x = Object.getOwnPropertyDescriptor, p = (t) => {
  throw TypeError(t);
}, o = (t, e, a, s) => {
  for (var r = s > 1 ? void 0 : s ? x(e, a) : e, d = t.length - 1, n; d >= 0; d--)
    (n = t[d]) && (r = (s ? n(e, a, r) : n(r)) || r);
  return s && r && z(e, a, r), r;
}, S = (t, e, a) => e.has(t) || p("Cannot " + a), U = (t, e, a) => e.has(t) ? p("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, a), k = (t, e, a) => (S(t, e, "access private method"), a), c, h;
let i = class extends y {
  constructor() {
    super(), U(this, c), this.providerName = "", this.displayName = "", this.callback = async () => ({}), this.close = () => {
    }, this._loading = !0, this._secret = "", this._qrCodeSetupImageUrl = "", this.consumeContext(w, (t) => {
      this.notificationContext = t;
    });
  }
  async firstUpdated() {
    await k(this, c, h).call(this), this._loading = !1;
  }
  render() {
    return this._loading ? m`<uui-loader-bar></uui-loader-bar>` : m`
			<uui-form>
				<form id="authForm" name="authForm" @submit=${this.submit} novalidate>
					<umb-body-layout headline=${this.displayName}>
						<div id="main">
							<uui-box .headline=${this.localize.term("member_2fa")}>
								<div class="text-center">
									<p>
										<umb-localize key="user_2faQrCodeDescription">
											Scan this QR code with your authenticator app to enable two-factor authentication
										</umb-localize>
									</p>
									<img
										id="qrCode"
										.src=${this._qrCodeSetupImageUrl}
										alt=${this.localize.term("user_2faQrCodeAlt")}
										title=${this.localize.term("user_2faQrCodeTitle")}
										loading="eager" />
								</div>
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
							</uui-box>
						</div>
						<div slot="actions">
							<uui-button
								type="button"
								look="secondary"
								.label=${this.localize.term("general_close")}
								@click=${this.close}>
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
		`;
  }
  /**
   * Show a peek notification with a message.
   * @param message The message to show.
   * @param color
   */
  peek(t, e) {
    this.notificationContext?.peek(e ?? "positive", {
      data: {
        headline: this.localize.term("member_2fa"),
        message: t
      }
    });
  }
  /**
   * Submit the form with the code and secret back to the opener.
   * @param e The submit event
   */
  async submit(t) {
    t.preventDefault(), this.codeField?.setCustomValidity("");
    const e = t.target;
    if (!e.checkValidity()) return;
    const s = new FormData(e).get("code");
    if (!s) return;
    this._buttonState = "waiting";
    const { error: r } = await this.callback(this.providerName, s, this._secret);
    r ? (this._buttonState = "failed", g.isUmbApiError(r) ? r.problemDetails.operationStatus === "InvalidCode" ? (this.codeField?.setCustomValidity(this.localize.term("user_2faInvalidCode")), this.codeField?.focus()) : this.peek(
      this.localize.term("user_2faProviderIsNotEnabledMsg", this.displayName ?? this.providerName),
      "warning"
    ) : this.peek(r.message, "warning")) : (this.peek(this.localize.term("user_2faProviderIsEnabledMsg", this.displayName ?? this.providerName)), this._buttonState = "success", this.close());
  }
};
c = /* @__PURE__ */ new WeakSet();
h = async function() {
  if (!this.providerName)
    throw this.peek("Provider name is required", "danger"), new Error("Provider name is required");
  const { data: t } = await C(
    this,
    f.getUserCurrent2FaByProviderName({ path: { providerName: this.providerName } })
  ), e = t;
  if (!e)
    throw this.peek("No data returned", "danger"), new Error("No data returned");
  if (!e.secret)
    throw this.peek("The provider did not return a secret.", "danger"), new Error("No secret returned");
  this._secret = e.secret, this._qrCodeSetupImageUrl = e.qrCodeSetupImageUrl;
};
i.styles = [
  N,
  _`
			#authForm {
				height: 100%;
			}

			#qrCode {
				width: 100%;
				aspect-ratio: 1;
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
o([
  l({ attribute: !1 })
], i.prototype, "providerName", 2);
o([
  l({ attribute: !1 })
], i.prototype, "displayName", 2);
o([
  l({ attribute: !1 })
], i.prototype, "callback", 2);
o([
  l({ attribute: !1 })
], i.prototype, "close", 2);
o([
  u()
], i.prototype, "_loading", 2);
o([
  u()
], i.prototype, "_secret", 2);
o([
  u()
], i.prototype, "_qrCodeSetupImageUrl", 2);
o([
  u()
], i.prototype, "_buttonState", 2);
o([
  b("#code")
], i.prototype, "codeField", 2);
i = o([
  v("umb-mfa-provider-default")
], i);
export {
  i as U
};
//# sourceMappingURL=mfa-provider-default.element-BajRhbvE.js.map
