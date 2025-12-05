import { s as n } from "./stylesheet-picker-modal.token-C6nznOkG.js";
import { UmbManagementApiItemDataCacheInvalidationManager as o } from "@umbraco-cms/backoffice/management-api";
class s extends o {
  constructor(t) {
    super(t, {
      dataCache: n,
      eventSources: ["Umbraco:CMS:Stylesheet"]
    });
  }
}
let a;
const c = (e) => {
  a = new s(e);
}, i = () => {
  a?.destroy();
};
export {
  c as onInit,
  i as onUnload
};
//# sourceMappingURL=entry-point-KezsHgVp.js.map
