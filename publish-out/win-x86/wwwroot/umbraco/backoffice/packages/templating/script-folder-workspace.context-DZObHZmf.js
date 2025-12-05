import { r as m, n, w as c, q as _ } from "./manifests-CH0eoEje.js";
import "@umbraco-cms/backoffice/server-file-system";
import "@umbraco-cms/backoffice/external/backend-api";
import "@umbraco-cms/backoffice/resources";
import "@umbraco-cms/backoffice/id";
import "@umbraco-cms/backoffice/repository";
import { html as u, customElement as l } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as E } from "@umbraco-cms/backoffice/lit-element";
import { UmbEntityNamedDetailWorkspaceContextBase as d } from "@umbraco-cms/backoffice/workspace";
var R = Object.getOwnPropertyDescriptor, S = (t, r, a, o) => {
  for (var e = o > 1 ? void 0 : o ? R(r, a) : r, s = t.length - 1, p; s >= 0; s--)
    (p = t[s]) && (e = p(e) || e);
  return e;
};
let i = class extends E {
  constructor() {
    super(), this.consumeContext(m, (t) => {
      t?.nameWriteGuard.addRule({
        unique: "UMB_SERVER_PREVENT_FILE_SYSTEM_FOLDER_RENAME",
        permitted: !1,
        message: "It is not possible to change the name of a script folder."
      });
    });
  }
  render() {
    return u`<umb-folder-workspace-editor></umb-folder-workspace-editor>`;
  }
};
i = S([
  l("umb-script-folder-workspace-editor")
], i);
class L extends d {
  constructor(r) {
    super(r, {
      workspaceAlias: _,
      entityType: c,
      detailRepositoryAlias: n
    }), this.routes.setRoutes([
      {
        path: "edit/:unique",
        component: i,
        setup: (a, o) => {
          const e = o.match.params.unique;
          this.load(e);
        }
      }
    ]);
  }
}
export {
  L as UmbScriptFolderWorkspaceContext,
  L as api
};
//# sourceMappingURL=script-folder-workspace.context-DZObHZmf.js.map
