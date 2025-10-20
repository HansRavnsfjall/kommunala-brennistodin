import { m as s, k as d } from "./constants-DT5L-WXf.js";
import { MediaTypeService as i } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecute as t } from "@umbraco-cms/backoffice/resources";
import { UmbId as u } from "@umbraco-cms/backoffice/id";
import { UmbDetailRepositoryBase as p } from "@umbraco-cms/backoffice/repository";
class m {
  #r;
  /**
   * Creates an instance of UmbMediaTypeFolderServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbMediaTypeFolderServerDataSource
   */
  constructor(r) {
    this.#r = r;
  }
  /**
   * Creates a scaffold for a Media Type folder
   * @param {Partial<UmbFolderModel>} [preset]
   * @returns {*}
   * @memberof UmbMediaTypeFolderServerDataSource
   */
  async createScaffold(r) {
    return { data: {
      entityType: s,
      unique: u.new(),
      name: "",
      ...r
    } };
  }
  /**
   * Fetches a Media Type folder from the server
   * @param {string} unique
   * @returns {*}
   * @memberof UmbMediaTypeFolderServerDataSource
   */
  async read(r) {
    if (!r) throw new Error("Unique is missing");
    const { data: e, error: a } = await t(
      this.#r,
      i.getMediaTypeFolderById({
        path: { id: r }
      })
    );
    return e ? { data: {
      entityType: s,
      unique: e.id,
      name: e.name
    } } : { error: a };
  }
  /**
   * Creates a Media Type folder on the server
   * @param {UmbFolderModel} model
   * @returns {*}
   * @memberof UmbMediaTypeFolderServerDataSource
   */
  async create(r, e) {
    if (!r) throw new Error("Data is missing");
    if (!r.unique) throw new Error("Unique is missing");
    if (!r.name) throw new Error("Name is missing");
    const a = {
      id: r.unique,
      parent: e ? { id: e } : null,
      name: r.name
    }, { error: n } = await t(
      this.#r,
      i.postMediaTypeFolder({
        body: a
      })
    );
    return n ? { error: n } : this.read(r.unique);
  }
  /**
   * Updates a Media Type folder on the server
   * @param {UmbUpdateFolderModel} model
   * @returns {*}
   * @memberof UmbMediaTypeFolderServerDataSource
   */
  async update(r) {
    if (!r) throw new Error("Data is missing");
    if (!r.unique) throw new Error("Unique is missing");
    if (!r.name) throw new Error("Folder name is missing");
    const { error: e } = await t(
      this.#r,
      i.putMediaTypeFolderById({
        path: { id: r.unique },
        body: { name: r.name }
      })
    );
    return e ? { error: e } : this.read(r.unique);
  }
  /**
   * Deletes a Media Type folder on the server
   * @param {string} unique
   * @returns {*}
   * @memberof UmbMediaTypeServerDataSource
   */
  async delete(r) {
    if (!r) throw new Error("Unique is missing");
    return t(
      this.#r,
      i.deleteMediaTypeFolderById({
        path: { id: r }
      })
    );
  }
}
class E extends p {
  constructor(r) {
    super(r, m, d);
  }
}
export {
  E as UmbMediaTypeFolderRepository,
  E as default
};
//# sourceMappingURL=media-type-folder.repository-Cj1sex62.js.map
