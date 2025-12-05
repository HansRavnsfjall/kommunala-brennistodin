import { U as r } from "./trash.event-D1yYlRYJ.js";
import "@umbraco-cms/backoffice/extension-registry";
import "@umbraco-cms/backoffice/modal";
import { UMB_ACTION_EVENT_CONTEXT as s } from "@umbraco-cms/backoffice/action";
import "@umbraco-cms/backoffice/entity-action";
import "@umbraco-cms/backoffice/localization-api";
import { UmbDefaultTreeItemContext as n } from "@umbraco-cms/backoffice/tree";
import { debounce as o } from "@umbraco-cms/backoffice/utils";
class f extends n {
  #t;
  constructor(e) {
    super(e), this.consumeContext(s, (t) => {
      this.#i(), this.#t = t, this.#t?.addEventListener(r.TYPE, this.#e);
    });
  }
  #r = o(() => this.loadChildren(), 100);
  #e = (e) => {
    const t = e.getEntityType();
    if (!t) throw new Error("Entity type is required");
    const i = this.manifest?.meta.supportedEntityTypes;
    if (!i)
      throw new Error("Entity types are missing from the manifest (manifest.meta.supportedEntityTypes).");
    i.includes(t) && this.#r();
  };
  #i = () => {
    this.#t?.removeEventListener(r.TYPE, this.#e);
  };
  destroy() {
    this.#i(), super.destroy();
  }
}
export {
  f as UmbRecycleBinTreeItemContext,
  f as api
};
//# sourceMappingURL=recycle-bin-tree-item.context-Az32iBqG.js.map
