import { h as i } from "./dropzone.element-DJdyaEXj.js";
import { m as r, n as o, y as c } from "./input-upload-field.element-BKvVffkE.js";
import { MediaService as n } from "@umbraco-cms/backoffice/external/backend-api";
import { UmbTreeServerDataSourceBase as u, UmbTreeRepositoryBase as l } from "@umbraco-cms/backoffice/tree";
class d extends u {
  /**
   * Creates an instance of UmbMediaRecycleBinTreeServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbMediaRecycleBinTreeServerDataSource
   */
  constructor(t) {
    super(t, {
      getRootItems: a,
      getChildrenOf: p,
      getAncestorsOf: T,
      mapper: y
    });
  }
}
const a = (e) => (
  // eslint-disable-next-line local-rules/no-direct-api-import
  n.getRecycleBinMediaRoot({ query: { skip: e.skip, take: e.take } })
), p = (e) => e.parent.unique === null ? a(e) : n.getRecycleBinMediaChildren({
  query: { parentId: e.parent.unique, skip: e.skip, take: e.take }
}), T = (e) => (
  // eslint-disable-next-line local-rules/no-direct-api-import
  n.getTreeMediaAncestors({
    query: { descendantId: e.treeItem.unique }
  })
), y = (e) => ({
  unique: e.id,
  parent: {
    unique: e.parent ? e.parent.id : null,
    entityType: e.parent ? r : o
  },
  entityType: r,
  noAccess: !1,
  isTrashed: !0,
  hasChildren: e.hasChildren,
  mediaType: {
    unique: e.mediaType.id,
    icon: e.mediaType.icon,
    collection: e.mediaType.collection ? { unique: e.mediaType.collection.id } : null
  },
  variants: e.variants.map((t) => ({
    name: t.name,
    culture: t.culture || null,
    segment: null
    // TODO: add segment to the backend API?
  })),
  name: e.variants[0]?.name,
  // TODO: this is not correct. We need to get it from the variants. This is a temp solution.
  isFolder: !1,
  createDate: e.createDate
});
class M extends l {
  constructor(t) {
    super(t, d, c);
  }
  async requestTreeRoot() {
    const { data: t } = await this._treeSource.getRootItems({ skip: 0, take: 1 }), s = t ? t.total > 0 : !1;
    return { data: {
      unique: null,
      entityType: i,
      name: "#treeHeaders_contentRecycleBin",
      icon: "icon-trash",
      hasChildren: s,
      isContainer: !1,
      isFolder: !0
    } };
  }
}
export {
  M as UmbMediaRecycleBinTreeRepository,
  M as api
};
//# sourceMappingURL=media-recycle-bin-tree.repository-D_r6qJ9J.js.map
