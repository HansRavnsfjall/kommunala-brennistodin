import { c as a, b as n } from "./template-item.store.context-token-rCTaUJ7s.js";
import { UmbTreeServerDataSourceBase as p, UmbTreeRepositoryBase as T } from "@umbraco-cms/backoffice/tree";
import { TemplateService as r } from "@umbraco-cms/backoffice/external/backend-api";
import { m as u } from "./manifests-DcuSN-5b.js";
class i extends p {
  /**
   * Creates an instance of UmbTemplateTreeServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbTemplateTreeServerDataSource
   */
  constructor(t) {
    super(t, {
      getRootItems: s,
      getChildrenOf: l,
      getAncestorsOf: c,
      mapper: m
    });
  }
}
const s = (e) => (
  // eslint-disable-next-line local-rules/no-direct-api-import
  r.getTreeTemplateRoot({ query: { skip: e.skip, take: e.take } })
), l = (e) => e.parent.unique === null ? s({
  skip: e.skip,
  take: e.take
}) : r.getTreeTemplateChildren({
  query: { parentId: e.parent.unique, skip: e.skip, take: e.take }
}), c = (e) => (
  // eslint-disable-next-line local-rules/no-direct-api-import
  r.getTreeTemplateAncestors({
    query: { descendantId: e.treeItem.unique }
  })
), m = (e) => ({
  unique: e.id,
  parent: {
    unique: e.parent ? e.parent.id : null,
    entityType: e.parent ? a : n
  },
  name: e.name,
  entityType: a,
  hasChildren: e.hasChildren,
  isFolder: !1,
  icon: "icon-document-html"
});
class f extends T {
  constructor(t) {
    super(t, i, u);
  }
  async requestTreeRoot() {
    const { data: t } = await this._treeSource.getRootItems({ skip: 0, take: 1 }), o = t ? t.total > 0 : !1;
    return { data: {
      unique: null,
      entityType: n,
      name: "#treeHeaders_templates",
      hasChildren: o,
      isFolder: !0
    } };
  }
}
export {
  f as UmbTemplateTreeRepository,
  f as default
};
//# sourceMappingURL=template-tree.repository-BzXO0Q8O.js.map
