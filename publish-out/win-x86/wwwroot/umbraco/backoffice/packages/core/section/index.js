import { U as oe } from "../modal-token-wEQqBBXI.js";
import { U as re } from "../path-pattern.class-Dg95YGLM.js";
import { U as ae } from "../manifests-CG-Q4ypE.js";
import { c as St, a as Et, b as Ot } from "../manifests-CG-Q4ypE.js";
import { UmbPickerInputContext as le } from "@umbraco-cms/backoffice/picker-input";
import { html as a, css as b, property as f, state as h, customElement as _, nothing as E, repeat as pe, LitElement as ue, ref as he } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as $ } from "@umbraco-cms/backoffice/lit-element";
import { splitStringToArray as ce, aliasToPath as me } from "@umbraco-cms/backoffice/utils";
import { UmbFormControlMixin as de } from "@umbraco-cms/backoffice/validation";
import { UUIRefElement as H } from "@umbraco-cms/backoffice/external/uui";
import { UmbElementMixin as be } from "@umbraco-cms/backoffice/element-api";
import { UmbTextStyles as M } from "@umbraco-cms/backoffice/style";
import { umbExtensionsRegistry as T } from "@umbraco-cms/backoffice/extension-registry";
import { UmbExtensionsElementInitializer as fe, UmbExtensionsManifestInitializer as _e, createExtensionApi as ve, createExtensionElement as ye } from "@umbraco-cms/backoffice/extension-api";
import { UMB_MARK_ATTRIBUTE_NAME as K } from "@umbraco-cms/backoffice/const";
import { UmbContextToken as xe } from "@umbraco-cms/backoffice/context-api";
import { UmbContextBase as ge } from "@umbraco-cms/backoffice/class-api";
import { UmbBooleanState as we, UmbStringState as A, observeMultiple as Se } from "@umbraco-cms/backoffice/observable-api";
import { UmbContextProxyController as Ee } from "@umbraco-cms/backoffice/context-proxy";
import { UmbParentEntityContext as Oe } from "@umbraco-cms/backoffice/entity";
const $e = new oe(
  "Umb.Modal.SectionPicker",
  {
    modal: {
      type: "sidebar",
      size: "small"
    }
  }
), xt = new re("section/:sectionName");
class Ce extends le {
  constructor(t) {
    super(t, ae, $e);
  }
}
var Pe = Object.defineProperty, Ue = Object.getOwnPropertyDescriptor, j = (e) => {
  throw TypeError(e);
}, g = (e, t, s, n) => {
  for (var i = n > 1 ? void 0 : n ? Ue(t, s) : t, o = e.length - 1, r; o >= 0; o--)
    (r = e[o]) && (i = (n ? r(t, s, i) : r(i)) || i);
  return n && i && Pe(t, s, i), i;
}, Me = (e, t, s) => t.has(e) || j("Cannot " + s), p = (e, t, s) => (Me(e, t, "read from private field"), s ? s.call(e) : t.get(e)), Te = (e, t, s) => t.has(e) ? j("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, s), l;
let m = class extends de(
  $
) {
  constructor() {
    super(), this.minMessage = "This field need more items", this.maxMessage = "This field exceeds the allowed amount of items", Te(this, l, new Ce(this)), this.addValidator(
      "rangeUnderflow",
      () => this.minMessage,
      () => !!this.min && p(this, l).getSelection().length < this.min
    ), this.addValidator(
      "rangeOverflow",
      () => this.maxMessage,
      () => !!this.max && p(this, l).getSelection().length > this.max
    ), this.observe(p(this, l).selection, (e) => this.value = e.join(",")), this.observe(p(this, l).selectedItems, (e) => this._items = e);
  }
  set min(e) {
    p(this, l).min = e;
  }
  get min() {
    return p(this, l).min;
  }
  set max(e) {
    p(this, l).max = e;
  }
  get max() {
    return p(this, l).max;
  }
  set selection(e) {
    p(this, l).setSelection(e);
  }
  get selection() {
    return p(this, l).getSelection();
  }
  set value(e) {
    this.selection = ce(e);
  }
  get value() {
    return this.selection.length > 0 ? this.selection.join(",") : void 0;
  }
  getFormElement() {
  }
  render() {
    return a`
			<uui-ref-list>${this._items?.map((e) => this._renderItem(e))}</uui-ref-list>
			<uui-button
				id="btn-add"
				look="placeholder"
				@click=${() => p(this, l).openPicker()}
				label=${this.localize.term("general_choose")}></uui-button>
		`;
  }
  _renderItem(e) {
    if (e.unique)
      return a` <umb-ref-section .item=${e}>
			<uui-action-bar slot="actions">
				<uui-button @click=${() => p(this, l).requestRemoveItem(e.unique)} label="Remove ${e.name}"
					>Remove</uui-button
				>
			</uui-action-bar>
		</umb-ref-section>`;
  }
};
l = /* @__PURE__ */ new WeakMap();
m.styles = [
  b`
			#btn-add {
				width: 100%;
			}
		`
];
g([
  f({ type: Number })
], m.prototype, "min", 1);
g([
  f({ type: String, attribute: "min-message" })
], m.prototype, "minMessage", 2);
g([
  f({ type: Number })
], m.prototype, "max", 1);
g([
  f({ type: String, attribute: "min-message" })
], m.prototype, "maxMessage", 2);
g([
  f({ type: String })
], m.prototype, "value", 1);
g([
  h()
], m.prototype, "_items", 2);
m = g([
  _("umb-input-section")
], m);
var Ae = Object.defineProperty, Ie = Object.getOwnPropertyDescriptor, L = (e, t, s, n) => {
  for (var i = n > 1 ? void 0 : n ? Ie(t, s) : t, o = e.length - 1, r; o >= 0; o--)
    (r = e[o]) && (i = (n ? r(t, s, i) : r(i)) || i);
  return n && i && Ae(t, s, i), i;
};
let U = class extends be(H) {
  render() {
    return a`
			<div id="info">
				<div id="name">${this.item?.meta.label ? this.localize.string(this.item.meta.label) : this.item?.name}</div>
			</div>
			<slot></slot>
			<slot name="actions" id="actions-container"></slot>
		`;
  }
};
U.styles = [
  ...H.styles,
  b`
			#name {
				font-weight: 700;
			}
		`
];
L([
  f({ type: Object, attribute: !1 })
], U.prototype, "item", 2);
U = L([
  _("umb-ref-section")
], U);
var ze = Object.defineProperty, De = Object.getOwnPropertyDescriptor, k = (e) => {
  throw TypeError(e);
}, C = (e, t, s, n) => {
  for (var i = n > 1 ? void 0 : n ? De(t, s) : t, o = e.length - 1, r; o >= 0; o--)
    (r = e[o]) && (i = (n ? r(t, s, i) : r(i)) || i);
  return n && i && ze(t, s, i), i;
}, qe = (e, t, s) => t.has(e) || k("Cannot " + s), Re = (e, t, s) => t.has(e) ? k("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, s), I = (e, t, s) => (qe(e, t, "access private method"), s), S, F, G, X;
let y = class extends $ {
  constructor() {
    super(), Re(this, S), this._splitPanelPosition = "300px", new fe(this, T, "sectionSidebarApp", null, (t) => {
      const s = this._sidebarApps;
      t.forEach((n) => {
        n.component?.setAttribute(K, "section-sidebar:" + n.manifest.alias);
      }), this._sidebarApps = t, this.requestUpdate("_sidebarApps", s);
    }), I(this, S, F).call(this);
    const e = localStorage.getItem("umb-split-panel-position");
    e && (this._splitPanelPosition = e);
  }
  get manifest() {
    return this._manifest;
  }
  set manifest(e) {
    const t = this._manifest;
    t !== e && (this._manifest = e, this.requestUpdate("manifest", t));
  }
  render() {
    return a`
			<umb-split-panel
				lock="start"
				snap="300px"
				@position-changed=${I(this, S, X)}
				.position=${this._splitPanelPosition}>
				${this._sidebarApps && this._sidebarApps.length > 0 ? a`
							<!-- TODO: these extensions should be combined into one type: sectionSidebarApp with a "subtype" -->
							<umb-section-sidebar slot="start">
								${pe(
      this._sidebarApps,
      (e) => e.alias,
      (e) => e.component
    )}
							</umb-section-sidebar>
						` : E}
				<umb-section-main slot="end">
					${this._routes && this._routes.length > 0 ? a`<umb-router-slot id="router-slot" .routes=${this._routes}></umb-router-slot>` : E}
					<slot></slot>
				</umb-section-main>
			</umb-split-panel>
		`;
  }
};
S = /* @__PURE__ */ new WeakSet();
F = function() {
  new _e(
    this,
    T,
    "sectionRoute",
    null,
    async (e) => {
      const t = e.filter((i) => i.manifest.element);
      if (e.filter((i) => !i.manifest.element).length > 0)
        throw new Error("sectionRoute extensions must have an element");
      const n = await Promise.all(
        t.map(async (i) => {
          const o = await ve(this, i.manifest);
          return o && (o.manifest = i.manifest), {
            path: o?.getPath?.() || i.manifest.meta?.path || me(i.manifest.alias),
            component: () => ye(i.manifest),
            setup: (r, ne) => {
              o?.setup?.(r, ne);
            }
          };
        })
      );
      I(this, S, G).call(this, n);
    },
    "umbRouteExtensionApisInitializer"
  );
};
G = function(e) {
  this._routes = [
    ...e,
    {
      path: "**",
      component: () => import("../section-main-views.element-C4OUdIT5.js"),
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
y.styles = [
  M,
  b`
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
C([
  f({ type: Object, attribute: !1 })
], y.prototype, "manifest", 1);
C([
  h()
], y.prototype, "_routes", 2);
C([
  h()
], y.prototype, "_sidebarApps", 2);
C([
  h()
], y.prototype, "_splitPanelPosition", 2);
y = C([
  _("umb-section-default")
], y);
var Ne = Object.getOwnPropertyDescriptor, We = (e, t, s, n) => {
  for (var i = n > 1 ? void 0 : n ? Ne(t, s) : t, o = e.length - 1, r; o >= 0; o--)
    (r = e[o]) && (i = r(i) || i);
  return i;
};
let z = class extends ue {
  render() {
    return a`
			<main>
				<slot></slot>
			</main>
		`;
  }
};
z.styles = [
  M,
  b`
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
z = We([
  _("umb-section-main")
], z);
class Be extends ge {
  constructor(t) {
    super(t, R), this.#e = new we(!1), this.contextMenuIsOpen = this.#e.asObservable(), this.#t = new A(void 0), this.entityType = this.#t.asObservable(), this.#i = new A(void 0), this.unique = this.#i.asObservable(), this.#s = new A(void 0), this.headline = this.#s.asObservable(), this.#n = void 0;
  }
  #e;
  #t;
  #i;
  #s;
  #n;
  toggleContextMenu(t, s) {
    this.openContextMenu(t, s);
  }
  // TODO: we wont get notified about tree item name changes because we don't have a subscription
  // we need to figure out how we best can handle this when we only know the entity and unique id
  openContextMenu(t, s) {
    this.#t.setValue(s.entityType), this.#i.setValue(s.unique), this.#s.setValue(s.headline), this.#e.setValue(!0), this.#n = t;
  }
  closeContextMenu() {
    this.#e.setValue(!1), this.#t.setValue(void 0), this.#i.setValue(void 0), this.#s.setValue(void 0), this.#n = void 0;
  }
  getContextElement() {
    return this.#n;
  }
}
const R = new xe("UmbSectionSidebarContext");
var Ve = Object.getOwnPropertyDescriptor, He = (e, t, s, n) => {
  for (var i = n > 1 ? void 0 : n ? Ve(t, s) : t, o = e.length - 1, r; o >= 0; o--)
    (r = e[o]) && (i = r(i) || i);
  return i;
};
let D = class extends $ {
  constructor() {
    super(), new Be(this);
  }
  firstUpdated(e) {
    super.firstUpdated(e), this.setAttribute(K, "section-sidebar");
  }
  render() {
    return a`
			<umb-section-sidebar-context-menu>
				<uui-scroll-container id="scroll-container">
					<slot></slot>
				</uui-scroll-container>
			</umb-section-sidebar-context-menu>
		`;
  }
};
D.styles = [
  b`
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
D = He([
  _("umb-section-sidebar")
], D);
var Ke = Object.defineProperty, je = Object.getOwnPropertyDescriptor, Y = (e) => {
  throw TypeError(e);
}, P = (e, t, s, n) => {
  for (var i = n > 1 ? void 0 : n ? je(t, s) : t, o = e.length - 1, r; o >= 0; o--)
    (r = e[o]) && (i = (n ? r(t, s, i) : r(i)) || i);
  return n && i && Ke(t, s, i), i;
}, N = (e, t, s) => t.has(e) || Y("Cannot " + s), d = (e, t, s) => (N(e, t, "read from private field"), t.get(e)), V = (e, t, s) => t.has(e) ? Y("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, s), Le = (e, t, s, n) => (N(e, t, "write to private field"), t.set(e, s), s), v = (e, t, s) => (N(e, t, "access private method"), s), u, c, J, W, Q, Z, ee, te;
let x = class extends $ {
  constructor() {
    super(), V(this, c), V(this, u), this._isOpen = !1, this.consumeContext(R, (e) => {
      Le(this, u, e), v(this, c, J).call(this), d(this, u) ? (this.observe(d(this, u).contextMenuIsOpen, (t) => this._isOpen = t, "_observeContextMenuIsOpen"), this.observe(d(this, u).headline, (t) => this._headline = t, "_observeHeadline")) : (this.removeUmbControllerByAlias("_observeContextMenuIsOpen"), this.removeUmbControllerByAlias("_observeHeadline"));
    });
  }
  render() {
    return a`
			${v(this, c, ee).call(this)}
			<div id="relative-wrapper">
				<slot></slot>
				${v(this, c, te).call(this)}
			</div>
		`;
  }
};
u = /* @__PURE__ */ new WeakMap();
c = /* @__PURE__ */ new WeakSet();
J = function() {
  if (!d(this, u)) {
    this.removeUmbControllerByAlias("_observeEntityModel");
    return;
  }
  this.observe(
    Se([d(this, u).unique, d(this, u).entityType]),
    (e) => {
      this._unique = e[0], this._entityType = e[1];
    },
    "_observeEntityModel"
  );
};
W = function() {
  d(this, u)?.closeContextMenu();
};
Q = function(e) {
  e.stopPropagation(), v(this, c, W).call(this);
};
Z = function(e) {
  new Ee(
    this,
    e,
    () => d(this, u)?.getContextElement()
  ).setIgnoreContextAliases([R.contextAlias]);
};
ee = function() {
  return this._isOpen ? a`<div id="backdrop" @click=${v(this, c, W)}></div>` : E;
};
te = function() {
  return this._isOpen && this._unique !== void 0 && this._entityType ? a`<uui-scroll-container id="action-modal" ${he(v(this, c, Z))}>
					${this._headline ? a`<h3>${this.localize.string(this._headline)}</h3>` : E}
					<umb-entity-action-list
						@action-executed=${v(this, c, Q)}
						.entityType=${this._entityType}
						.unique=${this._unique}></umb-entity-action-list>
				</uui-scroll-container>` : E;
};
x.styles = [
  M,
  b`
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
P([
  h()
], x.prototype, "_isOpen", 2);
P([
  h()
], x.prototype, "_entityType", 2);
P([
  h()
], x.prototype, "_unique", 2);
P([
  h()
], x.prototype, "_headline", 2);
x = P([
  _("umb-section-sidebar-context-menu")
], x);
var ke = Object.defineProperty, Fe = Object.getOwnPropertyDescriptor, ie = (e, t, s, n) => {
  for (var i = n > 1 ? void 0 : n ? Fe(t, s) : t, o = e.length - 1, r; o >= 0; o--)
    (r = e[o]) && (i = (n ? r(t, s, i) : r(i)) || i);
  return n && i && ke(t, s, i), i;
};
const Ge = {
  type: "kind",
  alias: "Umb.Kind.SectionSidebarAppMenu",
  matchKind: "menu",
  matchType: "sectionSidebarApp",
  manifest: {
    type: "sectionSidebarApp",
    elementName: "umb-section-sidebar-menu"
  }
};
T.register(Ge);
let w = class extends $ {
  renderHeader() {
    return a`<h3>${this.localize.string(this.manifest?.meta?.label ?? "")}</h3>`;
  }
  render() {
    return a`
			${this.renderHeader()}
			<umb-extension-slot
				type="menu"
				.filter="${(e) => e.alias === this.manifest?.meta?.menu}"
				default-element="umb-menu"></umb-extension-slot>
		`;
  }
};
w.styles = [
  M,
  b`
			h3 {
				margin: var(--uui-size-5) 0;
				padding: var(--uui-size-4) var(--uui-size-8);
				font-size: 14px;
			}
		`
];
ie([
  f({ type: Object, attribute: !1 })
], w.prototype, "manifest", 2);
w = ie([
  _("umb-section-sidebar-menu")
], w);
var Xe = Object.defineProperty, Ye = Object.getOwnPropertyDescriptor, se = (e) => {
  throw TypeError(e);
}, B = (e, t, s, n) => {
  for (var i = n > 1 ? void 0 : n ? Ye(t, s) : t, o = e.length - 1, r; o >= 0; o--)
    (r = e[o]) && (i = (n ? r(t, s, i) : r(i)) || i);
  return n && i && Xe(t, s, i), i;
}, Je = (e, t, s) => t.has(e) || se("Cannot " + s), Qe = (e, t, s) => (Je(e, t, "read from private field"), s ? s.call(e) : t.get(e)), Ze = (e, t, s) => t.has(e) ? se("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, s), q;
const et = {
  type: "kind",
  alias: "Umb.Kind.SectionSidebarAppMenuWithEntityActions",
  matchKind: "menuWithEntityActions",
  matchType: "sectionSidebarApp",
  manifest: {
    type: "sectionSidebarApp",
    elementName: "umb-section-sidebar-menu-with-entity-actions"
  }
};
T.register(et);
let O = class extends w {
  constructor() {
    super(...arguments), this._unique = null, Ze(this, q, new Oe(this));
  }
  updated(e) {
    if (e.has("manifest")) {
      const t = this.manifest?.meta.entityType;
      Qe(this, q).setParent(t ? { unique: this._unique, entityType: t } : void 0);
    }
  }
  renderHeader() {
    return a`
			<div id="header">
				<h3>${this.localize.string(this.manifest?.meta?.label ?? "")}</h3>
				<umb-entity-actions-bundle
					slot="actions"
					.unique=${this._unique}
					.entityType=${this.manifest?.meta.entityType}
					.label=${this.localize.term("actions_viewActionsFor", [this.manifest?.meta.label])}>
				</umb-entity-actions-bundle>
			</div>
		`;
  }
};
q = /* @__PURE__ */ new WeakMap();
O.styles = [
  ...w.styles,
  b`
			#header {
				display: flex;
				flex-direction: row;
				align-items: center;
			}
			#header > :first-child {
				flex-grow: 1;
			}
		`
];
B([
  h()
], O.prototype, "_unique", 2);
B([
  h()
], O.prototype, "_entityType", 2);
O = B([
  _("umb-section-sidebar-menu-with-entity-actions")
], O);
export {
  St as UMB_SECTION_CONTEXT,
  ae as UMB_SECTION_ITEM_REPOSITORY_ALIAS,
  xt as UMB_SECTION_PATH_PATTERN,
  $e as UMB_SECTION_PICKER_MODAL,
  R as UMB_SECTION_SIDEBAR_CONTEXT,
  Et as UMB_SECTION_USER_PERMISSION_CONDITION_ALIAS,
  m as UmbInputSectionElement,
  U as UmbRefSectionElement,
  Ot as UmbSectionContext,
  y as UmbSectionDefaultElement,
  z as UmbSectionMainElement,
  Be as UmbSectionSidebarContext,
  x as UmbSectionSidebarContextMenuElement,
  D as UmbSectionSidebarElement,
  w as UmbSectionSidebarMenuElement,
  O as UmbSectionSidebarMenuWithEntityActionsElement
};
//# sourceMappingURL=index.js.map
