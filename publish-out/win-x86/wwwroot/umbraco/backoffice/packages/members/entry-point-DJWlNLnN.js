import { m as n } from "./member-item.server.cache-D3Xsl_R0.js";
import { UmbManagementApiItemDataCacheInvalidationManager as o } from "@umbraco-cms/backoffice/management-api";
class c extends o {
  constructor(e) {
    super(e, {
      dataCache: n,
      /* The Member item model includes info about the Member Type. 
      We need to invalidate the cache for both Member and MemberType events. */
      eventSources: ["Umbraco:CMS:Member", "Umbraco:CMS:MemberType"]
    });
  }
  _onServerEvent(e) {
    e.eventSource === "Umbraco:CMS:MemberType" ? this.#a(e) : this.#e(e);
  }
  #e(e) {
    const t = e.key;
    this._dataCache.delete(t);
  }
  #a(e) {
    const t = e.key;
    this._dataCache.getAll().filter((a) => a.memberType.id === t).map((a) => a.id).forEach((a) => this._dataCache.delete(a));
  }
}
let r;
const b = (m) => {
  r = new c(m);
}, h = () => {
  r?.destroy();
};
export {
  b as onInit,
  h as onUnload
};
//# sourceMappingURL=entry-point-DJWlNLnN.js.map
