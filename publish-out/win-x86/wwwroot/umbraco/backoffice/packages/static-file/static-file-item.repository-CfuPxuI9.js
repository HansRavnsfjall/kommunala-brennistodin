import { s as m } from "./static-file-item.server.cache-BV_VPxCk.js";
import { StaticFileService as p } from "@umbraco-cms/backoffice/external/backend-api";
import { UmbManagementApiItemDataRequestManager as c } from "@umbraco-cms/backoffice/management-api";
import { UmbItemServerDataSourceBase as u, UmbItemRepositoryBase as l } from "@umbraco-cms/backoffice/repository";
import { UmbServerFilePathUniqueSerializer as a } from "@umbraco-cms/backoffice/server-file-system";
import { UMB_STATIC_FILE_ITEM_STORE_CONTEXT as I } from "./static-file-item.store-Binjae-Q.js";
class S extends c {
  constructor(e) {
    super(e, {
      getItems: (r) => p.getItemStaticFile({ query: { path: r } }),
      dataCache: m,
      getUniqueMethod: (r) => r.path
    });
  }
}
class h extends u {
  #e = new S(this);
  /**
   * Creates an instance of UmbStaticFileItemServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbStaticFileItemServerDataSource
   */
  constructor(e) {
    super(e, {
      mapper: U
    });
  }
  async getItems(e) {
    if (!e) throw new Error("Uniques are missing");
    const r = new a(), s = e.map((n) => r.toServerPath(n)), { data: i, error: o } = await this.#e.getItems(s);
    return { data: this._getMappedItems(i), error: o };
  }
}
const U = (t) => {
  const e = new a();
  return {
    isFolder: t.isFolder,
    name: t.name,
    parentUnique: t.parent ? e.toUnique(t.parent.path) : null,
    unique: e.toUnique(t.path)
  };
};
class b extends l {
  constructor(e) {
    super(e, h, I);
  }
}
export {
  b as UmbStaticFileItemRepository,
  b as default
};
//# sourceMappingURL=static-file-item.repository-CfuPxuI9.js.map
