import { q as l, o as n, p as o, g as u } from "./partial-view-workspace.context-token-DmMOFZmM.js";
import { UmbServerFilePathUniqueSerializer as r } from "@umbraco-cms/backoffice/server-file-system";
import { UmbTreeServerDataSourceBase as p, UmbTreeRepositoryBase as T } from "@umbraco-cms/backoffice/tree";
import { PartialViewService as a } from "@umbraco-cms/backoffice/external/backend-api";
class c extends p {
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
class q extends T {
  constructor(t) {
    super(t, c, u);
  }
  async requestTreeRoot() {
    const { data: t } = await this._treeSource.getRootItems({ skip: 0, take: 1 }), i = t ? t.total > 0 : !1;
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
  q as UmbPartialViewTreeRepository,
  q as default
};
//# sourceMappingURL=partial-view-tree.repository-EgGFaaqX.js.map
