import { A as c } from "./document-blueprint-item.server.cache-DONXnfyi.js";
import { UmbManagementApiItemDataCacheInvalidationManager as m } from "@umbraco-cms/backoffice/management-api";
class d extends m {
  constructor(e) {
    super(e, {
      dataCache: c,
      /* The Document Blueprint item model includes info about the Document Type. 
      We need to invalidate the cache for both Document and DocumentType events. */
      eventSources: ["Umbraco:CMS:DocumentBlueprint", "Umbraco:CMS:DocumentType"]
    });
  }
  _onServerEvent(e) {
    e.eventSource === "Umbraco:CMS:DocumentType" ? this.#t(e) : this.#e(e);
  }
  #e(e) {
    const a = e.key;
    this._dataCache.delete(a);
  }
  #t(e) {
    const a = e.key;
    this._dataCache.getAll().filter((t) => t.documentType.id === a).map((t) => t.id).forEach((t) => this._dataCache.delete(t));
  }
}
let o;
const u = (n) => {
  o = new d(n);
}, h = () => {
  o?.destroy();
};
export {
  u as onInit,
  h as onUnload
};
//# sourceMappingURL=entry-point-DNZW_leG.js.map
