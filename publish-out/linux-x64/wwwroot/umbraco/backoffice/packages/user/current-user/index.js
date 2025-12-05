import { U as F, a as G, b as H } from "../constants-D8nfzuQw.js";
import { U as k } from "../external-login-modal.token-BIuwBNJv.js";
import { U as Y } from "../current-user-history.store.token-C66NWwR2.js";
import { U as q } from "../current-user-modal.token-AO0ePjaF.js";
import { U as K } from "../current-user-mfa-modal.token-DXwGMNEd.js";
import { a as Z, U as j } from "../current-user-mfa-enable-modal.token-Daw2B3OI.js";
import { U as l } from "../current-user.context.token-BnYpMzWI.js";
import { UmbTextStyles as C } from "@umbraco-cms/backoffice/style";
import { state as S, property as T, customElement as v, ifDefined as f, nothing as O, html as E } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as A } from "@umbraco-cms/backoffice/lit-element";
import { UmbActionExecutedEvent as M } from "@umbraco-cms/backoffice/event";
import { U as et } from "../mfa-provider-default.element-BajRhbvE.js";
import { UmbCurrentUserContext as ot } from "../current-user.context-CCTKdW5o.js";
import { UmbCurrentUserHistoryStore as at } from "../current-user-history.store-Ca48wRgT.js";
import { U as it } from "../current-user.store.token-N-3TWEFa.js";
import { UmbCurrentUserRepository as Ut } from "../current-user.repository-CzsCrtUS.js";
import { UmbCurrentUserStore as mt } from "../current-user.store-D_gMea0d.js";
import { i as Et } from "../is-current-user-an-admin.function-CAxmT6R7.js";
import { UmbContextConsumerController as N } from "@umbraco-cms/backoffice/context-api";
var x = Object.defineProperty, d = Object.getOwnPropertyDescriptor, u = (t) => {
  throw TypeError(t);
}, p = (t, e, r, o) => {
  for (var s = o > 1 ? void 0 : o ? d(e, r) : e, i = t.length - 1, _; i >= 0; i--)
    (_ = t[i]) && (s = (o ? _(e, r, s) : _(s)) || s);
  return o && s && x(e, r, s), s;
}, m = (t, e, r) => e.has(t) || u("Cannot " + r), c = (t, e, r) => (m(t, e, "read from private field"), e.get(t)), R = (t, e, r) => e.has(t) ? u("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), b = (t, e, r, o) => (m(t, e, "write to private field"), e.set(t, r), r), D = (t, e, r) => (m(t, e, "access private method"), r), a, U, h;
let n = class extends A {
  constructor() {
    super(...arguments), R(this, U), R(this, a);
  }
  set api(t) {
    b(this, a, t), c(this, a)?.getHref?.().then((e) => {
      this._href = e;
    });
  }
  get label() {
    return this.manifest?.meta.label ? this.localize.string(this.manifest.meta.label) : void 0;
  }
  render() {
    return E`
			<uui-button @click=${D(this, U, h)} look="secondary" label=${f(this.label)} href=${f(this._href)}>
				${this.manifest?.meta.icon ? E`<uui-icon name=${this.manifest.meta.icon}></uui-icon>` : O}
				${this.label}
			</uui-button>
		`;
  }
};
a = /* @__PURE__ */ new WeakMap();
U = /* @__PURE__ */ new WeakSet();
h = async function(t) {
  this._href || (t.stopPropagation(), await c(this, a)?.execute()), this.dispatchEvent(new M());
};
n.styles = [C];
p([
  S()
], n.prototype, "_href", 2);
p([
  T({ attribute: !1 })
], n.prototype, "manifest", 2);
n = p([
  v("umb-current-user-app-button")
], n);
const g = async (t, e) => {
  const r = new N(t, l), o = await r.asPromise().catch(() => {
  });
  return r.destroy(), await o.isUserCurrentUser(e);
};
export {
  l as UMB_CURRENT_USER_CONTEXT,
  k as UMB_CURRENT_USER_EXTERNAL_LOGIN_MODAL,
  F as UMB_CURRENT_USER_GROUP_ID_CONDITION_ALIAS,
  Y as UMB_CURRENT_USER_HISTORY_STORE_CONTEXT,
  G as UMB_CURRENT_USER_IS_ADMIN_CONDITION_ALIAS,
  Z as UMB_CURRENT_USER_MFA_DISABLE_PROVIDER_MODAL,
  j as UMB_CURRENT_USER_MFA_ENABLE_PROVIDER_MODAL,
  K as UMB_CURRENT_USER_MFA_MODAL,
  q as UMB_CURRENT_USER_MODAL,
  H as UMB_CURRENT_USER_REPOSITORY_ALIAS,
  it as UMB_CURRENT_USER_STORE_CONTEXT,
  n as UmbCurrentUserAppButtonElement,
  ot as UmbCurrentUserContext,
  at as UmbCurrentUserHistoryStore,
  Ut as UmbCurrentUserRepository,
  mt as UmbCurrentUserStore,
  et as UmbMfaProviderDefaultElement,
  g as isCurrentUser,
  Et as isCurrentUserAnAdmin
};
//# sourceMappingURL=index.js.map
