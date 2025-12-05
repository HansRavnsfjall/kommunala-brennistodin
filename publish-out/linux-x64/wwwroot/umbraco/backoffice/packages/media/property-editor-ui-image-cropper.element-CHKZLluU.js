import { html as d, property as c, state as l, customElement as v } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as _ } from "@umbraco-cms/backoffice/lit-element";
import { UmbFormControlMixin as g, UMB_VALIDATION_EMPTY_LOCALIZATION_KEY as y } from "@umbraco-cms/backoffice/validation";
import "./input-upload-field.element-BKvVffkE.js";
import { UmbChangeEvent as f } from "@umbraco-cms/backoffice/event";
var E = Object.defineProperty, C = Object.getOwnPropertyDescriptor, u = (e) => {
  throw TypeError(e);
}, s = (e, r, t, p) => {
  for (var o = p > 1 ? void 0 : p ? C(r, t) : r, n = e.length - 1, i; n >= 0; n--)
    (i = e[n]) && (o = (p ? i(r, t, o) : i(o)) || o);
  return p && o && E(r, t, o), o;
}, U = (e, r, t) => r.has(e) || u("Cannot " + t), I = (e, r, t) => r.has(e) ? u("Cannot add the same private member more than once") : r instanceof WeakSet ? r.add(e) : r.set(e, t), b = (e, r, t) => (U(e, r, "access private method"), t), m, h;
let a = class extends g(
  _
) {
  constructor() {
    super(...arguments), I(this, m), this.mandatoryMessage = y, this.crops = [];
  }
  set config(e) {
    this.crops = e?.getValueByAlias("crops") ?? [];
  }
  firstUpdated() {
    this.addFormControlElement(this.shadowRoot.querySelector("umb-input-image-cropper"));
  }
  focus() {
    return this.shadowRoot?.querySelector("umb-input-image-cropper")?.focus();
  }
  render() {
    return d`<umb-input-image-cropper
			@change=${b(this, m, h)}
			.value=${this.value}
			.crops=${this.crops}
			.required=${this.mandatory}
			.requiredMessage=${this.mandatoryMessage}></umb-input-image-cropper>`;
  }
};
m = /* @__PURE__ */ new WeakSet();
h = function(e) {
  this.value = e.target.value, this.dispatchEvent(new f());
};
s([
  c({ type: Boolean })
], a.prototype, "mandatory", 2);
s([
  c({ type: String })
], a.prototype, "mandatoryMessage", 2);
s([
  l()
], a.prototype, "crops", 2);
a = s([
  v("umb-property-editor-ui-image-cropper")
], a);
const $ = a;
export {
  a as UmbPropertyEditorUIImageCropperElement,
  $ as default
};
//# sourceMappingURL=property-editor-ui-image-cropper.element-CHKZLluU.js.map
