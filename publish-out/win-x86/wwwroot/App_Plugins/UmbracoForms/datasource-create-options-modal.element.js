import { FormsDataSourceTypeCollectionRepository as v } from "./datasource-type-collection.repository.js";
import { q as w } from "./index.js";
import { html as m, customElement as y } from "@umbraco-cms/backoffice/external/lit";
import { UmbModalBaseElement as $ } from "@umbraco-cms/backoffice/modal";
var C = Object.getOwnPropertyDescriptor, _ = (t) => {
  throw TypeError(t);
}, E = (t, e, a, i) => {
  for (var o = i > 1 ? void 0 : i ? C(e, a) : e, n = t.length - 1, u; n >= 0; n--)
    (u = t[n]) && (o = u(o) || o);
  return o;
}, c = (t, e, a) => e.has(t) || _("Cannot " + a), D = (t, e, a) => (c(t, e, "read from private field"), a ? a.call(t) : e.get(t)), p = (t, e, a) => e.has(t) ? _("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, a), M = (t, e, a, i) => (c(t, e, "write to private field"), e.set(t, a), a), h = (t, e, a) => (c(t, e, "access private method"), a), s, r, d, f;
const O = "forms-datasource-create-options-modal";
let l = class extends $ {
  constructor() {
    super(), p(this, r), p(this, s, []), h(this, r, d).call(this);
  }
  render() {
    return m`<umb-body-layout
      headline=${this.localize.term("formDataSources_chooseDatasourceType")}
    >
      <uui-box>
        <uui-ref-list>
          ${D(this, s).map(
      (t) => m`<umb-ref-item
                .name=${t.name}
                .detail=${t.description}
                .icon=${t.icon}
                @open=${() => h(this, r, f).call(this, t)}
              ></umb-ref-item>`
    )}
        </uui-ref-list>
      </uui-box>
      <uui-button
        slot="actions"
        label=${this.localize.term("general_cancel")}
        @click=${this._rejectModal}
      ></uui-button>
    </umb-body-layout>`;
  }
};
s = /* @__PURE__ */ new WeakMap();
r = /* @__PURE__ */ new WeakSet();
d = async function() {
  const t = new v(this), { data: e } = await t.requestCollection();
  M(this, s, (e == null ? void 0 : e.items) || []), this.requestUpdate();
};
f = function(t) {
  window.history.pushState(
    {},
    "",
    `section/forms/workspace/${w}/create/${t.id}`
  ), this._submitModal();
};
l = E([
  y(O)
], l);
const T = l;
export {
  l as FormsDataSourceCreateOptionsModalElement,
  T as default
};
//# sourceMappingURL=datasource-create-options-modal.element.js.map
