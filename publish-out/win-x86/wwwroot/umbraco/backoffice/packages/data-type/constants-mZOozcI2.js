import { UmbModalToken as T } from "@umbraco-cms/backoffice/modal";
import { UMB_TREE_PICKER_MODAL_ALIAS as s } from "@umbraco-cms/backoffice/tree";
import { UMB_WORKSPACE_PATH_PATTERN as A } from "@umbraco-cms/backoffice/workspace";
import { UMB_SETTINGS_SECTION_PATHNAME as t } from "@umbraco-cms/backoffice/settings";
import { UmbPathPattern as a } from "@umbraco-cms/backoffice/router";
import { UmbContextToken as _ } from "@umbraco-cms/backoffice/context-api";
const m = "Umb.Repository.DataType.Collection", I = "Umb.Collection.DataType", M = "Umb.Workspace.DataType.Root", y = new T(
  "Umb.Modal.DataTypeCreateOptions",
  {
    modal: {
      type: "sidebar",
      size: "small"
    }
  }
), c = "Umb.Repository.DataType.Duplicate", i = "Umb.Repository.DataType.Move", Y = "Umb.MenuItem.DataTypes", L = new T("Umb.Modal.DataTypePickerFlowDataTypePicker", {
  modal: {
    type: "sidebar",
    size: "small"
  }
}), C = new T("Umb.Modal.DataTypePickerFlow", {
  modal: {
    type: "sidebar",
    size: "medium"
  }
}), B = new T(
  s,
  {
    modal: {
      type: "sidebar",
      size: "small"
    },
    data: {
      treeAlias: "Umb.Tree.DataType"
    }
  }
), D = "data-type", P = "data-type-root", E = "data-type-folder", o = A.generateAbsolute({
  sectionName: t,
  entityType: D
}), b = A.generateAbsolute({
  sectionName: t,
  entityType: P
}), l = new a("create/parent/:parentEntityType/:parentUnique", o), d = new a(
  "edit/:unique",
  o
), N = "Umb.Repository.DataType.Reference", W = new _("UmbDataTypeDetailStore"), K = "Umb.Repository.DataType.Detail", F = "Umb.Store.DataType.Detail", w = new _("UmbDataTypeItemStore"), H = "Umb.Repository.DataType.Item", k = "Umb.Store.DataType.Item", u = "Umb.GlobalSearch.DataType", f = "Umb.SearchProvider.DataType", g = new _("UmbDataTypeTreeStore"), h = new _("UmbDataTypeFolderStore"), z = "Umb.Repository.DataType.Folder", X = "Umb.Store.DataType.Folder", v = new _(
  "UmbWorkspaceContext",
  void 0,
  (e) => e.getEntityType?.() === E
), n = A.generateAbsolute({
  sectionName: t,
  entityType: E
}), x = new a(
  "edit/:unique",
  n
), q = "Umb.Workspace.DataType.Folder", G = "Umb.Repository.DataType.TreeItemChildrenCollection", V = "Umb.Collection.DataType.TreeItemChildren", j = "Umb.Repository.DataType.Tree", J = "Umb.Store.DataType.Tree", Q = "Umb.Tree.DataType", Z = new _(
  "UmbWorkspaceContext",
  void 0,
  (e) => e.getEntityType?.() === "data-type"
), $ = new T("Umb.Modal.Workspace", {
  modal: {
    type: "sidebar",
    size: "large"
  },
  data: { entityType: "data-type", preset: {} }
  // Recast the type, so the entityType data prop is not required:
}), __ = "Umb.Workspace.DataType";
export {
  u as A,
  j as B,
  J as C,
  Q as D,
  g as E,
  z as F,
  X as G,
  h as H,
  q as I,
  v as J,
  n as K,
  x as L,
  V as M,
  G as N,
  __ as O,
  H as U,
  B as a,
  $ as b,
  C as c,
  Z as d,
  i as e,
  D as f,
  P as g,
  E as h,
  I as i,
  m as j,
  M as k,
  y as l,
  c as m,
  Y as n,
  L as o,
  o as p,
  b as q,
  l as r,
  d as s,
  N as t,
  K as u,
  F as v,
  W as w,
  k as x,
  w as y,
  f as z
};
//# sourceMappingURL=constants-mZOozcI2.js.map
