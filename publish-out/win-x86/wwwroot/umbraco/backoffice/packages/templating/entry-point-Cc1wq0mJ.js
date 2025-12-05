import { t as n } from "./template-item.server.cache-CDbdm-cr.js";
import { UmbManagementApiItemDataCacheInvalidationManager as o } from "@umbraco-cms/backoffice/management-api";
class m extends o {
  constructor(t) {
    super(t, {
      dataCache: n,
      eventSources: ["Umbraco:CMS:Template"]
    });
  }
}
let e;
const i = (a) => {
  e = new m(a);
}, s = () => {
  e?.destroy();
};
export {
  i as onInit,
  s as onUnload
};
//# sourceMappingURL=entry-point-Cc1wq0mJ.js.map
