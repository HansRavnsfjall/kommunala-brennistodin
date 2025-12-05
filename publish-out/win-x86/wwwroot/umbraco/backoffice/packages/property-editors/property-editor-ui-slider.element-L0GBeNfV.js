import { UmbChangeEvent as y } from "@umbraco-cms/backoffice/event";
import { html as b, property as v, state as o, customElement as V } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as g } from "@umbraco-cms/backoffice/lit-element";
import { UMB_PROPERTY_CONTEXT as x } from "@umbraco-cms/backoffice/property";
import { UmbFormControlMixin as E } from "@umbraco-cms/backoffice/validation";
var N = Object.defineProperty, P = Object.getOwnPropertyDescriptor, c = (t) => {
  throw TypeError(t);
}, n = (t, e, i, a) => {
  for (var s = a > 1 ? void 0 : a ? P(e, i) : e, m = t.length - 1, _; m >= 0; m--)
    (_ = t[m]) && (s = (a ? _(e, i, s) : _(s)) || s);
  return a && s && N(e, i, s), s;
}, $ = (t, e, i) => e.has(t) || c("Cannot " + i), U = (t, e, i) => e.has(t) ? c("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), p = (t, e, i) => ($(t, e, "access private method"), i), l, u, f;
function w(t) {
  const [e, i] = (t ?? ",").split(","), a = d(e);
  return { from: a, to: d(i, a) };
}
function d(t, e) {
  if (t === void 0)
    return e;
  const i = Number(t);
  return isNaN(i) ? e : i;
}
function h(t, e) {
  return t === void 0 ? e : t;
}
let r = class extends E(g) {
  constructor() {
    super(), U(this, l), this.readonly = !1, this._enableRange = !1, this._initVal1 = 0, this._initVal2 = 1, this._step = 1, this._min = 0, this._max = 100, this.consumeContext(x, (t) => {
      this._label = t?.getLabel();
    });
  }
  set config(t) {
    if (!t) return;
    this._enableRange = !!t.getValueByAlias("enableRange");
    const e = t.getValueByAlias("step") ?? 1;
    this._step = e > 0 ? e : 1;
    const i = Number(t.getValueByAlias("initVal1"));
    this._initVal1 = isNaN(i) ? 0 : i;
    const a = Number(t.getValueByAlias("initVal2"));
    this._initVal2 = isNaN(a) ? this._initVal1 + this._step : a, this._min = p(this, l, u).call(this, t.getValueByAlias("minVal")) || 0, this._max = p(this, l, u).call(this, t.getValueByAlias("maxVal")) || 100, this._min === this._max && (this._max = this._min + 100, console.warn(
      `Property Editor (Slider) has been misconfigured, 'min' and 'max' are equal values. Please correct your data type configuration. To render the slider correctly, we changed this slider to: min = ${this._min}, max = ${this._max}`,
      this
    ));
  }
  firstUpdated() {
    this.addFormControlElement(this.shadowRoot.querySelector("umb-input-slider")), this._min && this._max && this._min > this._max && console.warn(
      `Property '${this._label}' (Slider) has been misconfigured, 'min' is greater than 'max'. Please correct your data type configuration.`,
      this
    );
  }
  render() {
    return b`
			<umb-input-slider
				.label=${this._label ?? "Slider"}
				.valueLow=${h(this.value?.from, this._initVal1)}
				.valueHigh=${h(this.value?.to, this._initVal2)}
				.step=${this._step}
				.min=${this._min}
				.max=${this._max}
				?enable-range=${this._enableRange}
				@change=${p(this, l, f)}
				?readonly=${this.readonly}>
			</umb-input-slider>
		`;
  }
};
l = /* @__PURE__ */ new WeakSet();
u = function(t) {
  const e = Number(t);
  return Number.isNaN(e) ? void 0 : e;
};
f = function(t) {
  const e = w(t.target.value), i = h(e.from, this._initVal1);
  this.value = {
    from: i,
    to: this._enableRange ? h(e.to, this._initVal2) : i
  }, this.dispatchEvent(new y());
};
n([
  v({ type: Boolean, reflect: !0 })
], r.prototype, "readonly", 2);
n([
  o()
], r.prototype, "_enableRange", 2);
n([
  o()
], r.prototype, "_initVal1", 2);
n([
  o()
], r.prototype, "_initVal2", 2);
n([
  o()
], r.prototype, "_label", 2);
n([
  o()
], r.prototype, "_step", 2);
n([
  o()
], r.prototype, "_min", 2);
n([
  o()
], r.prototype, "_max", 2);
r = n([
  V("umb-property-editor-ui-slider")
], r);
const A = r;
export {
  r as UmbPropertyEditorUISliderElement,
  A as default
};
//# sourceMappingURL=property-editor-ui-slider.element-L0GBeNfV.js.map
