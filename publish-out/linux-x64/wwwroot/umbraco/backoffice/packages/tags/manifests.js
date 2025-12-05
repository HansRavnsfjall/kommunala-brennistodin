import { U as a, a as e } from "./constants-BHP6V-qT.js";
const o = [
  {
    type: "repository",
    alias: a,
    name: "Tags Repository",
    api: () => import("./tag.repository-CQuBjPOQ.js")
  },
  {
    type: "store",
    alias: e,
    name: "Tags Store",
    api: () => import("./constants-BHP6V-qT.js").then((t) => t.t)
  }
], r = {
  type: "propertyEditorSchema",
  name: "Tags",
  alias: "Umbraco.Tags",
  meta: {
    defaultPropertyEditorUiAlias: "Umb.PropertyEditorUi.Tags",
    settings: {
      properties: [
        {
          alias: "group",
          label: "Tag group",
          description: "",
          propertyEditorUiAlias: "Umb.PropertyEditorUi.TextBox"
        },
        {
          alias: "storageType",
          label: "Storage Type",
          description: "Select whether to store the tags in cache as JSON (default) or CSV format. Notice that CSV does not support commas in the tag value.",
          propertyEditorUiAlias: "Umb.PropertyEditorUi.Select",
          config: [
            {
              alias: "items",
              value: ["Csv", "Json"]
            }
          ]
        }
      ],
      defaultData: [
        {
          alias: "group",
          value: "default"
        },
        {
          alias: "storageType",
          value: "Json"
        }
      ]
    }
  }
}, s = [
  {
    type: "propertyEditorUi",
    alias: "Umb.PropertyEditorUi.Tags",
    name: "Tags Property Editor UI",
    element: () => import("./property-editor-ui-tags.element-3ylvOOwm.js"),
    meta: {
      label: "Tags",
      propertyEditorSchemaAlias: "Umbraco.Tags",
      icon: "icon-tags",
      group: "common",
      supportsReadOnly: !0
    }
  },
  r
], i = [...s], l = [...o, ...i];
export {
  l as manifests
};
//# sourceMappingURL=manifests.js.map
