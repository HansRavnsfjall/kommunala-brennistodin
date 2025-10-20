import { U as e } from "./bulk-delete-with-relation-modal.token-ClxjRYy9.js";
import { UmbDeleteEntityBulkAction as t } from "@umbraco-cms/backoffice/entity-bulk-action";
import { umbOpenModal as i } from "@umbraco-cms/backoffice/modal";
class m extends t {
  async _confirmDelete() {
    await i(this, e, {
      data: {
        uniques: this.selection,
        itemRepositoryAlias: this.args.meta.itemRepositoryAlias,
        referenceRepositoryAlias: this.args.meta.referenceRepositoryAlias
      }
    });
  }
}
export {
  m as UmbBulkDeleteWithRelationEntityAction,
  m as api
};
//# sourceMappingURL=bulk-delete-with-relation.action-DFKq3vOv.js.map
