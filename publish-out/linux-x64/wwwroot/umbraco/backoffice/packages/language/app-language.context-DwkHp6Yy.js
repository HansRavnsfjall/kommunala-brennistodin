import { UmbLanguageCollectionRepository as n } from "./language-collection.repository-GzJNHJc2.js";
import { d as u } from "./language-access.workspace.context-token-Bqcpkg-3.js";
import { UmbArrayState as r, UmbObjectState as g } from "@umbraco-cms/backoffice/observable-api";
import { UmbContextBase as o } from "@umbraco-cms/backoffice/class-api";
import { UmbReadOnlyStateManager as l } from "@umbraco-cms/backoffice/utils";
import { UMB_CURRENT_USER_CONTEXT as h } from "@umbraco-cms/backoffice/current-user";
import { UMB_AUTH_CONTEXT as p } from "@umbraco-cms/backoffice/auth";
import { UmbVariantContext as m } from "@umbraco-cms/backoffice/variant";
class U extends o {
  constructor(t) {
    super(t, u), this.#o = new Promise((e) => {
      this.#g = e;
    }), this.#e = new r([], (e) => e.unique), this.languages = this.#e.asObservable(), this.cultures = this.#e.asObservablePart((e) => e.map((a) => a.unique)), this.appDefaultLanguage = this.#e.asObservablePart(
      (e) => e.find((a) => a.isDefault)
    ), this.moreThanOneLanguage = this.#e.asObservablePart((e) => e.length > 1), this.#t = new g(void 0), this.appLanguage = this.#t.asObservable(), this.appLanguageCulture = this.#t.asObservablePart((e) => e?.unique), this.appLanguageReadOnlyState = new l(this), this.appMandatoryLanguages = this.#e.asObservablePart(
      (e) => e.filter((a) => a.isMandatory)
    ), this.#l = new n(this), this.#s = [], this.#i = !1, this.#n = "UMB_LANGUAGE_PERMISSION_", this.#u = "umb:appLanguage", this.#a = new m(this), this.consumeContext(p, (e) => {
      this.observe(e?.isAuthorized, (a) => {
        a && this.#p();
      });
    }), this.consumeContext(h, (e) => {
      this.observe(e?.languages, (a) => {
        this.#s = a || [], this.#r();
      }), this.observe(e?.hasAccessToAllLanguages, (a) => {
        this.#i = a || !1, this.#r();
      });
    });
  }
  #g;
  #o;
  #e;
  async getCultures() {
    return (await this.observe(this.languages).asPromise()).map((t) => t.unique);
  }
  #t;
  async getMandatoryLanguages() {
    return await this.#o, this.#e.getValue().filter((t) => t.isMandatory);
  }
  #l;
  #s;
  #i;
  #n;
  #u;
  #a;
  getAppCulture() {
    return this.#t.getValue()?.unique;
  }
  setLanguage(t) {
    const e = this.#t.getValue();
    e?.unique && this.appLanguageReadOnlyState.removeState(this.#n + e.unique);
    const a = this.#h(t);
    if (!a)
      throw new Error(`Language with unique ${t} not found`);
    this.#t.update(a), this.#a.setCulture(a.unique), this.#a.setAppCulture(a.unique), localStorage.setItem(this.#u, a?.unique), this.#r();
  }
  async #p() {
    const { data: t } = await this.#l.requestCollection({});
    t && (this.#e.setValue(t.items), this.#g(), this.#t.getValue() || this.#m());
  }
  #m() {
    const t = this.#e.getValue().find((i) => i.isDefault)?.unique;
    if (!t) return;
    this.#a.setFallbackCulture(t);
    const e = localStorage.getItem(this.#u), a = this.#h(e || ""), s = a ? a.unique : t;
    this.setLanguage(s);
  }
  #h(t) {
    return this.#e.getValue().find((e) => e.unique === t);
  }
  #r() {
    const t = this.#t.getValue();
    if (!t) {
      this.appLanguageReadOnlyState.clear();
      return;
    }
    const e = this.#n + t.unique;
    if (this.appLanguageReadOnlyState.removeState(e), this.#i)
      return;
    if (!this.#s.includes(t.unique)) {
      const s = {
        unique: e,
        message: "You do not have permission to edit to this culture"
      };
      this.appLanguageReadOnlyState.addState(s);
    }
  }
}
export {
  U as UmbAppLanguageContext,
  U as default
};
//# sourceMappingURL=app-language.context-DwkHp6Yy.js.map
