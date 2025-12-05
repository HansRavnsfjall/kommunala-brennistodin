import { css as f, property as k, customElement as C, LitElement as A, nothing as U, html as v, state as _ } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as W } from "@umbraco-cms/backoffice/lit-element";
import { UMB_COLLECTION_CONTEXT as x } from "@umbraco-cms/backoffice/collection";
import { UmbTextStyles as D } from "@umbraco-cms/backoffice/style";
var S = Object.defineProperty, I = Object.getOwnPropertyDescriptor, w = (t) => {
  throw TypeError(t);
}, y = (t, e, a, l) => {
  for (var o = l > 1 ? void 0 : l ? I(e, a) : e, s = t.length - 1, r; s >= 0; s--)
    (r = t[s]) && (o = (l ? r(e, a, o) : r(o)) || o);
  return l && o && S(e, a, o), o;
}, P = (t, e, a) => e.has(t) || w("Cannot " + a), L = (t, e, a) => e.has(t) ? w("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, a), z = (t, e, a) => (P(t, e, "access private method"), a), m, g;
let u = class extends A {
  constructor() {
    super(...arguments), L(this, m), this.value = "";
  }
  render() {
    return this.value.length === 0 ? U : v`<uui-tag color=${z(this, m, g).call(this)} look="secondary">${this.value}</uui-tag>`;
  }
};
m = /* @__PURE__ */ new WeakSet();
g = function() {
  return this.value.includes("(2") ? "positive" : this.value.includes("(4") ? "warning" : this.value.includes("(5") ? "danger" : "default";
};
u.styles = [
  D,
  f`
			:host {
				white-space: nowrap;
			}
		`
];
y([
  k({ attribute: !1 })
], u.prototype, "value", 2);
u = y([
  C("umb-webhook-delivery-table-status-code-column-layout")
], u);
var M = Object.defineProperty, N = Object.getOwnPropertyDescriptor, E = (t) => {
  throw TypeError(t);
}, h = (t, e, a, l) => {
  for (var o = l > 1 ? void 0 : l ? N(e, a) : e, s = t.length - 1, r; s >= 0; s--)
    (r = t[s]) && (o = (l ? r(e, a, o) : r(o)) || o);
  return l && o && M(e, a, o), o;
}, p = (t, e, a) => e.has(t) || E("Cannot " + a), b = (t, e, a) => (p(t, e, "read from private field"), e.get(t)), d = (t, e, a) => e.has(t) ? E("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, a), V = (t, e, a, l) => (p(t, e, "write to private field"), e.set(t, a), a), $ = (t, e, a) => (p(t, e, "access private method"), a), n, c, T, O;
let i = class extends W {
  constructor() {
    super(), d(this, c), this._tableConfig = {
      allowSelection: !1
    }, this._tableColumns = [
      {
        name: this.localize.term("general_date"),
        alias: "date"
      },
      {
        name: this.localize.term("webhooks_url"),
        alias: "eventUrl"
      },
      {
        name: this.localize.term("webhooks_event"),
        alias: "eventAlias"
      },
      {
        name: this.localize.term("webhooks_statusCode"),
        alias: "statusCode",
        elementName: "umb-webhook-delivery-table-status-code-column-layout"
      },
      {
        name: this.localize.term("webhooks_retryCount"),
        alias: "retryCount"
      }
    ], this._tableItems = [], d(this, n), this.consumeContext(x, (t) => {
      V(this, n, t), $(this, c, T).call(this);
    });
  }
  render() {
    return v`
			<umb-table .config=${this._tableConfig} .columns=${this._tableColumns} .items=${this._tableItems}></umb-table>
		`;
  }
};
n = /* @__PURE__ */ new WeakMap();
c = /* @__PURE__ */ new WeakSet();
T = function() {
  b(this, n) && this.observe(b(this, n).items, (t) => $(this, c, O).call(this, t), "umbCollectionItemsObserver");
};
O = function(t) {
  this._tableItems = t.map((e) => ({
    id: e.unique,
    icon: "icon-box-alt",
    data: [
      {
        columnAlias: "date",
        value: v`<umb-date-table-column-view .value=${e.date}></umb-date-table-column-view>`
      },
      {
        columnAlias: "eventUrl",
        value: e.url
      },
      {
        columnAlias: "eventAlias",
        value: e.eventAlias
      },
      {
        columnAlias: "statusCode",
        value: e.statusCode
      },
      {
        columnAlias: "retryCount",
        value: e.retryCount
      }
    ]
  }));
};
i.styles = [
  f`
			:host {
				display: flex;
				flex-direction: column;
			}
		`
];
h([
  _()
], i.prototype, "_tableConfig", 2);
h([
  _()
], i.prototype, "_tableColumns", 2);
h([
  _()
], i.prototype, "_tableItems", 2);
i = h([
  C("umb-webhook-delivery-table-collection-view")
], i);
const F = i;
export {
  i as UmbWebhookDeliveryTableCollectionViewElement,
  F as default
};
//# sourceMappingURL=webhook-delivery-table-collection-view.element-BBRX696F.js.map
