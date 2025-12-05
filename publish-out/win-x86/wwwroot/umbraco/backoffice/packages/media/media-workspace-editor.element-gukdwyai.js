import { H as x } from "./input-upload-field.element-DEgpG3Zz.js";
import { nothing as I, repeat as T, ifDefined as D, html as b, css as V, state as m, customElement as y } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as C } from "@umbraco-cms/backoffice/lit-element";
import { UmbTextStyles as W } from "@umbraco-cms/backoffice/style";
var F = Object.defineProperty, q = Object.getOwnPropertyDescriptor, $ = (t) => {
  throw TypeError(t);
}, f = (t, e, s, r) => {
  for (var i = r > 1 ? void 0 : r ? q(e, s) : e, h = t.length - 1, p; h >= 0; h--)
    (p = t[h]) && (i = (r ? p(e, s, i) : p(i)) || i);
  return r && i && F(e, s, i), i;
}, N = (t, e, s) => e.has(t) || $("Cannot " + s), z = (t, e, s) => e.has(t) ? $("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, s), w = (t, e, s) => (N(t, e, "access private method"), s), l, M, O, P;
let c = class extends C {
  constructor() {
    super(), z(this, l), this.consumeContext(x, (t) => {
      this._workspaceContext = t, w(this, l, M).call(this), w(this, l, O).call(this), w(this, l, P).call(this);
    });
  }
  render() {
    return this._variants ? b`<div id="splitViews">
						${T(
      this._variants,
      (t) => t.index + "_" + (t.culture ?? "") + "_" + (t.segment ?? "") + "_" + this._variants.length,
      (t) => b`
								<umb-workspace-split-view
									.displayNavigation=${t.index === this._variants.length - 1}
									.overrides=${this._overrides}
									.splitViewIndex=${t.index}>
									<umb-icon slot="icon" name=${D(this._icon)}></umb-icon>
								</umb-workspace-split-view>
							`
    )}
					</div>

					<umb-workspace-footer alias="Umb.Workspace.Media"></umb-workspace-footer>` : I;
  }
};
l = /* @__PURE__ */ new WeakSet();
M = function() {
  this._workspaceContext && this.observe(
    this._workspaceContext.splitView.activeVariantsInfo,
    (t) => {
      this._variants = t;
    },
    "_observeActiveVariantsInfo"
  );
};
O = function() {
  this._workspaceContext && this.observe(this._workspaceContext.contentTypeIcon, (t) => {
    this._icon = t ?? void 0;
  });
};
P = function() {
  this.observe(this._workspaceContext?.collection.manifestOverrides, (t) => {
    this._overrides = t ? [t] : void 0;
  });
};
c.styles = [
  W,
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
f([
  m()
], c.prototype, "_variants", 2);
f([
  m()
], c.prototype, "_icon", 2);
f([
  m()
], c.prototype, "_overrides", 2);
c = f([
  y("umb-media-workspace-split-view")
], c);
var B = Object.defineProperty, G = Object.getOwnPropertyDescriptor, U = (t) => {
  throw TypeError(t);
}, R = (t, e, s, r) => {
  for (var i = r > 1 ? void 0 : r ? G(e, s) : e, h = t.length - 1, p; h >= 0; h--)
    (p = t[h]) && (i = (r ? p(e, s, i) : p(i)) || i);
  return r && i && B(e, s, i), i;
}, g = (t, e, s) => e.has(t) || U("Cannot " + s), o = (t, e, s) => (g(t, e, "read from private field"), e.get(t)), u = (t, e, s) => e.has(t) ? U("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, s), E = (t, e, s, r) => (g(t, e, "write to private field"), e.set(t, s), s), k = (t, e, s) => (g(t, e, "access private method"), s), n, a, d, v, S, A;
let _ = class extends C {
  constructor() {
    super(), u(this, v), this._splitViewElement = new c(), u(this, n), u(this, a), u(this, d, !1), this._gotWorkspaceRoute = (t) => {
      o(this, n)?.splitView.setWorkspaceRoute(t.target.absoluteRouterPath);
    }, this.consumeContext(x, (t) => {
      E(this, n, t), k(this, v, S).call(this), k(this, v, A).call(this);
    });
  }
  async _generateRoutes() {
    const t = [];
    o(this, a)?.forEach((e) => {
      o(this, a)?.forEach((s) => {
        t.push({
          // TODO: When implementing Segments, be aware if using the unique is URL Safe... [NL]
          path: e.unique + "_&_" + s.unique,
          component: this._splitViewElement,
          setup: (r, i) => {
            o(this, n)?.splitView.setVariantParts(i.match.fragments.consumed);
          }
        });
      });
    }), o(this, a)?.forEach((e) => {
      t.push({
        // TODO: When implementing Segments, be aware if using the unique is URL Safe... [NL]
        path: e.unique,
        component: this._splitViewElement,
        setup: (s, r) => {
          o(this, n)?.splitView.removeActiveVariant(1), o(this, n)?.splitView.handleVariantFolderPart(0, r.match.fragments.consumed);
        }
      });
    }), t.length !== 0 && o(this, a)?.length && t.push({
      path: "",
      pathMatch: "full",
      redirectTo: t[o(this, a).length * o(this, a).length]?.path
    }), t.push({
      path: "**",
      component: async () => {
        const e = await import("@umbraco-cms/backoffice/router");
        return o(this, d) ? e.UmbRouteForbiddenElement : e.UmbRouteNotFoundElement;
      }
    }), this._routes = t;
  }
  render() {
    return this._routes && this._routes.length > 0 ? b`<umb-router-slot .routes=${this._routes} @init=${this._gotWorkspaceRoute}></umb-router-slot>` : "";
  }
};
n = /* @__PURE__ */ new WeakMap();
a = /* @__PURE__ */ new WeakMap();
d = /* @__PURE__ */ new WeakMap();
v = /* @__PURE__ */ new WeakSet();
S = function() {
  this.observe(
    o(this, n)?.variantOptions,
    (t) => {
      E(this, a, t), this._generateRoutes();
    },
    "_observeVariants"
  );
};
A = function() {
  this.observe(
    o(this, n)?.forbidden.isOn,
    (t) => {
      E(this, d, t ?? !1), this._generateRoutes();
    },
    "_observeForbidden"
  );
};
_.styles = [
  W,
  V`
			:host {
				display: block;
				width: 100%;
				height: 100%;
			}
		`
];
R([
  m()
], _.prototype, "_routes", 2);
_ = R([
  y("umb-media-workspace-editor")
], _);
const J = _;
export {
  _ as UmbMediaWorkspaceEditorElement,
  J as default
};
//# sourceMappingURL=media-workspace-editor.element-gukdwyai.js.map
