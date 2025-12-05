import { MediaService as s } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecute as n } from "@umbraco-cms/backoffice/resources";
import { UmbRepositoryBase as u } from "@umbraco-cms/backoffice/repository";
class d {
  #i;
  constructor(i) {
    this.#i = i;
  }
  /**
   * Validate a new Media on the server
   * @param {UmbMediaDetailModel} model - Media Model
   * @param {UmbEntityUnique} parentUnique - Parent Unique
   * @returns {*}
   */
  async validateCreate(i, a = null) {
    if (!i) throw new Error("Media is missing");
    if (!i.unique) throw new Error("Media unique is missing");
    if (a === void 0) throw new Error("Parent unique is missing");
    const t = {
      id: i.unique,
      parent: a ? { id: a } : null,
      mediaType: { id: i.mediaType.unique },
      values: i.values,
      variants: i.variants
    }, { data: r, error: e } = await n(
      this.#i,
      s.postMediaValidate({
        body: t
      })
    );
    return r && typeof r == "string" ? { data: r } : { error: e };
  }
  /**
   * Validate a existing Media
   * @param {UmbMediaDetailModel} model - Media Model
   * @param {Array<UmbVariantId>} variantIds - Variant Ids
   * @returns {Promise<*>} - The response from the server
   */
  async validateUpdate(i, a) {
    if (!i.unique) throw new Error("Unique is missing");
    const t = {
      values: i.values,
      variants: i.variants
    }, { data: r, error: e } = await n(
      this.#i,
      s.putMediaByIdValidate({
        path: { id: i.unique },
        body: t
      })
    );
    return r && typeof r == "string" ? { data: r } : { error: e };
  }
}
class h extends u {
  #i;
  constructor(i) {
    super(i), this.#i = new d(this);
  }
  /**
   * Returns a promise with an observable of the detail for the given unique
   * @param {DetailModelType} model - The model to validate
   * @param {string | null} [parentUnique] - The parent unique
   * @returns {*}
   */
  async validateCreate(i, a) {
    if (!i) throw new Error("Data is missing");
    return this.#i.validateCreate(i, a);
  }
  /**
   * Saves the given data
   * @param {DetailModelType} model - The model to save
   * @param {Array<UmbVariantId>} variantIds - The variant ids to save
   * @returns {*}
   */
  async validateSave(i, a) {
    if (!i) throw new Error("Data is missing");
    if (!i.unique) throw new Error("Unique is missing");
    return this.#i.validateUpdate(i, a);
  }
}
export {
  h as UmbMediaValidationRepository,
  h as api
};
//# sourceMappingURL=media-validation.repository-f-sioc_e.js.map
