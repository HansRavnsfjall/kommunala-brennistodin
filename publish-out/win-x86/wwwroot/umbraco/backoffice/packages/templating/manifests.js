import { UMB_SECTION_ALIAS_CONDITION_ALIAS as c, UMB_SECTION_USER_PERMISSION_CONDITION_ALIAS as T } from "@umbraco-cms/backoffice/section";
import { UMB_SETTINGS_SECTION_ALIAS as r } from "@umbraco-cms/backoffice/settings";
import { a as p, U as E, c as A, m as y, b as n, o as _, p as S, q as d, f as l, g as I, r as u, s as U } from "./manifests-DjOjofE0.js";
import { c as t, b as f } from "./template-item.store.context-token-rCTaUJ7s.js";
import { UMB_WORKSPACE_CONDITION_ALIAS as e } from "@umbraco-cms/backoffice/workspace";
import "@umbraco-cms/backoffice/tree";
import "@umbraco-cms/backoffice/external/backend-api";
import { h as M, c as s, k as b, d as P, r as k, s as L, t as O, u as R } from "./manifests-EJ-JBi2P.js";
import { b as h } from "./stylesheet-picker-modal.token-C6nznOkG.js";
import "@umbraco-cms/backoffice/management-api";
import "@umbraco-cms/backoffice/server-file-system";
import "@umbraco-cms/backoffice/class-api";
import "@umbraco-cms/backoffice/repository";
import "@umbraco-cms/backoffice/resources";
import "@umbraco-cms/backoffice/store";
import "@umbraco-cms/backoffice/id";
import { a, b as i, U as B } from "./entity-CA4W0tlV.js";
import { c as o, U as C, d as w, m as $, h as g, i as Y } from "./manifests-FJr77TTX.js";
import { i as W, c as D, d as N, b as V, r as F } from "./partial-view-workspace.context-token-DXd6FPys.js";
import { k as x, d as m, U as H, e as j, f as v, x as G, y as q, z } from "./manifests-CH0eoEje.js";
const K = [
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
        alias: c,
        match: r
      }
    ]
  }
], Q = [
  {
    type: "condition",
    name: "Template Allow Delete Action Condition",
    alias: p,
    api: () => import("./template-allow-delete-action.condition-LL-k9ZfA.js")
  }
], J = [...Q], X = [
  {
    type: "entityAction",
    kind: "default",
    alias: "Umb.EntityAction.Template.Create",
    name: "Create Template Entity Action",
    weight: 1200,
    api: () => import("./create.action-CDGJniyn.js"),
    forEntityTypes: [t, f],
    meta: {
      icon: "icon-add",
      label: "#actions_createFor",
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
      detailRepositoryAlias: A,
      itemRepositoryAlias: E
    },
    conditions: [{ alias: p }]
  }
], Z = [
  {
    type: "menuItem",
    kind: "tree",
    alias: n,
    name: "Templates Menu Item",
    weight: 40,
    meta: {
      label: "Templates",
      entityType: "template",
      treeAlias: y,
      menus: ["Umb.Menu.Templating"]
    }
  },
  {
    type: "workspaceContext",
    kind: "menuStructure",
    name: "Template Menu Structure Workspace Context",
    alias: "Umb.Context.Template.Menu.Structure",
    api: () => import("./template-menu-structure.context-wmSuvADQ.js"),
    meta: {
      menuItemAlias: n
    },
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
], ee = [
  {
    type: "modal",
    alias: "Umb.Modal.Template.QueryBuilder",
    name: "Template query builder",
    element: () => import("./query-builder-modal.element-qTGID1LR.js")
  }
], te = [..._, ...S, ...d], ae = [
  {
    name: "Template Global Search",
    alias: I,
    type: "globalSearch",
    weight: 200,
    meta: {
      label: "Templates",
      searchProviderAlias: l
    },
    conditions: [
      {
        alias: T,
        match: r
      }
    ]
  }
], ie = [
  {
    name: "Template Search Provider",
    alias: l,
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
  ...ae
], ne = [
  ...J,
  ...X,
  ...Z,
  ...ee,
  ...te,
  ...ie,
  ...u,
  ...U,
  {
    name: "Template Backoffice Entry Point",
    alias: "Umb.EntryPoint.Template",
    type: "backofficeEntryPoint",
    js: () => import("./entry-point-Cc1wq0mJ.js")
  }
], se = [
  {
    type: "menuItem",
    kind: "tree",
    alias: s,
    name: "Stylesheets Menu Item",
    weight: 20,
    meta: {
      label: "Stylesheets",
      treeAlias: M,
      menus: ["Umb.Menu.Templating"]
    }
  },
  {
    type: "workspaceContext",
    kind: "menuStructure",
    name: "Stylesheet Menu Structure Workspace Context",
    alias: "Umb.Context.Stylesheet.Menu.Structure",
    api: () => import("./stylesheet-menu-structure.context-BPPzcKsd.js"),
    meta: {
      menuItemAlias: s
    },
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
], oe = {
  type: "modal",
  alias: "Umb.Modal.Stylesheet.CreateOptions",
  name: "Stylesheet Create Options Modal",
  element: () => import("./stylesheet-create-options-modal.element-AHFX7BiW.js")
}, me = {
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
}, re = [
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
      folderRepositoryAlias: b
    }
  }
], pe = [oe, me, ...re], le = [
  {
    type: "entityAction",
    kind: "delete",
    alias: "Umb.EntityAction.Stylesheet.Delete",
    name: "Delete Stylesheet Entity Action",
    forEntityTypes: [B],
    meta: {
      detailRepositoryAlias: P,
      itemRepositoryAlias: h
    }
  },
  ...pe,
  ...k
], ce = {
  type: "propertyEditorUi",
  alias: "Umb.PropertyEditorUi.StylesheetPicker",
  name: "Stylesheet Picker Property Editor UI",
  js: () => import("./property-editor-ui-stylesheet-picker.element-BBNs_pRJ.js"),
  meta: {
    label: "Stylesheet Picker",
    icon: "icon-document",
    group: "common"
  }
}, Te = [ce], Ee = [
  ...L,
  ...se,
  ...O,
  ...R,
  ...le,
  ...Te,
  {
    name: "Stylesheet Backoffice Entry Point",
    alias: "Umb.EntryPoint.Stylesheet",
    type: "backofficeEntryPoint",
    js: () => import("./entry-point-KezsHgVp.js")
  }
], Ae = [
  {
    type: "menuItem",
    kind: "tree",
    alias: o,
    name: "Partial View Menu Item",
    weight: 40,
    meta: {
      label: "Partial Views",
      treeAlias: W,
      menus: ["Umb.Menu.Templating"]
    }
  },
  {
    type: "workspaceContext",
    kind: "menuStructure",
    name: "Partial View Menu Structure Workspace Context",
    alias: "Umb.Context.PartialView.Menu.Structure",
    api: () => import("./partial-view-menu-structure.context-C9YfmfY6.js"),
    meta: {
      menuItemAlias: o
    },
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
], ye = [
  {
    type: "entityAction",
    kind: "default",
    alias: "Umb.EntityAction.PartialView.CreateOptions",
    name: "Partial View Create Options Entity Action",
    weight: 1200,
    api: () => import("./create.action-DhSl3Uon.js"),
    forEntityTypes: [D, N],
    meta: {
      icon: "icon-add",
      label: "#actions_createFor",
      additionalOptions: !0
    }
  },
  {
    type: "modal",
    alias: "Umb.Modal.PartialView.CreateOptions",
    name: "Partial View Create Options Modal",
    element: () => import("./partial-view-create-options-modal.element-DtQGi_h2.js")
  },
  {
    type: "modal",
    alias: "Umb.Modal.PartialView.CreateFromSnippet",
    name: "Create Partial View From Snippet Modal",
    js: () => import("./create-from-snippet-modal-jmullPcy.js")
  }
], _e = [
  {
    type: "entityAction",
    kind: "delete",
    alias: "Umb.EntityAction.PartialView.Delete",
    name: "Delete Partial View Entity Action",
    forEntityTypes: [V],
    meta: {
      detailRepositoryAlias: w,
      itemRepositoryAlias: C
    }
  },
  ...ye,
  ...$
], Se = [
  ...g,
  ...Ae,
  ...F,
  ..._e,
  ...Y,
  {
    name: "Partial View Backoffice Entry Point",
    alias: "Umb.EntryPoint.Partial View",
    type: "backofficeEntryPoint",
    js: () => import("./entry-point-B-7UvxVJ.js")
  }
], de = [
  {
    type: "menuItem",
    kind: "tree",
    alias: m,
    name: "Scripts Menu Item",
    weight: 10,
    meta: {
      label: "Scripts",
      treeAlias: x,
      menus: ["Umb.Menu.Templating"]
    }
  },
  {
    type: "workspaceContext",
    kind: "menuStructure",
    name: "Script Menu Structure Workspace Context",
    alias: "Umb.Context.Script.Menu.Structure",
    api: () => import("./script-menu-structure.context-D0_FRXVi.js"),
    meta: {
      menuItemAlias: m
    },
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
], Ie = [
  {
    type: "repository",
    alias: H,
    name: "Script Item Repository",
    api: () => import("./script-item.repository-DTVY3YBu.js")
  },
  {
    type: "itemStore",
    alias: "Umb.ItemStore.Script",
    name: "Script Item Store",
    api: () => import("./script-item.store-B_Fp3Sg6.js")
  }
], ue = [
  {
    type: "repository",
    alias: j,
    name: "Script Detail Repository",
    api: () => import("./script-detail.repository-BTaA0TCB.js")
  },
  {
    type: "store",
    alias: v,
    name: "Script Detail Store",
    api: () => import("./script-detail.store-UHYVh22h.js")
  },
  ...Ie
], Ue = [
  ...G,
  ...de,
  ...ue,
  ...q,
  ...z,
  {
    name: "Script Backoffice Entry Point",
    alias: "Umb.EntryPoint.Script",
    type: "backofficeEntryPoint",
    js: () => import("./entry-point-OPUaSqkD.js")
  }
], fe = [
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
], He = [
  ...K,
  ...ne,
  ...Ee,
  ...Se,
  ...fe,
  ...Ue
];
export {
  He as manifests
};
//# sourceMappingURL=manifests.js.map
