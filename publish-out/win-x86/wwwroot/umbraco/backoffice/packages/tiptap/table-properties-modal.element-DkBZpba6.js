import { when as E, repeat as f, html as l, css as w, customElement as k } from "@umbraco-cms/backoffice/external/lit";
import { UmbModalBaseElement as P } from "@umbraco-cms/backoffice/modal";
var $ = Object.getOwnPropertyDescriptor, y = (e) => {
  throw TypeError(e);
}, T = (e, t, a, u) => {
  for (var o = u > 1 ? void 0 : u ? $(t, a) : t, d = e.length - 1, b; d >= 0; d--)
    (b = e[d]) && (o = b(o) || o);
  return o;
}, h = (e, t, a) => t.has(e) || y("Cannot " + a), i = (e, t, a) => (h(e, t, "read from private field"), a ? a.call(e) : t.get(e)), s = (e, t, a) => t.has(e) ? y("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, a), _ = (e, t, a, u) => (h(e, t, "write to private field"), t.set(e, a), a), v = (e, t, a) => (h(e, t, "access private method"), a), c, n, r, p, g, U;
let m = class extends P {
  constructor() {
    super(...arguments), s(this, p), s(this, c, { labelOnTop: !0 }), s(this, n, [
      { alias: "width", label: "Width", propertyEditorUiAlias: "Umb.PropertyEditorUi.TextBox" },
      { alias: "height", label: "Height", propertyEditorUiAlias: "Umb.PropertyEditorUi.TextBox" },
      {
        alias: "backgroundColor",
        label: "Background color",
        propertyEditorUiAlias: "Umb.PropertyEditorUi.EyeDropper",
        config: [{ alias: "showPalette", value: !0 }]
      },
      {
        alias: "alignment",
        label: "Alignment",
        propertyEditorUiAlias: "Umb.PropertyEditorUi.Dropdown",
        config: [
          {
            alias: "items",
            value: [
              { name: "None", value: "none" },
              { name: "Left", value: "left" },
              { name: "Center", value: "center" },
              { name: "Right", value: "right" }
            ]
          }
        ]
      },
      { alias: "borderWidth", label: "Border width", propertyEditorUiAlias: "Umb.PropertyEditorUi.TextBox" },
      {
        alias: "borderStyle",
        label: "Border style",
        propertyEditorUiAlias: "Umb.PropertyEditorUi.Dropdown",
        config: [
          {
            alias: "items",
            value: [
              { name: "Solid", value: "solid" },
              { name: "Dotted", value: "dotted" },
              { name: "Dashed", value: "dashed" },
              { name: "Double", value: "double" },
              { name: "Groove", value: "groove" },
              { name: "Ridge", value: "ridge" },
              { name: "Inset", value: "inset" },
              { name: "Outset", value: "outset" },
              { name: "None", value: "none" },
              { name: "Hidden", value: "hidden" }
            ]
          }
        ]
      },
      {
        alias: "borderColor",
        label: "Border color",
        propertyEditorUiAlias: "Umb.PropertyEditorUi.EyeDropper",
        config: [{ alias: "showPalette", value: !0 }]
      }
    ]), s(this, r, []);
  }
  connectedCallback() {
    super.connectedCallback(), this.data && _(this, r, Object.entries(this.data).map(([e, t]) => ({ alias: e, value: t })));
  }
  render() {
    return l`
			<umb-body-layout headline="Table properties">
				<uui-box>
					${E(
      i(this, n)?.length,
      () => l`
							<umb-property-dataset .value=${i(this, r)} @change=${v(this, p, g)}>
								${f(
        i(this, n),
        (e) => e.alias,
        (e) => l`
										<umb-property
											alias=${e.alias}
											label=${e.label}
											property-editor-ui-alias=${e.propertyEditorUiAlias}
											.appearance=${i(this, c)}
											.config=${e.config}>
										</umb-property>
									`
      )}
							</umb-property-dataset>
						`,
      () => l`<p>There are no properties for this modal.</p>`
    )}
				</uui-box>
				<uui-button
					slot="actions"
					label=${this.localize.term("general_cancel")}
					@click=${this._rejectModal}></uui-button>
				<uui-button
					slot="actions"
					color="positive"
					look="primary"
					label=${this.localize.term("bulk_done")}
					@click=${v(this, p, U)}></uui-button>
			</umb-body-layout>
		`;
  }
};
c = /* @__PURE__ */ new WeakMap();
n = /* @__PURE__ */ new WeakMap();
r = /* @__PURE__ */ new WeakMap();
p = /* @__PURE__ */ new WeakSet();
g = function(e) {
  _(this, r, e.target.value);
};
U = function() {
  this.value = i(this, r), this._submitModal();
};
m.styles = [
  w`
			umb-property {
				--uui-size-layout-1: var(--uui-size-space-4);
			}
		`
];
m = T([
  k("umb-tiptap-table-properties-modal")
], m);
export {
  m as UmbTiptapTablePropertiesModalElement,
  m as element
};
//# sourceMappingURL=table-properties-modal.element-DkBZpba6.js.map
