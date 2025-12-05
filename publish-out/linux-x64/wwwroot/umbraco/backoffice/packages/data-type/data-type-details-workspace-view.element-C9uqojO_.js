import { d as $ } from "./constants-DE93IEgK.js";
import { html as d, nothing as m, css as k, state as h, customElement as S } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as g } from "@umbraco-cms/backoffice/lit-element";
import { UmbTextStyles as w } from "@umbraco-cms/backoffice/style";
import { umbOpenModal as T } from "@umbraco-cms/backoffice/modal";
import { UMB_PROPERTY_EDITOR_UI_PICKER_MODAL as D } from "@umbraco-cms/backoffice/property-editor";
import { umbBindToValidation as x } from "@umbraco-cms/backoffice/validation";
var C = Object.defineProperty, I = Object.getOwnPropertyDescriptor, f = (t) => {
  throw TypeError(t);
}, c = (t, r, i, n) => {
  for (var s = n > 1 ? void 0 : n ? I(r, i) : r, y = t.length - 1, _; y >= 0; y--)
    (_ = t[y]) && (s = (n ? _(r, i, s) : _(s)) || s);
  return n && s && C(r, i, s), s;
}, E = (t, r, i) => r.has(t) || f("Cannot " + i), l = (t, r, i) => (E(t, r, "read from private field"), r.get(t)), b = (t, r, i) => r.has(t) ? f("Cannot add the same private member more than once") : r instanceof WeakSet ? r.add(t) : r.set(t, i), O = (t, r, i, n) => (E(t, r, "write to private field"), r.set(t, i), i), p = (t, r, i) => (E(t, r, "access private method"), i), e, o, U, u, v, A, P;
let a = class extends g {
  constructor() {
    super(), b(this, o), this._propertyEditorUiIcon = null, this._propertyEditorUiName = null, this._propertyEditorUiAlias = null, this._propertyEditorSchemaAlias = null, b(this, e), this.consumeContext($, (t) => {
      O(this, e, t), p(this, o, U).call(this);
    });
  }
  render() {
    return d`
			<uui-box>
				${this._propertyEditorUiAlias && this._propertyEditorSchemaAlias ? p(this, o, P).call(this) : p(this, o, A).call(this)}
			</uui-box>
			${p(this, o, v).call(this)}
		`;
  }
};
e = /* @__PURE__ */ new WeakMap();
o = /* @__PURE__ */ new WeakSet();
U = function() {
  l(this, e) && (this.observe(l(this, e).propertyEditorUiAlias, (t) => {
    this._propertyEditorUiAlias = t;
  }), this.observe(l(this, e).propertyEditorSchemaAlias, (t) => {
    this._propertyEditorSchemaAlias = t;
  }), this.observe(l(this, e).propertyEditorUiName, (t) => {
    this._propertyEditorUiName = t;
  }), this.observe(l(this, e).propertyEditorUiIcon, (t) => {
    this._propertyEditorUiIcon = t;
  }));
};
u = async function() {
  const t = await T(this, D, {
    value: {
      selection: this._propertyEditorUiAlias ? [this._propertyEditorUiAlias] : []
    }
  }).catch(() => {
  });
  t && l(this, e)?.setPropertyEditorUiAlias(t.selection[0]);
};
v = function() {
  return !this._propertyEditorUiAlias || !this._propertyEditorSchemaAlias ? m : d`
			<uui-box headline=${this.localize.term("general_settings")}>
				<umb-property-editor-config></umb-property-editor-config>
			</uui-box>
		`;
};
A = function() {
  return d`
			<umb-property-layout
				data-mark="property:editorUiAlias"
				label="Property Editor"
				description=${this.localize.term("propertyEditorPicker_title")}
				mandatory>
				<uui-button
					slot="editor"
					id="btn-add"
					label=${this.localize.term("propertyEditorPicker_title")}
					look="placeholder"
					color="default"
					required
					${x(this)}
					@click=${p(this, o, u)}></uui-button>
			</umb-property-layout>
		`;
};
P = function() {
  return !this._propertyEditorUiAlias || !this._propertyEditorSchemaAlias ? m : d`
			<umb-property-layout
				data-mark="property:editorUiAlias"
				label="Property Editor"
				description=${this.localize.term("propertyEditorPicker_title")}
				mandatory>
				<umb-ref-property-editor-ui
					slot="editor"
					name=${this._propertyEditorUiName ?? ""}
					alias=${this._propertyEditorUiAlias}
					property-editor-schema-alias=${this._propertyEditorSchemaAlias}
					standalone
					@open=${p(this, o, u)}>
					${this._propertyEditorUiIcon ? d`<umb-icon name=${this._propertyEditorUiIcon} slot="icon"></umb-icon>` : m}
					<uui-action-bar slot="actions">
						<uui-button
							label=${this.localize.term("general_change")}
							@click=${p(this, o, u)}></uui-button>
					</uui-action-bar>
				</umb-ref-property-editor-ui>
			</umb-property-layout>
		`;
};
a.styles = [
  w,
  k`
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
c([
  h()
], a.prototype, "_propertyEditorUiIcon", 2);
c([
  h()
], a.prototype, "_propertyEditorUiName", 2);
c([
  h()
], a.prototype, "_propertyEditorUiAlias", 2);
c([
  h()
], a.prototype, "_propertyEditorSchemaAlias", 2);
a = c([
  S("umb-data-type-details-workspace-view")
], a);
const K = a;
export {
  a as UmbDataTypeDetailsWorkspaceViewEditElement,
  K as default
};
//# sourceMappingURL=data-type-details-workspace-view.element-C9uqojO_.js.map
