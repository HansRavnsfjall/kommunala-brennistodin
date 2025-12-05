import { r as i, n, s as c } from "./constants-rt5n84j4.js";
import "@umbraco-cms/backoffice/external/backend-api";
import "@umbraco-cms/backoffice/resources";
import "@umbraco-cms/backoffice/id";
import "@umbraco-cms/backoffice/repository";
import { html as u, customElement as l } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as _ } from "@umbraco-cms/backoffice/lit-element";
import { UmbEntityNamedDetailWorkspaceContextBase as E } from "@umbraco-cms/backoffice/workspace";
var d = Object.getOwnPropertyDescriptor, T = (r, t, p, o) => {
  for (var e = o > 1 ? void 0 : o ? d(t, p) : t, s = r.length - 1, a; s >= 0; s--)
    (a = r[s]) && (e = a(e) || e);
  return e;
};
let m = class extends _ {
  render() {
    return u`<umb-folder-workspace-editor></umb-folder-workspace-editor>`;
  }
};
m = T([
  l("umb-document-type-folder-workspace-editor")
], m);
class A extends E {
  constructor(t) {
    super(t, {
      workspaceAlias: c,
      entityType: n,
      detailRepositoryAlias: i
    }), this.routes.setRoutes([
      {
        path: "edit/:unique",
        component: m,
        setup: (p, o) => {
          const e = o.match.params.unique;
          this.load(e);
        }
      }
    ]);
  }
}
export {
  A as UmbDocumentTypeFolderWorkspaceContext,
  A as api
};
//# sourceMappingURL=document-type-folder-workspace.context-2_J7UV_-.js.map
