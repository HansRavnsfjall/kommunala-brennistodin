import "./current-user.store.token-N-3TWEFa.js";
import { UmbCurrentUserRepository as _ } from "./current-user.repository-CzsCrtUS.js";
import "@umbraco-cms/backoffice/user";
import "@umbraco-cms/backoffice/class-api";
import "@umbraco-cms/backoffice/observable-api";
import { html as h, customElement as M } from "@umbraco-cms/backoffice/external/lit";
import { UmbModalBaseElement as b } from "@umbraco-cms/backoffice/modal";
import "./mfa-provider-default.element-BajRhbvE.js";
var w = Object.getOwnPropertyDescriptor, c = (e) => {
  throw TypeError(e);
}, C = (e, r, t, u) => {
  for (var a = u > 1 ? void 0 : u ? w(r, t) : r, n = e.length - 1, f; n >= 0; n--)
    (f = e[n]) && (a = f(a) || a);
  return a;
}, E = (e, r, t) => r.has(e) || c("Cannot " + t), s = (e, r, t) => (E(e, r, "read from private field"), t ? t.call(e) : r.get(e)), o = (e, r, t) => r.has(e) ? c("Cannot add the same private member more than once") : r instanceof WeakSet ? r.add(e) : r.set(e, t), d, p, i, v, l;
let m = class extends b {
  constructor() {
    super(...arguments), o(this, i), o(this, d, new _(this)), o(this, p, () => {
      this._rejectModal();
    }), o(this, l, (e) => this.data ? e.forProviderName.toLowerCase() === this.data.providerName.toLowerCase() : !1);
  }
  render() {
    return this.data ? h`
			<umb-extension-slot
				type="mfaLoginProvider"
				default-element="umb-mfa-provider-default"
				.filter=${s(this, l)}
				.props=${s(this, i, v)}></umb-extension-slot>
		` : h`<uui-loader-bar></uui-loader-bar>`;
  }
};
d = /* @__PURE__ */ new WeakMap();
p = /* @__PURE__ */ new WeakMap();
i = /* @__PURE__ */ new WeakSet();
v = function() {
  return {
    providerName: this.data.providerName,
    displayName: this.data.displayName,
    callback: (e, r, t) => s(this, d).enableMfaProvider(e, r, t),
    close: s(this, p)
  };
};
l = /* @__PURE__ */ new WeakMap();
m = C([
  M("umb-current-user-mfa-enable-modal")
], m);
const S = m;
export {
  m as UmbCurrentUserMfaEnableModalElement,
  S as default
};
//# sourceMappingURL=current-user-mfa-enable-modal.element-BPZAvAJD.js.map
