import { html as p, nothing as l, css as v, state as c, customElement as _ } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as b } from "@umbraco-cms/backoffice/lit-element";
var P = Object.defineProperty, f = Object.getOwnPropertyDescriptor, d = (e) => {
  throw TypeError(e);
}, s = (e, t, a, n) => {
  for (var r = n > 1 ? void 0 : n ? f(t, a) : t, i = e.length - 1, h; i >= 0; i--)
    (h = e[i]) && (r = (n ? h(t, a, r) : h(r)) || r);
  return n && r && P(t, a, r), r;
}, y = (e, t, a) => t.has(e) || d("Cannot " + a), x = (e, t, a) => t.has(e) ? d("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, a), g = (e, t, a) => (y(e, t, "access private method"), a), m, u;
let o = class extends b {
  constructor() {
    super(...arguments), x(this, m), this._routes = [
      {
        path: "/index/:indexerName",
        component: () => import("./section-view-examine-indexers-CmfuoQTn.js"),
        setup: (e, t) => {
          const a = e;
          a.indexName = t.match.params.indexerName;
        }
      },
      {
        path: "/searcher/:searcherName",
        component: () => import("./section-view-examine-searchers-CWoWVijM.js"),
        setup: (e, t) => {
          const a = e;
          a.searcherName = t.match.params.searcherName;
        }
      },
      {
        path: "",
        component: () => import("./section-view-examine-overview-B6YsGIDQ.js")
      },
      {
        path: "**",
        component: async () => (await import("@umbraco-cms/backoffice/router")).UmbRouteNotFoundElement
      }
    ], this._activePath = "";
  }
  render() {
    return p`
			<umb-body-layout header-transparent>
				${g(this, m, u).call(this)}
				<div id="main">
					<umb-router-slot
						.routes=${this._routes}
						@init=${(e) => {
      this._routerPath = e.target.absoluteRouterPath;
    }}
						@change=${(e) => {
      this._activePath = e.target.localActiveViewPath || "";
    }}></umb-router-slot>
				</div>
			</umb-body-layout>
		`;
  }
};
m = /* @__PURE__ */ new WeakSet();
u = function() {
  return this._routerPath && this._activePath !== "" ? p`
					<div id="header" slot="header">
						<a href=${this._routerPath}> &larr; Back to overview </a>
					</div>
				` : l;
};
o.styles = [
  v`
			#header {
				display: flex;
				width: 100%;
			}
			#main:not(:first-child) {
				padding-top: var(--uui-size-1);
			}
			a {
				color: var(--uui-color-text);
				background: transparent;
				border: none;
				text-decoration: underline;
				cursor: pointer;
				display: inline-block;
			}
		`
];
s([
  c()
], o.prototype, "_routes", 2);
s([
  c()
], o.prototype, "_routerPath", 2);
s([
  c()
], o.prototype, "_activePath", 2);
o = s([
  _("umb-dashboard-examine-management")
], o);
export {
  o as UmbDashboardExamineManagementElement,
  o as element
};
//# sourceMappingURL=dashboard-examine-management.element-CCvs3t6h.js.map
