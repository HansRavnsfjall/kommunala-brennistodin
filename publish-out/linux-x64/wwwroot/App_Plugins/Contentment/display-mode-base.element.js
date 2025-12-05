var f = (l) => {
  throw TypeError(l);
};
var w = (l, i, s) => i.has(l) || f("Cannot " + s);
var h = (l, i, s) => (w(l, i, "read from private field"), s ? s.call(l) : i.get(l)), v = (l, i, s) => i.has(l) ? f("Cannot add the same private member more than once") : i instanceof WeakSet ? i.add(l) : i.set(l, s), E = (l, i, s, e) => (w(l, i, "write to private field"), e ? e.call(l, s) : i.set(l, s), s);
import { state as t } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as C } from "@umbraco-cms/backoffice/lit-element";
import { UmbContextToken as y } from "@umbraco-cms/backoffice/context-api";
const b = new y(
  "ContentmentDisplayModeContext"
);
var _ = Object.defineProperty, r = (l, i, s, e) => {
  for (var a = void 0, m = l.length - 1, p; m >= 0; m--)
    (p = l[m]) && (a = p(i, s, a) || a);
  return a && _(i, s, a), a;
}, o;
class d extends C {
  constructor() {
    super();
    v(this, o);
    this.addButtonLabelKey = "general_add", this.allowAdd = !1, this.allowEdit = !1, this.allowRemove = !1, this.allowSort = !1, this.items = [], this.canEdit = (s, e) => {
      var a;
      return ((a = h(this, o)) == null ? void 0 : a.canEdit(s, e)) ?? this.allowEdit;
    }, this.getItems = () => {
      var s;
      return (s = h(this, o)) == null ? void 0 : s.getItems();
    }, this.consumeContext(b, (s) => {
      E(this, o, s), this.observe(s == null ? void 0 : s.allowAdd, (e) => this.allowAdd = e ?? !1), this.observe(s == null ? void 0 : s.allowEdit, (e) => this.allowEdit = e ?? !1), this.observe(s == null ? void 0 : s.allowRemove, (e) => this.allowRemove = e ?? !1), this.observe(s == null ? void 0 : s.allowSort, (e) => this.allowSort = e ?? !1), this.observe(s == null ? void 0 : s.items, (e) => this.items = e);
    });
  }
  getConfigByAlias(s) {
    var e;
    return (e = h(this, o)) == null ? void 0 : e.getConfigByAlias(s);
  }
}
o = new WeakMap();
r([
  t()
], d.prototype, "allowAdd");
r([
  t()
], d.prototype, "allowEdit");
r([
  t()
], d.prototype, "allowRemove");
r([
  t()
], d.prototype, "allowSort");
r([
  t()
], d.prototype, "items");
export {
  d as C
};
//# sourceMappingURL=display-mode-base.element.js.map
