import { c as w, m as A } from "./constants-D9L2jSGX.js";
import { UMB_COLLECTION_CONTEXT as P } from "@umbraco-cms/backoffice/collection";
import { html as r, css as O, state as b, customElement as g } from "@umbraco-cms/backoffice/external/lit";
import { UmbTextStyles as I } from "@umbraco-cms/backoffice/style";
import { UmbLitElement as M } from "@umbraco-cms/backoffice/lit-element";
import { UmbModalRouteRegistrationController as R } from "@umbraco-cms/backoffice/router";
import { UMB_WORKSPACE_MODAL as U } from "@umbraco-cms/backoffice/workspace";
var D = Object.defineProperty, S = Object.getOwnPropertyDescriptor, T = (e) => {
  throw TypeError(e);
}, u = (e, n, t, i) => {
  for (var o = i > 1 ? void 0 : i ? S(n, t) : n, c = e.length - 1, _; c >= 0; c--)
    (_ = e[c]) && (o = (i ? _(n, t, o) : _(o)) || o);
  return i && o && D(n, t, o), o;
}, d = (e, n, t) => n.has(e) || T("Cannot " + t), h = (e, n, t) => (d(e, n, "read from private field"), n.get(e)), p = (e, n, t) => n.has(e) ? T("Cannot add the same private member more than once") : n instanceof WeakSet ? n.add(e) : n.set(e, t), f = (e, n, t, i) => (d(e, n, "write to private field"), n.set(e, t), t), v = (e, n, t) => (d(e, n, "access private method"), t), l, m, s, y, E, C;
const N = "umb-document-type-tree-item-table-collection-view";
let a = class extends M {
  constructor() {
    super(), p(this, s), this._tableConfig = {
      allowSelection: !1
    }, this._tableColumns = [
      {
        name: "Name",
        alias: "name"
      },
      {
        name: "Element Type",
        alias: "isElementType"
      },
      {
        name: "",
        alias: "entityActions",
        align: "right"
      }
    ], this._tableItems = [], p(this, l), p(this, m), this.consumeContext(P, (e) => {
      f(this, l, e);
    }), v(this, s, y).call(this);
  }
  render() {
    return r`
			<umb-table .config=${this._tableConfig} .columns=${this._tableColumns} .items=${this._tableItems}></umb-table>
		`;
  }
};
l = /* @__PURE__ */ new WeakMap();
m = /* @__PURE__ */ new WeakMap();
s = /* @__PURE__ */ new WeakSet();
y = function() {
  new R(this, U).addAdditionalPath(":entityType").onSetup((e) => ({ data: { entityType: e.entityType, preset: {} } })).observeRouteBuilder((e) => {
    f(this, m, e), v(this, s, E).call(this);
  });
};
E = function() {
  h(this, l) && this.observe(h(this, l).items, (e) => v(this, s, C).call(this, e), "umbCollectionItemsObserver");
};
C = function(e) {
  const n = h(this, m);
  if (!n) throw new Error("Route builder not ready");
  this._tableItems = e.map((t) => {
    const i = n({ entityType: t.entityType }) + w.generateLocal({ unique: t.unique }), o = A.generateAbsolute({
      unique: t.unique
    });
    return {
      id: t.unique,
      icon: t.isFolder && !t.icon ? "icon-folder" : t.icon,
      data: [
        {
          columnAlias: "name",
          value: r`<uui-button
							href=${t.isFolder ? o : i}
							label=${t.name}></uui-button>`
        },
        {
          columnAlias: "isElementType",
          value: r`<umb-boolean-table-column-view .value=${t.isElement}></umb-boolean-table-column-view>`
        },
        {
          columnAlias: "entityActions",
          value: r`<umb-entity-actions-table-column-view
							.value=${{
            entityType: t.entityType,
            unique: t.unique,
            name: t.name
          }}></umb-entity-actions-table-column-view>`
        }
      ]
    };
  });
};
a.styles = [
  I,
  O`
			:host {
				display: flex;
				flex-direction: column;
			}
		`
];
u([
  b()
], a.prototype, "_tableConfig", 2);
u([
  b()
], a.prototype, "_tableColumns", 2);
u([
  b()
], a.prototype, "_tableItems", 2);
a = u([
  g(N)
], a);
export {
  a as UmbDocumentTypeTreeItemTableCollectionViewElement,
  a as element
};
//# sourceMappingURL=document-type-tree-item-table-collection-view.element-td9veAa7.js.map
