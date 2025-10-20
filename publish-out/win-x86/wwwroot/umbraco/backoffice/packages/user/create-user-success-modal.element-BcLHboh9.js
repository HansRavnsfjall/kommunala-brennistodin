import { UmbUserItemRepository as U } from "./user-item.repository-CjZk039x.js";
import "./constants-BH7VsFPT.js";
import { U as C } from "./new-user-password.repository-ECuxFuZ6.js";
import { U as M } from "./paths-C2_yfNxZ.js";
import { UmbTextStyles as k } from "@umbraco-cms/backoffice/style";
import { html as g, css as E, state as y, customElement as I } from "@umbraco-cms/backoffice/external/lit";
import { UMB_NOTIFICATION_CONTEXT as T } from "@umbraco-cms/backoffice/notification";
import { UmbModalBaseElement as S } from "@umbraco-cms/backoffice/modal";
var R = Object.defineProperty, W = Object.getOwnPropertyDescriptor, b = (e) => {
  throw TypeError(e);
}, f = (e, t, s, n) => {
  for (var o = n > 1 ? void 0 : n ? W(t, s) : t, l = e.length - 1, p; l >= 0; l--)
    (p = e[l]) && (o = (n ? p(t, s, o) : p(o)) || o);
  return n && o && R(t, s, o), o;
}, v = (e, t, s) => t.has(e) || b("Cannot " + s), r = (e, t, s) => (v(e, t, "read from private field"), s ? s.call(e) : t.get(e)), a = (e, t, s) => t.has(e) ? b("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, s), x = (e, t, s, n) => (v(e, t, "write to private field"), t.set(e, s), s), O = (e, t, s) => (v(e, t, "access private method"), s), d, c, u, h, P, w, m, _;
let i = class extends S {
  constructor() {
    super(...arguments), a(this, h), this._initialPassword = "", a(this, d, new U(this)), a(this, c, new C(this)), a(this, u), a(this, w, (e) => {
      e.stopPropagation(), this._rejectModal();
    }), a(this, m, (e) => {
      e.stopPropagation(), this._rejectModal({ type: "createAnotherUser" });
    }), a(this, _, () => {
      this._submitModal();
    });
  }
  connectedCallback() {
    super.connectedCallback(), this.consumeContext(T, (e) => x(this, u, e));
  }
  async firstUpdated() {
    const e = this.data?.user.unique;
    if (!e) throw new Error("No user unique is provided");
    const [t, s] = await Promise.all([
      r(this, d).requestItems([e]),
      r(this, c).requestNewPassword(e)
    ]);
    t.data && (this._userItem = t.data[0]), s.data?.resetPassword && (this._initialPassword = s.data.resetPassword);
  }
  render() {
    return g`<uui-dialog-layout headline="${this._userItem?.name} has been created">
			<p>The new user has successfully been created. To log in to Umbraco use the password below</p>
			<uui-form-layout-item>
				<uui-label slot="label" for="password">Password</uui-label>
				<div id="password-control">
					<uui-input-password id="password" label="password" name="password" value="${this._initialPassword}" readonly>
					</uui-input-password>
					<uui-button compact label="Copy" @click=${O(this, h, P)} look="outline"></uui-button>
				</div>
			</uui-form-layout-item>

			<uui-button @click=${r(this, w)} slot="actions" label="Close" look="secondary"></uui-button>
			<uui-button
				@click=${r(this, m)}
				slot="actions"
				label="Create another user"
				look="secondary"></uui-button>
			<uui-button
				@click=${r(this, _)}
				slot="actions"
				label="Go to profile"
				look="primary"
				color="positive"
				href=${M + "/edit/" + this.data?.user.unique}></uui-button>
		</uui-dialog-layout>`;
  }
};
d = /* @__PURE__ */ new WeakMap();
c = /* @__PURE__ */ new WeakMap();
u = /* @__PURE__ */ new WeakMap();
h = /* @__PURE__ */ new WeakSet();
P = function() {
  const e = this.shadowRoot?.querySelector("#password");
  if (!e || typeof e.value != "string") return;
  navigator.clipboard.writeText(e.value);
  const t = { message: "Password copied" };
  r(this, u)?.peek("positive", { data: t });
};
w = /* @__PURE__ */ new WeakMap();
m = /* @__PURE__ */ new WeakMap();
_ = /* @__PURE__ */ new WeakMap();
i.styles = [
  k,
  E`
			p {
				width: 580px;
			}

			#password {
				width: 100%;
			}

			#password-control {
				display: flex;
				align-items: center;
				gap: var(--uui-size-space-3);
			}
		`
];
f([
  y()
], i.prototype, "_userItem", 2);
f([
  y()
], i.prototype, "_initialPassword", 2);
i = f([
  I("umb-create-user-success-modal")
], i);
const F = i;
export {
  i as UmbCreateUserSuccessModalElement,
  F as default
};
//# sourceMappingURL=create-user-success-modal.element-BcLHboh9.js.map
