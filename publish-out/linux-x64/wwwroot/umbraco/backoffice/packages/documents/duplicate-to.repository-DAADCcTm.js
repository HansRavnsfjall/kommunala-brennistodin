import { U as s } from "./document-duplicate.server.data-source-Dk_k0JV5.js";
import { UmbRepositoryBase as c } from "@umbraco-cms/backoffice/repository";
import { UMB_NOTIFICATION_CONTEXT as u } from "@umbraco-cms/backoffice/notification";
class d extends c {
  #e = new s(this);
  async requestBulkDuplicateTo(e) {
    let t = 0;
    const o = await this.getContext(u);
    for (const i of e.uniques) {
      const { error: n } = await this.#e.duplicate({
        unique: i,
        destination: e.destination,
        relateToOriginal: e.relateToOriginal,
        includeDescendants: e.includeDescendants
      });
      if (n) {
        const a = { data: { message: n.message } };
        o?.peek("danger", a);
      } else
        t++;
    }
    if (t > 0) {
      const i = { data: { message: `Duplicated ${t} ${t === 1 ? "document" : "documents"}` } };
      o?.peek("positive", i);
    }
    return {};
  }
}
export {
  d as UmbBulkDuplicateToDocumentRepository,
  d as api
};
//# sourceMappingURL=duplicate-to.repository-DAADCcTm.js.map
