import { html as v, property as p, state as f, customElement as E } from "@umbraco-cms/backoffice/external/lit";
import { UmbChangeEvent as g } from "@umbraco-cms/backoffice/event";
import { UmbLitElement as b } from "@umbraco-cms/backoffice/lit-element";
import { UmbFormControlMixin as C, UMB_VALIDATION_EMPTY_LOCALIZATION_KEY as A } from "@umbraco-cms/backoffice/validation";
import "./input-checkbox-list.element-BGl5rSfi.js";
var U = Object.defineProperty, x = Object.getOwnPropertyDescriptor, u = (t) => {
  throw TypeError(t);
}, n = (t, r, e, i) => {
  for (var o = i > 1 ? void 0 : i ? x(r, e) : r, h = t.length - 1, c; h >= 0; h--)
    (c = t[h]) && (o = (i ? c(r, e, o) : c(o)) || o);
  return i && o && U(r, e, o), o;
}, y = (t, r, e) => r.has(t) || u("Cannot " + e), l = (t, r, e) => (y(t, r, "read from private field"), e ? e.call(t) : r.get(t)), m = (t, r, e) => r.has(t) ? u("Cannot add the same private member more than once") : r instanceof WeakSet ? r.add(t) : r.set(t, e), k = (t, r, e, i) => (y(t, r, "write to private field"), r.set(t, e), e), M = (t, r, e) => (y(t, r, "access private method"), e), s, d, _;
let a = class extends C(
  b,
  void 0
) {
  constructor() {
    super(...arguments), m(this, d), m(this, s, []), this.readonly = !1, this.mandatoryMessage = A, this._list = [];
  }
  set value(t) {
    k(this, s, Array.isArray(t) ? t : t ? [t] : []);
  }
  get value() {
    return l(this, s);
  }
  set config(t) {
    if (!t) return;
    const r = t.getValueByAlias("items");
    Array.isArray(r) && r.length && (this._list = typeof r[0] == "string" ? r.map((e) => ({ label: e, value: e, checked: l(this, s).includes(e) })) : r.map((e) => ({
      label: e.name,
      value: e.value,
      checked: l(this, s).includes(e.value)
    })), l(this, s).forEach((e) => {
      this._list.find((i) => i.value === e) || this._list.push({ label: e, value: e, checked: !0, invalid: !0 });
    }));
  }
  firstUpdated() {
    this.addFormControlElement(this.shadowRoot.querySelector("umb-input-checkbox-list"));
  }
  render() {
    return v`
			<umb-input-checkbox-list
				.list=${this._list}
				.required=${this.mandatory}
				.requiredMessage=${this.mandatoryMessage}
				.selection=${l(this, s)}
				?readonly=${this.readonly}
				@change=${M(this, d, _)}>
			</umb-input-checkbox-list>
		`;
  }
};
s = /* @__PURE__ */ new WeakMap();
d = /* @__PURE__ */ new WeakSet();
_ = function(t) {
  this.value = t.target.selection, this.dispatchEvent(new g());
};
n([
  p({ type: Array })
], a.prototype, "value", 1);
n([
  p({ type: Boolean, reflect: !0 })
], a.prototype, "readonly", 2);
n([
  p({ type: Boolean })
], a.prototype, "mandatory", 2);
n([
  p({ type: String })
], a.prototype, "mandatoryMessage", 2);
n([
  f()
], a.prototype, "_list", 2);
a = n([
  E("umb-property-editor-ui-checkbox-list")
], a);
const $ = a;
export {
  a as UmbPropertyEditorUICheckboxListElement,
  $ as default
};
//# sourceMappingURL=property-editor-ui-checkbox-list.element-D-YEFWgv.js.map
