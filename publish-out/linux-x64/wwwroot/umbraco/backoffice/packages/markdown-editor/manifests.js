const r = {
  type: "propertyEditorSchema",
  name: "Markdown Editor",
  alias: "Umbraco.MarkdownEditor",
  meta: {
    defaultPropertyEditorUiAlias: "Umb.PropertyEditorUi.MarkdownEditor"
  }
}, e = [
  {
    type: "propertyValuePreset",
    forPropertyEditorSchemaAlias: "Umbraco.MarkdownEditor",
    alias: "Umb.PropertyValuePreset.MarkdownEditor",
    name: "Markdown Editor Property Value Preset",
    api: () => import("./markdown-editor-property-value-preset-GHoXKPdI.js")
  },
  {
    type: "propertyEditorUi",
    alias: "Umb.PropertyEditorUi.MarkdownEditor",
    name: "Markdown Editor Property Editor UI",
    element: () => import("./property-editor-ui-markdown-editor.element-CE6WcSFl.js"),
    meta: {
      label: "Markdown Editor",
      propertyEditorSchemaAlias: "Umbraco.MarkdownEditor",
      icon: "icon-code",
      group: "richContent",
      supportsReadOnly: !0,
      settings: {
        properties: [
          {
            alias: "preview",
            label: "Preview",
            description: "Display a live preview",
            propertyEditorUiAlias: "Umb.PropertyEditorUi.Toggle"
          },
          {
            alias: "defaultValue",
            label: "Default value",
            description: "If value is blank, the editor will show this",
            propertyEditorUiAlias: "Umb.PropertyEditorUi.MarkdownEditor"
          },
          {
            alias: "overlaySize",
            label: "Overlay Size",
            description: "Select the width of the overlay.",
            propertyEditorUiAlias: "Umb.PropertyEditorUi.OverlaySize"
          }
        ]
      }
    }
  },
  r
], t = [...e], o = [...t];
export {
  o as manifests
};
//# sourceMappingURL=manifests.js.map
