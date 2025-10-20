import { U as $ } from "./relation-type-workspace.context-token-D96LZ9-c.js";
import { UmbTextStyles as D } from "@umbraco-cms/backoffice/style";
import { html as m, nothing as E, css as R, state as u, customElement as S } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as U } from "@umbraco-cms/backoffice/lit-element";
import { UmbRelationCollectionRepository as k } from "@umbraco-cms/backoffice/relations";
import { observeMultiple as x } from "@umbraco-cms/backoffice/observable-api";
import { UmbPaginationManager as W } from "@umbraco-cms/backoffice/utils";
var q = Object.defineProperty, A = Object.getOwnPropertyDescriptor, b = (t) => {
  throw TypeError(t);
}, s = (t, e, i, p) => {
  for (var h = p > 1 ? void 0 : p ? A(e, i) : e, _ = t.length - 1, y; _ >= 0; _--)
    (y = t[_]) && (h = (p ? y(e, i, h) : y(h)) || h);
  return p && h && q(e, i, h), h;
}, v = (t, e, i) => e.has(t) || b("Cannot " + i), a = (t, e, i) => (v(t, e, "read from private field"), i ? i.call(t) : e.get(t)), d = (t, e, i) => e.has(t) ? b("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), M = (t, e, i, p) => (v(t, e, "write to private field"), e.set(t, i), i), c = (t, e, i) => (v(t, e, "access private method"), i), o, g, n, l, P, f, C, w, T;
let r = class extends U {
  constructor() {
    super(), d(this, l), this._relations = [], this._currentPageNumber = 1, this._totalPages = 1, this._loading = !1, d(this, o), d(this, g, new k(this)), d(this, n, new W()), this._tableConfig = {
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
    ], a(this, n).setPageSize(50), this.observe(a(this, n).currentPage, (t) => this._currentPageNumber = t), this.observe(a(this, n).totalPages, (t) => this._totalPages = t), this.consumeContext($, (t) => {
      M(this, o, t), c(this, l, f).call(this), c(this, l, P).call(this);
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
    ] : this._relations.map((t) => ({
      id: t.unique,
      data: [
        {
          columnAlias: "parent",
          value: t.parent.name
        },
        {
          columnAlias: "child",
          value: t.child.name
        },
        {
          columnAlias: "created",
          value: this.localize.date(t.createDate, { dateStyle: "long", timeStyle: "medium" })
        },
        {
          columnAlias: "comment",
          value: t.comment
        }
      ]
    }));
  }
  render() {
    return m`${c(this, l, w).call(this)}${c(this, l, T).call(this)}`;
  }
};
o = /* @__PURE__ */ new WeakMap();
g = /* @__PURE__ */ new WeakMap();
n = /* @__PURE__ */ new WeakMap();
l = /* @__PURE__ */ new WeakSet();
P = function() {
  a(this, o) && this.observe(
    x([
      a(this, o).parent,
      a(this, o).child,
      a(this, o).isBidirectional,
      a(this, o).isDependency
    ]),
    ([t, e, i, p]) => {
      this._parent = t, this._child = e, this._isBidirectional = i, this._isDependency = p;
    }
  );
};
f = async function() {
  this._loading = !0;
  const t = a(this, o)?.getUnique();
  if (!t) throw new Error("Relation type unique is required");
  const { data: e } = await a(this, g).requestCollection({
    relationType: {
      unique: t
    },
    skip: a(this, n).getSkip(),
    take: a(this, n).getPageSize()
  });
  e && (this._relations = e.items, a(this, n).setTotalItems(e.total), this._loading = !1);
};
C = function(t) {
  a(this, n).setCurrentPageNumber(t.target?.current), c(this, l, f).call(this);
};
w = function() {
  return this._loading ? m`<uui-loader></uui-loader>` : m`
			<div>
				<umb-table .config=${this._tableConfig} .columns=${this._tableColumns} .items=${this._tableItems}></umb-table>

				${this._totalPages > 1 ? m`
							<uui-pagination
								.current=${this._currentPageNumber}
								.total=${this._totalPages}
								@change=${c(this, l, C)}></uui-pagination>
						` : E}
			</div>
		`;
};
T = function() {
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
  R`
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
s([
  u()
], r.prototype, "_relations", 2);
s([
  u()
], r.prototype, "_parent", 2);
s([
  u()
], r.prototype, "_child", 2);
s([
  u()
], r.prototype, "_isBidirectional", 2);
s([
  u()
], r.prototype, "_isDependency", 2);
s([
  u()
], r.prototype, "_currentPageNumber", 2);
s([
  u()
], r.prototype, "_totalPages", 2);
s([
  u()
], r.prototype, "_loading", 2);
r = s([
  S("umb-relation-type-detail-workspace-view")
], r);
const G = r;
export {
  r as UmbRelationTypeDetailWorkspaceViewElement,
  G as default
};
//# sourceMappingURL=relation-type-detail-workspace-view.element-OWyzbFAb.js.map
