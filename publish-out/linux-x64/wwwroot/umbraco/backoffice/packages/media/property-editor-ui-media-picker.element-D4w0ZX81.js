import { m as y } from "./input-upload-field.element-BKvVffkE.js";
import { html as u, property as m, state as o, customElement as c } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as v } from "@umbraco-cms/backoffice/lit-element";
import { UMB_PROPERTY_CONTEXT as f } from "@umbraco-cms/backoffice/property";
import { UmbFormControlMixin as E, UMB_VALIDATION_EMPTY_LOCALIZATION_KEY as I } from "@umbraco-cms/backoffice/validation";
import { UmbChangeEvent as M } from "@umbraco-cms/backoffice/event";
var P = Object.defineProperty, C = Object.getOwnPropertyDescriptor, h = (e) => {
  throw TypeError(e);
}, i = (e, t, r, l) => {
  for (var s = l > 1 ? void 0 : l ? C(t, r) : t, n = e.length - 1, p; n >= 0; n--)
    (p = e[n]) && (s = (l ? p(t, r, s) : p(s)) || s);
  return l && s && P(t, r, s), s;
}, b = (e, t, r) => t.has(e) || h("Cannot " + r), T = (e, t, r) => t.has(e) ? h("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), $ = (e, t, r) => (b(e, t, "access private method"), r), d, _;
const g = "umb-property-editor-ui-media-picker";
let a = class extends E(v) {
  constructor() {
    super(), T(this, d), this.mandatoryMessage = I, this.readonly = !1, this._focalPointEnabled = !1, this._preselectedCrops = [], this._allowedMediaTypes = [], this._multiple = !1, this._min = 0, this._max = 1 / 0, this.consumeContext(f, (e) => {
      this.observe(e?.alias, (t) => this._alias = t), this.observe(e?.variantId, (t) => this._variantId = t?.toString() || "invariant");
    });
  }
  set config(e) {
    if (!e) return;
    this._allowedMediaTypes = e.getValueByAlias("filter")?.split(",") ?? [], this._focalPointEnabled = !!e.getValueByAlias("enableLocalFocalPoint"), this._multiple = !!e.getValueByAlias("multiple"), this._preselectedCrops = e?.getValueByAlias("crops") ?? [];
    const t = e.getValueByAlias("startNodeId") ?? "";
    this._startNode = t ? { unique: t, entityType: y } : void 0;
    const r = e.getValueByAlias("validationLimit");
    this._min = r?.min ?? 0, this._max = r?.max ?? 1 / 0;
  }
  firstUpdated() {
    this.addFormControlElement(this.shadowRoot.querySelector("umb-input-rich-media"));
  }
  focus() {
    return this.shadowRoot?.querySelector("umb-input-rich-media")?.focus();
  }
  render() {
    return u`
			<umb-input-rich-media
				.alias=${this._alias}
				.allowedContentTypeIds=${this._allowedMediaTypes}
				.focalPointEnabled=${this._focalPointEnabled}
				.value=${this.value ?? []}
				.max=${this._max}
				.min=${this._min}
				.preselectedCrops=${this._preselectedCrops}
				.startNode=${this._startNode}
				.variantId=${this._variantId}
				.required=${this.mandatory}
				.requiredMessage=${this.mandatoryMessage}
				?multiple=${this._multiple}
				@change=${$(this, d, _)}
				?readonly=${this.readonly}>
			</umb-input-rich-media>
		`;
  }
};
d = /* @__PURE__ */ new WeakSet();
_ = function(e) {
  const t = e.target.value?.length === 0;
  this.value = t ? void 0 : e.target.value, this.dispatchEvent(new M());
};
i([
  m({ type: Boolean })
], a.prototype, "mandatory", 2);
i([
  m({ type: String })
], a.prototype, "mandatoryMessage", 2);
i([
  m({ type: Boolean, reflect: !0 })
], a.prototype, "readonly", 2);
i([
  o()
], a.prototype, "_startNode", 2);
i([
  o()
], a.prototype, "_focalPointEnabled", 2);
i([
  o()
], a.prototype, "_preselectedCrops", 2);
i([
  o()
], a.prototype, "_allowedMediaTypes", 2);
i([
  o()
], a.prototype, "_multiple", 2);
i([
  o()
], a.prototype, "_min", 2);
i([
  o()
], a.prototype, "_max", 2);
i([
  o()
], a.prototype, "_alias", 2);
i([
  o()
], a.prototype, "_variantId", 2);
a = i([
  c(g)
], a);
export {
  a as UmbPropertyEditorUIMediaPickerElement,
  a as element
};
//# sourceMappingURL=property-editor-ui-media-picker.element-D4w0ZX81.js.map
