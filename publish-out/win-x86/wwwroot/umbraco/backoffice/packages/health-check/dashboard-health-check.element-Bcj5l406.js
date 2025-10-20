import { a as C } from "./health-check-dashboard.context-CVn1OCAb.js";
import { html as b, state as k, customElement as y } from "@umbraco-cms/backoffice/external/lit";
import { HealthCheckService as E } from "@umbraco-cms/backoffice/external/backend-api";
import { UmbLitElement as U } from "@umbraco-cms/backoffice/lit-element";
import { umbExtensionsRegistry as c } from "@umbraco-cms/backoffice/extension-registry";
import { tryExecute as g } from "@umbraco-cms/backoffice/resources";
var w = Object.defineProperty, H = Object.getOwnPropertyDescriptor, u = (e) => {
  throw TypeError(e);
}, d = (e, t, a, s) => {
  for (var r = s > 1 ? void 0 : s ? H(t, a) : t, n = e.length - 1, i; n >= 0; n--)
    (i = e[n]) && (r = (s ? i(t, a, r) : i(r)) || r);
  return s && r && w(t, a, r), r;
}, f = (e, t, a) => t.has(e) || u("Cannot " + a), D = (e, t, a) => (f(e, t, "read from private field"), a ? a.call(e) : t.get(e)), p = (e, t, a) => t.has(e) ? u("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, a), l = (e, t, a) => (f(e, t, "access private method"), a), m, h, _, v;
let o = class extends U {
  constructor() {
    super(), p(this, h), this._routes = [
      {
        path: "/:groupName",
        component: () => import("./health-check-group.element-QP9m8KQf.js"),
        setup: (e, t) => {
          const a = e;
          a.groupName = decodeURI(t.match.params.groupName);
        }
      },
      {
        path: "",
        component: () => import("./health-check-overview.element-Diy2jkPk.js")
      },
      {
        path: "**",
        component: async () => (await import("@umbraco-cms/backoffice/router")).UmbRouteNotFoundElement
      }
    ], this._healthCheckDashboardContext = new C(this), p(this, m, async () => {
      const { data: e } = await g(this, E.getHealthCheckGroup({ query: { skip: 0, take: 9999 } }));
      if (!e) return;
      const t = l(this, h, _).call(this, e.items);
      l(this, h, v).call(this, t);
    }), this.observe(c.byType("healthCheck"), (e) => {
      this._healthCheckDashboardContext.manifests = e;
    });
  }
  firstUpdated(e) {
    super.firstUpdated(e), D(this, m).call(this);
  }
  render() {
    return b` <umb-router-slot .routes=${this._routes}></umb-router-slot>`;
  }
};
m = /* @__PURE__ */ new WeakMap();
h = /* @__PURE__ */ new WeakSet();
_ = function(e) {
  return e.map((t) => ({
    type: "healthCheck",
    alias: `Umb.HealthCheck.${t.name?.replace(/\s+/g, "") || ""}`,
    name: `${t.name} Health Check`,
    api: () => import("./health-check-dashboard.context-CVn1OCAb.js").then((a) => a.h),
    weight: 500,
    meta: {
      label: t.name || ""
    }
  }));
};
v = function(e) {
  e.forEach((t) => {
    c.isRegistered(t.alias) || c.register(t);
  });
};
d([
  k()
], o.prototype, "_routes", 2);
o = d([
  y("umb-dashboard-health-check")
], o);
const M = o;
export {
  o as UmbDashboardHealthCheckElement,
  M as default
};
//# sourceMappingURL=dashboard-health-check.element-Bcj5l406.js.map
