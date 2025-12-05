import { v as E, a1 as M, a2 as w } from "./index.js";
import "@umbraco-cms/backoffice/resources";
import "@umbraco-cms/backoffice/id";
import "@umbraco-cms/backoffice/repository";
import { html as m, customElement as q } from "@umbraco-cms/backoffice/external/lit";
import { UmbModalBaseElement as y } from "@umbraco-cms/backoffice/modal";
import { UMB_ACTION_EVENT_CONTEXT as $ } from "@umbraco-cms/backoffice/action";
import { UmbRequestReloadChildrenOfEntityEvent as T } from "@umbraco-cms/backoffice/entity-action";
var F = Object.getOwnPropertyDescriptor, D = (e) => {
  throw TypeError(e);
}, g = (e, t, a, o) => {
  for (var s = o > 1 ? void 0 : o ? F(t, a) : t, l = e.length - 1, v; l >= 0; l--)
    (v = e[l]) && (s = v(s) || s);
  return s;
}, f = (e, t, a) => t.has(e) || D("Cannot " + a), i = (e, t, a) => (f(e, t, "read from private field"), a ? a.call(e) : t.get(e)), c = (e, t, a) => t.has(e) ? D("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, a), h = (e, t, a, o) => (f(e, t, "write to private field"), t.set(e, a), a), O = (e, t, a) => (f(e, t, "access private method"), a), u, n, d, r, p, R;
let _ = class extends y {
  constructor() {
    super(...arguments), c(this, p), c(this, u), c(this, n), c(this, d), c(this, r, new E(this));
  }
  async connectedCallback() {
    var o;
    if (super.connectedCallback(), !((o = this.data) != null && o.unique)) return;
    const e = await i(this, r).requestByUnique(this.data.unique);
    h(this, u, e.data);
    const t = await i(this, r).requestRecordsMetaData(this.data.unique);
    h(this, n, t.data);
    const a = await i(this, r).requestHasRelations(this.data.unique);
    h(this, d, a.data), this.requestUpdate();
  }
  render() {
    var e, t, a, o;
    return m`
      <umb-body-layout
        headline=${this.localize.term("formDelete_modalHeadline")}
      >
        <uui-box>
          <p>
            ${this.localize.term("formDelete_title", (e = i(this, u)) == null ? void 0 : e.name)}
          </p>
          <p><i>${this.localize.term("formDelete_timingNote")}</i></p>
          <p>${this.localize.term("formDelete_recordDeleteNote")}</p>
          <p>
            ${((t = i(this, n)) == null ? void 0 : t.count) == 0 ? m`${this.localize.term("formDelete_noRecordDetail")}` : m`${this.localize.term(
      "formDelete_recordDetail",
      (a = i(this, n)) == null ? void 0 : a.count,
      (o = i(this, n)) == null ? void 0 : o.lastSubmittedDate
    )}`}
          </p>
          <p>
            ${i(this, d) ? m`${this.localize.term("formDelete_deleteWarning")}` : m`${this.localize.term("formDelete_noReferencedMessage")}`}
          </p>
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
          @click=${O(this, p, R)}
        ></uui-button>
      </umb-body-layout>
    `;
  }
};
u = /* @__PURE__ */ new WeakMap();
n = /* @__PURE__ */ new WeakMap();
d = /* @__PURE__ */ new WeakMap();
r = /* @__PURE__ */ new WeakMap();
p = /* @__PURE__ */ new WeakSet();
R = async function(e) {
  var t;
  if (e.stopPropagation(), (t = this.data) != null && t.unique) {
    const { data: a } = await i(this, r).requestByUnique(
      this.data.unique
    );
    if (!a) throw new Error("Item not found.");
    await i(this, r).delete(this.data.unique);
    const o = await this.getContext($), s = {
      entityType: a.parentUnique ? M : w,
      unique: a.parentUnique || null
    }, l = new T(s);
    o == null || o.dispatchEvent(l);
  }
  this._submitModal();
};
_ = g([
  q("forms-form-delete-confirm-modal")
], _);
const P = _;
export {
  _ as FormsFormDeleteConfirmModalElement,
  P as default
};
//# sourceMappingURL=form-delete-confirm-modal.element.js.map
