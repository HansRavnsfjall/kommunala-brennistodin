import { UMB_COLLECTION_CONTEXT as y } from "@umbraco-cms/backoffice/collection";
import { html as u, css as T, state as p, customElement as w } from "@umbraco-cms/backoffice/external/lit";
import { UmbTextStyles as E } from "@umbraco-cms/backoffice/style";
import { UmbLitElement as I } from "@umbraco-cms/backoffice/lit-element";
var O = Object.defineProperty, g = Object.getOwnPropertyDescriptor, v = (e) => {
  throw TypeError(e);
}, r = (e, t, a, o) => {
  for (var i = o > 1 ? void 0 : o ? g(t, a) : t, c = e.length - 1, m; c >= 0; c--)
    (m = e[c]) && (i = (o ? m(t, a, i) : m(i)) || i);
  return o && i && O(t, a, i), i;
}, _ = (e, t, a) => t.has(e) || v("Cannot " + a), h = (e, t, a) => (_(e, t, "read from private field"), t.get(e)), f = (e, t, a) => t.has(e) ? v("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, a), x = (e, t, a, o) => (_(e, t, "write to private field"), t.set(e, a), a), b = (e, t, a) => (_(e, t, "access private method"), a), l, n, C, d;
let s = class extends I {
  constructor() {
    super(), f(this, n), this._tableConfig = {
      allowSelection: !1
    }, this._tableColumns = [
      {
        name: "Relation Type",
        alias: "relationTypeName"
      }
    ], this._tableItems = [], f(this, l), this.consumeContext(y, (e) => {
      x(this, l, e), b(this, n, C).call(this);
    });
  }
  render() {
    return u`
			<umb-table .config=${this._tableConfig} .columns=${this._tableColumns} .items=${this._tableItems}></umb-table>
		`;
  }
};
l = /* @__PURE__ */ new WeakMap();
n = /* @__PURE__ */ new WeakSet();
C = function() {
  h(this, l) && this.observe(h(this, l).items, (e) => b(this, n, d).call(this, e), "umbCollectionItemsObserver");
};
d = function(e) {
  this._tableItems = e.map((t) => ({
    id: t.unique,
    icon: "icon-trafic",
    data: [
      {
        columnAlias: "relationTypeName",
        value: u`<a href=${"section/settings/workspace/relation-type/edit/" + t.unique}
							>${t.name}</a
						>`
      }
    ]
  }));
};
s.styles = [
  E,
  T`
			:host {
				display: flex;
				flex-direction: column;
			}
		`
];
r([
  p()
], s.prototype, "_tableConfig", 2);
r([
  p()
], s.prototype, "_tableColumns", 2);
r([
  p()
], s.prototype, "_tableItems", 2);
s = r([
  w("umb-relation-type-table-collection-view")
], s);
const P = s;
export {
  s as UmbRelationTypeTableCollectionViewElement,
  P as default
};
//# sourceMappingURL=relation-type-table-collection-view.element-CHF2kPCW.js.map
