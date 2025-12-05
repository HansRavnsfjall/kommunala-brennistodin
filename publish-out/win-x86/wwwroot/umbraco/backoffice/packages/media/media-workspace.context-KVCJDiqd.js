import { U as c } from "./media-type-detail.repository-CZkUFcVY.js";
import { UmbContentPropertyDatasetContext as m, UmbContentDetailWorkspaceContextBase as l } from "@umbraco-cms/backoffice/content";
import { o as u, x as y, y as T } from "./input-upload-field.element-DEgpG3Zz.js";
import { U as o, z as d, p as h, y as _ } from "./dropzone.element-mk7CY1SM.js";
import "./media-url.repository-B5RzlWhD.js";
import { UmbMediaValidationRepository as A } from "./media-validation.repository-Duk82piw.js";
import { UmbIsTrashedEntityContext as U } from "@umbraco-cms/backoffice/recycle-bin";
import { UmbWorkspaceIsNewRedirectController as C, UmbWorkspaceIsNewRedirectControllerAlias as s } from "@umbraco-cms/backoffice/workspace";
class E extends m {
}
class S extends l {
  constructor(t) {
    super(t, {
      entityType: u,
      workspaceAlias: _,
      detailRepositoryAlias: h,
      contentTypeDetailRepository: c,
      contentValidationRepository: A,
      contentVariantScaffold: d,
      contentTypePropertyName: "mediaType",
      collectionAlias: o
    }), this.contentTypeUnique = this._data.createObservablePartOfCurrent((e) => e?.mediaType.unique), this.contentTypeHasCollection = this._data.createObservablePartOfCurrent((e) => !!e?.mediaType.collection), this.contentTypeIcon = this._data.createObservablePartOfCurrent((e) => e?.mediaType.icon), this.#e = new U(this), this.observe(
      this.contentTypeUnique,
      (e) => {
        e && this.structure.loadType(e);
      },
      null
    ), this.propertyViewGuard.fallbackToPermitted(), this.propertyWriteGuard.fallbackToPermitted(), this.routes.setRoutes([
      {
        path: y.toString(),
        component: () => import("./media-workspace-editor.element-gukdwyai.js"),
        setup: async (e, a) => {
          const r = a.match.params.parentEntityType, n = a.match.params.parentUnique === "null" ? null : a.match.params.parentUnique, p = a.match.params.mediaTypeUnique;
          await this.createScaffold({
            parent: { entityType: r, unique: n },
            preset: { mediaType: { unique: p } }
          }), new C(
            this,
            this,
            this.getHostElement().shadowRoot.querySelector("umb-router-slot")
          );
        }
      },
      {
        path: T.toString(),
        component: () => import("./media-workspace-editor.element-gukdwyai.js"),
        setup: (e, a) => {
          this.removeUmbControllerByAlias(s);
          const r = a.match.params.unique;
          this.load(r);
        }
      }
    ]);
  }
  #e;
  resetState() {
    super.resetState(), this.#e.setIsTrashed(!1), this.removeUmbControllerByAlias(s);
  }
  async load(t) {
    const e = await super.load(t);
    return e?.data && this.#e.setIsTrashed(e.data.isTrashed), e;
  }
  /*
   * @deprecated Use `createScaffold` instead.
   */
  async create(t, e) {
    return this.createScaffold({
      parent: t,
      preset: { mediaType: { unique: e } }
    });
  }
  /*
   * @deprecated Use `collection.getCollectionAlias()` instead. Will be removed in v.18
   */
  getCollectionAlias() {
    return o;
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
  createPropertyDatasetContext(t, e) {
    return new E(t, this, e);
  }
}
export {
  S as UmbMediaWorkspaceContext,
  S as api
};
//# sourceMappingURL=media-workspace.context-KVCJDiqd.js.map
