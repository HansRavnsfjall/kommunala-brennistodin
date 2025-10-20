import { html as v, property as y, state as l, customElement as c } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as m } from "@umbraco-cms/backoffice/lit-element";
import { UmbChangeEvent as d } from "@umbraco-cms/backoffice/event";
var f = Object.defineProperty, E = Object.getOwnPropertyDescriptor, _ = (e) => {
  throw TypeError(e);
}, p = (e, t, r, s) => {
  for (var a = s > 1 ? void 0 : s ? E(t, r) : t, i = e.length - 1, n; i >= 0; i--)
    (n = e[i]) && (a = (s ? n(t, r, a) : n(a)) || a);
  return s && a && f(t, r, a), a;
}, P = (e, t, r) => t.has(e) || _("Cannot " + r), w = (e, t, r) => t.has(e) ? _("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), U = (e, t, r) => (P(e, t, "access private method"), r), h, u;
let o = class extends m {
  constructor() {
    super(...arguments), w(this, h), this.value = "", this._opacity = !1, this._showPalette = !1;
  }
  set config(e) {
    e && (this._opacity = e.getValueByAlias("showAlpha") ?? !1, this._showPalette = e.getValueByAlias("showPalette") ?? !1);
  }
  render() {
    return v`
			<umb-input-eye-dropper
				.opacity=${this._opacity}
				.showPalette=${this._showPalette}
				value=${this.value}
				@change=${U(this, h, u)}></umb-input-eye-dropper>
		`;
  }
};
h = /* @__PURE__ */ new WeakSet();
u = function(e) {
  this.value = e.target.value, this.dispatchEvent(new d());
};
p([
  y()
], o.prototype, "value", 2);
p([
  l()
], o.prototype, "_opacity", 2);
p([
  l()
], o.prototype, "_showPalette", 2);
o = p([
  c("umb-property-editor-ui-eye-dropper")
], o);
const D = o;
export {
  o as UmbPropertyEditorUIEyeDropperElement,
  D as default
};
//# sourceMappingURL=property-editor-ui-eye-dropper.element-BAKbnp1A.js.map
