import "./sortable-list.element.js";
const e = "Umb.Contentment.Condition.PropertyConfigFlag", o = {
  type: "condition",
  name: "[Contentment] Property Config Flag Condition",
  alias: e,
  api: () => import("./property-config-flag.condition.js")
}, i = [o], a = {
  type: "contentmentDataListItemUi",
  alias: "Umb.Contentment.DataListItemUi.CodeBlock",
  name: "[Contentment] Code Block Data List Item UI",
  element: () => import("./code-block.element.js"),
  meta: {
    label: "Code Block",
    icon: "icon-code"
  }
}, n = {
  type: "contentmentDataListItemUi",
  alias: "Umb.Contentment.DataListItemUi.InfoBox",
  name: "[Contentment] Info Box Data List Item UI",
  element: () => import("./info-box.element.js"),
  meta: {
    label: "Info Box",
    icon: "icon-alert"
  }
}, r = [a, n], l = {
  type: "contentmentDataSource",
  alias: "Umb.Contentment.DataSource.UmbracoBackofficeSectionsDataSource",
  name: "[Contentment] Umbraco Backoffice Sections Data Source",
  api: () => import("./backoffice-sections.data-source.js"),
  meta: {
    key: "Umbraco.Community.Contentment.DataEditors.UmbracoBackofficeSectionsDataSource, Umbraco.Community.Contentment",
    name: "Umbraco Backoffice Sections",
    description: "Use the backoffice sections to populate the data source.",
    icon: "icon-app",
    group: "Umbraco"
  }
}, m = [l], s = {
  type: "contentmentDisplayMode",
  alias: "Umb.Contentment.DisplayMode.Blocks",
  name: "[Contentment] Blocks Display Mode UI",
  element: () => import("./blocks.element.js"),
  meta: {
    key: "Umb.Contentment.DisplayMode.Blocks",
    name: "Blocks",
    icon: "icon-thumbnail-list",
    description: "Blocks will be displayed in a list similar to the Block List editor."
  }
}, p = {
  type: "contentmentDisplayMode",
  alias: "Umb.Contentment.DisplayMode.Cards",
  name: "[Contentment] Cards Display Mode UI",
  element: () => import("./cards.element.js"),
  meta: {
    key: "Umb.Contentment.DisplayMode.Cards",
    name: "Cards",
    icon: "icon-playing-cards",
    description: "Items will be displayed as cards."
  }
}, d = {
  type: "contentmentDisplayMode",
  alias: "Umb.Contentment.DisplayMode.List",
  name: "[Contentment] List Display Mode UI",
  element: () => import("./list.element.js"),
  meta: {
    key: "Umb.Contentment.DisplayMode.List",
    name: "List",
    icon: "icon-fa-list-ul",
    description: "Items will be displayed in a list similar to a content picker."
  }
}, c = [s, p, d], y = [], b = [
  ...r,
  ...m,
  ...c,
  ...y
], u = [
  {
    type: "icons",
    alias: "Umb.Contentment.Icons",
    name: "[Contentment] Icons",
    js: () => import("./icons.js")
  }
], U = [
  {
    type: "localization",
    name: "[Contentment] English",
    alias: "Umb.Contentment.Localization.English",
    js: () => import("./en.js"),
    meta: {
      culture: "en"
    }
  }
], E = {
  type: "propertyAction",
  kind: "default",
  alias: "Umb.Contentment.PropertyAction.AllowClear",
  name: "[Contentment] Allow Clear Property Action",
  api: () => import("./allow-clear.controller.js"),
  forPropertyEditorUis: ["Umb.Contentment.PropertyEditorUi.DataList"],
  meta: {
    icon: "icon-trash",
    label: "#buttons_clearSelection"
  },
  conditions: [{ alias: e, propertyConfigAlias: "allowClear" }]
}, C = {
  type: "propertyAction",
  kind: "default",
  alias: "Umb.Contentment.PropertyAction.EditJson",
  name: "[Contentment] Edit JSON Property Action",
  api: () => import("./edit-json.controller.js"),
  forPropertyEditorUis: [
    "Umb.Contentment.PropertyEditorUi.ConfigurationEditor",
    "Umb.Contentment.PropertyEditorUi.CodeEditor",
    "Umb.Contentment.PropertyEditorUi.ContentBlocks",
    "Umb.Contentment.PropertyEditorUi.DataList",
    "Umb.Contentment.PropertyEditorUi.DataPicker",
    "Umb.Contentment.PropertyEditorUi.EditorNotes",
    "Umb.Contentment.PropertyEditorUi.ListItems",
    "Umb.Contentment.PropertyEditorUi.Notes",
    "Umb.Contentment.PropertyEditorUi.SocialLinks",
    "Umb.Contentment.PropertyEditorUi.TemplatedLabel",
    "Umb.Contentment.PropertyEditorUi.TextboxList"
  ],
  meta: {
    icon: "icon-brackets",
    label: "#contentment_editJson"
  },
  conditions: [{ alias: e, propertyConfigAlias: "enableDevMode" }]
}, f = [E, C], g = {
  type: "propertyEditorUi",
  alias: "Umb.Contentment.PropertyEditorUi.Buttons",
  name: "[Contentment] Buttons Property Editor UI",
  element: () => import("./buttons.element.js"),
  meta: {
    label: "Buttons",
    icon: "icon-tab",
    group: "contentment"
  }
}, h = {
  type: "propertyEditorSchema",
  name: "[Contentment] Bytes Property Editor Schema",
  alias: "Umbraco.Community.Contentment.Bytes",
  meta: {
    defaultPropertyEditorUiAlias: "Umb.Contentment.PropertyEditorUi.Bytes"
  }
}, P = {
  type: "propertyEditorUi",
  alias: "Umb.Contentment.PropertyEditorUi.Bytes",
  name: "[Contentment] Bytes Property Editor UI",
  element: () => import("./bytes.element.js"),
  meta: {
    label: "Bytes",
    icon: "icon-binarycode",
    group: "contentment",
    propertyEditorSchemaAlias: "Umbraco.Community.Contentment.Bytes",
    settings: {
      properties: [
        {
          alias: "kilo",
          label: "Kilobytes?",
          description: "How many bytes do you prefer in your kilobyte?",
          propertyEditorUiAlias: "Umb.Contentment.PropertyEditorUi.RadioButtonList",
          config: [
            {
              alias: "items",
              value: [
                {
                  name: "1000 bytes",
                  value: "1000",
                  description: "The modern standard for a kilobyte is <strong>1000 bytes</strong> (decimal)."
                },
                {
                  name: "1024 bytes",
                  value: "1024",
                  description: "Computationally, there are <strong>1024 bytes</strong> (binary). Today, this is known as a kibibyte."
                }
              ]
            },
            { alias: "showDescriptions", value: "true" }
          ]
        },
        {
          alias: "decimals",
          label: "Decimal places",
          description: "How many decimal places would you like?",
          propertyEditorUiAlias: "Umb.PropertyEditorUi.Slider",
          config: [
            { alias: "initVal1", value: 2 },
            { alias: "minVal", value: 0 },
            { alias: "maxVal", value: 10 },
            { alias: "step", value: 1 }
          ]
        }
      ],
      defaultData: [
        { alias: "kilo", value: "1024" },
        { alias: "decimals", value: 2 }
      ]
    }
  }
}, T = [h, P], k = {
  type: "propertyEditorUi",
  alias: "Umb.Contentment.PropertyEditorUi.CascadingDropdownList",
  name: "[Contentment] Cascading Dropdown List Property Editor UI",
  element: () => import("./cascading-dropdown-list.element.js"),
  meta: {
    label: "Cascading Dropdown List",
    icon: "icon-target",
    group: "contentment"
  }
}, v = {
  type: "propertyEditorUi",
  alias: "Umb.Contentment.PropertyEditorUi.CheckBoxList",
  name: "[Contentment] Checkbox List Property Editor UI",
  element: () => import("./checkbox-list.element.js"),
  meta: {
    label: "Checkbox List",
    icon: "icon-checkbox",
    group: "contentment"
  }
}, S = {
  type: "propertyEditorUi",
  alias: "Umb.Contentment.PropertyEditorUi.CodeEditor",
  name: "[Contentment] Code Editor Property Editor UI",
  element: () => import("./code-editor.element.js"),
  meta: {
    label: "Code Editor",
    icon: "icon-code",
    group: "contentment",
    propertyEditorSchemaAlias: "Umbraco.Plain.String",
    settings: {
      properties: [
        {
          alias: "mode",
          label: "Language mode",
          description: 'Select the programming language mode. The default mode is "Razor (CSHTML)".',
          propertyEditorUiAlias: "Umb.Contentment.PropertyEditorUi.DropdownList",
          config: [
            {
              alias: "items",
              value: [
                { name: "CSS", value: "css" },
                { name: "HTML", value: "html" },
                { name: "JavaScript", value: "javascript" },
                { name: "JSON", value: "json" },
                { name: "Markdown", value: "markdown" },
                { name: "Razor (CSHTML)", value: "razor" },
                { name: "TypeScript", value: "typescript" }
              ]
            }
          ]
        }
      ],
      defaultData: [{ alias: "mode", value: "razor" }]
    }
  }
}, I = [
  {
    type: "modal",
    alias: "Umb.Contentment.Modal.ConfigurationEditor.Selection",
    name: "[Contentment] Configuration Editor Selection Modal",
    element: () => import("./configuration-editor-selection-modal.element.js")
  },
  {
    type: "modal",
    alias: "Umb.Contentment.Modal.ConfigurationEditor.Workspace",
    name: "[Contentment] Configuration Editor Workspace Modal",
    element: () => import("./configuration-editor-workspace-modal.element.js")
  }
], D = {
  type: "propertyEditorUi",
  alias: "Umb.Contentment.PropertyEditorUi.ConfigurationEditor",
  name: "[Contentment] Configuration Editor Property Editor UI",
  element: () => import("./configuration-editor.element.js"),
  meta: {
    label: "Configuration Editor",
    icon: "icon-settings-alt",
    group: "contentment"
  }
}, L = [...I, D], x = {
  type: "propertyEditorSchema",
  name: "[Contentment] Content Blocks Property Editor Schema",
  alias: "Umbraco.Community.Contentment.ContentBlocks",
  meta: {
    defaultPropertyEditorUiAlias: "Umb.Contentment.PropertyEditorUi.ContentBlocks"
  }
}, A = {
  type: "propertyEditorUi",
  alias: "Umb.Contentment.PropertyEditorUi.ContentBlocks",
  name: "[Contentment] Content Blocks Property Editor UI",
  element: () => import("./read-only.element.js"),
  meta: {
    label: "Content Blocks",
    icon: "icon-fa-server",
    group: "contentment",
    propertyEditorSchemaAlias: "Umbraco.Community.Contentment.ContentBlocks",
    settings: {
      properties: [
        {
          alias: "displayMode",
          label: "#contentment_labelDisplayMode",
          description: "Select and configure how to display the blocks in the editor.",
          propertyEditorUiAlias: "Umb.Contentment.PropertyEditorUi.ConfigurationEditor",
          config: [
            { alias: "addButtonLabelKey", value: "contentment_configureDisplayMode" },
            { alias: "configurationType", value: "contentmentDisplayMode" },
            { alias: "maxItems", value: 1 },
            { alias: "enableDevMode", value: !0 }
          ]
        },
        {
          alias: "contentBlockTypes",
          label: "Block types",
          description: "Configure the element types to be used as blocks.",
          propertyEditorUiAlias: "Umb.Contentment.PropertyEditorUi.ReadOnly"
        },
        {
          alias: "enableFilter",
          label: "Enable filter?",
          description: "Select to enable the search filter in the overlay selection panel.",
          propertyEditorUiAlias: "Umb.PropertyEditorUi.Toggle"
        },
        {
          alias: "maxItems",
          label: "Maximum items",
          description: "Enter the number for the maximum items allowed.<br>Use '0' for an unlimited amount.",
          propertyEditorUiAlias: "Umb.Contentment.PropertyEditorUi.NumberInput"
        },
        {
          alias: "disableSorting",
          label: "Disable sorting?",
          description: "Select to disable sorting of the items.",
          propertyEditorUiAlias: "Umb.PropertyEditorUi.Toggle"
        },
        {
          alias: "enableDevMode",
          label: "Developer mode?",
          description: "Enable a property action to edit the raw data for the editor value.",
          propertyEditorUiAlias: "Umb.PropertyEditorUi.Toggle"
        }
      ]
    }
  }
}, w = [x, A], M = {
  type: "propertyEditorUi",
  alias: "Umb.Contentment.PropertyEditorUi.ContentSource",
  name: "[Contentment] Content Source Property Editor UI",
  element: () => import("./content-source.element.js"),
  meta: {
    label: "Content Source",
    icon: "icon-page-add",
    group: "contentment"
  }
}, $ = {
  type: "propertyEditorUi",
  alias: "Umb.Contentment.PropertyEditorUi.CustomComponentList",
  name: "[Contentment] Custom Component List Property Editor UI",
  element: () => import("./custom-component-list.element.js"),
  meta: {
    label: "Custom Component List",
    icon: "icon-shipping-box",
    group: "contentment"
  }
}, B = {
  type: "propertyEditorUi",
  alias: "Umb.Contentment.PropertyEditorUi.DictionaryPicker",
  name: "[Contentment] Dictionary Picker Property Editor UI",
  element: () => import("./dictionary-picker.element.js"),
  meta: {
    label: "Dictionary Picker",
    icon: "icon-book-alt",
    group: "contentment"
  }
}, N = {
  type: "propertyEditorSchema",
  name: "[Contentment] Data List  Property Editor Schema",
  alias: "Umbraco.Community.Contentment.DataList",
  meta: {
    defaultPropertyEditorUiAlias: "Umb.Contentment.PropertyEditorUi.DataList",
    settings: {
      properties: [
        {
          alias: "dataSource",
          label: "#contentment_labelDataSource",
          description: "{#contentment_configureDataSource}.",
          propertyEditorUiAlias: "Umb.Contentment.PropertyEditorUi.ConfigurationEditor",
          config: [
            { alias: "addButtonLabelKey", value: "contentment_configureDataSource" },
            { alias: "configurationType", value: "contentmentDataSource" },
            { alias: "maxItems", value: 1 },
            { alias: "enableDevMode", value: !0 }
          ]
        },
        {
          alias: "listEditor",
          label: "#contentment_labelListEditor",
          description: "{#contentment_configureListEditor}.",
          propertyEditorUiAlias: "Umb.Contentment.PropertyEditorUi.ConfigurationEditor",
          config: [
            { alias: "addButtonLabelKey", value: "contentment_configureListEditor" },
            { alias: "configurationType", value: "contentmentListEditor" },
            { alias: "maxItems", value: 1 },
            { alias: "enableDevMode", value: !0 }
          ]
        }
      ]
    }
  }
}, R = {
  type: "propertyEditorUi",
  alias: "Umb.Contentment.PropertyEditorUi.DataList",
  name: "[Contentment] Data List Property Editor UI",
  element: () => import("./data-list.element.js"),
  meta: {
    label: "Data List",
    icon: "icon-fa-list-ul",
    group: "contentment",
    propertyEditorSchemaAlias: "Umbraco.Community.Contentment.DataList",
    settings: {
      properties: [
        {
          alias: "preview",
          label: "Preview",
          propertyEditorUiAlias: "Umb.Contentment.PropertyEditorUi.DataListPreview"
        }
      ]
    }
  }
}, z = {
  type: "propertyEditorUi",
  alias: "Umb.Contentment.PropertyEditorUi.DataListPreview",
  name: "[Contentment] Data List Preview Property Editor UI",
  element: () => import("./data-list-preview.element.js"),
  meta: {
    label: "Data List Preview",
    icon: "icon-fa-list-ul",
    group: "contentment"
  }
}, _ = {
  type: "repository",
  alias: "Umb.Contentment.Repository.DataList",
  name: "[Contentment] Data List Repository",
  api: () => import("./data-list.repository.js")
}, H = [N, R, z, _], O = {
  type: "propertyEditorSchema",
  name: "[Contentment] Data Picker Property Editor Schema",
  alias: "Umbraco.Community.Contentment.DataPicker",
  meta: {
    defaultPropertyEditorUiAlias: "Umb.Contentment.PropertyEditorUi.DataPicker"
  }
}, q = {
  type: "propertyEditorUi",
  alias: "Umb.Contentment.PropertyEditorUi.DataPicker",
  name: "[Contentment] Data Picker Property Editor UI",
  element: () => import("./data-picker.element.js"),
  meta: {
    label: "Data Picker",
    icon: "icon-fa-arrow-pointer",
    group: "contentment",
    propertyEditorSchemaAlias: "Umbraco.Community.Contentment.DataPicker",
    settings: {
      properties: [
        {
          alias: "dataSource",
          label: "#contentment_labelDataSource",
          description: "{#contentment_configureDataSource}.",
          propertyEditorUiAlias: "Umb.Contentment.PropertyEditorUi.ConfigurationEditor",
          config: [
            { alias: "addButtonLabelKey", value: "contentment_configureDataSource" },
            { alias: "configurationType", value: "contentmentDataSource" },
            { alias: "maxItems", value: 1 },
            { alias: "enableDevMode", value: !0 }
          ]
        },
        {
          alias: "displayMode",
          label: "#contentment_labelDisplayMode",
          description: "Select display mode for the picker editor.",
          propertyEditorUiAlias: "Umb.Contentment.PropertyEditorUi.ConfigurationEditor",
          config: [
            { alias: "addButtonLabelKey", value: "contentment_configureDisplayMode" },
            { alias: "configurationType", value: "contentmentDisplayMode" },
            { alias: "maxItems", value: 1 },
            { alias: "enableDevMode", value: !0 }
          ]
        },
        {
          alias: "pageSize",
          label: "Page size",
          description: "How many items to display per page? The default value is 12.",
          propertyEditorUiAlias: "Umb.Contentment.PropertyEditorUi.NumberInput"
        },
        {
          alias: "overlaySize",
          label: "Editor overlay size",
          description: "Select the size of the overlay panel. The default is 'medium'.",
          propertyEditorUiAlias: "Umb.PropertyEditorUi.OverlaySize"
        },
        {
          alias: "hideSearch",
          label: "Hide search box?",
          description: "Hide the search box in the overlay panel.",
          propertyEditorUiAlias: "Umb.PropertyEditorUi.Toggle"
        },
        {
          alias: "maxItems",
          label: "Maximum items",
          description: "Enter the number for the maximum items allowed.<br>Use '0' for an unlimited amount.",
          propertyEditorUiAlias: "Umb.Contentment.PropertyEditorUi.NumberInput"
        },
        {
          alias: "allowDuplicates",
          label: "Allow duplicates?",
          description: "Select to allow the editor to select duplicate items.",
          propertyEditorUiAlias: "Umb.PropertyEditorUi.Toggle"
        },
        {
          alias: "enableDevMode",
          label: "Developer mode?",
          description: "Enable a property action to edit the raw data for the editor value.",
          propertyEditorUiAlias: "Umb.PropertyEditorUi.Toggle"
        }
      ],
      defaultData: [
        { alias: "overlaySize", value: "medium" },
        { alias: "pageSize", value: 12 },
        { alias: "allowDuplicates", value: !0 }
      ]
    }
  }
}, j = {
  type: "modal",
  alias: "Umb.Contentment.Modal.DataPicker",
  name: "[Contentment] Data Picker Modal",
  element: () => import("./data-picker-modal.element.js")
}, F = [O, q, j], G = {
  type: "propertyEditorUi",
  alias: "Umb.Contentment.PropertyEditorUi.DropdownList",
  name: "[Contentment] Dropdown List Property Editor UI",
  element: () => import("./dropdown-list.element.js"),
  meta: {
    label: "Dropdown List",
    icon: "icon-target",
    group: "contentment"
  }
}, K = {
  type: "propertyEditorUi",
  alias: "Umb.Contentment.PropertyEditorUi.EditorNotes",
  name: "[Contentment] Editor Notes Property Editor UI",
  element: () => import("./editor-notes.element.js"),
  meta: {
    label: "Editor Notes",
    icon: "icon-alert",
    group: "contentment",
    propertyEditorSchemaAlias: "Umbraco.Community.Contentment.Notes",
    settings: {
      properties: [
        {
          alias: "icon",
          label: "Icon",
          description: "Select an icon to be displayed next to the message.",
          propertyEditorUiAlias: "Umb.Contentment.PropertyEditorUi.IconPicker",
          config: [{ alias: "hideColors", value: !0 }]
        },
        {
          alias: "heading",
          label: "Heading",
          propertyEditorUiAlias: "Umb.PropertyEditorUi.TextBox"
        },
        {
          alias: "message",
          label: "Message",
          description: "Enter the notes to be displayed for the content editor.",
          propertyEditorUiAlias: "Umb.PropertyEditorUi.Tiptap",
          config: [
            {
              alias: "extensions",
              value: [
                "Umb.Tiptap.RichTextEssentials",
                "Umb.Tiptap.Embed",
                "Umb.Tiptap.Link",
                "Umb.Tiptap.Figure",
                "Umb.Tiptap.Image",
                "Umb.Tiptap.Subscript",
                "Umb.Tiptap.Superscript",
                "Umb.Tiptap.Table",
                "Umb.Tiptap.Underline",
                "Umb.Tiptap.TextAlign",
                "Umb.Tiptap.MediaUpload"
              ]
            },
            {
              alias: "toolbar",
              value: [
                [
                  ["Umb.Tiptap.Toolbar.SourceEditor"],
                  [
                    "Umb.Tiptap.Toolbar.StyleSelect",
                    "Umb.Tiptap.Toolbar.Bold",
                    "Umb.Tiptap.Toolbar.Italic",
                    "Umb.Tiptap.Toolbar.Underline"
                  ],
                  [
                    "Umb.Tiptap.Toolbar.TextAlignLeft",
                    "Umb.Tiptap.Toolbar.TextAlignCenter",
                    "Umb.Tiptap.Toolbar.TextAlignRight"
                  ],
                  ["Umb.Tiptap.Toolbar.BulletList", "Umb.Tiptap.Toolbar.OrderedList"],
                  ["Umb.Tiptap.Toolbar.Blockquote", "Umb.Tiptap.Toolbar.HorizontalRule"],
                  ["Umb.Tiptap.Toolbar.Link", "Umb.Tiptap.Toolbar.Unlink"],
                  ["Umb.Tiptap.Toolbar.MediaPicker", "Umb.Tiptap.Toolbar.EmbeddedMedia"]
                ]
              ]
            },
            { alias: "maxImageSize", value: 500 }
          ]
        },
        {
          alias: "alertType",
          label: "Style",
          description: "Select the style of the note.",
          propertyEditorUiAlias: "Umb.Contentment.PropertyEditorUi.EditorNoteStyles"
        },
        {
          alias: "hideLabel",
          label: "Hide label?",
          description: `<uui-tag look="placeholder">experimental</uui-tag>
Select to hide the label and have the editor take up the full width of the panel.`,
          propertyEditorUiAlias: "Umb.PropertyEditorUi.Toggle"
        },
        {
          alias: "hidePropertyGroup",
          label: "Move above property group container?",
          description: `<uui-tag look="placeholder">experimental</uui-tag>
Select to move the note above/outside the property group.`,
          propertyEditorUiAlias: "Umb.PropertyEditorUi.Toggle"
        }
      ],
      defaultData: [
        {
          alias: "alertType",
          value: "warning"
        }
      ]
    }
  }
}, V = {
  type: "propertyEditorUi",
  alias: "Umb.Contentment.PropertyEditorUi.EditorNoteStyles",
  name: "[Contentment] Editor Note Styles Property Editor UI",
  element: () => import("./editor-note-styles.element.js"),
  meta: {
    label: "Editor Note Styles",
    icon: "icon-contentment",
    group: "contentment"
  }
}, J = [K, V], W = {
  type: "propertyEditorSchema",
  name: "[Contentment] Icon Picker Property Editor Schema",
  alias: "Umbraco.Community.Contentment.IconPicker",
  meta: {
    defaultPropertyEditorUiAlias: "Umb.Contentment.PropertyEditorUi.IconPicker"
  }
}, X = {
  type: "propertyEditorUi",
  alias: "Umb.Contentment.PropertyEditorUi.IconPicker",
  name: "[Contentment] Icon Picker Property Editor UI",
  element: () => import("./icon-picker.element.js"),
  meta: {
    label: "Icon Picker",
    icon: "icon-palette",
    group: "contentment",
    propertyEditorSchemaAlias: "Umbraco.Community.Contentment.IconPicker",
    settings: {
      properties: [
        {
          alias: "defaultIcon",
          label: "Default Icon",
          description: "Select an icon to be displayed as the default icon, (for when no icon has been selected).",
          propertyEditorUiAlias: "Umb.Contentment.PropertyEditorUi.IconPicker"
        },
        {
          alias: "size",
          label: "Size",
          description: 'Select the size of icon picker. The default is "large".',
          propertyEditorUiAlias: "Umb.Contentment.PropertyEditorUi.RadioButtonList",
          config: [
            {
              alias: "items",
              value: [
                { name: "Small", value: "small" },
                { name: "Large", value: "large" }
              ]
            },
            { alias: "defaultValue", value: "large" }
          ]
        }
      ],
      defaultData: [{ alias: "size", value: "large" }]
    }
  }
}, Y = [W, X], Q = {
  type: "modal",
  alias: "Umb.Contentment.Modal.ItemPicker",
  name: "[Contentment] Item Picker Modal",
  element: () => import("./item-picker-modal.element.js")
}, Z = {
  type: "propertyEditorUi",
  alias: "Umb.Contentment.PropertyEditorUi.ItemPicker",
  name: "[Contentment] Item Picker Property Editor UI",
  element: () => import("./item-picker.element.js"),
  meta: {
    label: "Item Picker",
    icon: "icon-fa-arrow-pointer",
    group: "contentment"
  }
}, tt = [Q, Z], et = {
  type: "propertyEditorSchema",
  name: "[Contentment] List Items Property Editor Schema",
  alias: "Umbraco.Community.Contentment.ListItems",
  meta: {
    defaultPropertyEditorUiAlias: "Umb.Contentment.PropertyEditorUi.ListItems"
  }
}, ot = {
  type: "propertyEditorUi",
  alias: "Umb.Contentment.PropertyEditorUi.ListItems",
  name: "[Contentment] List Items Property Editor UI",
  element: () => import("./list-items.element.js"),
  meta: {
    label: "List Items",
    icon: "icon-fa-table-list",
    group: "contentment",
    propertyEditorSchemaAlias: "Umbraco.Community.Contentment.ListItems",
    settings: {
      properties: [
        {
          alias: "hideIcon",
          label: "Hide icon field?",
          description: "Select to hide the icon picker.",
          propertyEditorUiAlias: "Umb.PropertyEditorUi.Toggle"
        },
        {
          alias: "hideDescription",
          label: "Hide description field?",
          description: "Select to hide the description text field.",
          propertyEditorUiAlias: "Umb.PropertyEditorUi.Toggle"
        },
        {
          alias: "confirmRemoval",
          label: "Confirm removals?",
          description: "Select to enable a confirmation prompt when removing an item.",
          propertyEditorUiAlias: "Umb.PropertyEditorUi.Toggle"
        },
        {
          alias: "maxItems",
          label: "Maximum items",
          description: "Enter the number for the maximum items allowed.<br>Use '0' for an unlimited amount.",
          propertyEditorUiAlias: "Umb.Contentment.PropertyEditorUi.NumberInput"
        },
        {
          alias: "enableDevMode",
          label: "Developer mode?",
          description: "Enable a property action to edit the raw data for the editor value.",
          propertyEditorUiAlias: "Umb.PropertyEditorUi.Toggle"
        }
      ],
      defaultData: [{ alias: "maxItems", value: 0 }]
    }
  }
}, it = [et, ot], at = {
  type: "propertyEditorUi",
  alias: "Umb.Contentment.PropertyEditorUi.ManifestPicker",
  name: "[Contentment] Manifest Picker Property Editor UI",
  element: () => import("./manifest-picker.element.js"),
  meta: {
    label: "Manifest Picker",
    icon: "icon-fa-codepen",
    group: "contentment",
    settings: {
      properties: [
        {
          alias: "extensionType",
          label: "Extension type",
          description: "Select the extension type to pick from.",
          propertyEditorUiAlias: "Umb.PropertyEditorUi.TextBox"
        }
      ]
    }
  }
}, nt = {
  type: "propertyEditorUi",
  alias: "Umb.Contentment.PropertyEditorUi.MemberTypePicker",
  name: "[Contentment] Member Type Picker Property Editor UI",
  element: () => import("./member-type-picker.element.js"),
  meta: {
    label: "Member Type Picker",
    icon: "icon-checkbox",
    group: "contentment"
  }
}, rt = {
  type: "propertyEditorSchema",
  name: "[Contentment] Notes Property Editor Schema",
  alias: "Umbraco.Community.Contentment.Notes",
  meta: {
    defaultPropertyEditorUiAlias: "Umb.Contentment.PropertyEditorUi.Notes"
  }
}, lt = {
  type: "propertyEditorUi",
  alias: "Umb.Contentment.PropertyEditorUi.Notes",
  name: "[Contentment] Notes Property Editor UI",
  element: () => import("./notes.element.js"),
  meta: {
    label: "Notes",
    icon: "icon-autofill",
    group: "contentment",
    propertyEditorSchemaAlias: "Umbraco.Community.Contentment.Notes",
    settings: {
      properties: [
        {
          alias: "notes",
          label: "Notes",
          description: "Enter the notes to be displayed for the content editor.",
          propertyEditorUiAlias: "Umb.PropertyEditorUi.Tiptap",
          config: [
            {
              alias: "extensions",
              value: [
                "Umb.Tiptap.RichTextEssentials",
                "Umb.Tiptap.Embed",
                "Umb.Tiptap.Link",
                "Umb.Tiptap.Figure",
                "Umb.Tiptap.Image",
                "Umb.Tiptap.Subscript",
                "Umb.Tiptap.Superscript",
                "Umb.Tiptap.Table",
                "Umb.Tiptap.Underline",
                "Umb.Tiptap.TextAlign",
                "Umb.Tiptap.MediaUpload"
              ]
            },
            {
              alias: "toolbar",
              value: [
                [
                  ["Umb.Tiptap.Toolbar.SourceEditor"],
                  ["Umb.Tiptap.Toolbar.Bold", "Umb.Tiptap.Toolbar.Italic", "Umb.Tiptap.Toolbar.Underline"],
                  [
                    "Umb.Tiptap.Toolbar.TextAlignLeft",
                    "Umb.Tiptap.Toolbar.TextAlignCenter",
                    "Umb.Tiptap.Toolbar.TextAlignRight"
                  ],
                  ["Umb.Tiptap.Toolbar.BulletList", "Umb.Tiptap.Toolbar.OrderedList"],
                  ["Umb.Tiptap.Toolbar.Blockquote", "Umb.Tiptap.Toolbar.HorizontalRule"],
                  ["Umb.Tiptap.Toolbar.Link", "Umb.Tiptap.Toolbar.Unlink"],
                  ["Umb.Tiptap.Toolbar.MediaPicker", "Umb.Tiptap.Toolbar.EmbeddedMedia"]
                ]
              ]
            },
            { alias: "maxImageSize", value: 500 }
          ]
        },
        {
          alias: "hideLabel",
          label: "Hide label?",
          description: `<uui-tag look="placeholder">experimental</uui-tag>
Select to hide the label and have the editor take up the full width of the panel.`,
          propertyEditorUiAlias: "Umb.PropertyEditorUi.Toggle"
        },
        {
          alias: "hidePropertyGroup",
          label: "Move above property group container?",
          description: `<uui-tag look="placeholder">experimental</uui-tag>
Select to move the note above/outside the property group.`,
          propertyEditorUiAlias: "Umb.PropertyEditorUi.Toggle"
        }
      ]
    }
  }
}, mt = [rt, lt], st = {
  type: "propertyEditorSchema",
  name: "[Contentment] Number Input Property Editor Schema",
  alias: "Umbraco.Community.Contentment.NumberInput",
  meta: {
    defaultPropertyEditorUiAlias: "Umb.Contentment.PropertyEditorUi.NumberInput"
  }
}, pt = {
  type: "propertyEditorUi",
  alias: "Umb.Contentment.PropertyEditorUi.NumberInput",
  name: "[Contentment] Number Input Property Editor UI",
  element: () => import("./number-input.element.js"),
  meta: {
    label: "Number Input",
    icon: "icon-ordered-list",
    group: "contentment",
    propertyEditorSchemaAlias: "Umbraco.Community.Contentment.NumberInput",
    settings: {
      properties: [
        {
          alias: "size",
          label: "Numeric size",
          description: "How big will the number get?",
          propertyEditorUiAlias: "Umb.Contentment.PropertyEditorUi.RadioButtonList",
          config: [
            {
              alias: "items",
              value: [
                { name: "Small", value: "s", description: "Ideal for numbers under 100, comfortably fits 3 digits." },
                {
                  name: "Medium",
                  value: "m",
                  description: "Better when dealing with hundreds and thousands, comfortably fits 6 digits."
                },
                { name: "Large", value: "l", description: "Did you know a 18 digit number is called a quintillion!" },
                {
                  name: "Extra Large",
                  value: "xl",
                  description: "Useful when aligning with full width text inputs. Fits 88 digits <em>- that's over an octovigintillion!</em>"
                }
              ]
            },
            { alias: "showDescriptions", value: !0 }
          ]
        },
        {
          alias: "placeholderText",
          label: "Placeholder text",
          description: "Add placeholder text for the number input.<br>This is to be used as instructional information, not as a default value.",
          propertyEditorUiAlias: "Umb.PropertyEditorUi.TextBox"
        }
      ],
      defaultData: [{ alias: "size", value: "s" }]
    }
  }
}, dt = [st, pt], ct = {
  type: "propertyEditorUi",
  alias: "Umb.Contentment.PropertyEditorUi.RadioButtonList",
  name: "[Contentment] Radio Button List Property Editor UI",
  element: () => import("./radio-button-list.element.js"),
  meta: {
    label: "Radio Button List",
    icon: "icon-target",
    group: "contentment"
  }
}, yt = {
  type: "propertyEditorUi",
  alias: "Umb.Contentment.PropertyEditorUi.ReadOnly",
  name: "[Contentment] Read Only Property Editor UI",
  element: () => import("./read-only.element.js"),
  meta: {
    label: "Read Only",
    icon: "icon-hearts",
    group: "contentment"
  }
}, bt = {
  type: "propertyEditorSchema",
  name: "[Contentment] Render Macro",
  alias: "Umbraco.Community.Contentment.RenderMacro",
  meta: {
    defaultPropertyEditorUiAlias: "Umb.Contentment.PropertyEditorUi.RenderMacro"
  }
}, ut = {
  type: "propertyEditorUi",
  alias: "Umb.Contentment.PropertyEditorUi.RenderMacro",
  name: "[Contentment] Render Macro Property Editor UI",
  element: () => import("./render-macro.element.js"),
  meta: {
    label: "Render Macro",
    icon: "icon-box",
    group: "contentment",
    propertyEditorSchemaAlias: "Umbraco.Community.Contentment.RenderMacro",
    settings: {
      properties: [
        {
          alias: "notes",
          label: "Notes",
          propertyEditorUiAlias: "Umb.Contentment.PropertyEditorUi.EditorNotes",
          config: [
            { alias: "alertType", value: "warning" },
            { alias: "icon", value: "icon-alert" },
            { alias: "heading", value: "Render Macro has been deprecated" },
            {
              alias: "message",
              value: "<p><em>Support for Macros were deprecated in Umbraco 14. Please consider alternative functionality.</em></p>"
            },
            { alias: "hideLabel", value: !0 }
          ]
        }
      ]
    }
  }
}, Ut = [bt, ut], Et = {
  type: "modal",
  alias: "Umb.Contentment.Modal.SocialLinks.Selection",
  name: "[Contentment] Social Links Selection Modal",
  element: () => import("./social-links-selection-modal.element.js")
}, Ct = {
  type: "propertyEditorSchema",
  name: "[Contentment] Social Links Property Editor Schema",
  alias: "Umbraco.Community.Contentment.SocialLinks",
  meta: {
    defaultPropertyEditorUiAlias: "Umb.Contentment.PropertyEditorUi.SocialLinks"
  }
}, ft = {
  type: "propertyEditorUi",
  alias: "Umb.Contentment.PropertyEditorUi.SocialLinks",
  name: "[Contentment] Social Links Property Editor UI",
  element: () => import("./social-links.element.js"),
  meta: {
    label: "Social Links",
    icon: "icon-molecular-network",
    group: "contentment",
    propertyEditorSchemaAlias: "Umbraco.Community.Contentment.SocialLinks",
    settings: {
      properties: [
        {
          alias: "networks",
          label: "Social networks",
          description: "Define the icon set for the available social networks.",
          propertyEditorUiAlias: "Umb.Contentment.PropertyEditorUi.ConfigurationEditor",
          config: [
            { alias: "addButtonLabelKey", value: "contentment_configureSocialNetwork" },
            {
              alias: "items",
              value: [
                {
                  key: "network",
                  name: "Social network",
                  icon: "icon-document",
                  defaultValues: {
                    icon: "icon-document",
                    backgroundColor: "#fff",
                    iconColor: "#000"
                  },
                  expressions: {
                    name: (t) => t.name,
                    description: (t) => t.url,
                    icon: (t) => t.icon.split(" ")[0],
                    cardStyle: (t) => ({ "background-color": t.backgroundColor }),
                    iconStyle: (t) => ({ color: t.iconColor })
                  },
                  fields: [
                    {
                      key: "network",
                      name: "Network",
                      description: "An alias for the social network. This will be used as the value of the selection.",
                      propertyEditorUiAlias: "Umb.PropertyEditorUi.TextBox"
                    },
                    {
                      key: "name",
                      name: "Name",
                      description: "This will be used as the label of the social network in selection modal.",
                      propertyEditorUiAlias: "Umb.PropertyEditorUi.TextBox"
                    },
                    {
                      key: "url",
                      name: "Base URL",
                      description: "This will be the starting part of the social network's profile URL.",
                      propertyEditorUiAlias: "Umb.PropertyEditorUi.TextBox"
                    },
                    {
                      key: "icon",
                      name: "Icon",
                      description: "Typically select the logo for the social network.",
                      propertyEditorUiAlias: "Umb.Contentment.PropertyEditorUi.IconPicker",
                      config: {
                        hideColors: !0
                      }
                    },
                    {
                      key: "backgroundColor",
                      name: "Background color",
                      description: "The background color for the icon.",
                      propertyEditorUiAlias: "Umb.PropertyEditorUi.EyeDropper"
                    },
                    {
                      key: "iconColor",
                      name: "Icon color",
                      description: "The foreground color of the icon.",
                      propertyEditorUiAlias: "Umb.PropertyEditorUi.EyeDropper"
                    }
                  ],
                  overlaySize: "medium"
                }
              ]
            },
            { alias: "enableDevMode", value: !0 },
            { alias: "uiAlias", value: "Umb.Contentment.DisplayMode.Cards" }
          ]
        },
        {
          alias: "confirmRemoval",
          label: "Confirm removals?",
          description: "Select to enable a confirmation prompt when removing an item.",
          propertyEditorUiAlias: "Umb.PropertyEditorUi.Toggle"
        },
        {
          alias: "maxItems",
          label: "Maximum items",
          description: "Enter the number for the maximum items allowed.<br>Use '0' for an unlimited amount.",
          propertyEditorUiAlias: "Umb.Contentment.PropertyEditorUi.NumberInput"
        },
        {
          alias: "enableDevMode",
          label: "Developer mode?",
          description: "Enable a property action to edit the raw data for the editor value.",
          propertyEditorUiAlias: "Umb.PropertyEditorUi.Toggle"
        }
      ],
      defaultData: [
        {
          alias: "networks",
          value: [
            {
              key: "network",
              value: {
                network: "facebook",
                name: "Facebook",
                url: "https://facebook.com/",
                icon: "icon-facebook",
                backgroundColor: "#3b5998",
                iconColor: "#fff"
              }
            },
            {
              key: "network",
              value: {
                network: "x-twitter",
                name: "X (formerly Twitter)",
                url: "https://twitter.com/",
                icon: "icon-x-twitter",
                backgroundColor: "#000",
                iconColor: "#fff"
              }
            },
            {
              key: "network",
              value: {
                network: "instagram",
                name: "Instagram",
                url: "https://instagram.com/",
                icon: "icon-instagram",
                backgroundColor: "#305777",
                iconColor: "#fff"
              }
            },
            {
              key: "network",
              value: {
                network: "linkedin",
                name: "LinkedIn",
                url: "https://linkedin.com/in/",
                icon: "icon-linkedin",
                backgroundColor: "#007bb6",
                iconColor: "#fff"
              }
            },
            {
              key: "network",
              value: {
                network: "mastodon",
                name: "Mastodon",
                url: "https://mastodon.social/",
                icon: "icon-mastodon",
                backgroundColor: "#5b4be1",
                iconColor: "#fff"
              }
            },
            {
              key: "network",
              value: {
                network: "youtube",
                name: "YouTube",
                url: "https://youtube.com/",
                icon: "icon-youtube",
                backgroundColor: "#f00",
                iconColor: "#fff"
              }
            },
            {
              key: "network",
              value: {
                network: "github",
                name: "GitHub",
                url: "https://github.com/",
                icon: "icon-github",
                backgroundColor: "#000",
                iconColor: "#fff"
              }
            },
            {
              key: "network",
              value: {
                network: "discord",
                name: "Discord",
                url: "https://discord.com/users/",
                icon: "icon-discord",
                backgroundColor: "#404eed",
                iconColor: "#fff"
              }
            }
          ]
        }
      ]
    }
  }
}, gt = [Et, Ct, ft], ht = {
  type: "propertyEditorUi",
  alias: "Umb.Contentment.PropertyEditorUi.Tags",
  name: "[Contentment] Tags Property Editor UI",
  element: () => import("./tags.element.js"),
  meta: {
    label: "Tags",
    icon: "icon-fa-tags",
    group: "contentment"
  }
}, Pt = {
  type: "propertyEditorSchema",
  name: "[Contentment] Templated Label Property Editor Schema",
  alias: "Umbraco.Community.Contentment.TemplatedLabel",
  meta: {
    defaultPropertyEditorUiAlias: "Umb.Contentment.PropertyEditorUi.TemplatedLabel",
    settings: {
      properties: [
        {
          alias: "umbracoDataValueType",
          label: "Value type",
          description: "Select the value's type. This defines how the underlying value is stored in the database.",
          propertyEditorUiAlias: "Umb.Contentment.PropertyEditorUi.DropdownList",
          config: [
            {
              alias: "items",
              value: [
                { name: "Big Integer", value: "BIGINT" },
                { name: "Date", value: "DATE" },
                { name: "Date/Time", value: "DATETIME" },
                { name: "Decimal", value: "DECIMAL" },
                { name: "Integer", value: "INT" },
                { name: "JSON", value: "JSON" },
                { name: "String", value: "STRING" },
                { name: "Text", value: "TEXT" },
                { name: "Time", value: "TIME" },
                { name: "XML", value: "XML" }
              ]
            }
          ]
        }
      ],
      defaultData: [{ alias: "umbracoDataValueType", value: "STRING" }]
    }
  }
}, Tt = {
  type: "propertyEditorUi",
  alias: "Umb.Contentment.PropertyEditorUi.TemplatedLabel",
  name: "[Contentment] Templated Label Property Editor UI",
  element: () => import("./templated-label.element.js"),
  meta: {
    label: "Templated Label",
    icon: "icon-fa-codepen",
    group: "contentment",
    propertyEditorSchemaAlias: "Umbraco.Community.Contentment.TemplatedLabel",
    settings: {
      properties: [
        {
          alias: "_notes",
          label: "",
          propertyEditorUiAlias: "Umb.Contentment.PropertyEditorUi.Notes",
          config: [
            {
              alias: "notes",
              value: `<details class="well">
<summary><strong>Do you need help with your custom template?</strong></summary>
<p>Your custom template will be used to display the label on the property from the underlying value.</p>
<p>If you are familiar with Liquid template syntax, you can display the value using an expression: e.g. <code>{{ model.value }}</code>.</p>
<p>If you need assistance with Liquid expression syntax, please refer to this resource: <a href="https://liquidjs.com/" target="_blank"><strong>liquidjs.com</strong></a>.</p>
<hr>
<p>If you would like a starting point for your custom template, here is an example.</p>
<umb-code-block language="Liquid template" copy>&lt;details&gt;
    &lt;summary&gt;View data&lt;/summary&gt;
    &lt;umb-code-block language="JSON" copy&gt;{{ model.value | json }}&lt;/umb-code-block&gt;
&lt;/details&gt;</umb-code-block>
</details>`
            },
            { alias: "hideLabel", value: !0 }
          ]
        },
        {
          alias: "notes",
          label: "Template",
          description: "Enter the Liquid template to be displayed for the label.",
          propertyEditorUiAlias: "Umb.Contentment.PropertyEditorUi.CodeEditor",
          config: [{ alias: "mode", value: "html" }]
        },
        {
          alias: "hideLabel",
          label: "Hide label?",
          description: `<uui-tag look="placeholder">experimental</uui-tag>
Select to hide the label and have the editor take up the full width of the panel.`,
          propertyEditorUiAlias: "Umb.PropertyEditorUi.Toggle"
        },
        {
          alias: "hidePropertyGroup",
          label: "Move above property group container?",
          description: `<uui-tag look="placeholder">experimental</uui-tag>
Select to move the note above/outside the property group.`,
          propertyEditorUiAlias: "Umb.PropertyEditorUi.Toggle"
        },
        {
          alias: "enableDevMode",
          label: "Developer mode?",
          description: "Enable a property action to edit the raw data for the editor value.",
          propertyEditorUiAlias: "Umb.PropertyEditorUi.Toggle"
        }
      ],
      defaultData: [{ alias: "component", value: ["Umb.Contentment.TemplatedLabelUi.CodeBlock"] }]
    }
  }
}, kt = [Pt, Tt], vt = {
  type: "propertyEditorUi",
  alias: "Umb.Contentment.PropertyEditorUi.TemplatedList",
  name: "[Contentment] Templated List Property Editor UI",
  element: () => import("./templated-list.element.js"),
  meta: {
    label: "Templated List",
    icon: "icon-fa-codepen",
    group: "contentment"
  }
}, St = {
  type: "propertyEditorSchema",
  name: "[Contentment] Textbox List Property Editor Schema",
  alias: "Umbraco.Community.Contentment.TextboxList",
  meta: {
    defaultPropertyEditorUiAlias: "Umb.Contentment.PropertyEditorUi.TextboxList"
  }
}, It = {
  type: "propertyEditorUi",
  alias: "Umb.Contentment.PropertyEditorUi.TextboxList",
  name: "[Contentment] Textbox List Property Editor UI",
  element: () => import("./textbox-list.element.js"),
  meta: {
    label: "Textbox List",
    icon: "icon-thumbnail-list",
    group: "contentment",
    propertyEditorSchemaAlias: "Umbraco.Community.Contentment.TextboxList",
    settings: {
      properties: [
        {
          alias: "dataSource",
          label: "Data source",
          description: "Select and configure a data source.",
          propertyEditorUiAlias: "Umb.Contentment.PropertyEditorUi.ConfigurationEditor",
          config: [
            { alias: "addButtonLabelKey", value: "contentment_configureDataSource" },
            { alias: "configurationType", value: "contentmentDataSource" },
            { alias: "maxItems", value: 1 }
          ]
        },
        {
          alias: "defaultIcon",
          label: "Default icon",
          description: "Select an icon to be displayed as the default icon,<br><em>(for when no icon is available)</em>.",
          propertyEditorUiAlias: "Umb.Contentment.PropertyEditorUi.IconPicker"
        },
        {
          alias: "labelStyle",
          label: "Label style",
          description: "Select the style of the item's label.",
          propertyEditorUiAlias: "Umb.Contentment.PropertyEditorUi.RadioButtonList",
          config: [
            {
              alias: "items",
              value: [
                { name: "Icon and Text", value: "both", description: "Displays both the item's icon and name." },
                { name: "Icon only", value: "icon", description: "Hides the item's name and only displays the icon." },
                { name: "Text only", value: "text", description: "Hides the item's icon and only displays the name." }
              ]
            },
            { alias: "showDescriptions", value: !0 }
          ]
        },
        {
          alias: "enableDevMode",
          label: "Developer mode?",
          description: "Enable a property action to edit the raw data for the editor value.",
          propertyEditorUiAlias: "Umb.PropertyEditorUi.Toggle"
        }
      ],
      defaultData: [
        { alias: "labelStyle", value: "both" },
        { alias: "defaultIcon", value: "icon-document" }
      ]
    }
  }
}, Dt = [St, It], Lt = {
  type: "propertyEditorSchema",
  name: "[Contentment] Text Input Property Editor Schema",
  alias: "Umbraco.Community.Contentment.TextInput",
  meta: {
    defaultPropertyEditorUiAlias: "Umb.Contentment.PropertyEditorUi.TextInput"
  }
}, xt = {
  type: "propertyEditorUi",
  alias: "Umb.Contentment.PropertyEditorUi.TextInput",
  name: "[Contentment] Text Input Property Editor UI",
  element: () => import("./text-input.element.js"),
  meta: {
    label: "Text Input",
    icon: "icon-autofill",
    group: "contentment",
    propertyEditorSchemaAlias: "Umbraco.Community.Contentment.TextInput",
    settings: {
      properties: [
        {
          alias: "inputType",
          label: "Input type",
          description: "Select the text-based HTML input type.",
          propertyEditorUiAlias: "Umb.Contentment.PropertyEditorUi.DropdownList",
          config: [
            {
              alias: "items",
              value: [
                { name: "Email", value: "email" },
                { name: "Telephone", value: "tel" },
                { name: "Text", value: "text" },
                { name: "URL", value: "url" }
              ]
            }
          ]
        },
        {
          alias: "placeholderText",
          label: "Placeholder text",
          description: "Add placeholder text for the text input.<br>This is to be used as instructional information, not as a default value.",
          propertyEditorUiAlias: "Umb.PropertyEditorUi.TextBox"
        },
        {
          alias: "dataSource",
          label: "Data source",
          description: "_(optional)_ Select and configure a data source to provide a HTML5 `<datalist>` for this text input.",
          propertyEditorUiAlias: "Umb.Contentment.PropertyEditorUi.ConfigurationEditor",
          config: [
            { alias: "addButtonLabelKey", value: "contentment_configureDataSource" },
            { alias: "configurationType", value: "contentmentDataSource" },
            { alias: "maxItems", value: 1 }
          ]
        },
        {
          alias: "maxChars",
          label: "Maximum allowed characters",
          description: "Enter the maximum number of characters allowed for the text input.<br>The default limit is 500 characters.",
          propertyEditorUiAlias: "Umb.Contentment.PropertyEditorUi.NumberInput"
        },
        {
          alias: "autocomplete",
          label: "Enable autocomplete?",
          description: "Select to enable your web-browser's autocomplete functionality on the text input.",
          propertyEditorUiAlias: "Umb.PropertyEditorUi.Toggle"
        },
        {
          alias: "spellcheck",
          label: "Enable spellcheck?",
          description: "Select to enable your web-browser's spellcheck functionality on the text input.",
          propertyEditorUiAlias: "Umb.PropertyEditorUi.Toggle"
        },
        {
          alias: "prepend",
          label: "Prepend icon",
          description: "<em>(optional)</em> Select an icon to prepend to (before) the text input.",
          propertyEditorUiAlias: "Umb.Contentment.PropertyEditorUi.IconPicker"
        },
        {
          alias: "append",
          label: "Append icon",
          description: "<em>(optional)</em> Select an icon to append to (after) the text input.",
          propertyEditorUiAlias: "Umb.Contentment.PropertyEditorUi.IconPicker"
        }
      ],
      defaultData: [{ alias: "inputType", value: "text" }]
    }
  }
}, At = [Lt, xt], wt = [
  g,
  ...T,
  k,
  v,
  S,
  ...L,
  ...w,
  M,
  $,
  B,
  ...H,
  ...F,
  G,
  ...J,
  ...Y,
  ...tt,
  ...it,
  at,
  nt,
  ...mt,
  ...dt,
  ct,
  yt,
  ...Ut,
  ...gt,
  ht,
  ...kt,
  vt,
  ...Dt,
  ...At
], Mt = {
  type: "workspace",
  alias: "Umb.Contentment.Workspace.Contentment",
  name: "[Contentment] Workspace",
  element: () => import("./workspace.element.js"),
  meta: {
    entityType: "contentment"
  }
}, $t = [Mt], Nt = [
  ...i,
  ...b,
  ...u,
  ...U,
  ...f,
  ...wt,
  ...$t
];
export {
  Nt as manifests
};
//# sourceMappingURL=manifests.js.map
