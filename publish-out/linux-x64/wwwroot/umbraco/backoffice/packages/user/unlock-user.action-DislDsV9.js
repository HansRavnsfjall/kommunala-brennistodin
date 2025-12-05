import "./constants-BH7VsFPT.js";
import "@umbraco-cms/backoffice/notification";
import "@umbraco-cms/backoffice/repository";
import "@umbraco-cms/backoffice/external/backend-api";
import "@umbraco-cms/backoffice/resources";
import "@umbraco-cms/backoffice/id";
import "@umbraco-cms/backoffice/temporary-file";
import { UmbUserItemRepository as n } from "./user-item.repository-CjZk039x.js";
import "@umbraco-cms/backoffice/localization-api";
import { UmbUnlockUserRepository as s } from "./unlock-user.repository-B2In2o6H.js";
import "@umbraco-cms/backoffice/external/rxjs";
import { UmbEntityActionBase as m } from "@umbraco-cms/backoffice/entity-action";
import { umbConfirmModal as a } from "@umbraco-cms/backoffice/modal";
class E extends m {
  async execute() {
    if (!this.args.unique) throw new Error("Unique is not available");
    const r = new n(this), { data: t } = await r.requestItems([this.args.unique]);
    if (!t?.length)
      throw new Error("Item not found.");
    const i = t[0];
    await a(this._host, {
      headline: `Unlock ${i.name}`,
      content: "Are you sure you want to unlock this user?",
      confirmLabel: "Unlock"
    });
    const e = new s(this), { error: o } = await e.unlock([this.args.unique]);
    if (o)
      throw o;
  }
}
export {
  E as UmbUnlockUserEntityAction,
  E as api
};
//# sourceMappingURL=unlock-user.action-DislDsV9.js.map
