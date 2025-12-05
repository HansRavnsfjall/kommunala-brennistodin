import { a as U } from "./constants-CUqy5m1J.js";
import { ifDefined as W, html as k, css as x, state as v, customElement as M } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as y } from "@umbraco-cms/backoffice/lit-element";
import { UmbTextStyles as N } from "@umbraco-cms/backoffice/style";
import { UmbVariantId as S } from "@umbraco-cms/backoffice/variant";
import { UMB_APP_LANGUAGE_CONTEXT as $ } from "@umbraco-cms/backoffice/language";
import { UMB_MENU_VARIANT_STRUCTURE_WORKSPACE_CONTEXT as D } from "@umbraco-cms/backoffice/menu";
import { UMB_SECTION_CONTEXT as P } from "@umbraco-cms/backoffice/section";
var B = Object.defineProperty, I = Object.getOwnPropertyDescriptor, A = (e) => {
  throw TypeError(e);
}, _ = (e, t, r, o) => {
  for (var u = o > 1 ? void 0 : o ? I(t, r) : t, d = e.length - 1, b; d >= 0; d--)
    (b = e[d]) && (u = (o ? b(t, r, u) : b(u)) || u);
  return o && u && B(t, r, u), u;
}, w = (e, t, r) => t.has(e) || A("Cannot " + r), a = (e, t, r) => (w(e, t, "read from private field"), t.get(e)), h = (e, t, r) => t.has(e) ? A("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), m = (e, t, r, o) => (w(e, t, "write to private field"), t.set(e, r), r), c = (e, t, r) => (w(e, t, "access private method"), r), f, s, l, p, i, C, T, V, E, g, O;
let n = class extends y {
  constructor() {
    super(), h(this, i), this._name = "", this._structure = [], h(this, f), h(this, s), h(this, l), h(this, p), this.consumeContext($, (e) => {
      m(this, l, e), c(this, i, T).call(this);
    }), this.consumeContext(P, (e) => {
      m(this, f, e);
    }), this.consumeContext(U, (e) => {
      e && (m(this, s, e), c(this, i, V).call(this), c(this, i, C).call(this));
    }), this.consumeContext(D, (e) => {
      e && (m(this, p, e), c(this, i, C).call(this));
    });
  }
  render() {
    return k`
			<uui-breadcrumbs>
				${this._structure.map(
      (e) => k`<uui-breadcrumb-item href=${W(c(this, i, O).call(this, e))}
							>${this.localize.string(c(this, i, g).call(this, e))}</uui-breadcrumb-item
						>`
    )}
				<uui-breadcrumb-item last-item>${this._name}</uui-breadcrumb-item>
			</uui-breadcrumbs>
		`;
  }
};
f = /* @__PURE__ */ new WeakMap();
s = /* @__PURE__ */ new WeakMap();
l = /* @__PURE__ */ new WeakMap();
p = /* @__PURE__ */ new WeakMap();
i = /* @__PURE__ */ new WeakSet();
C = function() {
  !a(this, p) || !a(this, s) || this.observe(a(this, p).structure, (e) => {
    if (!a(this, s)) return;
    const t = a(this, s).getUnique();
    this._structure = e.filter((r) => r.unique !== t);
  });
};
T = function() {
  this.observe(a(this, l)?.appDefaultLanguage, (e) => {
    this._appDefaultCulture = e?.unique;
  });
};
V = function() {
  this.observe(
    a(this, s)?.splitView.activeVariantsInfo,
    (e) => {
      e && (this._workspaceActiveVariantId = S.Create(e[0]), c(this, i, E).call(this));
    },
    "breadcrumbWorkspaceActiveVariantObserver"
  );
};
E = function() {
  this.observe(
    a(this, s)?.name(this._workspaceActiveVariantId),
    (e) => this._name = e || "",
    "breadcrumbWorkspaceNameObserver"
  );
};
g = function(e) {
  if (!this._workspaceActiveVariantId?.isInvariant()) {
    const r = e.variants.find((o) => this._workspaceActiveVariantId?.compare(o));
    if (r)
      return r.name;
  }
  const t = e.variants.find((r) => r.culture === this._appDefaultCulture);
  return t ? `(${t.name})` : e.variants?.[0]?.name ?? "(#general_unknown)";
};
O = function(e) {
  if (e.isFolder) return;
  let t = `section/${a(this, f)?.getPathname()}`;
  return e.unique && (t += `/workspace/${e.entityType}/edit/${e.unique}/${this._workspaceActiveVariantId?.toCultureString()}`), t;
};
n.styles = [
  N,
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
_([
  v()
], n.prototype, "_name", 2);
_([
  v()
], n.prototype, "_structure", 2);
_([
  v()
], n.prototype, "_workspaceActiveVariantId", 2);
_([
  v()
], n.prototype, "_appDefaultCulture", 2);
n = _([
  M("umb-workspace-variant-menu-breadcrumb")
], n);
const H = n;
export {
  n as UmbWorkspaceVariantMenuBreadcrumbElement,
  H as default
};
//# sourceMappingURL=workspace-variant-menu-breadcrumb.element-Dj0D0IIu.js.map
