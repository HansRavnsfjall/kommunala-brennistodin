import { html as c, property as u, state as h, customElement as v } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as d } from "@umbraco-cms/backoffice/lit-element";
import { UmbChangeEvent as y } from "@umbraco-cms/backoffice/event";
var f = Object.defineProperty, b = Object.getOwnPropertyDescriptor, l = (e) => {
  throw TypeError(e);
}, o = (e, t, r, i) => {
  for (var a = i > 1 ? void 0 : i ? b(t, r) : t, m = e.length - 1, s; m >= 0; m--)
    (s = e[m]) && (a = (i ? s(t, r, a) : s(a)) || a);
  return i && a && f(t, r, a), a;
}, E = (e, t, r) => t.has(e) || l("Cannot " + r), P = (e, t, r) => t.has(e) ? l("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), g = (e, t, r) => (E(e, t, "access private method"), r), p, _;
let n = class extends d {
  constructor() {
    super(...arguments), P(this, p), this.readonly = !1, this._min = 0, this._max = 1 / 0;
  }
  set config(e) {
    if (!e) return;
    const t = e?.getValueByAlias("validationLimit");
    this._min = t?.min ?? 0, this._max = t?.max ?? 1 / 0;
  }
  render() {
    return c`
			<umb-input-member-group
				.min=${this._min}
				.max=${this._max}
				.value=${this.value}
				@change=${g(this, p, _)}
				?readonly=${this.readonly}></umb-input-member-group>
		`;
  }
};
p = /* @__PURE__ */ new WeakSet();
_ = function(e) {
  this.value = e.target.value, this.dispatchEvent(new y());
};
o([
  u()
], n.prototype, "value", 2);
o([
  u({ type: Boolean, reflect: !0 })
], n.prototype, "readonly", 2);
o([
  h()
], n.prototype, "_min", 2);
o([
  h()
], n.prototype, "_max", 2);
n = o([
  v("umb-property-editor-ui-member-group-picker")
], n);
const $ = n;
export {
  n as UmbPropertyEditorUIMemberGroupPickerElement,
  $ as default
};
//# sourceMappingURL=property-editor-ui-member-group-picker.element-CHDxZNqK.js.map
