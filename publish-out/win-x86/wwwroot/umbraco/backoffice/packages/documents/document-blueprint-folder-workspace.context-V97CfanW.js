import { p, b as i, s as l } from "./paths-BF32ZUyU.js";
import { html as u, customElement as c } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as d } from "@umbraco-cms/backoffice/lit-element";
import { UmbTextStyles as _ } from "@umbraco-cms/backoffice/style";
import { UmbEntityNamedDetailWorkspaceContextBase as E } from "@umbraco-cms/backoffice/workspace";
var b = Object.getOwnPropertyDescriptor, U = (s, t, m, r) => {
  for (var e = r > 1 ? void 0 : r ? b(t, m) : t, a = s.length - 1, n; a >= 0; a--)
    (n = s[a]) && (e = n(e) || e);
  return e;
};
const O = "umb-document-blueprint-folder-workspace-editor";
let o = class extends d {
  render() {
    return u`<umb-workspace-editor>
			<umb-workspace-header-name-editable slot="header"></umb-workspace-header-name-editable>
		</umb-workspace-editor>`;
  }
};
o.styles = [_];
o = U([
  c(O)
], o);
class L extends E {
  constructor(t) {
    super(t, {
      workspaceAlias: l,
      entityType: i,
      detailRepositoryAlias: p
    }), this.routes.setRoutes([
      {
        path: "edit/:unique",
        component: o,
        setup: (m, r) => {
          const e = r.match.params.unique;
          this.load(e);
        }
      }
    ]);
  }
}
export {
  L as UmbDocumentBlueprintFolderWorkspaceContext,
  L as api
};
//# sourceMappingURL=document-blueprint-folder-workspace.context-V97CfanW.js.map
