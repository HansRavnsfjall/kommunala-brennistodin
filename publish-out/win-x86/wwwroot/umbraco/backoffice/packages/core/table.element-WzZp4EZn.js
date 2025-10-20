import { UmbTextStyles as P } from "@umbraco-cms/backoffice/style";
import { css as u, state as p, property as r, customElement as h, repeat as fe, html as l, nothing as w, query as q, LitElement as Et, when as b, ifDefined as $, styleMap as Os, map as Ms, classMap as zi } from "@umbraco-cms/backoffice/external/lit";
import { UMB_MODAL_MANAGER_CONTEXT as Bi, UmbModalElement as As, UMB_ITEM_PICKER_MODAL as Us, umbConfirmModal as Wi } from "@umbraco-cms/backoffice/modal";
import { UmbLitElement as c } from "@umbraco-cms/backoffice/lit-element";
import { UMB_NOTIFICATION_CONTEXT as Is } from "@umbraco-cms/backoffice/notification";
import { a as Ts } from "./entity.context-C8qVKYoi.js";
import { umbExtensionsRegistry as Qt } from "@umbraco-cms/backoffice/extension-registry";
import { UmbExtensionsManifestInitializer as Ds, createExtensionApi as Ls } from "@umbraco-cms/backoffice/extension-api";
import { e as zs } from "./extractUmbColorVariable.function-C_Z99zyW.js";
import { UmbChangeEvent as d, UmbDeleteEvent as Ri, UmbInputEvent as jt } from "@umbraco-cms/backoffice/event";
import { UUIFormControlMixin as Ae, UUIInputElement as qi, UUIRadioElement as Bs, UUIInputEvent as Vi, UUIRefNodeElement as Hi } from "@umbraco-cms/backoffice/external/uui";
import { UmbFormControlMixin as _e, UMB_VALIDATION_EMPTY_LOCALIZATION_KEY as ei } from "@umbraco-cms/backoffice/validation";
import { splitStringToArray as Ws, generateAlias as Ni, clamp as Fi } from "@umbraco-cms/backoffice/utils";
import { UmbSorterController as xt } from "@umbraco-cms/backoffice/sorter";
import { UMB_PROPERTY_DATASET_CONTEXT as Rs } from "@umbraco-cms/backoffice/property";
import { UmbElementMixin as qs } from "@umbraco-cms/backoffice/element-api";
var Vs = Object.defineProperty, Hs = Object.getOwnPropertyDescriptor, Gi = (e) => {
  throw TypeError(e);
}, Ct = (e, t, i, s) => {
  for (var a = s > 1 ? void 0 : s ? Hs(t, i) : t, o = e.length - 1, n; o >= 0; o--)
    (n = e[o]) && (a = (s ? n(t, i, a) : n(a)) || a);
  return s && a && Vs(t, i, a), a;
}, Ns = (e, t, i) => t.has(e) || Gi("Cannot " + i), Fs = (e, t, i) => t.has(e) ? Gi("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), qe = (e, t, i) => (Ns(e, t, "access private method"), i), pe, Ki, je, Xi;
let Ce = class extends c {
  constructor() {
    super(), Fs(this, pe), this._modalElementMap = /* @__PURE__ */ new Map(), this._modals = [], this.fillBackground = !1, this.consumeContext(Bi, (e) => {
      this._modalManager = e, this._observeModals();
    });
  }
  _observeModals() {
    this._modalManager && this.observe(this._modalManager.modals, (e) => {
      qe(this, pe, Ki).call(this, e);
    });
  }
  render() {
    return l`
			<uui-modal-container id="container">
				${this._modals.length > 0 ? fe(
      this._modals,
      (e) => e.key,
      (e) => qe(this, pe, Xi).call(this, e.key)
    ) : ""}
			</uui-modal-container>
		`;
  }
};
pe = /* @__PURE__ */ new WeakSet();
Ki = function(e) {
  this.fillBackground = !1;
  const t = this._modals;
  this._modals = e, t.filter((s) => !e.some((a) => a.key === s.key)).forEach((s) => {
    const a = this._modalElementMap.get(s.key);
    a?.removeEventListener("close-end", qe(this, pe, je).bind(this, s.key)), a?.destroy(), this._modalElementMap.delete(s.key), s.destroy();
  }), this._modals.length !== 0 && this._modals.forEach(async (s) => {
    if (this._modalElementMap.has(s.key)) return;
    const a = new As();
    await a.init(s), a.element?.addEventListener("close-end", qe(this, pe, je).bind(this, s.key)), s.addEventListener("umb:destroy", qe(this, pe, je).bind(this, s.key)), this._modalElementMap.set(s.key, a), s.backdropBackground && (this.fillBackground = !0, this.shadowRoot?.getElementById("container")?.style.setProperty("--backdrop-background", s.backdropBackground)), this.requestUpdate("_modalElementMap");
  });
};
je = function(e) {
  this._modalManager?.remove(e);
};
Xi = function(e) {
  const t = this._modalElementMap.get(e);
  return t ? t.render() : w;
};
Ce.styles = [
  P,
  u`
			:host {
				position: absolute;
				z-index: 1000;
			}

			:host([fill-background]) {
				--uui-modal-dialog-border-radius: 0;
				--uui-shadow-depth-5: 0;
			}

			:host([fill-background]) #container::after {
				background: var(--backdrop-background);
			}
		`
];
Ct([
  p()
], Ce.prototype, "_modalElementMap", 2);
Ct([
  p()
], Ce.prototype, "_modals", 2);
Ct([
  r({ type: Boolean, reflect: !0, attribute: "fill-background" })
], Ce.prototype, "fillBackground", 2);
Ce = Ct([
  h("umb-backoffice-modal-container")
], Ce);
var Gs = Object.defineProperty, Ks = Object.getOwnPropertyDescriptor, ti = (e, t, i, s) => {
  for (var a = s > 1 ? void 0 : s ? Ks(t, i) : t, o = e.length - 1, n; o >= 0; o--)
    (n = e[o]) && (a = (s ? n(t, i, a) : n(a)) || a);
  return s && a && Gs(t, i, a), a;
};
let Ne = class extends c {
  constructor() {
    super(), this.consumeContext(Is, (e) => {
      this._notificationContext = e, this._observeNotifications();
    });
  }
  _observeNotifications() {
    this._notificationContext && this.observe(this._notificationContext.notifications, (e) => {
      this._notifications = e, this._notificationsElement?.hidePopover?.(), this._notificationsElement?.showPopover?.();
    });
  }
  render() {
    return l`
			<uui-toast-notification-container bottom-up id="notifications" popover="manual">
				${this._notifications ? fe(
      this._notifications,
      (e) => e.key,
      (e) => l`${e.element}`
    ) : ""}
			</uui-toast-notification-container>
		`;
  }
};
Ne.styles = [
  P,
  u`
			#notifications {
				top: 0;
				left: 0;
				right: 0;
				bottom: 45px;
				height: auto;
				padding: var(--uui-size-layout-1);

				position: fixed;
				width: 100vw;
				background: 0;
				outline: 0;
				border: 0;
				margin: 0;
			}
		`
];
ti([
  q("#notifications")
], Ne.prototype, "_notificationsElement", 2);
ti([
  p()
], Ne.prototype, "_notifications", 2);
Ne = ti([
  h("umb-backoffice-notification-container")
], Ne);
var Xs = Object.defineProperty, Ys = Object.getOwnPropertyDescriptor, Yi = (e) => {
  throw TypeError(e);
}, V = (e, t, i, s) => {
  for (var a = s > 1 ? void 0 : s ? Ys(t, i) : t, o = e.length - 1, n; o >= 0; o--)
    (n = e[o]) && (a = (s ? n(t, i, a) : n(a)) || a);
  return s && a && Xs(t, i, a), a;
}, Zi = (e, t, i) => t.has(e) || Yi("Cannot " + i), he = (e, t, i) => (Zi(e, t, "read from private field"), i ? i.call(e) : t.get(e)), Ut = (e, t, i) => t.has(e) ? Yi("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), It = (e, t, i) => (Zi(e, t, "access private method"), i), ue, et, ze, tt;
let E = class extends Et {
  constructor() {
    super(...arguments), Ut(this, ze), this.headline = "", this.headerTransparent = !1, this.loading = !1, this._headerSlotHasChildren = !1, this._navigationSlotHasChildren = !1, this._actionsMenuSlotHasChildren = !1, this._footerSlotHasChildren = !1, this._actionsSlotHasChildren = !1, Ut(this, ue, (e) => e.target.assignedNodes({ flatten: !0 }).length > 0), Ut(this, et, () => {
      this._scrollContainer && this.toggleAttribute("scrolling", this._scrollContainer.scrollTop > 0);
    });
  }
  connectedCallback() {
    super.connectedCallback(), this.headerTransparent && requestAnimationFrame(() => {
      this._scrollContainer?.addEventListener("scroll", he(this, et));
    });
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this._scrollContainer?.removeEventListener("scroll", he(this, et));
  }
  render() {
    return l`
			<div
				id="header"
				style="display: ${this.headline || this._headerSlotHasChildren || this._actionsMenuSlotHasChildren || this._navigationSlotHasChildren ? "" : "none"}">
				${this.headline ? l`<h3 id="headline">${this.headline}</h3>` : w}

				<slot
					id="header-slot"
					name="header"
					@slotchange=${(e) => {
      this._headerSlotHasChildren = he(this, ue).call(this, e), It(this, ze, tt).call(this, e.target, this._headerSlotHasChildren);
    }}></slot>
				<slot
					id="action-menu-slot"
					name="action-menu"
					@slotchange=${(e) => {
      this._actionsMenuSlotHasChildren = he(this, ue).call(this, e), It(this, ze, tt).call(this, e.target, this._actionsMenuSlotHasChildren);
    }}></slot>
				<slot
					id="navigation-slot"
					name="navigation"
					@slotchange=${(e) => {
      this._navigationSlotHasChildren = he(this, ue).call(this, e), It(this, ze, tt).call(this, e.target, this._navigationSlotHasChildren);
    }}></slot>
			</div>

			<!-- This div should be changed for the uui-scroll-container when it gets updated -->
			<div id="main">
				${this.loading ? l`<uui-loader-bar></uui-loader-bar>` : w}
				<slot></slot>
			</div>

			<slot name="footer"></slot>
			<umb-footer-layout style="display:${this._footerSlotHasChildren || this._actionsSlotHasChildren ? "" : "none"}">
				<slot
					name="footer-info"
					@slotchange=${(e) => {
      this._footerSlotHasChildren = he(this, ue).call(this, e);
    }}></slot>
				<slot
					name="actions"
					slot="actions"
					@slotchange=${(e) => {
      this._actionsSlotHasChildren = he(this, ue).call(this, e);
    }}></slot>
			</umb-footer-layout>
		`;
  }
};
ue = /* @__PURE__ */ new WeakMap();
et = /* @__PURE__ */ new WeakMap();
ze = /* @__PURE__ */ new WeakSet();
tt = function(e, t) {
  e.style.display = t ? "flex" : "none";
};
E.styles = [
  P,
  u`
			:host {
				display: flex;
				background-color: var(--umb-body-layout-color-background, var(--uui-color-background));
				width: 100%;
				height: 100%;
				flex-direction: column;
			}

			#header {
				display: flex;
				align-items: center;
				justify-content: space-between;
				width: 100%;
				height: var(--umb-header-layout-height);
				background-color: var(--uui-color-surface);
				border-bottom: 1px solid var(--uui-color-border);
				box-sizing: border-box;
				z-index: 1;
			}
			:host([header-transparent]) #header {
				background-color: transparent;
				border-color: transparent;
				transition: box-shadow 150ms ease-in-out;
				box-shadow: 0 -1px 0px 0px rgba(0, 0, 0, 0.5);
			}
			:host([header-transparent][scrolling]) #header {
				/* This should be using the uui-shadows but for now they are too drastic for this use case */
				box-shadow: 0 1px 15px 0 rgba(0, 0, 0, 0.2);
			}
			:host([header-fit-height][header-transparent]:not([header-no-padding])) #header-slot {
				padding: var(--uui-size-layout-1);
			}
			:host([header-fit-height]) #header {
				height: fit-content;
			}
			#header-slot {
				padding: 0 var(--uui-size-layout-1);
				flex-grow: 1;
			}
			:host([header-no-padding]) #header-slot {
				padding: 0;
			}

			:host([header-transparent]:not([main-no-padding])) #main:not(*[style='display: none'] + *) {
				/* The following styling is only applied if the clear-header IS present,
				the main-no-padding attribute is NOT present, and the header is NOT hidden */
				padding-top: var(--uui-size-space-1);
			}
			:host([main-no-padding]) #main {
				padding: 0;
			}

			#header-slot,
			#action-menu-slot,
			#navigation-slot {
				display: none;
				height: 100%;
				align-items: center;
				box-sizing: border-box;
				min-width: 0;
			}
			#navigation-slot {
				margin-left: auto;
			}

			#headline {
				display: block;
				margin: 0 var(--uui-size-layout-1);
			}

			#main {
				display: block;
				flex: 1;
				flex-direction: column;
				overflow-y: auto;
				padding: var(--uui-size-layout-1);
			}

			#main > slot::slotted(*:first-child) {
				padding-top: 0;
				margin-top: 0;
			}
		`
];
V([
  q("#main")
], E.prototype, "_scrollContainer", 2);
V([
  r()
], E.prototype, "headline", 2);
V([
  r({ type: Boolean, reflect: !0, attribute: "header-transparent" })
], E.prototype, "headerTransparent", 2);
V([
  r({ type: Boolean })
], E.prototype, "loading", 2);
V([
  p()
], E.prototype, "_headerSlotHasChildren", 2);
V([
  p()
], E.prototype, "_navigationSlotHasChildren", 2);
V([
  p()
], E.prototype, "_actionsMenuSlotHasChildren", 2);
V([
  p()
], E.prototype, "_footerSlotHasChildren", 2);
V([
  p()
], E.prototype, "_actionsSlotHasChildren", 2);
E = V([
  h("umb-body-layout")
], E);
var Zs = Object.defineProperty, Js = Object.getOwnPropertyDescriptor, Ji = (e) => {
  throw TypeError(e);
}, St = (e, t, i, s) => {
  for (var a = s > 1 ? void 0 : s ? Js(t, i) : t, o = e.length - 1, n; o >= 0; o--)
    (n = e[o]) && (a = (s ? n(t, i, a) : n(a)) || a);
  return s && a && Zs(t, i, a), a;
}, Qs = (e, t, i) => t.has(e) || Ji("Cannot " + i), js = (e, t, i) => t.has(e) ? Ji("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), eo = (e, t, i) => (Qs(e, t, "access private method"), i), Bt, Qi;
let Se = class extends Et {
  constructor() {
    super(...arguments), js(this, Bt), this.language = "", this.copy = !1, this._copyState = "idle";
  }
  async copyCode() {
    const e = this.textContent;
    e && (await navigator.clipboard.writeText(e), this._copyState = "success", setTimeout(() => {
      this._copyState = "idle";
    }, 2e3));
  }
  render() {
    return l`
			${eo(this, Bt, Qi).call(this)}
			<pre><uui-scroll-container><code><slot></slot></code></uui-scroll-container></pre>
		`;
  }
};
Bt = /* @__PURE__ */ new WeakSet();
Qi = function() {
  if (!(!this.language && !this.copy))
    return l`
			<div id="header">
				<span id="lang">${this.language}</span>
				${b(
      this.copy,
      () => l`
						<uui-button color=${this._copyState === "idle" ? "default" : "positive"} @click=${this.copyCode}>
							${b(
        this._copyState === "idle",
        () => l`<uui-icon name="copy"></uui-icon> <umb-localize key="general_copy">Copy</umb-localize>`,
        () => l`<uui-icon name="check"></uui-icon> <umb-localize key="general_copied">Copied!</umb-localize>`
      )}
						</uui-button>
					`
    )}
			</div>
		`;
};
Se.styles = [
  P,
  u`
			:host {
				display: block;
				border: 1px solid var(--uui-color-divider-emphasis);
				border-radius: var(--uui-border-radius);
			}

			uui-scroll-container {
				overflow-y: auto;
				overflow-wrap: anywhere;
			}

			pre {
				font-family: monospace;
				background-color: var(--uui-color-surface-alt);
				color: #303033;
				display: block;
				margin: 0;
				overflow-x: auto;
				padding: 9.5px;
			}

			pre,
			code {
				word-wrap: normal;
				white-space: pre;
			}

			#header {
				display: flex;
				justify-content: space-between;
				align-items: center;
				background-color: var(--uui-color-surface-alt);
				border-bottom: 1px solid var(--uui-color-divider-emphasis);
			}

			#lang {
				margin-left: 16px;
				font-weight: bold;
			}

			button {
				font-family: inherit;
				padding: 6px 16px;
				background-color: transparent;
				border: none;
				border-left: 1px solid var(--uui-color-divider-emphasis);
				border-radius: 0;
				color: #000;
				display: flex;
				align-items: center;
				gap: 8px;
			}

			button:hover {
				background-color: var(--uui-color-surface-emphasis);
			}
		`
];
St([
  r()
], Se.prototype, "language", 2);
St([
  r({ type: Boolean })
], Se.prototype, "copy", 2);
St([
  p()
], Se.prototype, "_copyState", 2);
Se = St([
  h("umb-code-block")
], Se);
var to = Object.defineProperty, io = Object.getOwnPropertyDescriptor, ji = (e) => {
  throw TypeError(e);
}, Y = (e, t, i, s) => {
  for (var a = s > 1 ? void 0 : s ? io(t, i) : t, o = e.length - 1, n; o >= 0; o--)
    (n = e[o]) && (a = (s ? n(t, i, a) : n(a)) || a);
  return s && a && to(t, i, a), a;
}, ao = (e, t, i) => t.has(e) || ji("Cannot " + i), so = (e, t, i) => t.has(e) ? ji("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), oo = (e, t, i) => (ao(e, t, "access private method"), i), Wt, ea;
let O = class extends c {
  constructor() {
    super(...arguments), so(this, Wt), this.open = !1, this.look = "default", this.color = "default", this.placement = "bottom-start", this.compact = !1, this.hideExpand = !1;
  }
  updated(e) {
    super.updated(e), e.has("open") && this.popoverContainerElement && (this.open ? this.openDropdown() : this.closeDropdown());
  }
  openDropdown() {
    this.popoverContainerElement?.showPopover();
  }
  closeDropdown() {
    this.popoverContainerElement?.hidePopover();
  }
  render() {
    return l`
			<uui-button
				id="dropdown-button"
				popovertarget="dropdown-popover"
				data-mark="open-dropdown"
				.look=${this.look}
				.color=${this.color}
				.label=${this.label ?? ""}
				.compact=${this.compact}>
				<slot name="label"></slot>
				${b(
      !this.hideExpand,
      () => l`<uui-symbol-expand id="symbol-expand" .open=${this.open}></uui-symbol-expand>`
    )}
			</uui-button>
			<uui-popover-container id="dropdown-popover" .placement=${this.placement} @toggle=${oo(this, Wt, ea)}>
				<umb-popover-layout>
					<slot></slot>
				</umb-popover-layout>
			</uui-popover-container>
		`;
  }
};
Wt = /* @__PURE__ */ new WeakSet();
ea = function(e) {
  this.open = e.newState === "open";
};
O.styles = [
  P,
  u`
			#dropdown-button {
				min-width: max-content;
			}
			:host(:not([hide-expand]):not([compact])) #dropdown-button {
				--uui-button-padding-right-factor: 2;
			}

			:host(:not([compact])) #symbol-expand {
				margin-left: var(--uui-size-space-2);
			}
		`
];
Y([
  r({ type: Boolean, reflect: !0 })
], O.prototype, "open", 2);
Y([
  r()
], O.prototype, "label", 2);
Y([
  r()
], O.prototype, "look", 2);
Y([
  r()
], O.prototype, "color", 2);
Y([
  r()
], O.prototype, "placement", 2);
Y([
  r({ type: Boolean })
], O.prototype, "compact", 2);
Y([
  r({ type: Boolean, attribute: "hide-expand" })
], O.prototype, "hideExpand", 2);
Y([
  q("#dropdown-popover")
], O.prototype, "popoverContainerElement", 2);
O = Y([
  h("umb-dropdown")
], O);
var no = Object.defineProperty, ro = Object.getOwnPropertyDescriptor, ta = (e) => {
  throw TypeError(e);
}, Z = (e, t, i, s) => {
  for (var a = s > 1 ? void 0 : s ? ro(t, i) : t, o = e.length - 1, n; o >= 0; o--)
    (n = e[o]) && (a = (s ? n(t, i, a) : n(a)) || a);
  return s && a && no(t, i, a), a;
}, ia = (e, t, i) => t.has(e) || ta("Cannot " + i), yi = (e, t, i) => (ia(e, t, "read from private field"), i ? i.call(e) : t.get(e)), gi = (e, t, i) => t.has(e) ? ta("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), ce = (e, t, i) => (ia(e, t, "access private method"), i), it, G, aa, sa, oa, na, ra, la, ha;
let M = class extends c {
  constructor() {
    super(...arguments), gi(this, G), this._numberOfActions = 0, gi(this, it, new Ts(this));
  }
  updated(e) {
    e.has("entityType") && e.has("unique") && (yi(this, it).setEntityType(this.entityType), yi(this, it).setUnique(this.unique ?? null), ce(this, G, aa).call(this));
  }
  render() {
    return this._numberOfActions === 0 ? w : l`<uui-action-bar slot="actions">${ce(this, G, la).call(this)} ${ce(this, G, ha).call(this)} </uui-action-bar>`;
  }
};
it = /* @__PURE__ */ new WeakMap();
G = /* @__PURE__ */ new WeakSet();
aa = function() {
  new Ds(
    this,
    Qt,
    "entityAction",
    (e) => e.forEntityTypes.includes(this.entityType),
    async (e) => {
      this._numberOfActions = e.length, this._firstActionManifest = this._numberOfActions > 0 ? e[0].manifest : void 0, ce(this, G, sa).call(this);
    },
    "umbEntityActionsObserver"
  );
};
sa = async function() {
  this._firstActionManifest && (this._firstActionApi = await Ls(this, this._firstActionManifest, [
    { unique: this.unique, entityType: this.entityType, meta: this._firstActionManifest.meta }
  ]), this._firstActionApi && (this._firstActionApi.manifest = this._firstActionManifest, this._firstActionHref = await this._firstActionApi.getHref()));
};
oa = async function(e) {
  this._firstActionHref || (e.stopPropagation(), await this._firstActionApi?.execute().catch(() => {
  }));
};
na = function() {
  this._dropdownElement?.closeDropdown();
};
ra = function(e) {
  e.stopPropagation();
};
la = function() {
  return this._numberOfActions === 1 ? w : l`
			<umb-dropdown id="action-modal" @click=${ce(this, G, ra)} .label=${this.label} compact hide-expand>
				<uui-symbol-more slot="label" .label=${this.label}></uui-symbol-more>
				<uui-scroll-container>
					<umb-entity-action-list
						@action-executed=${ce(this, G, na)}
						.entityType=${this.entityType}
						.unique=${this.unique}
						.label=${this.label}></umb-entity-action-list>
				</uui-scroll-container>
			</umb-dropdown>
		`;
};
ha = function() {
  return !this._firstActionApi || !this._firstActionManifest ? w : l`<uui-button
			label=${this.localize.string(this._firstActionManifest.meta.label)}
			data-mark=${"entity-action:" + this._firstActionManifest.alias}
			@click=${ce(this, G, oa)}
			href="${$(this._firstActionHref)}">
			<uui-icon name=${$(this._firstActionManifest.meta.icon)}></uui-icon>
		</uui-button>`;
};
M.styles = [
  u`
			uui-scroll-container {
				max-height: 700px;
			}
		`
];
Z([
  r({ type: String, attribute: "entity-type" })
], M.prototype, "entityType", 2);
Z([
  r({ type: String })
], M.prototype, "unique", 2);
Z([
  r({ type: String })
], M.prototype, "label", 2);
Z([
  p()
], M.prototype, "_numberOfActions", 2);
Z([
  p()
], M.prototype, "_firstActionManifest", 2);
Z([
  p()
], M.prototype, "_firstActionApi", 2);
Z([
  p()
], M.prototype, "_firstActionHref", 2);
Z([
  q("#action-modal")
], M.prototype, "_dropdownElement", 2);
M = Z([
  h("umb-entity-actions-bundle")
], M);
var lo = Object.getOwnPropertyDescriptor, ho = (e, t, i, s) => {
  for (var a = s > 1 ? void 0 : s ? lo(t, i) : t, o = e.length - 1, n; o >= 0; o--)
    (n = e[o]) && (a = n(a) || a);
  return a;
};
let Rt = class extends Et {
  render() {
    return l`
			<slot></slot>
			<slot id="actions" name="actions"></slot>
		`;
  }
};
Rt.styles = [
  P,
  u`
			:host {
				display: flex;
				align-items: center;
				justify-content: space-between;
				width: 100%;
				height: var(--umb-footer-layout-height);
				border-top: 1px solid var(--uui-color-border);
				background-color: var(--uui-color-surface);
				box-sizing: border-box;
			}

			#actions {
				display: flex;
				gap: var(--uui-size-space-2);
				margin: 0 var(--uui-size-layout-1);
				margin-left: auto;
			}
		`
];
Rt = ho([
  h("umb-footer-layout")
], Rt);
var uo = Object.getOwnPropertyDescriptor, po = (e, t, i, s) => {
  for (var a = s > 1 ? void 0 : s ? uo(t, i) : t, o = e.length - 1, n; o >= 0; o--)
    (n = e[o]) && (a = n(a) || a);
  return a;
};
const co = {
  type: "kind",
  alias: "Umb.Kind.Button",
  matchKind: "button",
  matchType: "headerApp",
  manifest: {
    type: "headerApp",
    kind: "button",
    elementName: "umb-header-app-button"
  }
};
Qt.register(co);
let qt = class extends c {
  render() {
    return l`
			<uui-button
				look="primary"
				label=${$(this.manifest?.meta.label)}
				href=${$(this.manifest?.meta.href)}
				compact>
				<umb-icon name=${$(this.manifest?.meta.icon)}></umb-icon>
			</uui-button>
		`;
  }
};
qt.styles = [
  P,
  u`
			uui-button {
				font-size: 18px;
				--uui-button-background-color: var(--umb-header-app-button-background-color, transparent);
				--uui-button-background-color-hover: var(
					--umb-header-app-button-background-color-hover,
					var(--uui-color-emphasis)
				);
			}
		`
];
qt = po([
  h("umb-header-app-button")
], qt);
var mo = Object.defineProperty, vo = Object.getOwnPropertyDescriptor, ii = (e, t, i, s) => {
  for (var a = s > 1 ? void 0 : s ? vo(t, i) : t, o = e.length - 1, n; o >= 0; o--)
    (n = e[o]) && (a = (s ? n(t, i, a) : n(a)) || a);
  return s && a && mo(t, i, a), a;
};
let Fe = class extends c {
  render() {
    return l`
			<div class="user-info">
				<slot name="avatar"></slot>
				<div>
					<span class="name">${this.name}</span>
					<span class="detail">${this.detail}</span>
				</div>
			</div>
			<slot id="description"></slot>
			<slot id="actions-container" name="actions"></slot>
		`;
  }
};
Fe.styles = [
  P,
  u`
			:host {
				--avatar-size: calc(2em + 4px);
				display: contents;
			}

			slot[name='actions'] {
				--uui-button-border-radius: 50px 50px 50px 50px;
				display: flex;
				align-items: center;
				--uui-button-height: calc(var(--uui-size-2) * 4);
				margin-right: var(--uui-size-2);
			}

			#actions-container {
				opacity: 0;
				transition: opacity 120ms;
			}

			:host(:hover) #actions-container {
				opacity: 1;
			}

			:host(:hover) #actions-container {
				opacity: 1;
			}

			.user-info {
				position: relative;
				display: flex;
				align-items: flex-end;
				gap: var(--uui-size-space-5);
			}

			.user-info div {
				display: flex;
				flex-direction: column;
				min-width: var(--uui-size-60);
			}

			.detail {
				font-size: var(--uui-size-4);
				color: var(--uui-color-text-alt);
				line-height: 1;
			}
		`
];
ii([
  r({ type: String })
], Fe.prototype, "name", 2);
ii([
  r({ type: String })
], Fe.prototype, "detail", 2);
Fe = ii([
  h("umb-history-item")
], Fe);
var fo = Object.getOwnPropertyDescriptor, _o = (e, t, i, s) => {
  for (var a = s > 1 ? void 0 : s ? fo(t, i) : t, o = e.length - 1, n; o >= 0; o--)
    (n = e[o]) && (a = n(a) || a);
  return a;
};
let Vt = class extends c {
  render() {
    return l`<slot></slot> `;
  }
};
Vt.styles = [
  P,
  u`
			:host {
				display: grid;
				grid-template-columns: auto 1fr auto;
				align-items: center;
				--avatar-size: calc(2em + 4px);
				gap: var(--uui-size-6);
				position: relative;
			}

			/** TODO: This doesn't work due to "display:contents" in umb-history-item, but is needed for the way I put the grid together.
			* Find a different solution so we can have the grey line that links each history item together (this is purely a visual effect, no rush)

			::slotted(*) {
				position: relative;
			}

			::slotted(*:not(:last-child)) {
				margin-bottom: calc(2 * var(--uui-size-space-3));
			}
			::slotted(*:not(:last-child))::before {
				content: '';
				border: 1px solid var(--uui-color-border);
				position: absolute;
				display: block;
				height: calc(1.5 * var(--avatar-size));
				top: var(--avatar-size);
				left: calc(-1px + var(--avatar-size) / 2);
			}
			*/
		`
];
Vt = _o([
  h("umb-history-list")
], Vt);
var yo = Object.defineProperty, go = Object.getOwnPropertyDescriptor, ua = (e) => {
  throw TypeError(e);
}, Ye = (e, t, i, s) => {
  for (var a = s > 1 ? void 0 : s ? go(t, i) : t, o = e.length - 1, n; o >= 0; o--)
    (n = e[o]) && (a = (s ? n(t, i, a) : n(a)) || a);
  return s && a && yo(t, i, a), a;
}, ai = (e, t, i) => t.has(e) || ua("Cannot " + i), _t = (e, t, i) => (ai(e, t, "read from private field"), i ? i.call(e) : t.get(e)), Tt = (e, t, i) => t.has(e) ? ua("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), bi = (e, t, i, s) => (ai(e, t, "write to private field"), t.set(e, i), i), $i = (e, t, i) => (ai(e, t, "access private method"), i), Ve, He, at, Ht;
let ve = class extends c {
  constructor() {
    super(...arguments), Tt(this, at), Tt(this, Ve), Tt(this, He), this._style = {};
  }
  set color(e) {
    bi(this, Ve, e), $i(this, at, Ht).call(this);
  }
  get color() {
    return _t(this, Ve) || _t(this, He);
  }
  set name(e) {
    const [t, i] = e ? e.split(" ") : [];
    bi(this, He, i), this._icon = t, $i(this, at, Ht).call(this);
  }
  get name() {
    return this._icon;
  }
  render() {
    return l`<uui-icon name=${$(this._icon)} style=${Os(this._style)}></uui-icon>`;
  }
};
Ve = /* @__PURE__ */ new WeakMap();
He = /* @__PURE__ */ new WeakMap();
at = /* @__PURE__ */ new WeakSet();
Ht = function() {
  const e = _t(this, Ve) || _t(this, He);
  if (!e) {
    this._style = { "--uui-icon-color": "inherit" };
    return;
  }
  const t = e.replace("color-", ""), i = zs(t), s = i ? `var(${i})` : t;
  this._style = { "--uui-icon-color": s };
};
ve.styles = [
  P,
  u`
			:host {
				display: flex;
				justify-content: center;
				align-items: center;
			}
		`
];
Ye([
  p()
], ve.prototype, "_icon", 2);
Ye([
  p()
], ve.prototype, "_style", 2);
Ye([
  r({ type: String })
], ve.prototype, "color", 1);
Ye([
  r({ type: String })
], ve.prototype, "name", 1);
ve = Ye([
  h("umb-icon")
], ve);
var bo = Object.defineProperty, $o = Object.getOwnPropertyDescriptor, pa = (e) => {
  throw TypeError(e);
}, Pt = (e, t, i, s) => {
  for (var a = s > 1 ? void 0 : s ? $o(t, i) : t, o = e.length - 1, n; o >= 0; o--)
    (n = e[o]) && (a = (s ? n(t, i, a) : n(a)) || a);
  return s && a && bo(t, i, a), a;
}, wo = (e, t, i) => t.has(e) || pa("Cannot " + i), Eo = (e, t, i) => t.has(e) ? pa("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), wi = (e, t, i) => (wo(e, t, "access private method"), i), st, ca, da;
let Ge = class extends Ae(c, "") {
  constructor() {
    super(...arguments), Eo(this, st), this.readonly = !1, this.showLabels = !1;
  }
  getFormElement() {
  }
  render() {
    return l`
			<uui-color-swatches
				?readonly=${this.readonly}
				label="Color picker"
				value=${this.value ?? ""}
				@change=${wi(this, st, ca)}>
				${wi(this, st, da).call(this)}
			</uui-color-swatches>
		`;
  }
};
st = /* @__PURE__ */ new WeakSet();
ca = function(e) {
  this.value = e.target.value, this.dispatchEvent(new d());
};
da = function() {
  return this.swatches ? Ms(
    this.swatches,
    (e) => l`
				<uui-color-swatch label=${e.label} value=${e.value} .showLabel=${this.showLabels}></uui-color-swatch>
			`
  ) : w;
};
Pt([
  r({ type: Boolean, reflect: !0 })
], Ge.prototype, "readonly", 2);
Pt([
  r({ type: Boolean })
], Ge.prototype, "showLabels", 2);
Pt([
  r({ type: Array })
], Ge.prototype, "swatches", 2);
Ge = Pt([
  h("umb-input-color")
], Ge);
var xo = Object.getOwnPropertyDescriptor, Co = (e, t, i, s) => {
  for (var a = s > 1 ? void 0 : s ? xo(t, i) : t, o = e.length - 1, n; o >= 0; o--)
    (n = e[o]) && (a = n(a) || a);
  return a;
};
let Nt = class extends qi {
  /**
   * Specifies the date and time type of the input that will be rendered.
   * @type {InputDateType}
   * @enum {InputDateType}
   */
  set type(e) {
    super.type = e;
  }
  get type() {
    return super.type;
  }
  constructor() {
    super(), this.type = "date";
  }
};
Nt.styles = [
  ...qi.styles,
  u`
			input {
				color-scheme: var(--uui-color-scheme, normal);
			}
		`
];
Nt = Co([
  h("umb-input-date")
], Nt);
var So = Object.defineProperty, Po = Object.getOwnPropertyDescriptor, ma = (e) => {
  throw TypeError(e);
}, ne = (e, t, i, s) => {
  for (var a = s > 1 ? void 0 : s ? Po(t, i) : t, o = e.length - 1, n; o >= 0; o--)
    (n = e[o]) && (a = (s ? n(t, i, a) : n(a)) || a);
  return s && a && So(t, i, a), a;
}, si = (e, t, i) => t.has(e) || ma("Cannot " + i), ko = (e, t, i) => (si(e, t, "read from private field"), i ? i.call(e) : t.get(e)), Ei = (e, t, i) => t.has(e) ? ma("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), Oo = (e, t, i, s) => (si(e, t, "write to private field"), t.set(e, i), i), Mo = (e, t, i) => (si(e, t, "access private method"), i), ot, Ft, va;
let B = class extends _e(c, void 0) {
  constructor() {
    super(), Ei(this, Ft), Ei(this, ot), this.name = "Dropdown", this.readonly = !1, this.addValidator(
      "valueMissing",
      () => this.requiredMessage ?? ei,
      () => !this.readonly && !!this.required && (this.value === void 0 || this.value === null || this.value === "")
    );
  }
  set options(e) {
    Oo(this, ot, e), this.value = e?.filter((t) => t.selected).map((t) => t.value).join(", ") ?? void 0;
  }
  get options() {
    return ko(this, ot);
  }
  firstUpdated() {
    this.addFormControlElement(this.shadowRoot.querySelector("uui-select"));
  }
  render() {
    return l`
			<uui-select
				label=${this.localize.term(this.localize.term("general_fieldFor", [this.name]))}
				.placeholder=${this.placeholder ?? ""}
				.options=${this.options ?? []}
				@change=${Mo(this, Ft, va)}
				?readonly=${this.readonly}>
			</uui-select>
		`;
  }
};
ot = /* @__PURE__ */ new WeakMap();
Ft = /* @__PURE__ */ new WeakSet();
va = function(e) {
  e.stopPropagation(), this.value = e.target.value?.toString() ?? void 0, this.dispatchEvent(new d());
};
B.styles = [
  u`
			:host {
				display: block;
			}
		`
];
ne([
  r({ type: Array })
], B.prototype, "options", 1);
ne([
  r({ type: String })
], B.prototype, "placeholder", 2);
ne([
  r({ type: Boolean })
], B.prototype, "multiple", 2);
ne([
  r({ type: String })
], B.prototype, "name", 2);
ne([
  r({ type: Boolean })
], B.prototype, "required", 2);
ne([
  r({ type: String })
], B.prototype, "requiredMessage", 2);
ne([
  r({ type: Boolean, reflect: !0 })
], B.prototype, "readonly", 2);
B = ne([
  h("umb-input-dropdown-list")
], B);
var Ao = Object.defineProperty, Uo = Object.getOwnPropertyDescriptor, fa = (e) => {
  throw TypeError(e);
}, H = (e, t, i, s) => {
  for (var a = s > 1 ? void 0 : s ? Uo(t, i) : t, o = e.length - 1, n; o >= 0; o--)
    (n = e[o]) && (a = (s ? n(t, i, a) : n(a)) || a);
  return s && a && Ao(t, i, a), a;
}, oi = (e, t, i) => t.has(e) || fa("Cannot " + i), m = (e, t, i) => (oi(e, t, "read from private field"), i ? i.call(e) : t.get(e)), Te = (e, t, i) => t.has(e) ? fa("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), Dt = (e, t, i, s) => (oi(e, t, "write to private field"), t.set(e, i), i), $e = (e, t, i) => (oi(e, t, "access private method"), i), Gt, nt, rt, v, se, _a, ya, ga, ba, $a, wa;
let x = class extends _e(
  c
) {
  constructor() {
    super(), Te(this, se), Te(this, Gt, new xt(this, {
      getUniqueOfElement: (e) => e.id,
      getUniqueOfModel: (e) => e,
      identifier: "Umb.SorterIdentifier.InputEntity",
      itemSelector: "uui-ref-node",
      containerSelector: "uui-ref-list",
      onChange: ({ model: e }) => {
        this.selection = e, this.dispatchEvent(new d());
      }
    })), Te(this, nt, 0), this.minMessage = "This field need more items", Te(this, rt, 1 / 0), this.maxMessage = "This field exceeds the allowed amount of items", Te(this, v), this.addValidator(
      "rangeUnderflow",
      () => this.minMessage,
      () => !!this.min && (m(this, v)?.getSelection().length ?? 0) < this.min
    ), this.addValidator(
      "rangeOverflow",
      () => this.maxMessage,
      () => !!this.max && (m(this, v)?.getSelection().length ?? 0) > this.max
    );
  }
  getFormElement() {
  }
  set min(e) {
    Dt(this, nt, e), m(this, v) && (m(this, v).min = e);
  }
  get min() {
    return m(this, nt);
  }
  set max(e) {
    Dt(this, rt, e), m(this, v) && (m(this, v).max = e);
  }
  get max() {
    return m(this, rt);
  }
  set selection(e) {
    m(this, v)?.setSelection(e), m(this, Gt).setModel(e);
  }
  get selection() {
    return m(this, v)?.getSelection() ?? [];
  }
  set value(e) {
    this.selection = Ws(e);
  }
  get value() {
    return this.selection.length > 0 ? this.selection.join(",") : void 0;
  }
  set pickerContext(e) {
    m(this, v) || (Dt(this, v, e ? new e(this) : void 0), $e(this, se, _a).call(this));
  }
  get pickerContext() {
    return m(this, v);
  }
  render() {
    return l`${$e(this, se, $a).call(this)} ${$e(this, se, ba).call(this)}`;
  }
};
Gt = /* @__PURE__ */ new WeakMap();
nt = /* @__PURE__ */ new WeakMap();
rt = /* @__PURE__ */ new WeakMap();
v = /* @__PURE__ */ new WeakMap();
se = /* @__PURE__ */ new WeakSet();
_a = async function() {
  m(this, v) && (m(this, v).min = this.min, m(this, v).max = this.max, this.observe(m(this, v).selection, (e) => this.value = e.join(","), "_observeSelection"), this.observe(m(this, v).selectedItems, (e) => this._items = e, "_observerItems"));
};
ya = function() {
  m(this, v)?.openPicker({
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    // TODO: ignoring this for now to prevent breaking existing functionality.
    // if we want a very generic input it should be possible to pass in picker config
    hideTreeRoot: !0
  });
};
ga = function(e) {
  m(this, v)?.requestRemoveItem(e.unique);
};
ba = function() {
  if (!(this.max === 1 && this.selection && this.selection.length >= this.max))
    return l`
			<uui-button
				id="btn-add"
				look="placeholder"
				@click=${$e(this, se, ya)}
				label=${this.localize.term("general_choose")}></uui-button>
		`;
};
$a = function() {
  if (this._items)
    return l`
			<uui-ref-list>
				${fe(
      this._items,
      (e) => e.unique,
      (e) => $e(this, se, wa).call(this, e)
    )}
			</uui-ref-list>
		`;
};
wa = function(e) {
  if (!e.unique) return;
  const t = this.getIcon?.(e) ?? e.icon ?? "";
  return l`
			<uui-ref-node name=${e.name} id=${e.unique}>
				${b(t, () => l`<umb-icon slot="icon" name=${t}></umb-icon>`)}
				<uui-action-bar slot="actions">
					<uui-button @click=${() => $e(this, se, ga).call(this, e)} label=${this.localize.term("general_remove")}></uui-button>
				</uui-action-bar>
			</uui-ref-node>
		`;
};
x.styles = [
  u`
			#btn-add {
				width: 100%;
			}
		`
];
H([
  r({ type: Number })
], x.prototype, "min", 1);
H([
  r({ type: String, attribute: "min-message" })
], x.prototype, "minMessage", 2);
H([
  r({ type: Number })
], x.prototype, "max", 1);
H([
  r({ attribute: !1 })
], x.prototype, "getIcon", 2);
H([
  r({ type: String, attribute: "min-message" })
], x.prototype, "maxMessage", 2);
H([
  r({ type: Array })
], x.prototype, "selection", 1);
H([
  r({ type: String })
], x.prototype, "value", 1);
H([
  r({ attribute: !1 })
], x.prototype, "pickerContext", 1);
H([
  p()
], x.prototype, "_items", 2);
x = H([
  h("umb-input-entity")
], x);
var Io = Object.defineProperty, To = Object.getOwnPropertyDescriptor, Ea = (e) => {
  throw TypeError(e);
}, kt = (e, t, i, s) => {
  for (var a = s > 1 ? void 0 : s ? To(t, i) : t, o = e.length - 1, n; o >= 0; o--)
    (n = e[o]) && (a = (s ? n(t, i, a) : n(a)) || a);
  return s && a && Io(t, i, a), a;
}, Do = (e, t, i) => t.has(e) || Ea("Cannot " + i), Lo = (e, t, i) => t.has(e) ? Ea("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), xi = (e, t, i) => (Do(e, t, "access private method"), i), lt, Kt;
let Ke = class extends Ae(c, "") {
  constructor() {
    super(...arguments), Lo(this, lt), this.opacity = !1, this.showPalette = !1;
  }
  getFormElement() {
  }
  // HACK: Since `uui-color-picker` doesn't have an option to hide the swatches, we had to get creative.
  // Based on UUI v1.8.0-rc3, the value of `swatches` must be a falsey value to hide them.
  // https://github.com/umbraco/Umbraco.UI/blob/v1.8.0-rc.3/packages/uui-color-picker/lib/uui-color-picker.element.ts#L517
  // However, the object-type for `swatches` is a `string[]` (non-nullable).
  // https://github.com/umbraco/Umbraco.UI/blob/v1.8.0-rc.3/packages/uui-color-picker/lib/uui-color-picker.element.ts#L157
  // To do this, we must omit the `.swatches` attribute, otherwise the default swatches can't be used.
  // So, we've use a `when()` render both configurations. [LK]
  render() {
    const e = this.showPalette ? this.swatches : void 0;
    return b(
      this.showPalette && !e,
      () => l`
				<uui-color-picker
					label="Eye dropper"
					.opacity=${this.opacity}
					.value=${this.value}
					@change=${xi(this, lt, Kt)}>
				</uui-color-picker>
			`,
      () => l`
				<uui-color-picker
					label="Eye dropper"
					.opacity=${this.opacity}
					.swatches=${e}
					.value=${this.value}
					@change=${xi(this, lt, Kt)}>
				</uui-color-picker>
			`
    );
  }
};
lt = /* @__PURE__ */ new WeakSet();
Kt = function(e) {
  e.stopPropagation(), this.value = e.target.value, this.dispatchEvent(new d());
};
kt([
  r({ type: Boolean })
], Ke.prototype, "opacity", 2);
kt([
  r({ type: Boolean })
], Ke.prototype, "showPalette", 2);
kt([
  r({ type: Array })
], Ke.prototype, "swatches", 2);
Ke = kt([
  h("umb-input-eye-dropper")
], Ke);
var zo = Object.defineProperty, Bo = Object.getOwnPropertyDescriptor, xa = (e) => {
  throw TypeError(e);
}, Ot = (e, t, i, s) => {
  for (var a = s > 1 ? void 0 : s ? Bo(t, i) : t, o = e.length - 1, n; o >= 0; o--)
    (n = e[o]) && (a = (s ? n(t, i, a) : n(a)) || a);
  return s && a && zo(t, i, a), a;
}, ni = (e, t, i) => t.has(e) || xa("Cannot " + i), yt = (e, t, i) => (ni(e, t, "read from private field"), i ? i.call(e) : t.get(e)), Lt = (e, t, i) => t.has(e) ? xa("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), Ca = (e, t, i, s) => (ni(e, t, "write to private field"), t.set(e, i), i), Ci = (e, t, i) => (ni(e, t, "access private method"), i), Mt, we, ht, Sa, Pa;
let Pe = class extends c {
  constructor() {
    super(...arguments), Lt(this, ht), Lt(this, Mt, []), Lt(this, we), this.max = 1 / 0;
  }
  set extensionType(e) {
    Ca(this, we, e), Ci(this, ht, Sa).call(this);
  }
  get extensionType() {
    return yt(this, we);
  }
  render() {
    return l`
			<uui-button
				label=${this.localize.term("general_choose")}
				look="placeholder"
				color="default"
				@click=${Ci(this, ht, Pa)}></uui-button>
		`;
  }
};
Mt = /* @__PURE__ */ new WeakMap();
we = /* @__PURE__ */ new WeakMap();
ht = /* @__PURE__ */ new WeakSet();
Sa = function() {
  yt(this, we) && this.observe(Qt.byType(yt(this, we)), (e) => {
    Ca(this, Mt, e.sort((t, i) => t.type.localeCompare(i.type) || t.alias.localeCompare(i.alias)));
  });
};
Pa = async function() {
  const e = await this.getContext(Bi);
  if (!e)
    throw new Error("Modal manager not found.");
  const i = await e.open(this, Us, {
    data: {
      headline: `${this.localize.term("general_choose")}...`,
      items: yt(this, Mt).filter((s) => s.type === this.extensionType).map((s) => ({
        label: s.name,
        value: s.alias,
        description: s.alias,
        icon: s.meta?.icon
        // HACK: Ugly way to get the icon. [LK]
      }))
    }
  }).onSubmit();
  i && (this.value = i, this.dispatchEvent(new d()));
};
Pe.styles = [
  u`
			:host {
				display: flex;
				flex-direction: column;
			}
		`
];
Ot([
  r({ type: String, attribute: "extension-type" })
], Pe.prototype, "extensionType", 1);
Ot([
  r({ attribute: !1 })
], Pe.prototype, "value", 2);
Ot([
  r({ type: Number })
], Pe.prototype, "max", 2);
Pe = Ot([
  h("umb-input-manifest")
], Pe);
var Wo = Object.defineProperty, Ro = Object.getOwnPropertyDescriptor, ka = (e) => {
  throw TypeError(e);
}, D = (e, t, i, s) => {
  for (var a = s > 1 ? void 0 : s ? Ro(t, i) : t, o = e.length - 1, n; o >= 0; o--)
    (n = e[o]) && (a = (s ? n(t, i, a) : n(a)) || a);
  return s && a && Wo(t, i, a), a;
}, ri = (e, t, i) => t.has(e) || ka("Cannot " + i), qo = (e, t, i) => (ri(e, t, "read from private field"), i ? i.call(e) : t.get(e)), Si = (e, t, i) => t.has(e) ? ka("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), Vo = (e, t, i, s) => (ri(e, t, "write to private field"), t.set(e, i), i), Pi = (e, t, i) => (ri(e, t, "access private method"), i), ut, pt, Oa, Ma;
function ki(e) {
  const t = parseInt(e, 10);
  return isNaN(t) ? void 0 : t;
}
let y = class extends _e(c) {
  constructor() {
    super(), Si(this, pt), this.minLabel = "Low value", this.maxLabel = "High value", Si(this, ut), this._minPlaceholder = "", this._maxPlaceholder = "", this.addValidator(
      "patternMismatch",
      () => "The low value must not be exceed the high value",
      () => this._minValue !== void 0 && this._maxValue !== void 0 ? this._minValue > this._maxValue : !1
    );
  }
  set minValue(e) {
    this._minValue = e, this.updateValue();
  }
  get minValue() {
    return this._minValue;
  }
  set maxValue(e) {
    this._maxValue = e, this.updateValue();
  }
  get maxValue() {
    return this._maxValue;
  }
  set validationRange(e) {
    Vo(this, ut, e), this._minPlaceholder = e?.min !== void 0 ? String(e?.min) : "", this._maxPlaceholder = e?.max !== void 0 && e.max !== 1 / 0 ? String(e.max) : "∞";
  }
  get validationRange() {
    return qo(this, ut);
  }
  updateValue() {
    const e = this._minValue || this._maxValue ? (this._minValue ?? "") + "," + (this._maxValue ?? "") : void 0;
    super.value !== e && (super.value = e);
  }
  set value(e) {
    if (e !== this.value) {
      if (e === void 0) {
        this.minValue = this.maxValue = void 0;
        return;
      }
      const t = e.split(/[ ,]+/);
      this.minValue = ki(t[0]), this.maxValue = ki(t[1]);
    }
  }
  get value() {
    return this.minValue || this.maxValue ? (this.minValue || "") + "," + (this.maxValue || "") : void 0;
  }
  firstUpdated() {
    this.shadowRoot?.querySelectorAll("uui-input").forEach((e) => this.addFormControlElement(e));
  }
  focus() {
    return this.shadowRoot?.querySelector("uui-input")?.focus();
  }
  render() {
    return l`
			<uui-input
				type="number"
				label=${this.minLabel}
				min=${$(this.validationRange?.min)}
				max=${$(this.validationRange?.max)}
				placeholder=${this._minPlaceholder}
				.value=${this._minValue}
				@input=${Pi(this, pt, Oa)}></uui-input>
			<b>–</b>
			<uui-input
				type="number"
				label=${this.maxLabel}
				min=${$(this.validationRange?.min)}
				max=${$(this.validationRange?.max)}
				placeholder=${this._maxPlaceholder}
				.value=${this._maxValue}
				@input=${Pi(this, pt, Ma)}></uui-input>
		`;
  }
};
ut = /* @__PURE__ */ new WeakMap();
pt = /* @__PURE__ */ new WeakSet();
Oa = function(e) {
  const t = e.target.value;
  this.minValue = t ? Number(t) : void 0, this.dispatchEvent(new d());
};
Ma = function(e) {
  const t = e.target.value;
  this.maxValue = t ? Number(t) : void 0, this.dispatchEvent(new d());
};
y.styles = u`
		:host {
			display: flex;
			align-items: center;
		}
		b {
			margin: 0 var(--uui-size-space-1);
		}
		:host(:invalid:not([pristine])) {
			color: var(--uui-color-invalid);
		}
		:host(:invalid:not([pristine])) uui-input {
			border-color: var(--uui-color-invalid);
		}
	`;
D([
  r({ type: String, attribute: "min-label" })
], y.prototype, "minLabel", 2);
D([
  r({ type: String, attribute: "max-label" })
], y.prototype, "maxLabel", 2);
D([
  p()
], y.prototype, "_minValue", 2);
D([
  r({ type: Number })
], y.prototype, "minValue", 1);
D([
  p()
], y.prototype, "_maxValue", 2);
D([
  r({ type: Number })
], y.prototype, "maxValue", 1);
D([
  r({ type: Object })
], y.prototype, "validationRange", 1);
D([
  p()
], y.prototype, "_minPlaceholder", 2);
D([
  p()
], y.prototype, "_maxPlaceholder", 2);
D([
  r()
], y.prototype, "value", 1);
y = D([
  h("umb-input-number-range")
], y);
var Ho = Object.defineProperty, No = Object.getOwnPropertyDescriptor, Aa = (e) => {
  throw TypeError(e);
}, Ue = (e, t, i, s) => {
  for (var a = s > 1 ? void 0 : s ? No(t, i) : t, o = e.length - 1, n; o >= 0; o--)
    (n = e[o]) && (a = (s ? n(t, i, a) : n(a)) || a);
  return s && a && Ho(t, i, a), a;
}, li = (e, t, i) => t.has(e) || Aa("Cannot " + i), Fo = (e, t, i) => (li(e, t, "read from private field"), i ? i.call(e) : t.get(e)), Oi = (e, t, i) => t.has(e) ? Aa("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), Go = (e, t, i, s) => (li(e, t, "write to private field"), t.set(e, i), i), Mi = (e, t, i) => (li(e, t, "access private method"), i), ct, dt, Ua, Ia;
let oe = class extends _e(
  c,
  void 0
) {
  constructor() {
    super(), Oi(this, dt), Oi(this, ct, ""), this.list = [], this.readonly = !1, this.addValidator(
      "valueMissing",
      () => this.requiredMessage ?? ei,
      () => !this.readonly && !!this.required && (this.value === void 0 || this.value === null || this.value === "")
    );
  }
  set value(e) {
    Go(this, ct, e);
  }
  get value() {
    return Fo(this, ct);
  }
  render() {
    return this.list ? l`
			<uui-radio-group .value=${this.value} @change=${Mi(this, dt, Ua)} ?readonly=${this.readonly}>
				${fe(
      this.list,
      (e) => e,
      (e) => Mi(this, dt, Ia).call(this, e)
    )}
			</uui-radio-group>
		` : w;
  }
};
ct = /* @__PURE__ */ new WeakMap();
dt = /* @__PURE__ */ new WeakSet();
Ua = function(e) {
  e.stopPropagation(), e.target instanceof Bs && (this.value = e.target.value, this.dispatchEvent(new d()));
};
Ia = function(e) {
  return l`
			<uui-radio
				value=${e.value}
				class=${zi({ invalid: !!e.invalid })}
				label=${e.label + (e.invalid ? ` (${this.localize.term("validation_legacyOption")})` : "")}
				title=${e.invalid ? this.localize.term("validation_legacyOptionDescription") : ""}></uui-radio>
		`;
};
oe.styles = [
  u`
			:host {
				display: block;
			}

			uui-radio {
				&.invalid {
					text-decoration: line-through;
				}
			}
		`
];
Ue([
  r()
], oe.prototype, "value", 1);
Ue([
  r({ type: Array })
], oe.prototype, "list", 2);
Ue([
  r({ type: Boolean, reflect: !0 })
], oe.prototype, "readonly", 2);
Ue([
  r({ type: Boolean })
], oe.prototype, "required", 2);
Ue([
  r({ type: String })
], oe.prototype, "requiredMessage", 2);
oe = Ue([
  h("umb-input-radio-button-list")
], oe);
var Ko = Object.defineProperty, Xo = Object.getOwnPropertyDescriptor, Ta = (e) => {
  throw TypeError(e);
}, J = (e, t, i, s) => {
  for (var a = s > 1 ? void 0 : s ? Xo(t, i) : t, o = e.length - 1, n; o >= 0; o--)
    (n = e[o]) && (a = (s ? n(t, i, a) : n(a)) || a);
  return s && a && Ko(t, i, a), a;
}, Yo = (e, t, i) => t.has(e) || Ta("Cannot " + i), Zo = (e, t, i) => t.has(e) ? Ta("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), gt = (e, t, i) => (Yo(e, t, "access private method"), i), Ee, hi, Da, La;
let W = class extends Ae(c, "") {
  constructor() {
    super(...arguments), Zo(this, Ee), this.label = "", this.min = 0, this.max = 100, this.step = 1, this.valueLow = 0, this.valueHigh = 0, this.enableRange = !1, this.readonly = !1;
  }
  getFormElement() {
  }
  render() {
    return this.enableRange ? gt(this, Ee, La).call(this) : gt(this, Ee, Da).call(this);
  }
};
Ee = /* @__PURE__ */ new WeakSet();
hi = function(e) {
  e.stopPropagation(), this.value = e.target.value, this.dispatchEvent(new d());
};
Da = function() {
  return l`
			<uui-slider
				.label=${this.label}
				.min=${this.min}
				.max=${this.max}
				.step=${this.step}
				.value=${this.valueLow.toString()}
				@change=${gt(this, Ee, hi)}
				?readonly=${this.readonly}>
			</uui-slider>
		`;
};
La = function() {
  return l`
			<uui-range-slider
				.label=${this.label}
				.min=${this.min}
				.max=${this.max}
				.step=${this.step}
				.value="${this.valueLow},${this.valueHigh}"
				@change=${gt(this, Ee, hi)}
				?readonly=${this.readonly}>
			</uui-range-slider>
		`;
};
J([
  r()
], W.prototype, "label", 2);
J([
  r({ type: Number })
], W.prototype, "min", 2);
J([
  r({ type: Number })
], W.prototype, "max", 2);
J([
  r({ type: Number })
], W.prototype, "step", 2);
J([
  r({ type: Number })
], W.prototype, "valueLow", 2);
J([
  r({ type: Number })
], W.prototype, "valueHigh", 2);
J([
  r({ type: Boolean, attribute: "enable-range" })
], W.prototype, "enableRange", 2);
J([
  r({ type: Boolean, reflect: !0 })
], W.prototype, "readonly", 2);
W = J([
  h("umb-input-slider")
], W);
var Jo = Object.defineProperty, Qo = Object.getOwnPropertyDescriptor, za = (e) => {
  throw TypeError(e);
}, N = (e, t, i, s) => {
  for (var a = s > 1 ? void 0 : s ? Qo(t, i) : t, o = e.length - 1, n; o >= 0; o--)
    (n = e[o]) && (a = (s ? n(t, i, a) : n(a)) || a);
  return s && a && Jo(t, i, a), a;
}, ui = (e, t, i) => t.has(e) || za("Cannot " + i), Ai = (e, t, i) => (ui(e, t, "read from private field"), i ? i.call(e) : t.get(e)), Ui = (e, t, i) => t.has(e) ? za("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), jo = (e, t, i, s) => (ui(e, t, "write to private field"), t.set(e, i), i), en = (e, t, i) => (ui(e, t, "access private method"), i), Be, Xt, Ba;
let C = class extends _e(c, "") {
  constructor() {
    super(...arguments), Ui(this, Xt), Ui(this, Be, !1), this.showLabels = !1, this.ariaLabel = null, this.readonly = !1;
  }
  set checked(e) {
    jo(this, Be, e), super.value = e.toString();
  }
  get checked() {
    return Ai(this, Be);
  }
  firstUpdated() {
    this.addFormControlElement(this.shadowRoot.querySelector("uui-toggle"));
  }
  render() {
    const e = this.showLabels ? this.checked ? this.labelOn : this.labelOff : "";
    return l`<uui-toggle
			.checked=${Ai(this, Be)}
			.label=${this.ariaLabel}
			?required=${this.required}
			.requiredMessage=${this.requiredMessage}
			@change=${en(this, Xt, Ba)}
			?readonly=${this.readonly}
			><span>${e}</span>
		</uui-toggle>`;
  }
};
Be = /* @__PURE__ */ new WeakMap();
Xt = /* @__PURE__ */ new WeakSet();
Ba = function(e) {
  e.stopPropagation(), this.checked = e.target.checked, this.dispatchEvent(new d());
};
C.styles = [
  u`
			uui-toggle {
				width: 100%;
			}
		`
];
N([
  r({ type: Boolean })
], C.prototype, "required", 2);
N([
  r({ type: String })
], C.prototype, "requiredMessage", 2);
N([
  r({ type: Boolean })
], C.prototype, "checked", 1);
N([
  r({ type: Boolean })
], C.prototype, "showLabels", 2);
N([
  r({ type: String })
], C.prototype, "labelOn", 2);
N([
  r({ type: String })
], C.prototype, "labelOff", 2);
N([
  r({ type: String, attribute: "aria-label" })
], C.prototype, "ariaLabel", 2);
N([
  r({ type: Boolean, reflect: !0 })
], C.prototype, "readonly", 2);
N([
  p()
], C.prototype, "_currentLabel", 2);
C = N([
  h("umb-input-toggle")
], C);
var tn = Object.defineProperty, an = Object.getOwnPropertyDescriptor, Wa = (e) => {
  throw TypeError(e);
}, re = (e, t, i, s) => {
  for (var a = s > 1 ? void 0 : s ? an(t, i) : t, o = e.length - 1, n; o >= 0; o--)
    (n = e[o]) && (a = (s ? n(t, i, a) : n(a)) || a);
  return s && a && tn(t, i, a), a;
}, sn = (e, t, i) => t.has(e) || Wa("Cannot " + i), on = (e, t, i) => t.has(e) ? Wa("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), Ze = (e, t, i) => (sn(e, t, "access private method"), i), ge, Ra, qa, Va, Ha;
let R = class extends _e(
  c
) {
  constructor() {
    super(...arguments), on(this, ge), this.label = "", this.alias = "", this.required = !1, this.readonly = !1, this.aliasReadonly = !1, this._aliasLocked = !0;
  }
  firstUpdated() {
    this.addValidator(
      "valueMissing",
      () => ei,
      () => this.required && !this.value
    ), this.shadowRoot?.querySelectorAll("uui-input").forEach((e) => this.addFormControlElement(e));
  }
  focus() {
    return this.shadowRoot?.querySelector("uui-input")?.focus();
  }
  render() {
    const e = this.label ?? this.localize.term("placeholders_entername"), t = this.localize.term("placeholders_enterAlias");
    return l`
			<uui-input
				id="name"
				placeholder=${e}
				label=${e}
				.value=${this.value}
				@input=${Ze(this, ge, Ra)}
				?required=${this.required}
				?readonly=${this.readonly}>
				${this.readonly ? l`<span id="alias" class="muted" slot="append">${this.alias}</span>` : l`
							<uui-input-lock
								id="alias"
								name="alias"
								slot="append"
								label=${t}
								placeholder=${t}
								.value=${this.alias}
								?auto-width=${!!this.value}
								?locked=${this._aliasLocked && !this.aliasReadonly}
								?readonly=${this.aliasReadonly}
								?required=${this.required}
								@input=${Ze(this, ge, qa)}
								@blur=${Ze(this, ge, Va)}
								@lock-change=${Ze(this, ge, Ha)}>
							</uui-input-lock>
						`}
			</uui-input>
		`;
  }
};
ge = /* @__PURE__ */ new WeakSet();
Ra = function(e) {
  if (!(e instanceof Vi)) return;
  typeof e.composedPath()[0]?.value == "string" && (this.value = e.target.value.toString(), this.autoGenerateAlias && this._aliasLocked && (this.alias = Ni(this.value)), this.dispatchEvent(new d()));
};
qa = function(e) {
  if (e.stopPropagation(), !(e instanceof Vi)) return;
  const t = e.composedPath()[0];
  typeof t?.value == "string" && (this.alias = t.value, this.dispatchEvent(new d()));
};
Va = function() {
  !this.alias && this._aliasLocked === !1 && (this.alias = Ni(this.value ?? ""), this.dispatchEvent(new d()));
};
Ha = function(e) {
  this._aliasLocked = !this._aliasLocked, !this.alias && this._aliasLocked ? this.autoGenerateAlias = !0 : this.autoGenerateAlias = !1, this._aliasLocked || e.target?.focus();
};
R.styles = u`
		#name {
			width: 100%;
			flex: 1 1 auto;
			align-items: center;
		}

		#alias {
			&.muted {
				opacity: 0.55;
				padding: var(--uui-size-1, 3px) var(--uui-size-space-3, 9px);
			}
		}

		:host(:invalid:not([pristine])) {
			color: var(--uui-color-invalid);
		}
		:host(:invalid:not([pristine])) > uui-input {
			border-color: var(--uui-color-invalid);
		}
	`;
re([
  r({ type: String })
], R.prototype, "label", 2);
re([
  r({ type: String, reflect: !1 })
], R.prototype, "alias", 2);
re([
  r({ type: Boolean, reflect: !0 })
], R.prototype, "required", 2);
re([
  r({ type: Boolean, reflect: !0 })
], R.prototype, "readonly", 2);
re([
  r({ type: Boolean, reflect: !0, attribute: "alias-readonly" })
], R.prototype, "aliasReadonly", 2);
re([
  r({ type: Boolean, attribute: "auto-generate-alias" })
], R.prototype, "autoGenerateAlias", 2);
re([
  p()
], R.prototype, "_aliasLocked", 2);
R = re([
  h("umb-input-with-alias")
], R);
var nn = Object.defineProperty, rn = Object.getOwnPropertyDescriptor, Na = (e) => {
  throw TypeError(e);
}, F = (e, t, i, s) => {
  for (var a = s > 1 ? void 0 : s ? rn(t, i) : t, o = e.length - 1, n; o >= 0; o--)
    (n = e[o]) && (a = (s ? n(t, i, a) : n(a)) || a);
  return s && a && nn(t, i, a), a;
}, Fa = (e, t, i) => t.has(e) || Na("Cannot " + i), ln = (e, t, i) => (Fa(e, t, "read from private field"), i ? i.call(e) : t.get(e)), Ii = (e, t, i) => t.has(e) ? Na("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), de = (e, t, i) => (Fa(e, t, "access private method"), i), Yt, K, pi, Ga, Ka, Xa, Ya, Za;
let S = class extends Ae(c, "") {
  constructor() {
    super(), Ii(this, K), Ii(this, Yt, new xt(this, {
      getUniqueOfElement: (e) => e.value.toString(),
      getUniqueOfModel: (e) => e.value,
      identifier: "Umb.SorterIdentifier.ColorEditor",
      itemSelector: "umb-multiple-color-picker-item-input",
      containerSelector: "#sorter-wrapper",
      onChange: ({ model: e }) => {
        const t = this._items;
        this._items = e, this.requestUpdate("_items", t), this.dispatchEvent(new d());
      }
    })), this.minMessage = "This field need more items", this.maxMessage = "This field exceeds the allowed amount of items", this.disabled = !1, this.readonly = !1, this.showLabels = !1, this._items = [], this.consumeContext(Rs, async (e) => {
      const t = e;
      this.observe(
        await t?.propertyValueByAlias("useLabel"),
        (i) => {
          this.showLabels = !!i;
        },
        "observeUseLabel"
      );
    }), this.addValidator(
      "rangeUnderflow",
      () => this.minMessage,
      () => !!this.min && this._items.length < this.min
    ), this.addValidator(
      "rangeOverflow",
      () => this.maxMessage,
      () => !!this.max && this._items.length > this.max
    );
  }
  set items(e) {
    this._items = e ?? [], ln(this, Yt).setModel(this.items);
  }
  get items() {
    return this._items;
  }
  getFormElement() {
  }
  render() {
    return l`${de(this, K, Ya).call(this)} ${de(this, K, Za).call(this)}`;
  }
};
Yt = /* @__PURE__ */ new WeakMap();
K = /* @__PURE__ */ new WeakSet();
pi = function() {
  this.items = [...this._items, { value: "", label: "" }], this.pristine = !1, this.dispatchEvent(new d()), de(this, K, Ka).call(this);
};
Ga = function(e, t) {
  e.stopPropagation();
  const i = e.currentTarget, s = i.value, a = i.label;
  this.items = this._items.map((o, n) => n === t ? { value: s, label: a } : o), this.dispatchEvent(new d());
};
Ka = async function() {
  await this.updateComplete;
  const e = this.shadowRoot?.querySelectorAll(
    "umb-multiple-color-picker-item-input"
  );
  e && e[e.length - 1].focus();
};
Xa = function(e, t) {
  e.stopPropagation(), this.items = this._items.filter((i, s) => s !== t), this.pristine = !1, this.dispatchEvent(new d());
};
Ya = function() {
  return l`
			<div id="sorter-wrapper">
				${fe(
    this._items,
    (e, t) => t,
    (e, t) => l`
						<umb-multiple-color-picker-item-input
							label=${e.label}
							value=${e.value}
							required
							required-message="Item ${t + 1} is missing a value"
							?disabled=${this.disabled}
							?readonly=${this.readonly}
							?showLabels=${this.showLabels}
							@enter=${de(this, K, pi)}
							@change=${(i) => de(this, K, Ga).call(this, i, t)}
							@delete=${(i) => de(this, K, Xa).call(this, i, t)}>
						</umb-multiple-color-picker-item-input>
					`
  )}
			</div>
		`;
};
Za = function() {
  return this.disabled || this.readonly ? w : l`
			<uui-button
				id="action"
				label=${this.localize.term("general_add")}
				look="placeholder"
				color="default"
				?disabled=${this.disabled}
				@click=${de(this, K, pi)}></uui-button>
		`;
};
S.styles = [
  u`
			#action {
				display: block;
			}

			.--umb-sorter-placeholder {
				position: relative;
				visibility: hidden;
			}
			.--umb-sorter-placeholder::after {
				content: '';
				position: absolute;
				inset: 0px;
				border-radius: var(--uui-border-radius);
				border: 1px dashed var(--uui-color-divider-emphasis);
			}
		`
];
F([
  r({ type: Number })
], S.prototype, "min", 2);
F([
  r({ type: String, attribute: "min-message" })
], S.prototype, "minMessage", 2);
F([
  r({ type: Number })
], S.prototype, "max", 2);
F([
  r({ type: String, attribute: "min-message" })
], S.prototype, "maxMessage", 2);
F([
  r({ type: Boolean, reflect: !0 })
], S.prototype, "disabled", 2);
F([
  r({ type: Boolean, reflect: !0 })
], S.prototype, "readonly", 2);
F([
  r({ type: Boolean })
], S.prototype, "showLabels", 2);
F([
  p()
], S.prototype, "_items", 2);
F([
  r({ type: Array })
], S.prototype, "items", 1);
S = F([
  h("umb-multiple-color-picker-input")
], S);
var hn = Object.defineProperty, un = Object.getOwnPropertyDescriptor, Ja = (e) => {
  throw TypeError(e);
}, Q = (e, t, i, s) => {
  for (var a = s > 1 ? void 0 : s ? un(t, i) : t, o = e.length - 1, n; o >= 0; o--)
    (n = e[o]) && (a = (s ? n(t, i, a) : n(a)) || a);
  return s && a && hn(t, i, a), a;
}, pn = (e, t, i) => t.has(e) || Ja("Cannot " + i), cn = (e, t, i) => t.has(e) ? Ja("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), g = (e, t, i) => (pn(e, t, "access private method"), i), f, Qa, ja, es, ts, is, as, ss, os, ns, rs, ci;
let A = class extends Ae(c, "") {
  constructor() {
    super(...arguments), cn(this, f), this._valueHex = "", this.disabled = !1, this.readonly = !1, this.showLabels = !1;
  }
  set value(e) {
    e.startsWith("#") ? (this._valueHex = e, super.value = e.substring(1)) : (super.value = e, this._valueHex = `#${e}`);
  }
  get value() {
    return super.value;
  }
  async focus() {
    await this.updateComplete, this._input?.focus();
  }
  getFormElement() {
  }
  render() {
    return l`
			<umb-form-validation-message id="validation-message" @invalid=${g(this, f, rs)} @valid=${g(this, f, ns)}>
				<div id="item">
					${this.disabled || this.readonly ? w : l`<uui-icon name="icon-grip"></uui-icon>`}
					<div class="color-wrapper">
						<uui-input
							id="input"
							value=${this.value}
							label=${this.localize.term("general_value")}
							placeholder=${this.localize.term("general_value")}
							required=${this.required}
							required-message="Value is missing"
							@keydown=${g(this, f, is)}
							@input=${g(this, f, ss)}
							@change=${g(this, f, as)}>
							<uui-color-swatch
								slot="prepend"
								label=${this.value}
								value=${this._valueHex}
								@click=${g(this, f, ci)}></uui-color-swatch>
						</uui-input>
						<input aria-hidden="${!0}" type="color" id="color" value=${this.value} @change=${g(this, f, os)} />
					</div>
					${b(
      this.showLabels,
      () => l`
							<uui-input
								label=${this.localize.term("placeholders_label")}
								placeholder=${this.localize.term("placeholders_label")}
								value=${$(this.label)}
								@keydown=${g(this, f, es)}
								@input="${g(this, f, ja)}"
								@change="${g(this, f, ts)}"
								?disabled=${this.disabled}
								?readonly=${this.readonly}></uui-input>
						`
    )}
					${b(
      !this.readonly,
      () => l`
							<uui-button
								compact
								label=${this.localize.term("actions_delete")}
								look="primary"
								?disabled=${this.disabled}
								@click=${g(this, f, Qa)}>
								<uui-icon name="icon-trash"></uui-icon>
							</uui-button>
						`
    )}
				</div>
			</umb-form-validation-message>
		`;
  }
};
f = /* @__PURE__ */ new WeakSet();
Qa = async function() {
  await Wi(this, {
    headline: `${this.localize.term("actions_delete")} ${this.value || ""}`,
    content: this.localize.term("content_nestedContentDeleteItem"),
    color: "danger",
    confirmLabel: this.localize.term("actions_delete")
  }), this.dispatchEvent(new Ri());
};
ja = function(e) {
  e.stopPropagation(), this.label = e.target.value, this.dispatchEvent(new jt());
};
es = function(e) {
  e.stopPropagation();
  const t = e.currentTarget;
  e.key === "Enter" && t.value && this.dispatchEvent(new CustomEvent("enter"));
};
ts = function(e) {
  e.stopPropagation(), this.label = e.target.value, this.dispatchEvent(new d());
};
is = function(e) {
  e.stopPropagation(), e.key === "Enter" && g(this, f, ci).call(this);
};
as = function(e) {
  e.stopPropagation(), this.value = e.target.value, this.dispatchEvent(new d());
};
ss = function(e) {
  e.stopPropagation(), this.value = e.target.value, this.dispatchEvent(new jt());
};
os = function(e) {
  e.stopPropagation(), this.value = this._colorPicker.value, this.dispatchEvent(new d());
};
ns = function(e) {
  e.stopPropagation();
};
rs = function(e) {
  e.stopPropagation();
};
ci = function() {
  this._colorPicker.click();
};
A.styles = [
  u`
			:host {
				display: flex;
				align-items: center;
				margin-bottom: var(--uui-size-space-3);
				gap: var(--uui-size-space-3);
			}

			#item {
				position: relative;
				display: flex;
				gap: var(--uui-size-1);
				align-items: center;
			}
			uui-input {
				flex: 1;
			}

			uui-color-swatch {
				padding: var(--uui-size-1);
			}

			uui-color-swatch:focus-within {
				outline: 2px solid var(--uui-color-selected);
				outline-offset: 0;
				border-radius: var(--uui-border-radius);
			}

			.color-wrapper {
				position: relative;
				flex: 1;
				display: flex;
				flex-direction: column;
			}

			uui-input,
			#validation-message {
				flex: 1;
			}

			input[type='color'] {
				visibility: hidden;
				width: 0px;
				padding: 0;
				margin: 0;
				position: absolute;
			}
		`
];
Q([
  r({ type: String })
], A.prototype, "value", 1);
Q([
  p()
], A.prototype, "_valueHex", 2);
Q([
  r({ type: Boolean, reflect: !0 })
], A.prototype, "disabled", 2);
Q([
  r({ type: Boolean, reflect: !0 })
], A.prototype, "readonly", 2);
Q([
  r({ type: String })
], A.prototype, "label", 2);
Q([
  q("#input")
], A.prototype, "_input", 2);
Q([
  q("#color")
], A.prototype, "_colorPicker", 2);
Q([
  r({ type: Boolean })
], A.prototype, "showLabels", 2);
A = Q([
  h("umb-multiple-color-picker-item-input")
], A);
var dn = Object.defineProperty, mn = Object.getOwnPropertyDescriptor, ls = (e) => {
  throw TypeError(e);
}, j = (e, t, i, s) => {
  for (var a = s > 1 ? void 0 : s ? mn(t, i) : t, o = e.length - 1, n; o >= 0; o--)
    (n = e[o]) && (a = (s ? n(t, i, a) : n(a)) || a);
  return s && a && dn(t, i, a), a;
}, di = (e, t, i) => t.has(e) || ls("Cannot " + i), De = (e, t, i) => (di(e, t, "read from private field"), i ? i.call(e) : t.get(e)), Je = (e, t, i) => t.has(e) ? ls("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), Ti = (e, t, i, s) => (di(e, t, "write to private field"), t.set(e, i), i), me = (e, t, i) => (di(e, t, "access private method"), i), We, mt, vt, X, mi, hs, us, ps, cs, ds;
let U = class extends _e(
  c,
  void 0
) {
  constructor() {
    super(), Je(this, X), Je(this, We, new xt(this, {
      getUniqueOfElement: (e) => e.getAttribute("data-sort-entry-id"),
      getUniqueOfModel: (e) => e,
      identifier: "Umb.SorterIdentifier.MultipleTextString",
      itemSelector: "umb-input-multiple-text-string-item",
      containerSelector: "#sorter-wrapper",
      onChange: ({ model: e }) => {
        const t = this._items;
        this._items = e, this.requestUpdate("_items", t), this.dispatchEvent(new d());
      }
    })), this.minMessage = "This field need more items", this.maxMessage = "This field exceeds the allowed amount of items", Je(this, mt, !1), Je(this, vt, !1), this._items = [], this.addValidator(
      "rangeUnderflow",
      () => this.minMessage,
      () => !!this.min && this._items.length < this.min
    ), this.addValidator(
      "rangeOverflow",
      () => this.maxMessage,
      () => !!this.max && this._items.length > this.max
    );
  }
  set disabled(e) {
    Ti(this, mt, e), e && De(this, We).disable();
  }
  get disabled() {
    return De(this, mt);
  }
  set readonly(e) {
    Ti(this, vt, e), e && De(this, We).disable();
  }
  get readonly() {
    return De(this, vt);
  }
  get items() {
    return this._items;
  }
  set items(e) {
    this.value = e?.length > 0 ? "some value" : "", this._items = e ?? [], De(this, We).setModel(this.items);
  }
  getFormElement() {
  }
  render() {
    return l`<div id="sorter-wrapper">${me(this, X, cs).call(this)}</div>
			${me(this, X, ds).call(this)}`;
  }
};
We = /* @__PURE__ */ new WeakMap();
mt = /* @__PURE__ */ new WeakMap();
vt = /* @__PURE__ */ new WeakMap();
X = /* @__PURE__ */ new WeakSet();
mi = function() {
  this._items = [...this._items, ""], this.pristine = !1, this.dispatchEvent(new d()), me(this, X, us).call(this);
};
hs = function(e, t) {
  e.stopPropagation();
  const s = e.currentTarget.value;
  this._items = this._items.map((a, o) => o === t ? s : a), this.dispatchEvent(new d());
};
us = async function() {
  await this.updateComplete;
  const e = this.shadowRoot?.querySelectorAll(
    "umb-input-multiple-text-string-item"
  );
  e[e.length - 1].focus();
};
ps = function(e, t) {
  e.stopPropagation(), this._items = this._items.filter((i, s) => s !== t), this.pristine = !1, this.dispatchEvent(new d());
};
cs = function() {
  return l`
			${fe(
    this._items,
    (e, t) => t,
    (e, t) => l`
					<umb-input-multiple-text-string-item
						name="item-${t}"
						data-sort-entry-id=${e}
						required
						required-message="Item ${t + 1} is missing a value"
						value=${e}
						?disabled=${this.disabled}
						?readonly=${this.readonly}
						@enter=${me(this, X, mi)}
						@delete=${(i) => me(this, X, ps).call(this, i, t)}
						@input=${(i) => me(this, X, hs).call(this, i, t)}>
					</umb-input-multiple-text-string-item>
				`
  )}
		`;
};
ds = function() {
  return this.disabled || this.readonly ? w : l`
			<uui-button
				color="default"
				id="action"
				label="Add"
				look="placeholder"
				?disabled=${this.disabled}
				@click=${me(this, X, mi)}></uui-button>
		`;
};
U.styles = [
  u`
			#action {
				display: block;
			}

			.--umb-sorter-placeholder {
				position: relative;
				visibility: hidden;
			}
			.--umb-sorter-placeholder::after {
				content: '';
				position: absolute;
				inset: 0px;
				border-radius: var(--uui-border-radius);
				border: 1px dashed var(--uui-color-divider-emphasis);
			}
		`
];
j([
  r({ type: Number })
], U.prototype, "min", 2);
j([
  r({ type: String, attribute: "min-message" })
], U.prototype, "minMessage", 2);
j([
  r({ type: Number })
], U.prototype, "max", 2);
j([
  r({ type: String, attribute: "min-message" })
], U.prototype, "maxMessage", 2);
j([
  r({ type: Boolean, reflect: !0 })
], U.prototype, "disabled", 1);
j([
  r({ type: Boolean, reflect: !0 })
], U.prototype, "readonly", 1);
j([
  p()
], U.prototype, "_items", 2);
j([
  r({ type: Array })
], U.prototype, "items", 1);
U = j([
  h("umb-input-multiple-text-string")
], U);
var vn = Object.defineProperty, fn = Object.getOwnPropertyDescriptor, ms = (e) => {
  throw TypeError(e);
}, At = (e, t, i, s) => {
  for (var a = s > 1 ? void 0 : s ? fn(t, i) : t, o = e.length - 1, n; o >= 0; o--)
    (n = e[o]) && (a = (s ? n(t, i, a) : n(a)) || a);
  return s && a && vn(t, i, a), a;
}, _n = (e, t, i) => t.has(e) || ms("Cannot " + i), yn = (e, t, i) => t.has(e) ? ms("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), ye = (e, t, i) => (_n(e, t, "access private method"), i), ae, vs, fs, _s, ys, gs, bs;
let ke = class extends Ae(c, "") {
  constructor() {
    super(...arguments), yn(this, ae), this.disabled = !1, this.readonly = !1;
  }
  async focus() {
    await this.updateComplete, this._input?.focus();
  }
  getFormElement() {
  }
  render() {
    return l`
			${this.disabled || this.readonly ? w : l`<uui-icon name="icon-grip" class="handle"></uui-icon>`}

			<umb-form-validation-message id="validation-message" @invalid=${ye(this, ae, bs)} @valid=${ye(this, ae, gs)}>
				<uui-input
					id="input"
					label="Value"
					value=${this.value}
					@keydown=${ye(this, ae, _s)}
					@input=${ye(this, ae, fs)}
					@change=${ye(this, ae, ys)}
					?disabled=${this.disabled}
					?readonly=${this.readonly}
					required=${this.required}
					required-message="Value is missing"></uui-input>
			</umb-form-validation-message>

			${b(
      !this.readonly,
      () => l`
					<uui-button
						compact
						label="${this.localize.term("general_remove")} ${this.value}"
						look="outline"
						?disabled=${this.disabled}
						@click=${ye(this, ae, vs)}>
						<uui-icon name="icon-trash"></uui-icon>
					</uui-button>
				`
    )}
		`;
  }
};
ae = /* @__PURE__ */ new WeakSet();
vs = async function() {
  await Wi(this, {
    headline: `Delete ${this.value || "item"}`,
    content: "Are you sure you want to delete this item?",
    color: "danger",
    confirmLabel: "Delete"
  }), this.dispatchEvent(new Ri());
};
fs = function(e) {
  e.stopPropagation();
  const t = e.currentTarget;
  this.value = t.value, this.dispatchEvent(new jt());
};
_s = function(e) {
  e.stopPropagation();
  const t = e.currentTarget;
  e.key === "Enter" && t.value && this.dispatchEvent(new CustomEvent("enter"));
};
ys = function(e) {
  e.stopPropagation();
  const t = e.currentTarget;
  this.value = t.value, this.dispatchEvent(new d());
};
gs = function(e) {
  e.stopPropagation();
};
bs = function(e) {
  e.stopPropagation();
};
ke.styles = [
  u`
			:host {
				display: flex;
				align-items: center;
				margin-bottom: var(--uui-size-space-3);
				gap: var(--uui-size-space-3);
			}

			#validation-message {
				flex: 1;
			}

			#input {
				width: 100%;
			}

			.handle {
				cursor: grab;
			}

			.handle:active {
				cursor: grabbing;
			}
		`
];
At([
  r({ type: Boolean, reflect: !0 })
], ke.prototype, "disabled", 2);
At([
  r({ type: Boolean, reflect: !0 })
], ke.prototype, "readonly", 2);
At([
  q("#input")
], ke.prototype, "_input", 2);
ke = At([
  h("umb-input-multiple-text-string-item")
], ke);
var gn = Object.getOwnPropertyDescriptor, bn = (e, t, i, s) => {
  for (var a = s > 1 ? void 0 : s ? gn(t, i) : t, o = e.length - 1, n; o >= 0; o--)
    (n = e[o]) && (a = n(a) || a);
  return a;
};
let Zt = class extends c {
  render() {
    return l`<slot></slot>`;
  }
};
Zt.styles = [
  P,
  u`
			:host {
				background-color: var(--uui-color-surface);
				display: block;
				border: 1px solid var(--uui-color-border);
				border-radius: var(--uui-border-radius);
				box-shadow: var(--uui-shadow-depth-3);
				overflow: clip;
			}
		`
];
Zt = bn([
  h("umb-popover-layout")
], Zt);
var $n = Object.defineProperty, wn = Object.getOwnPropertyDescriptor, $s = (e) => {
  throw TypeError(e);
}, ws = (e, t, i, s) => {
  for (var a = s > 1 ? void 0 : s ? wn(t, i) : t, o = e.length - 1, n; o >= 0; o--)
    (n = e[o]) && (a = (s ? n(t, i, a) : n(a)) || a);
  return s && a && $n(t, i, a), a;
}, En = (e, t, i) => t.has(e) || $s("Cannot " + i), zt = (e, t, i) => (En(e, t, "read from private field"), i ? i.call(e) : t.get(e)), xn = (e, t, i) => t.has(e) ? $s("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), Re;
let bt = class extends qs(Hi) {
  constructor() {
    super(...arguments), this.icon = "", xn(this, Re, document.createElement("umb-icon"));
  }
  firstUpdated(e) {
    super.firstUpdated(e), this.icon && (zt(this, Re).setAttribute("slot", "icon"), zt(this, Re).setAttribute("name", this.icon), this.appendChild(zt(this, Re)));
  }
};
Re = /* @__PURE__ */ new WeakMap();
bt.styles = [
  ...Hi.styles,
  u`
			:host {
				padding-top: var(--uui-size-3);
				padding-bottom: var(--uui-size-3);
			}
		`
];
ws([
  r({ type: String })
], bt.prototype, "icon", 2);
bt = ws([
  h("umb-ref-item")
], bt);
var Cn = Object.defineProperty, Sn = Object.getOwnPropertyDescriptor, vi = (e, t, i, s) => {
  for (var a = s > 1 ? void 0 : s ? Sn(t, i) : t, o = e.length - 1, n; o >= 0; o--)
    (n = e[o]) && (a = (s ? n(t, i, a) : n(a)) || a);
  return s && a && Cn(t, i, a), a;
};
let Xe = class extends c {
  constructor() {
    super(...arguments), this.look = "default", this.divide = !1;
  }
  render() {
    return l`
			<div class=${zi({ divide: this.divide, compact: this.look === "compact" })}>
				<slot></slot>
			</div>
		`;
  }
};
Xe.styles = [
  u`
			div {
				display: block;
				position: relative;
			}

			::slotted(*) {
				position: relative;
				margin-top: var(--uui-size-space-6);
			}

			.divide ::slotted(*)::before {
				content: '';
				position: absolute;
				top: calc((var(--uui-size-space-6) / 2) * -1);
				height: 0;
				width: 100%;
				border-top: solid 1px var(--uui-color-divider-standalone);
			}

			::slotted(*:first-child) {
				margin-top: 0;
			}

			.divide ::slotted(*:first-child)::before {
				display: none;
			}

			.compact ::slotted(*) {
				margin-top: var(--uui-size-space-3);
			}

			.compact ::slotted(*:first-child) {
				margin-top: 0;
			}

			.compact.divide ::slotted(*)::before {
				display: none;
			}
		`
];
vi([
  r({ type: String })
], Xe.prototype, "look", 2);
vi([
  r({ type: Boolean })
], Xe.prototype, "divide", 2);
Xe = vi([
  h("umb-stack")
], Xe);
var Pn = Object.defineProperty, kn = Object.getOwnPropertyDescriptor, Es = (e) => {
  throw TypeError(e);
}, ee = (e, t, i, s) => {
  for (var a = s > 1 ? void 0 : s ? kn(t, i) : t, o = e.length - 1, n; o >= 0; o--)
    (n = e[o]) && (a = (s ? n(t, i, a) : n(a)) || a);
  return s && a && Pn(t, i, a), a;
}, fi = (e, t, i) => t.has(e) || Es("Cannot " + i), k = (e, t, i) => (fi(e, t, "read from private field"), i ? i.call(e) : t.get(e)), Le = (e, t, i) => t.has(e) ? Es("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), $t = (e, t, i, s) => (fi(e, t, "write to private field"), t.set(e, i), i), z = (e, t, i) => (fi(e, t, "access private method"), i), xe, ft, _, xs, Oe, wt, Cs, Me, _i, Ss, Jt, Ps;
let I = class extends Et {
  constructor() {
    super(...arguments), Le(this, _), this.lock = "none", this.position = "var(--umb-split-panel-initial-position)", Le(this, xe, 0), Le(this, ft, 25), this._hasStartPanel = !1, this._hasEndPanel = !1, Le(this, Oe, !1), Le(this, Me, (e) => {
      e.preventDefault();
      const t = (a) => {
        const { clientX: o } = a, { left: n, width: Ie } = this.mainElement.getBoundingClientRect(), le = Fi(o - n, 0, Ie), L = s(le, Ie);
        $t(this, xe, this.lock === "start" ? L : Ie - L), z(this, _, wt).call(this, L);
      }, i = () => {
        document.removeEventListener("pointermove", t), document.removeEventListener("pointerup", i), this.dispatchEvent(new CustomEvent("position-changed", { detail: { position: this.position } }));
      }, s = (a, o) => {
        const n = this.snap?.split(" ");
        if (!n) return a;
        const le = n.map((L) => {
          let ie = parseFloat(L);
          return L.endsWith("%") && (ie = ie / 100 * o), L.startsWith("-") && (ie = o + ie), ie;
        }).reduce((L, ie) => Math.abs(ie - a) < Math.abs(L - a) ? ie : L);
        return le < a + k(this, ft) && le > a - k(this, ft) && (a = le), a;
      };
      document.addEventListener("pointermove", t, { passive: !0 }), document.addEventListener("pointerup", i);
    });
  }
  disconnectedCallback() {
    super.disconnectedCallback(), z(this, _, _i).call(this);
  }
  updated(e) {
    if (super.updated(e), !!k(this, Oe) && e.has("position")) {
      if (this.lock !== "none") {
        const { width: t } = this.mainElement.getBoundingClientRect();
        let i = parseFloat(this.position);
        this.position.endsWith("%") && (i = i / 100 * t);
        const s = this.lock === "start" ? i : t - i;
        $t(this, xe, s);
      }
      z(this, _, Cs).call(this);
    }
  }
  render() {
    return l`
			<div id="main">
				<slot
					name="start"
					@slotchange=${z(this, _, Jt)}
					style="width: ${this._hasStartPanel ? "100%" : "0"}"></slot>
				<div id="divider">
					<div id="divider-touch-area" tabindex="0" @keydown=${z(this, _, Ps)}></div>
				</div>
				<slot name="end" @slotchange=${z(this, _, Jt)} style="width: ${this._hasEndPanel ? "100%" : "0"}"></slot>
			</div>
		`;
  }
};
xe = /* @__PURE__ */ new WeakMap();
ft = /* @__PURE__ */ new WeakMap();
_ = /* @__PURE__ */ new WeakSet();
xs = function() {
  return this._hasStartPanel && this._hasEndPanel;
};
Oe = /* @__PURE__ */ new WeakMap();
wt = function(e) {
  const { width: t } = this.mainElement.getBoundingClientRect(), s = Fi(e, 0, t) / t * 100;
  this.position = s + "%";
};
Cs = function() {
  let e = this.position, t = "1fr";
  this.lock === "start" && (e = k(this, xe) + "px", t = "1fr"), this.lock === "end" && (e = "1fr", t = k(this, xe) + "px"), this.mainElement.style.gridTemplateColumns = `
      minmax(var(--umb-split-panel-start-min-width), ${e})
      0px
      minmax(var(--umb-split-panel-end-min-width), ${t})
    `;
};
Me = /* @__PURE__ */ new WeakMap();
_i = function() {
  this.dividerTouchAreaElement.removeEventListener("pointerdown", k(this, Me)), this.dividerTouchAreaElement.removeEventListener("touchstart", k(this, Me)), this.dividerElement.style.display = "none", this.mainElement.style.display = "flex", $t(this, Oe, !1);
};
Ss = async function() {
  $t(this, Oe, !0), this.mainElement.style.display = "grid", this.mainElement.style.gridTemplateColumns = `${this.position} 0px 1fr`, this.dividerElement.style.display = "unset", this.dividerTouchAreaElement.addEventListener("pointerdown", k(this, Me)), this.dividerTouchAreaElement.addEventListener("touchstart", k(this, Me), { passive: !1 }), await new Promise((a) => requestAnimationFrame(a));
  const { left: e } = this.shadowRoot.querySelector("#divider").getBoundingClientRect(), { left: t, width: i } = this.mainElement.getBoundingClientRect(), s = (e - t) / i * 100;
  this.position = `${s}%`;
};
Jt = function(e) {
  const t = e.target, i = t.name;
  if (i === "start" && (this._hasStartPanel = t.assignedElements().length > 0), i === "end" && (this._hasEndPanel = t.assignedElements().length > 0), !k(this, _, xs)) {
    k(this, Oe) && z(this, _, _i).call(this);
    return;
  }
  z(this, _, Ss).call(this);
};
Ps = function(e) {
  if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
    const { width: t } = this.mainElement.getBoundingClientRect(), a = (this.dividerElement.getBoundingClientRect().left - this.mainElement.getBoundingClientRect().left) / t * 100, n = 1 * (e.shiftKey ? 10 : 1) * (e.key === "ArrowLeft" ? -1 : 1), le = (a + n) / 100 * this.mainElement.getBoundingClientRect().width;
    z(this, _, wt).call(this, le);
  }
  if (e.key === "Home" || e.key === "End") {
    e.preventDefault();
    const { width: t } = this.mainElement.getBoundingClientRect(), i = e.key === "Home" ? 0 : t;
    z(this, _, wt).call(this, i);
  }
};
I.styles = u`
		:host {
			display: contents;
			--umb-split-panel-initial-position: 50%;
			--umb-split-panel-start-min-width: 0;
			--umb-split-panel-end-min-width: 0;
			--umb-split-panel-divider-touch-area-width: 20px;
			--umb-split-panel-divider-width: 1px;
			--umb-split-panel-divider-color: transparent;
			--umb-split-panel-slot-overflow: hidden;
		}
		slot {
			overflow: var(--umb-split-panel-slot-overflow);
			display: block;
			min-height: 0;
		}
		#main {
			width: 100%;
			height: 100%;
			display: flex;
			position: relative;
			z-index: 0;
			overflow: hidden;
		}
		#divider {
			height: 100%;
			position: relative;
			z-index: 999999;
			display: none;
		}
		#divider-touch-area {
			position: absolute;
			top: 0;
			left: 5px;
			height: 100%;
			width: var(--umb-split-panel-divider-touch-area-width);
			transform: translateX(-50%);
			cursor: col-resize;
		}
		/* Do we want a line that shows the divider? */
		#divider::after {
			content: '';
			position: absolute;
			top: 0;
			left: 50%;
			width: var(--umb-split-panel-divider-width);
			height: 100%;
			transform: round(translateX(-50%));
			background-color: var(--umb-split-panel-divider-color);
			z-index: -1;
		}
	`;
ee([
  q("#main")
], I.prototype, "mainElement", 2);
ee([
  q("#divider-touch-area")
], I.prototype, "dividerTouchAreaElement", 2);
ee([
  q("#divider")
], I.prototype, "dividerElement", 2);
ee([
  r({ type: String })
], I.prototype, "snap", 2);
ee([
  r({ type: String })
], I.prototype, "lock", 2);
ee([
  r({ type: String, reflect: !0 })
], I.prototype, "position", 2);
ee([
  p()
], I.prototype, "_hasStartPanel", 2);
ee([
  p()
], I.prototype, "_hasEndPanel", 2);
I = ee([
  h("umb-split-panel")
], I);
var On = Object.defineProperty, Mn = Object.getOwnPropertyDescriptor, ks = (e) => {
  throw TypeError(e);
}, te = (e, t, i, s) => {
  for (var a = s > 1 ? void 0 : s ? Mn(t, i) : t, o = e.length - 1, n; o >= 0; o--)
    (n = e[o]) && (a = (s ? n(t, i, a) : n(a)) || a);
  return s && a && On(t, i, a), a;
}, An = (e, t, i) => t.has(e) || ks("Cannot " + i), Qe = (e, t, i) => (An(e, t, "read from private field"), i ? i.call(e) : t.get(e)), Un = (e, t, i) => t.has(e) ? ks("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), be;
class Di extends Event {
  constructor() {
    super("selected", { bubbles: !0, composed: !0 });
  }
}
class Li extends Event {
  constructor() {
    super("deselected", { bubbles: !0, composed: !0 });
  }
}
class In extends Event {
  constructor() {
    super("ordered", { bubbles: !0, composed: !0 });
  }
}
class Tn extends Event {
  #e;
  constructor({ itemId: t }) {
    super("sorted", { bubbles: !0, composed: !0 }), this.#e = t;
  }
  getItemId() {
    return this.#e;
  }
}
let T = class extends c {
  constructor() {
    super(), this._items = [], this.columns = [], this.config = {
      allowSelection: !1,
      hideIcon: !1
    }, this.selection = [], this.orderingColumn = "", this.orderingDesc = !1, this._sortable = !1, this._selectionMode = !1, Un(this, be, new xt(this, {
      getUniqueOfElement: (e) => e.dataset.sortableId,
      getUniqueOfModel: (e) => e.id,
      identifier: "Umb.SorterIdentifier.UmbTable",
      itemSelector: "uui-table-row",
      containerSelector: "uui-table",
      onChange: ({ model: e }) => {
        const t = this.items;
        this.items = e, this.requestUpdate("items", t);
      },
      onEnd: ({ item: e }) => {
        this.dispatchEvent(new Tn({ itemId: e.id }));
      }
    })), this._renderRow = (e) => l`
			<uui-table-row
				data-sortable-id=${e.id}
				?selectable="${this.config.allowSelection && !this._sortable}"
				?select-only=${this._selectionMode}
				?selected=${this._isSelected(e.id)}
				@selected=${() => this._selectRow(e.id)}
				@deselected=${() => this._deselectRow(e.id)}>
				${this._renderRowCheckboxCell(e)} ${this.columns.map((t) => this._renderRowCell(t, e))}
			</uui-table-row>
		`, Qe(this, be).disable();
  }
  get items() {
    return this._items;
  }
  set items(e) {
    this._items = e, Qe(this, be).setModel(e);
  }
  get sortable() {
    return this._sortable;
  }
  set sortable(e) {
    const t = this._sortable;
    t !== e && (this._sortable = e, this._sortable ? Qe(this, be).enable() : Qe(this, be).disable(), this.requestUpdate("sortable", t));
  }
  _isSelected(e) {
    return this.selection.includes(e);
  }
  _handleRowCheckboxChange(e, t) {
    e.target.checked ? this._selectRow(t.id) : this._deselectRow(t.id);
  }
  _handleAllRowsCheckboxChange(e) {
    e.target.checked ? this._selectAllRows() : this._deselectAllRows();
  }
  _handleOrderingChange(e) {
    this.orderingDesc = this.orderingColumn === e.alias ? !this.orderingDesc : !1, this.orderingColumn = e.alias, this.dispatchEvent(new In());
  }
  _selectAllRows() {
    this.selection = this.items.map((e) => e.id), this._selectionMode = !0, this.dispatchEvent(new Di());
  }
  _deselectAllRows() {
    this.selection = [], this._selectionMode = !1, this.dispatchEvent(new Li());
  }
  _selectRow(e) {
    this.selection = [...this.selection, e], this._selectionMode = this.selection.length > 0, this.dispatchEvent(new Di());
  }
  _deselectRow(e) {
    this.selection = this.selection.filter((t) => t !== e), this._selectionMode = this.selection.length > 0, this.dispatchEvent(new Li());
  }
  render() {
    return l`
			<uui-table class="uui-text">
				<uui-table-column
					.style=${b(
      !(this.config.allowSelection === !1 && this.config.hideIcon === !0),
      () => "width: 60px"
    )}></uui-table-column>
				<uui-table-head>
					${this._renderHeaderCheckboxCell()} ${this.columns.map((e) => this._renderHeaderCell(e))}
				</uui-table-head>
				${fe(this.items, (e) => e.id, this._renderRow)}
			</uui-table>
		`;
  }
  _renderHeaderCell(e) {
    return l`
			<uui-table-head-cell style="--uui-table-cell-padding: 0 var(--uui-size-5)">
				${e.allowSorting ? l`${this._renderSortingUI(e)}` : l`<span style="text-align:${e.align ?? "left"};">${e.name}</span>`}
			</uui-table-head-cell>
		`;
  }
  _renderSortingUI(e) {
    return l`
			<button
				style="padding: var(--uui-size-5) var(--uui-size-1);"
				@click="${() => this._handleOrderingChange(e)}">
				<span style="text-align:${e.align ?? "left"};">${e.name}</span>
				<uui-symbol-sort ?active=${this.orderingColumn === e.alias} ?descending=${this.orderingDesc}>
				</uui-symbol-sort>
			</button>
		`;
  }
  _renderHeaderCheckboxCell() {
    if (!(this.config.hideIcon && !this.config.allowSelection))
      return l`
			<uui-table-head-cell style="--uui-table-cell-padding: 0; text-align: center;">
				${b(
        this.config.allowSelection,
        () => l` <uui-checkbox
							label="Select All"
							style="padding: var(--uui-size-4) var(--uui-size-5);"
							@change="${this._handleAllRowsCheckboxChange}"
							?checked="${this.selection.length === this.items.length}">
						</uui-checkbox>`
      )}
			</uui-table-head-cell>
		`;
  }
  _renderRowCheckboxCell(e) {
    if (this.sortable === !0)
      return l`<uui-table-cell style="text-align: center;">
				<uui-icon name="icon-grip"></uui-icon>
			</uui-table-cell>`;
    if (!(this.config.hideIcon && !this.config.allowSelection))
      return l`
			<uui-table-cell style="text-align: center;">
				${b(!this.config.hideIcon, () => l`<umb-icon name="${$(e.icon ?? void 0)}"></umb-icon>`)}
				${b(
        this.config.allowSelection,
        () => l`
						<uui-checkbox
							label="Select Row"
							@click=${(t) => t.stopPropagation()}
							@change=${(t) => this._handleRowCheckboxChange(t, e)}
							?checked="${this._isSelected(e.id)}">
						</uui-checkbox>
					`
      )}
			</uui-table-cell>
		`;
  }
  _renderRowCell(e, t) {
    return l`
			<uui-table-cell
				style="--uui-table-cell-padding: 0 var(--uui-size-5); text-align:${e.align ?? "left"}; width: ${e.width || "auto"};">
					${this._renderCellContent(e, t)}
			</uui-table-cell>
		</uui-table-cell>
		`;
  }
  _renderCellContent(e, t) {
    const i = t.data.find((s) => s.columnAlias === e.alias)?.value;
    if (e.elementName) {
      const s = document.createElement(e.elementName);
      return s.column = e, s.item = t, s.value = i, s;
    }
    if (e.labelTemplate) {
      import("@umbraco-cms/backoffice/ufm");
      const s = document.createElement("umb-ufm-render");
      return s.inline = !0, s.markdown = e.labelTemplate, s.value = { value: i }, s;
    }
    return i;
  }
};
be = /* @__PURE__ */ new WeakMap();
T.styles = [
  P,
  u`
			:host {
				height: fit-content;
			}

			:host([sortable]) {
				uui-table-row:hover {
					cursor: grab;
				}

				uui-table-row:active {
					cursor: grabbing;
				}
			}

			uui-table {
				box-shadow: var(--uui-shadow-depth-1);
			}

			uui-table-head {
				position: sticky;
				top: 0;
				z-index: 1;
				background-color: var(--uui-color-surface, #fff);
			}

			uui-table-row uui-checkbox {
				display: none;
			}

			uui-table-row[selectable]:focus umb-icon,
			uui-table-row[selectable]:focus-within umb-icon,
			uui-table-row[selectable]:hover umb-icon,
			uui-table-row[select-only] umb-icon {
				display: none;
			}

			uui-table-row[selectable]:focus uui-checkbox,
			uui-table-row[selectable]:focus-within uui-checkbox,
			uui-table-row[selectable]:hover uui-checkbox,
			uui-table-row[select-only] uui-checkbox {
				display: inline-block;
			}

			uui-table-head-cell:focus,
			uui-table-head-cell:focus-within,
			uui-table-head-cell:hover {
				--uui-symbol-sort-hover: 1;
			}

			uui-table-head-cell button {
				padding: 0;
				background-color: transparent;
				color: inherit;
				border: none;
				cursor: pointer;
				font-weight: inherit;
				font-size: inherit;
				display: inline-flex;
				align-items: center;
				justify-content: space-between;
				width: 100%;
			}

			uui-table-head-cell button > span {
				flex: 1 0 auto;
			}

			uui-table-cell umb-icon {
				vertical-align: top;
			}
		`
];
te([
  r({ type: Array, attribute: !1 })
], T.prototype, "_items", 2);
te([
  r({ type: Array, attribute: !1 })
], T.prototype, "columns", 2);
te([
  r({ type: Object, attribute: !1 })
], T.prototype, "config", 2);
te([
  r({ type: Array, attribute: !1 })
], T.prototype, "selection", 2);
te([
  r({ type: String, attribute: !1 })
], T.prototype, "orderingColumn", 2);
te([
  r({ type: Boolean, attribute: !1 })
], T.prototype, "orderingDesc", 2);
te([
  r({ type: Boolean, reflect: !0 })
], T.prototype, "sortable", 1);
te([
  p()
], T.prototype, "_selectionMode", 2);
T = te([
  h("umb-table")
], T);
export {
  bt as A,
  Xe as B,
  I as C,
  Di as D,
  Li as E,
  In as F,
  Tn as G,
  T as H,
  Ce as U,
  Ne as a,
  E as b,
  Se as c,
  O as d,
  M as e,
  Rt as f,
  qt as g,
  Fe as h,
  Vt as i,
  ve as j,
  Ge as k,
  Nt as l,
  B as m,
  x as n,
  Ke as o,
  Pe as p,
  y as q,
  oe as r,
  W as s,
  C as t,
  R as u,
  S as v,
  A as w,
  U as x,
  ke as y,
  Zt as z
};
//# sourceMappingURL=table.element-WzZp4EZn.js.map
