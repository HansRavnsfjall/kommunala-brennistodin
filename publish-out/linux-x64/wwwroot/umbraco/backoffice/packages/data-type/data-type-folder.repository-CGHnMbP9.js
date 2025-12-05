import { h as s, G as u } from "./constants-DE93IEgK.js";
import { DataTypeService as t } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecute as a } from "@umbraco-cms/backoffice/resources";
import { UmbId as p } from "@umbraco-cms/backoffice/id";
import { UmbDetailRepositoryBase as c } from "@umbraco-cms/backoffice/repository";
class m {
  #r;
  /**
   * Creates an instance of UmbDataTypeFolderServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbDataTypeFolderServerDataSource
   */
  constructor(r) {
    this.#r = r;
  }
  /**
   * Creates a scaffold for a Data Type folder
   * @param {Partial<UmbFolderModel>} [preset]
   * @returns {*}
   * @memberof UmbDataTypeFolderServerDataSource
   */
  async createScaffold(r) {
    return { data: {
      entityType: s,
      unique: p.new(),
      name: "",
      ...r
    } };
  }
  /**
   * Fetches a Data Type folder from the server
   * @param {string} unique
   * @returns {*}
   * @memberof UmbDataTypeFolderServerDataSource
   */
  async read(r) {
    if (!r) throw new Error("Unique is missing");
    const { data: e, error: i } = await a(
      this.#r,
      t.getDataTypeFolderById({
        path: { id: r }
      })
    );
    return e ? { data: {
      entityType: s,
      unique: e.id,
      name: e.name
    } } : { error: i };
  }
  /**
   * Creates a Data Type folder on the server
   * @param {UmbFolderModel} model
   * @returns {*}
   * @memberof UmbDataTypeFolderServerDataSource
   */
  async create(r, e) {
    if (!r) throw new Error("Data is missing");
    if (!r.unique) throw new Error("Unique is missing");
    if (!r.name) throw new Error("Name is missing");
    const i = {
      id: r.unique,
      parent: e ? { id: e } : null,
      name: r.name
    }, { error: n } = await a(
      this.#r,
      t.postDataTypeFolder({
        body: i
      })
    );
    return n ? { error: n } : this.read(r.unique);
  }
  /**
   * Updates a Data Type folder on the server
   * @param {UmbFolderModel} model
   * @returns {*}
   * @memberof UmbDataTypeFolderServerDataSource
   */
  async update(r) {
    if (!r) throw new Error("Data is missing");
    if (!r.unique) throw new Error("Unique is missing");
    if (!r.name) throw new Error("Folder name is missing");
    const { error: e } = await a(
      this.#r,
      t.putDataTypeFolderById({
        path: { id: r.unique },
        body: { name: r.name }
      })
    );
    return e ? { error: e } : this.read(r.unique);
  }
  /**
   * Deletes a Data Type folder on the server
   * @param {string} unique
   * @returns {*}
   * @memberof UmbDataTypeServerDataSource
   */
  async delete(r) {
    if (!r) throw new Error("Unique is missing");
    return a(
      this.#r,
      t.deleteDataTypeFolderById({
        path: { id: r }
      })
    );
  }
}
class T extends c {
  constructor(r) {
    super(r, m, u);
  }
}
export {
  T as UmbDataTypeFolderRepository,
  T as api
};
//# sourceMappingURL=data-type-folder.repository-CGHnMbP9.js.map
