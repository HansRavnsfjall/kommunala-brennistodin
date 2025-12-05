import { m as n } from "./member-type-item.server.cache-D3Xsl_R0.js";
import { UmbManagementApiItemDataCacheInvalidationManager as m } from "@umbraco-cms/backoffice/management-api";
class o extends m {
  constructor(t) {
    super(t, {
      dataCache: n,
      eventSources: ["Umbraco:CMS:MemberType"]
    });
  }
}
let a;
const i = (e) => {
  a = new o(e);
}, s = () => {
  a?.destroy();
};
export {
  i as onInit,
  s as onUnload
};
//# sourceMappingURL=entry-point-w2p0Ad_v.js.map
