import { UmbEnableUserRepository as i } from "./enable-user.repository-DesGJJym.js";
import { UmbUserItemRepository as s } from "./user-item.repository-CjZk039x.js";
import { UmbEntityActionBase as a } from "@umbraco-cms/backoffice/entity-action";
import { umbConfirmModal as m } from "@umbraco-cms/backoffice/modal";
class p extends a {
  constructor(e, t) {
    super(e, t);
  }
  async execute() {
    if (!this.args.unique) throw new Error("Unique is not available");
    const e = new s(this), { data: t } = await e.requestItems([this.args.unique]);
    if (!t?.length)
      throw new Error("Item not found.");
    const r = t[0];
    await m(this._host, {
      headline: `Enable ${r.name}`,
      content: "Are you sure you want to enable this user?",
      confirmLabel: "Enable"
    });
    const n = new i(this), { error: o } = await n.enable([this.args.unique]);
    if (o)
      throw o;
  }
}
export {
  p as UmbEnableUserEntityAction,
  p as api
};
//# sourceMappingURL=enable-user.action-B62bW3B6.js.map
