import { U as r } from "./media-move.server.data-source-dy-MgWep.js";
import { UMB_NOTIFICATION_CONTEXT as a } from "@umbraco-cms/backoffice/notification";
import { UmbRepositoryBase as s } from "@umbraco-cms/backoffice/repository";
class p extends s {
  #o = new r(this);
  async requestMoveTo(e) {
    const { error: o } = await this.#o.moveTo(e);
    if (!o) {
      const t = await this.getContext(a);
      if (!t)
        throw new Error("Notification context not found.");
      const i = { data: { message: "Moved" } };
      t.peek("positive", i);
    }
    return { error: o };
  }
}
export {
  p as UmbMoveMediaRepository,
  p as api
};
//# sourceMappingURL=media-move.repository-CVbQGMH6.js.map
