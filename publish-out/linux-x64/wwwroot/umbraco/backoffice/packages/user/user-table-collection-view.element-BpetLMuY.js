import { h as A, U as D } from "./constants-BH7VsFPT.js";
import "@umbraco-cms/backoffice/notification";
import "@umbraco-cms/backoffice/repository";
import "@umbraco-cms/backoffice/external/backend-api";
import "@umbraco-cms/backoffice/resources";
import "@umbraco-cms/backoffice/id";
import "@umbraco-cms/backoffice/temporary-file";
import "@umbraco-cms/backoffice/entity-item";
import "@umbraco-cms/backoffice/localization-api";
import "@umbraco-cms/backoffice/external/rxjs";
import { property as v, customElement as g, LitElement as O, html as _, nothing as x, css as N, state as h } from "@umbraco-cms/backoffice/external/lit";
import { UmbTextStyles as w } from "@umbraco-cms/backoffice/style";
import { UmbLitElement as M } from "@umbraco-cms/backoffice/lit-element";
import { UmbUserGroupItemRepository as j } from "@umbraco-cms/backoffice/user-group";
import { U as R } from "./paths-C2_yfNxZ.js";
import { g as $ } from "./utils-BEu6TUZg.js";
var W = Object.defineProperty, V = Object.getOwnPropertyDescriptor, f = (e, t, s, r) => {
  for (var a = r > 1 ? void 0 : r ? V(t, s) : t, o = e.length - 1, i; o >= 0; o--)
    (i = e[o]) && (a = (r ? i(t, s, a) : i(a)) || a);
  return r && a && W(t, s, a), a;
};
let p = class extends O {
  render() {
    const e = R + "/edit/" + this.value.unique;
    return _` <div style="display: flex; align-items: center;">
			<umb-user-avatar
				style="margin-right: var(--uui-size-space-3);"
				name=${this.value.name}
				kind=${this.value.kind}
				.imgUrls=${this.value.avatarUrls}></umb-user-avatar>
			<a style="font-weight: bold;" href="${e}">${this.value.name}</a>
		</div>`;
  }
};
p.styles = [w];
f([
  v({ type: Object, attribute: !1 })
], p.prototype, "column", 2);
f([
  v({ type: Object, attribute: !1 })
], p.prototype, "item", 2);
f([
  v({ attribute: !1 })
], p.prototype, "value", 2);
p = f([
  g("umb-user-table-name-column-layout")
], p);
var z = Object.defineProperty, B = Object.getOwnPropertyDescriptor, S = (e, t, s, r) => {
  for (var a = r > 1 ? void 0 : r ? B(t, s) : t, o = e.length - 1, i; o >= 0; o--)
    (i = e[o]) && (a = (r ? i(t, s, a) : i(a)) || a);
  return r && a && z(t, s, a), a;
};
let y = class extends O {
  render() {
    return _`${this.value.status && this.value.status !== "enabled" ? _`<uui-tag
					size="s"
					look="${$(this.value.status).look}"
					color="${$(this.value.status).color}">
					${this.value.status}
				</uui-tag>` : x}`;
  }
};
S([
  v({ attribute: !1 })
], y.prototype, "value", 2);
y = S([
  g("umb-user-table-status-column-layout")
], y);
var K = Object.defineProperty, F = Object.getOwnPropertyDescriptor, P = (e) => {
  throw TypeError(e);
}, m = (e, t, s, r) => {
  for (var a = r > 1 ? void 0 : r ? F(t, s) : t, o = e.length - 1, i; o >= 0; o--)
    (i = e[o]) && (a = (r ? i(t, s, a) : i(a)) || a);
  return r && a && K(t, s, a), a;
}, U = (e, t, s) => t.has(e) || P("Cannot " + s), b = (e, t, s) => (U(e, t, "read from private field"), t.get(e)), d = (e, t, s) => t.has(e) ? P("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, s), H = (e, t, s, r) => (U(e, t, "write to private field"), t.set(e, s), s), c = (e, t, s) => (U(e, t, "access private method"), s), C, u, l, I, E, G, T, q, L;
let n = class extends M {
  constructor() {
    super(), d(this, l), this._tableConfig = {
      allowSelection: !0
    }, this._tableColumns = [
      {
        name: "Name",
        alias: "userName",
        elementName: "umb-user-table-name-column-layout"
      },
      {
        name: "User group",
        alias: "userGroup"
      },
      {
        name: "Last login",
        alias: "userLastLogin"
      },
      {
        name: "Status",
        alias: "userStatus",
        elementName: "umb-user-table-status-column-layout"
      },
      {
        name: "",
        alias: "entityActions",
        align: "right"
      }
    ], this._tableItems = [], this._userGroupItems = [], d(this, C, new j(this)), this._users = [], this._selection = [], d(this, u), this.consumeContext(A, (e) => {
      H(this, u, e), this.observe(
        b(this, u)?.selection.selection,
        (t) => this._selection = t ?? [],
        "umbCollectionSelectionObserver"
      ), this.observe(
        b(this, u)?.items,
        (t) => {
          this._users = t ?? [], c(this, l, I).call(this);
        },
        "umbCollectionItemsObserver"
      );
    });
  }
  render() {
    return _`
			<umb-table
				.config=${this._tableConfig}
				.columns=${this._tableColumns}
				.items=${this._tableItems}
				.selection=${this._selection}
				@selected="${c(this, l, T)}"
				@deselected="${c(this, l, q)}"
				@ordered="${c(this, l, L)}"></umb-table>
		`;
  }
};
C = /* @__PURE__ */ new WeakMap();
u = /* @__PURE__ */ new WeakMap();
l = /* @__PURE__ */ new WeakSet();
I = async function() {
  if (this._users.length === 0) return;
  const e = [
    ...new Set(this._users.flatMap((s) => s.userGroupUniques.map((r) => r.unique)))
  ], { asObservable: t } = await b(this, C).requestItems(e);
  this.observe(
    t?.(),
    (s) => {
      this._userGroupItems = s ?? [], c(this, l, G).call(this);
    },
    "umbUserGroupItemsObserver"
  );
};
E = function(e) {
  return e.map((t) => this._userGroupItems.find((s) => s.unique === t.unique)?.name).join(", ");
};
G = function() {
  this._tableItems = this._users.map((e) => ({
    id: e.unique,
    icon: e.kind === D.API ? "icon-unplug" : "icon-user",
    data: [
      {
        columnAlias: "userName",
        value: {
          unique: e.unique,
          name: e.name,
          avatarUrls: e.avatarUrls,
          kind: e.kind
        }
      },
      {
        columnAlias: "userGroup",
        value: c(this, l, E).call(this, e.userGroupUniques ?? [])
      },
      {
        columnAlias: "userLastLogin",
        value: e.lastLoginDate
      },
      {
        columnAlias: "userStatus",
        value: {
          status: e.state
        }
      },
      {
        columnAlias: "entityActions",
        value: _`<umb-entity-actions-table-column-view
							.value=${{
          entityType: e.entityType,
          unique: e.unique,
          name: e.name
        }}></umb-entity-actions-table-column-view>`
      }
    ]
  }));
};
T = function(e) {
  e.stopPropagation();
  const s = e.target.selection;
  b(this, u)?.selection.setSelection(s);
};
q = function(e) {
  e.stopPropagation();
  const s = e.target.selection;
  b(this, u)?.selection.setSelection(s);
};
L = function(e) {
  const t = e.target, s = t.orderingColumn, r = t.orderingDesc;
  console.log(`fetch users, order column: ${s}, desc: ${r}`);
};
n.styles = [
  w,
  N`
			:host {
				display: flex;
				flex-direction: column;
			}
		`
];
m([
  h()
], n.prototype, "_tableConfig", 2);
m([
  h()
], n.prototype, "_tableColumns", 2);
m([
  h()
], n.prototype, "_tableItems", 2);
m([
  h()
], n.prototype, "_userGroupItems", 2);
m([
  h()
], n.prototype, "_users", 2);
m([
  h()
], n.prototype, "_selection", 2);
n = m([
  g("umb-user-table-collection-view")
], n);
const me = n;
export {
  n as UmbUserTableCollectionViewElement,
  me as default
};
//# sourceMappingURL=user-table-collection-view.element-BpetLMuY.js.map
