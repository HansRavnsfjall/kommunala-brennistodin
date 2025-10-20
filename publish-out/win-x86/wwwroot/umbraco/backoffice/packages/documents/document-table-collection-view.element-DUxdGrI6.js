import { g as Q } from "./index-Cw5mP9uC.js";
import { j as Z, f as j, e as ee } from "./manifests-BP7S9LPy.js";
import { property as O, customElement as P, nothing as I, html as h, css as B, state as p } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as $ } from "@umbraco-cms/backoffice/lit-element";
import { UmbTextStyles as te } from "@umbraco-cms/backoffice/style";
import { UmbAncestorsEntityContext as se } from "@umbraco-cms/backoffice/entity";
import "@umbraco-cms/backoffice/external/backend-api";
import "@umbraco-cms/backoffice/repository";
import "@umbraco-cms/backoffice/entity-item";
import { U as z } from "./document-item-data-resolver-ClBbqArt.js";
import { fromCamelCase as ae } from "@umbraco-cms/backoffice/utils";
var ie = Object.defineProperty, re = Object.getOwnPropertyDescriptor, k = (e) => {
  throw TypeError(e);
}, q = (e, t, s, i) => {
  for (var a = i > 1 ? void 0 : i ? re(t, s) : t, r = e.length - 1, n; r >= 0; r--)
    (n = e[r]) && (a = (i ? n(t, s, a) : n(a)) || a);
  return i && a && ie(t, s, a), a;
}, ne = (e, t, s) => t.has(e) || k("Cannot " + s), oe = (e, t, s) => (ne(e, t, "read from private field"), s ? s.call(e) : t.get(e)), le = (e, t, s) => t.has(e) ? k("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, s), T;
let E = class extends $ {
  constructor() {
    super(...arguments), le(this, T, new se(this));
  }
  get value() {
    return this._value;
  }
  set value(e) {
    this._value = e, oe(this, T).setAncestors(this._value?.ancestors ?? []);
  }
  render() {
    return this._value ? h`
			<umb-entity-actions-table-column-view
				.value=${{ unique: this._value.unique, entityType: this._value.entityType }}>
			</umb-entity-actions-table-column-view>
		` : I;
  }
};
T = /* @__PURE__ */ new WeakMap();
q([
  O({ attribute: !1 })
], E.prototype, "value", 1);
E = q([
  P("umb-document-entity-actions-table-column-view")
], E);
var ue = Object.defineProperty, ce = Object.getOwnPropertyDescriptor, V = (e) => {
  throw TypeError(e);
}, S = (e, t, s, i) => {
  for (var a = i > 1 ? void 0 : i ? ce(t, s) : t, r = e.length - 1, n; r >= 0; r--)
    (n = e[r]) && (a = (i ? n(t, s, a) : n(a)) || a);
  return i && a && ue(t, s, a), a;
}, G = (e, t, s) => t.has(e) || V("Cannot " + s), b = (e, t, s) => (G(e, t, "read from private field"), s ? s.call(e) : t.get(e)), x = (e, t, s) => t.has(e) ? V("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, s), he = (e, t, s, i) => (G(e, t, "write to private field"), t.set(e, s), s), g, v;
let f = class extends $ {
  constructor() {
    super(), x(this, g), this._name = "", x(this, v, new z(this)), b(this, v).observe(b(this, v).name, (e) => this._name = e || "");
  }
  get value() {
    return b(this, g);
  }
  set value(e) {
    he(this, g, e), e.item && b(this, v).setData(e.item);
  }
  render() {
    return this.value ? h` <uui-button compact href=${this.value.editPath} label=${this._name}></uui-button> ` : I;
  }
};
g = /* @__PURE__ */ new WeakMap();
v = /* @__PURE__ */ new WeakMap();
f.styles = [
  B`
			uui-button {
				text-align: left;
			}
		`
];
S([
  O({ attribute: !1 })
], f.prototype, "value", 1);
S([
  p()
], f.prototype, "_name", 2);
f = S([
  P("umb-document-table-column-name")
], f);
var pe = Object.defineProperty, _e = Object.getOwnPropertyDescriptor, L = (e) => {
  throw TypeError(e);
}, U = (e, t, s, i) => {
  for (var a = i > 1 ? void 0 : i ? _e(t, s) : t, r = e.length - 1, n; r >= 0; r--)
    (n = e[r]) && (a = (i ? n(t, s, a) : n(a)) || a);
  return i && a && pe(t, s, a), a;
}, R = (e, t, s) => t.has(e) || L("Cannot " + s), y = (e, t, s) => (R(e, t, "read from private field"), s ? s.call(e) : t.get(e)), W = (e, t, s) => t.has(e) ? L("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, s), me = (e, t, s, i) => (R(e, t, "write to private field"), t.set(e, s), s), C, d;
let w = class extends $ {
  constructor() {
    super(), W(this, C), this._state = "", W(this, d, new z(this)), y(this, d).observe(y(this, d).state, (e) => this._state = e || "");
  }
  get value() {
    return y(this, C);
  }
  set value(e) {
    me(this, C, e), e.item && y(this, d).setData(e.item);
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
        return h`<uui-tag color="default" look="secondary">${ae(this._state)}</uui-tag>`;
    }
  }
};
C = /* @__PURE__ */ new WeakMap();
d = /* @__PURE__ */ new WeakMap();
U([
  O({ attribute: !1 })
], w.prototype, "value", 1);
U([
  p()
], w.prototype, "_state", 2);
w = U([
  P("umb-document-table-column-state")
], w);
var ve = Object.defineProperty, de = Object.getOwnPropertyDescriptor, H = (e) => {
  throw TypeError(e);
}, _ = (e, t, s, i) => {
  for (var a = i > 1 ? void 0 : i ? de(t, s) : t, r = e.length - 1, n; r >= 0; r--)
    (n = e[r]) && (a = (i ? n(t, s, a) : n(a)) || a);
  return i && a && ve(t, s, a), a;
}, A = (e, t, s) => t.has(e) || H("Cannot " + s), u = (e, t, s) => (A(e, t, "read from private field"), t.get(e)), D = (e, t, s) => t.has(e) ? H("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, s), fe = (e, t, s, i) => (A(e, t, "write to private field"), t.set(e, s), s), m = (e, t, s) => (A(e, t, "access private method"), s), M, o, c, Y, F, N, K, X, J;
let l = class extends $ {
  constructor() {
    super(), D(this, c), this._tableConfig = {
      allowSelection: !0
    }, this._tableColumns = [], D(this, M, [
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
    ]), this._tableItems = [], this._selection = [], D(this, o), this.consumeContext(Z, (e) => {
      fe(this, o, e), e?.setupView(this), this.observe(
        e?.workspacePathBuilder,
        (t) => {
          this._workspacePathBuilder = t, u(this, o) && m(this, c, N).call(this, u(this, o).getItems());
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
M = /* @__PURE__ */ new WeakMap();
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
      this._items = e, m(this, c, N).call(this, this._items);
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
      ...u(this, M),
      ...e,
      { name: "", alias: "entityActions", align: "right" }
    ];
  }
};
N = function(e) {
  this._tableItems = e.map((t) => {
    if (!t.unique) throw new Error("Item id is missing.");
    const s = this._tableColumns?.map((i) => {
      if (i.alias === "entityActions")
        return {
          columnAlias: "entityActions",
          value: h`<umb-document-entity-actions-table-column-view
								.value=${t}></umb-document-entity-actions-table-column-view>`
        };
      const a = t.unique && this._workspacePathBuilder ? this._workspacePathBuilder({ entityType: t.entityType }) + j.generateLocal({
        unique: t.unique
      }) : "";
      return {
        columnAlias: i.alias,
        value: i.elementName ? { item: t, editPath: a } : Q(t, i.alias)
      };
    }) ?? [];
    return {
      id: t.unique,
      icon: t.documentType.icon,
      entityType: ee,
      data: s
    };
  });
};
K = function(e) {
  e.stopPropagation();
  const s = e.target.selection;
  u(this, o)?.selection.setSelection(s);
};
X = function(e) {
  e.stopPropagation();
  const s = e.target.selection;
  u(this, o)?.selection.setSelection(s);
};
J = function(e) {
  const t = e.target, s = t.orderingColumn, i = t.orderingDesc;
  u(this, o)?.setFilter({
    orderBy: s,
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
  P("umb-document-table-collection-view")
], l);
const Se = l;
export {
  l as UmbDocumentTableCollectionViewElement,
  Se as default
};
//# sourceMappingURL=document-table-collection-view.element-DUxdGrI6.js.map
