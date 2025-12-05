import { T as v, V as S, W as f } from "./index.js";
import "@umbraco-cms/backoffice/id";
import "@umbraco-cms/backoffice/resources";
import "@umbraco-cms/backoffice/repository";
import { F as y } from "./security-user-workspace.context-token.js";
import { UmbElementMixin as E } from "@umbraco-cms/backoffice/element-api";
import { LitElement as C, html as U, css as w, state as F, property as R, customElement as W } from "@umbraco-cms/backoffice/external/lit";
import { F as k } from "./security-workspace-base.context.js";
var O = Object.defineProperty, T = Object.getOwnPropertyDescriptor, h = (e) => {
  throw TypeError(e);
}, _ = (e, t, r, s) => {
  for (var a = s > 1 ? void 0 : s ? T(t, r) : t, n = e.length - 1, p; n >= 0; n--)
    (p = e[n]) && (a = (s ? p(t, r, a) : p(a)) || a);
  return s && a && O(t, r, a), a;
}, m = (e, t, r) => t.has(e) || h("Cannot " + r), u = (e, t, r) => (m(e, t, "read from private field"), t.get(e)), l = (e, t, r) => t.has(e) ? h("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), x = (e, t, r, s) => (m(e, t, "write to private field"), t.set(e, r), r), P = (e, t, r) => (m(e, t, "access private method"), r), i, c, d;
const I = "forms-security-user-workspace-editor";
let o = class extends E(
  C
) {
  constructor() {
    super(), l(this, c), this._name = "", l(this, i), this.consumeContext(y, (e) => {
      x(this, i, e), P(this, c, d).call(this);
    });
  }
  render() {
    return U` <umb-workspace-editor alias="Forms.Workspace.Security.User">
      <uui-input
        id="name"
        slot="header"
        readonly
        label=${this.localize.term("general_name")}
        .value=${this.localize.term("formSecurity_manageIndividualFormsLabel") + " " + this._name}
      ></uui-input>
    </umb-workspace-editor>`;
  }
};
i = /* @__PURE__ */ new WeakMap();
c = /* @__PURE__ */ new WeakSet();
d = function() {
  u(this, i) && this.observe(
    u(this, i).data,
    (e) => this._name = (e == null ? void 0 : e.name) ?? ""
  );
};
o.styles = [
  w`
      :host {
        display: block;
        width: 100%;
        height: 100%;
      }

      #name {
        flex: 1 1 auto;
      }
    `
];
_([
  F()
], o.prototype, "_name", 2);
_([
  R({ type: String, attribute: !1 })
], o.prototype, "workspaceAlias", 2);
o = _([
  W(I)
], o);
class g extends k {
  constructor(t) {
    super(
      t,
      v,
      S,
      f,
      o
    );
  }
  setUserSecurityProperty(t, r) {
    if (!this._data.value) return;
    const s = structuredClone(this._data.value.userSecurity);
    s[t] = r, this._data.update({ userSecurity: s });
  }
}
const K = g;
export {
  g as FormsSecurityUserWorkspaceContext,
  K as api
};
//# sourceMappingURL=security-user-workspace.context.js.map
