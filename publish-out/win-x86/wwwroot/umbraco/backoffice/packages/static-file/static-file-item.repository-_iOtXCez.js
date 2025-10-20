import { UmbItemServerDataSourceBase as p, UmbItemRepositoryBase as u } from "@umbraco-cms/backoffice/repository";
import { StaticFileService as c } from "@umbraco-cms/backoffice/external/backend-api";
import { UmbServerFilePathUniqueSerializer as a } from "@umbraco-cms/backoffice/server-file-system";
import { UmbItemDataApiGetRequestController as l } from "@umbraco-cms/backoffice/entity-item";
import { UMB_STATIC_FILE_ITEM_STORE_CONTEXT as S } from "./static-file-item.store-Binjae-Q.js";
class U extends p {
  /**
   * Creates an instance of UmbStaticFileItemServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbStaticFileItemServerDataSource
   */
  constructor(e) {
    super(e, {
      mapper: q
    });
  }
  async getItems(e) {
    if (!e) throw new Error("Uniques are missing");
    const s = new a(), i = e.map((r) => s.toServerPath(r)), o = new l(this, {
      // eslint-disable-next-line local-rules/no-direct-api-import
      api: (r) => c.getItemStaticFile({ query: { path: r.uniques } }),
      uniques: i
    }), { data: n, error: m } = await o.request();
    return { data: this._getMappedItems(n), error: m };
  }
}
const q = (t) => {
  const e = new a();
  return {
    isFolder: t.isFolder,
    name: t.name,
    parentUnique: t.parent ? e.toUnique(t.parent.path) : null,
    unique: e.toUnique(t.path)
  };
};
class b extends u {
  constructor(e) {
    super(e, U, S);
  }
}
export {
  b as UmbStaticFileItemRepository,
  b as default
};
//# sourceMappingURL=static-file-item.repository-_iOtXCez.js.map
