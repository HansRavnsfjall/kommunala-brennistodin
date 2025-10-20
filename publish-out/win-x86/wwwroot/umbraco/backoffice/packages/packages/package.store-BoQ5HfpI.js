import { b as a } from "./constants-CH_iDk6H.js";
import { ReplaySubject as i } from "@umbraco-cms/backoffice/external/rxjs";
import { UmbArrayState as t, UmbObjectState as r } from "@umbraco-cms/backoffice/observable-api";
import { UmbStoreBase as n } from "@umbraco-cms/backoffice/store";
class c extends n {
  /**
   * Creates an instance of PackageStore.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof PackageStore
   */
  constructor(e) {
    super(e, a.toString(), new t([], (s) => s.name)), this.#e = new r({ marketplaceUrl: "" }), this.#s = new i(1), this.#t = new t([], (s) => s.alias), this.#a = new t([], (s) => s.packageName), this.configuration = this.#e.asObservable(), this.rootItems = this.#s.asObservable(), this.extensions = this.#t.asObservable(), this.migrations = this.#a.asObservable(), this.isPackagesLoaded = !1;
  }
  #e;
  #s;
  #t;
  #a;
  /**
   * Append items to the store
   * @param packages
   */
  appendItems(e) {
    this.#s.next(e), this.isPackagesLoaded = !0;
  }
  appendExtensions(e) {
    this.#t.append(e);
  }
  appendMigrations(e) {
    this.#a.append(e);
  }
  setConfiguration(e) {
    this.#e.setValue(e);
  }
}
export {
  c as UmbPackageStore,
  c as default
};
//# sourceMappingURL=package.store-BoQ5HfpI.js.map
