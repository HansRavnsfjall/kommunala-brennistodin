import { html as y, css as b, property as m, state as D, customElement as g } from "@umbraco-cms/backoffice/external/lit";
import { UmbTreeItemElementBase as v } from "@umbraco-cms/backoffice/tree";
var w = Object.defineProperty, E = Object.getOwnPropertyDescriptor, u = (e) => {
  throw TypeError(e);
}, h = (e, t, s, n) => {
  for (var a = n > 1 ? void 0 : n ? E(t, s) : t, l = e.length - 1, _; l >= 0; l--)
    (_ = e[l]) && (a = (n ? _(t, s, a) : _(a)) || a);
  return n && a && w(t, s, a), a;
}, d = (e, t, s) => t.has(e) || u("Cannot " + s), i = (e, t, s) => (d(e, t, "read from private field"), s ? s.call(e) : t.get(e)), c = (e, t, s) => t.has(e) ? u("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, s), f = (e, t, s, n) => (d(e, t, "write to private field"), t.set(e, s), s), r, p;
let o = class extends v {
  constructor() {
    super(...arguments), c(this, r), this._name = "", this._isDraft = !1, c(this, p);
  }
  get api() {
    return i(this, r);
  }
  set api(e) {
    f(this, r, e), i(this, r) && (this.observe(i(this, r).name, (t) => this._name = t || ""), this.observe(i(this, r).isDraft, (t) => this._isDraft = t || !1), this.observe(i(this, r).icon, (t) => f(this, p, t || "")), this.observe(i(this, r).flags, (t) => this._flags = t || "")), super.api = e;
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _extractFlags(e) {
  }
  _getIconName() {
    return i(this, p);
  }
  renderLabel() {
    return y`<span id="label" slot="label">${this._name}</span> `;
  }
};
r = /* @__PURE__ */ new WeakMap();
p = /* @__PURE__ */ new WeakMap();
o.styles = [
  ...v.styles,
  b`
			:host([draft]) #label {
				opacity: 0.6;
			}
			:host([draft]) umb-icon {
				opacity: 0.6;
			}
		`
];
h([
  m({ type: Object, attribute: !1 })
], o.prototype, "api", 1);
h([
  D()
], o.prototype, "_name", 2);
h([
  m({ type: Boolean, reflect: !0, attribute: "draft" })
], o.prototype, "_isDraft", 2);
o = h([
  g("umb-document-tree-item")
], o);
const I = o;
export {
  o as UmbDocumentTreeItemElement,
  I as default
};
//# sourceMappingURL=document-tree-item.element-77PAwRYs.js.map
