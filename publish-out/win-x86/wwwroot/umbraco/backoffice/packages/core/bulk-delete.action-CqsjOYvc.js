import { U as m } from "./entity-bulk-action-base-BJMTAmYH.js";
import { createExtensionApiByAlias as c } from "@umbraco-cms/backoffice/extension-registry";
import { umbConfirmModal as h } from "@umbraco-cms/backoffice/modal";
import { UMB_ACTION_EVENT_CONTEXT as d } from "@umbraco-cms/backoffice/action";
import { UmbRequestReloadChildrenOfEntityEvent as u, UmbRequestReloadStructureForEntityEvent as f, UmbEntityDeletedEvent as p } from "@umbraco-cms/backoffice/entity-action";
import { UMB_NOTIFICATION_CONTEXT as y } from "@umbraco-cms/backoffice/notification";
import { UmbLocalizationController as E } from "@umbraco-cms/backoffice/localization-api";
import { UMB_ENTITY_CONTEXT as g } from "@umbraco-cms/backoffice/entity";
class B extends m {
  #e = new E(this);
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
    await this.#i(), await this._confirmDelete(this.#t), await this.#s(this.selection);
  }
  async _confirmDelete(t) {
    await h(this._host, {
      headline: "#actions_delete",
      content: this.#e.string("#defaultdialogs_confirmBulkDelete", t.length),
      color: "danger",
      confirmLabel: "#actions_delete"
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
      this.args.meta.detailRepositoryAlias
    ), s = await this.getContext(y), n = [];
    for (const o of t) {
      const { error: a } = await i.delete(o);
      if (a) {
        const e = { data: { message: a.message } };
        s?.peek("danger", e);
      } else
        n.push(o);
    }
    if (n.length > 0) {
      const o = {
        data: { message: `Deleted ${n.length} ${n.length === 1 ? "item" : "items"}` }
      };
      s?.peek("positive", o);
    }
    await this.#n(n);
  }
  async #n(t) {
    const i = await this.getContext(g);
    if (!i) throw new Error("Entity Context is not available");
    const s = await this.getContext(d);
    if (!s) throw new Error("Event Context is not available");
    const n = i.getEntityType(), o = i.getUnique();
    if (n && o !== void 0) {
      const e = { entityType: n, unique: o }, r = new u(e);
      s.dispatchEvent(r);
      const l = new f(e);
      s.dispatchEvent(l);
    }
    this.#t.filter((e) => t.includes(e.unique)).forEach((e) => {
      const r = new p({
        unique: e.unique,
        entityType: e.entityType
      });
      s.dispatchEvent(r);
    });
  }
}
export {
  B as UmbDeleteEntityBulkAction,
  B as api
};
//# sourceMappingURL=bulk-delete.action-CqsjOYvc.js.map
