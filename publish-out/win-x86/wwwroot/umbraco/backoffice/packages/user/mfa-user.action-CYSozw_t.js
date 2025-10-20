import { c as i } from "./constants-BH7VsFPT.js";
import { U as n } from "./current-user-mfa-modal.token-DXwGMNEd.js";
import { UmbEntityActionBase as a } from "@umbraco-cms/backoffice/entity-action";
import { UMB_CURRENT_USER_CONTEXT as s } from "@umbraco-cms/backoffice/current-user";
import { firstValueFrom as c } from "@umbraco-cms/backoffice/external/rxjs";
import { umbOpenModal as e } from "@umbraco-cms/backoffice/modal";
class M extends a {
  constructor(t, r) {
    super(t, r);
  }
  async execute() {
    const { unique: t } = this.args;
    if (!t) throw new Error("Unique is not available");
    const r = await this.getContext(s);
    if (!r) throw new Error("Current user context not found");
    const o = await c(r.currentUser);
    if (!o) throw new Error("Current user is not available");
    if (o.unique === t) {
      await e(this, n).catch(() => {
      });
      return;
    }
    await e(this, i, {
      data: { unique: t }
    }).catch(() => {
    });
  }
}
export {
  M as UmbMfaUserEntityAction,
  M as api
};
//# sourceMappingURL=mfa-user.action-CYSozw_t.js.map
