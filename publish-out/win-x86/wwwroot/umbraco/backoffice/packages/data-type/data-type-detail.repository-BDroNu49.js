import { f as o, w as n } from "./constants-mZOozcI2.js";
import { d as l } from "./data-type-detail.server.cache-VVTsxp_e.js";
import { DataTypeService as a } from "@umbraco-cms/backoffice/external/backend-api";
import { UmbManagementApiDetailDataRequestManager as p, UmbManagementApiInFlightRequestCache as h } from "@umbraco-cms/backoffice/management-api";
import { UmbId as c } from "@umbraco-cms/backoffice/id";
import { UmbControllerBase as y } from "@umbraco-cms/backoffice/class-api";
import { UmbDetailRepositoryBase as A } from "@umbraco-cms/backoffice/repository";
class s extends p {
  static #i = new h();
  constructor(i) {
    super(i, {
      create: (t) => a.postDataType({ body: t }),
      read: (t) => a.getDataTypeById({ path: { id: t } }),
      update: (t, e) => a.putDataTypeById({ path: { id: t }, body: e }),
      delete: (t) => a.deleteDataTypeById({ path: { id: t } }),
      dataCache: l,
      inflightRequestCache: s.#i
    });
  }
}
class m extends y {
  #i = new s(this);
  /**
   * Creates a new Data Type scaffold
   * @param {(string | null)} parentUnique
   * @param preset
   * @returns { CreateDataTypeRequestModel }
   * @memberof UmbDataTypeServerDataSource
   */
  async createScaffold(i = {}) {
    return { data: {
      entityType: o,
      unique: c.new(),
      name: "",
      editorAlias: void 0,
      editorUiAlias: null,
      values: [],
      ...i
    } };
  }
  /**
   * Fetches a Data Type with the given id from the server
   * @param {string} unique
   * @returns {*}
   * @memberof UmbDataTypeServerDataSource
   */
  async read(i) {
    if (!i) throw new Error("Unique is missing");
    const { data: t, error: e } = await this.#i.read(i);
    return { data: t ? this.#t(t) : void 0, error: e };
  }
  /**
   * Inserts a new Data Type on the server
   * @param {UmbDataTypeDetailModel} model
   * @param parentUnique
   * @returns {*}
   * @memberof UmbDataTypeServerDataSource
   */
  async create(i, t = null) {
    if (!i) throw new Error("Data Type is missing");
    if (!i.unique) throw new Error("Data Type unique is missing");
    if (!i.editorAlias) throw new Error("Property Editor Alias is missing");
    if (!i.editorUiAlias) throw new Error("Property Editor UI Alias is missing");
    const e = {
      id: i.unique,
      parent: t ? { id: t } : null,
      name: i.name,
      editorAlias: i.editorAlias,
      editorUiAlias: i.editorUiAlias,
      values: i.values
    }, { data: r, error: u } = await this.#i.create(e);
    return { data: r ? this.#t(r) : void 0, error: u };
  }
  /**
   * Updates a DataType on the server
   * @param {UmbDataTypeDetailModel} DataType
   * @param model
   * @returns {*}
   * @memberof UmbDataTypeServerDataSource
   */
  async update(i) {
    if (!i.unique) throw new Error("Unique is missing");
    if (!i.editorAlias) throw new Error("Property Editor Alias is missing");
    if (!i.editorUiAlias) throw new Error("Property Editor UI Alias is missing");
    const t = {
      name: i.name,
      editorAlias: i.editorAlias,
      editorUiAlias: i.editorUiAlias,
      values: i.values
    }, { data: e, error: r } = await this.#i.update(i.unique, t);
    return { data: e ? this.#t(e) : void 0, error: r };
  }
  /**
   * Deletes a Data Type on the server
   * @param {string} unique
   * @returns {*}
   * @memberof UmbDataTypeServerDataSource
   */
  async delete(i) {
    if (!i) throw new Error("Unique is missing");
    return this.#i.delete(i);
  }
  // TODO: change this to a mapper extension when the endpoints returns a $type for DataTypeResponseModel
  #t(i) {
    return {
      entityType: o,
      unique: i.id,
      name: i.name,
      editorAlias: i.editorAlias,
      editorUiAlias: i.editorUiAlias || null,
      values: i.values
    };
  }
}
class v extends A {
  #i;
  #t;
  constructor(i) {
    super(i, m, n), this.#i = this.consumeContext(n, (t) => {
      this.#t = t;
    }).asPromise({ preventTimeout: !0 }).catch(() => {
      this.#t = void 0;
    });
  }
  async byPropertyEditorUiAlias(i) {
    if (!i) throw new Error("propertyEditorUiAlias is missing");
    return await this.#i, this.#t.withPropertyEditorUiAlias(i);
  }
}
export {
  v as UmbDataTypeDetailRepository,
  v as api
};
//# sourceMappingURL=data-type-detail.repository-BDroNu49.js.map
