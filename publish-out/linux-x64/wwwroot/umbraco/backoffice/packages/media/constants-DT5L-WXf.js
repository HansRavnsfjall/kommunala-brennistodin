import { UmbModalToken as E } from "@umbraco-cms/backoffice/modal";
import { UMB_WORKSPACE_PATH_PATTERN as T } from "@umbraco-cms/backoffice/workspace";
import { UMB_SETTINGS_SECTION_PATHNAME as t } from "@umbraco-cms/backoffice/settings";
import { UmbPathPattern as o } from "@umbraco-cms/backoffice/router";
import { UmbContextToken as _ } from "@umbraco-cms/backoffice/context-api";
import "@umbraco-cms/backoffice/external/backend-api";
import "@umbraco-cms/backoffice/resources";
import "@umbraco-cms/backoffice/id";
import "@umbraco-cms/backoffice/repository";
import { UMB_TREE_PICKER_MODAL_ALIAS as a } from "@umbraco-cms/backoffice/tree";
const y = new E(
  "Umb.Modal.MediaTypeCreateOptions",
  {
    modal: {
      type: "sidebar",
      size: "small"
    }
  }
), Y = "Umb.Repository.MediaType.Duplicate", d = "Umb.Repository.MediaType.Export", c = new E(
  "Umb.Modal.MediaType.Import",
  {
    modal: {
      type: "sidebar",
      size: "small"
    }
  }
), L = "Umb.Repository.MediaType.Import", B = "Umb.Repository.MediaType.Move", C = "Umb.Workspace.MediaType.Root", s = "media-type", I = "media-type-root", M = "media-type-folder", A = T.generateAbsolute({
  sectionName: t,
  entityType: s
}), b = T.generateAbsolute({
  sectionName: t,
  entityType: I
}), l = new o("create/parent/:parentEntityType/:parentUnique", A), N = new o(
  "edit/:unique",
  A
), W = "media-type-property-type", K = "Umb.Repository.MediaType.Composition", w = new _(
  "UmbMediaTypeDetailStore"
), F = "Umb.Repository.MediaType.Detail", H = "Umb.Store.MediaType.Detail", u = new _("UmbMediaTypeItemStore"), f = "Umb.Repository.MediaType.Item", k = "Umb.Store.MediaType.Item", X = new _(
  "UmbMediaTypeFolderStore"
), g = "Umb.Repository.MediaType.Folder", h = "Umb.Store.MediaType.Folder", x = new _(
  "UmbWorkspaceContext",
  void 0,
  (e) => e.getEntityType?.() === M
), P = T.generateAbsolute({
  sectionName: t,
  entityType: M
}), v = new o(
  "edit/:unique",
  P
), q = "Umb.Workspace.MediaType.Folder", z = "Umb.Repository.MediaType.TreeItemChildrenCollection", G = "Umb.Collection.MediaType.TreeItemChildren", V = new E(
  a,
  {
    modal: {
      type: "sidebar",
      size: "small"
    },
    data: {
      treeAlias: "Umb.Tree.MediaType"
    }
  }
), j = new _("UmbMediaTypeTreeStore"), J = "Umb.Repository.MediaType.Tree", Q = "Umb.Store.MediaType.Tree", Z = "Umb.Tree.MediaType", $ = new _(
  "UmbWorkspaceContext",
  void 0,
  (e) => e.getEntityType?.() === "media-type"
), __ = "Umb.Workspace.MediaType", e_ = "Umb.GlobalSearch.MediaType", E_ = "Umb.SearchProvider.MediaType";
export {
  b as A,
  K as B,
  H as C,
  k as D,
  Q as E,
  Z as F,
  h as G,
  x as H,
  P as I,
  G as J,
  z as K,
  E_ as L,
  e_ as M,
  J as U,
  W as a,
  s as b,
  N as c,
  j as d,
  $ as e,
  g as f,
  c as g,
  w as h,
  u as i,
  l as j,
  X as k,
  v as l,
  M as m,
  I as n,
  F as o,
  __ as p,
  q,
  f as r,
  V as s,
  y as t,
  Y as u,
  d as v,
  L as w,
  B as x,
  C as y,
  A as z
};
//# sourceMappingURL=constants-DT5L-WXf.js.map
