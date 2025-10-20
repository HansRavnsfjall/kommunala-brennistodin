import { q as r } from "./constants-DE93IEgK.js";
import { UmbEntityCreateOptionActionBase as n } from "@umbraco-cms/backoffice/entity-create-option-action";
class s extends n {
  async getHref() {
    const t = this.args.entityType;
    if (!t) throw new Error("Entity type is required to create a document type");
    const e = this.args.unique ?? null;
    return r.generateAbsolute({
      parentEntityType: t,
      parentUnique: e
    });
  }
}
export {
  s as UmbDefaultDataTypeCreateOptionAction,
  s as api
};
//# sourceMappingURL=default-data-type-create-option-action-CzOBTsaA.js.map
