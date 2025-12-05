import { o as i, k as p, n } from "./manifests-EJ-JBi2P.js";
import { b as l } from "./entity-CA4W0tlV.js";
import "@umbraco-cms/backoffice/server-file-system";
import "@umbraco-cms/backoffice/external/backend-api";
import "@umbraco-cms/backoffice/resources";
import "@umbraco-cms/backoffice/id";
import "@umbraco-cms/backoffice/repository";
import { html as _, customElement as u } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as c } from "@umbraco-cms/backoffice/lit-element";
import { UmbEntityNamedDetailWorkspaceContextBase as d } from "@umbraco-cms/backoffice/workspace";
var S = Object.getOwnPropertyDescriptor, T = (t, o, m, r) => {
  for (var e = r > 1 ? void 0 : r ? S(o, m) : o, s = t.length - 1, E; s >= 0; s--)
    (E = t[s]) && (e = E(e) || e);
  return e;
};
let a = class extends c {
  constructor() {
    super(), this.consumeContext(i, (t) => {
      t?.nameWriteGuard.addRule({
        unique: "UMB_SERVER_PREVENT_FILE_SYSTEM_FOLDER_RENAME",
        permitted: !1,
        message: "It is not possible to change the name of a Stylesheet folder."
      });
    });
  }
  render() {
    return _`<umb-folder-workspace-editor></umb-folder-workspace-editor>`;
  }
};
a = T([
  u("umb-stylesheet-folder-workspace-editor")
], a);
class F extends d {
  constructor(o) {
    super(o, {
      workspaceAlias: n,
      entityType: l,
      detailRepositoryAlias: p
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
  F as UmbStylesheetFolderWorkspaceContext,
  F as api
};
//# sourceMappingURL=stylesheet-folder-workspace.context-w7lrxT9y.js.map
