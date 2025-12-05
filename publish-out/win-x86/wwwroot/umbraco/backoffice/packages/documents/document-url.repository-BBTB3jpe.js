import { v as m } from "./manifests-BfVrApfB.js";
import { DocumentService as n } from "@umbraco-cms/backoffice/external/backend-api";
import { UmbItemServerDataSourceBase as i, UmbItemRepositoryBase as u } from "@umbraco-cms/backoffice/repository";
import { UmbItemDataApiGetRequestController as c } from "@umbraco-cms/backoffice/entity-item";
class p extends i {
  /**
   * Creates an instance of UmbDocumentUrlServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbDocumentUrlServerDataSource
   */
  constructor(e) {
    super(e, { mapper: U });
  }
  async getItems(e) {
    if (!e) throw new Error("Uniques are missing");
    const t = new c(this, {
      // eslint-disable-next-line local-rules/no-direct-api-import
      api: (a) => n.getDocumentUrls({ query: { id: a.uniques } }),
      uniques: e
    }), { data: s, error: o } = await t.request();
    return { data: this._getMappedItems(s), error: o };
  }
}
const U = (r) => ({ unique: r.id, urls: r.urlInfos });
class q extends u {
  constructor(e) {
    super(e, p, m);
  }
}
export {
  q as UmbDocumentUrlRepository,
  q as api
};
//# sourceMappingURL=document-url.repository-BBTB3jpe.js.map
