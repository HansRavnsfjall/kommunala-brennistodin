import { b as n, a, u as s } from "./paths-pWW_vsmu.js";
import { UmbTreeServerDataSourceBase as u, UmbTreeRepositoryBase as c } from "@umbraco-cms/backoffice/tree";
import { DictionaryService as r } from "@umbraco-cms/backoffice/external/backend-api";
class p extends u {
  /**
   * Creates an instance of UmbDictionaryTreeServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbDictionaryTreeServerDataSource
   */
  constructor(t) {
    super(t, {
      getRootItems: o,
      getChildrenOf: T,
      getAncestorsOf: d,
      mapper: l
    });
  }
}
const o = (e) => (
  // eslint-disable-next-line local-rules/no-direct-api-import
  r.getTreeDictionaryRoot({ query: { skip: e.skip, take: e.take } })
), T = (e) => e.parent.unique === null ? o(e) : r.getTreeDictionaryChildren({
  query: { parentId: e.parent.unique, skip: e.skip, take: e.take }
}), d = (e) => (
  // eslint-disable-next-line local-rules/no-direct-api-import
  r.getTreeDictionaryAncestors({
    query: { descendantId: e.treeItem.unique }
  })
), l = (e) => ({
  unique: e.id,
  parent: {
    unique: e.parent?.id || null,
    entityType: e.parent ? n : a
  },
  name: e.name,
  entityType: n,
  hasChildren: e.hasChildren,
  isFolder: !1,
  icon: "icon-book-alt"
});
class _ extends c {
  constructor(t) {
    super(t, p, s);
  }
  async requestTreeRoot() {
    const { data: t } = await this._treeSource.getRootItems({ skip: 0, take: 1 }), i = t ? t.total > 0 : !1;
    return { data: {
      unique: null,
      entityType: a,
      name: "#treeHeaders_dictionary",
      hasChildren: i,
      isFolder: !0
    } };
  }
}
export {
  _ as UmbDictionaryTreeRepository,
  _ as api
};
//# sourceMappingURL=dictionary-tree.repository-QA-H50_c.js.map
