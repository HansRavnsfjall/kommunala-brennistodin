import { v as b, u as W } from "./document-blueprint-item.server.cache-DONXnfyi.js";
import { UmbTextStyles as g } from "@umbraco-cms/backoffice/style";
import { nothing as R, repeat as D, html as m, css as E, state as V, customElement as x } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as C } from "@umbraco-cms/backoffice/lit-element";
var $ = Object.defineProperty, A = Object.getOwnPropertyDescriptor, y = (t, e, s, o) => {
  for (var i = o > 1 ? void 0 : o ? A(e, s) : e, h = t.length - 1, u; h >= 0; h--)
    (u = t[h]) && (i = (o ? u(e, s, i) : u(i)) || i);
  return o && i && $(e, s, i), i;
};
let p = class extends C {
  constructor() {
    super(), this.consumeContext(b, (t) => {
      this._workspaceContext = t, this._observeActiveVariantInfo();
    });
  }
  _observeActiveVariantInfo() {
    this._workspaceContext && this.observe(
      this._workspaceContext.splitView.activeVariantsInfo,
      (t) => {
        this._variants = t;
      },
      "_observeActiveVariantsInfo"
    );
  }
  render() {
    return this._variants ? m`<div id="splitViews">
						${D(
      this._variants,
      (t) => t.index + "_" + (t.culture ?? "") + "_" + (t.segment ?? "") + "_" + this._variants.length,
      (t) => m`
								<umb-workspace-split-view
									.splitViewIndex=${t.index}
									.displayNavigation=${t.index === this._variants.length - 1}></umb-workspace-split-view>
							`
    )}
					</div>

					<umb-workspace-footer alias=${W}></umb-workspace-footer>` : R;
  }
};
p.styles = [
  g,
  E`
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
y([
  V()
], p.prototype, "_variants", 2);
p = y([
  x("umb-document-blueprint-workspace-split-view")
], p);
var M = Object.defineProperty, T = Object.getOwnPropertyDescriptor, O = (t) => {
  throw TypeError(t);
}, P = (t, e, s, o) => {
  for (var i = o > 1 ? void 0 : o ? T(e, s) : e, h = t.length - 1, u; h >= 0; h--)
    (u = t[h]) && (i = (o ? u(e, s, i) : u(i)) || i);
  return o && i && M(e, s, i), i;
}, d = (t, e, s) => e.has(t) || O("Cannot " + s), r = (t, e, s) => (d(t, e, "read from private field"), e.get(t)), c = (t, e, s) => e.has(t) ? O("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, s), f = (t, e, s, o) => (d(t, e, "write to private field"), e.set(t, s), s), w = (t, e, s) => (d(t, e, "access private method"), s), a, n, v, _, k, U;
let l = class extends C {
  constructor() {
    super(), c(this, _), this._splitViewElement = new p(), c(this, a), c(this, n), c(this, v, !1), this._gotWorkspaceRoute = (t) => {
      r(this, a)?.splitView.setWorkspaceRoute(t.target.absoluteRouterPath);
    }, this.consumeContext(b, (t) => {
      f(this, a, t), w(this, _, k).call(this), w(this, _, U).call(this);
    });
  }
  async _generateRoutes() {
    const t = [];
    r(this, n)?.forEach((e) => {
      r(this, n)?.forEach((s) => {
        t.push({
          // TODO: When implementing Segments, be aware if using the unique is URL Safe... [NL]
          path: e.unique + "_&_" + s.unique,
          component: this._splitViewElement,
          setup: (o, i) => {
            r(this, a)?.splitView.setVariantParts(i.match.fragments.consumed);
          }
        });
      });
    }), r(this, n)?.forEach((e) => {
      t.push({
        // TODO: When implementing Segments, be aware if using the unique is URL Safe... [NL]
        path: e.unique,
        component: this._splitViewElement,
        setup: (s, o) => {
          r(this, a)?.splitView.removeActiveVariant(1), r(this, a)?.splitView.handleVariantFolderPart(0, o.match.fragments.consumed);
        }
      });
    }), t.length !== 0 && r(this, n)?.length && t.push({
      path: "",
      pathMatch: "full",
      redirectTo: t[r(this, n).length * r(this, n).length]?.path
    }), t.push({
      path: "**",
      component: async () => {
        const e = await import("@umbraco-cms/backoffice/router");
        return r(this, v) ? e.UmbRouteForbiddenElement : e.UmbRouteNotFoundElement;
      }
    }), this._routes = t;
  }
  render() {
    return this._routes ? m`<umb-router-slot .routes=${this._routes} @init=${this._gotWorkspaceRoute}></umb-router-slot>` : "";
  }
};
a = /* @__PURE__ */ new WeakMap();
n = /* @__PURE__ */ new WeakMap();
v = /* @__PURE__ */ new WeakMap();
_ = /* @__PURE__ */ new WeakSet();
k = function() {
  r(this, a) && this.observe(
    r(this, a).variantOptions,
    (t) => {
      f(this, n, t), this._generateRoutes();
    },
    "_observeVariants"
  );
};
U = function() {
  this.observe(
    r(this, a)?.forbidden.isOn,
    (t) => {
      f(this, v, t ?? !1), this._generateRoutes();
    },
    "_observeForbidden"
  );
};
l.styles = [
  g,
  E`
			:host {
				display: block;
				width: 100%;
				height: 100%;

				--uui-color-invalid: var(--uui-color-warning);
				--uui-color-invalid-emphasis: var(--uui-color-warning-emphasis);
				--uui-color-invalid-standalone: var(--uui-color-warning-standalone);
				--uui-color-invalid-contrast: var(--uui-color-warning-contrast);
			}
		`
];
P([
  V()
], l.prototype, "_routes", 2);
l = P([
  x("umb-document-blueprint-workspace-editor")
], l);
const F = l;
export {
  l as UmbDocumentBlueprintWorkspaceEditorElement,
  F as default
};
//# sourceMappingURL=document-blueprint-workspace-editor.element-BHZG3nOn.js.map
