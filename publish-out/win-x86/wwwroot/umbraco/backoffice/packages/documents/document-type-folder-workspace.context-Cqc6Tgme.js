import { r as n, n as i, s as c } from "./constants-D9L2jSGX.js";
import "@umbraco-cms/backoffice/external/backend-api";
import "@umbraco-cms/backoffice/resources";
import "@umbraco-cms/backoffice/id";
import "@umbraco-cms/backoffice/repository";
import { html as l, customElement as u } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as d } from "@umbraco-cms/backoffice/lit-element";
import { UmbTextStyles as _ } from "@umbraco-cms/backoffice/style";
import { UmbEntityNamedDetailWorkspaceContextBase as E } from "@umbraco-cms/backoffice/workspace";
var T = Object.getOwnPropertyDescriptor, b = (s, t, a, r) => {
  for (var e = r > 1 ? void 0 : r ? T(t, a) : t, m = s.length - 1, p; m >= 0; m--)
    (p = s[m]) && (e = p(e) || e);
  return e;
};
const O = "umb-document-type-folder-workspace-editor";
let o = class extends d {
  render() {
    return l`<umb-workspace-editor>
			<umb-workspace-header-name-editable slot="header"></umb-workspace-header-name-editable>
		</umb-workspace-editor>`;
  }
};
o.styles = [_];
o = b([
  u(O)
], o);
class A extends E {
  constructor(t) {
    super(t, {
      workspaceAlias: c,
      entityType: i,
      detailRepositoryAlias: n
    }), this.routes.setRoutes([
      {
        path: "edit/:unique",
        component: o,
        setup: (a, r) => {
          const e = r.match.params.unique;
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
//# sourceMappingURL=document-type-folder-workspace.context-Cqc6Tgme.js.map
