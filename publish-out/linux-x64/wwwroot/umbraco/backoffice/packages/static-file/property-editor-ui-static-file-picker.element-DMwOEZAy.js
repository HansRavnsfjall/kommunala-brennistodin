import { html as c, state as v, property as y, customElement as d } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as g } from "@umbraco-cms/backoffice/lit-element";
import "./input-static-file.element-Lqjss4or.js";
import "./constants-CwKQXLDb.js";
import "@umbraco-cms/backoffice/picker-input";
import { UmbServerFilePathUniqueSerializer as M } from "@umbraco-cms/backoffice/server-file-system";
import { UmbChangeEvent as P } from "@umbraco-cms/backoffice/event";
var U = Object.defineProperty, E = Object.getOwnPropertyDescriptor, u = (t) => {
  throw TypeError(t);
}, h = (t, e, i, n) => {
  for (var r = n > 1 ? void 0 : n ? E(e, i) : e, p = t.length - 1, _; p >= 0; p--)
    (_ = t[p]) && (r = (n ? _(e, i, r) : _(r)) || r);
  return n && r && U(e, i, r), r;
}, f = (t, e, i) => e.has(t) || u("Cannot " + i), s = (t, e, i) => (f(t, e, "read from private field"), i ? i.call(t) : e.get(t)), m = (t, e, i) => e.has(t) ? u("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), A = (t, e, i, n) => (f(t, e, "write to private field"), e.set(t, i), i), o, l;
let a = class extends g {
  constructor() {
    super(...arguments), m(this, o, !1), m(this, l, new M()), this._limitMin = 0, this._limitMax = 1 / 0;
  }
  set value(t) {
    Array.isArray(t) ? this._value = t.map((e) => s(this, l).toUnique(e)) : t ? this._value = s(this, l).toUnique(t) : this._value = void 0;
  }
  get value() {
    return Array.isArray(this._value) ? this._value.map((t) => s(this, l).toServerPath(t) ?? "") : this._value ? s(this, l).toServerPath(this._value) ?? "" : void 0;
  }
  set config(t) {
    A(this, o, t?.getValueByAlias("singleItemMode") ?? !1);
    const e = t?.getValueByAlias("validationLimit");
    this._limitMin = e?.min ?? 0, this._limitMax = s(this, o) ? 1 : e?.max ?? 1 / 0;
  }
  _onChange(t) {
    s(this, o) ? this._value = t.target.selection[0] : this._value = t.target.selection, this.dispatchEvent(new P());
  }
  // TODO: Implement mandatory?
  render() {
    return c`
			<umb-input-static-file
				.selection=${this._value ? Array.isArray(this._value) ? this._value : [this._value] : []}
				.min=${this._limitMin ?? 0}
				.max=${this._limitMax ?? 1 / 0}
				@change=${this._onChange}></umb-input-static-file>
		`;
  }
};
o = /* @__PURE__ */ new WeakMap();
l = /* @__PURE__ */ new WeakMap();
h([
  v()
], a.prototype, "_value", 2);
h([
  y({ attribute: !1 })
], a.prototype, "value", 1);
h([
  v()
], a.prototype, "_limitMin", 2);
h([
  v()
], a.prototype, "_limitMax", 2);
a = h([
  d("umb-property-editor-ui-static-file-picker")
], a);
const F = a;
export {
  a as UmbPropertyEditorUIStaticFilePickerElement,
  F as default
};
//# sourceMappingURL=property-editor-ui-static-file-picker.element-DMwOEZAy.js.map
