import { html as c, nothing as L, state as l, customElement as g } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as P } from "@umbraco-cms/backoffice/lit-element";
import { JUMOO_PROCESSING_PIPELINE_WORKSPACE as y } from "./pipeline-workspace.context-CWpig-Ra.js";
import "@umbraco-cms/backoffice/auth";
import { P as $, a as x } from "./index-DZ9N36G3.js";
import "@umbraco-cms/backoffice/class-api";
import "@umbraco-cms/backoffice/resources";
import { UMB_MODAL_CONTEXT as E } from "@umbraco-cms/backoffice/modal";
var w = Object.defineProperty, A = Object.getOwnPropertyDescriptor, d = (e) => {
  throw TypeError(e);
}, o = (e, t, s, p) => {
  for (var a = p > 1 ? void 0 : p ? A(t, s) : t, h = e.length - 1, u; h >= 0; h--)
    (u = e[h]) && (a = (p ? u(t, s, a) : u(a)) || a);
  return p && a && w(t, s, a), a;
}, O = (e, t, s) => t.has(e) || d("Cannot " + s), k = (e, t, s) => t.has(e) ? d("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, s), r = (e, t, s) => (O(e, t, "access private method"), s), n, _, f, m, b, C, v;
let i = class extends P {
  constructor() {
    super(), k(this, n), this._isLastAction = !1, this._isValid = !0, this.headline = "", this.progressLabel = "", this.closeLabel = "", this._pipelineContext = new $(this), this.consumeContext(y, (e) => {
      e && this.observe(e.data, (t) => {
        this.pipeline = t, this.headline = this.pipeline?.alias ?? "";
      });
    }), this.consumeContext(E, (e) => {
      this._modalContext = e;
    }), this.observe(this._pipelineContext.finalized, async (e) => {
      e && this._modalContext && this._modalContext.reject();
    });
  }
  connectedCallback() {
    super.connectedCallback(), this.closeLabel = this.localize.term("general_close"), this.progressLabel = this.localize.term("jumooProc_process");
  }
  render() {
    return c`<umb-body-layout .headline=${this.headline}>
			<jumoo-pipeline
				.pipelineId=${this.pipeline?.id}
				.setup=${this.pipeline?.options}
				.debug=${!1}
				@pipeline-status=${r(this, n, _)}
				@pipeline-valid=${r(this, n, f)}
				@pipeline-complete=${r(this, n, b)}
				@pipeline-modal-update=${r(this, n, v)}></jumoo-pipeline>
			<div slot="actions">${this.renderActions()}</div>
		</umb-body-layout>`;
  }
  renderActions() {
    const e = this._status === x.WAITING && this._isValid && !this._isLastAction ? c`<uui-button
						@click=${r(this, n, C)}
						color="positive"
						look="primary"
						.label=${this.progressLabel}></uui-button>` : L, t = c`<uui-button
			@click=${r(this, n, m)}
			color="default"
			look="default"
			label=${this.closeLabel}></uui-button>`;
    return c`${t} ${e}`;
  }
};
n = /* @__PURE__ */ new WeakSet();
_ = function(e) {
  this._status = e.detail.status, this._isLastAction = e.detail.isLastAction;
};
f = function(e) {
  this._isValid = e.detail.valid;
};
m = async function() {
  await this._pipelineContext.triggerClose();
};
b = function() {
};
C = function() {
  this._pipelineContext.triggerNext();
};
v = function(e) {
  console.debug("pipeline-modal-update", e), e.detail && (e.detail.headline && (this.headline = e.detail.headline), e.detail.progressLabel && (this.progressLabel = e.detail.progressLabel), e.detail.closeLabel && (this.closeLabel = e.detail.closeLabel));
};
o([
  l()
], i.prototype, "pipeline", 2);
o([
  l()
], i.prototype, "_isLastAction", 2);
o([
  l()
], i.prototype, "_status", 2);
o([
  l()
], i.prototype, "_isValid", 2);
o([
  l()
], i.prototype, "headline", 2);
o([
  l()
], i.prototype, "progressLabel", 2);
o([
  l()
], i.prototype, "closeLabel", 2);
o([
  l()
], i.prototype, "_modalContext", 2);
i = o([
  g("jumpp-processing-pipeline-workspace-default-view")
], i);
const J = i;
export {
  i as JumooProcessingPipelineWorkspaceDefaultViewElement,
  J as default
};
//# sourceMappingURL=default-pipeline-view-CzfxRtJj.js.map
