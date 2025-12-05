import { W as f, a7 as y } from "./index.js";
import "@umbraco-cms/backoffice/id";
import "@umbraco-cms/backoffice/resources";
import "@umbraco-cms/backoffice/repository";
import { html as v, customElement as E } from "@umbraco-cms/backoffice/external/lit";
import { UmbModalBaseElement as S } from "@umbraco-cms/backoffice/modal";
import { UMB_ACTION_EVENT_CONTEXT as C } from "@umbraco-cms/backoffice/action";
import { UmbRequestReloadChildrenOfEntityEvent as U } from "@umbraco-cms/backoffice/entity-action";
var w = Object.getOwnPropertyDescriptor, _ = (e) => {
  throw TypeError(e);
}, T = (e, t, r, a) => {
  for (var i = a > 1 ? void 0 : a ? w(t, r) : t, n = e.length - 1, p; n >= 0; n--)
    (p = e[n]) && (i = p(i) || i);
  return i;
}, m = (e, t, r) => t.has(e) || _("Cannot " + r), c = (e, t, r) => (m(e, t, "read from private field"), r ? r.call(e) : t.get(e)), l = (e, t, r) => t.has(e) ? _("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), b = (e, t, r, a) => (m(e, t, "write to private field"), t.set(e, r), r), M = (e, t, r) => (m(e, t, "access private method"), r), o, s, u, h;
let d = class extends S {
  constructor() {
    super(...arguments), l(this, u), l(this, o), l(this, s, new f(this));
  }
  async connectedCallback() {
    var t;
    if (super.connectedCallback(), !((t = this.data) != null && t.unique)) return;
    const { data: e } = await c(this, s).requestByUnique(
      this.data.unique
    );
    b(this, o, e), this.requestUpdate();
  }
  render() {
    var e;
    return v`
      <umb-body-layout
        headline="${this.localize.term(
      "formSecurity_deleteTitle",
      (e = c(this, o)) == null ? void 0 : e.name
    )}"
      >
        <uui-box>
          <p>${this.localize.term("formSecurity_deleteUserRecordNote")}</p>
        </uui-box>
        <uui-button
          slot="actions"
          id="cancel"
          label=${this.localize.term("general_cancel")}
          @click="${this._rejectModal}"
          >${this.localize.term("general_cancel")}</uui-button
        >
        <uui-button
          slot="actions"
          type="button"
          label=${this.localize.term("general_delete")}
          look="primary"
          color="danger"
          @click=${M(this, u, h)}
        ></uui-button>
      </umb-body-layout>
    `;
  }
};
o = /* @__PURE__ */ new WeakMap();
s = /* @__PURE__ */ new WeakMap();
u = /* @__PURE__ */ new WeakSet();
h = async function(e) {
  var t;
  if (e.stopPropagation(), (t = this.data) != null && t.unique) {
    await c(this, s).delete(this.data.unique);
    const r = new U({
      entityType: y,
      unique: "207c2294-970b-4e1f-82fd-ae8996ef171d"
      // Matches Umbraco.Forms.Web.Controllers.ManagementApi.Security.Tree.SecurityTreeControllerBase.UsersFolderId
    }), a = await this.getContext(C);
    a == null || a.dispatchEvent(r);
  }
  this._submitModal();
};
d = T([
  E("forms-user-security-delete-confirm-modal")
], d);
const z = d;
export {
  d as FormsUserSecurityDeleteConfirmModalElement,
  z as default
};
//# sourceMappingURL=user-security-delete-confirm-modal.element.js.map
