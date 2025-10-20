import { UmbRepositoryBase as c } from "@umbraco-cms/backoffice/repository";
import { umbExtensionsRegistry as n } from "@umbraco-cms/backoffice/extension-registry";
import { createObservablePart as o } from "@umbraco-cms/backoffice/observable-api";
class f extends c {
  constructor(e) {
    super(e);
  }
  /**
   * Requests the items for the given uniques
   * @param {Array<string>} uniques
   * @returns {*}
   * @memberof UmbItemRepositoryBase
   */
  async requestItems(e) {
    if (!e) throw new Error("Uniques are missing");
    return { data: n.getAllExtensions().filter((t) => t.type === "section").filter((t) => e.includes(t.alias)).map((t) => a(t)), asObservable: () => i(e) };
  }
  /**
   * Returns a promise with an observable of the items for the given uniques
   * @param {Array<string>} uniques
   * @returns {*}
   * @memberof UmbItemRepositoryBase
   */
  async items(e) {
    return i(e);
  }
}
const m = o(
  n.byType("section"),
  (s) => s.map((e) => a(e))
), i = (s) => o(m, (e) => e.filter((r) => s.includes(r.unique))), a = (s) => ({
  ...s,
  unique: s.alias
});
export {
  f as UmbSectionItemRepository,
  f as default
};
//# sourceMappingURL=section-item.repository-B9ft9W21.js.map
