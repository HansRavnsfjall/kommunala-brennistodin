import { css as M, state as d, customElement as $, html as m, nothing as A } from "@umbraco-cms/backoffice/external/lit";
import { UmbTextStyles as E } from "@umbraco-cms/backoffice/style";
import { UmbModalBaseElement as T } from "@umbraco-cms/backoffice/modal";
import { createExtensionApiByAlias as g } from "@umbraco-cms/backoffice/extension-registry";
import { UmbPaginationManager as U } from "@umbraco-cms/backoffice/utils";
import { observeMultiple as R } from "@umbraco-cms/backoffice/observable-api";
var k = Object.defineProperty, x = Object.getOwnPropertyDescriptor, y = (t) => {
  throw TypeError(t);
}, h = (t, e, s, r) => {
  for (var i = r > 1 ? void 0 : r ? x(e, s) : e, c = t.length - 1, _; c >= 0; c--)
    (_ = t[c]) && (i = (r ? _(e, s, i) : _(i)) || i);
  return r && i && k(e, s, i), i;
}, C = (t, e, s) => e.has(t) || y("Cannot " + s), u = (t, e, s) => (C(t, e, "read from private field"), s ? s.call(t) : e.get(t)), b = (t, e, s) => e.has(t) ? y("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, s), l = (t, e, s) => (C(t, e, "access private method"), s), n, o, f, P, v, w, q, I, S;
const z = "umb-sort-children-of-modal";
let a = class extends T {
  constructor() {
    super(), b(this, o), this._children = [], this._currentPage = 1, this._totalPages = 1, this._tableColumns = [], this._tableConfig = {
      allowSelection: !1
    }, this._tableItems = [], this._sortable = !1, this._sortedUniques = /* @__PURE__ */ new Set(), b(this, n, new U()), u(this, n).setPageSize(50), this.observe(
      R([u(this, n).currentPage, u(this, n).totalPages]),
      ([t, e]) => {
        this._currentPage = t, this._totalPages = e;
      },
      "umbPaginationObserver"
    );
  }
  _setTableColumns() {
    this._tableColumns = [
      {
        name: this.localize.term("general_name"),
        alias: "name",
        allowSorting: !0
      }
    ];
  }
  async firstUpdated(t) {
    super.firstUpdated(t), await l(this, o, f).call(this), this._setTableColumns();
  }
  _createTableItems() {
    this._tableItems = this._children.map((t) => ({
      id: t.unique,
      icon: "icon-globe",
      data: [
        {
          columnAlias: "name",
          value: m`${t.name}`
        }
      ]
    }));
  }
  _hasMorePages() {
    return this._currentPage < this._totalPages;
  }
  _onLoadMore(t) {
    t.stopPropagation(), !(this._currentPage >= this._totalPages) && (u(this, n).setCurrentPageNumber(this._currentPage + 1), l(this, o, f).call(this));
  }
  _sortCompare(t, e, s) {
    return t === "name" ? e.localeCompare(s) : 0;
  }
  render() {
    return m`
			<umb-body-layout headline=${"Sort Children"}>
				${this._children.length === 0 ? l(this, o, I).call(this) : l(this, o, S).call(this)}
				<uui-button slot="actions" label="Cancel" @click="${this._rejectModal}"></uui-button>
				<uui-button slot="actions" color="positive" look="primary" label="Sort" @click=${l(this, o, P)}></uui-button>
			</umb-body-layout>
		`;
  }
};
n = /* @__PURE__ */ new WeakMap();
o = /* @__PURE__ */ new WeakSet();
f = async function() {
  if (this.data?.unique === void 0) throw new Error("unique is required");
  if (!this.data?.treeRepositoryAlias) throw new Error("treeRepositoryAlias is required");
  const t = await g(
    this,
    this.data.treeRepositoryAlias
  ), { data: e } = await t.requestTreeItemsOf({
    parent: {
      unique: this.data.unique,
      entityType: this.data.entityType
    },
    skip: u(this, n).getSkip(),
    take: u(this, n).getPageSize()
  });
  e && (this._children = [...this._children, ...e.items], u(this, n).setTotalItems(e.total), this._sortable = this._children.length > 0, this._createTableItems());
};
P = async function(t) {
  if (t?.stopPropagation(), !this.data?.sortChildrenOfRepositoryAlias) throw new Error("sortChildrenOfRepositoryAlias is required");
  const e = await g(
    this,
    this.data.sortChildrenOfRepositoryAlias
  ), { error: s } = await e.sortChildrenOf({
    unique: this.data.unique,
    sorting: l(this, o, v).call(this)
  });
  s || this._submitModal();
};
v = function() {
  const t = [];
  for (const e of this._sortedUniques) {
    const s = this._tableItems.findIndex((r) => r.id === e);
    if (s !== -1) {
      const r = {
        unique: e,
        sortOrder: s
      };
      t.push(r);
    }
  }
  return t;
};
w = function(t) {
  t.stopPropagation();
  const e = t.getItemId();
  this._sortedUniques.add(e);
  const r = t.target.items;
  this._tableItems = r;
};
q = function(t) {
  t.stopPropagation();
  const e = t.target, s = e.orderingColumn, r = e.orderingDesc;
  this._tableItems = [...this._tableItems].sort((i, c) => {
    const _ = i.data.find((p) => p.columnAlias === s), O = c.data.find((p) => p.columnAlias === s);
    return this._sortCompare(s, _?.value, O?.value);
  }), r && this._tableItems.reverse(), this._sortedUniques.clear(), this._tableItems.map((i) => i.id).forEach((i) => this._sortedUniques.add(i));
};
I = function() {
  return m`<uui-label>There are no children</uui-label>`;
};
S = function() {
  return m`
			<umb-table
				.config=${this._tableConfig}
				.columns=${this._tableColumns}
				.items=${this._tableItems}
				.sortable=${this._sortable}
				@sorted=${l(this, o, w)}
				@ordered=${l(this, o, q)}></umb-table>

			${this._hasMorePages() ? m`
						<uui-button id="loadMoreButton" look="placeholder" @click=${this._onLoadMore}
							>Load more (${this._currentPage}/${this._totalPages})</uui-button
						>
					` : A}
		`;
};
a.styles = [
  E,
  M`
			#loadMoreButton {
				width: 100%;
				margin-top: var(--uui-size-space-3);
			}
		`
];
h([
  d()
], a.prototype, "_children", 2);
h([
  d()
], a.prototype, "_currentPage", 2);
h([
  d()
], a.prototype, "_totalPages", 2);
h([
  d()
], a.prototype, "_tableColumns", 2);
h([
  d()
], a.prototype, "_tableConfig", 2);
h([
  d()
], a.prototype, "_tableItems", 2);
h([
  d()
], a.prototype, "_sortable", 2);
a = h([
  $(z)
], a);
export {
  a as UmbSortChildrenOfModalElement,
  a as element
};
//# sourceMappingURL=sort-children-of-modal.element-Cs83_Yer.js.map
