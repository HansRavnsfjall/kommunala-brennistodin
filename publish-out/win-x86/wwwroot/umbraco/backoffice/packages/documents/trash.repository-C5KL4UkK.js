import { U as n } from "./document-recycle-bin.server.data-source--ty-V6sV.js";
import { UmbRepositoryBase as i } from "@umbraco-cms/backoffice/repository";
import { UMB_NOTIFICATION_CONTEXT as a } from "@umbraco-cms/backoffice/notification";
import { UmbDeprecation as c } from "@umbraco-cms/backoffice/utils";
class d extends i {
  #e;
  #t = new n(this);
  constructor(t) {
    super(t), new c({
      removeInVersion: "17.0.0",
      deprecated: "UmbBulkTrashDocumentRepository",
      solution: "Call trash method on UmbDocumentRecycleBinRepository instead."
    }).warn(), this.consumeContext(a, (e) => {
      this.#e = e;
    });
  }
  async requestBulkTrash(t) {
    let e = 0;
    for (const o of t.uniques) {
      const { error: s } = await this.#t.trash({ unique: o });
      if (s) {
        const r = { data: { message: s.message } };
        this.#e?.peek("danger", r);
      } else
        e++;
    }
    if (e > 0) {
      const o = { data: { message: `Trashed ${e} ${e === 1 ? "document" : "documents"}` } };
      this.#e?.peek("positive", o);
    }
    return {};
  }
}
export {
  d as UmbBulkTrashDocumentRepository,
  d as api
};
//# sourceMappingURL=trash.repository-C5KL4UkK.js.map
