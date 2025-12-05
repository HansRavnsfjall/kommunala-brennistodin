import { UmbActionExecutedEvent as C } from "@umbraco-cms/backoffice/event";
import { when as M, html as y, property as O, state as m, customElement as U } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as I } from "@umbraco-cms/backoffice/lit-element";
import { umbExtensionsRegistry as P } from "@umbraco-cms/backoffice/extension-registry";
import { UmbExtensionsElementAndApiInitializer as T } from "@umbraco-cms/backoffice/extension-api";
import { stringOrStringArrayIntersects as R } from "@umbraco-cms/backoffice/utils";
import "./workspace-action-menu.element-DYa1t5-x.js";
var B = Object.defineProperty, z = Object.getOwnPropertyDescriptor, g = (t) => {
  throw TypeError(t);
}, l = (t, e, a, f) => {
  for (var c = f > 1 ? void 0 : f ? z(e, a) : e, b = t.length - 1, w; b >= 0; b--)
    (w = t[b]) && (c = (f ? w(e, a, c) : w(c)) || c);
  return f && c && B(e, a, c), c;
}, A = (t, e, a) => e.has(t) || g("Cannot " + a), i = (t, e, a) => (A(t, e, "read from private field"), a ? a.call(t) : e.get(t)), u = (t, e, a) => e.has(t) ? g("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, a), d = (t, e, a, f) => (A(t, e, "write to private field"), e.set(t, a), a), n = (t, e, a) => (A(t, e, "access private method"), a), s, h, _, p, o, S, $, W, v, E, x, k, D;
let r = class extends I {
  constructor() {
    super(...arguments), u(this, o), u(this, s), u(this, h), u(this, _), this._isDisabled = !1, this._items = [], u(this, p, null);
  }
  set manifest(t) {
    if (!t) return;
    i(this, s) !== t && (d(this, s, t), this._href = t?.meta.href, this._additionalOptions = t?.meta.additionalOptions, n(this, o, S).call(this));
  }
  get manifest() {
    return i(this, s);
  }
  set api(t) {
    d(this, h, t), i(this, h)?.getHref?.().then((e) => {
      this._href = e ?? this.manifest?.meta.href;
    }), i(this, h)?.hasAdditionalOptions?.().then((e) => {
      this._additionalOptions = e ?? this.manifest?.meta.additionalOptions;
    }), n(this, o, W).call(this);
  }
  get api() {
    return i(this, h);
  }
  render() {
    return M(
      this._items.length,
      () => y` <uui-button-group> ${n(this, o, k).call(this)} ${n(this, o, D).call(this)} </uui-button-group> `,
      () => n(this, o, k).call(this)
    );
  }
  disconnectedCallback() {
    super.disconnectedCallback(), n(this, o, E).call(this);
  }
};
s = /* @__PURE__ */ new WeakMap();
h = /* @__PURE__ */ new WeakMap();
_ = /* @__PURE__ */ new WeakMap();
p = /* @__PURE__ */ new WeakMap();
o = /* @__PURE__ */ new WeakSet();
S = async function() {
  if (!i(this, s)) return;
  const t = /* @__PURE__ */ new Set();
  if (i(this, s) && (t.add(i(this, s).alias), i(this, s).overwrites)) {
    const e = Array.isArray(i(this, s).overwrites) ? i(this, s).overwrites : [i(this, s).overwrites];
    for (const a of e)
      t.add(a);
  }
  n(this, o, x).call(this, Array.from(t));
};
$ = async function(t) {
  if (this._href && t.stopPropagation(), !this._href) {
    this._additionalOptions || (this._buttonState = "waiting");
    try {
      if (!i(this, h)) throw new Error("No api defined");
      await i(this, h).execute(), this._buttonState = "success", n(this, o, v).call(this);
    } catch (e) {
      e && console.warn(e), this._buttonState = "failed", n(this, o, v).call(this);
    }
  }
  this.dispatchEvent(new C());
};
W = function() {
  this.observe(
    i(this, h)?.isDisabled,
    (t) => {
      this._isDisabled = t || !1;
    },
    "isDisabledObserver"
  );
};
v = function() {
  n(this, o, E).call(this), d(this, p, window.setTimeout(() => {
    this._buttonState = void 0;
  }, 2e3));
};
E = function() {
  i(this, p) !== null && (clearTimeout(i(this, p)), d(this, p, null));
};
x = function(t) {
  i(this, _)?.destroy(), d(this, _, new T(
    this,
    P,
    "workspaceActionMenuItem",
    V,
    (e) => R(e.forWorkspaceActions, t),
    (e) => {
      this._items = e;
    },
    void 0
    // We can leave the alias to undefined, as we destroy this our selfs.
  ));
};
k = function() {
  const t = i(this, s)?.meta.label ? this.localize.string(i(this, s).meta.label) : i(this, s)?.name ?? "";
  return y`
			<uui-button
				data-mark="workspace-action:${i(this, s)?.alias}"
				.href=${this._href}
				look=${i(this, s)?.meta.look ?? "default"}
				color=${i(this, s)?.meta.color ?? "default"}
				label=${this._additionalOptions ? t + "…" : t}
				.disabled=${this._isDisabled}
				.state=${this._buttonState}
				@click=${n(this, o, $)}></uui-button>
		`;
};
D = function() {
  return y`
			<umb-workspace-action-menu
				.items=${this._items}
				color="${i(this, s)?.meta.color ?? "default"}"
				look="${i(this, s)?.meta.look ?? "default"}"></umb-workspace-action-menu>
		`;
};
l([
  O({ type: Object, attribute: !1 })
], r.prototype, "manifest", 1);
l([
  O({ attribute: !1 })
], r.prototype, "api", 1);
l([
  m()
], r.prototype, "_buttonState", 2);
l([
  m()
], r.prototype, "_additionalOptions", 2);
l([
  m()
], r.prototype, "_href", 2);
l([
  m()
], r.prototype, "_isDisabled", 2);
l([
  m()
], r.prototype, "_items", 2);
r = l([
  U("umb-workspace-action")
], r);
const K = r;
function V(t) {
  return [{ meta: t.meta }];
}
export {
  r as UmbWorkspaceActionElement,
  K as default
};
//# sourceMappingURL=workspace-action-default-kind.element-Cup7qCdo.js.map
