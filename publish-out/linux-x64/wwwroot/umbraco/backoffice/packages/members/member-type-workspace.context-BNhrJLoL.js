import { h as i, t as m } from "./input-member-type.element-Tx7SxrMW.js";
import { a as c } from "./member-type-tree.store.context-token-D6BHGtN0.js";
import "@umbraco-cms/backoffice/picker-input";
import "@umbraco-cms/backoffice/id";
import "@umbraco-cms/backoffice/external/backend-api";
import "@umbraco-cms/backoffice/resources";
import "@umbraco-cms/backoffice/repository";
import "@umbraco-cms/backoffice/entity-item";
import "@umbraco-cms/backoffice/tree";
import { html as u, css as l, customElement as y } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as h } from "@umbraco-cms/backoffice/lit-element";
import { UmbWorkspaceIsNewRedirectController as d } from "@umbraco-cms/backoffice/workspace";
import { UmbContentTypeWorkspaceContextBase as E } from "@umbraco-cms/backoffice/content-type";
var _ = Object.getOwnPropertyDescriptor, T = (n, e, o, t) => {
  for (var r = t > 1 ? void 0 : t ? _(e, o) : e, a = n.length - 1, p; a >= 0; a--)
    (p = n[a]) && (r = p(r) || r);
  return r;
};
let s = class extends h {
  render() {
    return u`
			<umb-entity-detail-workspace-editor>
				<umb-content-type-workspace-editor-header slot="header"></umb-content-type-workspace-editor-header>
			</umb-entity-detail-workspace-editor>
		`;
  }
};
s.styles = [
  l`
			:host {
				display: block;
				width: 100%;
				height: 100%;
			}
		`
];
s = T([
  y("umb-member-type-workspace-editor")
], s);
class S extends E {
  constructor(e) {
    super(e, {
      workspaceAlias: m,
      entityType: c,
      detailRepositoryAlias: i
    }), this.routes.setRoutes([
      {
        path: "create/parent/:parentEntityType/:parentUnique",
        component: s,
        setup: async (o, t) => {
          const r = t.match.params.parentEntityType, a = t.match.params.parentUnique === "null" ? null : t.match.params.parentUnique, p = { entityType: r, unique: a };
          await this.createScaffold({ parent: p }), new d(
            this,
            this,
            this.getHostElement().shadowRoot.querySelector("umb-router-slot")
          );
        }
      },
      {
        path: "edit/:unique",
        component: s,
        setup: (o, t) => {
          const r = t.match.params.unique;
          this.load(r);
        }
      }
    ]);
  }
  /**
   * @deprecated Use the individual set methods instead. Will be removed in 17.
   * @template PropertyName
   * @param {PropertyName} propertyName
   * @param {EntityDetailModel[PropertyName]} value
   * @memberof UmbMemberTypeWorkspaceContext
   */
  set(e, o) {
    this.structure.updateOwnerContentType({ [e]: o });
  }
  /**
   * @deprecated Use the createScaffold method instead. Will be removed in 17.
   * @param {UmbEntityModel} parent
   * @memberof UmbMemberTypeWorkspaceContext
   */
  async create(e) {
    this.createScaffold({ parent: e });
  }
}
export {
  S as UmbMemberTypeWorkspaceContext,
  S as api
};
//# sourceMappingURL=member-type-workspace.context-BNhrJLoL.js.map
