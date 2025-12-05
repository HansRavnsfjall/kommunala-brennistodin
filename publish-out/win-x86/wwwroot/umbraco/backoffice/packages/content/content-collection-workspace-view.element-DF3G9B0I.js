import { U as m } from "./content-collection-workspace.context-token-BkMq2Z0s.js";
import { nothing as p, html as a, state as _, customElement as f } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as h } from "@umbraco-cms/backoffice/lit-element";
var u = Object.defineProperty, C = Object.getOwnPropertyDescriptor, n = (t, o, c, l) => {
  for (var e = l > 1 ? void 0 : l ? C(o, c) : o, r = t.length - 1, s; r >= 0; r--)
    (s = t[r]) && (e = (l ? s(o, c, e) : s(e)) || e);
  return l && e && u(o, c, e), e;
};
let i = class extends h {
  constructor() {
    super(), this._loading = !0, this.consumeContext(m, (t) => {
      this._collectionAlias = t?.collection.getCollectionAlias(), this.observe(
        t?.collection.collectionConfig,
        (o) => {
          o && (this._config = o, this._loading = !1);
        },
        "_observeConfigContentType"
      );
    });
  }
  render() {
    return this._loading ? p : a`<umb-collection .alias=${this._collectionAlias} .config=${this._config}></umb-collection>`;
  }
};
n([
  _()
], i.prototype, "_loading", 2);
n([
  _()
], i.prototype, "_config", 2);
n([
  _()
], i.prototype, "_collectionAlias", 2);
i = n([
  f("umb-content-collection-workspace-view")
], i);
export {
  i as UmbContentCollectionWorkspaceViewElement,
  i as element
};
//# sourceMappingURL=content-collection-workspace-view.element-DF3G9B0I.js.map
