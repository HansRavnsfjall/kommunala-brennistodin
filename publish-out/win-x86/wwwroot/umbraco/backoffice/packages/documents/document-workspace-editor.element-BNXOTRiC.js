import { i as j, g as I } from "./manifests-BfVrApfB.js";
import { state as v, customElement as O, html as b, nothing as tt, repeat as et, ifDefined as st, css as N } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as R } from "@umbraco-cms/backoffice/lit-element";
import { UmbTextStyles as L } from "@umbraco-cms/backoffice/style";
import { s as it } from "./utils-CufTuDI9.js";
import { DocumentVariantStateModel as p } from "@umbraco-cms/backoffice/external/backend-api";
import "@umbraco-cms/backoffice/resources";
import "@umbraco-cms/backoffice/repository";
import { UmbWorkspaceSplitViewVariantSelectorElement as at } from "@umbraco-cms/backoffice/workspace";
import { UMB_APP_LANGUAGE_CONTEXT as rt } from "@umbraco-cms/backoffice/language";
var nt = Object.defineProperty, ot = Object.getOwnPropertyDescriptor, G = (t) => {
  throw TypeError(t);
}, B = (t, e, s, r) => {
  for (var i = r > 1 ? void 0 : r ? ot(e, s) : e, n = t.length - 1, o; n >= 0; n--)
    (o = t[n]) && (i = (r ? o(e, s, i) : o(i)) || i);
  return r && i && nt(e, s, i), i;
}, U = (t, e, s) => e.has(t) || G("Cannot " + s), H = (t, e, s) => (U(t, e, "read from private field"), e.get(t)), V = (t, e, s) => e.has(t) ? G("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, s), ht = (t, e, s, r) => (U(t, e, "write to private field"), e.set(t, s), s), y = (t, e, s) => (U(t, e, "access private method"), s), S, M, g, F, q, X;
let x = class extends at {
  constructor() {
    super(), V(this, g), this._variantSorter = it, this._variantsWithPendingChanges = [], V(this, S), V(this, M, {
      [p.DRAFT]: "content_unpublished",
      [p.PUBLISHED]: "content_published",
      // TODO: The pending changes state can be removed once the management Api removes this state
      // We only keep it here to make typescript happy
      // We should also make our own state model for this
      [p.PUBLISHED_PENDING_CHANGES]: "content_published",
      [p.NOT_CREATED]: "content_notCreated",
      [p.TRASHED]: "mediaPicker_trashed"
    }), this.consumeContext(j, (t) => {
      ht(this, S, t), y(this, g, F).call(this);
    });
  }
  _renderVariantDetails(t) {
    return b` ${y(this, g, X).call(this, t)}`;
  }
};
S = /* @__PURE__ */ new WeakMap();
M = /* @__PURE__ */ new WeakMap();
g = /* @__PURE__ */ new WeakSet();
F = function() {
  this.observe(
    H(this, S)?.publishedPendingChanges.variantsWithChanges,
    (t) => {
      this._variantsWithPendingChanges = t || [];
    },
    "_observePendingChanges"
  );
};
q = function(t) {
  return this._variantsWithPendingChanges.some((e) => e.variantId.compare(t));
};
X = function(t) {
  let e = H(this, M)[t.variant?.state || p.NOT_CREATED];
  return (t.variant?.state === p.PUBLISHED || t.variant?.state === p.PUBLISHED_PENDING_CHANGES) && y(this, g, q).call(this, t) && (e = "content_publishedPendingChanges"), this.localize.term(e);
};
B([
  v()
], x.prototype, "_variantsWithPendingChanges", 2);
x = B([
  O("umb-document-workspace-split-view-variant-selector")
], x);
var ct = Object.defineProperty, pt = Object.getOwnPropertyDescriptor, z = (t) => {
  throw TypeError(t);
}, E = (t, e, s, r) => {
  for (var i = r > 1 ? void 0 : r ? pt(e, s) : e, n = t.length - 1, o; n >= 0; n--)
    (o = t[n]) && (i = (r ? o(e, s, i) : o(i)) || i);
  return r && i && ct(e, s, i), i;
}, lt = (t, e, s) => e.has(t) || z("Cannot " + s), _t = (t, e, s) => e.has(t) ? z("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, s), P = (t, e, s) => (lt(t, e, "access private method"), s), m, K, J, Q, Y;
let l = class extends R {
  constructor() {
    super(), _t(this, m), this._loading = !0, this.consumeContext(I, (t) => {
      this._workspaceContext = t, P(this, m, K).call(this), P(this, m, J).call(this), P(this, m, Q).call(this), P(this, m, Y).call(this);
    });
  }
  render() {
    return this._variants ? b`<div id="splitViews">
						${et(
      this._variants,
      (t) => t.index + "_" + (t.culture ?? "") + "_" + (t.segment ?? "") + "_" + this._variants.length,
      (t) => b`
								<umb-workspace-split-view
									.loading=${this._loading}
									.displayNavigation=${t.index === this._variants.length - 1}
									.overrides=${this._overrides}
									.splitViewIndex=${t.index}>
									<umb-icon slot="icon" name=${st(this._icon)}></umb-icon>
									<umb-document-workspace-split-view-variant-selector
										slot="variant-selector"></umb-document-workspace-split-view-variant-selector>
								</umb-workspace-split-view>
							`
    )}
					</div>

					<umb-workspace-footer alias="Umb.Workspace.Document"></umb-workspace-footer>` : tt;
  }
};
m = /* @__PURE__ */ new WeakSet();
K = function() {
  this.observe(
    this._workspaceContext?.splitView.activeVariantsInfo,
    (t) => {
      this._variants = t;
    },
    "_observeActiveVariantsInfo"
  );
};
J = function() {
  this.observe(
    this._workspaceContext?.contentTypeIcon,
    (t) => {
      this._icon = t ?? void 0;
    },
    "observeIcon"
  );
};
Q = function() {
  this.observe(
    this._workspaceContext?.loading.isOn,
    (t) => {
      this._loading = t ?? !1;
    },
    "observeIcon"
  );
};
Y = function() {
  this.observe(
    this._workspaceContext?.collection.manifestOverrides,
    (t) => {
      this._overrides = t ? [t] : void 0;
    },
    "observeCollectionOverrides"
  );
};
l.styles = [
  L,
  N`
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
		`
];
E([
  v()
], l.prototype, "_variants", 2);
E([
  v()
], l.prototype, "_icon", 2);
E([
  v()
], l.prototype, "_overrides", 2);
E([
  v()
], l.prototype, "_loading", 2);
l = E([
  O("umb-document-workspace-split-view")
], l);
var ut = Object.defineProperty, vt = Object.getOwnPropertyDescriptor, Z = (t) => {
  throw TypeError(t);
}, T = (t, e, s, r) => {
  for (var i = r > 1 ? void 0 : r ? vt(e, s) : e, n = t.length - 1, o; n >= 0; n--)
    (o = t[n]) && (i = (r ? o(e, s, i) : o(i)) || i);
  return r && i && ut(e, s, i), i;
}, A = (t, e, s) => e.has(t) || Z("Cannot " + s), a = (t, e, s) => (A(t, e, "read from private field"), e.get(t)), _ = (t, e, s) => e.has(t) ? Z("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, s), d = (t, e, s, r) => (A(t, e, "write to private field"), e.set(t, s), s), D = (t, e, s) => (A(t, e, "access private method"), s), W, h, u, C, c, $, w, k;
let f = class extends R {
  constructor() {
    super(), _(this, w), this._splitViewElement = new l(), _(this, W), _(this, h), _(this, u), _(this, C), _(this, c), _(this, $, !1), this._loading = !0, this._gotWorkspaceRoute = (t) => {
      d(this, u, t.target.absoluteRouterPath), a(this, h)?.splitView.setWorkspaceRoute(a(this, u));
    }, this.consumeContext(rt, (t) => {
      d(this, W, t), this.observe(a(this, W)?.appLanguageCulture, (e) => {
        d(this, C, e), D(this, w, k).call(this);
      });
    }), this.consumeContext(I, (t) => {
      d(this, h, t), this.observe(
        a(this, h)?.variantOptions,
        (e) => {
          d(this, c, e), D(this, w, k).call(this);
        },
        "_observeVariants"
      ), this.observe(
        a(this, h)?.forbidden.isOn,
        (e) => {
          d(this, $, e ?? !1), D(this, w, k).call(this);
        },
        "_observeForbidden"
      ), this.observe(
        a(this, h)?.loading.isOn,
        (e) => {
          this._loading = e ?? !1;
        },
        "_observeLoading"
      );
    });
  }
  render() {
    return !this._loading && this._routes ? b`<umb-router-slot .routes=${this._routes} @init=${this._gotWorkspaceRoute}></umb-router-slot>` : b`<umb-view-loader></umb-view-loader>`;
  }
};
W = /* @__PURE__ */ new WeakMap();
h = /* @__PURE__ */ new WeakMap();
u = /* @__PURE__ */ new WeakMap();
C = /* @__PURE__ */ new WeakMap();
c = /* @__PURE__ */ new WeakMap();
$ = /* @__PURE__ */ new WeakMap();
w = /* @__PURE__ */ new WeakSet();
k = function() {
  if (!a(this, c) || a(this, c).length === 0 || !a(this, C)) {
    this._routes = [];
    return;
  }
  const t = [];
  a(this, c).forEach((e) => {
    a(this, c).forEach((s) => {
      t.push({
        // TODO: When implementing Segments, be aware if using the unique still is URL Safe, cause its most likely not... [NL]
        path: e.unique + "_&_" + s.unique,
        component: this._splitViewElement,
        setup: (r, i) => {
          a(this, h)?.splitView.setVariantParts(i.match.fragments.consumed);
        }
      });
    });
  }), a(this, c).forEach((e) => {
    t.push({
      // TODO: When implementing Segments, be aware if using the unique still is URL Safe, cause its most likely not... [NL]
      path: e.unique,
      component: this._splitViewElement,
      setup: (s, r) => {
        a(this, h)?.splitView.removeActiveVariant(1), a(this, h)?.splitView.handleVariantFolderPart(0, r.match.fragments.consumed);
      }
    });
  }), t.length !== 0 && t.push({
    path: "",
    pathMatch: "full",
    resolve: async () => {
      if (!a(this, h))
        throw new Error("Workspace context is not available when resolving the default route.");
      const e = t.find((s) => s.path === a(this, C));
      if (!e) {
        const s = t.find((i) => i.path === a(this, c)?.[0]?.unique)?.path;
        if (s) {
          history.replaceState({}, "", `${a(this, u)}/${s}`);
          return;
        }
        const r = `${a(this, u)}/${t[t.length - 3].path}`;
        history.replaceState({}, "", r);
        return;
      }
      history.replaceState({}, "", `${a(this, u)}/${e?.path}`);
    }
  }), t.push({
    path: "**",
    component: async () => {
      const e = await import("@umbraco-cms/backoffice/router");
      return a(this, $) ? e.UmbRouteForbiddenElement : e.UmbRouteNotFoundElement;
    }
  }), this._routes = t;
};
f.styles = [
  L,
  N`
			:host {
				display: block;
				width: 100%;
				height: 100%;
			}
		`
];
T([
  v()
], f.prototype, "_routes", 2);
T([
  v()
], f.prototype, "_loading", 2);
f = T([
  O("umb-document-workspace-editor")
], f);
const kt = f;
export {
  f as UmbDocumentWorkspaceEditorElement,
  kt as default
};
//# sourceMappingURL=document-workspace-editor.element-BNXOTRiC.js.map
