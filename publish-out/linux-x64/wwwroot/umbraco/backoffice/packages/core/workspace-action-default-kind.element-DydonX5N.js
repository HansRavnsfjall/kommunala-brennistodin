import { UmbActionExecutedEvent as x } from "@umbraco-cms/backoffice/event";
import { when as D, html as w, property as A, state as f, customElement as W } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as M } from "@umbraco-cms/backoffice/lit-element";
import { umbExtensionsRegistry as C } from "@umbraco-cms/backoffice/extension-registry";
import { UmbExtensionsElementAndApiInitializer as U } from "@umbraco-cms/backoffice/extension-api";
import { stringOrStringArrayIntersects as P } from "@umbraco-cms/backoffice/utils";
import "./workspace.element-CAJljmTw.js";
var I = Object.defineProperty, z = Object.getOwnPropertyDescriptor, k = (t) => {
  throw TypeError(t);
}, h = (t, i, a, p) => {
  for (var l = p > 1 ? void 0 : p ? z(i, a) : i, u = t.length - 1, _; u >= 0; u--)
    (_ = t[u]) && (l = (p ? _(i, a, l) : _(l)) || l);
  return p && l && I(i, a, l), l;
}, y = (t, i, a) => i.has(t) || k("Cannot " + a), e = (t, i, a) => (y(t, i, "read from private field"), a ? a.call(t) : i.get(t)), d = (t, i, a) => i.has(t) ? k("Cannot add the same private member more than once") : i instanceof WeakSet ? i.add(t) : i.set(t, a), b = (t, i, a, p) => (y(t, i, "write to private field"), i.set(t, a), a), c = (t, i, a) => (y(t, i, "access private method"), a), s, n, m, r, O, E, g, $, v, S;
let o = class extends M {
  constructor() {
    super(...arguments), d(this, r), d(this, s), d(this, n), d(this, m), this._isDisabled = !1, this._items = [];
  }
  set manifest(t) {
    if (!t) return;
    e(this, s) !== t && (b(this, s, t), this._href = t?.meta.href, this._additionalOptions = t?.meta.additionalOptions, c(this, r, O).call(this));
  }
  get manifest() {
    return e(this, s);
  }
  set api(t) {
    b(this, n, t), e(this, n)?.getHref?.().then((i) => {
      this._href = i ?? this.manifest?.meta.href;
    }), e(this, n)?.hasAdditionalOptions?.().then((i) => {
      this._additionalOptions = i ?? this.manifest?.meta.additionalOptions;
    }), c(this, r, g).call(this);
  }
  get api() {
    return e(this, n);
  }
  render() {
    return D(
      this._items.length,
      () => w` <uui-button-group> ${c(this, r, v).call(this)} ${c(this, r, S).call(this)} </uui-button-group> `,
      () => c(this, r, v).call(this)
    );
  }
};
s = /* @__PURE__ */ new WeakMap();
n = /* @__PURE__ */ new WeakMap();
m = /* @__PURE__ */ new WeakMap();
r = /* @__PURE__ */ new WeakSet();
O = async function() {
  if (!e(this, s)) return;
  const t = /* @__PURE__ */ new Set();
  if (e(this, s) && (t.add(e(this, s).alias), e(this, s).overwrites)) {
    const i = Array.isArray(e(this, s).overwrites) ? e(this, s).overwrites : [e(this, s).overwrites];
    for (const a of i)
      t.add(a);
  }
  c(this, r, $).call(this, Array.from(t));
};
E = async function(t) {
  if (this._href && t.stopPropagation(), !this._href) {
    this._additionalOptions || (this._buttonState = "waiting");
    try {
      if (!e(this, n)) throw new Error("No api defined");
      await e(this, n).execute(), this._additionalOptions || (this._buttonState = "success");
    } catch (i) {
      i && console.warn(i), this._additionalOptions || (this._buttonState = "failed");
    }
  }
  this.dispatchEvent(new x());
};
g = function() {
  this.observe(
    e(this, n)?.isDisabled,
    (t) => {
      this._isDisabled = t || !1;
    },
    "isDisabledObserver"
  );
};
$ = function(t) {
  e(this, m)?.destroy(), b(this, m, new U(
    this,
    C,
    "workspaceActionMenuItem",
    V,
    (i) => P(i.forWorkspaceActions, t),
    (i) => {
      this._items = i;
    },
    void 0
    // We can leave the alias to undefined, as we destroy this our selfs.
  ));
};
v = function() {
  const t = e(this, s)?.meta.label ? this.localize.string(e(this, s).meta.label) : e(this, s)?.name ?? "";
  return w`
			<uui-button
				data-mark="workspace-action:${e(this, s)?.alias}"
				.href=${this._href}
				look=${e(this, s)?.meta.look ?? "default"}
				color=${e(this, s)?.meta.color ?? "default"}
				label=${this._additionalOptions ? t + "…" : t}
				.disabled=${this._isDisabled}
				.state=${this._buttonState}
				@click=${c(this, r, E)}></uui-button>
		`;
};
S = function() {
  return w`
			<umb-workspace-action-menu
				.items=${this._items}
				color="${e(this, s)?.meta.color ?? "default"}"
				look="${e(this, s)?.meta.look ?? "default"}"></umb-workspace-action-menu>
		`;
};
h([
  A({ type: Object, attribute: !1 })
], o.prototype, "manifest", 1);
h([
  A({ attribute: !1 })
], o.prototype, "api", 1);
h([
  f()
], o.prototype, "_buttonState", 2);
h([
  f()
], o.prototype, "_additionalOptions", 2);
h([
  f()
], o.prototype, "_href", 2);
h([
  f()
], o.prototype, "_isDisabled", 2);
h([
  f()
], o.prototype, "_items", 2);
o = h([
  W("umb-workspace-action")
], o);
const q = o;
function V(t) {
  return [{ meta: t.meta }];
}
export {
  o as UmbWorkspaceActionElement,
  q as default
};
//# sourceMappingURL=workspace-action-default-kind.element-DydonX5N.js.map
