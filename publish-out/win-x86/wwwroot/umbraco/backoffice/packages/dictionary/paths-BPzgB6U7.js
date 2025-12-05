import { UmbContextToken as t } from "@umbraco-cms/backoffice/context-api";
import { UmbManagementApiItemDataCache as i } from "@umbraco-cms/backoffice/management-api";
import { UmbUniqueTreeStore as A } from "@umbraco-cms/backoffice/tree";
import { UmbPathPattern as e } from "@umbraco-cms/backoffice/router";
import { UMB_TRANSLATION_SECTION_PATHNAME as r } from "@umbraco-cms/backoffice/translation";
import { UMB_WORKSPACE_PATH_PATTERN as a } from "@umbraco-cms/backoffice/workspace";
const C = "Umb.Repository.Dictionary.Collection", S = "Umb.CollectionView.Dictionary.Table", m = "Umb.Collection.Dictionary", N = "Umb.Repository.Dictionary.Move", y = new t(
  "UmbDictionaryDetailStore"
), M = "Umb.Repository.Dictionary.Detail", Y = "Umb.Store.Dictionary.Detail", b = "Umb.Repository.Dictionary.Export", p = "Umb.Repository.Dictionary.Import", B = new t("UmbDictionaryItemStore"), L = "Umb.Repository.Dictionary.Item", P = "Umb.Store.Dictionary.Item", l = "Umb.GlobalSearch.Dictionary", d = "Umb.SearchProvider.Dictionary", u = "Umb.Repository.Dictionary.Tree", f = "Umb.Store.Dictionary.Tree", w = "Umb.Tree.Dictionary", W = new t(
  "UmbWorkspaceContext",
  void 0,
  (o) => o.getEntityType?.() === "dictionary"
), g = "Umb.Workspace.Dictionary", H = "Umb.MenuItem.Dictionary", h = "dictionary-root", R = "dictionary", x = new i();
class _ extends A {
  /**
   * Creates an instance of UmbDictionaryTreeStore.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbDictionaryTreeStore
   */
  constructor(n) {
    super(n, I.toString());
  }
}
const I = new t("UmbDictionaryTreeStore"), K = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  UMB_DICTIONARY_TREE_STORE_CONTEXT: I,
  UmbDictionaryTreeStore: _,
  api: _
}, Symbol.toStringTag, { value: "Module" })), T = a.generateAbsolute({
  sectionName: r,
  entityType: R
}), v = new e("create/parent/:parentEntityType/:parentUnique", T), X = new e("edit/:unique", T);
export {
  K as A,
  L as U,
  h as a,
  R as b,
  m as c,
  C as d,
  S as e,
  N as f,
  M as g,
  Y as h,
  y as i,
  b as j,
  p as k,
  P as l,
  B as m,
  d as n,
  l as o,
  u as p,
  f as q,
  w as r,
  g as s,
  W as t,
  H as u,
  I as v,
  T as w,
  v as x,
  X as y,
  x as z
};
//# sourceMappingURL=paths-BPzgB6U7.js.map
