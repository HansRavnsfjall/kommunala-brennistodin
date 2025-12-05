import { d as o } from "./data-type-detail.server.cache-VVTsxp_e.js";
import { UmbManagementApiDetailDataCacheInvalidationManager as i, UmbManagementApiItemDataCacheInvalidationManager as r } from "@umbraco-cms/backoffice/management-api";
import { d as c } from "./data-type-item.server.cache-B54GZFBu.js";
class m extends i {
  constructor(e) {
    super(e, {
      dataCache: o,
      eventSources: ["Umbraco:CMS:DataType"]
    });
  }
}
class d extends r {
  constructor(e) {
    super(e, {
      dataCache: c,
      eventSources: ["Umbraco:CMS:DataType"]
    });
  }
}
let t, n;
const D = (a) => {
  t = new m(a), n = new d(a);
}, C = () => {
  t?.destroy(), n?.destroy();
};
export {
  D as onInit,
  C as onUnload
};
//# sourceMappingURL=entry-point-x0OydBz6.js.map
