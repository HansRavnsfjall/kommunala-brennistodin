import { html as c, state as l, property as g, customElement as f } from "@umbraco-cms/backoffice/external/lit";
import { UmbFormControlMixin as y } from "@umbraco-cms/backoffice/validation";
import { UmbChangeEvent as b } from "@umbraco-cms/backoffice/event";
import { UmbLitElement as E } from "@umbraco-cms/backoffice/lit-element";
var x = Object.defineProperty, V = Object.getOwnPropertyDescriptor, h = (e) => {
  throw TypeError(e);
}, o = (e, t, a, i) => {
  for (var r = i > 1 ? void 0 : i ? V(t, a) : t, s = e.length - 1, u; s >= 0; s--)
    (u = e[s]) && (r = (i ? u(t, a, r) : u(r)) || r);
  return i && r && x(t, a, r), r;
}, v = (e, t, a) => t.has(e) || h("Cannot " + a), R = (e, t, a) => (v(e, t, "read from private field"), a ? a.call(e) : t.get(e)), d = (e, t, a) => t.has(e) ? h("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, a), U = (e, t, a, i) => (v(e, t, "write to private field"), t.set(e, a), a), w = (e, t, a) => (v(e, t, "access private method"), a), m, p, _;
let n = class extends y(E, void 0) {
  constructor() {
    super(...arguments), d(this, p), d(this, m, { min: void 0, max: void 0 });
  }
  set value(e) {
    U(this, m, e || { min: void 0, max: void 0 }), this._minValue = e?.min, this._maxValue = e?.max;
  }
  get value() {
    return R(this, m);
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
    return c`
			<umb-input-number-range
				.minValue=${this._minValue}
				.maxValue=${this._maxValue}
				.validationRange=${this._validationRange}
				@change=${w(this, p, _)}>
			</umb-input-number-range>
		`;
  }
};
m = /* @__PURE__ */ new WeakMap();
p = /* @__PURE__ */ new WeakSet();
_ = function(e) {
  this.value = { min: e.target.minValue, max: e.target.maxValue }, this.dispatchEvent(new b());
};
o([
  l()
], n.prototype, "_minValue", 2);
o([
  l()
], n.prototype, "_maxValue", 2);
o([
  l()
], n.prototype, "_validationRange", 2);
o([
  g({ type: Object })
], n.prototype, "value", 1);
n = o([
  f("umb-property-editor-ui-number-range")
], n);
const $ = n;
export {
  n as UmbPropertyEditorUINumberRangeElement,
  $ as default
};
//# sourceMappingURL=property-editor-ui-number-range.element-B_Y1uyeQ.js.map
