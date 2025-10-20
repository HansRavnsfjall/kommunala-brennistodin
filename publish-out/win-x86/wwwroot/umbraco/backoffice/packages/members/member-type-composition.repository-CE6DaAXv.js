import { MemberTypeService as i } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecute as n } from "@umbraco-cms/backoffice/resources";
import { UmbRepositoryBase as c } from "@umbraco-cms/backoffice/repository";
class m {
  #e;
  /**
   * Creates an instance of UmbMemberTypeCompositionServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbMemberTypeCompositionServerDataSource
   */
  constructor(e) {
    this.#e = e;
  }
  /**
   * Fetches the compatible compositions for a document type from the server
   * @param {string} unique
   * @returns {*}
   * @memberof UmbMemberTypeCompositionServerDataSource
   */
  async getReferences(e) {
    const r = await n(
      this.#e,
      i.getMemberTypeByIdCompositionReferences({ path: { id: e } })
    ), o = r.error;
    return { data: r.data?.map((s) => ({
      unique: s.id,
      icon: s.icon,
      name: s.name
    })), error: o };
  }
  /**
   * Updates the compositions for a document type on the server
   * @param {MemberTypeCompositionRequestModel} body
   * @param args
   * @returns {*}
   * @memberof UmbMemberTypeCompositionServerDataSource
   */
  async availableCompositions(e) {
    const r = {
      id: e.unique,
      currentCompositeIds: e.currentCompositeUniques,
      currentPropertyAliases: e.currentPropertyAliases
    }, o = await n(this.#e, i.postMemberTypeAvailableCompositions({ body: r })), a = o.error;
    return { data: o.data?.map((t) => ({
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
  y as UmbMemberTypeCompositionRepository,
  y as api
};
//# sourceMappingURL=member-type-composition.repository-CE6DaAXv.js.map
