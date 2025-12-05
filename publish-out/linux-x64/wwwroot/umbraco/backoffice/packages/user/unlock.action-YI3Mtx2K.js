import "./constants-BH7VsFPT.js";
import "@umbraco-cms/backoffice/notification";
import "@umbraco-cms/backoffice/repository";
import "@umbraco-cms/backoffice/external/backend-api";
import "@umbraco-cms/backoffice/resources";
import "@umbraco-cms/backoffice/id";
import "@umbraco-cms/backoffice/temporary-file";
import "@umbraco-cms/backoffice/entity-item";
import "@umbraco-cms/backoffice/localization-api";
import { UmbUnlockUserRepository as r } from "./unlock-user.repository-B2In2o6H.js";
import "@umbraco-cms/backoffice/external/rxjs";
import { UMB_ENTITY_CONTEXT as s } from "@umbraco-cms/backoffice/entity";
import { UmbEntityBulkActionBase as m } from "@umbraco-cms/backoffice/entity-bulk-action";
import { UMB_ACTION_EVENT_CONTEXT as p } from "@umbraco-cms/backoffice/action";
import { UmbRequestReloadChildrenOfEntityEvent as E } from "@umbraco-cms/backoffice/entity-action";
class N extends m {
  async execute() {
    await new r(this._host).unlock(this.selection);
    const t = await this.getContext(s);
    if (!t) throw new Error("Entity context not found");
    const o = t.getEntityType(), n = t.getUnique();
    if (!o) throw new Error("Entity type not found");
    if (n === void 0) throw new Error("Entity unique not found");
    const e = await this.getContext(p);
    if (!e) throw new Error("Event context not found");
    const i = new E({
      entityType: o,
      unique: n
    });
    e.dispatchEvent(i);
  }
}
export {
  N as UmbUnlockUserEntityBulkAction,
  N as api
};
//# sourceMappingURL=unlock.action-YI3Mtx2K.js.map
