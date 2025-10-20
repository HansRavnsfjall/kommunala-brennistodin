import { U as f } from "./current-user.context.token-BnYpMzWI.js";
import { UMB_AUTH_CONTEXT as b } from "@umbraco-cms/backoffice/auth";
import { UmbTextStyles as g } from "@umbraco-cms/backoffice/style";
import { html as y, css as U, property as x, state as h, customElement as C } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as O } from "@umbraco-cms/backoffice/lit-element";
var E = Object.defineProperty, $ = Object.getOwnPropertyDescriptor, d = (t) => {
  throw TypeError(t);
}, u = (t, e, r, i) => {
  for (var o = i > 1 ? void 0 : i ? $(e, r) : e, c = t.length - 1, p; c >= 0; c--)
    (p = t[c]) && (o = (i ? p(e, r, o) : p(o)) || o);
  return i && o && E(e, r, o), o;
}, v = (t, e, r) => e.has(t) || d("Cannot " + r), n = (t, e, r) => (v(t, e, "read from private field"), e.get(t)), _ = (t, e, r) => e.has(t) ? d("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), m = (t, e, r, i) => (v(t, e, "write to private field"), e.set(t, r), r), a, l;
let s = class extends O {
  constructor() {
    super(), _(this, a), _(this, l), this.consumeContext(f, (t) => {
      m(this, l, t), this._observeCurrentUser();
    }), this.consumeContext(b, (t) => {
      m(this, a, t);
    });
  }
  async _observeCurrentUser() {
    n(this, l) && this.observe(
      n(this, l).currentUser,
      (t) => {
        this._currentUser = t;
      },
      "umbCurrentUserObserver"
    );
  }
  _close() {
    this.modalContext?.submit();
  }
  async _logout() {
    n(this, a) && (this._logOutButtonState = "waiting", await n(this, a).signOut(), this._logOutButtonState = "success");
  }
  render() {
    return y`
			<umb-body-layout headline="${this._currentUser?.name || ""}">
				<div id="main">
					<umb-extension-slot id="userProfileApps" type="userProfileApp"></umb-extension-slot>
				</div>
				<div slot="actions">
					<uui-button @click=${this._close} look="secondary" .label=${this.localize.term("general_close")}>
						${this.localize.term("general_close")}
					</uui-button>
					<uui-button
						@click=${this._logout}
						.state=${this._logOutButtonState}
						look="primary"
						color="danger"
						.label=${this.localize.term("general_logout")}>
						${this.localize.term("general_logout")}
					</uui-button>
				</div>
			</umb-body-layout>
		`;
  }
};
a = /* @__PURE__ */ new WeakMap();
l = /* @__PURE__ */ new WeakMap();
s.styles = [
  g,
  U`
			:host {
				color: var(--uui-color-text);
			}
			#main {
				display: flex;
				flex-direction: column;
				gap: var(--uui-size-space-3);
			}
			#umbraco-id-buttons {
				display: flex;
				flex-direction: column;
				gap: var(--uui-size-space-3);
			}
			#userProfileApps {
				display: flex;
				flex-direction: column;
				gap: var(--uui-size-space-3);
			}
		`
];
u([
  x({ attribute: !1 })
], s.prototype, "modalContext", 2);
u([
  h()
], s.prototype, "_currentUser", 2);
u([
  h()
], s.prototype, "_logOutButtonState", 2);
s = u([
  C("umb-current-user-modal")
], s);
const B = s;
export {
  s as UmbCurrentUserModalElement,
  B as default
};
//# sourceMappingURL=current-user-modal.element-DWEqqTol.js.map
