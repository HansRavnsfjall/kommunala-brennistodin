import "@umbraco-cms/backoffice/static-file";
import { html as y, state as v, property as d, customElement as g } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as M } from "@umbraco-cms/backoffice/lit-element";
import { UmbTextStyles as b } from "@umbraco-cms/backoffice/style";
import { UmbServerFilePathUniqueSerializer as U } from "@umbraco-cms/backoffice/server-file-system";
import { UmbChangeEvent as E } from "@umbraco-cms/backoffice/event";
var P = Object.defineProperty, S = Object.getOwnPropertyDescriptor, c = (t) => {
  throw TypeError(t);
}, h = (t, e, i, o) => {
  for (var a = o > 1 ? void 0 : o ? S(e, i) : e, u = t.length - 1, p; u >= 0; u--)
    (p = t[u]) && (a = (o ? p(e, i, a) : p(a)) || a);
  return o && a && P(e, i, a), a;
}, f = (t, e, i) => e.has(t) || c("Cannot " + i), s = (t, e, i) => (f(t, e, "read from private field"), i ? i.call(t) : e.get(t)), _ = (t, e, i) => e.has(t) ? c("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), k = (t, e, i, o) => (f(t, e, "write to private field"), e.set(t, i), i), m, n, l;
let r = class extends M {
  constructor() {
    super(...arguments), _(this, m, (t) => t.unique.endsWith("css")), _(this, n, !1), _(this, l, new U()), this._limitMin = 0, this._limitMax = 1 / 0;
  }
  set value(t) {
    Array.isArray(t) ? this._value = t.map((e) => s(this, l).toUnique(e)) : t ? this._value = s(this, l).toUnique(t) : this._value = void 0;
  }
  get value() {
    return Array.isArray(this._value) ? this._value.map((t) => s(this, l).toServerPath(t) ?? "") : this._value ? s(this, l).toServerPath(this._value) ?? "" : void 0;
  }
  set config(t) {
    k(this, n, t?.getValueByAlias("singleItemMode") ?? !1);
    const e = t?.getValueByAlias("validationLimit");
    this._limitMin = e?.min ?? 0, this._limitMax = s(this, n) ? 1 : e?.max ?? 1 / 0;
  }
  _onChange(t) {
    s(this, n) ? this._value = t.target.selection[0] : this._value = t.target.selection, this.dispatchEvent(new E());
  }
  // TODO: Implement mandatory?
  render() {
    return y`
			<umb-input-static-file
				@change=${this._onChange}
				.pickableFilter=${s(this, m)}
				.selection=${this._value ? Array.isArray(this._value) ? this._value : [this._value] : []}
				.min=${this._limitMin}
				.max=${this._limitMax}></umb-input-static-file>
			<br />
			<a href="/umbraco/backoffice/css/umbraco-blockgridlayout.css" target="_blank"
				>Link to default layout stylesheet</a
			>
		`;
  }
};
m = /* @__PURE__ */ new WeakMap();
n = /* @__PURE__ */ new WeakMap();
l = /* @__PURE__ */ new WeakMap();
r.styles = [b];
h([
  v()
], r.prototype, "_value", 2);
h([
  d({ attribute: !1 })
], r.prototype, "value", 1);
h([
  v()
], r.prototype, "_limitMin", 2);
h([
  v()
], r.prototype, "_limitMax", 2);
r = h([
  g("umb-property-editor-ui-block-grid-layout-stylesheet")
], r);
const $ = r;
export {
  r as UmbPropertyEditorUIBlockGridLayoutStylesheetElement,
  $ as default
};
//# sourceMappingURL=property-editor-ui-block-grid-layout-stylesheet.element-D_4MgKsb.js.map
