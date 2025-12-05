import { j as y, i as f, g as i, h as t, E as o, e as T, C as r, A as n, f as s, m as c, s as l, U as A, t as _, N as a, u as I, w as R, y as S, z as O, H as p, F as U, k, L as m, M as D, B as C } from "./constants-DE93IEgK.js";
import "@umbraco-cms/backoffice/external/backend-api";
import "@umbraco-cms/backoffice/resources";
import "@umbraco-cms/backoffice/notification";
import "@umbraco-cms/backoffice/repository";
import { UMB_WORKSPACE_CONDITION_ALIAS as e, UmbSubmitWorkspaceAction as E } from "@umbraco-cms/backoffice/workspace";
import { UMB_SECTION_USER_PERMISSION_CONDITION_ALIAS as b } from "@umbraco-cms/backoffice/section";
import { UMB_SETTINGS_SECTION_ALIAS as P } from "@umbraco-cms/backoffice/settings";
import "@umbraco-cms/backoffice/id";
import { UMB_COLLECTION_ALIAS_CONDITION as d } from "@umbraco-cms/backoffice/collection";
const M = [
  {
    type: "repository",
    alias: y,
    name: "Data Type Collection Repository",
    api: () => import("./data-type-collection.repository-8M3nG1By.js")
  }
], u = [
  {
    type: "collection",
    kind: "default",
    alias: f,
    name: "Data Type Collection",
    meta: {
      repositoryAlias: y
    }
  },
  ...M
], L = [
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
], h = [
  {
    type: "entityCreateOptionAction",
    alias: "Umb.EntityCreateOptionAction.DataType.Default",
    name: "Default Data Type Entity Create Option Action",
    weight: 1e3,
    api: () => import("./default-data-type-create-option-action-CzOBTsaA.js"),
    forEntityTypes: [i, t],
    meta: {
      icon: "icon-autofill",
      label: "#create_newDataType",
      description: "#create_newDataTypeDescription"
    }
  }
], Y = [
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
], w = [
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
    element: () => import("./data-type-create-options-modal.element-Cxps71S5.js")
  },
  ...h,
  ...Y
], B = [
  {
    type: "repository",
    alias: T,
    name: "Move Data Type Repository",
    api: () => import("./data-type-move.repository-SH_4ivkT.js")
  }
], $ = [
  {
    type: "entityAction",
    kind: "moveTo",
    alias: "Umb.EntityAction.DataType.MoveTo",
    name: "Move Data Type Entity Action",
    forEntityTypes: [s],
    meta: {
      treeRepositoryAlias: n,
      moveRepositoryAlias: T,
      treeAlias: r,
      foldersOnly: !0
    }
  },
  ...B
], W = [
  {
    type: "repository",
    alias: c,
    name: "Duplicate Data Type Repository",
    api: () => import("./data-type-duplicate.repository-Bfx9m7Bd.js")
  }
], F = [
  {
    type: "entityAction",
    kind: "duplicateTo",
    alias: "Umb.EntityAction.DataType.DuplicateTo",
    name: "Duplicate Document To Entity Action",
    forEntityTypes: [s],
    meta: {
      duplicateRepositoryAlias: c,
      treeAlias: r,
      treeRepositoryAlias: n,
      foldersOnly: !0
    }
  },
  ...W
], N = [
  {
    type: "entityAction",
    kind: "deleteWithRelation",
    alias: "Umb.EntityAction.DataType.Delete",
    name: "Delete Data Type Entity Action",
    forEntityTypes: [s],
    meta: {
      detailRepositoryAlias: _,
      itemRepositoryAlias: A,
      referenceRepositoryAlias: l
    }
  },
  ...w,
  ...$,
  ...F
], v = [
  {
    type: "menuItem",
    kind: "tree",
    alias: "Umb.MenuItem.DataTypes",
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
    name: "Data Type Menu Structure Workspace Context",
    alias: "Umb.Context.DataType.Menu.Structure",
    api: () => import("./data-type-menu-structure.context-mLPB-ASN.js"),
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
], g = [
  {
    type: "modal",
    alias: "Umb.Modal.DataTypePickerFlow",
    name: "Data Type Picker Flow Modal",
    element: () => import("./data-type-picker-flow-modal.element-CwKBGEfv.js")
  },
  {
    type: "modal",
    alias: "Umb.Modal.DataTypePickerFlowDataTypePicker",
    name: "Data Type Picker Flow UI Picker Modal",
    element: () => import("./data-type-picker-flow-data-type-picker-modal.element-CEO-g4oi.js")
  }
], V = [
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
], x = [...V, ...H], K = [
  {
    type: "repository",
    alias: _,
    name: "Data Type Detail Repository",
    api: () => import("./data-type-detail.repository-B-N3yXgt.js")
  },
  {
    type: "store",
    alias: I,
    name: "Data Type Detail Store",
    api: () => import("./data-type-detail.store-DbzfgP_T.js")
  }
], G = [
  {
    type: "repository",
    alias: A,
    name: "Data Type Item Repository",
    api: () => import("./data-type-item.repository-q-4SQwFW.js")
  },
  {
    type: "itemStore",
    alias: R,
    name: "Data Type Item Store",
    api: () => import("./data-type-item.store-DiIXiadg.js")
  }
], j = [...K, ...G], q = [
  {
    name: "Data Type Global Search",
    alias: O,
    type: "globalSearch",
    weight: 400,
    meta: {
      label: "Data Types",
      searchProviderAlias: S
    },
    conditions: [
      {
        alias: b,
        match: P
      }
    ]
  }
], z = [
  {
    name: "Data Type Search Provider",
    alias: "Umb.SearchProvider.DataType",
    type: "searchProvider",
    api: () => import("./data-type.search-provider-QlEhX6Zj.js"),
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
  ...q
], J = [
  {
    type: "workspace",
    kind: "routable",
    alias: p,
    name: "Data Type Folder Workspace",
    api: () => import("./data-type-folder-workspace.context-LxgBqTKh.js"),
    meta: {
      entityType: t
    }
  },
  {
    type: "workspaceAction",
    kind: "default",
    alias: "Umb.WorkspaceAction.DataType.Folder.Submit",
    name: "Submit Media Type Folder Workspace Action",
    api: E,
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
], Q = [
  {
    type: "repository",
    alias: o,
    name: "Data Type Folder Repository",
    api: () => import("./data-type-folder.repository-CGHnMbP9.js")
  },
  {
    type: "store",
    alias: U,
    name: "Data Type Folder Store",
    api: () => import("./data-type-folder.store-D96wDEWa.js")
  }
], X = [
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
        alias: "Umb.Condition.WorkspaceAlias",
        oneOf: [k, p]
      }
    ]
  },
  ...Q,
  ...J
], Z = [
  {
    type: "collectionView",
    alias: "Umb.CollectionView.DataType.TreeItem.Table",
    name: "Data Type Tree Item Table Collection View",
    element: () => import("./data-type-tree-item-table-collection-view.element-DHauD-1B.js"),
    weight: 300,
    meta: {
      label: "Table",
      icon: "icon-list",
      pathName: "table"
    },
    conditions: [
      {
        alias: d,
        match: m
      }
    ]
  }
], ee = [
  {
    type: "repository",
    alias: D,
    name: "Data Type Tree Item Children Collection Repository",
    api: () => import("./data-type-tree-item-children-collection.repository-BXEAhdFa.js")
  }
], te = [
  {
    type: "collectionAction",
    kind: "create",
    name: "Data Type Tree Item Children Collection Create Action",
    alias: "Umb.CollectionAction.DataTypeTreeItemChildren.Create",
    conditions: [
      {
        alias: d,
        match: m
      }
    ]
  }
], ae = [
  {
    type: "collection",
    kind: "default",
    alias: m,
    name: "Data Type Tree Item Children Collection",
    meta: {
      repositoryAlias: D
    }
  },
  ...te,
  ...Z,
  ...ee
], ie = [
  ...ae,
  {
    type: "entityAction",
    kind: "reloadTreeItemChildren",
    alias: "Umb.EntityAction.DataType.Tree.ReloadChildrenOf",
    name: "Reload Data Type Tree Item Children Entity Action",
    forEntityTypes: [i, t]
  }
], oe = [
  {
    type: "repository",
    alias: n,
    name: "Data Type Tree Repository",
    api: () => import("./data-type-tree.repository-siBRczJW.js")
  },
  {
    type: "treeStore",
    alias: C,
    name: "Data Type Tree Store",
    api: () => import("./data-type-tree.store-CsQNQaIE.js")
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
  ...X,
  ...ie
], ne = [
  {
    type: "workspace",
    kind: "routable",
    alias: a,
    name: "Data Type Workspace",
    api: () => import("./data-type-workspace.context-DvjZc-fc.js"),
    meta: {
      entityType: "data-type"
    }
  },
  {
    type: "workspaceView",
    alias: "Umb.WorkspaceView.DataType.Edit",
    name: "Data Type Workspace Edit View",
    element: () => import("./data-type-details-workspace-view.element-C9uqojO_.js"),
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
    element: () => import("./workspace-view-data-type-info.element-iERf3_VE.js"),
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
    api: E,
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
], De = [
  ...u,
  ...L,
  ...N,
  ...v,
  ...g,
  ...x,
  ...j,
  ...z,
  ...oe,
  ...ne
];
export {
  De as manifests
};
//# sourceMappingURL=manifests.js.map
