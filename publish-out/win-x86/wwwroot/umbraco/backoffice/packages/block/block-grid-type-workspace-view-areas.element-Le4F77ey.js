import { UmbLitElement as p } from "@umbraco-cms/backoffice/lit-element";
import { nothing as m, html as c, css as b, state as u, customElement as f } from "@umbraco-cms/backoffice/external/lit";
import { UmbTextStyles as C } from "@umbraco-cms/backoffice/style";
import { UMB_DATA_TYPE_WORKSPACE_CONTEXT as d } from "@umbraco-cms/backoffice/data-type";
var g = Object.defineProperty, y = Object.getOwnPropertyDescriptor, l = (a, e, o, i) => {
  for (var r = i > 1 ? void 0 : i ? y(e, o) : e, s = a.length - 1, n; s >= 0; s--)
    (n = a[s]) && (r = (i ? n(e, o, r) : n(r)) || r);
  return i && r && g(e, o, r), r;
};
let t = class extends p {
  constructor() {
    super(), this.consumeContext(d, async (a) => {
      this.observe(
        await a?.propertyValueByAlias("gridColumns"),
        (e) => {
          const o = e ? parseInt(e, 10) : 12;
          this._areaColumnsConfigurationObject = [{ alias: "placeholder", value: o }], this._areaConfigConfigurationObject = [{ alias: "defaultAreaGridColumns", value: o }];
        },
        "observeGridColumns"
      );
    }).passContextAliasMatches();
  }
  render() {
    return this._areaConfigConfigurationObject ? c`
					<uui-box headline="Areas">
						<umb-property
							label=${this.localize.term("blockEditor_areasLayoutColumns")}
							alias="areaGridColumns"
							property-editor-ui-alias="Umb.PropertyEditorUi.Integer"
							.config=${this._areaColumnsConfigurationObject}></umb-property>
						<umb-property
							label=${this.localize.term("blockEditor_areasConfigurations")}
							alias="areas"
							property-editor-ui-alias="Umb.PropertyEditorUi.BlockGridAreasConfig"
							.config=${this._areaConfigConfigurationObject}
							>></umb-property
						>
					</uui-box>
				` : m;
  }
};
t.styles = [
  C,
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
l([
  u()
], t.prototype, "_areaColumnsConfigurationObject", 2);
l([
  u()
], t.prototype, "_areaConfigConfigurationObject", 2);
t = l([
  f("umb-block-grid-type-workspace-view-areas")
], t);
const E = t;
export {
  t as UmbBlockGridTypeWorkspaceViewAreasElement,
  E as default
};
//# sourceMappingURL=block-grid-type-workspace-view-areas.element-Le4F77ey.js.map
