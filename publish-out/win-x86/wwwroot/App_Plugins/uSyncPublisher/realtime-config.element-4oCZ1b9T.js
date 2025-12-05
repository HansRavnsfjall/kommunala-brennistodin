import { html as n, customElement as u } from "@umbraco-cms/backoffice/external/lit";
import { c } from "./index-DFDZ_Jke.js";
var a = Object.getOwnPropertyDescriptor, h = (e, o, p, s) => {
  for (var r = s > 1 ? void 0 : s ? a(o, p) : o, t = e.length - 1, l; t >= 0; t--)
    (l = e[t]) && (r = l(r) || r);
  return r;
};
let i = class extends c {
  render() {
    return n`${this.renderSkip()} `;
  }
  renderSkip() {
    var e;
    return n` <umb-property-layout
			label="Skip reporting"
			description="Skip the reporting steps (on click publish)">
			<div slot="editor">
				<uui-checkbox
					id="skipReport"
					label="Skip report"
					.checked=${(e = this.options) == null ? void 0 : e.publisherSettings.skipReport}
					@change=${this.onPublisherSettingChange}>
					<div slot="label"></div
				></uui-checkbox>
			</div>
		</umb-property-layout>`;
  }
};
i = h([
  u("usync-publisher-realtime-config")
], i);
const d = i;
export {
  d as default,
  i as uSyncRealtimePublisherConfigElement
};
//# sourceMappingURL=realtime-config.element-4oCZ1b9T.js.map
