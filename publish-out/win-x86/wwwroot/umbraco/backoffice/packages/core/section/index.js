import { U as se } from "../modal-token-wEQqBBXI.js";
import { U as ne } from "../path-pattern.class-Dg95YGLM.js";
import { U as oe, a as re } from "../manifests-DF6A9HCG.js";
import { b as mt, c as dt } from "../manifests-DF6A9HCG.js";
import { UmbPickerInputContext as ae } from "@umbraco-cms/backoffice/picker-input";
import { html as h, css as g, property as v, state as d, customElement as w, nothing as O, repeat as le, ref as he } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as C } from "@umbraco-cms/backoffice/lit-element";
import { splitStringToArray as pe, aliasToPath as ue } from "@umbraco-cms/backoffice/utils";
import { UmbFormControlMixin as ce } from "@umbraco-cms/backoffice/validation";
import { UUIRefElement as q } from "@umbraco-cms/backoffice/external/uui";
import { UmbElementMixin as me } from "@umbraco-cms/backoffice/element-api";
import { UmbContextBase as W } from "@umbraco-cms/backoffice/class-api";
import { UmbExtensionsApiInitializer as de, UmbExtensionsElementInitializer as be, UmbExtensionsManifestInitializer as _e, createExtensionApi as fe, createExtensionElement as ve } from "@umbraco-cms/backoffice/extension-api";
import { umbExtensionsRegistry as A } from "@umbraco-cms/backoffice/extension-registry";
import { UmbStringState as y, UmbBooleanState as xe, observeMultiple as ye } from "@umbraco-cms/backoffice/observable-api";
import { UmbViewContext as ge } from "@umbraco-cms/backoffice/view";
import { UmbTextStyles as D } from "@umbraco-cms/backoffice/style";
import { UMB_MARK_ATTRIBUTE_NAME as k } from "@umbraco-cms/backoffice/const";
import { UmbContextToken as we } from "@umbraco-cms/backoffice/context-api";
import { UmbContextProxyController as Se } from "@umbraco-cms/backoffice/context-proxy";
const Oe = new se(
  "Umb.Modal.SectionPicker",
  {
    modal: {
      type: "sidebar",
      size: "small"
    }
  }
), pt = new ne("section/:sectionName");
class Ce extends ae {
  constructor(t) {
    super(t, oe, Oe);
  }
}
var Ee = Object.defineProperty, Ue = Object.getOwnPropertyDescriptor, L = (e) => {
  throw TypeError(e);
}, x = (e, t, i, n) => {
  for (var s = n > 1 ? void 0 : n ? Ue(t, i) : t, o = e.length - 1, r; o >= 0; o--)
    (r = e[o]) && (s = (n ? r(t, i, s) : r(s)) || s);
  return n && s && Ee(t, i, s), s;
}, Me = (e, t, i) => t.has(e) || L("Cannot " + i), l = (e, t, i) => (Me(e, t, "read from private field"), i ? i.call(e) : t.get(e)), Pe = (e, t, i) => t.has(e) ? L("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), a;
let c = class extends ce(
  C
) {
  constructor() {
    super(), this.minMessage = "This field need more items", this.maxMessage = "This field exceeds the allowed amount of items", Pe(this, a, new Ce(this)), this.addValidator(
      "rangeUnderflow",
      () => this.minMessage,
      () => !!this.min && l(this, a).getSelection().length < this.min
    ), this.addValidator(
      "rangeOverflow",
      () => this.maxMessage,
      () => !!this.max && l(this, a).getSelection().length > this.max
    ), this.observe(l(this, a).selection, (e) => this.value = e.join(",")), this.observe(l(this, a).selectedItems, (e) => this._items = e);
  }
  set min(e) {
    l(this, a).min = e;
  }
  get min() {
    return l(this, a).min;
  }
  set max(e) {
    l(this, a).max = e;
  }
  get max() {
    return l(this, a).max;
  }
  set selection(e) {
    l(this, a).setSelection(e);
  }
  get selection() {
    return l(this, a).getSelection();
  }
  set value(e) {
    this.selection = pe(e);
  }
  get value() {
    return this.selection.length > 0 ? this.selection.join(",") : void 0;
  }
  getFormElement() {
  }
  render() {
    return h`
			<uui-ref-list>${this._items?.map((e) => this._renderItem(e))}</uui-ref-list>
			<uui-button
				id="btn-add"
				look="placeholder"
				@click=${() => l(this, a).openPicker()}
				label=${this.localize.term("general_choose")}></uui-button>
		`;
  }
  _renderItem(e) {
    if (e.unique)
      return h` <umb-ref-section .item=${e}>
			<uui-action-bar slot="actions">
				<uui-button @click=${() => l(this, a).requestRemoveItem(e.unique)} label="Remove ${e.name}"
					>Remove</uui-button
				>
			</uui-action-bar>
		</umb-ref-section>`;
  }
};
a = /* @__PURE__ */ new WeakMap();
c.styles = [
  g`
			#btn-add {
				width: 100%;
			}
		`
];
x([
  v({ type: Number })
], c.prototype, "min", 1);
x([
  v({ type: String, attribute: "min-message" })
], c.prototype, "minMessage", 2);
x([
  v({ type: Number })
], c.prototype, "max", 1);
x([
  v({ type: String, attribute: "min-message" })
], c.prototype, "maxMessage", 2);
x([
  v({ type: String })
], c.prototype, "value", 1);
x([
  d()
], c.prototype, "_items", 2);
c = x([
  w("umb-input-section")
], c);
var $e = Object.defineProperty, Ie = Object.getOwnPropertyDescriptor, G = (e, t, i, n) => {
  for (var s = n > 1 ? void 0 : n ? Ie(t, i) : t, o = e.length - 1, r; o >= 0; o--)
    (r = e[o]) && (s = (n ? r(t, i, s) : r(s)) || s);
  return n && s && $e(t, i, s), s;
};
let M = class extends me(q) {
  render() {
    return h`
			<div id="info">
				<div id="name">${this.item?.meta.label ? this.localize.string(this.item.meta.label) : this.item?.name}</div>
			</div>
			<slot></slot>
			<slot name="actions" id="actions-container"></slot>
		`;
  }
};
M.styles = [
  ...q.styles,
  g`
			#name {
				font-weight: 700;
			}
		`
];
G([
  v({ type: Object, attribute: !1 })
], M.prototype, "item", 2);
M = G([
  w("umb-ref-section")
], M);
class Te extends W {
  constructor(t) {
    super(t, re), this.#t = new y(void 0), this.#e = new y(void 0), this.#i = new y(void 0), this.alias = this.#t.asObservable(), this.pathname = this.#e.asObservable(), this.label = this.#i.asObservable(), this.#n = new ge(this, null), this.#o();
  }
  #t;
  #e;
  #i;
  #n;
  #s;
  setManifest(t) {
    this.#t.setValue(t?.alias), this.#e.setValue(t?.meta?.pathname);
    const i = t ? t.meta?.label || t.name : void 0;
    this.#i.setValue(i), this.#n.setTitle(i);
  }
  getPathname() {
    return this.#e.getValue();
  }
  #o() {
    this.#s && this.#s.destroy(), this.#s = new de(
      this,
      A,
      "sectionContext",
      [],
      void 0
    );
  }
}
class Ae extends Te {
  constructor(t) {
    super(t);
  }
}
var De = Object.defineProperty, Ne = Object.getOwnPropertyDescriptor, H = (e) => {
  throw TypeError(e);
}, E = (e, t, i, n) => {
  for (var s = n > 1 ? void 0 : n ? Ne(t, i) : t, o = e.length - 1, r; o >= 0; o--)
    (r = e[o]) && (s = (n ? r(t, i, s) : r(s)) || s);
  return n && s && De(t, i, s), s;
}, j = (e, t, i) => t.has(e) || H("Cannot " + i), Re = (e, t, i) => (j(e, t, "read from private field"), i ? i.call(e) : t.get(e)), z = (e, t, i) => t.has(e) ? H("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), P = (e, t, i) => (j(e, t, "access private method"), i), $, S, F, K, X;
let _ = class extends C {
  constructor() {
    super(), z(this, S), this._splitPanelPosition = "300px", z(this, $, new Ae(this)), new be(this, A, "sectionSidebarApp", null, (t) => {
      const i = this._sidebarApps;
      t.forEach((n) => {
        n.component?.setAttribute(k, "section-sidebar:" + n.manifest.alias);
      }), this._sidebarApps = t, this.requestUpdate("_sidebarApps", i);
    }), P(this, S, F).call(this);
    const e = localStorage.getItem("umb-split-panel-position");
    e && (this._splitPanelPosition = e);
  }
  get manifest() {
    return this._manifest;
  }
  set manifest(e) {
    const t = this._manifest;
    t !== e && (this._manifest = e, Re(this, $).setManifest(e), this.requestUpdate("manifest", t));
  }
  render() {
    return h`
			<umb-split-panel
				lock="start"
				snap="300px"
				@position-changed=${P(this, S, X)}
				.position=${this._splitPanelPosition}>
				${this._sidebarApps && this._sidebarApps.length > 0 ? h`
							<!-- TODO: these extensions should be combined into one type: sectionSidebarApp with a "subtype" -->
							<umb-section-sidebar slot="start">
								${le(
      this._sidebarApps,
      (e) => e.alias,
      (e) => e.component
    )}
							</umb-section-sidebar>
						` : O}
				<umb-section-main slot="end">
					${this._routes && this._routes.length > 0 ? h`<umb-router-slot id="router-slot" .routes=${this._routes}></umb-router-slot>` : O}
					<slot></slot>
				</umb-section-main>
			</umb-split-panel>
		`;
  }
};
$ = /* @__PURE__ */ new WeakMap();
S = /* @__PURE__ */ new WeakSet();
F = function() {
  new _e(
    this,
    A,
    "sectionRoute",
    null,
    async (e) => {
      const t = e.filter((s) => s.manifest.element);
      if (e.filter((s) => !s.manifest.element).length > 0)
        throw new Error("sectionRoute extensions must have an element");
      const n = await Promise.all(
        t.map(async (s) => {
          const o = await fe(this, s.manifest);
          return o && (o.manifest = s.manifest), {
            path: o?.getPath?.() || s.manifest.meta?.path || ue(s.manifest.alias),
            component: () => ve(s.manifest),
            setup: (r, ie) => {
              o?.setup?.(r, ie);
            }
          };
        })
      );
      P(this, S, K).call(this, n);
    },
    "umbRouteExtensionApisInitializer"
  );
};
K = function(e) {
  this._routes = [
    ...e,
    {
      path: "**",
      component: () => import("../section-main-views.element-BH3UTh7O.js"),
      setup: (t) => {
        t.sectionAlias = this.manifest?.alias;
      }
    }
  ];
};
X = function(e) {
  const t = e.detail.position;
  localStorage.setItem("umb-split-panel-position", t.toString());
};
_.styles = [
  D,
  g`
			:host {
				flex: 1 1 auto;
				height: 100%;
				display: flex;
			}

			umb-split-panel {
				--umb-split-panel-start-min-width: 200px;
				--umb-split-panel-start-max-width: 400px;
				--umb-split-panel-end-min-width: 600px;
				--umb-split-panel-slot-overflow: visible;
			}
			@media only screen and (min-width: 800px) {
				umb-split-panel {
					--umb-split-panel-initial-position: 300px;
				}
			}
		`
];
E([
  v({ type: Object, attribute: !1 })
], _.prototype, "manifest", 1);
E([
  d()
], _.prototype, "_routes", 2);
E([
  d()
], _.prototype, "_sidebarApps", 2);
E([
  d()
], _.prototype, "_splitPanelPosition", 2);
_ = E([
  w("umb-section-default")
], _);
var Ve = Object.getOwnPropertyDescriptor, ze = (e, t, i, n) => {
  for (var s = n > 1 ? void 0 : n ? Ve(t, i) : t, o = e.length - 1, r; o >= 0; o--)
    (r = e[o]) && (s = r(s) || s);
  return s;
};
let I = class extends C {
  render() {
    return h`
			<main>
				<slot></slot>
			</main>
		`;
  }
};
I.styles = [
  D,
  g`
			:host {
				flex: 1 1 auto;
				height: 100%;
				min-width: 0;
			}

			main {
				position: relative;
				display: flex;
				flex-direction: column;
				height: 100%;
			}
		`
];
I = ze([
  w("umb-section-main")
], I);
class Be extends W {
  constructor(t) {
    super(t, N), this.#t = new xe(!1), this.contextMenuIsOpen = this.#t.asObservable(), this.#e = new y(void 0), this.entityType = this.#e.asObservable(), this.#i = new y(void 0), this.unique = this.#i.asObservable(), this.#n = new y(void 0), this.headline = this.#n.asObservable(), this.#s = void 0;
  }
  #t;
  #e;
  #i;
  #n;
  #s;
  toggleContextMenu(t, i) {
    this.openContextMenu(t, i);
  }
  // TODO: we wont get notified about tree item name changes because we don't have a subscription
  // we need to figure out how we best can handle this when we only know the entity and unique id
  openContextMenu(t, i) {
    this.#e.setValue(i.entityType), this.#i.setValue(i.unique), this.#n.setValue(i.headline), this.#t.setValue(!0), this.#s = t;
  }
  closeContextMenu() {
    this.#t.setValue(!1), this.#e.setValue(void 0), this.#i.setValue(void 0), this.#n.setValue(void 0), this.#s = void 0;
  }
  getContextElement() {
    return this.#s;
  }
}
const N = new we("UmbSectionSidebarContext");
var qe = Object.getOwnPropertyDescriptor, We = (e, t, i, n) => {
  for (var s = n > 1 ? void 0 : n ? qe(t, i) : t, o = e.length - 1, r; o >= 0; o--)
    (r = e[o]) && (s = r(s) || s);
  return s;
};
let T = class extends C {
  constructor() {
    super(), new Be(this);
  }
  firstUpdated(e) {
    super.firstUpdated(e), this.setAttribute(k, "section-sidebar");
  }
  render() {
    return h`
			<umb-section-sidebar-context-menu>
				<uui-scroll-container id="scroll-container">
					<slot></slot>
				</uui-scroll-container>
			</umb-section-sidebar-context-menu>
		`;
  }
};
T.styles = [
  g`
			:host {
				flex: 0 0 var(--umb-section-sidebar-width);
				background-color: var(--uui-color-surface);
				height: 100%;
				border-right: 1px solid var(--uui-color-border);
				font-weight: 500;
				display: flex;
				flex-direction: column;
				z-index: 10;
				position: relative;
				box-sizing: border-box;
			}

			#scroll-container {
				height: 100%;
				overflow-y: auto;
			}
		`
];
T = We([
  w("umb-section-sidebar")
], T);
var ke = Object.defineProperty, Le = Object.getOwnPropertyDescriptor, Y = (e) => {
  throw TypeError(e);
}, U = (e, t, i, n) => {
  for (var s = n > 1 ? void 0 : n ? Le(t, i) : t, o = e.length - 1, r; o >= 0; o--)
    (r = e[o]) && (s = (n ? r(t, i, s) : r(s)) || s);
  return n && s && ke(t, i, s), s;
}, R = (e, t, i) => t.has(e) || Y("Cannot " + i), m = (e, t, i) => (R(e, t, "read from private field"), t.get(e)), B = (e, t, i) => t.has(e) ? Y("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), Ge = (e, t, i, n) => (R(e, t, "write to private field"), t.set(e, i), i), b = (e, t, i) => (R(e, t, "access private method"), i), p, u, J, V, Q, Z, ee, te;
let f = class extends C {
  constructor() {
    super(), B(this, u), B(this, p), this._isOpen = !1, this.consumeContext(N, (e) => {
      Ge(this, p, e), b(this, u, J).call(this), m(this, p) ? (this.observe(m(this, p).contextMenuIsOpen, (t) => this._isOpen = t, "_observeContextMenuIsOpen"), this.observe(m(this, p).headline, (t) => this._headline = t, "_observeHeadline")) : (this.removeUmbControllerByAlias("_observeContextMenuIsOpen"), this.removeUmbControllerByAlias("_observeHeadline"));
    });
  }
  render() {
    return h`
			${b(this, u, ee).call(this)}
			<div id="relative-wrapper">
				<slot></slot>
				${b(this, u, te).call(this)}
			</div>
		`;
  }
};
p = /* @__PURE__ */ new WeakMap();
u = /* @__PURE__ */ new WeakSet();
J = function() {
  if (!m(this, p)) {
    this.removeUmbControllerByAlias("_observeEntityModel");
    return;
  }
  this.observe(
    ye([m(this, p).unique, m(this, p).entityType]),
    (e) => {
      this._unique = e[0], this._entityType = e[1];
    },
    "_observeEntityModel"
  );
};
V = function() {
  m(this, p)?.closeContextMenu();
};
Q = function(e) {
  e.stopPropagation(), b(this, u, V).call(this);
};
Z = function(e) {
  new Se(
    this,
    e,
    () => m(this, p)?.getContextElement()
  ).setIgnoreContextAliases([N.contextAlias]);
};
ee = function() {
  return this._isOpen ? h`<div id="backdrop" @click=${b(this, u, V)}></div>` : O;
};
te = function() {
  return this._isOpen && this._unique !== void 0 && this._entityType ? h`<uui-scroll-container id="action-modal" ${he(b(this, u, Z))}>
					${this._headline ? h`<h3>${this.localize.string(this._headline)}</h3>` : O}
					<umb-entity-action-list
						@action-executed=${b(this, u, Q)}
						.entityType=${this._entityType}
						.unique=${this._unique}></umb-entity-action-list>
				</uui-scroll-container>` : O;
};
f.styles = [
  D,
  g`
			:host {
				display: block;
				width: 100%;
				height: 100%;
				z-index: 1;
			}
			#backdrop {
				content: '';
				position: absolute;
				inset: 0px;
				background-color: black;
				opacity: 0.5;
				width: 100vw;
				height: 100vh;
				z-index: -1;
			}
			#relative-wrapper {
				background-color: var(--uui-color-surface);
				position: relative;
				display: flex;
				flex-direction: column;
				width: 100%;
				height: 100%;
			}
			#action-modal {
				position: absolute;
				height: 100%;
				z-index: 1;
				top: 0;
				right: calc(var(--umb-section-sidebar-width) * -1);
				width: var(--umb-section-sidebar-width);
				border: none;
				border-left: 1px solid var(--uui-color-border);
				border-right: 1px solid var(--uui-color-border);
				background-color: var(--uui-color-surface);
			}

			#action-modal h3 {
				padding: var(--uui-size-4) var(--uui-size-8);
				margin: 0;
				min-height: var(--umb-header-layout-height);
				box-sizing: border-box;
				display: flex;
				align-items: center;
			}
			#action-modal umb-entity-action-list {
				--uui-menu-item-flat-structure: 0;
			}
		`
];
U([
  d()
], f.prototype, "_isOpen", 2);
U([
  d()
], f.prototype, "_entityType", 2);
U([
  d()
], f.prototype, "_unique", 2);
U([
  d()
], f.prototype, "_headline", 2);
f = U([
  w("umb-section-sidebar-context-menu")
], f);
export {
  mt as UMB_SECTION_ALIAS_CONDITION_ALIAS,
  re as UMB_SECTION_CONTEXT,
  oe as UMB_SECTION_ITEM_REPOSITORY_ALIAS,
  pt as UMB_SECTION_PATH_PATTERN,
  Oe as UMB_SECTION_PICKER_MODAL,
  N as UMB_SECTION_SIDEBAR_CONTEXT,
  dt as UMB_SECTION_USER_PERMISSION_CONDITION_ALIAS,
  _ as UmbDefaultSectionElement,
  c as UmbInputSectionElement,
  M as UmbRefSectionElement,
  Te as UmbSectionContext,
  _ as UmbSectionDefaultElement,
  I as UmbSectionMainElement,
  Be as UmbSectionSidebarContext,
  f as UmbSectionSidebarContextMenuElement,
  T as UmbSectionSidebarElement,
  _ as element
};
//# sourceMappingURL=index.js.map
