import { o as c, b as i, p as u } from "./constants-DT5L-WXf.js";
import { CompositionTypeModel as m } from "@umbraco-cms/backoffice/external/backend-api";
import "@umbraco-cms/backoffice/resources";
import "@umbraco-cms/backoffice/id";
import "@umbraco-cms/backoffice/repository";
import { html as l, css as d, customElement as y } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as h } from "@umbraco-cms/backoffice/lit-element";
import { UmbWorkspaceIsNewRedirectController as T } from "@umbraco-cms/backoffice/workspace";
import { UmbContentTypeWorkspaceContextBase as w } from "@umbraco-cms/backoffice/content-type";
var E = Object.getOwnPropertyDescriptor, _ = (p, e, r, t) => {
  for (var o = t > 1 ? void 0 : t ? E(e, r) : e, s = p.length - 1, a; s >= 0; s--)
    (a = p[s]) && (o = a(o) || o);
  return o;
};
let n = class extends h {
  render() {
    return l`
			<umb-entity-detail-workspace-editor>
				<umb-content-type-workspace-editor-header slot="header"></umb-content-type-workspace-editor-header>
			</umb-entity-detail-workspace-editor>
		`;
  }
};
n.styles = [
  d`
			:host {
				display: block;
				width: 100%;
				height: 100%;
			}
		`
];
n = _([
  y("umb-media-type-workspace-editor")
], n);
class q extends w {
  constructor(e) {
    super(e, {
      workspaceAlias: u,
      entityType: i,
      detailRepositoryAlias: c
    }), this.routes.setRoutes([
      {
        path: "create/parent/:parentEntityType/:parentUnique",
        component: n,
        setup: async (r, t) => {
          const o = t.match.params.parentEntityType, s = t.match.params.parentUnique === "null" ? null : t.match.params.parentUnique, a = { entityType: o, unique: s };
          await this.#e(a), new T(
            this,
            this,
            this.getHostElement().shadowRoot.querySelector("umb-router-slot")
          );
        }
      },
      {
        path: "edit/:id",
        component: n,
        setup: (r, t) => {
          const o = t.match.params.id;
          this.load(o);
        }
      }
    ]);
  }
  setAllowedAtRoot(e) {
    this.structure.updateOwnerContentType({ allowedAtRoot: e });
  }
  setVariesByCulture(e) {
    this.structure.updateOwnerContentType({ variesByCulture: e });
  }
  setVariesBySegment(e) {
    this.structure.updateOwnerContentType({ variesBySegment: e });
  }
  setIsElement(e) {
    this.structure.updateOwnerContentType({ isElement: e });
  }
  setAllowedContentTypes(e) {
    this.structure.updateOwnerContentType({ allowedContentTypes: e });
  }
  setCollection(e) {
    this.structure.updateOwnerContentType({ collection: e });
  }
  /**
   * @deprecated Use the createScaffold method instead. Will be removed in 17.
   * @param {UmbEntityModel} parent
   * @memberof UmbMediaTypeWorkspaceContext
   */
  async create(e) {
    console.warn("create() is deprecated. Use createScaffold() instead."), this.createScaffold({ parent: e });
  }
  async #e(e) {
    let r;
    e.unique && e.entityType === i && (r = {
      compositions: [
        {
          contentType: { unique: e.unique },
          compositionType: m.INHERITANCE
        }
      ]
    }), this.createScaffold({ parent: e, preset: r });
  }
}
export {
  q as UmbMediaTypeWorkspaceContext,
  q as api
};
//# sourceMappingURL=media-type-workspace.context-BK9Yr1xd.js.map
