import { UmbExportMediaTypeRepository as i } from "./media-type-export.repository-BcY1qfkh.js";
import { blobDownload as o } from "@umbraco-cms/backoffice/utils";
import { UmbEntityActionBase as r } from "@umbraco-cms/backoffice/entity-action";
class u extends r {
  #t = new i(this);
  async execute() {
    if (!this.args.unique) throw new Error("Unique is not available");
    const { data: e, error: t } = await this.#t.requestExport(this.args.unique);
    if (t)
      throw t;
    o(e, `${this.args.unique}.udt`, "text/xml");
  }
}
export {
  u as UmbExportMediaTypeEntityAction,
  u as default
};
//# sourceMappingURL=media-type-export.action-BhRRJkTo.js.map
