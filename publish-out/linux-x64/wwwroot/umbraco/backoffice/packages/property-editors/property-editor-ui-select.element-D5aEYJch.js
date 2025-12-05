import { html as v, property as h, state as m, customElement as _ } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as d } from "@umbraco-cms/backoffice/lit-element";
import { UmbChangeEvent as f } from "@umbraco-cms/backoffice/event";
var y = Object.defineProperty, E = Object.getOwnPropertyDescriptor, c = (t) => {
  throw TypeError(t);
}, l = (t, e, r, o) => {
  for (var a = o > 1 ? void 0 : o ? E(e, r) : e, n = t.length - 1, i; n >= 0; n--)
    (i = t[n]) && (a = (o ? i(e, r, a) : i(a)) || a);
  return o && a && y(e, r, a), a;
}, g = (t, e, r) => e.has(t) || c("Cannot " + r), U = (t, e, r) => e.has(t) ? c("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), P = (t, e, r) => (g(t, e, "access private method"), r), p, u;
let s = class extends d {
  constructor() {
    super(...arguments), U(this, p), this.value = "", this._options = [];
  }
  set config(t) {
    if (!t) return;
    const e = t.getValueByAlias("items");
    Array.isArray(e) && e.length > 0 && (this._options = typeof e[0] == "string" ? e.map((r) => ({ name: r, value: r, selected: r === this.value })) : e.map((r) => ({ name: r.name, value: r.value, selected: r.value === this.value })));
  }
  render() {
    return v`<uui-select .options=${this._options} @change=${P(this, p, u)}></uui-select>`;
  }
};
p = /* @__PURE__ */ new WeakSet();
u = function(t) {
  this.value = t.target.value, this.dispatchEvent(new f());
};
l([
  h()
], s.prototype, "value", 2);
l([
  m()
], s.prototype, "_options", 2);
s = l([
  _("umb-property-editor-ui-select")
], s);
const b = s;
export {
  s as UmbPropertyEditorUISelectElement,
  b as default
};
//# sourceMappingURL=property-editor-ui-select.element-D5aEYJch.js.map
