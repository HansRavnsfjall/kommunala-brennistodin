import { ProcessStepElementBase as u } from "@jumoo/processing";
import { html as c, customElement as m } from "@umbraco-cms/backoffice/external/lit";
import { uSyncRestore as a } from "@jumoo/usync-expansions";
var i = Object.getOwnPropertyDescriptor, C = (e, t, p, n) => {
  for (var r = n > 1 ? void 0 : n ? i(t, p) : t, s = e.length - 1, l; s >= 0; s--)
    (l = e[s]) && (r = l(r) || r);
  return r;
};
let o = class extends u {
  constructor() {
    super();
  }
  render() {
    const e = this.results, t = this.options;
    return c`<uui-box>
			<p>
				Restore point created:
				<strong>${t.title}</strong>
			</p>

			<umb-localize key="uSyncRestore_createComplete"></umb-localize>

			<p>Contains ${e.results.changes ?? "unknown"} items</p>
		</uui-box>`;
  }
};
o = C([
  m(a.steps.restoreCreateComplete)
], o);
const g = o;
export {
  g as default,
  o as uSyncRestoreCreateCompleteElement
};
//# sourceMappingURL=restore-create-complete-BOotxyXE.js.map
