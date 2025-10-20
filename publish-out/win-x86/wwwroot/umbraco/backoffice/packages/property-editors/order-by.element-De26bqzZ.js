import { html as c, property as u, state as v, customElement as _ } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as d } from "@umbraco-cms/backoffice/lit-element";
import { UMB_PROPERTY_DATASET_CONTEXT as f } from "@umbraco-cms/backoffice/property";
import { UmbChangeEvent as y } from "@umbraco-cms/backoffice/event";
var E = Object.defineProperty, C = Object.getOwnPropertyDescriptor, m = (e) => {
  throw TypeError(e);
}, p = (e, t, r, a) => {
  for (var o = a > 1 ? void 0 : a ? C(t, r) : t, n = e.length - 1, i; n >= 0; n--)
    (i = e[n]) && (o = (a ? i(t, r, o) : i(o)) || o);
  return a && o && E(t, r, o), o;
}, b = (e, t, r) => t.has(e) || m("Cannot " + r), P = (e, t, r) => t.has(e) ? m("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), O = (e, t, r) => (b(e, t, "access private method"), r), l, h;
let s = class extends d {
  constructor() {
    super(), P(this, l), this.value = "", this._options = [], this.consumeContext(f, async (e) => {
      const t = e;
      this.observe(
        await t?.propertyValueByAlias("includeProperties"),
        (r) => {
          if (!r) return;
          const a = r.map((o) => ({
            name: o.header,
            value: o.alias,
            selected: o.alias === this.value
          }));
          this._options = [
            { name: this.localize.term("general_name"), value: "name", selected: this.value === "name" },
            ...a
          ];
        },
        "_observeIncludeProperties"
      );
    });
  }
  render() {
    return this._options.length ? c`<uui-select label="select" .options=${this._options} @change=${O(this, l, h)}></uui-select>` : c`<p><em>Add a column (above) to order by.</em></p>`;
  }
};
l = /* @__PURE__ */ new WeakSet();
h = function(e) {
  this.value = e.target.value, this.dispatchEvent(new y());
};
p([
  u()
], s.prototype, "value", 2);
p([
  v()
], s.prototype, "_options", 2);
s = p([
  _("umb-property-editor-ui-collection-order-by")
], s);
const A = s;
export {
  s as UmbPropertyEditorUICollectionOrderByElement,
  A as default
};
//# sourceMappingURL=order-by.element-De26bqzZ.js.map
