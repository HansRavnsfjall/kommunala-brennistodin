import { U as E, a as k } from "./examine-fields-viewer-modal.token-ML1Zowxx.js";
import { UmbTextStyles as F } from "@umbraco-cms/backoffice/style";
import { html as l, nothing as M, css as w, property as N, state as d, query as R, customElement as C } from "@umbraco-cms/backoffice/external/lit";
import { umbOpenModal as y } from "@umbraco-cms/backoffice/modal";
import { UMB_WORKSPACE_MODAL as O } from "@umbraco-cms/backoffice/workspace";
import { UmbModalRouteRegistrationController as T } from "@umbraco-cms/backoffice/router";
import { SearcherService as U } from "@umbraco-cms/backoffice/external/backend-api";
import { UmbLitElement as I, umbFocus as L } from "@umbraco-cms/backoffice/lit-element";
import { tryExecute as A } from "@umbraco-cms/backoffice/resources";
import { UmbPaginationManager as B } from "@umbraco-cms/backoffice/utils";
var W = Object.defineProperty, D = Object.getOwnPropertyDescriptor, x = (e) => {
  throw TypeError(e);
}, o = (e, t, i, a) => {
  for (var c = a > 1 ? void 0 : a ? D(t, i) : t, m = e.length - 1, _; m >= 0; m--)
    (_ = e[m]) && (c = (a ? _(t, i, c) : _(c)) || c);
  return a && c && W(t, i, c), c;
}, f = (e, t, i) => t.has(e) || x("Cannot " + i), r = (e, t, i) => (f(e, t, "read from private field"), i ? i.call(e) : t.get(e)), b = (e, t, i) => t.has(e) ? x("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), K = (e, t, i, a) => (f(e, t, "write to private field"), t.set(e, i), i), h = (e, t, i) => (f(e, t, "access private method"), i), n, p, u, v, $, g, P, S, z;
let s = class extends I {
  constructor() {
    super(), b(this, u), this._searchLoading = !1, this._workspacePath = "aa", this._totalPages = 1, this._currentPage = 1, this._totalNumberOfResults = 0, b(this, n, new B()), b(this, p, ""), r(this, n).setPageSize(100), this.observe(r(this, n).currentPage, (e) => this._currentPage = e), this.observe(r(this, n).totalPages, (e) => this._totalPages = e), new T(this, O).addAdditionalPath(":entityType").onSetup((e) => ({ data: { entityType: e.entityType, preset: {} } })).observeRouteBuilder((e) => {
      this._workspacePath = e({ entityType: r(this, p) });
    });
  }
  _onKeyPress(e) {
    e.key == "Enter" && this._onSearch();
  }
  async _onSearch() {
    if (!this._searchInput.value.length) return;
    this._searchLoading = !0;
    const { data: e } = await A(
      this,
      U.getSearcherBySearcherNameQuery({
        path: { searcherName: this.searcherName },
        query: {
          term: this._searchInput.value,
          take: r(this, n).getPageSize(),
          skip: r(this, n).getSkip()
        }
      })
    );
    this._searchResults = e?.items ?? [], r(this, n).setTotalItems(e.total), this._totalNumberOfResults = e.total, this._updateFieldFilter(), this._searchLoading = !1;
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
    return l`
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
						${L()}>
					</uui-input>
					<uui-button
						color="positive"
						look="primary"
						label=${this.localize.term("general_search")}
						@click="${this._onSearch}"></uui-button>
				</div>
				${h(this, u, z).call(this)}
			</uui-box>
		`;
  }
  renderHeadCells() {
    return l`${this._exposedFields?.map((e) => e.exposed ? l`<uui-table-head-cell class="exposed-field">
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
					</uui-table-head-cell>` : l``)}`;
  }
  renderBodyCells(e) {
    return l`${this._exposedFields?.map((t) => e.map((i) => t.exposed && i.name == t.name ? l`<uui-table-cell clip-text>${i.values}</uui-table-cell>` : l``))}`;
  }
};
n = /* @__PURE__ */ new WeakMap();
p = /* @__PURE__ */ new WeakMap();
u = /* @__PURE__ */ new WeakSet();
v = async function() {
  const e = await y(this, E, {
    value: { fields: this._exposedFields ?? [] }
  }).catch(() => {
  });
  this._exposedFields = e?.fields;
};
$ = async function(e) {
  await y(this, k, {
    modal: {
      type: "sidebar",
      size: "medium"
    },
    data: { searchResult: e, name: h(this, u, g).call(this, e) }
  }).catch(() => {
  });
};
g = function(e) {
  return e.fields?.find((i) => i.name?.toUpperCase() === "NODENAME")?.values?.join(", ") ?? "";
};
P = function(e) {
  switch (e) {
    case "content":
      return "document";
    default:
      return e;
  }
};
S = function(e) {
  r(this, n).setCurrentPageNumber(e.target?.current), this._onSearch();
};
z = function() {
  return this._searchLoading ? l`<uui-loader></uui-loader>` : this._searchResults ? this._searchResults.length ? l`
			<div>
				${this.localize.term(
    "examineManagement_searchResultsFound",
    r(this, n).getDisplayStart(),
    r(this, n).getDisplayEnd(),
    this._totalNumberOfResults,
    this._currentPage,
    this._totalPages
  )}
			</div>
			<div class="table-container">
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
    K(this, p, h(this, u, P).call(this, t));
    const i = e.fields?.find((a) => a.name === "__Key")?.values?.join(", ") ?? "";
    return l`<uui-table-row>
								<uui-table-cell> ${e.score} </uui-table-cell>
								<uui-table-cell> ${e.id} </uui-table-cell>
								<uui-table-cell>
									<uui-button
										look="secondary"
										label=${this.localize.term("actions_editContent")}
										href=${this._workspacePath + r(this, p) + "/edit/" + i}>
										${h(this, u, g).call(this, e)}
									</uui-button>
								</uui-table-cell>
								<uui-table-cell>
									<uui-button
										class="bright"
										look="secondary"
										label=${this.localize.term("examineManagement_fieldValues")}
										@click=${() => h(this, u, $).call(this, e)}>
										${e.fields ? Object.keys(e.fields).length : ""}
										${this.localize.term("examineManagement_fields")}
									</uui-button>
								</uui-table-cell>
								${e.fields ? this.renderBodyCells(e.fields) : ""}
							</uui-table-row>`;
  })}
					</uui-table>
				</uui-scroll-container>
				<button class="field-adder" @click="${h(this, u, v)}">
					<uui-icon-registry-essential>
						<uui-tag look="secondary">
							<uui-icon name="add"></uui-icon>
						</uui-tag>
					</uui-icon-registry-essential>
				</button>
			</div>
			<uui-pagination
				.total=${this._totalPages}
				.current=${this._currentPage}
				firstlabel=${this.localize.term("general_first")}
				previouslabel=${this.localize.term("general_previous")}
				nextlabel=${this.localize.term("general_next")}
				lastlabel=${this.localize.term("general_last")}
				@change=${h(this, u, S)}></uui-pagination>
		` : l`<p>${this.localize.term("examineManagement_noResults")}</p>` : M;
};
s.styles = [
  F,
  w`
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
o([
  N()
], s.prototype, "searcherName", 2);
o([
  d()
], s.prototype, "_searchResults", 2);
o([
  d()
], s.prototype, "_exposedFields", 2);
o([
  d()
], s.prototype, "_searchLoading", 2);
o([
  R("#search-input")
], s.prototype, "_searchInput", 2);
o([
  d()
], s.prototype, "_workspacePath", 2);
o([
  d()
], s.prototype, "_totalPages", 2);
o([
  d()
], s.prototype, "_currentPage", 2);
o([
  d()
], s.prototype, "_totalNumberOfResults", 2);
s = o([
  C("umb-dashboard-examine-searcher")
], s);
const ee = s;
export {
  s as UmbDashboardExamineSearcherElement,
  ee as default
};
//# sourceMappingURL=section-view-examine-searchers-BQHhHYlZ.js.map
