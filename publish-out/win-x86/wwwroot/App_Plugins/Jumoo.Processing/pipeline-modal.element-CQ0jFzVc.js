import "@umbraco-cms/backoffice/auth";
import { P as L, a as $, J as C } from "./index-DZ9N36G3.js";
import "@umbraco-cms/backoffice/class-api";
import "@umbraco-cms/backoffice/resources";
import { html as h, nothing as P, css as x, state as r, customElement as A } from "@umbraco-cms/backoffice/external/lit";
import { UmbModalBaseElement as S } from "@umbraco-cms/backoffice/modal";
var w = Object.defineProperty, M = Object.getOwnPropertyDescriptor, u = (t) => {
  throw TypeError(t);
}, a = (t, e, s, d) => {
  for (var n = d > 1 ? void 0 : d ? M(e, s) : e, p = t.length - 1, c; p >= 0; p--)
    (c = t[p]) && (n = (d ? c(e, s, n) : c(n)) || n);
  return d && n && w(e, s, n), n;
}, O = (t, e, s) => e.has(t) || u("Cannot " + s), T = (t, e, s) => e.has(t) ? u("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, s), l = (t, e, s) => (O(t, e, "access private method"), s), o, _, f, b, g, y, m, v;
let i = class extends S {
  constructor() {
    super(), T(this, o), this._isValid = !0, this._isLastAction = !1, this.headline = "", this.progressLabel = "", this.closeLabel = "", this.modalType = "sidebar", this._pipelineContext = new L(this), this.observe(this._pipelineContext.finalized, (t) => {
      t && this.modalContext?.reject();
    });
  }
  connectedCallback() {
    super.connectedCallback(), this.modalType = this.modalContext?.type ?? "sidebar", this.headline = this.data?.headline ?? "", this.progressLabel = this.data?.progressLabel ?? "Process", this.closeLabel = this.data?.closeLabel ?? "Close";
  }
  render() {
    return h` ${l(this, o, v).call(this)}
			<umb-body-layout id="jumoo-processing-modal">
				<div slot="header" id="header">
					<h3>${this.headline}</h3>
					${this.data?.description}
				</div>
				${this.renderProcess()}
				<div slot="actions">${this.renderActions()}</div>
			</umb-body-layout>`;
  }
  renderProcess() {
    if (this.data)
      return h`<jumoo-pipeline
			.processor=${this.data.processor}
			.strategy=${this.data.strategy}
			.setup=${this.data.options}
			.debug=${this.data.debug ?? !1}
			@pipeline-status=${l(this, o, _)}
			@pipeline-valid=${l(this, o, f)}
			@pipeline-complete=${l(this, o, g)}
			@pipeline-modal-update=${l(this, o, y)}></jumoo-pipeline>`;
  }
  renderActions() {
    const t = this._status === $.WAITING && this._isValid && !this._isLastAction ? h`<uui-button
						@click=${l(this, o, m)}
						color="positive"
						look="primary"
						.label=${this.progressLabel}></uui-button>` : P, e = h`<uui-button
			@click=${l(this, o, b)}
			color="default"
			look="default"
			label=${this.closeLabel}></uui-button>`;
    return h`${e} ${t}`;
  }
};
o = /* @__PURE__ */ new WeakSet();
_ = function(t) {
  this._status = t.detail.status, this._isLastAction = t.detail.isLastAction;
};
f = function(t) {
  this._isValid = t.detail.valid;
};
b = async function() {
  await this._pipelineContext.triggerClose();
};
g = function() {
};
y = function(t) {
  console.debug("pipeline-modal-update", t), t.detail && (t.detail.headline && (this.headline = t.detail.headline), t.detail.progressLabel && (this.progressLabel = t.detail.progressLabel), t.detail.closeLabel && (this.closeLabel = t.detail.closeLabel));
};
m = function() {
  this._pipelineContext.triggerNext();
};
v = function() {
  const t = this.data?.width ?? this.modalType === "dialog" ? 600 : 0;
  return h`<style>
			#jumoo-processing-modal {
				min-width: ${t > 0 ? t + "px" : "auto"};
				min-height: ${this.data?.height ? this.data.height + "px" : "auto"};
			}
		</style>`;
};
i.styles = x`
		#header h3 {
			display: block;
			margin: 0;
		}
	`;
a([
  r()
], i.prototype, "_status", 2);
a([
  r()
], i.prototype, "_isValid", 2);
a([
  r()
], i.prototype, "_isLastAction", 2);
a([
  r()
], i.prototype, "headline", 2);
a([
  r()
], i.prototype, "progressLabel", 2);
a([
  r()
], i.prototype, "closeLabel", 2);
a([
  r()
], i.prototype, "modalType", 2);
i = a([
  A(C)
], i);
const B = i;
export {
  B as default,
  i as uSyncProcessingModal
};
//# sourceMappingURL=pipeline-modal.element-CQ0jFzVc.js.map
