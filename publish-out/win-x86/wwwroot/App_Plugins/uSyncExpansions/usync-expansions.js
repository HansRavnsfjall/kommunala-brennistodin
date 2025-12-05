var _t = Object.defineProperty;
var Re = (e) => {
  throw TypeError(e);
};
var ft = (e, t, a) => t in e ? _t(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a;
var ge = (e, t, a) => ft(e, typeof t != "symbol" ? t + "" : t, a), Ne = (e, t, a) => t.has(e) || Re("Cannot " + a);
var c = (e, t, a) => (Ne(e, t, "read from private field"), a ? a.call(e) : t.get(e)), p = (e, t, a) => t.has(e) ? Re("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, a), h = (e, t, a, n) => (Ne(e, t, "write to private field"), n ? n.call(e, a) : t.set(e, a), a);
import { UMB_AUTH_CONTEXT as Et } from "@umbraco-cms/backoffice/auth";
import { property as J, state as E, customElement as b, nothing as v, html as l, css as x, when as xe, classMap as Ct, LitElement as De } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as le } from "@umbraco-cms/backoffice/lit-element";
import { TimeOptions as Rt, SyncRestoreRepository as Pe, RestoreService as P, uSyncRestore as d, SyncRestoreWorkspaceContext as gt, ChangeType as q, USYNC_LICENCE_CONTEXT_TOKEN as ke, SyncItemRepository as Nt, ItemsService as It, uSyncLicenceRepository as wt, uSyncLicenceSource as Lt, LicenceService as k } from "@jumoo/usync-expansions";
import { UmbControllerBase as D } from "@umbraco-cms/backoffice/class-api";
import { UmbContextToken as ue } from "@umbraco-cms/backoffice/context-api";
import { tryExecute as S } from "@umbraco-cms/backoffice/resources";
import { UMB_WORKSPACE_CONTEXT as Ot } from "@umbraco-cms/backoffice/workspace";
import { UmbObjectState as he } from "@umbraco-cms/backoffice/observable-api";
import { UMB_MODAL_MANAGER_CONTEXT as Q, UMB_CONFIRM_MODAL as _e } from "@umbraco-cms/backoffice/modal";
import { JUMOO_PROCESSING_DIALOG_MODAL as bt, JUMOO_PROCESSING_SIDEBAR_MEDIUM_MODAL as At, JumooQueueListElement as $t, JumooProcessingPipelineList as Tt } from "@jumoo/processing";
import { UmbElementMixin as Me } from "@umbraco-cms/backoffice/element-api";
import { UmbTextStyles as Ue } from "@umbraco-cms/backoffice/style";
import { UMB_CURRENT_USER_IS_ADMIN_CONDITION_ALIAS as xt } from "@umbraco-cms/backoffice/current-user";
import { UMB_NOTIFICATION_CONTEXT as Dt } from "@umbraco-cms/backoffice/notification";
var Pt = Object.defineProperty, kt = Object.getOwnPropertyDescriptor, ze = (e) => {
  throw TypeError(e);
}, Z = (e, t, a, n) => {
  for (var s = n > 1 ? void 0 : n ? kt(t, a) : t, i = e.length - 1, r; i >= 0; i--)
    (r = e[i]) && (s = (n ? r(t, a, s) : r(s)) || s);
  return n && s && Pt(t, a, s), s;
}, Mt = (e, t, a) => t.has(e) || ze("Cannot " + a), Ut = (e, t, a) => t.has(e) ? ze("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, a), Ie = (e, t, a) => (Mt(e, t, "access private method"), a), re, je, Ve;
let V = class extends le {
  constructor() {
    super(...arguments), Ut(this, re), this._tableConfig = {
      allowSelection: !1,
      hideIcon: !1
    }, this._tableColumns = [
      { name: "Created", alias: "created" },
      { name: "Name", alias: "name" },
      { name: "Source", alias: "action" },
      { name: "User", alias: "user" },
      { name: "", alias: "actions" }
    ];
  }
  render() {
    if (!this.restorePoints || this.restorePoints.length === 0) return v;
    const e = this.restorePoints.map((t) => {
      if (t)
        return {
          id: t.key,
          icon: "icon-pushpin",
          data: [
            {
              columnAlias: "created",
              value: this.localize.date(t.created, Rt)
            },
            { columnAlias: "name", value: t.name },
            { columnAlias: "action", value: t.action },
            { columnAlias: "user", value: t.user },
            { columnAlias: "actions", value: l`${this.renderActions(t)}` }
          ]
        };
    }).filter((t) => t !== void 0);
    return l`<umb-table
			.config=${this._tableConfig}
			.columns=${this._tableColumns}
			.items=${e}
			.filter=${this.filter}></umb-table>`;
  }
  renderActions(e) {
    return l` <uui-button
				compact
				label="restore"
				color="positive"
				look="default"
				@click=${() => Ie(this, re, Ve).call(this, e)}>
				<uui-icon name="icon-paper-plane"></uui-icon>
			</uui-button>

			<uui-button
				compact
				label="delete"
				color="danger"
				look="default"
				@click=${() => Ie(this, re, je).call(this, e)}>
				<uui-icon name="icon-trash"></uui-icon>
			</uui-button>`;
  }
};
re = /* @__PURE__ */ new WeakSet();
je = function(e) {
  this.dispatchEvent(new CustomEvent("delete-restore-point", { detail: e }));
};
Ve = function(e) {
  this.dispatchEvent(
    new CustomEvent("restore-restore-point", { detail: e })
  );
};
Z([
  J({ type: Array })
], V.prototype, "restorePoints", 2);
Z([
  E()
], V.prototype, "_tableConfig", 2);
Z([
  E()
], V.prototype, "_tableColumns", 2);
Z([
  E()
], V.prototype, "filter", 2);
V = Z([
  b("usync-restore-point-table")
], V);
const Ls = {
  workspace: "usync.restore.workspace",
  context: "usync.restore.workspace.context",
  entity: "usync-restore-entry",
  element: "usync-restore-workspace-element",
  icon: "icon-paper-plane",
  processing: {
    pipeline: "restorePointsPipeline",
    strategies: {
      create: "restorePointCreate",
      restore: "restorePointRestore",
      report: "restorePointReport",
      createAndRestore: "restorePointCreateAndRestore"
    }
  },
  steps: {
    restoreCreateStep: "usync-restore-create-config",
    restoreCreateComplete: "usync-restore-create-complete",
    restoreReportConfigStep: "usync-restore-report-config",
    restoreReportStep: "usync-restore-report"
  }
}, Os = {
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric"
};
var G;
class bs extends D {
  constructor(a) {
    super(a);
    p(this, G);
    h(this, G, new Pe(this)), this.provideContext(zt, this);
  }
  async getRestorePoint(a) {
    return await c(this, G).get(a);
  }
}
G = new WeakMap();
const zt = new ue(
  "usync-restore-context"
);
var R;
class As extends D {
  constructor(a) {
    super(a);
    p(this, R);
    h(this, R, a);
  }
  async clean() {
    return (await S(c(this, R), P.clean())).data;
  }
  async remove(a) {
    return (await S(c(this, R), P.remove({ query: { id: a } }))).data;
  }
  async getAll() {
    return (await S(c(this, R), P.getAll())).data;
  }
  async get(a) {
    return (await S(c(this, R), P.getRestorePoint({ query: { key: a } }))).data;
  }
  async getReport(a) {
    return (await S(c(this, R), P.getReport({ query: { id: a } }))).data;
  }
  async scan() {
    return (await S(c(this, R), P.scan())).data;
  }
}
R = new WeakMap();
var A, U;
class we extends D {
  constructor(a) {
    super(a);
    p(this, A);
    p(this, U);
    this.workspaceAlias = d.workspace, h(this, U, new he(void 0)), this.restorePoints = c(this, U).asObservable(), h(this, A, new Pe(this)), this.provideContext(He, this), this.provideContext(Ot, this), this.refresh();
  }
  getEntityType() {
    return d.entity;
  }
  async refresh() {
    const a = await c(this, A).getAll();
    a && c(this, U).setValue(a);
  }
  async remove(a) {
    await c(this, A).remove(a);
  }
  async scan() {
    await c(this, A).scan(), await this.refresh();
  }
}
A = new WeakMap(), U = new WeakMap();
const He = new ue("uSyncRestoreWorkspaceContext"), jt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  SyncRestoreWorkspaceContext: we,
  USYNC_RESTORE_WORKSPACE_CONTEXT: He,
  default: we
}, Symbol.toStringTag, { value: "Module" }));
var Vt = Object.defineProperty, Ht = Object.getOwnPropertyDescriptor, We = (e) => {
  throw TypeError(e);
}, Be = (e, t, a, n) => {
  for (var s = n > 1 ? void 0 : n ? Ht(t, a) : t, i = e.length - 1, r; i >= 0; i--)
    (r = e[i]) && (s = (n ? r(t, a, s) : r(s)) || s);
  return n && s && Vt(t, a, s), s;
}, fe = (e, t, a) => t.has(e) || We("Cannot " + a), L = (e, t, a) => (fe(e, t, "read from private field"), a ? a.call(e) : t.get(e)), Le = (e, t, a) => t.has(e) ? We("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, a), Wt = (e, t, a, n) => (fe(e, t, "write to private field"), t.set(e, a), a), w = (e, t, a) => (fe(e, t, "access private method"), a), f, C, Se, qe, Fe, Ge, Ee, Ye;
let H = class extends le {
  constructor() {
    super(), Le(this, C), Le(this, f), this.restorePoints = [], Wt(this, f, new gt(this)), this.observe(L(this, f).restorePoints, (e) => {
      e && (this.restorePoints = e);
    });
  }
  render() {
    return l`
			<umb-workspace-editor>
				<div slot="header" class="header">
					<h3>Restore points</h3>
					<small>A place you can come back to.</small>
				</div>
				<div slot="action-menu" class="action-menu">
					<uui-button
						color="default"
						look="outline"
						size="small"
						label="scan"
						@click=${w(this, C, Se)}
						><uui-icon name="icon-axis-rotation"></uui-icon> ${this.localize.term(
      "uSyncRestore_scan"
    )}</uui-button
					>
				</div>
				<umb-body-layout>
					<usync-licence-notice></usync-licence-notice>
					<div class="content">
						<div>
							<uui-button
								color="positive"
								look="outline"
								label="Create"
								@click=${w(this, C, qe)}
								>${this.localize.term("uSyncRestore_create")}</uui-button
							>
						</div>

						${this.renderTable()}
					</div></umb-body-layout
				></umb-workspace-editor
			>
		`;
  }
  renderIntro() {
    return l`
			<uui-box>
				<div slot="headline">${this.localize.term("uSyncRestore_title")}</div>
				<uui-button
						slot="header-actions"
						color="default"
						look="outline"
						size="small"
						label="scan"
						@click=${w(this, C, Se)}><uui-icon name="icon-axis-rotation"></uui-icon> ${this.localize.term("uSyncRestore_scan")}</uui-button>
				</div>
				<div>
					<umb-localize key="uSyncRestore_intro"></umb-localize>
				</div>
				<div class="create">
				</div>
			</uui-box>
		`;
  }
  renderTable() {
    var e;
    return ((e = this.restorePoints) == null ? void 0 : e.length) === 0 ? v : l`
			<uui-box
				.headline=${this.localize.term("uSyncRestore_restorePoints")}
				style="--uui-box-default-padding: 0;">
				<div slot="header-actions">
					<uui-button
						color="default"
						look="secondary"
						size="small"
						label="scan"
						@click=${w(this, C, Ge)}
						><uui-icon name="icon-paper-plane"></uui-icon> ${this.localize.term(
      "uSyncRestore_restoreLatest"
    )}</uui-button
					>
				</div>
				<usync-restore-point-table
					.restorePoints=${this.restorePoints}
					@delete-restore-point=${w(this, C, Ye)}
					@restore-restore-point=${w(this, C, Fe)}></usync-restore-point-table>
			</uui-box>
		`;
  }
};
f = /* @__PURE__ */ new WeakMap();
C = /* @__PURE__ */ new WeakSet();
Se = async function() {
  const e = await this.getContext(Q);
  if (!e) return;
  e.open(this, _e, {
    data: {
      headline: "Scan for restore points?",
      content: "Do you want to scan for new and removed restore points?",
      confirmLabel: "Scan",
      color: "positive"
    }
  }).onSubmit().then(async () => {
    L(this, f).scan();
  }).catch(() => {
  });
};
qe = async function() {
  const e = await this.getContext(Q);
  !e || !await e.open(this, bt, {
    data: {
      processor: d.processing.pipeline,
      strategy: d.processing.strategies.create,
      progressLabel: "Create",
      options: {
        $type: "RestorePointProcessingOptions",
        title: "New restore point",
        source: "manual"
      },
      headline: "Create a restore point"
    }
  }).onSubmit().catch(async (n) => {
    await L(this, f).refresh();
  }) || await L(this, f).refresh();
};
Fe = async function(e) {
  await w(this, C, Ee).call(this, e.detail);
};
Ge = async function() {
  if (!this.restorePoints) return;
  const e = this.restorePoints[0];
  e && await w(this, C, Ee).call(this, e);
};
Ee = async function(e) {
  const t = await this.getContext(Q);
  if (!t) return;
  const a = t.open(this, At, {
    data: {
      processor: d.processing.pipeline,
      strategy: d.processing.strategies.report,
      progressLabel: this.localize.term("uSyncRestore_restoreCheck"),
      debug: !1,
      options: {
        $type: "RestorePointProcessingOptions",
        key: e.key
      },
      headline: this.localize.term("uSyncRestore_restoreTitle")
    }
  });
  !a || !await a.onSubmit().catch(async (s) => {
    await L(this, f).refresh();
  }) || await L(this, f).refresh();
};
Ye = async function(e) {
  const t = e.detail;
  console.log("delete restore point", t);
  const a = await this.getContext(Q);
  if (!a) return;
  a.open(this, _e, {
    data: {
      headline: "Delete restore point",
      content: `do you want to delete the restore point "${t.name}"?`,
      confirmLabel: "Delete",
      color: "danger"
    }
  }).onSubmit().then(async () => {
    await L(this, f).remove(t.key), await L(this, f).refresh();
  }).catch(() => {
    console.log("cancel");
  });
};
H.styles = x`
		.create {
			display: flex;
			justify-content: center;
			font-size: 1.5em;
			padding: 20px;
		}

		.header h3 {
			margin: 0;
		}

		.action-menu {
			margin-right: var(--uui-size-space-4);
		}

		.content {
			display: flex;
			flex-direction: column;
			gap: var(--uui-size-space-4);
		}
	`;
Be([
  E()
], H.prototype, "restorePoints", 2);
H = Be([
  b("usync-restore-workspace-element")
], H);
const Bt = H, qt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Bt,
  get uSyncReatoreWorkspaceElement() {
    return H;
  }
}, Symbol.toStringTag, { value: "Module" }));
var Ft = Object.defineProperty, Gt = Object.getOwnPropertyDescriptor, Ke = (e) => {
  throw TypeError(e);
}, ee = (e, t, a, n) => {
  for (var s = n > 1 ? void 0 : n ? Gt(t, a) : t, i = e.length - 1, r; i >= 0; i--)
    (r = e[i]) && (s = (n ? r(t, a, s) : r(s)) || s);
  return n && s && Ft(t, a, s), s;
}, Yt = (e, t, a) => t.has(e) || Ke("Cannot " + a), Kt = (e, t, a) => t.has(e) ? Ke("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, a), Xt = (e, t, a) => (Yt(e, t, "access private method"), a), ye, Xe;
let T = class extends le {
  constructor() {
    super(...arguments), Kt(this, ye), this.showAll = !1, this.headline = "Change report", this.isReport = !0;
  }
  countChanges() {
    var t;
    let e = 0;
    return (t = this.results) == null || t.forEach((a) => {
      a.change !== q.NO_CHANGE && e++;
    }), e;
  }
  render() {
    const e = this.countChanges();
    return l` ${this.renderChangeSummary(e)}
			<uui-box .headline=${this.headline}>
				<div slot="header-actions">${this.renderToggle()}</div>
				${xe(this.showAll || e > 0, () => this.renderTable())}
			</uui-box>`;
  }
  renderToggle() {
    return l`
			<uui-toggle
				.label=${this.localize.term("uSync_showAll")}
				labelPosition="left"
				?checked=${this.showAll}
				@change=${() => {
      this.showAll = !this.showAll;
    }}></uui-toggle>
		`;
  }
  renderChangeSummary(e) {
    return this.isReport ? this.renderReportSummary(e) : this.renderResultSummary(e);
  }
  renderReportSummary(e) {
    var t;
    return e > 0 ? l`<div class="change-msg">
					<h4>
						${this.localize.term("uSyncReport_pendingChanges", [
      e,
      ((t = this.results) == null ? void 0 : t.length) ?? 0
    ])}
					</h4>
				</div>` : l`<div class="change-msg positive">
					<h4>${this.localize.term("uSyncReport_noChanges")}</h4>
					<p>${this.localize.term("uSyncReport_noChangesDescription")}</p>
				</div>`;
  }
  renderResultSummary(e) {
    var t;
    return e > 0 ? l`<div class="change-msg">
					<h4>
						${this.localize.term("uSyncReport_resultChanges", [
      e,
      ((t = this.results) == null ? void 0 : t.length) ?? 0
    ])}
					</h4>
				</div>` : l`<div class="change-msg positive">
					<h4>${this.localize.term("uSyncReport_noChanges")}</h4>
					<p>${this.localize.term("uSyncReport_resultNoChange")}</p>
				</div>`;
  }
  renderTable() {
    return l`
			<uui-table> ${this.renderTableHeader()} ${this.renderRows()} </uui-table>
		`;
  }
  renderTableHeader() {
    return l`
			<uui-table-head>
				<uui-table-head-cell class="icon-cell" .noPadding=${!0}>
					<!-- <umb-icon name="icon-checkbox-dotted"></umb-icon> -->
				</uui-table-head-cell>
				<uui-table-head-cell style="--uui-table-cell-padding: var(--uui-size-space-2);">
					<umb-localize key="uSync_changeName">Name</umb-localize>
				</uui-table-head-cell>
			</uui-table-head>
		`;
  }
  renderRows() {
    var t;
    const e = (t = this.results) == null ? void 0 : t.map((a) => {
      if (!this.showAll && a.change == q.NO_CHANGE) return v;
      const n = a.change == q.NO_CHANGE ? "icon-trafic" : a.success ? "icon-check color-green" : "icon-wrong color-red";
      return l`
				<uui-table-row
					class=${Ct({ changerow: a.change != q.NO_CHANGE })}>
					<uui-table-cell class="icon-cell" .noPadding=${!0}>
						<umb-icon .name=${n}></umb-icon>
					</uui-table-cell>
					<uui-table-cell
						@click=${() => Xt(this, ye, Xe).call(this, a)}
						.clipText=${!0}
						style="--uui-table-cell-padding: var(--uui-size-space-2);">
						<div>${a.name}</div>
						<div class="item-detail">
							<div>${a.itemType}</div>
							<div>${a.change}</div>
						</div>
					</uui-table-cell>
				</uui-table-row>
			`;
    });
    return l`${e}`;
  }
};
ye = /* @__PURE__ */ new WeakSet();
Xe = async function(e) {
  e.change != q.NO_CHANGE;
};
T.styles = x`
		.changerow {
			cursor: pointer;
		}

		.icon-cell {
			width: var(--uui-size-8);
		}

		.item-detail {
			display: flex;
			justify-content: space-between;
			font-size: smaller;
			color: var(--uui-color-disabled-contrast);
		}

		.change-msg {
			padding: var(--uui-size-3);
			margin-bottom: var(--uui-size-3);
		}

		.change-msg.positive {
			background-color: var(--uui-color-positive);
			color: #fff;
			box-shadow: var(--uui-shadow-depth-1);
		}

		.change-msg > * {
			margin: var(--uui-size-4) 0;
		}

		uui-box {
			margin-bottom: var(--uui-size-3);
		}

		uui-table-row:hover {
			background-color: var(--uui-color-disabled);
		}
	`;
ee([
  E()
], T.prototype, "showAll", 2);
ee([
  J({ type: String })
], T.prototype, "headline", 2);
ee([
  J({ type: Array })
], T.prototype, "results", 2);
ee([
  J({ type: Boolean })
], T.prototype, "isReport", 2);
T = ee([
  b("usync-report-summary-view")
], T);
const Jt = [
  {
    type: "localization",
    alias: "usync-expansions-enus",
    name: "uSync Expansins English",
    weight: 0,
    meta: { culture: "en" },
    js: () => import("./en-pwLx-GW3.js")
  }
], Qt = [...Jt], Zt = [
  {
    type: "localization",
    alias: "usync.complete.en",
    name: "uSyncComplete Localizations English",
    weight: 0,
    js: () => import("./en-DOUYNjE7.js"),
    meta: {
      culture: "en"
    }
  }
], ea = [...Zt], Je = x`
	.licence-alert {
		padding: 20px;
		border-radius: var(--uui-button-border-radius, var(--uui-border-radius, 3px));
	}

	uui-icon {
		padding-right: 10px;
		font-size: var(--uui-type-h4-size);
	}

	.valid {
		background-color: var(--uui-color-positive);
		color: var(--uui-color-positive-contrast);
	}

	.invalid,
	.expired {
		background-color: var(--uui-color-danger);
		color: var(--uui-color-danger-contrast);
	}

	.trial {
		background-color: var(--uui-color-warning);
		color: var(--uui-color-warning-contrast);
	}

	.licence-alert a {
		color: var(--uui-color-positive-contrast) !important;
	}
`;
var ta = Object.defineProperty, aa = Object.getOwnPropertyDescriptor, Qe = (e, t, a, n) => {
  for (var s = n > 1 ? void 0 : n ? aa(t, a) : t, i = e.length - 1, r; i >= 0; i--)
    (r = e[i]) && (s = (n ? r(t, a, s) : r(s)) || s);
  return n && s && ta(t, a, s), s;
};
let ie = class extends Me(De) {
  constructor() {
    super(...arguments), this.licenceStatus = void 0;
  }
  render() {
    var a, n, s;
    if (this.licenceStatus == null) return v;
    const e = (a = this.licenceStatus) == null ? void 0 : a.status.toLocaleLowerCase(), t = ((n = this.licenceStatus) == null ? void 0 : n.status) === "Valid" ? "icon-check" : "icon-alert";
    return l` <div class="licence-alert ${e}">
			<uui-icon .name=${t}></uui-icon> ${((s = this.licenceStatus) == null ? void 0 : s.message) ?? "licenece is valid"}
		</div>`;
  }
};
ie.styles = [
  Ue,
  Je,
  x`
			:host {
				display: block;
				margin-bottom: 10px;
			}
		`
];
Qe([
  J({ type: Object })
], ie.prototype, "licenceStatus", 2);
ie = Qe([
  b("usync-licence-status")
], ie);
var sa = Object.defineProperty, na = Object.getOwnPropertyDescriptor, Ze = (e, t, a, n) => {
  for (var s = n > 1 ? void 0 : n ? na(t, a) : t, i = e.length - 1, r; i >= 0; i--)
    (r = e[i]) && (s = (n ? r(t, a, s) : r(s)) || s);
  return n && s && sa(t, a, s), s;
};
let oe = class extends le {
  constructor() {
    super(), this.licenceStatus = void 0, this.consumeContext(ke, (e) => {
      e && this.observe(e.licenceStatus, async (t) => {
        this.licenceStatus || await e.getLicenceStatus(), this.licenceStatus = t;
      });
    });
  }
  render() {
    var s;
    if (this.licenceStatus == null) return v;
    if (((s = this.licenceStatus) == null ? void 0 : s.status) == "Valid") return v;
    const e = this.licenceStatus.status, t = `usynccomplete_licence${e}`, a = e.toLowerCase();
    return l`<div class="licence-alert ${a}">
			<uui-icon .name=${e === "Invalid" ? "icon-wrong" : "icon-alert"}></uui-icon>
			<umb-localize key="${t}"></umb-localize>
		</div>`;
  }
};
oe.styles = [
  Je,
  x`
			.licence-alert {
				display: block;
			}
		`
];
Ze([
  E()
], oe.prototype, "licenceStatus", 2);
oe = Ze([
  b("usync-licence-notice")
], oe);
const ra = {
  type: "globalContext",
  alias: "usync.licence.context",
  name: "uSync licence context",
  js: () => Promise.resolve().then(() => ts)
}, ia = {
  type: "workspaceView",
  alias: "usync-extensions-licence-view",
  name: "uSync Licence view",
  js: () => Promise.resolve().then(() => is),
  weight: 100,
  meta: {
    label: "Licence",
    pathname: "licence",
    icon: "icon-certificate"
  },
  conditions: [
    {
      alias: "Umb.Condition.WorkspaceAlias",
      match: "usync.workspace"
    },
    {
      alias: xt
    }
  ]
}, oa = [ra, ia, ...ea], ca = {
  type: "globalContext",
  alias: "usync.items.context",
  name: "uSync Items Context",
  js: () => Promise.resolve().then(() => es)
}, la = [ca], ua = [
  {
    type: "jumoo-process-step",
    alias: d.steps.restoreCreateStep,
    name: "Create restore point step",
    weight: 100,
    js: () => import("./restore-create-element-BK1DafJX.js"),
    elementName: d.steps.restoreCreateStep
  },
  {
    type: "jumoo-process-step",
    alias: d.steps.restoreCreateComplete,
    name: "Restore complete",
    weight: 200,
    js: () => import("./restore-create-complete-BOotxyXE.js"),
    elementName: d.steps.restoreCreateComplete
  },
  {
    type: "jumoo-process-step",
    alias: d.steps.restoreReportConfigStep,
    name: "Restore step",
    weight: 300,
    js: () => import("./restore-report-config-element-D0aviESe.js"),
    elementName: d.steps.restoreReportConfigStep
  },
  {
    type: "jumoo-process-step",
    alias: d.steps.restoreReportStep,
    name: "Restore report",
    weight: 400,
    js: () => import("./restore-report-element-CPHjU2bk.js"),
    elementName: d.steps.restoreReportStep
  }
], da = [...ua], ma = [
  {
    type: "localization",
    alias: "usync-restore-enus",
    name: "uSync Restore English (US)",
    weight: 0,
    meta: { culture: "en" },
    js: () => import("./en-C7Dp0is4.js")
  }
], pa = [...ma], et = d.workspace, ha = {
  type: "usync-menuItem",
  alias: "usync.restore.menu.item",
  name: "restore",
  weight: 10,
  meta: {
    label: "Restore",
    icon: d.icon,
    entityType: d.element,
    menus: ["usync.menu"]
  }
}, Sa = {
  type: "workspaceContext",
  alias: d.context,
  name: "uSync Restore",
  js: () => Promise.resolve().then(() => jt),
  conditions: [
    {
      alias: "Umb.Condition.WorkspaceAlias",
      match: et
    }
  ]
}, ya = {
  type: "workspace",
  alias: et,
  name: "uSync Restore",
  js: () => Promise.resolve().then(() => qt),
  meta: {
    entityType: d.element
  }
}, va = [
  ha,
  Sa,
  ya,
  ...da,
  ...pa
], _a = "usync-background-workspace", tt = "usync-background", fa = {
  type: "usync-menuItem",
  alias: "usync.background.menu.item",
  name: "background",
  weight: 8,
  meta: {
    label: "Background",
    icon: "icon-circuits",
    entityType: tt,
    menus: ["usync.menu"]
  }
}, Ea = {
  type: "workspace",
  alias: _a,
  name: "uSync Background",
  js: () => import("./background-workspace-element-Ud4eGMJj.js"),
  meta: {
    entityType: tt
  }
}, Ca = [fa, Ea];
var Ra = async (e, t) => {
  let a = typeof t == "function" ? await t(e) : t;
  if (a) return e.scheme === "bearer" ? `Bearer ${a}` : e.scheme === "basic" ? `Basic ${btoa(a)}` : a;
}, ga = { bodySerializer: (e) => JSON.stringify(e, (t, a) => typeof a == "bigint" ? a.toString() : a) }, Na = (e) => {
  switch (e) {
    case "label":
      return ".";
    case "matrix":
      return ";";
    case "simple":
      return ",";
    default:
      return "&";
  }
}, Ia = (e) => {
  switch (e) {
    case "form":
      return ",";
    case "pipeDelimited":
      return "|";
    case "spaceDelimited":
      return "%20";
    default:
      return ",";
  }
}, wa = (e) => {
  switch (e) {
    case "label":
      return ".";
    case "matrix":
      return ";";
    case "simple":
      return ",";
    default:
      return "&";
  }
}, at = ({ allowReserved: e, explode: t, name: a, style: n, value: s }) => {
  if (!t) {
    let o = (e ? s : s.map((u) => encodeURIComponent(u))).join(Ia(n));
    switch (n) {
      case "label":
        return `.${o}`;
      case "matrix":
        return `;${a}=${o}`;
      case "simple":
        return o;
      default:
        return `${a}=${o}`;
    }
  }
  let i = Na(n), r = s.map((o) => n === "label" || n === "simple" ? e ? o : encodeURIComponent(o) : de({ allowReserved: e, name: a, value: o })).join(i);
  return n === "label" || n === "matrix" ? i + r : r;
}, de = ({ allowReserved: e, name: t, value: a }) => {
  if (a == null) return "";
  if (typeof a == "object") throw new Error("Deeply-nested arrays/objects aren’t supported. Provide your own `querySerializer()` to handle these.");
  return `${t}=${e ? a : encodeURIComponent(a)}`;
}, st = ({ allowReserved: e, explode: t, name: a, style: n, value: s }) => {
  if (s instanceof Date) return `${a}=${s.toISOString()}`;
  if (n !== "deepObject" && !t) {
    let o = [];
    Object.entries(s).forEach(([W, I]) => {
      o = [...o, W, e ? I : encodeURIComponent(I)];
    });
    let u = o.join(",");
    switch (n) {
      case "form":
        return `${a}=${u}`;
      case "label":
        return `.${u}`;
      case "matrix":
        return `;${a}=${u}`;
      default:
        return u;
    }
  }
  let i = wa(n), r = Object.entries(s).map(([o, u]) => de({ allowReserved: e, name: n === "deepObject" ? `${a}[${o}]` : o, value: u })).join(i);
  return n === "label" || n === "matrix" ? i + r : r;
}, La = /\{[^{}]+\}/g, Oa = ({ path: e, url: t }) => {
  let a = t, n = t.match(La);
  if (n) for (let s of n) {
    let i = !1, r = s.substring(1, s.length - 1), o = "simple";
    r.endsWith("*") && (i = !0, r = r.substring(0, r.length - 1)), r.startsWith(".") ? (r = r.substring(1), o = "label") : r.startsWith(";") && (r = r.substring(1), o = "matrix");
    let u = e[r];
    if (u == null) continue;
    if (Array.isArray(u)) {
      a = a.replace(s, at({ explode: i, name: r, style: o, value: u }));
      continue;
    }
    if (typeof u == "object") {
      a = a.replace(s, st({ explode: i, name: r, style: o, value: u }));
      continue;
    }
    if (o === "matrix") {
      a = a.replace(s, `;${de({ name: r, value: u })}`);
      continue;
    }
    let W = encodeURIComponent(o === "label" ? `.${u}` : u);
    a = a.replace(s, W);
  }
  return a;
}, nt = ({ allowReserved: e, array: t, object: a } = {}) => (n) => {
  let s = [];
  if (n && typeof n == "object") for (let i in n) {
    let r = n[i];
    if (r != null) if (Array.isArray(r)) {
      let o = at({ allowReserved: e, explode: !0, name: i, style: "form", value: r, ...t });
      o && s.push(o);
    } else if (typeof r == "object") {
      let o = st({ allowReserved: e, explode: !0, name: i, style: "deepObject", value: r, ...a });
      o && s.push(o);
    } else {
      let o = de({ allowReserved: e, name: i, value: r });
      o && s.push(o);
    }
  }
  return s.join("&");
}, ba = (e) => {
  var a;
  if (!e) return "stream";
  let t = (a = e.split(";")[0]) == null ? void 0 : a.trim();
  if (t) {
    if (t.startsWith("application/json") || t.endsWith("+json")) return "json";
    if (t === "multipart/form-data") return "formData";
    if (["application/", "audio/", "image/", "video/"].some((n) => t.startsWith(n))) return "blob";
    if (t.startsWith("text/")) return "text";
  }
}, Aa = async ({ security: e, ...t }) => {
  for (let a of e) {
    let n = await Ra(a, t.auth);
    if (!n) continue;
    let s = a.name ?? "Authorization";
    switch (a.in) {
      case "query":
        t.query || (t.query = {}), t.query[s] = n;
        break;
      case "cookie":
        t.headers.append("Cookie", `${s}=${n}`);
        break;
      case "header":
      default:
        t.headers.set(s, n);
        break;
    }
    return;
  }
}, Oe = (e) => $a({ baseUrl: e.baseUrl, path: e.path, query: e.query, querySerializer: typeof e.querySerializer == "function" ? e.querySerializer : nt(e.querySerializer), url: e.url }), $a = ({ baseUrl: e, path: t, query: a, querySerializer: n, url: s }) => {
  let i = s.startsWith("/") ? s : `/${s}`, r = (e ?? "") + i;
  t && (r = Oa({ path: t, url: r }));
  let o = a ? n(a) : "";
  return o.startsWith("?") && (o = o.substring(1)), o && (r += `?${o}`), r;
}, be = (e, t) => {
  var n;
  let a = { ...e, ...t };
  return (n = a.baseUrl) != null && n.endsWith("/") && (a.baseUrl = a.baseUrl.substring(0, a.baseUrl.length - 1)), a.headers = rt(e.headers, t.headers), a;
}, rt = (...e) => {
  let t = new Headers();
  for (let a of e) {
    if (!a || typeof a != "object") continue;
    let n = a instanceof Headers ? a.entries() : Object.entries(a);
    for (let [s, i] of n) if (i === null) t.delete(s);
    else if (Array.isArray(i)) for (let r of i) t.append(s, r);
    else i !== void 0 && t.set(s, typeof i == "object" ? JSON.stringify(i) : i);
  }
  return t;
}, pe = class {
  constructor() {
    ge(this, "_fns");
    this._fns = [];
  }
  clear() {
    this._fns = [];
  }
  getInterceptorIndex(e) {
    return typeof e == "number" ? this._fns[e] ? e : -1 : this._fns.indexOf(e);
  }
  exists(e) {
    let t = this.getInterceptorIndex(e);
    return !!this._fns[t];
  }
  eject(e) {
    let t = this.getInterceptorIndex(e);
    this._fns[t] && (this._fns[t] = null);
  }
  update(e, t) {
    let a = this.getInterceptorIndex(e);
    return this._fns[a] ? (this._fns[a] = t, e) : !1;
  }
  use(e) {
    return this._fns = [...this._fns, e], this._fns.length - 1;
  }
}, Ta = () => ({ error: new pe(), request: new pe(), response: new pe() }), xa = nt({ allowReserved: !1, array: { explode: !0, style: "form" }, object: { explode: !0, style: "deepObject" } }), Da = { "Content-Type": "application/json" }, it = (e = {}) => ({ ...ga, headers: Da, parseAs: "auto", querySerializer: xa, ...e }), Pa = (e = {}) => {
  let t = be(it(), e), a = () => ({ ...t }), n = (r) => (t = be(t, r), a()), s = Ta(), i = async (r) => {
    let o = { ...t, ...r, fetch: r.fetch ?? t.fetch ?? globalThis.fetch, headers: rt(t.headers, r.headers) };
    o.security && await Aa({ ...o, security: o.security }), o.body && o.bodySerializer && (o.body = o.bodySerializer(o.body)), (o.body === void 0 || o.body === "") && o.headers.delete("Content-Type");
    let u = Oe(o), W = { redirect: "follow", ...o }, I = new Request(u, W);
    for (let y of s.request._fns) y && (I = await y(I, o));
    let vt = o.fetch, _ = await vt(I);
    for (let y of s.response._fns) y && (_ = await y(_, I, o));
    let te = { request: I, response: _ };
    if (_.ok) {
      if (_.status === 204 || _.headers.get("Content-Length") === "0") return { data: {}, ...te };
      let y = (o.parseAs === "auto" ? ba(_.headers.get("Content-Type")) : o.parseAs) ?? "json";
      if (y === "stream") return { data: _.body, ...te };
      let se = await _[y]();
      return y === "json" && (o.responseValidator && await o.responseValidator(se), o.responseTransformer && (se = await o.responseTransformer(se))), { data: se, ...te };
    }
    let ae = await _.text();
    try {
      ae = JSON.parse(ae);
    } catch {
    }
    let B = ae;
    for (let y of s.error._fns) y && (B = await y(ae, _, I, o));
    if (B = B || {}, o.throwOnError) throw B;
    return { error: B, ...te };
  };
  return { buildUrl: Oe, connect: (r) => i({ ...r, method: "CONNECT" }), delete: (r) => i({ ...r, method: "DELETE" }), get: (r) => i({ ...r, method: "GET" }), getConfig: a, head: (r) => i({ ...r, method: "HEAD" }), interceptors: s, options: (r) => i({ ...r, method: "OPTIONS" }), patch: (r) => i({ ...r, method: "PATCH" }), post: (r) => i({ ...r, method: "POST" }), put: (r) => i({ ...r, method: "PUT" }), request: i, setConfig: n, trace: (r) => i({ ...r, method: "TRACE" }) };
};
const m = Pa(it({
  baseUrl: "http://localhost:36520"
}));
var ka = /* @__PURE__ */ ((e) => (e.STANDARD = "Standard", e.VAR_ARGS = "VarArgs", e.ANY = "Any", e.HAS_THIS = "HasThis", e.EXPLICIT_THIS = "ExplicitThis", e))(ka || {}), Ma = /* @__PURE__ */ ((e) => (e.NO_CHANGE = "NoChange", e.CREATE = "Create", e.UPDATE = "Update", e.DELETE = "Delete", e.ERROR = "Error", e.WARNING = "Warning", e))(Ma || {}), Ua = /* @__PURE__ */ ((e) => (e.NO_CHANGE = "NoChange", e.CREATE = "Create", e.IMPORT = "Import", e.EXPORT = "Export", e.UPDATE = "Update", e.DELETE = "Delete", e.WILL_CHANGE = "WillChange", e.INFORMATION = "Information", e.ROLLEDBACK = "Rolledback", e.FAIL = "Fail", e.IMPORT_FAIL = "ImportFail", e.MISMATCH = "Mismatch", e.PARENT_MISSING = "ParentMissing", e.HIDDEN = "Hidden", e.CLEAN = "Clean", e.REMOVED = "Removed", e))(Ua || {}), za = /* @__PURE__ */ ((e) => (e.NONE = "None", e.INCLUDE_CHILDREN = "IncludeChildren", e.INCLUDE_ANCESTORS = "IncludeAncestors", e.INCLUDE_DEPENDENCIES = "IncludeDependencies", e.INCLUDE_VIEWS = "IncludeViews", e.INCLUDE_MEDIA = "IncludeMedia", e.INCLUDE_LINKED = "IncludeLinked", e.INCLUDE_MEDIA_FILES = "IncludeMediaFiles", e.INCLUDE_CONFIG = "IncludeConfig", e.ADJACENT_ONLY = "AdjacentOnly", e.ROOT_SYNC = "RootSync", e.INCLUDE_CONTENTS = "IncludeContents", e.PUBLISHED_DEPENDENCIES = "PublishedDependencies", e))(za || {}), ja = /* @__PURE__ */ ((e) => (e.NONE = "None", e.SPECIAL_NAME = "SpecialName", e.RT_SPECIAL_NAME = "RTSpecialName", e.RESERVED_MASK = "ReservedMask", e))(ja || {}), Va = /* @__PURE__ */ ((e) => (e.DEFAULT = "Default", e.INFO = "Info", e.ERROR = "Error", e.SUCCESS = "Success", e.WARNING = "Warning", e))(Va || {}), Ha = /* @__PURE__ */ ((e) => (e.PRIVATE_SCOPE = "PrivateScope", e.PRIVATE = "Private", e.FAM_AND_ASSEM = "FamANDAssem", e.ASSEMBLY = "Assembly", e.FAMILY = "Family", e.FAM_OR_ASSEM = "FamORAssem", e.PUBLIC = "Public", e.FIELD_ACCESS_MASK = "FieldAccessMask", e.STATIC = "Static", e.INIT_ONLY = "InitOnly", e.LITERAL = "Literal", e.NOT_SERIALIZED = "NotSerialized", e.HAS_FIELD_RVA = "HasFieldRVA", e.SPECIAL_NAME = "SpecialName", e.RT_SPECIAL_NAME = "RTSpecialName", e.HAS_FIELD_MARSHAL = "HasFieldMarshal", e.PINVOKE_IMPL = "PinvokeImpl", e.HAS_DEFAULT = "HasDefault", e.RESERVED_MASK = "ReservedMask", e))(Ha || {}), Wa = /* @__PURE__ */ ((e) => (e.NONE = "None", e.COVARIANT = "Covariant", e.CONTRAVARIANT = "Contravariant", e.VARIANCE_MASK = "VarianceMask", e.REFERENCE_TYPE_CONSTRAINT = "ReferenceTypeConstraint", e.NOT_NULLABLE_VALUE_TYPE_CONSTRAINT = "NotNullableValueTypeConstraint", e.DEFAULT_CONSTRUCTOR_CONSTRAINT = "DefaultConstructorConstraint", e.SPECIAL_CONSTRAINT_MASK = "SpecialConstraintMask", e.ALLOW_BY_REF_LIKE = "AllowByRefLike", e))(Wa || {}), Ba = /* @__PURE__ */ ((e) => (e.SEQUENTIAL = "Sequential", e.EXPLICIT = "Explicit", e.AUTO = "Auto", e))(Ba || {}), qa = /* @__PURE__ */ ((e) => (e.LOADED = "Loaded", e.BAD_FORMAT = "BadFormat", e.INVALID = "Invalid", e.BAD_HOST = "BadHost", e.EXPIRED = "Expired", e.TRIAL_EXPIRED = "TrialExpired", e.UNVERIFIED = "Unverified", e.MISSING = "Missing", e.VALID = "Valid", e.TRIAL = "Trial", e))(qa || {}), Fa = /* @__PURE__ */ ((e) => (e.NONE = "None", e.DOMAIN = "Domain", e.SUBSCRIPTION = "Subscription", e.TRIAL = "Trial", e.LIMITED_EXPIRY = "LimitedExpiry", e.AGENCY = "Agency", e.PARTNER = "Partner", e))(Fa || {}), Ga = /* @__PURE__ */ ((e) => (e.CONSTRUCTOR = "Constructor", e.EVENT = "Event", e.FIELD = "Field", e.METHOD = "Method", e.PROPERTY = "Property", e.TYPE_INFO = "TypeInfo", e.CUSTOM = "Custom", e.NESTED_TYPE = "NestedType", e.ALL = "All", e))(Ga || {}), Ya = /* @__PURE__ */ ((e) => (e.PRIVATE_SCOPE = "PrivateScope", e.REUSE_SLOT = "ReuseSlot", e.PRIVATE = "Private", e.FAM_AND_ASSEM = "FamANDAssem", e.ASSEMBLY = "Assembly", e.FAMILY = "Family", e.FAM_OR_ASSEM = "FamORAssem", e.PUBLIC = "Public", e.MEMBER_ACCESS_MASK = "MemberAccessMask", e.UNMANAGED_EXPORT = "UnmanagedExport", e.STATIC = "Static", e.FINAL = "Final", e.VIRTUAL = "Virtual", e.HIDE_BY_SIG = "HideBySig", e.NEW_SLOT = "NewSlot", e.VTABLE_LAYOUT_MASK = "VtableLayoutMask", e.CHECK_ACCESS_ON_OVERRIDE = "CheckAccessOnOverride", e.ABSTRACT = "Abstract", e.SPECIAL_NAME = "SpecialName", e.RT_SPECIAL_NAME = "RTSpecialName", e.PINVOKE_IMPL = "PinvokeImpl", e.HAS_SECURITY = "HasSecurity", e.REQUIRE_SEC_OBJECT = "RequireSecObject", e.RESERVED_MASK = "ReservedMask", e))(Ya || {}), Ka = /* @__PURE__ */ ((e) => (e.IL = "IL", e.MANAGED = "Managed", e.NATIVE = "Native", e.OPTIL = "OPTIL", e.CODE_TYPE_MASK = "CodeTypeMask", e.RUNTIME = "Runtime", e.MANAGED_MASK = "ManagedMask", e.UNMANAGED = "Unmanaged", e.NO_INLINING = "NoInlining", e.FORWARD_REF = "ForwardRef", e.SYNCHRONIZED = "Synchronized", e.NO_OPTIMIZATION = "NoOptimization", e.PRESERVE_SIG = "PreserveSig", e.AGGRESSIVE_INLINING = "AggressiveInlining", e.AGGRESSIVE_OPTIMIZATION = "AggressiveOptimization", e.INTERNAL_CALL = "InternalCall", e.MAX_METHOD_IMPL_VAL = "MaxMethodImplVal", e))(Ka || {}), Xa = /* @__PURE__ */ ((e) => (e.NONE = "None", e.IN = "In", e.OUT = "Out", e.LCID = "Lcid", e.RETVAL = "Retval", e.OPTIONAL = "Optional", e.HAS_DEFAULT = "HasDefault", e.HAS_FIELD_MARSHAL = "HasFieldMarshal", e.RESERVED3 = "Reserved3", e.RESERVED4 = "Reserved4", e.RESERVED_MASK = "ReservedMask", e))(Xa || {}), Ja = /* @__PURE__ */ ((e) => (e.NONE = "None", e.SPECIAL_NAME = "SpecialName", e.RT_SPECIAL_NAME = "RTSpecialName", e.HAS_DEFAULT = "HasDefault", e.RESERVED2 = "Reserved2", e.RESERVED3 = "Reserved3", e.RESERVED4 = "Reserved4", e.RESERVED_MASK = "ReservedMask", e))(Ja || {}), Qa = /* @__PURE__ */ ((e) => (e.NONE = "None", e.LEVEL1 = "Level1", e.LEVEL2 = "Level2", e))(Qa || {}), Za = /* @__PURE__ */ ((e) => (e.NOT_PUBLIC = "NotPublic", e.AUTO_LAYOUT = "AutoLayout", e.ANSI_CLASS = "AnsiClass", e.CLASS = "Class", e.PUBLIC = "Public", e.NESTED_PUBLIC = "NestedPublic", e.NESTED_PRIVATE = "NestedPrivate", e.NESTED_FAMILY = "NestedFamily", e.NESTED_ASSEMBLY = "NestedAssembly", e.NESTED_FAM_AND_ASSEM = "NestedFamANDAssem", e.VISIBILITY_MASK = "VisibilityMask", e.NESTED_FAM_OR_ASSEM = "NestedFamORAssem", e.SEQUENTIAL_LAYOUT = "SequentialLayout", e.EXPLICIT_LAYOUT = "ExplicitLayout", e.LAYOUT_MASK = "LayoutMask", e.INTERFACE = "Interface", e.CLASS_SEMANTICS_MASK = "ClassSemanticsMask", e.ABSTRACT = "Abstract", e.SEALED = "Sealed", e.SPECIAL_NAME = "SpecialName", e.RT_SPECIAL_NAME = "RTSpecialName", e.IMPORT = "Import", e.SERIALIZABLE = "Serializable", e.WINDOWS_RUNTIME = "WindowsRuntime", e.UNICODE_CLASS = "UnicodeClass", e.AUTO_CLASS = "AutoClass", e.STRING_FORMAT_MASK = "StringFormatMask", e.CUSTOM_FORMAT_CLASS = "CustomFormatClass", e.HAS_SECURITY = "HasSecurity", e.RESERVED_MASK = "ReservedMask", e.BEFORE_FIELD_INIT = "BeforeFieldInit", e.CUSTOM_FORMAT_MASK = "CustomFormatMask", e))(Za || {});
class $s {
  static hasRootFiles(t) {
    return ((t == null ? void 0 : t.client) ?? m).get({
      url: "/umbraco/usync/api/v1/Complete/HasRootFiles",
      ...t
    });
  }
}
class Ts {
  static getActionView(t) {
    return ((t == null ? void 0 : t.client) ?? m).get({
      url: "/umbraco/usync/api/v1/Complete/GetActionViewModel",
      ...t
    });
  }
  static getSyncItem(t) {
    return ((t == null ? void 0 : t.client) ?? m).get({
      url: "/umbraco/usync/api/v1/Complete/GetSyncItem",
      ...t
    });
  }
}
class xs {
  static checkLegacy(t) {
    return ((t == null ? void 0 : t.client) ?? m).get({
      url: "/umbraco/usync/api/v1/Complete/CheckLegacy",
      ...t
    });
  }
  static getLicence(t) {
    return ((t == null ? void 0 : t.client) ?? m).get({
      url: "/umbraco/usync/api/v1/Complete/GetLicence",
      ...t
    });
  }
  static getLicenceStatus(t) {
    return ((t == null ? void 0 : t.client) ?? m).get({
      url: "/umbraco/usync/api/v1/Complete/GetLicenceStatus",
      ...t
    });
  }
  static isLicenced(t) {
    return ((t == null ? void 0 : t.client) ?? m).get({
      url: "/umbraco/usync/api/v1/Complete/IsLicenced",
      ...t
    });
  }
  static saveLicence(t) {
    return ((t == null ? void 0 : t.client) ?? m).post({
      url: "/umbraco/usync/api/v1/Complete/SaveLicence",
      ...t,
      headers: {
        "Content-Type": "application/json",
        ...t == null ? void 0 : t.headers
      }
    });
  }
}
class Ds {
  static clean(t) {
    return ((t == null ? void 0 : t.client) ?? m).get({
      url: "/umbraco/usync/api/v1/Complete/Clean",
      ...t
    });
  }
  static getRestorePoint(t) {
    return ((t == null ? void 0 : t.client) ?? m).get({
      url: "/umbraco/usync/api/v1/Complete/Get",
      ...t
    });
  }
  static getAll(t) {
    return ((t == null ? void 0 : t.client) ?? m).get({
      url: "/umbraco/usync/api/v1/Complete/GetAll",
      ...t
    });
  }
  static getReport(t) {
    return ((t == null ? void 0 : t.client) ?? m).get({
      url: "/umbraco/usync/api/v1/Complete/GetReport",
      ...t
    });
  }
  static remove(t) {
    return ((t == null ? void 0 : t.client) ?? m).get({
      url: "/umbraco/usync/api/v1/Complete/Remove",
      ...t
    });
  }
  static scan(t) {
    return ((t == null ? void 0 : t.client) ?? m).get({
      url: "/umbraco/usync/api/v1/Complete/Scan",
      ...t
    });
  }
}
var Y;
class Ae extends D {
  constructor(a) {
    super(a);
    p(this, Y);
    h(this, Y, new Nt(this)), this.provideContext(ot, this);
  }
  async getSyncItem(a, n) {
    return (await c(this, Y).GetSyncItem(a, n)).data;
  }
}
Y = new WeakMap();
const ot = new ue(
  "SyncItemContext"
), es = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  SYNC_ITEM_CONTEXT_TOKEN: ot,
  SyncItemContext: Ae,
  default: Ae
}, Symbol.toStringTag, { value: "Module" }));
var K;
class Ps extends D {
  constructor(a) {
    super(a);
    p(this, K);
    h(this, K, a);
  }
  /**
   * @description get the sync item representation of an item
   * @param entityType the entity type of the item
   * @param id they "key" for the item
   * @returns a SyncItem (which as the udi in it.)
   */
  async GetSyncItem(a, n) {
    return await S(
      c(this, K),
      It.getSyncItem({
        query: {
          entityType: a,
          id: n
        }
      })
    );
  }
}
K = new WeakMap();
var $, X, z, j;
class $e extends D {
  constructor(a) {
    super(a);
    p(this, $);
    p(this, X);
    p(this, z);
    p(this, j);
    h(this, z, new he(void 0)), this.licence = c(this, z).asObservable(), h(this, j, new he(void 0)), this.licenceStatus = c(this, j).asObservable(), this.consumeContext(Dt, (n) => {
      h(this, X, n);
    }), h(this, $, new wt(this)), this.provideContext(ct, this);
  }
  async refresh() {
    await this.loadLicence(), await this.getLicenceStatus();
  }
  async saveLicence(a) {
    var s;
    const { data: n } = await c(this, $).saveLicence(a);
    n && (await this.loadLicence(), await this.refresh(), (s = c(this, X)) == null || s.peek("positive", {
      data: {
        headline: "Licence saved",
        message: "Licence has been saved"
      }
    }));
  }
  async loadLicence() {
    const { data: a } = await c(this, $).getLicence();
    a && c(this, z).setValue(a);
  }
  async getLicenceStatus() {
    const { data: a } = await c(this, $).getLicenceStatus();
    a && c(this, j).setValue(a);
  }
}
$ = new WeakMap(), X = new WeakMap(), z = new WeakMap(), j = new WeakMap();
const ct = new ue(
  "uSyncLicenceContext"
), ts = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  USYNC_LICENCE_CONTEXT_TOKEN: ct,
  default: $e,
  uSyncLicenceContext: $e
}, Symbol.toStringTag, { value: "Module" }));
var as = Object.defineProperty, ss = Object.getOwnPropertyDescriptor, lt = (e) => {
  throw TypeError(e);
}, me = (e, t, a, n) => {
  for (var s = n > 1 ? void 0 : n ? ss(t, a) : t, i = e.length - 1, r; i >= 0; i--)
    (r = e[i]) && (s = (n ? r(t, a, s) : r(s)) || s);
  return n && s && as(t, a, s), s;
}, Ce = (e, t, a) => t.has(e) || lt("Cannot " + a), ut = (e, t, a) => (Ce(e, t, "read from private field"), a ? a.call(e) : t.get(e)), Te = (e, t, a) => t.has(e) ? lt("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, a), ns = (e, t, a, n) => (Ce(e, t, "write to private field"), t.set(e, a), a), ne = (e, t, a) => (Ce(e, t, "access private method"), a), F, M, dt, mt, pt, ht;
let O = class extends Me(De) {
  constructor() {
    super(), Te(this, M), Te(this, F), this.licence = {
      key: "key",
      domains: "domains"
    }, this.licenceStatus = void 0, this.consumeContext(ke, (e) => {
      e && (ns(this, F, e), e.refresh(), this.observe(e.licence, (t) => {
        this.licence = {
          key: (t == null ? void 0 : t.key) ?? "",
          domains: (t == null ? void 0 : t.domains) ?? ""
        }, this.requestUpdate("licence");
      }), this.observe(e.licenceStatus, (t) => {
        this.licenceStatus = t, this.requestUpdate("licenceStatus");
      }));
    });
  }
  connectedCallback() {
    super.connectedCallback();
  }
  render() {
    return l`
			<umb-body-layout>
				<div class="layout">
					${this.renderStatus()} ${this.renderDetails()} ${this.renderSubscription()}
					${this.renderExpiration()}
				</div></umb-body-layout
			>
		`;
  }
  renderStatus() {
    return l`
			<usync-licence-status .licenceStatus=${this.licenceStatus}></usync-licence-status>
		`;
  }
  renderDetails() {
    var e;
    return this.licenceStatus ? l`
					<uui-box headline="uSync.Complete.Licence">
						<div slot="header-actions">
							<uui-button
								type="button"
								look="outline"
								color="danger"
								label="Clear"
								@click=${ne(this, M, ht)}></uui-button>
						</div>
						<div class="details">
							<umb-property-layout
								label="Domains"
								alias="domains"
								description="Domains licence applys to">
								<div slot="editor">
									<uui-input
										label="domains"
										@input=${ne(this, M, mt)}
										.value=${this.licence.domains}
										.readonly=${((e = this.licenceStatus) == null ? void 0 : e.licenceType) === "Subscription"}></uui-input>
								</div>
							</umb-property-layout>

							<umb-property-layout
								label="Licence Key"
								alias="key"
								description="Key for licence">
								<div slot="editor">
									<uui-input
										label="key"
										@input=${ne(this, M, pt)}
										.value=${this.licence.key}></uui-input>
								</div>
							</umb-property-layout>

							<div class="actions">
								<uui-button
									look="primary"
									color="positive"
									label="Save"
									.state=${this.saveState}
									@click=${ne(this, M, dt)}></uui-button>
							</div>
						</div>
					</uui-box>
				` : v;
  }
  renderSubscription() {
    var t, a;
    return ((t = this.licenceStatus) == null ? void 0 : t.licenceType) !== "Subscription" ? v : (a = this.licenceStatus) != null && a.expires ? new Date(this.licenceStatus.expires) >= /* @__PURE__ */ new Date("9999-12-30") ? v : l`<uui-box headline="uSync.Complete.Subscription">
			<umb-localize key="usynccomplete_licenceSubscriptionInfo"></umb-localize>
			<uui-button
				look="secondary"
				color="positive"
				href="https://jumoo.co.uk/resend?sub=${this.licence.key}"
				target="_blank"
				rel="noopener noreferrer"
				>Request subscription details</uui-button
			>
		</uui-box>` : v;
  }
  renderExpiration() {
    var n;
    if (!((n = this.licenceStatus) != null && n.expires)) return v;
    const e = new Date(this.licenceStatus.expires);
    if (e >= /* @__PURE__ */ new Date("9999-12-30")) return v;
    const t = /* @__PURE__ */ new Date(), a = Math.ceil(
      (e.getTime() - t.getTime()) / (1e3 * 60 * 60 * 24)
    );
    return e < t ? l`<uui-box class="alert alert-danger">
				<umb-localize key="usynccomplete_licenceExpired"></umb-localize>
			</uui-box>` : l`<uui-box
			class="alert ${a <= 60 && !this.licenceStatus.autoRenews ? "alert-warning" : "alert-default"}"
		">
		<div class="alert-content">
			<div>
			<umb-localize
				key="usynccomplete_licenceExpires"
				.args=${[e.toDateString()]}></umb-localize>
			<umb-localize
				key="usynccomplete_licenceDaysLeft"
				.args=${[a]}></umb-localize>
				</div>

				<div>
			${xe(
      this.licenceStatus.autoRenews,
      () => l`<umb-icon name="icon-check"></umb-icon
						><umb-localize key="usynccomplete_licenceAutoRenews"></umb-localize>`,
      () => l`<umb-icon name="icon-alarm-clock"></umb-icon
						><umb-localize key="usynccomplete_licenceNotAutoRenews"></umb-localize>`
    )}</div>
			</div>
		</uui-box>`;
  }
};
F = /* @__PURE__ */ new WeakMap();
M = /* @__PURE__ */ new WeakSet();
dt = async function() {
  var e;
  this.saveState = "waiting", await ((e = ut(this, F)) == null ? void 0 : e.saveLicence(this.licence)), this.saveState = "success";
};
mt = function(e) {
  const t = e.target.value;
  this.licence.domains = t, this.requestUpdate("licence");
};
pt = function(e) {
  const t = e.target.value;
  this.licence.key = t;
};
ht = async function() {
  const e = await this.getContext(Q);
  if (!e) return;
  e.open(this, _e, {
    data: {
      headline: this.localize.term("usynccomplete_licenceClearHeading"),
      content: this.localize.term("usynccomplete_licenceClearContent"),
      confirmLabel: this.localize.term("general_clear"),
      color: "danger"
    }
  }).onSubmit().then(async () => {
    var a;
    await ((a = ut(this, F)) == null ? void 0 : a.saveLicence({ key: "", domains: "" })), this.requestUpdate("licence");
  }).catch(() => {
  });
};
O.styles = [
  Ue,
  x`
			.layout {
				display: flex;
				flex-direction: column;
				gap: var(--uui-size-space-4);
			}

			uui-input {
				width: 100%;
			}

			.actions {
				padding-left: calc(200px + var(--uui-size-layout-2));
			}

			.alert-content {
				display: flex;
				justify-content: space-between;
			}

			.alert-content > div {
				display: flex;
				gap: 10px;
			}

			.alert-danger {
				background-color: var(--uui-color-danger);
				color: var(--uui-color-danger-contrast);
			}

			.alert-default {
				background-color: var(--uui-color-default);
				color: var(--uui-color-default-contrast);
			}

			.alert-warning {
				background-color: var(--uui-color-warning);
				color: var(--uui-color-warning-contrast);
			}
		`
];
me([
  E()
], O.prototype, "saveState", 2);
me([
  E()
], O.prototype, "licence", 2);
me([
  E()
], O.prototype, "licenceStatus", 2);
O = me([
  b("usync-licence-view")
], O);
const rs = O, is = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: rs,
  get uSyncLicenceViewElement() {
    return O;
  }
}, Symbol.toStringTag, { value: "Module" }));
var g;
class ks extends D {
  constructor(a) {
    super(a);
    p(this, g);
    this.product = "uSync.Complete", this.version = "15.0.0", h(this, g, new Lt(this));
  }
  async checkLegacy() {
    return c(this, g).checkLegacy(this.product, this.version);
  }
  async getLicence() {
    return c(this, g).getLicence(this.product, this.version);
  }
  async getLicenceInfo() {
    return c(this, g).getLicenceInfo(this.product, this.version);
  }
  async getLicenceStatus() {
    return c(this, g).getLicenceStatus(this.product, this.version);
  }
  async isLicenced() {
    return c(this, g).isLicenced(this.product, this.version);
  }
  async saveLicence(a) {
    return c(this, g).saveLicence(a);
  }
}
g = new WeakMap();
var N;
class Ms {
  constructor(t) {
    p(this, N);
    h(this, N, t);
  }
  async checkLegacy(t, a) {
    return await S(
      c(this, N),
      k.checkLegacy({ query: { product: t, version: a } })
    );
  }
  async getLicence(t, a) {
    return await S(
      c(this, N),
      k.getLicence({ query: { product: t, version: a } })
    );
  }
  async getLicenceInfo(t, a) {
    return await S(
      c(this, N),
      k.getLicence({ query: { product: t, version: a } })
    );
  }
  async getLicenceStatus(t, a) {
    return await S(
      c(this, N),
      k.getLicenceStatus({ query: { product: t, version: a } })
    );
  }
  async isLicenced(t, a) {
    return await S(
      c(this, N),
      k.isLicenced({ query: { product: t, version: a } })
    );
  }
  async saveLicence(t) {
    return await S(c(this, N), k.saveLicence({ body: t }));
  }
}
N = new WeakMap();
var os = Object.defineProperty, cs = Object.getOwnPropertyDescriptor, St = (e, t, a, n) => {
  for (var s = n > 1 ? void 0 : n ? cs(t, a) : t, i = e.length - 1, r; i >= 0; i--)
    (r = e[i]) && (s = (n ? r(t, a, s) : r(s)) || s);
  return n && s && os(t, a, s), s;
};
let ce = class extends $t {
  constructor() {
    super(...arguments), this._tableColumns = [
      { name: "Note", alias: "note" },
      { name: "Source", alias: "processor" },
      { name: "User", alias: "user" },
      { name: "Scheduled", alias: "scheduled" },
      { name: "Actions", alias: "actions" }
    ];
  }
  renderTable() {
    return !this.queue || this.queue.items.length === 0 ? l`<div class="empty">No items in the queue</div>` : l`<jumoo-queue-table
					.items=${this.queue.items}
					.tableColumns=${this._tableColumns}
					@process-queue-item=${this._onProcessQueueItem}
					@view-queue-item=${this._viewQueueItem}></jumoo-queue-table>`;
  }
  _viewQueueItem(e) {
    console.log("view", e.detail);
  }
};
ce.styles = x`
		.empty {
			display: flex;
			justify-content: center;
			padding: 20px;
		}
	`;
