import { c as i, b as a, r as e, w as m, f as s, e as n, x as r, j as p, n as b, t as l, y as k, z as W, u as O, d as t } from "./paths-CYf6P2Vl.js";
import { UMB_COLLECTION_ALIAS_CONDITION as c } from "@umbraco-cms/backoffice/collection";
import { UMB_WORKSPACE_CONDITION_ALIAS as o, UmbSubmitWorkspaceAction as h } from "@umbraco-cms/backoffice/workspace";
import "@umbraco-cms/backoffice/id";
import "@umbraco-cms/backoffice/external/backend-api";
import "@umbraco-cms/backoffice/resources";
import "@umbraco-cms/backoffice/utils";
import "@umbraco-cms/backoffice/repository";
import "@umbraco-cms/backoffice/entity-item";
const _ = [
  {
    type: "repository",
    alias: i,
    name: "Webhook Delivery Collection Repository",
    api: () => import("./webhook-delivery-collection.repository-ChspdiFd.js")
  }
], y = [
  {
    type: "collectionView",
    alias: "Umb.CollectionView.WebhookDeliveries.Table",
    name: "Webhook Deliveries Table Collection View",
    js: () => import("./webhook-delivery-table-collection-view.element-BBRX696F.js"),
    meta: {
      label: "Table",
      icon: "icon-list",
      pathName: "table"
    },
    conditions: [
      {
        alias: c,
        match: "Umb.Collection.Webhook.Delivery"
      }
    ]
  }
], A = [
  {
    type: "collection",
    kind: "default",
    alias: a,
    name: "Webhook Delivery Collection",
    meta: {
      repositoryAlias: i
    }
  },
  ..._,
  ...y
], E = [
  {
    type: "workspaceView",
    kind: "collection",
    alias: "Umb.WorkspaceView.WebhookDelivery.Collection",
    name: "Webhook Delivery Workspace View",
    element: () => import("./webhook-delivery-collection-workspace-view.element-DZN_PXjQ.js"),
    meta: {
      label: "Deliveries",
      pathname: "deliveries",
      icon: "icon-box-alt",
      collectionAlias: a
    },
    conditions: [
      {
        alias: o,
        match: e
      }
    ]
  }
], d = [...A, ...E], f = [
  {
    type: "modal",
    alias: "Umb.Modal.Webhook.Events",
    name: "Webhook Events Modal",
    js: () => import("./webhook-events-modal.element-qIZSAFpL.js")
  }
], I = [...f, ...m], C = [
  {
    type: "repository",
    alias: s,
    name: "Webhook Collection Repository",
    api: () => import("./webhook-collection.repository-KcTwXdUa.js")
  }
], w = [
  {
    type: "collectionAction",
    kind: "button",
    name: "Create Webhook Collection Action",
    alias: "Umb.CollectionAction.Webhook.Create",
    weight: 200,
    meta: {
      label: "#general_create",
      href: "section/settings/workspace/webhook/create"
    },
    conditions: [
      {
        alias: c,
        match: "Umb.Collection.Webhook"
      }
    ]
  }
], T = [
  {
    type: "collection",
    kind: "default",
    alias: n,
    name: "Webhook Collection",
    meta: {
      repositoryAlias: s
    }
  },
  ...C,
  ...r,
  ...w
], R = [
  {
    type: "entityAction",
    kind: "delete",
    alias: "Umb.EntityAction.Webhook.Delete",
    name: "Delete Webhook Entity Action",
    forEntityTypes: [l],
    meta: {
      detailRepositoryAlias: b,
      itemRepositoryAlias: p
    }
  }
], U = [...k, ...W], L = [
  {
    type: "workspace",
    kind: "routable",
    alias: e,
    name: "Webhook Root Workspace",
    api: () => import("./webhook-workspace.context-BsEt0g8m.js"),
    meta: {
      entityType: l
    }
  },
  {
    type: "workspaceView",
    alias: "Umb.WorkspaceView.Webhook.Details",
    name: "Webhook Root Workspace Details View",
    js: () => import("./webhook-details-workspace-view.element-C9xP2dw6.js"),
    weight: 300,
    meta: {
      label: "Details",
      pathname: "details",
      icon: "icon-webhook"
    },
    conditions: [
      {
        alias: o,
        match: e
      }
    ]
  },
  {
    type: "workspaceAction",
    kind: "default",
    alias: "Umb.WorkspaceAction.Webhook.Save",
    name: "Save Webhook Workspace Action",
    api: h,
    meta: {
      look: "primary",
      color: "positive",
      label: "#buttons_save"
    },
    conditions: [
      {
        alias: o,
        match: e
      }
    ]
  }
], B = [
  ...T,
  ...R,
  ...U,
  ...L
], S = [
  {
    type: "menuItem",
    alias: "Umb.MenuItem.Webhook",
    name: "Webhook Root Menu Item",
    weight: 100,
    meta: {
      label: "#treeHeaders_webhooks",
      icon: "icon-webhook",
      entityType: "webhook-root",
      menus: ["Umb.Menu.AdvancedSettings"]
    }
  }
], $ = [
  {
    type: "workspace",
    kind: "default",
    alias: t,
    name: "Webhook Root Workspace",
    meta: {
      entityType: O,
      headline: "#treeHeaders_webhooks"
    }
  },
  {
    type: "workspaceView",
    kind: "collection",
    alias: "Umb.WorkspaceView.WebhookRoot.Collection",
    name: "Webhook Root Collection Workspace View",
    meta: {
      label: "Collection",
      pathname: "collection",
      icon: "icon-layers",
      collectionAlias: n
    },
    conditions: [
      {
        alias: o,
        match: t
      }
    ]
  }
], D = [...S, ...$], g = [
  ...d,
  ...I,
  ...B,
  ...D
];
export {
  g as manifests
};
//# sourceMappingURL=manifests.js.map
