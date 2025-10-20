import "@umbraco-cms/backoffice/extension-registry";
import "@umbraco-cms/backoffice/repository";
import { UMB_COLLECTION_ALIAS_CONDITION as o } from "@umbraco-cms/backoffice/collection";
import { UMB_WORKSPACE_CONDITION_ALIAS as i } from "@umbraco-cms/backoffice/workspace";
const s = [
  {
    type: "menuItem",
    alias: "Umb.MenuItem.Extensions",
    name: "Extension Insights Menu Item",
    weight: 200,
    meta: {
      label: "Extension Insights",
      icon: "icon-wand",
      entityType: "extension-root",
      menus: ["Umb.Menu.AdvancedSettings"]
    }
  }
], n = "Umb.Repository.ExtensionCollection", a = [
  {
    type: "repository",
    alias: n,
    name: "Extension Collection Repository",
    api: () => import("./extension-collection.repository-qh_xkvj6.js")
  }
], l = "extension", c = "extension-root", m = "Umb.CollectionView.Extension.Table", E = [
  {
    type: "collectionView",
    alias: m,
    name: "Extension Table Collection View",
    element: () => import("./extension-table-collection-view.element-BPYl2Mk1.js"),
    meta: {
      label: "Table",
      icon: "icon-list",
      pathName: "table"
    },
    conditions: [
      {
        alias: o,
        match: "Umb.Collection.Extension"
      }
    ]
  }
], e = "Umb.Collection.Extension", r = [
  {
    type: "collection",
    kind: "default",
    alias: e,
    name: "Extension Collection",
    element: () => import("./extension-collection.element-xgu6ebbz.js"),
    meta: {
      repositoryAlias: n
    }
  },
  ...a,
  ...E
], t = "Umb.Workspace.ExtensionRoot", p = [
  {
    type: "workspace",
    kind: "default",
    alias: t,
    name: "Extension Insights Root Workspace",
    meta: {
      entityType: c,
      headline: "Extension Insights"
    }
  },
  {
    type: "workspaceView",
    kind: "collection",
    alias: "Umb.WorkspaceView.Extension.Collection",
    name: "Extension Insights Root Root Collection Workspace View",
    meta: {
      label: "Collection",
      pathname: "collection",
      icon: "icon-layers",
      collectionAlias: e
    },
    conditions: [
      {
        alias: i,
        match: t
      }
    ]
  }
], I = [
  {
    type: "entityAction",
    kind: "default",
    alias: "Umb.EntityAction.Extension.Unregister",
    name: "Unregister Extension Entity Action",
    api: () => import("./unregister-extension.action-ChGRHdCm.js"),
    forEntityTypes: [l],
    meta: {
      label: "Unregister",
      icon: "icon-trash"
    }
  }
], _ = [...I], x = [
  ...s,
  ...p,
  ...r,
  ..._
];
export {
  l as U,
  x as m
};
//# sourceMappingURL=manifests-DEADnW7y.js.map
