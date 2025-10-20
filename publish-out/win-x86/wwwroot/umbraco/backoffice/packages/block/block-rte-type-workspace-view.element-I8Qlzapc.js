import { html as u, css as s, customElement as m } from "@umbraco-cms/backoffice/external/lit";
import { UmbTextStyles as n } from "@umbraco-cms/backoffice/style";
import { UmbLitElement as y } from "@umbraco-cms/backoffice/lit-element";
var b = Object.getOwnPropertyDescriptor, d = (t, i, p, a) => {
  for (var e = a > 1 ? void 0 : a ? b(i, p) : i, o = t.length - 1, l; o >= 0; o--)
    (l = t[o]) && (e = l(e) || e);
  return e;
};
let r = class extends y {
  render() {
    return u`
			<uui-box headline="Editor Appearance">
				<umb-property
					label="Label"
					alias="label"
					property-editor-ui-alias="Umb.PropertyEditorUi.TextBox"></umb-property>
				<umb-property
					label="Display Inline"
					alias="displayInline"
					property-editor-ui-alias="Umb.PropertyEditorUi.Toggle"></umb-property>
				<umb-property
					label="Overlay size"
					alias="editorSize"
					property-editor-ui-alias="Umb.PropertyEditorUi.OverlaySize"></umb-property>
			</uui-box>
			<uui-box headline="Data models">
				<!-- TODO: implement readonly mode for umb-property -->
				<umb-property
					label="Content Model"
					alias="contentElementTypeKey"
					property-editor-ui-alias="Umb.PropertyEditorUi.DocumentTypePicker"
					readonly
					.config=${[
      {
        alias: "validationLimit",
        value: { min: 0, max: 1 }
      },
      {
        alias: "onlyPickElementTypes",
        value: !0
      }
    ]}></umb-property>
				<umb-property
					label="Settings Model"
					alias="settingsElementTypeKey"
					property-editor-ui-alias="Umb.PropertyEditorUi.DocumentTypePicker"
					.config=${[
      {
        alias: "validationLimit",
        value: { min: 0, max: 1 }
      },
      {
        alias: "onlyPickElementTypes",
        value: !0
      }
    ]}></umb-property>
			</uui-box>
			<uui-box headline="Catalogue appearance">
				<umb-property
					label="Background color"
					alias="backgroundColor"
					property-editor-ui-alias="Umb.PropertyEditorUi.EyeDropper"
					.config=${[{ alias: "showAlpha", value: !0 }]}></umb-property>
				<umb-property
					label="Icon color"
					alias="iconColor"
					property-editor-ui-alias="Umb.PropertyEditorUi.EyeDropper"
					.config=${[{ alias: "showAlpha", value: !0 }]}></umb-property>
				<umb-property
					label="Thumbnail"
					alias="thumbnail"
					property-editor-ui-alias="Umb.PropertyEditorUi.StaticFilePicker"
					.config=${[
      {
        alias: "singleItemMode",
        value: !0
      }
    ]}></umb-property>
			</uui-box>
		`;
  }
};
r.styles = [
  n,
  s`
			:host {
				display: block;
				margin: var(--uui-size-layout-1);
				padding-bottom: var(--uui-size-layout-1); // To enforce some distance to the bottom of the scroll-container.
			}
			uui-box {
				margin-top: var(--uui-size-layout-1);
			}

			uui-label,
			umb-property-editor-ui-number {
				display: block;
			}

			// TODO: is this necessary?
			uui-toggle {
				display: flex;
			}
		`
];
r = d([
  m("umb-block-rte-type-workspace-view-settings")
], r);
const U = r;
export {
  r as UmbBlockRteTypeWorkspaceViewSettingsElement,
  U as default
};
//# sourceMappingURL=block-rte-type-workspace-view.element-I8Qlzapc.js.map
