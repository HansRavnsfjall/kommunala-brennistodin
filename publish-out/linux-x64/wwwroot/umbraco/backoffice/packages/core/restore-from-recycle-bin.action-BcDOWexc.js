import { U as n } from "./restore-from-recycle-bin-modal.token-Dfw4-Cxp.js";
import { umbOpenModal as o } from "@umbraco-cms/backoffice/modal";
import { UmbEntityActionBase as r, UmbRequestReloadStructureForEntityEvent as s } from "@umbraco-cms/backoffice/entity-action";
import { UMB_ACTION_EVENT_CONTEXT as a } from "@umbraco-cms/backoffice/action";
class h extends r {
  /**
   * Executes the action.
   * @memberof UmbRestoreFromRecycleBinEntityAction
   */
  async execute() {
    if (!this.args.unique) throw new Error("Cannot restore an item without a unique identifier.");
    const { destination: t } = await o(this, n, {
      data: {
        unique: this.args.unique,
        entityType: this.args.entityType,
        recycleBinRepositoryAlias: this.args.meta.recycleBinRepositoryAlias,
        itemRepositoryAlias: this.args.meta.itemRepositoryAlias,
        pickerModal: this.args.meta.pickerModal
      }
    });
    if (!t) throw new Error("Cannot reload the structure without a destination.");
    const e = await this.getContext(a);
    if (!e)
      throw new Error("Event context not found.");
    const i = new s({
      unique: this.args.unique,
      entityType: this.args.entityType
    });
    e.dispatchEvent(i), console.log(t.unique, t.entityType);
  }
}
export {
  h as UmbRestoreFromRecycleBinEntityAction,
  h as api
};
//# sourceMappingURL=restore-from-recycle-bin.action-BcDOWexc.js.map
