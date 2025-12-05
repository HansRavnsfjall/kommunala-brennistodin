import "@umbraco-cms/backoffice/id";
import "@umbraco-cms/backoffice/external/backend-api";
import "@umbraco-cms/backoffice/resources";
import "./paths-pWW_vsmu.js";
import "@umbraco-cms/backoffice/repository";
import "@umbraco-cms/backoffice/entity-item";
import { UmbDictionaryExportRepository as e } from "./dictionary-export.repository-C3VvjbdC.js";
import { U as a } from "./export-dictionary-modal.token-Cok5RBD9.js";
import { blobDownload as n } from "@umbraco-cms/backoffice/utils";
import { UmbEntityActionBase as s } from "@umbraco-cms/backoffice/entity-action";
import { umbOpenModal as m } from "@umbraco-cms/backoffice/modal";
class E extends s {
  async execute() {
    if (!this.args.unique) throw new Error("Unique is not available");
    const i = await m(this, a, { data: { unique: this.args.unique } }), o = new e(this), { data: r, error: t } = await o.requestExport(this.args.unique, i.includeChildren);
    if (t)
      throw t;
    n(r, `${this.args.unique}.udt`, "text/xml");
  }
}
export {
  E as UmbExportDictionaryEntityAction,
  E as default
};
//# sourceMappingURL=export.action-d5d9hKMQ.js.map
