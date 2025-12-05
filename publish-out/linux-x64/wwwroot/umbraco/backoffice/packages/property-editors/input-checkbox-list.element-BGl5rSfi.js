import { nothing as C, repeat as x, html as f, classMap as E, css as b, property as o, customElement as k } from "@umbraco-cms/backoffice/external/lit";
import { UmbChangeEvent as M } from "@umbraco-cms/backoffice/event";
import { UmbLitElement as O } from "@umbraco-cms/backoffice/lit-element";
import { UmbFormControlMixin as $, UMB_VALIDATION_EMPTY_LOCALIZATION_KEY as w } from "@umbraco-cms/backoffice/validation";
var I = Object.defineProperty, A = Object.getOwnPropertyDescriptor, _ = (e) => {
  throw TypeError(e);
}, a = (e, t, i, n) => {
  for (var s = n > 1 ? void 0 : n ? A(t, i) : t, h = e.length - 1, p; h >= 0; h--)
    (p = e[h]) && (s = (n ? p(t, i, s) : p(s)) || s);
  return n && s && I(t, i, s), s;
}, v = (e, t, i) => t.has(e) || _("Cannot " + i), L = (e, t, i) => (v(e, t, "read from private field"), i ? i.call(e) : t.get(e)), d = (e, t, i) => t.has(e) ? _("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), P = (e, t, i, n) => (v(e, t, "write to private field"), t.set(e, i), i), u = (e, t, i) => (v(e, t, "access private method"), i), c, l, y, m, g;
let r = class extends $(O, void 0) {
  constructor() {
    super(), d(this, l), this.list = [], d(this, c, []), this.readonly = !1, this.addValidator(
      "valueMissing",
      () => this.requiredMessage ?? w,
      () => !this.readonly && !!this.required && (this.value === void 0 || this.value === null || this.value === "")
    );
  }
  set selection(e) {
    P(this, c, e), super.value = e.join(",");
  }
  get selection() {
    return L(this, c);
  }
  set value(e) {
    this.selection = e.split(",");
  }
  get value() {
    return this.selection.join(",");
  }
  render() {
    return this.list ? f`
			<form>
				<uui-form @change=${u(this, l, y)}>
					${x(
      this.list,
      (e) => e.value,
      (e) => u(this, l, g).call(this, e)
    )}
				</uui-form>
			</form>
		` : C;
  }
};
c = /* @__PURE__ */ new WeakMap();
l = /* @__PURE__ */ new WeakSet();
y = function(e) {
  e.stopPropagation(), e.target.checked ? this.selection = [...this.selection, e.target.value] : u(this, l, m).call(this, this.selection.findIndex((t) => e.target.value === t)), this.dispatchEvent(new M());
};
m = function(e) {
  if (e == -1) return;
  const t = [...this.selection];
  t.splice(e, 1), this.selection = t;
};
g = function(e) {
  return f`
			<uui-checkbox
				class=${E({ invalid: !!e.invalid })}
				label=${e.label + (e.invalid ? ` (${this.localize.term("validation_legacyOption")})` : "")}
				title=${e.invalid ? this.localize.term("validation_legacyOptionDescription") : ""}
				value=${e.value}
				?checked=${e.checked}
				?readonly=${this.readonly}></uui-checkbox>
		`;
};
r.styles = [
  b`
			uui-checkbox {
				width: 100%;

				&.invalid {
					text-decoration: line-through;
				}
			}
		`
];
a([
  o({ attribute: !1 })
], r.prototype, "list", 2);
a([
  o({ type: Array })
], r.prototype, "selection", 1);
a([
  o()
], r.prototype, "value", 1);
a([
  o({ type: Boolean, reflect: !0 })
], r.prototype, "readonly", 2);
a([
  o({ type: Boolean })
], r.prototype, "required", 2);
a([
  o({ type: String })
], r.prototype, "requiredMessage", 2);
r = a([
  k("umb-input-checkbox-list")
], r);
//# sourceMappingURL=input-checkbox-list.element-BGl5rSfi.js.map
