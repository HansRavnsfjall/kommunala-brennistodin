import { html as d, property as y, state as s, customElement as v } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as f } from "@umbraco-cms/backoffice/lit-element";
import { UMB_PROPERTY_CONTEXT as b } from "@umbraco-cms/backoffice/property";
import "./input-multi-url.element-jigBOOsg.js";
import { UmbChangeEvent as E } from "@umbraco-cms/backoffice/event";
import { UmbFormControlMixin as P } from "@umbraco-cms/backoffice/validation";
var U = Object.defineProperty, x = Object.getOwnPropertyDescriptor, _ = (t) => {
  throw TypeError(t);
}, a = (t, e, r, l) => {
  for (var o = l > 1 ? void 0 : l ? x(e, r) : e, h = t.length - 1, m; h >= 0; h--)
    (m = t[h]) && (o = (l ? m(e, r, o) : m(o)) || o);
  return l && o && U(e, r, o), o;
}, I = (t, e, r) => e.has(t) || _("Cannot " + r), $ = (t, e, r) => e.has(t) ? _("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), p = (t, e, r) => (I(t, e, "access private method"), r), n, u, c;
let i = class extends P(f) {
  constructor() {
    super(), $(this, n), this.readonly = !1, this._min = 0, this._max = 1 / 0, this.consumeContext(b, (t) => {
      this._label = t?.getLabel(), this.observe(t?.alias, (e) => this._alias = e), this.observe(t?.variantId, (e) => this._variantId = e?.toString() || "invariant");
    });
  }
  set config(t) {
    t && (this._hideAnchor = !!t.getValueByAlias("hideAnchor"), this._min = p(this, n, u).call(this, t.getValueByAlias("minNumber"), 0), this._max = p(this, n, u).call(this, t.getValueByAlias("maxNumber"), 1 / 0), this._overlaySize = t.getValueByAlias("overlaySize") ?? "small");
  }
  firstUpdated() {
    this._min && this._max && this._min > this._max && console.warn(
      `Property '${this._label}' (Multi URL Picker) has been misconfigured, 'min' is greater than 'max'. Please correct your data type configuration.`,
      this
    ), this.addFormControlElement(this.shadowRoot.querySelector("umb-input-multi-url"));
  }
  render() {
    return d`
			<umb-input-multi-url
				.alias=${this._alias}
				.max=${this._max}
				.min=${this._min}
				.overlaySize=${this._overlaySize}
				.urls=${this.value ?? []}
				.variantId=${this._variantId}
				?hide-anchor=${this._hideAnchor}
				?readonly=${this.readonly}
				@change=${p(this, n, c)}>
			</umb-input-multi-url>
		`;
  }
};
n = /* @__PURE__ */ new WeakSet();
u = function(t, e) {
  const r = Number(t);
  return !Number.isNaN(r) && r > 0 ? r : e;
};
c = function(t) {
  this.value = t.target.urls, this.dispatchEvent(new E());
};
a([
  y({ type: Boolean, reflect: !0 })
], i.prototype, "readonly", 2);
a([
  s()
], i.prototype, "_overlaySize", 2);
a([
  s()
], i.prototype, "_hideAnchor", 2);
a([
  s()
], i.prototype, "_min", 2);
a([
  s()
], i.prototype, "_max", 2);
a([
  s()
], i.prototype, "_label", 2);
a([
  s()
], i.prototype, "_alias", 2);
a([
  s()
], i.prototype, "_variantId", 2);
i = a([
  v("umb-property-editor-ui-multi-url-picker")
], i);
const M = i;
export {
  i as UmbPropertyEditorUIMultiUrlPickerElement,
  M as default
};
//# sourceMappingURL=property-editor-ui-multi-url-picker.element-CcHOs3FX.js.map
