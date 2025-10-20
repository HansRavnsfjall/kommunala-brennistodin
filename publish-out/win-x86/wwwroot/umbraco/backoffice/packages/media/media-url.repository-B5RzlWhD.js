import { UmbContextToken as i } from "@umbraco-cms/backoffice/context-api";
import { UmbItemDataApiGetRequestController as m } from "@umbraco-cms/backoffice/entity-item";
import { MediaService as l } from "@umbraco-cms/backoffice/external/backend-api";
import { UmbItemServerDataSourceBase as u, UmbItemRepositoryBase as c } from "@umbraco-cms/backoffice/repository";
const d = new i("UmbMediaUrlStore");
class p extends u {
  /**
   * Creates an instance of UmbMediaUrlServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbMediaUrlServerDataSource
   */
  constructor(e) {
    super(e, {
      mapper: U
    });
  }
  async getItems(e) {
    if (!e) throw new Error("Uniques are missing");
    const t = new m(this, {
      // eslint-disable-next-line local-rules/no-direct-api-import
      api: (n) => l.getMediaUrls({ query: { id: n.uniques } }),
      uniques: e
    }), { data: s, error: a } = await t.request();
    return { data: this._getMappedItems(s), error: a };
  }
}
const U = (r) => {
  const e = r.urlInfos.length ? r.urlInfos[0].url : void 0, t = e ? e.slice(e.lastIndexOf(".") + 1, e.length) : void 0;
  return {
    unique: r.id,
    url: e,
    extension: t
    /*info: item.urlInfos.map((urlInfo) => ({
    	...urlInfo,
    	extension: '',
    })),*/
  };
};
class o extends c {
  constructor(e) {
    super(e, p, d);
  }
}
const g = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  UmbMediaUrlRepository: o,
  api: o,
  default: o
}, Symbol.toStringTag, { value: "Module" }));
export {
  d as U,
  o as a,
  g as m
};
//# sourceMappingURL=media-url.repository-B5RzlWhD.js.map
