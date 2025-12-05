import { UmbUserItemRepository as s } from "./user-item.repository-CjZk039x.js";
import "./constants-BH7VsFPT.js";
import "@umbraco-cms/backoffice/notification";
import "@umbraco-cms/backoffice/repository";
import "@umbraco-cms/backoffice/external/backend-api";
import "@umbraco-cms/backoffice/resources";
import "@umbraco-cms/backoffice/id";
import "@umbraco-cms/backoffice/temporary-file";
import { UmbDisableUserRepository as a } from "./disable-user.repository-CGbyNa9o.js";
import "@umbraco-cms/backoffice/localization-api";
import "@umbraco-cms/backoffice/external/rxjs";
import { UmbEntityActionBase as n } from "@umbraco-cms/backoffice/entity-action";
import { umbConfirmModal as m } from "@umbraco-cms/backoffice/modal";
class E extends n {
  constructor(o, t) {
    super(o, t);
  }
  async execute() {
    if (!this.args.unique) throw new Error("Unique is not available");
    const o = new s(this), { data: t } = await o.requestItems([this.args.unique]);
    if (!t?.length)
      throw new Error("Item not found.");
    const r = t[0];
    await m(this._host, {
      headline: `Disable ${r.name}`,
      content: "Are you sure you want to disable this user?",
      color: "danger",
      confirmLabel: "Disable"
    });
    const e = new a(this), { error: i } = await e.disable([this.args.unique]);
    if (i)
      throw i;
  }
}
export {
  E as UmbDisableUserEntityAction,
  E as api
};
//# sourceMappingURL=disable-user.action-BWGFqine.js.map
