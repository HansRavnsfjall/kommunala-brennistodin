import { i as m } from "./index.js";
import { html as _, state as y, property as d, customElement as f } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as P } from "@umbraco-cms/backoffice/lit-element";
import { tryExecute as E } from "@umbraco-cms/backoffice/resources";
var w = Object.defineProperty, C = Object.getOwnPropertyDescriptor, u = (e) => {
  throw TypeError(e);
}, c = (e, t, a, o) => {
  for (var r = o > 1 ? void 0 : o ? C(t, a) : t, i = e.length - 1, p; i >= 0; i--)
    (p = e[i]) && (r = (o ? p(t, a, r) : p(r)) || r);
  return o && r && w(t, a, r), r;
}, D = (e, t, a) => t.has(e) || u("Cannot " + a), g = (e, t, a) => t.has(e) ? u("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, a), l = (e, t, a) => (D(e, t, "access private method"), a), n, h, v;
const k = "forms-data-type-picker-property-editor";
let s = class extends P {
  constructor() {
    super(...arguments), g(this, n), this._options = [], this.value = "";
  }
  async connectedCallback() {
    super.connectedCallback(), await l(this, n, h).call(this);
  }
  render() {
    return _` <uui-select
      label="Data type picker"
      @change=${l(this, n, v)}
      .options=${this._options.map((e) => ({
      name: e.value,
      value: e.id,
      selected: e.id === this.value
    }))}
    ></uui-select>`;
  }
};
n = /* @__PURE__ */ new WeakSet();
h = async function() {
  const { data: e } = await E(this, m.getPickerDataType());
  this._options = e;
};
v = function(e) {
  const t = e.target.value.toString();
  t !== this.value && (this.value = t, this.dispatchEvent(new CustomEvent("property-value-change")));
};
c([
  y()
], s.prototype, "_options", 2);
c([
  d()
], s.prototype, "value", 2);
s = c([
  f(k)
], s);
const x = s;
export {
  s as FormsDataTypePickerPropertyUiElement,
  x as default
};
//# sourceMappingURL=data-type-picker-property-editor.element.js.map
