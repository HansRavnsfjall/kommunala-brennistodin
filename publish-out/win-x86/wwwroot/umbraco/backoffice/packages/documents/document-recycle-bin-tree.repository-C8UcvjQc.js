import { e as r, J as o, E as c } from "./manifests-BfVrApfB.js";
import { DocumentService as n } from "@umbraco-cms/backoffice/external/backend-api";
import { UmbTreeServerDataSourceBase as u, UmbTreeRepositoryBase as l } from "@umbraco-cms/backoffice/tree";
class i extends u {
  /**
   * Creates an instance of UmbDocumentRecycleBinTreeServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbDocumentRecycleBinTreeServerDataSource
   */
  constructor(t) {
    super(t, {
      getRootItems: s,
      getChildrenOf: p,
      getAncestorsOf: T,
      mapper: d
    });
  }
}
const s = (e) => (
  // eslint-disable-next-line local-rules/no-direct-api-import
  n.getRecycleBinDocumentRoot({ query: { skip: e.skip, take: e.take } })
), p = (e) => e.parent.unique === null ? s(e) : n.getRecycleBinDocumentChildren({
  query: { parentId: e.parent.unique, skip: e.skip, take: e.take }
}), T = (e) => (
  // eslint-disable-next-line local-rules/no-direct-api-import
  n.getTreeDocumentAncestors({
    query: { descendantId: e.treeItem.unique }
  })
), d = (e) => ({
  unique: e.id,
  parent: {
    unique: e.parent ? e.parent.id : null,
    entityType: e.parent ? r : o
  },
  entityType: r,
  noAccess: !1,
  isTrashed: !0,
  hasChildren: e.hasChildren,
  isProtected: !1,
  documentType: {
    unique: e.documentType.id,
    icon: e.documentType.icon,
    collection: e.documentType.collection ? { unique: e.documentType.collection.id } : null
  },
  variants: e.variants.map((t) => ({
    name: t.name,
    culture: t.culture || null,
    segment: null,
    // TODO: add segment to the backend API?
    state: t.state,
    flags: t.flags ?? []
  })),
  name: e.variants[0]?.name,
  // TODO: this is not correct. We need to get it from the variants. This is a temp solution.
  isFolder: !1,
  createDate: e.createDate,
  // TODO: Recycle bin items should have flags, but the API does not return any at the moment. [NL]
  flags: e.flags ?? []
});
class E extends l {
  constructor(t) {
    super(t, i, c);
  }
  async requestTreeRoot() {
    const { data: t } = await this._treeSource.getRootItems({ skip: 0, take: 0 }), a = t ? t.total > 0 : !1;
    return { data: {
      unique: null,
      entityType: o,
      name: "#treeHeaders_contentRecycleBin",
      icon: "icon-trash",
      hasChildren: a,
      isContainer: !1,
      isFolder: !0
    } };
  }
}
export {
  E as UmbDocumentRecycleBinTreeRepository,
  E as api
};
//# sourceMappingURL=document-recycle-bin-tree.repository-C8UcvjQc.js.map
