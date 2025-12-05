import { U as r } from "./media-move.server.data-source-dy-MgWep.js";
import { UmbRepositoryBase as m } from "@umbraco-cms/backoffice/repository";
import { UMB_NOTIFICATION_CONTEXT as c } from "@umbraco-cms/backoffice/notification";
class v extends m {
  #e = new r(this);
  async requestBulkMoveTo(t) {
    const i = await this.getContext(c);
    let e = 0;
    const a = t.destination;
    for (const o of t.uniques) {
      const { error: s } = await this.#e.moveTo({ unique: o, destination: a });
      if (s) {
        const n = { data: { message: s.message } };
        i?.peek("danger", n);
      } else
        e++;
    }
    if (e > 0) {
      const o = { data: { message: `Moved ${e} media ${e === 1 ? "item" : "items"}` } };
      i?.peek("positive", o);
    }
    return {};
  }
}
export {
  v as UmbBulkMoveToMediaRepository,
  v as api
};
//# sourceMappingURL=move-to.repository-LruV9O0X.js.map
