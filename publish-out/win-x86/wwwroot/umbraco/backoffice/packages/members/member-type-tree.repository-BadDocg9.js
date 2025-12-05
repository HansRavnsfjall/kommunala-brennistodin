import { a as t, U as o, b as n } from "./member-type-tree.store.context-token-DyBHp9CK.js";
import { UmbTreeServerDataSourceBase as p, UmbTreeRepositoryBase as T } from "@umbraco-cms/backoffice/tree";
import { MemberTypeService as u } from "@umbraco-cms/backoffice/external/backend-api";
class i extends p {
  /**
   * Creates an instance of UmbMemberTypeTreeServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbMemberTypeTreeServerDataSource
   */
  constructor(r) {
    super(r, {
      getRootItems: s,
      getChildrenOf: c,
      getAncestorsOf: m,
      mapper: l
    });
  }
}
const s = (e) => (
  // eslint-disable-next-line local-rules/no-direct-api-import
  u.getTreeMemberTypeRoot({ query: { skip: e.skip, take: e.take } })
), c = (e) => {
  if (e.parent.unique === null)
    return s(e);
  throw new Error("Not supported for the member type tree");
}, m = () => {
  throw new Error("Not supported for the member type tree");
}, l = (e) => ({
  unique: e.id,
  parent: {
    unique: e.parent ? e.parent.id : null,
    entityType: e.parent ? t : o
  },
  name: e.name,
  entityType: t,
  hasChildren: e.hasChildren,
  isFolder: !1,
  icon: e.icon
});
class M extends T {
  constructor(r) {
    super(r, i, n);
  }
  async requestTreeRoot() {
    const { data: r } = await this._treeSource.getRootItems({ skip: 0, take: 0 }), a = r ? r.total > 0 : !1;
    return { data: {
      unique: null,
      entityType: o,
      name: "#treeHeaders_memberTypes",
      hasChildren: a,
      isFolder: !0
    } };
  }
}
export {
  M as UmbMemberTypeTreeRepository,
  M as default
};
//# sourceMappingURL=member-type-tree.repository-BadDocg9.js.map
