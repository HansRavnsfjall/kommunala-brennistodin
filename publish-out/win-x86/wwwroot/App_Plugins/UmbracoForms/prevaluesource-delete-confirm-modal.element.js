import "@umbraco-cms/backoffice/resources";
import { N as v, Q as f } from "./index.js";
import { html as E, customElement as y } from "@umbraco-cms/backoffice/external/lit";
import { UmbModalBaseElement as C } from "@umbraco-cms/backoffice/modal";
import { UMB_ACTION_EVENT_CONTEXT as S } from "@umbraco-cms/backoffice/action";
import { UmbRequestReloadChildrenOfEntityEvent as P } from "@umbraco-cms/backoffice/entity-action";
var w = Object.getOwnPropertyDescriptor, h = (e) => {
  throw TypeError(e);
}, T = (e, t, a, o) => {
  for (var r = o > 1 ? void 0 : o ? w(t, a) : t, s = e.length - 1, p; s >= 0; s--)
    (p = e[s]) && (r = p(r) || r);
  return r;
}, m = (e, t, a) => t.has(e) || h("Cannot " + a), u = (e, t, a) => (m(e, t, "read from private field"), a ? a.call(e) : t.get(e)), n = (e, t, a) => t.has(e) ? h("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, a), M = (e, t, a, o) => (m(e, t, "write to private field"), t.set(e, a), a), b = (e, t, a) => (m(e, t, "access private method"), a), i, l, c, _;
let d = class extends C {
  constructor() {
    super(...arguments), n(this, c), n(this, i), n(this, l, new v(
      this
    ));
  }
  async connectedCallback() {
    var t;
    if (super.connectedCallback(), !((t = this.data) != null && t.unique)) return;
    const e = await u(this, l).requestByUnique(
      this.data.unique
    );
    M(this, i, e.data), this.requestUpdate();
  }
  render() {
    var e;
    return E`
      <umb-body-layout
        headline=${this.localize.term(
      "formPrevalueSources_deletePrevalueSource"
    )}
      >
        <uui-box>
          <p>
            ${this.localize.term(
      "formPrevalueSources_deleteConfirm",
      (e = u(this, i)) == null ? void 0 : e.name
    )}
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
          @click=${b(this, c, _)}
        ></uui-button>
      </umb-body-layout>
    `;
  }
};
i = /* @__PURE__ */ new WeakMap();
l = /* @__PURE__ */ new WeakMap();
c = /* @__PURE__ */ new WeakSet();
_ = async function(e) {
  var t;
  if (e.stopPropagation(), (t = this.data) != null && t.unique) {
    await u(this, l).delete(this.data.unique);
    const a = await this.getContext(S), o = {
      entityType: f,
      unique: null
    }, r = new P(o);
    a == null || a.dispatchEvent(r);
  }
  this._submitModal();
};
d = T([
  y("forms-prevaluesource-delete-confirm-modal")
], d);
const $ = d;
export {
  d as FormsPrevalueSourceDeleteConfirmModalElement,
  $ as default
};
//# sourceMappingURL=prevaluesource-delete-confirm-modal.element.js.map
