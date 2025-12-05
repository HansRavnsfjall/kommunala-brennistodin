import { h as T, f as a, g as n, D as p } from "./constants-DE93IEgK.js";
import { UmbTreeServerDataSourceBase as u, UmbTreeRepositoryBase as l } from "@umbraco-cms/backoffice/tree";
import { DataTypeService as s } from "@umbraco-cms/backoffice/external/backend-api";
import { umbExtensionsRegistry as d } from "@umbraco-cms/backoffice/extension-registry";
let o = [];
class y extends u {
  /**
   * Creates an instance of UmbDataTypeTreeServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbDataTypeTreeServerDataSource
   */
  constructor(t) {
    super(t, {
      getRootItems: i,
      getChildrenOf: c,
      getAncestorsOf: _,
      mapper: E
    }), d.byType("propertyEditorUi").subscribe((r) => {
      o = r;
    }).unsubscribe();
  }
}
const i = async (e) => s.getTreeDataTypeRoot({
  query: { foldersOnly: e.foldersOnly, skip: e.skip, take: e.take }
}), c = (e) => e.parent.unique === null ? i(e) : s.getTreeDataTypeChildren({
  query: { parentId: e.parent.unique, foldersOnly: e.foldersOnly, skip: e.skip, take: e.take }
}), _ = (e) => (
  // eslint-disable-next-line local-rules/no-direct-api-import
  s.getTreeDataTypeAncestors({
    query: { descendantId: e.treeItem.unique }
  })
), E = (e) => ({
  unique: e.id,
  parent: {
    unique: e.parent?.id || null,
    entityType: e.parent ? a : n
  },
  icon: o.find((t) => t.alias === e.editorUiAlias)?.meta.icon,
  name: e.name,
  entityType: e.isFolder ? T : a,
  isFolder: e.isFolder,
  hasChildren: e.hasChildren
});
class O extends l {
  constructor(t) {
    super(t, y, p);
  }
  async requestTreeRoot() {
    const { data: t } = await this._treeSource.getRootItems({ skip: 0, take: 1 }), r = t ? t.total > 0 : !1;
    return { data: {
      unique: null,
      entityType: n,
      name: "#treeHeaders_dataTypes",
      hasChildren: r,
      isFolder: !0
    } };
  }
}
export {
  O as UmbDataTypeTreeRepository,
  O as api
};
//# sourceMappingURL=data-type-tree.repository-siBRczJW.js.map
