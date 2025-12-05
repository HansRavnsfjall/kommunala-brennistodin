import { property as m, state as a, customElement as p, html as c } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as v } from "@umbraco-cms/backoffice/lit-element";
var u = Object.defineProperty, _ = Object.getOwnPropertyDescriptor, r = (f, i, l, o) => {
  for (var e = o > 1 ? void 0 : o ? _(i, l) : i, n = f.length - 1, s; n >= 0; n--)
    (s = f[n]) && (e = (o ? s(i, l, e) : s(e)) || e);
  return o && e && u(i, l, e), e;
};
let t = class extends v {
  render() {
    return this.manifest ? this.manifest.meta.collectionAlias ? c`<umb-collection
			alias=${this.manifest.meta.collectionAlias}
			.config=${this._config}
			.filter=${this._filter}></umb-collection>` : c` <div>No Collection Alias in Manifest</div>` : c` <div>No Manifest</div>`;
  }
};
r([
  m({ type: Object, attribute: !1 })
], t.prototype, "manifest", 2);
r([
  a()
], t.prototype, "_config", 2);
r([
  a()
], t.prototype, "_filter", 2);
t = r([
  p("umb-collection-workspace-view")
], t);
export {
  t as UmbCollectionWorkspaceViewElement,
  t as element
};
//# sourceMappingURL=collection-workspace-view.element-BSGEziPX.js.map
