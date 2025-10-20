import { a as U } from "./workspace.element-CAJljmTw.js";
import { map as W, ifDefined as S, html as C, css as k, state as E, customElement as x } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as y } from "@umbraco-cms/backoffice/lit-element";
import { UmbTextStyles as N } from "@umbraco-cms/backoffice/style";
import { UMB_SECTION_CONTEXT as $ } from "@umbraco-cms/backoffice/section";
import { UMB_MENU_STRUCTURE_WORKSPACE_CONTEXT as M } from "@umbraco-cms/backoffice/menu";
var P = Object.defineProperty, g = Object.getOwnPropertyDescriptor, w = (e) => {
  throw TypeError(e);
}, v = (e, t, r, c) => {
  for (var s = c > 1 ? void 0 : c ? g(t, r) : t, p = e.length - 1, f; p >= 0; p--)
    (f = e[p]) && (s = (c ? f(t, r, s) : f(s)) || s);
  return c && s && P(t, r, s), s;
}, b = (e, t, r) => t.has(e) || w("Cannot " + r), a = (e, t, r) => (b(e, t, "read from private field"), t.get(e)), m = (e, t, r) => t.has(e) ? w("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), l = (e, t, r, c) => (b(e, t, "write to private field"), t.set(e, r), r), h = (e, t, r) => (b(e, t, "access private method"), r), o, _, u, i, d, O, T;
let n = class extends y {
  constructor() {
    super(), m(this, i), this._name = "", this._structure = [], m(this, o), m(this, _), m(this, u), this.consumeContext($, (e) => {
      l(this, _, e);
    }), this.consumeContext(U, (e) => {
      l(this, o, e), h(this, i, d).call(this), h(this, i, O).call(this);
    }), this.consumeContext(M, (e) => {
      l(this, u, e), h(this, i, d).call(this);
    });
  }
  render() {
    return C`
			<uui-breadcrumbs>
				${W(
      this._structure,
      (e) => C`<uui-breadcrumb-item href=${S(h(this, i, T).call(this, e))}
							>${this.localize.string(e.name)}</uui-breadcrumb-item
						>`
    )}
				<uui-breadcrumb-item>${this._name}</uui-breadcrumb-item>
			</uui-breadcrumbs>
		`;
  }
};
o = /* @__PURE__ */ new WeakMap();
_ = /* @__PURE__ */ new WeakMap();
u = /* @__PURE__ */ new WeakMap();
i = /* @__PURE__ */ new WeakSet();
d = function() {
  if (!a(this, u) || !a(this, o)) return;
  const e = a(this, o).getIsNew();
  this.observe(
    a(this, u).structure,
    (t) => {
      this._structure = e ? t : t.slice(0, -1);
    },
    "menuStructureObserver"
  );
};
O = function() {
  this.observe(
    a(this, o)?.name,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    (e) => this._name = e || "",
    "breadcrumbWorkspaceNameObserver"
  );
};
T = function(e) {
  const t = `section/${a(this, _)?.getPathname()}/workspace/${e.entityType}/edit`;
  return e.isFolder ? void 0 : `${t}/${e.unique}`;
};
n.styles = [
  N,
  k`
			:host {
				margin-left: var(--uui-size-layout-1);
			}
		`
];
v([
  E()
], n.prototype, "_name", 2);
v([
  E()
], n.prototype, "_structure", 2);
n = v([
  x("umb-workspace-breadcrumb")
], n);
const K = n;
export {
  n as UmbWorkspaceBreadcrumbElement,
  K as default
};
//# sourceMappingURL=workspace-menu-breadcrumb.element-BmWPCUKF.js.map
