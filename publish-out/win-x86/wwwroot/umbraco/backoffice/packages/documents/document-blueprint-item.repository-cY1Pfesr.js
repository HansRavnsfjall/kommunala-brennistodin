import { A as s, a as m, h as i } from "./document-blueprint-item.server.cache-DONXnfyi.js";
import { DocumentBlueprintService as u, DocumentTypeService as c } from "@umbraco-cms/backoffice/external/backend-api";
import { UmbManagementApiItemDataRequestManager as p } from "@umbraco-cms/backoffice/management-api";
import { UmbItemServerDataSourceBase as d, UmbItemRepositoryBase as y } from "@umbraco-cms/backoffice/repository";
import { tryExecute as T } from "@umbraco-cms/backoffice/resources";
class I extends p {
  constructor(e) {
    super(e, {
      getItems: (n) => u.getItemDocumentBlueprint({ query: { id: n } }),
      dataCache: s,
      getUniqueMethod: (n) => n.id
    });
  }
}
class o extends d {
  #e = new I(this);
  /**
   * Creates an instance of UmbDocumentBlueprintItemServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbDocumentBlueprintItemServerDataSource
   */
  constructor(e) {
    super(e, {
      mapper: l
    });
  }
  async getItemsByDocumentType(e) {
    if (!e) throw new Error("Unique is missing");
    const { data: n, error: r } = await T(
      this,
      c.getDocumentTypeByIdBlueprint({ path: { id: e } })
    );
    return n ? { data: n.items.map((a) => ({
      entityType: m,
      unique: a.id,
      name: a.name
    })) } : { error: r };
  }
  async getItems(e) {
    if (!e) throw new Error("Uniques are missing");
    const { data: n, error: r } = await this.#e.getItems(e);
    return { data: this._getMappedItems(n), error: r };
  }
}
const l = (t) => ({
  entityType: m,
  unique: t.id,
  name: t.name,
  documentType: {
    unique: t.documentType.id,
    icon: t.documentType.icon,
    collection: t.documentType.collection ? { unique: t.documentType.collection.id } : null
  }
});
class M extends y {
  #e = new o(this);
  constructor(e) {
    super(e, o, i);
  }
  async requestItemsByDocumentType(e) {
    return this.#e.getItemsByDocumentType(e);
  }
}
export {
  M as UmbDocumentBlueprintItemRepository,
  M as api
};
//# sourceMappingURL=document-blueprint-item.repository-cY1Pfesr.js.map
