import { k as a, e as t, l as n, U as i, f as s, a as e, b as p, h as l, j as r, n as m, d as c, c as o } from "./manifests-D6Yzql_a.js";
import "@umbraco-cms/backoffice/class-api";
import "@umbraco-cms/backoffice/current-user";
import "@umbraco-cms/backoffice/repository";
import { UMB_COLLECTION_ALIAS_CONDITION as _ } from "@umbraco-cms/backoffice/collection";
import { UMB_PROPERTY_ACTION_DEFAULT_KIND_MANIFEST as C } from "@umbraco-cms/backoffice/property-action";
import { UMB_WORKSPACE_CONDITION_ALIAS as A } from "@umbraco-cms/backoffice/workspace";
const d = [
  {
    type: "repository",
    alias: a,
    name: "Clipboard Collection Repository",
    api: () => import("./clipboard-collection.repository-DNaeH0Ix.js")
  }
], y = [
  {
    type: "collectionView",
    alias: n,
    name: "Clipboard Table Collection View",
    js: () => import("./clipboard-table-collection-view.element-DGUcRRex.js"),
    meta: {
      label: "Table",
      icon: "icon-list",
      pathName: "table"
    },
    conditions: [
      {
        alias: _,
        match: t
      }
    ]
  }
], I = [
  {
    type: "collection",
    kind: "default",
    alias: t,
    name: "Clipboard Collection",
    meta: {
      repositoryAlias: a
    }
  },
  ...d,
  ...y
], T = [
  {
    type: "globalContext",
    alias: "Umb.GlobalContext.Clipboard",
    name: "Clipboard Context",
    api: () => import("./clipboard.context-D3d_lkgA.js")
  }
], b = [
  {
    type: "repository",
    alias: i,
    name: "Clipboard Detail Repository",
    api: () => import("./clipboard-entry-detail.repository-Be0QsLx1.js")
  },
  {
    type: "store",
    alias: s,
    name: "Clipboard Detail Store",
    api: () => import("./clipboard-entry-detail.store-BOXR5opj.js")
  },
  {
    type: "entityAction",
    kind: "delete",
    alias: "Umb.EntityAction.ClipboardEntry.Delete",
    name: "Delete Clipboard Entry Entity Action",
    forEntityTypes: [p],
    meta: {
      itemRepositoryAlias: e,
      detailRepositoryAlias: i,
      confirm: {
        headline: "#clipboard_confirmDeleteHeadline",
        message: "#clipboard_confirmDeleteDescription"
      }
    }
  }
], O = [
  {
    type: "repository",
    alias: e,
    name: "Clipboard Entry Item Repository",
    api: () => import("./clipboard-entry-item.repository-CIuifbrD.js")
  },
  {
    type: "itemStore",
    alias: l,
    name: "Clipboard Entry Item Store",
    api: () => import("./clipboard-entry-item.store-DtricQ2S.js")
  }
], R = [
  {
    type: "modal",
    alias: r,
    name: "Clipboard Item Picker Modal",
    js: () => import("./clipboard-entry-picker-modal.element-Bq6KxY9S.js")
  }
], E = [...b, ...O, ...R], L = [
  {
    type: "kind",
    alias: "Umb.Kind.PropertyAction.CopyToClipboard",
    matchKind: "copyToClipboard",
    matchType: "propertyAction",
    manifest: {
      ...C.manifest,
      type: "propertyAction",
      kind: "copyToClipboard",
      api: () => import("./copy-to-clipboard.property-action-DncKcITE.js"),
      weight: 1200,
      meta: {
        icon: "icon-clipboard-copy",
        label: "Copy"
      }
    }
  }
], f = [...L, ...m], B = [
  {
    type: "kind",
    alias: "Umb.Kind.PropertyContext.Clipboard",
    matchKind: "clipboard",
    matchType: "propertyContext",
    manifest: {
      type: "propertyContext",
      kind: "clipboard",
      api: () => import("./clipboard.property-context-CM7UAgst.js"),
      weight: 1200
    }
  }
], D = [
  ...f,
  ...B
], P = [
  {
    type: "workspace",
    kind: "default",
    alias: o,
    name: "Clipboard Root Workspace",
    meta: {
      entityType: c,
      headline: "Clipboard"
    }
  },
  {
    type: "workspaceView",
    kind: "collection",
    alias: "Umb.WorkspaceView.ClipboardRoot.Collection",
    name: "Clipboard Root Collection Workspace View",
    meta: {
      label: "Entries",
      pathname: "entries",
      icon: "icon-layers",
      collectionAlias: t
    },
    conditions: [
      {
        alias: A,
        match: o
      }
    ]
  }
], h = [
  ...I,
  ...T,
  ...E,
  ...D,
  ...P
];
export {
  h as manifests
};
//# sourceMappingURL=manifests.js.map
