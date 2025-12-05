import { U as i } from "./constants-C0Snq3yb.js";
const e = [
  {
    type: "modal",
    alias: i,
    name: "Property Editor Multi Url Link Picker Modal",
    element: () => import("./link-picker-modal.element-DZi-LeZd.js")
  }
], r = [
  {
    type: "monacoMarkdownEditorAction",
    alias: "Umb.MonacoMarkdownEditorAction.MultiUrlPicker",
    name: "Multi Url Picker Monaco Markdown Editor Action",
    api: () => import("./url-picker-monaco-markdown-editor-action-3fddidQp.js"),
    meta: {
      label: "#buttons_linkInsert",
      icon: "icon-link"
    }
  }
], t = {
  type: "propertyEditorSchema",
  name: "Multi URL Picker",
  alias: "Umbraco.MultiUrlPicker",
  meta: {
    defaultPropertyEditorUiAlias: "Umb.PropertyEditorUi.MultiUrlPicker",
    settings: {
      properties: [
        {
          alias: "minNumber",
          label: "Minimum number of items",
          description: "",
          propertyEditorUiAlias: "Umb.PropertyEditorUi.Integer",
          config: [{ alias: "min", value: 0 }]
        },
        {
          alias: "maxNumber",
          label: "Maximum number of items",
          description: "",
          propertyEditorUiAlias: "Umb.PropertyEditorUi.Integer",
          config: [{ alias: "min", value: 0 }]
        },
        {
          alias: "ignoreUserStartNodes",
          label: "Ignore user start nodes",
          description: "Selecting this option allows a user to choose nodes that they normally dont have access to.",
          propertyEditorUiAlias: "Umb.PropertyEditorUi.Toggle"
        }
      ],
      defaultData: [
        { alias: "minNumber", value: 0 },
        { alias: "maxNumber", value: 0 }
      ]
    }
  }
}, o = [
  {
    type: "propertyEditorUi",
    alias: "Umb.PropertyEditorUi.MultiUrlPicker",
    name: "Multi URL Picker Property Editor UI",
    element: () => import("./property-editor-ui-multi-url-picker.element-CcHOs3FX.js"),
    meta: {
      label: "Multi URL Picker",
      propertyEditorSchemaAlias: "Umbraco.MultiUrlPicker",
      icon: "icon-link",
      group: "pickers",
      supportsReadOnly: !0,
      settings: {
        properties: [
          {
            alias: "overlaySize",
            label: "Overlay Size",
            description: "Select the width of the overlay.",
            propertyEditorUiAlias: "Umb.PropertyEditorUi.OverlaySize"
          },
          {
            alias: "hideAnchor",
            label: "Hide anchor/query string input",
            description: "Selecting this hides the anchor/query string input field in the link picker overlay.",
            propertyEditorUiAlias: "Umb.PropertyEditorUi.Toggle"
          }
        ]
      }
    }
  },
  t
], l = [
  ...e,
  ...r,
  ...o
];
export {
  l as manifests
};
//# sourceMappingURL=manifests.js.map
