import { html as s, css as u, customElement as m } from "@umbraco-cms/backoffice/external/lit";
import { UmbTextStyles as b } from "@umbraco-cms/backoffice/style";
import { UmbLitElement as n } from "@umbraco-cms/backoffice/lit-element";
var c = Object.getOwnPropertyDescriptor, d = (o, r, p, l) => {
  for (var e = l > 1 ? void 0 : l ? c(r, p) : r, t = o.length - 1, a; t >= 0; t--)
    (a = o[t]) && (e = a(e) || e);
  return e;
};
let i = class extends n {
  render() {
    return s`
			<uui-box headline=${this.localize.term("blockEditor_headlineEditorAppearance")}>
				<umb-property
					label=${this.localize.term("general_label")}
					alias="label"
					property-editor-ui-alias="Umb.PropertyEditorUi.TextBox"></umb-property>
				<umb-property
					label=${this.localize.term("blockEditor_labelEditorSize")}
					alias="editorSize"
					property-editor-ui-alias="Umb.PropertyEditorUi.OverlaySize"></umb-property>
			</uui-box>
			<uui-box headline=${this.localize.term("blockEditor_headlineDataModels")}>
				<!-- TODO: implement readonly mode for umb-property -->
				<umb-property
					label=${this.localize.term("blockEditor_labelContentElementType")}
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
					label=${this.localize.term("blockEditor_labelSettingsElementType")}
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
			<uui-box headline=${this.localize.term("blockEditor_headlineCatalogueAppearance")}>
				<umb-property
					label=${this.localize.term("blockEditor_labelBackgroundColor")}
					alias="backgroundColor"
					property-editor-ui-alias="Umb.PropertyEditorUi.EyeDropper"
					.config=${[{ alias: "showAlpha", value: !0 }]}></umb-property>
				<umb-property
					label=${this.localize.term("blockEditor_labelIconColor")}
					alias="iconColor"
					property-editor-ui-alias="Umb.PropertyEditorUi.EyeDropper"
					.config=${[{ alias: "showAlpha", value: !0 }]}></umb-property>
				<umb-property
					label=${this.localize.term("blockEditor_thumbnail")}
					alias="thumbnail"
					property-editor-ui-alias="Umb.PropertyEditorUi.StaticFilePicker"
					.config=${[
      {
        alias: "singleItemMode",
        value: !0
      }
    ]}></umb-property>
			</uui-box>
			<uui-box headline=${this.localize.term("blockEditor_headlineAdvanced")}>
				<umb-property
					label=${this.localize.term("blockEditor_forceHideContentEditor")}
					alias="forceHideContentEditorInOverlay"
					description=${this.localize.term("blockEditor_forceHideContentEditorHelp")}
					property-editor-ui-alias="Umb.PropertyEditorUi.Toggle"></umb-property>
			</uui-box>
		`;
  }
};
i.styles = [
  b,
  u`
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
i = d([
  m("umb-block-list-type-workspace-view-settings")
], i);
const k = i;
export {
  i as UmbBlockListTypeWorkspaceViewSettingsElement,
  k as default
};
//# sourceMappingURL=block-list-type-workspace-view.element-CVcJyh1F.js.map
