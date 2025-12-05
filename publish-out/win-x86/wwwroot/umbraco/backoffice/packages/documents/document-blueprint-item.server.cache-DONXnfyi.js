import { UmbContextToken as t } from "@umbraco-cms/backoffice/context-api";
import { UmbModalToken as o } from "@umbraco-cms/backoffice/modal";
import { U } from "./paths-CRylFvqJ.js";
import { UmbPathPattern as T } from "@umbraco-cms/backoffice/router";
import { UMB_WORKSPACE_PATH_PATTERN as n } from "@umbraco-cms/backoffice/workspace";
import { UmbManagementApiItemDataCache as R } from "@umbraco-cms/backoffice/management-api";
const D = "document-blueprint-root", _ = "document-blueprint", s = "document-blueprint-folder", I = `${_}-property-value`, O = (e) => e.getEntityType() === _, c = new t("UmbVariantContext", void 0, O), P = new o("Umb.Modal.DocumentBlueprintOptionsCreate", {
  modal: {
    type: "sidebar",
    size: "small"
  }
}), i = "Umb.Repository.DocumentBlueprint.Move", p = new t(
  "UmbDocumentBlueprintItemStore"
), C = "Umb.Repository.DocumentBlueprint.Item", A = "Umb.Store.DocumentBlueprint.Item", u = new t(
  "UmbDocumentBlueprintDetailStore"
), L = "Umb.Repository.DocumentBlueprint.Detail", S = "Umb.Store.DocumentBlueprint.Detail", l = new t(
  "UmbDocumentBlueprintFolderStore"
), b = "Umb.Repository.DocumentBlueprint.Folder", y = "Umb.Store.DocumentBlueprint.Folder", d = new t(
  "UmbWorkspaceContext",
  void 0,
  (e) => e.getEntityType?.() === s
), Y = "Umb.Workspace.DocumentBlueprint.Folder", w = new t(
  "UmbDocumentBlueprintTreeStore"
), W = "Umb.Repository.DocumentBlueprint.Tree", F = "Umb.Store.DocumentBlueprint.Tree", f = "Umb.Tree.DocumentBlueprint", K = new t(
  "UmbWorkspaceContext",
  void 0,
  (e) => e.getEntityType?.() === _
), k = "Umb.Workspace.DocumentBlueprint", E = n.generateAbsolute({
  sectionName: U,
  entityType: _
}), x = new T("create/parent/:parentEntityType/:parentUnique/:documentTypeUnique", E), X = new T(
  "edit/:unique",
  E
), g = new R();
export {
  g as A,
  O as I,
  D as U,
  _ as a,
  s as b,
  c,
  P as d,
  i as e,
  C as f,
  A as g,
  p as h,
  L as i,
  S as j,
  u as k,
  W as l,
  F as m,
  f as n,
  w as o,
  b as p,
  y as q,
  l as r,
  Y as s,
  d as t,
  k as u,
  K as v,
  E as w,
  x,
  X as y,
  I as z
};
//# sourceMappingURL=document-blueprint-item.server.cache-DONXnfyi.js.map
