import { UmbChangeEvent as m } from "@umbraco-cms/backoffice/event";
import { html as v, state as y, property as p, customElement as _ } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as c } from "@umbraco-cms/backoffice/lit-element";
import { UmbFormControlMixin as f, UMB_VALIDATION_EMPTY_LOCALIZATION_KEY as b } from "@umbraco-cms/backoffice/validation";
var E = Object.defineProperty, g = Object.getOwnPropertyDescriptor, d = (e) => {
  throw TypeError(e);
}, s = (e, t, r, i) => {
  for (var a = i > 1 ? void 0 : i ? g(t, r) : t, n = e.length - 1, l; n >= 0; n--)
    (l = e[n]) && (a = (i ? l(t, r, a) : l(a)) || a);
  return i && a && E(t, r, a), a;
}, U = (e, t, r) => t.has(e) || d("Cannot " + r), C = (e, t, r) => t.has(e) ? d("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), A = (e, t, r) => (U(e, t, "access private method"), r), u, h;
let o = class extends f(c) {
  constructor() {
    super(...arguments), C(this, u), this._list = [], this.readonly = !1, this.mandatoryMessage = b;
  }
  set config(e) {
    if (!e) return;
    const t = e.getValueByAlias("items");
    Array.isArray(t) && t.length > 0 && (this._list = typeof t[0] == "string" ? t.map((r) => ({ label: r, value: r })) : t.map((r) => ({ label: r.name, value: r.value })), this.value && !this._list.find((r) => r.value === this.value) && this._list.push({ label: this.value, value: this.value, invalid: !0 }));
  }
  firstUpdated() {
    this.addFormControlElement(this.shadowRoot.querySelector("umb-input-radio-button-list"));
  }
  render() {
    return v`
			<umb-input-radio-button-list
				.list=${this._list}
				.required=${this.mandatory}
				.requiredMessage=${this.mandatoryMessage}
				.value=${this.value ?? ""}
				?readonly=${this.readonly}
				@change=${A(this, u, h)}>
			</umb-input-radio-button-list>
		`;
  }
};
u = /* @__PURE__ */ new WeakSet();
h = function(e) {
  this.value = e.target.value, this.dispatchEvent(new m());
};
s([
  y()
], o.prototype, "_list", 2);
s([
  p({ type: Boolean, reflect: !0 })
], o.prototype, "readonly", 2);
s([
  p({ type: Boolean })
], o.prototype, "mandatory", 2);
s([
  p({ type: String })
], o.prototype, "mandatoryMessage", 2);
o = s([
  _("umb-property-editor-ui-radio-button-list")
], o);
const L = o;
export {
  o as UmbPropertyEditorUIRadioButtonListElement,
  L as default
};
//# sourceMappingURL=property-editor-ui-radio-button-list.element-aZVWdGc2.js.map
