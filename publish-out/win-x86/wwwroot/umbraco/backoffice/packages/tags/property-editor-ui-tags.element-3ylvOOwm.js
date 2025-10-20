import { UMB_PROPERTY_CONTEXT as c } from "@umbraco-cms/backoffice/property";
import { ifDefined as m, html as y, property as h, state as l, customElement as g } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as d } from "@umbraco-cms/backoffice/lit-element";
import "./tags-input.element-Dd1UD2kK.js";
import { UmbChangeEvent as f } from "@umbraco-cms/backoffice/event";
var E = Object.defineProperty, T = Object.getOwnPropertyDescriptor, _ = (t) => {
  throw TypeError(t);
}, s = (t, e, r, p) => {
  for (var o = p > 1 ? void 0 : p ? T(e, r) : e, i = t.length - 1, n; i >= 0; i--)
    (n = t[i]) && (o = (p ? n(e, r, o) : n(o)) || o);
  return p && o && E(e, r, o), o;
}, P = (t, e, r) => e.has(t) || _("Cannot " + r), U = (t, e, r) => e.has(t) ? _("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), C = (t, e, r) => (P(t, e, "access private method"), r), u, v;
let a = class extends d {
  constructor() {
    super(), U(this, u), this._value = [], this.readonly = !1, this.consumeContext(c, (t) => {
      this.observe(t?.variantId, (e) => {
        e && e.culture !== void 0 && (this._culture = e.culture);
      });
    });
  }
  set value(t) {
    this._value = t || [];
  }
  get value() {
    return this._value;
  }
  //TODO: Use type from VariantID
  set config(t) {
    this._group = t?.getValueByAlias("group"), this._storageType = t?.getValueByAlias("storageType");
  }
  render() {
    return y`<umb-tags-input
			group=${m(this._group)}
			.culture=${this._culture}
			.items=${this.value}
			@change=${C(this, u, v)}
			?readonly=${this.readonly}></umb-tags-input>`;
  }
};
u = /* @__PURE__ */ new WeakSet();
v = function(t) {
  this.value = t.target.value.split(","), this.dispatchEvent(new f());
};
s([
  h({ type: Array })
], a.prototype, "value", 1);
s([
  h({ type: Boolean, reflect: !0 })
], a.prototype, "readonly", 2);
s([
  l()
], a.prototype, "_group", 2);
s([
  l()
], a.prototype, "_storageType", 2);
s([
  l()
], a.prototype, "_culture", 2);
a = s([
  g("umb-property-editor-ui-tags")
], a);
const B = a;
export {
  a as UmbPropertyEditorUITagsElement,
  B as default
};
//# sourceMappingURL=property-editor-ui-tags.element-3ylvOOwm.js.map
