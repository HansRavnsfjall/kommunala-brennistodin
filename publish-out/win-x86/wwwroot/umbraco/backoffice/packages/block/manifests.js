import { b as t, U as E, a as u } from "./constants-Dj5jHHfK.js";
import { UMB_WORKSPACE_CONDITION_ALIAS as o, UmbSubmitWorkspaceAction as a } from "@umbraco-cms/backoffice/workspace";
import { l as e, c as y, e as p, k as r, m as i } from "./index-q0gJfrDp.js";
import { UMB_BLOCK_CLIPBOARD_ENTRY_VALUE_TYPE as l, UmbStandardBlockValueResolver as b } from "@umbraco-cms/backoffice/block";
import { UMB_PROPERTY_HAS_VALUE_CONDITION_ALIAS as B, UMB_WRITABLE_PROPERTY_CONDITION_ALIAS as U } from "@umbraco-cms/backoffice/property";
import { UMB_PROPERTY_ACTION_PASTE_FROM_CLIPBOARD_KIND_MANIFEST as P } from "@umbraco-cms/backoffice/clipboard";
import { a as c, U as n, e as m } from "./index-BbCqfSen.js";
import { d, c as C } from "./index-Z0CAdsE6.js";
const T = {
  type: "modal",
  alias: "Umb.Modal.ManifestViewer",
  name: "Manifest Viewer Modal",
  element: () => import("./manifest-viewer-modal.element-CKEJTjF8.js")
}, g = [
  {
    type: "condition",
    name: "Block Has Settings Condition",
    alias: "Umb.Condition.BlockWorkspaceHasSettings",
    api: () => import("./block-workspace-has-settings.condition-BGe0b6Eo.js")
  },
  {
    type: "condition",
    name: "Block Show Content Edit Condition",
    alias: "Umb.Condition.BlockEntryShowContentEdit",
    api: () => import("./block-entry-show-content-edit.condition-BQr58ot3.js")
  },
  {
    type: "condition",
    name: "Block Workspace Is Exposed Condition",
    alias: "Umb.Condition.BlockWorkspaceIsExposed",
    api: () => import("./block-workspace-is-exposed.condition-BcvC0DUS.js")
  }
], f = [
  {
    type: "modal",
    alias: "Umb.Modal.BlockCatalogue",
    name: "Block Catalogue Modal",
    element: () => import("./block-catalogue-modal.element-DgrfRSxG.js")
  }
], A = [
  {
    type: "workspaceAction",
    kind: "default",
    alias: "Umb.WorkspaceAction.Block.SubmitCreate",
    name: "Submit Create Block Workspace Action",
    api: a,
    meta: {
      label: "#general_create",
      look: "primary",
      color: "positive"
    },
    conditions: [
      {
        alias: o,
        match: t
      },
      {
        alias: "Umb.Condition.BlockWorkspaceIsExposed",
        match: !1
      }
    ]
  },
  {
    type: "workspaceAction",
    kind: "default",
    alias: "Umb.WorkspaceAction.Block.SubmitUpdate",
    name: "Submit Update Block Workspace Action",
    api: a,
    meta: {
      label: "#general_update",
      look: "primary",
      color: "positive"
    },
    conditions: [
      {
        alias: o,
        match: t
      },
      {
        alias: "Umb.Condition.BlockWorkspaceIsExposed"
      }
    ]
  },
  {
    type: "workspace",
    kind: "routable",
    name: "Block Workspace",
    alias: t,
    api: () => import("./block-workspace.context-BqlzYaSC.js"),
    meta: {
      entityType: "block"
    }
  },
  {
    type: "workspaceView",
    alias: E,
    name: "Block Workspace Content View",
    element: () => import("./block-workspace-view-edit.element-h83-m4xf.js"),
    weight: 1e3,
    meta: {
      label: "#general_content",
      pathname: "content",
      icon: "icon-document",
      blockElementManagerName: "content"
    },
    conditions: [
      {
        alias: o,
        match: t
      }
    ],
    // eslint-disable-next-line @typescript-eslint/naming-convention
    TODO_conditions: [
      {
        alias: "Umb.Condition.BlockEntryShowContentEdit"
      }
    ]
  },
  // TODO: Fix manifest types so it support additional properties.
  {
    type: "workspaceView",
    alias: u,
    name: "Block Workspace Settings View",
    element: () => import("./block-workspace-view-edit.element-h83-m4xf.js"),
    weight: 900,
    meta: {
      label: "#general_settings",
      pathname: "settings",
      icon: "icon-settings",
      blockElementManagerName: "settings"
    },
    conditions: [
      {
        alias: o,
        match: t
      },
      {
        alias: "Umb.Condition.BlockWorkspaceHasSettings"
      }
    ]
  }
], _ = [...f, ...A, ...g], L = [
  {
    type: "clipboardCopyPropertyValueTranslator",
    alias: "Umb.ClipboardCopyPropertyValueTranslator.BlockGridToBlock",
    name: "Block Grid to Block Clipboard Copy Property Value Translator",
    api: () => import("./block-grid-to-block-copy-translator-CvnWKd6c.js"),
    fromPropertyEditorUi: e,
    toClipboardEntryValueType: l
  },
  {
    type: "clipboardPastePropertyValueTranslator",
    alias: "Umb.ClipboardPastePropertyValueTranslator.BlockToBlockGrid",
    name: "Block To Block Grid Clipboard Paste Property Value Translator",
    weight: 900,
    api: () => import("./block-to-block-grid-paste-translator-Bia39Z0i.js"),
    fromClipboardEntryValueType: l,
    toPropertyEditorUi: e
  }
], S = [
  {
    type: "clipboardCopyPropertyValueTranslator",
    alias: "Umb.ClipboardCopyPropertyValueTranslator.BlockGridToGridBlock",
    name: "Block Grid To Grid Block Clipboard Copy Property Value Translator",
    api: () => import("./block-grid-to-grid-block-copy-translator-CYKGTQAt.js"),
    fromPropertyEditorUi: e,
    toClipboardEntryValueType: y
  },
  {
    type: "clipboardPastePropertyValueTranslator",
    alias: "Umb.ClipboardPastePropertyValueTranslator.GridBlockToBlockGrid",
    name: "Grid Block To Block Grid Clipboard Paste Property Value Translator",
    api: () => import("./grid-block-to-block-grid-paste-translator-CfMUCBSc.js"),
    fromClipboardEntryValueType: y,
    weight: 1e3,
    toPropertyEditorUi: e
  }
], k = [e], V = [
  {
    type: "propertyContext",
    kind: "clipboard",
    alias: "Umb.PropertyContext.BlockGrid.Clipboard",
    name: "Block Grid Clipboard Property Context",
    forPropertyEditorUis: k
  },
  {
    type: "propertyAction",
    kind: "copyToClipboard",
    alias: "Umb.PropertyAction.BlockGrid.Clipboard.Copy",
    name: "Block Grid Copy To Clipboard Property Action",
    forPropertyEditorUis: k,
    conditions: [
      {
        alias: B
      }
    ]
  },
  ...L,
  ...S
], h = [
  {
    type: "workspaceView",
    alias: "Umb.WorkspaceView.BlockGridAreaType.Settings",
    name: "Block Grid Area Type Workspace Settings View",
    element: () => import("./settings.element-DPvivHfg.js"),
    weight: 1e3,
    meta: {
      label: "#general_settings",
      pathname: "settings",
      icon: "icon-settings"
    },
    conditions: [
      {
        alias: o,
        match: p
      }
    ]
  }
], G = [...h], w = [
  ...G,
  {
    type: "workspace",
    kind: "routable",
    name: "Block Grid Area Type Workspace",
    alias: p,
    api: () => import("./block-grid-area-type-workspace.context-DV3uLotl.js"),
    meta: {
      entityType: "block-grid-area-type"
    }
  },
  {
    type: "workspaceAction",
    kind: "default",
    alias: "Umb.WorkspaceAction.BlockGridAreaType.Save",
    name: "Save Block Grid Area Type Workspace Action",
    api: a,
    meta: {
      label: "#general_submit",
      look: "primary",
      color: "positive"
    },
    conditions: [
      {
        alias: o,
        match: p
      }
    ]
  }
], I = {
  type: "propertyEditorUi",
  alias: "Umb.PropertyEditorUi.BlockGridAreaTypePermission",
  name: "Block Grid Area Type Permission Configuration Property Editor UI",
  element: () => import("./block-grid-area-type-permission.element-Pi-jfMWD.js"),
  meta: {
    label: "Block Grid Area Type Permissions",
    icon: "icon-document",
    group: "common"
  }
}, R = {
  type: "propertyEditorUi",
  alias: "Umb.PropertyEditorUi.BlockGridAreasConfig",
  name: "Block Grid Areas Configuration Property Editor UI",
  element: () => import("./property-editor-ui-block-grid-areas-config.element-a2XWy3gj.js"),
  meta: {
    label: "Block Grid Areas Configuration",
    icon: "icon-document",
    group: "common"
  }
}, O = {
  type: "propertyEditorUi",
  alias: "Umb.PropertyEditorUi.BlockGridColumnSpan",
  name: "Block Grid Column Span Property Editor UI",
  element: () => import("./property-editor-ui-block-grid-column-span.element-CmluwkaD.js"),
  meta: {
    label: "Block Grid Column Span",
    icon: "icon-document",
    group: "common"
  }
}, W = {
  type: "propertyEditorSchema",
  name: "Block Grid",
  alias: "Umbraco.BlockGrid",
  meta: {
    defaultPropertyEditorUiAlias: "Umb.PropertyEditorUi.BlockGrid",
    settings: {
      properties: [
        {
          alias: "blocks",
          label: "Blocks",
          description: "Define Blocks based on Element Types.",
          propertyEditorUiAlias: "Umb.PropertyEditorUi.BlockGridTypeConfiguration"
        },
        {
          alias: "validationLimit",
          label: "Amount",
          propertyEditorUiAlias: "Umb.PropertyEditorUi.NumberRange",
          config: [{ alias: "validationRange", value: { min: 0, max: 1 / 0 } }],
          weight: 100
        }
      ],
      defaultData: [
        {
          alias: "gridColumns",
          value: 12
        }
      ]
    }
  }
}, v = [
  {
    ...P.manifest,
    type: "propertyAction",
    alias: "Umb.PropertyAction.BlockGrid.Clipboard.Paste",
    name: "Block Grid Paste From Clipboard Property Action",
    api: () => import("./block-grid-paste-from-clipboard-VdFhdZrx.js"),
    forPropertyEditorUis: [e],
    conditions: [
      {
        alias: U
      }
    ]
  }
], $ = [
  {
    type: "propertyEditorUi",
    alias: e,
    name: "Block Grid Property Editor UI",
    element: () => import("./property-editor-ui-block-grid.element-E2GsijpN.js"),
    meta: {
      label: "Block Grid",
      propertyEditorSchemaAlias: r,
      icon: "icon-layout",
      group: "richContent",
      supportsReadOnly: !0,
      settings: {
        properties: [
          {
            alias: "blockGroups",
            label: "",
            propertyEditorUiAlias: "Umb.PropertyEditorUi.BlockTypeGroupConfiguration",
            weight: 1
          },
          {
            alias: "useLiveEditing",
            label: "Live editing mode",
            description: "Live update content when editing in overlay",
            propertyEditorUiAlias: "Umb.PropertyEditorUi.Toggle"
          },
          {
            alias: "maxPropertyWidth",
            label: "Editor width",
            description: "Optional css overwrite. (example: 1200px or 100%)",
            propertyEditorUiAlias: "Umb.PropertyEditorUi.TextBox"
          },
          {
            alias: "createLabel",
            label: "Create Button Label",
            description: "Override the label text for adding a new block, Example Add Widget",
            propertyEditorUiAlias: "Umb.PropertyEditorUi.TextBox"
          },
          {
            alias: "gridColumns",
            label: "Grid Columns",
            description: "Set the number of columns for the layout.",
            propertyEditorUiAlias: "Umb.PropertyEditorUi.Integer",
            config: [
              { alias: "min", value: 0 },
              { alias: "placeholder", value: "12" }
            ]
          },
          {
            alias: "layoutStylesheet",
            label: "Layout Stylesheet",
            description: "Override default stylesheet for backoffice layout.",
            propertyEditorUiAlias: "Umb.PropertyEditorUi.BlockGridLayoutStylesheet",
            config: [
              {
                alias: "singleItemMode",
                value: !0
              }
            ]
          }
        ]
      }
    }
  },
  {
    type: "propertyValueResolver",
    alias: "Umb.PropertyValueResolver.BlockGrid",
    name: "Block Value Resolver",
    api: b,
    meta: {
      editorAlias: r
    }
  },
  W,
  ...v
], M = {
  type: "propertyEditorUi",
  alias: "Umb.PropertyEditorUi.BlockTypeGroupConfiguration",
  name: "Block Grid Group Configuration Property Editor UI",
  element: () => import("./property-editor-ui-block-grid-group-configuration.element-ONBWoVNO.js"),
  meta: {
    label: "",
    icon: "icon-box-alt",
    group: "common"
  }
}, x = {
  type: "propertyEditorUi",
  alias: "Umb.PropertyEditorUi.BlockGridLayoutStylesheet",
  name: "Block Grid Layout Stylesheet Property Editor UI",
  element: () => import("./property-editor-ui-block-grid-layout-stylesheet.element-D_4MgKsb.js"),
  meta: {
    label: "Block Grid Layout Stylesheet",
    icon: "icon-document",
    group: "common"
  }
}, K = {
  type: "propertyEditorUi",
  alias: "Umb.PropertyEditorUi.BlockGridTypeConfiguration",
  name: "Block Grid Block Configuration Property Editor UI",
  element: () => import("./property-editor-ui-block-grid-type-configuration.element-Blz0gRiU.js"),
  meta: {
    label: "Block Grid Block Configuration",
    icon: "icon-autofill",
    group: "blocks"
  }
}, D = [
  I,
  R,
  O,
  ...$,
  M,
  x,
  K
], N = [
  {
    type: "propertyValueCloner",
    name: "Block Grid Value Cloner",
    alias: "Umb.PropertyValueCloner.BlockGrid",
    api: () => import("./property-value-cloner-block-grid.cloner-u37_S2gb.js"),
    forEditorAlias: r
  }
], Y = [
  {
    type: "propertyValidationPathTranslator",
    alias: "Umb.PropertyValidationPathTranslator.BlockGrid",
    name: "Block Grid Property Validation Path Translator",
    forEditorAlias: r,
    api: () => import("./block-grid-validation-property-path-translator.api-CPBxIecU.js")
  }
], H = [
  {
    type: "workspaceView",
    alias: "Umb.WorkspaceView.BlockType.Grid.Settings",
    name: "Block Grid Type Workspace Settings View",
    element: () => import("./block-grid-type-workspace-view-settings.element--cCroOZU.js"),
    weight: 1e3,
    meta: {
      label: "#general_settings",
      pathname: "settings",
      icon: "icon-settings"
    },
    conditions: [
      {
        alias: o,
        match: i
      }
    ]
  },
  {
    type: "workspaceView",
    alias: "Umb.WorkspaceView.BlockType.Grid.Areas",
    name: "Block Grid Type Workspace Areas View",
    element: () => import("./block-grid-type-workspace-view-areas.element-BTJYV1Qh.js"),
    weight: 1e3,
    meta: {
      label: "#blockEditor_tabAreas",
      pathname: "areas",
      icon: "icon-grid"
    },
    conditions: [
      {
        alias: o,
        match: i
      }
    ]
  },
  {
    type: "workspaceView",
    alias: "Umb.WorkspaceView.BlockType.Grid.Advance",
    name: "Block Grid Type Workspace Advance View",
    element: () => import("./block-grid-type-workspace-view-advanced.element-ClpyaAE8.js"),
    weight: 1e3,
    meta: {
      label: "#blockEditor_tabAdvanced",
      pathname: "advanced",
      icon: "icon-wrench"
    },
    conditions: [
      {
        alias: o,
        match: i
      }
    ]
  }
], F = [
  ...H,
  {
    type: "workspace",
    kind: "routable",
    name: "Block Grid Type Workspace",
    alias: i,
    api: () => import("./block-type-workspace.context-CaBydCNz.js"),
    meta: {
      entityType: "block-grid-type"
    }
  }
], q = [
  ...V,
  ...w,
  ...D,
  ...N,
  ...Y,
  ...F
], j = [
  {
    type: "clipboardCopyPropertyValueTranslator",
    alias: "Umb.ClipboardCopyPropertyValueTranslator.BlockListToBlock",
    name: "Block List To Block Clipboard Copy Property Value Translator",
    api: () => import("./block-list-to-block-copy-translator-Ce8P5rOu.js"),
    fromPropertyEditorUi: c,
    toClipboardEntryValueType: l
  }
], z = [
  {
    type: "clipboardPastePropertyValueTranslator",
    alias: "Umb.ClipboardPastePropertyValueTranslator.BlockToBlockList",
    name: "Block To Block List Clipboard Paste Property Value Translator",
    api: () => import("./block-to-block-list-paste-translator-B0QQ7gk6.js"),
    fromClipboardEntryValueType: l,
    toPropertyEditorUi: c
  }
], s = [c], J = [
  {
    type: "propertyContext",
    kind: "clipboard",
    alias: "Umb.PropertyContext.BlockList.Clipboard",
    name: "Block List Clipboard Property Context",
    forPropertyEditorUis: s
  },
  {
    type: "propertyAction",
    kind: "copyToClipboard",
    alias: "Umb.PropertyAction.BlockList.Clipboard.Copy",
    name: "Block List Copy To Clipboard Property Action",
    forPropertyEditorUis: s,
    conditions: [
      {
        alias: B
      }
    ]
  },
  {
    type: "propertyAction",
    kind: "pasteFromClipboard",
    alias: "Umb.PropertyAction.BlockList.Clipboard.Paste",
    name: "Block List Paste From Clipboard Property Action",
    forPropertyEditorUis: s,
    conditions: [
      {
        alias: U
      }
    ]
  },
  ...j,
  ...z
], Q = [
  {
    type: "propertyValueCloner",
    name: "Block List Value Cloner",
    alias: "Umb.PropertyValueCloner.BlockList",
    api: () => import("./property-value-cloner-block-list.cloner-Cf4j7Y6X.js"),
    forEditorAlias: n
  }
], X = {
  type: "propertyEditorUi",
  alias: "Umb.PropertyEditorUi.BlockListTypeConfiguration",
  name: "Block List Type Configuration Property Editor UI",
  element: () => import("./property-editor-ui-block-list-type-configuration.element-Bug6Q8NO.js"),
  meta: {
    label: "Block List Type Configuration",
    icon: "icon-autofill",
    group: "common"
  }
}, Z = {
  type: "propertyEditorSchema",
  name: "Block List",
  alias: "Umbraco.BlockList",
  meta: {
    defaultPropertyEditorUiAlias: "Umb.PropertyEditorUi.BlockList",
    settings: {
      properties: [
        {
          alias: "blocks",
          label: "Available Blocks",
          description: "Define the available blocks.",
          propertyEditorUiAlias: "Umb.PropertyEditorUi.BlockListTypeConfiguration"
        },
        {
          alias: "validationLimit",
          label: "Amount",
          description: "Set a required range of blocks",
          propertyEditorUiAlias: "Umb.PropertyEditorUi.NumberRange",
          config: [{ alias: "validationRange", value: { min: 0 } }]
        }
      ]
    }
  }
}, oo = [
  {
    type: "propertyEditorUi",
    alias: "Umb.PropertyEditorUi.BlockList",
    name: "Block List Property Editor UI",
    element: () => import("./property-editor-ui-block-list.element-z8jC0iNy.js"),
    meta: {
      label: "Block List",
      propertyEditorSchemaAlias: n,
      icon: "icon-thumbnail-list",
      group: "lists",
      supportsReadOnly: !0,
      settings: {
        properties: [
          {
            alias: "useSingleBlockMode",
            label: "Single block mode",
            description: `When in Single block mode, the output will be BlockListItem<>, instead of BlockListModel.

**NOTE:**
Single block mode requires a maximum of one available block, and an amount set to minimum 1 and maximum 1 blocks.`,
            propertyEditorUiAlias: "Umb.PropertyEditorUi.Toggle"
          },
          {
            alias: "useLiveEditing",
            label: "Live editing mode",
            description: "Live editing in editor overlays for live updated custom views or labels using custom expression.",
            propertyEditorUiAlias: "Umb.PropertyEditorUi.Toggle"
          },
          {
            alias: "useInlineEditingAsDefault",
            label: "Inline editing mode",
            description: "Use the inline editor as the default block view.",
            propertyEditorUiAlias: "Umb.PropertyEditorUi.Toggle"
          },
          {
            alias: "maxPropertyWidth",
            label: "Property editor width",
            description: "Optional CSS override, example: 800px or 100%",
            propertyEditorUiAlias: "Umb.PropertyEditorUi.TextBox"
          }
        ]
      }
    }
  },
  {
    type: "propertyValueResolver",
    alias: "Umb.PropertyValueResolver.BlockList",
    name: "Block Value Resolver",
    api: b,
    meta: {
      editorAlias: n
    }
  },
  Z
], eo = [X, ...oo], to = [
  {
    type: "propertyValidationPathTranslator",
    alias: "Umb.PropertyValidationPathTranslator.BlockList",
    name: "Block List Property Validation Path Translator",
    forEditorAlias: n,
    api: () => import("./block-list-validation-property-path-translator.api-BKhDmV9j.js")
  }
], io = [
  {
    type: "workspaceView",
    alias: "Umb.WorkspaceView.BlockType.List.Settings",
    name: "Block List Type Workspace Settings View",
    element: () => import("./block-list-type-workspace-view.element-CVcJyh1F.js"),
    weight: 1e3,
    meta: {
      label: "#blockEditor_tabBlockSettings",
      pathname: "settings",
      icon: "icon-settings"
    },
    conditions: [
      {
        alias: o,
        match: m
      }
    ]
  }
], ao = [
  ...io,
  {
    type: "workspace",
    kind: "routable",
    name: "Block List Type Workspace",
    alias: m,
    api: () => import("./block-type-workspace.context-CaBydCNz.js"),
    meta: {
      entityType: "block-list-type"
    }
  }
], ro = [
  ...J,
  ...Q,
  ...eo,
  ...to,
  ...ao
], lo = [
  {
    type: "workspaceView",
    alias: "Umb.WorkspaceView.BlockType.RTE.Settings",
    name: "Block List Type Workspace Settings View",
    element: () => import("./block-rte-type-workspace-view.element-r_VQAw3T.js"),
    weight: 1e3,
    meta: {
      label: "#general_settings",
      pathname: "settings",
      icon: "icon-settings"
    },
    conditions: [
      {
        alias: o,
        match: d
      }
    ]
  }
], no = [
  ...lo,
  {
    type: "workspace",
    kind: "routable",
    name: "Block Rte Type Workspace",
    alias: d,
    api: () => import("./block-type-workspace.context-CaBydCNz.js"),
    meta: {
      entityType: "block-rte-type"
    }
  }
], so = [
  {
    type: "propertyEditorUi",
    alias: "Umb.PropertyEditorUi.BlockRteTypeConfiguration",
    name: "Block RTE Type Configuration Property Editor UI",
    element: () => import("./property-editor-ui-block-rte-type-configuration.element-BAE6gpWz.js"),
    meta: {
      label: "Block RTE Type Configuration",
      icon: "icon-autofill",
      group: "common"
    }
  }
], po = [
  {
    type: "propertyValueCloner",
    name: "RTE Block Value Cloner",
    alias: "Umb.PropertyValueCloner.BlockRte",
    api: () => import("./property-value-cloner-block-rte.cloner-CXXyelaj.js"),
    forEditorAlias: C
  }
], co = [
  ...no,
  ...so,
  ...po
], mo = [
  {
    type: "workspaceAction",
    kind: "default",
    alias: "Umb.WorkspaceAction.BlockType.Save",
    name: "Save Block Type Workspace Action",
    api: a,
    meta: {
      label: "#general_submit",
      look: "primary",
      color: "positive"
    },
    conditions: [
      {
        alias: o,
        oneOf: [
          i,
          m,
          d
        ]
      }
    ]
  }
], yo = [...mo], To = [
  //manifest,
  ..._,
  ...yo,
  ...ro,
  ...q,
  ...co,
  T
];
export {
  To as manifests
};
//# sourceMappingURL=manifests.js.map
