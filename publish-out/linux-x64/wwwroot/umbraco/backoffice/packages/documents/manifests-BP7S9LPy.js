import { UmbContextToken as t } from "@umbraco-cms/backoffice/context-api";
import { UmbModalToken as e } from "@umbraco-cms/backoffice/modal";
import { UMB_TREE_PICKER_MODAL_ALIAS as R } from "@umbraco-cms/backoffice/tree";
import { U as S } from "./paths-CRylFvqJ.js";
import { UmbPathPattern as n } from "@umbraco-cms/backoffice/router";
import { UMB_WORKSPACE_PATH_PATTERN as i, UMB_WORKSPACE_CONDITION_ALIAS as s } from "@umbraco-cms/backoffice/workspace";
import "@umbraco-cms/backoffice/external/backend-api";
const o = "document", m = "document-root", H = `${o}-property-value`, f = new t(
  "UmbCollectionContext"
), W = "Umb.Repository.DocumentCollection", V = "Umb.CollectionView.Document.Grid", k = "Umb.CollectionView.Document.Table", F = "Umb.Collection.Document", K = new e("Umb.Modal.Document.CreateOptions", {
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
), g = new e("Umb.Modal.CultureAndHostnames", {
  modal: {
    type: "sidebar",
    size: "medium"
  }
}), T = "Umb.Modal.Document.Duplicate", x = [
  {
    type: "modal",
    alias: T,
    name: "Duplicate Document To Modal",
    element: () => import("./duplicate-document-modal.element-HugI2jhA.js")
  }
], z = new e(T, {
  modal: {
    type: "sidebar",
    size: "small"
  }
}), X = "Umb.Repository.Document.Duplicate", q = "Umb.Repository.Document.Move", M = "Umb.Modal.DocumentNotifications", r = {
  type: "modal",
  alias: M,
  name: "Document Notifications Modal",
  element: () => import("./document-notifications-modal.element-Ne30o0_m.js")
}, G = [r], $ = new e(
  M,
  {
    modal: {
      type: "sidebar",
      size: "small"
    }
  }
), j = "Umb.Repository.Document.Notifications", J = "Umb.Repository.Document.SortChildrenOf", Q = "Umb.Repository.Document.BulkDuplicate", Z = "Umb.Repository.Document.BulkMove", ee = new t("UmbDocumentItemStore"), te = "Umb.Repository.DocumentItem", oe = "Umb.Store.DocumentItem", O = "Umb.Modal.DocumentSave", _e = {
  type: "modal",
  alias: O,
  name: "Document Save Modal",
  element: () => import("./document-save-modal.element-CmN1frK5.js")
}, ne = new e(
  O,
  {
    modal: {
      type: "dialog"
    }
  }
), ae = "Umb.GlobalSearch.Document", A = "Umb.SearchProvider.Document", se = new e(
  R,
  {
    modal: {
      type: "sidebar",
      size: "small"
    },
    data: {
      treeAlias: "Umb.Tree.Document",
      search: {
        providerAlias: A
      }
    }
  }
), a = i.generateAbsolute({
  sectionName: S,
  entityType: o
}), Ue = new n(
  "create/parent/:parentEntityType/:parentUnique/:documentTypeUnique/blueprint/:blueprintUnique",
  a
), Ee = new n("create/parent/:parentEntityType/:parentUnique/:documentTypeUnique", a), me = new n(
  "edit/:unique",
  a
), I = (_) => _.getEntityType() === o, Te = new t("UmbPropertyDatasetContext", void 0, I), C = "Umb.Modal.DocumentPublishWithDescendants", Me = new e(C, {
  modal: {
    type: "dialog"
  }
}), N = "Umb.Modal.DocumentPublish", Oe = new e(
  N,
  {
    modal: {
      type: "dialog"
    }
  }
), ce = "Umb.Repository.Document.Publishing", l = "Umb.Modal.DocumentSchedule", De = new e(l, {
  modal: {
    type: "dialog"
  }
}), u = "Umb.Modal.DocumentUnpublish", Re = new e(u, {
  modal: {
    type: "dialog"
  }
}), Se = new t(
  "UmbWorkspaceContext",
  void 0,
  (_) => _.publishedPendingChanges !== void 0
), ie = "Umb.Repository.Document.BulkTrash", re = "Umb.Repository.Document.RecycleBin", Ae = new t(
  "UmbDocumentRecycleBinTreeStore"
), Ie = "Umb.Repository.Document.RecycleBin.Tree", Ce = "Umb.Store.Document.RecycleBin.Tree", Ne = "Umb.Tree.Document.RecycleBin", le = "document-recycle-bin-root", ue = "Umb.Repository.Document.Reference", Le = new t("UmbDocumentDetailStore"), Pe = "Umb.Repository.Document.Detail", pe = "Umb.Store.Document.Detail", L = "Umb.Modal.Rollback", Be = new e(
  L,
  {
    modal: {
      type: "sidebar",
      size: "full"
    }
  }
), be = "Umb.Repository.Rollback", de = new t("UmbDocumentUrlStore"), ye = "Umb.Repository.Document.Url", Ye = "Umb.Store.Document.Url", we = "Umb.Condition.UserPermission.Document", he = "Umb.Repository.Document.Permission", He = "Umb.Document.Create", fe = "Umb.Document.Read", We = "Umb.Document.Update", Ve = "Umb.Document.Delete", ke = "Umb.Document.CreateBlueprint", Fe = "Umb.Document.Notifications", Ke = "Umb.Document.Publish", ve = "Umb.Document.Permissions", ge = "Umb.Document.Unpublish", xe = "Umb.Document.Duplicate", ze = "Umb.Document.Move", Xe = "Umb.Document.Sort", qe = "Umb.Document.CultureAndHostnames", Ge = "Umb.Document.PublicAccess", $e = "Umb.Document.Rollback", je = "Umb.Condition.UserPermission.Document.PropertyValue", Je = new e("Umb.Modal.DocumentPropertyValueUserPermissionFlow", {
  modal: {
    type: "sidebar",
    size: "small"
  }
}), c = "Umb.Modal.DocumentPropertyValueUserPermissionFlow.PropertyType", Qe = [
  {
    type: "modal",
    alias: c,
    name: "Document Property Value User Permission Flow Property Type Modal",
    element: () => import("./property-type-modal.element-CtLYhHPd.js")
  }
], Ze = new e(c, {
  modal: {
    type: "sidebar",
    size: "small"
  }
}), et = "document-property-value", tt = "Umb.Document.PropertyValue.Read", ot = "Umb.Document.PropertyValue.Write", _t = new t(
  "UmbWorkspaceContext",
  void 0,
  (_) => _.getEntityType?.() === o
), nt = "Umb.Workspace.Document", at = {
  culture: null,
  segment: null,
  state: null,
  name: "",
  publishDate: null,
  createDate: null,
  updateDate: null,
  scheduledPublishDate: null,
  scheduledUnpublishDate: null
}, st = new t("UmbDocumentTreeStore"), P = [
  {
    type: "entityAction",
    kind: "reloadTreeItemChildren",
    alias: "Umb.EntityAction.Document.Tree.ReloadChildrenOf",
    name: "Reload Document Tree Item Children Entity Action",
    forEntityTypes: [o, m]
  }
], U = "Umb.Repository.Document.Tree", p = "Umb.Store.Document.Tree", D = "Umb.Tree.Document", Ut = [
  {
    type: "repository",
    alias: U,
    name: "Document Tree Repository",
    api: () => import("./document-tree.repository-BikxlYMi.js")
  },
  {
    type: "treeStore",
    alias: p,
    name: "Document Tree Store",
    api: () => import("./document-tree.store-CAdRXITA.js")
  },
  {
    type: "tree",
    alias: D,
    name: "Document Tree",
    api: () => import("./document-tree.context-IXbezNmf.js"),
    element: () => import("./document-tree.element-CE4SS2lt.js"),
    meta: {
      repositoryAlias: U
    }
  },
  {
    type: "treeItem",
    alias: "Umb.TreeItem.Document",
    name: "Document Tree Item",
    element: () => import("./document-tree-item.element-Db5mkpTt.js"),
    api: () => import("./document-tree-item.context-nSv-lq0d.js"),
    forEntityTypes: [o]
  },
  {
    type: "treeItem",
    kind: "default",
    alias: "Umb.TreeItem.Document.Root",
    name: "Document Tree Root",
    forEntityTypes: [m]
  },
  ...P
], E = "Umb.Menu.Content", Et = [
  {
    type: "menu",
    alias: E,
    name: "Content Menu"
  },
  {
    type: "menuItem",
    kind: "tree",
    alias: "Umb.MenuItem.Document",
    name: "Document Menu Item",
    weight: 200,
    meta: {
      label: "Documents",
      menus: [E],
      treeAlias: D,
      hideTreeRoot: !0
    }
  },
  {
    type: "workspaceContext",
    name: "Document Menu Structure Workspace Context",
    alias: "Umb.Context.Document.Menu.Structure",
    api: () => import("./document-menu-structure.context-D2L5LRjl.js"),
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
  q as $,
  Oe as A,
  Ke as B,
  ue as C,
  te as D,
  Ae as E,
  Ze as F,
  tt as G,
  ot as H,
  je as I,
  le as J,
  De as K,
  Me as L,
  v as M,
  ne as N,
  at as O,
  Pe as P,
  nt as Q,
  we as R,
  He as S,
  F as T,
  D as U,
  A as V,
  E as W,
  W as X,
  V as Y,
  T as Z,
  X as _,
  st as a,
  M as a0,
  j as a1,
  J as a2,
  Q as a3,
  Z as a4,
  oe as a5,
  O as a6,
  a as a7,
  I as a8,
  C as a9,
  $e as aA,
  he as aB,
  c as aC,
  p as aD,
  x as aE,
  G as aF,
  _e as aG,
  Qe as aH,
  Et as aI,
  Ut as aJ,
  N as aa,
  ce as ab,
  l as ac,
  u as ad,
  ie as ae,
  re as af,
  Ie as ag,
  Ce as ah,
  Ne as ai,
  pe as aj,
  L as ak,
  be as al,
  ae as am,
  ye as an,
  Ye as ao,
  fe as ap,
  Ve as aq,
  ke as ar,
  Fe as as,
  ve as at,
  ge as au,
  xe as av,
  ze as aw,
  Xe as ax,
  qe as ay,
  Ge as az,
  U as b,
  H as c,
  k as d,
  o as e,
  me as f,
  _t as g,
  Te as h,
  Se as i,
  f as j,
  Ee as k,
  m as l,
  K as m,
  Ue as n,
  g as o,
  z as p,
  $ as q,
  ee as r,
  Re as s,
  Le as t,
  Be as u,
  de as v,
  se as w,
  Je as x,
  et as y,
  We as z
};
//# sourceMappingURL=manifests-BP7S9LPy.js.map
