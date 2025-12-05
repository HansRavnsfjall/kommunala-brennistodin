import { DocumentService as e } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecute as n } from "@umbraco-cms/backoffice/resources";
import { UmbControllerBase as s } from "@umbraco-cms/backoffice/class-api";
class u {
  #r;
  /**
   * Creates an instance of UmbSortChildrenOfDocumentServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbSortChildrenOfDocumentServerDataSource
   */
  constructor(r) {
    this.#r = r;
  }
  /**
   * Creates the Public Access for the given Document unique
   * @param {UmbSortChildrenOfArgs} args
   * @memberof UmbSortChildrenOfDocumentServerDataSource
   */
  async sortChildrenOf(r) {
    if (r.unique === void 0) throw new Error("unique is missing");
    const t = r.sorting.map((i) => ({ id: i.unique, sortOrder: i.sortOrder }));
    return n(
      this.#r,
      e.putDocumentSort({
        body: {
          parent: r.unique ? { id: r.unique } : null,
          sorting: t
        }
      })
    );
  }
}
class h extends s {
  #r = new u(this);
  async sortChildrenOf(r) {
    if (r.unique === void 0) throw new Error("Unique is missing");
    if (!r.sorting) throw new Error("Sorting details are missing");
    return this.#r.sortChildrenOf(r);
  }
}
export {
  h as UmbSortChildrenOfDocumentRepository,
  h as api
};
//# sourceMappingURL=sort-children-of.repository-B6_m1pd9.js.map
