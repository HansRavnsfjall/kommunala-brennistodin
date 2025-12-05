import { css as R, property as D, state as n, customElement as U, repeat as W, html as l, nothing as S } from "@umbraco-cms/backoffice/external/lit";
import { encodeFolderName as z } from "@umbraco-cms/backoffice/router";
import { UmbContentTypePropertyStructureHelper as K, UmbContentTypeContainerStructureHelper as F, UMB_PROPERTY_STRUCTURE_WORKSPACE_CONTEXT as A } from "@umbraco-cms/backoffice/content-type";
import { UmbLitElement as k } from "@umbraco-cms/backoffice/lit-element";
import { UmbTextStyles as V } from "@umbraco-cms/backoffice/style";
import { UMB_VIEW_CONTEXT as Y, UmbViewController as J } from "@umbraco-cms/backoffice/view";
import { U as Q } from "./content-workspace.context-token-BMs4lY7q.js";
var Z = Object.defineProperty, j = Object.getOwnPropertyDescriptor, B = (t) => {
  throw TypeError(t);
}, T = (t, e, r, s) => {
  for (var o = s > 1 ? void 0 : s ? j(e, r) : e, i = t.length - 1, h; i >= 0; i--)
    (h = t[i]) && (o = (s ? h(e, r, o) : h(o)) || o);
  return s && o && Z(e, r, o), o;
}, tt = (t, e, r) => e.has(t) || B("Cannot " + r), $ = (t, e, r) => (tt(t, e, "read from private field"), r ? r.call(t) : e.get(t)), et = (t, e, r) => e.has(t) ? B("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), b;
let m = class extends k {
  constructor() {
    super(), et(this, b, new K(this)), this._properties = [], this.consumeContext(Q, (t) => {
      $(this, b).setStructureManager(
        // Assuming its the same content model type that we are working with here... [NL]
        t?.structure
      ), this.observe(
        $(this, b).propertyAliases,
        (e) => {
          this._properties = e;
        },
        "observePropertyStructure"
      );
    });
  }
  get containerId() {
    return $(this, b).getContainerId();
  }
  set containerId(t) {
    $(this, b).setContainerId(t);
  }
  render() {
    return W(
      this._properties,
      (t) => t,
      (t) => l`<umb-content-workspace-property class="property" alias=${t}></umb-content-workspace-property>`
    );
  }
};
b = /* @__PURE__ */ new WeakMap();
m.styles = [
  V,
  R`
			.property {
				border-bottom: 1px solid var(--uui-color-divider);
			}
			.property:last-child {
				border-bottom: 0;
			}
		`
];
T([
  D({ type: String, attribute: "container-id", reflect: !1 })
], m.prototype, "containerId", 1);
T([
  n()
], m.prototype, "_properties", 2);
T([
  n()
], m.prototype, "_visibleProperties", 2);
m = T([
  U("umb-content-workspace-view-edit-properties")
], m);
var rt = Object.defineProperty, st = Object.getOwnPropertyDescriptor, L = (t) => {
  throw TypeError(t);
}, P = (t, e, r, s) => {
  for (var o = s > 1 ? void 0 : s ? st(e, r) : e, i = t.length - 1, h; i >= 0; i--)
    (h = t[i]) && (o = (s ? h(e, r, o) : h(o)) || o);
  return s && o && rt(e, r, o), o;
}, ot = (t, e, r) => e.has(t) || L("Cannot " + r), E = (t, e, r) => (ot(t, e, "read from private field"), r ? r.call(t) : e.get(t)), it = (t, e, r) => e.has(t) ? L("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), f;
let _ = class extends k {
  constructor() {
    super(), it(this, f, new F(this)), this._groups = [], this._hasProperties = !1, this.consumeContext(A, (t) => {
      E(this, f).setStructureManager(
        // Assuming its the same content model type that we are working with here... [NL]
        t?.structure
      );
    }), this.observe(E(this, f).childContainers, (t) => {
      this._groups = t;
    }), this.observe(E(this, f).hasProperties, (t) => {
      this._hasProperties = t;
    });
  }
  get containerId() {
    return this._containerId;
  }
  set containerId(t) {
    this._containerId = t, E(this, f).setContainerId(t);
  }
  render() {
    return l`
			${this._hasProperties ? l`
						<uui-box>
							<umb-content-workspace-view-edit-properties
								data-mark="property-group:root"
								.containerId=${this._containerId}></umb-content-workspace-view-edit-properties>
						</uui-box>
					` : ""}
			${W(
      this._groups,
      (t) => t.key,
      (t) => l`<uui-box .headline=${this.localize.string(t.name) ?? ""}>
						<umb-content-workspace-view-edit-properties
							data-mark="property-group:${t.name}"
							.containerId=${t.ids[0]}></umb-content-workspace-view-edit-properties>
					</uui-box>`
    )}
		`;
  }
};
f = /* @__PURE__ */ new WeakMap();
_.styles = [
  V,
  R`
			uui-box {
				--uui-box-default-padding: 0 var(--uui-size-space-5);
			}
			uui-box:not(:first-child) {
				margin-top: var(--uui-size-layout-1);
			}
		`
];
P([
  D({ type: String })
], _.prototype, "containerId", 1);
P([
  n()
], _.prototype, "_containerId", 2);
P([
  n()
], _.prototype, "_groups", 2);
P([
  n()
], _.prototype, "_hasProperties", 2);
_ = P([
  U("umb-content-workspace-view-edit-tab")
], _);
const at = _, N = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get UmbContentWorkspaceViewEditTabElement() {
    return _;
  },
  default: at
}, Symbol.toStringTag, { value: "Module" }));
var nt = Object.defineProperty, ht = Object.getOwnPropertyDescriptor, X = (t) => {
  throw TypeError(t);
}, d = (t, e, r, s) => {
  for (var o = s > 1 ? void 0 : s ? ht(e, r) : e, i = t.length - 1, h; i >= 0; i--)
    (h = t[i]) && (o = (s ? h(e, r, o) : h(o)) || o);
  return s && o && nt(e, r, o), o;
}, G = (t, e, r) => e.has(t) || X("Cannot " + r), a = (t, e, r) => (G(t, e, "read from private field"), r ? r.call(t) : e.get(t)), y = (t, e, r) => e.has(t) ? X("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), O = (t, e, r, s) => (G(t, e, "write to private field"), e.set(t, r), r), c = (t, e, r) => (G(t, e, "access private method"), r), g, w, v, p, q, H, x, C, M, I;
let u = class extends k {
  constructor() {
    super(), y(this, p), y(this, g), this._loaded = !1, this._hasRootGroups = !1, this._routes = [], this._activePath = "", this._hintMap = /* @__PURE__ */ new Map(), y(this, w, []), y(this, v), this._tabsStructureHelper = new F(this), y(this, C), this.consumeContext(Y, (t) => {
      O(this, g, t), a(this, w).forEach((e) => {
        e.inheritFrom(a(this, g));
      });
    }), this._tabsStructureHelper.setIsRoot(!0), this._tabsStructureHelper.setContainerChildType("Tab"), this.observe(
      this._tabsStructureHelper.childContainers,
      (t) => {
        this._tabs = t, c(this, p, H).call(this);
      },
      null
    ), this.consumeContext(A, (t) => {
      O(this, v, t?.structure), this._tabsStructureHelper.setStructureManager(t?.structure), c(this, p, q).call(this), this.observe(
        a(this, v)?.contentTypeLoaded,
        (e) => {
          this._loaded = e ?? !1;
        },
        "observeContentTypeLoaded"
      );
    });
  }
  render() {
    return !this._loaded || !this._routes || this._routes.length === 0 || !this._tabs ? l`<umb-view-loader></umb-view-loader>` : l`
			<umb-body-layout header-fit-height>
				${this._routerPath && (this._tabs.length > 1 || this._tabs.length === 1 && this._hasRootGroups) ? l` <uui-tab-group slot="header">
							${this._hasRootGroups && this._tabs.length > 0 ? c(this, p, I).call(this, null, "#general_generic") : S}
							${W(
      this._tabs,
      (t) => t.name,
      (t, e) => {
        const r = "tab/" + z(t.name || "");
        return c(this, p, I).call(this, r, t.name, e);
      }
    )}
						</uui-tab-group>` : S}

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
g = /* @__PURE__ */ new WeakMap();
w = /* @__PURE__ */ new WeakMap();
v = /* @__PURE__ */ new WeakMap();
p = /* @__PURE__ */ new WeakSet();
q = async function() {
  a(this, v) && this.observe(
    await a(this, v).hasRootContainers("Group"),
    (t) => {
      this._hasRootGroups = t, c(this, p, H).call(this);
    },
    "_observeGroups"
  );
};
H = function() {
  if (!this._tabs || !a(this, v)) return;
  const t = [];
  this._hasRootGroups && (t.push({
    path: "root",
    component: () => Promise.resolve().then(() => N),
    setup: (e) => {
      e.containerId = null, c(this, p, M).call(this, null, e);
    }
  }), c(this, p, x).call(this, null, "#general_generic")), this._tabs.length > 0 && this._tabs?.forEach((e) => {
    const r = e.name ?? "", s = `tab/${z(r)}`;
    t.push({
      path: s,
      component: () => Promise.resolve().then(() => N),
      setup: (o) => {
        o.containerId = e.ownerId ?? e.ids[0], c(this, p, M).call(this, s, o);
      }
    }), c(this, p, x).call(this, s, r);
  }), t.length !== 0 && t.push({
    ...t[0],
    unique: t[0].path,
    path: ""
  }), t.push({
    path: "**",
    component: async () => (await import("@umbraco-cms/backoffice/router")).UmbRouteNotFoundElement
  }), this._routes = t;
};
x = function(t, e) {
  if (!a(this, w).find((r) => r.viewAlias === t)) {
    const r = new J(this, t);
    a(this, w).push(r), t === null && r.hints.setPathFilter((s) => s[0].includes("tab/") === !1), r.setTitle(e), r.inheritFrom(a(this, g)), this.observe(
      r.firstHintOfVariant,
      (s) => {
        s ? this._hintMap.set(t, s) : this._hintMap.delete(t), this.requestUpdate("_hintMap");
      },
      "umbObserveState_" + t
    );
  }
};
C = /* @__PURE__ */ new WeakMap();
M = function(t, e) {
  const r = a(this, w).find((s) => s.viewAlias === t);
  if (a(this, C) !== r) {
    if (a(this, C)?.unprovide(), !r)
      throw new Error(`View context with alias ${t} not found`);
    O(this, C, r), t === null && r.setTitle(this._tabs && this._tabs?.length > 0 ? "#general_generic" : void 0), r.provideAt(e);
  }
};
I = function(t, e, r = 0) {
  const s = this._hintMap.get(t), o = this._routerPath + "/" + (t || "root"), i = o === this._activePath || !this._hasRootGroups && r === 0 && this._routerPath + "/" === this._activePath || this._hasRootGroups && r === 0 && t === null && this._routerPath + "/" === this._activePath;
  return l`<uui-tab
			label=${this.localize.string(e ?? "#general_unnamed")}
			.active=${i}
			href=${o}
			data-mark="content-tab:${t ?? "root"}"
			>${s && !i ? l`<umb-badge slot="extra" .color=${s.color ?? "default"} ?attention=${s.color === "invalid"}
						>${s.text}</umb-badge
					>` : S}</uui-tab
		>`;
};
u.styles = [
  V,
  R`
			:host {
				display: block;
				height: 100%;
				--uui-tab-background: var(--uui-color-surface);
			}
		`
];
d([
  n()
], u.prototype, "_loaded", 2);
d([
  n()
], u.prototype, "_hasRootGroups", 2);
d([
  n()
], u.prototype, "_routes", 2);
d([
  n()
], u.prototype, "_tabs", 2);
d([
  n()
], u.prototype, "_routerPath", 2);
d([
  n()
], u.prototype, "_activePath", 2);
d([
  n()
], u.prototype, "_hintMap", 2);
u = d([
  U("umb-content-workspace-view-edit")
], u);
const bt = u;
export {
  u as UmbContentWorkspaceViewEditElement,
  bt as default
};
//# sourceMappingURL=content-editor.element-_oGtUweD.js.map
