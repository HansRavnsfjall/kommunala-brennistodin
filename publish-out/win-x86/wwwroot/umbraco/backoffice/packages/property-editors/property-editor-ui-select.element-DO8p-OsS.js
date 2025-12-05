import { u as _ } from "./property-editor-ui-state-manager-UOtL4Mmu.js";
import { html as m, property as d, state as f, customElement as y } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as E } from "@umbraco-cms/backoffice/lit-element";
import { UmbChangeEvent as g } from "@umbraco-cms/backoffice/event";
var S = Object.defineProperty, U = Object.getOwnPropertyDescriptor, h = (e) => {
  throw TypeError(e);
}, l = (e, t, s, o) => {
  for (var r = o > 1 ? void 0 : o ? U(t, s) : t, i = e.length - 1, p; i >= 0; i--)
    (p = e[i]) && (r = (o ? p(t, s, r) : p(r)) || r);
  return o && r && S(t, s, r), r;
}, P = (e, t, s) => t.has(e) || h("Cannot " + s), C = (e, t, s) => t.has(e) ? h("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, s), u = (e, t, s) => (P(e, t, "access private method"), s), n, c, v;
let a = class extends E {
  constructor() {
    super(...arguments), C(this, n), this._value = "", this._options = [];
  }
  set value(e) {
    this._value = e || "", u(this, n, v).call(this);
  }
  get value() {
    return this._value;
  }
  set config(e) {
    if (!e) return;
    const t = e.getValueByAlias("items");
    Array.isArray(t) && t.length > 0 && (this._options = typeof t[0] == "string" ? t.map((s) => ({ name: s, value: s, selected: s === this._value })) : t.map((s) => ({ name: s.name, value: s.value, selected: s.value === this._value })));
  }
  render() {
    return m`<uui-select .options=${this._options} @change=${u(this, n, c)}></uui-select>`;
  }
};
n = /* @__PURE__ */ new WeakSet();
c = function(e) {
  this.value = e.target.value, this.dispatchEvent(new g());
};
v = function() {
  if (this._options.length > 0) {
    const e = _(this._options, [this._value], "selected");
    e !== this._options && (this._options = e);
  }
};
l([
  d()
], a.prototype, "value", 1);
l([
  f()
], a.prototype, "_options", 2);
a = l([
  y("umb-property-editor-ui-select")
], a);
const I = a;
export {
  a as UmbPropertyEditorUISelectElement,
  I as default
};
//# sourceMappingURL=property-editor-ui-select.element-DO8p-OsS.js.map
