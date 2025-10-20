import { U as m } from "./entity-bulk-action-base-BJMTAmYH.js";
import { createExtensionApiByAlias as c } from "@umbraco-cms/backoffice/extension-registry";
import { umbConfirmModal as h } from "@umbraco-cms/backoffice/modal";
import { UMB_ACTION_EVENT_CONTEXT as d } from "@umbraco-cms/backoffice/action";
import { UmbRequestReloadChildrenOfEntityEvent as u, UmbRequestReloadStructureForEntityEvent as f, UmbEntityDeletedEvent as p } from "@umbraco-cms/backoffice/entity-action";
import { UMB_NOTIFICATION_CONTEXT as y } from "@umbraco-cms/backoffice/notification";
import { UmbLocalizationController as E } from "@umbraco-cms/backoffice/localization-api";
import { UMB_ENTITY_CONTEXT as g } from "@umbraco-cms/backoffice/entity";
class B extends m {
  constructor() {
    super(...arguments), this.#t = new E(this), this._items = [];
  }
  #t;
  async execute() {
    if (this.selection?.length === 0)
      throw new Error("No items selected.");
    await this.#e(), await this._confirmDelete(this._items), await this.#i(this.selection);
  }
  async _confirmDelete(n) {
    await h(this._host, {
      headline: "#actions_delete",
      content: this.#t.string("#defaultdialogs_confirmBulkDelete", n.length),
      color: "danger",
      confirmLabel: "#actions_delete"
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
      this.args.meta.detailRepositoryAlias
    ), i = await this.getContext(y), s = [];
    for (const o of n) {
      const { error: a } = await e.delete(o);
      if (a) {
        const t = { data: { message: a.message } };
        i?.peek("danger", t);
      } else
        s.push(o);
    }
    if (s.length > 0) {
      const o = {
        data: { message: `Deleted ${s.length} ${s.length === 1 ? "item" : "items"}` }
      };
      i?.peek("positive", o);
    }
    await this.#s(s);
  }
  async #s(n) {
    const e = await this.getContext(g);
    if (!e) throw new Error("Entity Context is not available");
    const i = await this.getContext(d);
    if (!i) throw new Error("Event Context is not available");
    const s = e.getEntityType(), o = e.getUnique();
    if (s && o !== void 0) {
      const t = { entityType: s, unique: o }, r = new u(t);
      i.dispatchEvent(r);
      const l = new f(t);
      i.dispatchEvent(l);
    }
    this._items.filter((t) => n.includes(t.unique)).forEach((t) => {
      const r = new p({
        unique: t.unique,
        entityType: t.entityType
      });
      i.dispatchEvent(r);
    });
  }
}
export {
  B as UmbDeleteEntityBulkAction,
  B as api
};
//# sourceMappingURL=bulk-delete.action-ubNXswgd.js.map
