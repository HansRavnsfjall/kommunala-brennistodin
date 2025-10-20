import { nothing as s, html as t, css as b, state as c, customElement as _ } from "@umbraco-cms/backoffice/external/lit";
import { ModelsBuilderService as h, ModelsModeModel as r } from "@umbraco-cms/backoffice/external/backend-api";
import { UmbLitElement as g } from "@umbraco-cms/backoffice/lit-element";
import { tryExecute as p } from "@umbraco-cms/backoffice/resources";
import { UmbTextStyles as f } from "@umbraco-cms/backoffice/style";
var y = Object.defineProperty, B = Object.getOwnPropertyDescriptor, i = (e, l, n, d) => {
  for (var o = d > 1 ? void 0 : d ? B(l, n) : l, u = e.length - 1, m; u >= 0; u--)
    (m = e[u]) && (o = (d ? m(l, n, o) : m(o)) || o);
  return d && o && y(l, n, o), o;
};
let a = class extends g {
  constructor() {
    super(), this._buttonStateBuild = void 0, this._buttonStateReload = void 0, this._getDashboardData();
  }
  async _getDashboardData() {
    const { data: e } = await p(this, h.getModelsBuilderDashboard());
    return e ? (this._modelsBuilder = e, !0) : !1;
  }
  async _onGenerateModels() {
    this._buttonStateBuild = "waiting";
    const e = await this._postGenerateModels();
    this._buttonStateBuild = e ? "success" : "failed";
  }
  async _postGenerateModels() {
    const { error: e } = await p(this, h.postModelsBuilderBuild());
    return e ? !1 : (this._getDashboardData(), !0);
  }
  async _onDashboardReload() {
    this._buttonStateReload = "waiting";
    const e = await this._getDashboardData();
    this._buttonStateReload = e ? "success" : "failed";
  }
  render() {
    return t`
			<uui-box headline="Models Builder" class="overview">
				<uui-button
					slot="header-actions"
					.state="${this._buttonStateReload}"
					look="secondary"
					label="Reload"
					@click="${this._onDashboardReload}">
					Reload
				</uui-button>
				<p>Version: ${this._modelsBuilder?.version}</p>
				<div class="models-description">
					<p>ModelsBuilder is enabled with the following configuration:</p>
					<ul>
						${this._modelsBuilder?.mode ? t`<li>
									The <strong>ModelsMode</strong> is '${this._modelsBuilder.mode}'. ${this.renderModelsMode()}
								</li> ` : s}
						${this.renderList()}
					</ul>
				</div>
				<p class="models-actions">
					${this._modelsBuilder?.outOfDateModels ? t`<span class="out-of-date">Models are <strong>out-of-date</strong></span>` : s}
					${this._modelsBuilder?.canGenerate ? t` <uui-button
								.state="${this._buttonStateBuild}"
								look="primary"
								label="Generate models"
								@click="${this._onGenerateModels}">
								Generate models
							</uui-button>` : s}
				</p>
				${this._modelsBuilder?.lastError ? t`<p class="error">Last generation failed with the following error:</p>
							<umb-code-block style="max-height:500px;">${this._modelsBuilder.lastError}</umb-code-block>` : s}
			</uui-box>
		`;
  }
  renderList() {
    return this._modelsBuilder?.mode !== r.NOTHING ? t`${this._modelsBuilder?.modelsNamespace ? t`<li>The <strong>models namespace</strong> is ${this._modelsBuilder.modelsNamespace}.</li>` : s}
			${this._modelsBuilder?.trackingOutOfDateModels === !0 ? t`<li>Tracking of <strong>out-of-date models</strong> is enabled.</li>` : this._modelsBuilder?.trackingOutOfDateModels === !1 ? t`<li>Tracking of <strong>out-of-date models</strong> is not enabled.</li>` : s}` : s;
  }
  renderModelsMode() {
    switch (this._modelsBuilder?.mode) {
      case r.IN_MEMORY_AUTO:
        return "Strongly typed models are re-generated on startup and anytime schema changes (i.e. Content Type) are made. No recompilation necessary but the generated models are not available to code outside of Razor.";
      case r.SOURCE_CODE_MANUAL:
        return "Strongly typed models are generated on demand. Recompilation is necessary and models are available to all CSharp code.";
      case r.SOURCE_CODE_AUTO:
        return "Strong typed models are generated on demand and anytime schema changes (i.e. Content Type) are made. Recompilation is necessary and models are available to all CSharp code.";
      case r.NOTHING:
        return "Strongly typed models are not generated. All content and cache will operate from instance of IPublishedContent only.";
      default:
        return;
    }
  }
};
a.styles = [
  f,
  b`
			:host {
				display: block;
				padding: var(--uui-size-layout-1);
			}

			.models-description ul {
				list-style-type: square;
				margin: 0;
				padding-left: var(--uui-size-layout-1);
			}

			span.out-of-date {
				display: block;
				padding-block-end: var(--uui-size-space-4);
			}

			.error {
				font-weight: bold;
				color: var(--uui-color-danger);
			}

			p.models-actions {
				margin-bottom: 0;
			}
		`
];
i([
  c()
], a.prototype, "_modelsBuilder", 2);
i([
  c()
], a.prototype, "_buttonStateBuild", 2);
i([
  c()
], a.prototype, "_buttonStateReload", 2);
a = i([
  _("umb-models-builder-dashboard")
], a);
const $ = a;
export {
  a as UmbModelsBuilderDashboardElement,
  $ as default
};
//# sourceMappingURL=models-builder-dashboard.element-BqquPtBN.js.map
