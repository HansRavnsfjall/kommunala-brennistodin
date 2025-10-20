import { UserGroupService as r } from "@umbraco-cms/backoffice/external/backend-api";
import "@umbraco-cms/backoffice/id";
import "@umbraco-cms/backoffice/repository";
import { UmbControllerBase as i } from "@umbraco-cms/backoffice/class-api";
import { tryExecute as n } from "@umbraco-cms/backoffice/resources";
import { e as c, t as l } from "./constants-jrjjZjNa.js";
import "@umbraco-cms/backoffice/entity-item";
class u {
  #e;
  /**
   * Creates an instance of UmbUserGroupCollectionServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbUserGroupCollectionServerDataSource
   */
  constructor(s) {
    this.#e = s;
  }
  async getCollection(s) {
    const { data: t, error: o } = await n(
      this.#e,
      r.getFilterUserGroup({ query: { skip: s.skip, take: s.take, filter: s.query } })
    );
    return t ? { data: { items: t.items.map((e) => ({
      alias: e.alias,
      aliasCanBeChanged: e.aliasCanBeChanged,
      documentRootAccess: e.documentRootAccess,
      documentStartNode: e.documentStartNode ? { unique: e.documentStartNode.id } : null,
      entityType: c,
      fallbackPermissions: e.fallbackPermissions,
      hasAccessToAllLanguages: e.hasAccessToAllLanguages,
      icon: e.icon || null,
      isDeletable: e.isDeletable,
      languages: e.languages,
      mediaRootAccess: e.mediaRootAccess,
      mediaStartNode: e.mediaStartNode ? { unique: e.mediaStartNode.id } : null,
      name: e.name,
      permissions: e.permissions,
      sections: e.sections,
      unique: e.id
    })), total: t.total } } : { error: o };
  }
}
class R extends i {
  #e;
  #s;
  #t;
  constructor(s) {
    super(s), this.#t = new u(this._host), this.#e = this.consumeContext(l, (t) => {
      this.#s = t;
    }).asPromise({ preventTimeout: !0 }).catch(() => {
    });
  }
  async requestCollection(s = { skip: 0, take: 100 }) {
    await this.#e;
    const { data: t, error: o } = await this.#t.getCollection(s);
    return t && this.#s?.appendItems(t.items), { data: t, error: o, asObservable: () => this.#s.all() };
  }
}
export {
  R as UmbUserGroupCollectionRepository,
  R as default
};
//# sourceMappingURL=user-group-collection.repository-C6YjWsl5.js.map
