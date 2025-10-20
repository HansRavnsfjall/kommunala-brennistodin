import { UMB_COLLECTION_CONTEXT as O } from "@umbraco-cms/backoffice/collection";
import { property as T, customElement as h, LitElement as $, nothing as E, html as u, css as I, state as v } from "@umbraco-cms/backoffice/external/lit";
import { UmbTextStyles as d } from "@umbraco-cms/backoffice/style";
import { UmbLitElement as N } from "@umbraco-cms/backoffice/lit-element";
var q = Object.defineProperty, A = Object.getOwnPropertyDescriptor, y = (t, e, a, n) => {
  for (var l = n > 1 ? void 0 : n ? A(e, a) : e, i = t.length - 1, o; i >= 0; i--)
    (o = t[i]) && (l = (n ? o(e, a, l) : o(l)) || l);
  return n && l && q(e, a, l), l;
};
let m = class extends $ {
  render() {
    return this.value ? u`<a href=${"section/settings/workspace/language/edit/" + this.value.unique}>${this.value.name}</a>` : E;
  }
};
m.styles = [d];
y([
  T({ attribute: !1 })
], m.prototype, "value", 2);
m = y([
  h("umb-language-table-name-column-layout")
], m);
var x = Object.defineProperty, P = Object.getOwnPropertyDescriptor, C = (t) => {
  throw TypeError(t);
}, b = (t, e, a, n) => {
  for (var l = n > 1 ? void 0 : n ? P(e, a) : e, i = t.length - 1, o; i >= 0; i--)
    (o = t[i]) && (l = (n ? o(e, a, l) : o(l)) || l);
  return n && l && x(e, a, l), l;
}, p = (t, e, a) => e.has(t) || C("Cannot " + a), f = (t, e, a) => (p(t, e, "read from private field"), e.get(t)), _ = (t, e, a) => e.has(t) ? C("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, a), D = (t, e, a, n) => (p(t, e, "write to private field"), e.set(t, a), a), g = (t, e, a) => (p(t, e, "access private method"), a), r, c, w, L;
let s = class extends N {
  constructor() {
    super(), _(this, c), this._tableConfig = {
      allowSelection: !1
    }, this._tableColumns = [
      {
        name: "Name",
        alias: "languageName",
        elementName: "umb-language-table-name-column-layout"
      },
      {
        name: "ISO Code",
        alias: "isoCode"
      },
      {
        name: "Default",
        alias: "defaultLanguage"
      },
      {
        name: "Mandatory",
        alias: "mandatoryLanguage"
      },
      {
        name: "Fallback",
        alias: "fallbackLanguage"
      },
      {
        name: "",
        alias: "entityActions",
        align: "right"
      }
    ], this._tableItems = [], this._cultureNames = new Intl.DisplayNames("en", { type: "language" }), _(this, r), this.consumeContext(O, (t) => {
      D(this, r, t), g(this, c, w).call(this);
    });
  }
  render() {
    return u`
			<umb-table .config=${this._tableConfig} .columns=${this._tableColumns} .items=${this._tableItems}></umb-table>
		`;
  }
};
r = /* @__PURE__ */ new WeakMap();
c = /* @__PURE__ */ new WeakSet();
w = function() {
  f(this, r) && this.observe(f(this, r).items, (t) => g(this, c, L).call(this, t), "umbCollectionItemsObserver");
};
L = function(t) {
  this._tableItems = t.map((e) => ({
    id: e.unique,
    icon: "icon-globe",
    data: [
      {
        columnAlias: "languageName",
        value: {
          name: e.name ? e.name : this._cultureNames.of(e.unique),
          unique: e.unique
        }
      },
      {
        columnAlias: "isoCode",
        value: e.unique
      },
      {
        columnAlias: "defaultLanguage",
        value: u`<umb-boolean-table-column-view .value=${e.isDefault}></umb-boolean-table-column-view>`
      },
      {
        columnAlias: "mandatoryLanguage",
        value: u`<umb-boolean-table-column-view .value=${e.isMandatory}></umb-boolean-table-column-view>`
      },
      {
        columnAlias: "fallbackLanguage",
        value: t.find((a) => a.unique === e.fallbackIsoCode)?.name
      },
      {
        columnAlias: "entityActions",
        value: u`<umb-entity-actions-table-column-view
							.value=${{
          entityType: e.entityType,
          unique: e.unique,
          name: e.name
        }}></umb-entity-actions-table-column-view>`
      }
    ]
  }));
};
s.styles = [
  d,
  I`
			:host {
				display: flex;
				flex-direction: column;
			}
		`
];
b([
  v()
], s.prototype, "_tableConfig", 2);
b([
  v()
], s.prototype, "_tableColumns", 2);
b([
  v()
], s.prototype, "_tableItems", 2);
s = b([
  h("umb-language-table-collection-view")
], s);
const W = s;
export {
  s as UmbLanguageTableCollectionViewElement,
  W as default
};
//# sourceMappingURL=language-table-collection-view.element-BjuApPos.js.map
