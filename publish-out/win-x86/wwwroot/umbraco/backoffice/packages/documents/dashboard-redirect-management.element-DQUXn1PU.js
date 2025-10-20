import { html as n, nothing as $, css as L, property as v, state as c, query as k, customElement as N } from "@umbraco-cms/backoffice/external/lit";
import { umbConfirmModal as U } from "@umbraco-cms/backoffice/modal";
import { UmbLitElement as q } from "@umbraco-cms/backoffice/lit-element";
import { RedirectManagementService as h, RedirectStatusModel as _ } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecute as d } from "@umbraco-cms/backoffice/resources";
import { UmbTextStyles as A } from "@umbraco-cms/backoffice/style";
var B = Object.defineProperty, O = Object.getOwnPropertyDescriptor, D = (e) => {
  throw TypeError(e);
}, s = (e, i, a, u) => {
  for (var o = u > 1 ? void 0 : u ? O(i, a) : i, b = e.length - 1, g; b >= 0; b--)
    (g = e[b]) && (o = (u ? g(i, a, o) : g(o)) || o);
  return u && o && B(i, a, o), o;
}, j = (e, i, a) => i.has(e) || D("Cannot " + a), W = (e, i, a) => i.has(e) ? D("Cannot add the same private member more than once") : i instanceof WeakSet ? i.add(e) : i.set(e, a), r = (e, i, a) => (j(e, i, "access private method"), a), t, z, p, w, E, x, P, y, m, f, R, T, S, M, C;
let l = class extends q {
  constructor() {
    super(...arguments), W(this, t), this.itemsPerPage = 20, this.page = 1, this._trackerEnabled = !0, this._total = 0;
  }
  connectedCallback() {
    super.connectedCallback(), r(this, t, z).call(this), r(this, t, p).call(this);
  }
  // Renders
  render() {
    return n` <div id="redirect-actions">
				${this._trackerEnabled ? n`<div id="search-wrapper">
								<uui-input
									id="search"
									placeholder="${this.localize.term("redirectUrls_originalUrl")}"
									label="${this.localize.term("redirectUrls_originalUrl")}"
									@keypress=${r(this, t, P)}></uui-input>
								<uui-button
									look="outline"
									label="${this.localize.term("general_search")}"
									@click=${r(this, t, y)}
									.state=${this._buttonState}>
									${this.localize.term("general_search")}
								</uui-button>
							</div>
							<uui-button
								look="outline"
								label="${this.localize.term("redirectUrls_disableUrlTracker")}"
								@click=${r(this, t, m)}>
								${this.localize.term("redirectUrls_disableUrlTracker")}
							</uui-button>` : n`<div></div>
							<uui-button
								look="outline"
								color="positive"
								label="${this.localize.term("redirectUrls_enableUrlTracker")}"
								@click=${r(this, t, m)}>
								${this.localize.term("redirectUrls_enableUrlTracker")}
							</uui-button>`}
			</div>
			${this._redirectData?.length ? n`<uui-box id="redirect-wrapper" style="--uui-box-default-padding:0">
						${this._trackerEnabled ? "" : n`<div id="grey-out"></div>`} ${r(this, t, S).call(this)}
					</uui-box>` : this._filter !== void 0 ? r(this, t, R).call(this) : r(this, t, T).call(this)}
			${r(this, t, C).call(this)}`;
  }
};
t = /* @__PURE__ */ new WeakSet();
z = async function() {
  const { data: e } = await d(this, h.getRedirectManagementStatus());
  e && e.status && (this._trackerEnabled = e.status === _.ENABLED);
};
p = async function(e = void 0) {
  const i = this.page * this.itemsPerPage - this.itemsPerPage, { data: a } = await d(
    this,
    h.getRedirectManagement({ query: { filter: e, take: this.itemsPerPage, skip: i } })
  );
  a && (this._total = a?.total, this._redirectData = a?.items, e !== void 0 && (this._buttonState = "success"));
};
w = function(e) {
  this.page !== e.target.current && (this.page = e.target.current, r(this, t, p).call(this));
};
E = async function(e) {
  e.id && (await U(this, {
    headline: "Delete",
    content: n`
				<div style="width:300px">
					<p>${this.localize.term("redirectUrls_redirectRemoveWarning")}</p>
					${this.localize.term("redirectUrls_originalUrl")}: <strong>${e.originalUrl}</strong><br />
					${this.localize.term("redirectUrls_redirectedTo")}: <strong>${e.destinationUrl}</strong>
				</div>
			`,
    color: "danger",
    confirmLabel: "Delete"
  }), r(this, t, x).call(this, e.id));
};
x = async function(e) {
  const { error: i } = await d(this, h.deleteRedirectManagementById({ path: { id: e } }));
  i || (this._redirectData = this._redirectData?.filter((a) => a.id !== e));
};
P = function(e) {
  e.key === "Enter" && r(this, t, y).call(this);
};
y = function() {
  this._buttonState = "waiting", this._filter = this._search?.value ?? "", this._pagination && (this._pagination.current = 1), this.page = 1, r(this, t, p).call(this, this._search.value);
};
m = async function() {
  if (!this._trackerEnabled) {
    r(this, t, f).call(this);
    return;
  }
  await U(this, {
    headline: `${this.localize.term("redirectUrls_disableUrlTracker")}`,
    content: `${this.localize.term("redirectUrls_confirmDisable")}`,
    color: "danger",
    confirmLabel: "Disable"
  }), r(this, t, f).call(this);
};
f = async function() {
  const e = this._trackerEnabled ? _.DISABLED : _.ENABLED, { error: i } = await d(
    this,
    h.postRedirectManagementStatus({ query: { status: e } })
  );
  i || (this._trackerEnabled = !this._trackerEnabled);
};
R = function() {
  return n`<uui-box>
			<strong>No redirects matching this search criteria</strong>
			<p>Double check your search for any error or spelling mistakes.</p>
		</uui-box>`;
};
T = function() {
  return n`<uui-box>
			<strong>${this.localize.term("redirectUrls_noRedirects")}</strong>
			<p>${this.localize.term("redirectUrls_noRedirectsDescription")}</p>
		</uui-box>`;
};
S = function() {
  return n`<uui-table>
			<uui-table-head>
				<uui-table-head-cell style="width:10%;">${this.localize.term("redirectUrls_culture")}</uui-table-head-cell>
				<uui-table-head-cell>${this.localize.term("redirectUrls_originalUrl")}</uui-table-head-cell>
				<uui-table-head-cell style="width:10%;"></uui-table-head-cell>
				<uui-table-head-cell>${this.localize.term("redirectUrls_redirectedTo")}</uui-table-head-cell>
				<uui-table-head-cell style="width:10%;">${this.localize.term("general_actions")}</uui-table-head-cell>
			</uui-table-head>
			${r(this, t, M).call(this)}
		</uui-table>`;
};
M = function() {
  return n`${this._redirectData?.map((e) => n` <uui-table-row>
				<uui-table-cell> ${e.culture || "*"} </uui-table-cell>
				<uui-table-cell>
					<a href="${e.originalUrl || "#"}" target="_blank">
						<span>${e.originalUrl}</span>
						<uui-icon name="icon-out"></uui-icon>
					</a>
				</uui-table-cell>
				<uui-table-cell>
					<uui-icon name="icon-arrow-right"></uui-icon>
				</uui-table-cell>
				<uui-table-cell>
					<a href="${e.destinationUrl || "#"}" target="_blank">
						<span>${e.destinationUrl}</span>
						<uui-icon name="icon-out"></uui-icon>
					</a>
				</uui-table-cell>
				<uui-table-cell>
					<uui-action-bar style="justify-self: left;">
						<uui-button
							label="Delete"
							look="secondary"
							.disabled=${!this._trackerEnabled}
							@click=${() => r(this, t, E).call(this, e)}>
							<uui-icon name="delete"></uui-icon>
						</uui-button>
					</uui-action-bar>
				</uui-table-cell>
			</uui-table-row>`)}`;
};
C = function() {
  if (!this._total) return $;
  const e = Math.ceil(this._total / this.itemsPerPage);
  return e <= 1 ? $ : n`<div class="pagination">
			<uui-pagination .total=${e} @change=${r(this, t, w)}></uui-pagination>
		</div>`;
};
l.styles = [
  A,
  L`
			:host {
				display: flex;
				flex-direction: column;
				gap: var(--uui-size-4);
				padding: var(--uui-size-layout-1);
			}

			#redirect-actions {
				display: flex;
				justify-content: space-between;
			}

			#search-wrapper {
				display: flex;
				gap: var(--uui-size-4);
			}

			#redirect-wrapper {
				position: relative;
				display: block;
			}
			#redirect-wrapper #grey-out {
				position: absolute;
				inset: 0;
				background-color: var(--uui-color-surface-alt);
				opacity: 0.7;
				z-index: 1;
			}

			uui-pagination {
				display: inline-block;
			}

			.pagination {
				display: flex;
				justify-content: center;
				margin-top: var(--uui-size-space-5);
			}

			uui-table-cell a:has(span, uui-icon) {
				display: inline-flex;
				align-items: center;
				gap: var(--uui-size-2);
			}
		`
];
s([
  v({ type: Number, attribute: "items-per-page" })
], l.prototype, "itemsPerPage", 2);
s([
  v({ type: Number })
], l.prototype, "page", 2);
s([
  c()
], l.prototype, "_trackerEnabled", 2);
s([
  c()
], l.prototype, "_total", 2);
s([
  c()
], l.prototype, "_redirectData", 2);
s([
  c()
], l.prototype, "_buttonState", 2);
s([
  c()
], l.prototype, "_filter", 2);
s([
  k("#search")
], l.prototype, "_search", 2);
s([
  k("uui-pagination")
], l.prototype, "_pagination", 2);
l = s([
  N("umb-dashboard-redirect-management")
], l);
const J = l;
export {
  l as UmbDashboardRedirectManagementElement,
  J as default
};
//# sourceMappingURL=dashboard-redirect-management.element-DQUXn1PU.js.map
