import { s as n } from "./script-item.server.cache-BV_VPxCk.js";
import { UmbManagementApiItemDataCacheInvalidationManager as o } from "@umbraco-cms/backoffice/management-api";
class r extends o {
  constructor(e) {
    super(e, {
      dataCache: n,
      eventSources: ["Umbraco:CMS:Script"]
    });
  }
}
let t;
const m = (a) => {
  t = new r(a);
}, s = () => {
  t?.destroy();
};
export {
  m as onInit,
  s as onUnload
};
//# sourceMappingURL=entry-point-OPUaSqkD.js.map
