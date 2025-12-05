import { UmbContentPropertyDatasetContext as i, UmbContentDetailWorkspaceContextBase as p } from "@umbraco-cms/backoffice/content";
import { i as u, u as c, a as m, x as T } from "./document-blueprint-item.server.cache-DONXnfyi.js";
import { UmbWorkspaceIsNewRedirectController as l, UmbWorkspaceIsNewRedirectControllerAlias as U } from "@umbraco-cms/backoffice/workspace";
import { UmbDocumentTypeDetailRepository as _ } from "@umbraco-cms/backoffice/document-type";
import { UMB_DOCUMENT_DETAIL_MODEL_VARIANT_SCAFFOLD as y, UMB_EDIT_DOCUMENT_WORKSPACE_PATH_PATTERN as C, UMB_DOCUMENT_COLLECTION_ALIAS as E } from "@umbraco-cms/backoffice/document";
class h extends i {
}
class O extends p {
  constructor(n) {
    super(n, {
      entityType: m,
      workspaceAlias: c,
      detailRepositoryAlias: u,
      contentTypeDetailRepository: _,
      contentVariantScaffold: y,
      contentTypePropertyName: "documentType",
      ignoreValidationResultOnSubmit: !0
    }), this.contentTypeUnique = this._data.createObservablePartOfCurrent((t) => t?.documentType.unique), this.observe(
      this.contentTypeUnique,
      (t) => {
        t && this.structure.loadType(t);
      },
      null
    ), this.routes.setRoutes([
      {
        path: T.toString(),
        component: () => import("./document-blueprint-workspace-editor.element-BHZG3nOn.js"),
        setup: async (t, e) => {
          const o = e.match.params.parentEntityType, a = e.match.params.parentUnique === "null" ? null : e.match.params.parentUnique, s = e.match.params.documentTypeUnique;
          await this.create({ entityType: o, unique: a }, s), new l(
            this,
            this,
            this.getHostElement().shadowRoot.querySelector("umb-router-slot")
          );
        }
      },
      {
        path: C.toString(),
        component: () => import("./document-blueprint-workspace-editor.element-BHZG3nOn.js"),
        setup: (t, e) => {
          this.removeUmbControllerByAlias(U);
          const o = e.match.params.unique;
          this.load(o);
        }
      }
    ]);
  }
  async create(n, t) {
    return this.createScaffold({
      parent: n,
      preset: {
        documentType: {
          unique: t,
          collection: null
        }
      }
    });
  }
  getCollectionAlias() {
    return E;
  }
  /**
   * Gets the unique identifier of the content type.
   * @deprecated Use `getContentTypeUnique` instead.
   * @returns { string | undefined} The unique identifier of the content type.
   * @memberof UmbDocumentWorkspaceContext
   */
  getContentTypeId() {
    return this.getContentTypeUnique();
  }
  /**
   * Gets the unique identifier of the content type.
   * @returns { string | undefined} The unique identifier of the content type.
   * @memberof UmbDocumentWorkspaceContext
   */
  getContentTypeUnique() {
    return this.getData()?.documentType.unique;
  }
  createPropertyDatasetContext(n, t) {
    return new h(n, this, t);
  }
}
export {
  O as UmbDocumentBlueprintWorkspaceContext,
  O as api
};
//# sourceMappingURL=document-blueprint-workspace.context-WnS23Cxh.js.map
