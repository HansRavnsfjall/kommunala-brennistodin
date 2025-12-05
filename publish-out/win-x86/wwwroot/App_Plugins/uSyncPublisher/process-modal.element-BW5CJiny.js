import { UmbModalBaseElement as A } from "@umbraco-cms/backoffice/modal";
import { PipelineContext as E, PipelineStatus as z } from "@jumoo/processing";
import { html as u, nothing as f, css as D, state as n, customElement as O } from "@umbraco-cms/backoffice/external/lit";
import { S as v, P as _, D as U, C as W } from "./index-DFDZ_Jke.js";
import { PublisherStrategyContext as H } from "./strategy.context-Nd7v-g-Q.js";
var N = Object.defineProperty, V = Object.getOwnPropertyDescriptor, P = (t) => {
  throw TypeError(t);
}, r = (t, e, i, l) => {
  for (var h = l > 1 ? void 0 : l ? V(e, i) : e, c = t.length - 1, m; c >= 0; c--)
    (m = t[c]) && (h = (l ? m(e, i, h) : m(h)) || h);
  return l && h && N(e, i, h), h;
}, S = (t, e, i) => e.has(t) || P("Cannot " + i), d = (t, e, i) => (S(t, e, "read from private field"), i ? i.call(t) : e.get(t)), b = (t, e, i) => e.has(t) ? P("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), g = (t, e, i, l) => (S(t, e, "write to private field"), e.set(t, i), i), o = (t, e, i) => (S(t, e, "access private method"), i), p, y, a, C, w, T, $, M, k, L, I, x;
let s = class extends A {
  /** setup **/
  constructor() {
    super(), b(this, a), b(this, p), b(this, y), this.isLastAction = !1, this.valid = !0, this.hideServers = !1, this.closeLabel = "Cancel", g(this, p, new E(this)), g(this, y, new H(this)), this.title = "...", this.observe(d(this, p).finalized, (t) => {
      var e;
      t && ((e = this.modalContext) == null || e.reject());
    });
  }
  async connectedCallback() {
    var t;
    super.connectedCallback(), !(!this.data || !((t = this.data) != null && t.items)) && (this.title = `${this.localize.term(`usyncpublish_processModalTitle${this.data.mode}`)} ...`, this.primaryItem = this.data.items[0], this.entityType = this.data.entityType, this.data.server && (await this._setup(this.data.server.alias, this.data.mode), this.hideServers = !0));
  }
  async _setup(t, e) {
    t && (this.title = `${this.localize.term(`usyncpublish_processModalTitle${e}`)} ${t}`, this.strategy = await this._getStrategy(t, e) ?? v.strategies.realtimePush, this.options = this.initializeOptions(t));
  }
  async _getStrategy(t, e) {
    return t ? await d(this, y).getStrategyByServer(
      t,
      e ?? _.PUSH
    ) ?? v.strategies.realtimePush : null;
  }
  initializeOptions(t) {
    var i;
    return (i = this.data) != null && i.items ? {
      $type: "PublisherProcessingOptions",
      items: this.data.items.map((l) => {
        var c;
        return {
          udi: l,
          change: W.UPDATE,
          flags: U.INCLUDE_CHILDREN,
          name: "single",
          entityType: ((c = this.data) == null ? void 0 : c.entityType) ?? ""
        };
      }).filter((l) => l !== void 0),
      server: t,
      mode: this.data.mode ?? _.PUSH,
      entityType: this.data.entityType ?? "",
      createRestorePoint: !1
    } : void 0;
  }
  async _setupServer(t) {
    var e;
    this.options && (this.options.server = t.alias, (e = d(this, p)) == null || e.setValid(!0));
  }
  /** render **/
  render() {
    return u`<umb-body-layout headline=${this.title}>
			${this.renderServerPicker()} ${this.renderProcess()}
			<div slot="actions">${this.renderActions()}</div>
		</umb-body-layout>`;
  }
  renderServerPicker() {
    var t, e, i;
    return this.hideServers ? f : u`
					<div class="server-picker">
						<usync-publisher-server-picker
							.mode=${(t = this.data) == null ? void 0 : t.mode}
							.hideUrl=${!0}
							.entityType=${(e = this.data) == null ? void 0 : e.entityType}
							.primary=${(i = this.primaryItem) == null ? void 0 : i.uriValue}
							.useGrid=${!0}
							@server-selected=${o(this, a, M)}></usync-publisher-server-picker>
					</div>
				`;
  }
  renderProcess() {
    var t;
    return (t = this.options) != null && t.server ? u`
					<jumoo-pipeline
						.processor=${v.pipelines.publish}
						.strategy=${this.strategy}
						.setup=${this.options}
						.debug=${!1}
						@set-valid=${o(this, a, x)}
						@pipeline-status=${o(this, a, k)}
						@pipeline-complete=${o(this, a, I)}
						@pipeline-modal-update=${o(this, a, L)}></jumoo-pipeline>
				` : f;
  }
  renderActions() {
    var e;
    const t = this.status == z.WAITING ? u`<uui-button
						@click="${o(this, a, C)}"
						color="positive"
						look="primary"
						label=${this.localize.term(
      "usyncpublish_processModal" + (((e = this.data) == null ? void 0 : e.mode) ?? _.PUSH)
    )}></uui-button>` : f;
    return this.isLastAction || !this.valid ? u`<uui-button
					@click="${o(this, a, T)}"
					.label=${this.localize.term("usyncpublish_processModalClose")}></uui-button>` : u`<uui-button
						.label=${this.closeLabel}
						@click="${o(this, a, w)}"
						.state=${this._buttonState}></uui-button>
					${t}`;
  }
};
p = /* @__PURE__ */ new WeakMap();
y = /* @__PURE__ */ new WeakMap();
a = /* @__PURE__ */ new WeakSet();
C = function() {
  this.hideServers = !0, d(this, p).triggerNext();
};
w = function() {
  o(this, a, $).call(this);
};
T = async function() {
  await o(this, a, $).call(this);
};
$ = async function() {
  var t, e;
  (t = this.options) != null && t.server ? (d(this, p).setValid(!1), this._buttonState = "waiting", await d(this, p).triggerClose()) : (e = this.modalContext) == null || e.reject();
};
M = async function(t) {
  var e;
  t.detail && (await this._setup(t.detail.alias, (e = this.data) == null ? void 0 : e.mode), await this._setupServer(t.detail));
};
k = function(t) {
  this.status = t.detail.status, this.isLastAction = t.detail.isLastAction;
};
L = function(t) {
  this.closeLabel = t.detail.closeLabel ?? "Cancel", this.title = t.detail.headline;
};
I = function() {
};
x = function(t) {
  this.valid = t.detail;
};
s.styles = D`
		:host {
			display: block;
			height: 100%;
		}

		.server-picker {
			margin-bottom: 20px;
		}
	`;
r([
  n()
], s.prototype, "strategy", 2);
r([
  n()
], s.prototype, "status", 2);
r([
  n()
], s.prototype, "isLastAction", 2);
r([
  n()
], s.prototype, "options", 2);
r([
  n()
], s.prototype, "title", 2);
r([
  n()
], s.prototype, "valid", 2);
r([
  n()
], s.prototype, "primaryItem", 2);
r([
  n()
], s.prototype, "entityType", 2);
r([
  n()
], s.prototype, "hideServers", 2);
r([
  n()
], s.prototype, "closeLabel", 2);
r([
  n()
], s.prototype, "_buttonState", 2);
s = r([
  O("usync-publisher-process-modal")
], s);
const q = s;
export {
  s as SyncPublisherProcessModalElement,
  q as default
};
//# sourceMappingURL=process-modal.element-BW5CJiny.js.map
