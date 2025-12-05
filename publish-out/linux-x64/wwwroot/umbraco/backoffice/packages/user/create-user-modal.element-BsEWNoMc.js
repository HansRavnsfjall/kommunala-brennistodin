import { U as d, a as g } from "./constants-BH7VsFPT.js";
import "@umbraco-cms/backoffice/notification";
import "@umbraco-cms/backoffice/repository";
import "@umbraco-cms/backoffice/external/backend-api";
import "@umbraco-cms/backoffice/resources";
import "@umbraco-cms/backoffice/id";
import "@umbraco-cms/backoffice/temporary-file";
import { UmbUserDetailRepository as S } from "./user-detail.repository-DSXaFGBX.js";
import "@umbraco-cms/backoffice/entity-item";
import "@umbraco-cms/backoffice/localization-api";
import "@umbraco-cms/backoffice/external/rxjs";
import { UmbTextStyles as D } from "@umbraco-cms/backoffice/style";
import { UmbModalBaseElement as k, umbOpenModal as q } from "@umbraco-cms/backoffice/modal";
import { html as _, css as G, query as x, customElement as A } from "@umbraco-cms/backoffice/external/lit";
var F = Object.defineProperty, L = Object.getOwnPropertyDescriptor, b = (t) => {
  throw TypeError(t);
}, y = (t, e, r, a) => {
  for (var i = a > 1 ? void 0 : a ? L(e, r) : e, o = t.length - 1, n; o >= 0; o--)
    (n = t[o]) && (i = (a ? n(e, r, i) : n(i)) || i);
  return a && i && F(e, r, i), i;
}, U = (t, e, r) => e.has(t) || b("Cannot " + r), f = (t, e, r) => (U(t, e, "read from private field"), r ? r.call(t) : e.get(t)), h = (t, e, r) => e.has(t) ? b("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), c = (t, e, r) => (U(t, e, "access private method"), r), m, s, v, C, E;
let l = class extends k {
  constructor() {
    super(...arguments), h(this, s), h(this, m, new S(this));
  }
  render() {
    return _`<uui-dialog-layout headline=${this.localize.term("user_createUserHeadline", this.data?.user.kind)}>
			<p>${this.localize.term("user_createUserDescription", this.data?.user.kind)}</p>

			${c(this, s, E).call(this)}
			<uui-button @click=${this._rejectModal} slot="actions" label="Cancel" look="secondary"></uui-button>
			<uui-button
				form="CreateUserForm"
				slot="actions"
				type="submit"
				label="Create user"
				look="primary"
				color="positive"></uui-button>
		</uui-dialog-layout>`;
  }
};
m = /* @__PURE__ */ new WeakMap();
s = /* @__PURE__ */ new WeakSet();
v = async function(t) {
  t.preventDefault();
  const e = t.target;
  if (!e || !e.checkValidity()) return;
  const a = new FormData(e), i = a.get("name"), o = a.get("email"), M = e.querySelector("#userGroups")?.selection.map((w) => ({ unique: w })), { data: u } = await f(this, m).createScaffold();
  if (!u) return;
  u.kind = this.data?.user.kind ?? d.DEFAULT, u.name = i, u.email = o, u.userName = o, u.userGroupUniques = M;
  const { data: p } = await f(this, m).create(u);
  p && (p.kind === d.DEFAULT ? c(this, s, C).call(this, p.unique) : this._submitModal());
};
C = async function(t) {
  await q(this, g, {
    data: {
      user: {
        unique: t
      }
    }
  }).then(() => {
    this._submitModal();
  }).catch((e) => {
    e?.type === "createAnotherUser" ? this._form?.reset() : this._rejectModal();
  });
};
E = function() {
  return _` <uui-form>
			<form id="CreateUserForm" name="form" @submit="${c(this, s, v)}">
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
			</form>
		</uui-form>`;
};
l.styles = [
  D,
  G`
			uui-input,
			uui-input-password,
			uui-combobox {
				width: 100%;
			}

			p {
				width: 580px;
			}

			uui-textarea {
				--uui-textarea-min-height: 100px;
			}
		`
];
y([
  x("#CreateUserForm")
], l.prototype, "_form", 2);
l = y([
  A("umb-create-user-modal")
], l);
const J = l;
export {
  l as UmbCreateUserModalElement,
  J as default
};
//# sourceMappingURL=create-user-modal.element-BsEWNoMc.js.map
