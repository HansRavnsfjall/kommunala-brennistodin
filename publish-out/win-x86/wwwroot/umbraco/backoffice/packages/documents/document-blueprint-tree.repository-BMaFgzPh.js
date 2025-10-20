import { b as l, a as r, U as n, o as i } from "./paths-BF32ZUyU.js";
import { UmbTreeServerDataSourceBase as u, UmbTreeRepositoryBase as p } from "@umbraco-cms/backoffice/tree";
import { DocumentBlueprintService as o } from "@umbraco-cms/backoffice/external/backend-api";
import { UmbLocalizationController as T } from "@umbraco-cms/backoffice/localization-api";
class c extends u {
  /**
   * Creates an instance of UmbDocumentBlueprintTreeServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbDocumentBlueprintTreeServerDataSource
   */
  constructor(t) {
    super(t, {
      getRootItems: s,
      getChildrenOf: d,
      getAncestorsOf: _,
      mapper: E
    });
  }
}
const s = (e) => (
  // eslint-disable-next-line local-rules/no-direct-api-import
  o.getTreeDocumentBlueprintRoot({
    query: { foldersOnly: e.foldersOnly, skip: e.skip, take: e.take }
  })
), d = (e) => e.parent.unique === null ? s(e) : o.getTreeDocumentBlueprintChildren({
  query: { parentId: e.parent.unique, foldersOnly: e.foldersOnly }
}), _ = () => {
  throw new Error("Not implemented");
}, E = (e) => ({
  unique: e.id,
  parent: {
    unique: e.parent ? e.parent.id : null,
    entityType: e.parent ? r : n
  },
  name: e.variants?.[0].name ?? e.name,
  entityType: e.isFolder ? l : r,
  isFolder: e.isFolder,
  hasChildren: e.hasChildren,
  icon: e.isFolder ? "icon-folder" : "icon-blueprint"
});
class R extends p {
  #e = new T(this);
  constructor(t) {
    super(t, c, i);
  }
  async requestTreeRoot() {
    const { data: t } = await this._treeSource.getRootItems({ skip: 0, take: 1 }), a = t ? t.total > 0 : !1;
    return { data: {
      unique: null,
      entityType: n,
      name: this.#e.term("treeHeaders_contentBlueprints"),
      hasChildren: a,
      isFolder: !0
    } };
  }
}
export {
  R as UmbDocumentBlueprintTreeRepository,
  R as api
};
//# sourceMappingURL=document-blueprint-tree.repository-BMaFgzPh.js.map
