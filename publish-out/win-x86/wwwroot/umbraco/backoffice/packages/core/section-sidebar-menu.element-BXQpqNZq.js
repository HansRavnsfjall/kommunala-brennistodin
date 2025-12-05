import { U as g } from "./section-sidebar-menu.section-context.token-BQxJAXea.js";
import { UmbTextStyles as w } from "@umbraco-cms/backoffice/style";
import { css as M, property as T, customElement as P, html as v } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as O } from "@umbraco-cms/backoffice/lit-element";
import { UmbExpansionEntryCollapsedEvent as x, UmbExpansionEntryExpandedEvent as y } from "@umbraco-cms/backoffice/utils";
import { UmbExtensionSlotElement as I } from "@umbraco-cms/backoffice/extension-registry";
function z(e) {
  return typeof e == "object" && e !== null && "entityType" in e && "unique" in e && "menuItemAlias" in e;
}
var W = Object.defineProperty, N = Object.getOwnPropertyDescriptor, b = (e) => {
  throw TypeError(e);
}, S = (e, t, n, l) => {
  for (var r = l > 1 ? void 0 : l ? N(t, n) : t, d = e.length - 1, c; d >= 0; d--)
    (c = e[d]) && (r = (l ? c(t, n, r) : c(r)) || r);
  return l && r && W(t, n, r), r;
}, _ = (e, t, n) => t.has(e) || b("Cannot " + n), i = (e, t, n) => (_(e, t, "read from private field"), n ? n.call(e) : t.get(e)), u = (e, t, n) => t.has(e) ? b("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), h = (e, t, n, l) => (_(e, t, "write to private field"), t.set(e, n), n), f = (e, t, n) => (_(e, t, "access private method"), n), p, s, a, o, C, U, E;
let m = class extends O {
  constructor() {
    super(), u(this, o), u(this, p), u(this, s, new I()), u(this, a, !1), f(this, o, C).call(this), this.consumeContext(g, (e) => {
      h(this, p, e), f(this, o, U).call(this);
    });
  }
  renderHeader() {
    return v`<h3>${this.localize.string(this.manifest?.meta?.label ?? "")}</h3>`;
  }
  render() {
    return v` ${this.renderHeader()} ${i(this, s)}`;
  }
  disconnectedCallback() {
    super.disconnectedCallback(), i(this, s).destroy();
  }
};
p = /* @__PURE__ */ new WeakMap();
s = /* @__PURE__ */ new WeakMap();
a = /* @__PURE__ */ new WeakMap();
o = /* @__PURE__ */ new WeakSet();
C = function() {
  i(this, s).type = "menu", i(this, s).filter = (e) => e.alias === this.manifest?.meta?.menu, i(this, s).defaultElement = "umb-menu", i(this, s).events = {
    [y.TYPE]: f(this, o, E).bind(this),
    [x.TYPE]: f(this, o, E).bind(this)
  };
};
U = function() {
  this.observe(i(this, p)?.expansion.expansion, (e) => {
    i(this, a) || (i(this, s).props = {
      expansion: e || []
    });
  });
};
E = function(e) {
  const t = e;
  t.stopPropagation();
  const n = t.entry;
  if (!n)
    throw new Error("Entity is required to toggle expansion.");
  z(n) !== !1 && (t.type === y.TYPE ? (h(this, a, !0), i(this, p)?.expansion.expandItem(n), h(this, a, !1)) : t.type === x.TYPE && (h(this, a, !0), i(this, p)?.expansion.collapseItem(n), h(this, a, !1)));
};
m.styles = [
  w,
  M`
			h3 {
				display: flex;
				align-items: center;
				height: var(--umb-header-layout-height);
				margin: 0;
				padding: var(--uui-size-4) var(--uui-size-8);
				box-sizing: border-box;
				font-size: 14px;
			}
		`
];
S([
  T({ type: Object, attribute: !1 })
], m.prototype, "manifest", 2);
m = S([
  P("umb-section-sidebar-menu")
], m);
const B = m;
export {
  m as UmbSectionSidebarMenuElement,
  B as default
};
//# sourceMappingURL=section-sidebar-menu.element-BXQpqNZq.js.map
