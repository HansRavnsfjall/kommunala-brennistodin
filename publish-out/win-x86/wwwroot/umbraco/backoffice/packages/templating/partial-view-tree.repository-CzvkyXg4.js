import { d as l, b as n, c as o, j as u } from "./partial-view-workspace.context-token-DXd6FPys.js";
import { UmbServerFilePathUniqueSerializer as r } from "@umbraco-cms/backoffice/server-file-system";
import { UmbTreeServerDataSourceBase as c, UmbTreeRepositoryBase as p } from "@umbraco-cms/backoffice/tree";
import { PartialViewService as a } from "@umbraco-cms/backoffice/external/backend-api";
class T extends c {
  /**
   * Creates an instance of UmbPartialViewTreeServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbPartialViewTreeServerDataSource
   */
  constructor(t) {
    super(t, {
      getRootItems: s,
      getChildrenOf: d,
      getAncestorsOf: _,
      mapper: h
    });
  }
}
const s = (e) => (
  // eslint-disable-next-line local-rules/no-direct-api-import
  a.getTreePartialViewRoot({ query: { skip: e.skip, take: e.take } })
), d = (e) => {
  const t = new r().toServerPath(e.parent.unique);
  return t === null ? s(e) : a.getTreePartialViewChildren({
    query: { parentPath: t, skip: e.skip, take: e.take }
  });
}, _ = (e) => {
  const t = new r().toServerPath(e.treeItem.unique);
  if (!t) throw new Error("Descendant path is not available");
  return a.getTreePartialViewAncestors({
    query: { descendantPath: t }
  });
}, h = (e) => {
  const t = new r();
  return {
    unique: t.toUnique(e.path),
    parent: {
      unique: e.parent ? t.toUnique(e.parent.path) : null,
      entityType: e.parent ? n : o
    },
    entityType: e.isFolder ? l : n,
    name: e.name,
    isFolder: e.isFolder,
    hasChildren: e.hasChildren,
    icon: e.isFolder ? void 0 : "icon-document-html"
  };
};
class w extends p {
  constructor(t) {
    super(t, T, u);
  }
  async requestTreeRoot() {
    const { data: t } = await this._treeSource.getRootItems({ skip: 0, take: 0 }), i = t ? t.total > 0 : !1;
    return { data: {
      unique: null,
      entityType: o,
      name: "#treeHeaders_partialViews",
      hasChildren: i,
      isFolder: !0
    } };
  }
}
export {
  w as UmbPartialViewTreeRepository,
  w as default
};
//# sourceMappingURL=partial-view-tree.repository-CzvkyXg4.js.map
