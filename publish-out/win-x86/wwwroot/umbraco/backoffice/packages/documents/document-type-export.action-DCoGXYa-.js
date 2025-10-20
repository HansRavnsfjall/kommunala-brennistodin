import { UmbExportDocumentTypeRepository as e } from "./document-type-export.repository-DE_VGxKN.js";
import { blobDownload as r } from "@umbraco-cms/backoffice/utils";
import { UmbEntityActionBase as i } from "@umbraco-cms/backoffice/entity-action";
class m extends i {
  #t = new e(this);
  async execute() {
    if (!this.args.unique) throw new Error("Unique is not available");
    const { data: o, error: t } = await this.#t.requestExport(this.args.unique);
    if (t)
      throw t;
    r(o, `${this.args.unique}.udt`, "text/xml");
  }
}
export {
  m as UmbExportDocumentTypeEntityAction,
  m as default
};
//# sourceMappingURL=document-type-export.action-DCoGXYa-.js.map
