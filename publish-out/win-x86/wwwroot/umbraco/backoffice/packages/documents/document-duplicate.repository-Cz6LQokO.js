import { U as a } from "./document-duplicate.server.data-source-Dk_k0JV5.js";
import { UMB_NOTIFICATION_CONTEXT as r } from "@umbraco-cms/backoffice/notification";
import { UmbRepositoryBase as n } from "@umbraco-cms/backoffice/repository";
class m extends n {
  #t = new a(this);
  async requestDuplicate(o) {
    const { error: t } = await this.#t.duplicate(o);
    if (!t) {
      const e = await this.getContext(r);
      if (!e)
        throw new Error("Notification context not found");
      const i = { data: { message: "Duplicated" } };
      e.peek("positive", i);
    }
    return { error: t };
  }
}
export {
  m as UmbDuplicateDocumentRepository,
  m as api
};
//# sourceMappingURL=document-duplicate.repository-Cz6LQokO.js.map
