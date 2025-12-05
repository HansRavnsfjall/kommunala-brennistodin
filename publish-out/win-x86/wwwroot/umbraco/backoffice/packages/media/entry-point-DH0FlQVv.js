import { M as n } from "./input-upload-field.element-DEgpG3Zz.js";
import { UmbManagementApiItemDataCacheInvalidationManager as o } from "@umbraco-cms/backoffice/management-api";
class s extends o {
  constructor(e) {
    super(e, {
      dataCache: n,
      /* The Media item model includes info about the Media Type.
      We need to invalidate the cache for both Media and MediaType events. */
      eventSources: ["Umbraco:CMS:Media", "Umbraco:CMS:MediaType"],
      eventTypes: ["Updated", "Deleted", "Trashed"]
    });
  }
  _onServerEvent(e) {
    e.eventSource === "Umbraco:CMS:MediaType" ? this.#a(e) : this.#e(e);
  }
  #e(e) {
    const t = e.key;
    this._dataCache.delete(t);
  }
  #a(e) {
    const t = e.key;
    this._dataCache.getAll().filter((a) => a.mediaType.id === t).map((a) => a.id).forEach((a) => this._dataCache.delete(a));
  }
}
let i;
const h = (d) => {
  i = new s(d);
}, M = () => {
  i?.destroy();
};
export {
  h as onInit,
  M as onUnload
};
//# sourceMappingURL=entry-point-DH0FlQVv.js.map
