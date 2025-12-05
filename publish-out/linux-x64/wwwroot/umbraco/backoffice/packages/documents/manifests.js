import { UMB_CONTENT_SECTION_ALIAS as y, UMB_WORKSPACE_HAS_CONTENT_COLLECTION_CONDITION_ALIAS as Ee, UMB_CONTENT_HAS_PROPERTIES_WORKSPACE_CONDITION as De } from "@umbraco-cms/backoffice/content";
import { U as D, b as c, e as V, n as h, l as B, a as R, f as F, i as H, j as Ue, g as de, p as N, q as Ae, s as W, m as Re, u as P } from "./paths-BF32ZUyU.js";
import "@umbraco-cms/backoffice/id";
import "@umbraco-cms/backoffice/external/backend-api";
import { UMB_DOCUMENT_ROOT_ENTITY_TYPE as Oe, UMB_CONTENT_MENU_ALIAS as Ie } from "@umbraco-cms/backoffice/document";
import "@umbraco-cms/backoffice/resources";
import { UMB_MANAGEMENT_API_DATA_SOURCE_ALIAS as U } from "@umbraco-cms/backoffice/repository";
import "@umbraco-cms/backoffice/entity-item";
import "@umbraco-cms/backoffice/notification";
import { UMB_WORKSPACE_CONDITION_ALIAS as t, UmbSubmitWorkspaceAction as O, UMB_WORKSPACE_ENTITY_IS_NEW_CONDITION_ALIAS as L } from "@umbraco-cms/backoffice/workspace";
import { Q as n, X as x, Y as fe, d as be, T as l, ar as K, e, S as G, l as q, ay as z, _ as Me, av as g, aE as Se, $ as j, aw as I, U as $, b as J, a2 as X, ax as Q, D as p, a1 as Ce, as as Z, aF as Pe, aq as _, C as T, P as ee, a3 as te, a4 as ie, a5 as Be, aG as Ne, B as E, aa as ke, a9 as he, z as w, R as f, ab as Le, ac as ge, au as b, ad as $e, ae as we, af as u, w as Ye, J as M, W as We, ai as ne, ag as oe, ah as ve, aj as Ve, aA as ae, ak as Fe, al as He, V as se, am as xe, an as Ke, ao as Ge, aB as qe, ap as ze, at as je, az as Je, aH as Xe, I as Qe, y as Ze, G as et, c as v, H as tt, aI as it, aJ as nt } from "./manifests-BP7S9LPy.js";
import { UMB_COLLECTION_ALIAS_CONDITION as s } from "@umbraco-cms/backoffice/collection";
import { UMB_ENTITY_IS_NOT_TRASHED_CONDITION_ALIAS as i, UMB_ENTITY_IS_TRASHED_CONDITION_ALIAS as me } from "@umbraco-cms/backoffice/recycle-bin";
import "@umbraco-cms/backoffice/tree";
import { UMB_ENTITY_BULK_ACTION_TRASH_WITH_RELATION_KIND as ot } from "@umbraco-cms/backoffice/relations";
import { UMB_ENTITY_HAS_CHILDREN_CONDITION_ALIAS as at } from "@umbraco-cms/backoffice/entity-action";
import { UMB_SECTION_USER_PERMISSION_CONDITION_ALIAS as Y } from "@umbraco-cms/backoffice/section";
import { UMB_BLOCK_WORKSPACE_ALIAS as st } from "@umbraco-cms/backoffice/block";
import { r as d, o as m, n as a, b as o, A as re, H as S, U as A, x as ce, y as mt, z as rt, p as pe, u as le, a as ct, D as pt, E as lt, C as ye, t as ue, F as yt, I as ut, s as k, L as C, M as _e, G as _t, N as Tt, q as r } from "./constants-D9L2jSGX.js";
import { UMB_SETTINGS_SECTION_ALIAS as Et } from "@umbraco-cms/backoffice/settings";
const Dt = [
  {
    type: "dashboard",
    alias: "Umb.Dashboard.RedirectManagement",
    name: "Redirect Management Dashboard",
    element: () => import("./dashboard-redirect-management.element-DQUXn1PU.js"),
    weight: 10,
    meta: {
      label: "#dashboardTabs_contentRedirectManager",
      pathname: "redirect-management"
    },
    conditions: [
      {
        alias: "Umb.Condition.SectionAlias",
        match: y
      }
    ]
  }
], Ut = [
  {
    type: "entityAction",
    kind: "default",
    alias: "Umb.EntityAction.DocumentBlueprint.Create",
    name: "Document Blueprint Options Create Entity Action",
    weight: 1200,
    api: () => import("./create.action-ttJ1WVZm.js"),
    forEntityTypes: [D, c],
    meta: {
      icon: "icon-add",
      label: "#actions_create",
      additionalOptions: !0
    }
  },
  {
    type: "modal",
    alias: "Umb.Modal.DocumentBlueprintOptionsCreate",
    name: "Document Blueprint Options Create Modal",
    element: () => import("./document-blueprint-options-create-modal.element-RjYkldO0.js")
  }
], dt = {
  type: "repository",
  alias: V,
  name: "Move Document Blueprint Repository",
  api: () => import("./document-blueprint-move.repository-CnJWcCQb.js")
}, At = [dt], Rt = [
  {
    type: "entityAction",
    kind: "moveTo",
    alias: "Umb.EntityAction.DocumentBlueprint.MoveTo",
    name: "Move Document Blueprint Entity Action",
    forEntityTypes: [R],
    meta: {
      treeRepositoryAlias: B,
      moveRepositoryAlias: V,
      treeAlias: h,
      foldersOnly: !0
    }
  },
  ...At
], Ot = [
  {
    type: "entityAction",
    kind: "delete",
    alias: "Umb.EntityAction.DocumentBlueprintItem.Delete",
    name: "Delete Document Blueprint Item Entity Action",
    forEntityTypes: [R],
    meta: {
      detailRepositoryAlias: H,
      itemRepositoryAlias: F
    }
  },
  ...Ut,
  ...Rt
], It = [
  {
    type: "menuItem",
    kind: "tree",
    alias: "Umb.MenuItem.DocumentBlueprints",
    name: "Document Blueprints Menu Item",
    weight: 100,
    meta: {
      treeAlias: h,
      label: "#treeHeaders_contentBlueprints",
      menus: ["Umb.Menu.StructureSettings"]
    }
  }
], ft = [
  {
    type: "repository",
    alias: H,
    name: "Document Blueprint Detail Repository",
    api: () => import("./document-blueprint-detail.repository-v6KhCqYg.js")
  },
  {
    type: "store",
    alias: Ue,
    name: "Document Blueprint Detail Store",
    api: () => import("./document-blueprint-detail.store-Ctc14hsK.js")
  }
], bt = [
  {
    type: "repository",
    alias: F,
    name: "Document Blueprint Item Repository",
    api: () => import("./document-blueprint-item.repository-DnCe4qgh.js")
  },
  {
    type: "itemStore",
    alias: de,
    name: "Document Blueprint Item Store",
    api: () => import("./document-blueprint-item.store-D44gA2EQ.js")
  }
], Mt = [...ft, ...bt], St = [
  {
    type: "repository",
    alias: N,
    name: "Document Blueprint Folder Repository",
    api: () => import("./document-blueprint-folder.repository-Dggs5KIG.js")
  },
  {
    type: "store",
    alias: Ae,
    name: "Document Blueprint Folder Store",
    api: () => import("./document-blueprint-folder.store-B5NoWDzi.js")
  }
], Ct = [
  {
    type: "workspace",
    kind: "routable",
    alias: W,
    name: "Document Blueprint Folder Workspace",
    api: () => import("./document-blueprint-folder-workspace.context-V97CfanW.js"),
    meta: {
      entityType: c
    }
  },
  {
    type: "workspaceAction",
    kind: "default",
    alias: "Umb.WorkspaceAction.DocumentBlueprint.Folder.Submit",
    name: "Submit Document Blueprint Folder Workspace Action",
    api: O,
    meta: {
      label: "#buttons_save",
      look: "primary",
      color: "positive"
    },
    conditions: [
      {
        alias: t,
        match: W
      }
    ]
  }
], Pt = [
  {
    type: "entityAction",
    kind: "folderUpdate",
    alias: "Umb.EntityAction.DocumentBlueprint.Folder.Rename",
    name: "Rename Document Blueprint Folder Entity Action",
    forEntityTypes: [c],
    meta: {
      folderRepositoryAlias: N
    }
  },
  {
    type: "entityAction",
    kind: "folderDelete",
    alias: "Umb.EntityAction.DocumentBlueprint.Folder.Delete",
    name: "Delete Document Blueprint Folder Entity Action",
    forEntityTypes: [c],
    meta: {
      folderRepositoryAlias: N
    }
  },
  ...St,
  ...Ct
], Bt = [
  {
    type: "entityAction",
    kind: "reloadTreeItemChildren",
    alias: "Umb.EntityAction.DocumentBlueprint.Tree.ReloadChildrenOf",
    name: "Reload Document Blueprint Tree Item Children Entity Action",
    forEntityTypes: [D, c],
    meta: {}
  }
], Nt = [
  {
    type: "repository",
    alias: B,
    name: "Document Blueprint Tree Repository",
    api: () => import("./document-blueprint-tree.repository-BMaFgzPh.js")
  },
  {
    type: "treeStore",
    alias: Re,
    name: "Document Blueprint Tree Store",
    api: () => import("./document-blueprint-tree.store-6h2voZ4z.js")
  },
  {
    type: "tree",
    kind: "default",
    alias: h,
    name: "Document Blueprints Tree",
    meta: {
      repositoryAlias: B
    }
  },
  {
    type: "treeItem",
    kind: "default",
    alias: "Umb.TreeItem.DocumentBlueprint",
    name: "Document Blueprint Tree Item",
    forEntityTypes: [
      D,
      R,
      c
    ]
  },
  {
    type: "workspace",
    kind: "default",
    alias: "Umb.Workspace.DocumentBlueprint.Root",
    name: "Document Blueprint Root Workspace",
    meta: {
      entityType: D,
      headline: "#treeHeaders_contentBlueprints"
    }
  },
  ...Bt,
  ...Pt
], kt = [
  {
    type: "workspace",
    kind: "routable",
    alias: P,
    name: "Document Blueprint Workspace",
    api: () => import("./document-blueprint-workspace.context-fYz2YrCi.js"),
    meta: {
      entityType: R
    }
  },
  {
    type: "workspaceView",
    kind: "contentEditor",
    alias: "Umb.WorkspaceView.DocumentBlueprint.Edit",
    name: "Document Blueprint Workspace Edit View",
    weight: 200,
    meta: {
      label: "#general_content",
      pathname: "content",
      icon: "document"
    },
    conditions: [
      {
        alias: t,
        match: P
      }
    ]
  },
  {
    type: "workspaceAction",
    kind: "default",
    alias: "Umb.WorkspaceAction.DocumentBlueprint.Save",
    name: "Save Document Workspace Action",
    weight: 80,
    api: O,
    meta: {
      label: "Save",
      look: "primary",
      color: "positive"
    },
    conditions: [
      {
        alias: t,
        match: P
      }
    ]
  }
], ht = [
  ...Ot,
  ...It,
  ...Mt,
  ...Nt,
  ...kt
], Lt = [
  {
    type: "workspaceInfoApp",
    name: "Document History Workspace Info App",
    alias: "Umb.WorkspaceInfoApp.Document.History",
    element: () => import("./document-history-workspace-info-app.element-CG4bCpS9.js"),
    weight: 80,
    conditions: [
      {
        alias: t,
        match: n
      }
    ]
  }
], gt = [...Lt], $t = [
  {
    type: "collectionAction",
    kind: "button",
    name: "Create Document Collection Action",
    alias: "Umb.CollectionAction.Document.Create",
    element: () => import("./create-document-collection-action.element-CPNgLjMi.js"),
    weight: 100,
    meta: {
      label: "#general_create"
    },
    conditions: [
      {
        alias: s,
        match: "Umb.Collection.Document"
      }
    ]
  }
], wt = [
  {
    type: "repository",
    alias: x,
    name: "Document Collection Repository",
    api: () => import("./document-collection.repository-DvIDcubX.js")
  }
], Yt = [
  {
    type: "collectionView",
    alias: fe,
    name: "Document Grid Collection View",
    element: () => import("./document-grid-collection-view.element-BqvsXsY0.js"),
    weight: 200,
    meta: {
      label: "Grid",
      icon: "icon-grid",
      pathName: "grid"
    },
    conditions: [
      {
        alias: s,
        match: "Umb.Collection.Document"
      }
    ]
  },
  {
    type: "collectionView",
    alias: be,
    name: "Document Table Collection View",
    element: () => import("./document-table-collection-view.element-DUxdGrI6.js"),
    weight: 300,
    meta: {
      label: "Table",
      icon: "icon-list",
      pathName: "table"
    },
    conditions: [
      {
        alias: s,
        match: "Umb.Collection.Document"
      }
    ]
  }
], Wt = [
  {
    type: "collection",
    alias: l,
    name: "Document Collection",
    api: () => import("./document-collection.context-pkFCbtPl.js"),
    element: () => import("./document-collection.element-DnGxM0Wz.js"),
    meta: {
      repositoryAlias: x
    }
  },
  ...$t,
  ...wt,
  ...Yt
], vt = [
  {
    type: "entityAction",
    kind: "default",
    alias: "Umb.EntityAction.Document.CreateBlueprint",
    name: "Create Document Blueprint Entity Action",
    weight: 1e3,
    api: () => import("./create-blueprint.action-D0SqqUHu.js"),
    forEntityTypes: [e],
    meta: {
      icon: "icon-blueprint",
      label: "#actions_createblueprint",
      additionalOptions: !0
    },
    conditions: [
      {
        alias: "Umb.Condition.UserPermission.Document",
        allOf: [K]
      },
      {
        alias: i
      }
    ]
  },
  {
    type: "modal",
    alias: "Umb.Modal.CreateBlueprint",
    name: "Create Blueprint Modal",
    element: () => import("./create-blueprint-modal.element-BMQ6Qukp.js")
  }
], Vt = [
  {
    type: "entityAction",
    kind: "default",
    alias: "Umb.EntityAction.Document.Create",
    name: "Create Document Entity Action",
    weight: 1200,
    api: () => import("./create.action-C0Ng8tHt.js"),
    forEntityTypes: [q, e],
    meta: {
      icon: "icon-add",
      label: "#actions_create",
      additionalOptions: !0
    },
    conditions: [
      {
        alias: "Umb.Condition.UserPermission.Document",
        allOf: [G]
      },
      {
        alias: i
      }
    ]
  },
  {
    type: "modal",
    alias: "Umb.Modal.Document.CreateOptions",
    name: "Document Create Options Modal",
    element: () => import("./document-create-options-modal.element-hAXPkhsG.js")
  }
], Ft = [
  {
    type: "entityAction",
    kind: "default",
    alias: "Umb.EntityAction.Document.CultureAndHostnames",
    name: "Culture And Hostnames Document Entity Action",
    weight: 400,
    api: () => import("./culture-and-hostnames.action-DsQRK0Ig.js"),
    forEntityTypes: [e],
    meta: {
      icon: "icon-home",
      label: "#actions_assigndomain",
      additionalOptions: !0
    },
    conditions: [
      {
        alias: "Umb.Condition.UserPermission.Document",
        allOf: [z]
      },
      {
        alias: i
      }
    ]
  },
  {
    type: "modal",
    alias: "Umb.Modal.CultureAndHostnames",
    name: "Culture And Hostnames Modal",
    element: () => import("./culture-and-hostnames-modal.element-DgqNE89K.js").then((Te) => Te.c)
  }
], Ht = [
  {
    type: "repository",
    alias: Me,
    name: "Duplicate Document Repository",
    api: () => import("./document-duplicate.repository-Cz6LQokO.js")
  }
], xt = [
  {
    type: "entityAction",
    kind: "duplicateTo",
    alias: "Umb.EntityAction.Document.DuplicateTo",
    name: "Duplicate Document To Entity Action",
    forEntityTypes: [e],
    api: () => import("./duplicate-document.action-Kbcu8ceB.js"),
    conditions: [
      {
        alias: "Umb.Condition.UserPermission.Document",
        allOf: [g]
      },
      {
        alias: i
      }
    ]
  },
  ...Ht,
  ...Se
], Kt = [
  {
    type: "repository",
    alias: j,
    name: "Move Document Repository",
    api: () => import("./document-move.repository-Co8XfLpx.js")
  }
], Gt = [
  {
    type: "entityAction",
    kind: "moveTo",
    alias: "Umb.EntityAction.Document.MoveTo",
    name: "Move Document Entity Action",
    forEntityTypes: [e],
    meta: {
      treeRepositoryAlias: J,
      moveRepositoryAlias: j,
      treeAlias: $
    },
    conditions: [
      {
        alias: "Umb.Condition.UserPermission.Document",
        allOf: [I]
      },
      {
        alias: i
      }
    ]
  },
  ...Kt
], qt = [
  {
    type: "repository",
    alias: X,
    name: "Sort Children Of Document Repository",
    api: () => import("./sort-children-of.repository-B6_m1pd9.js")
  }
], zt = [
  ...qt,
  {
    type: "entityAction",
    kind: "sortChildrenOfContent",
    alias: "Umb.EntityAction.Document.SortChildrenOf",
    name: "Sort Children Of Document Entity Action",
    forEntityTypes: [q, e],
    meta: {
      itemRepositoryAlias: p,
      sortChildrenOfRepositoryAlias: X,
      treeRepositoryAlias: J,
      additionalOptions: !0
    },
    conditions: [
      {
        alias: "Umb.Condition.UserPermission.Document",
        allOf: [Q]
      },
      {
        alias: i
      }
    ]
  }
], jt = [
  {
    type: "repository",
    alias: Ce,
    name: "Document Notifications Repository",
    api: () => import("./document-notifications.repository-Crs2B9Ne.js")
  }
], Jt = [
  {
    type: "entityAction",
    kind: "default",
    alias: "Umb.EntityAction.Document.Notifications",
    name: "Notifications",
    weight: 100,
    api: () => import("./document-notifications.action-B3hJLS9d.js"),
    forEntityTypes: [e],
    meta: {
      icon: "icon-megaphone",
      label: "#actions_notify",
      additionalOptions: !0
    },
    conditions: [
      {
        alias: "Umb.Condition.UserPermission.Document",
        allOf: [Z]
      },
      {
        alias: i
      }
    ]
  }
], Xt = [...Jt, ...Pe, ...jt], Qt = [
  {
    type: "entityAction",
    kind: "deleteWithRelation",
    alias: "Umb.EntityAction.Document.Delete",
    name: "Delete Document Entity Action",
    forEntityTypes: [e],
    meta: {
      itemRepositoryAlias: p,
      detailRepositoryAlias: ee,
      referenceRepositoryAlias: T
    },
    conditions: [
      {
        alias: "Umb.Condition.UserPermission.Document",
        allOf: [_]
      },
      {
        alias: me
      }
    ]
  }
], Zt = [
  ...vt,
  ...Vt,
  ...Ft,
  ...xt,
  ...Gt,
  ...zt,
  ...Qt,
  ...Xt
], ei = [
  {
    type: "repository",
    alias: te,
    name: "Bulk Duplicate Media Repository",
    api: () => import("./duplicate-to.repository-DAADCcTm.js")
  }
], ti = [
  {
    type: "entityBulkAction",
    kind: "duplicateTo",
    alias: "Umb.EntityBulkAction.Document.DuplicateTo",
    name: "Duplicate Document Entity Bulk Action",
    weight: 30,
    forEntityTypes: [e],
    meta: {
      bulkDuplicateRepositoryAlias: te,
      treeAlias: $
    },
    conditions: [
      {
        alias: s,
        match: l
      },
      {
        alias: "Umb.Condition.UserPermission.Document",
        allOf: [g]
      }
    ]
  },
  ...ei
], ii = [
  {
    type: "repository",
    alias: ie,
    name: "Bulk Move Document Repository",
    api: () => import("./move-to.repository-CHGd2CBT.js")
  }
], ni = [
  {
    type: "entityBulkAction",
    kind: "moveTo",
    alias: "Umb.EntityBulkAction.Document.MoveTo",
    name: "Move Document Entity Bulk Action",
    weight: 20,
    forEntityTypes: [e],
    meta: {
      bulkMoveRepositoryAlias: ie,
      treeAlias: $
    },
    conditions: [
      {
        alias: s,
        match: l
      },
      {
        alias: "Umb.Condition.UserPermission.Document",
        allOf: [I]
      }
    ]
  },
  ...ii
], oi = [...ti, ...ni], ai = [
  {
    type: "globalContext",
    alias: "Umb.GlobalContext.DocumentConfiguration",
    name: "Document Configuration Context",
    api: () => import("./document-configuration.context-Bz7FvH_D.js")
  }
], si = [
  {
    type: "repository",
    alias: p,
    name: "Document Item Repository",
    api: () => import("./document-item.repository-Xg9sohq8.js")
  },
  {
    type: "itemStore",
    alias: Be,
    name: "Document Item Store",
    api: () => import("./document-item.store-CBgBJQCY.js")
  }
], mi = [
  {
    type: "entityItemRef",
    alias: "Umb.EntityItemRef.Document",
    name: "Document Entity Item Reference",
    element: () => import("./document-item-ref.element-5Q4bYfBj.js"),
    forEntityTypes: [e]
  },
  ...si
], ri = [Ne], ci = [
  {
    type: "pickerSearchResultItem",
    kind: "default",
    alias: "Umb.PickerSearchResultItem.Document",
    name: "Document Picker Search Result Item",
    element: () => import("./document-picker-search-result-item.element-DaWo3iMs.js"),
    forEntityTypes: [e]
  }
], pi = {
  type: "propertyEditorSchema",
  name: "Content Picker",
  alias: "Umbraco.ContentPicker",
  meta: {
    defaultPropertyEditorUiAlias: "Umb.PropertyEditorUi.DocumentPicker",
    settings: {
      properties: [
        {
          alias: "ignoreUserStartNodes",
          label: "Ignore user start nodes",
          description: "Selecting this option allows a user to choose nodes that they normally dont have access to.",
          propertyEditorUiAlias: "Umb.PropertyEditorUi.Toggle"
        }
      ]
    }
  }
}, li = [
  {
    type: "propertyEditorUi",
    alias: "Umb.PropertyEditorUi.DocumentPicker",
    name: "Document Picker Property Editor UI",
    element: () => import("./property-editor-ui-document-picker.element-BFT-DE9R.js"),
    meta: {
      label: "Document Picker",
      propertyEditorSchemaAlias: "Umbraco.ContentPicker",
      icon: "icon-document",
      group: "pickers",
      supportsReadOnly: !0,
      settings: {
        properties: [
          {
            alias: "startNodeId",
            label: "Start node",
            description: "",
            propertyEditorUiAlias: "Umb.PropertyEditorUi.DocumentPicker",
            config: [
              {
                alias: "validationLimit",
                value: { min: 0, max: 1 }
              }
            ]
          }
        ]
      }
    }
  },
  pi
], yi = [...li], ui = [
  {
    type: "entityAction",
    kind: "default",
    alias: "Umb.EntityAction.Document.Publish",
    name: "Publish Document Entity Action",
    weight: 600,
    api: () => import("./publish.action-DO5hmVQV.js"),
    forEntityTypes: [e],
    meta: {
      icon: "icon-globe",
      label: "#actions_publish",
      additionalOptions: !0
    },
    conditions: [
      {
        alias: "Umb.Condition.UserPermission.Document",
        allOf: [E]
      },
      {
        alias: i
      }
    ]
  }
], _i = [
  {
    type: "entityBulkAction",
    kind: "default",
    alias: "Umb.EntityBulkAction.Document.Publish",
    name: "Publish Document Entity Bulk Action",
    weight: 50,
    api: () => import("./publish.bulk-action-D-PfmdHn.js"),
    meta: {
      icon: "icon-globe",
      label: "#actions_publish"
    },
    forEntityTypes: [e],
    conditions: [
      {
        alias: s,
        match: l
      },
      {
        alias: "Umb.Condition.UserPermission.Document",
        allOf: [E]
      }
    ]
  }
], Ti = [
  {
    type: "modal",
    alias: ke,
    name: "Document Publish Modal",
    element: () => import("./document-publish-modal.element-BNzliI_Y.js")
  }
], Ei = [
  {
    type: "workspaceAction",
    kind: "default",
    alias: "Umb.WorkspaceAction.Document.SaveAndPublish",
    name: "Save And Publish Document Workspace Action",
    weight: 70,
    api: () => import("./save-and-publish.action-DZ7tGJth.js"),
    meta: {
      label: "#buttons_saveAndPublish",
      look: "primary",
      color: "positive"
    },
    conditions: [
      {
        alias: t,
        match: n
      },
      {
        alias: i
      }
    ]
  }
], Di = [
  ...ui,
  ..._i,
  ...Ti,
  ...Ei
], Ui = [
  {
    type: "modal",
    alias: he,
    name: "Document Publish With Descendants Modal",
    element: () => import("./document-publish-with-descendants-modal.element-BHe7VdlT.js")
  }
], di = [
  {
    type: "workspaceActionMenuItem",
    kind: "default",
    alias: "Umb.Document.WorkspaceActionMenuItem.PublishWithDescendants",
    name: "Publish with descendants",
    weight: 10,
    api: () => import("./publish-with-descendants.action-BzLaOTSI.js"),
    forWorkspaceActions: "Umb.WorkspaceAction.Document.SaveAndPublish",
    meta: {
      label: "#buttons_publishDescendants",
      icon: "icon-globe"
    },
    conditions: [
      {
        alias: f,
        allOf: [w, E]
      },
      {
        alias: i
      },
      {
        alias: L,
        match: !1
      }
    ]
  }
], Ai = [...Ui, ...di], Ri = [
  {
    type: "repository",
    alias: Le,
    name: "Document Publishing Repository",
    api: () => import("./document-publishing.repository-BtIywgYV.js")
  }
], Oi = [
  {
    type: "modal",
    alias: ge,
    name: "Document Schedule Modal",
    element: () => import("./document-schedule-modal.element-C4WypZk2.js")
  }
], Ii = [
  {
    type: "workspaceActionMenuItem",
    kind: "default",
    alias: "Umb.Document.WorkspaceActionMenuItem.SchedulePublishing",
    name: "Schedule publishing",
    weight: 20,
    api: () => import("./save-and-schedule.action-BzuBvP6D.js"),
    forWorkspaceActions: "Umb.WorkspaceAction.Document.SaveAndPublish",
    meta: {
      label: "#buttons_schedulePublish",
      icon: "icon-globe"
    },
    conditions: [
      {
        alias: f,
        allOf: [w, E]
      },
      {
        alias: i
      },
      {
        alias: L,
        match: !1
      }
    ]
  }
], fi = [...Oi, ...Ii], bi = [
  {
    type: "entityAction",
    kind: "default",
    alias: "Umb.EntityAction.Document.Unpublish",
    name: "Unpublish Document Entity Action",
    weight: 500,
    api: () => import("./unpublish.action-CaeHdDMa.js"),
    forEntityTypes: [e],
    meta: {
      icon: "icon-globe",
      label: "#actions_unpublish",
      additionalOptions: !0
    },
    conditions: [
      {
        alias: "Umb.Condition.UserPermission.Document",
        allOf: [b]
      },
      {
        alias: i
      }
    ]
  }
], Mi = [
  {
    type: "entityBulkAction",
    kind: "default",
    alias: "Umb.EntityBulkAction.Document.Unpublish",
    name: "Unpublish Document Entity Bulk Action",
    weight: 40,
    api: () => import("./unpublish.bulk-action-DWZoDRLl.js"),
    meta: {
      icon: "icon-globe",
      label: "#actions_unpublish"
    },
    forEntityTypes: [e],
    conditions: [
      {
        alias: s,
        match: l
      },
      {
        alias: "Umb.Condition.UserPermission.Document",
        allOf: [b]
      }
    ]
  }
], Si = [
  {
    type: "modal",
    alias: $e,
    name: "Document Unpublish Modal",
    element: () => import("./document-unpublish-modal.element-nf9-R3ki.js")
  }
], Ci = [
  {
    type: "workspaceActionMenuItem",
    kind: "default",
    alias: "Umb.Document.WorkspaceActionMenuItem.Unpublish",
    name: "Unpublish",
    weight: 0,
    api: () => import("./unpublish.action-oznCGmHh.js"),
    forWorkspaceActions: "Umb.WorkspaceAction.Document.SaveAndPublish",
    meta: {
      label: "#actions_unpublish",
      icon: "icon-globe"
    },
    conditions: [
      {
        alias: f,
        allOf: [b]
      },
      {
        alias: i
      },
      {
        alias: L,
        match: !1
      }
    ]
  }
], Pi = [
  ...bi,
  ...Mi,
  ...Si,
  ...Ci
], Bi = [
  {
    type: "workspaceContext",
    name: "Document Publishing Workspace Context",
    alias: "Umb.WorkspaceContext.Document.Publishing",
    api: () => import("./document-publishing.workspace-context-Bu3zFT67.js"),
    conditions: [
      {
        alias: t,
        match: n
      }
    ]
  }
], Ni = [
  ...Di,
  ...Ai,
  ...Ri,
  ...fi,
  ...Pi,
  ...Bi
], ki = [
  {
    type: "repository",
    alias: we,
    name: "Bulk Trash Document Repository",
    api: () => import("./trash.repository-C5KL4UkK.js")
  }
], hi = [
  {
    type: "entityBulkAction",
    kind: ot,
    alias: "Umb.EntityBulkAction.Document.Trash",
    name: "Trash Document Entity Bulk Action",
    weight: 10,
    forEntityTypes: [e],
    meta: {
      itemRepositoryAlias: p,
      recycleBinRepositoryAlias: u,
      referenceRepositoryAlias: T
    },
    conditions: [
      {
        alias: s,
        match: l
      },
      {
        alias: "Umb.Condition.UserPermission.Document",
        allOf: [_]
      }
    ]
  },
  ...ki
], Li = [
  {
    type: "entityAction",
    kind: "trashWithRelation",
    alias: "Umb.EntityAction.Document.RecycleBin.Trash",
    name: "Trash Document Entity Action",
    forEntityTypes: [e],
    meta: {
      itemRepositoryAlias: p,
      recycleBinRepositoryAlias: u,
      referenceRepositoryAlias: T
    },
    conditions: [
      {
        alias: "Umb.Condition.UserPermission.Document",
        allOf: [_]
      },
      {
        alias: i
      }
    ]
  },
  {
    type: "entityAction",
    kind: "restoreFromRecycleBin",
    alias: "Umb.EntityAction.Document.RecycleBin.Restore",
    name: "Restore Document From Recycle Bin Entity Action",
    forEntityTypes: [e],
    meta: {
      itemRepositoryAlias: p,
      recycleBinRepositoryAlias: u,
      pickerModal: Ye
    },
    conditions: [
      {
        alias: "Umb.Condition.UserPermission.Document",
        allOf: [I]
      },
      {
        alias: me
      }
    ]
  },
  {
    type: "entityAction",
    kind: "emptyRecycleBin",
    alias: "Umb.EntityAction.Document.RecycleBin.Empty",
    name: "Empty Document Recycle Bin Entity Action",
    forEntityTypes: [M],
    meta: {
      recycleBinRepositoryAlias: u
    },
    conditions: [
      {
        alias: "Umb.Condition.UserPermission.Document",
        allOf: [_]
      },
      {
        alias: at
      }
    ]
  },
  ...hi
], gi = [
  {
    type: "menuItem",
    kind: "tree",
    alias: "Umb.MenuItem.Document.RecycleBin",
    name: "Document Recycle Bin Menu Item",
    weight: 100,
    meta: {
      treeAlias: ne,
      label: "Recycle Bin",
      icon: "icon-trash",
      menus: [We]
    },
    conditions: [
      {
        alias: "Umb.Condition.CurrentUser.AllowDocumentRecycleBin"
      }
    ]
  }
], $i = [
  {
    type: "repository",
    alias: u,
    name: "Document Recycle Bin Repository",
    api: () => import("./document-recycle-bin.repository-DffgP1i2.js")
  }
], wi = [
  {
    type: "repository",
    alias: oe,
    name: "Document Recycle Bin Tree Repository",
    api: () => import("./document-recycle-bin-tree.repository-C8TG9GHX.js")
  },
  {
    type: "treeStore",
    alias: ve,
    name: "Document Recycle Bin Tree Store",
    api: () => import("./document-recycle-bin-tree.store-IVd6QkDJ.js")
  }
], Yi = [
  {
    type: "entityAction",
    kind: "reloadTreeItemChildren",
    alias: "Umb.EntityAction.DocumentRecycleBin.Tree.ReloadChildrenOf",
    name: "Reload Document Recycle Bin Tree Item Children Entity Action",
    forEntityTypes: [M]
  }
], Wi = [
  {
    type: "treeItem",
    kind: "recycleBin",
    alias: "Umb.TreeItem.Document.RecycleBin",
    name: "Document Recycle Bin Tree Item",
    forEntityTypes: [M],
    meta: {
      supportedEntityTypes: [e]
    }
  }
], vi = [
  {
    type: "tree",
    kind: "default",
    alias: ne,
    name: "Document Recycle Bin Tree",
    meta: {
      repositoryAlias: oe
    }
  },
  {
    type: "workspace",
    kind: "default",
    alias: "Umb.Workspace.Document.RecycleBin.Root",
    name: "Document Recycle Bin Root Workspace",
    meta: {
      entityType: M,
      headline: "#general_recycleBin"
    }
  },
  ...wi,
  ...Yi,
  ...Wi
], Vi = [
  {
    type: "condition",
    name: "Allow Document Recycle Bin Current User Condition",
    alias: "Umb.Condition.CurrentUser.AllowDocumentRecycleBin",
    api: () => import("./allow-document-recycle-bin.condition-BbjBGWsb.js")
  },
  ...Li,
  ...gi,
  ...$i,
  ...vi
], Fi = [
  {
    type: "repository",
    alias: ee,
    name: "Document Detail Repository",
    api: () => import("./document-detail.repository-DnC9zsqm.js")
  },
  {
    type: "store",
    alias: Ve,
    name: "Document Detail Store",
    api: () => import("./document-detail.store-BPwJ_jWe.js")
  }
], Hi = [...Fi], xi = [
  {
    type: "entityAction",
    kind: "default",
    alias: "Umb.EntityAction.Document.Rollback",
    name: "Rollback Document Entity Action",
    weight: 450,
    api: () => import("./rollback.action-Bghylyto.js"),
    forEntityTypes: [e],
    meta: {
      icon: "icon-history",
      label: "#actions_rollback",
      additionalOptions: !0
    },
    conditions: [
      {
        alias: "Umb.Condition.UserPermission.Document",
        allOf: [ae]
      },
      {
        alias: i
      }
    ]
  }
], Ki = [
  {
    type: "modal",
    alias: Fe,
    name: "Document Rollback Modal",
    element: () => import("./rollback-modal.element-D8t9uS2g.js")
  }
], Gi = [
  {
    type: "repository",
    alias: He,
    name: "Rollback Repository",
    api: () => import("./rollback.repository-Be4ZtX_9.js")
  }
], qi = [
  ...xi,
  ...Ki,
  ...Gi
], zi = [
  {
    name: "Document Global Search",
    alias: xe,
    type: "globalSearch",
    weight: 800,
    api: () => import("./document-global-search-nD8a5kJ7.js"),
    meta: {
      label: "Documents",
      searchProviderAlias: se
    },
    conditions: [
      {
        alias: Y,
        match: y
      }
    ]
  }
], ji = [
  {
    name: "Document Search Provider",
    alias: se,
    type: "searchProvider",
    api: () => import("./document.search-provider-B-gcfDuL.js"),
    weight: 800,
    meta: {
      label: "Documents"
    }
  },
  {
    name: "Document Search Result Item",
    alias: "Umb.SearchResultItem.Document",
    type: "searchResultItem",
    element: () => import("./document-search-result-item.element-tbl0_RYd.js"),
    forEntityTypes: [e]
  },
  ...zi
], Ji = [
  {
    type: "workspaceInfoApp",
    kind: "entityReferences",
    name: "Document References Workspace Info App",
    alias: "Umb.WorkspaceInfoApp.Document.References",
    conditions: [
      {
        alias: t,
        match: n
      }
    ],
    meta: {
      referenceRepositoryAlias: T
    }
  }
], Xi = [
  {
    type: "repository",
    alias: T,
    name: "Document Reference Repository",
    api: () => import("./document-reference.repository-S55nfu_J.js")
  },
  {
    type: "dataSourceDataMapping",
    alias: "Umb.DataSourceDataMapping.ManagementApi.DocumentReferenceResponse",
    name: "Document Reference Response Management Api Data Mapping",
    api: () => import("./document-reference-response.management-api.mapping-Cggly957.js"),
    forDataSource: U,
    forDataModel: "DocumentReferenceResponseModel"
  }
], Qi = [...Ji, ...Xi], Zi = [
  {
    type: "workspaceInfoApp",
    name: "Document Links Workspace Info App",
    alias: "Umb.WorkspaceInfoApp.Document.Links",
    element: () => import("./document-links-workspace-info-app.element-BN18RSED.js"),
    weight: 100,
    conditions: [
      {
        alias: t,
        match: n
      }
    ]
  }
], en = {
  type: "repository",
  alias: Ke,
  name: "Document Url Repository",
  api: () => import("./document-url.repository-DuwotY28.js")
}, tn = {
  type: "itemStore",
  alias: Ge,
  name: "Document Url Store",
  api: () => import("./document-url.store-BuBmcDv0.js")
}, nn = [en, tn], on = [...nn, ...Zi], an = [
  {
    type: "repository",
    alias: qe,
    name: "Document Permission Repository",
    api: () => import("./document-permission.repository-Dlz2NUte.js")
  }
], sn = [
  {
    type: "condition",
    name: "Document User Permission Condition",
    alias: f,
    api: () => import("./document-user-permission.condition-BkDOsmEj.js")
  }
], mn = [
  {
    type: "entityUserPermission",
    alias: ze,
    name: "Read Document User Permission",
    forEntityTypes: [e],
    meta: {
      verbs: ["Umb.Document.Read"],
      label: "#actions_read",
      description: "#actionDescriptions_read"
    }
  },
  {
    type: "entityUserPermission",
    alias: K,
    name: "Create Document Blueprint User Permission",
    forEntityTypes: [e],
    meta: {
      verbs: ["Umb.Document.CreateBlueprint"],
      label: "#actions_createblueprint",
      description: "#actionDescriptions_createblueprint"
    }
  },
  {
    type: "entityUserPermission",
    alias: _,
    name: "Delete Document User Permission",
    forEntityTypes: [e],
    meta: {
      verbs: ["Umb.Document.Delete"],
      label: "#actions_delete",
      description: "#actionDescriptions_delete"
    }
  },
  {
    type: "entityUserPermission",
    alias: G,
    name: "Create Document User Permission",
    forEntityTypes: [e],
    meta: {
      verbs: ["Umb.Document.Create"],
      label: "#actions_create",
      description: "#actionDescriptions_create"
    }
  },
  {
    type: "entityUserPermission",
    alias: Z,
    name: "Document Notifications User Permission",
    forEntityTypes: [e],
    meta: {
      verbs: ["Umb.Document.Notifications"],
      label: "#actions_notify",
      description: "#actionDescriptions_notify"
    }
  },
  {
    type: "entityUserPermission",
    alias: E,
    name: "Publish Document User Permission",
    forEntityTypes: [e],
    meta: {
      verbs: ["Umb.Document.Publish"],
      label: "#actions_publish",
      description: "#actionDescriptions_publish"
    }
  },
  {
    type: "entityUserPermission",
    alias: je,
    name: "Document Permissions User Permission",
    forEntityTypes: [e],
    meta: {
      verbs: ["Umb.Document.Permissions"],
      label: "#actions_setPermissions",
      description: "#actionDescriptions_rights"
    }
  },
  {
    type: "entityUserPermission",
    alias: b,
    name: "Unpublish Document User Permission",
    forEntityTypes: [e],
    meta: {
      verbs: ["Umb.Document.Unpublish"],
      label: "#actions_unpublish",
      description: "#actionDescriptions_unpublish"
    }
  },
  {
    type: "entityUserPermission",
    alias: w,
    name: "Update Document User Permission",
    forEntityTypes: [e],
    meta: {
      verbs: ["Umb.Document.Update"],
      label: "#actions_update",
      description: "#actionDescriptions_update"
    }
  },
  {
    type: "entityUserPermission",
    alias: g,
    name: "Duplicate Document User Permission",
    forEntityTypes: [e],
    meta: {
      verbs: ["Umb.Document.Duplicate"],
      label: "#actions_copy",
      description: "#actionDescriptions_copy",
      group: "structure"
    }
  },
  {
    type: "entityUserPermission",
    alias: I,
    name: "Move Document User Permission",
    forEntityTypes: [e],
    meta: {
      verbs: ["Umb.Document.Move"],
      label: "#actions_move",
      description: "#actionDescriptions_move",
      group: "structure"
    }
  },
  {
    type: "entityUserPermission",
    alias: Q,
    name: "Sort Document User Permission",
    forEntityTypes: [e],
    meta: {
      verbs: ["Umb.Document.Sort"],
      label: "#actions_sort",
      description: "#actionDescriptions_sort",
      group: "structure"
    }
  },
  {
    type: "entityUserPermission",
    alias: z,
    name: "Document Culture And Hostnames User Permission",
    forEntityTypes: [e],
    meta: {
      verbs: ["Umb.Document.CultureAndHostnames"],
      label: "#actions_assigndomain",
      description: "#actionDescriptions_assignDomain",
      group: "administration"
    }
  },
  {
    type: "entityUserPermission",
    alias: Je,
    name: "Document Public Access User Permission",
    forEntityTypes: [e],
    meta: {
      verbs: ["Umb.Document.PublicAccess"],
      label: "#actions_protect",
      description: "#actionDescriptions_protect",
      group: "administration"
    }
  },
  {
    type: "entityUserPermission",
    alias: ae,
    name: "Document Rollback User Permission",
    forEntityTypes: [e],
    meta: {
      verbs: ["Umb.Document.Rollback"],
      label: "#actions_rollback",
      description: "#actionDescriptions_rollback",
      group: "administration"
    }
  }
], rn = [
  {
    type: "userGranularPermission",
    alias: "Umb.UserGranularPermission.Document",
    name: "Document Granular User Permission",
    weight: 1e3,
    element: () => import("./input-document-granular-user-permission.element-DklMjygR.js"),
    meta: {
      schemaType: "DocumentPermissionPresentationModel",
      label: "#user_granularRightsLabel",
      description: "{#user_granularRightsDescription}"
    }
  }
], cn = [
  ...an,
  ...mn,
  ...rn,
  ...sn
], pn = [
  {
    type: "modal",
    alias: "Umb.Modal.DocumentPropertyValueUserPermissionFlow",
    name: "Document Property Value User Permission Flow Modal",
    element: () => import("./document-property-value-permission-flow-modal.element-CdHLz9XC.js")
  },
  ...Xe
], ln = [
  {
    type: "condition",
    name: "Document Property Value User Permission Condition",
    alias: Qe,
    api: () => import("./document-property-value-user-permission.condition-k7fLfaLW.js")
  }
], yn = [
  {
    type: "dataSourceDataMapping",
    alias: "Umb.DataSourceDataMapping.ManagementApi.To.DocumentPropertyValuePermissionPresentationModel",
    name: "Document Property Value Permission To Management Api Data Mapping",
    api: () => import("./to-server.management-api.mapping-Cv7DOLAt.js"),
    forDataSource: U,
    forDataModel: Ze
  },
  {
    type: "dataSourceDataMapping",
    alias: "Umb.DataSourceDataMapping.ManagementApi.From.DocumentPropertyValuePermissionPresentationModel",
    name: "Document Property Value Permission From Management Api Data Mapping",
    api: () => import("./from-server.management-api.mapping-CrCCMvDb.js"),
    forDataSource: U,
    forDataModel: "DocumentPropertyValuePermissionPresentationModel"
  }
], un = [
  {
    type: "workspaceContext",
    name: "Document Property Value User Permission Document Workspace Context",
    alias: "Umb.WorkspaceContext.Document.DocumentPropertyValueUserPermission",
    api: () => import("./document-property-value-user-permission.workspace-context-AFzfpHfm.js"),
    conditions: [
      {
        alias: t,
        match: n
      }
    ]
  },
  {
    type: "workspaceContext",
    name: "Document Property Value User Permission Block Workspace Context",
    alias: "Umb.WorkspaceContext.Block.DocumentPropertyValueUserPermission",
    api: () => import("./document-block-property-value-user-permission.workspace-context-D-VyES6Q.js"),
    conditions: [
      {
        alias: t,
        match: st
      }
    ]
  }
], _n = [
  {
    type: "entityUserPermission",
    alias: "Umb.EntityUserPermission.Document.PropertyValue.Read",
    name: "Read Document Property Value User Permission",
    forEntityTypes: [v],
    weight: 200,
    meta: {
      verbs: [et],
      label: "UI Read",
      description: "Allow access to read Document property values in the UI"
    }
  },
  {
    type: "entityUserPermission",
    alias: "Umb.EntityUserPermission.DocumentPropertyValue.Write",
    name: "Write Document Property Value User Permission",
    forEntityTypes: [v],
    weight: 200,
    meta: {
      verbs: [tt],
      label: "UI Write",
      description: "Allow access to write Document property values from the UI"
    }
  },
  {
    type: "userGranularPermission",
    alias: "Umb.UserGranularPermission.Document.PropertyValue",
    name: "Document Property Values Granular User Permission",
    weight: 950,
    element: () => import("./input-document-property-value-user-permission.element-DcJaXsVI.js"),
    meta: {
      schemaType: "DocumentPropertyValuePermissionPresentationModel",
      label: "Document Property Values",
      description: "Assign permissions to Document property values"
    }
  },
  ...ln,
  ...yn,
  ...pn,
  ...un
], Tn = [
  ...cn,
  ..._n
], En = [
  {
    type: "workspaceAction",
    kind: "default",
    alias: "Umb.WorkspaceAction.Document.Save",
    name: "Save Document Workspace Action",
    weight: 80,
    api: () => import("./save.action-B9_Aackz.js"),
    meta: {
      label: "#buttons_save",
      look: "secondary",
      color: "positive"
    },
    conditions: [
      {
        alias: t,
        match: n
      },
      {
        alias: i
      }
    ]
  },
  {
    type: "workspaceAction",
    kind: "default",
    alias: "Umb.WorkspaceAction.Document.SaveAndPreview",
    name: "Save And Preview Document Workspace Action",
    weight: 90,
    api: () => import("./save-and-preview.action-lKlGXFpy.js"),
    meta: {
      label: "#buttons_saveAndPreview"
    },
    conditions: [
      {
        alias: t,
        match: n
      },
      {
        alias: i
      }
    ]
  }
], Dn = [
  {
    type: "workspace",
    kind: "routable",
    alias: n,
    name: "Document Workspace",
    api: () => import("./document-workspace.context-2iTL70-k.js"),
    meta: {
      entityType: e
    }
  },
  {
    type: "workspaceView",
    kind: "contentCollection",
    alias: "Umb.WorkspaceView.Document.Collection",
    name: "Document Workspace Collection View",
    meta: {
      label: "Collection",
      pathname: "collection",
      icon: "icon-grid"
    },
    conditions: [
      {
        alias: t,
        match: n
      },
      {
        alias: Ee
      }
    ]
  },
  {
    type: "workspaceView",
    kind: "contentEditor",
    alias: "Umb.WorkspaceView.Document.Edit",
    name: "Document Workspace Edit View",
    weight: 200,
    meta: {
      label: "#general_content",
      pathname: "content",
      icon: "document"
    },
    conditions: [
      {
        alias: t,
        match: n
      },
      {
        alias: De
      }
    ]
  },
  {
    type: "workspaceView",
    alias: "Umb.WorkspaceView.Document.Info",
    name: "Document Workspace Info View",
    element: () => import("./document-workspace-view-info.element-BqZnUhkV.js"),
    weight: 100,
    meta: {
      label: "#general_info",
      pathname: "info",
      icon: "info"
    },
    conditions: [
      {
        alias: t,
        match: n
      }
    ]
  },
  ...En
], Un = [
  ...gt,
  ...Wt,
  ...Zt,
  ...oi,
  ...ai,
  ...mi,
  ...it,
  ...ri,
  ...ci,
  ...yi,
  ...Ni,
  ...Vi,
  ...Hi,
  ...qi,
  ...ji,
  ...Qi,
  ...nt,
  ...on,
  ...Tn,
  ...Dn
], dn = [
  {
    type: "entityCreateOptionAction",
    kind: "folder",
    alias: "Umb.EntityCreateOptionAction.DocumentType.Folder",
    name: "Document Type Folder Entity Create Option Action",
    forEntityTypes: [m, a],
    meta: {
      icon: "icon-folder",
      label: "#create_folder",
      description: "#create_folderDescription",
      folderRepositoryAlias: d
    }
  }
], An = [
  {
    type: "entityAction",
    kind: "create",
    alias: "Umb.EntityAction.DocumentType.Create",
    name: "Create Document Type Entity Action",
    weight: 1200,
    forEntityTypes: [
      o,
      m,
      a
    ],
    meta: {
      icon: "icon-add",
      label: "#actions_create",
      additionalOptions: !0,
      headline: "#create_createUnder #treeHeaders_documentTypes"
    }
  },
  {
    type: "entityCreateOptionAction",
    alias: "Umb.EntityCreateOptionAction.DocumentType.Default",
    name: "Default Document Type Entity Create Option Action",
    weight: 100,
    api: () => import("./default-document-type-create-option-action-DPhV3znj.js"),
    forEntityTypes: [
      o,
      m,
      a
    ],
    meta: {
      icon: "icon-document",
      label: "#create_documentType",
      description: "#create_documentTypeDescription"
    }
  },
  {
    type: "entityCreateOptionAction",
    alias: "Umb.EntityCreateOptionAction.DocumentType.DocumentWithTemplate",
    name: "Document Type with Template Document Type Entity Create Option Action",
    weight: 90,
    api: () => import("./document-type-with-template-create-option-action-DT-Dfy8E.js"),
    forEntityTypes: [
      o,
      m,
      a
    ],
    meta: {
      icon: "icon-document-html",
      label: "#create_documentTypeWithTemplate",
      description: "#create_documentTypeWithTemplateDescription"
    }
  },
  {
    type: "entityCreateOptionAction",
    alias: "Umb.EntityCreateOptionAction.DocumentType.ElementType",
    name: "Element Type Document Type Entity Create Option Action",
    weight: 80,
    api: () => import("./element-type-create-option-action-BwCdhNJj.js"),
    forEntityTypes: [
      o,
      m,
      a
    ],
    meta: {
      icon: "icon-plugin",
      label: "#create_elementType",
      description: "#create_elementTypeDescription"
    }
  },
  ...dn
], Rn = [
  {
    type: "repository",
    alias: re,
    name: "Move Document Type Repository",
    api: () => import("./document-type-move.repository-Bur1vBeJ.js")
  }
], On = [
  {
    type: "entityAction",
    kind: "moveTo",
    alias: "Umb.EntityAction.DocumentType.MoveTo",
    name: "Move Document Type Entity Action",
    forEntityTypes: [o],
    meta: {
      treeRepositoryAlias: A,
      moveRepositoryAlias: re,
      treeAlias: S,
      foldersOnly: !0
    }
  },
  ...Rn
], In = [
  {
    type: "repository",
    alias: ce,
    name: "Duplicate Document Type Repository",
    api: () => import("./document-type-duplicate.repository-DiiVWECi.js")
  }
], fn = [
  {
    type: "entityAction",
    kind: "duplicateTo",
    alias: "Umb.EntityAction.DocumentType.DuplicateTo",
    name: "Duplicate Document To Entity Action",
    forEntityTypes: [o],
    meta: {
      duplicateRepositoryAlias: ce,
      treeAlias: S,
      treeRepositoryAlias: A,
      foldersOnly: !0
    }
  },
  ...In
], bn = [
  {
    type: "repository",
    alias: mt,
    name: "Export Document Type Repository",
    api: () => import("./document-type-export.repository-DE_VGxKN.js")
  }
], Mn = [
  {
    type: "entityAction",
    kind: "default",
    alias: "Umb.EntityAction.DocumentType.Export",
    name: "Export Document Type Entity Action",
    forEntityTypes: [o],
    api: () => import("./document-type-export.action-DCoGXYa-.js"),
    meta: {
      icon: "icon-download-alt",
      label: "#actions_export",
      additionalOptions: !0
    }
  },
  ...bn
], Sn = [
  {
    type: "repository",
    alias: rt,
    name: "Import Document Type Repository",
    api: () => import("./document-type-import.repository-Cc5QCRew.js")
  }
], Cn = [
  {
    type: "modal",
    alias: "Umb.Modal.DocumentType.Import",
    name: "Document Type Import Modal",
    element: () => import("./document-type-import-modal.element-C_zOElEL.js")
  }
], Pn = [
  {
    type: "entityAction",
    kind: "default",
    alias: "Umb.EntityAction.DocumentType.Import",
    name: "Export Document Type Entity Action",
    forEntityTypes: [m],
    api: () => import("./document-type-import.action-B8n1UdPS.js"),
    meta: {
      icon: "icon-page-up",
      label: "#actions_import",
      additionalOptions: !0
    }
  },
  ...Sn,
  ...Cn
], Bn = [
  {
    type: "entityAction",
    kind: "delete",
    alias: "Umb.EntityAction.DocumentType.Delete",
    name: "Delete Document-Type Entity Action",
    forEntityTypes: [o],
    meta: {
      itemRepositoryAlias: le,
      detailRepositoryAlias: pe,
      additionalOptions: !0
    }
  },
  ...An,
  ...On,
  ...fn,
  ...Mn,
  ...Pn
], Nn = [
  {
    type: "menuItem",
    kind: "tree",
    alias: "Umb.MenuItem.DocumentTypes",
    name: "Document Types Menu Item",
    weight: 900,
    meta: {
      treeAlias: S,
      label: "Document Types",
      menus: ["Umb.Menu.StructureSettings"]
    }
  },
  {
    type: "workspaceContext",
    name: "Document Type Menu Structure Workspace Context",
    alias: "Umb.Context.DocumentType.Menu.Structure",
    api: () => import("./document-type-menu-structure.context-CwTDc8TP.js"),
    conditions: [
      {
        alias: t,
        match: "Umb.Workspace.DocumentType"
      }
    ]
  },
  {
    type: "workspaceFooterApp",
    kind: "menuBreadcrumb",
    alias: "Umb.WorkspaceFooterApp.DocumentType.Breadcrumb",
    name: "Document Type Breadcrumb Workspace Footer App",
    conditions: [
      {
        alias: t,
        match: "Umb.Workspace.DocumentType"
      }
    ]
  }
], kn = [
  {
    type: "pickerSearchResultItem",
    kind: "default",
    alias: "Umb.PickerSearchResultItem.DocumentType",
    name: "Document Type Picker Search Result Item",
    element: () => import("./document-type-picker-search-result-item.element-4R6o-5UA.js"),
    forEntityTypes: [o]
  }
], hn = {
  type: "propertyEditorUi",
  alias: "Umb.PropertyEditorUi.DocumentTypePicker",
  name: "Document Type Picker Property Editor UI",
  element: () => import("./property-editor-ui-document-type-picker.element-BfyjgwGy.js"),
  meta: {
    label: "Document Type Picker",
    icon: "icon-document-dashed-line",
    group: "advanced",
    supportsReadOnly: !0,
    settings: {
      properties: [
        {
          alias: "onlyPickElementTypes",
          label: "Only Element Types",
          description: "Limit to only pick Element Types",
          propertyEditorUiAlias: "Umb.PropertyEditorUi.Toggle"
        }
      ]
    }
  }
}, Ln = [hn], gn = [
  {
    type: "dataSourceDataMapping",
    alias: "Umb.DataSourceDataMapping.ManagementApi.DocumentTypePropertyTypeReferenceResponse",
    name: "Document Type Property Type Reference Response Management Api Data Mapping",
    api: () => import("./document-type-property-type-reference-response.management-api.mapping-C7x6W2lK.js"),
    forDataSource: U,
    forDataModel: "DocumentTypePropertyTypeReferenceResponseModel"
  },
  {
    type: "entityItemRef",
    alias: "Umb.EntityItemRef.DocumentTypePropertyType",
    name: "Document Type Property Type Entity Item Reference",
    element: () => import("./document-type-property-type-item-ref.element-BHqImEIM.js"),
    forEntityTypes: [ct]
  }
], $n = [
  {
    type: "repository",
    alias: pe,
    name: "Document Types Repository",
    api: () => import("./document-type-detail.repository-V__Mk04y.js")
  },
  {
    type: "store",
    alias: pt,
    name: "Document Type Store",
    api: () => import("./document-type-detail.store-CK4xnkjB.js")
  }
], wn = [
  {
    type: "repository",
    alias: le,
    name: "Document Type Item Repository",
    api: () => import("./document-type-item.repository-CK9-9XMP.js")
  },
  {
    type: "itemStore",
    alias: lt,
    name: "Document Type Item Store",
    api: () => import("./document-type-item.store-8gSbncS9.js")
  }
], Yn = [
  {
    type: "repository",
    alias: ye,
    name: "Document Type Composition Repository",
    api: () => import("./document-type-composition.repository-BLbQD94J.js")
  }
], Wn = [...$n, ...wn, ...Yn], vn = [
  {
    name: "Document Type Global Search",
    alias: yt,
    type: "globalSearch",
    weight: 600,
    meta: {
      label: "Document Types",
      searchProviderAlias: ue
    },
    conditions: [
      {
        alias: Y,
        match: Et
      }
    ]
  }
], Vn = [
  {
    name: "Document Type Search Provider",
    alias: ue,
    type: "searchProvider",
    api: () => import("./document-type.search-provider-BomHt9t7.js"),
    weight: 600,
    meta: {
      label: "Document Types"
    }
  },
  {
    name: "Document Type Search Result Item",
    alias: "Umb.SearchResultItem.DocumentType",
    type: "searchResultItem",
    element: () => import("./document-type-search-result-item.element-CDCu6XTV.js"),
    forEntityTypes: [o]
  },
  ...vn
], Fn = [
  {
    type: "repository",
    alias: d,
    name: "Document Type Folder Repository",
    api: () => import("./document-type-folder.repository-Bzu-6mUl.js")
  },
  {
    type: "store",
    alias: ut,
    name: "Document Type Folder Store",
    api: () => import("./document-type-folder.store-WdZCvQ-J.js")
  }
], Hn = [
  {
    type: "workspace",
    kind: "routable",
    alias: k,
    name: "Document Type Folder Workspace",
    api: () => import("./document-type-folder-workspace.context-Cqc6Tgme.js"),
    meta: {
      entityType: a
    }
  },
  {
    type: "workspaceAction",
    kind: "default",
    alias: "Umb.WorkspaceAction.DocumentType.Folder.Submit",
    name: "Submit Document Type Folder Workspace Action",
    api: O,
    meta: {
      label: "#buttons_save",
      look: "primary",
      color: "positive"
    },
    conditions: [
      {
        alias: t,
        match: k
      }
    ]
  }
], xn = [
  {
    type: "entityAction",
    kind: "folderUpdate",
    alias: "Umb.EntityAction.DocumentType.Folder.Rename",
    name: "Rename Document Type Folder Entity Action",
    forEntityTypes: [a],
    meta: {
      folderRepositoryAlias: d
    }
  },
  {
    type: "entityAction",
    kind: "folderDelete",
    alias: "Umb.EntityAction.DocumentType.Folder.Delete",
    name: "Delete Document Type Folder Entity Action",
    forEntityTypes: [a],
    meta: {
      folderRepositoryAlias: d
    }
  },
  ...Fn,
  ...Hn
], Kn = [
  {
    type: "collectionAction",
    kind: "create",
    name: "Document Type Tree Item Children Collection Create Action",
    alias: "Umb.CollectionAction.DocumentTypeTreeItemChildren.Create",
    conditions: [
      {
        alias: s,
        match: C
      }
    ]
  }
], Gn = [
  {
    type: "repository",
    alias: _e,
    name: "Document Type Tree Item Children Collection Repository",
    api: () => import("./document-type-tree-item-children-collection.repository-BsQ4-8jx.js")
  }
], qn = [
  {
    type: "collectionView",
    alias: "Umb.CollectionView.DocumentType.TreeItem.Table",
    name: "Document Type Tree Item Table Collection View",
    element: () => import("./document-type-tree-item-table-collection-view.element-td9veAa7.js"),
    weight: 300,
    meta: {
      label: "Table",
      icon: "icon-list",
      pathName: "table"
    },
    conditions: [
      {
        alias: s,
        match: C
      }
    ]
  }
], zn = [
  {
    type: "collection",
    kind: "default",
    alias: C,
    name: "Document Type Tree Item Children Collection",
    meta: {
      repositoryAlias: _e
    }
  },
  ...Kn,
  ...Gn,
  ...qn
], jn = [
  {
    type: "entityAction",
    alias: "Umb.EntityAction.DocumentType.Tree.ReloadChildrenOf",
    name: "Reload Document Type Tree Item Children Entity Action",
    kind: "reloadTreeItemChildren",
    forEntityTypes: [
      m,
      o,
      a
    ]
  }
], Jn = [...zn, ...jn], Xn = [
  {
    type: "repository",
    alias: A,
    name: "Document Type Tree Repository",
    api: () => import("./document-type-tree.repository-lsJHwcEP.js")
  },
  {
    type: "treeStore",
    alias: _t,
    name: "Document Type Tree Store",
    api: () => import("./document-type.tree.store-ZLlZwTXD.js")
  },
  {
    type: "tree",
    kind: "default",
    alias: S,
    name: "Document Type Tree",
    meta: {
      repositoryAlias: A
    }
  },
  {
    type: "treeItem",
    kind: "default",
    alias: "Umb.TreeItem.DocumentType",
    name: "Document Type Tree Item",
    forEntityTypes: [
      m,
      o,
      a
    ]
  },
  {
    type: "workspaceView",
    kind: "collection",
    alias: "Umb.WorkspaceView.DocumentType.TreeItemChildrenCollection",
    name: "Document Type Tree Item Children Collection Workspace View",
    meta: {
      label: "#general_design",
      pathname: "design",
      icon: "icon-member-dashed-line",
      collectionAlias: C
    },
    conditions: [
      {
        alias: "Umb.Condition.WorkspaceAlias",
        oneOf: [Tt, k]
      }
    ]
  },
  ...xn,
  ...Jn
], Qn = [
  {
    type: "workspace",
    kind: "routable",
    alias: r,
    name: "Document Type Workspace",
    api: () => import("./document-type-workspace.context-CbCunNQk.js"),
    meta: {
      entityType: "document-type"
    }
  },
  {
    type: "workspaceView",
    kind: "contentTypeDesignEditor",
    alias: "Umb.WorkspaceView.DocumentType.Design",
    name: "Document Type Workspace Design View",
    meta: {
      label: "#general_design",
      pathname: "design",
      icon: "icon-document-dashed-line",
      compositionRepositoryAlias: ye
    },
    conditions: [
      {
        alias: t,
        match: r
      }
    ]
  },
  {
    type: "workspaceView",
    alias: "Umb.WorkspaceView.DocumentType.Structure",
    name: "Document Type Workspace Structure View",
    element: () => import("./document-type-workspace-view-structure.element-CuAX-ajI.js"),
    weight: 800,
    meta: {
      label: "#contentTypeEditor_structure",
      pathname: "structure",
      icon: "icon-mindmap"
    },
    conditions: [
      {
        alias: t,
        match: r
      }
    ]
  },
  {
    type: "workspaceView",
    alias: "Umb.WorkspaceView.DocumentType.Settings",
    name: "Document Type Workspace Settings View",
    element: () => import("./document-type-workspace-view-settings.element-CuXtq6st.js"),
    weight: 600,
    meta: {
      label: "#general_settings",
      pathname: "settings",
      icon: "icon-settings"
    },
    conditions: [
      {
        alias: t,
        match: r
      }
    ]
  },
  {
    type: "workspaceView",
    alias: "Umb.WorkspaceView.DocumentType.Templates",
    name: "Document Type Workspace Templates View",
    element: () => import("./document-type-workspace-view-templates.element-BMZId_af.js"),
    weight: 400,
    meta: {
      label: "#treeHeaders_templates",
      pathname: "templates",
      icon: "icon-layout"
    },
    conditions: [
      {
        alias: t,
        match: r
      }
    ]
  },
  {
    type: "workspaceAction",
    kind: "default",
    alias: "Umb.WorkspaceAction.DocumentType.Save",
    name: "Save Document Type Workspace Action",
    api: O,
    meta: {
      label: "#buttons_save",
      look: "primary",
      color: "positive"
    },
    conditions: [
      {
        alias: t,
        match: r
      }
    ]
  }
], Zn = [
  {
    type: "workspace",
    kind: "default",
    alias: "Umb.Workspace.DocumentType.Root",
    name: "Document Type Root Workspace",
    meta: {
      entityType: m,
      headline: "#treeHeaders_documentTypes"
    }
  }
], eo = [...Qn, ...Zn], to = [
  ...Bn,
  ...Nn,
  ...kn,
  ...Ln,
  ...gn,
  ...Wn,
  ...Vn,
  ...Xn,
  ...eo
], io = [
  {
    type: "section",
    alias: y,
    name: "Content Section",
    weight: 1e3,
    meta: {
      label: "#sections_content",
      pathname: "content"
    },
    conditions: [
      {
        alias: Y,
        match: y
      }
    ]
  },
  {
    type: "sectionSidebarApp",
    kind: "menuWithEntityActions",
    alias: "Umb.SidebarMenu.Content",
    name: "Content Sidebar Menu",
    weight: 100,
    meta: {
      label: "#sections_content",
      menu: Ie,
      entityType: Oe
    },
    conditions: [
      {
        alias: "Umb.Condition.SectionAlias",
        match: y
      }
    ]
  }
], fo = [
  ...Dt,
  ...ht,
  ...Un,
  ...to,
  ...io
];
export {
  fo as manifests
};
//# sourceMappingURL=manifests.js.map
