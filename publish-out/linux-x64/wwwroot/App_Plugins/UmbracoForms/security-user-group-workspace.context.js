import { X as v, Y as S, Z as f } from "./index.js";
import "@umbraco-cms/backoffice/id";
import "@umbraco-cms/backoffice/resources";
import "@umbraco-cms/backoffice/repository";
import { F as y } from "./security-user-group-workspace.context-token.js";
import { UmbElementMixin as E } from "@umbraco-cms/backoffice/element-api";
import { LitElement as U, html as C, css as R, state as G, property as O, customElement as w } from "@umbraco-cms/backoffice/external/lit";
import { F } from "./security-workspace-base.context.js";
var P = Object.defineProperty, k = Object.getOwnPropertyDescriptor, h = (e) => {
  throw TypeError(e);
}, c = (e, t, r, s) => {
  for (var o = s > 1 ? void 0 : s ? k(t, r) : t, p = e.length - 1, n; p >= 0; p--)
    (n = e[p]) && (o = (s ? n(t, r, o) : n(o)) || o);
  return s && o && P(t, r, o), o;
}, _ = (e, t, r) => t.has(e) || h("Cannot " + r), m = (e, t, r) => (_(e, t, "read from private field"), t.get(e)), l = (e, t, r) => t.has(e) ? h("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), W = (e, t, r, s) => (_(e, t, "write to private field"), t.set(e, r), r), x = (e, t, r) => (_(e, t, "access private method"), r), i, u, d;
const T = "forms-security-user-group-workspace-editor";
let a = class extends E(
  U
) {
  constructor() {
    super(), l(this, u), this._name = "", l(this, i), this.consumeContext(
      y,
      (e) => {
        W(this, i, e), x(this, u, d).call(this);
      }
    );
  }
  render() {
    return C` <umb-workspace-editor
      alias="Forms.Workspace.Security.UserGroup"
    >
      <uui-input
        id="name"
        slot="header"
        readonly
        label="User Group"
        .value=${this.localize.term("formSecurity_manageIndividualFormsLabel") + " " + this._name}
      ></uui-input>
    </umb-workspace-editor>`;
  }
};
i = /* @__PURE__ */ new WeakMap();
u = /* @__PURE__ */ new WeakSet();
d = function() {
  m(this, i) && this.observe(
    m(this, i).data,
    (e) => this._name = (e == null ? void 0 : e.name) ?? ""
  );
};
a.styles = [
  R`
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
c([
  G()
], a.prototype, "_name", 2);
c([
  O({ type: String, attribute: !1 })
], a.prototype, "workspaceAlias", 2);
a = c([
  w(T)
], a);
class I extends F {
  constructor(t) {
    super(
      t,
      v,
      S,
      f,
      a
    );
  }
  setUserGroupSecurityProperty(t, r) {
    if (!this._data.value) return;
    const s = structuredClone(
      this._data.value.userGroupSecurity
    );
    s[t] = r, this._data.update({ userGroupSecurity: s });
  }
}
const K = I;
export {
  I as FormsSecurityUserGroupWorkspaceContext,
  K as api
};
//# sourceMappingURL=security-user-group-workspace.context.js.map
