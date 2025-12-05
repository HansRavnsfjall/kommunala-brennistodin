import { x as E } from "./paths-pWW_vsmu.js";
import { UMB_COLLECTION_CONTEXT as g } from "@umbraco-cms/backoffice/collection";
import { html as c, css as x, state as f, customElement as O } from "@umbraco-cms/backoffice/external/lit";
import { UmbTextStyles as $ } from "@umbraco-cms/backoffice/style";
import { UmbLitElement as A } from "@umbraco-cms/backoffice/lit-element";
import { UmbLanguageCollectionRepository as D } from "@umbraco-cms/backoffice/language";
var P = Object.defineProperty, U = Object.getOwnPropertyDescriptor, v = (e) => {
  throw TypeError(e);
}, m = (e, t, i, a) => {
  for (var n = a > 1 ? void 0 : a ? U(t, i) : t, u = e.length - 1, h; u >= 0; u--)
    (h = e[u]) && (n = (a ? h(t, i, n) : h(n)) || n);
  return a && n && P(t, i, n), n;
}, b = (e, t, i) => t.has(e) || v("Cannot " + i), _ = (e, t, i) => (b(e, t, "read from private field"), t.get(e)), p = (e, t, i) => t.has(e) ? v("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), q = (e, t, i, a) => (b(e, t, "write to private field"), t.set(e, i), i), s = (e, t, i) => (b(e, t, "access private method"), i), r, d, l, C, y, T, w, I;
let o = class extends A {
  constructor() {
    super(), p(this, l), this._tableConfig = {
      allowSelection: !1
    }, this._tableColumns = [
      {
        name: "Name",
        alias: "name"
      }
    ], this._tableItems = [], p(this, r), p(this, d, new D(this)), this.consumeContext(g, (e) => {
      q(this, r, e), s(this, l, C).call(this);
    });
  }
  render() {
    return c`
			<umb-table .config=${this._tableConfig} .columns=${this._tableColumns} .items=${this._tableItems}></umb-table>
		`;
  }
};
r = /* @__PURE__ */ new WeakMap();
d = /* @__PURE__ */ new WeakMap();
l = /* @__PURE__ */ new WeakSet();
C = async function() {
  if (!_(this, r)) return;
  const { data: e } = await _(this, d).requestCollection({});
  e && this.observe(
    _(this, r).items,
    (t) => {
      s(this, l, y).call(this, e.items), s(this, l, T).call(this, t, e.items);
    },
    "umbCollectionItemsObserver"
  );
};
y = function(e) {
  const t = [
    {
      name: this.localize.term("general_name"),
      alias: "name"
    }
  ], i = e.map((a) => ({
    name: a.name,
    alias: a.unique
  }));
  this._tableColumns = [...t, ...i];
};
T = function(e, t) {
  this._tableItems = e.map((i) => {
    const a = E.generateAbsolute({
      unique: i.unique
    });
    return {
      id: i.unique,
      icon: "icon-book-alt-2",
      data: [
        {
          columnAlias: "name",
          value: c`<a style="font-weight:bold" href=${a}> ${i.name}</a> `
        },
        ...t.map((n) => ({
          columnAlias: n.unique,
          value: i.translatedIsoCodes?.includes(n.unique) ? s(this, l, w).call(this, n.name) : s(this, l, I).call(this, n.name)
        }))
      ]
    };
  });
};
w = function(e) {
  return c`<uui-icon
			name="check"
			title="${this.localize.term("visuallyHiddenTexts_hasTranslation")} (${e})"
			style="color:var(--uui-color-positive-standalone);display:inline-block"></uui-icon>`;
};
I = function(e) {
  return c`<uui-icon
			name="alert"
			title="${this.localize.term("visuallyHiddenTexts_noTranslation")} (${e})"
			style="color:var(--uui-color-danger-standalone);display:inline-block"></uui-icon>`;
};
o.styles = [
  $,
  x`
			:host {
				display: flex;
				flex-direction: column;
			}
		`
];
m([
  f()
], o.prototype, "_tableConfig", 2);
m([
  f()
], o.prototype, "_tableColumns", 2);
m([
  f()
], o.prototype, "_tableItems", 2);
o = m([
  O("umb-dictionary-table-collection-view")
], o);
const L = o;
export {
  o as UmbDictionaryTableCollectionViewElement,
  L as default
};
//# sourceMappingURL=dictionary-table-collection-view.element-Jhyy_IqJ.js.map
