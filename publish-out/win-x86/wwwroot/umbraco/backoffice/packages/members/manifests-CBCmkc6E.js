import { d as f, e as w, c as I, a as y, i as u, f as U, b as S, g as L, j as $, l as E, n as A } from "./member-group-picker-modal.element-I2C8EUhz.js";
import { UMB_COLLECTION_ALIAS_CONDITION as r } from "@umbraco-cms/backoffice/collection";
import { UMB_WORKSPACE_CONDITION_ALIAS as e, UmbSubmitWorkspaceAction as b } from "@umbraco-cms/backoffice/workspace";
import { g as _, q as T, r as G, n as N, f as o, D as g, x as a, E as D, F as Y, u as k, v as W, y as V, z as v, B as R, a as H, G as K } from "./manifests-KIVuOqdB.js";
import { UMB_MANAGEMENT_API_DATA_SOURCE_ALIAS as P } from "@umbraco-cms/backoffice/repository";
import { UMB_SECTION_USER_PERMISSION_CONDITION_ALIAS as s, UMB_SECTION_ALIAS_CONDITION_ALIAS as j } from "@umbraco-cms/backoffice/section";
import { UMB_CONTENT_HAS_PROPERTIES_WORKSPACE_CONDITION as F } from "@umbraco-cms/backoffice/content";
import { UMB_ENTITY_IS_NOT_TRASHED_CONDITION_ALIAS as x } from "@umbraco-cms/backoffice/recycle-bin";
import { UMB_USER_PERMISSION_DOCUMENT_PUBLIC_ACCESS as q, UMB_DOCUMENT_ENTITY_TYPE as z } from "@umbraco-cms/backoffice/document";
import { b as O, s as M, m as J, j as Q, u as B, d, i as X, A as Z, B as ee, C as te, q as C, r as ae, v as m, w as h, t as ie, c as oe, x as l, p as ne } from "./input-member-type.element-HvnUGYvy.js";
import { U as n, a as p } from "./member-type-tree.store.context-token-DyBHp9CK.js";
import "@umbraco-cms/backoffice/external/backend-api";
import "@umbraco-cms/backoffice/resources";
import "@umbraco-cms/backoffice/notification";
import { UMB_SETTINGS_SECTION_ALIAS as re } from "@umbraco-cms/backoffice/settings";
import "@umbraco-cms/backoffice/picker-input";
const se = [
  {
    type: "repository",
    alias: f,
    name: "Member Group Collection Repository",
    api: () => import("./member-group-picker-modal.element-I2C8EUhz.js").then((t) => t.u)
  }
], me = [
  {
    type: "collectionView",
    alias: w,
    name: "Member Group Table Collection View",
    element: () => import("./member-group-table-collection-view.element-Ci5XWFjM.js"),
    meta: {
      label: "Table",
      icon: "icon-list",
      pathName: "table"
    },
    conditions: [
      {
        alias: r,
        match: "Umb.Collection.MemberGroup"
      }
    ]
  }
], pe = [
  {
    type: "collectionAction",
    kind: "button",
    name: "Create Member Group Collection Action",
    alias: "Umb.CollectionAction.MemberGroup.Create",
    weight: 200,
    meta: {
      label: "#general_create",
      href: "section/member-management/workspace/member-group/create"
    },
    conditions: [
      {
        alias: r,
        match: "Umb.Collection.MemberGroup"
      }
    ]
  }
], ce = [
  {
    type: "collection",
    kind: "default",
    alias: I,
    name: "Member Group Collection",
    meta: {
      repositoryAlias: f
    }
  },
  ...se,
  ...me,
  ...pe
], le = [
  {
    type: "entityAction",
    kind: "default",
    alias: "Umb.EntityAction.MemberGroup.Create",
    name: "Create Member Group Entity Action",
    weight: 1200,
    api: () => import("./create-member-group.action-BBO-V6y3.js"),
    forEntityTypes: [y],
    meta: {
      icon: "icon-add",
      label: "#actions_createFor",
      additionalOptions: !0
    }
  },
  {
    type: "entityAction",
    kind: "delete",
    alias: "Umb.EntityAction.MemberGroup.Delete",
    name: "Delete Member Group Entity Action ",
    forEntityTypes: [S],
    meta: {
      detailRepositoryAlias: U,
      itemRepositoryAlias: u
    }
  }
], Me = [
  {
    type: "modal",
    alias: "Umb.Modal.MemberGroupPicker",
    name: "Member Group Picker Modal",
    element: () => import("./member-group-picker-modal.element-I2C8EUhz.js").then((t) => t.v)
  }
], c = "Umb.Menu.MemberManagement", ye = [
  {
    type: "menuItem",
    alias: "Umb.MenuItem.MemberGroups",
    name: "Member Groups Menu Item",
    weight: 100,
    meta: {
      label: "#treeHeaders_memberGroups",
      icon: "icon-users",
      entityType: y,
      menus: [c]
    }
  }
], Ee = {
  type: "propertyEditorSchema",
  name: "Member Group Picker",
  alias: "Umbraco.MemberGroupPicker",
  meta: {
    defaultPropertyEditorUiAlias: "Umb.PropertyEditorUi.MemberGroupPicker"
  }
}, be = [
  {
    type: "propertyEditorUi",
    alias: "Umb.PropertyEditorUi.MemberGroupPicker",
    name: "Member Group Picker Property Editor UI",
    element: () => import("./property-editor-ui-member-group-picker.element-CHDxZNqK.js"),
    meta: {
      label: "Member Group Picker",
      propertyEditorSchemaAlias: "Umbraco.MemberGroupPicker",
      icon: "icon-users-alt",
      group: "people",
      supportsReadOnly: !0
    }
  },
  Ee
], _e = [...be], Te = [
  {
    type: "repository",
    alias: U,
    name: "Member Group Detail Repository",
    api: () => import("./member-group-detail.repository-BcV3efI7.js")
  },
  {
    type: "store",
    alias: L,
    name: "Member Group Detail Store",
    api: () => import("./member-group-detail.store-BBoV6r_D.js")
  }
], Ae = [
  {
    type: "repository",
    alias: u,
    name: "Member Group Item Repository",
    api: () => import("./member-group-item.repository-B0EQoalz.js")
  },
  {
    type: "itemStore",
    alias: $,
    name: "Member Group Item Store",
    api: () => import("./member-group-item.store-Bdr8ChdY.js")
  }
], Re = [...Te, ...Ae], de = {
  type: "workspace",
  kind: "routable",
  alias: E,
  name: "MemberGroup Workspace",
  api: () => import("./member-group-workspace.context-ChEuO7hK.js"),
  meta: {
    entityType: S
  }
}, fe = [
  {
    type: "workspaceAction",
    kind: "default",
    alias: "Umb.WorkspaceAction.MemberGroup.Save",
    name: "Save Member Group Workspace Action",
    api: b,
    meta: {
      label: "#buttons_save",
      look: "primary",
      color: "positive"
    },
    conditions: [
      {
        alias: e,
        match: E
      }
    ]
  }
], Ie = [
  {
    type: "workspaceView",
    alias: "Umb.WorkspaceView.Member.Info",
    name: "Member Workspace info View",
    js: () => import("./member-type-workspace-view-info.element-Baqh5SFY.js"),
    weight: 300,
    meta: {
      label: "#general_info",
      pathname: "info",
      icon: "icon-document"
    },
    conditions: [
      {
        alias: e,
        match: E
      }
    ]
  }
], ue = [de, ...fe, ...Ie], Ue = [
  {
    type: "workspace",
    kind: "default",
    alias: A,
    name: "Member Group Root Workspace View",
    meta: {
      entityType: y,
      headline: "#treeHeaders_memberGroups"
    }
  },
  {
    type: "workspaceView",
    kind: "collection",
    alias: "Umb.WorkspaceView.MemberGroupRoot.Collection",
    name: "Member Group Root Collection Workspace View",
    meta: {
      label: "Collection",
      pathname: "collection",
      icon: "icon-layers",
      collectionAlias: I
    },
    conditions: [
      {
        alias: e,
        match: A
      }
    ]
  }
], Se = [
  ...ue,
  ...Ue
], ke = [
  ...ce,
  ...le,
  ...Me,
  ...ye,
  ..._e,
  ...Re,
  ...Se,
  {
    name: "Member Group Backoffice Entry Point",
    alias: "Umb.EntryPoint.MemberGroup",
    type: "backofficeEntryPoint",
    js: () => import("./entry-point-B-7lv47G.js")
  }
], Pe = [
  {
    type: "entityAction",
    kind: "default",
    alias: "Umb.EntityAction.Member.Create",
    name: "Create Member Entity Action",
    weight: 1200,
    api: () => import("./create.action-BPPxYFM3.js"),
    forEntityTypes: [_],
    meta: {
      icon: "icon-add",
      label: "#actions_createFor",
      additionalOptions: !0
    }
  },
  {
    type: "modal",
    alias: "Umb.Modal.Member.CreateOptions",
    name: "Member Create Options Modal",
    element: () => import("./member-create-options-modal.element-B3kEhqu5.js")
  }
], Oe = [
  {
    type: "entityAction",
    alias: "Umb.EntityAction.Member.Delete",
    name: "Delete Member Entity Action",
    kind: "deleteWithRelation",
    forEntityTypes: [o],
    meta: {
      itemRepositoryAlias: N,
      detailRepositoryAlias: G,
      referenceRepositoryAlias: T
    }
  },
  ...Pe
], Be = [
  {
    type: "entityItemRef",
    alias: "Umb.EntityItemRef.Member",
    name: "Member Entity Item Reference",
    element: () => import("./member-item-ref.element-BrU8Wecb.js"),
    forEntityTypes: [o]
  },
  ...g
], Ce = [
  {
    type: "modal",
    alias: "Umb.Modal.MemberPicker",
    name: "Member Picker Modal",
    element: () => import("./manifests-KIVuOqdB.js").then((t) => t.H)
  }
], he = [
  {
    type: "menuItem",
    alias: "Umb.MenuItem.Members",
    name: "Members Menu Item",
    weight: 200,
    meta: {
      label: "#treeHeaders_member",
      icon: "icon-user",
      entityType: _,
      menus: [c]
    }
  }
], we = [
  {
    type: "pickerSearchResultItem",
    kind: "default",
    alias: "Umb.PickerSearchResultItem.Member",
    name: "Member Picker Search Result Item",
    element: () => import("./member-picker-search-result-item.element-CxMOk2G0.js"),
    forEntityTypes: [o]
  }
], Le = {
  type: "propertyEditorSchema",
  name: "Member Picker",
  alias: "Umbraco.MemberPicker",
  meta: {
    defaultPropertyEditorUiAlias: "Umb.PropertyEditorUi.MemberPicker"
  }
}, $e = [
  {
    type: "propertyEditorUi",
    alias: "Umb.PropertyEditorUi.MemberPicker",
    name: "Member Picker Property Editor UI",
    element: () => import("./property-editor-ui-member-picker.element-D_6Cugez.js"),
    meta: {
      label: "Member Picker",
      propertyEditorSchemaAlias: "Umbraco.MemberPicker",
      icon: "icon-user",
      group: "people",
      supportsReadOnly: !0
    }
  },
  Le
], Ge = [...$e], Ne = [
  {
    type: "repository",
    alias: T,
    name: "Member Reference Repository",
    api: () => import("./member-reference.repository-RHz5Qiu-.js")
  },
  {
    type: "dataSourceDataMapping",
    alias: "Umb.DataSourceDataMapping.ManagementApi.MemberReferenceResponse",
    name: "Member Reference Response Management Api Data Mapping",
    api: () => import("./member-reference-response.management-api.mapping-YLix48Yf.js"),
    forDataSource: P,
    forDataModel: "MemberReferenceResponseModel"
  }
], ge = [
  {
    type: "workspaceInfoApp",
    kind: "entityReferences",
    name: "Member References Workspace Info App",
    alias: "Umb.WorkspaceInfoApp.Member.References",
    conditions: [
      {
        alias: e,
        match: a
      }
    ],
    meta: {
      referenceRepositoryAlias: T
    }
  }
], De = [...Ne, ...ge], Ye = [...D, ...Y], i = "Umb.Section.Members", We = [
  {
    name: "Member Global Search",
    alias: W,
    type: "globalSearch",
    weight: 300,
    meta: {
      label: "Members",
      searchProviderAlias: k
    },
    conditions: [
      {
        alias: s,
        match: i
      }
    ]
  }
], Ve = [
  {
    name: "Member Search Provider",
    alias: k,
    type: "searchProvider",
    api: () => import("./member.search-provider-Cu2yVmO0.js"),
    weight: 300,
    meta: {
      label: "Members"
    }
  },
  {
    name: "Member Search Result Item",
    alias: "Umb.SearchResultItem.Member",
    type: "searchResultItem",
    forEntityTypes: [o]
  },
  ...We
], ve = {
  type: "workspace",
  kind: "routable",
  alias: a,
  name: "Member Workspace",
  api: () => import("./member-workspace.context-ChIp-t7i.js"),
  meta: {
    entityType: o
  }
}, He = [
  {
    type: "workspaceAction",
    kind: "default",
    alias: "Umb.WorkspaceAction.Member.Save",
    name: "Save Member Workspace Action",
    api: b,
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
], Ke = [
  {
    type: "workspaceView",
    kind: "contentEditor",
    alias: V,
    name: "Member Workspace Content View",
    weight: 1e3,
    meta: {
      label: "#general_details",
      pathname: "content",
      icon: "icon-document"
    },
    conditions: [
      {
        alias: e,
        match: a
      },
      {
        alias: F
      }
    ]
  },
  {
    type: "workspaceView",
    alias: v,
    name: "Member Workspace Member View",
    js: () => import("./member-workspace-view-member.element-C07G8YR0.js"),
    weight: 500,
    meta: {
      label: "#apps_umbInfo",
      pathname: "info",
      icon: "icon-user"
    },
    conditions: [
      {
        alias: e,
        match: a
      }
    ]
  }
], je = [ve, ...He, ...Ke], Fe = [
  {
    type: "workspace",
    kind: "default",
    alias: R,
    name: "Member Root Workspace",
    meta: {
      entityType: _,
      headline: "#treeHeaders_member"
    }
  },
  {
    type: "workspaceView",
    kind: "collection",
    alias: "Umb.WorkspaceView.MemberRoot.Collection",
    name: "Member Root Collection Workspace View",
    meta: {
      label: "Collection",
      pathname: "collection",
      icon: "icon-layers",
      collectionAlias: H
    },
    conditions: [
      {
        alias: e,
        match: R
      }
    ]
  }
], xe = [
  ...je,
  ...Fe
], qe = [
  ...K,
  ...Oe,
  ...Be,
  ...Ce,
  ...he,
  ...we,
  ...Ge,
  ...De,
  ...Ye,
  ...Ve,
  ...xe,
  {
    name: "Member Backoffice Entry Point",
    alias: "Umb.BackofficeEntryPoint.Member",
    type: "backofficeEntryPoint",
    js: () => import("./entry-point-DJWlNLnN.js")
  }
], ze = [
  {
    type: "entityAction",
    kind: "default",
    alias: "Umb.EntityAction.Document.PublicAccess",
    name: "Document Public Access Entity Action",
    weight: 200,
    api: () => import("./public-access.action-BWfkq_s9.js"),
    forEntityTypes: [z],
    meta: {
      icon: "icon-lock",
      label: "#actions_protect",
      additionalOptions: !0
    },
    conditions: [
      {
        alias: "Umb.Condition.UserPermission.Document",
        allOf: [q]
      },
      {
        alias: x
      },
      {
        alias: s,
        match: i
      }
    ]
  },
  {
    type: "modal",
    alias: "Umb.Modal.PublicAccess",
    name: "Public Access Modal",
    element: () => import("./public-access-modal.element-DSE5mlVF.js")
  }
], Je = [
  {
    type: "entityCreateOptionAction",
    alias: "Umb.EntityCreateOptionAction.MemberType.Default",
    name: "Default Member Type Entity Create Option Action",
    weight: 1e3,
    api: () => import("./default-member-type-create-option-action-CjD0ARl1.js"),
    forEntityTypes: [n],
    meta: {
      icon: "icon-user",
      label: "#content_membertype"
    }
  }
], Qe = [
  {
    type: "entityAction",
    kind: "create",
    alias: "Umb.EntityAction.MemberType.Create",
    name: "Create Member Type Entity Action",
    forEntityTypes: [n]
  },
  ...Je
], Xe = [
  {
    type: "repository",
    alias: O,
    name: "Duplicate Member Type Repository",
    api: () => import("./member-type-duplicate.repository-DbrWkCHu.js")
  }
], Ze = [
  {
    type: "entityAction",
    kind: "duplicate",
    alias: "Umb.EntityAction.MemberType.Duplicate",
    name: "Duplicate Member Type Entity Action",
    forEntityTypes: [p],
    meta: {
      duplicateRepositoryAlias: O,
      treeRepositoryAlias: M
    }
  },
  ...Xe
], et = [
  {
    type: "entityAction",
    kind: "delete",
    alias: "Umb.EntityAction.MemberType.Delete",
    name: "Delete Member Type Entity Action",
    forEntityTypes: [p],
    meta: {
      detailRepositoryAlias: Q,
      itemRepositoryAlias: J
    }
  },
  ...Qe,
  ...Ze
], tt = [
  {
    type: "workspace",
    kind: "default",
    alias: "Umb.Workspace.MemberType.Root",
    name: "Member Type Root Workspace",
    meta: {
      entityType: n,
      headline: "#treeHeaders_memberTypes"
    }
  }
], at = [
  {
    type: "menuItem",
    kind: "tree",
    alias: d,
    name: "Member Type Menu Item",
    weight: 700,
    meta: {
      label: "Member Types",
      treeAlias: B,
      menus: ["Umb.Menu.StructureSettings"]
    }
  },
  {
    type: "workspaceContext",
    kind: "menuStructure",
    name: "Member Type Menu Structure Workspace Context",
    alias: "Umb.Context.MemberType.Menu.Structure",
    api: () => import("./member-type-menu-structure.context-CvVIx_UB.js"),
    meta: {
      menuItemAlias: d
    },
    conditions: [
      {
        alias: e,
        match: "Umb.Workspace.MemberType"
      }
    ]
  },
  {
    type: "workspaceFooterApp",
    kind: "menuBreadcrumb",
    alias: "Umb.WorkspaceFooterApp.MemberType.Breadcrumb",
    name: "Member Type Breadcrumb Workspace Footer App",
    conditions: [
      {
        alias: e,
        match: "Umb.Workspace.MemberType"
      }
    ]
  }
], it = [
  {
    type: "dataSourceDataMapping",
    alias: "Umb.DataSourceDataMapping.ManagementApi.MemberTypePropertyTypeReferenceResponse",
    name: "Member Type Property Type Reference Response Management Api Data Mapping",
    api: () => import("./member-type-property-type-reference-response.management-api.mapping-C8HPeMBK.js"),
    forDataSource: P,
    forDataModel: "MemberTypePropertyTypeReferenceResponseModel"
  },
  {
    type: "entityItemRef",
    alias: "Umb.EntityItemRef.MemberTypePropertyType",
    name: "Member Type Property Type Entity Item Reference",
    element: () => import("./member-type-property-type-item-ref.element-S1eYhz9m.js"),
    forEntityTypes: [X]
  }
], ot = [...Z, ...ee, ...te], nt = [
  {
    name: "Member Type Global Search",
    alias: ae,
    type: "globalSearch",
    weight: 200,
    meta: {
      label: "Member Types",
      searchProviderAlias: C
    },
    conditions: [
      {
        alias: s,
        match: re
      }
    ]
  }
], rt = [
  {
    name: "Member Type Search Provider",
    alias: C,
    type: "searchProvider",
    api: () => import("./member-type.search-provider-CYMtq5BT.js"),
    weight: 200,
    meta: {
      label: "Member Types"
    }
  },
  {
    name: "Member Type Search Result Item",
    alias: "Umb.SearchResultItem.MemberType",
    type: "searchResultItem",
    forEntityTypes: [p]
  },
  ...nt
], st = [
  {
    type: "collectionAction",
    kind: "create",
    alias: "Umb.CollectionAction.MemberTypeTreeItemChildren.Create",
    name: "Member Type Tree Item Children Collection Create Action",
    conditions: [
      {
        alias: r,
        match: m
      }
    ]
  }
], mt = [
  {
    type: "repository",
    alias: h,
    name: "Member Type Tree Item Children Collection Repository",
    api: () => import("./member-type-tree-item-children-collection.repository-BYS6lojR.js")
  }
], pt = [
  {
    type: "collectionView",
    alias: "Umb.CollectionView.MemberType.TreeItem.Table",
    name: "Member Type Tree Item Table Collection View",
    element: () => import("./member-type-tree-item-table-collection-view.element-BEgXYwDl.js"),
    weight: 300,
    meta: {
      label: "Table",
      icon: "icon-list",
      pathName: "table"
    },
    conditions: [
      {
        alias: r,
        match: m
      }
    ]
  }
], ct = [
  {
    type: "collection",
    kind: "default",
    alias: m,
    name: "Member Type Tree Item Children Collection",
    meta: {
      repositoryAlias: h
    }
  },
  ...st,
  ...mt,
  ...pt
], lt = [
  {
    type: "entityAction",
    kind: "reloadTreeItemChildren",
    alias: "Umb.EntityAction.MemberType.Tree.ReloadChildrenOf",
    name: "Reload Member Type Tree Item Children Entity Action",
    forEntityTypes: [n]
  }
], Mt = [...ct, ...lt], yt = [
  {
    type: "repository",
    alias: M,
    name: "Member Type Tree Repository",
    api: () => import("./member-type-tree.repository-BadDocg9.js")
  },
  {
    type: "treeStore",
    alias: ie,
    name: "Member Type Tree Store",
    api: () => import("./member-type-tree.store-Cof8wqtJ.js")
  },
  {
    type: "tree",
    kind: "default",
    alias: B,
    name: "Member Type Tree",
    meta: {
      repositoryAlias: M
    }
  },
  {
    type: "treeItem",
    kind: "default",
    alias: "Umb.TreeItem.MemberType",
    name: "Member Type Tree Item",
    forEntityTypes: [n, p]
  },
  {
    type: "workspaceView",
    kind: "collection",
    alias: "Umb.WorkspaceView.MemberType.TreeItemChildrenCollection",
    name: "Member Type Tree Item Children Collection Workspace View",
    meta: {
      label: "#general_design",
      pathname: "design",
      icon: "icon-member-dashed-line",
      collectionAlias: m
    },
    conditions: [
      {
        alias: e,
        oneOf: [oe]
      }
    ]
  },
  ...Mt
], Et = [
  {
    type: "workspace",
    kind: "routable",
    alias: l,
    name: "Member Type Workspace",
    api: () => import("./member-type-workspace.context-D43tU17r.js"),
    meta: {
      entityType: "member-type"
    }
  },
  {
    type: "workspaceView",
    kind: "contentTypeDesignEditor",
    alias: "Umb.WorkspaceView.MemberType.Design",
    name: "Member Type Workspace Design View",
    meta: {
      label: "#general_design",
      pathname: "design",
      icon: "icon-member-dashed-line",
      compositionRepositoryAlias: ne
    },
    conditions: [
      {
        alias: e,
        match: l
      }
    ]
  },
  {
    type: "workspaceAction",
    kind: "default",
    alias: "Umb.WorkspaceAction.MemberType.Save",
    name: "Save Member Type Workspace Action",
    api: b,
    meta: {
      label: "#buttons_save",
      look: "primary",
      color: "positive"
    },
    conditions: [
      {
        alias: e,
        match: l
      }
    ]
  }
], bt = [
  ...et,
  ...tt,
  ...at,
  ...it,
  ...ot,
  ...rt,
  ...yt,
  ...Et,
  {
    name: "Member Type Backoffice Entry Point",
    alias: "Umb.BackofficeEntryPoint.MemberType",
    type: "backofficeEntryPoint",
    js: () => import("./entry-point-w2p0Ad_v.js")
  }
], _t = [
  {
    type: "sectionSidebarApp",
    kind: "menu",
    alias: "Umb.SectionSidebarApp.Menu.MemberManagement",
    name: "Member Management Menu Sidebar App",
    weight: 100,
    meta: {
      label: "#treeHeaders_member",
      menu: c
    },
    conditions: [
      {
        alias: j,
        match: i
      }
    ]
  }
], Tt = [
  {
    type: "menu",
    alias: c,
    name: "Member Management Menu"
  }
], At = {
  type: "section",
  alias: i,
  name: "Members Section",
  weight: 500,
  meta: {
    label: "#sections_member",
    pathname: "member-management"
  },
  conditions: [
    {
      alias: s,
      match: i
    }
  ]
}, Rt = [
  At,
  ..._t,
  ...Tt
], Nt = [
  ...ke,
  ...qe,
  ...ze,
  ...bt,
  ...Rt
];
export {
  i as U,
  Nt as m
};
//# sourceMappingURL=manifests-CBCmkc6E.js.map
