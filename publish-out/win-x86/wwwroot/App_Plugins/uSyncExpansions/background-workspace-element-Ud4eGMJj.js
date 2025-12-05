import { PipelinesContext as p, PipelineStatus as d } from "@jumoo/processing";
import { html as y, css as h, customElement as v } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as _ } from "@umbraco-cms/backoffice/lit-element";
var m = Object.getOwnPropertyDescriptor, l = (e) => {
  throw TypeError(e);
}, g = (e, t, r, o) => {
  for (var s = o > 1 ? void 0 : o ? m(t, r) : t, i = e.length - 1, c; i >= 0; i--)
    (c = e[i]) && (s = c(s) || s);
  return s;
}, u = (e, t, r) => t.has(e) || l("Cannot " + r), k = (e, t, r) => (u(e, t, "read from private field"), t.get(e)), f = (e, t, r) => t.has(e) ? l("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), S = (e, t, r, o) => (u(e, t, "write to private field"), t.set(e, r), r), a;
let n = class extends _ {
  constructor() {
    super(), f(this, a), S(this, a, new p(this)), console.debug("uSyncBackgroundWorkspaceElement", k(this, a));
  }
  render() {
    return y`<umb-body-layout
			><div class="layout">
				<uui-box .headline=${this.localize.term("uSyncBackground_title")}>
					${this.localize.term("uSyncBackground_intro")}
				</uui-box>

				<usync-process-list
					.defaultStatus=${d.WAITING}
					.headline=${this.localize.term(
      "uSyncBackground_processes"
    )}></usync-process-list>

				<usync-pending-list
					.headline=${this.localize.term("uSyncBackground_queue")}></usync-pending-list>
			</div>
		</umb-body-layout>`;
  }
};
a = /* @__PURE__ */ new WeakMap();
n.styles = h`
		.layout {
			display: flex;
			flex-direction: column;
			gap: var(--uui-size-space-4);
		}
	`;
n = g([
  v("usync-background-workspace-element")
], n);
const E = n;
export {
  E as default,
  n as uSyncBackgroundWorkspaceElement
};
//# sourceMappingURL=background-workspace-element-Ud4eGMJj.js.map
