import { d as s, e as _, x as T, a as i, c as D, f as c, r as n, p as o, b as t, g as m, U as p, u as r, h as E, l as O, k as d, j as R, n as y, o as S, q as C, s as a } from "./paths-BPzgB6U7.js";
import "@umbraco-cms/backoffice/external/backend-api";
import "@umbraco-cms/backoffice/resources";
import "@umbraco-cms/backoffice/repository";
import { UMB_COLLECTION_ALIAS_CONDITION as l } from "@umbraco-cms/backoffice/collection";
import { UMB_SECTION_ALIAS_CONDITION_ALIAS as b, UMB_SECTION_USER_PERMISSION_CONDITION_ALIAS as U } from "@umbraco-cms/backoffice/section";
import { UMB_TRANSLATION_SECTION_ALIAS as A, UMB_TRANSLATION_MENU_ALIAS as f } from "@umbraco-cms/backoffice/translation";
import "@umbraco-cms/backoffice/id";
import "@umbraco-cms/backoffice/management-api";
import "@umbraco-cms/backoffice/tree";
import { UMB_WORKSPACE_CONDITION_ALIAS as e, UmbSubmitWorkspaceAction as N } from "@umbraco-cms/backoffice/workspace";
const M = [
  {
    type: "repository",
    alias: s,
    name: "Dictionary Collection Repository",
    api: () => import("./dictionary-collection.repository-BCuU3rWm.js")
  }
], h = [
  {
    type: "collectionView",
    alias: _,
    name: "Dictionary Table Collection View",
    element: () => import("./dictionary-table-collection-view.element-Dc9YAcEj.js"),
    meta: {
      label: "Table",
      icon: "icon-list",
      pathName: "table"
    },
    conditions: [
      {
        alias: l,
        match: "Umb.Collection.Dictionary"
      }
    ]
  }
], u = T.generateAbsolute({
  parentEntityType: i,
  parentUnique: null
}), L = [
  {
    type: "collectionAction",
    kind: "button",
    name: "Create Dictionary Collection Action",
    alias: "Umb.CollectionAction.Dictionary.Create",
    weight: 200,
    meta: {
      label: "#general_create",
      href: u
    },
    conditions: [
      {
        alias: l,
        match: "Umb.Collection.Dictionary"
      }
    ]
  }
], k = {
  type: "collection",
  kind: "default",
  alias: D,
  element: () => import("./dictionary-collection.element-BBgY0loa.js"),
  name: "Dictionary Collection",
  meta: {
    repositoryAlias: s
  }
}, B = [
  k,
  ...M,
  ...h,
  ...L
], Y = [
  {
    type: "dashboard",
    alias: "Umb.Dashboard.Dictionary.Overview",
    name: "Dictionary Overview Dashboard",
    element: () => import("./dictionary-overview-dashboard.element-CTVnUEf6.js"),
    meta: {
      label: "#dictionaryItem_overviewTitle",
      pathname: "dictionary-overview"
    },
    conditions: [
      {
        alias: b,
        match: A
      }
    ]
  }
], P = [
  {
    type: "repository",
    alias: c,
    name: "Move Dictionary Repository",
    api: () => import("./dictionary-move.repository-C6ZDyIrv.js")
  }
], w = [
  {
    type: "entityAction",
    kind: "moveTo",
    alias: "Umb.EntityAction.Dictionary.MoveTo",
    name: "Move Dictionary Entity Action",
    forEntityTypes: [t],
    meta: {
      treeRepositoryAlias: o,
      moveRepositoryAlias: c,
      treeAlias: n
    }
  },
  ...P
], v = [
  {
    type: "entityAction",
    kind: "default",
    alias: "Umb.EntityAction.Dictionary.Create",
    name: "Create Dictionary Entity Action",
    weight: 1200,
    api: () => import("./create.action-CPyVfan4.js"),
    forEntityTypes: [t, i],
    meta: {
      icon: "icon-add",
      label: "#actions_createFor",
      additionalOptions: !0
    }
  },
  {
    type: "entityAction",
    kind: "default",
    alias: "Umb.EntityAction.Dictionary.Export",
    name: "Export Dictionary Entity Action",
    weight: 400,
    api: () => import("./export.action-CM8bVHrE.js"),
    forEntityTypes: [t],
    meta: {
      icon: "icon-download-alt",
      label: "#actions_export",
      additionalOptions: !0
    }
  },
  {
    type: "entityAction",
    kind: "default",
    alias: "Umb.EntityAction.Dictionary.Import",
    name: "Import Dictionary Entity Action",
    weight: 300,
    api: () => import("./import.action-DyFBFWkJ.js"),
    forEntityTypes: [t, i],
    meta: {
      icon: "icon-page-up",
      label: "#actions_import",
      additionalOptions: !0
    }
  },
  {
    type: "entityAction",
    kind: "delete",
    alias: "Umb.EntityAction.Dictionary.Delete",
    name: "Delete Dictionary Entity Action",
    forEntityTypes: [t],
    meta: {
      itemRepositoryAlias: p,
      detailRepositoryAlias: m
    }
  },
  {
    type: "modal",
    alias: "Umb.Modal.Dictionary.Export",
    name: "Export Dictionary Modal",
    element: () => import("./export-dictionary-modal.element-Bo9uPaCh.js")
  },
  {
    type: "modal",
    alias: "Umb.Modal.Dictionary.Import",
    name: "Import Dictionary Modal",
    element: () => import("./import-dictionary-modal.element-CylxyDsr.js")
  },
  ...w
], $ = [
  {
    type: "menuItem",
    kind: "tree",
    alias: r,
    name: "Dictionary Menu Item",
    weight: 400,
    meta: {
      label: "Dictionary",
      icon: "icon-book-alt",
      entityType: t,
      menus: [f],
      treeAlias: n,
      hideTreeRoot: !0
    }
  },
  {
    type: "workspaceContext",
    kind: "menuStructure",
    name: "Dictionary Menu Structure Workspace Context",
    alias: "Umb.Context.Dictionary.Menu.Structure",
    api: () => import("./dictionary-menu-structure.context-Dv40CnqG.js"),
    meta: {
      menuItemAlias: r
    },
    conditions: [
      {
        alias: e,
        match: "Umb.Workspace.Dictionary"
      }
    ]
  },
  {
    type: "workspaceFooterApp",
    kind: "menuBreadcrumb",
    alias: "Umb.WorkspaceFooterApp.Dictionary.Breadcrumb",
    name: "Data Type Breadcrumb Workspace Footer App",
    conditions: [
      {
        alias: e,
        match: "Umb.Workspace.Dictionary"
      }
    ]
  }
], g = [
  {
    type: "repository",
    alias: m,
    name: "Dictionary Detail Repository",
    api: () => import("./dictionary-detail.repository-D6IxwNd4.js")
  },
  {
    type: "store",
    alias: E,
    name: "Dictionary Detail Store",
    api: () => import("./dictionary-detail.store-B7GShg0S.js")
  }
], W = [
  {
    type: "repository",
    alias: p,
    name: "Dictionary Item Repository",
    api: () => import("./dictionary-item.repository-Rz6BZm4v.js")
  },
  {
    type: "itemStore",
    alias: O,
    name: "Dictionary Item Store",
    api: () => import("./dictionary-item.store-Bt_-6HwJ.js")
  }
], x = [
  {
    type: "repository",
    alias: d,
    name: "Dictionary Import Repository",
    api: () => import("./dictionary-import.repository-Do7afCBB.js")
  }
], V = [
  {
    type: "repository",
    alias: R,
    name: "Dictionary Export Repository",
    api: () => import("./dictionary-export.repository-C3VvjbdC.js")
  }
], F = [
  ...g,
  ...W,
  ...x,
  ...V
], j = [
  {
    name: "Dictionary Global Search",
    alias: S,
    type: "globalSearch",
    weight: 600,
    meta: {
      label: "Dictionary",
      searchProviderAlias: y
    },
    conditions: [
      {
        alias: U,
        match: A
      }
    ]
  }
], H = [
  {
    name: "Dictionary Search Provider",
    alias: y,
    type: "searchProvider",
    api: () => import("./dictionary.search-provider-DjFWWJul.js"),
    weight: 600,
    meta: {
      label: "Dictionary"
    }
  },
  {
    name: "Dictionary Search Result Item",
    alias: "Umb.SearchResultItem.Dictionary",
    type: "searchResultItem",
    forEntityTypes: [t]
  },
  ...j
], K = [
  {
    type: "entityAction",
    kind: "reloadTreeItemChildren",
    alias: "Umb.EntityAction.Dictionary.Tree.ReloadChildrenOf",
    name: "Reload Dictionary Tree Item Children Entity Action",
    forEntityTypes: [i, t]
  }
], q = [
  {
    type: "repository",
    alias: o,
    name: "Dictionary Tree Repository",
    api: () => import("./dictionary-tree.repository-choXNVuM.js")
  },
  {
    type: "treeStore",
    alias: C,
    name: "Dictionary Tree Store",
    api: () => import("./paths-BPzgB6U7.js").then((I) => I.A)
  },
  {
    type: "tree",
    kind: "default",
    alias: n,
    name: "Dictionary Tree",
    meta: {
      repositoryAlias: o
    }
  },
  {
    type: "treeItem",
    kind: "default",
    alias: "Umb.TreeItem.Dictionary",
    name: "Dictionary Tree Item",
    forEntityTypes: [i, t]
  },
  ...K
], G = [
  {
    type: "workspace",
    kind: "routable",
    alias: a,
    name: "Dictionary Workspace",
    api: () => import("./dictionary-workspace.context-CivYXi8b.js"),
    meta: {
      entityType: t
    }
  },
  {
    type: "workspaceView",
    alias: "Umb.WorkspaceView.Dictionary.Edit",
    name: "Dictionary Workspace Edit View",
    element: () => import("./workspace-view-dictionary-editor.element-DgjLgYks.js"),
    weight: 100,
    meta: {
      label: "#general_edit",
      pathname: "edit",
      icon: "edit"
    },
    conditions: [
      {
        alias: e,
        match: a
      }
    ]
  },
  {
    type: "workspaceAction",
    kind: "default",
    alias: "Umb.WorkspaceAction.Dictionary.Save",
    name: "Save Dictionary Workspace Action",
    weight: 90,
    api: N,
    meta: {
      label: "#buttons_save",
      look: "primary",
      color: "positive"
    },
    conditions: [
      {
        alias: e,
        match: a
      }
    ]
  }
], rt = [
  ...B,
  ...Y,
  ...v,
  ...$,
  ...F,
  ...H,
  ...q,
  ...G,
  {
    name: "Dictionary Backoffice Entry Point",
    alias: "Umb.EntryPoint.Dictionary",
    type: "backofficeEntryPoint",
    js: () => import("./entry-point-C6IXp9Nd.js")
  }
];
export {
  rt as manifests
};
//# sourceMappingURL=manifests.js.map
