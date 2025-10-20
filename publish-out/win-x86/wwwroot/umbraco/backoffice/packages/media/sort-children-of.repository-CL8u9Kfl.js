import { MediaService as t } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecute as n } from "@umbraco-cms/backoffice/resources";
import { UmbControllerBase as s } from "@umbraco-cms/backoffice/class-api";
class u {
  #r;
  /**
   * Creates an instance of UmbSortChildrenOfMediaServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbSortChildrenOfMediaServerDataSource
   */
  constructor(r) {
    this.#r = r;
  }
  /**
   * Creates the Public Access for the given Media unique
   * @param {UmbSortChildrenOfArgs} args
   * @memberof UmbSortChildrenOfMediaServerDataSource
   */
  async sortChildrenOf(r) {
    if (r.unique === void 0) throw new Error("unique is missing");
    const o = r.sorting.map((i) => ({ id: i.unique, sortOrder: i.sortOrder }));
    return n(
      this.#r,
      t.putMediaSort({
        body: {
          parent: r.unique ? { id: r.unique } : null,
          sorting: o
        }
      })
    );
  }
}
class l extends s {
  #r = new u(this);
  async sortChildrenOf(r) {
    if (r.unique === void 0) throw new Error("Unique is missing");
    if (!r.sorting) throw new Error("Sorting details are missing");
    return this.#r.sortChildrenOf(r);
  }
}
export {
  l as UmbSortChildrenOfMediaRepository,
  l as api
};
//# sourceMappingURL=sort-children-of.repository-CL8u9Kfl.js.map
