import { U as i } from "./user-repository-base-3Lpa5j11.js";
import { d } from "./constants-BH7VsFPT.js";
import { UserService as c } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecute as l } from "@umbraco-cms/backoffice/resources";
class p {
  #e;
  /**
   * Creates an instance of UmbUserCollectionServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbUserCollectionServerDataSource
   */
  constructor(t) {
    this.#e = t;
  }
  /**
   * Gets the user collection filtered by the given filter.
   * @param {UmbUserCollectionFilterModel} filter
   * @returns {*}
   * @memberof UmbUserCollectionServerDataSource
   */
  async getCollection(t) {
    const { data: a, error: r } = await l(
      this.#e,
      c.getFilterUser({
        query: {
          filter: t.filter,
          orderBy: t.orderBy,
          // TODO: This is a temporary workaround to avoid a type error.
          orderDirection: t.orderDirection,
          // TODO: This is a temporary workaround to avoid a type error.
          skip: t.skip,
          take: t.take,
          userGroupIds: t.userGroupIds,
          userStates: t.userStates
          // TODO: This is a temporary workaround to avoid a type error.
        }
      })
    );
    if (a) {
      const { items: n, total: u } = a;
      return { data: { items: n.map((e) => ({
        entityType: d,
        email: e.email,
        userName: e.userName,
        name: e.name,
        userGroupUniques: e.userGroupIds.map((s) => ({
          unique: s.id
        })),
        unique: e.id,
        languageIsoCode: e.languageIsoCode || null,
        documentStartNodeUniques: e.documentStartNodeIds.map((s) => ({
          unique: s.id
        })),
        mediaStartNodeUniques: e.mediaStartNodeIds.map((s) => ({
          unique: s.id
        })),
        hasDocumentRootAccess: e.hasDocumentRootAccess,
        hasMediaRootAccess: e.hasMediaRootAccess,
        avatarUrls: e.avatarUrls,
        state: e.state,
        failedLoginAttempts: e.failedLoginAttempts,
        createDate: e.createDate,
        updateDate: e.updateDate,
        lastLoginDate: e.lastLoginDate || null,
        lastLockoutDate: e.lastLockoutDate || null,
        lastPasswordChangeDate: e.lastPasswordChangeDate || null,
        isAdmin: e.isAdmin,
        kind: e.kind
      })), total: u } };
    }
    return { error: r };
  }
}
class I extends i {
  #e;
  constructor(t) {
    super(t), this.#e = new p(t);
  }
  async requestCollection(t = { skip: 0, take: 100 }) {
    await this.init;
    const { data: a, error: r } = await this.#e.getCollection(t);
    return a && this.detailStore.appendItems(a.items), { data: a, error: r, asObservable: () => this.detailStore.all() };
  }
}
export {
  I as UmbUserCollectionRepository,
  I as default
};
//# sourceMappingURL=user-collection.repository-CsIysBwS.js.map
