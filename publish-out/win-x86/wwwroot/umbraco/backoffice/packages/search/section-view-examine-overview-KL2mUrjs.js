import { UmbTextStyles as f } from "@umbraco-cms/backoffice/style";
import { html as r, nothing as p, css as w, state as c, customElement as y } from "@umbraco-cms/backoffice/external/lit";
import { IndexerService as S, SearcherService as $, HealthStatusModel as u } from "@umbraco-cms/backoffice/external/backend-api";
import { UmbLitElement as E } from "@umbraco-cms/backoffice/lit-element";
import { tryExecute as b } from "@umbraco-cms/backoffice/resources";
var I = Object.defineProperty, k = Object.getOwnPropertyDescriptor, g = (e) => {
  throw TypeError(e);
}, s = (e, a, t, l) => {
  for (var n = l > 1 ? void 0 : l ? k(a, t) : a, d = e.length - 1, h; d >= 0; d--)
    (h = e[d]) && (n = (l ? h(a, t, n) : h(n)) || n);
  return l && n && I(a, t, n), n;
}, z = (e, a, t) => a.has(e) || g("Cannot " + t), M = (e, a, t) => a.has(e) ? g("Cannot add the same private member more than once") : a instanceof WeakSet ? a.add(e) : a.set(e, t), m = (e, a, t) => (z(e, a, "access private method"), t), o, x, _, v;
let i = class extends E {
  constructor() {
    super(...arguments), M(this, o), this._loadingIndexers = !1, this._loadingSearchers = !1;
  }
  connectedCallback() {
    super.connectedCallback(), this._getIndexers(), this._getSearchers();
  }
  async _getIndexers() {
    this._loadingIndexers = !0;
    const { data: e } = await b(this, S.getIndexer({ query: { take: 9999, skip: 0 } }));
    this._indexers = e?.items ?? [], this._loadingIndexers = !1;
  }
  async _getSearchers() {
    this._loadingSearchers = !0;
    const { data: e } = await b(this, $.getSearcher({ query: { take: 9999, skip: 0 } }));
    this._searchers = e?.items ?? [], this._loadingSearchers = !1;
  }
  render() {
    return r`
			<uui-box headline=${this.localize.term("examineManagement_indexers")} class="overview">
				<p>
					<strong><umb-localize key="examineManagement_manageIndexes">Manage Examine's indexes</umb-localize></strong
					><br />
					<umb-localize key="examineManagement_manageIndexesDescription"
						>Allows you to view the details of each index and provides some tools for managing the indexes</umb-localize
					>
				</p>
				${m(this, o, _).call(this)}
			</uui-box>
			<uui-box headline=${this.localize.term("examineManagement_searchers")}>
				<p>
					<strong><umb-localize key="examineManagement_configuredSearchers">Configured Searchers</umb-localize></strong
					><br />
					<umb-localize key="examineManagement_configuredSearchersDescription"
						>Shows properties and tools for any configured Searcher (i.e. such as a multi-index searcher)</umb-localize
					>
				</p>
				${m(this, o, v).call(this)}
			</uui-box>
		`;
  }
};
o = /* @__PURE__ */ new WeakSet();
x = function(e) {
  switch (e) {
    case u.HEALTHY:
      return r`<umb-icon name="icon-check color-green"></umb-icon>`;
    case u.CORRUPT:
    case u.UNHEALTHY:
      return r`<umb-icon name="icon-alert color-red"></umb-icon>`;
    case u.REBUILDING:
      return r`<umb-icon name="icon-time color-yellow"></umb-icon>`;
    default:
      return;
  }
};
_ = function() {
  return this._loadingIndexers ? r`<uui-loader></uui-loader>` : this._indexers ? r` <uui-table class="overview">
			${this._indexers.map((e) => r`
					<uui-table-row>
						<uui-table-cell style="width:0px"> ${m(this, o, x).call(this, e.healthStatus.status)} </uui-table-cell>
						<uui-table-cell>
							<a href="${window.location.href.replace(/\/+$/, "")}/index/${e.name}">${e.name}</a>
						</uui-table-cell>
					</uui-table-row>
				`)}
		</uui-table>` : p;
};
v = function() {
  return this._loadingSearchers ? r`<uui-loader></uui-loader>` : this._searchers ? r`
			<uui-table class="overview2">
				${this._searchers.map((e) => r`<uui-table-row>
							<uui-table-cell style="width:0px">
								<uui-icon-essentials>
									<uui-icon
										style="vertical-align: top"
										name="info"></uui-icon>
									</uui-icon>
								</uui-icon-essentials>
							</uui-table-cell>
						<uui-table-cell><a href="${window.location.href.replace(/\/+$/, "")}/searcher/${e.name}">${e.name}</a>
					</uui-table-cell>
					</uui-table-row>`)}
			</uui-table>
		` : p;
};
i.styles = [
  f,
  w`
			:host {
				display: block;
			}

			uui-box + uui-box {
				margin-top: var(--uui-size-space-5);
			}

			uui-box p {
				margin-top: 0;
			}

			a {
				color: var(--uui-color-text);
				background: transparent;
				border: none;
				text-decoration: underline;
				cursor: pointer;
			}

			uui-table-cell {
				line-height: 0;
				vertical-align: middle;
			}

			uui-table-row:last-child uui-table-cell {
				padding-bottom: 0;
			}

			.positive {
				color: var(--uui-color-positive);
			}

			.danger {
				color: var(--uui-color-danger);
			}

			.not-found-message {
				font-style: italic;
				color: var(--uui-color-text-alt);
			}
		`
];
s([
  c()
], i.prototype, "_indexers", 2);
s([
  c()
], i.prototype, "_searchers", 2);
s([
  c()
], i.prototype, "_loadingIndexers", 2);
s([
  c()
], i.prototype, "_loadingSearchers", 2);
i = s([
  y("umb-dashboard-examine-overview")
], i);
const H = i;
export {
  i as UmbDashboardExamineOverviewElement,
  H as default
};
//# sourceMappingURL=section-view-examine-overview-KL2mUrjs.js.map
