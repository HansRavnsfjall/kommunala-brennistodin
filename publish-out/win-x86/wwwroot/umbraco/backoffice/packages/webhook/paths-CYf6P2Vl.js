import { UMB_COLLECTION_ALIAS_CONDITION as i } from "@umbraco-cms/backoffice/collection";
import { UmbContextToken as t } from "@umbraco-cms/backoffice/context-api";
import { UmbItemStoreBase as r, UmbDetailStoreBase as m } from "@umbraco-cms/backoffice/store";
import { UMB_SETTINGS_SECTION_PATHNAME as b } from "@umbraco-cms/backoffice/settings";
import { UmbPathPattern as a } from "@umbraco-cms/backoffice/router";
import { UMB_WORKSPACE_PATH_PATTERN as T } from "@umbraco-cms/backoffice/workspace";
const W = "Umb.Repository.Webhook.Event", l = "Umb.Store.Webhook.Event", y = [
  {
    type: "repository",
    alias: W,
    name: "Webhook Event Repository",
    api: () => import("./webhook-event.repository-CXKH-T2N.js")
  },
  {
    type: "store",
    alias: l,
    name: "Webhook Event Store",
    api: () => import("./webhook-event.store-Ckvt3DzU.js")
  }
], P = "Umb.Repository.WebhookDelivery.Collection", H = "Umb.Collection.Webhook.Delivery", N = "Umb.Workspace.WebhookRoot", D = "Umb.Workspace.Webhook", f = "Umb.Workspace.Webhook", c = "webhook", u = "webhook-root", w = "webhook-delivery", Y = "Umb.Repository.WebhookCollection", S = "Umb.CollectionView.Webhook.Table", d = [
  {
    type: "collectionView",
    alias: S,
    name: "Webhook Table Collection View",
    js: () => import("./webhook-table-collection-view.element-D46MzFwu.js"),
    meta: {
      label: "Table",
      icon: "icon-list",
      pathName: "table"
    },
    conditions: [
      {
        alias: i,
        match: "Umb.Collection.Webhook"
      }
    ]
  }
], v = "Umb.Collection.Webhook", g = new t(
  "UmbWorkspaceContext",
  void 0,
  (o) => o.getEntityType?.() === "webhook"
);
class s extends r {
  /**
   * Creates an instance of UmbWebhookItemStore.
   * @param {UmbControllerHost} host - The controller host
   * @memberof UmbWebhookItemStore
   */
  constructor(e) {
    super(e, O.toString());
  }
}
const O = new t("UmbWebhookItemStore"), B = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  UMB_WEBHOOK_ITEM_STORE_CONTEXT: O,
  UmbWebhookItemStore: s,
  default: s
}, Symbol.toStringTag, { value: "Module" })), A = "Umb.Repository.WebhookItem", U = "Umb.Store.WebhookItem", V = [
  {
    type: "repository",
    alias: A,
    name: "Webhook Item Repository",
    api: () => import("./webhook-item.repository-BgnbzzMu.js")
  },
  {
    type: "itemStore",
    alias: U,
    name: "Webhook Item Store",
    api: () => Promise.resolve().then(() => B)
  }
];
class _ extends m {
  /**
   * Creates an instance of UmbWebhookDetailStore.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbWebhookDetailStore
   */
  constructor(e) {
    super(e, E.toString());
  }
}
const E = new t("UmbWebhookDetailStore"), p = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  UMB_WEBHOOK_DETAIL_STORE_CONTEXT: E,
  UmbWebhookDetailStore: _,
  default: _
}, Symbol.toStringTag, { value: "Module" })), I = "Umb.Repository.Webhook.Detail", R = "Umb.Store.Webhook.Detail", j = [
  {
    type: "repository",
    alias: I,
    name: "Webhook Detail Repository",
    api: () => import("./webhook-detail.repository-B6CBnM_7.js")
  },
  {
    type: "store",
    alias: R,
    name: "Webhook Detail Store",
    api: () => Promise.resolve().then(() => p)
  }
], n = T.generateAbsolute({
  sectionName: b,
  entityType: c
}), x = new a("create", n), z = new a(
  "edit/:unique",
  n
);
export {
  W as U,
  l as a,
  H as b,
  P as c,
  N as d,
  v as e,
  Y as f,
  S as g,
  g as h,
  O as i,
  A as j,
  U as k,
  E as l,
  R as m,
  I as n,
  n as o,
  x as p,
  z as q,
  D as r,
  f as s,
  c as t,
  u,
  w as v,
  y as w,
  d as x,
  j as y,
  V as z
};
//# sourceMappingURL=paths-CYf6P2Vl.js.map
