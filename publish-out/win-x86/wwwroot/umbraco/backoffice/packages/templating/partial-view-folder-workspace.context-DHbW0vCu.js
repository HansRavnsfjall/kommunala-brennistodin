import { p as m, l as _, d as l, o as p } from "./partial-view-workspace.context-token-DXd6FPys.js";
import { html as E, customElement as u } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as c } from "@umbraco-cms/backoffice/lit-element";
import { UmbEntityNamedDetailWorkspaceContextBase as d } from "@umbraco-cms/backoffice/workspace";
var R = Object.getOwnPropertyDescriptor, A = (t, r, i, o) => {
  for (var e = o > 1 ? void 0 : o ? R(r, i) : r, s = t.length - 1, n; s >= 0; s--)
    (n = t[s]) && (e = n(e) || e);
  return e;
};
let a = class extends c {
  constructor() {
    super(), this.consumeContext(m, (t) => {
      t?.nameWriteGuard.addRule({
        unique: "UMB_SERVER_PREVENT_FILE_SYSTEM_FOLDER_RENAME",
        permitted: !1,
        message: "It is not possible to change the name of a Partial View folder."
      });
    });
  }
  render() {
    return E`<umb-folder-workspace-editor></umb-folder-workspace-editor>`;
  }
};
a = A([
  u("umb-partial-view-folder-workspace-editor")
], a);
class T extends d {
  constructor(r) {
    super(r, {
      workspaceAlias: p,
      entityType: l,
      detailRepositoryAlias: _
    }), this.routes.setRoutes([
      {
        path: "edit/:unique",
        component: a,
        setup: (i, o) => {
          const e = o.match.params.unique;
          this.load(e);
        }
      }
    ]);
  }
}
export {
  T as UmbPartialViewFolderWorkspaceContext,
  T as api
};
//# sourceMappingURL=partial-view-folder-workspace.context-DHbW0vCu.js.map
