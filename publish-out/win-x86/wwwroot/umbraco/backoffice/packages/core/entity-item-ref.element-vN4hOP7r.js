import { property as a, customElement as B, nothing as q, html as g, css as L, state as Y } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as k } from "@umbraco-cms/backoffice/lit-element";
import { UmbExtensionsElementInitializer as z } from "@umbraco-cms/backoffice/extension-api";
import { UMB_MARK_ATTRIBUTE_NAME as N } from "@umbraco-cms/backoffice/const";
import { umbExtensionsRegistry as V } from "@umbraco-cms/backoffice/extension-registry";
import { UmbRoutePathAddendumContext as F } from "@umbraco-cms/backoffice/router";
import { UUIBlinkAnimationValue as G } from "@umbraco-cms/backoffice/external/uui";
import { UmbSelectedEvent as P, UmbDeselectedEvent as T } from "@umbraco-cms/backoffice/event";
var K = Object.defineProperty, H = Object.getOwnPropertyDescriptor, I = (e) => {
  throw TypeError(e);
}, W = (e, t, n, r) => {
  for (var s = r > 1 ? void 0 : r ? H(t, n) : t, h = e.length - 1, u; h >= 0; h--)
    (u = e[h]) && (s = (r ? u(t, n, s) : u(s)) || s);
  return r && s && K(t, n, s), s;
}, J = (e, t, n) => t.has(e) || I("Cannot " + n), Q = (e, t, n) => t.has(e) ? I("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), X = (e, t, n) => (J(e, t, "access private method"), n), M, R;
let $ = class extends k {
  constructor() {
    super(...arguments), Q(this, M), this.standalone = !1;
  }
  render() {
    return this.item ? g`
			<uui-ref-node name=${this.item.name} ?standalone=${this.standalone} readonly>
				<slot name="actions" slot="actions"></slot>
				${X(this, M, R).call(this, this.item)}
			</uui-ref-node>
		` : q;
  }
};
M = /* @__PURE__ */ new WeakSet();
R = function(e) {
  if (e.icon)
    return g`<umb-icon slot="icon" name=${e.icon}></umb-icon>`;
};
W([
  a({ type: Object })
], $.prototype, "item", 2);
W([
  a({ type: Boolean })
], $.prototype, "standalone", 2);
$ = W([
  B("umb-default-item-ref")
], $);
var Z = Object.defineProperty, j = Object.getOwnPropertyDescriptor, D = (e) => {
  throw TypeError(e);
}, l = (e, t, n, r) => {
  for (var s = r > 1 ? void 0 : r ? j(t, n) : t, h = e.length - 1, u; h >= 0; h--)
    (u = e[h]) && (s = (r ? u(t, n, s) : u(s)) || s);
  return r && s && Z(t, n, s), s;
}, C = (e, t, n) => t.has(e) || D("Cannot " + n), o = (e, t, n) => (C(e, t, "read from private field"), n ? n.call(e) : t.get(e)), c = (e, t, n) => t.has(e) ? D("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), d = (e, t, n, r) => (C(e, t, "write to private field"), t.set(e, n), n), w = (e, t, n) => (C(e, t, "access private method"), n), O, p, f, y, _, v, b, E, U, m, x, A, S;
let i = class extends k {
  constructor() {
    super(...arguments), c(this, m), c(this, O), c(this, p), c(this, f, !1), c(this, y, !1), c(this, _, !1), c(this, v, !1), c(this, b, !1), c(this, E, !1), c(this, U, new F(this));
  }
  get item() {
    return o(this, p);
  }
  set item(e) {
    const t = o(this, p);
    if (d(this, p, e), e !== t && e) {
      if (this._component && e.entityType === t?.entityType) {
        this._component.item = e;
        return;
      }
      o(this, U).setAddendum("ref/" + e.entityType + "/" + e.unique), w(this, m, S).call(this, e.entityType);
    }
  }
  get readonly() {
    return o(this, f);
  }
  set readonly(e) {
    d(this, f, e), this._component && (this._component.readonly = o(this, f));
  }
  get standalone() {
    return o(this, y);
  }
  set standalone(e) {
    d(this, y, e), this._component && (this._component.standalone = o(this, y));
  }
  get selectOnly() {
    return o(this, _);
  }
  set selectOnly(e) {
    d(this, _, e), this._component && (this._component.selectOnly = o(this, _));
  }
  get selectable() {
    return o(this, v);
  }
  set selectable(e) {
    d(this, v, e), this._component && (this._component.selectable = o(this, v));
  }
  get selected() {
    return o(this, b);
  }
  set selected(e) {
    d(this, b, e), this._component && (this._component.selected = o(this, b));
  }
  get disabled() {
    return o(this, E);
  }
  set disabled(e) {
    d(this, E, e), this._component && (this._component.disabled = o(this, E));
  }
  firstUpdated(e) {
    super.firstUpdated(e), this.setAttribute(N, "entity-item-ref");
  }
  render() {
    return this._component ? g`${this._component}` : this.error ? g`<uui-ref-node
				style="color: var(--uui-color-danger);"
				.name=${this.localize.string(this.errorMessage ?? "#general_notFound")}
				.readonly=${this.readonly}
				.standalone=${this.standalone}
				.selectOnly=${this.selectOnly}
				.selected=${this.selected}
				.disabled=${this.disabled}>
				<uui-icon slot="icon" name="icon-alert" style="color: var(--uui-color-danger);"></uui-icon>
				<slot name="actions"></slot>
			</uui-ref-node>` : g`<uui-loader-bar style="margin-top:10px;"></uui-loader-bar>`;
  }
  destroy() {
    this._component?.removeEventListener(P.TYPE, w(this, m, x).bind(this)), this._component?.removeEventListener(T.TYPE, w(this, m, A).bind(this)), super.destroy();
  }
};
O = /* @__PURE__ */ new WeakMap();
p = /* @__PURE__ */ new WeakMap();
f = /* @__PURE__ */ new WeakMap();
y = /* @__PURE__ */ new WeakMap();
_ = /* @__PURE__ */ new WeakMap();
v = /* @__PURE__ */ new WeakMap();
b = /* @__PURE__ */ new WeakMap();
E = /* @__PURE__ */ new WeakMap();
U = /* @__PURE__ */ new WeakMap();
m = /* @__PURE__ */ new WeakSet();
x = function(e) {
  e.stopPropagation();
  const t = o(this, p)?.unique;
  if (!t) throw new Error("No unique id found for item");
  this.dispatchEvent(new P(t));
};
A = function(e) {
  e.stopPropagation();
  const t = o(this, p)?.unique;
  if (!t) throw new Error("No unique id found for item");
  this.dispatchEvent(new T(t));
};
S = function(e) {
  o(this, O) && o(this, O).destroy(), d(this, O, new z(
    this,
    V,
    "entityItemRef",
    (t) => t.forEntityTypes.includes(e),
    (t) => {
      this._component?.remove();
      const n = t[0]?.component || document.createElement("umb-default-item-ref");
      n.item = o(this, p), n.readonly = this.readonly, n.standalone = this.standalone, n.selectOnly = this.selectOnly, n.selectable = this.selectable, n.selected = this.selected, n.disabled = this.disabled, n.addEventListener(P.TYPE, w(this, m, x).bind(this)), n.addEventListener(T.TYPE, w(this, m, A).bind(this));
      const r = document.createElement("slot");
      r.name = "actions", r.setAttribute("slot", "actions"), n.appendChild(r), this._component = n;
    },
    void 0,
    // We can leave the alias to undefined, as we destroy this our selfs.
    void 0,
    { single: !0 }
  ));
};
i.styles = [
  L`
			:host {
				display: block;
				position: relative;
			}

			:host::after {
				content: '';
				position: absolute;
				z-index: 1;
				pointer-events: none;
				inset: 0;
				border: 1px solid transparent;
				border-radius: var(--uui-border-radius);

				transition: border-color 240ms ease-in;
			}

			:host([drag-placeholder]) {
				--uui-color-focus: transparent;
			}

			:host([drag-placeholder])::after {
				display: block;
				border-width: 2px;
				border-color: var(--uui-color-interactive-emphasis);
				animation: ${G};
			}
			:host([drag-placeholder])::before {
				content: '';
				position: absolute;
				pointer-events: none;
				inset: 0;
				border-radius: var(--uui-border-radius);
				background-color: var(--uui-color-interactive-emphasis);
				opacity: 0.12;
			}
			:host([drag-placeholder]) > * {
				transition: opacity 50ms 16ms;
				opacity: 0;
			}
		`
];
l([
  Y()
], i.prototype, "_component", 2);
l([
  a({ type: Object, attribute: !1 })
], i.prototype, "item", 1);
l([
  a({ type: Boolean, reflect: !0 })
], i.prototype, "readonly", 1);
l([
  a({ type: Boolean, reflect: !0 })
], i.prototype, "standalone", 1);
l([
  a({ type: Boolean, attribute: "select-only", reflect: !0 })
], i.prototype, "selectOnly", 1);
l([
  a({ type: Boolean, reflect: !0 })
], i.prototype, "selectable", 1);
l([
  a({ type: Boolean, reflect: !0 })
], i.prototype, "selected", 1);
l([
  a({ type: Boolean, reflect: !0 })
], i.prototype, "disabled", 1);
l([
  a({ type: Boolean })
], i.prototype, "error", 2);
l([
  a({ type: String, attribute: "error-message", reflect: !1 })
], i.prototype, "errorMessage", 2);
i = l([
  B("umb-entity-item-ref")
], i);
export {
  i as U
};
//# sourceMappingURL=entity-item-ref.element-vN4hOP7r.js.map
