import { UmbCurrentUserRepository as a } from "./current-user.repository-CzsCrtUS.js";
import { U as r } from "./current-user.context.token-BnYpMzWI.js";
import { UmbContextBase as i } from "@umbraco-cms/backoffice/class-api";
import { filter as n, firstValueFrom as t } from "@umbraco-cms/backoffice/external/rxjs";
import { UMB_AUTH_CONTEXT as o } from "@umbraco-cms/backoffice/auth";
import { UmbObjectState as u } from "@umbraco-cms/backoffice/observable-api";
import { umbLocalizationRegistry as h } from "@umbraco-cms/backoffice/localization";
class A extends i {
  constructor(s) {
    super(s, r), this.#e = new u(void 0), this.currentUser = this.#e.asObservable().pipe(n((e) => !!e)), this.allowedSections = this.#e.asObservablePart((e) => e?.allowedSections), this.avatarUrls = this.#e.asObservablePart((e) => e?.avatarUrls), this.documentStartNodeUniques = this.#e.asObservablePart((e) => e?.documentStartNodeUniques), this.email = this.#e.asObservablePart((e) => e?.email), this.fallbackPermissions = this.#e.asObservablePart((e) => e?.fallbackPermissions), this.hasAccessToAllLanguages = this.#e.asObservablePart((e) => e?.hasAccessToAllLanguages), this.hasAccessToSensitiveData = this.#e.asObservablePart((e) => e?.hasAccessToSensitiveData), this.hasDocumentRootAccess = this.#e.asObservablePart((e) => e?.hasDocumentRootAccess), this.hasMediaRootAccess = this.#e.asObservablePart((e) => e?.hasMediaRootAccess), this.isAdmin = this.#e.asObservablePart((e) => e?.isAdmin), this.languageIsoCode = this.#e.asObservablePart((e) => e?.languageIsoCode), this.languages = this.#e.asObservablePart((e) => e?.languages), this.mediaStartNodeUniques = this.#e.asObservablePart((e) => e?.mediaStartNodeUniques), this.name = this.#e.asObservablePart((e) => e?.name), this.permissions = this.#e.asObservablePart((e) => e?.permissions), this.unique = this.#e.asObservablePart((e) => e?.unique), this.userName = this.#e.asObservablePart((e) => e?.userName), this.#t = new a(this), this.consumeContext(o, (e) => {
      this.#s = e, this.#a();
    }), this.observe(this.languageIsoCode, (e) => {
      e && h.loadLanguage(e);
    });
  }
  #e;
  #s;
  #t;
  /**
   * Loads the current user
   */
  async load() {
    const { asObservable: s } = await this.#t.requestCurrentUser();
    s && await this.observe(s(), (e) => {
      this.#e?.setValue(e);
    }).asPromise().catch(() => {
    });
  }
  /**
   * Checks if a user is the current user.
   * @param userUnique The user id to check
   * @returns True if the user is the current user, otherwise false
   */
  async isUserCurrentUser(s) {
    return (await t(this.currentUser))?.unique === s;
  }
  /**
   * Checks if the current user is an admin.
   * @returns True if the current user is an admin, otherwise false
   */
  async isCurrentUserAdmin() {
    return (await t(this.currentUser))?.isAdmin ?? !1;
  }
  /**
   * Get the allowed sections for the current user
   * @returns {Array<string> | undefined} The allowed sections for the current user
   */
  getAllowedSection() {
    return this.#e.getValue()?.allowedSections;
  }
  /**
   * Get the avatar urls for the current user
   * @returns {Array<string> | undefined} The avatar urls for the current user
   */
  getAvatarUrls() {
    return this.#e.getValue()?.avatarUrls;
  }
  /**
   * Get the document start node uniques for the current user
   * @returns {Array<UmbReferenceByUnique> | undefined} The document start node uniques for the current user
   */
  getDocumentStartNodeUniques() {
    return this.#e.getValue()?.documentStartNodeUniques;
  }
  /**
   * Get the email for the current user
   * @returns {string | undefined} The email for the current user
   */
  getEmail() {
    return this.#e.getValue()?.email;
  }
  /**
   * Get the fallback permissions for the current user
   * @returns {Array<string> | undefined} The fallback permissions for the current user
   */
  getFallbackPermissions() {
    return this.#e.getValue()?.fallbackPermissions;
  }
  /**
   * Get if the current user has access to all languages
   * @returns {boolean | undefined} True if the current user has access to all languages, otherwise false
   */
  getHasAccessToAllLanguages() {
    return this.#e.getValue()?.hasAccessToAllLanguages;
  }
  /**
   * Get if the current user has access to sensitive data
   * @returns {boolean | undefined} True if the current user has access to sensitive data, otherwise false
   */
  getHasAccessToSensitiveData() {
    return this.#e.getValue()?.hasAccessToSensitiveData;
  }
  /**
   * Get if the current user has document root access
   * @returns {boolean | undefined} True if the current user has document root access, otherwise false
   */
  getHasDocumentRootAccess() {
    return this.#e.getValue()?.hasDocumentRootAccess;
  }
  /**
   * Get if the current user has media root access
   * @returns {boolean | undefined} True if the current user has media root access, otherwise false
   */
  getHasMediaRootAccess() {
    return this.#e.getValue()?.hasMediaRootAccess;
  }
  /**
   * Get if the current user is an admin
   * @returns {boolean | undefined} True if the current user is an admin, otherwise false
   */
  getIsAdmin() {
    return this.#e.getValue()?.isAdmin;
  }
  /**
   * Get the language iso code for the current user
   * @returns {string | undefined} The language iso code for the current user
   */
  getLanguageIsoCode() {
    return this.#e.getValue()?.languageIsoCode;
  }
  /**
   * Get the languages for the current user
   * @returns {Array<string> | undefined} The languages for the current user
   */
  getLanguages() {
    return this.#e.getValue()?.languages;
  }
  /**
   * Get the media start node uniques for the current user
   * @returns {Array<UmbReferenceByUnique> | undefined} The media start node uniques for the current user
   */
  getMediaStartNodeUniques() {
    return this.#e.getValue()?.mediaStartNodeUniques;
  }
  /**
   * Get the name for the current user
   * @returns {string | undefined} The name for the current user
   */
  getName() {
    return this.#e.getValue()?.name;
  }
  /**
   * Get the permissions for the current user
   * @returns {unknown[] | undefined} The permissions for the current user
   */
  getPermissions() {
    return this.#e.getValue()?.permissions;
  }
  /**
   * Get the unique for the current user
   * @returns {string | undefined} The unique for the current user
   */
  getUnique() {
    return this.#e.getValue()?.unique;
  }
  /**
   * Get the user name for the current user
   * @returns {string | undefined} The user name for the current user
   */
  getUserName() {
    return this.#e.getValue()?.userName;
  }
  #a() {
    this.#s && this.observe(this.#s.isAuthorized, (s) => {
      s && this.load();
    });
  }
}
export {
  A as UmbCurrentUserContext,
  A as default
};
//# sourceMappingURL=current-user.context-C_RaIxUa.js.map
