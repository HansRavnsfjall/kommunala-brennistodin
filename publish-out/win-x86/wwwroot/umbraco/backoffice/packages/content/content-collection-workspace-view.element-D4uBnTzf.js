import { U as v } from "./content-collection-workspace.context-token-BliQa7Cu.js";
import { nothing as C, html as U, state as c, customElement as w } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as A } from "@umbraco-cms/backoffice/lit-element";
import { UmbDataTypeDetailRepository as D } from "@umbraco-cms/backoffice/data-type";
import { UmbPropertyEditorConfigCollection as E } from "@umbraco-cms/backoffice/property-editor";
var T = Object.defineProperty, b = Object.getOwnPropertyDescriptor, h = (t) => {
  throw TypeError(t);
}, a = (t, e, i, o) => {
  for (var n = o > 1 ? void 0 : o ? b(e, i) : e, u = t.length - 1, p; u >= 0; u--)
    (p = t[u]) && (n = (o ? p(e, i, n) : p(n)) || n);
  return o && n && T(e, i, n), n;
}, m = (t, e, i) => e.has(t) || h("Cannot " + i), _ = (t, e, i) => (m(t, e, "read from private field"), i ? i.call(t) : e.get(t)), f = (t, e, i) => e.has(t) ? h("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), d = (t, e, i) => (m(t, e, "access private method"), i), s, l, g, y;
let r = class extends A {
  constructor() {
    super(), f(this, l), this._loading = !0, f(this, s, new D(this)), d(this, l, g).call(this);
  }
  render() {
    return this._loading ? C : U`<umb-collection .alias=${this._collectionAlias} .config=${this._config}></umb-collection>`;
  }
};
s = /* @__PURE__ */ new WeakMap();
l = /* @__PURE__ */ new WeakSet();
g = async function() {
  this.consumeContext(v, (t) => {
    this._collectionAlias = t?.getCollectionAlias(), this._documentUnique = t?.getUnique() ?? "", this.observe(
      t?.structure.ownerContentType,
      async (e) => {
        if (!e || !e.collection) return;
        const i = e.collection.unique;
        i && (await _(this, s).requestByUnique(i), this.observe(
          await _(this, s).byUnique(i),
          (o) => {
            o && (this._config = d(this, l, y).call(this, o), this._loading = !1);
          },
          "_observeConfigDataType"
        ));
      },
      "_observeConfigContentType"
    );
  });
};
y = function(t) {
  const e = new E(t.values), i = Number(e.getValueByAlias("pageSize"));
  return {
    unique: this._documentUnique,
    layouts: e?.getValueByAlias("layouts"),
    orderBy: e?.getValueByAlias("orderBy") ?? "updateDate",
    orderDirection: e?.getValueByAlias("orderDirection") ?? "asc",
    pageSize: isNaN(i) ? 50 : i,
    userDefinedProperties: e?.getValueByAlias("includeProperties")
  };
};
a([
  c()
], r.prototype, "_loading", 2);
a([
  c()
], r.prototype, "_config", 2);
a([
  c()
], r.prototype, "_collectionAlias", 2);
a([
  c()
], r.prototype, "_documentUnique", 2);
r = a([
  w("umb-content-collection-workspace-view")
], r);
export {
  r as UmbContentCollectionWorkspaceViewElement,
  r as element
};
//# sourceMappingURL=content-collection-workspace-view.element-D4uBnTzf.js.map
