import { p as n } from "./partial-view-item.server.cache-DJedP-yc.js";
import { UmbManagementApiItemDataCacheInvalidationManager as i } from "@umbraco-cms/backoffice/management-api";
class o extends i {
  constructor(t) {
    super(t, {
      dataCache: n,
      eventSources: ["Umbraco:CMS:PartialView"]
    });
  }
}
let e;
const c = (a) => {
  e = new o(a);
}, s = () => {
  e?.destroy();
};
export {
  c as onInit,
  s as onUnload
};
//# sourceMappingURL=entry-point-B-7UvxVJ.js.map
