import { ProcessStepElementBase as p } from "@jumoo/processing";
import { html as c, customElement as m } from "@umbraco-cms/backoffice/external/lit";
import { a } from "./index-CPaPWJuU.js";
var i = Object.getOwnPropertyDescriptor, S = (e, t, r, l) => {
  for (var s = l > 1 ? void 0 : l ? i(t, r) : t, o = e.length - 1, n; o >= 0; o--)
    (n = e[o]) && (s = n(s) || s);
  return s;
};
let u = class extends p {
  constructor() {
    super(), console.log("uSyncImportResultStep");
  }
  render() {
    var r;
    console.log("uSyncImportResultStep.render");
    var e = (r = this.results) == null ? void 0 : r.results.actions, t = (e == null ? void 0 : e.length) ?? 0;
    return c`<div>
			<uui-box>
				<div slot="header">
					<em>Imported Sync-pack contains ${t} items</em>
				</div>
				<usync-results .results=${e}></usync-results>
			</uui-box>
		</div>`;
  }
};
u = S([
  m(a.import.result)
], u);
const f = u;
export {
  f as default,
  u as uSyncImportResultStep
};
//# sourceMappingURL=import-result-step-DyxV8WpK.js.map
