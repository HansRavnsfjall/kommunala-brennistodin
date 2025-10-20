import { h as _, i as f, j as O, a as r, n as l, l as m, e as y, f as E, m as b, o as T, s as p, q as U } from "./constants-jrjjZjNa.js";
import { UMB_COLLECTION_ALIAS_CONDITION as t } from "@umbraco-cms/backoffice/collection";
import "@umbraco-cms/backoffice/external/backend-api";
import "@umbraco-cms/backoffice/id";
import "@umbraco-cms/backoffice/repository";
import "@umbraco-cms/backoffice/class-api";
import "@umbraco-cms/backoffice/resources";
import "@umbraco-cms/backoffice/entity-item";
import "@umbraco-cms/backoffice/picker-input";
import { UMB_ENTITY_BULK_ACTION_DELETE_KIND as M } from "@umbraco-cms/backoffice/entity-bulk-action";
import { UMB_WORKSPACE_CONDITION_ALIAS as n, UmbSubmitWorkspaceAction as d } from "@umbraco-cms/backoffice/workspace";
import { W as L, s as N, n as R, p as P, b as k, o as i, v as $, w as B, x as g, y as h, z as w, A as C, B as D, C as G, D as W, e as a, X as v, P as S, L as I, d as e, V as Y, F as V, G as H, I as K, H as F, K as x, J as j, M as X, N as q, O as z, Q as J, R as Q, S as c, T as A } from "./constants-BH7VsFPT.js";
import "@umbraco-cms/backoffice/notification";
import { UMB_SECTION_USER_PERMISSION_CONDITION_ALIAS as u } from "@umbraco-cms/backoffice/section";
import { U as Z, a as ee, b as te } from "./constants-D8nfzuQw.js";
import { UMB_CURRENT_USER_ALLOW_MFA_CONDITION_ALIAS as ie, UMB_CURRENT_USER_ALLOW_CHANGE_PASSWORD_CONDITION_ALIAS as ae, UMB_USER_ALLOW_CHANGE_PASSWORD_CONDITION_ALIAS as ne, UMB_USER_ENTITY_TYPE as oe } from "@umbraco-cms/backoffice/user";
import "./input-entity-user-permission.element-BCtJBX6t.js";
import "./input-user-permission-verb.element-vB_1t7Gv.js";
import "@umbraco-cms/backoffice/temporary-file";
import "@umbraco-cms/backoffice/localization-api";
import "@umbraco-cms/backoffice/external/rxjs";
const se = [
  {
    type: "repository",
    alias: _,
    name: "User Group Collection Repository",
    api: () => import("./user-group-collection.repository-C6YjWsl5.js")
  }
], re = [
  {
    type: "collectionView",
    alias: f,
    name: "User Group Table Collection View",
    js: () => import("./user-group-table-collection-view.element-TJaK0_Eb.js"),
    meta: {
      label: "Table",
      icon: "icon-list",
      pathName: "table"
    },
    conditions: [
      {
        alias: t,
        match: "Umb.Collection.UserGroup"
      }
    ]
  }
], le = [
  {
    type: "collectionAction",
    kind: "button",
    name: "Create User Group Collection Action",
    alias: "Umb.CollectionAction.UserGroup.Create",
    weight: 200,
    meta: {
      label: "#general_create",
      href: `${O}/create`
    },
    conditions: [
      {
        alias: t,
        match: "Umb.Collection.UserGroup"
      }
    ]
  }
], me = [
  {
    type: "collection",
    alias: r,
    name: "User Group Collection",
    api: () => import("./user-group-collection.context-DI69eIf-.js"),
    element: () => import("./user-group-collection.element-R1aQh16p.js"),
    meta: {
      repositoryAlias: _
    }
  },
  ...se,
  ...re,
  ...le
], pe = [
  {
    type: "entityAction",
    kind: "delete",
    alias: "Umb.EntityAction.UserGroup.Delete",
    name: "Delete User Group Entity Action",
    forEntityTypes: [y],
    meta: {
      detailRepositoryAlias: m,
      itemRepositoryAlias: l
    }
  }
], Ue = [
  {
    type: "entityBulkAction",
    kind: M,
    alias: "Umb.EntityBulkAction.UserGroup.Delete",
    name: "Delete User Group Entity Bulk Action",
    weight: 400,
    forEntityTypes: [y],
    meta: {
      itemRepositoryAlias: l,
      detailRepositoryAlias: m
    },
    conditions: [
      {
        alias: t,
        match: r
      }
    ]
  }
], o = "Umb.Menu.UserManagement", ce = [
  {
    type: "menuItem",
    alias: "Umb.MenuItem.UserGroups",
    name: "User Groups Menu Item",
    weight: 100,
    meta: {
      label: "#user_usergroups",
      icon: "icon-users",
      entityType: E,
      menus: [o]
    }
  }
], Ae = [
  {
    type: "modal",
    alias: "Umb.Modal.UserGroupPicker",
    name: "User Group Picker Modal",
    element: () => import("./user-group-picker-modal.element-CKUTZdo8.js")
  }
], _e = [
  {
    type: "repository",
    alias: m,
    name: "User Group Detail Repository",
    api: () => import("./user-group-detail.repository-BfG3QhFr.js")
  },
  {
    type: "store",
    alias: b,
    name: "User Group Detail Store",
    api: () => import("./user-group-detail.store-BD1uYT3i.js")
  }
], ye = [
  {
    type: "repository",
    alias: l,
    name: "User Group Item Repository",
    api: () => import("./user-group-item.repository-7kZMvDIJ.js")
  },
  {
    type: "itemStore",
    alias: T,
    name: "User Group Item Store",
    api: () => import("./user-group-item.store-L_YejbQG.js")
  }
], Ee = [..._e, ...ye], de = [
  {
    type: "workspace",
    kind: "default",
    alias: p,
    name: "User Group Root Workspace View",
    meta: {
      entityType: E,
      headline: "#user_usergroups"
    }
  },
  {
    type: "workspaceView",
    kind: "collection",
    alias: "Umb.WorkspaceView.UserGroupRoot.Collection",
    name: "User Group Root Collection Workspace View",
    meta: {
      label: "Collection",
      pathname: "collection",
      icon: "icon-layers",
      collectionAlias: r
    },
    conditions: [
      {
        alias: n,
        match: p
      }
    ]
  }
], Re = [
  {
    type: "workspace",
    kind: "routable",
    alias: U,
    name: "User Group Workspace",
    api: () => import("./user-group-workspace.context-DK8EyHbY.js"),
    meta: {
      entityType: "user-group"
    }
  },
  {
    type: "workspaceAction",
    kind: "default",
    alias: "Umb.WorkspaceAction.UserGroup.Save",
    name: "Save User Group Workspace Action",
    api: d,
    meta: {
      label: "#buttons_save",
      look: "primary",
      color: "positive"
    },
    conditions: [
      {
        alias: n,
        match: U
      }
    ]
  }
], Ce = [...Re], Se = [
  ...me,
  ...pe,
  ...Ue,
  ...ce,
  ...Ae,
  ...Ee,
  ...de,
  ...Ce
], Ie = [...L], ue = [
  {
    type: "repository",
    alias: N,
    name: "User Client Credentials Repository",
    api: () => import("./user-client-credential.repository-Bc-hPcN8.js")
  }
], fe = [
  ...Ie,
  ...ue
], Oe = [
  {
    type: "repository",
    alias: R,
    name: "User Collection Repository",
    api: () => import("./user-collection.repository-CsIysBwS.js")
  }
], be = [
  {
    type: "collectionView",
    alias: P,
    name: "User Table Collection View",
    element: () => import("./user-table-collection-view.element-BpetLMuY.js"),
    meta: {
      label: "Table",
      icon: "icon-list",
      pathName: "table"
    },
    conditions: [
      {
        alias: t,
        match: "Umb.Collection.User"
      }
    ]
  },
  {
    type: "collectionView",
    alias: k,
    name: "User Grid Collection View",
    element: () => import("./user-grid-collection-view.element-6eTmHrUf.js"),
    weight: 200,
    meta: {
      label: "Grid",
      icon: "icon-grid",
      pathName: "grid"
    },
    conditions: [
      {
        alias: t,
        match: "Umb.Collection.User"
      }
    ]
  }
], Te = [
  {
    type: "collectionAction",
    kind: "create",
    name: "Create User Collection Action",
    alias: "Umb.CollectionAction.User.Create",
    conditions: [
      {
        alias: t,
        match: i
      }
    ]
  }
], Me = [
  {
    type: "collection",
    alias: i,
    name: "User Collection",
    api: () => import("./user-collection.context-5vQQgfTf.js"),
    element: () => import("./user-collection.element-Lfq2zIo0.js"),
    meta: {
      repositoryAlias: R
    }
  },
  ...Oe,
  ...be,
  ...Te
], Le = [
  {
    type: "condition",
    name: "User Allow Change Password Condition",
    alias: $,
    api: () => import("./user-allow-change-password-action.condition-Dax6tUZA.js")
  },
  {
    type: "condition",
    name: "Current User Allow Change Password Condition",
    alias: B,
    api: () => import("./current-user-allow-change-password-action.condition-CIDGOLFA.js")
  }
], Ne = [
  {
    type: "condition",
    name: "User Allow Delete Action Condition",
    alias: g,
    api: () => import("./user-allow-delete-action.condition-D2LO35an.js")
  }
], Pe = [
  {
    type: "condition",
    name: "User Allow Disable Action Condition",
    alias: h,
    api: () => import("./user-allow-disable-action.condition-DoA9FpaC.js")
  }
], ke = [
  {
    type: "condition",
    name: "User Allow Enable Action Condition",
    alias: "Umb.Condition.User.AllowEnableAction",
    api: () => import("./user-allow-enable-action.condition-DL55-b65.js")
  }
], $e = [
  {
    type: "condition",
    name: "User Allow ExternalLogin Action Condition",
    alias: w,
    api: () => import("./user-allow-external-login-action.condition-H65gldYE.js")
  }
], Be = [
  {
    type: "condition",
    name: "User Allow Mfa Action Condition",
    alias: C,
    api: () => import("./user-allow-mfa-action.condition-FmFmuF7B.js")
  },
  {
    type: "condition",
    name: "Current User Allow Mfa Action Condition",
    alias: D,
    api: () => import("./current-user-allow-mfa-action.condition-DSXQ9VE6.js")
  }
], ge = [
  {
    type: "condition",
    name: "User Allow Unlock Action Condition",
    alias: G,
    api: () => import("./user-allow-unlock-action.condition-CJYm-3ZG.js")
  }
], he = [
  {
    type: "condition",
    name: "User Is Default Kind Condition",
    alias: W,
    api: () => import("./user-is-default-kind.condition-Cm8AqQw7.js")
  }
], we = [
  ...Le,
  ...Ne,
  ...Pe,
  ...ke,
  ...$e,
  ...Be,
  ...ge,
  ...he
], De = [
  {
    type: "entityCreateOptionAction",
    alias: "Umb.EntityCreateOptionAction.User.Api",
    name: "Api User Entity Create Option Action",
    weight: 1100,
    api: () => import("./api-user-entity-create-option-action-B1VzU1JB.js"),
    forEntityTypes: [a],
    meta: {
      icon: "icon-unplug",
      label: "#user_userKindApi",
      additionalOptions: !0
    }
  }
], Ge = [
  {
    type: "entityCreateOptionAction",
    alias: "Umb.EntityCreateOptionAction.User.Default",
    name: "Default User Entity Create Option Action",
    weight: 1200,
    api: () => import("./default-user-entity-create-option-action-D8NPuOX5.js"),
    forEntityTypes: [a],
    meta: {
      icon: "icon-user",
      label: "#user_userKindDefault",
      additionalOptions: !0
    }
  }
], We = [
  {
    type: "entityAction",
    kind: "create",
    alias: "Umb.EntityAction.User.Create",
    name: "Create User Entity Action",
    forEntityTypes: [a]
  },
  ...De,
  ...Ge,
  ...v
], ve = [
  {
    type: "entityAction",
    kind: "delete",
    alias: "Umb.EntityAction.User.Delete",
    name: "Delete User Entity Action",
    forEntityTypes: [e],
    meta: {
      detailRepositoryAlias: I,
      itemRepositoryAlias: S
    },
    conditions: [
      {
        alias: "Umb.Condition.User.AllowDeleteAction"
      }
    ]
  },
  {
    type: "entityAction",
    kind: "default",
    alias: "Umb.EntityAction.User.Enable",
    name: "Enable User Entity Action",
    weight: 800,
    api: () => import("./enable-user.action-B62bW3B6.js"),
    forEntityTypes: [e],
    meta: {
      icon: "icon-check",
      label: "#actions_enable"
    },
    conditions: [
      {
        alias: "Umb.Condition.User.AllowEnableAction"
      }
    ]
  },
  {
    type: "entityAction",
    kind: "default",
    alias: "Umb.EntityAction.User.Disable",
    name: "Disable User Entity Action",
    weight: 700,
    api: () => import("./disable-user.action-BWGFqine.js"),
    forEntityTypes: [e],
    meta: {
      icon: "icon-block",
      label: "#actions_disable"
    },
    conditions: [
      {
        alias: "Umb.Condition.User.AllowDisableAction"
      }
    ]
  },
  {
    type: "entityAction",
    kind: "default",
    alias: "Umb.EntityAction.User.Unlock",
    name: "Unlock User Entity Action",
    weight: 600,
    api: () => import("./unlock-user.action-DislDsV9.js"),
    forEntityTypes: [e],
    meta: {
      icon: "icon-unlocked",
      label: "#actions_unlock"
    },
    conditions: [
      {
        alias: "Umb.Condition.User.AllowUnlockAction"
      }
    ]
  },
  {
    type: "entityAction",
    kind: "default",
    alias: "Umb.EntityAction.User.ConfigureMfa",
    name: "Configure MFA Entity Action",
    weight: 500,
    api: () => import("./mfa-user.action-CYSozw_t.js"),
    forEntityTypes: [e],
    meta: {
      icon: "icon-settings",
      label: "#user_configureMfa",
      additionalOptions: !0
    },
    conditions: [
      {
        alias: C
      }
    ]
  }
], Ye = [...ve, ...We], Ve = [
  /* TODO: Implement SetGroup entity action
  {
  	type: 'entityBulkAction',
  	alias: 'Umb.EntityBulkAction.User.SetGroup',
  	name: 'SetGroup User Entity Bulk Action',
  	weight: 400,
  	api: UmbSetGroupUserEntityBulkAction,
  	forEntityTypes: [UMB_USER_ENTITY_TYPE],
  	meta: {
  		label: 'SetGroup',
  	},
  	conditions: [
  		{
  			alias: UMB_COLLECTION_ALIAS_CONDITION,
  			match: UMB_USER_COLLECTION_ALIAS,
  		},
  	],
  },
  */
  {
    type: "entityBulkAction",
    alias: "Umb.EntityBulkAction.User.Enable",
    name: "Enable User Entity Bulk Action",
    weight: 300,
    api: () => import("./enable.action-BG97Y0mQ.js"),
    forEntityTypes: [e],
    meta: {
      label: "Enable"
    },
    conditions: [
      {
        alias: t,
        match: i
      }
    ]
  },
  {
    type: "entityBulkAction",
    alias: "Umb.EntityBulkAction.User.Unlock",
    name: "Unlock User Entity Bulk Action",
    weight: 200,
    api: () => import("./unlock.action-YI3Mtx2K.js"),
    forEntityTypes: [e],
    meta: {
      label: "Unlock"
    },
    conditions: [
      {
        alias: t,
        match: i
      }
    ]
  },
  {
    type: "entityBulkAction",
    alias: "Umb.EntityBulkAction.User.Disable",
    name: "Disable User Entity Bulk Action",
    weight: 100,
    api: () => import("./disable.action-BCYoScKk.js"),
    forEntityTypes: [e],
    meta: {
      label: "Disable"
    },
    conditions: [
      {
        alias: t,
        match: i
      }
    ]
  }
], He = [
  {
    type: "collectionAction",
    kind: "button",
    name: "Invite User Collection Action",
    alias: "Umb.CollectionAction.User.Invite",
    api: () => import("./invite-user.collection-action-CSRsQCN9.js"),
    weight: 100,
    meta: {
      label: "#user_invite",
      additionalOptions: !0
    },
    conditions: [
      {
        alias: t,
        match: "Umb.Collection.User"
      }
    ]
  }
], Ke = [
  {
    type: "modal",
    alias: "Umb.Modal.User.Invite",
    name: "Invite User Modal",
    js: () => import("./user-invite-modal.element-B3m6i_M8.js")
  },
  {
    type: "modal",
    alias: "Umb.Modal.User.Invite.Resend",
    name: "Resend Invite to User Modal",
    js: () => import("./resend-invite-to-user-modal.element-dSGCfp8k.js")
  }
], Fe = [
  {
    type: "repository",
    alias: Y,
    name: "Invite User Repository",
    api: () => import("./invite-user.repository-BozeSiv3.js")
  }
], xe = [
  {
    type: "entityAction",
    kind: "default",
    alias: "Umb.EntityAction.User.Invite",
    name: "Invite User Entity Action",
    weight: 1e3,
    api: () => import("./invite-user-entity-action-DbopseuU.js"),
    forEntityTypes: [a],
    meta: {
      icon: "icon-paper-plane",
      label: "#user_invite",
      additionalOptions: !0
    }
  }
], je = [
  {
    type: "entityAction",
    kind: "default",
    alias: "Umb.EntityAction.User.ResendInvite",
    name: "Resend Invite User Entity Action",
    weight: 500,
    api: () => import("./resend-invite.action-DTdzbdRY.js"),
    forEntityTypes: [e],
    meta: {
      icon: "icon-message",
      label: "#actions_resendInvite",
      additionalOptions: !0
    },
    conditions: [
      {
        alias: "Umb.Condition.User.AllowResendInviteAction"
      }
    ]
  },
  {
    type: "condition",
    name: "User Allow Resend Invite Action Condition",
    alias: "Umb.Condition.User.AllowResendInviteAction",
    api: () => import("./resend-invite.action.condition-CXkBf5Tj.js")
  }
], Xe = [
  ...xe,
  ...je
], qe = [
  ...He,
  ...Ke,
  ...Fe,
  ...Xe
], ze = [
  {
    type: "entityItemRef",
    alias: "Umb.EntityItemRef.User",
    name: "User Entity Item Reference",
    element: () => import("./user-item-ref.element-AfuQhWZT.js"),
    forEntityTypes: [e]
  }
], Je = [
  {
    type: "menuItem",
    alias: "Umb.MenuItem.Users",
    name: "Users Menu Item",
    weight: 200,
    meta: {
      label: "#treeHeaders_users",
      icon: "icon-user",
      entityType: a,
      menus: [o]
    }
  }
], Qe = [
  {
    type: "modal",
    alias: "Umb.Modal.User.Picker",
    name: "User Picker Modal",
    js: () => import("./user-picker-modal.element-AMd6yLO_.js")
  },
  {
    type: "modal",
    alias: "Umb.Modal.User.Mfa",
    name: "User Mfa Modal",
    js: () => import("./user-mfa-modal.element-BTPxvCH8.js")
  }
], Ze = {
  type: "propertyEditorSchema",
  name: "User Picker",
  alias: "Umbraco.UserPicker",
  meta: {
    defaultPropertyEditorUiAlias: "Umb.PropertyEditorUi.UserPicker"
  }
}, et = [
  {
    type: "propertyEditorUi",
    alias: "Umb.PropertyEditorUi.UserPicker",
    name: "User Picker Property Editor UI",
    element: () => import("./property-editor-ui-user-picker.element-Br_Kqh8v.js"),
    meta: {
      label: "User Picker",
      propertyEditorSchemaAlias: "Umbraco.UserPicker",
      icon: "icon-user",
      group: "people"
    }
  },
  Ze
], tt = [...et], it = [
  {
    type: "repository",
    alias: V,
    name: "User Avatar Repository",
    api: () => import("./user-avatar.repository-BB-a5rpL.js")
  }
], at = [
  {
    type: "repository",
    alias: H,
    name: "Change User Password Repository",
    api: () => import("./change-user-password.repository-BK8QbU9Y.js")
  }
], nt = [
  {
    type: "store",
    alias: K,
    name: "User Config Store",
    api: () => import("./user-config.store-D5KcelMK.js")
  },
  {
    type: "repository",
    alias: F,
    name: "User Config Repository",
    api: () => import("./user-config.repository-zfugHh_P.js")
  },
  {
    type: "store",
    alias: x,
    name: "Current User Config Store",
    api: () => import("./current-user-config.store-DHwG_Kdm.js")
  },
  {
    type: "repository",
    alias: j,
    name: "Current User Config Repository",
    api: () => import("./current-user-config.repository-DOpvOxyc.js")
  }
], ot = [
  {
    type: "repository",
    alias: I,
    name: "User Detail Repository",
    api: () => import("./user-detail.repository-DSXaFGBX.js")
  },
  {
    type: "store",
    alias: X,
    name: "User Detail Store",
    api: () => import("./user-detail.store-B6CRSOU2.js")
  }
], st = [
  {
    type: "repository",
    alias: q,
    name: "Disable User Repository",
    api: () => import("./disable-user.repository-CGbyNa9o.js")
  }
], rt = [
  {
    type: "repository",
    alias: z,
    name: "Disable User Repository",
    api: () => import("./enable-user.repository-DesGJJym.js")
  }
], lt = [
  {
    type: "repository",
    alias: S,
    name: "User Item Repository",
    api: () => import("./user-item.repository-CjZk039x.js")
  },
  {
    type: "itemStore",
    alias: J,
    name: "User Item Store",
    api: () => import("./user-item.store-tz32pmk2.js")
  }
], mt = [
  {
    type: "repository",
    alias: Q,
    name: "Unlock User Repository",
    api: () => import("./unlock-user.repository-B2In2o6H.js")
  }
], pt = [
  ...ot,
  ...lt,
  ...it,
  ...at,
  ...nt,
  ...st,
  ...rt,
  ...mt
], Ut = [
  {
    type: "workspace",
    kind: "routable",
    alias: c,
    name: "User Workspace",
    api: () => import("./user-workspace.context-Boh-sUUG.js"),
    meta: {
      entityType: e
    }
  },
  {
    type: "workspaceAction",
    kind: "default",
    alias: "Umb.WorkspaceAction.User.Save",
    name: "Save User Workspace Action",
    api: d,
    meta: {
      label: "#buttons_save",
      look: "primary",
      color: "positive"
    },
    conditions: [
      {
        alias: n,
        match: c
      }
    ]
  }
], ct = [
  {
    type: "workspace",
    kind: "default",
    alias: A,
    name: "User Root Workspace",
    meta: {
      entityType: a,
      headline: "#treeHeaders_users"
    }
  },
  {
    type: "workspaceView",
    kind: "collection",
    alias: "Umb.WorkspaceView.UserRoot.Collection",
    name: "User Root Collection Workspace View",
    meta: {
      label: "Collection",
      icon: "icon-layers",
      pathname: "collection",
      collectionAlias: i
    },
    conditions: [
      {
        alias: n,
        match: A
      }
    ]
  }
], At = [...Ut, ...ct], _t = [
  ...fe,
  ...Me,
  ...we,
  ...Ye,
  ...Ve,
  ...qe,
  ...ze,
  ...Je,
  ...Qe,
  ...tt,
  ...pt,
  ...At
], s = "Umb.Section.Users", yt = [
  {
    type: "sectionSidebarApp",
    kind: "menu",
    alias: "Umb.SectionSidebarApp.Menu.UserManagement",
    name: "User Management Menu Sidebar App",
    weight: 100,
    meta: {
      label: "#treeHeaders_users",
      menu: o
    },
    conditions: [
      {
        alias: "Umb.Condition.SectionAlias",
        match: s
      }
    ]
  }
], Et = [
  {
    type: "menu",
    alias: o,
    name: "User Management Menu"
  }
], dt = [
  {
    type: "section",
    alias: s,
    name: "User Management Section",
    weight: 600,
    meta: {
      label: "#sections_users",
      pathname: "user-management"
    },
    conditions: [
      {
        alias: u,
        match: s
      }
    ]
  },
  ...yt,
  ...Et
], Rt = {
  type: "kind",
  alias: "Umb.Kind.CurrentUserAction.Default",
  matchKind: "default",
  matchType: "currentUserAction",
  manifest: {
    type: "currentUserAction",
    kind: "default",
    elementName: "umb-current-user-app-button"
  }
}, Ct = {
  type: "condition",
  name: "Current user group id Condition",
  alias: Z,
  api: () => import("./group-id.condition-DGFTVzWm.js")
}, St = {
  type: "condition",
  name: "Current user is admin Condition",
  alias: ee,
  api: () => import("./is-admin.condition-BCUzuegL.js")
}, It = [Ct, St], ut = [
  {
    type: "modal",
    alias: "Umb.Modal.CurrentUserExternalLogin",
    name: "External Login Modal",
    element: () => import("./external-login-modal.element-NP8TQUbZ.js")
  },
  {
    type: "currentUserAction",
    kind: "default",
    alias: "Umb.CurrentUser.App.ExternalLoginProviders",
    name: "External Login Providers Current User App",
    weight: 700,
    api: () => import("./configure-external-login-providers-action-B-o6hnQm.js"),
    meta: {
      label: "#defaultdialogs_externalLoginProviders",
      icon: "icon-lock"
    },
    conditions: [
      {
        alias: "Umb.Condition.User.AllowExternalLoginAction"
      }
    ]
  }
], ft = [
  {
    type: "userProfileApp",
    alias: "Umb.UserProfileApp.CurrentUser.History",
    name: "Current User History User Profile App",
    element: () => import("./current-user-history-user-profile-app.element-BqV3tCoX.js"),
    weight: 100,
    meta: {
      label: "History",
      pathname: "history"
    }
  },
  {
    type: "store",
    alias: "Umb.Store.CurrentUser.History",
    name: "Current User History Store",
    api: () => import("./current-user-history.store-Ca48wRgT.js")
  }
], Ot = [
  {
    type: "currentUserAction",
    kind: "default",
    alias: "Umb.CurrentUser.App.MfaLoginProviders",
    name: "MFA Login Providers Current User App",
    weight: 800,
    api: () => import("./configure-mfa-providers-action-Cx92qByY.js"),
    meta: {
      label: "#user_configureTwoFactor",
      icon: "icon-rectangle-ellipsis"
    },
    conditions: [
      {
        alias: ie
      }
    ]
  }
], bt = [
  {
    type: "modal",
    alias: "Umb.Modal.CurrentUser",
    name: "Current User Modal",
    element: () => import("./current-user-modal.element-DWEqqTol.js")
  },
  {
    type: "modal",
    alias: "Umb.Modal.CurrentUserMfa",
    name: "Current User MFA Modal",
    element: () => import("./current-user-mfa-modal.element-z3hX78aU.js")
  },
  {
    type: "modal",
    alias: "Umb.Modal.CurrentUserMfaEnableProvider",
    name: "Current User MFA Enable Provider Modal",
    element: () => import("./current-user-mfa-enable-modal.element-BPZAvAJD.js")
  },
  {
    type: "modal",
    alias: "Umb.Modal.CurrentUserMfaDisableProvider",
    name: "Current User MFA Disable Provider Modal",
    element: () => import("./current-user-mfa-disable-modal.element-CAY9xfqt.js")
  }
], Tt = [
  {
    type: "userProfileApp",
    alias: "Umb.UserProfileApp.CurrentUser.Profile",
    name: "Current User Profile User Profile App",
    element: () => import("./current-user-profile-user-profile-app.element-C8PTx33S.js"),
    weight: 900,
    meta: {
      label: "Current User Profile User Profile App",
      pathname: "profile"
    }
  },
  {
    type: "currentUserAction",
    kind: "default",
    alias: "Umb.CurrentUser.Button.Edit",
    name: "Current User Edit Button",
    weight: 1e3,
    api: () => import("./edit-current-user.action-A2xXc5lJ.js"),
    meta: {
      label: "#general_edit",
      icon: "edit"
    },
    conditions: [
      {
        alias: u,
        match: "Umb.Section.Users"
      }
    ]
  },
  {
    type: "currentUserAction",
    kind: "default",
    alias: "Umb.CurrentUser.Button.ChangePassword",
    name: "Current User Change Password Button",
    weight: 900,
    api: () => import("./change-password-current-user.action-C9VA6Jpd.js"),
    meta: {
      label: "#general_changePassword",
      icon: "lock"
    },
    conditions: [
      {
        alias: ae
      }
    ]
  }
], Mt = [
  {
    type: "repository",
    alias: te,
    name: "Current User Repository",
    api: () => import("./current-user.repository-CzsCrtUS.js")
  },
  {
    type: "store",
    alias: "Umb.Store.CurrentUser",
    name: "Current User Store",
    api: () => import("./current-user.store-D_gMea0d.js")
  }
], Lt = [
  {
    type: "userProfileApp",
    alias: "Umb.UserProfileApp.CurrentUser.Theme",
    name: "Current User Theme User Profile App",
    element: () => import("./current-user-theme-user-profile-app.element-Be1l-n4d.js"),
    weight: 200,
    meta: {
      label: "Current User Theme User Profile App",
      pathname: "themes"
    }
  }
], Nt = [
  {
    type: "globalContext",
    alias: "Umb.GlobalContext.CurrentUser",
    name: "Current User",
    api: () => import("./current-user.context-CCTKdW5o.js")
  },
  {
    type: "headerApp",
    alias: "Umb.HeaderApp.CurrentUser",
    name: "Current User",
    element: () => import("./current-user-header-app.element-Bd9c-iTA.js"),
    weight: 0
  },
  Rt,
  ...It,
  ...ut,
  ...ft,
  ...Ot,
  ...bt,
  ...Tt,
  ...Mt,
  ...Lt
], Pt = [
  {
    type: "modal",
    alias: "Umb.Modal.EntityUserPermissionSettings",
    name: "Entity User Permission Settings Modal",
    js: () => import("./entity-user-permission-settings-modal.element-Beu2TnBN.js")
  }
], kt = [...Pt], $t = [...kt], Bt = [
  {
    type: "entityAction",
    kind: "default",
    alias: "Umb.EntityAction.User.ChangePassword",
    name: "Change User Password Entity Action",
    weight: 600,
    api: () => import("./change-user-password.action-lRPUbEY3.js"),
    forEntityTypes: [oe],
    meta: {
      icon: "icon-key",
      label: "#user_changePassword"
    },
    conditions: [
      {
        alias: "Umb.Condition.User.IsDefaultKind"
      },
      {
        alias: ne
      }
    ]
  }
], gt = [
  {
    type: "modal",
    alias: "Umb.Modal.ChangePassword",
    name: "Change Password Modal",
    element: () => import("./change-password-modal.element-zsst8ztQ.js")
  }
], ht = [...Bt, ...gt], ai = [
  ...Se,
  ..._t,
  ...dt,
  ...Nt,
  ...$t,
  ...ht
];
export {
  s as U,
  ai as m
};
//# sourceMappingURL=manifests--oECtQmU.js.map
