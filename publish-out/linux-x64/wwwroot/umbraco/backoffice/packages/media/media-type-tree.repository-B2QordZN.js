import { m as T, b as n, n as s, d as i } from "./constants-DT5L-WXf.js";
import { MediaTypeService as r } from "@umbraco-cms/backoffice/external/backend-api";
import { UmbTreeServerDataSourceBase as d, UmbTreeRepositoryBase as p } from "@umbraco-cms/backoffice/tree";
class u extends d {
  /**
   * Creates an instance of UmbMediaTypeTreeServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbMediaTypeTreeServerDataSource
   */
  constructor(t) {
    super(t, {
      getRootItems: a,
      getChildrenOf: l,
      getAncestorsOf: c,
      mapper: y
    });
  }
}
const a = (e) => (
  // eslint-disable-next-line local-rules/no-direct-api-import
  r.getTreeMediaTypeRoot({
    query: { foldersOnly: e.foldersOnly, skip: e.skip, take: e.take }
  })
), l = (e) => e.parent.unique === null ? a(e) : r.getTreeMediaTypeChildren({
  query: { parentId: e.parent.unique, foldersOnly: e.foldersOnly, skip: e.skip, take: e.take }
}), c = (e) => (
  // eslint-disable-next-line local-rules/no-direct-api-import
  r.getTreeMediaTypeAncestors({
    query: { descendantId: e.treeItem.unique }
  })
), y = (e) => ({
  unique: e.id,
  parent: {
    unique: e.parent ? e.parent.id : null,
    entityType: e.parent ? n : s
  },
  name: e.name,
  entityType: e.isFolder ? T : n,
  hasChildren: e.hasChildren,
  isFolder: e.isFolder,
  icon: e.icon
});
class I extends p {
  constructor(t) {
    super(t, u, i);
  }
  async requestTreeRoot() {
    const { data: t } = await this._treeSource.getRootItems({ skip: 0, take: 1 }), o = t ? t.total > 0 : !1;
    return { data: {
      unique: null,
      entityType: s,
      name: "#treeHeaders_mediaTypes",
      hasChildren: o,
      isFolder: !0
    } };
  }
}
export {
  I as UmbMediaTypeTreeRepository,
  I as default
};
//# sourceMappingURL=media-type-tree.repository-B2QordZN.js.map
