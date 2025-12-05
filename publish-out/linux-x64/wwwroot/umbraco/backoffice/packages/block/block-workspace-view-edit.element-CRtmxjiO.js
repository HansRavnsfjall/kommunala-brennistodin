import { U as C } from "./index-jGJQ3LmE.js";
import { repeat as E, html as _, css as $, property as R, state as l, customElement as G } from "@umbraco-cms/backoffice/external/lit";
import { UmbTextStyles as M } from "@umbraco-cms/backoffice/style";
import { UmbContentTypeContainerStructureHelper as W } from "@umbraco-cms/backoffice/content-type";
import { encodeFolderName as P } from "@umbraco-cms/backoffice/router";
import { UmbLitElement as S } from "@umbraco-cms/backoffice/lit-element";
var U = Object.defineProperty, N = Object.getOwnPropertyDescriptor, k = (t) => {
  throw TypeError(t);
}, u = (t, e, s, o) => {
  for (var n = o > 1 ? void 0 : o ? N(e, s) : e, f = t.length - 1, v; f >= 0; f--)
    (v = t[f]) && (n = (o ? v(e, s, n) : v(n)) || n);
  return o && n && U(e, s, n), n;
}, g = (t, e, s) => e.has(t) || k("Cannot " + s), a = (t, e, s) => (g(t, e, "read from private field"), s ? s.call(t) : e.get(t)), m = (t, e, s) => e.has(t) ? k("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, s), w = (t, e, s, o) => (g(t, e, "write to private field"), e.set(t, s), s), b = (t, e, s) => (g(t, e, "access private method"), s), h, i, p, c, d, y;
let r = class extends S {
  constructor() {
    super(), m(this, c), m(this, h), m(this, i), m(this, p, new W(this)), this._hasRootGroups = !1, this._routes = [], this._activePath = "", a(this, p).setIsRoot(!0), a(this, p).setContainerChildType("Tab"), this.observe(
      a(this, p).mergedContainers,
      (t) => {
        this._tabs = t, b(this, c, y).call(this);
      },
      null
    ), this.consumeContext(C, (t) => {
      w(this, i, t), b(this, c, d).call(this);
    });
  }
  set manifest(t) {
    w(this, h, (t?.meta).blockElementManagerName ?? "content"), b(this, c, d).call(this);
  }
  get manifest() {
  }
  render() {
    if (!(!this._routes || !this._tabs))
      return _`
			<umb-body-layout header-fit-height>
				${this._routerPath && (this._tabs.length > 1 || this._tabs.length === 1 && this._hasRootGroups) ? _` <uui-tab-group slot="header">
							${this._hasRootGroups && this._tabs.length > 0 ? _`
										<uui-tab
											label="Content"
											.active=${this._routerPath + "/" === this._activePath}
											href=${this._routerPath + "/"}>
											<umb-localize key="general_content">Content</umb-localize>
										</uui-tab>
									` : ""}
							${E(
        this._tabs,
        (t) => t.name,
        (t) => {
          const e = this._routerPath + "/tab/" + P(t.name || "");
          return _`<uui-tab
										label=${this.localize.string(t.name ?? "#general_unknown")}
										.active=${e === this._activePath}
										href=${e}>
										${this.localize.string(t.name)}
									</uui-tab>`;
        }
      )}
						</uui-tab-group>` : ""}

				<umb-router-slot
					.routes=${this._routes}
					@init=${(t) => {
        this._routerPath = t.target.absoluteRouterPath;
      }}
					@change=${(t) => {
        this._activePath = t.target.absoluteActiveViewPath || "";
      }}>
				</umb-router-slot>
			</umb-body-layout>
		`;
  }
};
h = /* @__PURE__ */ new WeakMap();
i = /* @__PURE__ */ new WeakMap();
p = /* @__PURE__ */ new WeakMap();
c = /* @__PURE__ */ new WeakSet();
d = async function() {
  if (!a(this, i) || !a(this, h)) return;
  const t = a(this, i)[a(this, h)];
  a(this, p).setStructureManager(t.structure), this.observe(
    a(this, i).variantId,
    (e) => {
      e && t.setup(this, e);
    },
    "observeVariantId"
  ), this.observe(
    await a(this, i)[a(this, h)].structure.hasRootContainers("Group"),
    (e) => {
      this._hasRootGroups = e, b(this, c, y).call(this);
    },
    "observeGroups"
  );
};
y = function() {
  if (!this._tabs || !a(this, i)) return;
  const t = [];
  this._tabs.length > 0 && this._tabs?.forEach((e) => {
    const s = e.name ?? "";
    t.push({
      path: `tab/${P(s)}`,
      component: () => import("./block-workspace-view-edit-tab.element-BR3FSxY3.js"),
      setup: (o) => {
        o.managerName = a(this, h), o.containerId = e.id;
      }
    });
  }), this._hasRootGroups && t.push({
    path: "",
    component: () => import("./block-workspace-view-edit-tab.element-BR3FSxY3.js"),
    setup: (e) => {
      e.managerName = a(this, h), e.containerId = null;
    }
  }), t.length !== 0 && (this._hasRootGroups || t.push({
    path: "",
    pathMatch: "full",
    redirectTo: t[0]?.path
  }), t.push({
    path: "**",
    component: async () => (await import("@umbraco-cms/backoffice/router")).UmbRouteNotFoundElement
  })), this._routes = t;
};
r.styles = [
  M,
  $`
			:host {
				display: block;
				height: 100%;
				--uui-tab-background: var(--uui-color-surface);
			}
		`
];
u([
  R({ attribute: !1 })
], r.prototype, "manifest", 1);
u([
  l()
], r.prototype, "_hasRootGroups", 2);
u([
  l()
], r.prototype, "_routes", 2);
u([
  l()
], r.prototype, "_tabs", 2);
u([
  l()
], r.prototype, "_routerPath", 2);
u([
  l()
], r.prototype, "_activePath", 2);
r = u([
  G("umb-block-workspace-view-edit")
], r);
const I = r;
export {
  r as UmbBlockWorkspaceViewEditElement,
  I as default
};
//# sourceMappingURL=block-workspace-view-edit.element-CRtmxjiO.js.map
