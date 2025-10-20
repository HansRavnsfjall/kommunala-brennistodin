import "@umbraco-cms/backoffice/id";
import "@umbraco-cms/backoffice/external/backend-api";
import "@umbraco-cms/backoffice/resources";
import { I as a, r as o } from "./input-upload-field.element-BKvVffkE.js";
import "@umbraco-cms/backoffice/repository";
import { UmbEntityActionBase as s } from "@umbraco-cms/backoffice/entity-action";
import { umbOpenModal as m } from "@umbraco-cms/backoffice/modal";
class q extends s {
  constructor(t, e) {
    super(t, e);
  }
  async execute() {
    let t = null;
    if (this.args.unique) {
      const e = new a(this._host), { data: i, error: r } = await e.requestItems([this.args.unique]);
      if (r || !i) throw new Error("Failed to load media item");
      t = i[0];
    }
    await m(this, o, {
      data: {
        parent: { unique: this.args.unique, entityType: this.args.entityType },
        mediaType: t ? { unique: t.mediaType.unique } : null
      }
    });
  }
}
export {
  q as UmbCreateMediaEntityAction,
  q as api
};
//# sourceMappingURL=create.action-hGFs4hho.js.map
