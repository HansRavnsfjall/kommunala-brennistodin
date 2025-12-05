import { ProcessStepElementBase as u } from "@jumoo/processing";
import { uSyncRestore as a } from "@jumoo/usync-expansions";
import { html as p, customElement as i } from "@umbraco-cms/backoffice/external/lit";
var m = Object.getOwnPropertyDescriptor, d = (t, e, c, n) => {
  for (var s = n > 1 ? void 0 : n ? m(e, c) : e, r = t.length - 1, l; r >= 0; r--)
    (l = t[r]) && (s = l(s) || s);
  return s;
};
let o = class extends u {
  connectedCallback() {
    var e;
    super.connectedCallback();
    const t = ((e = this.results) == null ? void 0 : e.results.changes) ?? 0;
    console.log("changes", t), this.dispatchEvent(
      new CustomEvent("pipeline-valid", {
        bubbles: !0,
        composed: !0,
        detail: {
          valid: t != 0
        }
      })
    ), this.dispatchEvent(
      new CustomEvent("pipeline-modal-update", {
        bubbles: !0,
        composed: !0,
        detail: {
          progressLabel: "Restore"
        }
      })
    );
  }
  render() {
    var e;
    const t = (e = this.results) == null ? void 0 : e.results.actions;
    return p`<usync-results .results=${t}></usync-results>`;
  }
};
o = d([
  i(a.steps.restoreReportStep)
], o);
const E = o;
export {
  E as default,
  o as uSyncRestoreReportElement
};
//# sourceMappingURL=restore-report-element-CPHjU2bk.js.map
