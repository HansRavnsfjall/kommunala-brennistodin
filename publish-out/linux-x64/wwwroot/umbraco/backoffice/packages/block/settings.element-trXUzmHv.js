import { html as b, css as _, state as y, customElement as v } from "@umbraco-cms/backoffice/external/lit";
import { UmbTextStyles as x } from "@umbraco-cms/backoffice/style";
import { UmbLitElement as f } from "@umbraco-cms/backoffice/lit-element";
import { UMB_PROPERTY_DATASET_CONTEXT as w } from "@umbraco-cms/backoffice/property";
var g = Object.defineProperty, A = Object.getOwnPropertyDescriptor, c = (e) => {
  throw TypeError(e);
}, m = (e, t, a, l) => {
  for (var r = l > 1 ? void 0 : l ? A(t, a) : t, p = e.length - 1, n; p >= 0; p--)
    (n = e[p]) && (r = (l ? n(t, a, r) : n(r)) || r);
  return l && r && g(t, a, r), r;
}, h = (e, t, a) => t.has(e) || c("Cannot " + a), s = (e, t, a) => (h(e, t, "read from private field"), a ? a.call(e) : t.get(e)), d = (e, t, a) => t.has(e) ? c("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, a), V = (e, t, a, l) => (h(e, t, "write to private field"), t.set(e, a), a), i, u;
let o = class extends f {
  constructor() {
    super(), d(this, i), d(this, u, (e) => {
      s(this, i)?.setPropertyValue("minAllowed", e.target.minValue), s(this, i)?.setPropertyValue("maxAllowed", e.target.maxValue);
    }), this.consumeContext(w, async (e) => {
      V(this, i, e), this.observe(
        await s(this, i)?.propertyValueByAlias("minAllowed"),
        (t) => {
          this._minValue = t ?? 0;
        },
        "observeMinAllowed"
      ), this.observe(
        await s(this, i)?.propertyValueByAlias("maxAllowed"),
        (t) => {
          this._maxValue = t ?? 1 / 0;
        },
        "observeMaxAllowed"
      );
    });
  }
  render() {
    return b`
			<uui-box headline=${"Identification"}>
				<umb-property
					label=${this.localize.term("general_alias")}
					alias="alias"
					property-editor-ui-alias="Umb.PropertyEditorUi.TextBox"></umb-property>

				<umb-property
					label=${"Create Button Label"}
					alias="createLabel"
					property-editor-ui-alias="Umb.PropertyEditorUi.TextBox"></umb-property>
			</uui-box>
			<uui-box headline=${"Validation"}>
				<umb-property-layout label=${"rangeAllowed"}>
					<umb-input-number-range
						slot="editor"
						.minValue=${this._minValue}
						.maxValue=${this._maxValue}
						@change=${s(this, u)}>
					</umb-input-number-range>
				</umb-property-layout>

				<umb-property
					label=${"specifiedAllowance"}
					alias="specifiedAllowance"
					property-editor-ui-alias="Umb.PropertyEditorUi.BlockGridAreaTypePermission"></umb-property>
			</uui-box>
		`;
  }
};
i = /* @__PURE__ */ new WeakMap();
u = /* @__PURE__ */ new WeakMap();
o.styles = [
  x,
  _`
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
m([
  y()
], o.prototype, "_minValue", 2);
m([
  y()
], o.prototype, "_maxValue", 2);
o = m([
  v("umb-block-grid-area-type-workspace-view")
], o);
const $ = o;
export {
  o as UmbBlockGridAreaTypeWorkspaceViewSettingsElement,
  $ as default
};
//# sourceMappingURL=settings.element-trXUzmHv.js.map
