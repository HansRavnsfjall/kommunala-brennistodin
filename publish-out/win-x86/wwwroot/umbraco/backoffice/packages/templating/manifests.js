import { UMB_SETTINGS_SECTION_ALIAS as s } from "@umbraco-cms/backoffice/settings";
import { a as n, U as m, b as r, l as p, n as l, o as c, p as T, e as o, f as E, q as A, r as y } from "./manifests-DcuSN-5b.js";
import { c as t, b as _ } from "./template-item.store.context-token-rCTaUJ7s.js";
import { UMB_WORKSPACE_CONDITION_ALIAS as e } from "@umbraco-cms/backoffice/workspace";
import "@umbraco-cms/backoffice/tree";
import "@umbraco-cms/backoffice/external/backend-api";
import { UMB_SECTION_USER_PERMISSION_CONDITION_ALIAS as S } from "@umbraco-cms/backoffice/section";
import { g as d, j as I, c as u, q as U, r as b, s as M, t as f } from "./manifests-CkeJWkpV.js";
import "@umbraco-cms/backoffice/server-file-system";
import "@umbraco-cms/backoffice/resources";
import { b as P } from "./stylesheet-picker-modal.token-CeSiGQ35.js";
import "@umbraco-cms/backoffice/repository";
import "@umbraco-cms/backoffice/store";
import "@umbraco-cms/backoffice/id";
import { a, b as i, U as R } from "./entity-CA4W0tlV.js";
import { U as O, c as h, m as L, g as k, h as C } from "./manifests-B32FKMGR.js";
import { f as B, p as $, q as w, o as g, r as Y } from "./partial-view-workspace.context-token-DmMOFZmM.js";
import { k as W, d as D, U as V, e as F, f as N, x, y as H, z as q } from "./manifests-cHFy6NXv.js";
const j = [
  {
    type: "menu",
    alias: "Umb.Menu.Templating",
    name: "Templating Menu"
  },
  {
    type: "sectionSidebarApp",
    kind: "menu",
    alias: "Umb.SectionSidebarMenu.Templating",
    name: "Templating Section Sidebar Menu",
    weight: 200,
    meta: {
      label: "#treeHeaders_templatingGroup",
      menu: "Umb.Menu.Templating"
    },
    conditions: [
      {
        alias: "Umb.Condition.SectionAlias",
        match: s
      }
    ]
  }
], v = [
  {
    type: "condition",
    name: "Template Allow Delete Action Condition",
    alias: n,
    api: () => import("./template-allow-delete-action.condition-LL-k9ZfA.js")
  }
], G = [...v], z = [
  {
    type: "entityAction",
    kind: "default",
    alias: "Umb.EntityAction.Template.Create",
    name: "Create Template Entity Action",
    weight: 1200,
    api: () => import("./create.action-CDGJniyn.js"),
    forEntityTypes: [t, _],
    meta: {
      icon: "icon-add",
      label: "#actions_create",
      additionalOptions: !0
    }
  },
  {
    type: "entityAction",
    kind: "delete",
    alias: "Umb.EntityAction.Template.Delete",
    name: "Delete Template Entity Action",
    forEntityTypes: [t],
    meta: {
      detailRepositoryAlias: r,
      itemRepositoryAlias: m
    },
    conditions: [{ alias: n }]
  }
], K = [
  {
    type: "menuItem",
    kind: "tree",
    alias: "Umb.MenuItem.Templates",
    name: "Templates Menu Item",
    weight: 40,
    meta: {
      label: "Templates",
      entityType: "template",
      treeAlias: p,
      menus: ["Umb.Menu.Templating"]
    }
  },
  {
    type: "workspaceContext",
    name: "Template Menu Structure Workspace Context",
    alias: "Umb.Context.Template.Menu.Structure",
    api: () => import("./template-menu-structure.context-CEiLQHBF.js"),
    conditions: [
      {
        alias: e,
        match: "Umb.Workspace.Template"
      }
    ]
  },
  {
    type: "workspaceFooterApp",
    kind: "menuBreadcrumb",
    alias: "Umb.WorkspaceFooterApp.Template.Breadcrumb",
    name: "Template Breadcrumb Workspace Footer App",
    conditions: [
      {
        alias: e,
        match: "Umb.Workspace.Template"
      }
    ]
  }
], Q = [
  {
    type: "modal",
    alias: "Umb.Modal.Template.QueryBuilder",
    name: "Template query builder",
    element: () => import("./query-builder-modal.element-qTGID1LR.js")
  }
], J = [...l, ...c, ...T], X = [
  {
    name: "Template Global Search",
    alias: E,
    type: "globalSearch",
    weight: 200,
    meta: {
      label: "Templates",
      searchProviderAlias: o
    },
    conditions: [
      {
        alias: S,
        match: s
      }
    ]
  }
], Z = [
  {
    name: "Template Search Provider",
    alias: o,
    type: "searchProvider",
    api: () => import("./template.search-provider-DYB5KjvR.js"),
    weight: 100,
    meta: {
      label: "Templates"
    }
  },
  {
    name: "Template Search Result Item",
    alias: "Umb.SearchResultItem.Template",
    type: "searchResultItem",
    forEntityTypes: [t]
  },
  ...X
], ee = [
  ...G,
  ...z,
  ...K,
  ...Q,
  ...J,
  ...Z,
  ...A,
  ...y
], te = [
  {
    type: "menuItem",
    kind: "tree",
    alias: "Umb.MenuItem.Stylesheets",
    name: "Stylesheets Menu Item",
    weight: 20,
    meta: {
      label: "Stylesheets",
      treeAlias: d,
      menus: ["Umb.Menu.Templating"]
    }
  },
  {
    type: "workspaceContext",
    name: "Stylesheet Menu Structure Workspace Context",
    alias: "Umb.Context.Stylesheet.Menu.Structure",
    api: () => import("./stylesheet-menu-structure.context-Ds7IqcKJ.js"),
    conditions: [
      {
        alias: e,
        match: "Umb.Workspace.Stylesheet"
      }
    ]
  },
  {
    type: "workspaceFooterApp",
    kind: "menuBreadcrumb",
    alias: "Umb.WorkspaceFooterApp.Stylesheet.Breadcrumb",
    name: "Stylesheet Breadcrumb Workspace Footer App",
    conditions: [
      {
        alias: e,
        match: "Umb.Workspace.Stylesheet"
      }
    ]
  }
], ae = {
  type: "modal",
  alias: "Umb.Modal.Stylesheet.CreateOptions",
  name: "Stylesheet Create Options Modal",
  element: () => import("./stylesheet-create-options-modal.element-jSu8r5E3.js")
}, ie = {
  type: "entityAction",
  kind: "create",
  alias: "Umb.EntityAction.Stylesheet.Create",
  name: "Create Stylesheet Entity Action",
  weight: 1200,
  forEntityTypes: [a, i],
  meta: {
    icon: "icon-add",
    label: "#actions_create",
    additionalOptions: !0,
    headline: "#create_createUnder #treeHeaders_documentTypes"
  }
}, se = [
  {
    type: "entityCreateOptionAction",
    alias: "Umb.EntityCreateOptionAction.Stylesheet.Default",
    name: "Default Stylesheet Entity Create Option Action",
    weight: 100,
    api: () => import("./stylesheet-create-option-action-BkQtTTKO.js"),
    forEntityTypes: [a, i],
    meta: {
      icon: "icon-palette",
      label: "#create_newStyleSheetFile"
    }
  },
  {
    type: "entityCreateOptionAction",
    kind: "folder",
    alias: "Umb.EntityCreateOptionAction.Stylesheet.Folder",
    name: "Stylesheet Folder Entity Create Option Action",
    forEntityTypes: [a, i],
    meta: {
      icon: "icon-folder",
      label: "#create_folder",
      description: "#create_folderDescription",
      folderRepositoryAlias: I
    }
  }
], ne = [ae, ie, ...se], oe = [
  {
    type: "entityAction",
    kind: "delete",
    alias: "Umb.EntityAction.Stylesheet.Delete",
    name: "Delete Stylesheet Entity Action",
    forEntityTypes: [R],
    meta: {
      detailRepositoryAlias: u,
      itemRepositoryAlias: P
    }
  },
  ...ne,
  ...U
], me = {
  type: "propertyEditorUi",
  alias: "Umb.PropertyEditorUi.StylesheetPicker",
  name: "Stylesheet Picker Property Editor UI",
  js: () => import("./property-editor-ui-stylesheet-picker.element-BBNs_pRJ.js"),
  meta: {
    label: "Stylesheet Picker",
    icon: "icon-document",
    group: "common"
  }
}, re = [me], pe = [
  ...b,
  ...te,
  ...M,
  ...f,
  ...oe,
  ...re
], le = [
  {
    type: "menuItem",
    kind: "tree",
    alias: "Umb.MenuItem.PartialView",
    name: "Partial View Menu Item",
    weight: 40,
    meta: {
      label: "Partial Views",
      treeAlias: B,
      menus: ["Umb.Menu.Templating"]
    }
  },
  {
    type: "workspaceContext",
    name: "Partial View Menu Structure Workspace Context",
    alias: "Umb.Context.PartialView.Menu.Structure",
    api: () => import("./partial-view-menu-structure.context-DluvYor0.js"),
    conditions: [
      {
        alias: e,
        match: "Umb.Workspace.PartialView"
      }
    ]
  },
  {
    type: "workspaceFooterApp",
    kind: "menuBreadcrumb",
    alias: "Umb.WorkspaceFooterApp.PartialView.Breadcrumb",
    name: "Partial View Breadcrumb Workspace Footer App",
    conditions: [
      {
        alias: e,
        match: "Umb.Workspace.PartialView"
      }
    ]
  }
], ce = [
  {
    type: "entityAction",
    kind: "default",
    alias: "Umb.EntityAction.PartialView.CreateOptions",
    name: "Partial View Create Options Entity Action",
    weight: 1200,
    api: () => import("./create.action-73j1iYwZ.js"),
    forEntityTypes: [$, w],
    meta: {
      icon: "icon-add",
      label: "#actions_create",
      additionalOptions: !0
    }
  },
  {
    type: "modal",
    alias: "Umb.Modal.PartialView.CreateOptions",
    name: "Partial View Create Options Modal",
    element: () => import("./partial-view-create-options-modal.element-jsBY-Flu.js")
  },
  {
    type: "modal",
    alias: "Umb.Modal.PartialView.CreateFromSnippet",
    name: "Create Partial View From Snippet Modal",
    js: () => import("./create-from-snippet-modal-jmullPcy.js")
  }
], Te = [
  {
    type: "entityAction",
    kind: "delete",
    alias: "Umb.EntityAction.PartialView.Delete",
    name: "Delete Partial View Entity Action",
    forEntityTypes: [g],
    meta: {
      detailRepositoryAlias: h,
      itemRepositoryAlias: O
    }
  },
  ...ce,
  ...L
], Ee = [
  ...k,
  ...le,
  ...Y,
  ...Te,
  ...C
], Ae = [
  {
    type: "menuItem",
    kind: "tree",
    alias: D,
    name: "Scripts Menu Item",
    weight: 10,
    meta: {
      label: "Scripts",
      treeAlias: W,
      menus: ["Umb.Menu.Templating"]
    }
  },
  {
    type: "workspaceContext",
    name: "Script Menu Structure Workspace Context",
    alias: "Umb.Context.Script.Menu.Structure",
    api: () => import("./script-menu-structure.context-BO7DrzGD.js"),
    conditions: [
      {
        alias: e,
        match: "Umb.Workspace.Script"
      }
    ]
  },
  {
    type: "workspaceFooterApp",
    kind: "menuBreadcrumb",
    alias: "Umb.WorkspaceFooterApp.Script.Breadcrumb",
    name: "Script Breadcrumb Workspace Footer App",
    conditions: [
      {
        alias: e,
        match: "Umb.Workspace.Script"
      }
    ]
  }
], ye = [
  {
    type: "repository",
    alias: V,
    name: "Script Item Repository",
    api: () => import("./script-item.repository-D73yZhQ0.js")
  },
  {
    type: "itemStore",
    alias: "Umb.ItemStore.Script",
    name: "Script Item Store",
    api: () => import("./script-item.store-B_Fp3Sg6.js")
  }
], _e = [
  {
    type: "repository",
    alias: F,
    name: "Script Detail Repository",
    api: () => import("./script-detail.repository-rCDnl-Wx.js")
  },
  {
    type: "store",
    alias: N,
    name: "Script Detail Store",
    api: () => import("./script-detail.store-CpP7qB0C.js")
  },
  ...ye
], Se = [
  ...x,
  ...Ae,
  ..._e,
  ...H,
  ...q
], de = [
  {
    type: "modal",
    alias: "Umb.Modal.TemplatingItemPicker",
    name: "Templating Item Picker Modal",
    element: () => import("./templating-item-picker-modal.element-DVIPccZC.js")
  },
  {
    type: "modal",
    alias: "Umb.Modal.TemplatingSectionPicker",
    name: "Templating Section Picker Modal",
    element: () => import("./templating-section-picker-modal.element-Cc34Lc5q.js")
  },
  {
    type: "modal",
    alias: "Umb.Modal.TemplatingPageFieldBuilder",
    name: "Templating Page Field Builder Modal",
    element: () => import("./templating-page-field-builder-modal.element-uWRtSSXU.js")
  }
], We = [
  ...j,
  ...ee,
  ...pe,
  ...Ee,
  ...de,
  ...Se
];
export {
  We as manifests
};
//# sourceMappingURL=manifests.js.map
