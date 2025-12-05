import { UmbTextStyles as E } from "@umbraco-cms/backoffice/style";
import { nothing as d, html as u, css as V, property as x, state as l, customElement as S } from "@umbraco-cms/backoffice/external/lit";
import { umbExtensionsRegistry as v } from "@umbraco-cms/backoffice/extension-registry";
import { UmbExtensionsManifestInitializer as w, createExtensionElement as f } from "@umbraco-cms/backoffice/extension-api";
import { UmbLitElement as U } from "@umbraco-cms/backoffice/lit-element";
import { pathFolderName as g } from "@umbraco-cms/backoffice/utils";
var R = Object.defineProperty, A = Object.getOwnPropertyDescriptor, y = (t) => {
  throw TypeError(t);
}, h = (t, e, a, i) => {
  for (var s = i > 1 ? void 0 : i ? A(e, a) : e, c = t.length - 1, p; c >= 0; c--)
    (p = t[c]) && (s = (i ? p(e, a, s) : p(s)) || s);
  return i && s && R(e, a, s), s;
}, M = (t, e, a) => e.has(t) || y("Cannot " + a), N = (t, e, a) => e.has(t) ? y("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, a), n = (t, e, a) => (M(t, e, "access private method"), a), r, _, b, m, P, $;
let o = class extends U {
  constructor() {
    super(), N(this, r), this._views = [], this._dashboards = [], this._routes = [], new w(this, v, "dashboard", null, (t) => {
      this._dashboards = t.map((e) => e.manifest), n(this, r, m).call(this);
    }), new w(this, v, "sectionView", null, (t) => {
      this._views = t.map((e) => e.manifest), n(this, r, m).call(this);
    });
  }
  render() {
    return this._routes.length > 0 ? u`
					<umb-body-layout main-no-padding>
						${n(this, r, P).call(this)} ${n(this, r, $).call(this)}
						<umb-router-slot
							.routes=${this._routes}
							@init=${(t) => {
      this._routerPath = t.target.absoluteRouterPath;
    }}
							@change=${(t) => {
      this._activePath = t.target.localActiveViewPath;
    }}>
						</umb-router-slot>
					</umb-body-layout>
				` : d;
  }
};
r = /* @__PURE__ */ new WeakSet();
_ = function(t) {
  const e = t.meta.label ?? t.name ?? t.alias;
  return "dashboard/" + (t.meta.pathname ? t.meta.pathname : g(e));
};
b = function(t) {
  const e = t.meta.label ?? t.name ?? t.alias;
  return "view/" + (t.meta.pathname ? t.meta.pathname : g(e));
};
m = async function() {
  const t = this._dashboards?.map((i) => ({
    path: n(this, r, _).call(this, i),
    component: () => f(i),
    setup: (s) => {
      s.manifest = i;
    }
  })), e = this._views?.map((i) => ({
    path: n(this, r, b).call(this, i),
    component: () => f(i),
    setup: (s) => {
      s.manifest = i;
    }
  })), a = [...t, ...e];
  a.length > 0 && (this._defaultView = a[0].path, a.push({
    ...a[0],
    path: ""
  }), a.push({
    path: "**",
    component: async () => (await import("@umbraco-cms/backoffice/router")).UmbRouteNotFoundElement
  })), this._routes = a;
};
P = function() {
  return this._dashboards.length > 0 && this._views.length > 0 || this._dashboards.length > 1 ? u`
					<uui-tab-group slot="header" id="dashboards">
						${this._dashboards.map((t) => {
    const e = n(this, r, _).call(this, t), a = this._activePath === e || this._defaultView === e && this._activePath === "";
    return u`
								<uui-tab
									href="${this._routerPath}/${e}"
									label="${t.meta.label ? this.localize.string(t.meta.label) : t.name ?? t.alias}"
									?active="${a}"></uui-tab>
							`;
  })}
					</uui-tab-group>
				` : d;
};
$ = function() {
  return this._views.length > 0 && this._dashboards.length > 0 || this._views.length > 1 ? u`
					<uui-tab-group slot="navigation" id="views">
						${this._views.map((t) => {
    const e = t.meta.label ? this.localize.string(t.meta.label) : t.name ?? t.alias, a = n(this, r, b).call(this, t), i = this._activePath === a || this._defaultView === a && this._activePath === "";
    return u`
								<uui-tab href="${this._routerPath}/${a}" label="${e}" ?active="${i}">
									<umb-icon slot="icon" name=${t.meta.icon}></umb-icon>
									${e}
								</uui-tab>
							`;
  })}
					</uui-tab-group>
				` : d;
};
o.styles = [
  E,
  V`
			:host {
				position: relative;
				display: flex;
				flex-direction: column;
				height: 100%;
			}

			#views {
				--uui-tab-divider: var(--uui-color-divider-standalone);
			}

			#views uui-tab:first-child {
				border-left: 1px solid var(--uui-color-divider-standalone);
			}
		`
];
h([
  x({ type: String, attribute: "section-alias" })
], o.prototype, "sectionAlias", 2);
h([
  l()
], o.prototype, "_views", 2);
h([
  l()
], o.prototype, "_dashboards", 2);
h([
  l()
], o.prototype, "_routerPath", 2);
h([
  l()
], o.prototype, "_activePath", 2);
h([
  l()
], o.prototype, "_defaultView", 2);
h([
  l()
], o.prototype, "_routes", 2);
o = h([
  S("umb-section-main-views")
], o);
const W = o;
export {
  o as UmbSectionMainViewElement,
  W as default
};
//# sourceMappingURL=section-main-views.element-C4OUdIT5.js.map
