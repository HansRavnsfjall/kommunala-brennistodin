import { ifDefined as g, html as f, state as m, customElement as A } from "@umbraco-cms/backoffice/external/lit";
import { umbExtensionsRegistry as P } from "@umbraco-cms/backoffice/extension-registry";
import { UmbExtensionsApiInitializer as L } from "@umbraco-cms/backoffice/extension-api";
import { UmbLitElement as k } from "@umbraco-cms/backoffice/lit-element";
import { UMB_ENTITY_CONTEXT as M } from "@umbraco-cms/backoffice/entity";
var N = Object.defineProperty, U = Object.getOwnPropertyDescriptor, w = (t) => {
  throw TypeError(t);
}, h = (t, e, i, s) => {
  for (var o = s > 1 ? void 0 : s ? U(e, i) : e, u = t.length - 1, _; u >= 0; u--)
    (_ = t[u]) && (o = (s ? _(e, i, o) : _(o)) || o);
  return s && o && N(e, i, o), o;
}, d = (t, e, i) => e.has(t) || w("Cannot " + i), a = (t, e, i) => (d(t, e, "read from private field"), e.get(t)), v = (t, e, i) => e.has(t) ? w("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), S = (t, e, i, s) => (d(t, e, "write to private field"), e.set(t, i), i), r = (t, e, i) => (d(t, e, "access private method"), i), c, l, n, C, y, E, b, O, $, T, x;
let p = class extends k {
  constructor() {
    super(), v(this, n), this._popoverOpen = !1, this._multipleOptions = !1, this._apiControllers = [], this._hrefList = [], v(this, c, this.localize.term("general_create")), v(this, l), this.consumeContext(M, (t) => {
      S(this, l, t), r(this, n, E).call(this);
    });
  }
  render() {
    return this._multipleOptions ? r(this, n, $).call(this) : r(this, n, O).call(this);
  }
};
c = /* @__PURE__ */ new WeakMap();
l = /* @__PURE__ */ new WeakMap();
n = /* @__PURE__ */ new WeakSet();
C = function(t) {
  this._popoverOpen = t.newState === "open";
};
y = async function(t, e, i) {
  if (t.stopPropagation(), !i) {
    if (!e.api) throw new Error("No API found");
    await e.api.execute().catch(() => {
    });
  }
};
E = function() {
  if (!a(this, l)) return;
  const t = a(this, l).getEntityType();
  if (!t) throw new Error("No entity type found");
  const e = a(this, l).getUnique();
  if (e === void 0) throw new Error("No unique found");
  new L(
    this,
    P,
    "entityCreateOptionAction",
    (i) => [{ entityType: t, unique: e, meta: i.meta }],
    (i) => i.forEntityTypes.includes(t),
    async (i) => {
      this._apiControllers = i, this._multipleOptions = i.length > 1;
      const s = this._apiControllers.map((o) => o.api?.getHref());
      this._hrefList = await Promise.all(s);
    }
  );
};
b = function(t) {
  return t && t.startsWith("http") ? "_blank" : "_self";
};
O = function() {
  const t = this._hrefList[0];
  return f`
			<uui-button
				label=${a(this, c)}
				color="default"
				look="outline"
				href=${g(t)}
				target=${r(this, n, b).call(this, t)}
				@click=${(e) => r(this, n, y).call(this, e, this._apiControllers[0], t)}></uui-button>
		`;
};
$ = function() {
  return f`
			<uui-button
				popovertarget="collection-action-menu-popover"
				label=${a(this, c)}
				color="default"
				look="outline">
				${a(this, c)}
				<uui-symbol-expand .open=${this._popoverOpen}></uui-symbol-expand>
			</uui-button>
			${r(this, n, T).call(this)}
		`;
};
T = function() {
  return f`
			<uui-popover-container
				id="collection-action-menu-popover"
				placement="bottom-start"
				@toggle=${r(this, n, C)}>
				<umb-popover-layout>
					<uui-scroll-container>
						${this._apiControllers.map((t, e) => r(this, n, x).call(this, t, e))}
					</uui-scroll-container>
				</umb-popover-layout>
			</uui-popover-container>
		`;
};
x = function(t, e) {
  const i = t.manifest;
  if (!i) throw new Error("No manifest found");
  const s = i.meta.label ? this.localize.string(i.meta.label) : i.name, o = this._hrefList[e];
  return f`
			<uui-menu-item
				label=${s}
				href=${g(o)}
				target=${r(this, n, b).call(this, o)}
				@click=${(u) => r(this, n, y).call(this, u, t, o)}>
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
  A("umb-collection-create-action-button")
], p);
export {
  p as UmbCollectionCreateActionButtonElement,
  p as element
};
//# sourceMappingURL=collection-create-action.element-C6F2mRL7.js.map
