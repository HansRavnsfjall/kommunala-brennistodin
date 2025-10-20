import { U as o } from "./change-password-modal.token-DRlXqm3X.js";
import { UmbChangeUserPasswordRepository as i } from "@umbraco-cms/backoffice/user";
import { UmbEntityActionBase as a } from "@umbraco-cms/backoffice/entity-action";
import { umbOpenModal as n } from "@umbraco-cms/backoffice/modal";
import { UMB_CURRENT_USER_CONTEXT as u, UmbCurrentUserRepository as w } from "@umbraco-cms/backoffice/current-user";
class f extends a {
  constructor(r, s) {
    super(r, s);
  }
  async execute() {
    if (!this.args.unique) throw new Error("Unique is not available");
    const r = await n(this, o, {
      data: {
        user: {
          unique: this.args.unique
        }
      }
    }).catch(() => {
    });
    if (!r) return;
    const s = await this.getContext(u);
    if (!s)
      throw new Error("Current user context is not available");
    if (await s.isUserCurrentUser(this.args.unique)) {
      const e = new w(this), { error: t } = await e.changePassword(r.newPassword, r.oldPassword);
      if (t) throw t;
    } else {
      const e = new i(this), { error: t } = await e.changePassword(this.args.unique, r.newPassword);
      if (t) throw t;
    }
  }
}
export {
  f as UmbChangeUserPasswordEntityAction,
  f as api
};
//# sourceMappingURL=change-user-password.action-lRPUbEY3.js.map
