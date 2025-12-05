import { U as r } from "./media-recycle-bin.server.data-source-RYxMu8et.js";
import { UmbRepositoryBase as a } from "@umbraco-cms/backoffice/repository";
import { UMB_NOTIFICATION_CONTEXT as n } from "@umbraco-cms/backoffice/notification";
import { UmbDeprecation as c } from "@umbraco-cms/backoffice/utils";
class l extends a {
  #e;
  #t = new r(this);
  constructor(t) {
    super(t), new c({
      removeInVersion: "17.0.0",
      deprecated: "UmbBulkTrashDocumentRepository",
      solution: "Call trash method on UmbMediaRecycleBinRepository instead."
    }).warn(), this.consumeContext(n, (e) => {
      this.#e = e;
    });
  }
  async requestBulkTrash(t) {
    let e = 0;
    for (const o of t.uniques) {
      const { error: i } = await this.#t.trash({ unique: o });
      if (i) {
        const s = { data: { message: i.message } };
        this.#e?.peek("danger", s);
      } else
        e++;
    }
    if (e > 0) {
      const o = { data: { message: `Trashed ${e} media ${e === 1 ? "item" : "items"}` } };
      this.#e?.peek("positive", o);
    }
    return {};
  }
}
export {
  l as UmbBulkTrashMediaRepository,
  l as api
};
//# sourceMappingURL=trash.repository-DjBnokmZ.js.map
