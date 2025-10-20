import { UmbContextToken as t } from "@umbraco-cms/backoffice/context-api";
import { UmbUniqueTreeStore as A } from "@umbraco-cms/backoffice/tree";
import { UmbPathPattern as T } from "@umbraco-cms/backoffice/router";
import { UMB_TRANSLATION_SECTION_PATHNAME as i } from "@umbraco-cms/backoffice/translation";
import { UMB_WORKSPACE_PATH_PATTERN as n } from "@umbraco-cms/backoffice/workspace";
const U = "Umb.Repository.Dictionary.Collection", D = "Umb.CollectionView.Dictionary.Table", S = "Umb.Collection.Dictionary", C = "Umb.Repository.Dictionary.Move", N = new t(
  "UmbDictionaryDetailStore"
), m = "Umb.Repository.Dictionary.Detail", y = "Umb.Store.Dictionary.Detail", Y = "Umb.Repository.Dictionary.Export", M = "Umb.Repository.Dictionary.Import", b = new t("UmbDictionaryItemStore"), P = "Umb.Repository.Dictionary.Item", B = "Umb.Store.Dictionary.Item", L = "Umb.GlobalSearch.Dictionary", p = "Umb.SearchProvider.Dictionary", l = "Umb.Repository.Dictionary.Tree", d = "Umb.Store.Dictionary.Tree", u = "Umb.Tree.Dictionary", W = new t(
  "UmbWorkspaceContext",
  void 0,
  (o) => o.getEntityType?.() === "dictionary"
), f = "Umb.Workspace.Dictionary", w = "dictionary-root", R = "dictionary";
class _ extends A {
  /**
   * Creates an instance of UmbDictionaryTreeStore.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbDictionaryTreeStore
   */
  constructor(r) {
    super(r, I.toString());
  }
}
const I = new t("UmbDictionaryTreeStore"), H = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  UMB_DICTIONARY_TREE_STORE_CONTEXT: I,
  UmbDictionaryTreeStore: _,
  api: _
}, Symbol.toStringTag, { value: "Module" })), e = n.generateAbsolute({
  sectionName: i,
  entityType: R
}), g = new T("create/parent/:parentEntityType/:parentUnique", e), x = new T("edit/:unique", e);
export {
  P as U,
  w as a,
  R as b,
  S as c,
  U as d,
  D as e,
  C as f,
  m as g,
  y as h,
  N as i,
  Y as j,
  M as k,
  B as l,
  b as m,
  p as n,
  L as o,
  l as p,
  d as q,
  u as r,
  f as s,
  W as t,
  I as u,
  e as v,
  g as w,
  x,
  H as y
};
//# sourceMappingURL=paths-pWW_vsmu.js.map
