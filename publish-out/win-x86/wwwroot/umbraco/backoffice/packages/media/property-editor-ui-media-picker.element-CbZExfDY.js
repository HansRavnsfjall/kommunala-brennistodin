import { o as E } from "./input-upload-field.element-DEgpG3Zz.js";
import { html as P, property as _, state as o, customElement as g } from "@umbraco-cms/backoffice/external/lit";
import { UmbChangeEvent as I } from "@umbraco-cms/backoffice/event";
import { UmbLitElement as C } from "@umbraco-cms/backoffice/lit-element";
import { UmbPropertyEditorUiInteractionMemoryManager as b } from "@umbraco-cms/backoffice/property-editor";
import { UMB_PROPERTY_CONTEXT as w } from "@umbraco-cms/backoffice/property";
import { UmbFormControlMixin as T, UMB_VALIDATION_EMPTY_LOCALIZATION_KEY as $ } from "@umbraco-cms/backoffice/validation";
var U = Object.defineProperty, B = Object.getOwnPropertyDescriptor, u = (e) => {
  throw TypeError(e);
}, a = (e, t, i, l) => {
  for (var s = l > 1 ? void 0 : l ? B(t, i) : t, d = e.length - 1, h; d >= 0; d--)
    (h = e[d]) && (s = (l ? h(t, i, s) : h(s)) || s);
  return l && s && U(t, i, s), s;
}, v = (e, t, i) => t.has(e) || u("Cannot " + i), m = (e, t, i) => (v(e, t, "read from private field"), i ? i.call(e) : t.get(e)), y = (e, t, i) => t.has(e) ? u("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), c = (e, t, i) => (v(e, t, "access private method"), i), n, p, M, f;
let r = class extends T(C) {
  constructor() {
    super(), y(this, p), this.mandatoryMessage = $, this.readonly = !1, this._focalPointEnabled = !1, this._preselectedCrops = [], this._allowedMediaTypes = [], this._multiple = !1, this._min = 0, this._max = 1 / 0, this._interactionMemories = [], y(this, n, new b(this, {
      memoryUniquePrefix: "UmbMediaPicker"
    })), this.consumeContext(w, (e) => {
      this.observe(e?.alias, (t) => this._alias = t), this.observe(e?.variantId, (t) => this._variantId = t?.toString() || "invariant");
    }), this.observe(m(this, n).memoriesForPropertyEditor, (e) => {
      this._interactionMemories = e ?? [];
    });
  }
  set config(e) {
    if (m(this, n).setPropertyEditorConfig(e), !e) return;
    this._allowedMediaTypes = e.getValueByAlias("filter")?.split(",") ?? [], this._focalPointEnabled = !!e.getValueByAlias("enableLocalFocalPoint"), this._multiple = !!e.getValueByAlias("multiple"), this._preselectedCrops = e?.getValueByAlias("crops") ?? [];
    const t = e.getValueByAlias("startNodeId") ?? "";
    this._startNode = t ? { unique: t, entityType: E } : void 0;
    const i = e.getValueByAlias("validationLimit");
    this._min = i?.min ?? 0, this._max = i?.max ?? 1 / 0;
  }
  firstUpdated() {
    this.addFormControlElement(this.shadowRoot.querySelector("umb-input-rich-media"));
  }
  focus() {
    return this.shadowRoot?.querySelector("umb-input-rich-media")?.focus();
  }
  render() {
    return P`
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
				@change=${c(this, p, M)}
				?readonly=${this.readonly}
				.interactionMemories=${this._interactionMemories}
				@interaction-memories-change=${c(this, p, f)}>
			</umb-input-rich-media>
		`;
  }
};
n = /* @__PURE__ */ new WeakMap();
p = /* @__PURE__ */ new WeakSet();
M = function(e) {
  const t = e.target.value?.length === 0;
  this.value = t ? void 0 : e.target.value, this.dispatchEvent(new I());
};
f = async function(e) {
  const i = e.target.interactionMemories;
  i && i.length > 0 ? await m(this, n).saveMemoriesForPropertyEditor(i) : await m(this, n).deleteMemoriesForPropertyEditor();
};
a([
  _({ type: Boolean })
], r.prototype, "mandatory", 2);
a([
  _({ type: String })
], r.prototype, "mandatoryMessage", 2);
a([
  _({ type: Boolean, reflect: !0 })
], r.prototype, "readonly", 2);
a([
  o()
], r.prototype, "_startNode", 2);
a([
  o()
], r.prototype, "_focalPointEnabled", 2);
a([
  o()
], r.prototype, "_preselectedCrops", 2);
a([
  o()
], r.prototype, "_allowedMediaTypes", 2);
a([
  o()
], r.prototype, "_multiple", 2);
a([
  o()
], r.prototype, "_min", 2);
a([
  o()
], r.prototype, "_max", 2);
a([
  o()
], r.prototype, "_alias", 2);
a([
  o()
], r.prototype, "_variantId", 2);
a([
  o()
], r.prototype, "_interactionMemories", 2);
r = a([
  g("umb-property-editor-ui-media-picker")
], r);
export {
  r as UmbPropertyEditorUIMediaPickerElement,
  r as element
};
//# sourceMappingURL=property-editor-ui-media-picker.element-CbZExfDY.js.map
