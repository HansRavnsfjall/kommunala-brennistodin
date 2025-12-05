import { UmbModalToken as e } from "@umbraco-cms/backoffice/modal";
import { UmbContextToken as A } from "@umbraco-cms/backoffice/context-api";
import { UMB_SETTINGS_SECTION_PATHNAME as _ } from "@umbraco-cms/backoffice/settings";
import { UMB_WORKSPACE_PATH_PATTERN as a } from "@umbraco-cms/backoffice/workspace";
import { UmbPathPattern as t } from "@umbraco-cms/backoffice/router";
const g = "Umb.Repository.LanguageCollection", O = "Umb.CollectionView.Language.Table", m = "Umb.Collection.Language", S = "Umb.Condition.UserPermission.Language", c = new e(
  "Umb.Modal.LanguagePicker",
  {
    modal: {
      type: "sidebar",
      size: "small"
    }
  }
), r = new A("UmbLanguageDetailStore"), C = "Umb.Repository.Language.Detail", I = "Umb.Store.Language.Detail", i = new A("UmbLanguageItemStore"), M = "Umb.Repository.LanguageItem", R = "Umb.Store.LanguageItem", P = new e("Umb.Modal.Workspace", {
  modal: {
    type: "sidebar",
    size: "large"
  },
  data: { entityType: "language", preset: {} }
  // Recast the type, so the entityType data prop is not required:
}), b = new A(
  "UmbWorkspaceContext",
  void 0,
  (n) => n.getEntityType?.() === "language"
), B = "Umb.Workspace.Language", E = "language", U = "language-root", l = a.generateAbsolute({
  sectionName: _,
  entityType: U
}), p = "Umb.Workspace.LanguageRoot", o = a.generateAbsolute({
  sectionName: _,
  entityType: E
}), u = new t("create", o), W = new t(
  "edit/:unique",
  o
), y = new A("UmbAppLanguageContext"), d = new A(
  "UmbLanguageAccessWorkspaceContext"
);
export {
  M as U,
  c as a,
  E as b,
  U as c,
  y as d,
  d as e,
  m as f,
  g,
  O as h,
  S as i,
  C as j,
  I as k,
  r as l,
  R as m,
  i as n,
  B as o,
  P as p,
  b as q,
  p as r,
  l as s,
  o as t,
  u,
  W as v
};
//# sourceMappingURL=language-access.workspace.context-token-Bqcpkg-3.js.map
