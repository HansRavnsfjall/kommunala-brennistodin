import { U as r } from "./document-move.server.data-source-BWjAbqUF.js";
import { UmbRepositoryBase as c } from "@umbraco-cms/backoffice/repository";
import { UMB_NOTIFICATION_CONTEXT as m } from "@umbraco-cms/backoffice/notification";
class v extends c {
  #e = new r(this);
  async requestBulkMoveTo(t) {
    const i = await this.getContext(m);
    let e = 0;
    const s = t.destination;
    for (const o of t.uniques) {
      const { error: n } = await this.#e.moveTo({ unique: o, destination: s });
      if (n) {
        const a = { data: { message: n.message } };
        i?.peek("danger", a);
      } else
        e++;
    }
    if (e > 0) {
      const o = { data: { message: `Moved ${e} ${e === 1 ? "document" : "documents"}` } };
      i?.peek("positive", o);
    }
    return {};
  }
}
export {
  v as UmbBulkMoveToDocumentRepository,
  v as api
};
//# sourceMappingURL=move-to.repository-CHGd2CBT.js.map
