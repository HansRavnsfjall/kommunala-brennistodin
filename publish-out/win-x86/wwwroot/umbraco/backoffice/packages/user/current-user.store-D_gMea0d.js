import { U as n } from "./current-user.store.token-N-3TWEFa.js";
import { UMB_USER_DETAIL_STORE_CONTEXT as d } from "@umbraco-cms/backoffice/user";
import { UmbContextBase as u } from "@umbraco-cms/backoffice/class-api";
import { UmbObjectState as m, UmbArrayState as a } from "@umbraco-cms/backoffice/observable-api";
class c extends u {
  constructor(e) {
    super(e, n), this.#e = new m(void 0), this.data = this.#e.asObservable(), this.#t = new a([], (r) => r.providerName), this.mfaProviders = this.#t.asObservable(), this.#r = new a(
      [],
      (r) => r.providerSchemeName
    ), this.externalLoginProviders = this.#r.asObservable(), this.#s = (r) => {
      const s = this.get();
      if (!s) return;
      const t = r.find((o) => o.unique === s.unique);
      if (!t) return;
      const i = {
        email: t.email,
        userName: t.userName,
        name: t.name,
        languageIsoCode: t.languageIsoCode || "",
        // TODO: default value?
        documentStartNodeUniques: t.documentStartNodeUniques,
        mediaStartNodeUniques: t.mediaStartNodeUniques,
        avatarUrls: t.avatarUrls,
        isAdmin: t.isAdmin
      };
      this.update(i);
    }, this.consumeContext(d, (r) => {
      this.observe(r?.all(), (s) => this.#s(s ?? []));
    });
  }
  #e;
  #t;
  #r;
  /**
   * Get the current user
   * @readonly
   * @type {UmbCurrentUserModel}
   * @memberof UmbCurrentUserStore
   */
  get() {
    return this.#e.getValue();
  }
  /**
   * Set the current user
   * @param {UmbCurrentUserModel} data
   * @memberof UmbCurrentUserStore
   */
  set(e) {
    this.#e.setValue(e);
  }
  /**
   * Update the current user
   * @param {Partial<UmbCurrentUserModel>} data
   * @memberof UmbCurrentUserStore
   */
  update(e) {
    this.#e.update(e);
  }
  /**
   * Clear the current user
   * @memberof UmbCurrentUserStore
   */
  clear() {
    this.#e.setValue(void 0);
  }
  #s;
  setMfaProviders(e) {
    this.#t.setValue(e);
  }
  updateMfaProvider(e) {
    this.#t.updateOne(e.providerName, e);
  }
  setExternalLoginProviders(e) {
    this.#r.setValue(e);
  }
  updateExternalLoginProvider(e) {
    this.#r.updateOne(e.providerSchemeName, e);
  }
}
export {
  c as UmbCurrentUserStore,
  c as default
};
//# sourceMappingURL=current-user.store-D_gMea0d.js.map
