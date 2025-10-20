import { UmbTextStyles as x } from "@umbraco-cms/backoffice/style";
import { ifDefined as d, html as E, css as M, property as n, state as l, customElement as g } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as C } from "@umbraco-cms/backoffice/lit-element";
import { UmbFormControlMixin as U, UMB_VALIDATION_EMPTY_LOCALIZATION_KEY as $ } from "@umbraco-cms/backoffice/validation";
import { UmbChangeEvent as w } from "@umbraco-cms/backoffice/event";
var B = Object.defineProperty, T = Object.getOwnPropertyDescriptor, c = (e) => {
  throw TypeError(e);
}, o = (e, t, r, s) => {
  for (var i = s > 1 ? void 0 : s ? T(t, r) : t, u = e.length - 1, h; u >= 0; u--)
    (h = e[u]) && (i = (s ? h(t, r, i) : h(i)) || i);
  return s && i && B(t, r, i), i;
}, v = (e, t, r) => t.has(e) || c("Cannot " + r), m = (e, t, r) => (v(e, t, "read from private field"), r ? r.call(e) : t.get(e)), _ = (e, t, r) => t.has(e) ? c("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), A = (e, t, r) => (v(e, t, "access private method"), r), p, y, f;
let a = class extends U(C, void 0) {
  constructor() {
    super(...arguments), _(this, y), this.readonly = !1, this.mandatoryMessage = $, _(this, p, "text"), this._type = m(this, p);
  }
  set config(e) {
    this._type = e?.getValueByAlias("inputType") ?? m(this, p), this._inputMode = e?.getValueByAlias("inputMode"), this._maxChars = e?.getValueByAlias("maxChars"), this._placeholder = e?.getValueByAlias("placeholder");
  }
  firstUpdated() {
    this.addFormControlElement(this.shadowRoot.querySelector("uui-input"));
  }
  focus() {
    return this.shadowRoot?.querySelector("uui-input")?.focus();
  }
  render() {
    return E`<uui-input
			.label=${this.localize.term("general_fieldFor", [this.name])}
			.value=${this.value ?? ""}
			.type=${this._type}
			placeholder=${d(this._placeholder)}
			inputMode=${d(this._inputMode)}
			maxlength=${d(this._maxChars)}
			@input=${A(this, y, f)}
			?required=${this.mandatory}
			.requiredMessage=${this.mandatoryMessage}
			?readonly=${this.readonly}></uui-input>`;
  }
};
p = /* @__PURE__ */ new WeakMap();
y = /* @__PURE__ */ new WeakSet();
f = function(e) {
  const t = e.target.value;
  t !== this.value && (this.value = t, this.dispatchEvent(new w()));
};
a.styles = [
  x,
  M`
			uui-input {
				width: 100%;
			}
		`
];
o([
  n({ type: Boolean, reflect: !0 })
], a.prototype, "readonly", 2);
o([
  n({ type: Boolean })
], a.prototype, "mandatory", 2);
o([
  n({ type: String })
], a.prototype, "mandatoryMessage", 2);
o([
  n({ type: String })
], a.prototype, "name", 2);
o([
  l()
], a.prototype, "_type", 2);
o([
  l()
], a.prototype, "_inputMode", 2);
o([
  l()
], a.prototype, "_maxChars", 2);
o([
  l()
], a.prototype, "_placeholder", 2);
a = o([
  g("umb-property-editor-ui-text-box")
], a);
const b = a;
export {
  a as UmbPropertyEditorUITextBoxElement,
  b as default
};
//# sourceMappingURL=property-editor-ui-text-box.element-DMDlsyuW.js.map
