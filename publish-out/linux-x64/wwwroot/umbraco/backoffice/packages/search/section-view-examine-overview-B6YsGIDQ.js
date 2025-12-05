import { UmbTextStyles as x } from "@umbraco-cms/backoffice/style";
import { html as a, nothing as m, css as _, state as u, customElement as v } from "@umbraco-cms/backoffice/external/lit";
import { IndexerService as f, SearcherService as w, HealthStatusModel as l } from "@umbraco-cms/backoffice/external/backend-api";
import { UmbLitElement as y } from "@umbraco-cms/backoffice/lit-element";
import { tryExecute as b } from "@umbraco-cms/backoffice/resources";
var S = Object.defineProperty, $ = Object.getOwnPropertyDescriptor, p = (e) => {
  throw TypeError(e);
}, o = (e, r, t, s) => {
  for (var n = s > 1 ? void 0 : s ? $(r, t) : r, c = e.length - 1, d; c >= 0; c--)
    (d = e[c]) && (n = (s ? d(r, t, n) : d(n)) || n);
  return s && n && S(r, t, n), n;
}, E = (e, r, t) => r.has(e) || p("Cannot " + t), I = (e, r, t) => r.has(e) ? p("Cannot add the same private member more than once") : r instanceof WeakSet ? r.add(e) : r.set(e, t), k = (e, r, t) => (E(e, r, "access private method"), t), h, g;
let i = class extends y {
  constructor() {
    super(...arguments), I(this, h), this._loadingIndexers = !1, this._loadingSearchers = !1;
  }
  connectedCallback() {
    super.connectedCallback(), this._getIndexers(), this._getSearchers();
  }
  async _getIndexers() {
    this._loadingIndexers = !0;
    const { data: e } = await b(this, f.getIndexer({ query: { take: 9999, skip: 0 } }));
    this._indexers = e?.items ?? [], this._loadingIndexers = !1;
  }
  async _getSearchers() {
    this._loadingSearchers = !0;
    const { data: e } = await b(this, w.getSearcher({ query: { take: 9999, skip: 0 } }));
    this._searchers = e?.items ?? [], this._loadingSearchers = !1;
  }
  render() {
    return a`
			<uui-box headline=${this.localize.term("examineManagement_indexers")} class="overview">
				<p>
					<strong><umb-localize key="examineManagement_manageIndexes">Manage Examine's indexes</umb-localize></strong
					><br />
					<umb-localize key="examineManagement_manageIndexesDescription"
						>Allows you to view the details of each index and provides some tools for managing the indexes</umb-localize
					>
				</p>
				${this.renderIndexersList()}
			</uui-box>
			<uui-box headline=${this.localize.term("examineManagement_searchers")}>
				<p>
					<strong><umb-localize key="examineManagement_configuredSearchers">Configured Searchers</umb-localize></strong
					><br />
					<umb-localize key="examineManagement_configuredSearchersDescription"
						>Shows properties and tools for any configured Searcher (i.e. such as a multi-index searcher)</umb-localize
					>
				</p>
				${this.renderSearchersList()}
			</uui-box>
		`;
  }
  renderIndexersList() {
    return this._loadingIndexers ? a`<uui-loader></uui-loader>` : this._indexers ? a` <uui-table class="overview">
			${this._indexers.map((e) => a`
					<uui-table-row>
						<uui-table-cell style="width:0px"> ${k(this, h, g).call(this, e.healthStatus.status)} </uui-table-cell>
						<uui-table-cell>
							<a href="${window.location.href.replace(/\/+$/, "")}/index/${e.name}">${e.name}</a>
						</uui-table-cell>
					</uui-table-row>
				`)}
		</uui-table>` : m;
  }
  renderSearchersList() {
    return this._loadingSearchers ? a`<uui-loader></uui-loader>` : this._searchers ? a`
			<uui-table class="overview2">
				${this._searchers.map((e) => a`<uui-table-row>
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
		` : m;
  }
};
h = /* @__PURE__ */ new WeakSet();
g = function(e) {
  switch (e) {
    case l.HEALTHY:
      return a`<umb-icon name="icon-check color-green"></umb-icon>`;
    case l.CORRUPT:
    case l.UNHEALTHY:
      return a`<umb-icon name="icon-alert color-red"></umb-icon>`;
    case l.REBUILDING:
      return a`<umb-icon name="icon-time color-yellow"></umb-icon>`;
    default:
      return;
  }
};
i.styles = [
  x,
  _`
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
o([
  u()
], i.prototype, "_indexers", 2);
o([
  u()
], i.prototype, "_searchers", 2);
o([
  u()
], i.prototype, "_loadingIndexers", 2);
o([
  u()
], i.prototype, "_loadingSearchers", 2);
i = o([
  v("umb-dashboard-examine-overview")
], i);
const O = i;
export {
  i as UmbDashboardExamineOverviewElement,
  O as default
};
//# sourceMappingURL=section-view-examine-overview-B6YsGIDQ.js.map
