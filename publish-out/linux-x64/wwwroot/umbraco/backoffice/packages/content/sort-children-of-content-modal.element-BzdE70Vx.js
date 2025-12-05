import { customElement as m } from "@umbraco-cms/backoffice/external/lit";
import { UmbSortChildrenOfModalElement as h } from "@umbraco-cms/backoffice/tree";
var _ = Object.getOwnPropertyDescriptor, c = (e) => {
  throw TypeError(e);
}, u = (e, a, t, s) => {
  for (var r = s > 1 ? void 0 : s ? _(a, t) : a, o = e.length - 1, l; o >= 0; o--)
    (l = e[o]) && (r = l(r) || r);
  return r;
}, d = (e, a, t) => a.has(e) || c("Cannot " + t), p = (e, a, t) => (d(e, a, "read from private field"), t ? t.call(e) : a.get(e)), f = (e, a, t) => a.has(e) ? c("Cannot add the same private member more than once") : a instanceof WeakSet ? a.add(e) : a.set(e, t), n;
let i = class extends h {
  constructor() {
    super(...arguments), f(this, n, {
      day: "numeric",
      month: "short",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit"
    });
  }
  _setTableColumns() {
    this._tableColumns = [
      {
        name: this.localize.term("general_name"),
        alias: "name",
        allowSorting: this._hasMorePages() === !1
      },
      {
        name: this.localize.term("content_createDate"),
        alias: "createDate",
        allowSorting: this._hasMorePages() === !1
      }
    ];
  }
  _createTableItems() {
    this._tableItems = this._children.map((e) => ({
      id: e.unique,
      icon: "icon-document",
      data: [
        {
          columnAlias: "name",
          value: e.name
        },
        {
          columnAlias: "createDate",
          value: this.localize.date(e.createDate, p(this, n))
        }
      ]
    }));
  }
  _sortCompare(e, a, t) {
    return e === "createDate" ? Date.parse(a) - Date.parse(t) : super._sortCompare(e, a, t);
  }
  _onLoadMore(e) {
    super._onLoadMore(e);
    const a = this._hasMorePages() === !1;
    this._tableColumns[0].allowSorting = a, this._tableColumns[1].allowSorting = a;
  }
};
n = /* @__PURE__ */ new WeakMap();
i = u([
  m("umb-sort-children-of-content-modal")
], i);
export {
  i as UmbSortChildrenOfContentModalElement,
  i as element
};
//# sourceMappingURL=sort-children-of-content-modal.element-BzdE70Vx.js.map
