import { UmbModalToken as E } from "@umbraco-cms/backoffice/modal";
import { UMB_WORKSPACE_PATH_PATTERN as T } from "@umbraco-cms/backoffice/workspace";
import { UMB_SETTINGS_SECTION_PATHNAME as t } from "@umbraco-cms/backoffice/settings";
import { UmbPathPattern as M } from "@umbraco-cms/backoffice/router";
import { UmbContextToken as _ } from "@umbraco-cms/backoffice/context-api";
import "@umbraco-cms/backoffice/external/backend-api";
import "@umbraco-cms/backoffice/resources";
import "@umbraco-cms/backoffice/id";
import "@umbraco-cms/backoffice/repository";
import { UMB_TREE_PICKER_MODAL_ALIAS as s } from "@umbraco-cms/backoffice/tree";
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
), L = "Umb.Repository.MediaType.Import", B = "Umb.Repository.MediaType.Move", C = "Umb.Workspace.MediaType.Root", b = "Umb.MenuItem.MediaTypes", a = "media-type", I = "media-type-root", o = "media-type-folder", A = T.generateAbsolute({
  sectionName: t,
  entityType: a
}), l = T.generateAbsolute({
  sectionName: t,
  entityType: I
}), N = new M("create/parent/:parentEntityType/:parentUnique", A), W = new M(
  "edit/:unique",
  A
), K = "media-type-property-type", w = "Umb.Repository.MediaType.Composition", F = new _(
  "UmbMediaTypeDetailStore"
), H = "Umb.Repository.MediaType.Detail", u = "Umb.Store.MediaType.Detail", f = new _("UmbMediaTypeItemStore"), k = "Umb.Repository.MediaType.Item", X = "Umb.Store.MediaType.Item", g = "Umb.GlobalSearch.MediaType", h = "Umb.SearchProvider.MediaType", x = new _(
  "UmbMediaTypeFolderStore"
), v = "Umb.Repository.MediaType.Folder", q = "Umb.Store.MediaType.Folder", z = new _(
  "UmbWorkspaceContext",
  void 0,
  (e) => e.getEntityType?.() === o
), P = T.generateAbsolute({
  sectionName: t,
  entityType: o
}), G = new M(
  "edit/:unique",
  P
), V = "Umb.Workspace.MediaType.Folder", j = "Umb.Repository.MediaType.TreeItemChildrenCollection", J = "Umb.Collection.MediaType.TreeItemChildren", Q = new E(
  s,
  {
    modal: {
      type: "sidebar",
      size: "small"
    },
    data: {
      treeAlias: "Umb.Tree.MediaType"
    }
  }
), Z = new _("UmbMediaTypeTreeStore"), $ = "Umb.Repository.MediaType.Tree", __ = "Umb.Store.MediaType.Tree", e_ = "Umb.Tree.MediaType", E_ = new _(
  "UmbWorkspaceContext",
  void 0,
  (e) => e.getEntityType?.() === "media-type"
), T_ = "Umb.Workspace.MediaType";
export {
  A,
  l as B,
  w as C,
  u as D,
  X as E,
  h as F,
  g as G,
  __ as H,
  e_ as I,
  q as J,
  z as K,
  P as L,
  J as M,
  j as N,
  $ as U,
  K as a,
  a as b,
  W as c,
  Z as d,
  E_ as e,
  v as f,
  c as g,
  F as h,
  f as i,
  N as j,
  x as k,
  G as l,
  o as m,
  I as n,
  H as o,
  T_ as p,
  V as q,
  k as r,
  Q as s,
  y as t,
  Y as u,
  d as v,
  L as w,
  B as x,
  C as y,
  b as z
};
//# sourceMappingURL=constants-DTH5dSDc.js.map
