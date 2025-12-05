import { html as i, nothing as p, css as v, property as y, state as b, customElement as D } from "@umbraco-cms/backoffice/external/lit";
import { umbConfirmModal as $ } from "@umbraco-cms/backoffice/modal";
import { HealthStatusModel as l, IndexerService as _ } from "@umbraco-cms/backoffice/external/backend-api";
import { UmbLitElement as z } from "@umbraco-cms/backoffice/lit-element";
import { tryExecute as g } from "@umbraco-cms/backoffice/resources";
import "./section-view-examine-searchers-CWoWVijM.js";
import { UmbTextStyles as I } from "@umbraco-cms/backoffice/style";
var S = Object.defineProperty, E = Object.getOwnPropertyDescriptor, f = (e) => {
  throw TypeError(e);
}, s = (e, t, a, d) => {
  for (var r = d > 1 ? void 0 : d ? E(t, a) : t, c = e.length - 1, h; c >= 0; c--)
    (h = e[c]) && (r = (d ? h(t, a, r) : h(r)) || r);
  return d && r && S(t, a, r), r;
}, N = (e, t, a) => t.has(e) || f("Cannot " + a), M = (e, t, a) => t.has(e) ? f("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, a), u = (e, t, a) => (N(e, t, "access private method"), a), o, m, x, w;
let n = class extends z {
  constructor() {
    super(...arguments), M(this, o), this._buttonState = void 0, this._loading = !0;
  }
  connectedCallback() {
    super.connectedCallback(), u(this, o, m).call(this);
  }
  async _continuousPolling() {
    for (; this._buttonState === "waiting"; )
      await new Promise((e) => setTimeout(e, 5e3)), this._indexData = await u(this, o, x).call(this), this._indexData?.healthStatus.status !== l.REBUILDING && (this._buttonState = "success");
  }
  async _onRebuildHandler() {
    await $(this, {
      headline: `${this.localize.term("examineManagement_rebuildIndex")} ${this.indexName}`,
      content: i`<umb-localize key="examineManagement_rebuildIndexWarning"
				>This will cause the index to be rebuilt.<br />
				Depending on how much content there is in your site this could take a while.<br />
				It is not recommended to rebuild an index during times of high website traffic or when editors are editing
				content.</umb-localize
			> `,
      color: "danger",
      confirmLabel: this.localize.term("examineManagement_rebuildIndex")
    }), this._rebuild();
  }
  async _rebuild() {
    this._buttonState = "waiting";
    const { error: e } = await g(
      this,
      _.postIndexerByIndexNameRebuild({ path: { indexName: this.indexName } })
    );
    if (e) {
      this._buttonState = "failed";
      return;
    }
    this._buttonState = "success", await u(this, o, m).call(this);
  }
  render() {
    return !this._indexData || this._loading ? i` <uui-loader-bar></uui-loader-bar>` : i`
			<uui-box headline="${this.indexName}">
				<p>
					<strong><umb-localize key="examineManagement_healthStatus">Health Status</umb-localize></strong
					><br />
					<umb-localize key="examineManagement_healthStatusDescription"
						>The health status of the ${this.indexName} and if it can be read</umb-localize
					>
				</p>
				<div id="health-status">${u(this, o, w).call(this, this._indexData.healthStatus)}</div>
			</uui-box>
			${this.renderIndexSearch()} ${this.renderPropertyList()} ${this.renderTools()}
		`;
  }
  renderIndexSearch() {
    return !this._indexData || this._indexData.healthStatus.status === l.REBUILDING ? p : i`<umb-dashboard-examine-searcher .searcherName="${this.indexName}"></umb-dashboard-examine-searcher>`;
  }
  renderPropertyList() {
    return this._indexData ? i`<uui-box headline=${this.localize.term("examineManagement_indexInfo")}>
			<p>
				<umb-localize key="examineManagement_indexInfoDescription"
					>Lists the properties of the ${this.indexName}</umb-localize
				>
			</p>
			<uui-table class="info">
				<uui-table-row>
					<uui-table-cell style="width:0px; font-weight: bold;">DocumentCount</uui-table-cell>
					<uui-table-cell>${this._indexData.documentCount}</uui-table-cell>
				</uui-table-row>
				<uui-table-row>
					<uui-table-cell style="width:0px; font-weight: bold;">FieldCount</uui-table-cell>
					<uui-table-cell>${this._indexData.fieldCount}</uui-table-cell>
				</uui-table-row>
				${this._indexData.providerProperties ? Object.entries(this._indexData.providerProperties).map((e) => i`<uui-table-row>
								<uui-table-cell style="width:0; font-weight: bold;"> ${e[0]} </uui-table-cell>
								<uui-table-cell clip-text> ${e[1]} </uui-table-cell>
							</uui-table-row>`) : ""}
			</uui-table>
		</uui-box>` : p;
  }
  renderTools() {
    return i` <uui-box headline=${this.localize.term("examineManagement_tools")}>
			<p><umb-localize key="examineManagement_toolsDescription">Tools to manage the ${this.indexName}</umb-localize></p>
			<uui-button
				color="danger"
				look="primary"
				.state="${this._buttonState}"
				@click="${this._onRebuildHandler}"
				.disabled="${!this._indexData?.canRebuild}"
				label=${this.localize.term("examineManagement_rebuildIndex")}></uui-button>
		</uui-box>`;
  }
};
o = /* @__PURE__ */ new WeakSet();
m = async function() {
  this._indexData = await u(this, o, x).call(this), this._indexData?.healthStatus.status === l.REBUILDING ? (this._buttonState = "waiting", this._continuousPolling()) : this._loading = !1;
};
x = async function() {
  const { data: e } = await g(
    this,
    _.getIndexerByIndexName({ path: { indexName: this.indexName } })
  );
  return e;
};
w = function(e) {
  const t = e.message ? e.message : e.status;
  switch (e.status) {
    case l.HEALTHY:
      return i`<umb-icon name="icon-check color-green"></umb-icon>${t}`;
    case l.CORRUPT:
      return i`<umb-icon name="icon-alert color-red"></umb-icon><div>
					<a href="https://umbra.co/corrupt-indexes" target="_blank"><umb-localize key="examineManagement_corruptStatus">Possible corrupt index detected</umb-localize></a>
					<p><umb-localize key="examineManagement_corruptErrorDescription">Error received when evaluating the index:</umb-localize> </br> </p>${t}</div>`;
    case l.UNHEALTHY:
      return i`<umb-icon name="icon-alert color-red"></umb-icon>${t}`;
    case l.REBUILDING:
      return i`<umb-icon name="icon-time color-yellow"></umb-icon>${t}`;
    default:
      return;
  }
};
n.styles = [
  I,
  v`
			#health-status {
				display: flex;
				align-items: start;
				gap: var(--uui-size-6);
			}

			#health-status umb-icon {
				margin-top: var(--uui-size-1);
			}

			:host {
				display: block;
			}

			uui-box,
			umb-dashboard-examine-searcher {
				margin-top: var(--uui-size-space-5);
			}

			uui-box p {
				margin-top: 0;
			}

			div.flex {
				display: flex;
			}
			div.flex > uui-button {
				padding-left: var(--uui-size-space-4);
				height: 0;
			}

			uui-input {
				width: 100%;
				margin-bottom: var(--uui-size-space-5);
			}

			uui-table.info uui-table-row:first-child uui-table-cell {
				border-top: none;
			}

			uui-table-head-cell {
				text-transform: capitalize;
			}

			uui-table-row:last-child uui-table-cell {
				padding-bottom: 0;
			}

			uui-icon {
				vertical-align: top;
				padding-right: var(--uui-size-space-5);
			}

			button {
				background: none;
				border: none;
				text-decoration: underline;
				cursor: pointer;
			}
			button.bright {
				font-style: italic;
				color: var(--uui-color-positive-emphasis);
			}
		`
];
s([
  y()
], n.prototype, "indexName", 2);
s([
  b()
], n.prototype, "_buttonState", 2);
s([
  b()
], n.prototype, "_indexData", 2);
s([
  b()
], n.prototype, "_loading", 2);
n = s([
  D("umb-dashboard-examine-index")
], n);
const H = n;
export {
  n as UmbDashboardExamineIndexElement,
  H as default
};
//# sourceMappingURL=section-view-examine-indexers-CmfuoQTn.js.map
