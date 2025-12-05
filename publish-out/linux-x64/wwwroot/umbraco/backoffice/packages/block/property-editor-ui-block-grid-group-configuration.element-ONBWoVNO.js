import { html as d, css as m, property as v, customElement as h } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as _ } from "@umbraco-cms/backoffice/lit-element";
import { UmbTextStyles as f } from "@umbraco-cms/backoffice/style";
import { UmbId as b } from "@umbraco-cms/backoffice/id";
import { UmbChangeEvent as y } from "@umbraco-cms/backoffice/event";
var E = Object.defineProperty, g = Object.getOwnPropertyDescriptor, u = (t) => {
  throw TypeError(t);
}, p = (t, e, r, i) => {
  for (var o = i > 1 ? void 0 : i ? g(e, r) : e, n = t.length - 1, s; n >= 0; n--)
    (s = t[n]) && (o = (i ? s(e, r, o) : s(o)) || o);
  return i && o && E(e, r, o), o;
}, U = (t, e, r) => e.has(t) || u("Cannot " + r), k = (t, e, r) => e.has(t) ? u("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), G = (t, e, r) => (U(t, e, "access private method"), r), l, c;
let a = class extends _ {
  constructor() {
    super(...arguments), k(this, l), this._value = [];
  }
  set value(t) {
    this._value = t || [];
  }
  get value() {
    return this._value;
  }
  set config(t) {
  }
  render() {
    return d`
			<uui-button label=${this.localize.term("blockEditor_addBlockGroup")} look="placeholder" @click=${G(this, l, c)}>
				${this.localize.term("blockEditor_addBlockGroup")}
			</uui-button>
		`;
  }
};
l = /* @__PURE__ */ new WeakSet();
c = function() {
  this.value = [...this._value, { name: "Unnamed group", key: b.new() }], this.dispatchEvent(new y());
};
a.styles = [
  f,
  m`
			uui-button {
				display: block;
			}
		`
];
p([
  v({ type: Array })
], a.prototype, "value", 1);
a = p([
  h("umb-property-editor-ui-block-grid-group-configuration")
], a);
const O = a;
export {
  a as UmbPropertyEditorUIBlockGridGroupConfigurationElement,
  O as default
};
//# sourceMappingURL=property-editor-ui-block-grid-group-configuration.element-ONBWoVNO.js.map
