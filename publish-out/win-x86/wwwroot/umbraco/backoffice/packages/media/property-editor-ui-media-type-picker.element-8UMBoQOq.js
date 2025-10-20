import { UmbChangeEvent as v } from "@umbraco-cms/backoffice/event";
import { html as u, property as d, state as h, customElement as l } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as y } from "@umbraco-cms/backoffice/lit-element";
var f = Object.defineProperty, E = Object.getOwnPropertyDescriptor, _ = (e) => {
  throw TypeError(e);
}, o = (e, t, r, n) => {
  for (var i = n > 1 ? void 0 : n ? E(t, r) : t, s = e.length - 1, p; s >= 0; s--)
    (p = e[s]) && (i = (n ? p(t, r, i) : p(i)) || i);
  return n && i && f(t, r, i), i;
}, P = (e, t, r) => t.has(e) || _("Cannot " + r), x = (e, t, r) => t.has(e) ? _("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), U = (e, t, r) => (P(e, t, "access private method"), r), m, c;
let a = class extends y {
  constructor() {
    super(...arguments), x(this, m), this._min = 0, this._max = 1 / 0;
  }
  set config(e) {
    if (!e) return;
    const t = e?.getValueByAlias("validationLimit");
    this._min = t?.min ?? 0, this._max = t?.max ?? 1 / 0;
  }
  render() {
    return u`
			<umb-input-media-type .min=${this._min} .max=${this._max} .value=${this.value} @change=${U(this, m, c)}>
			</umb-input-media-type>
		`;
  }
};
m = /* @__PURE__ */ new WeakSet();
c = function(e) {
  this.value = e.target.value, this.dispatchEvent(new v());
};
o([
  d()
], a.prototype, "value", 2);
o([
  h()
], a.prototype, "_min", 2);
o([
  h()
], a.prototype, "_max", 2);
a = o([
  l("umb-property-editor-ui-media-type-picker")
], a);
const w = a;
export {
  a as UmbPropertyEditorUIMediaTypePickerElement,
  w as default
};
//# sourceMappingURL=property-editor-ui-media-type-picker.element-8UMBoQOq.js.map
