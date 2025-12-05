import { UmbManagementApiItemDataCache as n, UmbManagementApiItemDataCacheInvalidationManager as o } from "@umbraco-cms/backoffice/management-api";
const c = new n();
class m extends o {
  constructor(t) {
    super(t, {
      dataCache: c,
      eventSources: ["Umbraco:CMS:Webhook"]
    });
  }
}
let e;
const r = (a) => {
  e = new m(a);
}, s = () => {
  e?.destroy();
};
export {
  r as onInit,
  s as onUnload
};
//# sourceMappingURL=entry-point-BNRcUFyr.js.map
