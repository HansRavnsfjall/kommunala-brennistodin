import { html as v, state as _, customElement as l } from "@umbraco-cms/backoffice/external/lit";
import { createExtensionElement as u } from "@umbraco-cms/backoffice/extension-api";
import { umbExtensionsRegistry as d } from "@umbraco-cms/backoffice/extension-registry";
import { UmbLitElement as f } from "@umbraco-cms/backoffice/lit-element";
var y = Object.defineProperty, w = Object.getOwnPropertyDescriptor, c = (e) => {
  throw TypeError(e);
}, m = (e, t, r, a) => {
  for (var s = a > 1 ? void 0 : a ? w(t, r) : t, n = e.length - 1, p; n >= 0; n--)
    (p = e[n]) && (s = (a ? p(t, r, s) : p(s)) || s);
  return a && s && y(t, r, s), s;
}, h = (e, t, r) => t.has(e) || c("Cannot " + r), E = (e, t, r) => (h(e, t, "read from private field"), t.get(e)), g = (e, t, r) => t.has(e) ? c("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), C = (e, t, r, a) => (h(e, t, "write to private field"), t.set(e, r), r), o;
let i = class extends f {
  constructor() {
    super(), this._routes = [], g(this, o, []), this.observe(
      d.byTypeAndFilter(
        "workspace",
        (e) => e.meta.entityType === "package-builder"
      ),
      (e) => {
        C(this, o, e), this._createRoutes();
      }
    );
  }
  _createRoutes() {
    const e = [
      {
        path: "overview",
        component: () => import("./packages-created-overview.element-DFLetPcB.js")
      }
    ];
    E(this, o)?.map((t) => {
      e.push({
        path: `${t.meta.entityType}/:unique`,
        component: () => u(t),
        setup: (r, a) => {
          r && (r.entityUnique = a.match.params.unique);
        }
      }), e.push({
        path: t.meta.entityType,
        component: () => u(t)
      });
    }), e.push({
      path: "",
      pathMatch: "full",
      redirectTo: "overview"
    }), e.push({
      path: "**",
      component: async () => (await import("@umbraco-cms/backoffice/router")).UmbRouteNotFoundElement
    }), this._routes = e;
  }
  render() {
    return v`<umb-router-slot .routes=${this._routes}></umb-router-slot>`;
  }
};
o = /* @__PURE__ */ new WeakMap();
m([
  _()
], i.prototype, "_routes", 2);
i = m([
  l("umb-created-packages-section-view")
], i);
const x = i;
export {
  i as UmbCreatedPackagesSectionViewElement,
  x as default
};
//# sourceMappingURL=created-packages-section-view.element-B98yWbSC.js.map
