import { UmbChangeEvent as b } from "@umbraco-cms/backoffice/event";
import { html as v, property as u, state as l, customElement as f } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as V } from "@umbraco-cms/backoffice/lit-element";
import { UMB_PROPERTY_CONTEXT as g } from "@umbraco-cms/backoffice/property";
var x = Object.defineProperty, E = Object.getOwnPropertyDescriptor, c = (t) => {
  throw TypeError(t);
}, r = (t, e, i, s) => {
  for (var n = s > 1 ? void 0 : s ? E(e, i) : e, p = t.length - 1, m; p >= 0; p--)
    (m = t[p]) && (n = (s ? m(e, i, n) : m(n)) || n);
  return s && n && x(e, i, n), n;
}, P = (t, e, i) => e.has(t) || c("Cannot " + i), $ = (t, e, i) => e.has(t) ? c("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), h = (t, e, i) => (P(t, e, "access private method"), i), o, _, d, y;
let a = class extends V {
  constructor() {
    super(), $(this, o), this.readonly = !1, this._enableRange = !1, this._initVal1 = 0, this._initVal2 = 1, this._step = 1, this._min = 0, this._max = 100, this.consumeContext(g, (t) => {
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
    const s = Number(t.getValueByAlias("initVal2"));
    this._initVal2 = isNaN(s) ? this._initVal1 + this._step : s, this._min = h(this, o, _).call(this, t.getValueByAlias("minVal")) || 0, this._max = h(this, o, _).call(this, t.getValueByAlias("maxVal")) || 100, this._min === this._max && (this._max = this._min + 100, console.warn(
      `Property Editor (Slider) has been misconfigured, 'min' and 'max' are equal values. Please correct your data type configuration. To render the slider correctly, we changed this slider to: min = ${this._min}, max = ${this._max}`,
      this
    ));
  }
  firstUpdated() {
    this._min && this._max && this._min > this._max && console.warn(
      `Property '${this._label}' (Slider) has been misconfigured, 'min' is greater than 'max'. Please correct your data type configuration.`,
      this
    );
  }
  render() {
    return v`
			<umb-input-slider
				.label=${this._label ?? "Slider"}
				.valueLow=${this.value?.from ?? this._initVal1}
				.valueHigh=${this.value?.to ?? this._initVal2}
				.step=${this._step}
				.min=${this._min}
				.max=${this._max}
				?enable-range=${this._enableRange}
				@change=${h(this, o, y)}
				?readonly=${this.readonly}>
			</umb-input-slider>
		`;
  }
};
o = /* @__PURE__ */ new WeakSet();
_ = function(t) {
  const e = Number(t);
  return Number.isNaN(e) ? void 0 : e;
};
d = function(t) {
  const [e, i] = t.split(",").map(Number);
  return { from: e, to: i ?? e };
};
y = function(t) {
  this.value = h(this, o, d).call(this, t.target.value), this.dispatchEvent(new b());
};
r([
  u({ type: Object })
], a.prototype, "value", 2);
r([
  u({ type: Boolean, reflect: !0 })
], a.prototype, "readonly", 2);
r([
  l()
], a.prototype, "_enableRange", 2);
r([
  l()
], a.prototype, "_initVal1", 2);
r([
  l()
], a.prototype, "_initVal2", 2);
r([
  l()
], a.prototype, "_label", 2);
r([
  l()
], a.prototype, "_step", 2);
r([
  l()
], a.prototype, "_min", 2);
r([
  l()
], a.prototype, "_max", 2);
a = r([
  f("umb-property-editor-ui-slider")
], a);
const C = a;
export {
  a as UmbPropertyEditorUISliderElement,
  C as default
};
//# sourceMappingURL=property-editor-ui-slider.element-9TAr3Nso.js.map
