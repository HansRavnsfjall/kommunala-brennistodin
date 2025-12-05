import { m as n } from "./member-group-item.server.cache-D3Xsl_R0.js";
import { UmbManagementApiItemDataCacheInvalidationManager as o } from "@umbraco-cms/backoffice/management-api";
class r extends o {
  constructor(t) {
    super(t, {
      dataCache: n,
      eventSources: ["Umbraco:CMS:MemberGroup"]
    });
  }
}
let e;
const i = (a) => {
  e = new r(a);
}, s = () => {
  e?.destroy();
};
export {
  i as onInit,
  s as onUnload
};
//# sourceMappingURL=entry-point-B-7lv47G.js.map
