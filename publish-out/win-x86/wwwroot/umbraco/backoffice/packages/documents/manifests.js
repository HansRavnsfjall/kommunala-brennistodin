import { UMB_CONTENT_SECTION_ALIAS as y, UMB_CONTENT_HAS_PROPERTIES_WORKSPACE_CONDITION as Ue } from "@umbraco-cms/backoffice/content";
import { UMB_SECTION_ALIAS_CONDITION_ALIAS as H, UMB_SECTION_USER_PERMISSION_CONDITION_ALIAS as L } from "@umbraco-cms/backoffice/section";
import { U as D, b as c, e as x, n as g, l as h, a as f, f as K, i as G, j as de, g as Ae, p as k, q as fe, s as v, m as Re, u as B } from "./document-blueprint-item.server.cache-DONXnfyi.js";
import "@umbraco-cms/backoffice/id";
import "@umbraco-cms/backoffice/external/backend-api";
import "@umbraco-cms/backoffice/resources";
import { UMB_MANAGEMENT_API_DATA_SOURCE_ALIAS as U } from "@umbraco-cms/backoffice/repository";
import "@umbraco-cms/backoffice/management-api";
import "@umbraco-cms/backoffice/notification";
import { UMB_WORKSPACE_CONDITION_ALIAS as t, UmbSubmitWorkspaceAction as R, UMB_WORKSPACE_ENTITY_IS_NEW_CONDITION_ALIAS as $ } from "@umbraco-cms/backoffice/workspace";
import { R as o, X as j, Y as Oe, d as Ie, Q as l, as as q, e, S as z, l as J, az as X, _ as be, aw as w, aF as Me, $ as Q, ax as O, U as Y, b as Z, a2 as ee, ay as te, D as p, a1 as Se, at as ie, aG as Pe, ar as _, C as E, P as ne, a3 as oe, a4 as ae, a5 as Ce, aH as Be, B as T, ab as he, aa as ke, z as W, T as I, ac as Ne, ad as Le, av as b, ae as ge, af as $e, ag as u, w as we, J as M, W as Ye, aj as se, ah as me, ai as We, ak as ve, aB as re, al as Ve, am as Fe, V as ce, an as He, ao as xe, ap as Ke, aC as Ge, aq as je, au as qe, aA as ze, aI as Je, I as Xe, y as Qe, G as Ze, c as V, H as et, aJ as tt, aK as it } from "./manifests-BfVrApfB.js";
import { UMB_COLLECTION_ALIAS_CONDITION as s } from "@umbraco-cms/backoffice/collection";
import "@umbraco-cms/backoffice/utils";
import "@umbraco-cms/backoffice/document-type";
import "@umbraco-cms/backoffice/class-api";
import { UMB_ENTITY_IS_NOT_TRASHED_CONDITION_ALIAS as i, UMB_ENTITY_IS_TRASHED_CONDITION_ALIAS as pe } from "@umbraco-cms/backoffice/recycle-bin";
import "@umbraco-cms/backoffice/tree";
import { UMB_ENTITY_BULK_ACTION_TRASH_WITH_RELATION_KIND as nt } from "@umbraco-cms/backoffice/relations";
import { UMB_ENTITY_HAS_CHILDREN_CONDITION_ALIAS as ot } from "@umbraco-cms/backoffice/entity-action";
import { UMB_BLOCK_WORKSPACE_ALIAS as at } from "@umbraco-cms/backoffice/block";
import { r as d, o as m, n as a, b as n, A as le, H as S, U as A, x as ye, y as st, z as mt, p as ue, u as _e, O as F, a as rt, D as ct, E as pt, C as Ee, t as Te, F as lt, I as yt, s as N, L as P, M as De, G as ut, N as _t, q as r } from "./constants-rt5n84j4.js";
import { UMB_SETTINGS_SECTION_ALIAS as Et } from "@umbraco-cms/backoffice/settings";
import { UMB_DOCUMENT_ROOT_ENTITY_TYPE as Tt, UMB_CONTENT_MENU_ALIAS as Dt } from "@umbraco-cms/backoffice/document";
const Ut = [
  {
    type: "dashboard",
    alias: "Umb.Dashboard.RedirectManagement",
    name: "Redirect Management Dashboard",
    element: () => import("./dashboard-redirect-management.element-BN7MpvjI.js"),
    weight: 10,
    meta: {
      label: "#dashboardTabs_contentRedirectManager",
      pathname: "redirect-management"
    },
    conditions: [
      {
        alias: H,
        match: y
      }
    ]
  }
], dt = [
  {
    type: "entityAction",
    kind: "default",
    alias: "Umb.EntityAction.DocumentBlueprint.Create",
    name: "Document Blueprint Options Create Entity Action",
    weight: 1200,
    api: () => import("./create.action-9nvoHk3a.js"),
    forEntityTypes: [D, c],
    meta: {
      icon: "icon-add",
      label: "#actions_createFor",
      additionalOptions: !0
    }
  },
  {
    type: "modal",
    alias: "Umb.Modal.DocumentBlueprintOptionsCreate",
    name: "Document Blueprint Options Create Modal",
    element: () => import("./document-blueprint-options-create-modal.element-BDt3YKzi.js")
  }
], At = {
  type: "repository",
  alias: x,
  name: "Move Document Blueprint Repository",
  api: () => import("./document-blueprint-move.repository-CnJWcCQb.js")
}, ft = [At], Rt = [
  {
    type: "entityAction",
    kind: "moveTo",
    alias: "Umb.EntityAction.DocumentBlueprint.MoveTo",
    name: "Move Document Blueprint Entity Action",
    forEntityTypes: [f],
    meta: {
      treeRepositoryAlias: h,
      moveRepositoryAlias: x,
      treeAlias: g,
      foldersOnly: !0
    }
  },
  ...ft
], Ot = [
  {
    type: "entityAction",
    kind: "delete",
    alias: "Umb.EntityAction.DocumentBlueprintItem.Delete",
    name: "Delete Document Blueprint Item Entity Action",
    forEntityTypes: [f],
    meta: {
      detailRepositoryAlias: G,
      itemRepositoryAlias: K
    }
  },
  ...dt,
  ...Rt
], It = [
  {
    type: "menuItem",
    kind: "tree",
    alias: "Umb.MenuItem.DocumentBlueprints",
    name: "Document Blueprints Menu Item",
    weight: 100,
    meta: {
      treeAlias: g,
      label: "#treeHeaders_contentBlueprints",
      menus: ["Umb.Menu.StructureSettings"]
    }
  }
], bt = [
  {
    type: "repository",
    alias: G,
    name: "Document Blueprint Detail Repository",
    api: () => import("./document-blueprint-detail.repository-CueAI7vS.js")
  },
  {
    type: "store",
    alias: de,
    name: "Document Blueprint Detail Store",
    api: () => import("./document-blueprint-detail.store-ipGfszU_.js")
  }
], Mt = [
  {
    type: "repository",
    alias: K,
    name: "Document Blueprint Item Repository",
    api: () => import("./document-blueprint-item.repository-cY1Pfesr.js")
  },
  {
    type: "itemStore",
    alias: Ae,
    name: "Document Blueprint Item Store",
    api: () => import("./document-blueprint-item.store-tpIR52O1.js")
  }
], St = [...bt, ...Mt], Pt = [
  {
    type: "repository",
    alias: k,
    name: "Document Blueprint Folder Repository",
    api: () => import("./document-blueprint-folder.repository-BFdXsDBe.js")
  },
  {
    type: "store",
    alias: fe,
    name: "Document Blueprint Folder Store",
    api: () => import("./document-blueprint-folder.store-CFvflK8e.js")
  }
], Ct = [
  {
    type: "workspace",
    kind: "routable",
    alias: v,
    name: "Document Blueprint Folder Workspace",
    api: () => import("./document-blueprint-folder-workspace.context-DUzN-zpK.js"),
    meta: {
      entityType: c
    }
  },
  {
    type: "workspaceAction",
    kind: "default",
    alias: "Umb.WorkspaceAction.DocumentBlueprint.Folder.Submit",
    name: "Submit Document Blueprint Folder Workspace Action",
    api: R,
    meta: {
      label: "#buttons_save",
      look: "primary",
      color: "positive"
    },
    conditions: [
      {
        alias: t,
        match: v
      }
    ]
  }
], Bt = [
  {
    type: "entityAction",
    kind: "folderUpdate",
    alias: "Umb.EntityAction.DocumentBlueprint.Folder.Rename",
    name: "Rename Document Blueprint Folder Entity Action",
    forEntityTypes: [c],
    meta: {
      folderRepositoryAlias: k
    }
  },
  {
    type: "entityAction",
    kind: "folderDelete",
    alias: "Umb.EntityAction.DocumentBlueprint.Folder.Delete",
    name: "Delete Document Blueprint Folder Entity Action",
    forEntityTypes: [c],
    meta: {
      folderRepositoryAlias: k
    }
  },
  ...Pt,
  ...Ct
], ht = [
  {
    type: "entityAction",
    kind: "reloadTreeItemChildren",
    alias: "Umb.EntityAction.DocumentBlueprint.Tree.ReloadChildrenOf",
    name: "Reload Document Blueprint Tree Item Children Entity Action",
    forEntityTypes: [D, c],
    meta: {}
  }
], kt = [
  {
    type: "repository",
    alias: h,
    name: "Document Blueprint Tree Repository",
    api: () => import("./document-blueprint-tree.repository-v120qUW3.js")
  },
  {
    type: "treeStore",
    alias: Re,
    name: "Document Blueprint Tree Store",
    api: () => import("./document-blueprint-tree.store-KvGnWrlJ.js")
  },
  {
    type: "tree",
    kind: "default",
    alias: g,
    name: "Document Blueprints Tree",
    meta: {
      repositoryAlias: h
    }
  },
  {
    type: "treeItem",
    kind: "default",
    alias: "Umb.TreeItem.DocumentBlueprint",
    name: "Document Blueprint Tree Item",
    forEntityTypes: [
      D,
      f,
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
  ...ht,
  ...Bt
], Nt = [
  {
    type: "workspace",
    kind: "routable",
    alias: B,
    name: "Document Blueprint Workspace",
    api: () => import("./document-blueprint-workspace.context-WnS23Cxh.js"),
    meta: {
      entityType: f
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
        match: B
      }
    ]
  },
  {
    type: "workspaceAction",
    kind: "default",
    alias: "Umb.WorkspaceAction.DocumentBlueprint.Save",
    name: "Save Document Workspace Action",
    weight: 80,
    api: R,
    meta: {
      label: "Save",
      look: "primary",
      color: "positive"
    },
    conditions: [
      {
        alias: t,
        match: B
      }
    ]
  }
], Lt = [
  ...Ot,
  ...It,
  ...St,
  ...kt,
  ...Nt,
  {
    name: "Document Blueprint Backoffice Entry Point",
    alias: "Umb.BackofficeEntryPoint.DocumentBlueprint",
    type: "backofficeEntryPoint",
    js: () => import("./entry-point-DNZW_leG.js")
  }
], gt = [
  {
    type: "workspaceInfoApp",
    name: "Document History Workspace Info App",
    alias: "Umb.WorkspaceInfoApp.Document.History",
    element: () => import("./document-history-workspace-info-app.element-CcmDh7IU.js"),
    weight: 80,
    conditions: [
      {
        alias: t,
        match: o
      }
    ]
  }
], $t = [...gt], wt = [
  {
    type: "collectionAction",
    kind: "button",
    name: "Create Document Collection Action",
    alias: "Umb.CollectionAction.Document.Create",
    element: () => import("./create-document-collection-action.element-ksKmJRr8.js"),
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
], Yt = [
  {
    type: "repository",
    alias: j,
    name: "Document Collection Repository",
    api: () => import("./document-collection.repository-iiYObbaE.js")
  }
], Wt = [
  {
    type: "collectionView",
    alias: Oe,
    name: "Document Grid Collection View",
    element: () => import("./document-grid-collection-view.element-B--tP-zv.js"),
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
    alias: Ie,
    name: "Document Table Collection View",
    element: () => import("./document-table-collection-view.element-CB6d5fth.js"),
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
], vt = [
  {
    type: "collection",
    alias: l,
    name: "Document Collection",
    api: () => import("./document-collection.context-Cdx-UUZg.js"),
    element: () => import("./document-collection.element-DnGxM0Wz.js"),
    meta: {
      repositoryAlias: j
    }
  },
  ...wt,
  ...Yt,
  ...Wt
], Vt = [
  {
    type: "entityAction",
    kind: "default",
    alias: "Umb.EntityAction.Document.CreateBlueprint",
    name: "Create Document Blueprint Entity Action",
    weight: 1e3,
    api: () => import("./create-blueprint.action-Cmo_--3P.js"),
    forEntityTypes: [e],
    meta: {
      icon: "icon-blueprint",
      label: "#actions_createblueprint",
      additionalOptions: !0
    },
    conditions: [
      {
        alias: "Umb.Condition.UserPermission.Document",
        allOf: [q]
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
    element: () => import("./create-blueprint-modal.element-5V97z8Rc.js")
  }
], Ft = [
  {
    type: "entityAction",
    kind: "default",
    alias: "Umb.EntityAction.Document.Create",
    name: "Create Document Entity Action",
    weight: 1200,
    api: () => import("./create.action-B1zu-QpD.js"),
    forEntityTypes: [J, e],
    meta: {
      icon: "icon-add",
      label: "#actions_createFor",
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
    alias: "Umb.Modal.Document.CreateOptions",
    name: "Document Create Options Modal",
    element: () => import("./document-create-options-modal.element-Baj5xsTV.js")
  }
], Ht = [
  {
    type: "entityAction",
    kind: "default",
    alias: "Umb.EntityAction.Document.CultureAndHostnames",
    name: "Culture And Hostnames Document Entity Action",
    weight: 400,
    api: () => import("./culture-and-hostnames.action-BCJ5IjwX.js"),
    forEntityTypes: [e],
    meta: {
      icon: "icon-home",
      label: "#actions_assigndomain",
      additionalOptions: !0
    },
    conditions: [
      {
        alias: "Umb.Condition.UserPermission.Document",
        allOf: [X]
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
    element: () => import("./culture-and-hostnames-modal.element-DgqNE89K.js").then((C) => C.c)
  }
], xt = [
  {
    type: "repository",
    alias: be,
    name: "Duplicate Document Repository",
    api: () => import("./document-duplicate.repository-Cz6LQokO.js")
  }
], Kt = [
  {
    type: "entityAction",
    kind: "duplicateTo",
    alias: "Umb.EntityAction.Document.DuplicateTo",
    name: "Duplicate Document To Entity Action",
    forEntityTypes: [e],
    api: () => import("./duplicate-document.action-BJq0XsPT.js"),
    conditions: [
      {
        alias: "Umb.Condition.UserPermission.Document",
        allOf: [w]
      },
      {
        alias: i
      }
    ]
  },
  ...xt,
  ...Me
], Gt = [
  {
    type: "repository",
    alias: Q,
    name: "Move Document Repository",
    api: () => import("./document-move.repository-Co8XfLpx.js")
  }
], jt = [
  {
    type: "entityAction",
    kind: "moveTo",
    alias: "Umb.EntityAction.Document.MoveTo",
    name: "Move Document Entity Action",
    forEntityTypes: [e],
    meta: {
      treeRepositoryAlias: Z,
      moveRepositoryAlias: Q,
      treeAlias: Y
    },
    conditions: [
      {
        alias: "Umb.Condition.UserPermission.Document",
        allOf: [O]
      },
      {
        alias: i
      }
    ]
  },
  ...Gt
], qt = [
  {
    type: "repository",
    alias: ee,
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
    forEntityTypes: [J, e],
    meta: {
      itemRepositoryAlias: p,
      sortChildrenOfRepositoryAlias: ee,
      treeRepositoryAlias: Z,
      additionalOptions: !0
    },
    conditions: [
      {
        alias: "Umb.Condition.UserPermission.Document",
        allOf: [te]
      },
      {
        alias: i
      }
    ]
  }
], Jt = [
  {
    type: "repository",
    alias: Se,
    name: "Document Notifications Repository",
    api: () => import("./document-notifications.repository-Crs2B9Ne.js")
  }
], Xt = [
  {
    type: "entityAction",
    kind: "default",
    alias: "Umb.EntityAction.Document.Notifications",
    name: "Notifications",
    weight: 100,
    api: () => import("./document-notifications.action-DkND_P3L.js"),
    forEntityTypes: [e],
    meta: {
      icon: "icon-megaphone",
      label: "#actions_notify",
      additionalOptions: !0
    },
    conditions: [
      {
        alias: "Umb.Condition.UserPermission.Document",
        allOf: [ie]
      },
      {
        alias: i
      }
    ]
  }
], Qt = [...Xt, ...Pe, ...Jt], Zt = [
  {
    type: "entityAction",
    kind: "deleteWithRelation",
    alias: "Umb.EntityAction.Document.Delete",
    name: "Delete Document Entity Action",
    forEntityTypes: [e],
    meta: {
      itemRepositoryAlias: p,
      detailRepositoryAlias: ne,
      referenceRepositoryAlias: E
    },
    conditions: [
      {
        alias: "Umb.Condition.UserPermission.Document",
        allOf: [_]
      },
      {
        alias: pe
      }
    ]
  }
], ei = [
  ...Vt,
  ...Ft,
  ...Ht,
  ...Kt,
  ...jt,
  ...zt,
  ...Zt,
  ...Qt
], ti = [
  {
    type: "repository",
    alias: oe,
    name: "Bulk Duplicate Media Repository",
    api: () => import("./duplicate-to.repository-DAADCcTm.js")
  }
], ii = [
  {
    type: "entityBulkAction",
    kind: "duplicateTo",
    alias: "Umb.EntityBulkAction.Document.DuplicateTo",
    name: "Duplicate Document Entity Bulk Action",
    weight: 30,
    forEntityTypes: [e],
    meta: {
      bulkDuplicateRepositoryAlias: oe,
      treeAlias: Y
    },
    conditions: [
      {
        alias: s,
        match: l
      },
      {
        alias: "Umb.Condition.UserPermission.Document",
        allOf: [w]
      }
    ]
  },
  ...ti
], ni = [
  {
    type: "repository",
    alias: ae,
    name: "Bulk Move Document Repository",
    api: () => import("./move-to.repository-CHGd2CBT.js")
  }
], oi = [
  {
    type: "entityBulkAction",
    kind: "moveTo",
    alias: "Umb.EntityBulkAction.Document.MoveTo",
    name: "Move Document Entity Bulk Action",
    weight: 20,
    forEntityTypes: [e],
    meta: {
      bulkMoveRepositoryAlias: ae,
      treeAlias: Y
    },
    conditions: [
      {
        alias: s,
        match: l
      },
      {
        alias: "Umb.Condition.UserPermission.Document",
        allOf: [O]
      }
    ]
  },
  ...ni
], ai = [...ii, ...oi], si = {
  type: "entitySign",
  kind: "icon",
  alias: "Umb.EntitySign.Document.IsProtected",
  name: "Is Protected Document Entity Sign",
  forEntityTypes: [e],
  forEntityFlags: ["Umb.IsProtected"],
  weight: 1e3,
  meta: {
    iconName: "icon-block",
    label: "Protected",
    iconColorAlias: "red"
  }
}, mi = [
  {
    type: "entitySign",
    kind: "icon",
    alias: "Umb.EntitySign.Document.HasScheduledPublish",
    name: "Document has scheduled publish Entity Sign",
    forEntityTypes: [e],
    forEntityFlags: ["Umb.ScheduledForPublish"],
    overwrites: "Umb.EntitySign.Document.HasPendingChanges",
    weight: 500,
    meta: {
      iconName: "icon-time",
      label: "Scheduled publishing",
      iconColorAlias: "green"
    }
  }
], ri = [
  {
    type: "entitySign",
    kind: "icon",
    alias: "Umb.EntitySign.Document.HasPendingChanges",
    name: "Has Pending Changes Document Entity Sign",
    forEntityTypes: [e],
    forEntityFlags: ["Umb.PendingChanges"],
    meta: { iconName: "icon-edit", label: "Unpublished changes" }
  }
], ci = [
  si,
  ...mi,
  ...ri
], pi = [
  {
    type: "globalContext",
    alias: "Umb.GlobalContext.DocumentConfiguration",
    name: "Document Configuration Context",
    api: () => import("./document-configuration.context-Bz7FvH_D.js")
  }
], li = [
  {
    type: "repository",
    alias: p,
    name: "Document Item Repository",
    api: () => import("./document-item.repository-C0SbAo-7.js")
  },
  {
    type: "itemStore",
    alias: Ce,
    name: "Document Item Store",
    api: () => import("./document-item.store-DL8GkdM_.js")
  }
], yi = [
  {
    type: "entityItemRef",
    alias: "Umb.EntityItemRef.Document",
    name: "Document Entity Item Reference",
    element: () => import("./document-item-ref.element-BSivZZBv.js"),
    forEntityTypes: [e]
  },
  ...li
], ui = [Be], _i = [
  {
    type: "pickerSearchResultItem",
    kind: "default",
    alias: "Umb.PickerSearchResultItem.Document",
    name: "Document Picker Search Result Item",
    element: () => import("./document-picker-search-result-item.element-DaWo3iMs.js"),
    forEntityTypes: [e]
  }
], Ei = {
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
}, Ti = [
  {
    type: "propertyEditorUi",
    alias: "Umb.PropertyEditorUi.DocumentPicker",
    name: "Document Picker Property Editor UI",
    element: () => import("./property-editor-ui-document-picker.element-CaVj22Re.js"),
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
  Ei
], Di = [...Ti], Ui = [
  {
    type: "entityAction",
    kind: "default",
    alias: "Umb.EntityAction.Document.Publish",
    name: "Publish Document Entity Action",
    weight: 600,
    api: () => import("./publish.action-X591nSgh.js"),
    forEntityTypes: [e],
    meta: {
      icon: "icon-globe",
      label: "#actions_publish",
      additionalOptions: !0
    },
    conditions: [
      {
        alias: "Umb.Condition.UserPermission.Document",
        allOf: [T]
      },
      {
        alias: i
      }
    ]
  }
], di = [
  {
    type: "entityBulkAction",
    kind: "default",
    alias: "Umb.EntityBulkAction.Document.Publish",
    name: "Publish Document Entity Bulk Action",
    weight: 50,
    api: () => import("./publish.bulk-action-D7TF_g43.js"),
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
        allOf: [T]
      }
    ]
  }
], Ai = [
  {
    type: "modal",
    alias: he,
    name: "Document Publish Modal",
    element: () => import("./document-publish-modal.element-CDNuuR70.js")
  }
], fi = [
  {
    type: "workspaceAction",
    kind: "default",
    alias: "Umb.WorkspaceAction.Document.SaveAndPublish",
    name: "Save And Publish Document Workspace Action",
    weight: 70,
    api: () => import("./save-and-publish.action-RUrp5288.js"),
    meta: {
      label: "#buttons_saveAndPublish",
      look: "primary",
      color: "positive"
    },
    conditions: [
      {
        alias: t,
        match: o
      },
      {
        alias: i
      }
    ]
  }
], Ri = [
  ...Ui,
  ...di,
  ...Ai,
  ...fi
], Oi = [
  {
    type: "modal",
    alias: ke,
    name: "Document Publish With Descendants Modal",
    element: () => import("./document-publish-with-descendants-modal.element-BHe7VdlT.js")
  }
], Ii = [
  {
    type: "workspaceActionMenuItem",
    kind: "default",
    alias: "Umb.Document.WorkspaceActionMenuItem.PublishWithDescendants",
    name: "Publish with descendants",
    weight: 10,
    api: () => import("./publish-with-descendants.action-D5qjlLcr.js"),
    forWorkspaceActions: "Umb.WorkspaceAction.Document.SaveAndPublish",
    meta: {
      label: "#buttons_publishDescendants",
      icon: "icon-globe"
    },
    conditions: [
      {
        alias: I,
        allOf: [W, T]
      },
      {
        alias: i
      },
      {
        alias: $,
        match: !1
      }
    ]
  }
], bi = [...Oi, ...Ii], Mi = [
  {
    type: "repository",
    alias: Ne,
    name: "Document Publishing Repository",
    api: () => import("./document-publishing.repository-R5iIv5OV.js")
  }
], Si = [
  {
    type: "modal",
    alias: Le,
    name: "Document Schedule Modal",
    element: () => import("./document-schedule-modal.element-C4WypZk2.js")
  }
], Pi = [
  {
    type: "workspaceActionMenuItem",
    kind: "default",
    alias: "Umb.Document.WorkspaceActionMenuItem.SchedulePublishing",
    name: "Schedule publishing",
    weight: 20,
    api: () => import("./save-and-schedule.action-BQzncrRN.js"),
    forWorkspaceActions: "Umb.WorkspaceAction.Document.SaveAndPublish",
    meta: {
      label: "#buttons_schedulePublish",
      icon: "icon-globe"
    },
    conditions: [
      {
        alias: I,
        allOf: [W, T]
      },
      {
        alias: i
      },
      {
        alias: $,
        match: !1
      }
    ]
  }
], Ci = [...Si, ...Pi], Bi = [
  {
    type: "entityAction",
    kind: "default",
    alias: "Umb.EntityAction.Document.Unpublish",
    name: "Unpublish Document Entity Action",
    weight: 500,
    api: () => import("./unpublish.action--4VixTAA.js"),
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
], hi = [
  {
    type: "entityBulkAction",
    kind: "default",
    alias: "Umb.EntityBulkAction.Document.Unpublish",
    name: "Unpublish Document Entity Bulk Action",
    weight: 40,
    api: () => import("./unpublish.bulk-action-B7tIUlwL.js"),
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
], ki = [
  {
    type: "modal",
    alias: ge,
    name: "Document Unpublish Modal",
    element: () => import("./document-unpublish-modal.element-AjaAP0i-.js")
  }
], Ni = [
  {
    type: "workspaceActionMenuItem",
    kind: "default",
    alias: "Umb.Document.WorkspaceActionMenuItem.Unpublish",
    name: "Unpublish",
    weight: 0,
    api: () => import("./unpublish.action-joPjKqe7.js"),
    forWorkspaceActions: "Umb.WorkspaceAction.Document.SaveAndPublish",
    meta: {
      label: "#actions_unpublish",
      icon: "icon-globe"
    },
    conditions: [
      {
        alias: I,
        allOf: [b]
      },
      {
        alias: i
      },
      {
        alias: $,
        match: !1
      }
    ]
  }
], Li = [
  ...Bi,
  ...hi,
  ...ki,
  ...Ni
], gi = [
  {
    type: "workspaceContext",
    name: "Document Publishing Workspace Context",
    alias: "Umb.WorkspaceContext.Document.Publishing",
    api: () => import("./document-publishing.workspace-context-De5j-yxD.js"),
    conditions: [
      {
        alias: t,
        match: o
      }
    ]
  }
], $i = [
  ...Ri,
  ...bi,
  ...Mi,
  ...Ci,
  ...Li,
  ...gi
], wi = [
  {
    type: "repository",
    alias: $e,
    name: "Bulk Trash Document Repository",
    api: () => import("./trash.repository-C5KL4UkK.js")
  }
], Yi = [
  {
    type: "entityBulkAction",
    kind: nt,
    alias: "Umb.EntityBulkAction.Document.Trash",
    name: "Trash Document Entity Bulk Action",
    weight: 10,
    forEntityTypes: [e],
    meta: {
      itemRepositoryAlias: p,
      recycleBinRepositoryAlias: u,
      referenceRepositoryAlias: E
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
  ...wi
], Wi = [
  {
    type: "entityAction",
    kind: "trashWithRelation",
    alias: "Umb.EntityAction.Document.RecycleBin.Trash",
    name: "Trash Document Entity Action",
    forEntityTypes: [e],
    meta: {
      itemRepositoryAlias: p,
      recycleBinRepositoryAlias: u,
      referenceRepositoryAlias: E
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
      pickerModal: we
    },
    conditions: [
      {
        alias: "Umb.Condition.UserPermission.Document",
        allOf: [O]
      },
      {
        alias: pe
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
        alias: ot
      }
    ]
  },
  ...Yi
], vi = [
  {
    type: "menuItem",
    kind: "tree",
    alias: "Umb.MenuItem.Document.RecycleBin",
    name: "Document Recycle Bin Menu Item",
    weight: 100,
    meta: {
      treeAlias: se,
      label: "Recycle Bin",
      icon: "icon-trash",
      menus: [Ye]
    },
    conditions: [
      {
        alias: "Umb.Condition.CurrentUser.AllowDocumentRecycleBin"
      }
    ]
  }
], Vi = [
  {
    type: "repository",
    alias: u,
    name: "Document Recycle Bin Repository",
    api: () => import("./document-recycle-bin.repository-DffgP1i2.js")
  }
], Fi = [
  {
    type: "repository",
    alias: me,
    name: "Document Recycle Bin Tree Repository",
    api: () => import("./document-recycle-bin-tree.repository-C8UcvjQc.js")
  },
  {
    type: "treeStore",
    alias: We,
    name: "Document Recycle Bin Tree Store",
    api: () => import("./document-recycle-bin-tree.store-C7qB_ok7.js")
  }
], Hi = [
  {
    type: "entityAction",
    kind: "reloadTreeItemChildren",
    alias: "Umb.EntityAction.DocumentRecycleBin.Tree.ReloadChildrenOf",
    name: "Reload Document Recycle Bin Tree Item Children Entity Action",
    forEntityTypes: [M]
  }
], xi = [
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
], Ki = [
  {
    type: "tree",
    kind: "default",
    alias: se,
    name: "Document Recycle Bin Tree",
    meta: {
      repositoryAlias: me
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
  ...Fi,
  ...Hi,
  ...xi
], Gi = [
  {
    type: "condition",
    name: "Allow Document Recycle Bin Current User Condition",
    alias: "Umb.Condition.CurrentUser.AllowDocumentRecycleBin",
    api: () => import("./allow-document-recycle-bin.condition-BbjBGWsb.js")
  },
  ...Wi,
  ...vi,
  ...Vi,
  ...Ki
], ji = [
  {
    type: "repository",
    alias: ne,
    name: "Document Detail Repository",
    api: () => import("./document-detail.repository-CtE7HTwC.js")
  },
  {
    type: "store",
    alias: ve,
    name: "Document Detail Store",
    api: () => import("./document-detail.store-De-_eABC.js")
  }
], qi = [...ji], zi = [
  {
    type: "entityAction",
    kind: "default",
    alias: "Umb.EntityAction.Document.Rollback",
    name: "Rollback Document Entity Action",
    weight: 450,
    api: () => import("./rollback.action-i90qg8op.js"),
    forEntityTypes: [e],
    meta: {
      icon: "icon-history",
      label: "#actions_rollback",
      additionalOptions: !0
    },
    conditions: [
      {
        alias: "Umb.Condition.UserPermission.Document",
        allOf: [re]
      },
      {
        alias: i
      }
    ]
  }
], Ji = [
  {
    type: "modal",
    alias: Ve,
    name: "Document Rollback Modal",
    element: () => import("./rollback-modal.element-CdoTwM33.js")
  }
], Xi = [
  {
    type: "repository",
    alias: Fe,
    name: "Rollback Repository",
    api: () => import("./rollback.repository-Be4ZtX_9.js")
  }
], Qi = [
  ...zi,
  ...Ji,
  ...Xi
], Zi = [
  {
    name: "Document Global Search",
    alias: He,
    type: "globalSearch",
    weight: 800,
    api: () => import("./document-global-search-nD8a5kJ7.js"),
    meta: {
      label: "Documents",
      searchProviderAlias: ce
    },
    conditions: [
      {
        alias: L,
        match: y
      }
    ]
  }
], en = [
  {
    name: "Document Search Provider",
    alias: ce,
    type: "searchProvider",
    api: () => import("./document.search-provider-_j2SZaGG.js"),
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
  ...Zi
], tn = [
  {
    type: "workspaceInfoApp",
    kind: "entityReferences",
    name: "Document References Workspace Info App",
    alias: "Umb.WorkspaceInfoApp.Document.References",
    conditions: [
      {
        alias: t,
        match: o
      }
    ],
    meta: {
      referenceRepositoryAlias: E
    }
  }
], nn = [
  {
    type: "repository",
    alias: E,
    name: "Document Reference Repository",
    api: () => import("./document-reference.repository-BLxPpYxT.js")
  },
  {
    type: "dataSourceDataMapping",
    alias: "Umb.DataSourceDataMapping.ManagementApi.DocumentReferenceResponse",
    name: "Document Reference Response Management Api Data Mapping",
    api: () => import("./document-reference-response.management-api.mapping-Tdfsn1O9.js"),
    forDataSource: U,
    forDataModel: "DocumentReferenceResponseModel"
  }
], on = [...tn, ...nn], an = [
  {
    type: "workspaceInfoApp",
    name: "Document Links Workspace Info App",
    alias: "Umb.WorkspaceInfoApp.Document.Links",
    element: () => import("./document-links-workspace-info-app.element-DLOLbfHr.js"),
    weight: 100,
    conditions: [
      {
        alias: t,
        match: o
      }
    ]
  }
], sn = {
  type: "repository",
  alias: xe,
  name: "Document Url Repository",
  api: () => import("./document-url.repository-BBTB3jpe.js")
}, mn = {
  type: "itemStore",
  alias: Ke,
  name: "Document Url Store",
  api: () => import("./document-url.store-CpXniI-K.js")
}, rn = [sn, mn], cn = [...rn, ...an], pn = [
  {
    type: "repository",
    alias: Ge,
    name: "Document Permission Repository",
    api: () => import("./document-permission.repository-DTHGLVXN.js")
  }
], ln = [
  {
    type: "condition",
    name: "Document User Permission Condition",
    alias: I,
    api: () => import("./document-user-permission.condition-BkDOsmEj.js")
  }
], yn = [
  {
    type: "entityUserPermission",
    alias: je,
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
    alias: q,
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
    alias: z,
    name: "Create Document User Permission",
    forEntityTypes: [e],
    meta: {
      verbs: ["Umb.Document.Create"],
      label: "#actions_createFor",
      description: "#actionDescriptions_create"
    }
  },
  {
    type: "entityUserPermission",
    alias: ie,
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
    alias: T,
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
    alias: qe,
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
    alias: W,
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
    alias: w,
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
    alias: O,
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
    alias: te,
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
    alias: X,
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
    alias: ze,
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
    alias: re,
    name: "Document Rollback User Permission",
    forEntityTypes: [e],
    meta: {
      verbs: ["Umb.Document.Rollback"],
      label: "#actions_rollback",
      description: "#actionDescriptions_rollback",
      group: "administration"
    }
  }
], un = [
  {
    type: "userGranularPermission",
    alias: "Umb.UserGranularPermission.Document",
    name: "Document Granular User Permission",
    weight: 1e3,
    element: () => import("./input-document-granular-user-permission.element-DTcOaSbr.js"),
    meta: {
      schemaType: "DocumentPermissionPresentationModel",
      label: "#user_granularRightsLabel",
      description: "{#user_granularRightsDescription}"
    }
  }
], _n = [
  ...pn,
  ...yn,
  ...un,
  ...ln
], En = [
  {
    type: "modal",
    alias: "Umb.Modal.DocumentPropertyValueUserPermissionFlow",
    name: "Document Property Value User Permission Flow Modal",
    element: () => import("./document-property-value-permission-flow-modal.element-GS4GGDfd.js")
  },
  ...Je
], Tn = [
  {
    type: "condition",
    name: "Document Property Value User Permission Condition",
    alias: Xe,
    api: () => import("./document-property-value-user-permission.condition-CU3w8NKw.js")
  }
], Dn = [
  {
    type: "dataSourceDataMapping",
    alias: "Umb.DataSourceDataMapping.ManagementApi.To.DocumentPropertyValuePermissionPresentationModel",
    name: "Document Property Value Permission To Management Api Data Mapping",
    api: () => import("./to-server.management-api.mapping-Cv7DOLAt.js"),
    forDataSource: U,
    forDataModel: Qe
  },
  {
    type: "dataSourceDataMapping",
    alias: "Umb.DataSourceDataMapping.ManagementApi.From.DocumentPropertyValuePermissionPresentationModel",
    name: "Document Property Value Permission From Management Api Data Mapping",
    api: () => import("./from-server.management-api.mapping-9ogCj1ic.js"),
    forDataSource: U,
    forDataModel: "DocumentPropertyValuePermissionPresentationModel"
  }
], Un = [
  {
    type: "workspaceContext",
    name: "Document Property Value User Permission Document Workspace Context",
    alias: "Umb.WorkspaceContext.Document.DocumentPropertyValueUserPermission",
    api: () => import("./document-property-value-user-permission.workspace-context-CRTGkL2D.js"),
    conditions: [
      {
        alias: t,
        match: o
      }
    ]
  },
  {
    type: "workspaceContext",
    name: "Document Property Value User Permission Block Workspace Context",
    alias: "Umb.WorkspaceContext.Block.DocumentPropertyValueUserPermission",
    api: () => import("./document-block-property-value-user-permission.workspace-context-BcA2JyP0.js"),
    conditions: [
      {
        alias: t,
        match: at
      }
    ]
  }
], dn = [
  {
    type: "entityUserPermission",
    alias: "Umb.EntityUserPermission.Document.PropertyValue.Read",
    name: "Read Document Property Value User Permission",
    forEntityTypes: [V],
    weight: 200,
    meta: {
      verbs: [Ze],
      label: "UI Read",
      description: "Allow access to read Document property values in the UI"
    }
  },
  {
    type: "entityUserPermission",
    alias: "Umb.EntityUserPermission.DocumentPropertyValue.Write",
    name: "Write Document Property Value User Permission",
    forEntityTypes: [V],
    weight: 200,
    meta: {
      verbs: [et],
      label: "UI Write",
      description: "Allow access to write Document property values from the UI"
    }
  },
  {
    type: "userGranularPermission",
    alias: "Umb.UserGranularPermission.Document.PropertyValue",
    name: "Document Property Values Granular User Permission",
    weight: 950,
    element: () => import("./input-document-property-value-user-permission.element-BhBOKkjF.js"),
    meta: {
      schemaType: "DocumentPropertyValuePermissionPresentationModel",
      label: "Document Property Values",
      description: "Assign permissions to Document property values"
    }
  },
  ...Tn,
  ...Dn,
  ...En,
  ...Un
], An = [
  ..._n,
  ...dn
], fn = [
  {
    type: "workspaceAction",
    kind: "default",
    alias: "Umb.WorkspaceAction.Document.Save",
    name: "Save Document Workspace Action",
    weight: 80,
    api: () => import("./save.action-DH7wWlrz.js"),
    meta: {
      label: "#buttons_save",
      look: "secondary",
      color: "positive"
    },
    conditions: [
      {
        alias: t,
        match: o
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
    api: () => import("./save-and-preview.action-D1bS_iCo.js"),
    meta: {
      label: "#buttons_saveAndPreview"
    },
    conditions: [
      {
        alias: t,
        match: o
      },
      {
        alias: i
      }
    ]
  }
], Rn = [
  {
    type: "workspace",
    kind: "routable",
    alias: o,
    name: "Document Workspace",
    api: () => import("./document-workspace.context-CJunPKok.js"),
    meta: {
      entityType: e
    }
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
        match: o
      },
      {
        alias: Ue
      }
    ]
  },
  {
    type: "workspaceView",
    alias: "Umb.WorkspaceView.Document.Info",
    name: "Document Workspace Info View",
    element: () => import("./document-workspace-view-info.element-BPnXkFOg.js"),
    weight: 100,
    meta: {
      label: "#general_info",
      pathname: "info",
      icon: "info"
    },
    conditions: [
      {
        alias: t,
        match: o
      }
    ]
  },
  ...fn
], On = [
  ...$t,
  ...vt,
  ...ei,
  ...ai,
  ...ci,
  ...pi,
  ...yi,
  ...tt,
  ...ui,
  ..._i,
  ...Di,
  ...$i,
  ...Gi,
  ...qi,
  ...Qi,
  ...en,
  ...on,
  ...it,
  ...cn,
  ...An,
  ...Rn,
  {
    name: "Document Backoffice Entry Point",
    alias: "Umb.BackofficeEntryPoint.Document",
    type: "backofficeEntryPoint",
    js: () => import("./entry-point-C3C6o2mr.js")
  }
], In = [
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
], bn = [
  {
    type: "entityAction",
    kind: "create",
    alias: "Umb.EntityAction.DocumentType.Create",
    name: "Create Document Type Entity Action",
    weight: 1200,
    forEntityTypes: [
      n,
      m,
      a
    ],
    meta: {
      icon: "icon-add",
      label: "#actions_createFor",
      additionalOptions: !0,
      headline: "#create_createUnder #treeHeaders_documentTypes"
    }
  },
  {
    type: "entityCreateOptionAction",
    alias: "Umb.EntityCreateOptionAction.DocumentType.Default",
    name: "Default Document Type Entity Create Option Action",
    weight: 100,
    api: () => import("./default-document-type-create-option-action-MuNjyeGY.js"),
    forEntityTypes: [
      n,
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
    api: () => import("./document-type-with-template-create-option-action-NgappFOB.js"),
    forEntityTypes: [
      n,
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
    api: () => import("./element-type-create-option-action-DwmLIRoB.js"),
    forEntityTypes: [
      n,
      m,
      a
    ],
    meta: {
      icon: "icon-plugin",
      label: "#create_elementType",
      description: "#create_elementTypeDescription"
    }
  },
  ...In
], Mn = [
  {
    type: "repository",
    alias: le,
    name: "Move Document Type Repository",
    api: () => import("./document-type-move.repository-Bur1vBeJ.js")
  }
], Sn = [
  {
    type: "entityAction",
    kind: "moveTo",
    alias: "Umb.EntityAction.DocumentType.MoveTo",
    name: "Move Document Type Entity Action",
    forEntityTypes: [n],
    meta: {
      treeRepositoryAlias: A,
      moveRepositoryAlias: le,
      treeAlias: S,
      foldersOnly: !0
    }
  },
  ...Mn
], Pn = [
  {
    type: "repository",
    alias: ye,
    name: "Duplicate Document Type Repository",
    api: () => import("./document-type-duplicate.repository-DiiVWECi.js")
  }
], Cn = [
  {
    type: "entityAction",
    kind: "duplicateTo",
    alias: "Umb.EntityAction.DocumentType.DuplicateTo",
    name: "Duplicate Document To Entity Action",
    forEntityTypes: [n],
    meta: {
      duplicateRepositoryAlias: ye,
      treeAlias: S,
      treeRepositoryAlias: A,
      foldersOnly: !0
    }
  },
  ...Pn
], Bn = [
  {
    type: "repository",
    alias: st,
    name: "Export Document Type Repository",
    api: () => import("./document-type-export.repository-DE_VGxKN.js")
  }
], hn = [
  {
    type: "entityAction",
    kind: "default",
    alias: "Umb.EntityAction.DocumentType.Export",
    name: "Export Document Type Entity Action",
    forEntityTypes: [n],
    api: () => import("./document-type-export.action-DCoGXYa-.js"),
    meta: {
      icon: "icon-download-alt",
      label: "#actions_export",
      additionalOptions: !0
    }
  },
  ...Bn
], kn = [
  {
    type: "repository",
    alias: mt,
    name: "Import Document Type Repository",
    api: () => import("./document-type-import.repository-Cc5QCRew.js")
  }
], Nn = [
  {
    type: "modal",
    alias: "Umb.Modal.DocumentType.Import",
    name: "Document Type Import Modal",
    element: () => import("./document-type-import-modal.element-C_zOElEL.js")
  }
], Ln = [
  {
    type: "entityAction",
    kind: "default",
    alias: "Umb.EntityAction.DocumentType.Import",
    name: "Export Document Type Entity Action",
    forEntityTypes: [m],
    api: () => import("./document-type-import.action-CQYzWwNa.js"),
    meta: {
      icon: "icon-page-up",
      label: "#actions_import",
      additionalOptions: !0
    }
  },
  ...kn,
  ...Nn
], gn = [
  {
    type: "entityAction",
    kind: "delete",
    alias: "Umb.EntityAction.DocumentType.Delete",
    name: "Delete Document-Type Entity Action",
    forEntityTypes: [n],
    meta: {
      itemRepositoryAlias: _e,
      detailRepositoryAlias: ue,
      additionalOptions: !0
    }
  },
  ...bn,
  ...Sn,
  ...Cn,
  ...hn,
  ...Ln
], $n = [
  {
    type: "menuItem",
    kind: "tree",
    alias: F,
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
    kind: "menuStructure",
    name: "Document Type Menu Structure Workspace Context",
    alias: "Umb.Context.DocumentType.Menu.Structure",
    api: () => import("./document-type-menu-structure.context-BzDREXkS.js"),
    meta: {
      menuItemAlias: F
    },
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
], wn = [
  {
    type: "pickerSearchResultItem",
    kind: "default",
    alias: "Umb.PickerSearchResultItem.DocumentType",
    name: "Document Type Picker Search Result Item",
    element: () => import("./document-type-picker-search-result-item.element-4R6o-5UA.js"),
    forEntityTypes: [n]
  }
], Yn = {
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
}, Wn = [Yn], vn = [
  {
    type: "dataSourceDataMapping",
    alias: "Umb.DataSourceDataMapping.ManagementApi.DocumentTypePropertyTypeReferenceResponse",
    name: "Document Type Property Type Reference Response Management Api Data Mapping",
    api: () => import("./document-type-property-type-reference-response.management-api.mapping-1p4TbwNp.js"),
    forDataSource: U,
    forDataModel: "DocumentTypePropertyTypeReferenceResponseModel"
  },
  {
    type: "entityItemRef",
    alias: "Umb.EntityItemRef.DocumentTypePropertyType",
    name: "Document Type Property Type Entity Item Reference",
    element: () => import("./document-type-property-type-item-ref.element-DUuNMsiT.js"),
    forEntityTypes: [rt]
  }
], Vn = [
  {
    type: "repository",
    alias: ue,
    name: "Document Types Repository",
    api: () => import("./document-type-detail.repository-CpC7IMIu.js").then((C) => C.d)
  },
  {
    type: "store",
    alias: ct,
    name: "Document Type Store",
    api: () => import("./document-type-detail.store-BRIoIgqA.js")
  }
], Fn = [
  {
    type: "repository",
    alias: _e,
    name: "Document Type Item Repository",
    api: () => import("./document-type-item.repository-ByLLQhzN.js")
  },
  {
    type: "itemStore",
    alias: pt,
    name: "Document Type Item Store",
    api: () => import("./document-type-item.store-8659wTP3.js")
  }
], Hn = [
  {
    type: "repository",
    alias: Ee,
    name: "Document Type Composition Repository",
    api: () => import("./document-type-composition.repository-BLbQD94J.js")
  }
], xn = [...Vn, ...Fn, ...Hn], Kn = [
  {
    name: "Document Type Global Search",
    alias: lt,
    type: "globalSearch",
    weight: 600,
    meta: {
      label: "Document Types",
      searchProviderAlias: Te
    },
    conditions: [
      {
        alias: L,
        match: Et
      }
    ]
  }
], Gn = [
  {
    name: "Document Type Search Provider",
    alias: Te,
    type: "searchProvider",
    api: () => import("./document-type.search-provider-Bi7Spbsb.js"),
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
    forEntityTypes: [n]
  },
  ...Kn
], jn = [
  {
    type: "repository",
    alias: d,
    name: "Document Type Folder Repository",
    api: () => import("./document-type-folder.repository-Bnl0WtVC.js")
  },
  {
    type: "store",
    alias: yt,
    name: "Document Type Folder Store",
    api: () => import("./document-type-folder.store-B4uEfXQg.js")
  }
], qn = [
  {
    type: "workspace",
    kind: "routable",
    alias: N,
    name: "Document Type Folder Workspace",
    api: () => import("./document-type-folder-workspace.context-2_J7UV_-.js"),
    meta: {
      entityType: a
    }
  },
  {
    type: "workspaceAction",
    kind: "default",
    alias: "Umb.WorkspaceAction.DocumentType.Folder.Submit",
    name: "Submit Document Type Folder Workspace Action",
    api: R,
    meta: {
      label: "#buttons_save",
      look: "primary",
      color: "positive"
    },
    conditions: [
      {
        alias: t,
        match: N
      }
    ]
  }
], zn = [
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
  ...jn,
  ...qn
], Jn = [
  {
    type: "collectionAction",
    kind: "create",
    name: "Document Type Tree Item Children Collection Create Action",
    alias: "Umb.CollectionAction.DocumentTypeTreeItemChildren.Create",
    conditions: [
      {
        alias: s,
        match: P
      }
    ]
  }
], Xn = [
  {
    type: "repository",
    alias: De,
    name: "Document Type Tree Item Children Collection Repository",
    api: () => import("./document-type-tree-item-children-collection.repository-BbAk0czs.js")
  }
], Qn = [
  {
    type: "collectionView",
    alias: "Umb.CollectionView.DocumentType.TreeItem.Table",
    name: "Document Type Tree Item Table Collection View",
    element: () => import("./document-type-tree-item-table-collection-view.element-B-pZrFtk.js"),
    weight: 300,
    meta: {
      label: "Table",
      icon: "icon-list",
      pathName: "table"
    },
    conditions: [
      {
        alias: s,
        match: P
      }
    ]
  }
], Zn = [
  {
    type: "collection",
    kind: "default",
    alias: P,
    name: "Document Type Tree Item Children Collection",
    meta: {
      repositoryAlias: De
    }
  },
  ...Jn,
  ...Xn,
  ...Qn
], eo = [
  {
    type: "entityAction",
    alias: "Umb.EntityAction.DocumentType.Tree.ReloadChildrenOf",
    name: "Reload Document Type Tree Item Children Entity Action",
    kind: "reloadTreeItemChildren",
    forEntityTypes: [
      m,
      n,
      a
    ]
  }
], to = [...Zn, ...eo], io = [
  {
    type: "repository",
    alias: A,
    name: "Document Type Tree Repository",
    api: () => import("./document-type-tree.repository-yCAi_Un2.js")
  },
  {
    type: "treeStore",
    alias: ut,
    name: "Document Type Tree Store",
    api: () => import("./document-type.tree.store-DvhyesZE.js")
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
      n,
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
      collectionAlias: P
    },
    conditions: [
      {
        alias: t,
        oneOf: [_t, N]
      }
    ]
  },
  ...zn,
  ...to
], no = [
  {
    type: "workspace",
    kind: "routable",
    alias: r,
    name: "Document Type Workspace",
    api: () => import("./document-type-workspace.context-DYrPZML8.js"),
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
      compositionRepositoryAlias: Ee
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
    element: () => import("./document-type-workspace-view-structure.element-DaZbkOHZ.js"),
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
    element: () => import("./document-type-workspace-view-settings.element-Bwyu94E0.js"),
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
    element: () => import("./document-type-workspace-view-templates.element-BshIn97z.js"),
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
    api: R,
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
], oo = [
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
], ao = [...no, ...oo], so = [
  ...gn,
  ...$n,
  ...wn,
  ...Wn,
  ...vn,
  ...xn,
  ...Gn,
  ...io,
  ...ao,
  {
    name: "Document Type Backoffice Entry Point",
    alias: "Umb.EntryPoint.DocumentType",
    type: "backofficeEntryPoint",
    js: () => import("./entry-point-DKfMfW5i.js")
  }
], mo = [
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
        alias: L,
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
      menu: Dt,
      entityType: Tt
    },
    conditions: [
      {
        alias: H,
        match: y
      }
    ]
  }
], ko = [
  ...Ut,
  ...Lt,
  ...On,
  ...so,
  ...mo
];
export {
  ko as manifests
};
//# sourceMappingURL=manifests.js.map
