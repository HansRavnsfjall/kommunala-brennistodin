import { b as i } from "./entity-CA4W0tlV.js";
import { UmbServerFilePathUniqueSerializer as h } from "@umbraco-cms/backoffice/server-file-system";
import { StylesheetService as n } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecute as s } from "@umbraco-cms/backoffice/resources";
import { UmbId as u } from "@umbraco-cms/backoffice/id";
import { m as d } from "./manifests-EJ-JBi2P.js";
import { UmbDetailRepositoryBase as f } from "@umbraco-cms/backoffice/repository";
class w {
  #e;
  #t = new h();
  /**
   * Creates an instance of UmbStylesheetFolderServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbStylesheetFolderServerDataSource
   */
  constructor(t) {
    this.#e = t;
  }
  async createScaffold(t) {
    return { data: {
      entityType: i,
      unique: u.new(),
      name: "",
      ...t
    } };
  }
  /**
   * Fetches a Stylesheet folder from the server
   * @param {string} unique
   * @returns {UmbDataSourceResponse<UmbFolderModel>}
   * @memberof UmbStylesheetFolderServerDataSource
   */
  async read(t) {
    if (!t) throw new Error("Unique is missing");
    const e = this.#t.toServerPath(t);
    if (!e) throw new Error("Cannot read stylesheet folder without a path");
    const { data: r, error: o } = await s(
      this.#e,
      n.getStylesheetFolderByPath({
        path: { path: e }
      })
    );
    return r ? { data: {
      entityType: i,
      unique: this.#t.toUnique(r.path),
      parentUnique: r.parent ? this.#t.toUnique(r.parent.path) : null,
      name: r.name
    } } : { error: o };
  }
  /**
   * Creates a Stylesheet folder on the server
   * @param {UmbCreateFolderModel} model
   * @returns {UmbDataSourceResponse<UmbFolderModel>}
   * @memberof UmbStylesheetFolderServerDataSource
   */
  async create(t, e) {
    if (!t) throw new Error("Data is missing");
    if (!t.unique) throw new Error("Unique is missing");
    if (!t.name) throw new Error("Name is missing");
    const r = new h().toServerPath(e), o = {
      parent: r ? { path: r } : null,
      name: t.name
    }, { data: a, error: m } = await s(
      this.#e,
      n.postStylesheetFolder({
        body: o
      })
    );
    if (a && typeof a == "string") {
      const c = decodeURIComponent(a), l = this.#t.toUnique(c);
      return this.read(l);
    }
    return { error: m };
  }
  /**
   * Deletes a Stylesheet folder on the server
   * @param {string} unique
   * @returns {UmbDataSourceErrorResponse}
   * @memberof UmbStylesheetServerDataSource
   */
  async delete(t) {
    if (!t) throw new Error("Unique is missing");
    const e = this.#t.toServerPath(t);
    if (!e) throw new Error("Cannot delete stylesheet folder without a path");
    return s(
      this.#e,
      n.deleteStylesheetFolderByPath({
        path: { path: e }
      })
    );
  }
  async update() {
    throw new Error("Updating is not supported");
  }
}
class F extends f {
  constructor(t) {
    super(t, w, d);
  }
}
export {
  F as UmbStylesheetFolderRepository,
  F as default
};
//# sourceMappingURL=stylesheet-folder.repository-BiJrlntX.js.map
