import { UmbModalToken as E } from "@umbraco-cms/backoffice/modal";
import { UMB_SETTINGS_SECTION_PATHNAME as t } from "@umbraco-cms/backoffice/settings";
import { UmbPathPattern as e } from "@umbraco-cms/backoffice/router";
import { UMB_WORKSPACE_PATH_PATTERN as o, UMB_WORKSPACE_MODAL as s } from "@umbraco-cms/backoffice/workspace";
import { UmbContextToken as T } from "@umbraco-cms/backoffice/context-api";
const c = new E(
  "Umb.Modal.DocumentTypeCreateOptions",
  {
    modal: {
      type: "sidebar",
      size: "small"
    }
  }
), C = "Umb.Repository.DocumentType.Duplicate", a = "Umb.Repository.DocumentType.Export", p = new E("Umb.Modal.DocumentType.Import", {
  modal: {
    type: "sidebar",
    size: "small"
  }
}), S = "Umb.Repository.DocumentType.Import", r = "Umb.Repository.DocumentType.Move", O = "document-type", N = "document-type-root", I = "template", Y = "element", U = o.generateAbsolute({
  sectionName: t,
  entityType: O
}), y = new e("create/parent/:parentEntityType/:parentUnique/:presetAlias", U), i = new e(
  "edit/:unique",
  U
), L = "document-type-property-type", B = "Umb.Repository.DocumentType.Composition", u = new T(
  "UmbDocumentTypeDetailStore"
), b = "Umb.Repository.DocumentType.Detail", l = "Umb.Store.DocumentType.Detail", d = new T(
  "UmbDocumentTypeItemStore"
), W = "Umb.Repository.DocumentType.Item", K = "Umb.Store.DocumentType.Item", w = "Umb.GlobalSearch.DocumentType", F = "Umb.SearchProvider.DocumentType", H = new T(
  "UmbDocumentTypeTreeStore"
), k = new T(
  "UmbDocumentTypeFolderStore"
), f = "Umb.Repository.DocumentType.Folder", X = "Umb.Store.DocumentType.Folder", n = "document-type-folder", M = o.generateAbsolute({
  sectionName: t,
  entityType: n
}), g = new e(
  "edit/:unique",
  M
), h = new T(
  "UmbWorkspaceContext",
  void 0,
  (_) => _.getEntityType?.() === n
), x = "Umb.Workspace.DocumentType.Folder", v = "Umb.Repository.DocumentType.TreeItemChildrenCollection", q = "Umb.Collection.DocumentType.TreeItemChildren", G = "Umb.Repository.DocumentType.Tree", z = "Umb.Store.DocumentType.Tree", V = "Umb.Tree.DocumentType", j = new E("Umb.Modal.Workspace", {
  modal: s.getDefaultModal(),
  data: { entityType: O, preset: {} }
  // Recast the type, so the entityType data prop is not required:
}), J = new T(
  "UmbWorkspaceContext",
  void 0,
  (_) => _.getEntityType?.() === "document-type"
), Q = "Umb.Workspace.DocumentType", Z = "Umb.Workspace.DocumentType.Root";
export {
  r as A,
  U as B,
  B as C,
  l as D,
  K as E,
  w as F,
  z as G,
  V as H,
  X as I,
  h as J,
  M as K,
  q as L,
  v as M,
  Z as N,
  G as U,
  L as a,
  O as b,
  i as c,
  H as d,
  y as e,
  I as f,
  Y as g,
  p as h,
  u as i,
  d as j,
  J as k,
  k as l,
  g as m,
  n,
  N as o,
  b as p,
  Q as q,
  f as r,
  x as s,
  F as t,
  W as u,
  j as v,
  c as w,
  C as x,
  a as y,
  S as z
};
//# sourceMappingURL=constants-D9L2jSGX.js.map
