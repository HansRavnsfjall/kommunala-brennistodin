import { d as o } from "./document-type-detail.server.cache-Ggv4q985.js";
import { UmbManagementApiDetailDataCacheInvalidationManager as c, UmbManagementApiItemDataCacheInvalidationManager as m } from "@umbraco-cms/backoffice/management-api";
import { d as i } from "./document-type-item.server.cache-_Im2jNgl.js";
class r extends c {
  constructor(e) {
    super(e, {
      dataCache: o,
      eventSources: ["Umbraco:CMS:DocumentType"]
    });
  }
}
class d extends m {
  constructor(e) {
    super(e, {
      dataCache: i,
      eventSources: ["Umbraco:CMS:DocumentType"]
    });
  }
}
let t, n;
const D = (a) => {
  t = new r(a), n = new d(a);
}, u = () => {
  t?.destroy(), n?.destroy();
};
export {
  D as onInit,
  u as onUnload
};
//# sourceMappingURL=entry-point-DKfMfW5i.js.map
