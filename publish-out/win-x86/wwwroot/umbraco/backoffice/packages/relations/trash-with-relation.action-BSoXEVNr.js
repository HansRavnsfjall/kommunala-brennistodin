import { U as i } from "./trash-with-relation-modal.token-CJFEoSES.js";
import { umbOpenModal as e } from "@umbraco-cms/backoffice/modal";
import { UmbTrashEntityAction as a } from "@umbraco-cms/backoffice/recycle-bin";
class m extends a {
  async _confirmTrash(t) {
    await e(this, i, {
      data: {
        unique: t.unique,
        entityType: t.entityType,
        itemRepositoryAlias: this.args.meta.itemRepositoryAlias,
        referenceRepositoryAlias: this.args.meta.referenceRepositoryAlias
      }
    });
  }
}
export {
  m as UmbTrashWithRelationEntityAction,
  m as api
};
//# sourceMappingURL=trash-with-relation.action-BSoXEVNr.js.map
