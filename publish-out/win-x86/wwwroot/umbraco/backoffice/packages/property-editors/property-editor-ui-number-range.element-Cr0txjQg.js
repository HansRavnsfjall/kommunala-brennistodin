import { html as d, state as p, property as v, customElement as _ } from "@umbraco-cms/backoffice/external/lit";
import { UmbFormControlMixin as c } from "@umbraco-cms/backoffice/validation";
import { UmbChangeEvent as g } from "@umbraco-cms/backoffice/event";
import { UmbLitElement as b } from "@umbraco-cms/backoffice/lit-element";
var f = Object.defineProperty, y = Object.getOwnPropertyDescriptor, l = (e) => {
  throw TypeError(e);
}, o = (e, t, r, i) => {
  for (var a = i > 1 ? void 0 : i ? y(t, r) : t, m = e.length - 1, u; m >= 0; m--)
    (u = e[m]) && (a = (i ? u(t, r, a) : u(a)) || a);
  return i && a && f(t, r, a), a;
}, E = (e, t, r) => t.has(e) || l("Cannot " + r), x = (e, t, r) => t.has(e) ? l("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), V = (e, t, r) => (E(e, t, "access private method"), r), s, h;
let n = class extends c(b, void 0) {
  constructor() {
    super(...arguments), x(this, s);
  }
  set value(e) {
    super.value = e || { min: void 0, max: void 0 }, this._minValue = e?.min, this._maxValue = e?.max;
  }
  get value() {
    return super.value;
  }
  set config(e) {
    e && (this._validationRange = e.getValueByAlias("validationRange"));
  }
  firstUpdated() {
    this.addFormControlElement(this.shadowRoot.querySelector("umb-input-number-range"));
  }
  focus() {
    this.shadowRoot.querySelector("umb-input-number-range").focus();
  }
  render() {
    return d`
			<umb-input-number-range
				.minValue=${this._minValue}
				.maxValue=${this._maxValue}
				.validationRange=${this._validationRange}
				@change=${V(this, s, h)}>
			</umb-input-number-range>
		`;
  }
};
s = /* @__PURE__ */ new WeakSet();
h = function(e) {
  this.value = { min: e.target.minValue, max: e.target.maxValue }, this.dispatchEvent(new g());
};
o([
  p()
], n.prototype, "_minValue", 2);
o([
  p()
], n.prototype, "_maxValue", 2);
o([
  p()
], n.prototype, "_validationRange", 2);
o([
  v({ type: Object })
], n.prototype, "value", 1);
n = o([
  _("umb-property-editor-ui-number-range")
], n);
const P = n;
export {
  n as UmbPropertyEditorUINumberRangeElement,
  P as default
};
//# sourceMappingURL=property-editor-ui-number-range.element-Cr0txjQg.js.map
