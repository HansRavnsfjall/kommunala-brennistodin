import { ProcessStepElementBase as u } from "@jumoo/processing";
import { S as i } from "./index-DFDZ_Jke.js";
import { html as a, customElement as p } from "@umbraco-cms/backoffice/external/lit";
var h = Object.getOwnPropertyDescriptor, m = (s, e, t, o) => {
  for (var r = o > 1 ? void 0 : o ? h(e, t) : e, l = s.length - 1, c; l >= 0; l--)
    (c = s[l]) && (r = c(r) || r);
  return r;
};
let n = class extends u {
  connectedCallback() {
    var e;
    super.connectedCallback();
    const s = ((e = this.results) == null ? void 0 : e.results.changes) ?? 0;
    this.dispatchEvent(
      new CustomEvent("set-valid", {
        bubbles: !0,
        composed: !0,
        detail: s != 0
      })
    );
  }
  render() {
    var t;
    const s = (t = this.results) == null ? void 0 : t.results.actions, e = this.options;
    return a`
			<usync-publisher-report-view
				.server=${e.server ?? ""}
				.isReport=${!1}
				.results=${s}></usync-publisher-report-view>
		`;
  }
};
n = m([
  p(i.elements.result)
], n);
const S = n;
export {
  n as SyncPublishResultStepElement,
  S as default
};
//# sourceMappingURL=result-step.element-iXCpULQt.js.map
