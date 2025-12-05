import { ProcessStepElementBase as a } from "@jumoo/processing";
import { html as l, customElement as p } from "@umbraco-cms/backoffice/external/lit";
import { u as m } from "./index-BRxV4qqS.js";
var c = Object.getOwnPropertyDescriptor, S = (e, t, i, o) => {
  for (var r = o > 1 ? void 0 : o ? c(t, i) : t, n = e.length - 1, s; n >= 0; n--)
    (s = e[n]) && (r = s(r) || r);
  return r;
};
let u = class extends a {
  render() {
    var e;
    return (e = this.options) != null && e.alias ? this.renderSingle() : this.renderAll();
  }
  renderAll() {
    return l`<uui-box>
			<umb-localize key="uSyncSnapshots_allWarning"></umb-localize>
		</uui-box>`;
  }
  renderSingle() {
    return l`
			<uui-box>
				<umb-localize key="uSyncSnapshots_singleWarning"></umb-localize>
			</uui-box>
		`;
  }
};
u = S([
  p(m.steps.reportConfig)
], u);
export {
  u as default
};
//# sourceMappingURL=report-config.element-DgGH689o.js.map
