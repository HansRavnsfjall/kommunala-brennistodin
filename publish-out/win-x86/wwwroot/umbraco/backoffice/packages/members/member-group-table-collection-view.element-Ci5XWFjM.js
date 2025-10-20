import { UMB_COLLECTION_CONTEXT as y } from "@umbraco-cms/backoffice/collection";
import { html as u, css as w, state as _, customElement as g } from "@umbraco-cms/backoffice/external/lit";
import { UmbTextStyles as T } from "@umbraco-cms/backoffice/style";
import { UmbLitElement as E } from "@umbraco-cms/backoffice/lit-element";
var I = Object.defineProperty, O = Object.getOwnPropertyDescriptor, v = (t) => {
  throw TypeError(t);
}, r = (t, e, a, s) => {
  for (var i = s > 1 ? void 0 : s ? O(e, a) : e, m = t.length - 1, c; m >= 0; m--)
    (c = t[m]) && (i = (s ? c(e, a, i) : c(i)) || i);
  return s && i && I(e, a, i), i;
}, p = (t, e, a) => e.has(t) || v("Cannot " + a), h = (t, e, a) => (p(t, e, "read from private field"), e.get(t)), b = (t, e, a) => e.has(t) ? v("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, a), x = (t, e, a, s) => (p(t, e, "write to private field"), e.set(t, a), a), f = (t, e, a) => (p(t, e, "access private method"), a), l, o, C, d;
let n = class extends E {
  constructor() {
    super(), b(this, o), this._tableConfig = {
      allowSelection: !1
    }, this._tableColumns = [
      {
        name: this.localize.term("general_name"),
        alias: "memberGroupName"
      },
      {
        name: "",
        alias: "entityActions",
        align: "right"
      }
    ], this._tableItems = [], b(this, l), this.consumeContext(y, (t) => {
      x(this, l, t), f(this, o, C).call(this);
    });
  }
  render() {
    return u`
			<umb-table .config=${this._tableConfig} .columns=${this._tableColumns} .items=${this._tableItems}></umb-table>
		`;
  }
};
l = /* @__PURE__ */ new WeakMap();
o = /* @__PURE__ */ new WeakSet();
C = function() {
  h(this, l) && this.observe(h(this, l).items, (t) => f(this, o, d).call(this, t), "umbCollectionItemsObserver");
};
d = function(t) {
  this._tableItems = t.map((e) => ({
    id: e.unique,
    icon: "icon-users",
    data: [
      {
        columnAlias: "memberGroupName",
        value: u`<a href=${"section/member-management/workspace/member-group/edit/" + e.unique}
							>${e.name}</a
						>`
      },
      {
        columnAlias: "entityActions",
        value: u`<umb-entity-actions-table-column-view
							.value=${{
          entityType: e.entityType,
          unique: e.unique,
          name: e.name
        }}></umb-entity-actions-table-column-view>`
      }
    ]
  }));
};
n.styles = [
  T,
  w`
			:host {
				display: flex;
				flex-direction: column;
			}
		`
];
r([
  _()
], n.prototype, "_tableConfig", 2);
r([
  _()
], n.prototype, "_tableColumns", 2);
r([
  _()
], n.prototype, "_tableItems", 2);
n = r([
  g("umb-member-group-table-collection-view")
], n);
const S = n;
export {
  n as UmbMemberGroupTableCollectionViewElement,
  S as default
};
//# sourceMappingURL=member-group-table-collection-view.element-Ci5XWFjM.js.map
