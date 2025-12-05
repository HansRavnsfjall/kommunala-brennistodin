import { q as B, x as U } from "./input-upload-field.element-BKvVffkE.js";
import { css as C, property as N, customElement as P, nothing as q, ifDefined as k, html as v, state as _ } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as D } from "@umbraco-cms/backoffice/lit-element";
import { UmbTextStyles as W } from "@umbraco-cms/backoffice/style";
var L = Object.defineProperty, V = Object.getOwnPropertyDescriptor, T = (e) => {
  throw TypeError(e);
}, E = (e, t, s, a) => {
  for (var i = a > 1 ? void 0 : a ? V(t, s) : t, h = e.length - 1, p; h >= 0; h--)
    (p = e[h]) && (i = (a ? p(t, s, i) : p(i)) || i);
  return a && i && L(t, s, i), i;
}, z = (e, t, s) => t.has(e) || T("Cannot " + s), H = (e, t, s) => t.has(e) ? T("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, s), R = (e, t, s) => (z(e, t, "access private method"), s), b, $;
let d = class extends D {
  constructor() {
    super(...arguments), H(this, b);
  }
  render() {
    return this.value ? v`
			<uui-button
				compact
				href=${this.value.editPath}
				label=${k(this.value.item.name)}
				@click=${R(this, b, $)}></uui-button>
		` : q;
  }
};
b = /* @__PURE__ */ new WeakSet();
$ = function(e) {
  e.preventDefault(), e.stopPropagation(), window.history.pushState(null, "", e.target.href);
};
d.styles = [
  C`
			uui-button {
				text-align: left;
			}
		`
];
E([
  N({ attribute: !1 })
], d.prototype, "value", 2);
d = E([
  P("umb-media-table-column-name")
], d);
var F = Object.defineProperty, G = Object.getOwnPropertyDescriptor, S = (e) => {
  throw TypeError(e);
}, u = (e, t, s, a) => {
  for (var i = a > 1 ? void 0 : a ? G(t, s) : t, h = e.length - 1, p; h >= 0; h--)
    (p = e[h]) && (i = (a ? p(t, s, i) : p(i)) || i);
  return a && i && F(t, s, i), i;
}, y = (e, t, s) => t.has(e) || S("Cannot " + s), c = (e, t, s) => (y(e, t, "read from private field"), t.get(e)), f = (e, t, s) => t.has(e) ? S("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, s), K = (e, t, s, a) => (y(e, t, "write to private field"), t.set(e, s), s), l = (e, t, s) => (y(e, t, "access private method"), s), m, o, r, A, g, w, O, M, I, x;
let n = class extends D {
  constructor() {
    super(), f(this, r), this._tableConfig = {
      allowSelection: !0
    }, this._tableColumns = [], f(this, m, [
      {
        name: this.localize.term("general_name"),
        alias: "name",
        elementName: "umb-media-table-column-name",
        allowSorting: !0
      }
    ]), this._tableItems = [], this._selection = [], f(this, o), this.consumeContext(B, (e) => {
      K(this, o, e), l(this, r, A).call(this), e?.setupView(this), this.observe(
        e?.workspacePathBuilder,
        (t) => {
          this._workspacePathBuilder = t, l(this, r, w).call(this);
        },
        "observePath"
      );
    });
  }
  render() {
    return v`
			<umb-table
				.config=${this._tableConfig}
				.columns=${this._tableColumns}
				.items=${this._tableItems}
				.selection=${this._selection}
				@selected=${l(this, r, M)}
				@deselected=${l(this, r, I)}
				@ordered=${l(this, r, x)}></umb-table>
		`;
  }
};
m = /* @__PURE__ */ new WeakMap();
o = /* @__PURE__ */ new WeakMap();
r = /* @__PURE__ */ new WeakSet();
A = function() {
  c(this, o) && (this.observe(
    c(this, o).userDefinedProperties,
    (e) => {
      this._userDefinedProperties = e, l(this, r, g).call(this);
    },
    "_observeUserDefinedProperties"
  ), this.observe(
    c(this, o).items,
    (e) => {
      this._items = e, l(this, r, w).call(this);
    },
    "_observeItems"
  ), this.observe(
    c(this, o).selection.selection,
    (e) => {
      this._selection = e;
    },
    "_observeSelection"
  ));
};
g = function() {
  if (this._userDefinedProperties && this._userDefinedProperties.length > 0) {
    const e = this._userDefinedProperties.map((t) => ({
      name: this.localize.string(t.header),
      alias: t.alias,
      elementName: t.elementName,
      allowSorting: !0
    }));
    this._tableColumns = [
      ...c(this, m),
      ...e,
      { name: "", alias: "entityActions", align: "right" }
    ];
  } else
    this._tableColumns = [...c(this, m), { name: "", alias: "entityActions", align: "right" }];
};
w = function() {
  this._tableItems = [], this._items !== void 0 && this._workspacePathBuilder !== void 0 && (this._tableColumns.length === 0 && l(this, r, g).call(this), this._tableItems = this._items.map((e) => {
    if (!e.unique) throw new Error("Item id is missing.");
    const t = this._tableColumns?.map((s) => {
      if (s.alias === "entityActions")
        return {
          columnAlias: "entityActions",
          value: v`<umb-entity-actions-table-column-view
								.value=${{
            entityType: e.entityType,
            unique: e.unique,
            name: e.name
          }}></umb-entity-actions-table-column-view>`
        };
      const a = e.unique && this._workspacePathBuilder ? this._workspacePathBuilder({ entityType: e.entityType }) + U.generateLocal({
        unique: e.unique
      }) : "";
      return {
        columnAlias: s.alias,
        value: s.elementName ? { item: e, editPath: a } : l(this, r, O).call(this, e, s.alias)
      };
    }) ?? [];
    return {
      id: e.unique,
      icon: e.icon,
      entityType: "media",
      data: t
    };
  }));
};
O = function(e, t) {
  switch (t) {
    case "contentTypeAlias":
      return e.contentTypeAlias;
    case "createDate":
      return e.createDate.toLocaleString();
    case "name":
      return e.name;
    case "creator":
    case "owner":
      return e.creator;
    case "sortOrder":
      return e.sortOrder;
    case "updateDate":
      return e.updateDate.toLocaleString();
    case "updater":
      return e.updater;
    default:
      return e.values?.find((s) => s.alias === t)?.value ?? "";
  }
};
M = function(e) {
  e.stopPropagation();
  const s = e.target.selection;
  c(this, o)?.selection.setSelection(s);
};
I = function(e) {
  e.stopPropagation();
  const s = e.target.selection;
  c(this, o)?.selection.setSelection(s);
};
x = function(e) {
  const t = e.target, s = t.orderingColumn, a = t.orderingDesc;
  c(this, o)?.setFilter({
    orderBy: s,
    orderDirection: a ? "desc" : "asc"
  });
};
n.styles = [
  W,
  C`
			:host {
				display: block;
				box-sizing: border-box;
				height: auto;
				width: 100%;
			}

			.container {
				display: flex;
				justify-content: center;
				align-items: center;
			}
		`
];
u([
  _()
], n.prototype, "_userDefinedProperties", 2);
u([
  _()
], n.prototype, "_workspacePathBuilder", 2);
u([
  _()
], n.prototype, "_items", 2);
u([
  _()
], n.prototype, "_tableConfig", 2);
u([
  _()
], n.prototype, "_tableColumns", 2);
u([
  _()
], n.prototype, "_tableItems", 2);
u([
  _()
], n.prototype, "_selection", 2);
n = u([
  P("umb-media-table-collection-view")
], n);
const Z = n;
export {
  n as UmbMediaTableCollectionViewElement,
  Z as default
};
//# sourceMappingURL=media-table-collection-view.element-BPApBkhR.js.map
