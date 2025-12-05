import { UmbChangeEvent as c } from "@umbraco-cms/backoffice/event";
import { html as y, property as h, state as l, customElement as u } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as v } from "@umbraco-cms/backoffice/lit-element";
var f = Object.defineProperty, E = Object.getOwnPropertyDescriptor, d = (t) => {
  throw TypeError(t);
}, n = (t, e, r, o) => {
  for (var i = o > 1 ? void 0 : o ? E(e, r) : e, s = t.length - 1, m; s >= 0; s--)
    (m = t[s]) && (i = (o ? m(e, r, i) : m(i)) || i);
  return o && i && f(e, r, i), i;
}, P = (t, e, r) => e.has(t) || d("Cannot " + r), x = (t, e, r) => e.has(t) ? d("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), U = (t, e, r) => (P(t, e, "access private method"), r), p, _;
let a = class extends v {
  constructor() {
    super(...arguments), x(this, p), this.readonly = !1, this._min = 0, this._max = 1 / 0;
  }
  set config(t) {
    if (!t) return;
    const e = t?.getValueByAlias("validationLimit");
    this._min = e?.min ?? 0, this._max = e?.max ?? 1 / 0;
  }
  render() {
    return y`
			<umb-input-media
				.min=${this._min}
				.max=${this._max}
				.value=${this.value}
				?readonly=${this.readonly}
				@change=${U(this, p, _)}></umb-input-media>
		`;
  }
};
p = /* @__PURE__ */ new WeakSet();
_ = function(t) {
  this.value = t.target.value, this.dispatchEvent(new c());
};
n([
  h({ type: String })
], a.prototype, "value", 2);
n([
  h({ type: Boolean, reflect: !0 })
], a.prototype, "readonly", 2);
n([
  l()
], a.prototype, "_min", 2);
n([
  l()
], a.prototype, "_max", 2);
a = n([
  u("umb-property-editor-ui-media-entity-picker")
], a);
const $ = a;
export {
  a as UmbPropertyEditorUIMediaEntityPickerElement,
  $ as default
};
//# sourceMappingURL=property-editor-ui-media-entity-picker.element-BpMeGsrU.js.map
