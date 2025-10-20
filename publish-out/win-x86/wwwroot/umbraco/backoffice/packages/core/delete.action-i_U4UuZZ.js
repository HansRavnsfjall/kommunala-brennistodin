import { U as o } from "./entity-action-base-C1FfYSbT.js";
import { U as a } from "./request-reload-structure-for-entity.event-CHtdC9hO.js";
import { createExtensionApiByAlias as n } from "@umbraco-cms/backoffice/extension-registry";
import { umbConfirmModal as r } from "@umbraco-cms/backoffice/modal";
import { UMB_ACTION_EVENT_CONTEXT as s } from "@umbraco-cms/backoffice/action";
import { UmbLocalizationController as m } from "@umbraco-cms/backoffice/localization-api";
class g extends o {
  // TODO: make base type for item and detail models
  #t = new m(this);
  async execute() {
    if (!this.args.unique) throw new Error("Cannot delete an item without a unique identifier.");
    const t = await this.#e();
    await this._confirmDelete(t);
    const e = await n(
      this,
      this.args.meta.detailRepositoryAlias
    ), { error: i } = await e.delete(this.args.unique);
    if (i)
      throw i;
    await this.#i();
  }
  async _confirmDelete(t) {
    const e = this.args.meta.confirm?.headline ?? "#actions_delete", i = this.args.meta.confirm?.message ?? "#defaultdialogs_confirmdelete";
    await r(this, {
      headline: e,
      content: this.#t.string(i, t.name),
      color: "danger",
      confirmLabel: "#general_delete"
    });
  }
  async #e() {
    if (!this.args.unique) throw new Error("Cannot delete an item without a unique identifier.");
    const t = await n(
      this,
      this.args.meta.itemRepositoryAlias
    ), { data: e } = await t.requestItems([this.args.unique]), i = e?.[0];
    if (!i) throw new Error("Item not found.");
    return i;
  }
  async #i() {
    const t = await this.getContext(s);
    if (!t)
      throw new Error("Action event context not found.");
    const e = new a({
      unique: this.args.unique,
      entityType: this.args.entityType
    });
    t.dispatchEvent(e);
  }
}
export {
  g as UmbDeleteEntityAction,
  g as default
};
//# sourceMappingURL=delete.action-i_U4UuZZ.js.map
