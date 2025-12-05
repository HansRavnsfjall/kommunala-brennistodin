import { p, f as n, b as l, l as c } from "./member-group-picker-modal.element-I2C8EUhz.js";
import { UmbTextStyles as u } from "@umbraco-cms/backoffice/style";
import { html as _, css as E, customElement as d } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as b } from "@umbraco-cms/backoffice/lit-element";
import { UmbEntityNamedDetailWorkspaceContextBase as h, UmbWorkspaceIsNewRedirectController as R } from "@umbraco-cms/backoffice/workspace";
import { UMB_USER_GROUP_ROOT_ENTITY_TYPE as U } from "@umbraco-cms/backoffice/user-group";
var O = Object.getOwnPropertyDescriptor, M = (s, r, i, o) => {
  for (var e = o > 1 ? void 0 : o ? O(r, i) : r, a = s.length - 1, m; a >= 0; a--)
    (m = s[a]) && (e = m(e) || e);
  return e;
};
let t = class extends b {
  render() {
    return _`
			<umb-entity-detail-workspace-editor .backPath=${p}>
				<umb-workspace-header-name-editable slot="header"></umb-workspace-header-name-editable>
			</umb-entity-detail-workspace-editor>
		`;
  }
};
t.styles = [
  u,
  E`
			:host {
				display: block;
				width: 100%;
				height: 100%;
			}
		`
];
t = M([
  d("umb-member-group-workspace-editor")
], t);
class A extends h {
  constructor(r) {
    super(r, {
      workspaceAlias: c,
      entityType: l,
      detailRepositoryAlias: n
    }), this.routes.setRoutes([
      {
        path: "create",
        component: t,
        setup: async () => {
          await this.createScaffold({ parent: { entityType: U, unique: null } }), new R(
            this,
            this,
            this.getHostElement().shadowRoot.querySelector("umb-router-slot")
          );
        }
      },
      {
        path: "edit/:unique",
        component: t,
        setup: (i, o) => {
          const e = o.match.params.unique;
          this.load(e);
        }
      }
    ]);
  }
}
export {
  A as UmbMemberGroupWorkspaceContext,
  A as api
};
//# sourceMappingURL=member-group-workspace.context-ChEuO7hK.js.map
