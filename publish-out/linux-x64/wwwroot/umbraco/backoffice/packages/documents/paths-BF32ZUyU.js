import { UmbContextToken as t } from "@umbraco-cms/backoffice/context-api";
import { UmbModalToken as o } from "@umbraco-cms/backoffice/modal";
import { U } from "./paths-CRylFvqJ.js";
import { UmbPathPattern as T } from "@umbraco-cms/backoffice/router";
import { UMB_WORKSPACE_PATH_PATTERN as n } from "@umbraco-cms/backoffice/workspace";
const m = "document-blueprint-root", _ = "document-blueprint", O = "document-blueprint-folder", R = (e) => e.getEntityType() === _, D = new t("UmbVariantContext", void 0, R), I = new o("Umb.Modal.DocumentBlueprintOptionsCreate", {
  modal: {
    type: "sidebar",
    size: "small"
  }
}), c = "Umb.Repository.DocumentBlueprint.Move", P = new t(
  "UmbDocumentBlueprintItemStore"
), a = "Umb.Repository.DocumentBlueprint.Item", i = "Umb.Store.DocumentBlueprint.Item", C = new t(
  "UmbDocumentBlueprintDetailStore"
), A = "Umb.Repository.DocumentBlueprint.Detail", p = "Umb.Store.DocumentBlueprint.Detail", u = new t(
  "UmbDocumentBlueprintFolderStore"
), L = "Umb.Repository.DocumentBlueprint.Folder", S = "Umb.Store.DocumentBlueprint.Folder", l = new t(
  "UmbWorkspaceContext",
  void 0,
  (e) => e.getEntityType?.() === O
), b = "Umb.Workspace.DocumentBlueprint.Folder", y = new t(
  "UmbDocumentBlueprintTreeStore"
), d = "Umb.Repository.DocumentBlueprint.Tree", W = "Umb.Store.DocumentBlueprint.Tree", Y = "Umb.Tree.DocumentBlueprint", w = new t(
  "UmbWorkspaceContext",
  void 0,
  (e) => e.getEntityType?.() === _
), F = "Umb.Workspace.DocumentBlueprint", E = n.generateAbsolute({
  sectionName: U,
  entityType: _
}), K = new T("create/parent/:parentEntityType/:parentUnique/:documentTypeUnique", E), f = new T(
  "edit/:unique",
  E
);
export {
  R as I,
  m as U,
  _ as a,
  O as b,
  D as c,
  I as d,
  c as e,
  a as f,
  i as g,
  P as h,
  A as i,
  p as j,
  C as k,
  d as l,
  W as m,
  Y as n,
  y as o,
  L as p,
  S as q,
  u as r,
  b as s,
  l as t,
  F as u,
  w as v,
  E as w,
  K as x,
  f as y
};
//# sourceMappingURL=paths-BF32ZUyU.js.map
