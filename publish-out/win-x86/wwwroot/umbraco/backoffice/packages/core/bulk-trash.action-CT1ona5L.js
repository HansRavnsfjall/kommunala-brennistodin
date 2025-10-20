import { U as m } from "./trash.event-D1yYlRYJ.js";
import { createExtensionApiByAlias as c } from "@umbraco-cms/backoffice/extension-registry";
import { umbConfirmModal as l } from "@umbraco-cms/backoffice/modal";
import { UMB_ACTION_EVENT_CONTEXT as u } from "@umbraco-cms/backoffice/action";
import { UmbRequestReloadChildrenOfEntityEvent as d, UmbRequestReloadStructureForEntityEvent as f } from "@umbraco-cms/backoffice/entity-action";
import { UmbLocalizationController as p } from "@umbraco-cms/backoffice/localization-api";
import { UmbEntityBulkActionBase as y } from "@umbraco-cms/backoffice/entity-bulk-action";
import { UMB_NOTIFICATION_CONTEXT as E } from "@umbraco-cms/backoffice/notification";
import { UMB_ENTITY_CONTEXT as T } from "@umbraco-cms/backoffice/entity";
class I extends y {
  constructor() {
    super(...arguments), this.#t = new p(this), this._items = [];
  }
  #t;
  async execute() {
    if (this.selection?.length === 0)
      throw new Error("No items selected.");
    await this.#e(), await this._confirmTrash(this._items), await this.#i(this.selection);
  }
  async _confirmTrash(n) {
    await l(this._host, {
      headline: "#actions_trash",
      content: this.#t.string("#defaultdialogs_confirmBulkTrash", n.length),
      color: "danger",
      confirmLabel: "#actions_trash"
    });
  }
  async #e() {
    const n = await c(
      this,
      this.args.meta.itemRepositoryAlias
    ), { data: e } = await n.requestItems(this.selection);
    this._items = e ?? [];
  }
  async #i(n) {
    const e = await c(
      this,
      this.args.meta.recycleBinRepositoryAlias
    ), i = await this.getContext(E), s = [];
    for (const o of n) {
      const { error: a } = await e.requestTrash({ unique: o });
      if (a) {
        const t = { data: { message: a.message } };
        i?.peek("danger", t);
      } else
        s.push(o);
    }
    if (s.length > 0) {
      const o = {
        data: { message: `Trashed ${s.length} ${s.length === 1 ? "item" : "items"}` }
      };
      i?.peek("positive", o);
    }
    await this.#s(s);
  }
  async #s(n) {
    const e = await this.getContext(T);
    if (!e) throw new Error("Entity Context is not available");
    const i = await this.getContext(u);
    if (!i) throw new Error("Event Context is not available");
    const s = e.getEntityType(), o = e.getUnique();
    if (s && o !== void 0) {
      const t = { entityType: s, unique: o }, r = new d(t);
      i.dispatchEvent(r);
      const h = new f(t);
      i.dispatchEvent(h);
    }
    this._items.filter((t) => n.includes(t.unique)).forEach((t) => {
      const r = new m({
        unique: t.unique,
        entityType: t.entityType
      });
      i.dispatchEvent(r);
    });
  }
}
export {
  I as UmbTrashEntityBulkAction,
  I as api
};
//# sourceMappingURL=bulk-trash.action-CT1ona5L.js.map
