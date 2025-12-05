import { property as y, state as I, customElement as w, nothing as T, html as g } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as C } from "@umbraco-cms/backoffice/lit-element";
import { UMB_MENU_ITEM_CONTEXT as M } from "@umbraco-cms/backoffice/menu";
import { UmbExpansionEntryExpandedEvent as U, UmbExpansionEntryCollapsedEvent as b } from "@umbraco-cms/backoffice/utils";
var P = Object.defineProperty, O = Object.getOwnPropertyDescriptor, x = (e) => {
  throw TypeError(e);
}, c = (e, t, n, r) => {
  for (var s = r > 1 ? void 0 : r ? O(t, n) : t, h = e.length - 1, f; h >= 0; h--)
    (f = e[h]) && (s = (r ? f(t, n, s) : f(s)) || s);
  return r && s && P(t, n, s), s;
}, d = (e, t, n) => t.has(e) || x("Cannot " + n), l = (e, t, n) => (d(e, t, "read from private field"), t.get(e)), u = (e, t, n) => t.has(e) ? x("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), o = (e, t, n, r) => (d(e, t, "write to private field"), t.set(e, n), n), _ = (e, t, n) => (d(e, t, "access private method"), n), i, a, p, v, E;
let m = class extends C {
  constructor() {
    super(), u(this, p), this._menuItemExpansion = [], u(this, i), u(this, a, !1), this.consumeContext(M, (e) => {
      o(this, i, e), _(this, p, v).call(this);
    });
  }
  render() {
    return this.manifest ? g`
					<umb-tree
						alias=${this.manifest?.meta.treeAlias}
						.props=${{
      hideTreeRoot: this.manifest?.meta.hideTreeRoot === !0,
      selectionConfiguration: {
        selectable: !1,
        multiple: !1
      },
      expansion: this._menuItemExpansion
    }}
						@expansion-entry-expanded=${_(this, p, E)}
						@expansion-entry-collapsed=${_(this, p, E)}></umb-tree>
				` : T;
  }
};
i = /* @__PURE__ */ new WeakMap();
a = /* @__PURE__ */ new WeakMap();
p = /* @__PURE__ */ new WeakSet();
v = function() {
  this.observe(l(this, i)?.expansion.expansion, (e) => {
    l(this, a) || (this._menuItemExpansion = e || []);
  });
};
E = function(e) {
  e.stopPropagation();
  const t = e.entry;
  if (!t)
    throw new Error("Entry is required to toggle expansion.");
  if (!this.manifest)
    throw new Error("Manifest is required to toggle expansion.");
  e.type === U.TYPE ? (o(this, a, !0), l(this, i)?.expansion.expandItem({ ...t, menuItemAlias: this.manifest.alias }), o(this, a, !1)) : e.type === b.TYPE && (o(this, a, !0), l(this, i)?.expansion.collapseItem({ ...t, menuItemAlias: this.manifest.alias }), o(this, a, !1));
};
c([
  y({ type: Object })
], m.prototype, "manifest", 2);
c([
  I()
], m.prototype, "_menuItemExpansion", 2);
m = c([
  w("umb-menu-item-tree-default")
], m);
const W = m;
export {
  m as UmbMenuItemTreeDefaultElement,
  W as default
};
//# sourceMappingURL=tree-menu-item.element-D3-R3-95.js.map
