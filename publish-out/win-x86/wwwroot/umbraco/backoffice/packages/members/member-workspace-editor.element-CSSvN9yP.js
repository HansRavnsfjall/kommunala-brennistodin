import { A as x } from "./manifests-KIVuOqdB.js";
import { a as A } from "./paths-yi0rlsCw.js";
import { UmbTextStyles as y } from "@umbraco-cms/backoffice/style";
import { nothing as F, repeat as T, ifDefined as I, html as m, css as V, state as d, customElement as C } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as W } from "@umbraco-cms/backoffice/lit-element";
var D = Object.defineProperty, B = Object.getOwnPropertyDescriptor, M = (e) => {
  throw TypeError(e);
}, b = (e, t, s, i) => {
  for (var r = i > 1 ? void 0 : i ? B(t, s) : t, a = e.length - 1, h; a >= 0; a--)
    (h = e[a]) && (r = (i ? h(t, s, r) : h(r)) || r);
  return i && r && D(t, s, r), r;
}, q = (e, t, s) => t.has(e) || M("Cannot " + s), N = (e, t, s) => t.has(e) ? M("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, s), k = (e, t, s) => (q(e, t, "access private method"), s), u, $, O;
let p = class extends W {
  constructor() {
    super(), N(this, u), this.consumeContext(x, (e) => {
      this._workspaceContext = e, k(this, u, $).call(this), k(this, u, O).call(this);
    });
  }
  render() {
    return this._variants ? m`<div id="splitViews">
						${T(
      this._variants,
      (e) => e.index + "_" + (e.culture ?? "") + "_" + (e.segment ?? "") + "_" + this._variants.length,
      (e) => m`
								<umb-workspace-split-view
									back-path=${A}
									.splitViewIndex=${e.index}
									.displayNavigation=${e.index === this._variants.length - 1}>
									<umb-icon slot="icon" name=${I(this._icon)}></umb-icon>
								</umb-workspace-split-view>
							`
    )}
					</div>

					<umb-workspace-footer alias="Umb.Workspace.Member"></umb-workspace-footer>` : F;
  }
};
u = /* @__PURE__ */ new WeakSet();
$ = function() {
  this._workspaceContext && this.observe(
    this._workspaceContext.splitView.activeVariantsInfo,
    (e) => {
      this._variants = e;
    },
    "_observeActiveVariantsInfo"
  );
};
O = function() {
  this._workspaceContext && this.observe(this._workspaceContext.contentTypeIcon, (e) => {
    this._icon = e ?? void 0;
  });
};
p.styles = [
  y,
  V`
			:host {
				width: 100%;
				height: 100%;

				display: flex;
				flex: 1;
				flex-direction: column;
			}

			#splitViews {
				display: flex;
				width: 100%;
				height: calc(100% - var(--umb-footer-layout-height));
			}

			#breadcrumbs {
				margin: 0 var(--uui-size-layout-1);
			}
		`
];
b([
  d()
], p.prototype, "_variants", 2);
b([
  d()
], p.prototype, "_icon", 2);
p = b([
  C("umb-member-workspace-split-view")
], p);
var K = Object.defineProperty, z = Object.getOwnPropertyDescriptor, P = (e) => {
  throw TypeError(e);
}, w = (e, t, s, i) => {
  for (var r = i > 1 ? void 0 : i ? z(t, s) : t, a = e.length - 1, h; a >= 0; a--)
    (h = e[a]) && (r = (i ? h(t, s, r) : h(r)) || r);
  return i && r && K(t, s, r), r;
}, E = (e, t, s) => t.has(e) || P("Cannot " + s), n = (e, t, s) => (E(e, t, "read from private field"), t.get(e)), v = (e, t, s) => t.has(e) ? P("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, s), g = (e, t, s, i) => (E(e, t, "write to private field"), t.set(e, s), s), f = (e, t, s) => (E(e, t, "access private method"), s), o, l, _, R, S, U;
let c = class extends W {
  constructor() {
    super(), v(this, _), this._splitViewElement = new p(), v(this, o), v(this, l), this._isForbidden = !1, this._gotWorkspaceRoute = (e) => {
      g(this, l, e.target.absoluteRouterPath), n(this, o)?.splitView.setWorkspaceRoute(n(this, l));
    }, this.consumeContext(x, (e) => {
      g(this, o, e), f(this, _, R).call(this), f(this, _, S).call(this);
    });
  }
  render() {
    return this._isForbidden ? m`<umb-route-forbidden></umb-route-forbidden>` : this._routes ? m`<umb-router-slot .routes=${this._routes} @init=${this._gotWorkspaceRoute}></umb-router-slot>` : "";
  }
};
o = /* @__PURE__ */ new WeakMap();
l = /* @__PURE__ */ new WeakMap();
_ = /* @__PURE__ */ new WeakSet();
R = function() {
  this.observe(
    n(this, o)?.variantOptions,
    (e) => f(this, _, U).call(this, e ?? []),
    "_observeVariants"
  );
};
S = function() {
  this.observe(
    n(this, o)?.forbidden.isOn,
    (e) => this._isForbidden = e ?? !1,
    "_observeForbidden"
  );
};
U = function(e) {
  const t = [];
  e.forEach((s) => {
    e.forEach((i) => {
      t.push({
        // TODO: When implementing Segments, be aware if using the unique is URL Safe... [NL]
        path: s.unique + "_&_" + i.unique,
        component: this._splitViewElement,
        setup: (r, a) => {
          n(this, o)?.splitView.setVariantParts(a.match.fragments.consumed);
        }
      });
    });
  }), e.forEach((s) => {
    t.push({
      // TODO: When implementing Segments, be aware if using the unique is URL Safe... [NL]
      path: s.unique,
      component: this._splitViewElement,
      setup: (i, r) => {
        n(this, o)?.splitView.removeActiveVariant(1), n(this, o)?.splitView.handleVariantFolderPart(0, r.match.fragments.consumed);
      }
    });
  }), t.length !== 0 && t.push({
    path: "",
    pathMatch: "full",
    //redirectTo: routes[variants.length * variants.length]?.path,
    resolve: async () => {
      if (!n(this, o))
        throw new Error("Workspace context is not available when resolving the default route.");
      const s = t[e.length * e.length]?.path;
      history.replaceState({}, "", `${n(this, l)}/${s}`);
    }
  }), t.push({
    path: "**",
    component: async () => (await import("@umbraco-cms/backoffice/router")).UmbRouteNotFoundElement
  }), this._routes = t;
};
c.styles = [
  y,
  V`
			:host {
				display: block;
				width: 100%;
				height: 100%;
			}
		`
];
w([
  d()
], c.prototype, "_isForbidden", 2);
w([
  d()
], c.prototype, "_routes", 2);
c = w([
  C("umb-member-workspace-editor")
], c);
const Q = c;
export {
  c as UmbMemberWorkspaceEditorElement,
  Q as default
};
//# sourceMappingURL=member-workspace-editor.element-CSSvN9yP.js.map
