import { UmbInviteUserRepository as U } from "./invite-user.repository-BozeSiv3.js";
import { html as p, css as w, customElement as x } from "@umbraco-cms/backoffice/external/lit";
import { UmbTextStyles as k } from "@umbraco-cms/backoffice/style";
import { UmbModalBaseElement as q } from "@umbraco-cms/backoffice/modal";
var G = Object.getOwnPropertyDescriptor, c = (e) => {
  throw TypeError(e);
}, I = (e, t, i, r) => {
  for (var a = r > 1 ? void 0 : r ? G(t, i) : t, u = e.length - 1, n; u >= 0; u--)
    (n = e[u]) && (a = n(a) || a);
  return a;
}, d = (e, t, i) => t.has(e) || c("Cannot " + i), M = (e, t, i) => (d(e, t, "read from private field"), i ? i.call(e) : t.get(e)), m = (e, t, i) => t.has(e) ? c("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), f = (e, t, i) => (d(e, t, "access private method"), i), l, o, b, v;
let s = class extends q {
  constructor() {
    super(...arguments), m(this, o), m(this, l, new U(this));
  }
  render() {
    return p`<uui-dialog-layout headline="Invite User">
			${f(this, o, v).call(this)}
			<uui-button @click=${this._rejectModal} slot="actions" label="Cancel" look="secondary"></uui-button>
			<uui-button
				form="InviteUserForm"
				slot="actions"
				type="submit"
				label="Send invite"
				look="primary"
				color="positive"></uui-button
		></uui-dialog-layout>`;
  }
};
l = /* @__PURE__ */ new WeakMap();
o = /* @__PURE__ */ new WeakSet();
b = async function(e) {
  e.preventDefault();
  const t = e.target;
  if (!t || !t.checkValidity()) return;
  const r = new FormData(t), a = r.get("name"), u = r.get("email"), h = t.querySelector("#userGroups")?.selection.map((_) => ({ unique: _ })), g = r.get("message"), { error: y } = await M(this, l).invite({
    name: a,
    email: u,
    userName: u,
    message: g,
    userGroupUniques: h
  });
  y || this._submitModal();
};
v = function() {
  return p` <p style="margin-top: 0">
				Invite new users to give them access to Umbraco. An invite email will be sent to the user with information on
				how to log in to Umbraco. Invites last for 72 hours.
			</p>
			<uui-form>
				<form id="InviteUserForm" name="form" @submit="${f(this, o, b)}">
					<uui-form-layout-item>
						<uui-label id="nameLabel" slot="label" for="name" required>Name</uui-label>
						<uui-input id="name" label="name" type="text" name="name" required></uui-input>
					</uui-form-layout-item>
					<uui-form-layout-item>
						<uui-label id="emailLabel" slot="label" for="email" required>Email</uui-label>
						<uui-input id="email" label="email" type="email" name="email" required></uui-input>
					</uui-form-layout-item>
					<uui-form-layout-item>
						<uui-label id="userGroupsLabel" slot="label" for="userGroups" required>User group</uui-label>
						<span slot="description">Add groups to assign access and permissions</span>
						<umb-user-group-input id="userGroups" name="userGroups"></umb-user-group-input>
					</uui-form-layout-item>
					<uui-form-layout-item>
						<uui-label id="messageLabel" slot="label" for="message" required>Message</uui-label>
						<uui-textarea id="message" label="message" name="message" required></uui-textarea>
					</uui-form-layout-item>
				</form>
			</uui-form>`;
};
s.styles = [
  k,
  w`
			:host {
				display: flex;
				align-items: center;
				justify-content: center;
				height: 100%;
				width: 100%;
			}

			uui-input {
				width: 100%;
			}

			uui-textarea {
				--uui-textarea-min-height: 100px;
			}
		`
];
s = I([
  x("umb-invite-user-modal")
], s);
const F = s;
export {
  s as UmbInviteUserModalElement,
  F as default
};
//# sourceMappingURL=user-invite-modal.element-B3m6i_M8.js.map
