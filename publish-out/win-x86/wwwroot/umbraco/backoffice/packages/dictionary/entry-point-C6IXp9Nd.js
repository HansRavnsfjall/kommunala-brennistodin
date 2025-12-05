import { z as n } from "./paths-BPzgB6U7.js";
import { UmbManagementApiItemDataCacheInvalidationManager as o } from "@umbraco-cms/backoffice/management-api";
class i extends o {
  constructor(e) {
    super(e, {
      dataCache: n,
      eventSources: ["Umbraco:CMS:DictionaryItem"]
    });
  }
}
let t;
const m = (a) => {
  t = new i(a);
}, s = () => {
  t?.destroy();
};
export {
  m as onInit,
  s as onUnload
};
//# sourceMappingURL=entry-point-C6IXp9Nd.js.map
