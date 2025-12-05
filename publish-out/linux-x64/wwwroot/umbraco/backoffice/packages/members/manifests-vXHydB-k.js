import { d as _, e as k, c as A, a as c, i as T, f as R, b as d, g as B, j as h, l, n as b } from "./member-group-picker-modal.element-I2C8EUhz.js";
import { UMB_COLLECTION_ALIAS_CONDITION as f } from "@umbraco-cms/backoffice/collection";
import { UMB_WORKSPACE_CONDITION_ALIAS as e, UmbSubmitWorkspaceAction as u } from "@umbraco-cms/backoffice/workspace";
import { g as M, q as y, r as C, n as $, f as o, A as L, x as G, B as w, C as g, u as U, v as D, y as E, a as Y, D as N, E as W } from "./manifests-DHyiWGyY.js";
import { UMB_MANAGEMENT_API_DATA_SOURCE_ALIAS as I } from "@umbraco-cms/backoffice/repository";
import { UMB_SECTION_USER_PERMISSION_CONDITION_ALIAS as r } from "@umbraco-cms/backoffice/section";
import { UMB_ENTITY_IS_NOT_TRASHED_CONDITION_ALIAS as V } from "@umbraco-cms/backoffice/recycle-bin";
import { UMB_USER_PERMISSION_DOCUMENT_PUBLIC_ACCESS as v, UMB_DOCUMENT_ENTITY_TYPE as H } from "@umbraco-cms/backoffice/document";
import { b as S, q as p, k as x, h as K, s as P, g as F, w as j, x as q, y as z, o as O, p as J, r as Q, t as m, n as X } from "./input-member-type.element-Tx7SxrMW.js";
import { a as n, U as a } from "./member-type-tree.store.context-token-D6BHGtN0.js";
import "@umbraco-cms/backoffice/external/backend-api";
import "@umbraco-cms/backoffice/resources";
import "@umbraco-cms/backoffice/notification";
import { UMB_SETTINGS_SECTION_ALIAS as Z } from "@umbraco-cms/backoffice/settings";
import "@umbraco-cms/backoffice/picker-input";
import "@umbraco-cms/backoffice/content";
const ee = [
  {
    type: "repository",
    alias: _,
    name: "Member Group Collection Repository",
    api: () => import("./member-group-picker-modal.element-I2C8EUhz.js").then((t) => t.u)
  }
], te = [
  {
    type: "collectionView",
    alias: k,
    name: "Member Group Table Collection View",
    element: () => import("./member-group-table-collection-view.element-Ci5XWFjM.js"),
    meta: {
      label: "Table",
      icon: "icon-list",
      pathName: "table"
    },
    conditions: [
      {
        alias: f,
        match: "Umb.Collection.MemberGroup"
      }
    ]
  }
], ae = [
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
        alias: f,
        match: "Umb.Collection.MemberGroup"
      }
    ]
  }
], ie = [
  {
    type: "collection",
    kind: "default",
    alias: A,
    name: "Member Group Collection",
    meta: {
      repositoryAlias: _
    }
  },
  ...ee,
  ...te,
  ...ae
], oe = [
  {
    type: "entityAction",
    kind: "default",
    alias: "Umb.EntityAction.MemberGroup.Create",
    name: "Create Member Group Entity Action",
    weight: 1200,
    api: () => import("./create-member-group.action-BBO-V6y3.js"),
    forEntityTypes: [c],
    meta: {
      icon: "icon-add",
      label: "#actions_create",
      additionalOptions: !0
    }
  },
  {
    type: "entityAction",
    kind: "delete",
    alias: "Umb.EntityAction.MemberGroup.Delete",
    name: "Delete Member Group Entity Action ",
    forEntityTypes: [d],
    meta: {
      detailRepositoryAlias: R,
      itemRepositoryAlias: T
    }
  }
], re = [
  {
    type: "modal",
    alias: "Umb.Modal.MemberGroupPicker",
    name: "Member Group Picker Modal",
    element: () => import("./member-group-picker-modal.element-I2C8EUhz.js").then((t) => t.v)
  }
], s = "Umb.Menu.MemberManagement", ne = [
  {
    type: "menuItem",
    alias: "Umb.MenuItem.MemberGroups",
    name: "Member Groups Menu Item",
    weight: 100,
    meta: {
      label: "#treeHeaders_memberGroups",
      icon: "icon-users",
      entityType: c,
      menus: [s]
    }
  }
], se = {
  type: "propertyEditorSchema",
  name: "Member Group Picker",
  alias: "Umbraco.MemberGroupPicker",
  meta: {
    defaultPropertyEditorUiAlias: "Umb.PropertyEditorUi.MemberGroupPicker"
  }
}, me = [
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
  se
], pe = [...me], ce = [
  {
    type: "repository",
    alias: R,
    name: "Member Group Detail Repository",
    api: () => import("./member-group-detail.repository-BcV3efI7.js")
  },
  {
    type: "store",
    alias: B,
    name: "Member Group Detail Store",
    api: () => import("./member-group-detail.store-BBoV6r_D.js")
  }
], le = [
  {
    type: "repository",
    alias: T,
    name: "Member Group Item Repository",
    api: () => import("./member-group-item.repository-7xMUQD70.js")
  },
  {
    type: "itemStore",
    alias: h,
    name: "Member Group Item Store",
    api: () => import("./member-group-item.store-Bdr8ChdY.js")
  }
], Me = [...ce, ...le], ye = {
  type: "workspace",
  kind: "routable",
  alias: l,
  name: "MemberGroup Workspace",
  api: () => import("./member-group-workspace.context-ChEuO7hK.js"),
  meta: {
    entityType: d
  }
}, be = [
  {
    type: "workspaceAction",
    kind: "default",
    alias: "Umb.WorkspaceAction.MemberGroup.Save",
    name: "Save Member Group Workspace Action",
    api: u,
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
], Ee = [
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
        match: l
      }
    ]
  }
], _e = [ye, ...be, ...Ee], Ae = [
  {
    type: "workspace",
    kind: "default",
    alias: b,
    name: "Member Group Root Workspace View",
    meta: {
      entityType: c,
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
      collectionAlias: A
    },
    conditions: [
      {
        alias: e,
        match: b
      }
    ]
  }
], Te = [
  ..._e,
  ...Ae
], Re = [
  ...ie,
  ...oe,
  ...re,
  ...ne,
  ...pe,
  ...Me,
  ...Te
], de = [
  {
    type: "entityAction",
    kind: "default",
    alias: "Umb.EntityAction.Member.Create",
    name: "Create Member Entity Action",
    weight: 1200,
    api: () => import("./create.action-Cs9yQUJ6.js"),
    forEntityTypes: [M],
    meta: {
      icon: "icon-add",
      label: "#actions_create",
      additionalOptions: !0
    }
  },
  {
    type: "modal",
    alias: "Umb.Modal.Member.CreateOptions",
    name: "Member Create Options Modal",
    element: () => import("./member-create-options-modal.element-DEkMzIoJ.js")
  }
], fe = [
  {
    type: "entityAction",
    alias: "Umb.EntityAction.Member.Delete",
    name: "Delete Member Entity Action",
    kind: "deleteWithRelation",
    forEntityTypes: [o],
    meta: {
      itemRepositoryAlias: $,
      detailRepositoryAlias: C,
      referenceRepositoryAlias: y
    }
  },
  ...de
], ue = [
  {
    type: "entityItemRef",
    alias: "Umb.EntityItemRef.Member",
    name: "Member Entity Item Reference",
    element: () => import("./member-item-ref.element-C3-IBcDb.js"),
    forEntityTypes: [o]
  },
  ...L
], Ue = [
  {
    type: "modal",
    alias: "Umb.Modal.MemberPicker",
    name: "Member Picker Modal",
    element: () => import("./manifests-DHyiWGyY.js").then((t) => t.F)
  }
], Ie = [
  {
    type: "menuItem",
    alias: "Umb.MenuItem.Members",
    name: "Members Menu Item",
    weight: 200,
    meta: {
      label: "#treeHeaders_member",
      icon: "icon-user",
      entityType: M,
      menus: [s]
    }
  }
], Se = [
  {
    type: "pickerSearchResultItem",
    kind: "default",
    alias: "Umb.PickerSearchResultItem.Member",
    name: "Member Picker Search Result Item",
    element: () => import("./member-picker-search-result-item.element-CxMOk2G0.js"),
    forEntityTypes: [o]
  }
], Pe = {
  type: "propertyEditorSchema",
  name: "Member Picker",
  alias: "Umbraco.MemberPicker",
  meta: {
    defaultPropertyEditorUiAlias: "Umb.PropertyEditorUi.MemberPicker"
  }
}, Oe = [
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
  Pe
], ke = [...Oe], Be = [
  {
    type: "repository",
    alias: y,
    name: "Member Reference Repository",
    api: () => import("./member-reference.repository-DRcqQNqd.js")
  },
  {
    type: "dataSourceDataMapping",
    alias: "Umb.DataSourceDataMapping.ManagementApi.MemberReferenceResponse",
    name: "Member Reference Response Management Api Data Mapping",
    api: () => import("./member-reference-response.management-api.mapping-C26yQzOl.js"),
    forDataSource: I,
    forDataModel: "MemberReferenceResponseModel"
  }
], he = [
  {
    type: "workspaceInfoApp",
    kind: "entityReferences",
    name: "Member References Workspace Info App",
    alias: "Umb.WorkspaceInfoApp.Member.References",
    conditions: [
      {
        alias: e,
        match: G
      }
    ],
    meta: {
      referenceRepositoryAlias: y
    }
  }
], Ce = [...Be, ...he], $e = [...w, ...g], i = "Umb.Section.Members", Le = [
  {
    name: "Member Global Search",
    alias: D,
    type: "globalSearch",
    weight: 300,
    meta: {
      label: "Members",
      searchProviderAlias: U
    },
    conditions: [
      {
        alias: r,
        match: i
      }
    ]
  }
], Ge = [
  {
    name: "Member Search Provider",
    alias: U,
    type: "searchProvider",
    api: () => import("./member.search-provider-D2H4CAVD.js"),
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
  ...Le
], we = [
  {
    type: "workspace",
    kind: "default",
    alias: E,
    name: "Member Root Workspace",
    meta: {
      entityType: M,
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
      collectionAlias: Y
    },
    conditions: [
      {
        alias: e,
        match: E
      }
    ]
  }
], ge = [
  ...N,
  ...we
], De = [
  ...W,
  ...fe,
  ...ue,
  ...Ue,
  ...Ie,
  ...Se,
  ...ke,
  ...Ce,
  ...$e,
  ...Ge,
  ...ge
], Ye = [
  {
    type: "entityAction",
    kind: "default",
    alias: "Umb.EntityAction.Document.PublicAccess",
    name: "Document Public Access Entity Action",
    weight: 200,
    api: () => import("./public-access.action-BWfkq_s9.js"),
    forEntityTypes: [H],
    meta: {
      icon: "icon-lock",
      label: "#actions_protect",
      additionalOptions: !0
    },
    conditions: [
      {
        alias: "Umb.Condition.UserPermission.Document",
        allOf: [v]
      },
      {
        alias: V
      },
      {
        alias: r,
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
], Ne = [
  {
    type: "repository",
    alias: S,
    name: "Duplicate Member Type Repository",
    api: () => import("./member-type-duplicate.repository-DbrWkCHu.js")
  }
], We = [
  {
    type: "entityAction",
    kind: "duplicate",
    alias: "Umb.EntityAction.MemberType.Duplicate",
    name: "Duplicate Member Type Entity Action",
    forEntityTypes: [n],
    meta: {
      duplicateRepositoryAlias: S,
      treeRepositoryAlias: p
    }
  },
  ...Ne
], Ve = [
  {
    type: "entityCreateOptionAction",
    alias: "Umb.EntityCreateOptionAction.MemberType.Default",
    name: "Default Member Type Entity Create Option Action",
    weight: 1e3,
    api: () => import("./default-member-type-create-option-action-Bxrwkhzl.js"),
    forEntityTypes: [a],
    meta: {
      icon: "icon-user",
      label: "#content_membertype"
    }
  }
], ve = [
  {
    type: "entityAction",
    kind: "create",
    alias: "Umb.EntityAction.MemberType.Create",
    name: "Create Member Type Entity Action",
    forEntityTypes: [a]
  },
  ...Ve
], He = [
  {
    type: "entityAction",
    kind: "delete",
    alias: "Umb.EntityAction.MemberType.Delete",
    name: "Delete Member Type Entity Action",
    forEntityTypes: [n],
    meta: {
      detailRepositoryAlias: K,
      itemRepositoryAlias: x
    }
  },
  ...ve,
  ...We
], xe = [
  {
    type: "menuItem",
    kind: "tree",
    alias: "Umb.MenuItem.MemberTypes",
    name: "Member Type Menu Item",
    weight: 700,
    meta: {
      label: "Member Types",
      treeAlias: P,
      menus: ["Umb.Menu.StructureSettings"]
    }
  },
  {
    type: "workspaceContext",
    name: "Member Type Menu Structure Workspace Context",
    alias: "Umb.Context.MemberType.Menu.Structure",
    api: () => import("./member-type-menu-structure.context-C-slP3He.js"),
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
], Ke = [
  {
    type: "dataSourceDataMapping",
    alias: "Umb.DataSourceDataMapping.ManagementApi.MemberTypePropertyTypeReferenceResponse",
    name: "Member Type Property Type Reference Response Management Api Data Mapping",
    api: () => import("./member-type-property-type-reference-response.management-api.mapping-ihBSe_Gw.js"),
    forDataSource: I,
    forDataModel: "MemberTypePropertyTypeReferenceResponseModel"
  },
  {
    type: "entityItemRef",
    alias: "Umb.EntityItemRef.MemberTypePropertyType",
    name: "Member Type Property Type Entity Item Reference",
    element: () => import("./member-type-property-type-item-ref.element-t93TA-CW.js"),
    forEntityTypes: [F]
  }
], Fe = [...j, ...q, ...z], je = [
  {
    name: "Member Type Global Search",
    alias: J,
    type: "globalSearch",
    weight: 200,
    meta: {
      label: "Member Types",
      searchProviderAlias: O
    },
    conditions: [
      {
        alias: r,
        match: Z
      }
    ]
  }
], qe = [
  {
    name: "Member Type Search Provider",
    alias: O,
    type: "searchProvider",
    api: () => import("./member-type.search-provider-De4KmkEp.js"),
    weight: 200,
    meta: {
      label: "Member Types"
    }
  },
  {
    name: "Member Type Search Result Item",
    alias: "Umb.SearchResultItem.MemberType",
    type: "searchResultItem",
    forEntityTypes: [n]
  },
  ...je
], ze = [
  {
    type: "entityAction",
    kind: "reloadTreeItemChildren",
    alias: "Umb.EntityAction.MemberType.Tree.ReloadChildrenOf",
    name: "Reload Member Type Tree Item Children Entity Action",
    forEntityTypes: [a]
  }
], Je = [
  {
    type: "repository",
    alias: p,
    name: "Member Type Tree Repository",
    api: () => import("./member-type-tree.repository-CcFd_Fy-.js")
  },
  {
    type: "treeStore",
    alias: Q,
    name: "Member Type Tree Store",
    api: () => import("./member-type-tree.store-BtjcQzBn.js")
  },
  {
    type: "tree",
    kind: "default",
    alias: P,
    name: "Member Type Tree",
    meta: {
      repositoryAlias: p
    }
  },
  {
    type: "treeItem",
    kind: "default",
    alias: "Umb.TreeItem.MemberType",
    name: "Member Type Tree Item",
    forEntityTypes: [a, n]
  },
  {
    type: "workspace",
    kind: "default",
    alias: "Umb.Workspace.MemberType.Root",
    name: "Member Type Root Workspace",
    meta: {
      entityType: a,
      headline: "#treeHeaders_memberTypes"
    }
  },
  ...ze
], Qe = [
  {
    type: "workspace",
    kind: "routable",
    alias: m,
    name: "Member Type Workspace",
    api: () => import("./member-type-workspace.context-BNhrJLoL.js"),
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
      compositionRepositoryAlias: X
    },
    conditions: [
      {
        alias: e,
        match: m
      }
    ]
  },
  {
    type: "workspaceAction",
    kind: "default",
    alias: "Umb.WorkspaceAction.MemberType.Save",
    name: "Save Member Type Workspace Action",
    api: u,
    meta: {
      label: "#buttons_save",
      look: "primary",
      color: "positive"
    },
    conditions: [
      {
        alias: e,
        match: m
      }
    ]
  }
], Xe = [
  ...He,
  ...xe,
  ...Ke,
  ...Fe,
  ...qe,
  ...Je,
  ...Qe
], Ze = [
  {
    type: "sectionSidebarApp",
    kind: "menu",
    alias: "Umb.SectionSidebarApp.Menu.MemberManagement",
    name: "Member Management Menu Sidebar App",
    weight: 100,
    meta: {
      label: "#treeHeaders_member",
      menu: s
    },
    conditions: [
      {
        alias: "Umb.Condition.SectionAlias",
        match: i
      }
    ]
  }
], et = [
  {
    type: "menu",
    alias: s,
    name: "Member Management Menu"
  }
], tt = {
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
      alias: r,
      match: i
    }
  ]
}, at = [
  tt,
  ...Ze,
  ...et
], Rt = [
  ...Re,
  ...De,
  ...Ye,
  ...Xe,
  ...at
];
export {
  i as U,
  Rt as m
};
//# sourceMappingURL=manifests-vXHydB-k.js.map
