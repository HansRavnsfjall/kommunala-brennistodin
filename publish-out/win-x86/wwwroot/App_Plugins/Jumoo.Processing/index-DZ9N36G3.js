import { UMB_AUTH_CONTEXT as Fe } from "@umbraco-cms/backoffice/auth";
import { UmbLitElement as x } from "@umbraco-cms/backoffice/lit-element";
import { property as g, css as G, customElement as O, nothing as M, html as d, LitElement as ft, state as C, when as te } from "@umbraco-cms/backoffice/external/lit";
import { UmbElementMixin as _t } from "@umbraco-cms/backoffice/element-api";
import { UMB_MODAL_MANAGER_CONTEXT as mt, UmbModalToken as Q } from "@umbraco-cms/backoffice/modal";
import { UmbControllerBase as X } from "@umbraco-cms/backoffice/class-api";
import { UmbContextToken as me } from "@umbraco-cms/backoffice/context-api";
import { UmbObjectState as N, UmbBooleanState as le, UmbArrayState as bt } from "@umbraco-cms/backoffice/observable-api";
import { tryExecute as A } from "@umbraco-cms/backoffice/resources";
import { UmbModalRouteRegistrationController as wt } from "@umbraco-cms/backoffice/router";
var yt = Object.defineProperty, be = (s, e, t, o) => {
  for (var n = void 0, i = s.length - 1, r; i >= 0; i--)
    (r = s[i]) && (n = r(e, t, n) || n);
  return n && yt(e, t, n), n;
};
class wn extends HTMLElement {
}
class we extends x {
}
be([
  g({ type: String })
], we.prototype, "pipelineId");
be([
  g({ type: Object })
], we.prototype, "state");
be([
  g({ type: Object })
], we.prototype, "options");
be([
  g({ type: Object })
], we.prototype, "results");
var vt = Object.defineProperty, Ct = Object.getOwnPropertyDescriptor, xe = (s, e, t, o) => {
  for (var n = o > 1 ? void 0 : o ? Ct(e, t) : e, i = s.length - 1, r; i >= 0; i--)
    (r = s[i]) && (n = (o ? r(e, t, n) : r(n)) || n);
  return o && n && vt(e, t, n), n;
};
let se = class extends x {
  render() {
    if (!this.progress) return M;
    const s = this.progress.steps.map((e) => {
      const t = e.status === Te.COMPLETE ? "complete" : e.status === Te.RUNNING ? "running" : "pending", o = e.icon ?? "icon-checkmark";
      return d`
				<div class="step ${t}">
					<uui-icon .name=${o}></uui-icon>
					<div class="step-name">${e.name}</div>
				</div>
			`;
    });
    return d`<div class="step-progress">
			<div class="steps">${s}</div>
			${this.renderMessages()}
		</div>`;
  }
  renderMessages() {
    return d`<div class="message">
			<div class="content">
				<div>
					<h4>${this.message?.title}</h4>
				</div>
				<div>
					<small>${this.message?.message}</small>
				</div>
			</div>
			<div class="progress">
				<uui-progress-bar .progress=${this.message?.progress ?? 0}></uui-progress-bar>
			</div>
		</div>`;
  }
};
se.styles = G`
		:host {
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
			height: 100%;
		}

		.progress {
			display: flex;
			flex-direction: column;
			align-content: center;
			align-items: center;
			justify-content: center;
			height: 100%;
		}

		uui-progress-bar {
			height: 10px;
			margin: 0;
			padding: 0;
			border-radius: 0;
		}

		.message {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			width: 100%;
		}

		.content {
			width: 100%;
			display: flex;
			flex-direction: column;
			align-items: center;
			align-content: center;
			justify-content: center;
		}

		.content > div {
			display: flex;
			align-content: center;
			align-items: center;
			justify-content: center;
			height: 3rem;
			margin: 0;
			padding: 0;
		}

		.content > div > * {
			margin: 0;
			padding: 0;
			display: block;
			overflow: hidden;
			text-align: center;
		}

		.step-progress {
			width: 100%;
			display: flex;
			flex-direction: column;
			align-items: center;
		}

		.steps {
			display: flex;
			flex-direction: row;
			flex-flow: row wrap;
			justify-content: center;
			width: 100%;
			margin-bottom: var(--uui-size-space-3);
			gap: 5px;
		}

		.step {
			display: flex;
			flex-grow: 1;
			margin: 0 16px;
			max-width: 75px;
			flex-direction: column;
			align-items: center;
			align-content: center;
		}

		.step uui-icon {
			font-size: 30pt;
			margin: 5px 0;
		}

		.step-name {
			text-align: center;
			font-weight: 900;
		}

		.step.complete uui-icon {
			color: green;
		}
		.step.running uui-icon {
			color: blue;
		}
		.step.pending uui-icon {
			color: gray;
		}

		.progress {
			width: 100%;
		}
	`;
xe([
  g({ type: Object })
], se.prototype, "progress", 2);
xe([
  g({ type: Object })
], se.prototype, "message", 2);
se = xe([
  O("jumoo-pipeline-progress")
], se);
var St = Object.defineProperty, Et = Object.getOwnPropertyDescriptor, K = (s, e, t, o) => {
  for (var n = o > 1 ? void 0 : o ? Et(e, t) : e, i = s.length - 1, r; i >= 0; i--)
    (r = s[i]) && (n = (o ? r(e, t, n) : r(n)) || n);
  return o && n && St(e, t, n), n;
};
let U = class extends x {
  render() {
    switch (this.state?.status) {
      case w.COMPLETED:
        return this.renderComplete();
      case w.FAILED:
        return this.renderError();
      default:
        return d`${this.renderBackgroundBanner()} ${this.renderProgress()}`;
    }
  }
  renderBackgroundBanner() {
    return d`<uui-box class="banner">
			<umb-localize key="jumooProcBackground_running"></umb-localize>
		</uui-box>`;
  }
  renderProgress() {
    return d`<jumoo-pipeline-progress
			.progress=${this.state?.progress}
			.message=${this.message}></jumoo-pipeline-progress>`;
  }
  renderComplete() {
    return this.background?.completedElement ? d`${this.renderElement(this.background.completedElement)}` : d`<uui-box
						><umb-localize key="jumooProcBackground_completed"></umb-localize
					></uui-box>
					<pre>${JSON.stringify(this.state, null, 1)}</pre>`;
  }
  renderError() {
    return this.background?.failedElement ? d`${this.renderElement(this.background.failedElement)}` : d`<uui-box
						><umb-localize key="jumooProcBackground_error"></umb-localize
					></uui-box>
					<pre>${JSON.stringify(this.state, null, 1)}</pre>`;
  }
  renderElement(s) {
    return d`<umb-extension-slot
			type="jumoo-process-step"
			.filter=${(e) => e.elementName === s}
			.props=${{
      pipelineId: this.pipelineId,
      state: this.state,
      options: this._options
    }}></umb-extension-slot>`;
  }
};
U.styles = G`
		:host {
			display: flex;
			flex-direction: column;
			height: 100%;
		}

		.banner {
			background-color: var(--uui-color-current);
		}
	`;
