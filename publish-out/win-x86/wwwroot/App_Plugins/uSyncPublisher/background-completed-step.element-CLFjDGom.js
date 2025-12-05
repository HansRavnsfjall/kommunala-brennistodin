import { ProcessStepElementBase as a, JUMOO_PROCESSING_CONTEXT as c, PipelineStatus as h } from "@jumoo/processing";
import { S as m } from "./index-DFDZ_Jke.js";
import { html as f, css as v, state as u, customElement as d } from "@umbraco-cms/backoffice/external/lit";
var y = Object.defineProperty, b = Object.getOwnPropertyDescriptor, o = (s, e, t, r) => {
  for (var i = r > 1 ? void 0 : r ? b(e, t) : e, l = s.length - 1, n; l >= 0; l--)
    (n = s[l]) && (i = (r ? n(e, t, i) : n(i)) || i);
  return r && i && y(e, t, i), i;
};
let p = class extends a {
  constructor() {
    super(), this.consumeContext(c, async (s) => {
      s && (this.pipeline = await s.getPipeline(this.pipelineId), this.observe(s.backgroundState, async (e) => {
        if ((e == null ? void 0 : e.status) == h.COMPLETED) {
          const t = await s.fetchPipeline(this.pipelineId);
          this.backgroundResults = t == null ? void 0 : t.results;
        }
      }), this.observe(s.options, (e) => {
        this._options = e;
      }));
    });
  }
  render() {
    var e, t, r;
    const s = (t = (e = this.pipeline) == null ? void 0 : e.results) == null ? void 0 : t.results.actions;
    return f`<div class="wrapper">
			<uui-box>Completed in the background</uui-box>
			<usync-publisher-report-view
				server=${((r = this._options) == null ? void 0 : r.server) ?? ""}
				.isReport=${!1}
				.results=${s}></usync-publisher-report-view>
		</div> `;
  }
};
p.styles = v`
		.wrapper {
			display: flex;
			flex-direction: column;
			gap: var(--uui-size-space-4);
		}
	`;
o([
  u()
], p.prototype, "backgroundResults", 2);
o([
  u()
], p.prototype, "_options", 2);
o([
  u()
], p.prototype, "pipeline", 2);
p = o([
  d(m.elements.backgroundCompleted)
], p);
const O = p;
export {
  p as SyncPublishBackgroundCompletedStepElement,
  O as default
};
//# sourceMappingURL=background-completed-step.element-CLFjDGom.js.map
