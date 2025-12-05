import { html as f, property as m, state as l, customElement as v } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as b } from "@umbraco-cms/backoffice/lit-element";
import { UmbChangeEvent as $ } from "@umbraco-cms/backoffice/event";
var P = Object.defineProperty, g = Object.getOwnPropertyDescriptor, d = (t) => {
  throw TypeError(t);
}, r = (t, e, a, n) => {
  for (var s = n > 1 ? void 0 : n ? g(e, a) : e, h = t.length - 1, u; h >= 0; h--)
    (u = t[h]) && (s = (n ? u(e, a, s) : u(s)) || s);
  return n && s && P(e, a, s), s;
}, E = (t, e, a) => e.has(t) || d("Cannot " + a), T = (t, e, a) => e.has(t) ? d("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, a), p = (t, e, a) => (E(t, e, "access private method"), a), o, _, y, c;
let i = class extends b {
  constructor() {
    super(...arguments), T(this, o), this.readonly = !1, this._inputType = "datetime-local";
  }
  set config(t) {
    if (!t) return;
    const e = t.getValueByAlias("format"), a = (e?.includes("H") || e?.includes("m")) ?? !1, n = e?.includes("s") ?? !1;
    this._inputType = a ? "datetime-local" : "date";
    const s = /^h{1,2}:m{1,2}(:s{1,2})?\s?a?$/gim;
    e?.toLowerCase().match(s) && (this._inputType = "time"), this._min = t.getValueByAlias("min"), this._max = t.getValueByAlias("max"), this._step = t.getValueByAlias("step") ?? n ? 1 : void 0, this.value && p(this, o, y).call(this, this.value);
  }
  render() {
    return f`
			<umb-input-date
				label=${this.localize.term("placeholders_enterdate")}
				.value=${this._inputValue}
				.min=${this._min}
				.max=${this._max}
				.step=${this._step}
				.type=${this._inputType}
				@change=${p(this, o, _)}
				?readonly=${this.readonly}>
			</umb-input-date>
		`;
  }
};
o = /* @__PURE__ */ new WeakSet();
_ = function(t) {
  let e = t.target.value.toString();
  if (!e) {
    p(this, o, c).call(this, void 0);
    return;
  }
  switch (this._inputType) {
    case "time":
      e = `0001-01-01 ${e}`;
      break;
    case "date":
      e = `${e} 00:00:00`;
      break;
    case "datetime-local":
      e = e.replace("T", " ");
      break;
  }
  p(this, o, c).call(this, e);
};
y = function(t) {
  if (this._inputValue = void 0, isNaN(new Date(t).getTime())) {
    console.warn(`[UmbDatePicker] Invalid date: ${t}`);
    return;
  }
  const e = t.split(" ");
  if (e.length !== 2) {
    console.warn(`[UmbDatePicker] Invalid date: ${t}`);
    return;
  }
  switch (this._inputType) {
    case "time":
      this._inputValue = e[1];
      break;
    case "date":
      this._inputValue = e[0];
      break;
    default:
      this._inputValue = e.join("T");
      break;
  }
};
c = function(t) {
  this.value !== t && (this.value = t, this.dispatchEvent(new $()));
};
r([
  m({ type: Boolean, reflect: !0 })
], i.prototype, "readonly", 2);
r([
  l()
], i.prototype, "_inputType", 2);
r([
  l()
], i.prototype, "_min", 2);
r([
  l()
], i.prototype, "_max", 2);
r([
  l()
], i.prototype, "_step", 2);
r([
  m()
], i.prototype, "value", 2);
r([
  l()
], i.prototype, "_inputValue", 2);
i = r([
  v("umb-property-editor-ui-date-picker")
], i);
const U = i;
export {
  i as UmbPropertyEditorUIDatePickerElement,
  U as default
};
//# sourceMappingURL=property-editor-ui-date-picker.element-TPjDdqX1.js.map
