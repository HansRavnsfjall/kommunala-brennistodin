import { html as m, ifDefined as C, repeat as I, nothing as S, classMap as g, state as c, property as M, customElement as $ } from "@umbraco-cms/backoffice/external/lit";
import { p as D } from "./parse-boolean.function.js";
import { umbExtensionsRegistry as V } from "@umbraco-cms/backoffice/extension-registry";
import { createExtensionElement as B } from "@umbraco-cms/backoffice/extension-api";
import { UmbLitElement as P } from "@umbraco-cms/backoffice/lit-element";
import { UmbChangeEvent as U } from "@umbraco-cms/backoffice/event";
import { ContentmentPropertyEditorUITemplatedListElement as L } from "./templated-list.element.js";
var O = Object.defineProperty, T = Object.getOwnPropertyDescriptor, E = (e) => {
  throw TypeError(e);
}, n = (e, t, s, r) => {
  for (var l = r > 1 ? void 0 : r ? T(t, s) : t, a = e.length - 1, f; a >= 0; a--)
    (f = e[a]) && (l = (r ? f(t, s, l) : f(l)) || l);
  return r && l && O(t, s, l), l;
}, d = (e, t, s) => t.has(e) || E("Cannot " + s), h = (e, t, s) => (d(e, t, "read from private field"), s ? s.call(e) : t.get(e)), y = (e, t, s) => t.has(e) ? E("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, s), v = (e, t, s, r) => (d(e, t, "write to private field"), t.set(e, s), s), _ = (e, t, s) => (d(e, t, "access private method"), s), o, u, p, w, A, b, x;
let i = class extends P {
  constructor() {
    super(...arguments), y(this, p), y(this, o), this._enableMultiple = !1, this._flexDirection = "column", this._items = [], y(this, u, []);
  }
  set value(e) {
    v(this, u, e ?? []);
  }
  get value() {
    return h(this, u);
  }
  set config(e) {
    if (!e) return;
    const t = e.getValueByAlias("defaultValue") ?? [];
    this._enableMultiple = D(e.getValueByAlias("enableMultiple"));
    const s = e.getValueByAlias("component") ?? [];
    v(this, o, s[0]), this._flexDirection = e.getValueByAlias("orientation") === "horizontal" ? "row" : "column", this._listStyles = e.getValueByAlias("listStyles"), this._listItemStyles = e.getValueByAlias("listItemStyles");
    const r = e.getValueByAlias("items") ?? [];
    this._items = r.map((l) => {
      var a;
      return { ...l, selected: ((a = this.value) == null ? void 0 : a.includes(l.value)) ?? !1 };
    }), this.value || (this.value = this._enableMultiple && Array.isArray(t) ? t : [t]), _(this, p, w).call(this);
  }
  render() {
    var e;
    return this._element ? (e = this._items) != null && e.length ? m`
			<ul class=${this._flexDirection} style=${C(this._listStyles)}>
				${I(
      this._items,
      (t) => t.value,
      (t) => _(this, p, x).call(this, t)
    )}
			</ul>
		` : m`
				<contentment-info-box
					compact
					type="warning"
					icon="icon-alert"
					heading="There are no items to display"></contentment-info-box>
			` : m`<lee-was-here></lee-was-here>`;
  }
};
o = /* @__PURE__ */ new WeakMap();
u = /* @__PURE__ */ new WeakMap();
p = /* @__PURE__ */ new WeakSet();
w = function() {
  h(this, o) && this.observe(
    V.byTypeAndAlias("contentmentDataListItemUi", h(this, o)),
    (e) => {
      e ? _(this, p, A).call(this, e) : console.error(`Failed to find manifest for Contentment Data List Item UI alias: ${h(this, o)}`);
    },
    "_observeComponent"
  );
};
A = async function(e) {
  if (!e) return;
  const t = await B(e);
  t || console.error(`Failed to create extension element for manifest: ${e}`), this._element = t;
};
b = function(e) {
  e.selected = !e.selected;
  const t = [];
  this._items.forEach((s) => {
    this._enableMultiple || (s.selected = e.selected && s.value === e.value), s.selected && (t == null || t.push(s.value));
  }), this.value = t, this.dispatchEvent(new U());
};
x = function(e) {
  if (!this._element) return S;
  const t = this._element.cloneNode(!0);
  return t.item = e, m`
			<li class=${g({ selected: e.selected })} style=${C(this._listItemStyles)}>
				<button ?disabled=${e.disabled} @click=${() => _(this, p, b).call(this, e)}>${t}</button>
			</li>
		`;
};
i.styles = L.styles;
n([
  c()
], i.prototype, "_element", 2);
n([
  c()
], i.prototype, "_enableMultiple", 2);
n([
  c()
], i.prototype, "_flexDirection", 2);
n([
  c()
], i.prototype, "_items", 2);
n([
  c()
], i.prototype, "_listStyles", 2);
n([
  c()
], i.prototype, "_listItemStyles", 2);
n([
  M({ type: Array })
], i.prototype, "value", 1);
i = n([
  $("contentment-property-editor-ui-custom-component-list")
], i);
export {
  i as default,
  i as element
};
//# sourceMappingURL=custom-component-list.element.js.map
