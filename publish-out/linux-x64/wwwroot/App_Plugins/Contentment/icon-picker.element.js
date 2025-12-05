import { when as f, html as u, css as y, state as h, property as g, customElement as E } from "@umbraco-cms/backoffice/external/lit";
import { UmbChangeEvent as v } from "@umbraco-cms/backoffice/event";
import { UmbLitElement as I } from "@umbraco-cms/backoffice/lit-element";
var C = Object.defineProperty, z = Object.getOwnPropertyDescriptor, _ = (e) => {
  throw TypeError(e);
}, s = (e, t, r, i) => {
  for (var n = i > 1 ? void 0 : i ? z(t, r) : t, c = e.length - 1, l; c >= 0; c--)
    (l = e[c]) && (n = (i ? l(t, r, n) : l(n)) || n);
  return i && n && C(t, r, n), n;
}, P = (e, t, r) => t.has(e) || _("Cannot " + r), w = (e, t, r) => t.has(e) ? _("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), p = (e, t, r) => (P(e, t, "access private method"), r), o, d, m;
let a = class extends I {
  constructor() {
    super(...arguments), w(this, o), this._defaultIcon = "", this._size = "large";
  }
  set config(e) {
    e && (this._defaultIcon = e.getValueByAlias("defaultIcon") ?? "", this._size = e.getValueByAlias("size") ?? "large");
  }
  render() {
    return u`
			<contentment-icon-picker
				.defaultIcon=${this._defaultIcon}
				.size=${this._size}
				.value=${this.value}
				@change=${p(this, o, d)}>
			</contentment-icon-picker>
			${f(
      this.value,
      () => u`<uui-button compact label=${this.localize.term("general_clear")} @click=${p(this, o, m)}></uui-button>`
    )}
		`;
  }
};
o = /* @__PURE__ */ new WeakSet();
d = function(e) {
  !e.target || e.target.value === this.value || (this.value = e.target.value ?? void 0, this.dispatchEvent(new v()));
};
m = function() {
  this.value = void 0, this.dispatchEvent(new v());
};
a.styles = [
  y`
			:host {
				display: flex;
				gap: var(--uui-size-2);
			}
		`
];
s([
  h()
], a.prototype, "_defaultIcon", 2);
s([
  h()
], a.prototype, "_size", 2);
s([
  g()
], a.prototype, "value", 2);
a = s([
  E("contentment-property-editor-ui-icon-picker")
], a);
export {
  a as ContentmentPropertyEditorUIIconPickerElement,
  a as element
};
//# sourceMappingURL=icon-picker.element.js.map
