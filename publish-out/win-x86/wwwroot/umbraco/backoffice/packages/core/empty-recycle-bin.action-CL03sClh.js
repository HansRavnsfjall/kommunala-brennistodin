import { umbConfirmModal as o } from "@umbraco-cms/backoffice/modal";
import { createExtensionApiByAlias as r } from "@umbraco-cms/backoffice/extension-registry";
import { UMB_ACTION_EVENT_CONTEXT as a } from "@umbraco-cms/backoffice/action";
import { UmbEntityActionBase as s, UmbRequestReloadChildrenOfEntityEvent as c } from "@umbraco-cms/backoffice/entity-action";
class E extends s {
  /**
   * Executes the action.
   * @memberof UmbEmptyRecycleBinEntityAction
   */
  async execute() {
    await o(this._host, {
      headline: "Empty Recycle Bin",
      content: "When items are deleted from the recycle bin, they will be gone forever.",
      color: "danger",
      confirmLabel: "Empty Recycle Bin"
    });
    const i = await r(
      this,
      this.args.meta.recycleBinRepositoryAlias
    ), { error: e } = await i.requestEmpty();
    if (e)
      throw e;
    const t = await this.getContext(a);
    if (!t) throw new Error("Action event context is not available");
    const n = new c({
      unique: this.args.unique,
      entityType: this.args.entityType
    });
    t.dispatchEvent(n);
  }
}
export {
  E as UmbEmptyRecycleBinEntityAction,
  E as api
};
//# sourceMappingURL=empty-recycle-bin.action-CL03sClh.js.map
