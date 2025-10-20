import { ifDefined as n, html as v, css as y, property as f, state as m, customElement as b } from "@umbraco-cms/backoffice/external/lit";
import { UmbFormControlMixin as x } from "@umbraco-cms/backoffice/validation";
import { UmbLitElement as E } from "@umbraco-cms/backoffice/lit-element";
import { UMB_PROPERTY_CONTEXT as g } from "@umbraco-cms/backoffice/property";
import { UmbChangeEvent as U } from "@umbraco-cms/backoffice/event";
var P = Object.defineProperty, w = Object.getOwnPropertyDescriptor, d = (t) => {
  throw TypeError(t);
}, o = (t, e, r, u) => {
  for (var a = u > 1 ? void 0 : u ? w(e, r) : e, p = t.length - 1, _; p >= 0; p--)
    (_ = t[p]) && (a = (u ? _(e, r, a) : _(a)) || a);
  return u && a && P(e, r, a), a;
}, $ = (t, e, r) => e.has(t) || d("Cannot " + r), C = (t, e, r) => e.has(t) ? d("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), l = (t, e, r) => ($(t, e, "access private method"), r), s, h, c;
let i = class extends x(E) {
  constructor() {
    super(), C(this, s), this.readonly = !1, this.consumeContext(g, (t) => {
      this._label = t?.getLabel();
    }), this.addValidator(
      "rangeUnderflow",
      () => this.localize.term("validation_numberMinimum", this._min),
      () => !!this._min && this.value < this._min
    ), this.addValidator(
      "rangeOverflow",
      () => this.localize.term("validation_numberMaximum", this._max),
      () => !!this._max && this.value > this._max
    ), this.addValidator(
      "customError",
      () => this.localize.term("validation_numberMisconfigured", this._min, this._max),
      () => !!this._min && !!this._max && this._min > this._max
    );
  }
  set config(t) {
    t && (this._min = l(this, s, h).call(this, t.getValueByAlias("min")), this._max = l(this, s, h).call(this, t.getValueByAlias("max")), this._step = l(this, s, h).call(this, t.getValueByAlias("step")), this._placeholder = t.getValueByAlias("placeholder"));
  }
  firstUpdated() {
    this._min && this._max && this._min > this._max && console.warn(
      `Property '${this._label}' (Numeric) has been misconfigured, 'min' is greater than 'max'. Please correct your data type configuration.`,
      this
    );
  }
  render() {
    return v`
			<uui-input
				type="number"
				label=${n(this._label)}
				min=${n(this._min)}
				max=${n(this._max)}
				step=${n(this._step)}
				placeholder=${n(this._placeholder)}
				value=${this.value?.toString() ?? ""}
				@change=${l(this, s, c)}
				?readonly=${this.readonly}>
			</uui-input>
		`;
  }
};
s = /* @__PURE__ */ new WeakSet();
h = function(t) {
  const e = Number(t);
  return Number.isFinite(e) ? e : void 0;
};
c = function(t) {
  const e = t.target.value === "" ? void 0 : l(this, s, h).call(this, t.target.value);
  e !== this.value && (this.value = e, this.dispatchEvent(new U()));
};
i.styles = [
  y`
			uui-input {
				width: 100%;
			}
		`
];
o([
  f({ type: Boolean, reflect: !0 })
], i.prototype, "readonly", 2);
o([
  m()
], i.prototype, "_label", 2);
o([
  m()
], i.prototype, "_max", 2);
o([
  m()
], i.prototype, "_min", 2);
o([
  m()
], i.prototype, "_step", 2);
o([
  m()
], i.prototype, "_placeholder", 2);
i = o([
  b("umb-property-editor-ui-number")
], i);
const A = i;
export {
  i as UmbPropertyEditorUINumberElement,
  A as default
};
//# sourceMappingURL=property-editor-ui-number.element-DVzXCQ4x.js.map
