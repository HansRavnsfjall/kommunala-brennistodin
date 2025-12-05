import { U as T } from "./relation-type-workspace.context-token-D96LZ9-c.js";
import { UmbTextStyles as D } from "@umbraco-cms/backoffice/style";
import { html as m, nothing as E, css as x, state as u, customElement as R } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as S } from "@umbraco-cms/backoffice/lit-element";
import { UmbRelationCollectionRepository as U } from "@umbraco-cms/backoffice/relations";
import { observeMultiple as k } from "@umbraco-cms/backoffice/observable-api";
import { UmbPaginationManager as z } from "@umbraco-cms/backoffice/utils";
var W = Object.defineProperty, q = Object.getOwnPropertyDescriptor, f = (e) => {
  throw TypeError(e);
}, n = (e, t, i, p) => {
  for (var h = p > 1 ? void 0 : p ? q(t, i) : t, _ = e.length - 1, y; _ >= 0; _--)
    (y = e[_]) && (h = (p ? y(t, i, h) : y(h)) || h);
  return p && h && W(t, i, h), h;
}, g = (e, t, i) => t.has(e) || f("Cannot " + i), a = (e, t, i) => (g(e, t, "read from private field"), i ? i.call(e) : t.get(e)), d = (e, t, i) => t.has(e) ? f("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), A = (e, t, i, p) => (g(e, t, "write to private field"), t.set(e, i), i), c = (e, t, i) => (g(e, t, "access private method"), i), o, v, s, l, P, b, C, w, $;
let r = class extends S {
  constructor() {
    super(), d(this, l), this._relations = [], this._currentPageNumber = 1, this._totalPages = 1, this._loading = !1, d(this, o), d(this, v, new U(this)), d(this, s, new z()), this._tableConfig = {
      allowSelection: !1,
      hideIcon: !0
    }, this._tableColumns = [
      {
        name: "Parent",
        alias: "parent"
      },
      {
        name: "Child",
        alias: "child"
      },
      {
        name: "Created",
        alias: "created"
      },
      {
        name: "Comment",
        alias: "comment"
      }
    ], a(this, s).setPageSize(50), this.observe(a(this, s).currentPage, (e) => this._currentPageNumber = e), this.observe(a(this, s).totalPages, (e) => this._totalPages = e), this.consumeContext(T, (e) => {
      A(this, o, e), c(this, l, b).call(this), c(this, l, P).call(this);
    });
  }
  get _tableItems() {
    return this._relations.length === 0 ? [
      {
        id: "no-relations",
        data: [
          {
            columnAlias: "parent",
            value: "No relations found"
          }
        ]
      }
    ] : this._relations.map((e) => ({
      id: e.unique,
      data: [
        {
          columnAlias: "parent",
          value: e.parent.name
        },
        {
          columnAlias: "child",
          value: e.child.name
        },
        {
          columnAlias: "created",
          value: this.localize.date(e.createDate, { dateStyle: "long", timeStyle: "medium" })
        },
        {
          columnAlias: "comment",
          value: e.comment
        }
      ]
    }));
  }
  render() {
    return m`${c(this, l, w).call(this)}${c(this, l, $).call(this)}`;
  }
};
o = /* @__PURE__ */ new WeakMap();
v = /* @__PURE__ */ new WeakMap();
s = /* @__PURE__ */ new WeakMap();
l = /* @__PURE__ */ new WeakSet();
P = function() {
  a(this, o) && this.observe(
    k([
      a(this, o).parent,
      a(this, o).child,
      a(this, o).isBidirectional,
      a(this, o).isDependency
    ]),
    ([e, t, i, p]) => {
      this._parent = e, this._child = t, this._isBidirectional = i, this._isDependency = p;
    }
  );
};
b = async function() {
  this._loading = !0;
  const e = a(this, o)?.getUnique();
  if (!e) throw new Error("Relation type unique is required");
  const { data: t } = await a(this, v).requestCollection({
    relationType: {
      unique: e
    },
    skip: a(this, s).getSkip(),
    take: a(this, s).getPageSize()
  });
  t && (this._relations = t.items, a(this, s).setTotalItems(t.total), this._loading = !1);
};
C = function(e) {
  a(this, s).setCurrentPageNumber(e.target?.current), c(this, l, b).call(this);
};
w = function() {
  return this._loading ? m`<uui-loader></uui-loader>` : m`
			<div>
				<umb-table .config=${this._tableConfig} .columns=${this._tableColumns} .items=${this._tableItems}></umb-table>

				${this._totalPages > 1 ? m`
							<uui-pagination
								.current=${this._currentPageNumber}
								.total=${this._totalPages}
								firstlabel=${this.localize.term("general_first")}
								previouslabel=${this.localize.term("general_previous")}
								nextlabel=${this.localize.term("general_next")}
								lastlabel=${this.localize.term("general_last")}
								@change=${c(this, l, C)}></uui-pagination>
						` : E}
			</div>
		`;
};
$ = function() {
  return m`<uui-box>
			<umb-property-layout label="Parent Type" orientation="vertical"
				><div slot="editor">${this._parent?.objectType.name}</div>
			</umb-property-layout>
			<umb-property-layout label="Child Type" orientation="vertical">
				<div slot="editor">${this._child?.objectType.name}</div>
			</umb-property-layout>
			<umb-property-layout label="Bidirectional" orientation="vertical">
				<div slot="editor">${this._isBidirectional}</div>
			</umb-property-layout>
			<umb-property-layout label="Dependency" orientation="vertical">
				<div slot="editor">${this._isDependency}</div>
			</umb-property-layout>
		</uui-box>`;
};
r.styles = [
  D,
  x`
			:host {
				display: grid;
				gap: var(--uui-size-layout-1);
				padding: var(--uui-size-layout-1);
				grid-template-columns: 1fr 350px;
			}

			uui-loader {
				text-align: center;
			}

			uui-pagination {
				margin-top: var(--uui-size-layout-1);
				display: block;
			}
		`
];
n([
  u()
], r.prototype, "_relations", 2);
n([
  u()
], r.prototype, "_parent", 2);
n([
  u()
], r.prototype, "_child", 2);
n([
  u()
], r.prototype, "_isBidirectional", 2);
n([
  u()
], r.prototype, "_isDependency", 2);
n([
  u()
], r.prototype, "_currentPageNumber", 2);
n([
  u()
], r.prototype, "_totalPages", 2);
n([
  u()
], r.prototype, "_loading", 2);
r = n([
  R("umb-relation-type-detail-workspace-view")
], r);
const G = r;
export {
  r as UmbRelationTypeDetailWorkspaceViewElement,
  G as default
};
//# sourceMappingURL=relation-type-detail-workspace-view.element-CshBXciU.js.map
