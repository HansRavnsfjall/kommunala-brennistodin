import "@umbraco-cms/backoffice/id";
import "@umbraco-cms/backoffice/external/backend-api";
import "@umbraco-cms/backoffice/resources";
import "@umbraco-cms/backoffice/class-api";
import "@umbraco-cms/backoffice/media-type";
import "@umbraco-cms/backoffice/utils";
import { J as o, t as a } from "./input-upload-field.element-DEgpG3Zz.js";
import "@umbraco-cms/backoffice/imaging";
import "@umbraco-cms/backoffice/repository";
import { umbOpenModal as m } from "@umbraco-cms/backoffice/modal";
import { UmbEntityActionBase as s } from "@umbraco-cms/backoffice/entity-action";
class f extends s {
  constructor(t, i) {
    super(t, i);
  }
  async execute() {
    let t = null;
    if (this.args.unique) {
      const i = new o(this._host), { data: e, error: r } = await i.requestItems([this.args.unique]);
      if (r || !e) throw new Error("Failed to load media item");
      t = e[0];
    }
    await m(this, a, {
      data: {
        parent: { unique: this.args.unique, entityType: this.args.entityType },
        mediaType: t ? { unique: t.mediaType.unique } : null
      }
    });
  }
}
export {
  f as UmbCreateMediaEntityAction,
  f as api
};
//# sourceMappingURL=create.action-nwpiLkbl.js.map
