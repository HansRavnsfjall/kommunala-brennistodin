import { l as t } from "./language-item.server.cache-BGldxR4I.js";
import { UmbManagementApiItemDataCacheInvalidationManager as o } from "@umbraco-cms/backoffice/management-api";
class r extends o {
  constructor(n) {
    super(n, {
      dataCache: t,
      eventSources: ["Umbraco:CMS:Language"]
    });
  }
}
let e;
const i = (a) => {
  e = new r(a);
}, g = () => {
  e?.destroy();
};
export {
  i as onInit,
  g as onUnload
};
//# sourceMappingURL=entry-point-DhrXVKxf.js.map
