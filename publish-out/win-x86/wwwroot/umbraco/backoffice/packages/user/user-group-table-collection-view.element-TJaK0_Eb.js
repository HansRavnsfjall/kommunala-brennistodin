import { j as W, g as x } from "./constants-jrjjZjNa.js";
import { UmbTextStyles as A } from "@umbraco-cms/backoffice/style";
import { css as L, property as C, customElement as E, LitElement as j, html as N, state as v } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as I } from "@umbraco-cms/backoffice/lit-element";
import { umbExtensionsRegistry as G, createExtensionApiByAlias as M } from "@umbraco-cms/backoffice/extension-registry";
var B = Object.defineProperty, V = Object.getOwnPropertyDescriptor, P = (t, e, s, i) => {
  for (var a = i > 1 ? void 0 : i ? V(e, s) : e, r = t.length - 1, o; r >= 0; r--)
    (o = t[r]) && (a = (i ? o(e, s, a) : o(a)) || a);
  return i && a && B(e, s, a), a;
};
let d = class extends j {
  render() {
    const t = W + "/edit/" + this.item.id;
    return N`<a href=${t}>${this.value.name}</a>`;
  }
};
d.styles = [
  A,
  L`
			a {
				font-weight: bold;
			}
		`
];
P([
  C({ type: Object, attribute: !1 })
], d.prototype, "item", 2);
P([
  C({ attribute: !1 })
], d.prototype, "value", 2);
d = P([
  E("umb-user-group-table-name-column-layout")
], d);
var H = Object.defineProperty, K = Object.getOwnPropertyDescriptor, g = (t, e, s, i) => {
  for (var a = i > 1 ? void 0 : i ? K(e, s) : e, r = t.length - 1, o; r >= 0; r--)
    (o = t[r]) && (a = (i ? o(e, s, a) : o(a)) || a);
  return i && a && H(e, s, a), a;
};
let f = class extends I {
  constructor() {
    super(...arguments), this._sectionsNames = [];
  }
  updated(t) {
    t.has("value") && this.observeSectionNames();
  }
  observeSectionNames() {
    this.observe(
      G.byType("section"),
      (t) => {
        this._sectionsNames = t.filter((e) => this.value.includes(e.alias)).map((e) => e.meta.label ? this.localize.string(e.meta.label) : e.name);
      },
      "umbUserGroupTableSectionsColumnLayoutObserver"
    );
  }
  render() {
    return N`${this._sectionsNames.join(", ")}`;
  }
};
g([
  C({ type: Object, attribute: !1 })
], f.prototype, "item", 2);
g([
  C({ attribute: !1 })
], f.prototype, "value", 2);
g([
  v()
], f.prototype, "_sectionsNames", 2);
f = g([
  E("umb-user-group-table-sections-column-layout")
], f);
var X = Object.defineProperty, F = Object.getOwnPropertyDescriptor, R = (t) => {
  throw TypeError(t);
}, y = (t, e, s, i) => {
  for (var a = i > 1 ? void 0 : i ? F(e, s) : e, r = t.length - 1, o; r >= 0; r--)
    (o = t[r]) && (a = (i ? o(e, s, a) : o(a)) || a);
  return i && a && X(e, s, a), a;
}, T = (t, e, s) => e.has(t) || R("Cannot " + s), n = (t, e, s) => (T(t, e, "read from private field"), e.get(t)), p = (t, e, s) => e.has(t) ? R("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, s), O = (t, e, s, i) => (T(t, e, "write to private field"), e.set(t, s), s), b = (t, e, s) => (T(t, e, "access private method"), s), m, h, _, S, w, c, q, U, D, z;
let l = class extends I {
  constructor() {
    super(), p(this, c), this._tableConfig = {
      allowSelection: !0
    }, this._tableColumns = [
      {
        name: this.localize.term("general_name"),
        alias: "userGroupName",
        elementName: "umb-user-group-table-name-column-layout"
      },
      {
        name: this.localize.term("main_sections"),
        alias: "userGroupSections",
        elementName: "umb-user-group-table-sections-column-layout"
      },
      {
        name: this.localize.term("user_startnode"),
        alias: "userGroupContentStartNode"
      },
      {
        name: this.localize.term("user_mediastartnode"),
        alias: "userGroupMediaStartNode"
      },
      {
        name: "",
        alias: "entityActions",
        align: "right"
      }
    ], this._tableItems = [], this._selection = [], p(this, m), p(this, h), p(this, _), p(this, S, /* @__PURE__ */ new Map()), p(this, w, /* @__PURE__ */ new Map()), this.consumeContext(x, (t) => {
      O(this, m, t), this.observe(
        n(this, m)?.selection.selection,
        (e) => this._selection = e ?? [],
        "umbCollectionSelectionObserver"
      ), this.observe(
        n(this, m)?.items,
        async (e) => {
          await b(this, c, q).call(this), this._createTableItems(e ?? []);
        },
        "umbCollectionItemsObserver"
      );
    });
  }
  async _createTableItems(t) {
    if (!n(this, h) || !n(this, _))
      throw new Error("Document and media item repositories are not initialized.");
    await Promise.all([
      b(this, c, U).call(this, t, "documentStartNode", n(this, h), n(this, S)),
      b(this, c, U).call(this, t, "mediaStartNode", n(this, _), n(this, w))
    ]), this._tableItems = t.map((e) => ({
      id: e.unique,
      icon: e.icon,
      data: [
        {
          columnAlias: "userGroupName",
          value: {
            name: e.name
          }
        },
        {
          columnAlias: "userGroupSections",
          value: e.sections
        },
        {
          columnAlias: "userGroupContentStartNode",
          value: e.documentStartNode ? n(this, S).get(e.documentStartNode.unique) : this.localize.term("content_contentRoot")
        },
        {
          columnAlias: "userGroupMediaStartNode",
          value: e.mediaStartNode?.unique ? n(this, w).get(e.mediaStartNode.unique) : this.localize.term("media_mediaRoot")
        },
        {
          columnAlias: "entityActions",
          value: N`<umb-entity-actions-table-column-view
							.value=${{
            entityType: e.entityType,
            unique: e.unique,
            name: e.name
          }}></umb-entity-actions-table-column-view>`
        }
      ]
    }));
  }
  render() {
    return N`
			<umb-table
				.config=${this._tableConfig}
				.columns=${this._tableColumns}
				.items=${this._tableItems}
				.selection=${this._selection}
				@selected="${b(this, c, D)}"
				@deselected="${b(this, c, z)}"></umb-table>
		`;
  }
};
m = /* @__PURE__ */ new WeakMap();
h = /* @__PURE__ */ new WeakMap();
_ = /* @__PURE__ */ new WeakMap();
S = /* @__PURE__ */ new WeakMap();
w = /* @__PURE__ */ new WeakMap();
c = /* @__PURE__ */ new WeakSet();
q = async function() {
  n(this, h) && n(this, _) || (O(this, h, await M(
    this,
    "Umb.Repository.DocumentItem"
  )), O(this, _, await M(
    this,
    "Umb.Repository.MediaItem"
  )));
};
U = async function(t, e, s, i) {
  const a = t.map((u) => u[e]?.unique).filter(Boolean), o = [...new Set(a)].filter((u) => !i.has(u));
  if (o.length === 0) return;
  const { data: $ } = await s.requestItems(o);
  $ && $.forEach((u) => {
    i.set(u.unique, u.name);
  });
};
D = function(t) {
  t.stopPropagation();
  const s = t.target.selection;
  n(this, m)?.selection.setSelection(s);
};
z = function(t) {
  t.stopPropagation();
  const s = t.target.selection;
  n(this, m)?.selection.setSelection(s);
};
l.styles = [A];
y([
  v()
], l.prototype, "_tableConfig", 2);
y([
  v()
], l.prototype, "_tableColumns", 2);
y([
  v()
], l.prototype, "_tableItems", 2);
y([
  v()
], l.prototype, "_selection", 2);
l = y([
  E("umb-user-group-collection-table-view")
], l);
const ee = l;
export {
  l as UmbUserGroupCollectionTableViewElement,
  ee as default
};
//# sourceMappingURL=user-group-table-collection-view.element-TJaK0_Eb.js.map
