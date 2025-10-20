import { r as A, K as w } from "./constants-DE93IEgK.js";
import "@umbraco-cms/backoffice/external/backend-api";
import "@umbraco-cms/backoffice/resources";
import "@umbraco-cms/backoffice/id";
import "@umbraco-cms/backoffice/repository";
import { UMB_COLLECTION_CONTEXT as P } from "@umbraco-cms/backoffice/collection";
import { html as p, css as O, state as d, customElement as g } from "@umbraco-cms/backoffice/external/lit";
import { UmbTextStyles as I } from "@umbraco-cms/backoffice/style";
import { UmbLitElement as R } from "@umbraco-cms/backoffice/lit-element";
import { UmbModalRouteRegistrationController as D } from "@umbraco-cms/backoffice/router";
import { UMB_WORKSPACE_MODAL as M } from "@umbraco-cms/backoffice/workspace";
var S = Object.defineProperty, U = Object.getOwnPropertyDescriptor, T = (e) => {
  throw TypeError(e);
}, l = (e, i, t, n) => {
  for (var o = n > 1 ? void 0 : n ? U(i, t) : i, m = e.length - 1, c; m >= 0; m--)
    (c = e[m]) && (o = (n ? c(i, t, o) : c(o)) || o);
  return n && o && S(i, t, o), o;
}, f = (e, i, t) => i.has(e) || T("Cannot " + t), h = (e, i, t) => (f(e, i, "read from private field"), i.get(e)), _ = (e, i, t) => i.has(e) ? T("Cannot add the same private member more than once") : i instanceof WeakSet ? i.add(e) : i.set(e, t), v = (e, i, t, n) => (f(e, i, "write to private field"), i.set(e, t), t), b = (e, i, t) => (f(e, i, "access private method"), t), r, u, s, y, C, E;
let a = class extends R {
  constructor() {
    super(), _(this, s), this._tableConfig = {
      allowSelection: !1
    }, this._tableColumns = [
      {
        name: "Name",
        alias: "name"
      },
      {
        name: "",
        alias: "entityActions",
        align: "right"
      }
    ], this._tableItems = [], _(this, r), _(this, u), this.consumeContext(P, (e) => {
      v(this, r, e);
    }), b(this, s, y).call(this);
  }
  render() {
    return p`
			<umb-table .config=${this._tableConfig} .columns=${this._tableColumns} .items=${this._tableItems}></umb-table>
		`;
  }
};
r = /* @__PURE__ */ new WeakMap();
u = /* @__PURE__ */ new WeakMap();
s = /* @__PURE__ */ new WeakSet();
y = function() {
  new D(this, M).addAdditionalPath(":entityType").onSetup((e) => ({ data: { entityType: e.entityType, preset: {} } })).observeRouteBuilder((e) => {
    v(this, u, e), b(this, s, C).call(this);
  });
};
C = function() {
  h(this, r) && this.observe(h(this, r).items, (e) => b(this, s, E).call(this, e), "umbCollectionItemsObserver");
};
E = function(e) {
  const i = h(this, u);
  if (!i) throw new Error("Route builder not ready");
  this._tableItems = e.map((t) => {
    const n = i({ entityType: t.entityType }) + A.generateLocal({ unique: t.unique }), o = w.generateAbsolute({
      unique: t.unique
    });
    return {
      id: t.unique,
      icon: t.isFolder && !t.icon ? "icon-folder" : t.icon,
      data: [
        {
          columnAlias: "name",
          value: p`<uui-button
							href=${t.isFolder ? o : n}
							label=${t.name}></uui-button>`
        },
        {
          columnAlias: "entityActions",
          value: p`<umb-entity-actions-table-column-view
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
l([
  d()
], a.prototype, "_tableConfig", 2);
l([
  d()
], a.prototype, "_tableColumns", 2);
l([
  d()
], a.prototype, "_tableItems", 2);
a = l([
  g("umb-data-type-tree-item-table-collection-view")
], a);
export {
  a as UmbDataTypeTreeItemTableCollectionViewElement,
  a as element
};
//# sourceMappingURL=data-type-tree-item-table-collection-view.element-DHauD-1B.js.map
