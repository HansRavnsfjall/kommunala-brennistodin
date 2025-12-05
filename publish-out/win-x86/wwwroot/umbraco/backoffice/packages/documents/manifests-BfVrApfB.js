import { UmbContextToken as t } from "@umbraco-cms/backoffice/context-api";
import { UmbModalToken as e } from "@umbraco-cms/backoffice/modal";
import { UMB_TREE_PICKER_MODAL_ALIAS as S } from "@umbraco-cms/backoffice/tree";
import { U as i } from "./paths-CRylFvqJ.js";
import { UmbPathPattern as n } from "@umbraco-cms/backoffice/router";
import { UMB_WORKSPACE_PATH_PATTERN as r, UMB_WORKSPACE_CONDITION_ALIAS as s } from "@umbraco-cms/backoffice/workspace";
import "@umbraco-cms/backoffice/external/backend-api";
const o = "document", T = "document-root", f = `${o}-property-value`, W = new t(
  "UmbCollectionContext"
), V = "Umb.Repository.DocumentCollection", k = "Umb.CollectionView.Document.Grid", F = "Umb.CollectionView.Document.Table", K = "Umb.Collection.Document", g = new e("Umb.Modal.Document.CreateOptions", {
  modal: {
    type: "sidebar",
    size: "small"
  }
}), v = new e(
  "Umb.Modal.CreateBlueprint",
  {
    modal: {
      type: "sidebar",
      size: "small"
    }
  }
), x = new e("Umb.Modal.CultureAndHostnames", {
  modal: {
    type: "sidebar",
    size: "medium"
  }
}), M = "Umb.Modal.Document.Duplicate", z = [
  {
    type: "modal",
    alias: M,
    name: "Duplicate Document To Modal",
    element: () => import("./duplicate-document-modal.element-DsfPn7jE.js")
  }
], X = new e(M, {
  modal: {
    type: "sidebar",
    size: "small"
  }
}), q = "Umb.Repository.Document.Duplicate", G = "Umb.Repository.Document.Move", O = "Umb.Modal.DocumentNotifications", A = {
  type: "modal",
  alias: O,
  name: "Document Notifications Modal",
  element: () => import("./document-notifications-modal.element-XMinmAhz.js")
}, $ = [A], j = new e(
  O,
  {
    modal: {
      type: "sidebar",
      size: "small"
    }
  }
), J = "Umb.Repository.Document.Notifications", Q = "Umb.Repository.Document.SortChildrenOf", Z = "Umb.Repository.Document.BulkDuplicate", ee = "Umb.Repository.Document.BulkMove", te = new t("UmbDocumentItemStore"), oe = "Umb.Repository.DocumentItem", _e = "Umb.Store.DocumentItem", U = "Umb.MenuItem.Document", c = "Umb.Modal.DocumentSave", ne = {
  type: "modal",
  alias: c,
  name: "Document Save Modal",
  element: () => import("./document-save-modal.element-Be2g0LAs.js")
}, ae = new e(
  c,
  {
    modal: {
      type: "dialog"
    }
  }
), se = "Umb.GlobalSearch.Document", I = "Umb.SearchProvider.Document", Ue = new e(
  S,
  {
    modal: {
      type: "sidebar",
      size: "small"
    },
    data: {
      treeAlias: "Umb.Tree.Document",
      search: {
        providerAlias: I
      }
    }
  }
), a = r.generateAbsolute({
  sectionName: i,
  entityType: o
}), Ee = new n(
  "create/parent/:parentEntityType/:parentUnique/:documentTypeUnique/blueprint/:blueprintUnique",
  a
), me = new n("create/parent/:parentEntityType/:parentUnique/:documentTypeUnique", a), Te = new n(
  "edit/:unique",
  a
), C = (_) => _.getEntityType() === o, Me = new t("UmbPropertyDatasetContext", void 0, C), N = "Umb.Modal.DocumentPublishWithDescendants", Oe = new e(N, {
  modal: {
    type: "dialog"
  }
}), l = "Umb.Modal.DocumentPublish", ce = new e(
  l,
  {
    modal: {
      type: "dialog"
    }
  }
), De = "Umb.Repository.Document.Publishing", u = "Umb.Modal.DocumentSchedule", Re = new e(u, {
  modal: {
    type: "dialog"
  }
}), L = "Umb.Modal.DocumentUnpublish", Se = new e(L, {
  modal: {
    type: "dialog"
  }
}), ie = new t(
  "UmbWorkspaceContext",
  void 0,
  (_) => _.publishedPendingChanges !== void 0
), re = "Umb.Repository.Document.BulkTrash", Ae = "Umb.Repository.Document.RecycleBin", Ie = new t(
  "UmbDocumentRecycleBinTreeStore"
), Ce = "Umb.Repository.Document.RecycleBin.Tree", Ne = "Umb.Store.Document.RecycleBin.Tree", le = "Umb.Tree.Document.RecycleBin", ue = "document-recycle-bin-root", Le = "Umb.Repository.Document.Reference", Pe = new t("UmbDocumentDetailStore"), Be = "Umb.Repository.Document.Detail", pe = "Umb.Store.Document.Detail", P = "Umb.Modal.Rollback", be = new e(
  P,
  {
    modal: {
      type: "sidebar",
      size: "full"
    }
  }
), de = "Umb.Repository.Rollback", ye = new t("UmbDocumentUrlStore"), Ye = "Umb.Repository.Document.Url", we = "Umb.Store.Document.Url", he = "Umb.Condition.UserPermission.Document", He = "Umb.Repository.Document.Permission", fe = "Umb.Document.Create", We = "Umb.Document.Read", Ve = "Umb.Document.Update", ke = "Umb.Document.Delete", Fe = "Umb.Document.CreateBlueprint", Ke = "Umb.Document.Notifications", ge = "Umb.Document.Publish", ve = "Umb.Document.Permissions", xe = "Umb.Document.Unpublish", ze = "Umb.Document.Duplicate", Xe = "Umb.Document.Move", qe = "Umb.Document.Sort", Ge = "Umb.Document.CultureAndHostnames", $e = "Umb.Document.PublicAccess", je = "Umb.Document.Rollback", Je = "Umb.Condition.UserPermission.Document.PropertyValue", Qe = new e("Umb.Modal.DocumentPropertyValueUserPermissionFlow", {
  modal: {
    type: "sidebar",
    size: "small"
  }
}), D = "Umb.Modal.DocumentPropertyValueUserPermissionFlow.PropertyType", Ze = [
  {
    type: "modal",
    alias: D,
    name: "Document Property Value User Permission Flow Property Type Modal",
    element: () => import("./property-type-modal.element-eMOjRR3_.js")
  }
], et = new e(D, {
  modal: {
    type: "sidebar",
    size: "small"
  }
}), tt = "document-property-value", ot = "Umb.Document.PropertyValue.Read", _t = "Umb.Document.PropertyValue.Write", nt = new t(
  "UmbWorkspaceContext",
  void 0,
  (_) => _.getEntityType?.() === o
), at = "Umb.Workspace.Document", st = {
  culture: null,
  segment: null,
  state: null,
  name: "",
  publishDate: null,
  createDate: null,
  updateDate: null,
  scheduledPublishDate: null,
  scheduledUnpublishDate: null,
  flags: []
}, Ut = new t("UmbDocumentTreeStore"), B = [
  {
    type: "entityAction",
    kind: "reloadTreeItemChildren",
    alias: "Umb.EntityAction.Document.Tree.ReloadChildrenOf",
    name: "Reload Document Tree Item Children Entity Action",
    forEntityTypes: [o, T]
  }
], E = "Umb.Repository.Document.Tree", p = "Umb.Store.Document.Tree", R = "Umb.Tree.Document", Et = [
  {
    type: "repository",
    alias: E,
    name: "Document Tree Repository",
    api: () => import("./document-tree.repository-DRwbyGB_.js")
  },
  {
    type: "treeStore",
    alias: p,
    name: "Document Tree Store",
    api: () => import("./document-tree.store-D7Z06k3X.js")
  },
  {
    type: "tree",
    alias: R,
    name: "Document Tree",
    api: () => import("./document-tree.context-IXbezNmf.js"),
    element: () => import("./document-tree.element-CE4SS2lt.js"),
    meta: {
      repositoryAlias: E
    }
  },
  {
    type: "treeItem",
    alias: "Umb.TreeItem.Document",
    name: "Document Tree Item",
    element: () => import("./document-tree-item.element-77PAwRYs.js"),
    api: () => import("./document-tree-item.context-B0tdWQyQ.js"),
    forEntityTypes: [o]
  },
  {
    type: "treeItem",
    kind: "default",
    alias: "Umb.TreeItem.Document.Root",
    name: "Document Tree Root",
    forEntityTypes: [T]
  },
  ...B
], m = "Umb.Menu.Content", mt = [
  {
    type: "menu",
    alias: m,
    name: "Content Menu"
  },
  {
    type: "menuItem",
    kind: "tree",
    alias: U,
    name: "Document Menu Item",
    weight: 200,
    meta: {
      label: "Documents",
      menus: [m],
      treeAlias: R,
      hideTreeRoot: !0
    }
  },
  {
    type: "workspaceContext",
    kind: "menuStructure",
    name: "Document Menu Structure Workspace Context",
    alias: "Umb.Context.Document.Menu.Structure",
    api: () => import("./document-menu-structure.context-4qnRpGr1.js"),
    meta: {
      menuItemAlias: U
    },
    conditions: [
      {
        alias: s,
        match: "Umb.Workspace.Document"
      }
    ]
  },
  {
    type: "workspaceFooterApp",
    kind: "variantMenuBreadcrumb",
    alias: "Umb.WorkspaceFooterApp.Document.Breadcrumb",
    name: "Document Breadcrumb Workspace Footer App",
    conditions: [
      {
        alias: s,
        match: "Umb.Workspace.Document"
      }
    ]
  }
];
export {
  G as $,
  ce as A,
  ge as B,
  Le as C,
  oe as D,
  Ie as E,
  et as F,
  ot as G,
  _t as H,
  Je as I,
  ue as J,
  Re as K,
  Oe as L,
  v as M,
  ae as N,
  st as O,
  Be as P,
  K as Q,
  at as R,
  fe as S,
  he as T,
  R as U,
  I as V,
  m as W,
  V as X,
  k as Y,
  M as Z,
  q as _,
  Ut as a,
  O as a0,
  J as a1,
  Q as a2,
  Z as a3,
  ee as a4,
  _e as a5,
  U as a6,
  c as a7,
  a as a8,
  C as a9,
  $e as aA,
  je as aB,
  He as aC,
  D as aD,
  p as aE,
  z as aF,
  $ as aG,
  ne as aH,
  Ze as aI,
  mt as aJ,
  Et as aK,
  N as aa,
  l as ab,
  De as ac,
  u as ad,
  L as ae,
  re as af,
  Ae as ag,
  Ce as ah,
  Ne as ai,
  le as aj,
  pe as ak,
  P as al,
  de as am,
  se as an,
  Ye as ao,
  we as ap,
  We as aq,
  ke as ar,
  Fe as as,
  Ke as at,
  ve as au,
  xe as av,
  ze as aw,
  Xe as ax,
  qe as ay,
  Ge as az,
  E as b,
  f as c,
  F as d,
  o as e,
  Te as f,
  nt as g,
  Me as h,
  ie as i,
  W as j,
  me as k,
  T as l,
  g as m,
  Ee as n,
  x as o,
  X as p,
  j as q,
  te as r,
  Se as s,
  Pe as t,
  be as u,
  ye as v,
  Ue as w,
  Qe as x,
  tt as y,
  Ve as z
};
//# sourceMappingURL=manifests-BfVrApfB.js.map
