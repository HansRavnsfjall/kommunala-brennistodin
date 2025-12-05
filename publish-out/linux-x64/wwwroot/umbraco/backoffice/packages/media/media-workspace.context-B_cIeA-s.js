import { UmbMediaTypeDetailRepository as p } from "./media-type-detail.repository-BfRNPj_J.js";
import { UmbContentPropertyDatasetContext as l, UmbContentDetailWorkspaceContextBase as m } from "@umbraco-cms/backoffice/content";
import { m as c, w as u, x as y } from "./input-upload-field.element-BKvVffkE.js";
import { y as T, o as d, x as h, U as _ } from "./dropzone.element-DJdyaEXj.js";
import "./media-url.repository-B5RzlWhD.js";
import { UmbMediaValidationRepository as A } from "./media-validation.repository-f-sioc_e.js";
import { UmbWorkspaceIsNewRedirectController as U, UmbWorkspaceIsNewRedirectControllerAlias as o } from "@umbraco-cms/backoffice/workspace";
import { UmbIsTrashedEntityContext as C } from "@umbraco-cms/backoffice/recycle-bin";
class E extends l {
}
class S extends m {
  constructor(a) {
    super(a, {
      entityType: c,
      workspaceAlias: h,
      detailRepositoryAlias: d,
      contentTypeDetailRepository: p,
      contentValidationRepository: A,
      contentVariantScaffold: T,
      contentTypePropertyName: "mediaType"
    }), this.contentTypeUnique = this._data.createObservablePartOfCurrent((t) => t?.mediaType.unique), this.contentTypeHasCollection = this._data.createObservablePartOfCurrent((t) => !!t?.mediaType.collection), this.#t = new C(this), this.observe(
      this.contentTypeUnique,
      (t) => {
        t && this.structure.loadType(t);
      },
      null
    ), this.propertyViewGuard.fallbackToPermitted(), this.propertyWriteGuard.fallbackToPermitted(), this.routes.setRoutes([
      {
        path: u.toString(),
        component: () => import("./media-workspace-editor.element-Bbq2fbgv.js"),
        setup: async (t, e) => {
          const r = e.match.params.parentEntityType, n = e.match.params.parentUnique === "null" ? null : e.match.params.parentUnique, i = e.match.params.mediaTypeUnique;
          await this.createScaffold({
            parent: { entityType: r, unique: n },
            preset: { mediaType: { unique: i, collection: null } }
          }), new U(
            this,
            this,
            this.getHostElement().shadowRoot.querySelector("umb-router-slot")
          );
        }
      },
      {
        path: y.toString(),
        component: () => import("./media-workspace-editor.element-Bbq2fbgv.js"),
        setup: (t, e) => {
          this.removeUmbControllerByAlias(o);
          const r = e.match.params.unique;
          this.load(r);
        }
      }
    ]);
  }
  #t;
  resetState() {
    super.resetState(), this.#t.setIsTrashed(!1), this.removeUmbControllerByAlias(o);
  }
  async load(a) {
    const t = await super.load(a);
    return t?.data && this.#t.setIsTrashed(t.data.isTrashed), t;
  }
  /*
   * @deprecated Use `createScaffold` instead.
   */
  async create(a, t) {
    const e = {
      parent: a,
      preset: { mediaType: { unique: t, collection: null } }
    };
    return this.createScaffold(e);
  }
  getCollectionAlias() {
    return _;
  }
  /**
   * Gets the unique identifier of the content type.
   * @deprecated Use `getContentTypeUnique` instead.
   * @returns { string | undefined} The unique identifier of the content type.
   * @memberof UmbMediaWorkspaceContext
   */
  getContentTypeId() {
    return this.getContentTypeUnique();
  }
  /**
   * Gets the unique identifier of the content type.
   * @returns { string | undefined} The unique identifier of the content type.
   * @memberof UmbMediaWorkspaceContext
   */
  getContentTypeUnique() {
    return this.getData()?.mediaType.unique;
  }
  createPropertyDatasetContext(a, t) {
    return new E(a, this, t);
  }
}
export {
  S as UmbMediaWorkspaceContext,
  S as api
};
//# sourceMappingURL=media-workspace.context-B_cIeA-s.js.map
