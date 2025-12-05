import { i as v } from "./index.js";
import { html as _, state as y, property as d, customElement as f } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as P } from "@umbraco-cms/backoffice/lit-element";
import { tryExecute as E } from "@umbraco-cms/backoffice/resources";
var w = Object.defineProperty, C = Object.getOwnPropertyDescriptor, u = (e) => {
  throw TypeError(e);
}, p = (e, t, r, n) => {
  for (var a = n > 1 ? void 0 : n ? C(t, r) : t, i = e.length - 1, c; i >= 0; i--)
    (c = e[i]) && (a = (n ? c(t, r, a) : c(a)) || a);
  return n && a && w(t, r, a), a;
}, D = (e, t, r) => t.has(e) || u("Cannot " + r), g = (e, t, r) => t.has(e) ? u("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), l = (e, t, r) => (D(e, t, "access private method"), r), s, m, h;
const k = "forms-document-type-picker-property-editor";
let o = class extends P {
  constructor() {
    super(...arguments), g(this, s), this._options = [], this.value = "";
  }
  async connectedCallback() {
    super.connectedCallback(), await l(this, s, m).call(this);
  }
  render() {
    return _`<uui-select
      label="Document type picker"
      @change=${l(this, s, h)}
      .options=${this._options.map((e) => ({
      name: e.value,
      value: e.id,
      selected: e.id === this.value
    }))}
    ></uui-select>`;
  }
};
s = /* @__PURE__ */ new WeakSet();
m = async function() {
  const { data: e } = await E(
    this,
    v.getPickerDocumentType()
  );
  this._options = e;
};
h = function(e) {
  const t = e.target.value.toString();
  t !== this.value && (this.value = t, this.dispatchEvent(new CustomEvent("property-value-change")));
};
p([
  y()
], o.prototype, "_options", 2);
p([
  d()
], o.prototype, "value", 2);
o = p([
  f(k)
], o);
const x = o;
export {
  o as FormsDocumentTypePickerPropertyUiElement,
  x as default
};
//# sourceMappingURL=document-type-picker-property-editor.element.js.map
