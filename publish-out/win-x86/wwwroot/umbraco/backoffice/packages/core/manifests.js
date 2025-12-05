import { a as d, b as y, c as U } from "./collection-action-button.element-TmHU9Eph.js";
import { U as u } from "./constants-BdzGok2s.js";
import { m as h } from "./manifests-CdGHZqd2.js";
import { U as s, m as b } from "./default.action.kind-Cyn-1n_n.js";
import { a as I, m as A, c as T } from "./constants-BttLQSIM.js";
import { m as k, U as l, c as r, d as _ } from "./constants-C1sC3ASt.js";
import { U as L, a as z } from "./constants-aX8eGL-y.js";
import { m as C, a as $ } from "./switch.condition-BRc-UvRa.js";
import { m as E } from "./manifest-BUE-nSaI.js";
import { m as B } from "./manifests-h5Jtzv0M.js";
import { UMB_WRITABLE_PROPERTY_CONDITION_ALIAS as S } from "@umbraco-cms/backoffice/property";
import { U as O, a as R } from "./constants-mZK85u7C.js";
import { a as N, U as M, m as K, e as D } from "./bulk-trash.action.kind-9Ooy_hJp.js";
import { UMB_TREE_ITEM_DEFAULT_KIND_MANIFEST as g } from "@umbraco-cms/backoffice/tree";
import { a as w, b as P, c as F, m as v } from "./manifests-DF6A9HCG.js";
import { UmbConditionBase as c } from "@umbraco-cms/backoffice/extension-registry";
import { UMB_CURRENT_USER_CONTEXT as j } from "@umbraco-cms/backoffice/current-user";
import { m as W } from "./manifests-FzOUH899.js";
import { U as x, a as H } from "./constants-CDwqkOdg.js";
import { c as Y, e as G, m as V, b as J, f as Z, g as X, k as q } from "./update-folder.action-COxnl6zu.js";
import { UMB_ENTITY_ACTION_DEFAULT_KIND_MANIFEST as o } from "@umbraco-cms/backoffice/entity-action";
import { U as p, e as f, c as Q, f as tt, g as it } from "./constants-CUqy5m1J.js";
const et = [
  {
    type: "modal",
    alias: "Umb.Modal.AppAuth",
    name: "Umb App Auth Modal",
    element: () => import("./umb-app-auth-modal.element-4WZo_fcs.js")
  },
  {
    type: "modal",
    alias: "Umb.Modal.AuthTimeout",
    name: "Umb Auth Timeout Modal",
    element: () => import("./umb-auth-timeout-modal.element-B_UqWRyP.js")
  }
], at = [
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
], nt = [...et, ...at], ot = [
  {
    type: "condition",
    name: "Collection Alias Condition",
    alias: d,
    api: () => import("./collection-alias.condition-pEdHH8TG.js")
  },
  /** @deprecated No longer used internally. This class will be removed in Umbraco 17. [LK] */
  {
    type: "condition",
    name: "Collection Bulk Action Permission Condition",
    alias: y,
    api: () => import("./collection-bulk-action-permission.condition-HByQ2FvB.js")
  }
], st = [
  {
    type: "kind",
    alias: "Umb.Kind.CollectionAction.Create",
    matchKind: "create",
    matchType: "collectionAction",
    manifest: {
      type: "collectionAction",
      kind: "create",
      element: () => import("./collection-create-action.element-C6F2mRL7.js"),
      weight: 1200,
      meta: {
        label: "#actions_createFor"
      }
    }
  }
], ct = {
  type: "kind",
  alias: "Umb.Kind.CollectionAction.Button",
  matchKind: "button",
  matchType: "collectionAction",
  manifest: {
    type: "collectionAction",
    kind: "button",
    element: U
  }
}, mt = [ct, ...st], lt = [
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
], rt = [
  ...mt,
  ...lt,
  ...ot
], pt = [
  {
    type: "repository",
    alias: u,
    name: "Cultures Repository",
    api: () => import("./culture.repository-DzCkYKoo.js")
  }
], ft = [...pt], dt = {
  type: "kind",
  alias: "Umb.Kind.EntityAction.Create",
  matchKind: "create",
  matchType: "entityAction",
  manifest: {
    ...s.manifest,
    type: "entityAction",
    kind: "create",
    api: () => import("./create.action-Bzx12CJb.js"),
    weight: 1200,
    forEntityTypes: [],
    meta: {
      icon: "icon-add",
      label: "#actions_createFor",
      additionalOptions: !0
    }
  }
}, yt = [
  {
    type: "modal",
    alias: I,
    name: "Entity Create Option Action List Modal",
    element: () => import("./entity-create-option-action-list-modal.element-DfPr1KKo.js")
  }
], Ut = [dt, ...yt], ut = [b], ht = [A], bt = {
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
}, It = [bt], At = {
  type: "condition",
  name: "Entity Has Children Condition",
  alias: T,
  api: () => import("./entity-has-children.condition-rHchBCbk.js")
}, Tt = [At], kt = [
  ...Ut,
  ...ut,
  ...ht,
  ...It,
  ...Tt
], _t = [k], Lt = {
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
}, zt = [Lt], Ct = {
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
}, $t = [Ct], Et = {
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
}, Bt = [Et], St = [_], Ot = [
  ..._t,
  ...zt,
  ...$t,
  ...Bt,
  ...St
], Rt = [
  {
    type: "condition",
    name: "Umbraco Entity Type Condition",
    alias: L,
    api: () => import("./entity-type.condition-BGBIgS0c.js")
  }
], Nt = [
  {
    type: "condition",
    name: "Umbraco Entity Unique Condition",
    alias: z,
    api: () => import("./entity-unique.condition-Co_kzpha.js")
  }
], Mt = [...Rt, ...Nt], Kt = [
  {
    type: "kind",
    alias: "Umb.Kind.EntitySign.Icon",
    matchKind: "icon",
    matchType: "entitySign",
    manifest: {
      type: "entitySign",
      kind: "icon",
      element: () => import("./entity-sign-icon.element-DunMvZQz.js"),
      api: () => import("./entity-sign-icon.api-Od5KX8PD.js")
    }
  }
], Dt = [...Kt], gt = [...Dt], wt = [C], Pt = [...wt], Ft = [
  {
    type: "modal",
    alias: "Umb.Modal.IconPicker",
    name: "Icon Picker Modal",
    element: () => import("./icon-picker-modal.element-HOn83zQK.js")
  }
], vt = [
  {
    type: "icons",
    alias: "Umb.Icons.Backoffice",
    name: "Backoffice Icons",
    js: () => import("./icons-CRjZSiKg.js")
  },
  {
    type: "globalContext",
    alias: "Umb.GlobalContext.Icons",
    name: "Icons Context",
    api: () => import("./icon-registry.context-NDQLtx6D.js").then((e) => e.i)
  },
  ...Ft
], jt = [
  {
    type: "localization",
    alias: "Umb.Localization.AR",
    name: "Arabic Backoffice UI Localization",
    meta: { culture: "ar" },
    js: () => import("./ar-_6ciCY7s.js")
  },
  {
    type: "localization",
    alias: "Umb.Localization.BS",
    name: "Bosnian Backoffice UI Localization",
    meta: { culture: "bs" },
    js: () => import("./bs-ajMOPRsK.js")
  },
  {
    type: "localization",
    alias: "Umb.Localization.CS",
    name: "Czech Backoffice UI Localization",
    meta: { culture: "cs" },
    js: () => import("./cs-Cel_4GPG.js")
  },
  {
    type: "localization",
    alias: "Umb.Localization.CS_CZ",
    name: "Czech (Czechia) Backoffice UI Localization",
    meta: { culture: "cs-CZ" }
  },
  {
    type: "localization",
    alias: "Umb.Localization.CY",
    name: "Welsh Backoffice UI Localization",
    meta: { culture: "cy" },
    js: () => import("./cy-DtbuhyKy.js")
  },
  {
    type: "localization",
    alias: "Umb.Localization.CY_GB",
    name: "Welsh (UK) Backoffice UI Localization",
    meta: { culture: "cy-GB" }
  },
  {
    type: "localization",
    alias: "Umb.Localization.DA",
    name: "Danish Backoffice UI Localization",
    meta: { culture: "da" },
    js: () => import("./da-DDI7cSZn.js")
  },
  {
    type: "localization",
    alias: "Umb.Localization.DA-DK",
    name: "Danish (Denmark) Backoffice UI Localization",
    meta: { culture: "da-DK" }
  },
  {
    type: "localization",
    alias: "Umb.Localization.DE",
    name: "German Backoffice UI Localization",
    meta: { culture: "de" },
    js: () => import("./de-DBVJuArv.js")
  },
  {
    type: "localization",
    alias: "Umb.Localization.DE_DE",
    name: "German (Germany) Backoffice UI Localization",
    meta: { culture: "de-DE" }
  },
  {
    type: "localization",
    alias: "Umb.Localization.DE_CH",
    name: "German (Switzerland) Backoffice UI Localization",
    meta: { culture: "de-CH" }
  },
  {
    type: "localization",
    alias: "Umb.Localization.EN",
    name: "English (United Kingdom) Backoffice UI Localization",
    meta: { culture: "en" },
    js: () => import("./en-DrfHY0ik.js")
  },
  {
    type: "localization",
    alias: "Umb.Localization.EN_US",
    name: "English (United States) Backoffice UI Localization",
    meta: { culture: "en-US" },
    js: () => import("./en-us-Cc2eY9cU.js")
  },
  {
    type: "localization",
    alias: "Umb.Localization.ES",
    name: "Spanish Backoffice UI Localization",
    meta: { culture: "es" },
    js: () => import("./es-Dx9gjrGh.js")
  },
  {
    type: "localization",
    alias: "Umb.Localization.ES_ES",
    name: "Spanish (Spain) Backoffice UI Localization",
    meta: { culture: "es-ES" }
  },
  {
    type: "localization",
    alias: "Umb.Localization.FR",
    name: "French Backoffice UI Localization",
    meta: { culture: "fr" },
    js: () => import("./fr-DpaOQ0Ro.js")
  },
  {
    type: "localization",
    alias: "Umb.Localization.FR_FR",
    name: "French (France) Backoffice UI Localization",
    meta: { culture: "fr-FR" }
  },
  {
    type: "localization",
    alias: "Umb.Localization.FR_CH",
    name: "French (Switzerland) Backoffice UI Localization",
    meta: { culture: "fr-CH" }
  },
  {
    type: "localization",
    alias: "Umb.Localization.HE",
    name: "Hebrew Backoffice UI Localization",
    meta: { culture: "he" },
    js: () => import("./he-M9L8MNO_.js")
  },
  {
    type: "localization",
    alias: "Umb.Localization.HE_IL",
    name: "Hebrew (Israel) Backoffice UI Localization",
    meta: { culture: "he-IL" }
  },
  {
    type: "localization",
    alias: "Umb.Localization.HR",
    name: "Croatian Backoffice UI Localization",
    meta: { culture: "hr" },
    js: () => import("./hr-BDgNejur.js")
  },
  {
    type: "localization",
    alias: "Umb.Localization.HR_HR",
    name: "Croatian (Croatia) Backoffice UI Localization",
    meta: { culture: "hr-HR" }
  },
  {
    type: "localization",
    alias: "Umb.Localization.IT",
    name: "Italian Backoffice UI Localization",
    meta: { culture: "it" },
    js: () => import("./it-DDE5rECg.js")
  },
  {
    type: "localization",
    alias: "Umb.Localization.IT_IT",
    name: "Italian (Italy) Backoffice UI Localization",
    meta: { culture: "it-IT" }
  },
  {
    type: "localization",
    alias: "Umb.Localization.IT_CH",
    name: "Italian (Switzerland) Backoffice UI Localization",
    meta: { culture: "it-CH" }
  },
  {
    type: "localization",
    alias: "Umb.Localization.JA",
    name: "Japanese Backoffice UI Localization",
    meta: { culture: "ja" },
    js: () => import("./ja-Rf0d4bVw.js")
  },
  {
    type: "localization",
    alias: "Umb.Localization.JA_JP",
    name: "Japanese (Japan) Backoffice UI Localization",
    meta: { culture: "ja-JP" }
  },
  {
    type: "localization",
    alias: "Umb.Localization.KO",
    name: "Korean Backoffice UI Localization",
    meta: { culture: "ko" },
    js: () => import("./ko-BGR85Q3P.js")
  },
  {
    type: "localization",
    alias: "Umb.Localization.KO_KR",
    name: "Korean (Korea) Backoffice UI Localization",
    meta: { culture: "ko-KR" }
  },
  {
    type: "localization",
    alias: "Umb.Localization.NB",
    name: "Norwegian Backoffice UI Localization",
    meta: { culture: "nb" },
    js: () => import("./nb-BrjvaFw-.js")
  },
  {
    type: "localization",
    alias: "Umb.Localization.NB_NO",
    name: "Norwegian (Norway) Backoffice UI Localization",
    meta: { culture: "nb-NO" }
  },
  {
    type: "localization",
    alias: "Umb.Localization.NL",
    name: "Dutch Backoffice UI Localization",
    meta: { culture: "nl" },
    js: () => import("./nl-CeVhUGqI.js")
  },
  {
    type: "localization",
    alias: "Umb.Localization.NL_NL",
    name: "Dutch (Netherlands) Backoffice UI Localization",
    meta: { culture: "nl-NL" }
  },
  {
    type: "localization",
    alias: "Umb.Localization.PL",
    name: "Polish Backoffice UI Localization",
    meta: { culture: "pl" },
    js: () => import("./pl-DMfLuzzH.js")
  },
  {
    type: "localization",
    alias: "Umb.Localization.PL_PL",
    name: "Polish (Poland) Backoffice UI Localization",
    meta: { culture: "pl-PL" }
  },
  {
    type: "localization",
    alias: "Umb.Localization.PT",
    name: "Portuguese Backoffice UI Localization",
    meta: { culture: "pt" },
    js: () => import("./pt-zDg4UyMF.js")
  },
  {
    type: "localization",
    alias: "Umb.Localization.PT_BR",
    name: "Portuguese (Brazil) Backoffice UI Localization",
    meta: { culture: "pt-BR" },
    js: () => import("./pt-br-DvdAZVEf.js")
  },
  {
    type: "localization",
    alias: "Umb.Localization.RO",
    name: "Romanian Backoffice UI Localization",
    meta: { culture: "ro" },
    js: () => import("./ro-DsjSztAV.js")
  },
  {
    type: "localization",
    alias: "Umb.Localization.RO_RO",
    name: "Romanian (Romania) Backoffice UI Localization",
    meta: { culture: "ro-RO" }
  },
  {
    type: "localization",
    alias: "Umb.Localization.RU",
    name: "Russian Backoffice UI Localization",
    meta: { culture: "ru" },
    js: () => import("./ru-DO_XQGMt.js")
  },
  {
    type: "localization",
    alias: "Umb.Localization.RU_RU",
    name: "Russian (Russia) Backoffice UI Localization",
    meta: { culture: "ru-RU" }
  },
  {
    type: "localization",
    alias: "Umb.Localization.SV",
    name: "Swedish Backoffice UI Localization",
    meta: { culture: "sv" },
    js: () => import("./sv-DpbG0d70.js")
  },
  {
    type: "localization",
    alias: "Umb.Localization.SV_SE",
    name: "Swedish (Sweden) Backoffice UI Localization",
    meta: { culture: "sv-SE" }
  },
  {
    type: "localization",
    alias: "Umb.Localization.TR",
    name: "Turkish Backoffice UI Localization",
    meta: { culture: "tr" },
    js: () => import("./tr-CIHK60bY.js")
  },
  {
    type: "localization",
    alias: "Umb.Localization.TR_TR",
    name: "Turkish (Türkiye) Backoffice UI Localization",
    meta: { culture: "tr-TR" }
  },
  {
    type: "localization",
    alias: "Umb.Localization.UK",
    name: "Ukrainian Backoffice UI Localization",
    meta: { culture: "uk" },
    js: () => import("./uk-CDMubcHB.js")
  },
  {
    type: "localization",
    alias: "Umb.Localization.UK_UA",
    name: "Ukrainian (Ukraine) Backoffice UI Localization",
    meta: { culture: "uk-UA" }
  },
  {
    type: "localization",
    alias: "Umb.Localization.ZH",
    name: "Chinese Backoffice UI Localization",
    meta: { culture: "zh" },
    js: () => import("./zh-AGuZst2W.js")
  },
  {
    type: "localization",
    alias: "Umb.Localization.ZH_CN",
    name: "Chinese (Simplified, China) Backoffice UI Localization",
    meta: { culture: "zh-CN" }
  },
  {
    type: "localization",
    alias: "Umb.Localization.ZH_TW",
    name: "Chinese (Taiwan) Backoffice UI Localization",
    meta: { culture: "zh-TW" },
    js: () => import("./zh-tw-D-Y9C-lH.js")
  },
  {
    type: "localization",
    alias: "Umb.Localization.VI",
    name: "Vietnamese Backoffice UI Localization",
    meta: { culture: "vi" },
    js: () => import("./vi-BtQ3u6V7.js")
  }
];
class Wt extends $ {
  constructor(a, n) {
    super(a, n), console.error(
      "Condition of alias `Umb.Condition.MenuAlias` is not implemented. Please report this issue if you where expecting this condition to work."
    );
  }
}
const xt = {
  type: "condition",
  name: "Menu Alias Condition",
  alias: "Umb.Condition.MenuAlias",
  api: Wt
}, Ht = [
  {
    type: "kind",
    alias: "Umb.Kind.MenuItem.Action",
    matchKind: "action",
    matchType: "menuItem",
    manifest: {
      type: "menuItem",
      kind: "action",
      api: () => import("./action-menu-item.api-DxPTl7SU.js"),
      element: () => import("./action-menu-item.element-C9yUJwpT.js")
    }
  }
], Yt = [
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
], Gt = [...Ht, ...Yt], Vt = [
  {
    type: "sectionContext",
    alias: "Umb.SectionContext.SectionSidebarMenu",
    name: "Section Sidebar Menu Section Context",
    api: () => import("./section-sidebar-menu.section-context-DfLlL1GU.js")
  }
], Jt = [
  {
    type: "globalContext",
    alias: "Umb.GlobalContext.SectionSidebarMenu",
    name: "Section Sidebar Menu Global Context",
    api: () => import("./section-sidebar-menu.global-context-CqW3tc6X.js")
  }
], Zt = [
  {
    type: "kind",
    alias: "Umb.Kind.SectionSidebarAppMenu",
    matchKind: "menu",
    matchType: "sectionSidebarApp",
    manifest: {
      type: "sectionSidebarApp",
      element: () => import("./section-sidebar-menu.element-BXQpqNZq.js")
    }
  },
  ...Vt,
  ...Jt
], Xt = [
  {
    type: "kind",
    alias: "Umb.Kind.SectionSidebarAppMenuWithEntityActions",
    matchKind: "menuWithEntityActions",
    matchType: "sectionSidebarApp",
    manifest: {
      type: "sectionSidebarApp",
      element: () => import("./section-sidebar-menu-with-entity-actions.element-KQpKXCCk.js")
    }
  }
], qt = [
  ...Gt,
  ...Zt,
  ...Xt,
  xt
], Qt = [
  {
    type: "modal",
    alias: "Umb.Modal.Confirm",
    name: "Confirm Modal",
    element: () => import("./confirm-modal.element-COhIMOef.js")
  }
], ti = [
  {
    type: "modal",
    alias: "Umb.Modal.DiscardChanges",
    name: "Discard Changes Modal",
    element: () => import("./discard-changes-modal.element-DU89FGO1.js")
  }
], ii = [
  {
    type: "modal",
    alias: "Umb.Modal.ItemPicker",
    name: "Item Picker Modal",
    element: () => import("./item-picker-modal.element-C7YdTiZH.js")
  }
], ei = [
  ...Qt,
  ...ti,
  ...E,
  ...ii
], ai = [...ei], ni = [
  {
    type: "kind",
    alias: "Umb.Kind.PickerSearchResultItem.Default",
    matchKind: "default",
    matchType: "pickerSearchResultItem",
    manifest: {
      type: "pickerSearchResultItem",
      api: () => import("./default-picker-search-result-item.context-7tVujM-8.js").then((e) => e.d),
      element: () => import("./default-picker-search-result-item.element-BpS1umDH.js")
    }
  }
], oi = [...ni], si = [...oi], ci = [...si], mi = [...B], li = [
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
        alias: S
      }
    ]
  },
  ...mi
], ri = [
  {
    type: "modal",
    alias: "Umb.Modal.PropertyEditorUiPicker",
    name: "Property Editor UI Picker Modal",
    element: () => import("./property-editor-ui-picker-modal.element-CkxgVfXw.js")
  }
], pi = [...ri], fi = [
  {
    type: "condition",
    name: "Property Has Value Condition",
    alias: O,
    api: () => import("./has-value.condition-C8-GjoPR.js")
  }
], di = [
  {
    type: "condition",
    name: "Writable Property Condition",
    alias: R,
    api: () => import("./writable-property.condition-CXlPtloZ.js")
  }
], yi = [...fi, ...di], Ui = [...yi], ui = {
  type: "condition",
  name: "Entity Is trashed Condition",
  alias: N,
  api: () => import("./entity-is-trashed.condition-CWMW8E9N.js")
}, hi = {
  type: "condition",
  name: "Entity Is not trashed Condition",
  alias: M,
  api: () => import("./entity-is-not-trashed.condition-BcoFHHDN.js")
}, bi = [ui, hi], Ii = {
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
}, Ai = [Ii], Ti = {
  type: "kind",
  alias: "Umb.Kind.EntityAction.RecycleBin.Restore",
  matchKind: "restoreFromRecycleBin",
  matchType: "entityAction",
  manifest: {
    ...s.manifest,
    type: "entityAction",
    kind: "restoreFromRecycleBin",
    api: () => import("./restore-from-recycle-bin.action-wPNxL7Dj.js"),
    weight: 100,
    forEntityTypes: [],
    meta: {
      icon: "icon-undo",
      label: "Restore",
      pickerModal: "",
      additionalOptions: !0
    }
  }
}, ki = [
  Ti,
  {
    type: "modal",
    alias: "Umb.Modal.RecycleBin.Restore",
    name: "Restore From Recycle Bin Modal",
    element: () => import("./restore-from-recycle-bin-modal.element-CTv-1SeJ.js")
  }
], _i = [K], Li = [D], zi = [
  {
    type: "kind",
    alias: "Umb.Kind.TreeItem.RecycleBin",
    matchType: "treeItem",
    matchKind: "recycleBin",
    manifest: {
      ...g.manifest,
      type: "treeItem",
      kind: "recycleBin",
      api: () => import("./recycle-bin-tree-item.context-Az32iBqG.js")
    }
  }
], Ci = [...zi], $i = [
  ...bi,
  ...Ai,
  ...ki,
  ..._i,
  ...Li,
  ...Ci
];
class Ei extends c {
  constructor(a, n) {
    super(a, n);
    let i;
    this.config.match ? i = (t) => t === this.config.match : this.config.oneOf && (i = (t) => this.config.oneOf.indexOf(t) !== -1), i !== void 0 && this.consumeContext(w, (t) => {
      this.observe(
        t?.alias,
        (m) => {
          this.permitted = m ? i(m) : !1;
        },
        "observeAlias"
      );
    });
  }
}
const Bi = [
  {
    type: "condition",
    name: "Section Alias Condition",
    alias: P,
    api: Ei
  }
], Si = Symbol();
class Oi extends c {
  constructor(a, n) {
    super(a, n), this.consumeContext(j, (i) => {
      this.observe(
        i?.currentUser,
        (t) => {
          const m = t?.allowedSections ?? [];
          this.permitted = m.includes(this.config.match);
        },
        Si
      );
    });
  }
}
const Ri = [
  {
    type: "condition",
    name: "Section User Permission Condition",
    alias: F,
    api: Oi
  }
], Ni = [...Bi, ...Ri], Mi = [...v], Ki = [
  {
    type: "modal",
    alias: "Umb.Modal.SectionPicker",
    name: "Section Picker Modal",
    element: () => import("./section-picker-modal.element-CWp9mISy.js")
  },
  ...Ni,
  ...Mi
], Di = {
  type: "kind",
  alias: "Umb.Kind.EntityAction.ServerFile.Rename",
  matchKind: "renameServerFile",
  matchType: "entityAction",
  manifest: {
    ...s.manifest,
    type: "entityAction",
    kind: "renameServerFile",
    api: () => import("./rename-server-file.action-bL_Mh3mK.js").then((e) => e.r),
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
}, gi = [
  ...W,
  Di
], wi = [...gi], Pi = [
  {
    type: "store",
    alias: x,
    name: "Temporary File Config Store",
    api: () => import("./config.store-CVJDS2rs.js")
  },
  {
    type: "repository",
    alias: H,
    name: "Temporary File Config Repository",
    api: () => import("./config.repository-eH2FsqDW.js")
  }
], Fi = [...Pi], vi = [
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
], ji = vi, Wi = [
  {
    type: "kind",
    alias: "Umb.Kind.Tree.Default",
    matchKind: "default",
    matchType: "tree",
    manifest: {
      type: "tree",
      api: () => import("./default-tree.context-Be9CM-3y.js"),
      element: () => import("./default-tree.element-fgMsmaPG.js")
    }
  }
], xi = [
  {
    type: "modal",
    alias: Y,
    name: "Duplicate To Modal",
    element: () => import("./duplicate-to-modal.element-DrZPo4JI.js")
  }
], Hi = {
  type: "kind",
  alias: "Umb.Kind.EntityAction.DuplicateTo",
  matchKind: "duplicateTo",
  matchType: "entityAction",
  manifest: {
    ...o.manifest,
    type: "entityAction",
    kind: "duplicateTo",
    api: () => import("./duplicate-to.action-DRm4yyqh.js"),
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
}, Yi = [Hi, ...xi], Gi = {
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
}, Vi = [Gi], Ji = {
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
}, Zi = [Ji], Xi = [
  {
    type: "modal",
    alias: G,
    name: "Sort Children Of Modal",
    element: () => import("./sort-children-of-modal.element-Cs83_Yer.js")
  }
], qi = [V, ...Xi], Qi = [
  ...Yi,
  ...Vi,
  ...Zi,
  ...qi
], te = {
  type: "kind",
  alias: "Umb.Kind.EntityAction.Folder.Create",
  matchKind: "folderCreate",
  matchType: "entityAction",
  manifest: {
    ...o.manifest,
    type: "entityAction",
    kind: "folderCreate",
    api: J,
    weight: 900,
    forEntityTypes: [],
    meta: {
      icon: "icon-add",
      label: "#actions_folderCreate",
      additionalOptions: !0
    }
  }
}, ie = {
  type: "kind",
  alias: "Umb.Kind.EntityAction.Folder.Delete",
  matchKind: "folderDelete",
  matchType: "entityAction",
  manifest: {
    ...o.manifest,
    type: "entityAction",
    kind: "folderDelete",
    api: Z,
    weight: 700,
    forEntityTypes: [],
    meta: {
      icon: "icon-trash",
      label: "#actions_folderDelete",
      additionalOptions: !0
    }
  }
}, ee = {
  type: "kind",
  alias: "Umb.Kind.EntityAction.Folder.Update",
  matchKind: "folderUpdate",
  matchType: "entityAction",
  manifest: {
    ...o.manifest,
    type: "entityAction",
    kind: "folderUpdate",
    api: X,
    weight: 700,
    forEntityTypes: [],
    meta: {
      icon: "icon-edit",
      label: "#actions_folderRename",
      additionalOptions: !0
    }
  }
}, ae = [
  te,
  ie,
  ee
], ne = [
  {
    type: "kind",
    alias: "Umb.Kind.EntityCreateOptionAction.Folder.Create",
    matchKind: "folder",
    matchType: "entityCreateOptionAction",
    manifest: {
      type: "entityCreateOptionAction",
      kind: "folder",
      api: () => import("./folder-entity-create-option-action-BJ_gmSUz.js"),
      weight: 1,
      forEntityTypes: [],
      meta: {
        icon: "icon-folder",
        label: "#create_folder",
        description: "#create_folderDescription"
      }
    }
  }
], oe = [
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
], se = [
  ...ae,
  ...ne,
  ...oe
], ce = [
  {
    type: "kind",
    alias: "Umb.Kind.Tree",
    matchKind: "tree",
    matchType: "menuItem",
    manifest: {
      type: "menuItem",
      element: () => import("./tree-menu-item.element-D3-R3-95.js")
    }
  }
], me = [
  {
    type: "modal",
    alias: "Umb.Modal.TreePicker",
    name: "Tree Picker Modal",
    element: () => import("./tree-picker-modal.element-DnTD7GuE.js")
  }
], le = [
  ...q,
  ...Wi,
  ...Qi,
  ...se,
  ...ce,
  ...me
], re = {
  type: "kind",
  alias: "Umb.Kind.WorkspaceAction.Default",
  matchKind: "default",
  matchType: "workspaceAction",
  manifest: {
    type: "workspaceAction",
    kind: "default",
    weight: 1e3,
    element: () => import("./workspace-action-default-kind.element-Cup7qCdo.js"),
    meta: {
      label: "(Missing label in manifest)"
    }
  }
}, pe = [re], fe = [...pe], de = {
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
}, ye = [de], Ue = [...ye], ue = {
  type: "kind",
  alias: "Umb.Kind.WorkspaceFooterApp.MenuBreadcrumb",
  matchKind: "menuBreadcrumb",
  matchType: "workspaceFooterApp",
  manifest: {
    type: "workspaceFooterApp",
    kind: "menuBreadcrumb",
    element: () => import("./workspace-menu-breadcrumb.element-C7EVdFUf.js"),
    weight: 1e3
  }
}, he = {
  type: "kind",
  alias: "Umb.Kind.WorkspaceFooterApp.VariantMenuBreadcrumb",
  matchKind: "variantMenuBreadcrumb",
  matchType: "workspaceFooterApp",
  manifest: {
    type: "workspaceFooterApp",
    kind: "variantMenuBreadcrumb",
    element: () => import("./workspace-variant-menu-breadcrumb.element-Dj0D0IIu.js"),
    weight: 1e3
  }
}, be = [
  ue,
  he
], Ie = [
  ...fe,
  ...Ue,
  ...be
], Ae = [
  {
    type: "sectionRoute",
    alias: "Umb.SectionRoute.Workspace",
    name: "Workspace Section Route",
    element: () => import("./workspace.element-tg2OuAH5.js"),
    api: () => import("./workspace-section-route.route-entry-BFO7sjDs.js")
  }
];
class Te extends c {
  constructor(a, n) {
    super(a, n);
    let i;
    if (this.config.match ? i = (t) => t.workspaceAlias === this.config.match : this.config.oneOf && (i = (t) => this.config.oneOf.indexOf(t.workspaceAlias) !== -1), i !== void 0)
      this.consumeContext(p, (t) => {
        t ? this.permitted = i(t) : this.permitted = !1;
      });
    else
      throw new Error(
        `Condition [UMB_WORKSPACE_CONDITION_ALIAS] (${f}) could not be initialized properly. Either "match" or "oneOf" must be defined.`
      );
  }
}
const ke = [
  {
    type: "condition",
    name: "Workspace Alias Condition",
    alias: f,
    api: Te
  }
], _e = Symbol();
class Le extends c {
  constructor(a, n) {
    super(a, n), this.consumeContext(Q, (i) => {
      this.observe(
        i?.isNew,
        (t) => {
          t !== void 0 && (this.permitted = t === (this.config.match !== void 0 ? this.config.match : !0));
        },
        _e
      );
    });
  }
}
const ze = [
  {
    type: "condition",
    name: "Workspace Entity Is New Condition",
    alias: tt,
    api: Le
  }
];
class Ce extends c {
  constructor(a, n) {
    super(a, n), this.consumeContext(p, (i) => {
      this.permitted = i?.getEntityType().toLowerCase() === this.config.match.toLowerCase();
    });
  }
}
const $e = [
  {
    type: "condition",
    name: "Workspace Entity Type Condition",
    alias: it,
    api: Ce
  }
], Ee = [
  ...ke,
  ...ze,
  ...$e
], Be = {
  type: "kind",
  alias: "Umb.Kind.Workspace.Routable",
  matchKind: "routable",
  matchType: "workspace",
  manifest: {
    type: "workspace",
    kind: "routable",
    element: () => import("./routable-workspace.element-DlGr4KOt.js")
  }
}, Se = [
  {
    type: "kind",
    alias: "Umb.Kind.Workspace.Default",
    matchKind: "default",
    matchType: "workspace",
    manifest: {
      type: "workspace",
      kind: "default",
      element: () => import("./default-workspace.element-DAs2xd_c.js"),
      api: () => import("./default-workspace.context-DCkjRn1m.js")
    }
  }
], Oe = [
  Be,
  ...Se
], Re = [
  {
    type: "modal",
    alias: "Umb.Modal.Workspace",
    name: "Workspace Modal",
    element: () => import("./workspace-modal.element-Hou9-as0.js")
  }
], Ne = [
  ...Ie,
  ...Ae,
  ...Ee,
  ...Oe,
  ...Re
], ea = [
  ...nt,
  ...rt,
  ...ft,
  ...h,
  ...kt,
  ...Ot,
  ...Mt,
  ...gt,
  ...Pt,
  ...vt,
  ...jt,
  ...qt,
  ...ai,
  ...ci,
  ...li,
  ...pi,
  ...Ui,
  ...$i,
  ...Ki,
  ...wi,
  ...Fi,
  ...ji,
  ...le,
  ...Ne
];
export {
  ea as manifests
};
//# sourceMappingURL=manifests.js.map
