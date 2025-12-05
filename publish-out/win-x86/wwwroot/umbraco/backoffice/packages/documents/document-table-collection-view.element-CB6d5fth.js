import { g as Q } from "./index-Cw5mP9uC.js";
import { j as Z, f as j, e as ee } from "./manifests-BfVrApfB.js";
import { property as S, customElement as $, nothing as g, html as h, css as B, state as p } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as D } from "@umbraco-cms/backoffice/lit-element";
import { UmbTextStyles as te } from "@umbraco-cms/backoffice/style";
import { UmbAncestorsEntityContext as ae } from "@umbraco-cms/backoffice/entity";
import "./document-item.server.cache-_Im2jNgl.js";
import "@umbraco-cms/backoffice/external/backend-api";
import "@umbraco-cms/backoffice/management-api";
import "@umbraco-cms/backoffice/repository";
import { U as z } from "./document-item-data-resolver-D2-3CuIM.js";
import { fromCamelCase as se } from "@umbraco-cms/backoffice/utils";
var ie = Object.defineProperty, re = Object.getOwnPropertyDescriptor, k = (e) => {
  throw TypeError(e);
}, q = (e, t, a, i) => {
  for (var s = i > 1 ? void 0 : i ? re(t, a) : t, r = e.length - 1, n; r >= 0; r--)
    (n = e[r]) && (s = (i ? n(t, a, s) : n(s)) || s);
  return i && s && ie(t, a, s), s;
}, ne = (e, t, a) => t.has(e) || k("Cannot " + a), oe = (e, t, a) => (ne(e, t, "read from private field"), a ? a.call(e) : t.get(e)), le = (e, t, a) => t.has(e) ? k("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, a), E;
let O = class extends D {
  constructor() {
    super(...arguments), le(this, E, new ae(this));
  }
  get value() {
    return this._value;
  }
  set value(e) {
    this._value = e, oe(this, E).setAncestors(this._value?.ancestors ?? []);
  }
  render() {
    return this._value ? h`
			<umb-entity-actions-table-column-view
				.value=${{ unique: this._value.unique, entityType: this._value.entityType }}>
			</umb-entity-actions-table-column-view>
		` : g;
  }
};
E = /* @__PURE__ */ new WeakMap();
q([
  S({ attribute: !1 })
], O.prototype, "value", 1);
O = q([
  $("umb-document-entity-actions-table-column-view")
], O);
var ue = Object.defineProperty, ce = Object.getOwnPropertyDescriptor, V = (e) => {
  throw TypeError(e);
}, U = (e, t, a, i) => {
  for (var s = i > 1 ? void 0 : i ? ce(t, a) : t, r = e.length - 1, n; r >= 0; r--)
    (n = e[r]) && (s = (i ? n(t, a, s) : n(s)) || s);
  return i && s && ue(t, a, s), s;
}, G = (e, t, a) => t.has(e) || V("Cannot " + a), b = (e, t, a) => (G(e, t, "read from private field"), a ? a.call(e) : t.get(e)), W = (e, t, a) => t.has(e) ? V("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, a), he = (e, t, a, i) => (G(e, t, "write to private field"), t.set(e, a), a), C, v;
let f = class extends D {
  constructor() {
    super(), W(this, C), this._name = "", W(this, v, new z(this)), b(this, v).observe(b(this, v).name, (e) => this._name = e || "");
  }
  get value() {
    return b(this, C);
  }
  set value(e) {
    he(this, C, e), e.item && b(this, v).setData(e.item);
  }
  render() {
    return this.value ? this.value.editPath ? this._name ? h`<uui-button compact href=${this.value.editPath} label=${this._name}></uui-button>` : g : g : g;
  }
};
C = /* @__PURE__ */ new WeakMap();
v = /* @__PURE__ */ new WeakMap();
f.styles = [
  B`
			uui-button {
				text-align: left;
			}
		`
];
U([
  S({ attribute: !1 })
], f.prototype, "value", 1);
U([
  p()
], f.prototype, "_name", 2);
f = U([
  $("umb-document-table-column-name")
], f);
var pe = Object.defineProperty, _e = Object.getOwnPropertyDescriptor, L = (e) => {
  throw TypeError(e);
}, A = (e, t, a, i) => {
  for (var s = i > 1 ? void 0 : i ? _e(t, a) : t, r = e.length - 1, n; r >= 0; r--)
    (n = e[r]) && (s = (i ? n(t, a, s) : n(s)) || s);
  return i && s && pe(t, a, s), s;
}, R = (e, t, a) => t.has(e) || L("Cannot " + a), y = (e, t, a) => (R(e, t, "read from private field"), a ? a.call(e) : t.get(e)), I = (e, t, a) => t.has(e) ? L("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, a), me = (e, t, a, i) => (R(e, t, "write to private field"), t.set(e, a), a), w, d;
let P = class extends D {
  constructor() {
    super(), I(this, w), this._state = "", I(this, d, new z(this)), y(this, d).observe(y(this, d).state, (e) => this._state = e || "");
  }
  get value() {
    return y(this, w);
  }
  set value(e) {
    me(this, w, e), e.item && y(this, d).setData(e.item);
  }
  render() {
    switch (this._state) {
      case "Published":
        return h`<uui-tag color="positive" look="primary">${this.localize.term("content_published")}</uui-tag>`;
      case "PublishedPendingChanges":
        return h`<uui-tag color="positive" look="primary"
					>${this.localize.term("content_publishedPendingChanges")}</uui-tag
				>`;
      case "Draft":
        return h`<uui-tag color="default" look="secondary">${this.localize.term("content_unpublished")}</uui-tag>`;
      case "NotCreated":
        return h`<uui-tag color="default" look="secondary">${this.localize.term("content_notCreated")}</uui-tag>`;
      default:
        return h`<uui-tag color="default" look="secondary">${se(this._state)}</uui-tag>`;
    }
  }
};
w = /* @__PURE__ */ new WeakMap();
d = /* @__PURE__ */ new WeakMap();
A([
  S({ attribute: !1 })
], P.prototype, "value", 1);
A([
  p()
], P.prototype, "_state", 2);
P = A([
  $("umb-document-table-column-state")
], P);
var ve = Object.defineProperty, de = Object.getOwnPropertyDescriptor, H = (e) => {
  throw TypeError(e);
}, _ = (e, t, a, i) => {
  for (var s = i > 1 ? void 0 : i ? de(t, a) : t, r = e.length - 1, n; r >= 0; r--)
    (n = e[r]) && (s = (i ? n(t, a, s) : n(s)) || s);
  return i && s && ve(t, a, s), s;
}, M = (e, t, a) => t.has(e) || H("Cannot " + a), u = (e, t, a) => (M(e, t, "read from private field"), t.get(e)), T = (e, t, a) => t.has(e) ? H("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, a), fe = (e, t, a, i) => (M(e, t, "write to private field"), t.set(e, a), a), m = (e, t, a) => (M(e, t, "access private method"), a), N, o, c, Y, F, x, K, X, J;
let l = class extends D {
  constructor() {
    super(), T(this, c), this._tableConfig = {
      allowSelection: !0
    }, this._tableColumns = [], T(this, N, [
      {
        name: this.localize.term("general_name"),
        alias: "name",
        elementName: "umb-document-table-column-name",
        allowSorting: !0
      },
      {
        name: this.localize.term("content_publishStatus"),
        alias: "state",
        elementName: "umb-document-table-column-state",
        allowSorting: !1
      }
    ]), this._tableItems = [], this._selection = [], T(this, o), this.consumeContext(Z, (e) => {
      fe(this, o, e), e?.setupView(this), this.observe(
        e?.workspacePathBuilder,
        (t) => {
          this._workspacePathBuilder = t, u(this, o) && m(this, c, x).call(this, u(this, o).getItems());
        },
        "observePath"
      ), m(this, c, Y).call(this);
    });
  }
  render() {
    return h`
			<umb-table
				.config=${this._tableConfig}
				.columns=${this._tableColumns}
				.items=${this._tableItems}
				.selection=${this._selection}
				@selected=${m(this, c, K)}
				@deselected=${m(this, c, X)}
				@ordered=${m(this, c, J)}></umb-table>
		`;
  }
};
N = /* @__PURE__ */ new WeakMap();
o = /* @__PURE__ */ new WeakMap();
c = /* @__PURE__ */ new WeakSet();
Y = function() {
  u(this, o) && (this.observe(
    u(this, o).userDefinedProperties,
    (e) => {
      this._userDefinedProperties = e, m(this, c, F).call(this);
    },
    "_observeUserDefinedProperties"
  ), this.observe(
    u(this, o).items,
    (e) => {
      this._items = e, m(this, c, x).call(this, this._items);
    },
    "_observeItems"
  ), this.observe(
    u(this, o).selection.selection,
    (e) => {
      this._selection = e;
    },
    "_observeSelection"
  ));
};
F = function() {
  if (this._userDefinedProperties && this._userDefinedProperties.length > 0) {
    const e = this._userDefinedProperties.map((t) => ({
      name: this.localize.string(t.header),
      alias: t.alias,
      elementName: t.elementName,
      labelTemplate: t.nameTemplate,
      allowSorting: !0
    }));
    this._tableColumns = [
      ...u(this, N),
      ...e,
      { name: "", alias: "entityActions", align: "right" }
    ];
  }
};
x = function(e) {
  this._tableItems = e.map((t) => {
    if (!t.unique) throw new Error("Item id is missing.");
    const a = this._tableColumns?.map((i) => {
      if (i.alias === "entityActions")
        return {
          columnAlias: "entityActions",
          value: h`<umb-document-entity-actions-table-column-view
								.value=${t}></umb-document-entity-actions-table-column-view>`
        };
      const s = t.unique && this._workspacePathBuilder ? this._workspacePathBuilder({ entityType: t.entityType }) + j.generateLocal({
        unique: t.unique
      }) : "";
      return {
        columnAlias: i.alias,
        value: i.elementName ? { item: t, editPath: s } : Q(t, i.alias)
      };
    }) ?? [];
    return {
      id: t.unique,
      icon: t.documentType.icon,
      entityType: ee,
      data: a
    };
  });
};
K = function(e) {
  e.stopPropagation();
  const a = e.target.selection;
  u(this, o)?.selection.setSelection(a);
};
X = function(e) {
  e.stopPropagation();
  const a = e.target.selection;
  u(this, o)?.selection.setSelection(a);
};
J = function(e) {
  const t = e.target, a = t.orderingColumn, i = t.orderingDesc;
  u(this, o)?.setFilter({
    orderBy: a,
    orderDirection: i ? "desc" : "asc"
  });
};
l.styles = [
  te,
  B`
			:host {
				display: block;
				box-sizing: border-box;
				height: auto;
				width: 100%;
				padding: var(--uui-size-space-3) 0;
			}

			.container {
				display: flex;
				justify-content: center;
				align-items: center;
			}
		`
];
_([
  p()
], l.prototype, "_workspacePathBuilder", 2);
_([
  p()
], l.prototype, "_userDefinedProperties", 2);
_([
  p()
], l.prototype, "_items", 2);
_([
  p()
], l.prototype, "_tableConfig", 2);
_([
  p()
], l.prototype, "_tableColumns", 2);
_([
  p()
], l.prototype, "_tableItems", 2);
_([
  p()
], l.prototype, "_selection", 2);
l = _([
  $("umb-document-table-collection-view")
], l);
const Ue = l;
export {
  l as UmbDocumentTableCollectionViewElement,
  Ue as default
};
//# sourceMappingURL=document-table-collection-view.element-CB6d5fth.js.map
