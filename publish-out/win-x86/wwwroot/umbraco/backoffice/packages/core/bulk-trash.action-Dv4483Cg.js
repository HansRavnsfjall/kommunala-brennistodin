import { U as m } from "./trash.event-D1yYlRYJ.js";
import { createExtensionApiByAlias as c } from "@umbraco-cms/backoffice/extension-registry";
import { umbConfirmModal as l } from "@umbraco-cms/backoffice/modal";
import { UMB_ACTION_EVENT_CONTEXT as u } from "@umbraco-cms/backoffice/action";
import { UmbRequestReloadChildrenOfEntityEvent as d, UmbRequestReloadStructureForEntityEvent as f } from "@umbraco-cms/backoffice/entity-action";
import { UmbLocalizationController as y } from "@umbraco-cms/backoffice/localization-api";
import { UmbEntityBulkActionBase as p } from "@umbraco-cms/backoffice/entity-bulk-action";
import { UMB_NOTIFICATION_CONTEXT as E } from "@umbraco-cms/backoffice/notification";
import { UMB_ENTITY_CONTEXT as T } from "@umbraco-cms/backoffice/entity";
class I extends p {
  #e = new y(this);
  #t = [];
  /**
   * @deprecated this has been turned into a private property and cannot be used from v.18. Will be removed in v.18
   */
  get _items() {
    return this.#t;
  }
  /**
   * @deprecated this has been turned into a private property and cannot be used from v.18. Will be removed in v.18
   */
  set _items(t) {
    this.#t = t;
  }
  async execute() {
    if (this.selection?.length === 0)
      throw new Error("No items selected.");
    await this.#i(), await this._confirmTrash(this.#t), await this.#s(this.selection);
  }
  async _confirmTrash(t) {
    await l(this._host, {
      headline: "#actions_trash",
      content: this.#e.string("#defaultdialogs_confirmBulkTrash", t.length),
      color: "danger",
      confirmLabel: "#actions_trash"
    });
  }
  async #i() {
    const t = await c(
      this,
      this.args.meta.itemRepositoryAlias
    ), { data: i } = await t.requestItems(this.selection);
    this.#t = i ?? [];
  }
  async #s(t) {
    const i = await c(
      this,
      this.args.meta.recycleBinRepositoryAlias
    ), s = await this.getContext(E), n = [];
    for (const o of t) {
      const { error: a } = await i.requestTrash({ unique: o });
      if (a) {
        const e = { data: { message: a.message } };
        s?.peek("danger", e);
      } else
        n.push(o);
    }
    if (n.length > 0) {
      const o = {
        data: { message: `Trashed ${n.length} ${n.length === 1 ? "item" : "items"}` }
      };
      s?.peek("positive", o);
    }
    await this.#n(n);
  }
  async #n(t) {
    const i = await this.getContext(T);
    if (!i) throw new Error("Entity Context is not available");
    const s = await this.getContext(u);
    if (!s) throw new Error("Event Context is not available");
    const n = i.getEntityType(), o = i.getUnique();
    if (n && o !== void 0) {
      const e = { entityType: n, unique: o }, r = new d(e);
      s.dispatchEvent(r);
      const h = new f(e);
      s.dispatchEvent(h);
    }
    this.#t.filter((e) => t.includes(e.unique)).forEach((e) => {
      const r = new m({
        unique: e.unique,
        entityType: e.entityType
      });
      s.dispatchEvent(r);
    });
  }
}
export {
  I as UmbTrashEntityBulkAction,
  I as api
};
//# sourceMappingURL=bulk-trash.action-Dv4483Cg.js.map
