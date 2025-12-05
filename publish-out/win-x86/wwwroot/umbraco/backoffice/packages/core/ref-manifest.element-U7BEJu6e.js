import { css as X, state as z, property as o, customElement as B, repeat as Y, nothing as Z, html as N } from "@umbraco-cms/backoffice/external/lit";
import { UmbExtensionRegistry as ot, UmbExtensionsElementInitializer as pt, UmbExtensionsElementAndApiInitializer as ht } from "@umbraco-cms/backoffice/extension-api";
import { UmbLitElement as V } from "@umbraco-cms/backoffice/lit-element";
import { UUIRefNodeElement as lt, UUIIconRequestEvent as K } from "@umbraco-cms/backoffice/external/uui";
import { UmbElementMixin as ct } from "@umbraco-cms/backoffice/element-api";
const tt = new ot();
var ft = Object.defineProperty, dt = Object.getOwnPropertyDescriptor, et = (t) => {
  throw TypeError(t);
}, m = (t, e, s, n) => {
  for (var i = n > 1 ? void 0 : n ? dt(e, s) : e, f = t.length - 1, d; f >= 0; f--)
    (d = t[f]) && (i = (n ? d(e, s, i) : d(i)) || i);
  return n && i && ft(e, s, i), i;
}, j = (t, e, s) => e.has(t) || et("Cannot " + s), a = (t, e, s) => (j(t, e, "read from private field"), s ? s.call(t) : e.get(t)), E = (t, e, s) => e.has(t) ? et("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, s), b = (t, e, s, n) => (j(t, e, "write to private field"), e.set(t, s), s), g = (t, e, s) => (j(t, e, "access private method"), s), S, u, w, W, U, P, _, D, st, T, F, Q;
let l = class extends V {
  constructor() {
    super(...arguments), E(this, _), E(this, S, !1), E(this, u), E(this, w), E(this, W, () => !0), E(this, U, {}), E(this, P, {}), E(this, T, (t, e) => this.renderMethod ? this.renderMethod(t, e) : t.component);
  }
  set type(t) {
    t !== a(this, w) && (b(this, w, t), g(this, _, D).call(this));
  }
  get type() {
    return a(this, w);
  }
  set filter(t) {
    t !== a(this, W) && (b(this, W, t), g(this, _, D).call(this));
  }
  get filter() {
    return a(this, W);
  }
  set props(t) {
    b(this, U, t), a(this, u) && (a(this, u).properties = t);
  }
  get props() {
    return a(this, U);
  }
  set events(t) {
    b(this, P, t), a(this, u) && g(this, _, F).call(this);
  }
  get events() {
    return a(this, P);
  }
  connectedCallback() {
    super.connectedCallback(), b(this, S, !0), g(this, _, D).call(this);
  }
  disconnectedCallback() {
    g(this, _, Q).call(this), b(this, S, !1), a(this, u)?.destroy(), b(this, u, void 0), super.disconnectedCallback();
  }
  render() {
    return this._permitted ? this._permitted.length > 0 ? Y(this._permitted, (t) => t.alias, a(this, T)) : g(this, _, st).call(this) : Z;
  }
};
S = /* @__PURE__ */ new WeakMap();
u = /* @__PURE__ */ new WeakMap();
w = /* @__PURE__ */ new WeakMap();
W = /* @__PURE__ */ new WeakMap();
U = /* @__PURE__ */ new WeakMap();
P = /* @__PURE__ */ new WeakMap();
_ = /* @__PURE__ */ new WeakSet();
D = function() {
  a(this, S) && (a(this, u)?.destroy(), a(this, w) && (b(this, u, new pt(
    this,
    tt,
    a(this, w),
    this.filter,
    (t) => {
      this._permitted = t, g(this, _, F).call(this);
    },
    void 0,
    // We can leave the alias undefined as we destroy this our selfs.
    this.defaultElement,
    {
      single: this.single
    }
  )), a(this, u).properties = a(this, U)));
};
st = function() {
  return this.fallbackRenderMethod ? this.fallbackRenderMethod() : N`<slot></slot>`;
};
T = /* @__PURE__ */ new WeakMap();
F = function() {
  this._permitted?.forEach((t) => {
    const e = t.component;
    if (!e) return;
    const s = a(this, P);
    s && (g(this, _, Q).call(this), Object.entries(s).forEach(([n, i]) => {
      e.addEventListener(n, i);
    }));
  });
};
Q = function() {
  this._permitted?.forEach((t) => {
    const e = t.component;
    if (!e) return;
    const s = a(this, P);
    s && Object.entries(s).forEach(([n, i]) => {
      e.removeEventListener(n, i);
    });
  });
};
l.styles = X`
		:host {
			display: contents;
		}
	`;
m([
  z()
], l.prototype, "_permitted", 2);
m([
  o({ type: Boolean })
], l.prototype, "single", 2);
m([
  o({ type: String })
], l.prototype, "type", 1);
m([
  o({ type: Object, attribute: !1 })
], l.prototype, "filter", 1);
m([
  o({ type: Object, attribute: !1 })
], l.prototype, "props", 1);
m([
  o({ type: Object, attribute: !1 })
], l.prototype, "events", 1);
m([
  o({ type: String, attribute: "default-element" })
], l.prototype, "defaultElement", 2);
m([
  o({ attribute: !1 })
], l.prototype, "renderMethod", 2);
m([
  o({ attribute: !1 })
], l.prototype, "fallbackRenderMethod", 2);
l = m([
  B("umb-extension-slot")
], l);
var _t = Object.defineProperty, ut = Object.getOwnPropertyDescriptor, it = (t) => {
  throw TypeError(t);
}, c = (t, e, s, n) => {
  for (var i = n > 1 ? void 0 : n ? ut(e, s) : e, f = t.length - 1, d; f >= 0; f--)
    (d = t[f]) && (i = (n ? d(e, s, i) : d(i)) || i);
  return n && i && _t(e, s, i), i;
}, H = (t, e, s) => e.has(t) || it("Cannot " + s), r = (t, e, s) => (H(t, e, "read from private field"), s ? s.call(t) : e.get(t)), v = (t, e, s) => e.has(t) ? it("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, s), y = (t, e, s, n) => (H(t, e, "write to private field"), e.set(t, s), s), $ = (t, e, s) => (H(t, e, "access private method"), s), A, h, k, x, R, C, I, M, O, rt, q;
let p = class extends V {
  constructor() {
    super(...arguments), v(this, M), v(this, A, !1), v(this, h), v(this, k), v(this, x, () => !0), v(this, R, {}), v(this, C, []), v(this, I, {}), v(this, q, (t, e) => this.renderMethod ? this.renderMethod(t, e) : t.component);
  }
  get type() {
    return r(this, k);
  }
  set type(t) {
    t !== r(this, k) && (y(this, k, t), $(this, M, O).call(this));
  }
  get filter() {
    return r(this, x);
  }
  set filter(t) {
    t !== r(this, x) && (y(this, x, t), $(this, M, O).call(this));
  }
  get elementProps() {
    return r(this, R);
  }
  set elementProps(t) {
    y(this, R, t), r(this, h) && (r(this, h).elementProperties = t);
  }
  get apiArgs() {
    return r(this, C);
  }
  set apiArgs(t) {
    t !== r(this, C) && (y(this, C, t), $(this, M, O).call(this));
  }
  get apiProps() {
    return r(this, I);
  }
  set apiProps(t) {
    y(this, I, t), r(this, h) && (r(this, h).apiProperties = t);
  }
  connectedCallback() {
    super.connectedCallback(), y(this, A, !0), $(this, M, O).call(this);
  }
  disconnectedCallback() {
    y(this, A, !1), r(this, h)?.destroy(), y(this, h, void 0), super.disconnectedCallback();
  }
  render() {
    return this._permitted ? this._permitted.length > 0 ? Y(this._permitted, (t) => t.alias, r(this, q)) : $(this, M, rt).call(this) : Z;
  }
};
A = /* @__PURE__ */ new WeakMap();
h = /* @__PURE__ */ new WeakMap();
k = /* @__PURE__ */ new WeakMap();
x = /* @__PURE__ */ new WeakMap();
R = /* @__PURE__ */ new WeakMap();
C = /* @__PURE__ */ new WeakMap();
I = /* @__PURE__ */ new WeakMap();
M = /* @__PURE__ */ new WeakSet();
O = function() {
  r(this, A) && (r(this, h)?.destroy(), r(this, k) && (y(this, h, new ht(
    this,
    tt,
    r(this, k),
    r(this, C),
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
  )), r(this, h).apiProperties = r(this, I), r(this, h).elementProperties = r(this, R)));
};
rt = function() {
  return this.fallbackRenderMethod ? this.fallbackRenderMethod() : N`<slot></slot>`;
};
q = /* @__PURE__ */ new WeakMap();
p.styles = X`
		:host {
			display: contents;
		}
	`;
c([
  z()
], p.prototype, "_permitted", 2);
c([
  o({ type: Boolean })
], p.prototype, "single", 2);
c([
  o({ type: String })
], p.prototype, "type", 1);
c([
  o({ type: Object, attribute: !1 })
], p.prototype, "filter", 1);
c([
  o({ attribute: !1 })
], p.prototype, "elementProps", 1);
c([
  o({ attribute: !1 })
], p.prototype, "apiArgs", 1);
c([
  o({ attribute: !1 })
], p.prototype, "apiProps", 1);
c([
  o({ type: String, attribute: "default-element" })
], p.prototype, "defaultElement", 2);
c([
  o({ type: String, attribute: "default-api" })
], p.prototype, "defaultApi", 2);
c([
  o()
], p.prototype, "renderMethod", 2);
c([
  o({ attribute: !1 })
], p.prototype, "fallbackRenderMethod", 2);
p = c([
  B("umb-extension-with-api-slot")
], p);
var mt = Object.defineProperty, vt = Object.getOwnPropertyDescriptor, nt = (t) => {
  throw TypeError(t);
}, J = (t, e, s, n) => {
  for (var i = n > 1 ? void 0 : n ? vt(e, s) : e, f = t.length - 1, d; f >= 0; f--)
    (d = t[f]) && (i = (n ? d(e, s, i) : d(i)) || i);
  return n && i && mt(e, s, i), i;
}, yt = (t, e, s) => e.has(t) || nt("Cannot " + s), Et = (t, e, s) => e.has(t) ? nt("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, s), bt = (t, e, s) => (yt(t, e, "access private method"), s), G, at;
let L = class extends ct(lt) {
  constructor() {
    super(...arguments), Et(this, G);
  }
  get manifest() {
  }
  set manifest(t) {
    this._alias = t?.alias, this.name = t?.name ?? "";
  }
  connectedCallback() {
    super.connectedCallback(), bt(this, G, at).call(this, "icon-umb-manifest");
  }
  renderDetail() {
    return N`<small id="detail">${this._alias}<slot name="detail"></slot></small>`;
  }
};
G = /* @__PURE__ */ new WeakSet();
at = function(t) {
  if (t !== "" && t !== null) {
    const e = new K(K.ICON_REQUEST, {
      detail: { iconName: t }
    });
    this.dispatchEvent(e), e.icon !== null && e.icon.then((s) => {
      this.fallbackIcon = s, this.requestUpdate("fallbackIcon");
    });
  }
};
J([
  o({ type: Object, attribute: !1 })
], L.prototype, "manifest", 1);
J([
  z()
], L.prototype, "_alias", 2);
L = J([
  B("umb-ref-manifest")
], L);
export {
  l as U,
  p as a,
  L as b,
  tt as u
};
//# sourceMappingURL=ref-manifest.element-U7BEJu6e.js.map
