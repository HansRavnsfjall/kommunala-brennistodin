import { f as i, m as n, q as l } from "./constants-DT5L-WXf.js";
import { html as c, customElement as d } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as u } from "@umbraco-cms/backoffice/lit-element";
import { UmbTextStyles as _ } from "@umbraco-cms/backoffice/style";
import { UmbEntityNamedDetailWorkspaceContextBase as E } from "@umbraco-cms/backoffice/workspace";
var b = Object.getOwnPropertyDescriptor, T = (s, t, m, r) => {
  for (var e = r > 1 ? void 0 : r ? b(t, m) : t, a = s.length - 1, p; a >= 0; a--)
    (p = s[a]) && (e = p(e) || e);
  return e;
};
const y = "umb-media-type-folder-workspace-editor";
let o = class extends u {
  render() {
    return c`<umb-workspace-editor>
			<umb-workspace-header-name-editable slot="header"></umb-workspace-header-name-editable>
		</umb-workspace-editor>`;
  }
};
o.styles = [_];
o = T([
  d(y)
], o);
class k extends E {
  constructor(t) {
    super(t, {
      workspaceAlias: l,
      entityType: n,
      detailRepositoryAlias: i
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
  k as UmbMediaTypeFolderWorkspaceContext,
  k as api
};
//# sourceMappingURL=media-type-folder-workspace.context-711ggQCy.js.map
