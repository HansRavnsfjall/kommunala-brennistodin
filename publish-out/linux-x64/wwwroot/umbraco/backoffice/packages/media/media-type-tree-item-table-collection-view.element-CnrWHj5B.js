import { c as A, l as w } from "./constants-DT5L-WXf.js";
import { UMB_COLLECTION_CONTEXT as P } from "@umbraco-cms/backoffice/collection";
import { html as p, css as I, state as d, customElement as M } from "@umbraco-cms/backoffice/external/lit";
import { UmbTextStyles as O } from "@umbraco-cms/backoffice/style";
import { UmbLitElement as g } from "@umbraco-cms/backoffice/lit-element";
import { UmbModalRouteRegistrationController as R } from "@umbraco-cms/backoffice/router";
import { UMB_WORKSPACE_MODAL as S } from "@umbraco-cms/backoffice/workspace";
var U = Object.defineProperty, D = Object.getOwnPropertyDescriptor, v = (e) => {
  throw TypeError(e);
}, l = (e, i, t, o) => {
  for (var n = o > 1 ? void 0 : o ? D(i, t) : i, c = e.length - 1, _; c >= 0; c--)
    (_ = e[c]) && (n = (o ? _(i, t, n) : _(n)) || n);
  return o && n && U(i, t, n), n;
}, f = (e, i, t) => i.has(e) || v("Cannot " + t), h = (e, i, t) => (f(e, i, "read from private field"), i.get(e)), m = (e, i, t) => i.has(e) ? v("Cannot add the same private member more than once") : i instanceof WeakSet ? i.add(e) : i.set(e, t), y = (e, i, t, o) => (f(e, i, "write to private field"), i.set(e, t), t), b = (e, i, t) => (f(e, i, "access private method"), t), r, u, s, T, C, E;
let a = class extends g {
  constructor() {
    super(), m(this, s), this._tableConfig = {
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
    ], this._tableItems = [], m(this, r), m(this, u), this.consumeContext(P, (e) => {
      y(this, r, e);
    }), b(this, s, T).call(this);
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
T = function() {
  new R(this, S).addAdditionalPath(":entityType").onSetup((e) => ({ data: { entityType: e.entityType, preset: {} } })).observeRouteBuilder((e) => {
    y(this, u, e), b(this, s, C).call(this);
  });
};
C = function() {
  h(this, r) && this.observe(h(this, r).items, (e) => b(this, s, E).call(this, e), "umbCollectionItemsObserver");
};
E = function(e) {
  const i = h(this, u);
  if (!i) throw new Error("Route builder not ready");
  this._tableItems = e.map((t) => {
    const o = i({ entityType: t.entityType }) + A.generateLocal({ unique: t.unique }), n = w.generateAbsolute({
      unique: t.unique
    });
    return {
      id: t.unique,
      icon: t.isFolder && !t.icon ? "icon-folder" : t.icon,
      data: [
        {
          columnAlias: "name",
          value: p`<uui-button
							href=${t.isFolder ? n : o}
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
  O,
  I`
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
  M("umb-media-type-tree-item-table-collection-view")
], a);
export {
  a as UmbMediaTypeTreeItemTableCollectionViewElement,
  a as element
};
//# sourceMappingURL=media-type-tree-item-table-collection-view.element-CnrWHj5B.js.map
