import { U as e } from "./current-user.context.token-BnYpMzWI.js";
import "./current-user.store.token-N-3TWEFa.js";
import { UmbCurrentUserRepository as i } from "./current-user.repository-CzsCrtUS.js";
import "@umbraco-cms/backoffice/user";
import "@umbraco-cms/backoffice/class-api";
import "@umbraco-cms/backoffice/observable-api";
import { UmbActionBase as n } from "@umbraco-cms/backoffice/action";
import { umbOpenModal as a } from "@umbraco-cms/backoffice/modal";
import { UMB_CHANGE_PASSWORD_MODAL as m } from "@umbraco-cms/backoffice/user-change-password";
class A extends n {
  #r;
  constructor(r, t) {
    super(r, t), this.consumeContext(e, (o) => {
      this.observe(
        o?.unique,
        (s) => {
          this.#r = s;
        },
        "umbEditCurrentUserActionObserver"
      );
    });
  }
  async getHref() {
  }
  async execute() {
    if (!this.#r) return;
    const r = await a(this, m, {
      data: {
        user: {
          unique: this.#r
        }
      }
    });
    await new i(this).changePassword(r.newPassword, r.oldPassword);
  }
}
export {
  A as UmbChangePasswordCurrentUserAction,
  A as api
};
//# sourceMappingURL=change-password-current-user.action-C9VA6Jpd.js.map
