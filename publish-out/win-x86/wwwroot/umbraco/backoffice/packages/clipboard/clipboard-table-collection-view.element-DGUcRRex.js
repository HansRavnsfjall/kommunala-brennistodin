import { UMB_COLLECTION_CONTEXT as w } from "@umbraco-cms/backoffice/collection";
import { html as b, css as y, state as _, customElement as E } from "@umbraco-cms/backoffice/external/lit";
import { UmbTextStyles as I } from "@umbraco-cms/backoffice/style";
import { UmbLitElement as O } from "@umbraco-cms/backoffice/lit-element";
var T = Object.defineProperty, x = Object.getOwnPropertyDescriptor, f = (e) => {
  throw TypeError(e);
}, n = (e, t, a, o) => {
  for (var s = o > 1 ? void 0 : o ? x(t, a) : t, c = e.length - 1, m; c >= 0; c--)
    (m = e[c]) && (s = (o ? m(t, a, s) : m(s)) || s);
  return o && s && T(t, a, s), s;
}, p = (e, t, a) => t.has(e) || f("Cannot " + a), h = (e, t, a) => (p(e, t, "read from private field"), t.get(e)), v = (e, t, a) => t.has(e) ? f("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, a), g = (e, t, a, o) => (p(e, t, "write to private field"), t.set(e, a), a), u = (e, t, a) => (p(e, t, "access private method"), a), r, l, d, C;
let i = class extends O {
  constructor() {
    super(), v(this, l), this._tableConfig = {
      allowSelection: !1
    }, this._tableColumns = [
      {
        name: "Name",
        alias: "name"
      }
    ], this._tableItems = [], v(this, r), this.consumeContext(w, (e) => {
      g(this, r, e), u(this, l, d).call(this);
    });
  }
  render() {
    return b`
			<umb-table .config=${this._tableConfig} .columns=${this._tableColumns} .items=${this._tableItems}></umb-table>
		`;
  }
};
r = /* @__PURE__ */ new WeakMap();
l = /* @__PURE__ */ new WeakSet();
d = function() {
  h(this, r) && this.observe(h(this, r).items, (e) => u(this, l, C).call(this, e), "umbCollectionItemsObserver");
};
C = function(e) {
  this._tableItems = e.map((t) => ({
    id: t.unique,
    icon: t.icon ?? "icon-clipboard-entry",
    data: [
      {
        columnAlias: "name",
        value: b`<div>${t.name}</div>`
      }
    ]
  }));
};
i.styles = [
  I,
  y`
			:host {
				display: flex;
				flex-direction: column;
			}
		`
];
n([
  _()
], i.prototype, "_tableConfig", 2);
n([
  _()
], i.prototype, "_tableColumns", 2);
n([
  _()
], i.prototype, "_tableItems", 2);
i = n([
  E("umb-clipboard-table-collection-view")
], i);
export {
  i as UmbClipboardTableCollectionViewElement,
  i as element
};
//# sourceMappingURL=clipboard-table-collection-view.element-DGUcRRex.js.map
