import { s as n } from "./static-file-item.server.cache-BV_VPxCk.js";
import { UmbManagementApiItemDataCacheInvalidationManager as i } from "@umbraco-cms/backoffice/management-api";
class o extends i {
  constructor(e) {
    super(e, {
      dataCache: n,
      eventSources: ["Umbraco:CMS:StaticFile"]
    });
  }
}
let t;
const m = (a) => {
  t = new o(a);
}, s = () => {
  t?.destroy();
};
export {
  m as onInit,
  s as onUnload
};
//# sourceMappingURL=entry-point-CUP9W9PG.js.map
