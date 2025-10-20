import { U as $, a as E } from "./examine-fields-viewer-modal.token-ML1Zowxx.js";
import { UmbTextStyles as S } from "@umbraco-cms/backoffice/style";
import { html as s, nothing as F, css as k, property as z, state as c, query as N, customElement as w } from "@umbraco-cms/backoffice/external/lit";
import { umbOpenModal as f } from "@umbraco-cms/backoffice/modal";
import { UMB_WORKSPACE_MODAL as M } from "@umbraco-cms/backoffice/workspace";
import { UmbModalRouteRegistrationController as R } from "@umbraco-cms/backoffice/router";
import { SearcherService as C } from "@umbraco-cms/backoffice/external/backend-api";
import { UmbLitElement as O, umbFocus as P } from "@umbraco-cms/backoffice/lit-element";
import { tryExecute as T } from "@umbraco-cms/backoffice/resources";
var U = Object.defineProperty, I = Object.getOwnPropertyDescriptor, y = (e) => {
  throw TypeError(e);
}, n = (e, t, i, a) => {
  for (var r = a > 1 ? void 0 : a ? I(t, i) : t, d = e.length - 1, h; d >= 0; d--)
    (h = e[d]) && (r = (a ? h(t, i, r) : h(r)) || r);
  return a && r && U(t, i, r), r;
}, m = (e, t, i) => t.has(e) || y("Cannot " + i), _ = (e, t, i) => (m(e, t, "read from private field"), i ? i.call(e) : t.get(e)), b = (e, t, i) => t.has(e) ? y("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), L = (e, t, i, a) => (m(e, t, "write to private field"), t.set(e, i), i), p = (e, t, i) => (m(e, t, "access private method"), i), o, u, x, v, g;
let l = class extends O {
  constructor() {
    super(), b(this, u), this._searchLoading = !1, this._workspacePath = "aa", b(this, o, ""), new R(this, M).addAdditionalPath(":entityType").onSetup((e) => ({ data: { entityType: e.entityType, preset: {} } })).observeRouteBuilder((e) => {
      this._workspacePath = e({ entityType: _(this, o) });
    });
  }
  _onKeyPress(e) {
    e.key == "Enter" && this._onSearch();
  }
  async _onSearch() {
    if (!this._searchInput.value.length) return;
    this._searchLoading = !0;
    const { data: e } = await T(
      this,
      C.getSearcherBySearcherNameQuery({
        path: { searcherName: this.searcherName },
        query: {
          term: this._searchInput.value,
          take: 100,
          skip: 0
        }
      })
    );
    this._searchResults = e?.items ?? [], this._updateFieldFilter(), this._searchLoading = !1;
  }
  _updateFieldFilter() {
    this._searchResults?.map((e) => {
      const t = e.fields?.filter((i) => i.name?.toUpperCase() !== "NODENAME");
      if (t) {
        const i = t.map((a) => a.name ?? "");
        this._exposedFields = this._exposedFields ? this._exposedFields.filter((a) => ({ name: a.name, exposed: a.exposed })) : i?.map((a) => ({ name: a, exposed: !1 }));
      }
    });
  }
  render() {
    return s`
			<uui-box headline=${this.localize.term("general_search")}>
				<p>
					<umb-localize key="examineManagement_searchDescription"
						>Search the ${this.searcherName} and view the results</umb-localize
					>
				</p>
				<div class="flex">
					<uui-input
						type="search"
						id="search-input"
						placeholder=${this.localize.term("placeholders_filter")}
						label=${this.localize.term("placeholders_filter")}
						@keypress=${this._onKeyPress}
						${P()}>
					</uui-input>
					<uui-button
						color="positive"
						look="primary"
						label=${this.localize.term("general_search")}
						@click="${this._onSearch}"></uui-button>
				</div>
				${this.renderSearchResults()}
			</uui-box>
		`;
  }
  // Find the field named 'nodeName' and return its value if it exists in the fields array
  getSearchResultNodeName(e) {
    return e.fields?.find((i) => i.name?.toUpperCase() === "NODENAME")?.values?.join(", ") ?? "";
  }
  renderSearchResults() {
    return this._searchLoading ? s`<uui-loader></uui-loader>` : this._searchResults ? this._searchResults.length ? s`<div class="table-container">
			<uui-scroll-container>
				<uui-table class="search">
					<uui-table-head>
						<uui-table-head-cell style="width:0">Score</uui-table-head-cell>
						<uui-table-head-cell style="width:0">${this.localize.term("general_id")}</uui-table-head-cell>
						<uui-table-head-cell>${this.localize.term("general_name")}</uui-table-head-cell>
						<uui-table-head-cell>${this.localize.term("examineManagement_fields")}</uui-table-head-cell>
						${this.renderHeadCells()}
					</uui-table-head>
					${this._searchResults?.map((e) => {
      const t = e.fields?.find((a) => a.name === "__IndexType")?.values?.join(", ") ?? "";
      L(this, o, p(this, u, g).call(this, t));
      const i = e.fields?.find((a) => a.name === "__Key")?.values?.join(", ") ?? "";
      return s`<uui-table-row>
							<uui-table-cell> ${e.score} </uui-table-cell>
							<uui-table-cell> ${e.id} </uui-table-cell>
							<uui-table-cell>
								<uui-button
									look="secondary"
									label=${this.localize.term("actions_editContent")}
									href=${this._workspacePath + _(this, o) + "/edit/" + i}>
									${this.getSearchResultNodeName(e)}
								</uui-button>
							</uui-table-cell>
							<uui-table-cell>
								<uui-button
									class="bright"
									look="secondary"
									label=${this.localize.term("examineManagement_fieldValues")}
									@click=${() => p(this, u, v).call(this, e)}>
									${e.fields ? Object.keys(e.fields).length : ""}
									${this.localize.term("examineManagement_fields")}
								</uui-button>
							</uui-table-cell>
							${e.fields ? this.renderBodyCells(e.fields) : ""}
						</uui-table-row>`;
    })}
				</uui-table>
			</uui-scroll-container>
			<button class="field-adder" @click="${p(this, u, x)}">
				<uui-icon-registry-essential>
					<uui-tag look="secondary">
						<uui-icon name="add"></uui-icon>
					</uui-tag>
				</uui-icon-registry-essential>
			</button>
		</div>` : s`<p>${this.localize.term("examineManagement_noResults")}</p>` : F;
  }
  renderHeadCells() {
    return s`${this._exposedFields?.map((e) => e.exposed ? s`<uui-table-head-cell class="exposed-field">
						<div class="exposed-field-container">
							<span>${e.name}</span>
							<uui-button
								look="secondary"
								label="${this.localize.term("actions_remove")} ${e.name}"
								compact
								@click="${() => {
      this._exposedFields = this._exposedFields?.map((t) => t.name === e.name ? { name: t.name, exposed: !1 } : t);
    }}"
								>x</uui-button
							>
						</div>
					</uui-table-head-cell>` : s``)}`;
  }
  renderBodyCells(e) {
    return s`${this._exposedFields?.map((t) => e.map((i) => t.exposed && i.name == t.name ? s`<uui-table-cell clip-text>${i.values}</uui-table-cell>` : s``))}`;
  }
};
o = /* @__PURE__ */ new WeakMap();
u = /* @__PURE__ */ new WeakSet();
x = async function() {
  const e = await f(this, $, {
    value: { fields: this._exposedFields ?? [] }
  }).catch(() => {
  });
  this._exposedFields = e?.fields;
};
v = async function(e) {
  await f(this, E, {
    modal: {
      type: "sidebar",
      size: "medium"
    },
    data: { searchResult: e, name: this.getSearchResultNodeName(e) }
  }).catch(() => {
  });
};
g = function(e) {
  switch (e) {
    case "content":
      return "document";
    default:
      return e;
  }
};
l.styles = [
  S,
  k`
			:host {
				display: block;
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

			uui-table-head-cell {
				text-transform: capitalize;
			}

			uui-table-row:last-child uui-table-cell {
				padding-bottom: 0;
			}

			uui-table-cell {
				min-width: 100px;
			}

			button.bright {
				font-style: italic;
				color: var(--uui-color-positive-emphasis);
			}

			.field-adder {
				line-height: 0;
				cursor: pointer;
				vertical-align: top;
				background: transparent;
				border: none;
			}

			.table-container uui-scroll-container {
				padding-bottom: var(--uui-size-space-4);
				max-width: 100%;
				overflow-x: scroll;
				flex: 1;
			}

			.table-container {
				display: flex;
				align-items: flex-start;
			}
			uui-tag {
				margin-block: var(--uui-size-5, 15px);
			}

			.exposed-field uui-button {
				align-items: center;
				font-weight: normal;
				font-size: 10px;
				height: 10px;
				width: 10px;
				margin-top: -5px;
			}

			.exposed-field-container {
				display: flex;
				justify-content: space-between;
			}
		`
];
n([
  z()
], l.prototype, "searcherName", 2);
n([
  c()
], l.prototype, "_searchResults", 2);
n([
  c()
], l.prototype, "_exposedFields", 2);
n([
  c()
], l.prototype, "_searchLoading", 2);
n([
  N("#search-input")
], l.prototype, "_searchInput", 2);
n([
  c()
], l.prototype, "_workspacePath", 2);
l = n([
  w("umb-dashboard-examine-searcher")
], l);
const H = l;
export {
  l as UmbDashboardExamineSearcherElement,
  H as default
};
//# sourceMappingURL=section-view-examine-searchers-CWoWVijM.js.map
