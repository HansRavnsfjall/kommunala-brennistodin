import { a as u } from "./index-q0gJfrDp.js";
import { html as m, css as b, customElement as d } from "@umbraco-cms/backoffice/external/lit";
import { UmbTextStyles as s } from "@umbraco-cms/backoffice/style";
import { UmbLitElement as c } from "@umbraco-cms/backoffice/lit-element";
import "@umbraco-cms/backoffice/block-type";
var n = Object.getOwnPropertyDescriptor, y = (i, t, p, l) => {
  for (var e = l > 1 ? void 0 : l ? n(t, p) : t, r = i.length - 1, a; r >= 0; r--)
    (a = i[r]) && (e = a(e) || e);
  return e;
};
let o = class extends c {
  render() {
    return m`
			<uui-box headline=${this.localize.term("blockEditor_headlineAdvanced")}>
				<umb-property
					label=${this.localize.term("blockEditor_labelEditorSize")}
					alias="editorSize"
					property-editor-ui-alias="Umb.PropertyEditorUi.OverlaySize"></umb-property>
				<umb-property
					label=${this.localize.term("blockEditor_gridInlineEditing")}
					alias="inlineEditing"
					property-editor-ui-alias="Umb.PropertyEditorUi.Toggle"></umb-property>
				<umb-property
					label=${this.localize.term("blockEditor_forceHideContentEditor")}
					alias="hideContentEditor"
					property-editor-ui-alias="Umb.PropertyEditorUi.Toggle"></umb-property>
			</uui-box>
			<uui-box headline=${this.localize.term("blockEditor_headlineCustomView")}>
				<umb-property-layout label=${this.localize.term("blockEditor_labelCustomView")}>
					<umb-block-type-custom-view-guide
						slot="editor"
						block-editor-type=${u}></umb-block-type-custom-view-guide>
				</umb-property-layout>
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
		`;
  }
};
o.styles = [
  s,
  b`
			:host {
				display: grid;
				grid-template-columns: repeat(auto-fill, minmax(600px, 1fr));
				gap: var(--uui-size-layout-1);
				margin: var(--uui-size-layout-1);
				padding-bottom: var(--uui-size-layout-1); // To enforce some distance to the bottom of the scroll-container.
			}
		`
];
o = y([
  d("umb-block-grid-type-workspace-view-advanced")
], o);
const U = o;
export {
  o as UmbBlockGridTypeWorkspaceViewAdvancedElement,
  U as default
};
//# sourceMappingURL=block-grid-type-workspace-view-advanced.element-ClpyaAE8.js.map
