import { E as a, r, s as l, t as o } from "./index.js";
import { UmbServerFilePathUniqueSerializer as n } from "@umbraco-cms/backoffice/server-file-system";
import { UmbTreeServerDataSourceBase as T, UmbTreeRepositoryBase as p } from "@umbraco-cms/backoffice/tree";
import { FORMS_EMAIL_TEMPLATE_TREE_STORE_CONTEXT as E } from "./email-template-tree.store.js";
class u extends T {
  constructor(t) {
    super(t, {
      getRootItems: s,
      getChildrenOf: c,
      getAncestorsOf: m,
      mapper: _
    });
  }
}
const s = () => (
  // eslint-disable-next-line local-rules/no-direct-api-import
  a.getTreeEmailTemplateRoot()
), c = (e) => {
  const t = new n().toServerPath(
    e.parent.unique
  );
  return t === null ? s() : (
    // eslint-disable-next-line local-rules/no-direct-api-import
    a.getTreeEmailTemplateChildrenByParentPath({
      path: { parentPath: t }
    })
  );
}, m = () => {
  throw new Error("Ancestors is not available.");
}, _ = (e) => {
  const t = new n();
  return {
    unique: t.toUnique(e.path),
    parent: {
      unique: e.parent ? t.toUnique(e.parent.path) : null,
      entityType: e.parent ? r : o
    },
    entityType: e.isFolder ? r : l,
    name: e.name,
    isFolder: e.isFolder,
    hasChildren: e.hasChildren,
    icon: e.isFolder ? void 0 : "icon-notepad"
  };
};
class M extends p {
  constructor(t) {
    super(
      t,
      u,
      E
    );
  }
  async requestTreeRoot() {
    const { data: t } = await this._treeSource.getRootItems({
      skip: 0,
      take: 1
    }), i = t ? t.total > 0 : !1;
    return { data: {
      unique: null,
      entityType: o,
      name: "Email Templates",
      hasChildren: i,
      isFolder: !0
    } };
  }
}
export {
  M as FormsEmailTemplateTreeRepository,
  M as default
};
//# sourceMappingURL=email-template-tree.repository.js.map
