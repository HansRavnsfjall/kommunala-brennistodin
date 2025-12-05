import { UserService as i } from "@umbraco-cms/backoffice/external/backend-api";
import { UmbControllerBase as c } from "@umbraco-cms/backoffice/class-api";
import { UmbManagementApiDataMapper as d, UmbRepositoryBase as m } from "@umbraco-cms/backoffice/repository";
import { tryExecute as o } from "@umbraco-cms/backoffice/resources";
import { U as h } from "./current-user.store.token-N-3TWEFa.js";
import { UMB_NOTIFICATION_CONTEXT as l } from "@umbraco-cms/backoffice/notification";
class f extends c {
  #r = new d(this);
  /**
   * Get the current user
   * @returns {*}
   * @memberof UmbCurrentUserServerDataSource
   */
  async getCurrentUser() {
    const { data: e, error: r } = await o(this, i.getUserCurrent());
    if (e) {
      const s = e.permissions.map(async (a) => this.#r.map({
        forDataModel: a.$type,
        data: a,
        fallback: async () => ({
          ...a,
          permissionType: "unknown"
        })
      })), t = await Promise.all(s);
      return { data: {
        allowedSections: e.allowedSections,
        avatarUrls: e.avatarUrls,
        documentStartNodeUniques: e.documentStartNodeIds.map((a) => ({
          unique: a.id
        })),
        email: e.email,
        fallbackPermissions: e.fallbackPermissions,
        hasAccessToAllLanguages: e.hasAccessToAllLanguages,
        hasAccessToSensitiveData: e.hasAccessToSensitiveData,
        hasDocumentRootAccess: e.hasDocumentRootAccess,
        hasMediaRootAccess: e.hasMediaRootAccess,
        isAdmin: e.isAdmin,
        languageIsoCode: e.languageIsoCode || "en-us",
        // TODO: make global variable
        languages: e.languages,
        mediaStartNodeUniques: e.mediaStartNodeIds.map((a) => ({
          unique: a.id
        })),
        name: e.name,
        permissions: t,
        unique: e.id,
        userName: e.userName,
        userGroupUniques: e.userGroupIds.map((a) => a.id)
      } };
    }
    return { error: r };
  }
  /**
   * Get the current user's external login providers
   * @memberof UmbCurrentUserServerDataSource
   */
  async getExternalLoginProviders() {
    return o(this, i.getUserCurrentLoginProviders());
  }
  /**
   * Get the current user's available MFA login providers
   * @memberof UmbCurrentUserServerDataSource
   */
  async getMfaLoginProviders() {
    const { data: e, error: r } = await o(this, i.getUserCurrent2Fa());
    return e ? { data: e } : { error: r };
  }
  /**
   * Enable an MFA provider
   * @param providerName
   * @param code
   * @param secret
   */
  async enableMfaProvider(e, r, s) {
    const { error: t } = await o(
      this,
      i.postUserCurrent2FaByProviderName({ path: { providerName: e }, body: { code: r, secret: s } })
    );
    return t ? { error: t } : {};
  }
  /**
   * Disable an MFA provider
   * @param providerName
   * @param code
   */
  async disableMfaProvider(e, r) {
    const { error: s } = await o(
      this,
      i.deleteUserCurrent2FaByProviderName({ path: { providerName: e }, query: { code: r } })
    );
    return s ? { error: s } : {};
  }
  /**
   * Change the password for current user
   * @param id
   * @param newPassword
   * @param oldPassword
   * @param isCurrentUser
   * @returns
   */
  async changePassword(e, r) {
    return o(
      this,
      i.postUserCurrentChangePassword({
        body: {
          newPassword: e,
          oldPassword: r
        }
      })
    );
  }
}
class b extends m {
  #r = new f(this._host);
  #e;
  #s;
  constructor(e) {
    super(e), this.#s = Promise.all([
      this.consumeContext(h, (r) => {
        r && (this.#e = r);
      }).asPromise({ preventTimeout: !0 }).catch(() => {
      }),
      this.consumeContext(l, (r) => {
        this.notificationContext = r;
      }).asPromise({ preventTimeout: !0 }).catch(() => {
      })
    ]);
  }
  /**
   * Request the current user
   * @returns {*}
   * @memberof UmbCurrentUserRepository
   */
  async requestCurrentUser() {
    await this.#s;
    const { data: e, error: r } = await this.#r.getCurrentUser();
    return e && this.#e?.set(e), { data: e, error: r, asObservable: () => this.#e.data };
  }
  /**
   * Request the current user's external login providers
   * @memberof UmbCurrentUserRepository
   */
  async requestExternalLoginProviders() {
    await this.#s;
    const { data: e, error: r } = await this.#r.getExternalLoginProviders();
    return e && this.#e?.setExternalLoginProviders(e), { data: e, error: r, asObservable: () => this.#e.externalLoginProviders };
  }
  /**
   * Request the current user's available MFA login providers
   * @memberof UmbCurrentUserRepository
   */
  async requestMfaLoginProviders() {
    await this.#s;
    const { data: e, error: r } = await this.#r.getMfaLoginProviders();
    return e && this.#e?.setMfaProviders(e), { data: e, error: r, asObservable: () => this.#e.mfaProviders };
  }
  /**
   * Enable an MFA provider
   * @param provider The provider to enable
   * @param providerName
   * @param code The activation code of the provider to enable
   * @param secret
   * @memberof UmbCurrentUserRepository
   */
  async enableMfaProvider(e, r, s) {
    const { error: t } = await this.#r.enableMfaProvider(e, r, s);
    return t ? { error: t } : (this.#e?.updateMfaProvider({ providerName: e, isEnabledOnUser: !0 }), {});
  }
  /**
   * Disable an MFA provider
   * @param provider The provider to disable
   * @param providerName
   * @param code The activation code of the provider to disable
   * @memberof UmbCurrentUserRepository
   */
  async disableMfaProvider(e, r) {
    const { error: s } = await this.#r.disableMfaProvider(e, r);
    return s ? { error: s } : (this.#e?.updateMfaProvider({ providerName: e, isEnabledOnUser: !1 }), {});
  }
  /**
   * Change password for current user
   * @param userId
   * @param newPassword
   * @param oldPassword
   * @param isCurrentUser
   * @returns
   */
  async changePassword(e, r) {
    if (!e) throw new Error("New password is missing");
    if (!r) throw new Error("Old password is missing");
    const { data: s, error: t } = await this.#r.changePassword(e, r);
    if (!t) {
      const n = { data: { message: "Password changed" } };
      this.notificationContext?.peek("positive", n);
    }
    return { data: s, error: t };
  }
}
export {
  b as UmbCurrentUserRepository,
  b as default
};
//# sourceMappingURL=current-user.repository-CzsCrtUS.js.map
