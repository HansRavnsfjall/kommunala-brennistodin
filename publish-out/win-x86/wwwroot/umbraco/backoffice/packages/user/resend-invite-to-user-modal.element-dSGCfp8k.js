import { UmbInviteUserRepository as _ } from "./invite-user.repository-BozeSiv3.js";
import { html as d, customElement as g } from "@umbraco-cms/backoffice/external/lit";
import { UmbModalBaseElement as b } from "@umbraco-cms/backoffice/modal";
var y = Object.getOwnPropertyDescriptor, c = (e) => {
  throw TypeError(e);
}, U = (e, t, r, o) => {
  for (var a = o > 1 ? void 0 : o ? y(t, r) : t, s = e.length - 1, l; s >= 0; s--)
    (l = e[s]) && (a = l(a) || a);
  return a;
}, f = (e, t, r) => t.has(e) || c("Cannot " + r), w = (e, t, r) => (f(e, t, "read from private field"), r ? r.call(e) : t.get(e)), m = (e, t, r) => t.has(e) ? c("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), v = (e, t, r) => (f(e, t, "access private method"), r), u, i, h, p;
let n = class extends b {
  constructor() {
    super(...arguments), m(this, i), m(this, u, new _(this));
  }
  render() {
    return d`<uui-dialog-layout headline="Resend invite">
			${v(this, i, p).call(this)}

			<uui-button @click=${this._rejectModal} slot="actions" label="Cancel" look="secondary"></uui-button>
			<uui-button
				slot="actions"
				type="submit"
				label="Resend invite"
				look="primary"
				color="positive"
				form="ResendInviteToUserForm"></uui-button>
		</uui-dialog-layout>`;
  }
};
u = /* @__PURE__ */ new WeakMap();
i = /* @__PURE__ */ new WeakSet();
h = async function(e) {
  if (e.preventDefault(), !this.modalContext?.data.user.unique) throw new Error("User unique is missing");
  const t = e.target;
  if (!t || !t.checkValidity()) return;
  const a = new FormData(t).get("message"), { error: s } = await w(this, u).resendInvite({
    user: {
      unique: this.modalContext.data.user.unique
    },
    message: a
  });
  s || this._submitModal();
};
p = function() {
  return d` <uui-form>
			<form id="ResendInviteToUserForm" name="form" @submit="${v(this, i, h)}">
				<uui-form-layout-item>
					<uui-label id="messageLabel" slot="label" for="message" required>Message</uui-label>
					<uui-textarea id="message" label="message" name="message" required></uui-textarea>
				</uui-form-layout-item>
			</form>
		</uui-form>`;
};
n = U([
  g("umb-resend-invite-to-user-modal")
], n);
const I = n;
export {
  n as UmbResendInviteToUserModalElement,
  I as default
};
//# sourceMappingURL=resend-invite-to-user-modal.element-dSGCfp8k.js.map
