import { html as v, property as A, state as g, customElement as O } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as P } from "@umbraco-cms/backoffice/lit-element";
import { UMB_DOCUMENT_COLLECTION_ALIAS as C } from "@umbraco-cms/backoffice/document";
import { UMB_PROPERTY_CONTEXT as U } from "@umbraco-cms/backoffice/property";
import { UMB_CONTENT_COLLECTION_WORKSPACE_CONTEXT as B } from "@umbraco-cms/backoffice/content";
var N = Object.defineProperty, S = Object.getOwnPropertyDescriptor, E = (t) => {
  throw TypeError(t);
}, u = (t, e, i, l) => {
  for (var r = l > 1 ? void 0 : l ? S(e, i) : e, _ = t.length - 1, h; _ >= 0; _--)
    (h = t[_]) && (r = (l ? h(e, i, r) : h(r)) || r);
  return l && r && N(e, i, r), r;
}, m = (t, e, i) => e.has(t) || E("Cannot " + i), s = (t, e, i) => (m(t, e, "read from private field"), e.get(t)), d = (t, e, i) => e.has(t) ? E("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), p = (t, e, i, l) => (m(t, e, "write to private field"), e.set(t, i), i), f = (t, e, i) => (m(t, e, "access private method"), i), o, a, c, y, T;
let n = class extends P {
  constructor() {
    super(), d(this, c), d(this, o), d(this, a), this._collectionAlias = C, this.consumeContext(B, (t) => {
      p(this, o, t), this._collectionAlias = t?.collection.getCollectionAlias() ?? C, f(this, c, y).call(this);
    }), this.consumeContext(U, (t) => {
      p(this, a, t), f(this, c, y).call(this);
    });
  }
  set config(t) {
    this._config = f(this, c, T).call(this, t);
  }
  render() {
    return !this._config?.unique || !this._config?.dataTypeId ? v`<uui-loader></uui-loader>` : v`<umb-collection .alias=${this._collectionAlias} .config=${this._config}></umb-collection>`;
  }
  destroy() {
    super.destroy(), p(this, o, void 0), p(this, a, void 0);
  }
};
o = /* @__PURE__ */ new WeakMap();
a = /* @__PURE__ */ new WeakMap();
c = /* @__PURE__ */ new WeakSet();
y = function() {
  !s(this, o) || !s(this, a) || this.observe(s(this, a)?.alias, async (t) => {
    if (s(this, o) && t) {
      const e = await s(this, o).structure.getPropertyStructureByAlias(t);
      if (!s(this, o))
        return;
      const i = s(this, o).getUnique();
      i && e && this._config && (this._config.unique = i, this._config.dataTypeId = e.dataType.unique, this.requestUpdate("_config"));
    }
  });
};
T = function(t) {
  const e = Number(t?.getValueByAlias("pageSize"));
  return {
    layouts: t?.getValueByAlias("layouts"),
    orderBy: t?.getValueByAlias("orderBy") ?? "updateDate",
    orderDirection: t?.getValueByAlias("orderDirection") ?? "asc",
    pageSize: isNaN(e) ? 50 : e,
    userDefinedProperties: t?.getValueByAlias("includeProperties")
  };
};
u([
  A()
], n.prototype, "value", 2);
u([
  g()
], n.prototype, "_collectionAlias", 2);
u([
  g()
], n.prototype, "_config", 2);
n = u([
  O("umb-property-editor-ui-collection")
], n);
const x = n;
export {
  n as UmbPropertyEditorUICollectionElement,
  x as default
};
//# sourceMappingURL=property-editor-ui-collection.element-DgviPVLk.js.map
