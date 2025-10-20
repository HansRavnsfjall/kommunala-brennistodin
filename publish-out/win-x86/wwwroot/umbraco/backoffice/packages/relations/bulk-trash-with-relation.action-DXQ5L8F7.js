import { U as i } from "./bulk-trash-with-relation-modal.token-BtR7225U.js";
import { umbOpenModal as t } from "@umbraco-cms/backoffice/modal";
import { UmbTrashEntityBulkAction as s } from "@umbraco-cms/backoffice/recycle-bin";
class m extends s {
  async _confirmTrash() {
    await t(this, i, {
      data: {
        uniques: this.selection,
        itemRepositoryAlias: this.args.meta.itemRepositoryAlias,
        referenceRepositoryAlias: this.args.meta.referenceRepositoryAlias
      }
    });
  }
}
export {
  m as UmbBulkTrashWithRelationEntityAction,
  m as api
};
//# sourceMappingURL=bulk-trash-with-relation.action-DXQ5L8F7.js.map
