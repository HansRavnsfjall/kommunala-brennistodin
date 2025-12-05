import { j as T, i as I, g as i, h as t, F as o, e as c, D as r, B as n, f as s, m as A, t as l, U as _, u as D, n as y, O as a, v as R, x as S, z as O, A as k, I as p, G as U, k as b, M as m, N as E, C } from "./constants-mZOozcI2.js";
import "@umbraco-cms/backoffice/external/backend-api";
import "@umbraco-cms/backoffice/resources";
import "@umbraco-cms/backoffice/notification";
import "@umbraco-cms/backoffice/repository";
import { UMB_WORKSPACE_CONDITION_ALIAS as e, UmbSubmitWorkspaceAction as d } from "@umbraco-cms/backoffice/workspace";
import { UMB_SECTION_USER_PERMISSION_CONDITION_ALIAS as P } from "@umbraco-cms/backoffice/section";
import { UMB_SETTINGS_SECTION_ALIAS as M } from "@umbraco-cms/backoffice/settings";
import "@umbraco-cms/backoffice/id";
import { UMB_COLLECTION_ALIAS_CONDITION as f } from "@umbraco-cms/backoffice/collection";
const u = [
  {
    type: "repository",
    alias: T,
    name: "Data Type Collection Repository",
    api: () => import("./data-type-collection.repository-CeQyIK7L.js")
  }
], L = [
  {
    type: "collection",
    kind: "default",
    alias: I,
    name: "Data Type Collection",
    meta: {
      repositoryAlias: T
    }
  },
  ...u
], h = [
  {
    type: "workspace",
    kind: "default",
    alias: "Umb.Workspace.DataType.Root",
    name: "Data Type Root Workspace",
    meta: {
      entityType: i,
      headline: "#treeHeaders_dataTypes"
    }
  }
], Y = [
  {
    type: "entityCreateOptionAction",
    alias: "Umb.EntityCreateOptionAction.DataType.Default",
    name: "Default Data Type Entity Create Option Action",
    weight: 1e3,
    api: () => import("./default-data-type-create-option-action-CMIQZkz5.js"),
    forEntityTypes: [i, t],
    meta: {
      icon: "icon-autofill",
      label: "#create_newDataType",
      description: "#create_newDataTypeDescription"
    }
  }
], w = [
  {
    type: "entityCreateOptionAction",
    kind: "folder",
    alias: "Umb.EntityCreateOptionAction.DataType.Folder",
    name: "Data Type Folder Entity Create Option Action",
    forEntityTypes: [i, t],
    meta: {
      icon: "icon-folder",
      label: "#create_folder",
      description: "#create_folderDescription",
      folderRepositoryAlias: o
    }
  }
], B = [
  {
    type: "entityAction",
    kind: "create",
    alias: "Umb.EntityAction.DataType.Create",
    name: "Create Data Type Entity Action",
    weight: 1200,
    forEntityTypes: [i, t]
  },
  // TODO: Deprecated: Will be removed in 17.0.0
  {
    type: "modal",
    alias: "Umb.Modal.DataTypeCreateOptions",
    name: "Data Type Create Options Modal",
    element: () => import("./data-type-create-options-modal.element-HcJ-xe2z.js")
  },
  ...Y,
  ...w
], $ = [
  {
    type: "repository",
    alias: c,
    name: "Move Data Type Repository",
    api: () => import("./data-type-move.repository-SH_4ivkT.js")
  }
], W = [
  {
    type: "entityAction",
    kind: "moveTo",
    alias: "Umb.EntityAction.DataType.MoveTo",
    name: "Move Data Type Entity Action",
    forEntityTypes: [s],
    meta: {
      treeRepositoryAlias: n,
      moveRepositoryAlias: c,
      treeAlias: r,
      foldersOnly: !0
    }
  },
  ...$
], F = [
  {
    type: "repository",
    alias: A,
    name: "Duplicate Data Type Repository",
    api: () => import("./data-type-duplicate.repository-Bfx9m7Bd.js")
  }
], N = [
  {
    type: "entityAction",
    kind: "duplicateTo",
    alias: "Umb.EntityAction.DataType.DuplicateTo",
    name: "Duplicate Document To Entity Action",
    forEntityTypes: [s],
    meta: {
      duplicateRepositoryAlias: A,
      treeAlias: r,
      treeRepositoryAlias: n,
      foldersOnly: !0
    }
  },
  ...F
], v = [
  {
    type: "entityAction",
    kind: "deleteWithRelation",
    alias: "Umb.EntityAction.DataType.Delete",
    name: "Delete Data Type Entity Action",
    forEntityTypes: [s],
    meta: {
      detailRepositoryAlias: D,
      itemRepositoryAlias: _,
      referenceRepositoryAlias: l
    }
  },
  ...B,
  ...W,
  ...N
], g = [
  {
    type: "menuItem",
    kind: "tree",
    alias: y,
    name: "Data Types Menu Item",
    weight: 600,
    meta: {
      label: "Data Types",
      entityType: "data-type",
      treeAlias: "Umb.Tree.DataType",
      menus: ["Umb.Menu.StructureSettings"]
    }
  },
  {
    type: "workspaceContext",
    kind: "menuStructure",
    name: "Data Type Menu Structure Workspace Context",
    alias: "Umb.Context.DataType.Menu.Structure",
    api: () => import("./data-type-menu-structure.context-DRfkVLaK.js"),
    meta: {
      menuItemAlias: y
    },
    conditions: [
      {
        alias: e,
        match: "Umb.Workspace.DataType"
      }
    ]
  },
  {
    type: "workspaceFooterApp",
    kind: "menuBreadcrumb",
    alias: "Umb.WorkspaceFooterApp.DataType.Breadcrumb",
    name: "Data Type Breadcrumb Workspace Footer App",
    conditions: [
      {
        alias: e,
        match: "Umb.Workspace.DataType"
      }
    ]
  }
], V = [
  {
    type: "modal",
    alias: "Umb.Modal.DataTypePickerFlow",
    name: "Data Type Picker Flow Modal",
    element: () => import("./data-type-picker-flow-modal.element-CUeaAbnh.js")
  },
  {
    type: "modal",
    alias: "Umb.Modal.DataTypePickerFlowDataTypePicker",
    name: "Data Type Picker Flow UI Picker Modal",
    element: () => import("./data-type-picker-flow-data-type-picker-modal.element-C7uTi0Cj.js")
  }
], x = [
  {
    type: "repository",
    alias: l,
    name: "Data Type Reference Repository",
    api: () => import("./data-type-reference.repository-DfWr1QMT.js")
  }
], H = [
  {
    type: "workspaceInfoApp",
    kind: "entityReferences",
    name: "Data Type References Workspace Info App",
    alias: "Umb.WorkspaceInfoApp.DataType.References",
    conditions: [
      {
        alias: e,
        match: a
      }
    ],
    meta: {
      referenceRepositoryAlias: l
    }
  }
], G = [...x, ...H], K = [
  {
    type: "repository",
    alias: D,
    name: "Data Type Detail Repository",
    api: () => import("./data-type-detail.repository-BDroNu49.js")
  },
  {
    type: "store",
    alias: R,
    name: "Data Type Detail Store",
    api: () => import("./data-type-detail.store-CaYAkT2J.js")
  }
], j = [
  {
    type: "repository",
    alias: _,
    name: "Data Type Item Repository",
    api: () => import("./data-type-item.repository-Piblw3_Z.js")
  },
  {
    type: "itemStore",
    alias: S,
    name: "Data Type Item Store",
    api: () => import("./data-type-item.store-CgnE_Bak.js")
  }
], q = [...K, ...j], z = [
  {
    name: "Data Type Global Search",
    alias: k,
    type: "globalSearch",
    weight: 400,
    meta: {
      label: "Data Types",
      searchProviderAlias: O
    },
    conditions: [
      {
        alias: P,
        match: M
      }
    ]
  }
], J = [
  {
    name: "Data Type Search Provider",
    alias: "Umb.SearchProvider.DataType",
    type: "searchProvider",
    api: () => import("./data-type.search-provider-B__2bltt.js"),
    weight: 400,
    meta: {
      label: "Data Types"
    }
  },
  {
    name: "Data Type Search Result Item",
    alias: "Umb.SearchResultItem.DataType",
    type: "searchResultItem",
    forEntityTypes: [s]
  },
  ...z
], Q = [
  {
    type: "workspace",
    kind: "routable",
    alias: p,
    name: "Data Type Folder Workspace",
    api: () => import("./data-type-folder-workspace.context-DMhZr-sJ.js"),
    meta: {
      entityType: t
    }
  },
  {
    type: "workspaceAction",
    kind: "default",
    alias: "Umb.WorkspaceAction.DataType.Folder.Submit",
    name: "Submit Media Type Folder Workspace Action",
    api: d,
    meta: {
      label: "#buttons_save",
      look: "primary",
      color: "positive"
    },
    conditions: [
      {
        alias: e,
        match: p
      }
    ]
  }
], X = [
  {
    type: "repository",
    alias: o,
    name: "Data Type Folder Repository",
    api: () => import("./data-type-folder.repository-ztFDjaJb.js")
  },
  {
    type: "store",
    alias: U,
    name: "Data Type Folder Store",
    api: () => import("./data-type-folder.store-BenS5rQD.js")
  }
], Z = [
  {
    type: "entityAction",
    kind: "folderUpdate",
    alias: "Umb.EntityAction.DataType.Folder.Rename",
    name: "Rename Data Type Folder Entity Action",
    forEntityTypes: [t],
    meta: {
      folderRepositoryAlias: o
    }
  },
  {
    type: "entityAction",
    kind: "folderDelete",
    alias: "Umb.EntityAction.DataType.Folder.Delete",
    name: "Delete Data Type Folder Entity Action",
    forEntityTypes: [t],
    meta: {
      folderRepositoryAlias: o
    }
  },
  {
    type: "workspaceView",
    kind: "collection",
    alias: "Umb.WorkspaceView.DataType.TreeItemChildrenCollection",
    name: "Data Type Tree Item Children Collection Workspace View",
    meta: {
      label: "Folder",
      pathname: "folder",
      icon: "icon-folder",
      collectionAlias: "Umb.Collection.DataType.TreeItemChildren"
    },
    conditions: [
      {
        alias: e,
        oneOf: [b, p]
      }
    ]
  },
  ...X,
  ...Q
], ee = [
  {
    type: "collectionView",
    alias: "Umb.CollectionView.DataType.TreeItem.Table",
    name: "Data Type Tree Item Table Collection View",
    element: () => import("./data-type-tree-item-table-collection-view.element-DwaLIV99.js"),
    weight: 300,
    meta: {
      label: "Table",
      icon: "icon-list",
      pathName: "table"
    },
    conditions: [
      {
        alias: f,
        match: m
      }
    ]
  }
], te = [
  {
    type: "repository",
    alias: E,
    name: "Data Type Tree Item Children Collection Repository",
    api: () => import("./data-type-tree-item-children-collection.repository-CW74bOUE.js")
  }
], ae = [
  {
    type: "collectionAction",
    kind: "create",
    name: "Data Type Tree Item Children Collection Create Action",
    alias: "Umb.CollectionAction.DataTypeTreeItemChildren.Create",
    conditions: [
      {
        alias: f,
        match: m
      }
    ]
  }
], ie = [
  {
    type: "collection",
    kind: "default",
    alias: m,
    name: "Data Type Tree Item Children Collection",
    meta: {
      repositoryAlias: E
    }
  },
  ...ae,
  ...ee,
  ...te
], oe = [
  ...ie,
  {
    type: "entityAction",
    kind: "reloadTreeItemChildren",
    alias: "Umb.EntityAction.DataType.Tree.ReloadChildrenOf",
    name: "Reload Data Type Tree Item Children Entity Action",
    forEntityTypes: [i, t]
  }
], ne = [
  {
    type: "repository",
    alias: n,
    name: "Data Type Tree Repository",
    api: () => import("./data-type-tree.repository-DLWsuiSu.js")
  },
  {
    type: "treeStore",
    alias: C,
    name: "Data Type Tree Store",
    api: () => import("./data-type-tree.store-Cq8Esoik.js")
  },
  {
    type: "tree",
    kind: "default",
    alias: r,
    name: "Data Types Tree",
    meta: {
      repositoryAlias: n
    }
  },
  {
    type: "treeItem",
    kind: "default",
    alias: "Umb.TreeItem.DataType",
    name: "Data Type Tree Item",
    forEntityTypes: ["data-type-root", "data-type", "data-type-folder"]
  },
  ...Z,
  ...oe
], se = [
  {
    type: "workspace",
    kind: "routable",
    alias: a,
    name: "Data Type Workspace",
    api: () => import("./data-type-workspace.context-C4vWeiSW.js"),
    meta: {
      entityType: "data-type"
    }
  },
  {
    type: "workspaceView",
    alias: "Umb.WorkspaceView.DataType.Edit",
    name: "Data Type Workspace Edit View",
    element: () => import("./data-type-details-workspace-view.element-KiIXuepK.js"),
    weight: 90,
    meta: {
      label: "#general_details",
      pathname: "details",
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
    type: "workspaceView",
    alias: "Umb.WorkspaceView.DataType.Info",
    name: "Data Type Workspace Info View",
    element: () => import("./workspace-view-data-type-info.element-qCeuMzgS.js"),
    weight: 90,
    meta: {
      label: "#general_info",
      pathname: "info",
      icon: "info"
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
    alias: "Umb.WorkspaceAction.DataType.Save",
    name: "Save Data Type Workspace Action",
    api: d,
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
], Ee = [
  ...L,
  ...h,
  ...v,
  ...g,
  ...V,
  ...G,
  ...q,
  ...J,
  ...ne,
  ...se,
  {
    name: "Data Type Backoffice Entry Point",
    alias: "Umb.EntryPoint.DataType",
    type: "backofficeEntryPoint",
    js: () => import("./entry-point-x0OydBz6.js")
  }
];
export {
  Ee as manifests
};
//# sourceMappingURL=manifests.js.map
