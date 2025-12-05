import { e as E, u as g } from "./property-editor-ui-state-manager-UOtL4Mmu.js";
import "./input-checkbox-list.element-BGl5rSfi.js";
import { html as b, property as p, state as C, customElement as k } from "@umbraco-cms/backoffice/external/lit";
import { UmbChangeEvent as U } from "@umbraco-cms/backoffice/event";
import { UmbLitElement as x } from "@umbraco-cms/backoffice/lit-element";
import { UmbFormControlMixin as A, UMB_VALIDATION_EMPTY_LOCALIZATION_KEY as M } from "@umbraco-cms/backoffice/validation";
var w = Object.defineProperty, I = Object.getOwnPropertyDescriptor, y = (t) => {
  throw TypeError(t);
}, l = (t, r, e, a) => {
  for (var o = a > 1 ? void 0 : a ? I(r, e) : r, c = t.length - 1, d; c >= 0; c--)
    (d = t[c]) && (o = (a ? d(r, e, o) : d(o)) || o);
  return a && o && w(r, e, o), o;
}, u = (t, r, e) => r.has(t) || y("Cannot " + e), n = (t, r, e) => (u(t, r, "read from private field"), e ? e.call(t) : r.get(t)), _ = (t, r, e) => r.has(t) ? y("Cannot add the same private member more than once") : r instanceof WeakSet ? r.add(t) : r.set(t, e), L = (t, r, e, a) => (u(t, r, "write to private field"), r.set(t, e), e), m = (t, r, e) => (u(t, r, "access private method"), e), s, h, v, f;
let i = class extends A(
  x,
  void 0
) {
  constructor() {
    super(...arguments), _(this, h), _(this, s, []), this.readonly = !1, this.mandatoryMessage = M, this._list = [];
  }
  set value(t) {
    L(this, s, E(t)), m(this, h, f).call(this);
  }
  get value() {
    return n(this, s);
  }
  set config(t) {
    if (!t) return;
    const r = t.getValueByAlias("items");
    Array.isArray(r) && r.length && (this._list = typeof r[0] == "string" ? r.map((e) => ({ label: e, value: e, checked: n(this, s).includes(e) })) : r.map((e) => ({
      label: e.name,
      value: e.value,
      checked: n(this, s).includes(e.value)
    })), n(this, s).forEach((e) => {
      this._list.find((a) => a.value === e) || this._list.push({ label: e, value: e, checked: !0, invalid: !0 });
    }));
  }
  firstUpdated() {
    this.addFormControlElement(this.shadowRoot.querySelector("umb-input-checkbox-list"));
  }
  render() {
    return b`
			<umb-input-checkbox-list
				.list=${this._list}
				.required=${this.mandatory}
				.requiredMessage=${this.mandatoryMessage}
				.selection=${n(this, s)}
				?readonly=${this.readonly}
				@change=${m(this, h, v)}>
			</umb-input-checkbox-list>
		`;
  }
};
s = /* @__PURE__ */ new WeakMap();
h = /* @__PURE__ */ new WeakSet();
v = function(t) {
  this.value = t.target.selection, this.dispatchEvent(new U());
};
f = function() {
  if (this._list.length > 0) {
    const t = g(this._list, n(this, s), "checked");
    t !== this._list && (this._list = t);
  }
};
l([
  p({ type: Array })
], i.prototype, "value", 1);
l([
  p({ type: Boolean, reflect: !0 })
], i.prototype, "readonly", 2);
l([
  p({ type: Boolean })
], i.prototype, "mandatory", 2);
l([
  p({ type: String })
], i.prototype, "mandatoryMessage", 2);
l([
  C()
], i.prototype, "_list", 2);
i = l([
  k("umb-property-editor-ui-checkbox-list")
], i);
const q = i;
export {
  i as UmbPropertyEditorUICheckboxListElement,
  q as default
};
//# sourceMappingURL=property-editor-ui-checkbox-list.element-DedWJKlk.js.map
