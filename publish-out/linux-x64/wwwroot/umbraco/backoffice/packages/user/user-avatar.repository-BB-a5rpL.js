import { U as c } from "./user-repository-base-3Lpa5j11.js";
import { UserService as i } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecute as s } from "@umbraco-cms/backoffice/resources";
import { UmbId as p } from "@umbraco-cms/backoffice/id";
import { UmbTemporaryFileManager as m, TemporaryFileStatus as h } from "@umbraco-cms/backoffice/temporary-file";
class v {
  #t;
  constructor(t) {
    this.#t = t;
  }
  /**
   * Creates an avatar for the user with the given id based on a temporary uploaded file
   * @param {string} unique
   * @param {string} fileUnique
   * @returns {*}  {Promise<UmbDataSourceErrorResponse>}
   * @memberof UmbUserServerDataSource
   */
  createAvatar(t, r) {
    const a = {
      file: {
        id: r
      }
    };
    return s(this.#t, i.postUserAvatarById({ path: { id: t }, body: a }));
  }
  /**
   * Deletes the avatar for the user with the given id
   * @param {string} unique
   * @returns {*}  {Promise<UmbDataSourceErrorResponse>}
   * @memberof UmbUserServerDataSource
   */
  deleteAvatar(t) {
    return s(this.#t, i.deleteUserAvatarById({ path: { id: t } }));
  }
}
class u extends c {
  #t = new m(this);
  #r = new v(this);
  #a = new AbortController();
  /**
   * Uploads an avatar for the user with the given id
   * @param {string} userUnique
   * @param {File} file
   * @returns {Promise<UmbDataSourceErrorResponse>}
   * @memberof UmbUserRepository
   */
  async uploadAvatar(t, r) {
    if (!t) throw new Error("Id is missing");
    await this.init;
    const a = p.new(), { status: d } = await this.#t.uploadOne({
      file: r,
      temporaryUnique: a,
      abortController: this.#a
    });
    if (d === h.ERROR)
      return { error: new Error("Avatar upload failed") };
    const { error: o } = await this.#r.createAvatar(t, a);
    if (!o) {
      const e = URL.createObjectURL(r);
      this.detailStore?.updateItem(t, { avatarUrls: [e, e, e, e, e] });
      const l = { data: { message: "Avatar uploaded" } };
      this.notificationContext?.peek("positive", l);
    }
    return { error: o };
  }
  /**
   * Removes the avatar for the user with the given id
   * @param {string} userUnique
   * @returns {Promise<UmbDataSourceErrorResponse>}
   * @memberof UmbUserRepository
   */
  async deleteAvatar(t) {
    if (!t) throw new Error("Id is missing");
    await this.init;
    const { error: r } = await this.#r.deleteAvatar(t);
    if (!r) {
      this.detailStore?.updateItem(t, { avatarUrls: [] });
      const a = { data: { message: "Avatar deleted" } };
      this.notificationContext?.peek("positive", a);
    }
    return { error: r };
  }
  destroy() {
    super.destroy();
  }
}
export {
  u as UmbUserAvatarRepository,
  u as default
};
//# sourceMappingURL=user-avatar.repository-BB-a5rpL.js.map
