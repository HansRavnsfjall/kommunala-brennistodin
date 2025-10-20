import { a as y, b as h, c as U } from "./collection-action-button.element-TmHU9Eph.js";
import { U as u } from "./constants-BdzGok2s.js";
import { m as A } from "./manifests-CdGHZqd2.js";
import { U as s, m as T } from "./default.action.kind-Cyn-1n_n.js";
import { a as b, m as k, c as I } from "./constants-BttLQSIM.js";
import { m as _, U as l, c as r, d as $ } from "./constants-6ZrdBhnx.js";
import { m as C, a as p } from "./switch.condition-BRc-UvRa.js";
import { m as E } from "./manifest-BUE-nSaI.js";
import { m as L } from "./manifests-h5Jtzv0M.js";
import { UMB_WRITABLE_PROPERTY_CONDITION_ALIAS as B } from "@umbraco-cms/backoffice/property";
import { U as O, a as g } from "./constants-mZK85u7C.js";
import { a as w, U as M, m as z, e as R } from "./bulk-trash.action.kind-CdpI7m0a.js";
import { UMB_TREE_ITEM_DEFAULT_KIND_MANIFEST as S } from "@umbraco-cms/backoffice/tree";
import { c as N, a as K, m as D } from "./manifests-CG-Q4ypE.js";
import { UMB_CURRENT_USER_CONTEXT as P } from "@umbraco-cms/backoffice/current-user";
import { UmbConditionBase as c } from "@umbraco-cms/backoffice/extension-registry";
import { m as F } from "./manifests-FzOUH899.js";
import { U as v, a as j } from "./constants-CDwqkOdg.js";
import { b as W, h as x, i as Y, c as H, e as V, m as G, k as X } from "./sort-children-of-modal.token-CXKQZTL5.js";
import { UMB_ENTITY_ACTION_DEFAULT_KIND_MANIFEST as o } from "@umbraco-cms/backoffice/entity-action";
import { o as f, a as d, n as q, d as J } from "./workspace.element-CAJljmTw.js";
import "@umbraco-cms/backoffice/action";
import "@umbraco-cms/backoffice/observable-api";
import "@umbraco-cms/backoffice/class-api";
import "@umbraco-cms/backoffice/modal";
import "@umbraco-cms/backoffice/entity";
import "@umbraco-cms/backoffice/extension-api";
import "@umbraco-cms/backoffice/utils";
import "@umbraco-cms/backoffice/validation";
import "@umbraco-cms/backoffice/id";
import "@umbraco-cms/backoffice/variant";
const Z = [
  {
    type: "modal",
    alias: "Umb.Modal.AppAuth",
    name: "Umb App Auth Modal",
    element: () => import("./umb-app-auth-modal.element-sdBR0D5d.js")
  }
], Q = [
  {
    type: "authProvider",
    alias: "Umb.AuthProviders.Umbraco",
    name: "Umbraco login provider",
    forProviderName: "Umbraco",
    weight: 1e3,
    meta: {
      label: "Umbraco",
      defaultView: {
        icon: "icon-umbraco",
        look: "primary"
      }
    }
  }
], tt = [...Z, ...Q], it = [
  {
    type: "condition",
    name: "Collection Alias Condition",
    alias: y,
    api: () => import("./collection-alias.condition-pEdHH8TG.js")
  },
  /** @deprecated No longer used internally. This class will be removed in Umbraco 17. [LK] */
  {
    type: "condition",
    name: "Collection Bulk Action Permission Condition",
    alias: h,
    api: () => import("./collection-bulk-action-permission.condition-HByQ2FvB.js")
  }
], et = [
  {
    type: "kind",
    alias: "Umb.Kind.CollectionAction.Create",
    matchKind: "create",
    matchType: "collectionAction",
    manifest: {
      type: "collectionAction",
      kind: "create",
      element: () => import("./collection-create-action.element-CkPQzZuJ.js"),
      weight: 1200,
      meta: {
        label: "#actions_create"
      }
    }
  }
], at = {
  type: "kind",
  alias: "Umb.Kind.CollectionAction.Button",
  matchKind: "button",
  matchType: "collectionAction",
  manifest: {
    type: "collectionAction",
    kind: "button",
    element: U
  }
}, nt = [at, ...et], ot = [
  {
    type: "kind",
    alias: "Umb.Kind.WorkspaceView.Collection",
    matchKind: "collection",
    matchType: "workspaceView",
    manifest: {
      type: "workspaceView",
      kind: "collection",
      element: () => import("./collection-workspace-view.element-BSGEziPX.js"),
      meta: {
        label: "Collection",
        pathname: "collection",
        icon: "icon-layers"
      }
    }
  }
], st = [
  ...nt,
  ...ot,
  ...it
], mt = [
  {
    type: "repository",
    alias: u,
    name: "Cultures Repository",
    api: () => import("./culture.repository-DzCkYKoo.js")
  }
], ct = [...mt], lt = {
  type: "kind",
  alias: "Umb.Kind.EntityAction.Create",
  matchKind: "create",
  matchType: "entityAction",
  manifest: {
    ...s.manifest,
    type: "entityAction",
    kind: "create",
    api: () => import("./create.action-Cs49sHMB.js"),
    weight: 1200,
    forEntityTypes: [],
    meta: {
      icon: "icon-add",
      label: "#actions_create",
      additionalOptions: !0
    }
  }
}, rt = [
  {
    type: "modal",
    alias: b,
    name: "Entity Create Option Action List Modal",
    element: () => import("./entity-create-option-action-list-modal.element-DfPr1KKo.js")
  }
], pt = [lt, ...rt], ft = [T], dt = [k], yt = {
  type: "kind",
  alias: "Umb.Kind.EntityAction.Duplicate",
  matchKind: "duplicate",
  matchType: "entityAction",
  manifest: {
    ...s.manifest,
    type: "entityAction",
    kind: "duplicate",
    api: () => import("./duplicate.action-Ch8k5FLV.js"),
    weight: 650,
    forEntityTypes: [],
    meta: {
      icon: "icon-enter",
      label: "#actions_copy",
      additionalOptions: !0,
      treeRepositoryAlias: "",
      duplicateRepositoryAlias: ""
    }
  }
}, ht = [yt], Ut = {
  type: "condition",
  name: "Entity Has Children Condition",
  alias: I,
  api: () => import("./entity-has-children.condition-rHchBCbk.js")
}, ut = [Ut], At = [
  ...pt,
  ...ft,
  ...dt,
  ...ht,
  ...ut
], Tt = [_], bt = {
  type: "kind",
  alias: "Umb.Kind.EntityBulkAction.DuplicateTo",
  matchKind: "duplicateTo",
  matchType: "entityBulkAction",
  manifest: {
    ...l.manifest,
    type: "entityBulkAction",
    kind: "duplicateTo",
    api: () => import("./duplicate-to.action-JK-alLmO.js"),
    weight: 700,
    forEntityTypes: [],
    meta: {
      icon: "icon-enter",
      label: "#actions_copyTo",
      bulkDuplicateRepositoryAlias: "",
      treeAlias: ""
    }
  }
}, kt = [bt], It = {
  type: "kind",
  alias: "Umb.Kind.EntityBulkAction.MoveTo",
  matchKind: "moveTo",
  matchType: "entityBulkAction",
  manifest: {
    ...l.manifest,
    type: "entityBulkAction",
    kind: "moveTo",
    api: () => import("./move-to.action-CspSKMcB.js"),
    weight: 700,
    forEntityTypes: [],
    meta: {
      icon: "icon-enter",
      label: "#actions_move",
      bulkMoveRepositoryAlias: "",
      treeAlias: ""
    }
  }
}, _t = [It], $t = {
  type: "kind",
  alias: "Umb.Kind.EntityBulkAction.Trash",
  matchKind: r,
  matchType: "entityBulkAction",
  manifest: {
    ...l.manifest,
    type: "entityBulkAction",
    kind: r,
    api: () => import("./trash.action-BecWWVL_.js"),
    weight: 700,
    forEntityTypes: [],
    meta: {
      icon: "icon-trash",
      label: "#actions_trash",
      bulkTrashRepositoryAlias: ""
    }
  }
}, Ct = [$t], Et = [$], Lt = [
  ...Tt,
  ...kt,
  ..._t,
  ...Ct,
  ...Et
], Bt = [C], Ot = [...Bt], gt = [
  {
    type: "modal",
    alias: "Umb.Modal.IconPicker",
    name: "Icon Picker Modal",
    element: () => import("./icon-picker-modal.element-D2NHsvG3.js")
  }
], wt = [
  {
    type: "icons",
    alias: "Umb.Icons.Backoffice",
    name: "Backoffice Icons",
    js: () => import("./icons-z0-WaqBi.js")
  },
  {
    type: "globalContext",
    alias: "Umb.GlobalContext.Icons",
    name: "Icons Context",
    api: () => import("./icon-registry.context-NDQLtx6D.js").then((i) => i.i)
  },
  ...gt
], Mt = [
  {
    type: "localization",
    alias: "Umb.Localization.AR",
    weight: 100,
    name: "Arabic Backoffice UI Localization",
    meta: {
      culture: "ar"
    },
    js: () => import("./ar-CIx4AauS.js")
  },
  {
    type: "localization",
    alias: "Umb.Localization.BS",
    weight: 100,
    name: "Bosnian Backoffice UI Localization",
    meta: {
      culture: "bs"
    },
    js: () => import("./bs-CJe_99Pj.js")
  },
  {
    type: "localization",
    alias: "Umb.Localization.CS",
    weight: 100,
    name: "Czech Backoffice UI Localization",
    meta: {
      culture: "cs"
    },
    js: () => import("./cs-COV2ViI5.js")
  },
  {
    type: "localization",
    alias: "Umb.Localization.CY",
    weight: 100,
    name: "Welsh Backoffice UI Localization",
    meta: {
      culture: "cy"
    },
    js: () => import("./cy-Cs8l01tA.js")
  },
  {
    type: "localization",
    alias: "Umb.Localization.DA",
    weight: 100,
    name: "Danish Backoffice UI Localization",
    meta: {
      culture: "da"
    },
    js: () => import("./da-BqkLwhF5.js")
  },
  {
    type: "localization",
    alias: "Umb.Localization.DE",
    weight: 100,
    name: "German Backoffice UI Localization",
    meta: {
      culture: "de"
    },
    js: () => import("./de-Dduj7P9y.js")
  },
  {
    type: "localization",
    alias: "Umb.Localization.EN",
    weight: 100,
    name: "English (United Kingdom) Backoffice UI Localization",
    meta: {
      culture: "en"
    },
    js: () => import("./en-BHMrCyzc.js")
  },
  {
    type: "localization",
    alias: "Umb.Localization.EN_US",
    weight: 100,
    name: "English (United States) Backoffice UI Localization",
    meta: {
      culture: "en-US"
    },
    js: () => import("./en-us-Cc2eY9cU.js")
  },
  {
    type: "localization",
    alias: "Umb.Localization.ES",
    weight: 100,
    name: "Spanish Backoffice UI Localization",
    meta: {
      culture: "es"
    },
    js: () => import("./es-Dwcyx_Da.js")
  },
  {
    type: "localization",
    alias: "Umb.Localization.FR",
    weight: 100,
    name: "French Backoffice UI Localization",
    meta: {
      culture: "fr"
    },
    js: () => import("./fr-COapObbz.js")
  },
  {
    type: "localization",
    alias: "Umb.Localization.HE",
    weight: 100,
    name: "Hebrew Backoffice UI Localization",
    meta: {
      culture: "he"
    },
    js: () => import("./he-M9L8MNO_.js")
  },
  {
    type: "localization",
    alias: "Umb.Localization.HR",
    weight: 100,
    name: "Croatian Backoffice UI Localization",
    meta: {
      culture: "hr"
    },
    js: () => import("./hr-CzC46O19.js")
  },
  {
    type: "localization",
    alias: "Umb.Localization.IT",
    weight: 100,
    name: "Italian Backoffice UI Localization",
    meta: {
      culture: "it"
    },
    js: () => import("./it-BnDDqO8o.js")
  },
  {
    type: "localization",
    alias: "Umb.Localization.JA",
    weight: 100,
    name: "Japanese Backoffice UI Localization",
    meta: {
      culture: "ja"
    },
    js: () => import("./ja-Rf0d4bVw.js")
  },
  {
    type: "localization",
    alias: "Umb.Localization.KO",
    weight: 100,
    name: "Korean Backoffice UI Localization",
    meta: {
      culture: "ko"
    },
    js: () => import("./ko-BGR85Q3P.js")
  },
  {
    type: "localization",
    alias: "Umb.Localization.NB",
    weight: 100,
    name: "Norwegian Backoffice UI Localization",
    meta: {
      culture: "nb"
    },
    js: () => import("./nb-Bd5g8gsE.js")
  },
  {
    type: "localization",
    alias: "Umb.Localization.NL",
    weight: 100,
    name: "Dutch Backoffice UI Localization",
    meta: {
      culture: "nl"
    },
    js: () => import("./nl-Zy0wnjrR.js")
  },
  {
    type: "localization",
    alias: "Umb.Localization.PL",
    weight: 100,
    name: "Polish Backoffice UI Localization",
    meta: {
      culture: "pl"
    },
    js: () => import("./pl-DMfLuzzH.js")
  },
  {
    type: "localization",
    alias: "Umb.Localization.PT",
    weight: 100,
    name: "Portuguese Backoffice UI Localization",
    meta: {
      culture: "pt"
    },
    js: () => import("./pt-BDMct_Gn.js")
  },
  {
    type: "localization",
    alias: "Umb.Localization.PT_BR",
    weight: 100,
    name: "Portuguese (Brazil) Backoffice UI Localization",
    meta: {
      culture: "pt-BR"
    },
    js: () => import("./pt-br-CvTXYFkz.js")
  },
  {
    type: "localization",
    alias: "Umb.Localization.RO",
    weight: 100,
    name: "Romanian Backoffice UI Localization",
    meta: {
      culture: "ro"
    },
    js: () => import("./ro-DsjSztAV.js")
  },
  {
    type: "localization",
    alias: "Umb.Localization.RU",
    weight: 100,
    name: "Russian Backoffice UI Localization",
    meta: {
      culture: "ru"
    },
    js: () => import("./ru-DO_XQGMt.js")
  },
  {
    type: "localization",
    alias: "Umb.Localization.SV",
    weight: 100,
    name: "Swedish Backoffice UI Localization",
    meta: {
      culture: "sv"
    },
    js: () => import("./sv-DPtiqhJn.js")
  },
  {
    type: "localization",
    alias: "Umb.Localization.TR",
    weight: 100,
    name: "Turkish Backoffice UI Localization",
    meta: {
      culture: "tr"
    },
    js: () => import("./tr-DcwBJHOZ.js")
  },
  {
    type: "localization",
    alias: "Umb.Localization.UK",
    weight: 100,
    name: "Ukrainian Backoffice UI Localization",
    meta: {
      culture: "uk"
    },
    js: () => import("./uk-CDMubcHB.js")
  },
  {
    type: "localization",
    alias: "Umb.Localization.ZH",
    weight: 100,
    name: "Chinese Backoffice UI Localization",
    meta: {
      culture: "zh"
    },
    js: () => import("./zh-AGuZst2W.js")
  },
  {
    type: "localization",
    alias: "Umb.Localization.ZH_TW",
    weight: 100,
    name: "Chinese (Taiwan) Backoffice UI Localization",
    meta: {
      culture: "zh-TW"
    },
    js: () => import("./zh-tw-D-Y9C-lH.js")
  }
], zt = [
  {
    type: "kind",
    alias: "Umb.Kind.MenuItem.Link",
    matchKind: "link",
    matchType: "menuItem",
    manifest: {
      type: "menuItem",
      element: () => import("./link-menu-item.element-spes6dfY.js")
    }
  }
], Rt = [...zt];
class St extends p {
  constructor(a, n) {
    super(a, n), console.error(
      "Condition of alias `Umb.Condition.MenuAlias` is not implemented. Please report this issue if you where expecting this condition to work."
    );
  }
}
const Nt = {
  type: "condition",
  name: "Menu Alias Condition",
  alias: "Umb.Condition.MenuAlias",
  api: St
}, Kt = [
  ...Rt,
  Nt
], Dt = [
  {
    type: "modal",
    alias: "Umb.Modal.Confirm",
    name: "Confirm Modal",
    element: () => import("./confirm-modal.element-COhIMOef.js")
  }
], Pt = [
  {
    type: "modal",
    alias: "Umb.Modal.DiscardChanges",
    name: "Discard Changes Modal",
    element: () => import("./discard-changes-modal.element-DU89FGO1.js")
  }
], Ft = [
  {
    type: "modal",
    alias: "Umb.Modal.ItemPicker",
    name: "Item Picker Modal",
    element: () => import("./item-picker-modal.element-C7YdTiZH.js")
  }
], vt = [
  ...Dt,
  ...Pt,
  ...E,
  ...Ft
], jt = [...vt], Wt = [
  {
    type: "kind",
    alias: "Umb.Kind.PickerSearchResultItem.Default",
    matchKind: "default",
    matchType: "pickerSearchResultItem",
    manifest: {
      type: "pickerSearchResultItem",
      api: () => import("./default-picker-search-result-item.context-7tVujM-8.js").then((i) => i.d),
      element: () => import("./default-picker-search-result-item.element-BpS1umDH.js")
    }
  }
], xt = [...Wt], Yt = [...xt], Ht = [...Yt], Vt = [...L], Gt = [
  {
    type: "propertyAction",
    kind: "default",
    alias: "Umb.PropertyAction.Clear",
    name: "Clear Property Action",
    api: () => import("./property-action-clear.controller-DhGpNyz9.js"),
    forPropertyEditorUis: [],
    meta: {
      icon: "icon-trash",
      label: "Clear"
    },
    conditions: [
      {
        alias: B
      }
    ]
  },
  ...Vt
], Xt = [
  {
    type: "modal",
    alias: "Umb.Modal.PropertyEditorUiPicker",
    name: "Property Editor UI Picker Modal",
    element: () => import("./property-editor-ui-picker-modal.element-CkxgVfXw.js")
  }
], qt = [...Xt], Jt = [
  {
    type: "condition",
    name: "Property Has Value Condition",
    alias: O,
    api: () => import("./has-value.condition-Dat_d7Pb.js")
  }
], Zt = [
  {
    type: "condition",
    name: "Writable Property Condition",
    alias: g,
    api: () => import("./writable-property.condition-HRFJFx1i.js")
  }
], Qt = [...Jt, ...Zt], ti = [...Qt], ii = {
  type: "condition",
  name: "Entity Is trashed Condition",
  alias: w,
  api: () => import("./entity-is-trashed.condition-DeWO4zXA.js")
}, ei = {
  type: "condition",
  name: "Entity Is not trashed Condition",
  alias: M,
  api: () => import("./entity-is-not-trashed.condition-48W1keBU.js")
}, ai = [ii, ei], ni = {
  type: "kind",
  alias: "Umb.Kind.EntityAction.RecycleBin.Empty",
  matchKind: "emptyRecycleBin",
  matchType: "entityAction",
  manifest: {
    ...s.manifest,
    type: "entityAction",
    kind: "emptyRecycleBin",
    api: () => import("./empty-recycle-bin.action-CL03sClh.js"),
    weight: 100,
    forEntityTypes: [],
    meta: {
      icon: "icon-trash",
      label: "Empty Recycle Bin",
      additionalOptions: !0
    }
  }
}, oi = [ni], si = {
  type: "kind",
  alias: "Umb.Kind.EntityAction.RecycleBin.Restore",
  matchKind: "restoreFromRecycleBin",
  matchType: "entityAction",
  manifest: {
    ...s.manifest,
    type: "entityAction",
    kind: "restoreFromRecycleBin",
    api: () => import("./restore-from-recycle-bin.action-BcDOWexc.js"),
    weight: 100,
    forEntityTypes: [],
    meta: {
      icon: "icon-undo",
      label: "Restore",
      pickerModal: "",
      additionalOptions: !0
    }
  }
}, mi = [
  si,
  {
    type: "modal",
    alias: "Umb.Modal.RecycleBin.Restore",
    name: "Restore From Recycle Bin Modal",
    element: () => import("./restore-from-recycle-bin-modal.element-DOgZ0gFw.js")
  }
], ci = [z], li = [R], ri = [
  {
    type: "kind",
    alias: "Umb.Kind.TreeItem.RecycleBin",
    matchType: "treeItem",
    matchKind: "recycleBin",
    manifest: {
      ...S.manifest,
      type: "treeItem",
      kind: "recycleBin",
      api: () => import("./recycle-bin-tree-item.context-Az32iBqG.js")
    }
  }
], pi = [...ri], fi = [
  ...ai,
  ...oi,
  ...mi,
  ...ci,
  ...li,
  ...pi
];
class di extends p {
  constructor(a, n) {
    super(a, n);
    let e;
    this.config.match ? e = (t) => t === this.config.match : this.config.oneOf && (e = (t) => this.config.oneOf.indexOf(t) !== -1), e !== void 0 && this.consumeContext(N, (t) => {
      this.observe(
        t?.alias,
        (m) => {
          this.permitted = m ? e(m) : !1;
        },
        "observeAlias"
      );
    });
  }
}
const yi = Symbol();
class hi extends c {
  constructor(a, n) {
    super(a, n), this.consumeContext(P, (e) => {
      this.observe(
        e?.currentUser,
        (t) => {
          const m = t?.allowedSections ?? [];
          this.permitted = m.includes(this.config.match);
        },
        yi
      );
    });
  }
}
const Ui = [
  {
    type: "condition",
    name: "Section User Permission Condition",
    alias: K,
    api: hi
  },
  {
    type: "condition",
    name: "Section Alias Condition",
    alias: "Umb.Condition.SectionAlias",
    api: di
  }
], ui = [...D], Ai = [
  {
    type: "modal",
    alias: "Umb.Modal.SectionPicker",
    name: "Section Picker Modal",
    element: () => import("./section-picker-modal.element-CWp9mISy.js")
  },
  ...Ui,
  ...ui
], Ti = {
  type: "kind",
  alias: "Umb.Kind.EntityAction.ServerFile.Rename",
  matchKind: "renameServerFile",
  matchType: "entityAction",
  manifest: {
    ...s.manifest,
    type: "entityAction",
    kind: "renameServerFile",
    api: () => import("./rename-server-file.action-bL_Mh3mK.js").then((i) => i.r),
    weight: 200,
    forEntityTypes: [],
    meta: {
      icon: "icon-edit",
      label: "#actions_rename",
      additionalOptions: !0,
      renameRepositoryAlias: "",
      itemRepositoryAlias: ""
    }
  }
}, bi = [
  ...F,
  Ti
], ki = [...bi], Ii = [
  {
    type: "store",
    alias: v,
    name: "Temporary File Config Store",
    api: () => import("./config.store-CVJDS2rs.js")
  },
  {
    type: "repository",
    alias: j,
    name: "Temporary File Config Repository",
    api: () => import("./config.repository-BoHBgUwb.js")
  }
], _i = [...Ii], $i = [
  {
    type: "globalContext",
    alias: "Umb.GlobalContext.Theme",
    name: "Theme Context",
    api: () => import("./theme.context-XzjZ20Xg.js")
  },
  {
    type: "theme",
    alias: "umb-light-theme",
    name: "Light",
    weight: 300
  },
  {
    type: "theme",
    alias: "umb-dark-theme",
    name: "Dark (Experimental)",
    css: "/umbraco/backoffice/css/dark.theme.css",
    weight: 200
  },
  {
    type: "theme",
    alias: "umb-high-contrast-theme",
    name: "High contrast (Experimental)",
    css: "/umbraco/backoffice/css/high-contrast.theme.css",
    weight: 100
  }
], Ci = $i, Ei = {
  type: "kind",
  alias: "Umb.Kind.EntityAction.Folder.Create",
  matchKind: "folderCreate",
  matchType: "entityAction",
  manifest: {
    ...o.manifest,
    type: "entityAction",
    kind: "folderCreate",
    api: W,
    weight: 900,
    forEntityTypes: [],
    meta: {
      icon: "icon-add",
      label: "#actions_folderCreate",
      additionalOptions: !0
    }
  }
}, Li = {
  type: "kind",
  alias: "Umb.Kind.EntityAction.Folder.Delete",
  matchKind: "folderDelete",
  matchType: "entityAction",
  manifest: {
    ...o.manifest,
    type: "entityAction",
    kind: "folderDelete",
    api: x,
    weight: 700,
    forEntityTypes: [],
    meta: {
      icon: "icon-trash",
      label: "#actions_folderDelete",
      additionalOptions: !0
    }
  }
}, Bi = {
  type: "kind",
  alias: "Umb.Kind.EntityAction.Folder.Update",
  matchKind: "folderUpdate",
  matchType: "entityAction",
  manifest: {
    ...o.manifest,
    type: "entityAction",
    kind: "folderUpdate",
    api: Y,
    weight: 700,
    forEntityTypes: [],
    meta: {
      icon: "icon-edit",
      label: "#actions_folderRename",
      additionalOptions: !0
    }
  }
}, Oi = [
  Ei,
  Li,
  Bi
], gi = [
  {
    type: "kind",
    alias: "Umb.Kind.EntityCreateOptionAction.Folder.Create",
    matchKind: "folder",
    matchType: "entityCreateOptionAction",
    manifest: {
      type: "entityCreateOptionAction",
      kind: "folder",
      api: () => import("./folder-entity-create-option-action-DDPINnPV.js"),
      weight: 1,
      forEntityTypes: [],
      meta: {
        icon: "icon-folder",
        label: "#create_folder",
        description: "#create_folderDescription"
      }
    }
  }
], wi = [
  {
    type: "modal",
    alias: "Umb.Modal.Folder.Update",
    name: "Update Folder Modal",
    element: () => import("./folder-update-modal.element-lb_DUsFa.js")
  },
  {
    type: "modal",
    alias: "Umb.Modal.Folder.Create",
    name: "Create Folder Modal",
    element: () => import("./folder-create-modal.element-5mizfH9T.js")
  }
], Mi = [
  ...Oi,
  ...gi,
  ...wi
], zi = [
  {
    type: "kind",
    alias: "Umb.Kind.Tree.Default",
    matchKind: "default",
    matchType: "tree",
    manifest: {
      type: "tree",
      api: () => import("./default-tree.context-tDNpHXIy.js"),
      element: () => import("./default-tree.element-Bpzs0ILI.js")
    }
  }
], Ri = [
  {
    type: "modal",
    alias: "Umb.Modal.TreePicker",
    name: "Tree Picker Modal",
    element: () => import("./tree-picker-modal.element-C9k43EY_.js")
  }
], Si = [
  {
    type: "modal",
    alias: H,
    name: "Duplicate To Modal",
    element: () => import("./duplicate-to-modal.element-DrZPo4JI.js")
  }
], Ni = {
  type: "kind",
  alias: "Umb.Kind.EntityAction.DuplicateTo",
  matchKind: "duplicateTo",
  matchType: "entityAction",
  manifest: {
    ...o.manifest,
    type: "entityAction",
    kind: "duplicateTo",
    api: () => import("./duplicate-to.action-BktSnwKo.js"),
    weight: 600,
    forEntityTypes: [],
    meta: {
      icon: "icon-enter",
      label: "#actions_copyTo",
      additionalOptions: !0,
      treeRepositoryAlias: "",
      duplicateRepositoryAlias: "",
      treeAlias: ""
    }
  }
}, Ki = [Ni, ...Si], Di = {
  type: "kind",
  alias: "Umb.Kind.EntityAction.MoveTo",
  matchKind: "moveTo",
  matchType: "entityAction",
  manifest: {
    ...o.manifest,
    type: "entityAction",
    kind: "moveTo",
    api: () => import("./move-to.action-CiAfLsJN.js"),
    weight: 700,
    forEntityTypes: [],
    meta: {
      icon: "icon-enter",
      label: "#actions_move",
      additionalOptions: !0,
      treeRepositoryAlias: "",
      moveRepositoryAlias: "",
      treeAlias: ""
    }
  }
}, Pi = [Di], Fi = {
  type: "kind",
  alias: "Umb.Kind.EntityAction.Tree.ReloadChildrenOf",
  matchKind: "reloadTreeItemChildren",
  matchType: "entityAction",
  manifest: {
    ...o.manifest,
    type: "entityAction",
    kind: "reloadTreeItemChildren",
    api: () => import("./reload-tree-item-children.action-C0Xp9rFl.js"),
    weight: 0,
    forEntityTypes: [],
    meta: {
      icon: "icon-refresh",
      label: "#actions_refreshNode"
    }
  }
}, vi = [Fi], ji = [
  {
    type: "modal",
    alias: V,
    name: "Sort Children Of Modal",
    element: () => import("./sort-children-of-modal.element-Cs83_Yer.js")
  }
], Wi = [G, ...ji], xi = [
  ...Ki,
  ...Pi,
  ...vi,
  ...Wi
], Yi = [
  ...X,
  ...zi,
  ...xi,
  ...Mi,
  ...Ri
], Hi = {
  type: "kind",
  alias: "Umb.Kind.WorkspaceAction.Default",
  matchKind: "default",
  matchType: "workspaceAction",
  manifest: {
    type: "workspaceAction",
    kind: "default",
    weight: 1e3,
    element: () => import("./workspace-action-default-kind.element-DydonX5N.js"),
    meta: {
      label: "(Missing label in manifest)"
    }
  }
}, Vi = [Hi], Gi = [...Vi], Xi = {
  type: "kind",
  alias: "Umb.Kind.WorkspaceActionMenuItem.Default",
  matchKind: "default",
  matchType: "workspaceActionMenuItem",
  manifest: {
    type: "workspaceActionMenuItem",
    kind: "default",
    weight: 1e3,
    element: () => import("./workspace-action-menu-item.element-DROzaxYE.js"),
    meta: {
      icon: "",
      label: "(Missing label in manifest)"
    }
  }
}, qi = [Xi], Ji = [...qi], Zi = {
  type: "kind",
  alias: "Umb.Kind.WorkspaceFooterApp.MenuBreadcrumb",
  matchKind: "menuBreadcrumb",
  matchType: "workspaceFooterApp",
  manifest: {
    type: "workspaceFooterApp",
    kind: "menuBreadcrumb",
    element: () => import("./workspace-menu-breadcrumb.element-BmWPCUKF.js"),
    weight: 1e3
  }
}, Qi = {
  type: "kind",
  alias: "Umb.Kind.WorkspaceFooterApp.VariantMenuBreadcrumb",
  matchKind: "variantMenuBreadcrumb",
  matchType: "workspaceFooterApp",
  manifest: {
    type: "workspaceFooterApp",
    kind: "variantMenuBreadcrumb",
    element: () => import("./workspace-variant-menu-breadcrumb.element-BQXJ0YZU.js"),
    weight: 1e3
  }
}, te = [
  Zi,
  Qi
], ie = [
  ...Gi,
  ...Ji,
  ...te
], ee = [
  {
    type: "sectionRoute",
    alias: "Umb.SectionRoute.Workspace",
    name: "Workspace Section Route",
    element: () => import("./workspace.element-CAJljmTw.js").then((i) => i.E),
    api: () => import("./workspace-section-route.route-entry-CXFbsSuP.js")
  }
];
class ae extends c {
  constructor(a, n) {
    super(a, n);
    let e;
    if (this.config.match ? e = (t) => t.workspaceAlias === this.config.match : this.config.oneOf && (e = (t) => this.config.oneOf.indexOf(t.workspaceAlias) !== -1), e !== void 0)
      this.consumeContext(d, (t) => {
        t ? this.permitted = e(t) : this.permitted = !1;
      });
    else
      throw new Error(
        `Condition [UMB_WORKSPACE_CONDITION_ALIAS] (${f}) could not be initialized properly. Either "match" or "oneOf" must be defined.`
      );
  }
}
const ne = {
  type: "condition",
  name: "Workspace Alias Condition",
  alias: f,
  api: ae
};
class oe extends c {
  constructor(a, n) {
    super(a, n), this.consumeContext(d, (e) => {
      this.permitted = e?.getEntityType().toLowerCase() === this.config.match.toLowerCase();
    });
  }
}
const se = {
  type: "condition",
  name: "Workspace Entity Type Condition",
  alias: "Umb.Condition.WorkspaceEntityType",
  api: oe
}, me = Symbol();
class ce extends c {
  constructor(a, n) {
    super(a, n), this.consumeContext(J, (e) => {
      this.observe(
        e?.isNew,
        (t) => {
          t !== void 0 && (this.permitted = t === (this.config.match !== void 0 ? this.config.match : !0));
        },
        me
      );
    });
  }
}
const le = {
  type: "condition",
  name: "Workspace Entity Is New Condition",
  alias: q,
  api: ce
}, re = [
  le,
  ne,
  se
], pe = {
  type: "kind",
  alias: "Umb.Kind.Workspace.Routable",
  matchKind: "routable",
  matchType: "workspace",
  manifest: {
    type: "workspace",
    kind: "routable",
    element: () => import("./routable-workspace.element-DlGr4KOt.js")
  }
}, fe = [
  {
    type: "kind",
    alias: "Umb.Kind.Workspace.Default",
    matchKind: "default",
    matchType: "workspace",
    manifest: {
      type: "workspace",
      kind: "default",
      element: () => import("./default-workspace.element-DAs2xd_c.js"),
      api: () => import("./default-workspace.context-BlDeWTfK.js")
    }
  }
], de = [
  pe,
  ...fe
], ye = [
  {
    type: "modal",
    alias: "Umb.Modal.Workspace",
    name: "Workspace Modal",
    element: () => import("./workspace.element-CAJljmTw.js").then((i) => i.D)
  }
], he = [
  ...ie,
  ...ee,
  ...re,
  ...de,
  ...ye
], Ve = [
  ...tt,
  ...st,
  ...ct,
  ...A,
  ...At,
  ...Lt,
  ...Ot,
  ...wt,
  ...Mt,
  ...Kt,
  ...jt,
  ...Ht,
  ...Gt,
  ...qt,
  ...ti,
  ...fi,
  ...Ai,
  ...ki,
  ..._i,
  ...Ci,
  ...Yi,
  ...he
];
export {
  Ve as manifests
};
//# sourceMappingURL=manifests.js.map
