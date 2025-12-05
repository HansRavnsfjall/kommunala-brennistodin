import { UmbDocumentItemRepository as r } from "./document-item.repository-C0SbAo-7.js";
import "@umbraco-cms/backoffice/external/backend-api";
import "@umbraco-cms/backoffice/class-api";
import "@umbraco-cms/backoffice/observable-api";
import "@umbraco-cms/backoffice/variant";
import { m as n } from "./manifests-BfVrApfB.js";
import { umbOpenModal as m } from "@umbraco-cms/backoffice/modal";
import { UmbEntityActionBase as s } from "@umbraco-cms/backoffice/entity-action";
class q extends s {
  constructor(t, e) {
    super(t, e);
  }
  async execute() {
    let t = null;
    if (this.args.unique) {
      const e = new r(this._host), { data: o, error: i } = await e.requestItems([this.args.unique]);
      if (i || !o) throw new Error("Failed to load document item");
      t = o[0];
    }
    await m(this, n, {
      data: {
        parent: { unique: this.args.unique, entityType: this.args.entityType },
        documentType: t ? { unique: t.documentType.unique } : null
      }
    });
  }
}
export {
  q as UmbCreateDocumentEntityAction,
  q as default
};
//# sourceMappingURL=create.action-B1zu-QpD.js.map
