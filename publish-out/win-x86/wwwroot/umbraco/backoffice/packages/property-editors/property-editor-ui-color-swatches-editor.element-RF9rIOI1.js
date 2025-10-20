import { html as d, property as f, state as w, customElement as E } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as y } from "@umbraco-cms/backoffice/lit-element";
import { UmbChangeEvent as b } from "@umbraco-cms/backoffice/event";
var C = Object.defineProperty, L = Object.getOwnPropertyDescriptor, u = (e) => {
  throw TypeError(e);
}, h = (e, t, r, o) => {
  for (var a = o > 1 ? void 0 : o ? L(t, r) : t, l = e.length - 1, n; l >= 0; l--)
    (n = e[l]) && (a = (o ? n(t, r, a) : n(a)) || a);
  return o && a && C(t, r, a), a;
}, v = (e, t, r) => t.has(e) || u("Cannot " + r), c = (e, t, r) => (v(e, t, "read from private field"), r ? r.call(e) : t.get(e)), m = (e, t, r) => t.has(e) ? u("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), U = (e, t, r) => (v(e, t, "access private method"), r), i, p, _;
let s = class extends y {
  constructor() {
    super(...arguments), m(this, p), m(this, i, !1), this.value = [], this._showLabels = c(this, i);
  }
  set config(e) {
    this._showLabels = e?.getValueByAlias("useLabel") ?? c(this, i);
  }
  render() {
    return d`
			<umb-multiple-color-picker-input
				.items=${this.value}
				?showLabels=${this._showLabels}
				@change=${U(this, p, _)}></umb-multiple-color-picker-input>
		`;
  }
};
i = /* @__PURE__ */ new WeakMap();
p = /* @__PURE__ */ new WeakSet();
_ = function(e) {
  this.value = e.target.items, this.dispatchEvent(new b());
};
h([
  f({ type: Array })
], s.prototype, "value", 2);
h([
  w()
], s.prototype, "_showLabels", 2);
s = h([
  E("umb-property-editor-ui-color-swatches-editor")
], s);
const O = s;
export {
  s as UmbPropertyEditorUIColorSwatchesEditorElement,
  O as default
};
//# sourceMappingURL=property-editor-ui-color-swatches-editor.element-RF9rIOI1.js.map
