import { U } from "./constants-CUqy5m1J.js";
import { map as W, ifDefined as y, html as C, css as S, state as d, customElement as k } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as x } from "@umbraco-cms/backoffice/lit-element";
import { UmbTextStyles as M } from "@umbraco-cms/backoffice/style";
import { UMB_MENU_STRUCTURE_WORKSPACE_CONTEXT as $ } from "@umbraco-cms/backoffice/menu";
import { UMB_SECTION_CONTEXT as P } from "@umbraco-cms/backoffice/section";
var g = Object.defineProperty, B = Object.getOwnPropertyDescriptor, E = (e) => {
  throw TypeError(e);
}, p = (e, t, r, u) => {
  for (var s = u > 1 ? void 0 : u ? B(t, r) : t, f = e.length - 1, l; f >= 0; f--)
    (l = e[f]) && (s = (u ? l(t, r, s) : l(s)) || s);
  return u && s && g(t, r, s), s;
}, w = (e, t, r) => t.has(e) || E("Cannot " + r), o = (e, t, r) => (w(e, t, "read from private field"), t.get(e)), m = (e, t, r) => t.has(e) ? E("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), v = (e, t, r, u) => (w(e, t, "write to private field"), t.set(e, r), r), c = (e, t, r) => (w(e, t, "access private method"), r), n, _, h, i, N, O, b, T;
let a = class extends x {
  constructor() {
    super(), m(this, i), this._name = "", this._structure = [], this._isNew = !1, m(this, n), m(this, _), m(this, h), this.consumeContext(P, (e) => {
      v(this, _, e);
    }), this.consumeContext(U, (e) => {
      v(this, n, e), c(this, i, N).call(this), c(this, i, b).call(this), c(this, i, O).call(this);
    }), this.consumeContext($, (e) => {
      v(this, h, e), c(this, i, b).call(this);
    });
  }
  render() {
    const e = this._isNew ? this._structure : this._structure.slice(0, -1);
    return C`
			<uui-breadcrumbs>
				${W(
      e,
      (t) => C`<uui-breadcrumb-item href=${y(c(this, i, T).call(this, t))}
							>${this.localize.string(t.name)}</uui-breadcrumb-item
						>`
    )}
				<uui-breadcrumb-item last-item>${this._name}</uui-breadcrumb-item>
			</uui-breadcrumbs>
		`;
  }
};
n = /* @__PURE__ */ new WeakMap();
_ = /* @__PURE__ */ new WeakMap();
h = /* @__PURE__ */ new WeakMap();
i = /* @__PURE__ */ new WeakSet();
N = function() {
  this.observe(
    o(this, n)?.isNew,
    (e) => {
      this._isNew = e || !1;
    },
    "breadcrumbWorkspaceIsNewObserver"
  );
};
O = function() {
  this.observe(
    o(this, n)?.name,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    (e) => this._name = e || "",
    "breadcrumbWorkspaceNameObserver"
  );
};
b = function() {
  !o(this, h) || !o(this, n) || this.observe(
    o(this, h).structure,
    (e) => {
      this._structure = e;
    },
    "menuStructureObserver"
  );
};
T = function(e) {
  if (e.isFolder) return;
  let t = `section/${o(this, _)?.getPathname()}`;
  return e.unique && (t += `/workspace/${e.entityType}/edit/${e.unique}`), t;
};
a.styles = [
  M,
  S`
			:host {
				margin-left: var(--uui-size-layout-1);
			}
		`
];
p([
  d()
], a.prototype, "_name", 2);
p([
  d()
], a.prototype, "_structure", 2);
p([
  d()
], a.prototype, "_isNew", 2);
a = p([
  k("umb-workspace-breadcrumb")
], a);
const K = a;
export {
  a as UmbWorkspaceBreadcrumbElement,
  K as default
};
//# sourceMappingURL=workspace-menu-breadcrumb.element-C7EVdFUf.js.map
