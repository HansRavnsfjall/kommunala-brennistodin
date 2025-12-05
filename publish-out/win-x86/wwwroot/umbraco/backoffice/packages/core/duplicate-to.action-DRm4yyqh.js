import { U as a } from "./update-folder.action-COxnl6zu.js";
import { UmbEntityActionBase as o, UmbRequestReloadStructureForEntityEvent as s } from "@umbraco-cms/backoffice/entity-action";
import { umbOpenModal as r } from "@umbraco-cms/backoffice/modal";
import { createExtensionApiByAlias as u } from "@umbraco-cms/backoffice/extension-registry";
import { UMB_ACTION_EVENT_CONTEXT as l } from "@umbraco-cms/backoffice/action";
class w extends o {
  async execute() {
    if (!this.args.unique) throw new Error("Unique is not available");
    if (!this.args.entityType) throw new Error("Entity Type is not available");
    const t = (await r(this, a, {
      data: {
        unique: this.args.unique,
        entityType: this.args.entityType,
        treeAlias: this.args.meta.treeAlias,
        foldersOnly: this.args.meta.foldersOnly
      }
    })).destination.unique;
    if (t === void 0) throw new Error("Destination Unique is not available");
    const e = await u(
      this,
      this.args.meta.duplicateRepositoryAlias
    );
    if (!e) throw new Error("Duplicate repository is not available");
    const { error: n } = await e.requestDuplicateTo({
      unique: this.args.unique,
      destination: { unique: t }
    });
    if (n)
      throw n;
    this.#t();
  }
  async #t() {
    const i = await this.getContext(l);
    if (!i) throw new Error("Action event context is not available");
    const t = new s({
      unique: this.args.unique,
      entityType: this.args.entityType
    });
    i.dispatchEvent(t);
  }
}
export {
  w as UmbDuplicateToEntityAction,
  w as api
};
//# sourceMappingURL=duplicate-to.action-DRm4yyqh.js.map
