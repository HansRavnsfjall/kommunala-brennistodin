import { f as i, m as n, q as l } from "./constants-DTH5dSDc.js";
import { html as _, customElement as c } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as d } from "@umbraco-cms/backoffice/lit-element";
import { UmbEntityNamedDetailWorkspaceContextBase as u } from "@umbraco-cms/backoffice/workspace";
var E = Object.getOwnPropertyDescriptor, f = (o, t, m, r) => {
  for (var e = r > 1 ? void 0 : r ? E(t, m) : t, s = o.length - 1, p; s >= 0; s--)
    (p = o[s]) && (e = p(e) || e);
  return e;
};
let a = class extends d {
  render() {
    return _`<umb-folder-workspace-editor></umb-folder-workspace-editor>`;
  }
};
a = f([
  c("umb-media-type-folder-workspace-editor")
], a);
class b extends u {
  constructor(t) {
    super(t, {
      workspaceAlias: l,
      entityType: n,
      detailRepositoryAlias: i
    }), this.routes.setRoutes([
      {
        path: "edit/:unique",
        component: a,
        setup: (m, r) => {
          const e = r.match.params.unique;
          this.load(e);
        }
      }
    ]);
  }
}
export {
  b as UmbMediaTypeFolderWorkspaceContext,
  b as api
};
//# sourceMappingURL=media-type-folder-workspace.context-BXBy7cL9.js.map
