import { when as I, html as d, map as M, nothing as D, css as O, state as g, property as u, customElement as S } from "@umbraco-cms/backoffice/external/lit";
import { UmbChangeEvent as P } from "@umbraco-cms/backoffice/event";
import { UmbLitElement as V } from "@umbraco-cms/backoffice/lit-element";
import { UmbFormControlMixin as b, UMB_VALIDATION_EMPTY_LOCALIZATION_KEY as q } from "@umbraco-cms/backoffice/validation";
import { UUISelectElement as z } from "@umbraco-cms/backoffice/external/uui";
var B = Object.defineProperty, L = Object.getOwnPropertyDescriptor, w = (t) => {
  throw TypeError(t);
}, l = (t, e, r, i) => {
  for (var p = i > 1 ? void 0 : i ? L(e, r) : e, c = t.length - 1, m; c >= 0; c--)
    (m = t[c]) && (p = (i ? m(e, r, p) : m(p)) || p);
  return i && p && B(e, r, p), p;
}, f = (t, e, r) => e.has(t) || w("Cannot " + r), h = (t, e, r) => (f(t, e, "read from private field"), r ? r.call(t) : e.get(t)), y = (t, e, r) => e.has(t) ? w("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), T = (t, e, r, i) => (f(t, e, "write to private field"), e.set(t, r), r), n = (t, e, r) => (f(t, e, "access private method"), r), a, o, v, E, $, _, A, U, C;
let s = class extends b(
  V,
  void 0
) {
  constructor() {
    super(...arguments), y(this, o), y(this, a, []), this._multiple = !1, this._options = [], this.readonly = !1, this.mandatoryMessage = q;
  }
  set value(t) {
    T(this, a, n(this, o, v).call(this, t));
  }
  get value() {
    return h(this, a);
  }
  set config(t) {
    if (!t) return;
    const e = t.getValueByAlias("items");
    Array.isArray(e) && e.length > 0 && (this._options = typeof e[0] == "string" ? e.map((r) => ({ name: r, value: r, selected: h(this, a).includes(r) })) : e.map((r) => ({
      name: r.name,
      value: r.value,
      selected: h(this, a).includes(r.value)
    })), h(this, a).forEach((r) => {
      this._options.find((i) => i.value === r) || this._options.push({
        name: `${r} (${this.localize.term("validation_legacyOption")})`,
        value: r,
        selected: !0,
        invalid: !0
      });
    })), this._multiple = t.getValueByAlias("multiple") ?? !1;
  }
  firstUpdated() {
    this._multiple ? this.addFormControlElement(this.shadowRoot.querySelector("select")) : this.addFormControlElement(this.shadowRoot.querySelector("umb-input-dropdown-list"));
  }
  render() {
    return d`
			${I(
      this._multiple,
      () => n(this, o, A).call(this),
      () => n(this, o, U).call(this)
    )}
			${n(this, o, C).call(this)}
		`;
  }
};
a = /* @__PURE__ */ new WeakMap();
o = /* @__PURE__ */ new WeakSet();
v = function(t) {
  return Array.isArray(t) ? t : t ? [t] : [];
};
E = function(t) {
  const e = t.target.value;
  n(this, o, _).call(this, e ? [e] : []);
};
$ = function(t) {
  const e = t.target.selectedOptions, r = e ? Array.from(e).map((i) => i.value) : [];
  n(this, o, _).call(this, r);
};
_ = function(t) {
  if (!t) return;
  const e = n(this, o, v).call(this, t);
  this._options.forEach((r) => r.selected = e.includes(r.value)), this.value = t, this.dispatchEvent(new P());
};
A = function() {
  return this.readonly ? d`<div>${this.value?.join(", ")}</div>` : d`
			<select id="native" multiple ?required=${this.mandatory} @change=${n(this, o, $)}>
				${M(
    this._options,
    (t) => d`<option value=${t.value} ?selected=${t.selected}>${t.name}</option>`
  )}
			</select>
		`;
};
U = function() {
  return d`
			<umb-input-dropdown-list
				.name=${this.name}
				.options=${this._options}
				.required=${this.mandatory}
				.requiredMessage=${this.mandatoryMessage}
				?readonly=${this.readonly}
				@change=${n(this, o, E)}>
			</umb-input-dropdown-list>
		`;
};
C = function() {
  return h(this, a).some((e) => {
    const r = this._options.find((i) => i.value === e);
    return r ? r.invalid : !1;
  }) ? d`<div class="error"><umb-localize key="validation_legacyOptionDescription"></umb-localize></div>` : D;
};
s.styles = [
  z.styles,
  O`
			#native {
				height: auto;
			}

			.error {
				color: var(--uui-color-invalid);
				font-size: var(--uui-font-size-small);
			}
		`
];
l([
  g()
], s.prototype, "_multiple", 2);
l([
  g()
], s.prototype, "_options", 2);
l([
  u({ type: Array })
], s.prototype, "value", 1);
l([
  u({ type: Boolean, reflect: !0 })
], s.prototype, "readonly", 2);
l([
  u({ type: Boolean })
], s.prototype, "mandatory", 2);
l([
  u({ type: String })
], s.prototype, "mandatoryMessage", 2);
l([
  u({ type: String })
], s.prototype, "name", 2);
s = l([
  S("umb-property-editor-ui-dropdown")
], s);
const R = s;
export {
  s as UmbPropertyEditorUIDropdownElement,
  R as default
};
//# sourceMappingURL=property-editor-ui-dropdown.element-Du_OKxO1.js.map
