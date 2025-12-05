import { a as e } from "./update-folder.action-COxnl6zu.js";
import "./sort-children-of-modal.element-Cs83_Yer.js";
import { UmbEntityActionBase as i, UmbRequestReloadChildrenOfEntityEvent as o } from "@umbraco-cms/backoffice/entity-action";
import { umbOpenModal as s } from "@umbraco-cms/backoffice/modal";
import { UMB_ACTION_EVENT_CONTEXT as r } from "@umbraco-cms/backoffice/action";
class m extends i {
  async execute() {
    await s(this, this._getModalToken(), {
      data: {
        unique: this.args.unique,
        entityType: this.args.entityType,
        sortChildrenOfRepositoryAlias: this.args.meta.sortChildrenOfRepositoryAlias,
        treeRepositoryAlias: this.args.meta.treeRepositoryAlias
      }
    }).catch(() => {
    });
    const t = await this.getContext(r);
    if (!t) throw new Error("Event context is not available");
    t.dispatchEvent(
      new o({
        unique: this.args.unique,
        entityType: this.args.entityType
      })
    );
  }
  _getModalToken() {
    return e;
  }
}
export {
  m as UmbSortChildrenOfEntityAction,
  m as default
};
//# sourceMappingURL=sort-children-of.action-ibpnREXq.js.map
