import { UmbEntityActionBase as n, UmbRequestReloadChildrenOfEntityEvent as i } from "@umbraco-cms/backoffice/entity-action";
import { UMB_ACTION_EVENT_CONTEXT as o } from "@umbraco-cms/backoffice/action";
class c extends n {
  constructor(t, e) {
    super(t, e);
  }
  async execute() {
    const t = await this.getContext(o);
    if (!t) throw new Error("Event context is not available");
    t.dispatchEvent(
      new i({
        unique: this.args.unique,
        entityType: this.args.entityType
      })
    );
  }
}
export {
  c as UmbReloadTreeItemChildrenEntityAction,
  c as api
};
//# sourceMappingURL=reload-tree-item-children.action-C0Xp9rFl.js.map
