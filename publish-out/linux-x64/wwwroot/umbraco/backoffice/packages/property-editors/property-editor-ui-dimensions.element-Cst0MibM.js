import { html as _, css as d, property as g, customElement as f } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as y } from "@umbraco-cms/backoffice/lit-element";
import { UmbChangeEvent as p } from "@umbraco-cms/backoffice/event";
var b = Object.defineProperty, E = Object.getOwnPropertyDescriptor, u = (e) => {
  throw TypeError(e);
}, m = (e, t, i, r) => {
  for (var a = r > 1 ? void 0 : r ? E(t, i) : t, l = e.length - 1, o; l >= 0; l--)
    (o = e[l]) && (a = (r ? o(t, i, a) : o(a)) || a);
  return r && a && b(t, i, a), a;
}, w = (e, t, i) => t.has(e) || u("Cannot " + i), $ = (e, t, i) => t.has(e) ? u("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), h = (e, t, i) => (w(e, t, "access private method"), i), n, c, v;
let s = class extends y {
  constructor() {
    super(...arguments), $(this, n), this.value = {};
  }
  render() {
    return _`
			<uui-input
				type="number"
				autocomplete="off"
				min="0"
				step="1"
				label=${this.localize.term("general_width")}
				placeholder=${this.localize.term("general_width")}
				@change=${h(this, n, c)}
				.value=${this.value?.width?.toString() ?? ""}>
			</uui-input>
			<span>&times;</span>
			<uui-input
				type="number"
				autocomplete="off"
				min="0"
				step="1"
				label=${this.localize.term("general_height")}
				placeholder=${this.localize.term("general_height")}
				@change=${h(this, n, v)}
				.value=${this.value?.height?.toString() ?? ""}>
			</uui-input>
			<umb-localize key="general_pixels">pixels</umb-localize>
		`;
  }
};
n = /* @__PURE__ */ new WeakSet();
c = function(e) {
  this.value = { ...this.value, width: Number(e.target.value) }, this.dispatchEvent(new p());
};
v = function(e) {
  this.value = { ...this.value, height: Number(e.target.value) }, this.dispatchEvent(new p());
};
s.styles = [
  d`
			:host {
				display: flex;
				align-items: center;
				gap: var(--uui-size-space-1);
			}
		`
];
m([
  g({ type: Object })
], s.prototype, "value", 2);
s = m([
  f("umb-property-editor-ui-dimensions")
], s);
export {
  s as UmbPropertyEditorUIDimensionsElement,
  s as element
};
//# sourceMappingURL=property-editor-ui-dimensions.element-Cst0MibM.js.map
