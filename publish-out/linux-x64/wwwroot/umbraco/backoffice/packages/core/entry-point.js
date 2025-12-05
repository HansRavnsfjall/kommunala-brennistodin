import { U as rt } from "./auth.context.token-CFi72pnR.js";
import { a as st, U as nt } from "./table.element-WzZp4EZn.js";
import { U as at } from "./action-event.context-BeHwOgGP.js";
import { manifests as ot } from "./manifests.js";
import { UmbNotificationContext as pt } from "@umbraco-cms/backoffice/notification";
import { UmbModalManagerContext as lt } from "@umbraco-cms/backoffice/modal";
import { UmbExtensionsElementInitializer as ht, UmbExtensionsElementAndApiInitializer as ct, UmbExtensionsApiInitializer as A } from "@umbraco-cms/backoffice/extension-api";
import "./property-action-menu.element--L8-pHCY.js";
import "./menu-item-layout.element-j-U3XX9c.js";
import { u as J } from "./registry-COJCa03J.js";
import { css as K, state as G, property as a, customElement as N, repeat as Y, nothing as Z, html as H } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as j } from "@umbraco-cms/backoffice/lit-element";
import { UUIRefNodeElement as dt, UUIIconRequestEvent as F } from "@umbraco-cms/backoffice/external/uui";
import { UmbElementMixin as ft } from "@umbraco-cms/backoffice/element-api";
import "./entity-item-ref.element-D7uqzGIJ.js";
var mt = Object.defineProperty, _t = Object.getOwnPropertyDescriptor, V = (t) => {
  throw TypeError(t);
}, v = (t, e, i, n) => {
  for (var r = n > 1 ? void 0 : n ? _t(e, i) : e, h = t.length - 1, c; h >= 0; h--)
    (c = t[h]) && (r = (n ? c(e, i, r) : c(r)) || r);
  return n && r && mt(e, i, r), r;
}, L = (t, e, i) => e.has(t) || V("Cannot " + i), o = (t, e, i) => (L(t, e, "read from private field"), i ? i.call(t) : e.get(t)), y = (t, e, i) => e.has(t) ? V("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), E = (t, e, i, n) => (L(t, e, "write to private field"), e.set(t, i), i), B = (t, e, i) => (L(t, e, "access private method"), i), k, u, w, g, W, U, D, z;
let f = class extends j {
  constructor() {
    super(...arguments), y(this, U), y(this, k, !1), y(this, u), y(this, w), y(this, g, () => !0), y(this, W, {}), y(this, z, (t, e) => this.renderMethod ? this.renderMethod(t, e) : t.component);
  }
  get type() {
    return o(this, w);
  }
  set type(t) {
    t !== o(this, w) && (E(this, w, t), B(this, U, D).call(this));
  }
  get filter() {
    return o(this, g);
  }
  set filter(t) {
    t !== o(this, g) && (E(this, g, t), B(this, U, D).call(this));
  }
  get props() {
    return o(this, W);
  }
  set props(t) {
    E(this, W, t), o(this, u) && (o(this, u).properties = t);
  }
  connectedCallback() {
    super.connectedCallback(), E(this, k, !0), B(this, U, D).call(this);
  }
  disconnectedCallback() {
    E(this, k, !1), o(this, u)?.destroy(), E(this, u, void 0), super.disconnectedCallback();
  }
  render() {
    return this._permitted ? this._permitted.length > 0 ? Y(this._permitted, (t) => t.alias, o(this, z)) : H`<slot></slot>` : Z;
  }
};
k = /* @__PURE__ */ new WeakMap();
u = /* @__PURE__ */ new WeakMap();
w = /* @__PURE__ */ new WeakMap();
g = /* @__PURE__ */ new WeakMap();
W = /* @__PURE__ */ new WeakMap();
U = /* @__PURE__ */ new WeakSet();
D = function() {
  o(this, k) && (o(this, u)?.destroy(), o(this, w) && (E(this, u, new ht(
    this,
    J,
    o(this, w),
    this.filter,
    (t) => {
      this._permitted = t;
    },
    void 0,
    // We can leave the alias undefined as we destroy this our selfs.
    this.defaultElement,
    {
      single: this.single
    }
  )), o(this, u).properties = o(this, W)));
};
z = /* @__PURE__ */ new WeakMap();
f.styles = K`
		:host {
			display: contents;
		}
	`;
v([
  G()
], f.prototype, "_permitted", 2);
v([
  a({ type: Boolean })
], f.prototype, "single", 2);
v([
  a({ type: String })
], f.prototype, "type", 1);
v([
  a({ type: Object, attribute: !1 })
], f.prototype, "filter", 1);
v([
  a({ type: Object, attribute: !1 })
], f.prototype, "props", 1);
v([
  a({ type: String, attribute: "default-element" })
], f.prototype, "defaultElement", 2);
v([
  a({ attribute: !1 })
], f.prototype, "renderMethod", 2);
f = v([
  N("umb-extension-slot")
], f);
var ut = Object.defineProperty, vt = Object.getOwnPropertyDescriptor, tt = (t) => {
  throw TypeError(t);
}, d = (t, e, i, n) => {
  for (var r = n > 1 ? void 0 : n ? vt(e, i) : e, h = t.length - 1, c; h >= 0; h--)
    (c = t[h]) && (r = (n ? c(e, i, r) : c(r)) || r);
  return n && r && ut(e, i, r), r;
}, Q = (t, e, i) => e.has(t) || tt("Cannot " + i), s = (t, e, i) => (Q(t, e, "read from private field"), i ? i.call(t) : e.get(t)), m = (t, e, i) => e.has(t) ? tt("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), _ = (t, e, i, n) => (Q(t, e, "write to private field"), e.set(t, i), i), I = (t, e, i) => (Q(t, e, "access private method"), i), S, l, C, P, x, M, O, b, $, R;
let p = class extends j {
  constructor() {
    super(...arguments), m(this, b), m(this, S, !1), m(this, l), m(this, C), m(this, P, () => !0), m(this, x, {}), m(this, M, []), m(this, O, {}), m(this, R, (t, e) => this.renderMethod ? this.renderMethod(t, e) : t.component);
  }
  get type() {
    return s(this, C);
  }
  set type(t) {
    t !== s(this, C) && (_(this, C, t), I(this, b, $).call(this));
  }
  get filter() {
    return s(this, P);
  }
  set filter(t) {
    t !== s(this, P) && (_(this, P, t), I(this, b, $).call(this));
  }
  get elementProps() {
    return s(this, x);
  }
  set elementProps(t) {
    _(this, x, t), s(this, l) && (s(this, l).elementProperties = t);
  }
  get apiArgs() {
    return s(this, M);
  }
  set apiArgs(t) {
    t !== s(this, M) && (_(this, M, t), I(this, b, $).call(this));
  }
  get apiProps() {
    return s(this, O);
  }
  set apiProps(t) {
    _(this, O, t), s(this, l) && (s(this, l).apiProperties = t);
  }
  connectedCallback() {
    super.connectedCallback(), _(this, S, !0), I(this, b, $).call(this);
  }
  disconnectedCallback() {
    _(this, S, !1), s(this, l)?.destroy(), _(this, l, void 0), super.disconnectedCallback();
  }
  render() {
    return this._permitted ? this._permitted.length > 0 ? Y(this._permitted, (t) => t.alias, s(this, R)) : H`<slot></slot>` : Z;
  }
};
S = /* @__PURE__ */ new WeakMap();
l = /* @__PURE__ */ new WeakMap();
C = /* @__PURE__ */ new WeakMap();
P = /* @__PURE__ */ new WeakMap();
x = /* @__PURE__ */ new WeakMap();
M = /* @__PURE__ */ new WeakMap();
O = /* @__PURE__ */ new WeakMap();
b = /* @__PURE__ */ new WeakSet();
$ = function() {
  s(this, S) && (s(this, l)?.destroy(), s(this, C) && (_(this, l, new ct(
    this,
    J,
    s(this, C),
    s(this, M),
    this.filter,
    (t) => {
      this._permitted = t;
    },
    void 0,
    // We can leave the alias to undefined, as we destroy this our selfs.
    this.defaultElement,
    this.defaultApi,
    {
      single: this.single
    }
  )), s(this, l).apiProperties = s(this, O), s(this, l).elementProperties = s(this, x)));
};
R = /* @__PURE__ */ new WeakMap();
p.styles = K`
		:host {
			display: contents;
		}
	`;
d([
  G()
], p.prototype, "_permitted", 2);
d([
  a({ type: Boolean })
], p.prototype, "single", 2);
d([
  a({ type: String })
], p.prototype, "type", 1);
d([
  a({ type: Object, attribute: !1 })
], p.prototype, "filter", 1);
d([
  a({ attribute: !1 })
], p.prototype, "elementProps", 1);
d([
  a({ attribute: !1 })
], p.prototype, "apiArgs", 1);
d([
  a({ attribute: !1 })
], p.prototype, "apiProps", 1);
d([
  a({ type: String, attribute: "default-element" })
], p.prototype, "defaultElement", 2);
d([
  a({ type: String, attribute: "default-api" })
], p.prototype, "defaultApi", 2);
d([
  a()
], p.prototype, "renderMethod", 2);
p = d([
  N("umb-extension-with-api-slot")
], p);
var yt = Object.defineProperty, Et = Object.getOwnPropertyDescriptor, et = (t) => {
  throw TypeError(t);
}, X = (t, e, i, n) => {
  for (var r = n > 1 ? void 0 : n ? Et(e, i) : e, h = t.length - 1, c; h >= 0; h--)
    (c = t[h]) && (r = (n ? c(e, i, r) : c(r)) || r);
  return n && r && yt(e, i, r), r;
}, wt = (t, e, i) => e.has(t) || et("Cannot " + i), Ct = (t, e, i) => e.has(t) ? et("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), bt = (t, e, i) => (wt(t, e, "access private method"), i), q, it;
let T = class extends ft(dt) {
  constructor() {
    super(...arguments), Ct(this, q);
  }
  get manifest() {
  }
  set manifest(t) {
    this._alias = t?.alias, this.name = t?.name ?? "";
  }
  connectedCallback() {
    super.connectedCallback(), bt(this, q, it).call(this, "icon-umb-manifest");
  }
  renderDetail() {
    return H`<small id="detail">${this._alias}<slot name="detail"></slot></small>`;
  }
};
q = /* @__PURE__ */ new WeakSet();
it = function(t) {
  if (t !== "" && t !== null) {
    const e = new F(F.ICON_REQUEST, {
      detail: { iconName: t }
    });
    this.dispatchEvent(e), e.icon !== null && e.icon.then((i) => {
      this.fallbackIcon = i, this.requestUpdate("fallbackIcon");
    });
  }
};
X([
  a({ type: Object, attribute: !1 })
], T.prototype, "manifest", 1);
X([
  G()
], T.prototype, "_alias", 2);
T = X([
  N("umb-ref-manifest")
], T);
const zt = (t, e) => {
  new A(t, e, "globalContext", [t]), new A(t, e, "store", [t]), new A(t, e, "treeStore", [t]), new A(t, e, "itemStore", [t]), e.registerMany(ot);
  const i = new st();
  t.shadowRoot?.appendChild(i);
  const n = new nt();
  t.shadowRoot?.appendChild(n), new pt(t), new lt(t), new at(t), t.consumeContext(rt, (r) => {
    r?.setInitialized();
  });
};
export {
  zt as onInit
};
//# sourceMappingURL=entry-point.js.map
