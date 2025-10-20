import { x as o, a as k, b as H, c as G, U as S, d as P, u as I, s as M, e as h, n as l, o as B, f as D, g as A, m as K, l as m, h as E, k as L, i as u, j, p as q, q as z, r as J, t as Q, v as X, w as Z } from "./dropzone.element-DJdyaEXj.js";
import { UMB_WORKSPACE_CONDITION_ALIAS as i, UmbSubmitWorkspaceAction as b } from "@umbraco-cms/backoffice/workspace";
import { UMB_COLLECTION_ALIAS_CONDITION as s } from "@umbraco-cms/backoffice/collection";
import { n as c, m as t, A as p, F as ee, B as ie, D as g } from "./input-upload-field.element-BKvVffkE.js";
import "./media-url.repository-B5RzlWhD.js";
import { UMB_ENTITY_IS_NOT_TRASHED_CONDITION_ALIAS as d, UMB_ENTITY_IS_TRASHED_CONDITION_ALIAS as w } from "@umbraco-cms/backoffice/recycle-bin";
import { UMB_ENTITY_BULK_ACTION_TRASH_WITH_RELATION_KIND as te } from "@umbraco-cms/backoffice/relations";
import { UMB_ENTITY_HAS_CHILDREN_CONDITION_ALIAS as ae } from "@umbraco-cms/backoffice/entity-action";
import { UMB_MANAGEMENT_API_DATA_SOURCE_ALIAS as $ } from "@umbraco-cms/backoffice/repository";
import { UMB_SECTION_USER_PERMISSION_CONDITION_ALIAS as O } from "@umbraco-cms/backoffice/section";
import { UMB_WORKSPACE_HAS_CONTENT_COLLECTION_CONDITION_ALIAS as oe, UMB_CONTENT_HAS_PROPERTIES_WORKSPACE_CONDITION as ne } from "@umbraco-cms/backoffice/content";
import "@umbraco-cms/backoffice/picker-input";
import "@umbraco-cms/backoffice/variant";
import "@umbraco-cms/backoffice/external/backend-api";
import "@umbraco-cms/backoffice/resources";
import "@umbraco-cms/backoffice/class-api";
import "@umbraco-cms/backoffice/id";
import "@umbraco-cms/backoffice/entity-item";
import { n as r, b as a, m as n, f as T, x as Y, F as U, U as _, u as N, v as se, w as re, r as v, o as W, a as pe, C as me, D as le, B as F, L as V, M as ce, G as de, q as f, J as C, K as x, y as ye, E as Me, p as y } from "./constants-DT5L-WXf.js";
import { UMB_SETTINGS_SECTION_ALIAS as Ae } from "@umbraco-cms/backoffice/settings";
import { a as Ee, b as Te } from "./constants-C418HnkF.js";
const _e = [
  {
    type: "workspaceInfoApp",
    name: "Media History Workspace Info App",
    alias: "Umb.WorkspaceInfoApp.Media.History",
    element: () => import("./media-history-workspace-info-app.element-CkPNF6TC.js"),
    weight: 80,
    conditions: [
      {
        alias: i,
        match: o
      }
    ]
  }
], Ie = [..._e], Ue = [
  {
    type: "collectionAction",
    kind: "button",
    name: "Create Media Collection Action",
    alias: "Umb.CollectionAction.Media.Create",
    element: () => import("./create-media-collection-action.element-C2gUEaCO.js"),
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
], Re = [
  {
    type: "repository",
    alias: k,
    name: "Media Collection Repository",
    api: () => import("./media-collection.repository-BFW6AIs1.js")
  }
], fe = [
  {
    type: "collectionView",
    alias: H,
    name: "Media Grid Collection View",
    element: () => import("./media-grid-collection-view.element-B02GpzrX.js"),
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
    alias: G,
    name: "Media Table Collection View",
    element: () => import("./media-table-collection-view.element-BPApBkhR.js"),
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
], Se = [
  {
    type: "collection",
    alias: S,
    name: "Media Collection",
    api: () => import("./media-collection.context-DVLKhD9Q.js"),
    element: () => import("./media-collection.element-B29aSObj.js"),
    meta: {
      repositoryAlias: k
    }
  },
  ...Ue,
  ...Re,
  ...fe
], be = [
  {
    type: "entityAction",
    kind: "default",
    alias: "Umb.EntityAction.Media.Create",
    name: "Create Media Entity Action",
    weight: 1200,
    api: () => import("./create.action-hGFs4hho.js"),
    forEntityTypes: [c, t],
    meta: {
      icon: "icon-add",
      label: "#actions_create",
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
    element: () => import("./media-create-options-modal.element-BR-1aCEi.js")
  }
], Oe = [
  {
    type: "repository",
    alias: P,
    name: "Move Media Repository",
    api: () => import("./media-move.repository-CVbQGMH6.js")
  }
], Ce = [
  {
    type: "entityAction",
    kind: "moveTo",
    alias: "Umb.EntityAction.Media.MoveTo",
    name: "Move Media Entity Action",
    forEntityTypes: [t],
    meta: {
      treeRepositoryAlias: M,
      moveRepositoryAlias: P,
      treeAlias: I
    },
    conditions: [
      {
        alias: d
      }
    ]
  },
  ...Oe
], ue = [
  {
    type: "repository",
    alias: h,
    name: "Sort Children Of Media Repository",
    api: () => import("./sort-children-of.repository-CL8u9Kfl.js")
  }
], ke = [
  ...ue,
  {
    type: "entityAction",
    kind: "sortChildrenOfContent",
    alias: "Umb.EntityAction.Media.SortChildrenOf",
    name: "Sort Children Of Media Entity Action",
    forEntityTypes: [c, t],
    meta: {
      itemRepositoryAlias: p,
      sortChildrenOfRepositoryAlias: h,
      treeRepositoryAlias: M
    },
    conditions: [
      {
        alias: d
      }
    ]
  }
], Pe = [
  ...be,
  {
    type: "entityAction",
    alias: "Umb.EntityAction.Media.Delete",
    name: "Delete Media Entity Action",
    kind: "deleteWithRelation",
    forEntityTypes: [t],
    meta: {
      itemRepositoryAlias: p,
      detailRepositoryAlias: B,
      referenceRepositoryAlias: l
    },
    conditions: [
      {
        alias: w
      }
    ]
  },
  ...Ce,
  ...ke
], he = [
  {
    type: "repository",
    alias: D,
    name: "Bulk Move Media Repository",
    api: () => import("./move-to.repository-LruV9O0X.js")
  }
], Be = {
  type: "entityBulkAction",
  kind: "moveTo",
  alias: "Umb.EntityBulkAction.Media.MoveTo",
  name: "Move Media Entity Bulk Action",
  weight: 20,
  forEntityTypes: [t],
  meta: {
    bulkMoveRepositoryAlias: D,
    treeAlias: I
  },
  conditions: [
    {
      alias: s,
      match: S
    }
  ]
}, De = [Be, ...he], Le = [...De], ge = [
  {
    type: "fileUploadPreview",
    alias: "Umb.FileUploadPreview.Audio",
    name: "Audio File Upload Preview",
    weight: 100,
    element: () => import("./input-upload-field-audio.element-xKLQrI8Y.js"),
    forMimeTypes: ["audio/*"]
  },
  {
    type: "fileUploadPreview",
    alias: "Umb.FileUploadPreview.File",
    name: "File File Upload Preview",
    weight: 100,
    element: () => import("./input-upload-field-file.element-BPVW48sc.js"),
    forMimeTypes: ["*/*"]
  },
  {
    type: "fileUploadPreview",
    alias: "Umb.FileUploadPreview.Image",
    name: "Image File Upload Preview",
    weight: 100,
    element: () => import("./input-upload-field-image.element-BXCKxO7R.js"),
    forMimeTypes: ["image/*"]
  },
  {
    type: "fileUploadPreview",
    alias: "Umb.FileUploadPreview.Svg",
    name: "Svg File Upload Preview",
    weight: 100,
    element: () => import("./input-upload-field-svg.element-CLQKnjzo.js"),
    forMimeTypes: ["image/svg+xml"]
  },
  {
    type: "fileUploadPreview",
    alias: "Umb.FileUploadPreview.Video",
    name: "Video File Upload Preview",
    weight: 100,
    element: () => import("./input-upload-field-video.element-COL8ynHI.js"),
    forMimeTypes: ["video/*"]
  }
], we = [
  {
    type: "entityItemRef",
    alias: "Umb.EntityItemRef.Media",
    name: "Media Entity Item Reference",
    element: () => import("./media-item-ref.element-Crra02u4.js"),
    forEntityTypes: [t]
  }
], $e = [
  {
    type: "menu",
    alias: A,
    name: "Media Menu"
  },
  {
    type: "menuItem",
    kind: "tree",
    alias: "Umb.MenuItem.Media",
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
    name: "Media Menu Structure Workspace Context",
    alias: "Umb.Context.Media.Menu.Structure",
    api: () => import("./media-menu-structure.context-CCM7ohie.js"),
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
], Ye = [
  {
    type: "modal",
    alias: "Umb.Modal.ImageCropperEditor",
    name: "Image Cropper Editor Modal",
    js: () => import("./input-upload-field.element-BKvVffkE.js").then((e) => e.K)
  }
], Ne = [...Ye], ve = [
  {
    type: "modal",
    alias: "Umb.Modal.MediaCaptionAltText",
    name: "Media Caption Alt Text",
    element: () => import("./input-upload-field.element-BKvVffkE.js").then((e) => e.Q)
  }
], We = [
  {
    type: "modal",
    alias: "Umb.Modal.MediaPicker",
    name: "Media Picker Modal",
    js: () => import("./input-upload-field.element-BKvVffkE.js").then((e) => e.P)
  }
], Fe = [...We], Ve = [...Ne, ...ve, ...Fe], xe = {
  type: "propertyEditorUi",
  alias: "Umb.PropertyEditorUi.ImageCropsConfiguration",
  name: "Image Crops Property Editor UI",
  element: () => import("./property-editor-ui-image-crops.element-BRXgzNWw.js"),
  meta: {
    label: "Image Crops Configuration",
    icon: "icon-autofill",
    group: "common"
  }
}, He = {
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
}, Ge = {
  type: "propertyEditorSchema",
  name: "Email Address",
  alias: "Umbraco.ImageCropper",
  meta: {
    defaultPropertyEditorUiAlias: "Umb.PropertyEditorUi.ImageCropper",
    settings: {
      properties: [
        {
          alias: "crops",
          label: "Define Crops",
          propertyEditorUiAlias: "Umb.PropertyEditorUi.ImageCropsConfiguration"
        }
      ]
    }
  }
}, Ke = [
  {
    type: "propertyEditorUi",
    alias: "Umb.PropertyEditorUi.ImageCropper",
    name: "Image Cropper Property Editor UI",
    element: () => import("./property-editor-ui-image-cropper.element-CHKZLluU.js"),
    meta: {
      label: "Image Cropper",
      icon: "icon-crop",
      group: "media",
      propertyEditorSchemaAlias: "Umbraco.ImageCropper"
    }
  },
  Ge
], je = {
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
}, qe = [
  {
    type: "propertyEditorUi",
    alias: "Umb.PropertyEditorUi.MediaPicker",
    name: "Media Picker Property Editor UI",
    element: () => import("./property-editor-ui-media-picker.element-D4w0ZX81.js"),
    meta: {
      label: "Media Picker",
      propertyEditorSchemaAlias: "Umbraco.MediaPicker3",
      icon: "icon-picture",
      group: "media",
      supportsReadOnly: !0
    }
  },
  je
], ze = {
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
          propertyEditorUiAlias: "Umb.PropertyEditorUi.AcceptedUploadTypes"
        }
      ]
    }
  }
}, Je = [
  {
    type: "propertyEditorUi",
    alias: "Umb.PropertyEditorUi.UploadField",
    name: "Upload Field Property Editor UI",
    element: () => import("./property-editor-ui-upload-field.element-mkLEj87e.js"),
    meta: {
      label: "Upload Field",
      propertyEditorSchemaAlias: "Umbraco.UploadField",
      icon: "icon-download-alt",
      group: "media"
    }
  },
  ze
], Qe = [
  ...Ke,
  ...qe,
  ...Je,
  xe,
  He
], Xe = [
  {
    type: "repository",
    alias: K,
    name: "Bulk Trash Media Repository",
    api: () => import("./trash.repository-DjBnokmZ.js")
  }
], Ze = {
  type: "entityBulkAction",
  kind: te,
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
}, ei = [Ze, ...Xe], ii = [
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
      pickerModal: ee
    },
    conditions: [
      {
        alias: w
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
        alias: ae
      }
    ]
  },
  ...ei
], ti = [
  {
    type: "menuItem",
    kind: "tree",
    alias: "Umb.MenuItem.Media.RecycleBin",
    name: "Media Recycle Bin Menu Item",
    weight: 100,
    meta: {
      treeAlias: L,
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
], ai = [
  {
    type: "repository",
    alias: m,
    name: "Media Recycle Bin Repository",
    api: () => import("./media-recycle-bin.repository-CRsfEuqJ.js")
  }
], oi = [
  {
    type: "entityAction",
    kind: "reloadTreeItemChildren",
    alias: "Umb.EntityAction.MediaRecycleBin.Tree.ReloadChildrenOf",
    name: "Reload Media Recycle Bin Tree Item Children Entity Action",
    forEntityTypes: [E]
  }
], ni = [
  {
    type: "repository",
    alias: u,
    name: "Media Recycle Bin Tree Repository",
    api: () => import("./media-recycle-bin-tree.repository-D_r6qJ9J.js")
  },
  {
    type: "treeStore",
    alias: j,
    name: "Media Recycle Bin Tree Store",
    api: () => import("./media-recycle-bin-tree.store-D_BvlA0K.js")
  },
  {
    type: "tree",
    kind: "default",
    alias: L,
    name: "Media Recycle Bin Tree",
    meta: {
      repositoryAlias: u
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
  ...oi
], si = [
  {
    type: "condition",
    name: "Allow Media Recycle Bin Current User Condition",
    alias: "Umb.Condition.CurrentUser.AllowMediaRecycleBin",
    api: () => import("./allow-media-recycle-bin.condition-Bq1SkuAD.js")
  },
  ...ii,
  ...ti,
  ...ai,
  ...ni
], ri = [
  {
    type: "repository",
    alias: l,
    name: "Media Reference Repository",
    api: () => import("./media-reference.repository-DGrobq9C.js")
  },
  {
    type: "dataSourceDataMapping",
    alias: "Umb.DataSourceDataMapping.ManagementApi.MediaReferenceResponse",
    name: "Media Reference Response Management Api Data Mapping",
    api: () => import("./media-reference-response.management-api.mapping-B91olH3J.js"),
    forDataSource: $,
    forDataModel: "MediaReferenceResponseModel"
  }
], pi = [
  {
    type: "workspaceInfoApp",
    kind: "entityReferences",
    name: "Media References Workspace Info App",
    alias: "Umb.WorkspaceInfoApp.Media.References",
    conditions: [
      {
        alias: i,
        match: o
      }
    ],
    meta: {
      referenceRepositoryAlias: l
    }
  }
], mi = [...ri, ...pi], li = [
  {
    type: "repository",
    alias: B,
    name: "Media Detail Repository",
    api: () => import("./input-upload-field.element-BKvVffkE.js").then((e) => e.L)
  },
  {
    type: "store",
    alias: q,
    name: "Media Detail Store",
    api: () => import("./media-detail.store-DbzM72T0.js")
  }
], ci = [
  {
    type: "repository",
    alias: p,
    name: "Media Item Repository",
    api: () => import("./input-upload-field.element-BKvVffkE.js").then((e) => e.M)
  },
  {
    type: "itemStore",
    alias: ie,
    name: "Media Item Store",
    api: () => import("./media-item.store-BzMoqJ8a.js")
  }
], di = [
  {
    type: "repository",
    alias: z,
    name: "Media Validation Repository",
    api: () => import("./media-validation.repository-f-sioc_e.js")
  }
], yi = [...li, ...ci, ...di], Mi = "Umb.Section.Media", Ai = [
  {
    name: "Media Global Search",
    alias: J,
    type: "globalSearch",
    weight: 700,
    api: () => import("./media-global-search-BSzAazwj.js"),
    meta: {
      label: "Media",
      searchProviderAlias: g
    },
    conditions: [
      {
        alias: O,
        match: Mi
      }
    ]
  }
], Ei = [
  {
    name: "Media Search Provider",
    alias: g,
    type: "searchProvider",
    api: () => import("./input-upload-field.element-BKvVffkE.js").then((e) => e.O),
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
  ...Ai
], Ti = [
  {
    type: "dashboard",
    alias: "Umb.Dashboard.Media",
    name: "Media Dashboard",
    element: () => import("./media-dashboard.element-DWEWjLc3.js"),
    weight: 200,
    meta: {
      label: "#general_media",
      pathname: "media"
    },
    conditions: [
      {
        alias: "Umb.Condition.SectionAlias",
        match: "Umb.Section.Media"
      }
    ]
  }
], _i = [
  {
    type: "entityAction",
    kind: "reloadTreeItemChildren",
    alias: "Umb.EntityAction.Media.Tree.ReloadChildrenOf",
    name: "Reload Media Tree Item Children Entity Action",
    forEntityTypes: [t, c]
  }
], Ii = [
  {
    type: "repository",
    alias: M,
    name: "Media Tree Repository",
    api: () => import("./input-upload-field.element-BKvVffkE.js").then((e) => e.N)
  },
  {
    type: "treeStore",
    alias: Q,
    name: "Media Tree Store",
    api: () => import("./media-tree.store-CE6lWhYL.js")
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
    element: () => import("./media-tree-item.element-BQZeslKu.js"),
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
  ..._i
], Ui = {
  type: "repository",
  alias: X,
  name: "Media Url Repository",
  api: () => import("./media-url.repository-B5RzlWhD.js").then((e) => e.m)
}, Ri = {
  type: "itemStore",
  alias: Z,
  name: "Media Url Store",
  api: () => import("./media-url.store-CfW4d6fj.js")
}, fi = [Ui, Ri], Si = [
  {
    type: "workspaceInfoApp",
    name: "Media Links Workspace Info App",
    alias: "Umb.WorkspaceInfoApp.Media.Links",
    element: () => import("./media-links-workspace-info-app.element-BZN40uaB.js"),
    weight: 100,
    conditions: [
      {
        alias: i,
        match: o
      }
    ]
  }
], bi = [...fi, ...Si], Oi = [
  {
    type: "workspace",
    kind: "routable",
    alias: o,
    name: "Media Workspace",
    api: () => import("./media-workspace.context-B_cIeA-s.js"),
    meta: {
      entityType: "media"
    }
  },
  {
    type: "workspaceView",
    kind: "contentCollection",
    alias: "Umb.WorkspaceView.Media.Collection",
    name: "Media Workspace Collection View",
    meta: {
      label: "Collection",
      pathname: "collection",
      icon: "icon-grid"
    },
    conditions: [
      {
        alias: i,
        match: o
      },
      {
        alias: oe
      }
    ]
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
        match: o
      },
      {
        alias: ne
      }
    ]
  },
  {
    type: "workspaceView",
    alias: "Umb.WorkspaceView.Media.Info",
    name: "Media Workspace Info View",
    element: () => import("./media-workspace-view-info.element-B5A-fiWP.js"),
    weight: 100,
    meta: {
      label: "#general_info",
      pathname: "info",
      icon: "info"
    },
    conditions: [
      {
        alias: i,
        match: o
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
        match: o
      },
      {
        alias: d
      }
    ]
  }
], Ci = [
  ...Ie,
  ...Se,
  ...Pe,
  ...Le,
  ...ge,
  ...we,
  ...$e,
  ...Ve,
  ...Qe,
  ...si,
  ...mi,
  ...yi,
  ...Ei,
  ...Ti,
  ...Ii,
  ...bi,
  ...Oi
], R = "Umb.Section.Media", ui = [
  {
    type: "section",
    alias: R,
    name: "Media Section",
    weight: 900,
    meta: {
      label: "#sections_media",
      pathname: "media"
    },
    conditions: [
      {
        alias: O,
        match: R
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
        alias: "Umb.Condition.SectionAlias",
        match: R
      }
    ]
  }
], ki = [
  {
    type: "entityCreateOptionAction",
    alias: "Umb.EntityCreateOptionAction.MediaType.Default",
    name: "Default Media Type Entity Create Option Action",
    weight: 1200,
    api: () => import("./default-media-type-create-option-action-7dIt7yNH.js"),
    forEntityTypes: [r, a, n],
    meta: {
      icon: "icon-picture",
      label: "#content_mediatype"
    }
  }
], Pi = [
  {
    type: "entityCreateOptionAction",
    kind: "folder",
    alias: "Umb.EntityCreateOptionAction.MediaType.Folder",
    name: "Media Type Folder Entity Create Option Action",
    forEntityTypes: [r, n],
    meta: {
      icon: "icon-folder",
      label: "#create_folder",
      description: "#create_folderDescription",
      folderRepositoryAlias: T
    }
  }
], hi = [
  {
    type: "entityAction",
    kind: "create",
    alias: "Umb.EntityAction.MediaType.Create",
    name: "Create Media Type Entity Action",
    weight: 1200,
    forEntityTypes: [a, r, n]
  },
  // TODO: Deprecated: Will be removed in 17.0.0
  {
    type: "modal",
    alias: "Umb.Modal.MediaTypeCreateOptions",
    name: "Media Type Create Options Modal",
    element: () => import("./media-type-create-options-modal.element-D5Pr-Lbu.js")
  },
  ...ki,
  ...Pi
], Bi = [
  {
    type: "repository",
    alias: Y,
    name: "Move Media Type Repository",
    api: () => import("./media-type-move.repository-BVEz6bDY.js")
  }
], Di = [
  {
    type: "entityAction",
    kind: "moveTo",
    alias: "Umb.EntityAction.MediaType.MoveTo",
    name: "Move Media Type Entity Action",
    forEntityTypes: [a],
    meta: {
      treeRepositoryAlias: _,
      moveRepositoryAlias: Y,
      treeAlias: U,
      foldersOnly: !0
    }
  },
  ...Bi
], Li = [
  {
    type: "repository",
    alias: N,
    name: "Duplicate Media Type Repository",
    api: () => import("./media-type-duplicate.repository-DHSDaGcY.js")
  }
], gi = [
  {
    type: "entityAction",
    kind: "duplicateTo",
    alias: "Umb.EntityAction.MediaType.DuplicateTo",
    name: "Duplicate Document To Entity Action",
    forEntityTypes: [a],
    meta: {
      duplicateRepositoryAlias: N,
      treeAlias: U,
      treeRepositoryAlias: _,
      foldersOnly: !0
    }
  },
  ...Li
], wi = [
  {
    type: "repository",
    alias: se,
    name: "Export Media Type Repository",
    api: () => import("./media-type-export.repository-BcY1qfkh.js")
  }
], $i = [
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
  ...wi
], Yi = [
  {
    type: "repository",
    alias: re,
    name: "Import Media Type Repository",
    api: () => import("./media-type-import.repository-CzkM04nS.js")
  }
], Ni = [
  {
    type: "modal",
    alias: "Umb.Modal.MediaType.Import",
    name: "Media Type Import Modal",
    element: () => import("./media-type-import-modal.element-D1UTXZLY.js")
  }
], vi = [
  {
    type: "entityAction",
    kind: "default",
    alias: "Umb.EntityAction.MediaType.Import",
    name: "Export Media Type Entity Action",
    forEntityTypes: [r],
    api: () => import("./media-type-import.action-DRleoI48.js"),
    meta: {
      icon: "icon-page-up",
      label: "#actions_import",
      additionalOptions: !0
    }
  },
  ...Yi,
  ...Ni
], Wi = [
  {
    type: "entityAction",
    kind: "delete",
    alias: "Umb.EntityAction.MediaType.Delete",
    name: "Delete Media Type Entity Action",
    forEntityTypes: [a],
    meta: {
      detailRepositoryAlias: W,
      itemRepositoryAlias: v
    }
  },
  ...hi,
  ...Di,
  ...gi,
  ...$i,
  ...vi
], Fi = [
  {
    type: "menuItem",
    kind: "tree",
    alias: "Umb.MenuItem.MediaTypes",
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
    name: "Media Type Menu Structure Workspace Context",
    alias: "Umb.Context.MediaType.Menu.Structure",
    api: () => import("./media-type-menu-structure.context-BcGNJ1-u.js"),
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
], Vi = {
  type: "propertyEditorUi",
  alias: "Umb.PropertyEditorUi.MediaTypePicker",
  name: "Media Type Picker Property Editor UI",
  element: () => import("./property-editor-ui-media-type-picker.element-8UMBoQOq.js"),
  meta: {
    label: "Media Type Picker",
    icon: "icon-media-dashed-line",
    group: "advanced"
  }
}, xi = [Vi], Hi = [
  {
    type: "dataSourceDataMapping",
    alias: "Umb.DataSourceDataMapping.ManagementApi.MediaTypePropertyTypeReferenceResponse",
    name: "Media Type Property Type Reference Response Management Api Data Mapping",
    api: () => import("./media-type-property-type-reference-response.management-api.mapping-kyxfB3B5.js"),
    forDataSource: $,
    forDataModel: "MediaTypePropertyTypeReferenceResponseModel"
  },
  {
    type: "entityItemRef",
    alias: "Umb.EntityItemRef.MediaTypePropertyType",
    name: "Media Type Property Type Entity Item Reference",
    element: () => import("./media-type-property-type-item-ref.element-CdN6dfOH.js"),
    forEntityTypes: [pe]
  }
], Gi = [
  {
    type: "repository",
    alias: W,
    name: "Media Types Repository",
    api: () => import("./media-type-detail.repository-BfRNPj_J.js")
  },
  {
    type: "store",
    alias: me,
    name: "Media Type Store",
    api: () => import("./media-type-detail.store-C-_k_6ab.js")
  }
], Ki = [
  {
    type: "repository",
    alias: v,
    name: "Media Type Item Repository",
    api: () => import("./media-type-item.repository-BBLk14NN.js")
  },
  {
    type: "itemStore",
    alias: le,
    name: "Media Type Item Store",
    api: () => import("./media-type-item.store-Bfbw1GfU.js")
  }
], ji = [
  {
    type: "repository",
    alias: F,
    name: "Media Type Composition Repository",
    api: () => import("./media-type-composition.repository-Ck3eRySm.js")
  }
], qi = [...Gi, ...Ki, ...ji], zi = [
  {
    name: "Media Type Global Search",
    alias: ce,
    type: "globalSearch",
    weight: 500,
    meta: {
      label: "Media Types",
      searchProviderAlias: V
    },
    conditions: [
      {
        alias: O,
        match: Ae
      }
    ]
  }
], Ji = [
  {
    name: "Media Type Search Provider",
    alias: V,
    type: "searchProvider",
    api: () => import("./media-type.search-provider-DMnZs0lQ.js"),
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
  ...zi
], Qi = [
  {
    type: "repository",
    alias: T,
    name: "Media Type Folder Repository",
    api: () => import("./media-type-folder.repository-Cj1sex62.js")
  },
  {
    type: "store",
    alias: de,
    name: "Media Type Folder Store",
    api: () => import("./media-type-folder.store-D48aQBwN.js")
  }
], Xi = [
  {
    type: "workspace",
    kind: "routable",
    alias: f,
    name: "Media Type Folder Workspace",
    api: () => import("./media-type-folder-workspace.context-711ggQCy.js"),
    meta: {
      entityType: n
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
        match: f
      }
    ]
  }
], Zi = [
  {
    type: "entityAction",
    kind: "folderUpdate",
    alias: "Umb.EntityAction.MediaType.Folder.Update",
    name: "Rename Media Type Folder Entity Action",
    forEntityTypes: [n],
    meta: {
      folderRepositoryAlias: T
    }
  },
  {
    type: "entityAction",
    kind: "folderDelete",
    alias: "Umb.EntityAction.MediaType.Folder.Delete",
    name: "Delete Media Type Folder Entity Action",
    forEntityTypes: [n],
    meta: {
      folderRepositoryAlias: T
    }
  },
  ...Qi,
  ...Xi
], et = [
  {
    type: "collectionAction",
    kind: "create",
    name: "Media Type Tree Item Children Collection Create Action",
    alias: "Umb.CollectionAction.MediaTypeTreeItemChildren.Create",
    conditions: [
      {
        alias: s,
        match: C
      }
    ]
  }
], it = [
  {
    type: "repository",
    alias: x,
    name: "Media Type Tree Item Children Collection Repository",
    api: () => import("./media-type-tree-item-children-collection.repository-BgRxpDt0.js")
  }
], tt = [
  {
    type: "collectionView",
    alias: "Umb.CollectionView.MediaType.TreeItem.Table",
    name: "Media Type Tree Item Table Collection View",
    element: () => import("./media-type-tree-item-table-collection-view.element-CnrWHj5B.js"),
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
], at = [
  {
    type: "collection",
    kind: "default",
    alias: C,
    name: "Media Type Tree Item Children Collection",
    meta: {
      repositoryAlias: x
    }
  },
  ...et,
  ...it,
  ...tt
], ot = [
  {
    type: "entityAction",
    kind: "reloadTreeItemChildren",
    alias: "Umb.EntityAction.MediaType.Tree.ReloadChildrenOf",
    name: "Reload Media Type Tree Item Children Entity Action",
    forEntityTypes: [a, r, n]
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
        alias: "Umb.Condition.WorkspaceAlias",
        oneOf: [ye, f]
      }
    ]
  },
  ...at
], nt = [
  {
    type: "repository",
    alias: _,
    name: "Media Type Tree Repository",
    api: () => import("./media-type-tree.repository-B2QordZN.js")
  },
  {
    type: "treeStore",
    alias: Me,
    name: "Media Type Tree Store",
    api: () => import("./media-type-tree.store-BYPLGZMw.js")
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
    forEntityTypes: [a, r, n]
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
  ...Zi,
  ...ot
], st = [
  {
    type: "workspace",
    kind: "routable",
    alias: y,
    name: "Media Type Workspace",
    api: () => import("./media-type-workspace.context-BK9Yr1xd.js"),
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
      compositionRepositoryAlias: F
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
    element: () => import("./media-type-workspace-view-structure.element-Cjtb2TxK.js"),
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
], rt = [
  ...Wi,
  ...Fi,
  ...xi,
  ...Hi,
  ...qi,
  ...Ji,
  ...nt,
  ...st
], pt = [
  {
    type: "repository",
    alias: Ee,
    name: "Imaging Repository",
    api: () => import("./imaging.repository-Cr_RO0yc.js")
  },
  {
    type: "store",
    alias: Te,
    name: "Imaging Store",
    api: () => import("./imaging.store-COwLNIg-.js")
  }
], mt = [
  {
    type: "modal",
    alias: "Umb.Modal.Dropzone.MediaTypePicker",
    name: "Dropzone Media Type Picker Modal",
    element: () => import("./dropzone.element-DJdyaEXj.js").then((e) => e.C)
  }
], lt = [...mt], Dt = [
  ...ui,
  ...Ci,
  ...rt,
  ...pt,
  ...lt
];
export {
  Mi as U,
  Dt as m
};
//# sourceMappingURL=manifests-ClCMXm8Y.js.map
