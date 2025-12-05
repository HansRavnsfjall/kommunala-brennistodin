import { h as w } from "./input-member-type.element-HvnUGYvy.js";
import { UMB_COLLECTION_CONTEXT as M } from "@umbraco-cms/backoffice/collection";
import { html as _, css as g, state as b, customElement as A } from "@umbraco-cms/backoffice/external/lit";
import { UmbTextStyles as I } from "@umbraco-cms/backoffice/style";
import { UmbLitElement as O } from "@umbraco-cms/backoffice/lit-element";
import { UmbModalRouteRegistrationController as P } from "@umbraco-cms/backoffice/router";
import { UMB_WORKSPACE_MODAL as R } from "@umbraco-cms/backoffice/workspace";
var S = Object.defineProperty, U = Object.getOwnPropertyDescriptor, y = (e) => {
  throw TypeError(e);
}, l = (e, t, i, n) => {
  for (var o = n > 1 ? void 0 : n ? U(t, i) : t, m = e.length - 1, c; m >= 0; m--)
    (c = e[m]) && (o = (n ? c(t, i, o) : c(o)) || o);
  return n && o && S(t, i, o), o;
}, f = (e, t, i) => t.has(e) || y("Cannot " + i), h = (e, t, i) => (f(e, t, "read from private field"), t.get(e)), p = (e, t, i) => t.has(e) ? y("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), d = (e, t, i, n) => (f(e, t, "write to private field"), t.set(e, i), i), v = (e, t, i) => (f(e, t, "access private method"), i), r, u, s, T, C, E;
let a = class extends O {
  constructor() {
    super(), p(this, s), this._tableConfig = {
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
    ], this._tableItems = [], p(this, r), p(this, u), this.consumeContext(M, (e) => {
      d(this, r, e);
    }), v(this, s, T).call(this);
  }
  render() {
    return _`
			<umb-table .config=${this._tableConfig} .columns=${this._tableColumns} .items=${this._tableItems}></umb-table>
		`;
  }
};
r = /* @__PURE__ */ new WeakMap();
u = /* @__PURE__ */ new WeakMap();
s = /* @__PURE__ */ new WeakSet();
T = function() {
  new P(this, R).addAdditionalPath(":entityType").onSetup((e) => ({ data: { entityType: e.entityType, preset: {} } })).observeRouteBuilder((e) => {
    d(this, u, e), v(this, s, C).call(this);
  });
};
C = function() {
  h(this, r) && this.observe(h(this, r).items, (e) => v(this, s, E).call(this, e), "umbCollectionItemsObserver");
};
E = function(e) {
  const t = h(this, u);
  if (!t) throw new Error("Route builder not ready");
  this._tableItems = e.map((i) => {
    const n = t({ entityType: i.entityType }) + w.generateLocal({ unique: i.unique });
    return {
      id: i.unique,
      icon: i.icon,
      data: [
        {
          columnAlias: "name",
          value: _`<uui-button href=${n} label=${i.name}></uui-button>`
        },
        {
          columnAlias: "entityActions",
          value: _`<umb-entity-actions-table-column-view
							.value=${{
            entityType: i.entityType,
            unique: i.unique
          }}></umb-entity-actions-table-column-view>`
        }
      ]
    };
  });
};
a.styles = [
  I,
  g`
			:host {
				display: flex;
				flex-direction: column;
			}
		`
];
l([
  b()
], a.prototype, "_tableConfig", 2);
l([
  b()
], a.prototype, "_tableColumns", 2);
l([
  b()
], a.prototype, "_tableItems", 2);
a = l([
  A("umb-member-type-tree-item-table-collection-view")
], a);
export {
  a as UmbMemberTypeTreeItemTableCollectionViewElement,
  a as element
};
//# sourceMappingURL=member-type-tree-item-table-collection-view.element-BEgXYwDl.js.map
