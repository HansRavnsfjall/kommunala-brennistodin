import { UmbModalToken as T } from "@umbraco-cms/backoffice/modal";
import { UMB_TREE_PICKER_MODAL_ALIAS as s } from "@umbraco-cms/backoffice/tree";
import { UMB_WORKSPACE_PATH_PATTERN as A } from "@umbraco-cms/backoffice/workspace";
import { UMB_SETTINGS_SECTION_PATHNAME as t } from "@umbraco-cms/backoffice/settings";
import { UmbPathPattern as a } from "@umbraco-cms/backoffice/router";
import { UmbContextToken as _ } from "@umbraco-cms/backoffice/context-api";
const m = "Umb.Repository.DataType.Collection", I = "Umb.Collection.DataType", y = "Umb.Workspace.DataType.Root", c = new T(
  "Umb.Modal.DataTypeCreateOptions",
  {
    modal: {
      type: "sidebar",
      size: "small"
    }
  }
), M = "Umb.Repository.DataType.Duplicate", i = "Umb.Repository.DataType.Move", Y = new T("Umb.Modal.DataTypePickerFlowDataTypePicker", {
  modal: {
    type: "sidebar",
    size: "small"
  }
}), L = new T("Umb.Modal.DataTypePickerFlow", {
  modal: {
    type: "sidebar",
    size: "medium"
  }
}), C = new T(
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
}), B = A.generateAbsolute({
  sectionName: t,
  entityType: P
}), b = new a("create/parent/:parentEntityType/:parentUnique", o), l = new a(
  "edit/:unique",
  o
), d = "Umb.Repository.DataType.Reference", N = new _("UmbDataTypeDetailStore"), W = "Umb.Repository.DataType.Detail", K = "Umb.Store.DataType.Detail", F = new _("UmbDataTypeItemStore"), w = "Umb.Repository.DataType.Item", H = "Umb.Store.DataType.Item", k = "Umb.GlobalSearch.DataType", u = "Umb.SearchProvider.DataType", f = new _("UmbDataTypeTreeStore"), g = new _("UmbDataTypeFolderStore"), h = "Umb.Repository.DataType.Folder", z = "Umb.Store.DataType.Folder", X = new _(
  "UmbWorkspaceContext",
  void 0,
  (e) => e.getEntityType?.() === E
), n = A.generateAbsolute({
  sectionName: t,
  entityType: E
}), v = new a(
  "edit/:unique",
  n
), x = "Umb.Workspace.DataType.Folder", q = "Umb.Repository.DataType.TreeItemChildrenCollection", G = "Umb.Collection.DataType.TreeItemChildren", V = "Umb.Repository.DataType.Tree", j = "Umb.Store.DataType.Tree", J = "Umb.Tree.DataType", Q = new _(
  "UmbWorkspaceContext",
  void 0,
  (e) => e.getEntityType?.() === "data-type"
), Z = new T("Umb.Modal.Workspace", {
  modal: {
    type: "sidebar",
    size: "large"
  },
  data: { entityType: "data-type", preset: {} }
  // Recast the type, so the entityType data prop is not required:
}), $ = "Umb.Workspace.DataType";
export {
  V as A,
  j as B,
  J as C,
  f as D,
  h as E,
  z as F,
  g as G,
  x as H,
  X as I,
  n as J,
  v as K,
  G as L,
  q as M,
  $ as N,
  w as U,
  C as a,
  Z as b,
  L as c,
  Q as d,
  i as e,
  D as f,
  P as g,
  E as h,
  I as i,
  m as j,
  y as k,
  c as l,
  M as m,
  Y as n,
  o,
  B as p,
  b as q,
  l as r,
  d as s,
  W as t,
  K as u,
  N as v,
  H as w,
  F as x,
  u as y,
  k as z
};
//# sourceMappingURL=constants-DE93IEgK.js.map
