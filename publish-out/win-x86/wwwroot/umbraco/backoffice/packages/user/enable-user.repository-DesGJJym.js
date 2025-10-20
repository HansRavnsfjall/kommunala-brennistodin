import { U as c } from "./user-repository-base-3Lpa5j11.js";
import { UmbUserItemRepository as l } from "./user-item.repository-CjZk039x.js";
import "./constants-BH7VsFPT.js";
import { UserService as h, UserStateModel as p } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecute as b } from "@umbraco-cms/backoffice/resources";
import { UmbLocalizationController as u } from "@umbraco-cms/backoffice/localization-api";
class U {
  #e;
  /**
   * Creates an instance of UmbEnableUserServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbEnableUserServerDataSource
   */
  constructor(e) {
    this.#e = e;
  }
  /**
   * Enables the specified user ids
   * @param {string[]} userIds
   * @returns {Promise<void>}
   * @memberof UmbEnableUserServerDataSource
   */
  async enable(e) {
    if (!e) throw new Error("User ids are missing");
    return b(
      this.#e,
      h.postUserEnable({
        body: {
          userIds: e.map((r) => ({ id: r }))
        }
      })
    );
  }
}
class g extends c {
  #e;
  #t = new u(this);
  #r = new l(this);
  constructor(e) {
    super(e), this.#e = new U(e);
  }
  async enable(e) {
    if (e.length === 0) throw new Error("User ids are missing");
    await this.init;
    const { data: r, error: o } = await this.#e.enable(e);
    if (!o) {
      const { data: t } = await this.#r.requestItems(e);
      if (!t) throw new Error("Could not load user item");
      e.forEach((s) => {
        this.detailStore?.updateItem(s, { state: p.ACTIVE });
      });
      let i = this.#t.term("speechBubbles_enableUsersSuccess", t.length);
      if (t.length === 1) {
        const s = t?.map((m) => m.name).join(", ");
        i = this.#t.term("speechBubbles_enableUserSuccess", s);
      }
      const n = { data: { message: i } };
      this.notificationContext?.peek("positive", n);
    }
    return { data: r, error: o };
  }
}
export {
  g as UmbEnableUserRepository,
  g as default
};
//# sourceMappingURL=enable-user.repository-DesGJJym.js.map
