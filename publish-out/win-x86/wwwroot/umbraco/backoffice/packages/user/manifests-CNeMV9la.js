import { h as _, i as f, j as O, a as r, n as m, l, e as y, f as E, m as b, o as T, s as p, q as U } from "./constants-CCpPAcSy.js";
import { UMB_COLLECTION_ALIAS_CONDITION as t } from "@umbraco-cms/backoffice/collection";
import "@umbraco-cms/backoffice/external/backend-api";
import "@umbraco-cms/backoffice/id";
import "@umbraco-cms/backoffice/repository";
import "@umbraco-cms/backoffice/class-api";
import "@umbraco-cms/backoffice/resources";
import "@umbraco-cms/backoffice/management-api";
import "@umbraco-cms/backoffice/picker-input";
import { UMB_ENTITY_BULK_ACTION_DELETE_KIND as M } from "@umbraco-cms/backoffice/entity-bulk-action";
import { UMB_WORKSPACE_CONDITION_ALIAS as n, UmbSubmitWorkspaceAction as d } from "@umbraco-cms/backoffice/workspace";
import { X as L, s as P, n as I, p as N, b as k, o as i, w as $, x as B, y as g, z as h, A as w, B as C, C as D, D as G, E as W, e as a, Y as v, Q as S, M as R, d as e, W as Y, G as K, H as V, J as H, I as F, L as x, K as j, N as X, O as q, P as z, R as J, S as Q, T as c, V as A } from "./constants-DjdF3T-M.js";
import "@umbraco-cms/backoffice/notification";
import { UMB_SECTION_ALIAS_CONDITION_ALIAS as Z, UMB_SECTION_USER_PERMISSION_CONDITION_ALIAS as u } from "@umbraco-cms/backoffice/section";
import { U as ee, a as te, b as ie } from "./constants-D8nfzuQw.js";
import { UMB_CURRENT_USER_ALLOW_MFA_CONDITION_ALIAS as ae, UMB_CURRENT_USER_ALLOW_CHANGE_PASSWORD_CONDITION_ALIAS as ne, UMB_USER_ALLOW_CHANGE_PASSWORD_CONDITION_ALIAS as oe, UMB_USER_ENTITY_TYPE as se } from "@umbraco-cms/backoffice/user";
import { a as re } from "./constants-n-1VCZPV.js";
import "./input-user-permission-verb.element-vB_1t7Gv.js";
import "@umbraco-cms/backoffice/temporary-file";
import "@umbraco-cms/backoffice/localization-api";
import "@umbraco-cms/backoffice/external/rxjs";
const me = [
  {
    type: "repository",
    alias: _,
    name: "User Group Collection Repository",
    api: () => import("./user-group-collection.repository-D7izUDlz.js")
  }
], le = [
  {
    type: "collectionView",
    alias: f,
    name: "User Group Table Collection View",
    js: () => import("./user-group-table-collection-view.element-vEzhdnBH.js"),
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
], pe = [
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
], Ue = [
  {
    type: "collection",
    alias: r,
    name: "User Group Collection",
    api: () => import("./user-group-collection.context-scH653VA.js"),
    element: () => import("./user-group-collection.element-BPvnLtfV.js"),
    meta: {
      repositoryAlias: _
    }
  },
  ...me,
  ...le,
  ...pe
], ce = [
  {
    type: "entityAction",
    kind: "delete",
    alias: "Umb.EntityAction.UserGroup.Delete",
    name: "Delete User Group Entity Action",
    forEntityTypes: [y],
    meta: {
      detailRepositoryAlias: l,
      itemRepositoryAlias: m
    }
  }
], Ae = [
  {
    type: "entityBulkAction",
    kind: M,
    alias: "Umb.EntityBulkAction.UserGroup.Delete",
    name: "Delete User Group Entity Bulk Action",
    weight: 400,
    forEntityTypes: [y],
    meta: {
      itemRepositoryAlias: m,
      detailRepositoryAlias: l
    },
    conditions: [
      {
        alias: t,
        match: r
      }
    ]
  }
], o = "Umb.Menu.UserManagement", _e = [
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
], ye = [
  {
    type: "modal",
    alias: "Umb.Modal.UserGroupPicker",
    name: "User Group Picker Modal",
    element: () => import("./user-group-picker-modal.element-PB7scXSw.js")
  }
], Ee = [
  {
    type: "repository",
    alias: l,
    name: "User Group Detail Repository",
    api: () => import("./user-group-detail.repository-4lhMLid8.js")
  },
  {
    type: "store",
    alias: b,
    name: "User Group Detail Store",
    api: () => import("./user-group-detail.store-CbHR8Qh9.js")
  }
], de = [
  {
    type: "repository",
    alias: m,
    name: "User Group Item Repository",
    api: () => import("./user-group-item.repository-BLVLpNFx.js")
  },
  {
    type: "itemStore",
    alias: T,
    name: "User Group Item Store",
    api: () => import("./user-group-item.store-CKDY7ltH.js")
  }
], Ie = [...Ee, ...de], Ce = [
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
], Se = [
  {
    type: "workspace",
    kind: "routable",
    alias: U,
    name: "User Group Workspace",
    api: () => import("./user-group-workspace.context-DDHLQSzs.js"),
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
], Re = [...Se], ue = [
  ...Ue,
  ...ce,
  ...Ae,
  ..._e,
  ...ye,
  ...Ie,
  ...Ce,
  ...Re,
  {
    name: "User Group Backoffice Entry Point",
    alias: "Umb.EntryPoint.UserGroup",
    type: "backofficeEntryPoint",
    js: () => import("./entry-point-CyGhxasL.js")
  }
], fe = [...L], Oe = [
  {
    type: "repository",
    alias: P,
    name: "User Client Credentials Repository",
    api: () => import("./user-client-credential.repository-Bc-hPcN8.js")
  }
], be = [
  ...fe,
  ...Oe
], Te = [
  {
    type: "repository",
    alias: I,
    name: "User Collection Repository",
    api: () => import("./user-collection.repository-Dmq4bHXO.js")
  }
], Me = [
  {
    type: "collectionView",
    alias: N,
    name: "User Table Collection View",
    element: () => import("./user-table-collection-view.element-EAE3H90f.js"),
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
    element: () => import("./user-grid-collection-view.element-CtjWTCzW.js"),
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
], Le = [
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
], Pe = [
  {
    type: "collection",
    alias: i,
    name: "User Collection",
    api: () => import("./user-collection.context-C3osea_l.js"),
    element: () => import("./user-collection.element-WeBzjXrL.js"),
    meta: {
      repositoryAlias: I
    }
  },
  ...Te,
  ...Me,
  ...Le
], Ne = [
  {
    type: "condition",
    name: "User Allow Change Password Condition",
    alias: $,
    api: () => import("./user-allow-change-password-action.condition-CLfsXZ9l.js")
  },
  {
    type: "condition",
    name: "Current User Allow Change Password Condition",
    alias: B,
    api: () => import("./current-user-allow-change-password-action.condition-DYUE3s6v.js")
  }
], ke = [
  {
    type: "condition",
    name: "User Allow Delete Action Condition",
    alias: g,
    api: () => import("./user-allow-delete-action.condition-DcQESR1y.js")
  }
], $e = [
  {
    type: "condition",
    name: "User Allow Disable Action Condition",
    alias: h,
    api: () => import("./user-allow-disable-action.condition-BtkwGEqe.js")
  }
], Be = [
  {
    type: "condition",
    name: "User Allow Enable Action Condition",
    alias: "Umb.Condition.User.AllowEnableAction",
    api: () => import("./user-allow-enable-action.condition-RSdBfoo8.js")
  }
], ge = [
  {
    type: "condition",
    name: "User Allow ExternalLogin Action Condition",
    alias: w,
    api: () => import("./user-allow-external-login-action.condition-H65gldYE.js")
  }
], he = [
  {
    type: "condition",
    name: "User Allow Mfa Action Condition",
    alias: C,
    api: () => import("./user-allow-mfa-action.condition-ByT-5s2V.js")
  },
  {
    type: "condition",
    name: "Current User Allow Mfa Action Condition",
    alias: D,
    api: () => import("./current-user-allow-mfa-action.condition-M0fVylkC.js")
  }
], we = [
  {
    type: "condition",
    name: "User Allow Unlock Action Condition",
    alias: G,
    api: () => import("./user-allow-unlock-action.condition-CxSP7zcg.js")
  }
], De = [
  {
    type: "condition",
    name: "User Is Default Kind Condition",
    alias: W,
    api: () => import("./user-is-default-kind.condition-BY6EXcEN.js")
  }
], Ge = [
  ...Ne,
  ...ke,
  ...$e,
  ...Be,
  ...ge,
  ...he,
  ...we,
  ...De
], We = [
  {
    type: "entityCreateOptionAction",
    alias: "Umb.EntityCreateOptionAction.User.Api",
    name: "Api User Entity Create Option Action",
    weight: 1100,
    api: () => import("./api-user-entity-create-option-action-DuTAstcR.js"),
    forEntityTypes: [a],
    meta: {
      icon: "icon-unplug",
      label: "#user_userKindApi",
      additionalOptions: !0
    }
  }
], ve = [
  {
    type: "entityCreateOptionAction",
    alias: "Umb.EntityCreateOptionAction.User.Default",
    name: "Default User Entity Create Option Action",
    weight: 1200,
    api: () => import("./default-user-entity-create-option-action-A7YTaleX.js"),
    forEntityTypes: [a],
    meta: {
      icon: "icon-user",
      label: "#user_userKindDefault",
      additionalOptions: !0
    }
  }
], Ye = [
  {
    type: "entityAction",
    kind: "create",
    alias: "Umb.EntityAction.User.Create",
    name: "Create User Entity Action",
    forEntityTypes: [a]
  },
  ...We,
  ...ve,
  ...v
], Ke = [
  {
    type: "entityAction",
    kind: "delete",
    alias: "Umb.EntityAction.User.Delete",
    name: "Delete User Entity Action",
    forEntityTypes: [e],
    meta: {
      detailRepositoryAlias: R,
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
    api: () => import("./enable-user.action-BowxG3Pi.js"),
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
    api: () => import("./disable-user.action-BwaYHv66.js"),
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
    api: () => import("./unlock-user.action-CEK-mJAf.js"),
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
    api: () => import("./mfa-user.action-BXolivUs.js"),
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
], Ve = [...Ke, ...Ye], He = [
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
    api: () => import("./enable.action-CcHI-e3R.js"),
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
    api: () => import("./unlock.action-LXjozQYb.js"),
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
    api: () => import("./disable.action-DrormK3P.js"),
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
], Fe = [
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
], xe = [
  {
    type: "modal",
    alias: "Umb.Modal.User.Invite",
    name: "Invite User Modal",
    js: () => import("./user-invite-modal.element-kV6pZvGt.js")
  },
  {
    type: "modal",
    alias: "Umb.Modal.User.Invite.Resend",
    name: "Resend Invite to User Modal",
    js: () => import("./resend-invite-to-user-modal.element-4_LjWojE.js")
  }
], je = [
  {
    type: "repository",
    alias: Y,
    name: "Invite User Repository",
    api: () => import("./invite-user.repository-8XaSijAo.js")
  }
], Xe = [
  {
    type: "entityAction",
    kind: "default",
    alias: "Umb.EntityAction.User.Invite",
    name: "Invite User Entity Action",
    weight: 1e3,
    api: () => import("./invite-user-entity-action-WIWimomc.js"),
    forEntityTypes: [a],
    meta: {
      icon: "icon-paper-plane",
      label: "#user_invite",
      additionalOptions: !0
    }
  }
], qe = [
  {
    type: "entityAction",
    kind: "default",
    alias: "Umb.EntityAction.User.ResendInvite",
    name: "Resend Invite User Entity Action",
    weight: 500,
    api: () => import("./resend-invite.action-GDYbW_7Q.js"),
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
    api: () => import("./resend-invite.action.condition-CaxL2zQs.js")
  }
], ze = [
  ...Xe,
  ...qe
], Je = [
  ...Fe,
  ...xe,
  ...je,
  ...ze
], Qe = [
  {
    type: "entityItemRef",
    alias: "Umb.EntityItemRef.User",
    name: "User Entity Item Reference",
    element: () => import("./user-item-ref.element-Dh2fC3n7.js"),
    forEntityTypes: [e]
  }
], Ze = [
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
], et = [
  {
    type: "modal",
    alias: "Umb.Modal.User.Picker",
    name: "User Picker Modal",
    js: () => import("./user-picker-modal.element-pKtdRkEI.js")
  },
  {
    type: "modal",
    alias: "Umb.Modal.User.Mfa",
    name: "User Mfa Modal",
    js: () => import("./user-mfa-modal.element-NlV3wbsp.js")
  }
], tt = {
  type: "propertyEditorSchema",
  name: "User Picker",
  alias: "Umbraco.UserPicker",
  meta: {
    defaultPropertyEditorUiAlias: "Umb.PropertyEditorUi.UserPicker"
  }
}, it = [
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
  tt
], at = [...it], nt = [
  {
    type: "repository",
    alias: K,
    name: "User Avatar Repository",
    api: () => import("./user-avatar.repository-GV81JSsT.js")
  }
], ot = [
  {
    type: "repository",
    alias: V,
    name: "Change User Password Repository",
    api: () => import("./change-user-password.repository-CdtqNGOF.js")
  }
], st = [
  {
    type: "store",
    alias: H,
    name: "User Config Store",
    api: () => import("./user-config.store-gBcPCkFe.js")
  },
  {
    type: "repository",
    alias: F,
    name: "User Config Repository",
    api: () => import("./user-config.repository-C37bO5BY.js")
  },
  {
    type: "store",
    alias: x,
    name: "Current User Config Store",
    api: () => import("./current-user-config.store-DmtcguhH.js")
  },
  {
    type: "repository",
    alias: j,
    name: "Current User Config Repository",
    api: () => import("./current-user-config.repository-BY-g31A8.js")
  }
], rt = [
  {
    type: "repository",
    alias: R,
    name: "User Detail Repository",
    api: () => import("./user-detail.repository-Db4cKIbL.js")
  },
  {
    type: "store",
    alias: X,
    name: "User Detail Store",
    api: () => import("./user-detail.store-DtXZ8bTN.js")
  }
], mt = [
  {
    type: "repository",
    alias: q,
    name: "Disable User Repository",
    api: () => import("./disable-user.repository-BFwtUgqe.js")
  }
], lt = [
  {
    type: "repository",
    alias: z,
    name: "Disable User Repository",
    api: () => import("./enable-user.repository-CFnyra0-.js")
  }
], pt = [
  {
    type: "repository",
    alias: S,
    name: "User Item Repository",
    api: () => import("./user-item.repository-BUccegr5.js")
  },
  {
    type: "itemStore",
    alias: J,
    name: "User Item Store",
    api: () => import("./user-item.store-DaLIuJl2.js")
  }
], Ut = [
  {
    type: "repository",
    alias: Q,
    name: "Unlock User Repository",
    api: () => import("./unlock-user.repository-CPHXeFvf.js")
  }
], ct = [
  ...rt,
  ...pt,
  ...nt,
  ...ot,
  ...st,
  ...mt,
  ...lt,
  ...Ut
], At = [
  {
    type: "workspace",
    kind: "routable",
    alias: c,
    name: "User Workspace",
    api: () => import("./user-workspace.context-C4jEzfhd.js"),
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
], _t = [
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
], yt = [...At, ..._t], Et = [
  ...be,
  ...Pe,
  ...Ge,
  ...Ve,
  ...He,
  ...Je,
  ...Qe,
  ...Ze,
  ...et,
  ...at,
  ...ct,
  ...yt,
  {
    name: "User Backoffice Entry Point",
    alias: "Umb.EntryPoint.User",
    type: "backofficeEntryPoint",
    js: () => import("./entry-point-DBgsIKrb.js")
  }
], s = "Umb.Section.Users", dt = [
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
        alias: Z,
        match: s
      }
    ]
  }
], It = [
  {
    type: "menu",
    alias: o,
    name: "User Management Menu"
  }
], Ct = [
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
  ...dt,
  ...It
], St = {
  type: "kind",
  alias: "Umb.Kind.CurrentUserAction.Default",
  matchKind: "default",
  matchType: "currentUserAction",
  manifest: {
    type: "currentUserAction",
    kind: "default",
    elementName: "umb-current-user-app-button"
  }
}, Rt = {
  type: "condition",
  name: "Current user group id Condition",
  alias: ee,
  api: () => import("./group-id.condition-BY2jrlOk.js")
}, ut = {
  type: "condition",
  name: "Current user is admin Condition",
  alias: te,
  api: () => import("./is-admin.condition-BCUzuegL.js")
}, ft = [Rt, ut], Ot = [
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
], bt = [
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
], Tt = [
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
        alias: ae
      }
    ]
  }
], Mt = [
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
], Lt = [
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
        alias: ne
      }
    ]
  }
], Pt = [
  {
    type: "repository",
    alias: ie,
    name: "Current User Repository",
    api: () => import("./current-user.repository-CzsCrtUS.js")
  },
  {
    type: "store",
    alias: "Umb.Store.CurrentUser",
    name: "Current User Store",
    api: () => import("./current-user.store-D_gMea0d.js")
  }
], Nt = [
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
], kt = [
  {
    type: "globalContext",
    alias: "Umb.GlobalContext.CurrentUser",
    name: "Current User",
    api: () => import("./current-user.context-C_RaIxUa.js")
  },
  {
    type: "headerApp",
    alias: "Umb.HeaderApp.CurrentUser",
    name: "Current User",
    element: () => import("./current-user-header-app.element-D9cDh-hh.js"),
    weight: 0
  },
  St,
  ...ft,
  ...Ot,
  ...bt,
  ...Tt,
  ...Mt,
  ...Lt,
  ...Pt,
  ...Nt
], $t = [
  {
    type: "modal",
    alias: "Umb.Modal.EntityUserPermissionSettings",
    name: "Entity User Permission Settings Modal",
    js: () => import("./entity-user-permission-settings-modal.element-Beu2TnBN.js")
  }
], Bt = [...$t], gt = [
  {
    type: "condition",
    name: "User Fallback Permission Condition",
    alias: re,
    api: () => import("./fallback-user-permission.condition-c4JyUpaC.js")
  }
], ht = [...Bt, ...gt], wt = [
  {
    type: "entityAction",
    kind: "default",
    alias: "Umb.EntityAction.User.ChangePassword",
    name: "Change User Password Entity Action",
    weight: 600,
    api: () => import("./change-user-password.action-lRPUbEY3.js"),
    forEntityTypes: [se],
    meta: {
      icon: "icon-key",
      label: "#user_changePassword"
    },
    conditions: [
      {
        alias: "Umb.Condition.User.IsDefaultKind"
      },
      {
        alias: oe
      }
    ]
  }
], Dt = [
  {
    type: "modal",
    alias: "Umb.Modal.ChangePassword",
    name: "Change Password Modal",
    element: () => import("./change-password-modal.element-zsst8ztQ.js")
  }
], Gt = [...wt, ...Dt], si = [
  ...ue,
  ...Et,
  ...Ct,
  ...kt,
  ...ht,
  ...Gt
];
export {
  s as U,
  si as m
};
//# sourceMappingURL=manifests-CNeMV9la.js.map
