import { MediaTypeService as i } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecute as n } from "@umbraco-cms/backoffice/resources";
import { UmbRepositoryBase as c } from "@umbraco-cms/backoffice/repository";
class m {
  #e;
  /**
   * Creates an instance of UmbMediaTypeCompositionServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbMediaTypeCompositionServerDataSource
   */
  constructor(e) {
    this.#e = e;
  }
  /**
   * Fetches the compatible compositions for a Media type from the server
   * @param {string} unique
   * @returns {*}
   * @memberof UmbMediaTypeCompositionServerDataSource
   */
  async getReferences(e) {
    const o = await n(
      this.#e,
      i.getMediaTypeByIdCompositionReferences({ path: { id: e } })
    ), r = o.error;
    return { data: o.data?.map((s) => ({
      unique: s.id,
      icon: s.icon,
      name: s.name
    })), error: r };
  }
  /**
   * Updates the compositions for a media type on the server
   * @param {MediaTypeCompositionRequestModel} body
   * @param args
   * @returns {*}
   * @memberof UmbMediaTypeCompositionServerDataSource
   */
  async availableCompositions(e) {
    const o = {
      id: e.unique,
      currentCompositeIds: e.currentCompositeUniques,
      currentPropertyAliases: e.currentPropertyAliases
    }, r = await n(this.#e, i.postMediaTypeAvailableCompositions({ body: o })), a = r.error;
    return { data: r.data?.map((t) => ({
      unique: t.id,
      name: t.name,
      icon: t.icon,
      folderPath: t.folderPath,
      isCompatible: t.isCompatible
    })), error: a };
  }
}
class y extends c {
  #e;
  constructor(e) {
    super(e), this.#e = new m(this);
  }
  async getReferences(e) {
    return this.#e.getReferences(e);
  }
  async availableCompositions(e) {
    return this.#e.availableCompositions(e);
  }
}
export {
  y as UmbMediaTypeCompositionRepository,
  y as api
};
//# sourceMappingURL=media-type-composition.repository-Ck3eRySm.js.map