K([
  g({ type: String })
], U.prototype, "pipelineId", 2);
K([
  g({ type: Object })
], U.prototype, "message", 2);
K([
  g({ type: Object })
], U.prototype, "state", 2);
K([
  g({ type: Object })
], U.prototype, "background", 2);
K([
  g({ type: Object })
], U.prototype, "_options", 2);
U = K([
  O("jumoo-pipeline-background")
], U);
var Pt = Object.defineProperty, kt = Object.getOwnPropertyDescriptor, ie = (s, e, t, o) => {
  for (var n = o > 1 ? void 0 : o ? kt(e, t) : e, i = s.length - 1, r; i >= 0; i--)
    (r = s[i]) && (n = (o ? r(e, t, n) : r(n)) || n);
  return o && n && Pt(e, t, n), n;
};
let V = class extends _t(ft) {
  render() {
    return this.state?.currentRequest?.action?.element === null ? M : this.renderStepElement();
  }
  renderStepElement() {
    return d`
			<umb-extension-slot
				type="jumoo-process-step"
				.filter=${(s) => s.elementName === this.state?.elementName}
				.props=${{
      pipelineId: this.pipelineId,
      state: this.state,
      options: this.options,
      resutls: this.resutls
    }}></umb-extension-slot>
		`;
  }
};
ie([
  g({ type: String })
], V.prototype, "pipelineId", 2);
ie([
  g({ type: Object })
], V.prototype, "state", 2);
ie([
  g({ type: Object })
], V.prototype, "options", 2);
ie([
  g({ type: Object })
], V.prototype, "resutls", 2);
V = ie([
  O("jumoo-process-step")
], V);
var It = Object.defineProperty, $t = Object.getOwnPropertyDescriptor, Je = (s) => {
  throw TypeError(s);
}, Ge = (s, e, t, o) => {
  for (var n = o > 1 ? void 0 : o ? $t(e, t) : e, i = s.length - 1, r; i >= 0; i--)
    (r = s[i]) && (n = (o ? r(e, t, n) : r(n)) || n);
  return o && n && It(e, t, n), n;
}, Tt = (s, e, t) => e.has(s) || Je("Cannot " + t), Rt = (s, e, t) => e.has(s) ? Je("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(s) : e.set(s, t), xt = (s, e, t) => (Tt(s, e, "access private method"), t), Ie, Qe;
let fe = class extends x {
  constructor() {
    super(...arguments), Rt(this, Ie);
  }
  render() {
    return this.error ? this.renderError(this.error) : M;
  }
  renderError(s) {
    return d`<div class="error">
			<div class="header">
				<uui-icon name="icon-wrong"></uui-icon>
				<h3>${s.message}</h3>
			</div>
			<div class="more">
				<uui-button @click=${xt(this, Ie, Qe)} look="primary" color="danger"
					><umb-localize key="jumooProcError_details"></umb-localize
				></uui-button>
			</div>
		</div>`;
  }
};
Ie = /* @__PURE__ */ new WeakSet();
Qe = async function() {
  if (!this.error) return;
  const s = await this.getContext(mt);
  return s ? await s.open(this, Wt, {
    data: {
      error: this.error
    }
  }).onSubmit().catch(() => {
  }) : void 0;
};
fe.styles = G`
		.error {
			padding: 0;
			background-color: var(--uui-color-danger);
			color: var(--uui-color-default-contrast);
		}

		.error .header {
			display: flex;
			gap: 5px;
			align-items: center;
			padding: 5px;
			border-bottom: 1px solid var(--uui-color-default-contrast);
		}

		h3 {
			padding: 0;
			margin: 0;
			overflow: auto;
		}

		uui-icon {
			font-size: 32px;
		}

		.error .more {
			padding: 8px;
			text-align: right;
		}
	`;
Ge([
  g({ type: Object })
], fe.prototype, "error", 2);
fe = Ge([
  O("jumoo-processing-error")
], fe);
var Ot = Object.defineProperty, Dt = Object.getOwnPropertyDescriptor, Xe = (s) => {
  throw TypeError(s);
}, Y = (s, e, t, o) => {
  for (var n = o > 1 ? void 0 : o ? Dt(e, t) : e, i = s.length - 1, r; i >= 0; i--)
    (r = s[i]) && (n = (o ? r(e, t, n) : r(n)) || n);
  return o && n && Ot(e, t, n), n;
}, At = (s, e, t) => e.has(s) || Xe("Cannot " + t), jt = (s, e, t) => e.has(s) ? Xe("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(s) : e.set(s, t), je = (s, e, t) => (At(s, e, "access private method"), t), pe, Ke, Ye;
let H = class extends x {
  constructor() {
    super(...arguments), jt(this, pe), this.pipelines = [], this.hideDelete = !1, this._tableConfig = {
      allowSelection: !1,
      hideIcon: !1
    }, this.tableColumns = [
      { name: "Alias", alias: "alias" },
      { name: "Strategy", alias: "strategy" },
      { name: "State", alias: "state" },
      { name: "Action", alias: "action" },
      { name: "Background", alias: "background" },
      { name: "Scheduled", alias: "scheduled" },
      { name: "Actions", alias: "actions" }
    ];
  }
  render() {
    const s = this.pipelines.map((e) => {
      if (e)
        return {
          id: e.id,
          icon: "icon-layers",
          data: [
            {
              columnAlias: "alias",
              value: e.alias
            },
            {
              columnAlias: "strategy",
              value: e.strategy
            },
            {
              columnAlias: "state",
              value: e.state.status
            },
            {
              columnAlias: "action",
              value: e.state.currentRequest?.action?.alias ?? "no action"
            },
            {
              columnAlias: "background",
              value: d`<umb-icon
								.name=${te(
                (e.state.backgroundState?.isBackgroundRequest ?? !1) == !0,
                () => "icon-check",
                () => "icon-close"
              )}></umb-icon>`
            },
            {
              columnAlias: "scheduled",
              value: e.state.schedule ? this.localize.date(e.state.schedule, Re) : ""
            },
            {
              columnAlias: "actions",
              value: d`${this.renderActions(e)}`
            }
          ]
        };
    }).filter((e) => e !== void 0);
    return d`
			<umb-table
				.config=${this._tableConfig}
				.columns=${this.tableColumns}
				.items=${s}
				.filter=${this.filter}></umb-table>
		`;
  }
  renderActions(s) {
    return d`<uui-button-group
			><uui-button
				.id=${s.id}
				label="View"
				color="positive"
				look="outline"
				@click=${je(this, pe, Ke)}
				>View</uui-button
			>
			${this.hideDelete ? "" : d`<uui-button
						label="Delete"
						color="danger"
						look="outline"
						@click=${() => je(this, pe, Ye).call(this, s.id)}
						>Delete</uui-button
					>`}</uui-button-group
		>`;
  }
};
pe = /* @__PURE__ */ new WeakSet();
Ke = function(s) {
  const e = s.target;
  e && this.dispatchEvent(
    new CustomEvent("view-pipeline", {
      composed: !0,
      detail: {
        piplineId: e.id
      }
    })
  );
};
Ye = function(s) {
  this.dispatchEvent(
    new CustomEvent("delete-pipeline", {
      composed: !0,
      detail: {
        piplineId: s
      }
    })
  );
};
Y([
  g({ type: Array })
], H.prototype, "pipelines", 2);
Y([
  g({ type: Boolean })
], H.prototype, "hideDelete", 2);
Y([
  C()
], H.prototype, "_tableConfig", 2);
Y([
  g({ type: Array })
], H.prototype, "tableColumns", 2);
Y([
  C()
], H.prototype, "filter", 2);
H = Y([
  O("jumoo-pipelines-table")
], H);
const Ze = "jumoo-processing-pipeline-workspace", $e = "processing-pipeline", Nt = new Q("Umb.Modal.Workspace", {
  modal: {
    type: "sidebar",
    size: "medium"
  }
});
var Mt = Object.defineProperty, Ut = Object.getOwnPropertyDescriptor, et = (s) => {
  throw TypeError(s);
}, D = (s, e, t, o) => {
  for (var n = o > 1 ? void 0 : o ? Ut(e, t) : e, i = s.length - 1, r; i >= 0; i--)
    (r = s[i]) && (n = (o ? r(e, t, n) : r(n)) || n);
  return o && n && Mt(e, t, n), n;
}, tt = (s, e, t) => e.has(s) || et("Cannot " + t), Ee = (s, e, t) => (tt(s, e, "read from private field"), t ? t.call(s) : e.get(s)), Ne = (s, e, t) => e.has(s) ? et("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(s) : e.set(s, t), Me = (s, e, t, o) => (tt(s, e, "write to private field"), e.set(s, t), t), ee, de;
let T = class extends x {
  constructor() {
    super(), Ne(this, ee), Ne(this, de), this.headline = "Processing Pipelines", this.hideDelete = !1, this.defaultStatus = w.WAITING, this.statuses = [
      w.WAITING,
      w.RUNNING,
      w.COMPLETED,
      w.FAILED
    ], this._modalPath = "", this.status = w.WAITING, this.loading = !0, this.consumeContext(ot, (s) => {
      Me(this, ee, s);
    }), this._setupModalController();
  }
  connectedCallback() {
    super.connectedCallback(), this.status = this.defaultStatus, this.getPipelines();
  }
  _setupModalController() {
    Me(this, de, new wt(
      this,
      Nt
    ).addAdditionalPath($e).onSetup(() => ({
      data: {
        entityType: $e,
        preset: {}
      }
    })).onSubmit(async () => {
      await this.getPipelines();
    }).onReject(async () => {
      await this.getPipelines();
    }).observeRouteBuilder((s) => {
      this._modalPath = s({});
    }));
  }
  async getPipelines() {
    this.loading = !0, this.pipelines = await Ee(this, ee)?.listPipelines(
      this.status ?? w.WAITING
    ), this.loading = !1;
  }
  onViewPipeline(s) {
    Ee(this, de).open(
      { alias: s.detail.piplineId },
      "edit/" + s.detail.piplineId
    );
  }
  async onDeletePipeline(s) {
    await Ee(this, ee)?.clear(s.detail.piplineId), this.getPipelines();
  }
  async onStatusChange(s) {
    const e = s.target;
    e && (this.status = e.value, await this.getPipelines());
  }
  render() {
    return d`<uui-box style="--uui-box-default-padding: 0;" .headline=${this.headline}>
			<div slot="header-actions">
				Status: ${this.renderDropdown()} ${this.renderRefresh()}
			</div>
			${te(
      this.loading,
      () => d`<uui-loader-bar
						animationDuration="1.5"
						style="color: black"></uui-loader-bar>`,
      () => this.renderListPipelines()
    )}
		</uui-box>`;
  }
  renderRefresh() {
    return d`<uui-button @click=${this.getPipelines} label="refresh" compact
			><uui-icon name="icon-refresh"></uui-icon
		></uui-button>`;
  }
  renderDropdown() {
    const s = this.statuses.map((e) => ({
      name: e,
      value: e,
      selected: e === this.status
    }));
    return s.length <= 1 ? d`${this.status}` : d`
					<uui-select
						.options=${s}
						@change=${this.onStatusChange}
						label="status"></uui-select>
				`;
  }
  renderListPipelines() {
    return !this.pipelines || this.pipelines.length === 0 ? d`<div class="emtpy">Nothing with status ${this.status}</div>` : d`<jumoo-pipelines-table
					.pipelines=${this.pipelines}
					.hideDelete=${this.hideDelete}
					@view-pipeline=${this.onViewPipeline}
					@delete-pipeline=${this.onDeletePipeline}></jumoo-pipelines-table>`;
  }
  renderPipeline(s) {
    return d`
			<div>${s.alias}</div>
			<div>${s.state.status}</div>
			<div>${s.state.currentRequest?.action?.alias}</div>
		`;
  }
};
ee = /* @__PURE__ */ new WeakMap();
de = /* @__PURE__ */ new WeakMap();
T.styles = G`
		.emtpy {
			display: flex;
			justify-content: center;
			padding: 20px;
		}
	`;
D([
  g({ type: String })
], T.prototype, "headline", 2);
D([
  g({ type: Boolean })
], T.prototype, "hideDelete", 2);
D([
  g({ type: String })
], T.prototype, "defaultStatus", 2);
D([
  g({ type: Array })
], T.prototype, "statuses", 2);
D([
  C()
], T.prototype, "_modalPath", 2);
D([
  C()
], T.prototype, "status", 2);
D([
  C()
], T.prototype, "pipelines", 2);
D([
  C()
], T.prototype, "loading", 2);
T = D([
  O("jumoo-pipeline-list")
], T);
const ye = "jumoo-processing-modal", yn = new Q(ye, {
  modal: {
    size: "small",
    type: "dialog"
  }
}), vn = new Q(ye, {
  modal: {
    size: "small",
    type: "sidebar"
  }
}), Cn = new Q(ye, {
  modal: {
    size: "medium",
    type: "sidebar"
  }
}), Sn = new Q(ye, {
  modal: {
    size: "large",
    type: "sidebar"
  }
}), Lt = "jumoo-processing-error-modal", Wt = new Q(Lt, {
  modal: {
    size: "large",
    type: "sidebar"
  }
});
var Bt = Object.defineProperty, Ht = Object.getOwnPropertyDescriptor, k = (s, e, t, o) => {
  for (var n = o > 1 ? void 0 : o ? Ht(e, t) : e, i = s.length - 1, r; i >= 0; i--)
    (r = s[i]) && (n = (o ? r(e, t, n) : r(n)) || n);
  return o && n && Bt(e, t, n), n;
};
let E = class extends x {
  constructor() {
    super(), this.debug = !1, this.consumeContext(st, (s) => {
      s && (this.context = s, this.observe(this.context.trigger, async (e) => {
        e === !0 && (await this.process(), this.context?.clearNext());
      }), this.observe(this.context.close, async (e) => {
        e === !0 && this.context?.triggerFinalized();
      }), this.observe(this.context.pipeline, (e) => {
        this._pipelineId = e, this._pipelineId && this.context?.getPipeline(this._pipelineId);
      }), this.observe(this.context.state, (e) => {
        this.state = e, this.state && this.dispatchEvent(
          new CustomEvent("pipeline-status", {
            bubbles: !0,
            composed: !0,
            detail: {
              status: this.state?.status,
              isLastAction: this.state?.progress.isLastAction
            }
          })
        ), this.state?.progress.isLastAction === !0 && this.onLastAction();
      }), this.observe(this.context?.backgroundState, (e) => {
        this.backgroundState = e;
      }), this.observe(this.context.options, (e) => {
        this.options = e;
      }), this.observe(this.context.message, (e) => {
        this.message = e;
      }), this.observe(this.context.results, (e) => {
        this.results = e;
      }));
    });
  }
  connectedCallback() {
    super.connectedCallback(), this.pipelineId ? this.context?.loadPipeline(this.pipelineId) : this.strategy && this.processor && (this.options = this.setup, this.context?.createPipeline(this.processor, this.strategy, this.setup));
  }
  async process() {
    let s;
    do
      s = await this.context?.process();
    while (s?.state.status == w.RUNNING);
    switch (s?.state.status) {
      case w.COMPLETED:
        this.onComplete();
        break;
      case w.BACKGROUND:
        this.onBackground();
        break;
      default:
        this.onWaiting();
        break;
    }
  }
  /**
   * @description dispatches a named custom event, with the pipelineId and state,
   * @param name name of event to file
   */
  fireEvent(s) {
    this.dispatchEvent(
      new CustomEvent(s, {
        bubbles: !0,
        composed: !0,
        detail: {
          pielineId: this._pipelineId,
          state: this.state
        }
      })
    );
  }
  onBackground() {
    this.fireEvent("pipeline-background");
  }
  /**
   * @description when the pipeline is complete
   */
  onComplete() {
    this.fireEvent("pipeline-complete");
  }
  /**
   * @description when the pipeline is waiting for user input (via an element.)
   */
  onWaiting() {
    this.fireEvent("pipeline-waiting");
  }
  /**
   * @description when the pipeline is on its last action
   */
  onLastAction() {
    this.fireEvent("pipeline-last-action");
  }
  render() {
    return d`${this.renderStatus()}${this.renderDebug()}`;
  }
  renderDebug() {
    return this.debug ? d`<div><pre>${JSON.stringify(this.state, null, 1)}</pre></div>` : M;
  }
  renderStatus() {
    switch (this.state?.status) {
      case w.COMPLETED:
        return this.renderComplete();
      case w.WAITING:
        return this.renderElement(this.state?.elementName);
      case w.RUNNING:
        return this.renderSteps();
      case w.FAILED:
        return this.renderFail();
      case w.BACKGROUND:
        return this.renderBackground();
      default:
        return M;
    }
  }
  renderBackground() {
    return this.state?.backgroundState?.backgroundElement ? this.renderElement(this.state?.backgroundState?.backgroundElement) : d`<jumoo-pipeline-background
					.message=${this.message}
					.state=${this.backgroundState ?? this.state}
					.pipelineId=${this._pipelineId}
					.background=${this.state?.backgroundState}
					.options=${this.options}></jumoo-pipeline-background>`;
  }
  renderComplete() {
    return this.state?.backgroundState?.completedElement ? d`<jumoo-pipeline-background
					.message=${this.message}
					.state=${this.backgroundState ?? this.state}
					.pipelineId=${this._pipelineId}
					.background=${this.state?.backgroundState}
					.options=${this.options}></jumoo-pipeline-background>` : this.state?.currentRequest?.action?.element ? this.renderElement(this.state?.currentRequest?.action?.element) : d`<div>complete</div>`;
  }
  renderSteps() {
    return this.state?.progress ? d`<jumoo-pipeline-progress
			.progress=${this.state?.progress}
			.message=${this.message}></jumoo-pipeline-progress>` : M;
  }
  renderElement(s) {
    return s ? d`
					<div class="wrapper">
						<umb-extension-slot
							type="jumoo-process-step"
							.filter=${(e) => e.elementName === s}
							.props=${{
      pipelineId: this._pipelineId,
      state: this.state,
      options: this.options,
      results: this.results
    }}></umb-extension-slot>
					</div>
				` : M;
  }
  renderFail() {
    return d`
			<jumoo-processing-error .error=${this.results?.error}></jumoo-processing-error>
		`;
  }
};
E.styles = G`
		.wrapper,
		umb-extension-slot {
			height: 100%;
		}
	`;
k([
  g({ type: String })
], E.prototype, "processor", 2);
k([
  g({ type: String })
], E.prototype, "strategy", 2);
k([
  g({ type: Object })
], E.prototype, "setup", 2);
k([
  g({ type: String })
], E.prototype, "pipelineId", 2);
k([
  g({ type: Boolean })
], E.prototype, "debug", 2);
k([
  C()
], E.prototype, "_pipelineId", 2);
k([
  C()
], E.prototype, "options", 2);
k([
  C()
], E.prototype, "state", 2);
k([
  C()
], E.prototype, "results", 2);
k([
  C()
], E.prototype, "message", 2);
k([
  C()
], E.prototype, "backgroundState", 2);
E = k([
  O("jumoo-pipeline")
], E);
class En extends X {
  constructor(e) {
    super(e), this.#t = new N(void 0), this.pipeline = this.#t.asObservable(), this.#o = new N(void 0), this.state = this.#o.asObservable(), this.#n = new N(void 0), this.options = this.#n.asObservable(), this.#r = new N(void 0), this.results = this.#r.asObservable(), this.#c = new N(void 0), this.message = this.#c.asObservable(), this.#l = new N(void 0), this.backgroundState = this.#l.asObservable(), this.#a = new le(!1), this.trigger = this.#a.asObservable(), this.#h = new le(!1), this.close = this.#h.asObservable(), this.#u = new le(!1), this.finalized = this.#u.asObservable(), this.#p = new le(!0), this.valid = this.#p.asObservable(), this.#i = new N(void 0), this.pending = this.#i.asObservable(), this.#e = new nt(this), this.provideContext(st, this), this.#s = new Is(this), this.consumeContext(Fe, async (t) => {
      if (!t) return;
      if (t?.getOpenApiConfiguration()) {
        const n = await t.getLatestToken();
        this.#s.startHub(n, ["message", "state"]);
      }
    }), this.observe(this.#s.messagesOf("message"), (t) => {
      t?.message && this.isMessage(t.message) && this.#c.setValue(t.message);
    }), this.observe(this.#s.messagesOf("state"), (t) => {
      t?.message && this.isState(t.message) && this.#l.setValue(t.message);
    });
  }
  #e;
  #s;
  #t;
  #o;
  #n;
  #r;
  #c;
  #l;
  isMessage(e) {
    return e !== void 0;
  }
  isState(e) {
    return e !== void 0;
  }
  async createPipeline(e, t, o) {
    const n = await this.#e.create(e, t, o);
    this.#t.setValue(n);
  }
  async loadPipeline(e) {
    const t = await this.#e.Get(e);
    t && this.#t.setValue(t.id);
  }
  async getPipeline(e) {
    const t = await this.#e.Get(e);
    return t?.state && this.#o.setValue(t.state), t?.options && this.#n.setValue(t.options), t?.results && this.#r.setValue(t.results), t;
  }
  async fetchPipeline(e) {
    return await this.#e.Get(e);
  }
  async process() {
    if (!this.#t.value) return;
    const e = this.#s?.getClientId() ?? null, t = await this.#e.process(this.#t.value, e);
    return t?.state && this.#o.setValue(t.state), t?.options && this.#n.setValue(t.options), t?.results && this.#r.setValue(t.results), t;
  }
  async updateOptions(e) {
    if (!this.#t.value) return;
    const t = await this.#e.update(this.#t.value, e);
    t?.options && (console.debug("update: pipeline.options", t), this.#n.setValue(t.options));
  }
  async setOption(e) {
    this.#n.update(e);
  }
  async saveOptions() {
    if (!this.#t.value) return;
    const e = await this.#e.update(
      this.#t.value,
      this.#n.value
    );
    e?.options && (console.debug("save:pipeline.options", e), this.#n.setValue(e.options));
  }
  async UpdateAndSaveOptions(e) {
    await this.updateOptions(e), await this.saveOptions();
  }
  async clearPipeline() {
    this.#t.value && (await this.#e.clear(this.#t.value), this.#t.setValue(void 0), this.#o.setValue(void 0), this.#n.setValue(void 0));
  }
  async completePipeline() {
    this.#t.value;
  }
  async getResults() {
    if (!this.#t.value) return;
    const e = await this.#e.getResults(this.#t.value);
    return e && this.#r.setValue(e), e;
  }
  #a;
  #h;
  #u;
  #p;
  /**
   * sets the validity of the state used to turn on next buttons etc.
   * @param valid is the current state valid
   */
  setValid(e) {
    this.#p.setValue(e);
  }
  /**
   * trigger the next action in the pipeline
   */
  async triggerNext() {
    const e = this.#i.getValue();
    e && await this.UpdateAndSaveOptions(e), this.clearPending(), this.#a.setValue(!0);
  }
  clearNext() {
    this.#a.setValue(!1);
  }
  async triggerClose() {
    (this.#o.value?.progress.isLastAction === !0 || this.#o.value?.backgroundState?.isBackgroundRequest !== !0) && await this.clearPipeline(), this.#h.setValue(!0);
  }
  triggerFinalized() {
    this.#u.setValue(!0);
  }
  #i;
  async setPending(e) {
    this.#i.getValue() || this.primePending(), this.#i.update(e);
  }
  async clearPending() {
    this.#i.setValue(void 0);
  }
  async primePending() {
    this.#i.setValue(this.#n.value);
  }
}
const st = new me(
  "JumooPipelineContext"
);
class nt extends X {
  constructor(e) {
    super(e), this.source = new qt(e);
  }
  async clear(e) {
    return (await this.source.clear(e)).data;
  }
  async process(e, t) {
    return (await this.source.process(e, t)).data;
  }
  async update(e, t) {
    return (await this.source.update(e, t)).data;
  }
  async getProcessors() {
    return (await this.source.getProcessors()).data;
  }
  async Get(e) {
    return (await this.source.Get(e)).data;
  }
  async create(e, t, o) {
    return (await this.source.create(e, t, o)).data;
  }
  async complete(e) {
    console.debug("complete", e);
  }
  async getResults(e) {
    return (await this.source.getResults(e)).data;
  }
  async listPipelines(e) {
    return (await this.source.listPiplelines(e)).data;
  }
}
class qt {
  constructor(e) {
    this.host = e;
  }
  async process(e, t) {
    return await A(
      this.host,
      j.processPipeline({
        path: { id: e },
        query: { clientId: t ?? void 0 }
      })
    );
  }
  async update(e, t) {
    return await A(
      this.host,
      j.updatePipeline({
        path: { id: e },
        body: t
      })
    );
  }
  async getProcessors() {
    return await A(this.host, j.getProcessors());
  }
  /**
   *
   * @param id guid id of the pipeline to retrieve
   * @returns pipeline
   */
  async Get(e) {
    return await A(
      this.host,
      j.getPipeline({ path: { id: e } })
    );
  }
  /**
   *
   * @param strategy alias of the strategy to use for the pipeline
   * @returns
   */
  async create(e, t, o) {
    return await A(
      this.host,
      j.createPipeline({
        body: {
          alias: e,
          strategy: t,
          options: o,
          clientId: null
        }
      })
    );
  }
  /**
   *
   * @param id guid id of the pipeline to remove
   * @returns nothing.
   */
  async clear(e) {
    return await A(
      this.host,
      j.clearPipeline({ path: { id: e } })
    );
  }
  /**
   * @param id guid id of the pipeline to retrieve results for
   * @returns results (if there are any) for the pipeline
   */
  async getResults(e) {
    return await A(
      this.host,
      j.getResults({
        path: { id: e }
      })
    );
  }
  async listPiplelines(e) {
    return await A(
      this.host,
      j.listPipelines({ path: { status: e } })
    );
  }
}
class Pn extends X {
  #e;
  constructor(e) {
    super(e), this.#e = new nt(e), this.provideContext(ot, this);
  }
  async listPipelines(e) {
    return await this.#e.listPipelines(e);
  }
  async clear(e) {
    return await this.#e.clear(e);
  }
}
const ot = new me(
  "JUMOO_PIPELINES_CONTEXT"
);
class W extends Error {
  /** Constructs a new instance of {@link @microsoft/signalr.HttpError}.
   *
   * @param {string} errorMessage A descriptive error message.
   * @param {number} statusCode The HTTP status code represented by this error.
   */
  constructor(e, t) {
    const o = new.target.prototype;
    super(`${e}: Status code '${t}'`), this.statusCode = t, this.__proto__ = o;
  }
}
class Oe extends Error {
  /** Constructs a new instance of {@link @microsoft/signalr.TimeoutError}.
   *
   * @param {string} errorMessage A descriptive error message.
   */
  constructor(e = "A timeout occurred.") {
    const t = new.target.prototype;
    super(e), this.__proto__ = t;
  }
}
class $ extends Error {
  /** Constructs a new instance of {@link AbortError}.
   *
   * @param {string} errorMessage A descriptive error message.
   */
  constructor(e = "An abort occurred.") {
    const t = new.target.prototype;
    super(e), this.__proto__ = t;
  }
}
class zt extends Error {
  /** Constructs a new instance of {@link @microsoft/signalr.UnsupportedTransportError}.
   *
   * @param {string} message A descriptive error message.
   * @param {HttpTransportType} transport The {@link @microsoft/signalr.HttpTransportType} this error occurred on.
   */
  constructor(e, t) {
    const o = new.target.prototype;
    super(e), this.transport = t, this.errorType = "UnsupportedTransportError", this.__proto__ = o;
  }
}
class Vt extends Error {
  /** Constructs a new instance of {@link @microsoft/signalr.DisabledTransportError}.
   *
   * @param {string} message A descriptive error message.
   * @param {HttpTransportType} transport The {@link @microsoft/signalr.HttpTransportType} this error occurred on.
   */
  constructor(e, t) {
    const o = new.target.prototype;
    super(e), this.transport = t, this.errorType = "DisabledTransportError", this.__proto__ = o;
  }
}
class Ft extends Error {
  /** Constructs a new instance of {@link @microsoft/signalr.FailedToStartTransportError}.
   *
   * @param {string} message A descriptive error message.
   * @param {HttpTransportType} transport The {@link @microsoft/signalr.HttpTransportType} this error occurred on.
   */
  constructor(e, t) {
    const o = new.target.prototype;
    super(e), this.transport = t, this.errorType = "FailedToStartTransportError", this.__proto__ = o;
  }
}
class Ue extends Error {
  /** Constructs a new instance of {@link @microsoft/signalr.FailedToNegotiateWithServerError}.
   *
   * @param {string} message A descriptive error message.
   */
  constructor(e) {
    const t = new.target.prototype;
    super(e), this.errorType = "FailedToNegotiateWithServerError", this.__proto__ = t;
  }
}
class Jt extends Error {
  /** Constructs a new instance of {@link @microsoft/signalr.AggregateErrors}.
   *
   * @param {string} message A descriptive error message.
   * @param {Error[]} innerErrors The collection of errors this error is aggregating.
   */
  constructor(e, t) {
    const o = new.target.prototype;
    super(e), this.innerErrors = t, this.__proto__ = o;
  }
}
class it {
  constructor(e, t, o) {
    this.statusCode = e, this.statusText = t, this.content = o;
  }
}
class ve {
  get(e, t) {
    return this.send({
      ...t,
      method: "GET",
      url: e
    });
  }
  post(e, t) {
    return this.send({
      ...t,
      method: "POST",
      url: e
    });
  }
  delete(e, t) {
    return this.send({
      ...t,
      method: "DELETE",
      url: e
    });
  }
  /** Gets all cookies that apply to the specified URL.
   *
   * @param url The URL that the cookies are valid for.
   * @returns {string} A string containing all the key-value cookie pairs for the specified URL.
   */
  // @ts-ignore
  getCookieString(e) {
    return "";
  }
}
var c;
(function(s) {
  s[s.Trace = 0] = "Trace", s[s.Debug = 1] = "Debug", s[s.Information = 2] = "Information", s[s.Warning = 3] = "Warning", s[s.Error = 4] = "Error", s[s.Critical = 5] = "Critical", s[s.None = 6] = "None";
})(c || (c = {}));
class ne {
  constructor() {
  }
  /** @inheritDoc */
  // eslint-disable-next-line
  log(e, t) {
  }
}
ne.instance = new ne();
const Gt = "8.0.7";
class m {
  static isRequired(e, t) {
    if (e == null)
      throw new Error(`The '${t}' argument is required.`);
  }
  static isNotEmpty(e, t) {
    if (!e || e.match(/^\s*$/))
      throw new Error(`The '${t}' argument should not be empty.`);
  }
  static isIn(e, t, o) {
    if (!(e in t))
      throw new Error(`Unknown ${o} value: ${e}.`);
  }
}
class _ {
  // react-native has a window but no document so we should check both
  static get isBrowser() {
    return !_.isNode && typeof window == "object" && typeof window.document == "object";
  }
  // WebWorkers don't have a window object so the isBrowser check would fail
  static get isWebWorker() {
    return !_.isNode && typeof self == "object" && "importScripts" in self;
  }
  // react-native has a window but no document
  static get isReactNative() {
    return !_.isNode && typeof window == "object" && typeof window.document > "u";
  }
  // Node apps shouldn't have a window object, but WebWorkers don't either
  // so we need to check for both WebWorker and window
  static get isNode() {
    return typeof process < "u" && process.release && process.release.name === "node";
  }
}
function oe(s, e) {
  let t = "";
  return q(s) ? (t = `Binary data of length ${s.byteLength}`, e && (t += `. Content: '${Qt(s)}'`)) : typeof s == "string" && (t = `String data of length ${s.length}`, e && (t += `. Content: '${s}'`)), t;
}
function Qt(s) {
  const e = new Uint8Array(s);
  let t = "";
  return e.forEach((o) => {
    const n = o < 16 ? "0" : "";
    t += `0x${n}${o.toString(16)} `;
  }), t.substr(0, t.length - 1);
}
function q(s) {
  return s && typeof ArrayBuffer < "u" && (s instanceof ArrayBuffer || // Sometimes we get an ArrayBuffer that doesn't satisfy instanceof
  s.constructor && s.constructor.name === "ArrayBuffer");
}
async function rt(s, e, t, o, n, i) {
  const r = {}, [a, l] = F();
  r[a] = l, s.log(c.Trace, `(${e} transport) sending data. ${oe(n, i.logMessageContent)}.`);
  const h = q(n) ? "arraybuffer" : "text", u = await t.post(o, {
    content: n,
    headers: { ...r, ...i.headers },
    responseType: h,
    timeout: i.timeout,
    withCredentials: i.withCredentials
  });
  s.log(c.Trace, `(${e} transport) request complete. Response status: ${u.statusCode}.`);
}
function Xt(s) {
  return s === void 0 ? new _e(c.Information) : s === null ? ne.instance : s.log !== void 0 ? s : new _e(s);
}
class Kt {
  constructor(e, t) {
    this._subject = e, this._observer = t;
  }
  dispose() {
    const e = this._subject.observers.indexOf(this._observer);
    e > -1 && this._subject.observers.splice(e, 1), this._subject.observers.length === 0 && this._subject.cancelCallback && this._subject.cancelCallback().catch((t) => {
    });
  }
}
class _e {
  constructor(e) {
    this._minLevel = e, this.out = console;
  }
  log(e, t) {
    if (e >= this._minLevel) {
      const o = `[${(/* @__PURE__ */ new Date()).toISOString()}] ${c[e]}: ${t}`;
      switch (e) {
        case c.Critical:
        case c.Error:
          this.out.error(o);
          break;
        case c.Warning:
          this.out.warn(o);
          break;
        case c.Information:
          this.out.info(o);
          break;
        default:
          this.out.log(o);
          break;
      }
    }
  }
}
function F() {
  let s = "X-SignalR-User-Agent";
  return _.isNode && (s = "User-Agent"), [s, Yt(Gt, Zt(), ts(), es())];
}
function Yt(s, e, t, o) {
  let n = "Microsoft SignalR/";
  const i = s.split(".");
  return n += `${i[0]}.${i[1]}`, n += ` (${s}; `, e && e !== "" ? n += `${e}; ` : n += "Unknown OS; ", n += `${t}`, o ? n += `; ${o}` : n += "; Unknown Runtime Version", n += ")", n;
}
function Zt() {
  if (_.isNode)
    switch (process.platform) {
      case "win32":
        return "Windows NT";
      case "darwin":
        return "macOS";
      case "linux":
        return "Linux";
      default:
        return process.platform;
    }
  else
    return "";
}
function es() {
  if (_.isNode)
    return process.versions.node;
}
function ts() {
  return _.isNode ? "NodeJS" : "Browser";
}
function Pe(s) {
  return s.stack ? s.stack : s.message ? s.message : `${s}`;
}
function ss() {
  if (typeof globalThis < "u")
    return globalThis;
  if (typeof self < "u")
    return self;
  if (typeof window < "u")
    return window;
  if (typeof global < "u")
    return global;
  throw new Error("could not find global");
}
class ns extends ve {
  constructor(e) {
    if (super(), this._logger = e, typeof fetch > "u" || _.isNode) {
      const t = typeof __webpack_require__ == "function" ? __non_webpack_require__ : require;
      this._jar = new (t("tough-cookie")).CookieJar(), typeof fetch > "u" ? this._fetchType = t("node-fetch") : this._fetchType = fetch, this._fetchType = t("fetch-cookie")(this._fetchType, this._jar);
    } else
      this._fetchType = fetch.bind(ss());
    if (typeof AbortController > "u") {
      const t = typeof __webpack_require__ == "function" ? __non_webpack_require__ : require;
      this._abortControllerType = t("abort-controller");
    } else
      this._abortControllerType = AbortController;
  }
  /** @inheritDoc */
  async send(e) {
    if (e.abortSignal && e.abortSignal.aborted)
      throw new $();
    if (!e.method)
      throw new Error("No method defined.");
    if (!e.url)
      throw new Error("No url defined.");
    const t = new this._abortControllerType();
    let o;
    e.abortSignal && (e.abortSignal.onabort = () => {
      t.abort(), o = new $();
    });
    let n = null;
    if (e.timeout) {
      const l = e.timeout;
      n = setTimeout(() => {
        t.abort(), this._logger.log(c.Warning, "Timeout from HTTP request."), o = new Oe();
      }, l);
    }
    e.content === "" && (e.content = void 0), e.content && (e.headers = e.headers || {}, q(e.content) ? e.headers["Content-Type"] = "application/octet-stream" : e.headers["Content-Type"] = "text/plain;charset=UTF-8");
    let i;
    try {
      i = await this._fetchType(e.url, {
        body: e.content,
        cache: "no-cache",
        credentials: e.withCredentials === !0 ? "include" : "same-origin",
        headers: {
          "X-Requested-With": "XMLHttpRequest",
          ...e.headers
        },
        method: e.method,
        mode: "cors",
        redirect: "follow",
        signal: t.signal
      });
    } catch (l) {
      throw o || (this._logger.log(c.Warning, `Error from HTTP request. ${l}.`), l);
    } finally {
      n && clearTimeout(n), e.abortSignal && (e.abortSignal.onabort = null);
    }
    if (!i.ok) {
      const l = await Le(i, "text");
      throw new W(l || i.statusText, i.status);
    }
    const a = await Le(i, e.responseType);
    return new it(i.status, i.statusText, a);
  }
  getCookieString(e) {
    let t = "";
    return _.isNode && this._jar && this._jar.getCookies(e, (o, n) => t = n.join("; ")), t;
  }
}
function Le(s, e) {
  let t;
  switch (e) {
    case "arraybuffer":
      t = s.arrayBuffer();
      break;
    case "text":
      t = s.text();
      break;
    case "blob":
    case "document":
    case "json":
      throw new Error(`${e} is not supported.`);
    default:
      t = s.text();
      break;
  }
  return t;
}
class os extends ve {
  constructor(e) {
    super(), this._logger = e;
  }
  /** @inheritDoc */
  send(e) {
    return e.abortSignal && e.abortSignal.aborted ? Promise.reject(new $()) : e.method ? e.url ? new Promise((t, o) => {
      const n = new XMLHttpRequest();
      n.open(e.method, e.url, !0), n.withCredentials = e.withCredentials === void 0 ? !0 : e.withCredentials, n.setRequestHeader("X-Requested-With", "XMLHttpRequest"), e.content === "" && (e.content = void 0), e.content && (q(e.content) ? n.setRequestHeader("Content-Type", "application/octet-stream") : n.setRequestHeader("Content-Type", "text/plain;charset=UTF-8"));
      const i = e.headers;
      i && Object.keys(i).forEach((r) => {
        n.setRequestHeader(r, i[r]);
      }), e.responseType && (n.responseType = e.responseType), e.abortSignal && (e.abortSignal.onabort = () => {
        n.abort(), o(new $());
      }), e.timeout && (n.timeout = e.timeout), n.onload = () => {
        e.abortSignal && (e.abortSignal.onabort = null), n.status >= 200 && n.status < 300 ? t(new it(n.status, n.statusText, n.response || n.responseText)) : o(new W(n.response || n.responseText || n.statusText, n.status));
      }, n.onerror = () => {
        this._logger.log(c.Warning, `Error from HTTP request. ${n.status}: ${n.statusText}.`), o(new W(n.statusText, n.status));
      }, n.ontimeout = () => {
        this._logger.log(c.Warning, "Timeout from HTTP request."), o(new Oe());
      }, n.send(e.content);
    }) : Promise.reject(new Error("No url defined.")) : Promise.reject(new Error("No method defined."));
  }
}
class is extends ve {
  /** Creates a new instance of the {@link @microsoft/signalr.DefaultHttpClient}, using the provided {@link @microsoft/signalr.ILogger} to log messages. */
  constructor(e) {
    if (super(), typeof fetch < "u" || _.isNode)
      this._httpClient = new ns(e);
    else if (typeof XMLHttpRequest < "u")
      this._httpClient = new os(e);
    else
      throw new Error("No usable HttpClient found.");
  }
  /** @inheritDoc */
  send(e) {
    return e.abortSignal && e.abortSignal.aborted ? Promise.reject(new $()) : e.method ? e.url ? this._httpClient.send(e) : Promise.reject(new Error("No url defined.")) : Promise.reject(new Error("No method defined."));
  }
  getCookieString(e) {
    return this._httpClient.getCookieString(e);
  }
}
class P {
  static write(e) {
    return `${e}${P.RecordSeparator}`;
  }
  static parse(e) {
    if (e[e.length - 1] !== P.RecordSeparator)
      throw new Error("Message is incomplete.");
    const t = e.split(P.RecordSeparator);
    return t.pop(), t;
  }
}
P.RecordSeparatorCode = 30;
P.RecordSeparator = String.fromCharCode(P.RecordSeparatorCode);
class rs {
  // Handshake request is always JSON
  writeHandshakeRequest(e) {
    return P.write(JSON.stringify(e));
  }
  parseHandshakeResponse(e) {
    let t, o;
    if (q(e)) {
      const a = new Uint8Array(e), l = a.indexOf(P.RecordSeparatorCode);
      if (l === -1)
        throw new Error("Message is incomplete.");
      const h = l + 1;
      t = String.fromCharCode.apply(null, Array.prototype.slice.call(a.slice(0, h))), o = a.byteLength > h ? a.slice(h).buffer : null;
    } else {
      const a = e, l = a.indexOf(P.RecordSeparator);
      if (l === -1)
        throw new Error("Message is incomplete.");
      const h = l + 1;
      t = a.substring(0, h), o = a.length > h ? a.substring(h) : null;
    }
    const n = P.parse(t), i = JSON.parse(n[0]);
    if (i.type)
      throw new Error("Expected a handshake response from the server.");
    return [o, i];
  }
}
var p;
(function(s) {
  s[s.Invocation = 1] = "Invocation", s[s.StreamItem = 2] = "StreamItem", s[s.Completion = 3] = "Completion", s[s.StreamInvocation = 4] = "StreamInvocation", s[s.CancelInvocation = 5] = "CancelInvocation", s[s.Ping = 6] = "Ping", s[s.Close = 7] = "Close", s[s.Ack = 8] = "Ack", s[s.Sequence = 9] = "Sequence";
})(p || (p = {}));
class as {
  constructor() {
    this.observers = [];
  }
  next(e) {
    for (const t of this.observers)
      t.next(e);
  }
  error(e) {
    for (const t of this.observers)
      t.error && t.error(e);
  }
  complete() {
    for (const e of this.observers)
      e.complete && e.complete();
  }
  subscribe(e) {
    return this.observers.push(e), new Kt(this, e);
  }
}
class cs {
  constructor(e, t, o) {
    this._bufferSize = 1e5, this._messages = [], this._totalMessageCount = 0, this._waitForSequenceMessage = !1, this._nextReceivingSequenceId = 1, this._latestReceivedSequenceId = 0, this._bufferedByteCount = 0, this._reconnectInProgress = !1, this._protocol = e, this._connection = t, this._bufferSize = o;
  }
  async _send(e) {
    const t = this._protocol.writeMessage(e);
    let o = Promise.resolve();
    if (this._isInvocationMessage(e)) {
      this._totalMessageCount++;
      let n = () => {
      }, i = () => {
      };
      q(t) ? this._bufferedByteCount += t.byteLength : this._bufferedByteCount += t.length, this._bufferedByteCount >= this._bufferSize && (o = new Promise((r, a) => {
        n = r, i = a;
      })), this._messages.push(new ls(t, this._totalMessageCount, n, i));
    }
    try {
      this._reconnectInProgress || await this._connection.send(t);
    } catch {
      this._disconnected();
    }
    await o;
  }
  _ack(e) {
    let t = -1;
    for (let o = 0; o < this._messages.length; o++) {
      const n = this._messages[o];
      if (n._id <= e.sequenceId)
        t = o, q(n._message) ? this._bufferedByteCount -= n._message.byteLength : this._bufferedByteCount -= n._message.length, n._resolver();
      else if (this._bufferedByteCount < this._bufferSize)
        n._resolver();
      else
        break;
    }
    t !== -1 && (this._messages = this._messages.slice(t + 1));
  }
  _shouldProcessMessage(e) {
    if (this._waitForSequenceMessage)
      return e.type !== p.Sequence ? !1 : (this._waitForSequenceMessage = !1, !0);
    if (!this._isInvocationMessage(e))
      return !0;
    const t = this._nextReceivingSequenceId;
    return this._nextReceivingSequenceId++, t <= this._latestReceivedSequenceId ? (t === this._latestReceivedSequenceId && this._ackTimer(), !1) : (this._latestReceivedSequenceId = t, this._ackTimer(), !0);
  }
  _resetSequence(e) {
    if (e.sequenceId > this._nextReceivingSequenceId) {
      this._connection.stop(new Error("Sequence ID greater than amount of messages we've received."));
      return;
    }
    this._nextReceivingSequenceId = e.sequenceId;
  }
  _disconnected() {
    this._reconnectInProgress = !0, this._waitForSequenceMessage = !0;
  }
  async _resend() {
    const e = this._messages.length !== 0 ? this._messages[0]._id : this._totalMessageCount + 1;
    await this._connection.send(this._protocol.writeMessage({ type: p.Sequence, sequenceId: e }));
    const t = this._messages;
    for (const o of t)
      await this._connection.send(o._message);
    this._reconnectInProgress = !1;
  }
  _dispose(e) {
    e ?? (e = new Error("Unable to reconnect to server."));
    for (const t of this._messages)
      t._rejector(e);
  }
  _isInvocationMessage(e) {
    switch (e.type) {
      case p.Invocation:
      case p.StreamItem:
      case p.Completion:
      case p.StreamInvocation:
      case p.CancelInvocation:
        return !0;
      case p.Close:
      case p.Sequence:
      case p.Ping:
      case p.Ack:
        return !1;
    }
  }
  _ackTimer() {
    this._ackTimerHandle === void 0 && (this._ackTimerHandle = setTimeout(async () => {
      try {
        this._reconnectInProgress || await this._connection.send(this._protocol.writeMessage({ type: p.Ack, sequenceId: this._latestReceivedSequenceId }));
      } catch {
      }
      clearTimeout(this._ackTimerHandle), this._ackTimerHandle = void 0;
    }, 1e3));
  }
}
class ls {
  constructor(e, t, o, n) {
    this._message = e, this._id = t, this._resolver = o, this._rejector = n;
  }
}
const hs = 30 * 1e3, us = 15 * 1e3, ps = 1e5;
var f;
(function(s) {
  s.Disconnected = "Disconnected", s.Connecting = "Connecting", s.Connected = "Connected", s.Disconnecting = "Disconnecting", s.Reconnecting = "Reconnecting";
})(f || (f = {}));
class De {
  /** @internal */
  // Using a public static factory method means we can have a private constructor and an _internal_
  // create method that can be used by HubConnectionBuilder. An "internal" constructor would just
  // be stripped away and the '.d.ts' file would have no constructor, which is interpreted as a
  // public parameter-less constructor.
  static create(e, t, o, n, i, r, a) {
    return new De(e, t, o, n, i, r, a);
  }
  constructor(e, t, o, n, i, r, a) {
    this._nextKeepAlive = 0, this._freezeEventListener = () => {
      this._logger.log(c.Warning, "The page is being frozen, this will likely lead to the connection being closed and messages being lost. For more information see the docs at https://learn.microsoft.com/aspnet/core/signalr/javascript-client#bsleep");
    }, m.isRequired(e, "connection"), m.isRequired(t, "logger"), m.isRequired(o, "protocol"), this.serverTimeoutInMilliseconds = i ?? hs, this.keepAliveIntervalInMilliseconds = r ?? us, this._statefulReconnectBufferSize = a ?? ps, this._logger = t, this._protocol = o, this.connection = e, this._reconnectPolicy = n, this._handshakeProtocol = new rs(), this.connection.onreceive = (l) => this._processIncomingData(l), this.connection.onclose = (l) => this._connectionClosed(l), this._callbacks = {}, this._methods = {}, this._closedCallbacks = [], this._reconnectingCallbacks = [], this._reconnectedCallbacks = [], this._invocationId = 0, this._receivedHandshakeResponse = !1, this._connectionState = f.Disconnected, this._connectionStarted = !1, this._cachedPingMessage = this._protocol.writeMessage({ type: p.Ping });
  }
  /** Indicates the state of the {@link HubConnection} to the server. */
  get state() {
    return this._connectionState;
  }
  /** Represents the connection id of the {@link HubConnection} on the server. The connection id will be null when the connection is either
   *  in the disconnected state or if the negotiation step was skipped.
   */
  get connectionId() {
    return this.connection && this.connection.connectionId || null;
  }
  /** Indicates the url of the {@link HubConnection} to the server. */
  get baseUrl() {
    return this.connection.baseUrl || "";
  }
  /**
   * Sets a new url for the HubConnection. Note that the url can only be changed when the connection is in either the Disconnected or
   * Reconnecting states.
   * @param {string} url The url to connect to.
   */
  set baseUrl(e) {
    if (this._connectionState !== f.Disconnected && this._connectionState !== f.Reconnecting)
      throw new Error("The HubConnection must be in the Disconnected or Reconnecting state to change the url.");
    if (!e)
      throw new Error("The HubConnection url must be a valid url.");
    this.connection.baseUrl = e;
  }
  /** Starts the connection.
   *
   * @returns {Promise<void>} A Promise that resolves when the connection has been successfully established, or rejects with an error.
   */
  start() {
    return this._startPromise = this._startWithStateTransitions(), this._startPromise;
  }
  async _startWithStateTransitions() {
    if (this._connectionState !== f.Disconnected)
      return Promise.reject(new Error("Cannot start a HubConnection that is not in the 'Disconnected' state."));
    this._connectionState = f.Connecting, this._logger.log(c.Debug, "Starting HubConnection.");
    try {
      await this._startInternal(), _.isBrowser && window.document.addEventListener("freeze", this._freezeEventListener), this._connectionState = f.Connected, this._connectionStarted = !0, this._logger.log(c.Debug, "HubConnection connected successfully.");
    } catch (e) {
      return this._connectionState = f.Disconnected, this._logger.log(c.Debug, `HubConnection failed to start successfully because of error '${e}'.`), Promise.reject(e);
    }
  }
  async _startInternal() {
    this._stopDuringStartError = void 0, this._receivedHandshakeResponse = !1;
    const e = new Promise((t, o) => {
      this._handshakeResolver = t, this._handshakeRejecter = o;
    });
    await this.connection.start(this._protocol.transferFormat);
    try {
      let t = this._protocol.version;
      this.connection.features.reconnect || (t = 1);
      const o = {
        protocol: this._protocol.name,
        version: t
      };
      if (this._logger.log(c.Debug, "Sending handshake request."), await this._sendMessage(this._handshakeProtocol.writeHandshakeRequest(o)), this._logger.log(c.Information, `Using HubProtocol '${this._protocol.name}'.`), this._cleanupTimeout(), this._resetTimeoutPeriod(), this._resetKeepAliveInterval(), await e, this._stopDuringStartError)
        throw this._stopDuringStartError;
      (this.connection.features.reconnect || !1) && (this._messageBuffer = new cs(this._protocol, this.connection, this._statefulReconnectBufferSize), this.connection.features.disconnected = this._messageBuffer._disconnected.bind(this._messageBuffer), this.connection.features.resend = () => {
        if (this._messageBuffer)
          return this._messageBuffer._resend();
      }), this.connection.features.inherentKeepAlive || await this._sendMessage(this._cachedPingMessage);
    } catch (t) {
      throw this._logger.log(c.Debug, `Hub handshake failed with error '${t}' during start(). Stopping HubConnection.`), this._cleanupTimeout(), this._cleanupPingTimer(), await this.connection.stop(t), t;
    }
  }
  /** Stops the connection.
   *
   * @returns {Promise<void>} A Promise that resolves when the connection has been successfully terminated, or rejects with an error.
   */
  async stop() {
    const e = this._startPromise;
    this.connection.features.reconnect = !1, this._stopPromise = this._stopInternal(), await this._stopPromise;
    try {
      await e;
    } catch {
    }
  }
  _stopInternal(e) {
    if (this._connectionState === f.Disconnected)
      return this._logger.log(c.Debug, `Call to HubConnection.stop(${e}) ignored because it is already in the disconnected state.`), Promise.resolve();
    if (this._connectionState === f.Disconnecting)
      return this._logger.log(c.Debug, `Call to HttpConnection.stop(${e}) ignored because the connection is already in the disconnecting state.`), this._stopPromise;
    const t = this._connectionState;
    return this._connectionState = f.Disconnecting, this._logger.log(c.Debug, "Stopping HubConnection."), this._reconnectDelayHandle ? (this._logger.log(c.Debug, "Connection stopped during reconnect delay. Done reconnecting."), clearTimeout(this._reconnectDelayHandle), this._reconnectDelayHandle = void 0, this._completeClose(), Promise.resolve()) : (t === f.Connected && this._sendCloseMessage(), this._cleanupTimeout(), this._cleanupPingTimer(), this._stopDuringStartError = e || new $("The connection was stopped before the hub handshake could complete."), this.connection.stop(e));
  }
  async _sendCloseMessage() {
    try {
      await this._sendWithProtocol(this._createCloseMessage());
    } catch {
    }
  }
  /** Invokes a streaming hub method on the server using the specified name and arguments.
   *
   * @typeparam T The type of the items returned by the server.
   * @param {string} methodName The name of the server method to invoke.
   * @param {any[]} args The arguments used to invoke the server method.
   * @returns {IStreamResult<T>} An object that yields results from the server as they are received.
   */
  stream(e, ...t) {
    const [o, n] = this._replaceStreamingParams(t), i = this._createStreamInvocation(e, t, n);
    let r;
    const a = new as();
    return a.cancelCallback = () => {
      const l = this._createCancelInvocation(i.invocationId);
      return delete this._callbacks[i.invocationId], r.then(() => this._sendWithProtocol(l));
    }, this._callbacks[i.invocationId] = (l, h) => {
      if (h) {
        a.error(h);
        return;
      } else l && (l.type === p.Completion ? l.error ? a.error(new Error(l.error)) : a.complete() : a.next(l.item));
    }, r = this._sendWithProtocol(i).catch((l) => {
      a.error(l), delete this._callbacks[i.invocationId];
    }), this._launchStreams(o, r), a;
  }
  _sendMessage(e) {
    return this._resetKeepAliveInterval(), this.connection.send(e);
  }
  /**
   * Sends a js object to the server.
   * @param message The js object to serialize and send.
   */
  _sendWithProtocol(e) {
    return this._messageBuffer ? this._messageBuffer._send(e) : this._sendMessage(this._protocol.writeMessage(e));
  }
  /** Invokes a hub method on the server using the specified name and arguments. Does not wait for a response from the receiver.
   *
   * The Promise returned by this method resolves when the client has sent the invocation to the server. The server may still
   * be processing the invocation.
   *
   * @param {string} methodName The name of the server method to invoke.
   * @param {any[]} args The arguments used to invoke the server method.
   * @returns {Promise<void>} A Promise that resolves when the invocation has been successfully sent, or rejects with an error.
   */
  send(e, ...t) {
    const [o, n] = this._replaceStreamingParams(t), i = this._sendWithProtocol(this._createInvocation(e, t, !0, n));
    return this._launchStreams(o, i), i;
  }
  /** Invokes a hub method on the server using the specified name and arguments.
   *
   * The Promise returned by this method resolves when the server indicates it has finished invoking the method. When the promise
   * resolves, the server has finished invoking the method. If the server method returns a result, it is produced as the result of
   * resolving the Promise.
   *
   * @typeparam T The expected return type.
   * @param {string} methodName The name of the server method to invoke.
   * @param {any[]} args The arguments used to invoke the server method.
   * @returns {Promise<T>} A Promise that resolves with the result of the server method (if any), or rejects with an error.
   */
  invoke(e, ...t) {
    const [o, n] = this._replaceStreamingParams(t), i = this._createInvocation(e, t, !1, n);
    return new Promise((a, l) => {
      this._callbacks[i.invocationId] = (u, I) => {
        if (I) {
          l(I);
          return;
        } else u && (u.type === p.Completion ? u.error ? l(new Error(u.error)) : a(u.result) : l(new Error(`Unexpected message type: ${u.type}`)));
      };
      const h = this._sendWithProtocol(i).catch((u) => {
        l(u), delete this._callbacks[i.invocationId];
      });
      this._launchStreams(o, h);
    });
  }
  on(e, t) {
    !e || !t || (e = e.toLowerCase(), this._methods[e] || (this._methods[e] = []), this._methods[e].indexOf(t) === -1 && this._methods[e].push(t));
  }
  off(e, t) {
    if (!e)
      return;
    e = e.toLowerCase();
    const o = this._methods[e];
    if (o)
      if (t) {
        const n = o.indexOf(t);
        n !== -1 && (o.splice(n, 1), o.length === 0 && delete this._methods[e]);
      } else
        delete this._methods[e];
  }
  /** Registers a handler that will be invoked when the connection is closed.
   *
   * @param {Function} callback The handler that will be invoked when the connection is closed. Optionally receives a single argument containing the error that caused the connection to close (if any).
   */
  onclose(e) {
    e && this._closedCallbacks.push(e);
  }
  /** Registers a handler that will be invoked when the connection starts reconnecting.
   *
   * @param {Function} callback The handler that will be invoked when the connection starts reconnecting. Optionally receives a single argument containing the error that caused the connection to start reconnecting (if any).
   */
  onreconnecting(e) {
    e && this._reconnectingCallbacks.push(e);
  }
  /** Registers a handler that will be invoked when the connection successfully reconnects.
   *
   * @param {Function} callback The handler that will be invoked when the connection successfully reconnects.
   */
  onreconnected(e) {
    e && this._reconnectedCallbacks.push(e);
  }
  _processIncomingData(e) {
    if (this._cleanupTimeout(), this._receivedHandshakeResponse || (e = this._processHandshakeResponse(e), this._receivedHandshakeResponse = !0), e) {
      const t = this._protocol.parseMessages(e, this._logger);
      for (const o of t)
        if (!(this._messageBuffer && !this._messageBuffer._shouldProcessMessage(o)))
          switch (o.type) {
            case p.Invocation:
              this._invokeClientMethod(o).catch((n) => {
                this._logger.log(c.Error, `Invoke client method threw error: ${Pe(n)}`);
              });
              break;
            case p.StreamItem:
            case p.Completion: {
              const n = this._callbacks[o.invocationId];
              if (n) {
                o.type === p.Completion && delete this._callbacks[o.invocationId];
                try {
                  n(o);
                } catch (i) {
                  this._logger.log(c.Error, `Stream callback threw error: ${Pe(i)}`);
                }
              }
              break;
            }
            case p.Ping:
              break;
            case p.Close: {
              this._logger.log(c.Information, "Close message received from server.");
              const n = o.error ? new Error("Server returned an error on close: " + o.error) : void 0;
              o.allowReconnect === !0 ? this.connection.stop(n) : this._stopPromise = this._stopInternal(n);
              break;
            }
            case p.Ack:
              this._messageBuffer && this._messageBuffer._ack(o);
              break;
            case p.Sequence:
              this._messageBuffer && this._messageBuffer._resetSequence(o);
              break;
            default:
              this._logger.log(c.Warning, `Invalid message type: ${o.type}.`);
              break;
          }
    }
    this._resetTimeoutPeriod();
  }
  _processHandshakeResponse(e) {
    let t, o;
    try {
      [o, t] = this._handshakeProtocol.parseHandshakeResponse(e);
    } catch (n) {
      const i = "Error parsing handshake response: " + n;
      this._logger.log(c.Error, i);
      const r = new Error(i);
      throw this._handshakeRejecter(r), r;
    }
    if (t.error) {
      const n = "Server returned handshake error: " + t.error;
      this._logger.log(c.Error, n);
      const i = new Error(n);
      throw this._handshakeRejecter(i), i;
    } else
      this._logger.log(c.Debug, "Server handshake complete.");
    return this._handshakeResolver(), o;
  }
  _resetKeepAliveInterval() {
    this.connection.features.inherentKeepAlive || (this._nextKeepAlive = (/* @__PURE__ */ new Date()).getTime() + this.keepAliveIntervalInMilliseconds, this._cleanupPingTimer());
  }
  _resetTimeoutPeriod() {
    if ((!this.connection.features || !this.connection.features.inherentKeepAlive) && (this._timeoutHandle = setTimeout(() => this.serverTimeout(), this.serverTimeoutInMilliseconds), this._pingServerHandle === void 0)) {
      let e = this._nextKeepAlive - (/* @__PURE__ */ new Date()).getTime();
      e < 0 && (e = 0), this._pingServerHandle = setTimeout(async () => {
        if (this._connectionState === f.Connected)
          try {
            await this._sendMessage(this._cachedPingMessage);
          } catch {
            this._cleanupPingTimer();
          }
      }, e);
    }
  }
  // eslint-disable-next-line @typescript-eslint/naming-convention
  serverTimeout() {
    this.connection.stop(new Error("Server timeout elapsed without receiving a message from the server."));
  }
  async _invokeClientMethod(e) {
    const t = e.target.toLowerCase(), o = this._methods[t];
    if (!o) {
      this._logger.log(c.Warning, `No client method with the name '${t}' found.`), e.invocationId && (this._logger.log(c.Warning, `No result given for '${t}' method and invocation ID '${e.invocationId}'.`), await this._sendWithProtocol(this._createCompletionMessage(e.invocationId, "Client didn't provide a result.", null)));
      return;
    }
    const n = o.slice(), i = !!e.invocationId;
    let r, a, l;
    for (const h of n)
      try {
        const u = r;
        r = await h.apply(this, e.arguments), i && r && u && (this._logger.log(c.Error, `Multiple results provided for '${t}'. Sending error to server.`), l = this._createCompletionMessage(e.invocationId, "Client provided multiple results.", null)), a = void 0;
      } catch (u) {
        a = u, this._logger.log(c.Error, `A callback for the method '${t}' threw error '${u}'.`);
      }
    l ? await this._sendWithProtocol(l) : i ? (a ? l = this._createCompletionMessage(e.invocationId, `${a}`, null) : r !== void 0 ? l = this._createCompletionMessage(e.invocationId, null, r) : (this._logger.log(c.Warning, `No result given for '${t}' method and invocation ID '${e.invocationId}'.`), l = this._createCompletionMessage(e.invocationId, "Client didn't provide a result.", null)), await this._sendWithProtocol(l)) : r && this._logger.log(c.Error, `Result given for '${t}' method but server is not expecting a result.`);
  }
  _connectionClosed(e) {
    this._logger.log(c.Debug, `HubConnection.connectionClosed(${e}) called while in state ${this._connectionState}.`), this._stopDuringStartError = this._stopDuringStartError || e || new $("The underlying connection was closed before the hub handshake could complete."), this._handshakeResolver && this._handshakeResolver(), this._cancelCallbacksWithError(e || new Error("Invocation canceled due to the underlying connection being closed.")), this._cleanupTimeout(), this._cleanupPingTimer(), this._connectionState === f.Disconnecting ? this._completeClose(e) : this._connectionState === f.Connected && this._reconnectPolicy ? this._reconnect(e) : this._connectionState === f.Connected && this._completeClose(e);
  }
  _completeClose(e) {
    if (this._connectionStarted) {
      this._connectionState = f.Disconnected, this._connectionStarted = !1, this._messageBuffer && (this._messageBuffer._dispose(e ?? new Error("Connection closed.")), this._messageBuffer = void 0), _.isBrowser && window.document.removeEventListener("freeze", this._freezeEventListener);
      try {
        this._closedCallbacks.forEach((t) => t.apply(this, [e]));
      } catch (t) {
        this._logger.log(c.Error, `An onclose callback called with error '${e}' threw error '${t}'.`);
      }
    }
  }
  async _reconnect(e) {
    const t = Date.now();
    let o = 0, n = e !== void 0 ? e : new Error("Attempting to reconnect due to a unknown error."), i = this._getNextRetryDelay(o++, 0, n);
    if (i === null) {
      this._logger.log(c.Debug, "Connection not reconnecting because the IRetryPolicy returned null on the first reconnect attempt."), this._completeClose(e);
      return;
    }
    if (this._connectionState = f.Reconnecting, e ? this._logger.log(c.Information, `Connection reconnecting because of error '${e}'.`) : this._logger.log(c.Information, "Connection reconnecting."), this._reconnectingCallbacks.length !== 0) {
      try {
        this._reconnectingCallbacks.forEach((r) => r.apply(this, [e]));
      } catch (r) {
        this._logger.log(c.Error, `An onreconnecting callback called with error '${e}' threw error '${r}'.`);
      }
      if (this._connectionState !== f.Reconnecting) {
        this._logger.log(c.Debug, "Connection left the reconnecting state in onreconnecting callback. Done reconnecting.");
        return;
      }
    }
    for (; i !== null; ) {
      if (this._logger.log(c.Information, `Reconnect attempt number ${o} will start in ${i} ms.`), await new Promise((r) => {
        this._reconnectDelayHandle = setTimeout(r, i);
      }), this._reconnectDelayHandle = void 0, this._connectionState !== f.Reconnecting) {
        this._logger.log(c.Debug, "Connection left the reconnecting state during reconnect delay. Done reconnecting.");
        return;
      }
      try {
        if (await this._startInternal(), this._connectionState = f.Connected, this._logger.log(c.Information, "HubConnection reconnected successfully."), this._reconnectedCallbacks.length !== 0)
          try {
            this._reconnectedCallbacks.forEach((r) => r.apply(this, [this.connection.connectionId]));
          } catch (r) {
            this._logger.log(c.Error, `An onreconnected callback called with connectionId '${this.connection.connectionId}; threw error '${r}'.`);
          }
        return;
      } catch (r) {
        if (this._logger.log(c.Information, `Reconnect attempt failed because of error '${r}'.`), this._connectionState !== f.Reconnecting) {
          this._logger.log(c.Debug, `Connection moved to the '${this._connectionState}' from the reconnecting state during reconnect attempt. Done reconnecting.`), this._connectionState === f.Disconnecting && this._completeClose();
          return;
        }
        n = r instanceof Error ? r : new Error(r.toString()), i = this._getNextRetryDelay(o++, Date.now() - t, n);
      }
    }
    this._logger.log(c.Information, `Reconnect retries have been exhausted after ${Date.now() - t} ms and ${o} failed attempts. Connection disconnecting.`), this._completeClose();
  }
  _getNextRetryDelay(e, t, o) {
    try {
      return this._reconnectPolicy.nextRetryDelayInMilliseconds({
        elapsedMilliseconds: t,
        previousRetryCount: e,
        retryReason: o
      });
    } catch (n) {
      return this._logger.log(c.Error, `IRetryPolicy.nextRetryDelayInMilliseconds(${e}, ${t}) threw error '${n}'.`), null;
    }
  }
  _cancelCallbacksWithError(e) {
    const t = this._callbacks;
    this._callbacks = {}, Object.keys(t).forEach((o) => {
      const n = t[o];
      try {
        n(null, e);
      } catch (i) {
        this._logger.log(c.Error, `Stream 'error' callback called with '${e}' threw error: ${Pe(i)}`);
      }
    });
  }
  _cleanupPingTimer() {
    this._pingServerHandle && (clearTimeout(this._pingServerHandle), this._pingServerHandle = void 0);
  }
  _cleanupTimeout() {
    this._timeoutHandle && clearTimeout(this._timeoutHandle);
  }
  _createInvocation(e, t, o, n) {
    if (o)
      return n.length !== 0 ? {
        arguments: t,
        streamIds: n,
        target: e,
        type: p.Invocation
      } : {
        arguments: t,
        target: e,
        type: p.Invocation
      };
    {
      const i = this._invocationId;
      return this._invocationId++, n.length !== 0 ? {
        arguments: t,
        invocationId: i.toString(),
        streamIds: n,
        target: e,
        type: p.Invocation
      } : {
        arguments: t,
        invocationId: i.toString(),
        target: e,
        type: p.Invocation
      };
    }
  }
  _launchStreams(e, t) {
    if (e.length !== 0) {
      t || (t = Promise.resolve());
      for (const o in e)
        e[o].subscribe({
          complete: () => {
            t = t.then(() => this._sendWithProtocol(this._createCompletionMessage(o)));
          },
          error: (n) => {
            let i;
            n instanceof Error ? i = n.message : n && n.toString ? i = n.toString() : i = "Unknown error", t = t.then(() => this._sendWithProtocol(this._createCompletionMessage(o, i)));
          },
          next: (n) => {
            t = t.then(() => this._sendWithProtocol(this._createStreamItemMessage(o, n)));
          }
        });
    }
  }
  _replaceStreamingParams(e) {
    const t = [], o = [];
    for (let n = 0; n < e.length; n++) {
      const i = e[n];
      if (this._isObservable(i)) {
        const r = this._invocationId;
        this._invocationId++, t[r] = i, o.push(r.toString()), e.splice(n, 1);
      }
    }
    return [t, o];
  }
  _isObservable(e) {
    return e && e.subscribe && typeof e.subscribe == "function";
  }
  _createStreamInvocation(e, t, o) {
    const n = this._invocationId;
    return this._invocationId++, o.length !== 0 ? {
      arguments: t,
      invocationId: n.toString(),
      streamIds: o,
      target: e,
      type: p.StreamInvocation
    } : {
      arguments: t,
      invocationId: n.toString(),
      target: e,
      type: p.StreamInvocation
    };
  }
  _createCancelInvocation(e) {
    return {
      invocationId: e,
      type: p.CancelInvocation
    };
  }
  _createStreamItemMessage(e, t) {
    return {
      invocationId: e,
      item: t,
      type: p.StreamItem
    };
  }
  _createCompletionMessage(e, t, o) {
    return t ? {
      error: t,
      invocationId: e,
      type: p.Completion
    } : {
      invocationId: e,
      result: o,
      type: p.Completion
    };
  }
  _createCloseMessage() {
    return { type: p.Close };
  }
}
const ds = [0, 2e3, 1e4, 3e4, null];
class We {
  constructor(e) {
    this._retryDelays = e !== void 0 ? [...e, null] : ds;
  }
  nextRetryDelayInMilliseconds(e) {
    return this._retryDelays[e.previousRetryCount];
  }
}
class B {
}
B.Authorization = "Authorization";
B.Cookie = "Cookie";
class gs extends ve {
  constructor(e, t) {
    super(), this._innerClient = e, this._accessTokenFactory = t;
  }
  async send(e) {
    let t = !0;
    this._accessTokenFactory && (!this._accessToken || e.url && e.url.indexOf("/negotiate?") > 0) && (t = !1, this._accessToken = await this._accessTokenFactory()), this._setAuthorizationHeader(e);
    const o = await this._innerClient.send(e);
    return t && o.statusCode === 401 && this._accessTokenFactory ? (this._accessToken = await this._accessTokenFactory(), this._setAuthorizationHeader(e), await this._innerClient.send(e)) : o;
  }
  _setAuthorizationHeader(e) {
    e.headers || (e.headers = {}), this._accessToken ? e.headers[B.Authorization] = `Bearer ${this._accessToken}` : this._accessTokenFactory && e.headers[B.Authorization] && delete e.headers[B.Authorization];
  }
  getCookieString(e) {
    return this._innerClient.getCookieString(e);
  }
}
var b;
(function(s) {
  s[s.None = 0] = "None", s[s.WebSockets = 1] = "WebSockets", s[s.ServerSentEvents = 2] = "ServerSentEvents", s[s.LongPolling = 4] = "LongPolling";
})(b || (b = {}));
var y;
(function(s) {
  s[s.Text = 1] = "Text", s[s.Binary = 2] = "Binary";
})(y || (y = {}));
let fs = class {
  constructor() {
    this._isAborted = !1, this.onabort = null;
  }
  abort() {
    this._isAborted || (this._isAborted = !0, this.onabort && this.onabort());
  }
  get signal() {
    return this;
  }
  get aborted() {
    return this._isAborted;
  }
};
class Be {
  // This is an internal type, not exported from 'index' so this is really just internal.
  get pollAborted() {
    return this._pollAbort.aborted;
  }
  constructor(e, t, o) {
    this._httpClient = e, this._logger = t, this._pollAbort = new fs(), this._options = o, this._running = !1, this.onreceive = null, this.onclose = null;
  }
  async connect(e, t) {
    if (m.isRequired(e, "url"), m.isRequired(t, "transferFormat"), m.isIn(t, y, "transferFormat"), this._url = e, this._logger.log(c.Trace, "(LongPolling transport) Connecting."), t === y.Binary && typeof XMLHttpRequest < "u" && typeof new XMLHttpRequest().responseType != "string")
      throw new Error("Binary protocols over XmlHttpRequest not implementing advanced features are not supported.");
    const [o, n] = F(), i = { [o]: n, ...this._options.headers }, r = {
      abortSignal: this._pollAbort.signal,
      headers: i,
      timeout: 1e5,
      withCredentials: this._options.withCredentials
    };
    t === y.Binary && (r.responseType = "arraybuffer");
    const a = `${e}&_=${Date.now()}`;
    this._logger.log(c.Trace, `(LongPolling transport) polling: ${a}.`);
    const l = await this._httpClient.get(a, r);
    l.statusCode !== 200 ? (this._logger.log(c.Error, `(LongPolling transport) Unexpected response code: ${l.statusCode}.`), this._closeError = new W(l.statusText || "", l.statusCode), this._running = !1) : this._running = !0, this._receiving = this._poll(this._url, r);
  }
  async _poll(e, t) {
    try {
      for (; this._running; )
        try {
          const o = `${e}&_=${Date.now()}`;
          this._logger.log(c.Trace, `(LongPolling transport) polling: ${o}.`);
          const n = await this._httpClient.get(o, t);
          n.statusCode === 204 ? (this._logger.log(c.Information, "(LongPolling transport) Poll terminated by server."), this._running = !1) : n.statusCode !== 200 ? (this._logger.log(c.Error, `(LongPolling transport) Unexpected response code: ${n.statusCode}.`), this._closeError = new W(n.statusText || "", n.statusCode), this._running = !1) : n.content ? (this._logger.log(c.Trace, `(LongPolling transport) data received. ${oe(n.content, this._options.logMessageContent)}.`), this.onreceive && this.onreceive(n.content)) : this._logger.log(c.Trace, "(LongPolling transport) Poll timed out, reissuing.");
        } catch (o) {
          this._running ? o instanceof Oe ? this._logger.log(c.Trace, "(LongPolling transport) Poll timed out, reissuing.") : (this._closeError = o, this._running = !1) : this._logger.log(c.Trace, `(LongPolling transport) Poll errored after shutdown: ${o.message}`);
        }
    } finally {
      this._logger.log(c.Trace, "(LongPolling transport) Polling complete."), this.pollAborted || this._raiseOnClose();
    }
  }
  async send(e) {
    return this._running ? rt(this._logger, "LongPolling", this._httpClient, this._url, e, this._options) : Promise.reject(new Error("Cannot send until the transport is connected"));
  }
  async stop() {
    this._logger.log(c.Trace, "(LongPolling transport) Stopping polling."), this._running = !1, this._pollAbort.abort();
    try {
      await this._receiving, this._logger.log(c.Trace, `(LongPolling transport) sending DELETE request to ${this._url}.`);
      const e = {}, [t, o] = F();
      e[t] = o;
      const n = {
        headers: { ...e, ...this._options.headers },
        timeout: this._options.timeout,
        withCredentials: this._options.withCredentials
      };
      let i;
      try {
        await this._httpClient.delete(this._url, n);
      } catch (r) {
        i = r;
      }
      i ? i instanceof W && (i.statusCode === 404 ? this._logger.log(c.Trace, "(LongPolling transport) A 404 response was returned from sending a DELETE request.") : this._logger.log(c.Trace, `(LongPolling transport) Error sending a DELETE request: ${i}`)) : this._logger.log(c.Trace, "(LongPolling transport) DELETE request accepted.");
    } finally {
      this._logger.log(c.Trace, "(LongPolling transport) Stop finished."), this._raiseOnClose();
    }
  }
  _raiseOnClose() {
    if (this.onclose) {
      let e = "(LongPolling transport) Firing onclose event.";
      this._closeError && (e += " Error: " + this._closeError), this._logger.log(c.Trace, e), this.onclose(this._closeError);
    }
  }
}
class _s {
  constructor(e, t, o, n) {
    this._httpClient = e, this._accessToken = t, this._logger = o, this._options = n, this.onreceive = null, this.onclose = null;
  }
  async connect(e, t) {
    return m.isRequired(e, "url"), m.isRequired(t, "transferFormat"), m.isIn(t, y, "transferFormat"), this._logger.log(c.Trace, "(SSE transport) Connecting."), this._url = e, this._accessToken && (e += (e.indexOf("?") < 0 ? "?" : "&") + `access_token=${encodeURIComponent(this._accessToken)}`), new Promise((o, n) => {
      let i = !1;
      if (t !== y.Text) {
        n(new Error("The Server-Sent Events transport only supports the 'Text' transfer format"));
        return;
      }
      let r;
      if (_.isBrowser || _.isWebWorker)
        r = new this._options.EventSource(e, { withCredentials: this._options.withCredentials });
      else {
        const a = this._httpClient.getCookieString(e), l = {};
        l.Cookie = a;
        const [h, u] = F();
        l[h] = u, r = new this._options.EventSource(e, { withCredentials: this._options.withCredentials, headers: { ...l, ...this._options.headers } });
      }
      try {
        r.onmessage = (a) => {
          if (this.onreceive)
            try {
              this._logger.log(c.Trace, `(SSE transport) data received. ${oe(a.data, this._options.logMessageContent)}.`), this.onreceive(a.data);
            } catch (l) {
              this._close(l);
              return;
            }
        }, r.onerror = (a) => {
          i ? this._close() : n(new Error("EventSource failed to connect. The connection could not be found on the server, either the connection ID is not present on the server, or a proxy is refusing/buffering the connection. If you have multiple servers check that sticky sessions are enabled."));
        }, r.onopen = () => {
          this._logger.log(c.Information, `SSE connected to ${this._url}`), this._eventSource = r, i = !0, o();
        };
      } catch (a) {
        n(a);
        return;
      }
    });
  }
  async send(e) {
    return this._eventSource ? rt(this._logger, "SSE", this._httpClient, this._url, e, this._options) : Promise.reject(new Error("Cannot send until the transport is connected"));
  }
  stop() {
    return this._close(), Promise.resolve();
  }
  _close(e) {
    this._eventSource && (this._eventSource.close(), this._eventSource = void 0, this.onclose && this.onclose(e));
  }
}
class ms {
  constructor(e, t, o, n, i, r) {
    this._logger = o, this._accessTokenFactory = t, this._logMessageContent = n, this._webSocketConstructor = i, this._httpClient = e, this.onreceive = null, this.onclose = null, this._headers = r;
  }
  async connect(e, t) {
    m.isRequired(e, "url"), m.isRequired(t, "transferFormat"), m.isIn(t, y, "transferFormat"), this._logger.log(c.Trace, "(WebSockets transport) Connecting.");
    let o;
    return this._accessTokenFactory && (o = await this._accessTokenFactory()), new Promise((n, i) => {
      e = e.replace(/^http/, "ws");
      let r;
      const a = this._httpClient.getCookieString(e);
      let l = !1;
      if (_.isNode || _.isReactNative) {
        const h = {}, [u, I] = F();
        h[u] = I, o && (h[B.Authorization] = `Bearer ${o}`), a && (h[B.Cookie] = a), r = new this._webSocketConstructor(e, void 0, {
          headers: { ...h, ...this._headers }
        });
      } else
        o && (e += (e.indexOf("?") < 0 ? "?" : "&") + `access_token=${encodeURIComponent(o)}`);
      r || (r = new this._webSocketConstructor(e)), t === y.Binary && (r.binaryType = "arraybuffer"), r.onopen = (h) => {
        this._logger.log(c.Information, `WebSocket connected to ${e}.`), this._webSocket = r, l = !0, n();
      }, r.onerror = (h) => {
        let u = null;
        typeof ErrorEvent < "u" && h instanceof ErrorEvent ? u = h.error : u = "There was an error with the transport", this._logger.log(c.Information, `(WebSockets transport) ${u}.`);
      }, r.onmessage = (h) => {
        if (this._logger.log(c.Trace, `(WebSockets transport) data received. ${oe(h.data, this._logMessageContent)}.`), this.onreceive)
          try {
            this.onreceive(h.data);
          } catch (u) {
            this._close(u);
            return;
          }
      }, r.onclose = (h) => {
        if (l)
          this._close(h);
        else {
          let u = null;
          typeof ErrorEvent < "u" && h instanceof ErrorEvent ? u = h.error : u = "WebSocket failed to connect. The connection could not be found on the server, either the endpoint may not be a SignalR endpoint, the connection ID is not present on the server, or there is a proxy blocking WebSockets. If you have multiple servers check that sticky sessions are enabled.", i(new Error(u));
        }
      };
    });
  }
  send(e) {
    return this._webSocket && this._webSocket.readyState === this._webSocketConstructor.OPEN ? (this._logger.log(c.Trace, `(WebSockets transport) sending data. ${oe(e, this._logMessageContent)}.`), this._webSocket.send(e), Promise.resolve()) : Promise.reject("WebSocket is not in the OPEN state");
  }
  stop() {
    return this._webSocket && this._close(void 0), Promise.resolve();
  }
  _close(e) {
    this._webSocket && (this._webSocket.onclose = () => {
    }, this._webSocket.onmessage = () => {
    }, this._webSocket.onerror = () => {
    }, this._webSocket.close(), this._webSocket = void 0), this._logger.log(c.Trace, "(WebSockets transport) socket closed."), this.onclose && (this._isCloseEvent(e) && (e.wasClean === !1 || e.code !== 1e3) ? this.onclose(new Error(`WebSocket closed with status code: ${e.code} (${e.reason || "no reason given"}).`)) : e instanceof Error ? this.onclose(e) : this.onclose());
  }
  _isCloseEvent(e) {
    return e && typeof e.wasClean == "boolean" && typeof e.code == "number";
  }
}
const He = 100;
class bs {
  constructor(e, t = {}) {
    if (this._stopPromiseResolver = () => {
    }, this.features = {}, this._negotiateVersion = 1, m.isRequired(e, "url"), this._logger = Xt(t.logger), this.baseUrl = this._resolveUrl(e), t = t || {}, t.logMessageContent = t.logMessageContent === void 0 ? !1 : t.logMessageContent, typeof t.withCredentials == "boolean" || t.withCredentials === void 0)
      t.withCredentials = t.withCredentials === void 0 ? !0 : t.withCredentials;
    else
      throw new Error("withCredentials option was not a 'boolean' or 'undefined' value");
    t.timeout = t.timeout === void 0 ? 100 * 1e3 : t.timeout;
    let o = null, n = null;
    if (_.isNode && typeof require < "u") {
      const i = typeof __webpack_require__ == "function" ? __non_webpack_require__ : require;
      o = i("ws"), n = i("eventsource");
    }
    !_.isNode && typeof WebSocket < "u" && !t.WebSocket ? t.WebSocket = WebSocket : _.isNode && !t.WebSocket && o && (t.WebSocket = o), !_.isNode && typeof EventSource < "u" && !t.EventSource ? t.EventSource = EventSource : _.isNode && !t.EventSource && typeof n < "u" && (t.EventSource = n), this._httpClient = new gs(t.httpClient || new is(this._logger), t.accessTokenFactory), this._connectionState = "Disconnected", this._connectionStarted = !1, this._options = t, this.onreceive = null, this.onclose = null;
  }
  async start(e) {
    if (e = e || y.Binary, m.isIn(e, y, "transferFormat"), this._logger.log(c.Debug, `Starting connection with transfer format '${y[e]}'.`), this._connectionState !== "Disconnected")
      return Promise.reject(new Error("Cannot start an HttpConnection that is not in the 'Disconnected' state."));
    if (this._connectionState = "Connecting", this._startInternalPromise = this._startInternal(e), await this._startInternalPromise, this._connectionState === "Disconnecting") {
      const t = "Failed to start the HttpConnection before stop() was called.";
      return this._logger.log(c.Error, t), await this._stopPromise, Promise.reject(new $(t));
    } else if (this._connectionState !== "Connected") {
      const t = "HttpConnection.startInternal completed gracefully but didn't enter the connection into the connected state!";
      return this._logger.log(c.Error, t), Promise.reject(new $(t));
    }
    this._connectionStarted = !0;
  }
  send(e) {
    return this._connectionState !== "Connected" ? Promise.reject(new Error("Cannot send data if the connection is not in the 'Connected' State.")) : (this._sendQueue || (this._sendQueue = new Ae(this.transport)), this._sendQueue.send(e));
  }
  async stop(e) {
    if (this._connectionState === "Disconnected")
      return this._logger.log(c.Debug, `Call to HttpConnection.stop(${e}) ignored because the connection is already in the disconnected state.`), Promise.resolve();
    if (this._connectionState === "Disconnecting")
      return this._logger.log(c.Debug, `Call to HttpConnection.stop(${e}) ignored because the connection is already in the disconnecting state.`), this._stopPromise;
    this._connectionState = "Disconnecting", this._stopPromise = new Promise((t) => {
      this._stopPromiseResolver = t;
    }), await this._stopInternal(e), await this._stopPromise;
  }
  async _stopInternal(e) {
    this._stopError = e;
    try {
      await this._startInternalPromise;
    } catch {
    }
    if (this.transport) {
      try {
        await this.transport.stop();
      } catch (t) {
        this._logger.log(c.Error, `HttpConnection.transport.stop() threw error '${t}'.`), this._stopConnection();
      }
      this.transport = void 0;
    } else
      this._logger.log(c.Debug, "HttpConnection.transport is undefined in HttpConnection.stop() because start() failed.");
  }
  async _startInternal(e) {
    let t = this.baseUrl;
    this._accessTokenFactory = this._options.accessTokenFactory, this._httpClient._accessTokenFactory = this._accessTokenFactory;
    try {
      if (this._options.skipNegotiation)
        if (this._options.transport === b.WebSockets)
          this.transport = this._constructTransport(b.WebSockets), await this._startTransport(t, e);
        else
          throw new Error("Negotiation can only be skipped when using the WebSocket transport directly.");
      else {
        let o = null, n = 0;
        do {
          if (o = await this._getNegotiationResponse(t), this._connectionState === "Disconnecting" || this._connectionState === "Disconnected")
            throw new $("The connection was stopped during negotiation.");
          if (o.error)
            throw new Error(o.error);
          if (o.ProtocolVersion)
            throw new Error("Detected a connection attempt to an ASP.NET SignalR Server. This client only supports connecting to an ASP.NET Core SignalR Server. See https://aka.ms/signalr-core-differences for details.");
          if (o.url && (t = o.url), o.accessToken) {
            const i = o.accessToken;
            this._accessTokenFactory = () => i, this._httpClient._accessToken = i, this._httpClient._accessTokenFactory = void 0;
          }
          n++;
        } while (o.url && n < He);
        if (n === He && o.url)
          throw new Error("Negotiate redirection limit exceeded.");
        await this._createTransport(t, this._options.transport, o, e);
      }
      this.transport instanceof Be && (this.features.inherentKeepAlive = !0), this._connectionState === "Connecting" && (this._logger.log(c.Debug, "The HttpConnection connected successfully."), this._connectionState = "Connected");
    } catch (o) {
      return this._logger.log(c.Error, "Failed to start the connection: " + o), this._connectionState = "Disconnected", this.transport = void 0, this._stopPromiseResolver(), Promise.reject(o);
    }
  }
  async _getNegotiationResponse(e) {
    const t = {}, [o, n] = F();
    t[o] = n;
    const i = this._resolveNegotiateUrl(e);
    this._logger.log(c.Debug, `Sending negotiation request: ${i}.`);
    try {
      const r = await this._httpClient.post(i, {
        content: "",
        headers: { ...t, ...this._options.headers },
        timeout: this._options.timeout,
        withCredentials: this._options.withCredentials
      });
      if (r.statusCode !== 200)
        return Promise.reject(new Error(`Unexpected status code returned from negotiate '${r.statusCode}'`));
      const a = JSON.parse(r.content);
      return (!a.negotiateVersion || a.negotiateVersion < 1) && (a.connectionToken = a.connectionId), a.useStatefulReconnect && this._options._useStatefulReconnect !== !0 ? Promise.reject(new Ue("Client didn't negotiate Stateful Reconnect but the server did.")) : a;
    } catch (r) {
      let a = "Failed to complete negotiation with the server: " + r;
      return r instanceof W && r.statusCode === 404 && (a = a + " Either this is not a SignalR endpoint or there is a proxy blocking the connection."), this._logger.log(c.Error, a), Promise.reject(new Ue(a));
    }
  }
  _createConnectUrl(e, t) {
    return t ? e + (e.indexOf("?") === -1 ? "?" : "&") + `id=${t}` : e;
  }
  async _createTransport(e, t, o, n) {
    let i = this._createConnectUrl(e, o.connectionToken);
    if (this._isITransport(t)) {
      this._logger.log(c.Debug, "Connection was provided an instance of ITransport, using that directly."), this.transport = t, await this._startTransport(i, n), this.connectionId = o.connectionId;
      return;
    }
    const r = [], a = o.availableTransports || [];
    let l = o;
    for (const h of a) {
      const u = this._resolveTransportOrError(h, t, n, l?.useStatefulReconnect === !0);
      if (u instanceof Error)
        r.push(`${h.transport} failed:`), r.push(u);
      else if (this._isITransport(u)) {
        if (this.transport = u, !l) {
          try {
            l = await this._getNegotiationResponse(e);
          } catch (I) {
            return Promise.reject(I);
          }
          i = this._createConnectUrl(e, l.connectionToken);
        }
        try {
          await this._startTransport(i, n), this.connectionId = l.connectionId;
          return;
        } catch (I) {
          if (this._logger.log(c.Error, `Failed to start the transport '${h.transport}': ${I}`), l = void 0, r.push(new Ft(`${h.transport} failed: ${I}`, b[h.transport])), this._connectionState !== "Connecting") {
            const S = "Failed to select transport before stop() was called.";
            return this._logger.log(c.Debug, S), Promise.reject(new $(S));
          }
        }
      }
    }
    return r.length > 0 ? Promise.reject(new Jt(`Unable to connect to the server with any of the available transports. ${r.join(" ")}`, r)) : Promise.reject(new Error("None of the transports supported by the client are supported by the server."));
  }
  _constructTransport(e) {
    switch (e) {
      case b.WebSockets:
        if (!this._options.WebSocket)
          throw new Error("'WebSocket' is not supported in your environment.");
        return new ms(this._httpClient, this._accessTokenFactory, this._logger, this._options.logMessageContent, this._options.WebSocket, this._options.headers || {});
      case b.ServerSentEvents:
        if (!this._options.EventSource)
          throw new Error("'EventSource' is not supported in your environment.");
        return new _s(this._httpClient, this._httpClient._accessToken, this._logger, this._options);
      case b.LongPolling:
        return new Be(this._httpClient, this._logger, this._options);
      default:
        throw new Error(`Unknown transport: ${e}.`);
    }
  }
  _startTransport(e, t) {
    return this.transport.onreceive = this.onreceive, this.features.reconnect ? this.transport.onclose = async (o) => {
      let n = !1;
      if (this.features.reconnect)
        try {
          this.features.disconnected(), await this.transport.connect(e, t), await this.features.resend();
        } catch {
          n = !0;
        }
      else {
        this._stopConnection(o);
        return;
      }
      n && this._stopConnection(o);
    } : this.transport.onclose = (o) => this._stopConnection(o), this.transport.connect(e, t);
  }
  _resolveTransportOrError(e, t, o, n) {
    const i = b[e.transport];
    if (i == null)
      return this._logger.log(c.Debug, `Skipping transport '${e.transport}' because it is not supported by this client.`), new Error(`Skipping transport '${e.transport}' because it is not supported by this client.`);
    if (ws(t, i))
      if (e.transferFormats.map((a) => y[a]).indexOf(o) >= 0) {
        if (i === b.WebSockets && !this._options.WebSocket || i === b.ServerSentEvents && !this._options.EventSource)
          return this._logger.log(c.Debug, `Skipping transport '${b[i]}' because it is not supported in your environment.'`), new zt(`'${b[i]}' is not supported in your environment.`, i);
        this._logger.log(c.Debug, `Selecting transport '${b[i]}'.`);
        try {
          return this.features.reconnect = i === b.WebSockets ? n : void 0, this._constructTransport(i);
        } catch (a) {
          return a;
        }
      } else
        return this._logger.log(c.Debug, `Skipping transport '${b[i]}' because it does not support the requested transfer format '${y[o]}'.`), new Error(`'${b[i]}' does not support ${y[o]}.`);
    else
      return this._logger.log(c.Debug, `Skipping transport '${b[i]}' because it was disabled by the client.`), new Vt(`'${b[i]}' is disabled by the client.`, i);
  }
  _isITransport(e) {
    return e && typeof e == "object" && "connect" in e;
  }
  _stopConnection(e) {
    if (this._logger.log(c.Debug, `HttpConnection.stopConnection(${e}) called while in state ${this._connectionState}.`), this.transport = void 0, e = this._stopError || e, this._stopError = void 0, this._connectionState === "Disconnected") {
      this._logger.log(c.Debug, `Call to HttpConnection.stopConnection(${e}) was ignored because the connection is already in the disconnected state.`);
      return;
    }
    if (this._connectionState === "Connecting")
      throw this._logger.log(c.Warning, `Call to HttpConnection.stopConnection(${e}) was ignored because the connection is still in the connecting state.`), new Error(`HttpConnection.stopConnection(${e}) was called while the connection is still in the connecting state.`);
    if (this._connectionState === "Disconnecting" && this._stopPromiseResolver(), e ? this._logger.log(c.Error, `Connection disconnected with error '${e}'.`) : this._logger.log(c.Information, "Connection disconnected."), this._sendQueue && (this._sendQueue.stop().catch((t) => {
      this._logger.log(c.Error, `TransportSendQueue.stop() threw error '${t}'.`);
    }), this._sendQueue = void 0), this.connectionId = void 0, this._connectionState = "Disconnected", this._connectionStarted) {
      this._connectionStarted = !1;
      try {
        this.onclose && this.onclose(e);
      } catch (t) {
        this._logger.log(c.Error, `HttpConnection.onclose(${e}) threw error '${t}'.`);
      }
    }
  }
  _resolveUrl(e) {
    if (e.lastIndexOf("https://", 0) === 0 || e.lastIndexOf("http://", 0) === 0)
      return e;
    if (!_.isBrowser)
      throw new Error(`Cannot resolve '${e}'.`);
    const t = window.document.createElement("a");
    return t.href = e, this._logger.log(c.Information, `Normalizing '${e}' to '${t.href}'.`), t.href;
  }
  _resolveNegotiateUrl(e) {
    const t = new URL(e);
    t.pathname.endsWith("/") ? t.pathname += "negotiate" : t.pathname += "/negotiate";
    const o = new URLSearchParams(t.searchParams);
    return o.has("negotiateVersion") || o.append("negotiateVersion", this._negotiateVersion.toString()), o.has("useStatefulReconnect") ? o.get("useStatefulReconnect") === "true" && (this._options._useStatefulReconnect = !0) : this._options._useStatefulReconnect === !0 && o.append("useStatefulReconnect", "true"), t.search = o.toString(), t.toString();
  }
}
function ws(s, e) {
  return !s || (e & s) !== 0;
}
class Ae {
  constructor(e) {
    this._transport = e, this._buffer = [], this._executing = !0, this._sendBufferedData = new he(), this._transportResult = new he(), this._sendLoopPromise = this._sendLoop();
  }
  send(e) {
    return this._bufferData(e), this._transportResult || (this._transportResult = new he()), this._transportResult.promise;
  }
  stop() {
    return this._executing = !1, this._sendBufferedData.resolve(), this._sendLoopPromise;
  }
  _bufferData(e) {
    if (this._buffer.length && typeof this._buffer[0] != typeof e)
      throw new Error(`Expected data to be of type ${typeof this._buffer} but was of type ${typeof e}`);
    this._buffer.push(e), this._sendBufferedData.resolve();
  }
  async _sendLoop() {
    for (; ; ) {
      if (await this._sendBufferedData.promise, !this._executing) {
        this._transportResult && this._transportResult.reject("Connection stopped.");
        break;
      }
      this._sendBufferedData = new he();
      const e = this._transportResult;
      this._transportResult = void 0;
      const t = typeof this._buffer[0] == "string" ? this._buffer.join("") : Ae._concatBuffers(this._buffer);
      this._buffer.length = 0;
      try {
        await this._transport.send(t), e.resolve();
      } catch (o) {
        e.reject(o);
      }
    }
  }
  static _concatBuffers(e) {
    const t = e.map((i) => i.byteLength).reduce((i, r) => i + r), o = new Uint8Array(t);
    let n = 0;
    for (const i of e)
      o.set(new Uint8Array(i), n), n += i.byteLength;
    return o.buffer;
  }
}
class he {
  constructor() {
    this.promise = new Promise((e, t) => [this._resolver, this._rejecter] = [e, t]);
  }
  resolve() {
    this._resolver();
  }
  reject(e) {
    this._rejecter(e);
  }
}
const ys = "json";
class vs {
  constructor() {
    this.name = ys, this.version = 2, this.transferFormat = y.Text;
  }
  /** Creates an array of {@link @microsoft/signalr.HubMessage} objects from the specified serialized representation.
   *
   * @param {string} input A string containing the serialized representation.
   * @param {ILogger} logger A logger that will be used to log messages that occur during parsing.
   */
  parseMessages(e, t) {
    if (typeof e != "string")
      throw new Error("Invalid input for JSON hub protocol. Expected a string.");
    if (!e)
      return [];
    t === null && (t = ne.instance);
    const o = P.parse(e), n = [];
    for (const i of o) {
      const r = JSON.parse(i);
      if (typeof r.type != "number")
        throw new Error("Invalid payload.");
      switch (r.type) {
        case p.Invocation:
          this._isInvocationMessage(r);
          break;
        case p.StreamItem:
          this._isStreamItemMessage(r);
          break;
        case p.Completion:
          this._isCompletionMessage(r);
          break;
        case p.Ping:
          break;
        case p.Close:
          break;
        case p.Ack:
          this._isAckMessage(r);
          break;
        case p.Sequence:
          this._isSequenceMessage(r);
          break;
        default:
          t.log(c.Information, "Unknown message type '" + r.type + "' ignored.");
          continue;
      }
      n.push(r);
    }
    return n;
  }
  /** Writes the specified {@link @microsoft/signalr.HubMessage} to a string and returns it.
   *
   * @param {HubMessage} message The message to write.
   * @returns {string} A string containing the serialized representation of the message.
   */
  writeMessage(e) {
    return P.write(JSON.stringify(e));
  }
  _isInvocationMessage(e) {
    this._assertNotEmptyString(e.target, "Invalid payload for Invocation message."), e.invocationId !== void 0 && this._assertNotEmptyString(e.invocationId, "Invalid payload for Invocation message.");
  }
  _isStreamItemMessage(e) {
    if (this._assertNotEmptyString(e.invocationId, "Invalid payload for StreamItem message."), e.item === void 0)
      throw new Error("Invalid payload for StreamItem message.");
  }
  _isCompletionMessage(e) {
    if (e.result && e.error)
      throw new Error("Invalid payload for Completion message.");
    !e.result && e.error && this._assertNotEmptyString(e.error, "Invalid payload for Completion message."), this._assertNotEmptyString(e.invocationId, "Invalid payload for Completion message.");
  }
  _isAckMessage(e) {
    if (typeof e.sequenceId != "number")
      throw new Error("Invalid SequenceId for Ack message.");
  }
  _isSequenceMessage(e) {
    if (typeof e.sequenceId != "number")
      throw new Error("Invalid SequenceId for Sequence message.");
  }
  _assertNotEmptyString(e, t) {
    if (typeof e != "string" || e === "")
      throw new Error(t);
  }
}
const Cs = {
  trace: c.Trace,
  debug: c.Debug,
  info: c.Information,
  information: c.Information,
  warn: c.Warning,
  warning: c.Warning,
  error: c.Error,
  critical: c.Critical,
  none: c.None
};
function Ss(s) {
  const e = Cs[s.toLowerCase()];
  if (typeof e < "u")
    return e;
  throw new Error(`Unknown log level: ${s}`);
}
class Es {
  configureLogging(e) {
    if (m.isRequired(e, "logging"), Ps(e))
      this.logger = e;
    else if (typeof e == "string") {
      const t = Ss(e);
      this.logger = new _e(t);
    } else
      this.logger = new _e(e);
    return this;
  }
  withUrl(e, t) {
    return m.isRequired(e, "url"), m.isNotEmpty(e, "url"), this.url = e, typeof t == "object" ? this.httpConnectionOptions = { ...this.httpConnectionOptions, ...t } : this.httpConnectionOptions = {
      ...this.httpConnectionOptions,
      transport: t
    }, this;
  }
  /** Configures the {@link @microsoft/signalr.HubConnection} to use the specified Hub Protocol.
   *
   * @param {IHubProtocol} protocol The {@link @microsoft/signalr.IHubProtocol} implementation to use.
   */
  withHubProtocol(e) {
    return m.isRequired(e, "protocol"), this.protocol = e, this;
  }
  withAutomaticReconnect(e) {
    if (this.reconnectPolicy)
      throw new Error("A reconnectPolicy has already been set.");
    return e ? Array.isArray(e) ? this.reconnectPolicy = new We(e) : this.reconnectPolicy = e : this.reconnectPolicy = new We(), this;
  }
  /** Configures {@link @microsoft/signalr.HubConnection.serverTimeoutInMilliseconds} for the {@link @microsoft/signalr.HubConnection}.
   *
   * @returns The {@link @microsoft/signalr.HubConnectionBuilder} instance, for chaining.
   */
  withServerTimeout(e) {
    return m.isRequired(e, "milliseconds"), this._serverTimeoutInMilliseconds = e, this;
  }
  /** Configures {@link @microsoft/signalr.HubConnection.keepAliveIntervalInMilliseconds} for the {@link @microsoft/signalr.HubConnection}.
   *
   * @returns The {@link @microsoft/signalr.HubConnectionBuilder} instance, for chaining.
   */
  withKeepAliveInterval(e) {
    return m.isRequired(e, "milliseconds"), this._keepAliveIntervalInMilliseconds = e, this;
  }
  /** Enables and configures options for the Stateful Reconnect feature.
   *
   * @returns The {@link @microsoft/signalr.HubConnectionBuilder} instance, for chaining.
   */
  withStatefulReconnect(e) {
    return this.httpConnectionOptions === void 0 && (this.httpConnectionOptions = {}), this.httpConnectionOptions._useStatefulReconnect = !0, this._statefulReconnectBufferSize = e?.bufferSize, this;
  }
  /** Creates a {@link @microsoft/signalr.HubConnection} from the configuration options specified in this builder.
   *
   * @returns {HubConnection} The configured {@link @microsoft/signalr.HubConnection}.
   */
  build() {
    const e = this.httpConnectionOptions || {};
    if (e.logger === void 0 && (e.logger = this.logger), !this.url)
      throw new Error("The 'HubConnectionBuilder.withUrl' method must be called before building the connection.");
    const t = new bs(this.url, e);
    return De.create(t, this.logger || ne.instance, this.protocol || new vs(), this.reconnectPolicy, this._serverTimeoutInMilliseconds, this._keepAliveIntervalInMilliseconds, this._statefulReconnectBufferSize);
  }
}
function Ps(s) {
  return s.log !== void 0;
}
const ks = "/umbraco/processinghub";
class Is extends X {
  constructor(e) {
    super(e), this.#s = new bt([], (t) => t.method), this.message = this.#s.asObservable(), this.provideContext($s, this);
  }
  #e;
  #s;
  startHub(e, t) {
    this.#t(ks, e, t);
  }
  hostConnected() {
    super.hostConnected();
  }
  hostDisconnected() {
    super.hostDisconnected(), this.#e?.stop().then(() => {
      console.debug("signalr connection stopped");
    });
  }
  messagesOf(e) {
    return this.#s.asObservablePart(
      (t) => t.find((o) => o.method === e)
    );
  }
  getClientId() {
    return this.#e?.connectionId ?? null;
  }
  #t(e, t, o) {
    this.#e = new Es().withUrl(e, { accessTokenFactory: () => t }).configureLogging(c.None).build();
    for (let n = 0; n < o.length; n++)
      this.#e.on(o[n], (i) => {
        console.debug("message received:", o[n], i), this.#s.appendOne({
          method: o[n],
          message: i
        });
      });
    this.#e.start().then(() => {
      console.debug("signalr connection started");
    });
  }
}
const $s = new me("JumooProcessingSignalRContext");
var Ts = /* @__PURE__ */ ((s) => (s.DEFAULT = "Default", s.INFO = "Info", s.ERROR = "Error", s.SUCCESS = "Success", s.WARNING = "Warning", s))(Ts || {}), w = /* @__PURE__ */ ((s) => (s.NOT_STARTED = "NotStarted", s.RUNNING = "Running", s.BACKGROUND = "Background", s.WAITING = "Waiting", s.SCHEDULED = "Scheduled", s.COMPLETED = "Completed", s.FAILED = "Failed", s))(w || {}), Te = /* @__PURE__ */ ((s) => (s.NONE = "None", s.RUNNING = "Running", s.COMPLETE = "Complete", s.ERROR = "Error", s))(Te || {}), Rs = async (s, e) => {
  let t = typeof e == "function" ? await e(s) : e;
  if (t) return s.scheme === "bearer" ? `Bearer ${t}` : s.scheme === "basic" ? `Basic ${btoa(t)}` : t;
}, xs = { bodySerializer: (s) => JSON.stringify(s, (e, t) => typeof t == "bigint" ? t.toString() : t) }, Os = (s) => {
  switch (s) {
    case "label":
      return ".";
    case "matrix":
      return ";";
    case "simple":
      return ",";
    default:
      return "&";
  }
}, Ds = (s) => {
  switch (s) {
    case "form":
      return ",";
    case "pipeDelimited":
      return "|";
    case "spaceDelimited":
      return "%20";
    default:
      return ",";
  }
}, As = (s) => {
  switch (s) {
    case "label":
      return ".";
    case "matrix":
      return ";";
    case "simple":
      return ",";
    default:
      return "&";
  }
}, at = ({ allowReserved: s, explode: e, name: t, style: o, value: n }) => {
  if (!e) {
    let a = (s ? n : n.map((l) => encodeURIComponent(l))).join(Ds(o));
    switch (o) {
      case "label":
        return `.${a}`;
      case "matrix":
        return `;${t}=${a}`;
      case "simple":
        return a;
      default:
        return `${t}=${a}`;
    }
  }
  let i = Os(o), r = n.map((a) => o === "label" || o === "simple" ? s ? a : encodeURIComponent(a) : Ce({ allowReserved: s, name: t, value: a })).join(i);
  return o === "label" || o === "matrix" ? i + r : r;
}, Ce = ({ allowReserved: s, name: e, value: t }) => {
  if (t == null) return "";
  if (typeof t == "object") throw new Error("Deeply-nested arrays/objects aren’t supported. Provide your own `querySerializer()` to handle these.");
  return `${e}=${s ? t : encodeURIComponent(t)}`;
}, ct = ({ allowReserved: s, explode: e, name: t, style: o, value: n }) => {
  if (n instanceof Date) return `${t}=${n.toISOString()}`;
  if (o !== "deepObject" && !e) {
    let a = [];
    Object.entries(n).forEach(([h, u]) => {
      a = [...a, h, s ? u : encodeURIComponent(u)];
    });
    let l = a.join(",");
    switch (o) {
      case "form":
        return `${t}=${l}`;
      case "label":
        return `.${l}`;
      case "matrix":
        return `;${t}=${l}`;
      default:
        return l;
    }
  }
  let i = As(o), r = Object.entries(n).map(([a, l]) => Ce({ allowReserved: s, name: o === "deepObject" ? `${t}[${a}]` : a, value: l })).join(i);
  return o === "label" || o === "matrix" ? i + r : r;
}, js = /\{[^{}]+\}/g, Ns = ({ path: s, url: e }) => {
  let t = e, o = e.match(js);
  if (o) for (let n of o) {
    let i = !1, r = n.substring(1, n.length - 1), a = "simple";
    r.endsWith("*") && (i = !0, r = r.substring(0, r.length - 1)), r.startsWith(".") ? (r = r.substring(1), a = "label") : r.startsWith(";") && (r = r.substring(1), a = "matrix");
    let l = s[r];
    if (l == null) continue;
    if (Array.isArray(l)) {
      t = t.replace(n, at({ explode: i, name: r, style: a, value: l }));
      continue;
    }
    if (typeof l == "object") {
      t = t.replace(n, ct({ explode: i, name: r, style: a, value: l }));
      continue;
    }
    if (a === "matrix") {
      t = t.replace(n, `;${Ce({ name: r, value: l })}`);
      continue;
    }
    let h = encodeURIComponent(a === "label" ? `.${l}` : l);
    t = t.replace(n, h);
  }
  return t;
}, lt = ({ allowReserved: s, array: e, object: t } = {}) => (o) => {
  let n = [];
  if (o && typeof o == "object") for (let i in o) {
    let r = o[i];
    if (r != null) {
      if (Array.isArray(r)) {
        n = [...n, at({ allowReserved: s, explode: !0, name: i, style: "form", value: r, ...e })];
        continue;
      }
      if (typeof r == "object") {
        n = [...n, ct({ allowReserved: s, explode: !0, name: i, style: "deepObject", value: r, ...t })];
        continue;
      }
      n = [...n, Ce({ allowReserved: s, name: i, value: r })];
    }
  }
  return n.join("&");
}, Ms = (s) => {
  if (!s) return "stream";
  let e = s.split(";")[0]?.trim();
  if (e) {
    if (e.startsWith("application/json") || e.endsWith("+json")) return "json";
    if (e === "multipart/form-data") return "formData";
    if (["application/", "audio/", "image/", "video/"].some((t) => e.startsWith(t))) return "blob";
    if (e.startsWith("text/")) return "text";
  }
}, Us = async ({ security: s, ...e }) => {
  for (let t of s) {
    let o = await Rs(t, e.auth);
    if (!o) continue;
    let n = t.name ?? "Authorization";
    switch (t.in) {
      case "query":
        e.query || (e.query = {}), e.query[n] = o;
        break;
      case "cookie":
        e.headers.append("Cookie", `${n}=${o}`);
        break;
      case "header":
      default:
        e.headers.set(n, o);
        break;
    }
    return;
  }
}, qe = (s) => Ls({ baseUrl: s.baseUrl, path: s.path, query: s.query, querySerializer: typeof s.querySerializer == "function" ? s.querySerializer : lt(s.querySerializer), url: s.url }), Ls = ({ baseUrl: s, path: e, query: t, querySerializer: o, url: n }) => {
  let i = n.startsWith("/") ? n : `/${n}`, r = (s ?? "") + i;
  e && (r = Ns({ path: e, url: r }));
  let a = t ? o(t) : "";
  return a.startsWith("?") && (a = a.substring(1)), a && (r += `?${a}`), r;
}, ze = (s, e) => {
  let t = { ...s, ...e };
  return t.baseUrl?.endsWith("/") && (t.baseUrl = t.baseUrl.substring(0, t.baseUrl.length - 1)), t.headers = ht(s.headers, e.headers), t;
}, ht = (...s) => {
  let e = new Headers();
  for (let t of s) {
    if (!t || typeof t != "object") continue;
    let o = t instanceof Headers ? t.entries() : Object.entries(t);
    for (let [n, i] of o) if (i === null) e.delete(n);
    else if (Array.isArray(i)) for (let r of i) e.append(n, r);
    else i !== void 0 && e.set(n, typeof i == "object" ? JSON.stringify(i) : i);
  }
  return e;
}, ke = class {
  _fns;
  constructor() {
    this._fns = [];
  }
  clear() {
    this._fns = [];
  }
  exists(s) {
    return this._fns.indexOf(s) !== -1;
  }
  eject(s) {
    let e = this._fns.indexOf(s);
    e !== -1 && (this._fns = [...this._fns.slice(0, e), ...this._fns.slice(e + 1)]);
  }
  use(s) {
    this._fns = [...this._fns, s];
  }
}, Ws = () => ({ error: new ke(), request: new ke(), response: new ke() }), Bs = lt({ allowReserved: !1, array: { explode: !0, style: "form" }, object: { explode: !0, style: "deepObject" } }), Hs = { "Content-Type": "application/json" }, ut = (s = {}) => ({ ...xs, headers: Hs, parseAs: "auto", querySerializer: Bs, ...s }), qs = (s = {}) => {
  let e = ze(ut(), s), t = () => ({ ...e }), o = (r) => (e = ze(e, r), t()), n = Ws(), i = async (r) => {
    let a = { ...e, ...r, fetch: r.fetch ?? e.fetch ?? globalThis.fetch, headers: ht(e.headers, r.headers) };
    a.security && await Us({ ...a, security: a.security }), a.body && a.bodySerializer && (a.body = a.bodySerializer(a.body)), (a.body === void 0 || a.body === "") && a.headers.delete("Content-Type");
    let l = qe(a), h = { redirect: "follow", ...a }, u = new Request(l, h);
    for (let R of n.request._fns) u = await R(u, a);
    let I = a.fetch, S = await I(u);
    for (let R of n.response._fns) S = await R(S, u, a);
    let re = { request: u, response: S };
    if (S.ok) {
      if (S.status === 204 || S.headers.get("Content-Length") === "0") return { data: {}, ...re };
      let R = (a.parseAs === "auto" ? Ms(S.headers.get("Content-Type")) : a.parseAs) ?? "json";
      if (R === "stream") return { data: S.body, ...re };
      let ce = await S[R]();
      return R === "json" && (a.responseValidator && await a.responseValidator(ce), a.responseTransformer && (ce = await a.responseTransformer(ce))), { data: ce, ...re };
    }
    let ae = await S.text();
    try {
      ae = JSON.parse(ae);
    } catch {
    }
    let Z = ae;
    for (let R of n.error._fns) Z = await R(ae, S, u, a);
    if (Z = Z || {}, a.throwOnError) throw Z;
    return { error: Z, ...re };
  };
  return { buildUrl: qe, connect: (r) => i({ ...r, method: "CONNECT" }), delete: (r) => i({ ...r, method: "DELETE" }), get: (r) => i({ ...r, method: "GET" }), getConfig: t, head: (r) => i({ ...r, method: "HEAD" }), interceptors: n, options: (r) => i({ ...r, method: "OPTIONS" }), patch: (r) => i({ ...r, method: "PATCH" }), post: (r) => i({ ...r, method: "POST" }), put: (r) => i({ ...r, method: "PUT" }), request: i, setConfig: o, trace: (r) => i({ ...r, method: "TRACE" }) };
};
const v = qs(ut({
  baseUrl: "http://localhost:63435"
}));
class j {
  static clearPipeline(e) {
    return (e.client ?? v).post({
      url: "/umbraco/jumoo/api/v1/processing/ClearPipeline/{id}",
      ...e
    });
  }
  static createPipeline(e) {
    return (e?.client ?? v).post({
      url: "/umbraco/jumoo/api/v1/processing/CreatePipeline",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e?.headers
      }
    });
  }
  static getPipeline(e) {
    return (e.client ?? v).get({
      url: "/umbraco/jumoo/api/v1/processing/GetPipeline/{id}",
      ...e
    });
  }
  static getProcessors(e) {
    return (e?.client ?? v).get({
      url: "/umbraco/jumoo/api/v1/processing/GetProcessors",
      ...e
    });
  }
  static getResults(e) {
    return (e.client ?? v).get({
      url: "/umbraco/jumoo/api/v1/processing/GetResults/{id}",
      ...e
    });
  }
  static listPipelines(e) {
    return (e.client ?? v).get({
      url: "/umbraco/jumoo/api/v1/processing/ListPipelines/{status}",
      ...e
    });
  }
  static listPipelinesByStrategy(e) {
    return (e.client ?? v).get({
      url: "/umbraco/jumoo/api/v1/processing/ListPipelinesByStrategy/{strategy}/{status}",
      ...e
    });
  }
  static processPipeline(e) {
    return (e.client ?? v).post({
      url: "/umbraco/jumoo/api/v1/processing/ProcessPipeline/{id}",
      ...e
    });
  }
  static updatePipeline(e) {
    return (e.client ?? v).post({
      url: "/umbraco/jumoo/api/v1/processing/UpdatePipeline/{id}",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e?.headers
      }
    });
  }
}
class ue {
  static delete(e) {
    return (e.client ?? v).delete({
      url: "/umbraco/jumoo/api/v1/processing/DeleteQueue/{key}",
      ...e
    });
  }
  static listQueue(e) {
    return (e?.client ?? v).get({
      url: "/umbraco/jumoo/api/v1/processing/ListQueue",
      ...e
    });
  }
  /**
   * Peek an item from the queue
   */
  static peekItem(e) {
    return (e?.client ?? v).get({
      url: "/umbraco/jumoo/api/v1/processing/PeekItem",
      ...e
    });
  }
  /**
   * Takes an item off the queue, removes the schedule date and puts it back
   */
  static process(e) {
    return (e.client ?? v).post({
      url: "/umbraco/jumoo/api/v1/processing/ProcessQueue/{key}",
      ...e
    });
  }
}
const zs = {
  type: "modal",
  alias: "jumoo-processing-error-modal",
  name: "processing-error-modal",
  js: () => import("./error-modal.element-CHkyhxKe.js")
}, Vs = [zs], Fs = {
  type: "modal",
  alias: "jumoo-processing-modal",
  name: "processing-modal",
  js: () => import("./pipeline-modal.element-CQ0jFzVc.js")
}, Js = [Fs, ...Vs], Gs = {
  type: "workspace",
  kind: "routable",
  alias: Ze,
  name: "Processing pipeline workspace",
  api: () => import("./pipeline-workspace.context-CWpig-Ra.js"),
  meta: {
    entityType: $e
  }
}, Qs = [
  {
    alias: "Umb.Condition.WorkspaceAlias",
    match: Ze
  }
], Xs = [
  {
    type: "workspaceView",
    alias: "jumoo-processing-pipeline-workspace-default-view",
    name: "Processing pipeline workspace default view",
    js: () => import("./default-pipeline-view-CzfxRtJj.js"),
    weight: 300,
    meta: {
      label: "Pipeline",
      pathname: "pipeline",
      icon: "icon-stack"
    },
    conditions: Qs
  }
], Ks = [Gs, ...Xs], Ys = [
  {
    type: "localization",
    alias: "jumoo.pipeline.localization.en",
    name: "Pipeline translations(en)",
    weight: 0,
    meta: { culture: "en" },
    js: () => import("./en-TaZedfqj.js")
  }
], Zs = [...Ys], Re = {
  year: "numeric",
  month: "short",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric"
};
class en extends X {
  constructor(e) {
    super(e);
  }
  async list() {
    return (await ue.listQueue()).data;
  }
  async peek(e) {
    return (await ue.peekItem({
      query: {
        key: e
      }
    })).data;
  }
  async delete(e) {
    return (await ue.delete({
      path: {
        key: e
      }
    })).data;
  }
  async process(e) {
    return (await ue.process({
      path: {
        key: e
      }
    })).data;
  }
}
class tn extends X {
  constructor(e) {
    super(e), this.#s = new N(void 0), this.queue = this.#s.asObservable(), this.#e = new en(e);
  }
  #e;
  #s;
  async loadQueue() {
    var e = await this.#e.list();
    return this.#s.setValue(e), e;
  }
  async process(e) {
    await this.#e.process(e), await this.loadQueue();
  }
}
const In = new me(
  "JUMOO_QUEUE_CONTEXT"
);
var sn = Object.defineProperty, nn = Object.getOwnPropertyDescriptor, pt = (s) => {
  throw TypeError(s);
}, z = (s, e, t, o) => {
  for (var n = o > 1 ? void 0 : o ? nn(e, t) : e, i = s.length - 1, r; i >= 0; i--)
    (r = s[i]) && (n = (o ? r(e, t, n) : r(n)) || n);
  return o && n && sn(e, t, n), n;
}, on = (s, e, t) => e.has(s) || pt("Cannot " + t), rn = (s, e, t) => e.has(s) ? pt("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(s) : e.set(s, t), Ve = (s, e, t) => (on(s, e, "access private method"), t), ge, dt, gt;
let L = class extends x {
  constructor() {
    super(...arguments), rn(this, ge), this.showViewDetails = !0, this.hideProcess = !1, this.tableConfig = {
      allowSelection: !1,
      hideIcon: !1
    }, this.tableColumns = [
      // { name: 'Key', alias: 'key' },
      { name: "Note", alias: "note" },
      { name: "Processor", alias: "processor" },
      { name: "Strategy", alias: "strategy" },
      { name: "User", alias: "user" },
      { name: "Submitted", alias: "submitted" },
      { name: "Scheduled", alias: "scheduled" },
      { name: "Attempts", alias: "attempts" },
      { name: "Priority", alias: "priority" },
      { name: "Actions", alias: "actions" }
    ];
  }
  render() {
    if (!this.items) return M;
    const s = this.items.map((e) => {
      if (e)
        return {
          id: e.key,
          icon: "icon-layers",
          data: [
            {
              columnAlias: "key",
              value: e.key
            },
            {
              columnAlias: "priority",
              value: e.priority
            },
            {
              columnAlias: "processor",
              value: e.processor
            },
            {
              columnAlias: "strategy",
              value: e.strategy
            },
            {
              columnAlias: "submitted",
              value: this.localize.date(e.submitted, Re)
            },
            {
              columnAlias: "scheduled",
              value: e.scheduled ? this.localize.date(e.scheduled, Re) : ""
            },
            {
              columnAlias: "attempts",
              value: e.attempts
            },
            {
              columnAlias: "actions",
              value: d`${this.renderActions(e)}`
            },
            {
              columnAlias: "user",
              value: e.userName ?? ""
            },
            {
              columnAlias: "note",
              value: e.note
            }
          ]
        };
    }).filter((e) => e !== void 0);
    return d` <umb-table
			.items=${s}
			.config=${this.tableConfig}
			.columns=${this.tableColumns}
			.filter=${this.filter}></umb-table>`;
  }
  renderActions(s) {
    return d` <uui-button-group>
			${te(
      this.showViewDetails,
      () => d` <uui-button
						label="Details"
						color="default"
						look="primary"
						@click=${() => Ve(this, ge, gt).call(this, s)}></uui-button>`
    )}
			${te(
      !this.hideProcess,
      () => d` <uui-button
						label="Process"
						color="positive"
						look="outline"
						@click=${() => Ve(this, ge, dt).call(this, s)}></uui-button>`
    )}
		</uui-button-group>`;
  }
};
ge = /* @__PURE__ */ new WeakSet();
dt = function(s) {
  this.dispatchEvent(
    new CustomEvent("process-queue-item", {
      composed: !0,
      detail: {
        key: s.key
      }
    })
  );
};
gt = function(s) {
  this.dispatchEvent(
    new CustomEvent("view-queue-item", {
      composed: !0,
      detail: {
        key: s.key
      }
    })
  );
};
z([
  g({ type: Array })
], L.prototype, "items", 2);
z([
  g({ type: Boolean })
], L.prototype, "showViewDetails", 2);
z([
  g({ type: Boolean })
], L.prototype, "hideProcess", 2);
z([
  g({ type: Object })
], L.prototype, "tableConfig", 2);
z([
  g({ type: Array })
], L.prototype, "tableColumns", 2);
z([
  C()
], L.prototype, "filter", 2);
L = z([
  O("jumoo-queue-table")
], L);
var an = Object.defineProperty, cn = Object.getOwnPropertyDescriptor, Se = (s, e, t, o) => {
  for (var n = o > 1 ? void 0 : o ? cn(e, t) : e, i = s.length - 1, r; i >= 0; i--)
    (r = s[i]) && (n = (o ? r(e, t, n) : r(n)) || n);
  return o && n && an(e, t, n), n;
};
let J = class extends x {
  constructor() {
    super(), this.headline = "Processing Queue", this.loading = !0, this._queueContext = new tn(this), this.observe(this._queueContext.queue, (s) => {
      this.queue = s;
    });
  }
  async connectedCallback() {
    super.connectedCallback(), await this.onRefresh();
  }
  async onRefresh() {
    this.loading = !0, await this._queueContext.loadQueue(), this.loading = !1;
  }
  render() {
    return d`<uui-box style="--uui-box-default-padding: 0;" .headline=${this.headline}>
			<div slot="header-actions">
				<uui-button label="refresh" @click=${this.onRefresh} compact
					><uui-icon name="icon-refresh"></uui-icon
				></uui-button>
			</div>
			${te(
      this.loading,
      () => d`<uui-loader-bar
						animationDuration="1.5"
						style="color: black"></uui-loader-bar>`,
      () => this.renderTable()
    )}
		</uui-box>`;
  }
  renderTable() {
    return !this.queue || !this.queue.items.length ? d`<div class="emtpy">Nothing in the queue</div>` : d`<jumoo-queue-table
					.items=${this.queue.items}
					@process-queue-item=${this._onProcessQueueItem}></jumoo-queue-table>`;
  }
  async _onProcessQueueItem(s) {
    await this._queueContext.process(s.detail.key);
  }
};
J.styles = G`
		.emtpy {
			display: flex;
			justify-content: center;
			padding: 20px;
		}
	`;
Se([
  g({ type: String })
], J.prototype, "headline", 2);
Se([
  C()
], J.prototype, "queue", 2);
Se([
  C()
], J.prototype, "loading", 2);
J = Se([
  O("jumoo-queue-list")
], J);
const $n = (s, e) => {
  e.registerMany([...Js, ...Ks, ...Zs]), s.consumeContext(Fe, (t) => {
    if (t) {
      var o = t.getOpenApiConfiguration();
      v.setConfig({
        auth: o.token,
        baseUrl: o.base,
        credentials: o.credentials
      }), v.interceptors.request.use(async (n, i) => {
        const r = await t.getLatestToken();
        return n.headers.set("Authorization", `Bearer ${r}`), n;
      });
    }
  });
};
export {
  J as $,
  $s as A,
  j as B,
  $ as C,
  ve as D,
  Ts as E,
  it as F,
  is as G,
  W as H,
  De as I,
  ye as J,
  f as K,
  Es as L,
  p as M,
  c as N,
  b as O,
  En as P,
  ue as Q,
  y as R,
  Te as S,
  Oe as T,
  ne as U,
  vs as V,
  as as W,
  Gt as X,
  tn as Y,
  In as Z,
  L as _,
  w as a,
  Ze as b,
  nt as c,
  $e as d,
  Lt as e,
  Re as f,
  wn as g,
  we as h,
  se as i,
  U as j,
  V as k,
  fe as l,
  H as m,
  T as n,
  $n as o,
  yn as p,
  vn as q,
  Cn as r,
  Sn as s,
  Wt as t,
  E as u,
  st as v,
  qt as w,
  Pn as x,
  ot as y,
  Is as z
};
//# sourceMappingURL=index-DZ9N36G3.js.map
