import { U as d } from "./current-user-modal.token-AO0ePjaF.js";
import "./external-login-modal.token-BIuwBNJv.js";
import "./current-user-history.store.token-C66NWwR2.js";
import "./current-user-mfa-modal.token-DXwGMNEd.js";
import "./current-user-mfa-enable-modal.token-Daw2B3OI.js";
import { U as f } from "./current-user.context.token-BnYpMzWI.js";
import { html as C, css as E, state as b, customElement as y } from "@umbraco-cms/backoffice/external/lit";
import { umbOpenModal as O } from "@umbraco-cms/backoffice/modal";
import { UmbHeaderAppButtonElement as l } from "@umbraco-cms/backoffice/components";
var w = Object.defineProperty, A = Object.getOwnPropertyDescriptor, v = (e) => {
  throw TypeError(e);
}, h = (e, r, t, a) => {
  for (var s = a > 1 ? void 0 : a ? A(r, t) : r, o = e.length - 1, p; o >= 0; o--)
    (p = e[o]) && (s = (a ? p(r, t, s) : p(s)) || s);
  return a && s && w(r, t, s), s;
}, c = (e, r, t) => r.has(e) || v("Cannot " + t), _ = (e, r, t) => (c(e, r, "read from private field"), r.get(e)), m = (e, r, t) => r.has(e) ? v("Cannot add the same private member more than once") : r instanceof WeakSet ? r.add(e) : r.set(e, t), x = (e, r, t, a) => (c(e, r, "write to private field"), r.set(e, t), t), M = (e, r, t) => (c(e, r, "access private method"), t), n, u, U;
let i = class extends l {
  constructor() {
    super(), m(this, u), m(this, n), this.consumeContext(f, (e) => {
      x(this, n, e), this._observeCurrentUser();
    });
  }
  async _observeCurrentUser() {
    _(this, n) && this.observe(
      _(this, n).currentUser,
      (e) => {
        this._currentUser = e;
      },
      "umbCurrentUserObserver"
    );
  }
  render() {
    return C`
			<uui-button
				@click=${M(this, u, U)}
				look="primary"
				label=${this.localize.term("visuallyHiddenTexts_openCloseBackofficeProfileOptions")}
				compact>
				<umb-user-avatar
					id="Avatar"
					.name=${this._currentUser?.name}
					.imgUrls=${this._currentUser?.avatarUrls || []}></umb-user-avatar>
			</uui-button>
		`;
  }
};
n = /* @__PURE__ */ new WeakMap();
u = /* @__PURE__ */ new WeakSet();
U = async function() {
  await O(this, d).catch(() => {
  });
};
i.styles = [
  ...l.styles,
  E`
			uui-button {
				font-size: 14px;
			}
		`
];
h([
  b()
], i.prototype, "_currentUser", 2);
i = h([
  y("umb-current-user-header-app")
], i);
const D = i;
export {
  i as UmbCurrentUserHeaderAppElement,
  D as default
};
//# sourceMappingURL=current-user-header-app.element-Bd9c-iTA.js.map
