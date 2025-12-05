import { ProcessStepElementBase as h } from "@jumoo/processing";
import { nothing as l, html as u, customElement as p } from "@umbraco-cms/backoffice/external/lit";
import { u as c } from "./index-BRxV4qqS.js";
var m = Object.getOwnPropertyDescriptor, S = (e, t, i, o) => {
  for (var n = o > 1 ? void 0 : o ? m(t, i) : t, r = e.length - 1, a; r >= 0; r--)
    (a = e[r]) && (n = a(n) || n);
  return n;
};
let s = class extends h {
  render() {
    var t;
    var e = (t = this.results) == null ? void 0 : t.results.snapshot;
    return e ? e.fileCount === 0 ? this.renderNoChanges() : this.renderChanges(e) : l;
  }
  renderNoChanges() {
    return u`<uui-box .headline=${this.localize.term("uSyncSnapshots_noChanges")}>
			<umb-localize key="uSyncSnapshots_noChangesDescription"></umb-localize>
		</uui-box>`;
  }
  renderChanges(e) {
    return u`
			<uui-box headline=${this.localize.term("uSyncSnapshots_report")}>
				<h2>${e.name}</h2>
				<p>Snapshot contains ${e.fileCount} files,</p>
			</uui-box>
		`;
  }
};
s = S([
  p(c.steps.createReport)
], s);
const d = s;
export {
  d as default,
  s as uSyncSnapshotsCreateReportElement
};
//# sourceMappingURL=create-report.element-C4s2iD2j.js.map
