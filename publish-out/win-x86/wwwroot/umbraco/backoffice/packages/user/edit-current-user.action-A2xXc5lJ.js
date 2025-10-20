import { U as n } from "./current-user.context.token-BnYpMzWI.js";
import { UMB_USER_WORKSPACE_PATH as o } from "@umbraco-cms/backoffice/user";
import { UmbActionBase as u } from "@umbraco-cms/backoffice/action";
class E extends u {
  #t;
  #e;
  constructor(t, e) {
    super(t, e), this.#t = new Promise((r) => {
      this.consumeContext(n, (i) => {
        this.observe(
          i?.unique,
          (s) => {
            this.#e = s, r();
          },
          "umbEditCurrentUserActionObserver"
        );
      });
    });
  }
  async getHref() {
    return await this.#t, o + "/edit/" + this.#e;
  }
  async execute() {
  }
}
export {
  E as UmbEditCurrentUserAction,
  E as api
};
//# sourceMappingURL=edit-current-user.action-A2xXc5lJ.js.map
