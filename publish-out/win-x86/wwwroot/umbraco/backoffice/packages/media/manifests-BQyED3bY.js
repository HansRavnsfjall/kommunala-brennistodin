import { y as n, a as h, b as j, c as q, U as S, d as B, v as I, t as M, e as D, o as l, p as L, f as g, g as A, h as P, n as z, m, i as E, l as w, j as k, k as J, q as Q, r as X, s as Z, u as ee, w as ie, x as te } from "./dropzone.element-mk7CY1SM.js";
import { UMB_WORKSPACE_CONDITION_ALIAS as i, UmbSubmitWorkspaceAction as b } from "@umbraco-cms/backoffice/workspace";
import { UMB_COLLECTION_ALIAS_CONDITION as s } from "@umbraco-cms/backoffice/collection";
import { p as c, o as t, B as p, G as ae, C as oe, E as $ } from "./input-upload-field.element-DEgpG3Zz.js";
import "./media-url.repository-B5RzlWhD.js";
import { UMB_ENTITY_IS_NOT_TRASHED_CONDITION_ALIAS as d, UMB_ENTITY_IS_TRASHED_CONDITION_ALIAS as Y } from "@umbraco-cms/backoffice/recycle-bin";
import { UMB_ENTITY_BULK_ACTION_TRASH_WITH_RELATION_KIND as ne } from "@umbraco-cms/backoffice/relations";
import { UMB_ENTITY_HAS_CHILDREN_CONDITION_ALIAS as se } from "@umbraco-cms/backoffice/entity-action";
import { UMB_MANAGEMENT_API_DATA_SOURCE_ALIAS as N } from "@umbraco-cms/backoffice/repository";
import { UMB_SECTION_USER_PERMISSION_CONDITION_ALIAS as u, UMB_SECTION_ALIAS_CONDITION_ALIAS as v } from "@umbraco-cms/backoffice/section";
import { UMB_CONTENT_HAS_PROPERTIES_WORKSPACE_CONDITION as re } from "@umbraco-cms/backoffice/content";
import "@umbraco-cms/backoffice/external/backend-api";
import "@umbraco-cms/backoffice/resources";
import "@umbraco-cms/backoffice/picker-input";
import "@umbraco-cms/backoffice/variant";
import "@umbraco-cms/backoffice/tree";
import "@umbraco-cms/backoffice/class-api";
import "@umbraco-cms/backoffice/id";
import "@umbraco-cms/backoffice/media-type";
import "@umbraco-cms/backoffice/utils";
import "@umbraco-cms/backoffice/imaging";
import "@umbraco-cms/backoffice/management-api";
import "@umbraco-cms/backoffice/entity-item";
import { n as r, b as a, m as o, f as T, x as W, I as U, U as _, u as F, v as pe, w as me, r as V, o as x, z as C, a as le, D as ce, E as de, C as H, F as G, G as ye, J as Me, q as R, M as O, N as K, y as Ae, H as Ee, p as y } from "./constants-DTH5dSDc.js";
import { UMB_SETTINGS_SECTION_ALIAS as Te } from "@umbraco-cms/backoffice/settings";
import { a as _e, b as Ie } from "./constants-C418HnkF.js";
const Ue = [
  {
    type: "workspaceInfoApp",
    name: "Media History Workspace Info App",
    alias: "Umb.WorkspaceInfoApp.Media.History",
    element: () => import("./media-history-workspace-info-app.element-DL-JJrKn.js"),
    weight: 80,
    conditions: [
      {
        alias: i,
        match: n
      }
    ]
  }
], fe = [...Ue], Re = [
  {
    type: "collectionAction",
    kind: "button",
    name: "Create Media Collection Action",
    alias: "Umb.CollectionAction.Media.Create",
    element: () => import("./create-media-collection-action.element-Y4fWR9zl.js"),
    weight: 100,
    meta: {
      label: "#general_create"
    },
    conditions: [
      {
        alias: s,
        match: "Umb.Collection.Media"
      }
    ]
  }
], Se = [
  {
    type: "repository",
    alias: h,
    name: "Media Collection Repository",
    api: () => import("./media-collection.repository-2HxoD88i.js")
  }
], be = [
  {
    type: "collectionView",
    alias: j,
    name: "Media Grid Collection View",
    element: () => import("./media-grid-collection-view.element-Der8Nwuu.js"),
    weight: 300,
    meta: {
      label: "Grid",
      icon: "icon-grid",
      pathName: "grid"
    },
    conditions: [
      {
        alias: s,
        match: "Umb.Collection.Media"
      }
    ]
  },
  {
    type: "collectionView",
    alias: q,
    name: "Media Table Collection View",
    element: () => import("./media-table-collection-view.element-B-b-WkRA.js"),
    weight: 200,
    meta: {
      label: "Table",
      icon: "icon-list",
      pathName: "table"
    },
    conditions: [
      {
        alias: s,
        match: "Umb.Collection.Media"
      }
    ]
  }
], ue = [
  {
    type: "collection",
    alias: S,
    name: "Media Collection",
    api: () => import("./media-collection.context-Cws6lYSe.js"),
    element: () => import("./media-collection.element-CPiQEuP4.js"),
    meta: {
      repositoryAlias: h
    }
  },
  ...Re,
  ...Se,
  ...be
], Oe = [
  {
    type: "entityAction",
    kind: "default",
    alias: "Umb.EntityAction.Media.Create",
    name: "Create Media Entity Action",
    weight: 1200,
    api: () => import("./create.action-nwpiLkbl.js"),
    forEntityTypes: [c, t],
    meta: {
      icon: "icon-add",
      label: "#actions_createFor",
      additionalOptions: !0
    },
    conditions: [
      {
        alias: d
      }
    ]
  },
  {
    type: "modal",
    alias: "Umb.Modal.Media.CreateOptions",
    name: "Media Create Options Modal",
    element: () => import("./media-create-options-modal.element-BvXZY2dB.js")
  }
], Pe = [
  {
    type: "repository",
    alias: B,
    name: "Move Media Repository",
    api: () => import("./media-move.repository-CVbQGMH6.js")
  }
], ke = [
  {
    type: "entityAction",
    kind: "moveTo",
    alias: "Umb.EntityAction.Media.MoveTo",
    name: "Move Media Entity Action",
    forEntityTypes: [t],
    meta: {
      treeRepositoryAlias: M,
      moveRepositoryAlias: B,
      treeAlias: I
    },
    conditions: [
      {
        alias: d
      }
    ]
  },
  ...Pe
], Ce = [
  {
    type: "repository",
    alias: D,
    name: "Sort Children Of Media Repository",
    api: () => import("./sort-children-of.repository-CL8u9Kfl.js")
  }
], he = [
  ...Ce,
  {
    type: "entityAction",
    kind: "sortChildrenOfContent",
    alias: "Umb.EntityAction.Media.SortChildrenOf",
    name: "Sort Children Of Media Entity Action",
    forEntityTypes: [c, t],
    meta: {
      itemRepositoryAlias: p,
      sortChildrenOfRepositoryAlias: D,
      treeRepositoryAlias: M
    },
    conditions: [
      {
        alias: d
      }
    ]
  }
], Be = [
  ...Oe,
  {
    type: "entityAction",
    alias: "Umb.EntityAction.Media.Delete",
    name: "Delete Media Entity Action",
    kind: "deleteWithRelation",
    forEntityTypes: [t],
    meta: {
      itemRepositoryAlias: p,
      detailRepositoryAlias: L,
      referenceRepositoryAlias: l
    },
    conditions: [
      {
        alias: Y
      }
    ]
  },
  ...ke,
  ...he
], De = [
  {
    type: "repository",
    alias: g,
    name: "Bulk Move Media Repository",
    api: () => import("./move-to.repository-LruV9O0X.js")
  }
], Le = {
  type: "entityBulkAction",
  kind: "moveTo",
  alias: "Umb.EntityBulkAction.Media.MoveTo",
  name: "Move Media Entity Bulk Action",
  weight: 20,
  forEntityTypes: [t],
  meta: {
    bulkMoveRepositoryAlias: g,
    treeAlias: I
  },
  conditions: [
    {
      alias: s,
      match: S
    }
  ]
}, ge = [Le, ...De], we = [...ge], $e = [
  {
    type: "fileUploadPreview",
    alias: "Umb.FileUploadPreview.Audio",
    name: "Audio File Upload Preview",
    weight: 100,
    element: () => import("./input-upload-field-audio.element-lrG6Dl5g.js"),
    forMimeTypes: ["audio/*"]
  },
  {
    type: "fileUploadPreview",
    alias: "Umb.FileUploadPreview.File",
    name: "General File Upload Preview",
    weight: 100,
    element: () => import("./input-upload-field-file.element-wUIxjqeu.js"),
    forMimeTypes: ["*/*"]
  },
  {
    type: "fileUploadPreview",
    alias: "Umb.FileUploadPreview.Image",
    name: "Image File Upload Preview",
    weight: 100,
    element: () => import("./input-upload-field-image.element-rDbE5Fpp.js"),
    forMimeTypes: ["image/*"]
  },
  {
    type: "fileUploadPreview",
    alias: "Umb.FileUploadPreview.Svg",
    name: "SVG File Upload Preview",
    weight: 100,
    element: () => import("./input-upload-field-svg.element-gXwcZD0a.js"),
    forMimeTypes: ["image/svg+xml"]
  },
  {
    type: "fileUploadPreview",
    alias: "Umb.FileUploadPreview.Video",
    name: "Video File Upload Preview",
    weight: 100,
    element: () => import("./input-upload-field-video.element-BulE3-rF.js"),
    forMimeTypes: ["video/*"]
  }
], Ye = [
  {
    type: "entityItemRef",
    alias: "Umb.EntityItemRef.Media",
    name: "Media Entity Item Reference",
    element: () => import("./media-item-ref.element-Bg8lB7Ov.js"),
    forEntityTypes: [t]
  }
], Ne = [
  {
    type: "menu",
    alias: A,
    name: "Media Menu"
  },
  {
    type: "menuItem",
    kind: "tree",
    alias: P,
    name: "Media Menu Item",
    weight: 100,
    meta: {
      label: "Media",
      menus: [A],
      treeAlias: I,
      hideTreeRoot: !0
    }
  },
  {
    type: "workspaceContext",
    kind: "menuStructure",
    name: "Media Menu Structure Workspace Context",
    alias: "Umb.Context.Media.Menu.Structure",
    api: () => import("./media-menu-structure.context-BdBuckl7.js"),
    meta: {
      menuItemAlias: P
    },
    conditions: [
      {
        alias: i,
        match: "Umb.Workspace.Media"
      }
    ]
  },
  {
    type: "workspaceFooterApp",
    kind: "variantMenuBreadcrumb",
    alias: "Umb.WorkspaceFooterApp.Media.Breadcrumb",
    name: "Media Breadcrumb Workspace Footer App",
    conditions: [
      {
        alias: i,
        match: "Umb.Workspace.Media"
      }
    ]
  }
], ve = [
  {
    type: "modal",
    alias: "Umb.Modal.ImageCropperEditor",
    name: "Image Cropper Editor Modal",
    js: () => import("./input-upload-field.element-DEgpG3Zz.js").then((e) => e.N)
  }
], We = [...ve], Fe = [
  {
    type: "modal",
    alias: "Umb.Modal.MediaCaptionAltText",
    name: "Media Caption Alt Text",
    element: () => import("./input-upload-field.element-DEgpG3Zz.js").then((e) => e.T)
  }
], Ve = [
  {
    type: "modal",
    alias: "Umb.Modal.MediaPicker",
    name: "Media Picker Modal",
    js: () => import("./input-upload-field.element-DEgpG3Zz.js").then((e) => e.S)
  }
], xe = [...Ve], He = [...We, ...Fe, ...xe], Ge = {
  type: "propertyEditorUi",
  alias: "Umb.PropertyEditorUi.ImageCropsConfiguration",
  name: "Image Crops Property Editor UI",
  element: () => import("./property-editor-ui-image-crops.element-CdcyV4VN.js"),
  meta: {
    label: "Image Crops Configuration",
    icon: "icon-autofill",
    group: "common"
  }
}, Ke = {
  type: "propertyEditorUi",
  alias: "Umb.PropertyEditorUi.MediaEntityPicker",
  name: "Media Entity Picker Property Editor UI",
  element: () => import("./property-editor-ui-media-entity-picker.element-BpMeGsrU.js"),
  meta: {
    label: "Media Entity Picker",
    icon: "icon-picture",
    group: "pickers",
    supportsReadOnly: !0
  }
}, je = {
  type: "propertyEditorSchema",
  name: "Email Address",
  alias: "Umbraco.ImageCropper",
  meta: {
    defaultPropertyEditorUiAlias: "Umb.PropertyEditorUi.ImageCropper",
    settings: {
      properties: [
        {
          alias: "crops",
          label: "Crop options",
          propertyEditorUiAlias: "Umb.PropertyEditorUi.ImageCropsConfiguration"
        }
      ]
    }
  }
}, qe = [
  {
    type: "propertyEditorUi",
    alias: "Umb.PropertyEditorUi.ImageCropper",
    name: "Image Cropper Property Editor UI",
    element: () => import("./property-editor-ui-image-cropper.element-BrOvA_-2.js"),
    meta: {
      label: "Image Cropper",
      icon: "icon-crop",
      group: "media",
      propertyEditorSchemaAlias: "Umbraco.ImageCropper"
    }
  },
  je
], ze = {
  type: "propertyEditorSchema",
  name: "Media Picker",
  alias: "Umbraco.MediaPicker3",
  meta: {
    defaultPropertyEditorUiAlias: "Umb.PropertyEditorUi.MediaPicker",
    settings: {
      properties: [
        {
          alias: "filter",
          label: "Accepted types",
          description: "Limit to specific types",
          propertyEditorUiAlias: "Umb.PropertyEditorUi.MediaTypePicker"
        },
        {
          alias: "multiple",
          label: "Pick multiple items",
          description: "Outputs a IEnumerable",
          propertyEditorUiAlias: "Umb.PropertyEditorUi.Toggle"
        },
        {
          alias: "validationLimit",
          label: "Amount",
          description: "Set a required range of medias",
          propertyEditorUiAlias: "Umb.PropertyEditorUi.NumberRange",
          config: [{ alias: "validationRange", value: { min: 0, max: 1 / 0 } }]
        },
        {
          alias: "startNodeId",
          label: "Start node",
          propertyEditorUiAlias: "Umb.PropertyEditorUi.MediaEntityPicker",
          config: [{ alias: "validationLimit", value: { min: 0, max: 1 } }]
        },
        {
          alias: "enableLocalFocalPoint",
          label: "Enable Focal Point",
          propertyEditorUiAlias: "Umb.PropertyEditorUi.Toggle"
        },
        {
          alias: "crops",
          label: "Image Crops",
          description: "Local crops, stored on document",
          propertyEditorUiAlias: "Umb.PropertyEditorUi.ImageCropsConfiguration"
        },
        {
          alias: "ignoreUserStartNodes",
          label: "Ignore User Start Nodes",
          description: "Selecting this option allows a user to choose nodes that they normally dont have access to.",
          propertyEditorUiAlias: "Umb.PropertyEditorUi.Toggle"
        }
      ]
    }
  }
}, Je = [
  {
    type: "propertyEditorUi",
    alias: "Umb.PropertyEditorUi.MediaPicker",
    name: "Media Picker Property Editor UI",
    element: () => import("./property-editor-ui-media-picker.element-CbZExfDY.js"),
    meta: {
      label: "Media Picker",
      propertyEditorSchemaAlias: "Umbraco.MediaPicker3",
      icon: "icon-picture",
      group: "media",
      supportsReadOnly: !0
    }
  },
  ze
], Qe = {
  type: "propertyEditorSchema",
  name: "File upload",
  alias: "Umbraco.UploadField",
  meta: {
    defaultPropertyEditorUiAlias: "Umb.PropertyEditorUi.UploadField",
    settings: {
      properties: [
        {
          alias: "fileExtensions",
          label: "Accepted file extensions",
          description: "Insert one extension per line, for example `jpg`.\n\nYou can also use mime types, for example `image/*` or `application/pdf`.",
          propertyEditorUiAlias: "Umb.PropertyEditorUi.AcceptedUploadTypes"
        }
      ]
    }
  }
}, Xe = [
  {
    type: "propertyEditorUi",
    alias: "Umb.PropertyEditorUi.UploadField",
    name: "Upload Field Property Editor UI",
    element: () => import("./property-editor-ui-upload-field.element-6bXGWNpu.js"),
    meta: {
      label: "Upload Field",
      propertyEditorSchemaAlias: "Umbraco.UploadField",
      icon: "icon-download-alt",
      group: "media"
    }
  },
  Qe
], Ze = [
  ...qe,
  ...Je,
  ...Xe,
  Ge,
  Ke
], ei = [
  {
    type: "repository",
    alias: z,
    name: "Bulk Trash Media Repository",
    api: () => import("./trash.repository-DjBnokmZ.js")
  }
], ii = {
  type: "entityBulkAction",
  kind: ne,
  alias: "Umb.EntityBulkAction.Media.Trash",
  name: "Trash Media Entity Bulk Action",
  weight: 10,
  forEntityTypes: [t],
  meta: {
    itemRepositoryAlias: p,
    recycleBinRepositoryAlias: m,
    referenceRepositoryAlias: l
  },
  conditions: [
    {
      alias: s,
      match: S
    }
  ]
}, ti = [ii, ...ei], ai = [
  {
    type: "entityAction",
    kind: "trashWithRelation",
    alias: "Umb.EntityAction.Media.RecycleBin.Trash",
    name: "Trash Media Entity Action",
    forEntityTypes: [t],
    meta: {
      itemRepositoryAlias: p,
      recycleBinRepositoryAlias: m,
      referenceRepositoryAlias: l
    },
    conditions: [
      {
        alias: d
      }
    ]
  },
  {
    type: "entityAction",
    kind: "restoreFromRecycleBin",
    alias: "Umb.EntityAction.Media.RecycleBin.Restore",
    name: "Restore Media From Recycle Bin Entity Action",
    forEntityTypes: [t],
    meta: {
      itemRepositoryAlias: p,
      recycleBinRepositoryAlias: m,
      pickerModal: ae
    },
    conditions: [
      {
        alias: Y
      }
    ]
  },
  {
    type: "entityAction",
    kind: "emptyRecycleBin",
    alias: "Umb.EntityAction.Media.RecycleBin.Empty",
    name: "Empty Media Recycle Bin Entity Action",
    forEntityTypes: [E],
    meta: {
      recycleBinRepositoryAlias: m
    },
    conditions: [
      {
        alias: se
      }
    ]
  },
  ...ti
], oi = [
  {
    type: "menuItem",
    kind: "tree",
    alias: "Umb.MenuItem.Media.RecycleBin",
    name: "Media Recycle Bin Menu Item",
    weight: 100,
    meta: {
      treeAlias: w,
      label: "Recycle Bin",
      icon: "icon-trash",
      menus: [A]
    },
    conditions: [
      {
        alias: "Umb.Condition.CurrentUser.AllowMediaRecycleBin"
      }
    ]
  }
], ni = [
  {
    type: "repository",
    alias: m,
    name: "Media Recycle Bin Repository",
    api: () => import("./media-recycle-bin.repository-CRsfEuqJ.js")
  }
], si = [
  {
    type: "entityAction",
    kind: "reloadTreeItemChildren",
    alias: "Umb.EntityAction.MediaRecycleBin.Tree.ReloadChildrenOf",
    name: "Reload Media Recycle Bin Tree Item Children Entity Action",
    forEntityTypes: [E]
  }
], ri = [
  {
    type: "repository",
    alias: k,
    name: "Media Recycle Bin Tree Repository",
    api: () => import("./media-recycle-bin-tree.repository-DXo5azms.js")
  },
  {
    type: "treeStore",
    alias: J,
    name: "Media Recycle Bin Tree Store",
    api: () => import("./media-recycle-bin-tree.store-DCQn1RN6.js")
  },
  {
    type: "tree",
    kind: "default",
    alias: w,
    name: "Media Recycle Bin Tree",
    meta: {
      repositoryAlias: k
    }
  },
  {
    type: "treeItem",
    kind: "recycleBin",
    alias: "Umb.TreeItem.Media.RecycleBin",
    name: "Media Recycle Bin Tree Item",
    forEntityTypes: [E],
    meta: {
      supportedEntityTypes: [t]
    }
  },
  {
    type: "workspace",
    kind: "default",
    alias: "Umb.Workspace.Media.RecycleBin.Root",
    name: "Media Recycle Bin Root Workspace",
    meta: {
      entityType: E,
      headline: "#general_recycleBin"
    }
  },
  ...si
], pi = [
  {
    type: "condition",
    name: "Allow Media Recycle Bin Current User Condition",
    alias: "Umb.Condition.CurrentUser.AllowMediaRecycleBin",
    api: () => import("./allow-media-recycle-bin.condition-Bq1SkuAD.js")
  },
  ...ai,
  ...oi,
  ...ni,
  ...ri
], mi = [
  {
    type: "repository",
    alias: l,
    name: "Media Reference Repository",
    api: () => import("./media-reference.repository-CNw1QIIV.js")
  },
  {
    type: "dataSourceDataMapping",
    alias: "Umb.DataSourceDataMapping.ManagementApi.MediaReferenceResponse",
    name: "Media Reference Response Management Api Data Mapping",
    api: () => import("./media-reference-response.management-api.mapping-CI56vUfj.js"),
    forDataSource: N,
    forDataModel: "MediaReferenceResponseModel"
  }
], li = [
  {
    type: "workspaceInfoApp",
    kind: "entityReferences",
    name: "Media References Workspace Info App",
    alias: "Umb.WorkspaceInfoApp.Media.References",
    conditions: [
      {
        alias: i,
        match: n
      }
    ],
    meta: {
      referenceRepositoryAlias: l
    }
  }
], ci = [...mi, ...li], di = [
  {
    type: "repository",
    alias: L,
    name: "Media Detail Repository",
    api: () => import("./input-upload-field.element-DEgpG3Zz.js").then((e) => e.O)
  },
  {
    type: "store",
    alias: Q,
    name: "Media Detail Store",
    api: () => import("./media-detail.store-CsaPt8yy.js")
  }
], yi = [
  {
    type: "repository",
    alias: p,
    name: "Media Item Repository",
    api: () => import("./input-upload-field.element-DEgpG3Zz.js").then((e) => e.P)
  },
  {
    type: "itemStore",
    alias: oe,
    name: "Media Item Store",
    api: () => import("./media-item.store-BY0R2zyV.js")
  }
], Mi = [
  {
    type: "repository",
    alias: X,
    name: "Media Validation Repository",
    api: () => import("./media-validation.repository-Duk82piw.js")
  }
], Ai = [...di, ...yi, ...Mi], Ei = "Umb.Section.Media", Ti = [
  {
    name: "Media Global Search",
    alias: Z,
    type: "globalSearch",
    weight: 700,
    api: () => import("./media-global-search-BSzAazwj.js"),
    meta: {
      label: "Media",
      searchProviderAlias: $
    },
    conditions: [
      {
        alias: u,
        match: Ei
      }
    ]
  }
], _i = [
  {
    name: "Media Search Provider",
    alias: $,
    type: "searchProvider",
    api: () => import("./input-upload-field.element-DEgpG3Zz.js").then((e) => e.R),
    weight: 700,
    meta: {
      label: "Media"
    }
  },
  {
    name: "Media Search Result Item",
    alias: "Umb.SearchResultItem.Media",
    type: "searchResultItem",
    element: () => import("./media-search-result-item.element-YjJYA0jj.js"),
    forEntityTypes: [t]
  },
  ...Ti
], Ii = [
  {
    type: "dashboard",
    alias: "Umb.Dashboard.Media",
    name: "Media Dashboard",
    element: () => import("./media-dashboard.element-CVL81ueF.js"),
    weight: 200,
    meta: {
      label: "#general_media",
      pathname: "media"
    },
    conditions: [
      {
        alias: v,
        match: "Umb.Section.Media"
      }
    ]
  }
], Ui = [
  {
    type: "entityAction",
    kind: "reloadTreeItemChildren",
    alias: "Umb.EntityAction.Media.Tree.ReloadChildrenOf",
    name: "Reload Media Tree Item Children Entity Action",
    forEntityTypes: [t, c]
  }
], fi = [
  {
    type: "repository",
    alias: M,
    name: "Media Tree Repository",
    api: () => import("./input-upload-field.element-DEgpG3Zz.js").then((e) => e.Q)
  },
  {
    type: "treeStore",
    alias: ee,
    name: "Media Tree Store",
    api: () => import("./media-tree.store-Cmj3Zlva.js")
  },
  {
    type: "tree",
    alias: I,
    name: "Media Tree",
    element: () => import("./media-tree.element-yMs0cVKY.js"),
    api: () => import("./media-tree.context-Cl_RDLaO.js"),
    meta: {
      repositoryAlias: M
    }
  },
  {
    type: "treeItem",
    kind: "default",
    alias: "Umb.TreeItem.Media",
    name: "Media Tree Item",
    element: () => import("./media-tree-item.element-P-e7yj6_.js"),
    api: () => import("./media-tree-item.context-Dp9t5q1N.js"),
    forEntityTypes: [t]
  },
  {
    type: "treeItem",
    kind: "default",
    alias: "Umb.TreeItem.Media.Root",
    name: "Media Tree Root",
    forEntityTypes: [c]
  },
  ...Ui
], Ri = {
  type: "repository",
  alias: ie,
  name: "Media Url Repository",
  api: () => import("./media-url.repository-B5RzlWhD.js").then((e) => e.m)
}, Si = {
  type: "itemStore",
  alias: te,
  name: "Media Url Store",
  api: () => import("./media-url.store-CfW4d6fj.js")
}, bi = [Ri, Si], ui = [
  {
    type: "workspaceInfoApp",
    name: "Media Links Workspace Info App",
    alias: "Umb.WorkspaceInfoApp.Media.Links",
    element: () => import("./media-links-workspace-info-app.element-BBcxdOvy.js"),
    weight: 100,
    conditions: [
      {
        alias: i,
        match: n
      }
    ]
  }
], Oi = [...bi, ...ui], Pi = [
  {
    type: "workspace",
    kind: "routable",
    alias: n,
    name: "Media Workspace",
    api: () => import("./media-workspace.context-KVCJDiqd.js"),
    meta: {
      entityType: "media"
    }
  },
  {
    type: "workspaceView",
    kind: "contentEditor",
    alias: "Umb.WorkspaceView.Media.Edit",
    name: "Media Workspace Edit View",
    weight: 200,
    meta: {
      label: "#general_details",
      pathname: "media",
      icon: "icon-picture"
    },
    conditions: [
      {
        alias: i,
        match: n
      },
      {
        alias: re
      }
    ]
  },
  {
    type: "workspaceView",
    alias: "Umb.WorkspaceView.Media.Info",
    name: "Media Workspace Info View",
    element: () => import("./media-workspace-view-info.element-DSHLzUty.js"),
    weight: 100,
    meta: {
      label: "#general_info",
      pathname: "info",
      icon: "info"
    },
    conditions: [
      {
        alias: i,
        match: n
      }
    ]
  },
  {
    type: "workspaceAction",
    kind: "default",
    alias: "Umb.WorkspaceAction.Media.Save",
    name: "Save Media Workspace Action",
    api: b,
    meta: {
      label: "#buttons_save",
      look: "primary",
      color: "positive"
    },
    conditions: [
      {
        alias: i,
        match: n
      },
      {
        alias: d
      }
    ]
  }
], ki = [
  ...fe,
  ...ue,
  ...Be,
  ...we,
  ...$e,
  ...Ye,
  ...Ne,
  ...He,
  ...Ze,
  ...pi,
  ...ci,
  ...Ai,
  ..._i,
  ...Ii,
  ...fi,
  ...Oi,
  ...Pi,
  {
    name: "Media Backoffice Entry Point",
    alias: "Umb.EntryPoint.Media",
    type: "backofficeEntryPoint",
    js: () => import("./entry-point-DH0FlQVv.js")
  }
], f = "Umb.Section.Media", Ci = [
  {
    type: "section",
    alias: f,
    name: "Media Section",
    weight: 900,
    meta: {
      label: "#sections_media",
      pathname: "media"
    },
    conditions: [
      {
        alias: u,
        match: f
      }
    ]
  },
  {
    type: "sectionSidebarApp",
    kind: "menuWithEntityActions",
    alias: "Umb.SectionSidebarMenu.Media",
    name: "Media Section Sidebar Menu",
    weight: 100,
    meta: {
      label: "#sections_media",
      menu: A,
      entityType: c
    },
    conditions: [
      {
        alias: v,
        match: f
      }
    ]
  }
], hi = [
  {
    type: "entityCreateOptionAction",
    alias: "Umb.EntityCreateOptionAction.MediaType.Default",
    name: "Default Media Type Entity Create Option Action",
    weight: 1200,
    api: () => import("./default-media-type-create-option-action-CJCcV0Rn.js"),
    forEntityTypes: [r, a, o],
    meta: {
      icon: "icon-picture",
      label: "#content_mediatype"
    }
  }
], Bi = [
  {
    type: "entityCreateOptionAction",
    kind: "folder",
    alias: "Umb.EntityCreateOptionAction.MediaType.Folder",
    name: "Media Type Folder Entity Create Option Action",
    forEntityTypes: [r, o],
    meta: {
      icon: "icon-folder",
      label: "#create_folder",
      description: "#create_folderDescription",
      folderRepositoryAlias: T
    }
  }
], Di = [
  {
    type: "entityAction",
    kind: "create",
    alias: "Umb.EntityAction.MediaType.Create",
    name: "Create Media Type Entity Action",
    weight: 1200,
    forEntityTypes: [a, r, o]
  },
  // TODO: Deprecated: Will be removed in 17.0.0
  {
    type: "modal",
    alias: "Umb.Modal.MediaTypeCreateOptions",
    name: "Media Type Create Options Modal",
    element: () => import("./media-type-create-options-modal.element-qLVRTKaz.js")
  },
  ...hi,
  ...Bi
], Li = [
  {
    type: "repository",
    alias: W,
    name: "Move Media Type Repository",
    api: () => import("./media-type-move.repository-BVEz6bDY.js")
  }
], gi = [
  {
    type: "entityAction",
    kind: "moveTo",
    alias: "Umb.EntityAction.MediaType.MoveTo",
    name: "Move Media Type Entity Action",
    forEntityTypes: [a],
    meta: {
      treeRepositoryAlias: _,
      moveRepositoryAlias: W,
      treeAlias: U,
      foldersOnly: !0
    }
  },
  ...Li
], wi = [
  {
    type: "repository",
    alias: F,
    name: "Duplicate Media Type Repository",
    api: () => import("./media-type-duplicate.repository-DHSDaGcY.js")
  }
], $i = [
  {
    type: "entityAction",
    kind: "duplicateTo",
    alias: "Umb.EntityAction.MediaType.DuplicateTo",
    name: "Duplicate Document To Entity Action",
    forEntityTypes: [a],
    meta: {
      duplicateRepositoryAlias: F,
      treeAlias: U,
      treeRepositoryAlias: _,
      foldersOnly: !0
    }
  },
  ...wi
], Yi = [
  {
    type: "repository",
    alias: pe,
    name: "Export Media Type Repository",
    api: () => import("./media-type-export.repository-BcY1qfkh.js")
  }
], Ni = [
  {
    type: "entityAction",
    kind: "default",
    alias: "Umb.EntityAction.MediaType.Export",
    name: "Export Media Type Entity Action",
    forEntityTypes: [a],
    api: () => import("./media-type-export.action-BhRRJkTo.js"),
    meta: {
      icon: "icon-download-alt",
      label: "#actions_export",
      additionalOptions: !0
    }
  },
  ...Yi
], vi = [
  {
    type: "repository",
    alias: me,
    name: "Import Media Type Repository",
    api: () => import("./media-type-import.repository-CzkM04nS.js")
  }
], Wi = [
  {
    type: "modal",
    alias: "Umb.Modal.MediaType.Import",
    name: "Media Type Import Modal",
    element: () => import("./media-type-import-modal.element-D5Vgv8rc.js")
  }
], Fi = [
  {
    type: "entityAction",
    kind: "default",
    alias: "Umb.EntityAction.MediaType.Import",
    name: "Export Media Type Entity Action",
    forEntityTypes: [r],
    api: () => import("./media-type-import.action-DESGV4gF.js"),
    meta: {
      icon: "icon-page-up",
      label: "#actions_import",
      additionalOptions: !0
    }
  },
  ...vi,
  ...Wi
], Vi = [
  {
    type: "entityAction",
    kind: "delete",
    alias: "Umb.EntityAction.MediaType.Delete",
    name: "Delete Media Type Entity Action",
    forEntityTypes: [a],
    meta: {
      detailRepositoryAlias: x,
      itemRepositoryAlias: V
    }
  },
  ...Di,
  ...gi,
  ...$i,
  ...Ni,
  ...Fi
], xi = [
  {
    type: "menuItem",
    kind: "tree",
    alias: C,
    name: "Media Types Menu Item",
    weight: 800,
    meta: {
      label: "Media Types",
      treeAlias: U,
      menus: ["Umb.Menu.StructureSettings"]
    }
  },
  {
    type: "workspaceContext",
    kind: "menuStructure",
    name: "Media Type Menu Structure Workspace Context",
    alias: "Umb.Context.MediaType.Menu.Structure",
    api: () => import("./media-type-menu-structure.context-DsGs-zIe.js"),
    meta: {
      menuItemAlias: C
    },
    conditions: [
      {
        alias: i,
        match: "Umb.Workspace.MediaType"
      }
    ]
  },
  {
    type: "workspaceFooterApp",
    kind: "menuBreadcrumb",
    alias: "Umb.WorkspaceFooterApp.MediaType.Breadcrumb",
    name: "Media Type Breadcrumb Workspace Footer App",
    conditions: [
      {
        alias: i,
        match: "Umb.Workspace.MediaType"
      }
    ]
  }
], Hi = {
  type: "propertyEditorUi",
  alias: "Umb.PropertyEditorUi.MediaTypePicker",
  name: "Media Type Picker Property Editor UI",
  element: () => import("./property-editor-ui-media-type-picker.element-8UMBoQOq.js"),
  meta: {
    label: "Media Type Picker",
    icon: "icon-media-dashed-line",
    group: "advanced"
  }
}, Gi = [Hi], Ki = [
  {
    type: "dataSourceDataMapping",
    alias: "Umb.DataSourceDataMapping.ManagementApi.MediaTypePropertyTypeReferenceResponse",
    name: "Media Type Property Type Reference Response Management Api Data Mapping",
    api: () => import("./media-type-property-type-reference-response.management-api.mapping-DmVI5Gxt.js"),
    forDataSource: N,
    forDataModel: "MediaTypePropertyTypeReferenceResponseModel"
  },
  {
    type: "entityItemRef",
    alias: "Umb.EntityItemRef.MediaTypePropertyType",
    name: "Media Type Property Type Entity Item Reference",
    element: () => import("./media-type-property-type-item-ref.element-CzdKQA_w.js"),
    forEntityTypes: [le]
  }
], ji = [
  {
    type: "repository",
    alias: x,
    name: "Media Types Repository",
    api: () => import("./media-type-detail.repository-CZkUFcVY.js").then((e) => e.m)
  },
  {
    type: "store",
    alias: ce,
    name: "Media Type Store",
    api: () => import("./media-type-detail.store-BESLFSl6.js")
  }
], qi = [
  {
    type: "repository",
    alias: V,
    name: "Media Type Item Repository",
    api: () => import("./media-type-item.repository-C3nDPj57.js")
  },
  {
    type: "itemStore",
    alias: de,
    name: "Media Type Item Store",
    api: () => import("./media-type-item.store-BmTZs87a.js")
  }
], zi = [
  {
    type: "repository",
    alias: H,
    name: "Media Type Composition Repository",
    api: () => import("./media-type-composition.repository-Ck3eRySm.js")
  }
], Ji = [...ji, ...qi, ...zi], Qi = [
  {
    name: "Media Type Global Search",
    alias: ye,
    type: "globalSearch",
    weight: 500,
    meta: {
      label: "Media Types",
      searchProviderAlias: G
    },
    conditions: [
      {
        alias: u,
        match: Te
      }
    ]
  }
], Xi = [
  {
    name: "Media Type Search Provider",
    alias: G,
    type: "searchProvider",
    api: () => import("./media-type.search-provider-BfvFaj9k.js"),
    weight: 500,
    meta: {
      label: "Media Types"
    }
  },
  {
    name: "Media Type Search Result Item",
    alias: "Umb.SearchResultItem.MediaType",
    type: "searchResultItem",
    forEntityTypes: [a]
  },
  ...Qi
], Zi = [
  {
    type: "repository",
    alias: T,
    name: "Media Type Folder Repository",
    api: () => import("./media-type-folder.repository-dIlFqffv.js")
  },
  {
    type: "store",
    alias: Me,
    name: "Media Type Folder Store",
    api: () => import("./media-type-folder.store-DkueJXaj.js")
  }
], et = [
  {
    type: "workspace",
    kind: "routable",
    alias: R,
    name: "Media Type Folder Workspace",
    api: () => import("./media-type-folder-workspace.context-BXBy7cL9.js"),
    meta: {
      entityType: o
    }
  },
  {
    type: "workspaceAction",
    kind: "default",
    alias: "Umb.WorkspaceAction.MediaType.Folder.Submit",
    name: "Submit Media Type Folder Workspace Action",
    api: b,
    meta: {
      label: "#buttons_save",
      look: "primary",
      color: "positive"
    },
    conditions: [
      {
        alias: i,
        match: R
      }
    ]
  }
], it = [
  {
    type: "entityAction",
    kind: "folderUpdate",
    alias: "Umb.EntityAction.MediaType.Folder.Update",
    name: "Rename Media Type Folder Entity Action",
    forEntityTypes: [o],
    meta: {
      folderRepositoryAlias: T
    }
  },
  {
    type: "entityAction",
    kind: "folderDelete",
    alias: "Umb.EntityAction.MediaType.Folder.Delete",
    name: "Delete Media Type Folder Entity Action",
    forEntityTypes: [o],
    meta: {
      folderRepositoryAlias: T
    }
  },
  ...Zi,
  ...et
], tt = [
  {
    type: "collectionAction",
    kind: "create",
    name: "Media Type Tree Item Children Collection Create Action",
    alias: "Umb.CollectionAction.MediaTypeTreeItemChildren.Create",
    conditions: [
      {
        alias: s,
        match: O
      }
    ]
  }
], at = [
  {
    type: "repository",
    alias: K,
    name: "Media Type Tree Item Children Collection Repository",
    api: () => import("./media-type-tree-item-children-collection.repository-CiDOa0u8.js")
  }
], ot = [
  {
    type: "collectionView",
    alias: "Umb.CollectionView.MediaType.TreeItem.Table",
    name: "Media Type Tree Item Table Collection View",
    element: () => import("./media-type-tree-item-table-collection-view.element-Dh75v04K.js"),
    weight: 300,
    meta: {
      label: "Table",
      icon: "icon-list",
      pathName: "table"
    },
    conditions: [
      {
        alias: s,
        match: O
      }
    ]
  }
], nt = [
  {
    type: "collection",
    kind: "default",
    alias: O,
    name: "Media Type Tree Item Children Collection",
    meta: {
      repositoryAlias: K
    }
  },
  ...tt,
  ...at,
  ...ot
], st = [
  {
    type: "entityAction",
    kind: "reloadTreeItemChildren",
    alias: "Umb.EntityAction.MediaType.Tree.ReloadChildrenOf",
    name: "Reload Media Type Tree Item Children Entity Action",
    forEntityTypes: [a, r, o]
  },
  {
    type: "workspaceView",
    kind: "collection",
    alias: "Umb.WorkspaceView.MediaType.TreeItemChildrenCollection",
    name: "Media Type Tree Item Children Collection Workspace View",
    meta: {
      label: "Folder",
      pathname: "folder",
      icon: "icon-folder",
      collectionAlias: "Umb.Collection.MediaType.TreeItemChildren"
    },
    conditions: [
      {
        alias: i,
        oneOf: [Ae, R]
      }
    ]
  },
  ...nt
], rt = [
  {
    type: "repository",
    alias: _,
    name: "Media Type Tree Repository",
    api: () => import("./media-type-tree.repository-DCKn3FiN.js")
  },
  {
    type: "treeStore",
    alias: Ee,
    name: "Media Type Tree Store",
    api: () => import("./media-type-tree.store-BRrpLcJ8.js")
  },
  {
    type: "tree",
    kind: "default",
    alias: U,
    name: "Media Type Tree",
    meta: {
      repositoryAlias: _
    }
  },
  {
    type: "treeItem",
    kind: "default",
    alias: "Umb.TreeItem.MediaType",
    name: "Media Type Tree Item",
    forEntityTypes: [a, r, o]
  },
  {
    type: "workspace",
    kind: "default",
    alias: "Umb.Workspace.MediaType.Root",
    name: "Media Type Root Workspace",
    meta: {
      entityType: r,
      headline: "#treeHeaders_mediaTypes"
    }
  },
  ...it,
  ...st
], pt = [
  {
    type: "workspace",
    kind: "routable",
    alias: y,
    name: "Media Type Workspace",
    api: () => import("./media-type-workspace.context-BeleDUZb.js"),
    meta: {
      entityType: "media-type"
    }
  },
  {
    type: "workspaceView",
    kind: "contentTypeDesignEditor",
    alias: "Umb.WorkspaceView.MediaType.Design",
    name: "Media Type Workspace Design View",
    meta: {
      label: "#general_design",
      pathname: "design",
      icon: "icon-document-dashed-line",
      compositionRepositoryAlias: H
    },
    conditions: [
      {
        alias: i,
        match: y
      }
    ]
  },
  {
    type: "workspaceView",
    alias: "Umb.WorkspaceView.MediaType.Structure",
    name: "Media Type Workspace Structure View",
    element: () => import("./media-type-workspace-view-structure.element-BaJMIX7a.js"),
    weight: 800,
    meta: {
      label: "#contentTypeEditor_structure",
      pathname: "structure",
      icon: "icon-mindmap"
    },
    conditions: [
      {
        alias: i,
        match: y
      }
    ]
  },
  {
    type: "workspaceAction",
    kind: "default",
    alias: "Umb.WorkspaceAction.MediaType.Save",
    name: "Save Media Type Workspace Action",
    api: b,
    meta: {
      label: "#buttons_save",
      look: "primary",
      color: "positive"
    },
    conditions: [
      {
        alias: i,
        match: y
      }
    ]
  }
], mt = [
  ...Vi,
  ...xi,
  ...Gi,
  ...Ki,
  ...Ji,
  ...Xi,
  ...rt,
  ...pt,
  {
    name: "Media Type Backoffice Entry Point",
    alias: "Umb.EntryPoint.MediaType",
    type: "backofficeEntryPoint",
    js: () => import("./entry-point-5OOdRGuX.js")
  }
], lt = [
  {
    type: "repository",
    alias: _e,
    name: "Imaging Repository",
    api: () => import("./imaging.repository-oDvp8QYt.js")
  },
  {
    type: "store",
    alias: Ie,
    name: "Imaging Store",
    api: () => import("./imaging.store-Btmn4DA6.js")
  }
], ct = [
  {
    type: "modal",
    alias: "Umb.Modal.Dropzone.MediaTypePicker",
    name: "Dropzone Media Type Picker Modal",
    element: () => import("./dropzone.element-mk7CY1SM.js").then((e) => e.D)
  }
], dt = [...ct], vt = [
  ...Ci,
  ...ki,
  ...mt,
  ...lt,
  ...dt
];
export {
  Ei as U,
  vt as m
};
//# sourceMappingURL=manifests-BQyED3bY.js.map
