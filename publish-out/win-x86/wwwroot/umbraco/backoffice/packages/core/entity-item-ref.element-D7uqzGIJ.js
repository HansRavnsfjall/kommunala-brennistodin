import { property as l, customElement as R, nothing as k, html as T, css as L, state as Y } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as D } from "@umbraco-cms/backoffice/lit-element";
import { UmbExtensionsElementInitializer as N } from "@umbraco-cms/backoffice/extension-api";
import { UMB_MARK_ATTRIBUTE_NAME as z } from "@umbraco-cms/backoffice/const";
import { umbExtensionsRegistry as G } from "@umbraco-cms/backoffice/extension-registry";
import { UmbRoutePathAddendumContext as K } from "@umbraco-cms/backoffice/router";
import { UmbSelectedEvent as U, UmbDeselectedEvent as W } from "@umbraco-cms/backoffice/event";
var V = Object.defineProperty, F = Object.getOwnPropertyDescriptor, I = (e) => {
  throw TypeError(e);
}, C = (e, t, n, o) => {
  for (var i = o > 1 ? void 0 : o ? F(t, n) : t, d = e.length - 1, m; d >= 0; d--)
    (m = e[d]) && (i = (o ? m(t, n, i) : m(i)) || i);
  return o && i && V(t, n, i), i;
}, H = (e, t, n) => t.has(e) || I("Cannot " + n), J = (e, t, n) => t.has(e) ? I("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), Q = (e, t, n) => (H(e, t, "access private method"), n), g, q;
let P = class extends D {
  constructor() {
    super(...arguments), J(this, g), this.standalone = !1;
  }
  render() {
    return this.item ? T`
			<uui-ref-node name=${this.item.name} ?standalone=${this.standalone} readonly>
				<slot name="actions" slot="actions"></slot>
				${Q(this, g, q).call(this, this.item)}
			</uui-ref-node>
		` : k;
  }
};
g = /* @__PURE__ */ new WeakSet();
q = function(e) {
  if (e.icon)
    return T`<umb-icon slot="icon" name=${e.icon}></umb-icon>`;
};
C([
  l({ type: Object })
], P.prototype, "item", 2);
C([
  l({ type: Boolean })
], P.prototype, "standalone", 2);
P = C([
  R("umb-default-item-ref")
], P);
var X = Object.defineProperty, Z = Object.getOwnPropertyDescriptor, x = (e) => {
  throw TypeError(e);
}, p = (e, t, n, o) => {
  for (var i = o > 1 ? void 0 : o ? Z(t, n) : t, d = e.length - 1, m; d >= 0; d--)
    (m = e[d]) && (i = (o ? m(t, n, i) : m(i)) || i);
  return o && i && X(t, n, i), i;
}, $ = (e, t, n) => t.has(e) || x("Cannot " + n), s = (e, t, n) => ($(e, t, "read from private field"), n ? n.call(e) : t.get(e)), a = (e, t, n) => t.has(e) ? x("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), c = (e, t, n, o) => ($(e, t, "write to private field"), t.set(e, n), n), w = (e, t, n) => ($(e, t, "access private method"), n), O, h, u, _, y, v, E, b, M, f, A, B, S;
let r = class extends D {
  constructor() {
    super(...arguments), a(this, f), a(this, O), a(this, h), a(this, u, !1), a(this, _, !1), a(this, y, !1), a(this, v, !1), a(this, E, !1), a(this, b, !1), a(this, M, new K(this));
  }
  get item() {
    return s(this, h);
  }
  set item(e) {
    const t = s(this, h);
    if (c(this, h, e), e !== t && e) {
      if (this._component && e.entityType === t?.entityType) {
        this._component.item = e;
        return;
      }
      s(this, M).setAddendum("ref/" + e.entityType + "/" + e.unique), w(this, f, S).call(this, e.entityType);
    }
  }
  get readonly() {
    return s(this, u);
  }
  set readonly(e) {
    c(this, u, e), this._component && (this._component.readonly = s(this, u));
  }
  get standalone() {
    return s(this, _);
  }
  set standalone(e) {
    c(this, _, e), this._component && (this._component.standalone = s(this, _));
  }
  get selectOnly() {
    return s(this, y);
  }
  set selectOnly(e) {
    c(this, y, e), this._component && (this._component.selectOnly = s(this, y));
  }
  get selectable() {
    return s(this, v);
  }
  set selectable(e) {
    c(this, v, e), this._component && (this._component.selectable = s(this, v));
  }
  get selected() {
    return s(this, E);
  }
  set selected(e) {
    c(this, E, e), this._component && (this._component.selected = s(this, E));
  }
  get disabled() {
    return s(this, b);
  }
  set disabled(e) {
    c(this, b, e), this._component && (this._component.disabled = s(this, b));
  }
  firstUpdated(e) {
    super.firstUpdated(e), this.setAttribute(z, "entity-item-ref");
  }
  render() {
    return T`${this._component}`;
  }
  destroy() {
    this._component?.removeEventListener(U.TYPE, w(this, f, A).bind(this)), this._component?.removeEventListener(W.TYPE, w(this, f, B).bind(this)), super.destroy();
  }
};
O = /* @__PURE__ */ new WeakMap();
h = /* @__PURE__ */ new WeakMap();
u = /* @__PURE__ */ new WeakMap();
_ = /* @__PURE__ */ new WeakMap();
y = /* @__PURE__ */ new WeakMap();
v = /* @__PURE__ */ new WeakMap();
E = /* @__PURE__ */ new WeakMap();
b = /* @__PURE__ */ new WeakMap();
M = /* @__PURE__ */ new WeakMap();
f = /* @__PURE__ */ new WeakSet();
A = function(e) {
  e.stopPropagation();
  const t = s(this, h)?.unique;
  if (!t) throw new Error("No unique id found for item");
  this.dispatchEvent(new U(t));
};
B = function(e) {
  e.stopPropagation();
  const t = s(this, h)?.unique;
  if (!t) throw new Error("No unique id found for item");
  this.dispatchEvent(new W(t));
};
S = function(e) {
  s(this, O) && s(this, O).destroy(), c(this, O, new N(
    this,
    G,
    "entityItemRef",
    (t) => t.forEntityTypes.includes(e),
    (t) => {
      this._component?.remove();
      const n = t[0]?.component || document.createElement("umb-default-item-ref");
      n.item = s(this, h), n.readonly = this.readonly, n.standalone = this.standalone, n.selectOnly = this.selectOnly, n.selectable = this.selectable, n.selected = this.selected, n.disabled = this.disabled, n.addEventListener(U.TYPE, w(this, f, A).bind(this)), n.addEventListener(W.TYPE, w(this, f, B).bind(this));
      const o = document.createElement("slot");
      o.name = "actions", o.setAttribute("slot", "actions"), n.appendChild(o), this._component = n;
    },
    void 0,
    // We can leave the alias to undefined, as we destroy this our selfs.
    void 0,
    { single: !0 }
  ));
};
r.styles = [
  L`
			:host {
				display: block;
				position: relative;
			}
		`
];
p([
  Y()
], r.prototype, "_component", 2);
p([
  l({ type: Object, attribute: !1 })
], r.prototype, "item", 1);
p([
  l({ type: Boolean, reflect: !0 })
], r.prototype, "readonly", 1);
p([
  l({ type: Boolean, reflect: !0 })
], r.prototype, "standalone", 1);
p([
  l({ type: Boolean, attribute: "select-only", reflect: !0 })
], r.prototype, "selectOnly", 1);
p([
  l({ type: Boolean, reflect: !0 })
], r.prototype, "selectable", 1);
p([
  l({ type: Boolean, reflect: !0 })
], r.prototype, "selected", 1);
p([
  l({ type: Boolean, reflect: !0 })
], r.prototype, "disabled", 1);
r = p([
  R("umb-entity-item-ref")
], r);
export {
  r as U
};
//# sourceMappingURL=entity-item-ref.element-D7uqzGIJ.js.map