St([
  E()
], ce.prototype, "_tableColumns", 2);
ce = St([
  b("usync-pending-list")
], ce);
var ls = Object.defineProperty, us = Object.getOwnPropertyDescriptor, yt = (e, t, a, n) => {
  for (var s = n > 1 ? void 0 : n ? us(t, a) : t, i = e.length - 1, r; i >= 0; i--)
    (r = e[i]) && (s = (n ? r(t, a, s) : r(s)) || s);
  return n && s && ls(t, a, s), s;
};
let ve = class extends Tt {
  constructor() {
    super(...arguments), this.tableColumns = [
      { name: "Alias", alias: "alias" },
      // { name: 'Strategy', alias: 'strategy' },
      { name: "State", alias: "state" },
      { name: "Action", alias: "action" },
      { name: "Background", alias: "background" },
      // { name: 'Scheduled', alias: 'scheduled' },
      { name: "Actions", alias: "actions" }
    ];
  }
  renderListPipelines() {
    return !this.pipelines || this.pipelines.length === 0 ? l`<div class="emtpy">Nothing with status ${this.status}</div>` : l`<jumoo-pipelines-table
					.pipelines=${this.pipelines}
					.hideDelete=${this.hideDelete}
					.tableColumns=${this.tableColumns}
					@view-pipeline=${this.onViewPipeline}
					@delete-pipeline=${this.onDeletePipeline}></jumoo-pipelines-table>`;
  }
};
yt([
  E()
], ve.prototype, "tableColumns", 2);
ve = yt([
  b("usync-process-list")
], ve);
const Us = (e, t) => {
  t.registerMany([
    ...oa,
    ...la,
    ...va,
    ...Qt,
    ...Ca
  ]), t.exclude("usync.workspace.addons"), e.consumeContext(Et, (a) => {
    if (!a) return;
    const n = a.getOpenApiConfiguration();
    m.setConfig({
      baseUrl: n.base,
      credentials: n.credentials
    }), m.interceptors.request.use(async (s, i) => {
      const r = await a.getLatestToken();
      return s.headers.set("Authorization", `Bearer ${r}`), s;
    });
  });
};
export {
  ka as CallingConventions,
  Ma as ChangeDetailType,
  Ua as ChangeType,
  za as DependencyFlags,
  ja as EventAttributes,
  Va as EventMessageTypeModel,
  Ha as FieldAttributes,
  $s as FilesService,
  Wa as GenericParameterAttributes,
  Ts as ItemsService,
  Ba as LayoutKind,
  xs as LicenceService,
  qa as LicenceStatus,
  Fa as LicenceType,
  Ga as MemberTypes,
  Ya as MethodAttributes,
  Ka as MethodImplAttributes,
  Xa as ParameterAttributes,
  Ja as PropertyAttributes,
  Ds as RestoreService,
  ot as SYNC_ITEM_CONTEXT_TOKEN,
  Qa as SecurityRuleSet,
  Ae as SyncItemContext,
  Ps as SyncItemRepository,
  bs as SyncRestoreContext,
  As as SyncRestoreRepository,
  we as SyncRestoreWorkspaceContext,
  Os as TimeOptions,
  Za as TypeAttributes,
  ct as USYNC_LICENCE_CONTEXT_TOKEN,
  zt as USYNC_RESTORE_CONTEXT,
  He as USYNC_RESTORE_WORKSPACE_CONTEXT,
  Us as onInit,
  ce as uSyncBackgroundPendingListElement,
  $e as uSyncLicenceContext,
  ks as uSyncLicenceRepository,
  Ms as uSyncLicenceSource,
  O as uSyncLicenceViewElement,
  ve as uSyncProcessListElement,
  H as uSyncReatoreWorkspaceElement,
  T as uSyncResportSummaryView,
  Ls as uSyncRestore
};
//# sourceMappingURL=usync-expansions.js.map
