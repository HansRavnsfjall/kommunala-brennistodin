import { m as n } from "./media-type-item.server.cache-CBJigTH3.js";
import { UmbManagementApiItemDataCacheInvalidationManager as o } from "@umbraco-cms/backoffice/management-api";
class i extends o {
  constructor(t) {
    super(t, {
      dataCache: n,
      eventSources: ["Umbraco:CMS:MediaType"]
    });
  }
}
let e;
const c = (a) => {
  e = new i(a);
}, d = () => {
  e?.destroy();
};
export {
  c as onInit,
  d as onUnload
};
//# sourceMappingURL=entry-point-5OOdRGuX.js.map
