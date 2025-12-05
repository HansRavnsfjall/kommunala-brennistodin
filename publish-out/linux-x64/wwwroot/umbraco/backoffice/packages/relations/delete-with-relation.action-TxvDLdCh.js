import { U as e } from "./delete-with-relation-modal.token-BiSZyd7F.js";
import { umbOpenModal as t } from "@umbraco-cms/backoffice/modal";
import { UmbDeleteEntityAction as i } from "@umbraco-cms/backoffice/entity-action";
class n extends i {
  async _confirmDelete() {
    if (!this.args.unique) throw new Error("Cannot delete an item without a unique identifier.");
    await t(this, e, {
      data: {
        unique: this.args.unique,
        entityType: this.args.entityType,
        itemRepositoryAlias: this.args.meta.itemRepositoryAlias,
        referenceRepositoryAlias: this.args.meta.referenceRepositoryAlias
      }
    });
  }
}
export {
  n as UmbDeleteWithRelationEntityAction,
  n as api
};
//# sourceMappingURL=delete-with-relation.action-TxvDLdCh.js.map
