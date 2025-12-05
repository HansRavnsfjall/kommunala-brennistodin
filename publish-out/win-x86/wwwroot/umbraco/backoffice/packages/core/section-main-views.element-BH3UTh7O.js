import { UmbTextStyles as V } from "@umbraco-cms/backoffice/style";
import { nothing as _, html as u, css as x, property as S, state as l, customElement as U } from "@umbraco-cms/backoffice/external/lit";
import { umbExtensionsRegistry as w } from "@umbraco-cms/backoffice/extension-registry";
import { UmbExtensionsManifestInitializer as f, createExtensionElement as g } from "@umbraco-cms/backoffice/extension-api";
import { UmbLitElement as N } from "@umbraco-cms/backoffice/lit-element";
import { pathFolderName as y } from "@umbraco-cms/backoffice/utils";
var R = Object.defineProperty, A = Object.getOwnPropertyDescriptor, P = (t) => {
  throw TypeError(t);
}, h = (t, e, a, i) => {
  for (var o = i > 1 ? void 0 : i ? A(e, a) : e, c = t.length - 1, p; c >= 0; c--)
    (p = t[c]) && (o = (i ? p(e, a, o) : p(o)) || o);
  return i && o && R(e, a, o), o;
}, D = (t, e, a) => e.has(t) || P("Cannot " + a), M = (t, e, a) => e.has(t) ? P("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, a), n = (t, e, a) => (D(t, e, "access private method"), a), s, b, v, m, d, $, E;
let r = class extends N {
  constructor() {
    super(), M(this, s), this._views = [], this._dashboards = [], this._routes = [], new f(this, w, "dashboard", null, (t) => {
      this._dashboards = t.map((e) => e.manifest), n(this, s, m).call(this);
    }), new f(this, w, "sectionView", null, (t) => {
      this._views = t.map((e) => e.manifest), n(this, s, m).call(this);
    });
  }
  render() {
    return this._routes.length > 0 ? u`
					<umb-body-layout main-no-padding>
						${n(this, s, $).call(this)} ${n(this, s, E).call(this)}
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
				` : _;
  }
};
s = /* @__PURE__ */ new WeakSet();
b = function(t) {
  const e = t.meta.label ?? t.name ?? t.alias;
  return "dashboard/" + (t.meta.pathname ? t.meta.pathname : y(e));
};
v = function(t) {
  const e = t.meta.label ?? t.name ?? t.alias;
  return "view/" + (t.meta.pathname ? t.meta.pathname : y(e));
};
m = async function() {
  const t = this._dashboards?.map((i) => ({
    path: n(this, s, b).call(this, i),
    component: () => g(i),
    setup: (o) => {
      o.manifest = i;
    }
  })), e = this._views?.map((i) => ({
    path: n(this, s, v).call(this, i),
    component: () => g(i),
    setup: (o) => {
      o.manifest = i;
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
d = function(t) {
  return t.meta?.label ? this.localize.string(t.meta.label) : t.name ?? t.alias;
};
$ = function() {
  return this._dashboards.length > 0 && this._views.length > 0 || this._dashboards.length > 1 ? u`
					<uui-tab-group slot="header" id="dashboards">
						${this._dashboards.map((t) => {
    const e = n(this, s, b).call(this, t), a = this._activePath === e || this._defaultView === e && this._activePath === "";
    return u`
								<uui-tab
									href="${this._routerPath}/${e}"
									label="${n(this, s, d).call(this, t)}"
									?active="${a}"
									>${n(this, s, d).call(this, t)}</uui-tab
								>
							`;
  })}
					</uui-tab-group>
				` : _;
};
E = function() {
  return this._views.length > 0 && this._dashboards.length > 0 || this._views.length > 1 ? u`
					<uui-tab-group slot="navigation" id="views">
						${this._views.map((t) => {
    const e = t.meta.label ? this.localize.string(t.meta.label) : t.name ?? t.alias, a = n(this, s, v).call(this, t), i = this._activePath === a || this._defaultView === a && this._activePath === "";
    return u`
								<uui-tab href="${this._routerPath}/${a}" label="${e}" ?active="${i}">
									<umb-icon slot="icon" name=${t.meta.icon}></umb-icon>
									${e}
								</uui-tab>
							`;
  })}
					</uui-tab-group>
				` : _;
};
r.styles = [
  V,
  x`
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
  S({ type: String, attribute: "section-alias" })
], r.prototype, "sectionAlias", 2);
h([
  l()
], r.prototype, "_views", 2);
h([
  l()
], r.prototype, "_dashboards", 2);
h([
  l()
], r.prototype, "_routerPath", 2);
h([
  l()
], r.prototype, "_activePath", 2);
h([
  l()
], r.prototype, "_defaultView", 2);
h([
  l()
], r.prototype, "_routes", 2);
r = h([
  U("umb-section-main-views")
], r);
const I = r;
export {
  r as UmbSectionMainViewElement,
  I as default
};
//# sourceMappingURL=section-main-views.element-BH3UTh7O.js.map
