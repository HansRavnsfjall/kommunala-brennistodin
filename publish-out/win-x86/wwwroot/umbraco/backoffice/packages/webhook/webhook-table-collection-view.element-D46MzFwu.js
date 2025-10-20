import { css as I, property as U, customElement as $, LitElement as B, nothing as M, html as c, state as T } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as k } from "@umbraco-cms/backoffice/lit-element";
import { UMB_COLLECTION_CONTEXT as V } from "@umbraco-cms/backoffice/collection";
import { UmbTextStyles as L } from "@umbraco-cms/backoffice/style";
import { UmbMediaTypeItemRepository as G } from "@umbraco-cms/backoffice/media-type";
import { UmbDocumentTypeItemRepository as H } from "@umbraco-cms/backoffice/document-type";
import { q as K } from "./paths-CYf6P2Vl.js";
var X = Object.defineProperty, F = Object.getOwnPropertyDescriptor, N = (t, e, a, s) => {
  for (var n = s > 1 ? void 0 : s ? F(e, a) : e, i = t.length - 1, o; i >= 0; i--)
    (o = t[i]) && (n = (s ? o(e, a, n) : o(n)) || n);
  return s && n && X(e, a, n), n;
};
let v = class extends B {
  render() {
    return this.value ? c`<a href=${"section/settings/workspace/webhook/edit/" + this.value.unique}>${this.value.name}</a>` : M;
  }
};
v.styles = [
  L,
  I`
			:host {
				white-space: nowrap;
			}
		`
];
N([
  U({ attribute: !1 })
], v.prototype, "value", 2);
v = N([
  $("umb-webhook-table-name-column-layout")
], v);
var J = Object.defineProperty, Q = Object.getOwnPropertyDescriptor, x = (t) => {
  throw TypeError(t);
}, g = (t, e, a, s) => {
  for (var n = s > 1 ? void 0 : s ? Q(e, a) : e, i = t.length - 1, o; i >= 0; i--)
    (o = t[i]) && (n = (s ? o(e, a, n) : o(n)) || n);
  return s && n && J(e, a, n), n;
}, E = (t, e, a) => e.has(t) || x("Cannot " + a), W = (t, e, a) => (E(t, e, "read from private field"), a ? a.call(t) : e.get(t)), P = (t, e, a) => e.has(t) ? x("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, a), A = (t, e, a, s) => (E(t, e, "write to private field"), e.set(t, a), a), Y = (t, e, a) => (E(t, e, "access private method"), a), r, w, z;
let p = class extends k {
  constructor() {
    super(...arguments), P(this, w), this._contentTypes = "", P(this, r);
  }
  connectedCallback() {
    super.connectedCallback(), Y(this, w, z).call(this);
  }
  render() {
    return this.value ? c`${this._contentTypes}` : M;
  }
};
r = /* @__PURE__ */ new WeakMap();
w = /* @__PURE__ */ new WeakSet();
z = async function() {
  switch (this.value?.contentTypeName) {
    case "Content":
      A(this, r, new H(this));
      break;
    case "Media":
      A(this, r, new G(this));
      break;
  }
  if (this.value?.contentTypeName && W(this, r)) {
    const { data: t } = await W(this, r).requestItems(this.value.contentTypes);
    this._contentTypes = t?.map((e) => this.localize.string(e.name)).join(", ") ?? "";
  }
};
p.styles = [L];
g([
  U({ attribute: !1 })
], p.prototype, "value", 2);
g([
  T()
], p.prototype, "_contentTypes", 2);
p = g([
  $("umb-webhook-table-content-type-column-layout")
], p);
var Z = Object.defineProperty, j = Object.getOwnPropertyDescriptor, S = (t) => {
  throw TypeError(t);
}, C = (t, e, a, s) => {
  for (var n = s > 1 ? void 0 : s ? j(e, a) : e, i = t.length - 1, o; i >= 0; i--)
    (o = t[i]) && (n = (s ? o(e, a, n) : o(n)) || n);
  return s && n && Z(e, a, n), n;
}, O = (t, e, a) => e.has(t) || S("Cannot " + a), u = (t, e, a) => (O(t, e, "read from private field"), e.get(t)), m = (t, e, a) => e.has(t) ? S("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, a), _ = (t, e, a, s) => (O(t, e, "write to private field"), e.set(t, a), a), q = (t, e, a) => (O(t, e, "access private method"), a), h, b, y, f, d, D, R;
let l = class extends k {
  constructor() {
    super(), m(this, d), this._tableConfig = {
      allowSelection: !1
    }, this._tableColumns = [
      {
        name: this.localize.term("general_name"),
        alias: "name"
      },
      {
        name: this.localize.term("webhooks_url"),
        alias: "url"
      },
      {
        name: this.localize.term("webhooks_events"),
        alias: "events"
      },
      {
        name: this.localize.term("webhooks_types"),
        alias: "contentTypes",
        elementName: "umb-webhook-table-content-type-column-layout"
      },
      {
        name: this.localize.term("general_status"),
        alias: "status"
      },
      {
        name: "",
        alias: "entityActions",
        align: "right"
      }
    ], this._tableItems = [], m(this, h), m(this, b), m(this, y), m(this, f), _(this, b, this.localize.term("webhooks_enabled")), _(this, y, this.localize.term("webhooks_disabled")), _(this, f, this.localize.term("webhooks_unnamedWebhook")), this.consumeContext(V, (t) => {
      _(this, h, t), q(this, d, D).call(this);
    });
  }
  render() {
    return c`
			<umb-table .config=${this._tableConfig} .columns=${this._tableColumns} .items=${this._tableItems}></umb-table>
		`;
  }
};
h = /* @__PURE__ */ new WeakMap();
b = /* @__PURE__ */ new WeakMap();
y = /* @__PURE__ */ new WeakMap();
f = /* @__PURE__ */ new WeakMap();
d = /* @__PURE__ */ new WeakSet();
D = function() {
  u(this, h) && this.observe(u(this, h).items, (t) => q(this, d, R).call(this, t), "umbCollectionItemsObserver");
};
R = function(t) {
  this._tableItems = t.map((e) => {
    const a = e.name || `(${u(this, f)})`, s = K.generateAbsolute({ unique: e.unique });
    return {
      id: e.unique,
      icon: "icon-webhook",
      data: [
        {
          columnAlias: "name",
          value: c`<a href=${s}>${a}</a>`
        },
        {
          columnAlias: "url",
          value: e.url
        },
        {
          columnAlias: "events",
          value: e.events.map((n) => n.eventName).join(", ") || "None"
        },
        {
          columnAlias: "contentTypes",
          value: { contentTypeName: e.events[0].eventType, contentTypes: e.contentTypes }
        },
        {
          columnAlias: "status",
          value: c`<uui-tag color=${e.enabled ? "positive" : "danger"}
							>${e.enabled ? u(this, b) : u(this, y)}</uui-tag
						>`
        },
        {
          columnAlias: "entityActions",
          value: c`<umb-entity-actions-table-column-view
							.value=${{
            entityType: e.entityType,
            unique: e.unique,
            name: e.name
          }}></umb-entity-actions-table-column-view>`
        }
      ]
    };
  });
};
l.styles = [
  I`
			:host {
				display: flex;
				flex-direction: column;
			}
		`
];
C([
  T()
], l.prototype, "_tableConfig", 2);
C([
  T()
], l.prototype, "_tableColumns", 2);
C([
  T()
], l.prototype, "_tableItems", 2);
l = C([
  $("umb-webhook-table-collection-view")
], l);
const le = l;
export {
  l as UmbWebhookTableCollectionViewElement,
  le as default
};
//# sourceMappingURL=webhook-table-collection-view.element-D46MzFwu.js.map
