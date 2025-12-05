import { f as o, g as s } from "./constants-DjdF3T-M.js";
import { UMB_NOTIFICATION_CONTEXT as i } from "@umbraco-cms/backoffice/notification";
import { UmbRepositoryBase as r } from "@umbraco-cms/backoffice/repository";
class c extends r {
  constructor(e) {
    super(e), this.init = Promise.all([
      this.consumeContext(o, (t) => {
        this.detailStore = t;
      }).asPromise({ preventTimeout: !0 }).catch(() => {
      }),
      this.consumeContext(s, (t) => {
        this.itemStore = t;
      }).asPromise({ preventTimeout: !0 }).catch(() => {
      }),
      this.consumeContext(i, (t) => {
        this.notificationContext = t;
      }).asPromise({ preventTimeout: !0 }).catch(() => {
      })
    ]);
  }
}
export {
  c as U
};
//# sourceMappingURL=user-repository-base-BVnoPO4a.js.map
