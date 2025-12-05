import { e as n, l as a, a as u } from "./manifests-BP7S9LPy.js";
import { UmbTreeServerDataSourceBase as c, UmbTreeRepositoryBase as d } from "@umbraco-cms/backoffice/tree";
import { DocumentService as r } from "@umbraco-cms/backoffice/external/backend-api";
class p extends c {
  /**
   * Creates an instance of UmbDocumentTreeServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbDocumentTreeServerDataSource
   */
  constructor(t) {
    super(t, {
      getRootItems: o,
      getChildrenOf: T,
      getAncestorsOf: i,
      mapper: l
    });
  }
}
const o = (e) => (
  // eslint-disable-next-line local-rules/no-direct-api-import
  r.getTreeDocumentRoot({
    query: { dataTypeId: e.dataType?.unique, skip: e.skip, take: e.take }
  })
), T = (e) => e.parent.unique === null ? o(e) : r.getTreeDocumentChildren({
  query: { parentId: e.parent.unique, dataTypeId: e.dataType?.unique, skip: e.skip, take: e.take }
}), i = (e) => (
  // eslint-disable-next-line local-rules/no-direct-api-import
  r.getTreeDocumentAncestors({
    query: { descendantId: e.treeItem.unique }
  })
), l = (e) => ({
  ancestors: e.ancestors.map((t) => ({
    unique: t.id,
    entityType: n
  })),
  unique: e.id,
  parent: {
    unique: e.parent ? e.parent.id : null,
    entityType: e.parent ? n : a
  },
  entityType: n,
  noAccess: e.noAccess,
  isTrashed: e.isTrashed,
  hasChildren: e.hasChildren,
  isProtected: e.isProtected,
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
    state: t.state
  })),
  name: e.variants[0]?.name,
  // TODO: this is not correct. We need to get it from the variants. This is a temp solution.
  isFolder: !1,
  createDate: e.createDate
});
class _ extends d {
  constructor(t) {
    super(t, p, u);
  }
  async requestTreeRoot() {
    const { data: t } = await this._treeSource.getRootItems({ skip: 0, take: 1 }), s = t ? t.total > 0 : !1;
    return { data: {
      unique: null,
      entityType: a,
      name: "#treeHeaders_content",
      hasChildren: s,
      isFolder: !0
    } };
  }
}
export {
  _ as UmbDocumentTreeRepository,
  _ as default
};
//# sourceMappingURL=document-tree.repository-BikxlYMi.js.map
