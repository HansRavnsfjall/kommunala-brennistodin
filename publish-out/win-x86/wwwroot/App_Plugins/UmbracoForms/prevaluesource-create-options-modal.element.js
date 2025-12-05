import { FormsPrevalueSourceTypeCollectionRepository as f } from "./prevaluesource-type-collection.repository.js";
import { k as E } from "./index.js";
import { html as m, customElement as w } from "@umbraco-cms/backoffice/external/lit";
import { UmbModalBaseElement as y } from "@umbraco-cms/backoffice/modal";
var $ = Object.getOwnPropertyDescriptor, _ = (e) => {
  throw TypeError(e);
}, C = (e, t, r, i) => {
  for (var o = i > 1 ? void 0 : i ? $(t, r) : t, n = e.length - 1, u; n >= 0; n--)
    (u = e[n]) && (o = u(o) || o);
  return o;
}, c = (e, t, r) => t.has(e) || _("Cannot " + r), P = (e, t, r) => (c(e, t, "read from private field"), r ? r.call(e) : t.get(e)), p = (e, t, r) => t.has(e) ? _("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), S = (e, t, r, i) => (c(e, t, "write to private field"), t.set(e, r), r), h = (e, t, r) => (c(e, t, "access private method"), r), s, a, d, v;
const M = "forms-prevaluesource-create-options-modal";
let l = class extends y {
  constructor() {
    super(), p(this, a), p(this, s, []), h(this, a, d).call(this);
  }
  render() {
    return m`<umb-body-layout
      headline=${this.localize.term(
      "formPrevalueSources_choosePrevalueSourceType"
    )}
    >
      <uui-box>
        <uui-ref-list>
          ${P(this, s).map(
      (e) => m`<umb-ref-item
                .name=${e.name}
                .detail=${e.description}
                .icon=${e.icon}
                @open=${() => h(this, a, v).call(this, e)}
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
a = /* @__PURE__ */ new WeakSet();
d = async function() {
  const e = new f(this), { data: t } = await e.requestCollection();
  S(this, s, (t == null ? void 0 : t.items) || []), this.requestUpdate();
};
v = function(e) {
  window.history.pushState(
    {},
    "",
    `section/forms/workspace/${E}/create/${e.id}`
  ), this._submitModal();
};
l = C([
  w(M)
], l);
const x = l;
export {
  l as FormsPrevalueSourceCreateOptionsModalElement,
  x as default
};
//# sourceMappingURL=prevaluesource-create-options-modal.element.js.map
