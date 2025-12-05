import { u as n } from "./constants-DjdF3T-M.js";
import { UmbManagementApiItemDataCacheInvalidationManager as o } from "@umbraco-cms/backoffice/management-api";
class r extends o {
  constructor(t) {
    super(t, {
      dataCache: n,
      eventSources: ["Umbraco:CMS:User"]
    });
  }
}
let e;
const c = (a) => {
  e = new r(a);
}, i = () => {
  e?.destroy();
};
export {
  c as onInit,
  i as onUnload
};
//# sourceMappingURL=entry-point-DBgsIKrb.js.map
