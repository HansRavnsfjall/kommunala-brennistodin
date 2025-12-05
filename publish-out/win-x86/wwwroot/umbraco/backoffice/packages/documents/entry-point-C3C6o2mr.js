import { d as c } from "./document-item.server.cache-_Im2jNgl.js";
import { UmbManagementApiItemDataCacheInvalidationManager as d } from "@umbraco-cms/backoffice/management-api";
class m extends d {
  constructor(e) {
    super(e, {
      dataCache: c,
      /* The Document item model includes info about the Document Type.
      We need to invalidate the cache for both Document and DocumentType events. */
      eventSources: ["Umbraco:CMS:Document", "Umbraco:CMS:DocumentType"],
      eventTypes: ["Updated", "Deleted", "Trashed"]
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
const h = (n) => {
  o = new m(n);
}, u = () => {
  o?.destroy();
};
export {
  h as onInit,
  u as onUnload
};
//# sourceMappingURL=entry-point-C3C6o2mr.js.map
