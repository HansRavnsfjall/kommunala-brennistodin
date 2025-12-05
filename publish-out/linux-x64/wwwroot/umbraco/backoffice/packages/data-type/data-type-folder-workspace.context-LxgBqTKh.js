import { E as i, h as n, H as l } from "./constants-DE93IEgK.js";
import "@umbraco-cms/backoffice/external/backend-api";
import "@umbraco-cms/backoffice/resources";
import "@umbraco-cms/backoffice/id";
import "@umbraco-cms/backoffice/repository";
import { html as c, customElement as u } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as d } from "@umbraco-cms/backoffice/lit-element";
import { UmbTextStyles as _ } from "@umbraco-cms/backoffice/style";
import { UmbEntityNamedDetailWorkspaceContextBase as E } from "@umbraco-cms/backoffice/workspace";
var T = Object.getOwnPropertyDescriptor, b = (a, t, m, r) => {
  for (var e = r > 1 ? void 0 : r ? T(t, m) : t, s = a.length - 1, p; s >= 0; s--)
    (p = a[s]) && (e = p(e) || e);
  return e;
};
const A = "umb-data-type-folder-workspace-editor";
let o = class extends d {
  render() {
    return c`<umb-workspace-editor>
			<umb-workspace-header-name-editable slot="header"></umb-workspace-header-name-editable>
		</umb-workspace-editor>`;
  }
};
o.styles = [_];
o = b([
  u(A)
], o);
class U extends E {
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
  U as UmbDataTypeFolderWorkspaceContext,
  U as api
};
//# sourceMappingURL=data-type-folder-workspace.context-LxgBqTKh.js.map
