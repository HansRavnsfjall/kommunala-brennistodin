import { U as o } from "./restore-from-recycle-bin-modal.token-Dfw4-Cxp.js";
import { umbOpenModal as r } from "@umbraco-cms/backoffice/modal";
import { UmbEntityActionBase as s, UmbRequestReloadStructureForEntityEvent as a, UmbRequestReloadChildrenOfEntityEvent as u } from "@umbraco-cms/backoffice/entity-action";
import { UMB_ACTION_EVENT_CONTEXT as c } from "@umbraco-cms/backoffice/action";
class d extends s {
  /**
   * Executes the action.
   * @memberof UmbRestoreFromRecycleBinEntityAction
   */
  async execute() {
    if (!this.args.unique) throw new Error("Cannot restore an item without a unique identifier.");
    const { destination: t } = await r(this, o, {
      data: {
        unique: this.args.unique,
        entityType: this.args.entityType,
        recycleBinRepositoryAlias: this.args.meta.recycleBinRepositoryAlias,
        itemRepositoryAlias: this.args.meta.itemRepositoryAlias,
        pickerModal: this.args.meta.pickerModal
      }
    });
    if (!t) throw new Error("Cannot reload the structure without a destination.");
    const e = await this.getContext(c);
    if (!e)
      throw new Error("Event context not found.");
    const i = new a({
      unique: this.args.unique,
      entityType: this.args.entityType
    });
    e.dispatchEvent(i);
    const n = new u({
      unique: t.unique,
      entityType: t.entityType
    });
    e.dispatchEvent(n);
  }
}
export {
  d as UmbRestoreFromRecycleBinEntityAction,
  d as api
};
//# sourceMappingURL=restore-from-recycle-bin.action-wPNxL7Dj.js.map
