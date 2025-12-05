import { ProcessStepElementBase as u } from "@jumoo/processing";
import { html as c, customElement as i } from "@umbraco-cms/backoffice/external/lit";
import { u as p } from "./index-BRxV4qqS.js";
var h = Object.getOwnPropertyDescriptor, m = (s, e, a, n) => {
  for (var t = n > 1 ? void 0 : n ? h(e, a) : e, r = s.length - 1, l; r >= 0; r--)
    (l = s[r]) && (t = l(t) || t);
  return t;
};
let o = class extends u {
  connectedCallback() {
    var e;
    super.connectedCallback(), ((e = this.results) == null ? void 0 : e.results.changes) == 0 && (console.log("no changes, skipping"), this.dispatchEvent(
      new CustomEvent("pipeline-valid", {
        bubbles: !0,
        composed: !0,
        detail: {
          valid: !1
        }
      })
    ));
  }
  render() {
    var e;
    var s = (e = this.results) == null ? void 0 : e.results.actions;
    return c`<uui-box headline=${this.localize.term("uSyncSnapshots_report")}>
			<usync-results .results=${s}></usync-results
		></uui-box>`;
  }
};
o = m([
  i(p.steps.reportResults)
], o);
export {
  o as default
};
//# sourceMappingURL=report-results.element-BDlmVM9D.js.map
