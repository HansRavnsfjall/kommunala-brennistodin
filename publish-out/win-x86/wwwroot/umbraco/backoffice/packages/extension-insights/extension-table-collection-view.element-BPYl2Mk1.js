import { UMB_COLLECTION_CONTEXT as d } from "@umbraco-cms/backoffice/collection";
import { html as v, css as w, state as u, customElement as T } from "@umbraco-cms/backoffice/external/lit";
import { UmbTextStyles as g } from "@umbraco-cms/backoffice/style";
import { UmbLitElement as x } from "@umbraco-cms/backoffice/lit-element";
var E = Object.defineProperty, A = Object.getOwnPropertyDescriptor, b = (t) => {
  throw TypeError(t);
}, r = (t, e, a, n) => {
  for (var i = n > 1 ? void 0 : n ? A(e, a) : e, m = t.length - 1, c; m >= 0; m--)
    (c = t[m]) && (i = (n ? c(e, a, i) : c(i)) || i);
  return n && i && E(e, a, i), i;
}, p = (t, e, a) => e.has(t) || b("Cannot " + a), _ = (t, e, a) => (p(t, e, "read from private field"), e.get(t)), h = (t, e, a) => e.has(t) ? b("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, a), I = (t, e, a, n) => (p(t, e, "write to private field"), e.set(t, a), a), f = (t, e, a) => (p(t, e, "access private method"), a), s, o, y, C;
let l = class extends x {
  constructor() {
    super(), h(this, o), this._tableConfig = {
      allowSelection: !1
    }, this._tableColumns = [
      {
        name: "Type",
        alias: "extensionType"
      },
      {
        name: "Name",
        alias: "extensionName"
      },
      {
        name: "Alias",
        alias: "extensionAlias"
      },
      {
        name: "Weight",
        alias: "extensionWeight"
      },
      {
        name: "",
        alias: "entityActions",
        align: "right"
      }
    ], this._tableItems = [], h(this, s), this.consumeContext(d, (t) => {
      I(this, s, t), f(this, o, y).call(this);
    });
  }
  render() {
    return v`
			<umb-table .config=${this._tableConfig} .columns=${this._tableColumns} .items=${this._tableItems}></umb-table>
		`;
  }
};
s = /* @__PURE__ */ new WeakMap();
o = /* @__PURE__ */ new WeakSet();
y = function() {
  _(this, s) && this.observe(_(this, s).items, (t) => f(this, o, C).call(this, t), "umbCollectionItemsObserver");
};
C = function(t) {
  this._tableItems = t.map((e) => ({
    id: e.unique,
    data: [
      {
        columnAlias: "extensionType",
        value: e.type
      },
      {
        columnAlias: "extensionName",
        value: e.name
      },
      {
        columnAlias: "extensionAlias",
        value: e.alias
      },
      {
        columnAlias: "extensionWeight",
        value: e.weight
      },
      {
        columnAlias: "entityActions",
        value: v`<umb-entity-actions-table-column-view
							.value=${{
          entityType: e.entityType,
          unique: e.unique,
          name: e.name
        }}></umb-entity-actions-table-column-view>`
      }
    ]
  }));
};
l.styles = [
  g,
  w`
			:host {
				display: flex;
				flex-direction: column;
			}
		`
];
r([
  u()
], l.prototype, "_tableConfig", 2);
r([
  u()
], l.prototype, "_tableColumns", 2);
r([
  u()
], l.prototype, "_tableItems", 2);
l = r([
  T("umb-extension-table-collection-view")
], l);
const S = l;
export {
  l as UmbExtensionTableCollectionViewElement,
  S as default
};
//# sourceMappingURL=extension-table-collection-view.element-BPYl2Mk1.js.map
