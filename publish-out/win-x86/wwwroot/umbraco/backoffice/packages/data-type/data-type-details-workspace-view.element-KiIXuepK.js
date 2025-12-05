import { d as f } from "./constants-mZOozcI2.js";
import { html as E, nothing as b, css as A, state as n, customElement as S } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as w } from "@umbraco-cms/backoffice/lit-element";
import { UMB_MISSING_PROPERTY_EDITOR_UI_ALIAS as T } from "@umbraco-cms/backoffice/property-editor";
import { UmbTextStyles as k } from "@umbraco-cms/backoffice/style";
import { umbBindToValidation as g } from "@umbraco-cms/backoffice/validation";
var D = Object.defineProperty, x = Object.getOwnPropertyDescriptor, u = (t) => {
  throw TypeError(t);
}, d = (t, r, e, p) => {
  for (var a = p > 1 ? void 0 : p ? x(r, e) : r, y = t.length - 1, h; y >= 0; y--)
    (h = t[y]) && (a = (p ? h(r, e, a) : h(a)) || a);
  return p && a && D(r, e, a), a;
}, _ = (t, r, e) => r.has(t) || u("Cannot " + e), s = (t, r, e) => (_(t, r, "read from private field"), r.get(t)), c = (t, r, e) => r.has(t) ? u("Cannot add the same private member more than once") : r instanceof WeakSet ? r.add(t) : r.set(t, e), I = (t, r, e, p) => (_(t, r, "write to private field"), r.set(t, e), e), m = (t, r, e) => (_(t, r, "access private method"), e), i, l, v, U;
let o = class extends w {
  constructor() {
    super(), c(this, l), c(this, i), this.consumeContext(f, (t) => {
      I(this, i, t), m(this, l, v).call(this);
    });
  }
  render() {
    return E`
			<uui-box>
				<umb-property-layout
					data-mark="property:editorUiAlias"
					label="Property Editor"
					description=${this.localize.term("propertyEditorPicker_title")}
					mandatory>
					<umb-data-type-details-workspace-property-editor-picker
						slot="editor"
						.propertyEditorUiName=${this._propertyEditorUiName}
						.propertyEditorUiAlias=${this._propertyEditorUiAlias}
						.propertyEditorUiIcon=${this._propertyEditorUiIcon}
						.propertyEditorSchemaAlias=${this._propertyEditorSchemaAlias}
						${g(this, "$.editorUiAlias", this._propertyEditorUiAlias)}>
					</umb-data-type-details-workspace-property-editor-picker>
				</umb-property-layout>
			</uui-box>
			${m(this, l, U).call(this)}
		`;
  }
};
i = /* @__PURE__ */ new WeakMap();
l = /* @__PURE__ */ new WeakSet();
v = function() {
  s(this, i) && (this.observe(s(this, i).propertyEditorUiAlias, (t) => {
    this._propertyEditorUiAlias = t ?? void 0;
  }), this.observe(s(this, i).propertyEditorSchemaAlias, (t) => {
    this._propertyEditorSchemaAlias = t ?? void 0;
  }), this.observe(s(this, i).propertyEditorUiName, (t) => {
    this._propertyEditorUiName = t ?? void 0;
  }), this.observe(s(this, i).propertyEditorUiIcon, (t) => {
    this._propertyEditorUiIcon = t ?? void 0;
  }));
};
U = function() {
  return !this._propertyEditorUiAlias || !this._propertyEditorUiName || !this._propertyEditorSchemaAlias || this._propertyEditorUiAlias === T ? b : E`
			<uui-box headline=${this.localize.term("general_settings")}>
				<umb-property-editor-config></umb-property-editor-config>
			</uui-box>
		`;
};
o.styles = [
  k,
  A`
			:host {
				display: block;
				margin: var(--uui-size-layout-1);
				padding-bottom: var(--uui-size-layout-1);
			}

			uui-box {
				margin-top: var(--uui-size-layout-1);
			}

			#btn-add {
				display: block;
			}
		`
];
d([
  n()
], o.prototype, "_propertyEditorUiIcon", 2);
d([
  n()
], o.prototype, "_propertyEditorUiName", 2);
d([
  n()
], o.prototype, "_propertyEditorUiAlias", 2);
d([
  n()
], o.prototype, "_propertyEditorSchemaAlias", 2);
o = d([
  S("umb-data-type-details-workspace-view")
], o);
const z = o;
export {
  o as UmbDataTypeDetailsWorkspaceViewEditElement,
  z as default
};
//# sourceMappingURL=data-type-details-workspace-view.element-KiIXuepK.js.map
