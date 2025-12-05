import { unsafeHTML as _, html as h, css as d, state as o, customElement as p } from "@umbraco-cms/backoffice/external/lit";
import { TelemetryLevelModel as s, TelemetryService as c } from "@umbraco-cms/backoffice/external/backend-api";
import { UmbLitElement as v } from "@umbraco-cms/backoffice/lit-element";
import { tryExecute as u, UmbApiError as b } from "@umbraco-cms/backoffice/resources";
import { UmbTextStyles as L } from "@umbraco-cms/backoffice/style";
var g = Object.defineProperty, f = Object.getOwnPropertyDescriptor, i = (t, e, m, a) => {
  for (var l = a > 1 ? void 0 : a ? f(e, m) : e, n = t.length - 1, y; n >= 0; n--)
    (y = t[n]) && (l = (a ? y(e, m, l) : y(l)) || l);
  return a && l && g(e, m, l), l;
};
let r = class extends v {
  constructor() {
    super(), this._telemetryFormData = s.BASIC, this._telemetryLevels = [], this._errorMessage = "", this._buttonState = void 0, this._handleSubmit = async (t) => {
      t.stopPropagation(), this._buttonState = "waiting";
      const { error: e } = await u(
        this,
        c.postTelemetryLevel({
          body: { telemetryLevel: this._telemetryFormData }
        })
      );
      if (e) {
        this._buttonState = "failed", this._errorMessage = (b.isUmbApiError(e) ? e.problemDetails.detail : e.message) ?? "Unknown error";
        return;
      }
      this._buttonState = "success";
    }, this._setup();
  }
  async _setup() {
    const t = await u(this, c.getTelemetry({ query: { skip: 0, take: 3 } }));
    this._telemetryLevels = t.data?.items ?? [];
    const e = await u(this, c.getTelemetryLevel());
    this._telemetryFormData = e.data?.telemetryLevel ?? s.BASIC;
  }
  _handleChange(t) {
    const e = t.target;
    this._telemetryFormData = this._telemetryLevels[parseInt(e.value) - 1].telemetryLevel ?? s.BASIC;
  }
  get _selectedTelemetryIndex() {
    return this._telemetryLevels.findIndex((t) => t.telemetryLevel === this._telemetryFormData) ?? 0;
  }
  get _selectedTelemetry() {
    return this._telemetryLevels.find((t) => t.telemetryLevel === this._telemetryFormData) ?? this._telemetryLevels[1];
  }
  get _selectedTelemetryDescription() {
    switch (this._selectedTelemetry.telemetryLevel) {
      case s.MINIMAL:
        return this.localize.term("analytics_minimalLevelDescription");
      case s.BASIC:
        return this.localize.term("analytics_basicLevelDescription");
      case s.DETAILED:
        return this.localize.term("analytics_detailedLevelDescription");
      default:
        return "Could not find description for this setting";
    }
  }
  _renderSettingSlider() {
    if (!(!this._telemetryLevels || this._telemetryLevels.length < 1))
      return h`
			<uui-slider
				@input=${this._handleChange}
				name="telemetryLevel"
				label=${this.localize.term("analytics_consentForAnalytics")}
				value=${this._selectedTelemetryIndex + 1}
				min="1"
				max=${this._telemetryLevels.length}
				hide-step-values
				hide-value-label></uui-slider>
			<h3>${this._selectedTelemetry.telemetryLevel}</h3>
			<p>${_(this._selectedTelemetryDescription)}</p>
		`;
  }
  render() {
    return h`
			<uui-box headline=${this.localize.term("analytics_consentForAnalytics")}>
				<div style="max-width:75ch">
					<umb-localize key="analytics_analyticsDescription"></umb-localize>
					${this._renderSettingSlider()}
					<uui-button
						look="primary"
						color="positive"
						label=${this.localize.term("buttons_save")}
						@click="${this._handleSubmit}"
						.state=${this._buttonState}></uui-button>
				</div>
				${this._errorMessage ? h`<p class="error">${this._errorMessage}</p>` : ""}
			</uui-box>
		`;
  }
};
r.styles = [
  L,
  d`
			:host {
				display: block;
				padding: var(--uui-size-layout-1);
			}
		`
];
i([
  o()
], r.prototype, "_telemetryFormData", 2);
i([
  o()
], r.prototype, "_telemetryLevels", 2);
i([
  o()
], r.prototype, "_errorMessage", 2);
i([
  o()
], r.prototype, "_buttonState", 2);
r = i([
  p("umb-dashboard-telemetry")
], r);
const I = r;
export {
  r as UmbDashboardTelemetryElement,
  I as default
};
//# sourceMappingURL=dashboard-telemetry.element-DieJLDv2.js.map
