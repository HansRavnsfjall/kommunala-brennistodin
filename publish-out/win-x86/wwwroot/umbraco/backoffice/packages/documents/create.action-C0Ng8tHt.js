import { UmbDocumentItemRepository as r } from "./document-item.repository-Xg9sohq8.js";
import "@umbraco-cms/backoffice/external/backend-api";
import "@umbraco-cms/backoffice/class-api";
import "@umbraco-cms/backoffice/observable-api";
import "@umbraco-cms/backoffice/variant";
import { m as n } from "./manifests-BP7S9LPy.js";
import { UmbEntityActionBase as m } from "@umbraco-cms/backoffice/entity-action";
import { umbOpenModal as s } from "@umbraco-cms/backoffice/modal";
class q extends m {
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
    await s(this, n, {
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
//# sourceMappingURL=create.action-C0Ng8tHt.js.map
