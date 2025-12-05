import { ProcessStepElementBase as h } from "@jumoo/processing";
import { html as _, css as m, customElement as f } from "@umbraco-cms/backoffice/external/lit";
import { a as x } from "./index-CPaPWJuU.js";
import { S as y } from "./exporter.service-e5HNtlDi.js";
var S = Object.getOwnPropertyDescriptor, u = (t) => {
  throw TypeError(t);
}, w = (t, e, o, a) => {
  for (var r = a > 1 ? void 0 : a ? S(e, o) : e, i = t.length - 1, l; i >= 0; i--)
    (l = t[i]) && (r = l(r) || r);
  return r;
}, c = (t, e, o) => e.has(t) || u("Cannot " + o), E = (t, e, o) => (c(t, e, "read from private field"), o ? o.call(t) : e.get(t)), d = (t, e, o) => e.has(t) ? u("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, o), k = (t, e, o, a) => (c(t, e, "write to private field"), e.set(t, o), o), g = (t, e, o) => (c(t, e, "access private method"), o), n, p, v;
let s = class extends h {
  constructor() {
    super(), d(this, p), d(this, n), k(this, n, new y(this));
  }
  render() {
    var o;
    const t = (o = this.results) == null ? void 0 : o.results.actions, e = (t == null ? void 0 : t.length) ?? 0;
    return _`
			<umb-localize key="uSyncExport_packComplete"></umb-localize>

			<div class="download">
				<uui-button
					@click=${g(this, p, v)}
					color="positive"
					look="primary"
					label="Download export"
					><div>
						<umb-icon name="icon-download"></umb-icon> Download export
					</div></uui-button
				>
			</div>

			<p>
				<em>Exported Sync-pack contains ${e} items</em>
			</p>
		`;
  }
};
n = /* @__PURE__ */ new WeakMap();
p = /* @__PURE__ */ new WeakSet();
v = async function() {
  if (!this.pipelineId || !this.options) return;
  const t = this.options;
  await E(this, n).getExport(this.pipelineId, t.name);
};
s.styles = m`
		uui-button > div {
			display: flex;
			font-size: 14pt;
			gap: 10px;
		}

		.download {
			display: flex;
			align-content: center;
			justify-content: center;
		}
	`;
s = w([
  f(x.export.results)
], s);
const z = s;
export {
  z as default,
  s as uSyncExportReportStep
};
//# sourceMappingURL=export-results-step-QtonJJ8J.js.map
