import { e as y, u as I } from "./property-editor-ui-state-manager-UOtL4Mmu.js";
import { when as M, html as h, map as O, nothing as D, css as P, state as g, property as u, customElement as b } from "@umbraco-cms/backoffice/external/lit";
import { UmbChangeEvent as q } from "@umbraco-cms/backoffice/event";
import { UmbLitElement as z } from "@umbraco-cms/backoffice/lit-element";
import { UmbFormControlMixin as B, UMB_VALIDATION_EMPTY_LOCALIZATION_KEY as V } from "@umbraco-cms/backoffice/validation";
import { UUISelectElement as L } from "@umbraco-cms/backoffice/external/uui";
var T = Object.defineProperty, x = Object.getOwnPropertyDescriptor, w = (t) => {
  throw TypeError(t);
}, l = (t, i, e, o) => {
  for (var p = o > 1 ? void 0 : o ? x(i, e) : i, c = t.length - 1, m; c >= 0; c--)
    (m = t[c]) && (p = (o ? m(i, e, p) : m(p)) || p);
  return o && p && T(i, e, p), p;
}, f = (t, i, e) => i.has(t) || w("Cannot " + e), d = (t, i, e) => (f(t, i, "read from private field"), e ? e.call(t) : i.get(t)), v = (t, i, e) => i.has(t) ? w("Cannot add the same private member more than once") : i instanceof WeakSet ? i.add(t) : i.set(t, e), F = (t, i, e, o) => (f(t, i, "write to private field"), i.set(t, e), e), a = (t, i, e) => (f(t, i, "access private method"), e), r, n, E, $, _, S, U, A, C;
let s = class extends B(
  z,
  void 0
) {
  constructor() {
    super(...arguments), v(this, n), v(this, r, []), this._multiple = !1, this._options = [], this.readonly = !1, this.mandatoryMessage = V;
  }
  set value(t) {
    F(this, r, y(t)), a(this, n, S).call(this);
  }
  get value() {
    return d(this, r);
  }
  set config(t) {
    if (!t) return;
    const i = t.getValueByAlias("items");
    Array.isArray(i) && i.length > 0 && (this._options = typeof i[0] == "string" ? i.map((e) => ({ name: e, value: e, selected: d(this, r).includes(e) })) : i.map((e) => ({
      name: e.name,
      value: e.value,
      selected: d(this, r).includes(e.value)
    })), d(this, r).forEach((e) => {
      e !== "" && !this._options.find((o) => o.value === e) && this._options.push({
        name: `${e} (${this.localize.term("validation_legacyOption")})`,
        value: e,
        selected: !0,
        invalid: !0
      });
    })), this._multiple = t.getValueByAlias("multiple") ?? !1;
  }
  firstUpdated() {
    this._multiple ? this.addFormControlElement(this.shadowRoot.querySelector("select")) : this.addFormControlElement(this.shadowRoot.querySelector("umb-input-dropdown-list")), !this.mandatory && !this._multiple && this._options.unshift({ name: "", value: "", selected: !1, invalid: !1 });
  }
  render() {
    return h`
			${M(
      this._multiple,
      () => a(this, n, U).call(this),
      () => a(this, n, A).call(this)
    )}
			${a(this, n, C).call(this)}
		`;
  }
};
r = /* @__PURE__ */ new WeakMap();
n = /* @__PURE__ */ new WeakSet();
E = function(t) {
  const i = t.target.value;
  a(this, n, _).call(this, i ? [i] : []);
};
$ = function(t) {
  const i = t.target.selectedOptions, e = i ? Array.from(i).map((o) => o.value) : [];
  a(this, n, _).call(this, e);
};
_ = function(t) {
  if (!t) return;
  const i = y(t);
  this._options.forEach((e) => e.selected = i.includes(e.value)), this.value = t, this.dispatchEvent(new q());
};
S = function() {
  if (this._options.length > 0) {
    const t = I(this._options, d(this, r), "selected");
    t !== this._options && (this._options = t);
  }
};
U = function() {
  return this.readonly ? h`<div>${this.value?.join(", ")}</div>` : h`
			<select id="native" multiple ?required=${this.mandatory} @change=${a(this, n, $)}>
				${O(
    this._options,
    (t) => h`<option value=${t.value} ?selected=${t.selected}>${t.name}</option>`
  )}
			</select>
		`;
};
A = function() {
  return h`
			<umb-input-dropdown-list
				.name=${this.name}
				.options=${this._options}
				.required=${this.mandatory}
				.requiredMessage=${this.mandatoryMessage}
				?readonly=${this.readonly}
				@change=${a(this, n, E)}>
			</umb-input-dropdown-list>
		`;
};
C = function() {
  return d(this, r).some((i) => {
    const e = this._options.find((o) => o.value === i);
    return e ? e.invalid : !1;
  }) ? h`<div class="error"><umb-localize key="validation_legacyOptionDescription"></umb-localize></div>` : D;
};
s.styles = [
  L.styles,
  P`
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
  b("umb-property-editor-ui-dropdown")
], s);
const K = s;
export {
  s as UmbPropertyEditorUIDropdownElement,
  K as default
};
//# sourceMappingURL=property-editor-ui-dropdown.element-h4INXq3a.js.map
