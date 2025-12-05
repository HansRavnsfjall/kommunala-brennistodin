import { a as m, h as u } from "./paths-BF32ZUyU.js";
import { DocumentTypeService as a, DocumentBlueprintService as c } from "@umbraco-cms/backoffice/external/backend-api";
import { UmbItemServerDataSourceBase as p, UmbItemRepositoryBase as y } from "@umbraco-cms/backoffice/repository";
import { tryExecute as T } from "@umbraco-cms/backoffice/resources";
import { UmbItemDataApiGetRequestController as d } from "@umbraco-cms/backoffice/entity-item";
class s extends p {
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
    const { data: r, error: o } = await T(
      this,
      a.getDocumentTypeByIdBlueprint({ path: { id: e } })
    );
    return r ? { data: r.items.map((n) => ({
      entityType: m,
      unique: n.id,
      name: n.name
    })) } : { error: o };
  }
  async getItems(e) {
    if (!e) throw new Error("Uniques are missing");
    const r = new d(this, {
      // eslint-disable-next-line local-rules/no-direct-api-import
      api: (n) => c.getItemDocumentBlueprint({ query: { id: n.uniques } }),
      uniques: e
    }), { data: o, error: i } = await r.request();
    return { data: this._getMappedItems(o), error: i };
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
class q extends y {
  #e = new s(this);
  constructor(e) {
    super(e, s, u);
  }
  async requestItemsByDocumentType(e) {
    return this.#e.getItemsByDocumentType(e);
  }
}
export {
  q as UmbDocumentBlueprintItemRepository,
  q as api
};
//# sourceMappingURL=document-blueprint-item.repository-DnCe4qgh.js.map
