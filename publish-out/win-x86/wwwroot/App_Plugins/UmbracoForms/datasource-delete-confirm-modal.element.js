import { n as v, p as y } from "./index.js";
import { html as E, customElement as w } from "@umbraco-cms/backoffice/external/lit";
import { UmbModalBaseElement as D } from "@umbraco-cms/backoffice/modal";
import { UMB_ACTION_EVENT_CONTEXT as m } from "@umbraco-cms/backoffice/action";
import { UmbRequestReloadChildrenOfEntityEvent as q } from "@umbraco-cms/backoffice/entity-action";
var b = Object.getOwnPropertyDescriptor, _ = (t) => {
  throw TypeError(t);
}, C = (t, e, a, r) => {
  for (var o = r > 1 ? void 0 : r ? b(e, a) : e, i = t.length - 1, p; i >= 0; i--)
    (p = t[i]) && (o = p(o) || o);
  return o;
}, h = (t, e, a) => e.has(t) || _("Cannot " + a), n = (t, e, a) => (h(t, e, "read from private field"), a ? a.call(t) : e.get(t)), u = (t, e, a) => e.has(t) ? _("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, a), T = (t, e, a, r) => (h(t, e, "write to private field"), e.set(t, a), a), g = (t, e, a) => (h(t, e, "access private method"), a), l, s, c, f;
let d = class extends D {
  constructor() {
    super(...arguments), u(this, c), u(this, l), u(this, s, new v(this));
  }
  async connectedCallback() {
    var e;
    if (super.connectedCallback(), !((e = this.data) != null && e.unique)) return;
    const t = await n(this, s).requestByUnique(this.data.unique);
    T(this, l, t.data), this.requestUpdate();
  }
  render() {
    var t;
    return E`
      <umb-body-layout
        headline=${this.localize.term("formDataSources_deleteDatasource")}
      >
        <uui-box>
          <p>
            Are you sure you wish to delete the datasource
            <b>${(t = n(this, l)) == null ? void 0 : t.name}</b>?
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
          @click=${g(this, c, f)}
        ></uui-button>
      </umb-body-layout>
    `;
  }
};
l = /* @__PURE__ */ new WeakMap();
s = /* @__PURE__ */ new WeakMap();
c = /* @__PURE__ */ new WeakSet();
f = async function(t) {
  var e, a;
  if (t.stopPropagation(), (e = this.data) != null && e.unique) {
    await n(this, s).delete(this.data.unique);
    const r = await this.getContext(m), o = {
      entityType: y,
      unique: null
    }, i = new q(o);
    r == null || r.dispatchEvent(i);
  }
  if (this._submitModal(), t.stopPropagation(), (a = this.data) != null && a.unique) {
    const { data: r } = await n(this, s).requestByUnique(
      this.data.unique
    );
    if (!r) throw new Error("Item not found.");
    await n(this, s).delete(this.data.unique);
    const o = await this.getContext(m);
    o == null || o.dispatchEvent(t);
  }
  this._submitModal();
};
d = C([
  w("forms-datasource-delete-confirm-modal")
], d);
const S = d;
export {
  d as FormsDatasourceDeleteConfirmModalElement,
  S as default
};
//# sourceMappingURL=datasource-delete-confirm-modal.element.js.map
