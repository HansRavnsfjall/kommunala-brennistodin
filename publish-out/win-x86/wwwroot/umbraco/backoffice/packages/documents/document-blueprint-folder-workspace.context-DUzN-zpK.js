import { p, b as i, s as u } from "./document-blueprint-item.server.cache-DONXnfyi.js";
import { html as l, customElement as c } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as _ } from "@umbraco-cms/backoffice/lit-element";
import { UmbEntityNamedDetailWorkspaceContextBase as E } from "@umbraco-cms/backoffice/workspace";
var d = Object.getOwnPropertyDescriptor, U = (o, t, a, r) => {
  for (var e = r > 1 ? void 0 : r ? d(t, a) : t, s = o.length - 1, m; s >= 0; s--)
    (m = o[s]) && (e = m(e) || e);
  return e;
};
let n = class extends _ {
  render() {
    return l`<umb-folder-workspace-editor> </umb-folder-workspace-editor>`;
  }
};
n = U([
  c("umb-document-blueprint-folder-workspace-editor")
], n);
class b extends E {
  constructor(t) {
    super(t, {
      workspaceAlias: u,
      entityType: i,
      detailRepositoryAlias: p
    }), this.routes.setRoutes([
      {
        path: "edit/:unique",
        component: n,
        setup: (a, r) => {
          const e = r.match.params.unique;
          this.load(e);
        }
      }
    ]);
  }
}
export {
  b as UmbDocumentBlueprintFolderWorkspaceContext,
  b as api
};
//# sourceMappingURL=document-blueprint-folder-workspace.context-DUzN-zpK.js.map
