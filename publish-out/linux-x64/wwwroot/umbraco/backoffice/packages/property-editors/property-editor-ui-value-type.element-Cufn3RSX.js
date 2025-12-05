import { html as h, property as p, query as m, state as _, customElement as E } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as d } from "@umbraco-cms/backoffice/lit-element";
import { UmbChangeEvent as f } from "@umbraco-cms/backoffice/event";
var y = Object.defineProperty, g = Object.getOwnPropertyDescriptor, v = (e) => {
  throw TypeError(e);
}, l = (e, t, a, n) => {
  for (var r = n > 1 ? void 0 : n ? g(t, a) : t, i = e.length - 1, o; i >= 0; i--)
    (o = e[i]) && (r = (n ? o(t, a, r) : o(r)) || r);
  return n && r && y(t, a, r), r;
}, T = (e, t, a) => t.has(e) || v("Cannot " + a), I = (e, t, a) => t.has(e) ? v("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, a), U = (e, t, a) => (T(e, t, "access private method"), a), u, c;
let s = class extends d {
  constructor() {
    super(...arguments), I(this, u), this._value = void 0, this._options = [
      { name: "String", value: "STRING" },
      { name: "Decimal", value: "DECIMAL" },
      { name: "Date/Time", value: "DATETIME" },
      { name: "Time", value: "TIME" },
      { name: "Integer", value: "INT" },
      { name: "Big Integer", value: "BIGINT" },
      { name: "Long String", value: "TEXT" }
    ];
  }
  get value() {
    return this._value;
  }
  set value(e) {
    this._value = e, this._options.filter((a) => (this.selectEl && a.value === this.value && (this.selectEl.value = this.value), a.selected = a.value === this.value)).length === 0 && (this._options[0].selected = !0);
  }
  render() {
    return h`<uui-select
			label="Select a value type"
			.options="${this._options}"
			@change="${U(this, u, c)}"></uui-select>`;
  }
};
u = /* @__PURE__ */ new WeakSet();
c = function(e) {
  this.value = e.target.value, this.dispatchEvent(new f());
};
l([
  p()
], s.prototype, "value", 1);
l([
  m("uui-select")
], s.prototype, "selectEl", 2);
l([
  _()
], s.prototype, "_options", 2);
l([
  p({ attribute: !1 })
], s.prototype, "config", 2);
s = l([
  E("umb-property-editor-ui-value-type")
], s);
const D = s;
export {
  s as UmbPropertyEditorUIValueTypeElement,
  D as default
};
//# sourceMappingURL=property-editor-ui-value-type.element-Cufn3RSX.js.map
