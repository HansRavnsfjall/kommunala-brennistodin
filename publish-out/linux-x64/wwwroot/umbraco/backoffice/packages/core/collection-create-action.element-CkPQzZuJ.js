import { html as f, ifDefined as x, state as m, customElement as A } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as P } from "@umbraco-cms/backoffice/lit-element";
import { UmbExtensionsApiInitializer as N } from "@umbraco-cms/backoffice/extension-api";
import { umbExtensionsRegistry as k } from "@umbraco-cms/backoffice/extension-registry";
import { UMB_ENTITY_CONTEXT as L } from "@umbraco-cms/backoffice/entity";
var M = Object.defineProperty, U = Object.getOwnPropertyDescriptor, b = (t) => {
  throw TypeError(t);
}, h = (t, e, i, r) => {
  for (var o = r > 1 ? void 0 : r ? U(e, i) : e, u = t.length - 1, _; u >= 0; u--)
    (_ = t[u]) && (o = (r ? _(e, i, o) : _(o)) || o);
  return r && o && M(e, i, o), o;
}, d = (t, e, i) => e.has(t) || b("Cannot " + i), a = (t, e, i) => (d(t, e, "read from private field"), e.get(t)), v = (t, e, i) => e.has(t) ? b("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), S = (t, e, i, r) => (d(t, e, "write to private field"), e.set(t, i), i), s = (t, e, i) => (d(t, e, "access private method"), i), c, l, n, w, y, g, C, E, O, $, T;
const W = "umb-collection-create-action-button";
let p = class extends P {
  constructor() {
    super(), v(this, n), this._popoverOpen = !1, this._multipleOptions = !1, this._apiControllers = [], this._hrefList = [], v(this, c, this.localize.term("general_create")), v(this, l), this.consumeContext(L, (t) => {
      S(this, l, t), s(this, n, g).call(this);
    });
  }
  render() {
    return this._multipleOptions ? s(this, n, O).call(this) : s(this, n, E).call(this);
  }
};
c = /* @__PURE__ */ new WeakMap();
l = /* @__PURE__ */ new WeakMap();
n = /* @__PURE__ */ new WeakSet();
w = function(t) {
  this._popoverOpen = t.newState === "open";
};
y = async function(t, e, i) {
  if (t.stopPropagation(), !i) {
    if (!e.api) throw new Error("No API found");
    await e.api.execute().catch(() => {
    });
  }
};
g = function() {
  if (!a(this, l)) return;
  const t = a(this, l).getEntityType();
  if (!t) throw new Error("No entityType found");
  const e = a(this, l).getUnique();
  if (e === void 0) throw new Error("No unique found");
  new N(
    this,
    k,
    "entityCreateOptionAction",
    (i) => [{ entityType: t, unique: e, meta: i.meta }],
    (i) => i.forEntityTypes.includes(t),
    async (i) => {
      this._apiControllers = i, this._multipleOptions = i.length > 1;
      const r = this._apiControllers.map((o) => o.api?.getHref());
      this._hrefList = await Promise.all(r);
    }
  );
};
C = function(t) {
  return t && t.startsWith("http") ? "_blank" : "_self";
};
E = function() {
  return f` <uui-button
			label=${a(this, c)}
			color="default"
			look="outline"
			@click=${(t) => s(this, n, y).call(this, t, this._apiControllers[0])}></uui-button>`;
};
O = function() {
  return f`
			<uui-button
				popovertarget="collection-action-menu-popover"
				label=${a(this, c)}
				color="default"
				look="outline">
				${a(this, c)}
				<uui-symbol-expand .open=${this._popoverOpen}></uui-symbol-expand>
			</uui-button>
			${s(this, n, $).call(this)}
		`;
};
$ = function() {
  return f`
			<uui-popover-container
				id="collection-action-menu-popover"
				placement="bottom-start"
				@toggle=${s(this, n, w)}>
				<umb-popover-layout>
					<uui-scroll-container>
						${this._apiControllers.map((t, e) => s(this, n, T).call(this, t, e))}
					</uui-scroll-container>
				</umb-popover-layout>
			</uui-popover-container>
		`;
};
T = function(t, e) {
  const i = t.manifest;
  if (!i) throw new Error("No manifest found");
  const r = i.meta.label ? this.localize.string(i.meta.label) : i.name, o = this._hrefList[e];
  return f`
			<uui-menu-item
				label=${r}
				@click=${(u) => s(this, n, y).call(this, u, t, o)}
				href=${x(o)}
				target=${s(this, n, C).call(this, o)}>
				<umb-icon slot="icon" .name=${i.meta.icon}></umb-icon>
			</uui-menu-item>
		`;
};
h([
  m()
], p.prototype, "_popoverOpen", 2);
h([
  m()
], p.prototype, "_multipleOptions", 2);
h([
  m()
], p.prototype, "_apiControllers", 2);
h([
  m()
], p.prototype, "_hrefList", 2);
p = h([
  A(W)
], p);
export {
  p as UmbCollectionCreateActionButtonElement,
  p as element
};
//# sourceMappingURL=collection-create-action.element-CkPQzZuJ.js.map
