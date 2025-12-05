import { html as y, css as E, state as p, customElement as f } from "@umbraco-cms/backoffice/external/lit";
import { UmbTextStyles as g } from "@umbraco-cms/backoffice/style";
import { UmbLitElement as T } from "@umbraco-cms/backoffice/lit-element";
import { UMB_PROPERTY_DATASET_CONTEXT as k } from "@umbraco-cms/backoffice/property";
import { UMB_DATA_TYPE_WORKSPACE_CONTEXT as x } from "@umbraco-cms/backoffice/data-type";
var O = Object.defineProperty, C = Object.getOwnPropertyDescriptor, _ = (e) => {
  throw TypeError(e);
}, s = (e, t, o, r) => {
  for (var a = r > 1 ? void 0 : r ? C(t, o) : t, u = e.length - 1, m; u >= 0; u--)
    (m = e[u]) && (a = (r ? m(t, o, a) : m(a)) || a);
  return r && a && O(t, o, a), a;
}, b = (e, t, o) => t.has(e) || _("Cannot " + o), h = (e, t, o) => (b(e, t, "read from private field"), o ? o.call(e) : t.get(e)), c = (e, t, o) => t.has(e) ? _("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, o), z = (e, t, o, r) => (b(e, t, "write to private field"), t.set(e, o), o), w = (e, t, o) => (b(e, t, "access private method"), o), d, l, n, v, S;
let i = class extends T {
  constructor() {
    super(), c(this, n), c(this, d, { alias: "labelOnTop", value: !0 }), this._showSizeOptions = !1, c(this, l), this.consumeContext(x, async (e) => {
      this.observe(
        await e?.propertyValueByAlias("gridColumns"),
        (t) => {
          this._dataTypeGridColumns = t ? parseInt(t, 10) : void 0;
        },
        "observeGridColumns"
      );
    }).passContextAliasMatches(), this.consumeContext(k, async (e) => {
      z(this, l, e), this.observe(
        await e?.propertyValueByAlias("columnSpanOptions"),
        (t) => {
          Array.isArray(t) && t.length > 0 && (this._showSizeOptions = !0), this.removeUmbControllerByAlias("_observeColumnSpanOptions");
        },
        "observeColumnSpanOptions"
      ), this.observe(
        await e?.propertyValueByAlias("rowMinSpan"),
        (t) => {
          this._rowMinSpan = t;
        },
        "observeRowMinSpan"
      ), this.observe(
        await e?.propertyValueByAlias("rowMaxSpan"),
        (t) => {
          this._rowMaxSpan = t;
        },
        "observeRowMaxSpan"
      );
    });
  }
  render() {
    return y`
			<uui-box headline=${this.localize.term("general_general")}>
				<umb-property
					label=${this.localize.term("general_label")}
					alias="label"
					property-editor-ui-alias="Umb.PropertyEditorUi.TextBox"
					.config=${[h(this, d)]}></umb-property>

				<umb-property
					label=${this.localize.term("blockEditor_labelContentElementType")}
					read-only
					alias="contentElementTypeKey"
					property-editor-ui-alias="Umb.PropertyEditorUi.DocumentTypePicker"
					.config=${[
      { alias: "onlyPickElementTypes", value: !0 },
      { alias: "validationLimit", value: { min: 0, max: 1 } }
    ]}></umb-property>

				<umb-property
					label=${this.localize.term("blockEditor_labelSettingsElementType")}
					alias="settingsElementTypeKey"
					property-editor-ui-alias="Umb.PropertyEditorUi.DocumentTypePicker"
					.config=${[
      { alias: "onlyPickElementTypes", value: !0 },
      { alias: "validationLimit", value: { min: 0, max: 1 } }
    ]}></umb-property>
			</uui-box>
			<uui-box headline=${this.localize.term("blockEditor_headlineAllowance")}>
				<umb-property
					label=${this.localize.term("blockEditor_allowBlockInRoot")}
					alias="allowAtRoot"
					property-editor-ui-alias="Umb.PropertyEditorUi.Toggle"></umb-property>

				<umb-property
					label=${this.localize.term("blockEditor_allowBlockInAreas")}
					alias="allowInAreas"
					property-editor-ui-alias="Umb.PropertyEditorUi.Toggle"></umb-property>
			</uui-box>
			<uui-box headline=${this.localize.term("blockEditor_sizeOptions")}> ${w(this, n, S).call(this)} </uui-box>
		`;
  }
};
d = /* @__PURE__ */ new WeakMap();
l = /* @__PURE__ */ new WeakMap();
n = /* @__PURE__ */ new WeakSet();
v = function(e) {
  h(this, l)?.setPropertyValue("rowMinSpan", e.target.minValue), h(this, l)?.setPropertyValue("rowMaxSpan", e.target.maxValue);
};
S = function() {
  return this._showSizeOptions ? y`
				<umb-property
					label=${this.localize.term("blockEditor_allowedBlockColumns")}
					alias="columnSpanOptions"
					property-editor-ui-alias="Umb.PropertyEditorUi.BlockGridColumnSpan"
					data-test-attr="${this._dataTypeGridColumns + " "}"
					.config=${[
    {
      alias: "maxColumns",
      value: this._dataTypeGridColumns
    }
  ]}></umb-property>

				<umb-property-layout label=${this.localize.term("blockEditor_allowedBlockRows")}>
					<umb-input-number-range
						slot="editor"
						.minValue=${this._rowMinSpan}
						.maxValue=${this._rowMaxSpan}
						@change=${w(this, n, v)}></umb-input-number-range>
				</umb-property-layout>
			` : y`<div id="showOptions">
				<uui-button
					label=${this.localize.term("blockEditor_showSizeOptions")}
					look="placeholder"
					@click=${() => this._showSizeOptions = !this._showSizeOptions}></uui-button>
			</div>`;
};
i.styles = [
  g,
  E`
			:host {
				display: grid;
				grid-template-columns: repeat(auto-fill, minmax(600px, 1fr));
				gap: var(--uui-size-layout-1);
				margin: var(--uui-size-layout-1);
				padding-bottom: var(--uui-size-layout-1); // To enforce some distance to the bottom of the scroll-container.
			}

			#showOptions {
				display: flex;
				height: 100px;
			}
			#showOptions uui-button {
				flex: 1;
			}
		`
];
s([
  p()
], i.prototype, "_showSizeOptions", 2);
s([
  p()
], i.prototype, "_rowMinSpan", 2);
s([
  p()
], i.prototype, "_rowMaxSpan", 2);
s([
  p()
], i.prototype, "_dataTypeGridColumns", 2);
i = s([
  f("umb-block-grid-type-workspace-view")
], i);
const B = i;
export {
  i as UmbBlockGridTypeWorkspaceViewSettingsElement,
  B as default
};
//# sourceMappingURL=block-grid-type-workspace-view-settings.element--cCroOZU.js.map
