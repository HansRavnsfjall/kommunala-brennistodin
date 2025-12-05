import { F as i, h as n, I as l } from "./constants-mZOozcI2.js";
import "@umbraco-cms/backoffice/external/backend-api";
import "@umbraco-cms/backoffice/resources";
import "@umbraco-cms/backoffice/id";
import "@umbraco-cms/backoffice/repository";
import { html as _, customElement as c } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as u } from "@umbraco-cms/backoffice/lit-element";
import { UmbEntityNamedDetailWorkspaceContextBase as d } from "@umbraco-cms/backoffice/workspace";
var E = Object.getOwnPropertyDescriptor, A = (o, t, p, r) => {
  for (var e = r > 1 ? void 0 : r ? E(t, p) : t, s = o.length - 1, m; s >= 0; s--)
    (m = o[s]) && (e = m(e) || e);
  return e;
};
let a = class extends u {
  render() {
    return _`<umb-folder-workspace-editor></umb-folder-workspace-editor>`;
  }
};
a = A([
  c("umb-data-type-folder-workspace-editor")
], a);
class h extends d {
  constructor(t) {
    super(t, {
      workspaceAlias: l,
      entityType: n,
      detailRepositoryAlias: i
    }), this.routes.setRoutes([
      {
        path: "edit/:unique",
        component: a,
        setup: (p, r) => {
          const e = r.match.params.unique;
          this.load(e);
        }
      }
    ]);
  }
}
export {
  h as UmbDataTypeFolderWorkspaceContext,
  h as api
};
//# sourceMappingURL=data-type-folder-workspace.context-DMhZr-sJ.js.map
