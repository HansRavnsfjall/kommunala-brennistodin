import { k as w } from "./constants-D9L2jSGX.js";
import { UmbControllerBase as V } from "@umbraco-cms/backoffice/class-api";
import { DocumentTypeService as S } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecute as z } from "@umbraco-cms/backoffice/resources";
import { UmbRepositoryBase as $ } from "@umbraco-cms/backoffice/repository";
import { when as P, html as v, nothing as f, css as B, state as p, customElement as A } from "@umbraco-cms/backoffice/external/lit";
import { UmbTextStyles as x } from "@umbraco-cms/backoffice/style";
import { UmbLitElement as N } from "@umbraco-cms/backoffice/lit-element";
class L extends V {
  /**
   * Gets the document type configuration from the server.
   * @returns {Promise<UmbDataSourceResponse<UmbDocumentTypeConfigurationModel>>} - The document type configuration.
   * @memberof UmbDocumentTypeConfigurationServerDataSource
   */
  async getConfiguration() {
    const { data: t, error: i } = await z(this, S.getDocumentTypeConfiguration());
    return t ? { data: {
      dataTypesCanBeChanged: t.dataTypesCanBeChanged === "True",
      disableTemplates: t.disableTemplates,
      useSegments: t.useSegments,
      reservedFieldNames: t.reservedFieldNames
    } } : { error: i };
  }
}
class U extends $ {
  #e = new L(this);
  /**
   * Requests the Document Type configuration
   * @returns {Promise<UmbRepositoryResponse<UmbDocumentTypeConfigurationModel>>} - The document type configuration.
   * @memberof UmbDocumentTypeConfigurationRepository
   */
  requestConfiguration() {
    return this.#e.getConfiguration();
  }
}
var F = Object.defineProperty, O = Object.getOwnPropertyDescriptor, b = (e) => {
  throw TypeError(e);
}, l = (e, t, i, y) => {
  for (var u = y > 1 ? void 0 : y ? O(t, i) : t, h = e.length - 1, m; h >= 0; h--)
    (m = e[h]) && (u = (y ? m(t, i, u) : m(u)) || u);
  return y && u && F(t, i, u), u;
}, _ = (e, t, i) => t.has(e) || b("Cannot " + i), o = (e, t, i) => (_(e, t, "read from private field"), i ? i.call(e) : t.get(e)), d = (e, t, i) => t.has(e) ? b("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), W = (e, t, i, y) => (_(e, t, "write to private field"), t.set(e, i), i), n = (e, t, i) => (_(e, t, "access private method"), i), r, g, s, D, c, C, T, k, E;
let a = class extends N {
  constructor() {
    super(), d(this, s), d(this, r), d(this, g, new U(this)), this.consumeContext(w, (e) => {
      W(this, r, e), n(this, s, D).call(this);
    });
  }
  async firstUpdated(e) {
    super.firstUpdated(e);
    const { data: t } = await o(this, g).requestConfiguration();
    t && (this._useSegments = t.useSegments);
  }
  render() {
    return v`
			<uui-box headline="Data variations">
				<umb-property-layout
					alias="VaryByCulture"
					label=${this.localize.term("contentTypeEditor_cultureVariantHeading")}>
					<div slot="description">
						<umb-localize key="contentTypeEditor_cultureVariantDescription"
							>Allow editors to create content of different languages.</umb-localize
						>
					</div>
					<div slot="editor">
						<uui-toggle
							?checked=${this._variesByCulture}
							@change=${(e) => {
      o(this, r)?.setVariesByCulture(e.target.checked);
    }}
							label=${this.localize.term("contentTypeEditor_cultureVariantLabel")}></uui-toggle>
					</div>
				</umb-property-layout>

				${n(this, s, E).call(this)}

				<umb-property-layout alias="ElementType" label=${this.localize.term("contentTypeEditor_elementHeading")}>
					<div slot="description">
						<umb-localize key="contentTypeEditor_elementDescription"
							>An Element Type is used for content instances in Property Editors, like the Block Editors.</umb-localize
						>
					</div>
					<div slot="editor">
						<uui-toggle
							?checked=${this._isElement}
							@change=${(e) => {
      o(this, r)?.setIsElement(e.target.checked);
    }}
							label=${this.localize.term("contentTypeEditor_elementType")}></uui-toggle>
					</div>
				</umb-property-layout>
			</uui-box>
			<uui-box headline=${this.localize.term("contentTypeEditor_historyCleanupHeading")}>
				<umb-property-layout
					alias="HistoryCleanup"
					label=${this.localize.term("contentTypeEditor_historyCleanupHeading")}>
					<div slot="description">
						<umb-localize key="contentTypeEditor_historyCleanupDescription"
							>Allow overriding the global history cleanup settings.</umb-localize
						>
					</div>
					<div slot="editor">
						<uui-form-layout-item>
							<uui-toggle
								id="prevent-cleanup"
								label=${this.localize.term("contentTypeEditor_historyCleanupPreventCleanup")}
								.checked=${this._preventCleanup ?? !1}
								@change=${n(this, s, C)}></uui-toggle>
						</uui-form-layout-item>

						${P(
      !this._preventCleanup,
      () => v`
								<uui-form-layout-item>
									<uui-label slot="label" for="versions-newer-than-days">
										<umb-localize key="contentTypeEditor_historyCleanupKeepAllVersionsNewerThanDays"
											>Keep all versions newer than days</umb-localize
										>
									</uui-label>

									<uui-input
										type="number"
										id="versions-newer-than-days"
										min="0"
										placeholder="7"
										.value=${this._keepAllVersionsNewerThanDays}
										@change=${n(this, s, T)}></uui-input>
								</uui-form-layout-item>

								<uui-form-layout-item>
									<uui-label slot="label" for="latest-version-per-day-days">
										<umb-localize key="contentTypeEditor_historyCleanupKeepLatestVersionPerDayForDays"
											>Keep latest version per day for days</umb-localize
										>
									</uui-label>
									<uui-input
										type="number"
										id="latest-version-per-day-days"
										min="0"
										placeholder="90"
										.value=${this._keepLatestVersionPerDayForDays}
										@change=${n(this, s, k)}></uui-input>
								</uui-form-layout-item>
							`
    )}
					</div>
				</umb-property-layout>
			</uui-box>
		`;
  }
};
r = /* @__PURE__ */ new WeakMap();
g = /* @__PURE__ */ new WeakMap();
s = /* @__PURE__ */ new WeakSet();
D = function() {
  o(this, r) && (this.observe(
    o(this, r).variesByCulture,
    (e) => this._variesByCulture = e
  ), this.observe(
    o(this, r).variesBySegment,
    (e) => this._variesBySegment = e
  ), this.observe(o(this, r).isElement, (e) => this._isElement = e), this.observe(o(this, r).cleanup, (e) => {
    this._preventCleanup = e?.preventCleanup, this._keepAllVersionsNewerThanDays = e?.keepAllVersionsNewerThanDays, this._keepLatestVersionPerDayForDays = e?.keepLatestVersionPerDayForDays;
  }));
};
c = function() {
  o(this, r)?.setCleanup({
    preventCleanup: this._preventCleanup ?? !1,
    keepAllVersionsNewerThanDays: this._keepAllVersionsNewerThanDays,
    keepLatestVersionPerDayForDays: this._keepLatestVersionPerDayForDays
  });
};
C = function(e) {
  this._preventCleanup = e.target.checked, this._preventCleanup && (this._keepAllVersionsNewerThanDays = null, this._keepLatestVersionPerDayForDays = null), n(this, s, c).call(this);
};
T = function(e) {
  this._keepAllVersionsNewerThanDays = parseInt(e.target.value), n(this, s, c).call(this);
};
k = function(e) {
  this._keepLatestVersionPerDayForDays = parseInt(e.target.value), n(this, s, c).call(this);
};
E = function() {
  return this._useSegments ? this._isElement ? f : v`
			<umb-property-layout
				alias="VaryBySegments"
				label=${this.localize.term("contentTypeEditor_segmentVariantHeading")}>
				<div slot="description">
					<umb-localize key="contentTypeEditor_segmentVariantDescription"
						>Allow editors to segment their content.</umb-localize
					>
				</div>
				<div slot="editor">
					<uui-toggle
						?checked=${this._variesBySegment}
						@change=${(e) => {
    o(this, r)?.setVariesBySegment(e.target.checked);
  }}
						label=${this.localize.term("contentTypeEditor_segmentVariantLabel")}></uui-toggle>
				</div>
			</umb-property-layout>
		` : f;
};
a.styles = [
  x,
  B`
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
l([
  p()
], a.prototype, "_variesByCulture", 2);
l([
  p()
], a.prototype, "_variesBySegment", 2);
l([
  p()
], a.prototype, "_isElement", 2);
l([
  p()
], a.prototype, "_keepAllVersionsNewerThanDays", 2);
l([
  p()
], a.prototype, "_keepLatestVersionPerDayForDays", 2);
l([
  p()
], a.prototype, "_preventCleanup", 2);
l([
  p()
], a.prototype, "_useSegments", 2);
a = l([
  A("umb-document-type-workspace-view-settings")
], a);
const Y = a;
export {
  a as UmbDocumentTypeWorkspaceViewSettingsElement,
  Y as default
};
//# sourceMappingURL=document-type-workspace-view-settings.element-CuXtq6st.js.map
