import { u as n } from "./constants-CCpPAcSy.js";
import { UmbManagementApiItemDataCacheInvalidationManager as o } from "@umbraco-cms/backoffice/management-api";
class r extends o {
  constructor(t) {
    super(t, {
      dataCache: n,
      eventSources: ["Umbraco:CMS:UserGroup"]
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
//# sourceMappingURL=entry-point-CyGhxasL.js.map
