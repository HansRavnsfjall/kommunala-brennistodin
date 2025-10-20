import { U as c } from "./user-repository-base-3Lpa5j11.js";
import { UmbUserItemRepository as l } from "./user-item.repository-CjZk039x.js";
import "./constants-BH7VsFPT.js";
import { UserService as h, UserStateModel as p } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecute as b } from "@umbraco-cms/backoffice/resources";
import { UmbLocalizationController as u } from "@umbraco-cms/backoffice/localization-api";
class U {
  #e;
  /**
   * Creates an instance of UmbDisableUserServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbDisableUserServerDataSource
   */
  constructor(e) {
    this.#e = e;
  }
  /**
   * Disables the specified user ids
   * @param {string[]} userIds
   * @returns {Promise<void>}
   * @memberof UmbDisableUserServerDataSource
   */
  async disable(e) {
    if (!e) throw new Error("User ids are missing");
    return b(
      this.#e,
      h.postUserDisable({
        body: {
          userIds: e.map((s) => ({ id: s }))
        }
      })
    );
  }
}
class D extends c {
  #e;
  #t = new u(this);
  #s = new l(this);
  constructor(e) {
    super(e), this.#e = new U(e);
  }
  async disable(e) {
    if (e.length === 0) throw new Error("User ids are missing");
    await this.init;
    const { data: s, error: i } = await this.#e.disable(e);
    if (!i) {
      const { data: t } = await this.#s.requestItems(e);
      if (!t) throw new Error("Could not load user item");
      e.forEach((r) => {
        this.detailStore?.updateItem(r, { state: p.DISABLED });
      });
      let o = this.#t.term("speechBubbles_disableUsersSuccess", t.length);
      if (t.length === 1) {
        const r = t?.map((m) => m.name).join(", ");
        o = this.#t.term("speechBubbles_disableUserSuccess", r);
      }
      const n = { data: { message: o } };
      this.notificationContext?.peek("positive", n);
    }
    return { data: s, error: i };
  }
}
export {
  D as UmbDisableUserRepository,
  D as default
};
//# sourceMappingURL=disable-user.repository-CGbyNa9o.js.map
