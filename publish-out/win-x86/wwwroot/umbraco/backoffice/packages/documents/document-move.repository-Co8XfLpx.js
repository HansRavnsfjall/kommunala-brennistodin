import { U as r } from "./document-move.server.data-source-BWjAbqUF.js";
import { UMB_NOTIFICATION_CONTEXT as n } from "@umbraco-cms/backoffice/notification";
import { UmbRepositoryBase as s } from "@umbraco-cms/backoffice/repository";
class p extends s {
  #o = new r(this);
  async requestMoveTo(e) {
    const { error: o } = await this.#o.moveTo(e);
    if (!o) {
      const t = await this.getContext(n);
      if (!t)
        throw new Error("Notification context not found");
      const i = { data: { message: "Moved" } };
      t.peek("positive", i);
    }
    return { error: o };
  }
}
export {
  p as UmbMoveDocumentRepository,
  p as api
};
//# sourceMappingURL=document-move.repository-Co8XfLpx.js.map
