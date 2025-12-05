import { html as f, property as m, customElement as w } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as y } from "@umbraco-cms/backoffice/lit-element";
var P = Object.defineProperty, E = Object.getOwnPropertyDescriptor, h = (e) => {
  throw TypeError(e);
}, d = (e, t, r, s) => {
  for (var a = s > 1 ? void 0 : s ? E(t, r) : t, p = e.length - 1, i; p >= 0; p--)
    (i = e[p]) && (a = (s ? i(t, r, a) : i(a)) || a);
  return s && a && P(t, r, a), a;
}, l = (e, t, r) => t.has(e) || h("Cannot " + r), u = (e, t, r) => (l(e, t, "read from private field"), r ? r.call(e) : t.get(e)), c = (e, t, r) => t.has(e) ? h("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), g = (e, t, r, s) => (l(e, t, "write to private field"), t.set(e, r), r), C = (e, t, r) => (l(e, t, "access private method"), r), o, v, _;
const S = "forms-password-property-editor";
let n = class extends y {
  constructor() {
    super(...arguments), c(this, v), c(this, o, "");
  }
  get value() {
    return u(this, o);
  }
  set value(e) {
    const t = u(this, o);
    g(this, o, e), this.requestUpdate("value", t);
  }
  render() {
    return f`<uui-input-password
      value="${this.value}"
      autocomplete="off"
      @change=${C(this, v, _)}
    ></uui-input-password>`;
  }
};
o = /* @__PURE__ */ new WeakMap();
v = /* @__PURE__ */ new WeakSet();
_ = function(e) {
  const t = e.target.value.toString();
  this.value = t, this.dispatchEvent(new CustomEvent("property-value-change"));
};
d([
  m({ type: String })
], n.prototype, "value", 1);
n = d([
  w(S)
], n);
const F = n;
export {
  n as FormsPasswordPropertyUiElement,
  F as default
};
//# sourceMappingURL=password-property-editor.element.js.map
