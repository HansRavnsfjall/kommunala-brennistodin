import { css as g, property as U, state as n, customElement as C, repeat as $, html as h } from "@umbraco-cms/backoffice/external/lit";
import { UmbTextStyles as E } from "@umbraco-cms/backoffice/style";
import { UmbContentTypePropertyStructureHelper as V, UmbContentTypeContainerStructureHelper as W, UMB_PROPERTY_STRUCTURE_WORKSPACE_CONTEXT as x } from "@umbraco-cms/backoffice/content-type";
import { encodeFolderName as O } from "@umbraco-cms/backoffice/router";
import { UmbLitElement as S } from "@umbraco-cms/backoffice/lit-element";
import { U as A } from "./content-workspace.context-token-BMs4lY7q.js";
var N = Object.defineProperty, z = Object.getOwnPropertyDescriptor, k = (t) => {
  throw TypeError(t);
}, y = (t, e, r, o) => {
  for (var s = o > 1 ? void 0 : o ? z(e, r) : e, a = t.length - 1, i; a >= 0; a--)
    (i = t[a]) && (s = (o ? i(e, r, s) : i(s)) || s);
  return o && s && N(e, r, s), s;
}, D = (t, e, r) => e.has(t) || k("Cannot " + r), m = (t, e, r) => (D(t, e, "read from private field"), r ? r.call(t) : e.get(t)), B = (t, e, r) => e.has(t) ? k("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), c;
let d = class extends S {
  constructor() {
    super(), B(this, c, new V(this)), this._properties = [], this.consumeContext(A, (t) => {
      m(this, c).setStructureManager(
        // Assuming its the same content model type that we are working with here... [NL]
        t?.structure
      ), this.observe(
        m(this, c).propertyAliases,
        (e) => {
          this._properties = e;
        },
        "observePropertyStructure"
      );
    });
  }
  get containerId() {
    return m(this, c).getContainerId();
  }
  set containerId(t) {
    m(this, c).setContainerId(t);
  }
  render() {
    return $(
      this._properties,
      (t) => t,
      (t) => h`<umb-content-workspace-property class="property" alias=${t}></umb-content-workspace-property>`
    );
  }
};
c = /* @__PURE__ */ new WeakMap();
d.styles = [
  E,
  g`
			.property {
				border-bottom: 1px solid var(--uui-color-divider);
			}
			.property:last-child {
				border-bottom: 0;
			}
		`
];
y([
  U({ type: String, attribute: "container-id", reflect: !1 })
], d.prototype, "containerId", 1);
y([
  n()
], d.prototype, "_properties", 2);
y([
  n()
], d.prototype, "_visibleProperties", 2);
d = y([
  C("umb-content-workspace-view-edit-properties")
], d);
var F = Object.defineProperty, K = Object.getOwnPropertyDescriptor, G = (t) => {
  throw TypeError(t);
}, b = (t, e, r, o) => {
  for (var s = o > 1 ? void 0 : o ? K(e, r) : e, a = t.length - 1, i; a >= 0; a--)
    (i = t[a]) && (s = (o ? i(e, r, s) : i(s)) || s);
  return o && s && F(e, r, s), s;
}, X = (t, e, r) => e.has(t) || G("Cannot " + r), f = (t, e, r) => (X(t, e, "read from private field"), r ? r.call(t) : e.get(t)), L = (t, e, r) => e.has(t) ? G("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), _;
let p = class extends S {
  constructor() {
    super(), L(this, _, new W(this)), this._groups = [], this._hasProperties = !1, this.consumeContext(x, (t) => {
      f(this, _).setStructureManager(
        // Assuming its the same content model type that we are working with here... [NL]
        t?.structure
      );
    }), this.observe(f(this, _).mergedContainers, (t) => {
      this._groups = t;
    }), this.observe(f(this, _).hasProperties, (t) => {
      this._hasProperties = t;
    });
  }
  get containerId() {
    return this._containerId;
  }
  set containerId(t) {
    this._containerId = t, f(this, _).setContainerId(t);
  }
  render() {
    return h`
			${this._hasProperties ? h`
						<uui-box>
							<umb-content-workspace-view-edit-properties
								data-mark="property-group:root"
								.containerId=${this._containerId}></umb-content-workspace-view-edit-properties>
						</uui-box>
					` : ""}
			${$(
      this._groups,
      (t) => t.id,
      (t) => h`<uui-box .headline=${this.localize.string(t.name) ?? ""}>
						<umb-content-workspace-view-edit-properties
							data-mark="property-group:${t.name}"
							.containerId=${t.id}></umb-content-workspace-view-edit-properties>
					</uui-box>`
    )}
		`;
  }
};
_ = /* @__PURE__ */ new WeakMap();
p.styles = [
  E,
  g`
			uui-box {
				--uui-box-default-padding: 0 var(--uui-size-space-5);
			}
			uui-box:not(:first-child) {
				margin-top: var(--uui-size-layout-1);
			}
		`
];
b([
  U({ type: String })
], p.prototype, "containerId", 1);
b([
  n()
], p.prototype, "_containerId", 2);
b([
  n()
], p.prototype, "_groups", 2);
b([
  n()
], p.prototype, "_hasProperties", 2);
p = b([
  C("umb-content-workspace-view-edit-tab")
], p);
const Y = p, R = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get UmbContentWorkspaceViewEditTabElement() {
    return p;
  },
  default: Y
}, Symbol.toStringTag, { value: "Module" }));
var q = Object.defineProperty, J = Object.getOwnPropertyDescriptor, M = (t) => {
  throw TypeError(t);
}, v = (t, e, r, o) => {
  for (var s = o > 1 ? void 0 : o ? J(e, r) : e, a = t.length - 1, i; a >= 0; a--)
    (i = t[a]) && (s = (o ? i(e, r, s) : i(s)) || s);
  return o && s && q(e, r, s), s;
}, T = (t, e, r) => e.has(t) || M("Cannot " + r), w = (t, e, r) => (T(t, e, "read from private field"), r ? r.call(t) : e.get(t)), I = (t, e, r) => e.has(t) ? M("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), Q = (t, e, r, o) => (T(t, e, "write to private field"), e.set(t, r), r), Z = (t, e, r) => (T(t, e, "access private method"), r), l, P, H;
let u = class extends S {
  constructor() {
    super(), I(this, P), this._hasRootGroups = !1, this._routes = [], this._activePath = "", I(this, l), this._tabsStructureHelper = new W(this), this._tabsStructureHelper.setIsRoot(!0), this._tabsStructureHelper.setContainerChildType("Tab"), this.observe(
      this._tabsStructureHelper.mergedContainers,
      (t) => {
        this._tabs = t, this._createRoutes();
      },
      null
    ), this.consumeContext(x, (t) => {
      Q(this, l, t?.structure), this._tabsStructureHelper.setStructureManager(t?.structure), Z(this, P, H).call(this);
    });
  }
  _createRoutes() {
    if (!this._tabs || !w(this, l)) return;
    const t = [];
    this._hasRootGroups && t.push({
      path: "root",
      component: () => Promise.resolve().then(() => R),
      setup: (e) => {
        e.containerId = null;
      }
    }), this._tabs.length > 0 && this._tabs?.forEach((e) => {
      const r = e.name ?? "";
      t.push({
        path: `tab/${O(r)}`,
        component: () => Promise.resolve().then(() => R),
        setup: (o) => {
          o.containerId = e.id;
        }
      });
    }), t.length !== 0 && (t.push({
      path: "",
      pathMatch: "full",
      redirectTo: t[0].path
    }), t.push({
      path: "**",
      component: async () => (await import("@umbraco-cms/backoffice/router")).UmbRouteNotFoundElement
    })), this._routes = t;
  }
  render() {
    if (!(!this._routes || !this._tabs))
      return h`
			<umb-body-layout header-fit-height>
				${this._routerPath && (this._tabs.length > 1 || this._tabs.length === 1 && this._hasRootGroups) ? h` <uui-tab-group slot="header">
							${this._hasRootGroups && this._tabs.length > 0 ? h`
										<uui-tab
											.label=${this.localize.term("general_generic")}
											.active=${this._routerPath + "/root" === this._activePath}
											.href=${this._routerPath + "/root"}></uui-tab>
									` : ""}
							${$(
        this._tabs,
        (t) => t.name,
        (t) => {
          const e = this._routerPath + "/tab/" + O(t.name || "");
          return h`<uui-tab
										.label=${this.localize.string(t.name ?? "#general_unnamed")}
										.active=${e === this._activePath}
										.href=${e}></uui-tab>`;
        }
      )}
						</uui-tab-group>` : ""}

				<umb-router-slot
					inherit-addendum
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
l = /* @__PURE__ */ new WeakMap();
P = /* @__PURE__ */ new WeakSet();
H = async function() {
  w(this, l) && this.observe(
    await w(this, l).hasRootContainers("Group"),
    (t) => {
      this._hasRootGroups = t, this._createRoutes();
    },
    "_observeGroups"
  );
};
u.styles = [
  E,
  g`
			:host {
				display: block;
				height: 100%;
				--uui-tab-background: var(--uui-color-surface);
			}
		`
];
v([
  n()
], u.prototype, "_hasRootGroups", 2);
v([
  n()
], u.prototype, "_routes", 2);
v([
  n()
], u.prototype, "_tabs", 2);
v([
  n()
], u.prototype, "_routerPath", 2);
v([
  n()
], u.prototype, "_activePath", 2);
u = v([
  C("umb-content-workspace-view-edit")
], u);
const at = u;
export {
  u as UmbContentWorkspaceViewEditElement,
  at as default
};
//# sourceMappingURL=content-editor.element-B8GhrxyO.js.map
