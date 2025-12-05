import { ProcessStepElementBase as d } from "@jumoo/processing";
import { g as n, S as i } from "./index-DFDZ_Jke.js";
import { html as p, state as h, customElement as m } from "@umbraco-cms/backoffice/external/lit";
var b = Object.defineProperty, S = Object.getOwnPropertyDescriptor, u = (s, e, a, l) => {
  for (var t = l > 1 ? void 0 : l ? S(e, a) : e, c = s.length - 1, o; c >= 0; c--)
    (o = s[c]) && (t = (l ? o(e, a, t) : o(t)) || t);
  return l && t && b(e, a, t), t;
};
let r = class extends d {
  constructor() {
    super();
  }
  connectedCallback() {
    var e;
    super.connectedCallback();
    const s = this.options;
    (e = s.custom) != null && e.releaseDate && (this.scheduledDate = this.localize.date(
      s.custom.releaseDate,
      n
    ), this.dispatchEvent(
      new CustomEvent("pipeline-modal-update", {
        composed: !0,
        bubbles: !0,
        detail: {
          headline: `Scheduled for ${this.scheduledDate ?? ""}`,
          closeLabel: "Close"
        }
      })
    ));
  }
  render() {
    return p`<div class="wrapper">
			<uui-box headline="Scheduled">
				<p>
					The process has been scheduled. and will start up again at the
					${this.scheduledDate ?? "the specified time"}.
				</p>
			</uui-box>
		</div> `;
  }
};
u([
  h()
], r.prototype, "scheduledDate", 2);
r = u([
  m(i.elements.backgroundScheduled)
], r);
const D = r;
export {
  r as SyncPublishBackgroundScheduledStepElement,
  D as default
};
//# sourceMappingURL=background-scheduled-step.element-DOROOeyE.js.map
