import { b as W } from "./workspace.element-CAJljmTw.js";
import { ifDefined as g, html as k, css as x, state as v, customElement as M } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as N } from "@umbraco-cms/backoffice/lit-element";
import { UmbTextStyles as y } from "@umbraco-cms/backoffice/style";
import { UmbVariantId as $ } from "@umbraco-cms/backoffice/variant";
import { UMB_APP_LANGUAGE_CONTEXT as P } from "@umbraco-cms/backoffice/language";
import { UMB_SECTION_CONTEXT as D } from "@umbraco-cms/backoffice/section";
import { UMB_MENU_VARIANT_STRUCTURE_WORKSPACE_CONTEXT as S } from "@umbraco-cms/backoffice/menu";
var B = Object.defineProperty, I = Object.getOwnPropertyDescriptor, A = (e) => {
  throw TypeError(e);
}, m = (e, t, r, a) => {
  for (var u = a > 1 ? void 0 : a ? I(t, r) : t, d = e.length - 1, b; d >= 0; d--)
    (b = e[d]) && (u = (a ? b(t, r, u) : b(u)) || u);
  return a && u && B(t, r, u), u;
}, C = (e, t, r) => t.has(e) || A("Cannot " + r), s = (e, t, r) => (C(e, t, "read from private field"), t.get(e)), h = (e, t, r) => t.has(e) ? A("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), _ = (e, t, r, a) => (C(e, t, "write to private field"), t.set(e, r), r), c = (e, t, r) => (C(e, t, "access private method"), r), l, n, f, p, i, w, T, E, V, U, O;
let o = class extends N {
  constructor() {
    super(), h(this, i), this._name = "", this._structure = [], h(this, l), h(this, n), h(this, f), h(this, p), this.consumeContext(P, (e) => {
      _(this, f, e), c(this, i, T).call(this);
    }), this.consumeContext(D, (e) => {
      _(this, l, e);
    }), this.consumeContext(W, (e) => {
      e && (_(this, n, e), c(this, i, E).call(this), c(this, i, w).call(this));
    }), this.consumeContext(S, (e) => {
      e && (_(this, p, e), c(this, i, w).call(this));
    });
  }
  render() {
    return k`
			<uui-breadcrumbs>
				${this._structure.map(
      (e) => k`<uui-breadcrumb-item href="${g(c(this, i, O).call(this, e))}"
							>${this.localize.string(c(this, i, U).call(this, e))}</uui-breadcrumb-item
						>`
    )}
				<uui-breadcrumb-item>${this._name}</uui-breadcrumb-item>
			</uui-breadcrumbs>
		`;
  }
};
l = /* @__PURE__ */ new WeakMap();
n = /* @__PURE__ */ new WeakMap();
f = /* @__PURE__ */ new WeakMap();
p = /* @__PURE__ */ new WeakMap();
i = /* @__PURE__ */ new WeakSet();
w = function() {
  !s(this, p) || !s(this, n) || this.observe(s(this, p).structure, (e) => {
    if (!s(this, n)) return;
    const t = s(this, n).getUnique();
    this._structure = e.filter((r) => r.unique !== t);
  });
};
T = function() {
  this.observe(s(this, f)?.appDefaultLanguage, (e) => {
    this._appDefaultCulture = e?.unique;
  });
};
E = function() {
  this.observe(
    s(this, n)?.splitView.activeVariantsInfo,
    (e) => {
      e && (this._workspaceActiveVariantId = $.Create(e[0]), c(this, i, V).call(this));
    },
    "breadcrumbWorkspaceActiveVariantObserver"
  );
};
V = function() {
  this.observe(
    s(this, n)?.name(this._workspaceActiveVariantId),
    (e) => this._name = e || "",
    "breadcrumbWorkspaceNameObserver"
  );
};
U = function(e) {
  const t = e.variants.find((a) => a.culture === this._appDefaultCulture)?.name ?? e.variants[0].name ?? "Unknown";
  return e.variants.find((a) => this._workspaceActiveVariantId?.compare(a))?.name ?? `(${t})`;
};
O = function(e) {
  const t = `section/${s(this, l)?.getPathname()}/workspace/${e.entityType}/edit`;
  return e.isFolder ? void 0 : `${t}/${e.unique}/${this._workspaceActiveVariantId?.culture}`;
};
o.styles = [
  y,
  x`
			:host {
				/* TODO: This is a temp solution to handle an issue where long nested breadcrumbs would hide workspace actions */
				overflow: hidden;
				display: flex;
				flex-direction: row-reverse;
				margin-left: var(--uui-size-layout-1);
			}
		`
];
m([
  v()
], o.prototype, "_name", 2);
m([
  v()
], o.prototype, "_structure", 2);
m([
  v()
], o.prototype, "_workspaceActiveVariantId", 2);
m([
  v()
], o.prototype, "_appDefaultCulture", 2);
o = m([
  M("umb-workspace-variant-menu-breadcrumb")
], o);
const H = o;
export {
  o as UmbWorkspaceVariantMenuBreadcrumbElement,
  H as default
};
//# sourceMappingURL=workspace-variant-menu-breadcrumb.element-BQXJ0YZU.js.map
