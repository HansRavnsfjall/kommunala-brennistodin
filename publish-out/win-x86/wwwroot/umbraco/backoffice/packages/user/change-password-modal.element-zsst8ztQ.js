import { when as g, html as f, css as U, query as _, state as P, customElement as q } from "@umbraco-cms/backoffice/external/lit";
import { UmbModalBaseElement as z } from "@umbraco-cms/backoffice/modal";
import { UmbTextStyles as E } from "@umbraco-cms/backoffice/style";
import { UmbUserItemRepository as I } from "@umbraco-cms/backoffice/user";
import { UMB_CURRENT_USER_CONTEXT as M } from "@umbraco-cms/backoffice/current-user";
var x = Object.defineProperty, $ = Object.getOwnPropertyDescriptor, b = (e) => {
  throw TypeError(e);
}, l = (e, s, r, a) => {
  for (var t = a > 1 ? void 0 : a ? $(s, r) : s, o = e.length - 1, d; o >= 0; o--)
    (d = e[o]) && (t = (a ? d(s, r, t) : d(t)) || t);
  return a && t && x(s, r, t), t;
}, h = (e, s, r) => s.has(e) || b("Cannot " + r), p = (e, s, r) => (h(e, s, "read from private field"), r ? r.call(e) : s.get(e)), m = (e, s, r) => s.has(e) ? b("Cannot add the same private member more than once") : s instanceof WeakSet ? s.add(e) : s.set(e, r), k = (e, s, r, a) => (h(e, s, "write to private field"), s.set(e, r), r), w = (e, s, r) => (h(e, s, "access private method"), r), c, n, u, y, C, v;
let i = class extends z {
  constructor() {
    super(), m(this, u), this._headline = this.localize.term("general_changePassword"), this._isCurrentUser = !1, m(this, c, new I(this)), m(this, n), this.consumeContext(M, (e) => {
      k(this, n, e), w(this, u, v).call(this);
    });
  }
  async firstUpdated() {
    if (this._confirmPasswordInput?.addValidator(
      "customError",
      () => this.localize.term("user_passwordMismatch"),
      () => this._confirmPasswordInput?.value !== this._newPasswordInput?.value
    ), !this.data?.user.unique) return;
    const { data: e } = await p(this, c).requestItems([this.data.user.unique]);
    if (e) {
      const s = e[0].name;
      this._headline = `Change password for ${s}`;
    }
  }
  render() {
    return f`
			<uui-dialog-layout class="uui-text" headline=${this._headline}>
				<uui-form>
					<form id="ChangePasswordForm" @submit=${w(this, u, C)}>
						${g(
      this._isCurrentUser,
      () => f`
								<uui-form-layout-item style="margin-bottom: var(--uui-size-layout-2)">
									<uui-label slot="label" id="oldPasswordLabel" for="oldPassword" required>
										<umb-localize key="user_passwordCurrent">Current password</umb-localize>
									</uui-label>
									<uui-input-password
										id="oldPassword"
										name="oldPassword"
										required
										required-message="Current password is required">
									</uui-input-password>
								</uui-form-layout-item>
							`
    )}
						<uui-form-layout-item>
							<uui-label slot="label" id="newPasswordLabel" for="newPassword" required>
								<umb-localize key="user_newPassword">New password</umb-localize>
							</uui-label>
							<uui-input-password
								id="newPassword"
								name="newPassword"
								required
								required-message="New password is required">
							</uui-input-password>
						</uui-form-layout-item>
						<uui-form-layout-item>
							<uui-label slot="label" id="confirmPasswordLabel" for="confirmPassword" required>
								<umb-localize key="user_confirmNewPassword">Confirm new password</umb-localize>
							</uui-label>
							<uui-input-password
								id="confirmPassword"
								name="confirmPassword"
								required
								required-message="Confirm password is required">
							</uui-input-password>
						</uui-form-layout-item>
					</form>
				</uui-form>
				<uui-button slot="actions" label=${this.localize.term("general_cancel")} @click=${w(this, u, y)}></uui-button>
				<uui-button
					slot="actions"
					type="submit"
					form="ChangePasswordForm"
					color="positive"
					look="primary"
					label=${this.localize.term("general_confirm")}></uui-button>
			</uui-dialog-layout>
		`;
  }
};
c = /* @__PURE__ */ new WeakMap();
n = /* @__PURE__ */ new WeakMap();
u = /* @__PURE__ */ new WeakSet();
y = function() {
  this.modalContext?.reject();
};
C = function(e) {
  e.preventDefault();
  const s = e.target;
  if (!s || !s.checkValidity()) return;
  const a = new FormData(s), t = a.get("oldPassword"), o = a.get("newPassword");
  this.value = { oldPassword: t, newPassword: o }, this.modalContext?.submit();
};
v = async function() {
  if (!p(this, n) || !this.data?.user.unique) {
    this._isCurrentUser = !1;
    return;
  }
  this._isCurrentUser = await p(this, n).isUserCurrentUser(this.data.user.unique);
};
i.styles = [
  E,
  U`
			uui-input-password {
				width: 100%;
			}
		`
];
l([
  _("#newPassword")
], i.prototype, "_newPasswordInput", 2);
l([
  _("#confirmPassword")
], i.prototype, "_confirmPasswordInput", 2);
l([
  P()
], i.prototype, "_headline", 2);
l([
  P()
], i.prototype, "_isCurrentUser", 2);
i = l([
  q("umb-change-password-modal")
], i);
const T = i;
export {
  i as UmbChangePasswordModalElement,
  T as default
};
//# sourceMappingURL=change-password-modal.element-zsst8ztQ.js.map
