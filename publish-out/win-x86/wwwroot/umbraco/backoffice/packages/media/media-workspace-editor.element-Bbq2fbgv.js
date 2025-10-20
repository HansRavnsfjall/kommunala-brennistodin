import { G as d } from "./input-upload-field.element-BKvVffkE.js";
import { UmbTextStyles as v } from "@umbraco-cms/backoffice/style";
import { nothing as P, repeat as W, html as c, css as f, state as w, customElement as g } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as b } from "@umbraco-cms/backoffice/lit-element";
var O = Object.defineProperty, M = Object.getOwnPropertyDescriptor, E = (t, e, s, i) => {
  for (var r = i > 1 ? void 0 : i ? M(e, s) : e, a = t.length - 1, o; a >= 0; a--)
    (o = t[a]) && (r = (i ? o(e, s, r) : o(r)) || r);
  return i && r && O(e, s, r), r;
};
let h = class extends b {
  constructor() {
    super(), this.consumeContext(d, (t) => {
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
    return this._variants ? c`<div id="splitViews">
						${W(
      this._variants,
      (t) => t.index + "_" + (t.culture ?? "") + "_" + (t.segment ?? "") + "_" + this._variants.length,
      (t) => c`
								<umb-workspace-split-view
									.splitViewIndex=${t.index}
									.displayNavigation=${t.index === this._variants.length - 1}></umb-workspace-split-view>
							`
    )}
					</div>

					<umb-workspace-footer alias="Umb.Workspace.Media"></umb-workspace-footer>` : P;
  }
};
h.styles = [
  v,
  f`
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
E([
  w()
], h.prototype, "_variants", 2);
h = E([
  g("umb-media-workspace-split-view")
], h);
var S = Object.defineProperty, U = Object.getOwnPropertyDescriptor, V = (t) => {
  throw TypeError(t);
}, x = (t, e, s, i) => {
  for (var r = i > 1 ? void 0 : i ? U(e, s) : e, a = t.length - 1, o; a >= 0; a--)
    (o = t[a]) && (r = (i ? o(e, s, r) : o(r)) || r);
  return i && r && S(e, s, r), r;
}, _ = (t, e, s) => e.has(t) || V("Cannot " + s), p = (t, e, s) => (_(t, e, "read from private field"), e.get(t)), m = (t, e, s) => e.has(t) ? V("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, s), $ = (t, e, s, i) => (_(t, e, "write to private field"), e.set(t, s), s), A = (t, e, s) => (_(t, e, "access private method"), s), n, u, y;
let l = class extends b {
  constructor() {
    super(), m(this, u), this.splitViewElement = new h(), m(this, n), this._gotWorkspaceRoute = (t) => {
      p(this, n)?.splitView.setWorkspaceRoute(t.target.absoluteRouterPath);
    }, this.consumeContext(d, (t) => {
      $(this, n, t), A(this, u, y).call(this);
    });
  }
  _handleVariantFolderPart(t, e) {
    const s = e.split("_"), i = s[0], r = s[1];
    p(this, n)?.splitView.setActiveVariant(t, i, r);
  }
  async _generateRoutes(t) {
    if (!t || t.length === 0) return;
    const e = [];
    t.forEach((s) => {
      t.forEach((i) => {
        e.push({
          // TODO: When implementing Segments, be aware if using the unique is URL Safe... [NL]
          path: s.unique + "_&_" + i.unique,
          component: this.splitViewElement,
          setup: (r, a) => {
            a.match.fragments.consumed.split("_&_").forEach((k, C) => {
              this._handleVariantFolderPart(C, k);
            });
          }
        });
      });
    }), t.forEach((s) => {
      e.push({
        // TODO: When implementing Segments, be aware if using the unique is URL Safe... [NL]
        path: s.unique,
        component: this.splitViewElement,
        setup: (i, r) => {
          p(this, n)?.splitView.removeActiveVariant(1), this._handleVariantFolderPart(0, r.match.fragments.consumed);
        }
      });
    }), e.length !== 0 && e.push({
      path: "",
      pathMatch: "full",
      redirectTo: e[t.length * t.length]?.path
    }), e.push({
      path: "**",
      component: async () => (await import("@umbraco-cms/backoffice/router")).UmbRouteNotFoundElement
    }), this._routes = e;
  }
  render() {
    return this._routes && this._routes.length > 0 ? c`<umb-router-slot .routes=${this._routes} @init=${this._gotWorkspaceRoute}></umb-router-slot>` : "";
  }
};
n = /* @__PURE__ */ new WeakMap();
u = /* @__PURE__ */ new WeakSet();
y = function() {
  p(this, n) && this.observe(p(this, n).variantOptions, (t) => this._generateRoutes(t), "_observeVariants");
};
l.styles = [
  v,
  f`
			:host {
				display: block;
				width: 100%;
				height: 100%;
			}
		`
];
x([
  w()
], l.prototype, "_routes", 2);
l = x([
  g("umb-media-workspace-editor")
], l);
const F = l;
export {
  l as UmbMediaWorkspaceEditorElement,
  F as default
};
//# sourceMappingURL=media-workspace-editor.element-Bbq2fbgv.js.map
