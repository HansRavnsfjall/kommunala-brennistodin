import { UmbTextStyles as $ } from "@umbraco-cms/backoffice/style";
import { css as u, state as c, property as n, customElement as h, repeat as _e, html as l, nothing as w, query as q, LitElement as tt, ifDefined as _, when as P, styleMap as Qs, map as js, classMap as na } from "@umbraco-cms/backoffice/external/lit";
import { UMB_MODAL_MANAGER_CONTEXT as la, UmbModalElement as er, UMB_ITEM_PICKER_MODAL as tr, umbConfirmModal as ha } from "@umbraco-cms/backoffice/modal";
import { UmbLitElement as p } from "@umbraco-cms/backoffice/lit-element";
import { UMB_NOTIFICATION_CONTEXT as ir } from "@umbraco-cms/backoffice/notification";
import { UmbOpenedEvent as ar, UmbClosedEvent as sr, UmbChangeEvent as d, UmbDeleteEvent as ua, UmbInputEvent as yi } from "@umbraco-cms/backoffice/event";
import { U as rr } from "./entity.context-BLVHjEHR.js";
import { umbExtensionsRegistry as gi } from "@umbraco-cms/backoffice/extension-registry";
import { UmbExtensionsManifestInitializer as or, createExtensionApi as nr } from "@umbraco-cms/backoffice/extension-api";
import { e as lr } from "./extractUmbColorVariable.function-C_Z99zyW.js";
import { UUIFormControlMixin as it, UUIInputElement as ca, UUIRadioElement as hr, UUIInputEvent as pa, UUIRefNodeElement as da } from "@umbraco-cms/backoffice/external/uui";
import { UmbFormControlMixin as ye, UMB_VALIDATION_EMPTY_LOCALIZATION_KEY as bi } from "@umbraco-cms/backoffice/validation";
import { splitStringToArray as ur, generateAlias as va, clamp as ma } from "@umbraco-cms/backoffice/utils";
import { UmbSorterController as Lt } from "@umbraco-cms/backoffice/sorter";
import { b as cr } from "./form-control.mixin-CW-GhKC4.js";
import { UMB_PROPERTY_DATASET_CONTEXT as pr } from "@umbraco-cms/backoffice/property";
import { UmbElementMixin as dr } from "@umbraco-cms/backoffice/element-api";
var vr = Object.defineProperty, mr = Object.getOwnPropertyDescriptor, fa = (e) => {
  throw TypeError(e);
}, zt = (e, t, i, s) => {
  for (var a = s > 1 ? void 0 : s ? mr(t, i) : t, r = e.length - 1, o; r >= 0; r--)
    (o = e[r]) && (a = (s ? o(t, i, a) : o(a)) || a);
  return s && a && vr(t, i, a), a;
}, fr = (e, t, i) => t.has(e) || fa("Cannot " + i), _r = (e, t, i) => t.has(e) ? fa("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), Xe = (e, t, i) => (fr(e, t, "access private method"), i), de, _a, ct, ya;
let Oe = class extends p {
  constructor() {
    super(), _r(this, de), this._modalElementMap = /* @__PURE__ */ new Map(), this._modals = [], this.fillBackground = !1, this.consumeContext(la, (e) => {
      this._modalManager = e, this._observeModals();
    });
  }
  _observeModals() {
    this._modalManager && this.observe(this._modalManager.modals, (e) => {
      Xe(this, de, _a).call(this, e);
    });
  }
  render() {
    return l`
			<uui-modal-container id="container">
				${this._modals.length > 0 ? _e(
      this._modals,
      (e) => e.key,
      (e) => Xe(this, de, ya).call(this, e.key)
    ) : ""}
			</uui-modal-container>
		`;
  }
};
de = /* @__PURE__ */ new WeakSet();
_a = function(e) {
  this.fillBackground = !1;
  const t = this._modals;
  this._modals = e, t.filter((s) => !e.some((a) => a.key === s.key)).forEach((s) => {
    const a = this._modalElementMap.get(s.key);
    a?.removeEventListener("close-end", Xe(this, de, ct).bind(this, s.key)), a?.destroy(), this._modalElementMap.delete(s.key), s.destroy();
  }), this._modals.length !== 0 && this._modals.forEach(async (s) => {
    if (this._modalElementMap.has(s.key)) return;
    const a = new er();
    await a.init(s), a.element?.addEventListener("close-end", Xe(this, de, ct).bind(this, s.key)), s.addEventListener("umb:destroy", Xe(this, de, ct).bind(this, s.key)), this._modalElementMap.set(s.key, a), s.backdropBackground && (this.fillBackground = !0, this.shadowRoot?.getElementById("container")?.style.setProperty("--backdrop-background", s.backdropBackground)), this.requestUpdate("_modalElementMap");
  });
};
ct = function(e) {
  this._modalManager?.remove(e);
};
ya = function(e) {
  const t = this._modalElementMap.get(e);
  return t ? t.render() : w;
};
Oe.styles = [
  $,
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
zt([
  c()
], Oe.prototype, "_modalElementMap", 2);
zt([
  c()
], Oe.prototype, "_modals", 2);
zt([
  n({ type: Boolean, reflect: !0, attribute: "fill-background" })
], Oe.prototype, "fillBackground", 2);
Oe = zt([
  h("umb-backoffice-modal-container")
], Oe);
var yr = Object.defineProperty, gr = Object.getOwnPropertyDescriptor, Wt = (e, t, i, s) => {
  for (var a = s > 1 ? void 0 : s ? gr(t, i) : t, r = e.length - 1, o; r >= 0; r--)
    (o = e[r]) && (a = (s ? o(t, i, a) : o(a)) || a);
  return s && a && yr(t, i, a), a;
};
let Me = class extends p {
  constructor() {
    super(), this.consumeContext(ir, (e) => {
      this._notificationContext = e, this._observeNotifications();
    });
  }
  _observeNotifications() {
    this._notificationContext && this.observe(this._notificationContext.notifications, (e) => {
      this._notifications = e, this._notificationsElement?.hidePopover?.(), this._notificationsElement?.showPopover?.(), this._announceNewest(this._notifications);
    });
  }
  _getNotificationText(e) {
    return (e._data ?? {}).message ?? "";
  }
  _announce(e) {
    this._srLive && (this._srLive.textContent = "u00A0", setTimeout(() => {
      this._srLive.textContent = e || "";
    }, 0));
  }
  _announceNewest(e) {
    const t = e?.[e.length - 1];
    t && this._announce(this._getNotificationText(t));
  }
  render() {
    return l`
			<uui-toast-notification-container bottom-up id="notifications" popover="manual">
				${this._notifications ? _e(
      this._notifications,
      (e) => e.key,
      (e) => l`${e.element} `
    ) : ""}
			</uui-toast-notification-container>
			<div id="sr-live" aria-live="assertive" aria-role="true"></div>
		`;
  }
};
Me.styles = [
  $,
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
			#sr-live {
				position: absolute;
				width: 1px;
				height: 1px;
				padding: 0;
				margin: -1px;
				overflow: hidden;
				white-space: nowrap;
				clip: rect(0 0 0 0);
				clip-path: inset(50%);
				border: 0;
			}
		`
];
Wt([
  q("#notifications")
], Me.prototype, "_notificationsElement", 2);
Wt([
  q("#sr-live")
], Me.prototype, "_srLive", 2);
Wt([
  c()
], Me.prototype, "_notifications", 2);
Me = Wt([
  h("umb-backoffice-notification-container")
], Me);
var br = Object.defineProperty, $r = Object.getOwnPropertyDescriptor, Bt = (e, t, i, s) => {
  for (var a = s > 1 ? void 0 : s ? $r(t, i) : t, r = e.length - 1, o; r >= 0; r--)
    (o = e[r]) && (a = (s ? o(t, i, a) : o(a)) || a);
  return s && a && br(t, i, a), a;
};
let Ae = class extends tt {
  render() {
    return l`<uui-badge color=${_(this.color)} look=${_(this.look)} ?attention=${this.attention}
			><slot></slot
		></uui-badge>`;
  }
};
Ae.styles = [
  $,
  u`
			:host {
				position: absolute;
				anchor-name: --umb-badge-anchor;
				/** because inset has no effect on uui-badge in this case, we then apply it here: */
				inset: var(--uui-badge-inset, -8px -8px auto auto);
			}

			@supports (position-anchor: --my-name) {
				uui-badge {
					position: fixed;
					position-anchor: --umb-badge-anchor;
					z-index: 1;
					top: anchor(top);
					right: anchor(right);
				}
			}
		`
];
Bt([
  n({ type: String })
], Ae.prototype, "color", 2);
Bt([
  n({ type: String })
], Ae.prototype, "look", 2);
Bt([
  n({ type: Boolean })
], Ae.prototype, "attention", 2);
Ae = Bt([
  h("umb-badge")
], Ae);
var wr = Object.defineProperty, xr = Object.getOwnPropertyDescriptor, ga = (e) => {
  throw TypeError(e);
}, V = (e, t, i, s) => {
  for (var a = s > 1 ? void 0 : s ? xr(t, i) : t, r = e.length - 1, o; r >= 0; r--)
    (o = e[r]) && (a = (s ? o(t, i, a) : o(a)) || a);
  return s && a && wr(t, i, a), a;
}, ba = (e, t, i) => t.has(e) || ga("Cannot " + i), ue = (e, t, i) => (ba(e, t, "read from private field"), i ? i.call(e) : t.get(e)), Gt = (e, t, i) => t.has(e) ? ga("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), Kt = (e, t, i) => (ba(e, t, "access private method"), i), ce, pt, Ve, dt;
let x = class extends tt {
  constructor() {
    super(...arguments), Gt(this, Ve), this.headline = "", this.headerTransparent = !1, this.loading = !1, this._headerSlotHasChildren = !1, this._navigationSlotHasChildren = !1, this._actionsMenuSlotHasChildren = !1, this._footerSlotHasChildren = !1, this._actionsSlotHasChildren = !1, Gt(this, ce, (e) => e.target.assignedNodes({ flatten: !0 }).length > 0), Gt(this, pt, () => {
      this._scrollContainer && this.toggleAttribute("scrolling", this._scrollContainer.scrollTop > 0);
    });
  }
  connectedCallback() {
    super.connectedCallback(), this.headerTransparent && requestAnimationFrame(() => {
      this._scrollContainer?.addEventListener("scroll", ue(this, pt));
    });
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this._scrollContainer?.removeEventListener("scroll", ue(this, pt));
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
      this._headerSlotHasChildren = ue(this, ce).call(this, e), Kt(this, Ve, dt).call(this, e.target, this._headerSlotHasChildren);
    }}></slot>
				<slot
					id="action-menu-slot"
					name="action-menu"
					@slotchange=${(e) => {
      this._actionsMenuSlotHasChildren = ue(this, ce).call(this, e), Kt(this, Ve, dt).call(this, e.target, this._actionsMenuSlotHasChildren);
    }}></slot>
				<slot
					id="navigation-slot"
					name="navigation"
					@slotchange=${(e) => {
      this._navigationSlotHasChildren = ue(this, ce).call(this, e), Kt(this, Ve, dt).call(this, e.target, this._navigationSlotHasChildren);
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
      this._footerSlotHasChildren = ue(this, ce).call(this, e);
    }}></slot>
				<slot
					name="actions"
					slot="actions"
					@slotchange=${(e) => {
      this._actionsSlotHasChildren = ue(this, ce).call(this, e);
    }}></slot>
			</umb-footer-layout>
		`;
  }
};
ce = /* @__PURE__ */ new WeakMap();
pt = /* @__PURE__ */ new WeakMap();
Ve = /* @__PURE__ */ new WeakSet();
dt = function(e, t) {
  e.style.display = t ? "flex" : "none";
};
x.styles = [
  $,
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
				padding-top: var(--uui-size-space-2);
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
], x.prototype, "_scrollContainer", 2);
V([
  n()
], x.prototype, "headline", 2);
V([
  n({ type: Boolean, reflect: !0, attribute: "header-transparent" })
], x.prototype, "headerTransparent", 2);
V([
  n({ type: Boolean })
], x.prototype, "loading", 2);
V([
  c()
], x.prototype, "_headerSlotHasChildren", 2);
V([
  c()
], x.prototype, "_navigationSlotHasChildren", 2);
V([
  c()
], x.prototype, "_actionsMenuSlotHasChildren", 2);
V([
  c()
], x.prototype, "_footerSlotHasChildren", 2);
V([
  c()
], x.prototype, "_actionsSlotHasChildren", 2);
x = V([
  h("umb-body-layout")
], x);
var Er = Object.defineProperty, Cr = Object.getOwnPropertyDescriptor, $a = (e) => {
  throw TypeError(e);
}, Rt = (e, t, i, s) => {
  for (var a = s > 1 ? void 0 : s ? Cr(t, i) : t, r = e.length - 1, o; r >= 0; r--)
    (o = e[r]) && (a = (s ? o(t, i, a) : o(a)) || a);
  return s && a && Er(t, i, a), a;
}, Sr = (e, t, i) => t.has(e) || $a("Cannot " + i), Pr = (e, t, i) => t.has(e) ? $a("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), kr = (e, t, i) => (Sr(e, t, "access private method"), i), ei, wa;
let Ue = class extends tt {
  constructor() {
    super(...arguments), Pr(this, ei), this.language = "", this.copy = !1, this._copyState = "idle";
  }
  async copyCode() {
    const e = this.textContent;
    e && (await navigator.clipboard.writeText(e), this._copyState = "success", setTimeout(() => {
      this._copyState = "idle";
    }, 2e3));
  }
  render() {
    return l`
			${kr(this, ei, wa).call(this)}
			<pre><uui-scroll-container><code><slot></slot></code></uui-scroll-container></pre>
		`;
  }
};
ei = /* @__PURE__ */ new WeakSet();
wa = function() {
  if (!(!this.language && !this.copy))
    return l`
			<div id="header">
				<span id="lang">${this.language}</span>
				${P(
      this.copy,
      () => l`
						<uui-button color=${this._copyState === "idle" ? "default" : "positive"} @click=${this.copyCode}>
							${P(
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
Ue.styles = [
  $,
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
Rt([
  n()
], Ue.prototype, "language", 2);
Rt([
  n({ type: Boolean })
], Ue.prototype, "copy", 2);
Rt([
  c()
], Ue.prototype, "_copyState", 2);
Ue = Rt([
  h("umb-code-block")
], Ue);
var Or = Object.defineProperty, Mr = Object.getOwnPropertyDescriptor, xa = (e) => {
  throw TypeError(e);
}, X = (e, t, i, s) => {
  for (var a = s > 1 ? void 0 : s ? Mr(t, i) : t, r = e.length - 1, o; r >= 0; r--)
    (o = e[r]) && (a = (s ? o(t, i, a) : o(a)) || a);
  return s && a && Or(t, i, a), a;
}, $i = (e, t, i) => t.has(e) || xa("Cannot " + i), Ri = (e, t, i) => ($i(e, t, "read from private field"), i ? i.call(e) : t.get(e)), qi = (e, t, i) => t.has(e) ? xa("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), Xt = (e, t, i, s) => ($i(e, t, "write to private field"), t.set(e, i), i), Ar = (e, t, i) => ($i(e, t, "access private method"), i), pe, ti, Ea;
let O = class extends p {
  constructor() {
    super(...arguments), qi(this, ti), qi(this, pe, !1), this.look = "default", this.color = "default", this.placement = "bottom-start", this.compact = !1, this.hideExpand = !1;
  }
  get open() {
    return Ri(this, pe);
  }
  set open(e) {
    Xt(this, pe, e), e === !0 && this.popoverContainerElement ? this.openDropdown() : this.closeDropdown();
  }
  openDropdown() {
    this.popoverContainerElement?.showPopover(), Xt(this, pe, !0);
  }
  closeDropdown() {
    this.popoverContainerElement?.hidePopover(), Xt(this, pe, !1);
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
				${P(
      !this.hideExpand,
      () => l`<uui-symbol-expand id="symbol-expand" .open=${Ri(this, pe)}></uui-symbol-expand>`
    )}
			</uui-button>
			<uui-popover-container id="dropdown-popover" .placement=${this.placement} @toggle=${Ar(this, ti, Ea)}>
				<umb-popover-layout>
					<slot></slot>
				</umb-popover-layout>
			</uui-popover-container>
		`;
  }
};
pe = /* @__PURE__ */ new WeakMap();
ti = /* @__PURE__ */ new WeakSet();
Ea = function(e) {
  this.open = e.newState === "open", this.open ? this.dispatchEvent(new ar()) : this.dispatchEvent(new sr());
};
O.styles = [
  $,
  u`
			#dropdown-button {
				min-width: max-content;
				height: 100%;
			}
			:host(:not([hide-expand]):not([compact])) #dropdown-button {
				--uui-button-padding-right-factor: 2;
			}

			:host(:not([compact])) #symbol-expand {
				margin-left: var(--uui-size-space-2);
			}
		`
];
X([
  n({ type: Boolean, reflect: !0 })
], O.prototype, "open", 1);
X([
  n()
], O.prototype, "label", 2);
X([
  n()
], O.prototype, "look", 2);
X([
  n()
], O.prototype, "color", 2);
X([
  n()
], O.prototype, "placement", 2);
X([
  n({ type: Boolean })
], O.prototype, "compact", 2);
X([
  n({ type: Boolean, attribute: "hide-expand" })
], O.prototype, "hideExpand", 2);
X([
  q("#dropdown-popover")
], O.prototype, "popoverContainerElement", 2);
O = X([
  h("umb-dropdown")
], O);
var Ur = Object.defineProperty, Ir = Object.getOwnPropertyDescriptor, Ca = (e) => {
  throw TypeError(e);
}, oe = (e, t, i, s) => {
  for (var a = s > 1 ? void 0 : s ? Ir(t, i) : t, r = e.length - 1, o; r >= 0; r--)
    (o = e[r]) && (a = (s ? o(t, i, a) : o(a)) || a);
  return s && a && Ur(t, i, a), a;
}, wi = (e, t, i) => t.has(e) || Ca("Cannot " + i), kt = (e, t, i) => (wi(e, t, "read from private field"), i ? i.call(e) : t.get(e)), st = (e, t, i) => t.has(e) ? Ca("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), Sa = (e, t, i, s) => (wi(e, t, "write to private field"), t.set(e, i), i), xe = (e, t, i) => (wi(e, t, "access private method"), i), vt, Ot, Mt, ie, ii, Pa, ka, Oa, Ma;
let W = class extends p {
  constructor() {
    super(), st(this, ie), this._numberOfActions = 0, st(this, vt, new rr(this)), st(this, Ot, !1), st(this, Mt, !1), new IntersectionObserver(
      (t) => {
        t.forEach((i) => {
          i.isIntersecting && (Sa(this, Ot, !0), xe(this, ie, ii).call(this));
        });
      },
      {
        root: null,
        // Use the viewport as the root
        threshold: 0.1
        // Trigger when at least 10% of the element is visible
      }
    ).observe(this);
  }
  updated(e) {
    e.has("entityType") && e.has("unique") && (kt(this, vt).setEntityType(this.entityType), kt(this, vt).setUnique(this.unique ?? null), xe(this, ie, ii).call(this));
  }
  render() {
    return this._numberOfActions === 0 ? w : l`<uui-action-bar slot="actions">${xe(this, ie, Oa).call(this)}${xe(this, ie, Ma).call(this)}</uui-action-bar>`;
  }
};
vt = /* @__PURE__ */ new WeakMap();
Ot = /* @__PURE__ */ new WeakMap();
Mt = /* @__PURE__ */ new WeakMap();
ie = /* @__PURE__ */ new WeakSet();
ii = function() {
  this.entityType && this.unique !== void 0 && kt(this, Ot) && (kt(this, Mt) || (new or(
    this,
    gi,
    "entityAction",
    (e) => e.forEntityTypes.includes(this.entityType),
    async (e) => {
      this._numberOfActions = e.length;
      const t = this._firstActionManifest;
      this._firstActionManifest = this._numberOfActions > 0 ? e[0].manifest : void 0, await xe(this, ie, Pa).call(this), this.requestUpdate("_firstActionManifest", t);
    },
    "umbEntityActionsObserver"
  ), Sa(this, Mt, !0)));
};
Pa = async function() {
  if (!this._firstActionManifest) return;
  const e = this._firstActionApi;
  this._firstActionApi = await nr(this, this._firstActionManifest, [
    { unique: this.unique, entityType: this.entityType, meta: this._firstActionManifest.meta }
  ]), this._firstActionApi && (this._firstActionApi.manifest = this._firstActionManifest, this._firstActionHref = await this._firstActionApi.getHref()), this.requestUpdate("_firstActionApi", e);
};
ka = async function(e) {
  this._firstActionHref || (e.stopPropagation(), await this._firstActionApi?.execute().catch(() => {
  }));
};
Oa = function() {
  return this._numberOfActions === 1 ? w : l`
			<umb-entity-actions-dropdown compact .label=${this.localize.term("actions_viewActionsFor", this.label)}>
				<uui-symbol-more slot="label"></uui-symbol-more>
			</umb-entity-actions-dropdown>
		`;
};
Ma = function() {
  return !this._firstActionApi || !this._firstActionManifest ? w : l`
			<uui-button
				label=${this.localize.string(this._firstActionManifest.meta.label, this.label)}
				data-mark=${"entity-action:" + this._firstActionManifest.alias}
				href=${_(this._firstActionHref)}
				@click=${xe(this, ie, ka)}>
				<umb-icon name=${_(this._firstActionManifest.meta.icon)}></umb-icon>
			</uui-button>
		`;
};
W.styles = [
  u`
			uui-scroll-container {
				max-height: 700px;
			}
		`
];
oe([
  n({ type: String, attribute: "entity-type" })
], W.prototype, "entityType", 2);
oe([
  n({ type: String })
], W.prototype, "unique", 2);
oe([
  n({ type: String })
], W.prototype, "label", 2);
oe([
  c()
], W.prototype, "_numberOfActions", 2);
oe([
  c()
], W.prototype, "_firstActionManifest", 2);
oe([
  c()
], W.prototype, "_firstActionApi", 2);
oe([
  c()
], W.prototype, "_firstActionHref", 2);
W = oe([
  h("umb-entity-actions-bundle")
], W);
var Tr = Object.getOwnPropertyDescriptor, Dr = (e, t, i, s) => {
  for (var a = s > 1 ? void 0 : s ? Tr(t, i) : t, r = e.length - 1, o; r >= 0; r--)
    (o = e[r]) && (a = o(a) || a);
  return a;
};
let ai = class extends tt {
  render() {
    return l`
			<slot></slot>
			<slot id="actions" name="actions"></slot>
		`;
  }
};
ai.styles = [
  $,
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
ai = Dr([
  h("umb-footer-layout")
], ai);
var Lr = Object.getOwnPropertyDescriptor, zr = (e, t, i, s) => {
  for (var a = s > 1 ? void 0 : s ? Lr(t, i) : t, r = e.length - 1, o; r >= 0; r--)
    (o = e[r]) && (a = o(a) || a);
  return a;
};
const Wr = {
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
gi.register(Wr);
let si = class extends p {
  render() {
    return l`
			<uui-button
				look="primary"
				label=${_(this.manifest?.meta.label)}
				href=${_(this.manifest?.meta.href)}
				compact>
				<umb-icon name=${_(this.manifest?.meta.icon)}></umb-icon>
			</uui-button>
		`;
  }
};
si.styles = [
  $,
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
si = zr([
  h("umb-header-app-button")
], si);
var Br = Object.defineProperty, Rr = Object.getOwnPropertyDescriptor, xi = (e, t, i, s) => {
  for (var a = s > 1 ? void 0 : s ? Rr(t, i) : t, r = e.length - 1, o; r >= 0; r--)
    (o = e[r]) && (a = (s ? o(t, i, a) : o(a)) || a);
  return s && a && Br(t, i, a), a;
};
let Ze = class extends p {
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
Ze.styles = [
  $,
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
xi([
  n({ type: String })
], Ze.prototype, "name", 2);
xi([
  n({ type: String })
], Ze.prototype, "detail", 2);
Ze = xi([
  h("umb-history-item")
], Ze);
var qr = Object.getOwnPropertyDescriptor, Vr = (e, t, i, s) => {
  for (var a = s > 1 ? void 0 : s ? qr(t, i) : t, r = e.length - 1, o; r >= 0; r--)
    (o = e[r]) && (a = o(a) || a);
  return a;
};
let ri = class extends p {
  render() {
    return l`<slot></slot> `;
  }
};
ri.styles = [
  $,
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
ri = Vr([
  h("umb-history-list")
], ri);
var Hr = Object.defineProperty, Nr = Object.getOwnPropertyDescriptor, Aa = (e) => {
  throw TypeError(e);
}, at = (e, t, i, s) => {
  for (var a = s > 1 ? void 0 : s ? Nr(t, i) : t, r = e.length - 1, o; r >= 0; r--)
    (o = e[r]) && (a = (s ? o(t, i, a) : o(a)) || a);
  return s && a && Hr(t, i, a), a;
}, Ei = (e, t, i) => t.has(e) || Aa("Cannot " + i), At = (e, t, i) => (Ei(e, t, "read from private field"), i ? i.call(e) : t.get(e)), Yt = (e, t, i) => t.has(e) ? Aa("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), Vi = (e, t, i, s) => (Ei(e, t, "write to private field"), t.set(e, i), i), Hi = (e, t, i) => (Ei(e, t, "access private method"), i), Ye, Je, mt, oi;
let fe = class extends p {
  constructor() {
    super(...arguments), Yt(this, mt), Yt(this, Ye), Yt(this, Je), this._style = {};
  }
  set color(e) {
    Vi(this, Ye, e), Hi(this, mt, oi).call(this);
  }
  get color() {
    return At(this, Ye) || At(this, Je);
  }
  set name(e) {
    const [t, i] = e ? e.split(" ") : [];
    Vi(this, Je, i), this._icon = t, Hi(this, mt, oi).call(this);
  }
  get name() {
    return this._icon;
  }
  render() {
    return l`<uui-icon name=${_(this._icon)} style=${Qs(this._style)}></uui-icon>`;
  }
};
Ye = /* @__PURE__ */ new WeakMap();
Je = /* @__PURE__ */ new WeakMap();
mt = /* @__PURE__ */ new WeakSet();
oi = function() {
  const e = At(this, Ye) || At(this, Je);
  if (!e) {
    this._style = { "--uui-icon-color": "inherit" };
    return;
  }
  const t = e.replace("color-", ""), i = lr(t), s = i ? `var(${i})` : t;
  this._style = { "--uui-icon-color": s };
};
fe.styles = [
  $,
  u`
			:host {
				display: flex;
				justify-content: center;
				align-items: center;
			}
		`
];
at([
  c()
], fe.prototype, "_icon", 2);
at([
  c()
], fe.prototype, "_style", 2);
at([
  n({ type: String })
], fe.prototype, "color", 1);
at([
  n({ type: String })
], fe.prototype, "name", 1);
fe = at([
  h("umb-icon")
], fe);
var Fr = Object.defineProperty, Gr = Object.getOwnPropertyDescriptor, Ua = (e) => {
  throw TypeError(e);
}, qt = (e, t, i, s) => {
  for (var a = s > 1 ? void 0 : s ? Gr(t, i) : t, r = e.length - 1, o; r >= 0; r--)
    (o = e[r]) && (a = (s ? o(t, i, a) : o(a)) || a);
  return s && a && Fr(t, i, a), a;
}, Kr = (e, t, i) => t.has(e) || Ua("Cannot " + i), Xr = (e, t, i) => t.has(e) ? Ua("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), Ni = (e, t, i) => (Kr(e, t, "access private method"), i), ft, Ia, Ta;
let Qe = class extends it(p, "") {
  constructor() {
    super(...arguments), Xr(this, ft), this.readonly = !1, this.showLabels = !1;
  }
  getFormElement() {
  }
  render() {
    return l`
			<uui-color-swatches
				?readonly=${this.readonly}
				label="Color picker"
				value=${this.value ?? ""}
				@change=${Ni(this, ft, Ia)}>
				${Ni(this, ft, Ta).call(this)}
			</uui-color-swatches>
		`;
  }
};
ft = /* @__PURE__ */ new WeakSet();
Ia = function(e) {
  this.value = e.target.value, this.dispatchEvent(new d());
};
Ta = function() {
  return this.swatches ? js(
    this.swatches,
    (e) => l`
				<uui-color-swatch label=${e.label} value=${e.value} .showLabel=${this.showLabels}></uui-color-swatch>
			`
  ) : w;
};
qt([
  n({ type: Boolean, reflect: !0 })
], Qe.prototype, "readonly", 2);
qt([
  n({ type: Boolean })
], Qe.prototype, "showLabels", 2);
qt([
  n({ type: Array })
], Qe.prototype, "swatches", 2);
Qe = qt([
  h("umb-input-color")
], Qe);
var Yr = Object.getOwnPropertyDescriptor, Jr = (e, t, i, s) => {
  for (var a = s > 1 ? void 0 : s ? Yr(t, i) : t, r = e.length - 1, o; r >= 0; r--)
    (o = e[r]) && (a = o(a) || a);
  return a;
};
let ni = class extends ca {
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
ni.styles = [
  ...ca.styles,
  u`
			input {
				color-scheme: var(--uui-color-scheme, normal);
			}
		`
];
ni = Jr([
  h("umb-input-date")
], ni);
var Zr = Object.defineProperty, Qr = Object.getOwnPropertyDescriptor, Da = (e) => {
  throw TypeError(e);
}, ne = (e, t, i, s) => {
  for (var a = s > 1 ? void 0 : s ? Qr(t, i) : t, r = e.length - 1, o; r >= 0; r--)
    (o = e[r]) && (a = (s ? o(t, i, a) : o(a)) || a);
  return s && a && Zr(t, i, a), a;
}, Ci = (e, t, i) => t.has(e) || Da("Cannot " + i), jr = (e, t, i) => (Ci(e, t, "read from private field"), i ? i.call(e) : t.get(e)), Fi = (e, t, i) => t.has(e) ? Da("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), eo = (e, t, i, s) => (Ci(e, t, "write to private field"), t.set(e, i), i), to = (e, t, i) => (Ci(e, t, "access private method"), i), _t, li, La;
let B = class extends ye(p, void 0) {
  constructor() {
    super(), Fi(this, li), Fi(this, _t), this.name = "Dropdown", this.readonly = !1, this.addValidator(
      "valueMissing",
      () => this.requiredMessage ?? bi,
      () => !this.readonly && !!this.required && (this.value === void 0 || this.value === null || this.value === "")
    );
  }
  set options(e) {
    eo(this, _t, e), this.value = e?.filter((t) => t.selected).map((t) => t.value).join(", ") ?? void 0;
  }
  get options() {
    return jr(this, _t);
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
				@change=${to(this, li, La)}
				?readonly=${this.readonly}>
			</uui-select>
		`;
  }
};
_t = /* @__PURE__ */ new WeakMap();
li = /* @__PURE__ */ new WeakSet();
La = function(e) {
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
  n({ type: Array })
], B.prototype, "options", 1);
ne([
  n({ type: String })
], B.prototype, "placeholder", 2);
ne([
  n({ type: Boolean })
], B.prototype, "multiple", 2);
ne([
  n({ type: String })
], B.prototype, "name", 2);
ne([
  n({ type: Boolean })
], B.prototype, "required", 2);
ne([
  n({ type: String })
], B.prototype, "requiredMessage", 2);
ne([
  n({ type: Boolean, reflect: !0 })
], B.prototype, "readonly", 2);
B = ne([
  h("umb-input-dropdown-list")
], B);
var io = Object.defineProperty, ao = Object.getOwnPropertyDescriptor, za = (e) => {
  throw TypeError(e);
}, H = (e, t, i, s) => {
  for (var a = s > 1 ? void 0 : s ? ao(t, i) : t, r = e.length - 1, o; r >= 0; r--)
    (o = e[r]) && (a = (s ? o(t, i, a) : o(a)) || a);
  return s && a && io(t, i, a), a;
}, Si = (e, t, i) => t.has(e) || za("Cannot " + i), v = (e, t, i) => (Si(e, t, "read from private field"), i ? i.call(e) : t.get(e)), Be = (e, t, i) => t.has(e) ? za("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), Jt = (e, t, i, s) => (Si(e, t, "write to private field"), t.set(e, i), i), Ce = (e, t, i) => (Si(e, t, "access private method"), i), hi, yt, gt, m, se, Wa, Ba, Ra, qa, Va, Ha;
let E = class extends ye(
  p
) {
  constructor() {
    super(), Be(this, se), Be(this, hi, new Lt(this, {
      getUniqueOfElement: (e) => e.id,
      getUniqueOfModel: (e) => e,
      identifier: "Umb.SorterIdentifier.InputEntity",
      itemSelector: "uui-ref-node",
      containerSelector: "uui-ref-list",
      onChange: ({ model: e }) => {
        this.selection = e, this.dispatchEvent(new d());
      }
    })), Be(this, yt, 0), this.minMessage = "This field need more items", Be(this, gt, 1 / 0), this.maxMessage = "This field exceeds the allowed amount of items", Be(this, m), this.addValidator(
      "rangeUnderflow",
      () => this.minMessage,
      () => !!this.min && (v(this, m)?.getSelection().length ?? 0) < this.min
    ), this.addValidator(
      "rangeOverflow",
      () => this.maxMessage,
      () => !!this.max && (v(this, m)?.getSelection().length ?? 0) > this.max
    );
  }
  getFormElement() {
  }
  set min(e) {
    Jt(this, yt, e), v(this, m) && (v(this, m).min = e);
  }
  get min() {
    return v(this, yt);
  }
  set max(e) {
    Jt(this, gt, e), v(this, m) && (v(this, m).max = e);
  }
  get max() {
    return v(this, gt);
  }
  set selection(e) {
    v(this, m)?.setSelection(e), v(this, hi).setModel(e);
  }
  get selection() {
    return v(this, m)?.getSelection() ?? [];
  }
  set value(e) {
    this.selection = ur(e);
  }
  get value() {
    return this.selection.length > 0 ? this.selection.join(",") : void 0;
  }
  set pickerContext(e) {
    v(this, m) || (Jt(this, m, e ? new e(this) : void 0), Ce(this, se, Wa).call(this));
  }
  get pickerContext() {
    return v(this, m);
  }
  render() {
    return l`${Ce(this, se, Va).call(this)} ${Ce(this, se, qa).call(this)}`;
  }
};
hi = /* @__PURE__ */ new WeakMap();
yt = /* @__PURE__ */ new WeakMap();
gt = /* @__PURE__ */ new WeakMap();
m = /* @__PURE__ */ new WeakMap();
se = /* @__PURE__ */ new WeakSet();
Wa = async function() {
  v(this, m) && (v(this, m).min = this.min, v(this, m).max = this.max, this.observe(v(this, m).selection, (e) => this.value = e.join(","), "_observeSelection"), this.observe(v(this, m).selectedItems, (e) => this._items = e, "_observerItems"));
};
Ba = function() {
  v(this, m)?.openPicker({
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    // TODO: ignoring this for now to prevent breaking existing functionality.
    // if we want a very generic input it should be possible to pass in picker config
    hideTreeRoot: !0
  });
};
Ra = function(e) {
  v(this, m)?.requestRemoveItem(e.unique);
};
qa = function() {
  if (!(this.max === 1 && this.selection && this.selection.length >= this.max))
    return l`
			<uui-button
				id="btn-add"
				look="placeholder"
				@click=${Ce(this, se, Ba)}
				label=${this.localize.term("general_choose")}></uui-button>
		`;
};
Va = function() {
  if (this._items)
    return l`
			<uui-ref-list>
				${_e(
      this._items,
      (e) => e.unique,
      (e) => Ce(this, se, Ha).call(this, e)
    )}
			</uui-ref-list>
		`;
};
Ha = function(e) {
  if (!e.unique) return;
  const t = this.getIcon?.(e) ?? e.icon ?? "";
  return l`
			<uui-ref-node name=${e.name} id=${e.unique}>
				${P(t, () => l`<umb-icon slot="icon" name=${t}></umb-icon>`)}
				<uui-action-bar slot="actions">
					<uui-button @click=${() => Ce(this, se, Ra).call(this, e)} label=${this.localize.term("general_remove")}></uui-button>
				</uui-action-bar>
			</uui-ref-node>
		`;
};
E.styles = [
  u`
			#btn-add {
				width: 100%;
			}
		`
];
H([
  n({ type: Number })
], E.prototype, "min", 1);
H([
  n({ type: String, attribute: "min-message" })
], E.prototype, "minMessage", 2);
H([
  n({ type: Number })
], E.prototype, "max", 1);
H([
  n({ attribute: !1 })
], E.prototype, "getIcon", 2);
H([
  n({ type: String, attribute: "min-message" })
], E.prototype, "maxMessage", 2);
H([
  n({ type: Array })
], E.prototype, "selection", 1);
H([
  n({ type: String })
], E.prototype, "value", 1);
H([
  n({ attribute: !1 })
], E.prototype, "pickerContext", 1);
H([
  c()
], E.prototype, "_items", 2);
E = H([
  h("umb-input-entity")
], E);
var so = Object.defineProperty, ro = Object.getOwnPropertyDescriptor, Na = (e) => {
  throw TypeError(e);
}, Vt = (e, t, i, s) => {
  for (var a = s > 1 ? void 0 : s ? ro(t, i) : t, r = e.length - 1, o; r >= 0; r--)
    (o = e[r]) && (a = (s ? o(t, i, a) : o(a)) || a);
  return s && a && so(t, i, a), a;
}, oo = (e, t, i) => t.has(e) || Na("Cannot " + i), no = (e, t, i) => t.has(e) ? Na("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), Gi = (e, t, i) => (oo(e, t, "access private method"), i), bt, ui;
let je = class extends it(p, "") {
  constructor() {
    super(...arguments), no(this, bt), this.opacity = !1, this.showPalette = !1;
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
    return P(
      this.showPalette && !e,
      () => l`
				<uui-color-picker
					label="Eye dropper"
					.opacity=${this.opacity}
					.value=${this.value}
					@change=${Gi(this, bt, ui)}>
				</uui-color-picker>
			`,
      () => l`
				<uui-color-picker
					label="Eye dropper"
					.opacity=${this.opacity}
					.swatches=${e}
					.value=${this.value}
					@change=${Gi(this, bt, ui)}>
				</uui-color-picker>
			`
    );
  }
};
bt = /* @__PURE__ */ new WeakSet();
ui = function(e) {
  e.stopPropagation(), this.value = e.target.value, this.dispatchEvent(new d());
};
Vt([
  n({ type: Boolean })
], je.prototype, "opacity", 2);
Vt([
  n({ type: Boolean })
], je.prototype, "showPalette", 2);
Vt([
  n({ type: Array })
], je.prototype, "swatches", 2);
je = Vt([
  h("umb-input-eye-dropper")
], je);
var lo = Object.defineProperty, ho = Object.getOwnPropertyDescriptor, Fa = (e) => {
  throw TypeError(e);
}, Ht = (e, t, i, s) => {
  for (var a = s > 1 ? void 0 : s ? ho(t, i) : t, r = e.length - 1, o; r >= 0; r--)
    (o = e[r]) && (a = (s ? o(t, i, a) : o(a)) || a);
  return s && a && lo(t, i, a), a;
}, Pi = (e, t, i) => t.has(e) || Fa("Cannot " + i), Ut = (e, t, i) => (Pi(e, t, "read from private field"), i ? i.call(e) : t.get(e)), Zt = (e, t, i) => t.has(e) ? Fa("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), Ga = (e, t, i, s) => (Pi(e, t, "write to private field"), t.set(e, i), i), Ki = (e, t, i) => (Pi(e, t, "access private method"), i), Nt, Se, $t, Ka, Xa;
let Ie = class extends p {
  constructor() {
    super(...arguments), Zt(this, $t), Zt(this, Nt, []), Zt(this, Se), this.max = 1 / 0;
  }
  set extensionType(e) {
    Ga(this, Se, e), Ki(this, $t, Ka).call(this);
  }
  get extensionType() {
    return Ut(this, Se);
  }
  render() {
    return l`
			<uui-button
				label=${this.localize.term("general_choose")}
				look="placeholder"
				color="default"
				@click=${Ki(this, $t, Xa)}></uui-button>
		`;
  }
};
Nt = /* @__PURE__ */ new WeakMap();
Se = /* @__PURE__ */ new WeakMap();
$t = /* @__PURE__ */ new WeakSet();
Ka = function() {
  Ut(this, Se) && this.observe(gi.byType(Ut(this, Se)), (e) => {
    Ga(this, Nt, e.sort((t, i) => t.type.localeCompare(i.type) || t.alias.localeCompare(i.alias)));
  });
};
Xa = async function() {
  const e = await this.getContext(la);
  if (!e)
    throw new Error("Modal manager not found.");
  const i = await e.open(this, tr, {
    data: {
      headline: `${this.localize.term("general_choose")}...`,
      items: Ut(this, Nt).filter((s) => s.type === this.extensionType).map((s) => ({
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
Ie.styles = [
  u`
			:host {
				display: flex;
				flex-direction: column;
			}
		`
];
Ht([
  n({ type: String, attribute: "extension-type" })
], Ie.prototype, "extensionType", 1);
Ht([
  n({ attribute: !1 })
], Ie.prototype, "value", 2);
Ht([
  n({ type: Number })
], Ie.prototype, "max", 2);
Ie = Ht([
  h("umb-input-manifest")
], Ie);
var uo = Object.defineProperty, co = Object.getOwnPropertyDescriptor, Ya = Object.getPrototypeOf, po = Reflect.get, vo = Reflect.set, Ja = (e) => {
  throw TypeError(e);
}, D = (e, t, i, s) => {
  for (var a = s > 1 ? void 0 : s ? co(t, i) : t, r = e.length - 1, o; r >= 0; r--)
    (o = e[r]) && (a = (s ? o(t, i, a) : o(a)) || a);
  return s && a && uo(t, i, a), a;
}, ki = (e, t, i) => t.has(e) || Ja("Cannot " + i), mo = (e, t, i) => (ki(e, t, "read from private field"), i ? i.call(e) : t.get(e)), Xi = (e, t, i) => t.has(e) ? Ja("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), fo = (e, t, i, s) => (ki(e, t, "write to private field"), t.set(e, i), i), rt = (e, t, i) => (ki(e, t, "access private method"), i), _o = (e, t, i) => po(Ya(e), i, t), yo = (e, t, i, s) => (vo(Ya(e), i, s, t), s), wt, be, ci, Za, Qa;
function Yi(e) {
  const t = parseInt(e, 10);
  return isNaN(t) ? void 0 : t;
}
let y = class extends ye(p) {
  constructor() {
    super(), Xi(this, be), this.minLabel = "Low value", this.maxLabel = "High value", Xi(this, wt), this._minPlaceholder = "", this._maxPlaceholder = "", this.addValidator(
      "patternMismatch",
      () => "#validation_rangeExceeds",
      () => this._minValue !== void 0 && this._maxValue !== void 0 ? this._minValue > this._maxValue : !1
    );
  }
  set minValue(e) {
    this._minValue = e, rt(this, be, ci).call(this);
  }
  get minValue() {
    return this._minValue;
  }
  set maxValue(e) {
    this._maxValue = e, rt(this, be, ci).call(this);
  }
  get maxValue() {
    return this._maxValue;
  }
  set validationRange(e) {
    fo(this, wt, e), this._minPlaceholder = e?.min !== void 0 ? String(e?.min) : "", this._maxPlaceholder = e?.max !== void 0 && e.max !== 1 / 0 ? String(e.max) : "∞";
  }
  get validationRange() {
    return mo(this, wt);
  }
  set value(e) {
    if (e !== this.value) {
      if (e === void 0) {
        this.minValue = this.maxValue = void 0;
        return;
      }
      const t = e.split(/[ ,]+/);
      this.minValue = Yi(t[0]), this.maxValue = Yi(t[1]);
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
				min=${_(this.validationRange?.min)}
				max=${_(this.validationRange?.max)}
				placeholder=${this._minPlaceholder}
				.value=${this._minValue}
				@input=${rt(this, be, Za)}></uui-input>
			<b>–</b>
			<uui-input
				type="number"
				label=${this.maxLabel}
				min=${_(this.validationRange?.min)}
				max=${_(this.validationRange?.max)}
				placeholder=${this._maxPlaceholder}
				.value=${this._maxValue}
				@input=${rt(this, be, Qa)}></uui-input>
		`;
  }
};
wt = /* @__PURE__ */ new WeakMap();
be = /* @__PURE__ */ new WeakSet();
ci = function() {
  const e = this._minValue || this._maxValue ? (this._minValue ?? "") + "," + (this._maxValue ?? "") : void 0;
  _o(y.prototype, this, "value") !== e && yo(y.prototype, this, "value", e);
};
Za = function(e) {
  const t = e.target.value;
  this.minValue = t ? Number(t) : void 0, this.dispatchEvent(new d());
};
Qa = function(e) {
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
  n({ type: String, attribute: "min-label" })
], y.prototype, "minLabel", 2);
D([
  n({ type: String, attribute: "max-label" })
], y.prototype, "maxLabel", 2);
D([
  c()
], y.prototype, "_minValue", 2);
D([
  n({ type: Number })
], y.prototype, "minValue", 1);
D([
  c()
], y.prototype, "_maxValue", 2);
D([
  n({ type: Number })
], y.prototype, "maxValue", 1);
D([
  n({ type: Object })
], y.prototype, "validationRange", 1);
D([
  c()
], y.prototype, "_minPlaceholder", 2);
D([
  c()
], y.prototype, "_maxPlaceholder", 2);
D([
  n()
], y.prototype, "value", 1);
y = D([
  h("umb-input-number-range")
], y);
var go = Object.defineProperty, bo = Object.getOwnPropertyDescriptor, ja = (e) => {
  throw TypeError(e);
}, ze = (e, t, i, s) => {
  for (var a = s > 1 ? void 0 : s ? bo(t, i) : t, r = e.length - 1, o; r >= 0; r--)
    (o = e[r]) && (a = (s ? o(t, i, a) : o(a)) || a);
  return s && a && go(t, i, a), a;
}, Oi = (e, t, i) => t.has(e) || ja("Cannot " + i), $o = (e, t, i) => (Oi(e, t, "read from private field"), i ? i.call(e) : t.get(e)), Ji = (e, t, i) => t.has(e) ? ja("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), wo = (e, t, i, s) => (Oi(e, t, "write to private field"), t.set(e, i), i), Zi = (e, t, i) => (Oi(e, t, "access private method"), i), xt, Et, es, ts;
let re = class extends ye(
  p,
  void 0
) {
  constructor() {
    super(), Ji(this, Et), Ji(this, xt, ""), this.list = [], this.readonly = !1, this.addValidator(
      "valueMissing",
      () => this.requiredMessage ?? bi,
      () => !this.readonly && !!this.required && (this.value === void 0 || this.value === null || this.value === "")
    );
  }
  set value(e) {
    wo(this, xt, e);
  }
  get value() {
    return $o(this, xt);
  }
  render() {
    return this.list ? l`
			<uui-radio-group .value=${this.value} @change=${Zi(this, Et, es)} ?readonly=${this.readonly}>
				${_e(
      this.list,
      (e) => e,
      (e) => Zi(this, Et, ts).call(this, e)
    )}
			</uui-radio-group>
		` : w;
  }
};
xt = /* @__PURE__ */ new WeakMap();
Et = /* @__PURE__ */ new WeakSet();
es = function(e) {
  e.stopPropagation(), e.target instanceof hr && (this.value = e.target.value, this.dispatchEvent(new d()));
};
ts = function(e) {
  return l`
			<uui-radio
				value=${e.value}
				class=${na({ invalid: !!e.invalid })}
				label=${e.label + (e.invalid ? ` (${this.localize.term("validation_legacyOption")})` : "")}
				title=${e.invalid ? this.localize.term("validation_legacyOptionDescription") : ""}></uui-radio>
		`;
};
re.styles = [
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
ze([
  n()
], re.prototype, "value", 1);
ze([
  n({ type: Array })
], re.prototype, "list", 2);
ze([
  n({ type: Boolean, reflect: !0 })
], re.prototype, "readonly", 2);
ze([
  n({ type: Boolean })
], re.prototype, "required", 2);
ze([
  n({ type: String })
], re.prototype, "requiredMessage", 2);
re = ze([
  h("umb-input-radio-button-list")
], re);
var xo = Object.defineProperty, Eo = Object.getOwnPropertyDescriptor, Co = Object.getPrototypeOf, So = Reflect.set, is = (e) => {
  throw TypeError(e);
}, Y = (e, t, i, s) => {
  for (var a = s > 1 ? void 0 : s ? Eo(t, i) : t, r = e.length - 1, o; r >= 0; r--)
    (o = e[r]) && (a = (s ? o(t, i, a) : o(a)) || a);
  return s && a && xo(t, i, a), a;
}, Mi = (e, t, i) => t.has(e) || is("Cannot " + i), Qi = (e, t, i) => (Mi(e, t, "read from private field"), i ? i.call(e) : t.get(e)), Qt = (e, t, i) => t.has(e) ? is("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), ot = (e, t, i, s) => (Mi(e, t, "write to private field"), t.set(e, i), i), Ee = (e, t, i) => (Mi(e, t, "access private method"), i), ji = (e, t, i, s) => (So(Co(e), i, s, t), s), He, Ne, ae, pi, Ai, as, ss;
function nt(e) {
  const [t, i] = (e ?? ",").split(","), s = ea(t);
  return [s, ea(i, s)];
}
function ea(e, t) {
  if (e === void 0)
    return t;
  const i = Number(e);
  return isNaN(i) ? t : i;
}
function Pe(e, t) {
  return (e === void 0 ? t : e).toString();
}
let C = class extends cr(p, "") {
  constructor() {
    super(), Qt(this, ae), this.label = "", this.min = 0, this.max = 100, this.step = 1, Qt(this, He), Qt(this, Ne), this.enableRange = !1, this.readonly = !1, this.addValidator(
      "rangeUnderflow",
      () => this.localize.term("validation_numberMinimum", [this.min?.toString()]),
      () => {
        if (this.min !== void 0) {
          const [e, t] = nt(this.value);
          if (t !== void 0 && t < this.min || e !== void 0 && e < this.min)
            return !0;
        }
        return !1;
      }
    ), this.addValidator(
      "rangeOverflow",
      () => this.localize.term("validation_numberMaximum", [this.max?.toString()]),
      () => {
        if (this.max !== void 0) {
          const [e, t] = nt(this.value);
          if (t !== void 0 && t > this.max || e !== void 0 && e > this.max)
            return !0;
        }
        return !1;
      }
    ), this.addValidator(
      "patternMismatch",
      () => this.localize.term("validation_rangeExceeds"),
      () => {
        const [e, t] = nt(this.value);
        return t !== void 0 && e !== void 0 ? e > t : !1;
      }
    );
  }
  set value(e) {
    const [t, i] = nt(e);
    ot(this, He, t), ot(this, Ne, i), super.value = e;
  }
  get value() {
    return super.value;
  }
  get valueLow() {
    return Qi(this, He);
  }
  set valueLow(e) {
    ot(this, He, e), Ee(this, ae, pi).call(this);
  }
  get valueHigh() {
    return Qi(this, Ne);
  }
  set valueHigh(e) {
    ot(this, Ne, e), Ee(this, ae, pi).call(this);
  }
  getFormElement() {
  }
  render() {
    return this.enableRange ? Ee(this, ae, ss).call(this) : Ee(this, ae, as).call(this);
  }
};
He = /* @__PURE__ */ new WeakMap();
Ne = /* @__PURE__ */ new WeakMap();
ae = /* @__PURE__ */ new WeakSet();
pi = function() {
  this.enableRange ? ji(C.prototype, this, "value", `${Pe(this.valueLow, this.min)},${Pe(this.valueHigh, this.max)}`) : ji(C.prototype, this, "value", `${Pe(this.valueLow, this.min)}`);
};
Ai = function(e) {
  e.stopPropagation(), this.value = e.target.value, this.dispatchEvent(new d());
};
as = function() {
  return l`
			<uui-slider
				.label=${this.label}
				.min=${this.min}
				.max=${this.max}
				.step=${this.step}
				.value=${Pe(this.valueLow, this.min).toString()}
				@change=${Ee(this, ae, Ai)}
				?readonly=${this.readonly}>
			</uui-slider>
		`;
};
ss = function() {
  return l`
			<uui-range-slider
				.label=${this.label}
				.min=${this.min}
				.max=${this.max}
				.step=${this.step}
				.value="${Pe(this.valueLow, this.min).toString()},${Pe(
    this.valueHigh,
    this.max
  ).toString()}"
				@change=${Ee(this, ae, Ai)}
				?readonly=${this.readonly}>
			</uui-range-slider>
		`;
};
Y([
  n()
], C.prototype, "label", 2);
Y([
  n({ type: Number })
], C.prototype, "min", 2);
Y([
  n({ type: Number })
], C.prototype, "max", 2);
Y([
  n({ type: Number })
], C.prototype, "step", 2);
Y([
  n({ type: Number })
], C.prototype, "valueLow", 1);
Y([
  n({ type: Number })
], C.prototype, "valueHigh", 1);
Y([
  n({ type: Boolean, attribute: "enable-range" })
], C.prototype, "enableRange", 2);
Y([
  n({ type: Boolean, reflect: !0 })
], C.prototype, "readonly", 2);
C = Y([
  h("umb-input-slider")
], C);
var Po = Object.defineProperty, ko = Object.getOwnPropertyDescriptor, rs = (e) => {
  throw TypeError(e);
}, N = (e, t, i, s) => {
  for (var a = s > 1 ? void 0 : s ? ko(t, i) : t, r = e.length - 1, o; r >= 0; r--)
    (o = e[r]) && (a = (s ? o(t, i, a) : o(a)) || a);
  return s && a && Po(t, i, a), a;
}, Ui = (e, t, i) => t.has(e) || rs("Cannot " + i), ta = (e, t, i) => (Ui(e, t, "read from private field"), i ? i.call(e) : t.get(e)), ia = (e, t, i) => t.has(e) ? rs("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), Oo = (e, t, i, s) => (Ui(e, t, "write to private field"), t.set(e, i), i), Mo = (e, t, i) => (Ui(e, t, "access private method"), i), Fe, di, os;
let M = class extends ye(p, "") {
  constructor() {
    super(...arguments), ia(this, di), ia(this, Fe, !1), this.showLabels = !1, this.ariaLabel = null, this.readonly = !1;
  }
  set checked(e) {
    Oo(this, Fe, e), super.value = e.toString();
  }
  get checked() {
    return ta(this, Fe);
  }
  firstUpdated() {
    this.addFormControlElement(this.shadowRoot.querySelector("uui-toggle"));
  }
  render() {
    const e = this.showLabels ? this.checked ? this.labelOn : this.labelOff : "";
    return l`<uui-toggle
			.checked=${ta(this, Fe)}
			.label=${this.ariaLabel}
			?required=${this.required}
			.requiredMessage=${this.requiredMessage}
			@change=${Mo(this, di, os)}
			?readonly=${this.readonly}
			><span>${e}</span>
		</uui-toggle>`;
  }
};
Fe = /* @__PURE__ */ new WeakMap();
di = /* @__PURE__ */ new WeakSet();
os = function(e) {
  e.stopPropagation(), this.checked = e.target.checked, this.dispatchEvent(new d());
};
N([
  n({ type: Boolean })
], M.prototype, "required", 2);
N([
  n({ type: String })
], M.prototype, "requiredMessage", 2);
N([
  n({ type: Boolean })
], M.prototype, "checked", 1);
N([
  n({ type: Boolean })
], M.prototype, "showLabels", 2);
N([
  n({ type: String })
], M.prototype, "labelOn", 2);
N([
  n({ type: String })
], M.prototype, "labelOff", 2);
N([
  n({ type: String, attribute: "aria-label" })
], M.prototype, "ariaLabel", 2);
N([
  n({ type: Boolean, reflect: !0 })
], M.prototype, "readonly", 2);
N([
  c()
], M.prototype, "_currentLabel", 2);
M = N([
  h("umb-input-toggle")
], M);
var Ao = Object.defineProperty, Uo = Object.getOwnPropertyDescriptor, ns = (e) => {
  throw TypeError(e);
}, le = (e, t, i, s) => {
  for (var a = s > 1 ? void 0 : s ? Uo(t, i) : t, r = e.length - 1, o; r >= 0; r--)
    (o = e[r]) && (a = (s ? o(t, i, a) : o(a)) || a);
  return s && a && Ao(t, i, a), a;
}, Io = (e, t, i) => t.has(e) || ns("Cannot " + i), To = (e, t, i) => t.has(e) ? ns("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), lt = (e, t, i) => (Io(e, t, "access private method"), i), $e, ls, hs, us, cs;
let R = class extends ye(
  p
) {
  constructor() {
    super(...arguments), To(this, $e), this.label = "", this.alias = "", this.required = !1, this.readonly = !1, this.aliasReadonly = !1, this._aliasLocked = !0;
  }
  firstUpdated() {
    this.addValidator(
      "valueMissing",
      () => bi,
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
				@input=${lt(this, $e, ls)}
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
								@input=${lt(this, $e, hs)}
								@blur=${lt(this, $e, us)}
								@lock-change=${lt(this, $e, cs)}>
							</uui-input-lock>
						`}
			</uui-input>
		`;
  }
};
$e = /* @__PURE__ */ new WeakSet();
ls = function(e) {
  if (!(e instanceof pa)) return;
  typeof e.composedPath()[0]?.value == "string" && (this.value = e.target.value.toString(), this.autoGenerateAlias && this._aliasLocked && (this.alias = va(this.value)), this.dispatchEvent(new d()));
};
hs = function(e) {
  if (e.stopPropagation(), !(e instanceof pa)) return;
  const t = e.composedPath()[0];
  typeof t?.value == "string" && (this.alias = t.value, this.dispatchEvent(new d()));
};
us = function() {
  !this.alias && this._aliasLocked === !1 && (this.alias = va(this.value ?? ""), this.dispatchEvent(new d()));
};
cs = function(e) {
  this._aliasLocked = !this._aliasLocked, !this.alias && this._aliasLocked ? this.autoGenerateAlias = !0 : this.autoGenerateAlias = !1, this._aliasLocked || e.target?.focus();
};
R.styles = u`
		:host {
			display: contents;
		}
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
le([
  n({ type: String })
], R.prototype, "label", 2);
le([
  n({ type: String, reflect: !1 })
], R.prototype, "alias", 2);
le([
  n({ type: Boolean, reflect: !0 })
], R.prototype, "required", 2);
le([
  n({ type: Boolean, reflect: !0 })
], R.prototype, "readonly", 2);
le([
  n({ type: Boolean, reflect: !0, attribute: "alias-readonly" })
], R.prototype, "aliasReadonly", 2);
le([
  n({ type: Boolean, attribute: "auto-generate-alias" })
], R.prototype, "autoGenerateAlias", 2);
le([
  c()
], R.prototype, "_aliasLocked", 2);
R = le([
  h("umb-input-with-alias")
], R);
var Do = Object.defineProperty, Lo = Object.getOwnPropertyDescriptor, ps = (e) => {
  throw TypeError(e);
}, F = (e, t, i, s) => {
  for (var a = s > 1 ? void 0 : s ? Lo(t, i) : t, r = e.length - 1, o; r >= 0; r--)
    (o = e[r]) && (a = (s ? o(t, i, a) : o(a)) || a);
  return s && a && Do(t, i, a), a;
}, ds = (e, t, i) => t.has(e) || ps("Cannot " + i), zo = (e, t, i) => (ds(e, t, "read from private field"), i ? i.call(e) : t.get(e)), aa = (e, t, i) => t.has(e) ? ps("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), ve = (e, t, i) => (ds(e, t, "access private method"), i), vi, G, Ii, vs, ms, fs, _s, ys;
let S = class extends it(p, "") {
  constructor() {
    super(), aa(this, G), aa(this, vi, new Lt(this, {
      getUniqueOfElement: (e) => e.value.toString(),
      getUniqueOfModel: (e) => e.value,
      identifier: "Umb.SorterIdentifier.ColorEditor",
      itemSelector: "umb-multiple-color-picker-item-input",
      containerSelector: "#sorter-wrapper",
      onChange: ({ model: e }) => {
        const t = this._items;
        this._items = e, this.requestUpdate("_items", t), this.dispatchEvent(new d());
      }
    })), this.minMessage = "This field need more items", this.maxMessage = "This field exceeds the allowed amount of items", this.disabled = !1, this.readonly = !1, this.showLabels = !1, this._items = [], this.consumeContext(pr, async (e) => {
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
    this._items = e ?? [], zo(this, vi).setModel(this.items);
  }
  get items() {
    return this._items;
  }
  getFormElement() {
  }
  render() {
    return l`${ve(this, G, _s).call(this)} ${ve(this, G, ys).call(this)}`;
  }
};
vi = /* @__PURE__ */ new WeakMap();
G = /* @__PURE__ */ new WeakSet();
Ii = function() {
  this.items = [...this._items, { value: "", label: "" }], this.pristine = !1, this.dispatchEvent(new d()), ve(this, G, ms).call(this);
};
vs = function(e, t) {
  e.stopPropagation();
  const i = e.currentTarget, s = i.value, a = i.label;
  this.items = this._items.map((r, o) => o === t ? { value: s, label: a } : r), this.dispatchEvent(new d());
};
ms = async function() {
  await this.updateComplete;
  const e = this.shadowRoot?.querySelectorAll(
    "umb-multiple-color-picker-item-input"
  );
  e && e[e.length - 1].focus();
};
fs = function(e, t) {
  e.stopPropagation(), this.items = this._items.filter((i, s) => s !== t), this.pristine = !1, this.dispatchEvent(new d());
};
_s = function() {
  return l`
			<div id="sorter-wrapper">
				${_e(
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
							@enter=${ve(this, G, Ii)}
							@change=${(i) => ve(this, G, vs).call(this, i, t)}
							@delete=${(i) => ve(this, G, fs).call(this, i, t)}>
						</umb-multiple-color-picker-item-input>
					`
  )}
			</div>
		`;
};
ys = function() {
  return this.disabled || this.readonly ? w : l`
			<uui-button
				id="action"
				label=${this.localize.term("general_add")}
				look="placeholder"
				color="default"
				?disabled=${this.disabled}
				@click=${ve(this, G, Ii)}></uui-button>
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
  n({ type: Number })
], S.prototype, "min", 2);
F([
  n({ type: String, attribute: "min-message" })
], S.prototype, "minMessage", 2);
F([
  n({ type: Number })
], S.prototype, "max", 2);
F([
  n({ type: String, attribute: "min-message" })
], S.prototype, "maxMessage", 2);
F([
  n({ type: Boolean, reflect: !0 })
], S.prototype, "disabled", 2);
F([
  n({ type: Boolean, reflect: !0 })
], S.prototype, "readonly", 2);
F([
  n({ type: Boolean })
], S.prototype, "showLabels", 2);
F([
  c()
], S.prototype, "_items", 2);
F([
  n({ type: Array })
], S.prototype, "items", 1);
S = F([
  h("umb-multiple-color-picker-input")
], S);
var Wo = Object.defineProperty, Bo = Object.getOwnPropertyDescriptor, gs = (e) => {
  throw TypeError(e);
}, J = (e, t, i, s) => {
  for (var a = s > 1 ? void 0 : s ? Bo(t, i) : t, r = e.length - 1, o; r >= 0; r--)
    (o = e[r]) && (a = (s ? o(t, i, a) : o(a)) || a);
  return s && a && Wo(t, i, a), a;
}, Ro = (e, t, i) => t.has(e) || gs("Cannot " + i), qo = (e, t, i) => t.has(e) ? gs("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), g = (e, t, i) => (Ro(e, t, "access private method"), i), f, bs, $s, ws, xs, Es, Cs, Ss, Ps, ks, Os, Ms, Ti;
let A = class extends it(p, "") {
  constructor() {
    super(...arguments), qo(this, f), this._valueHex = "", this.disabled = !1, this.readonly = !1, this.showLabels = !1;
  }
  set value(e) {
    this._valueHex = g(this, f, bs).call(this, e), e.startsWith("#") ? super.value = e.substring(1) : super.value = e;
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
			<umb-form-validation-message id="validation-message" @invalid=${g(this, f, Ms)} @valid=${g(this, f, Os)}>
				<div id="item">
					${this.disabled || this.readonly ? w : l`<uui-icon name="icon-grip" class="handle"></uui-icon>`}
					<div class="color-wrapper">
						<uui-input
							id="input"
							value=${this.value}
							label=${this.localize.term("general_value")}
							placeholder=${this.localize.term("general_value")}
							required=${this.required}
							required-message="Value is missing"
							@keydown=${g(this, f, Cs)}
							@input=${g(this, f, Ps)}
							@change=${g(this, f, Ss)}>
							<uui-color-swatch
								slot="prepend"
								label=${this.value}
								value=${this._valueHex}
								@click=${g(this, f, Ti)}></uui-color-swatch>
						</uui-input>
						<input
							type="color"
							id="color"
							value=${this._valueHex}
							aria-hidden="${!0}"
							@change=${g(this, f, ks)} />
					</div>
					${P(
      this.showLabels,
      () => l`
							<uui-input
								label=${this.localize.term("placeholders_label")}
								placeholder=${this.localize.term("placeholders_label")}
								value=${_(this.label)}
								@keydown=${g(this, f, xs)}
								@input="${g(this, f, ws)}"
								@change="${g(this, f, Es)}"
								?disabled=${this.disabled}
								?readonly=${this.readonly}></uui-input>
						`
    )}
					${P(
      !this.readonly,
      () => l`
							<uui-button
								compact
								label=${this.localize.term("actions_delete")}
								look="outline"
								?disabled=${this.disabled}
								@click=${g(this, f, $s)}>
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
bs = function(e) {
  return e = e.replace(/^#/, ""), e.length === 3 && (e = e.split("").map((t) => t + t).join("")), `#${e}`;
};
$s = async function() {
  await ha(this, {
    headline: `${this.localize.term("actions_delete")} ${this.value || ""}`,
    content: this.localize.term("content_nestedContentDeleteItem"),
    color: "danger",
    confirmLabel: this.localize.term("actions_delete")
  }), this.dispatchEvent(new ua());
};
ws = function(e) {
  e.stopPropagation(), this.label = e.target.value, this.dispatchEvent(new yi());
};
xs = function(e) {
  e.stopPropagation();
  const t = e.currentTarget;
  e.key === "Enter" && t.value && this.dispatchEvent(new CustomEvent("enter"));
};
Es = function(e) {
  e.stopPropagation(), this.label = e.target.value, this.dispatchEvent(new d());
};
Cs = function(e) {
  e.stopPropagation(), e.key === "Enter" && g(this, f, Ti).call(this);
};
Ss = function(e) {
  e.stopPropagation(), this.value = e.target.value, this.dispatchEvent(new d());
};
Ps = function(e) {
  e.stopPropagation(), this.value = e.target.value, this.dispatchEvent(new yi());
};
ks = function(e) {
  e.stopPropagation(), this.value = this._colorPicker.value, this.dispatchEvent(new d());
};
Os = function(e) {
  e.stopPropagation();
};
Ms = function(e) {
  e.stopPropagation();
};
Ti = function() {
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

			.handle {
				cursor: grab;
			}

			.handle:active {
				cursor: grabbing;
			}
		`
];
J([
  n({ type: String })
], A.prototype, "value", 1);
J([
  c()
], A.prototype, "_valueHex", 2);
J([
  n({ type: Boolean, reflect: !0 })
], A.prototype, "disabled", 2);
J([
  n({ type: Boolean, reflect: !0 })
], A.prototype, "readonly", 2);
J([
  n({ type: String })
], A.prototype, "label", 2);
J([
  q("#input")
], A.prototype, "_input", 2);
J([
  q("#color")
], A.prototype, "_colorPicker", 2);
J([
  n({ type: Boolean })
], A.prototype, "showLabels", 2);
A = J([
  h("umb-multiple-color-picker-item-input")
], A);
var Vo = Object.defineProperty, Ho = Object.getOwnPropertyDescriptor, As = (e) => {
  throw TypeError(e);
}, Z = (e, t, i, s) => {
  for (var a = s > 1 ? void 0 : s ? Ho(t, i) : t, r = e.length - 1, o; r >= 0; r--)
    (o = e[r]) && (a = (s ? o(t, i, a) : o(a)) || a);
  return s && a && Vo(t, i, a), a;
}, Di = (e, t, i) => t.has(e) || As("Cannot " + i), Re = (e, t, i) => (Di(e, t, "read from private field"), i ? i.call(e) : t.get(e)), ht = (e, t, i) => t.has(e) ? As("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), sa = (e, t, i, s) => (Di(e, t, "write to private field"), t.set(e, i), i), me = (e, t, i) => (Di(e, t, "access private method"), i), Ge, Ct, St, K, Li, Us, Is, Ts, Ds, Ls;
let U = class extends ye(
  p,
  void 0
) {
  constructor() {
    super(), ht(this, K), ht(this, Ge, new Lt(this, {
      getUniqueOfElement: (e) => e.getAttribute("data-sort-entry-id"),
      getUniqueOfModel: (e) => e,
      identifier: "Umb.SorterIdentifier.MultipleTextString",
      itemSelector: "umb-input-multiple-text-string-item",
      containerSelector: "#sorter-wrapper",
      onChange: ({ model: e }) => {
        const t = this._items;
        this._items = e, this.requestUpdate("_items", t), this.dispatchEvent(new d());
      }
    })), this.minMessage = "This field need more items", this.maxMessage = "This field exceeds the allowed amount of items", ht(this, Ct, !1), ht(this, St, !1), this._items = [], this.addValidator(
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
    sa(this, Ct, e), e && Re(this, Ge).disable();
  }
  get disabled() {
    return Re(this, Ct);
  }
  set readonly(e) {
    sa(this, St, e), e && Re(this, Ge).disable();
  }
  get readonly() {
    return Re(this, St);
  }
  get items() {
    return this._items;
  }
  set items(e) {
    this.value = e?.length > 0 ? "some value" : "", this._items = e ?? [], Re(this, Ge).setModel(this.items);
  }
  getFormElement() {
  }
  render() {
    return l`<div id="sorter-wrapper">${me(this, K, Ds).call(this)}</div>
			${me(this, K, Ls).call(this)}`;
  }
};
Ge = /* @__PURE__ */ new WeakMap();
Ct = /* @__PURE__ */ new WeakMap();
St = /* @__PURE__ */ new WeakMap();
K = /* @__PURE__ */ new WeakSet();
Li = function() {
  this._items = [...this._items, ""], this.pristine = !1, this.dispatchEvent(new d()), me(this, K, Is).call(this);
};
Us = function(e, t) {
  e.stopPropagation();
  const s = e.currentTarget.value;
  this._items = this._items.map((a, r) => r === t ? s : a), this.dispatchEvent(new d());
};
Is = async function() {
  await this.updateComplete;
  const e = this.shadowRoot?.querySelectorAll(
    "umb-input-multiple-text-string-item"
  );
  e[e.length - 1].focus();
};
Ts = function(e, t) {
  e.stopPropagation(), this._items = this._items.filter((i, s) => s !== t), this.pristine = !1, this.dispatchEvent(new d());
};
Ds = function() {
  return l`
			${_e(
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
						@enter=${me(this, K, Li)}
						@delete=${(i) => me(this, K, Ts).call(this, i, t)}
						@input=${(i) => me(this, K, Us).call(this, i, t)}>
					</umb-input-multiple-text-string-item>
				`
  )}
		`;
};
Ls = function() {
  return this.disabled || this.readonly ? w : l`
			<uui-button
				color="default"
				id="action"
				label="Add"
				look="placeholder"
				?disabled=${this.disabled}
				@click=${me(this, K, Li)}></uui-button>
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
Z([
  n({ type: Number })
], U.prototype, "min", 2);
Z([
  n({ type: String, attribute: "min-message" })
], U.prototype, "minMessage", 2);
Z([
  n({ type: Number })
], U.prototype, "max", 2);
Z([
  n({ type: String, attribute: "min-message" })
], U.prototype, "maxMessage", 2);
Z([
  n({ type: Boolean, reflect: !0 })
], U.prototype, "disabled", 1);
Z([
  n({ type: Boolean, reflect: !0 })
], U.prototype, "readonly", 1);
Z([
  c()
], U.prototype, "_items", 2);
Z([
  n({ type: Array })
], U.prototype, "items", 1);
U = Z([
  h("umb-input-multiple-text-string")
], U);
var No = Object.defineProperty, Fo = Object.getOwnPropertyDescriptor, zs = (e) => {
  throw TypeError(e);
}, Ft = (e, t, i, s) => {
  for (var a = s > 1 ? void 0 : s ? Fo(t, i) : t, r = e.length - 1, o; r >= 0; r--)
    (o = e[r]) && (a = (s ? o(t, i, a) : o(a)) || a);
  return s && a && No(t, i, a), a;
}, Go = (e, t, i) => t.has(e) || zs("Cannot " + i), Ko = (e, t, i) => t.has(e) ? zs("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), ge = (e, t, i) => (Go(e, t, "access private method"), i), te, Ws, Bs, Rs, qs, Vs, Hs;
let Te = class extends it(p, "") {
  constructor() {
    super(...arguments), Ko(this, te), this.disabled = !1, this.readonly = !1;
  }
  async focus() {
    await this.updateComplete, this._input?.focus();
  }
  getFormElement() {
  }
  render() {
    return l`
			${this.disabled || this.readonly ? w : l`<uui-icon name="icon-grip" class="handle"></uui-icon>`}

			<umb-form-validation-message id="validation-message" @invalid=${ge(this, te, Hs)} @valid=${ge(this, te, Vs)}>
				<uui-input
					id="input"
					label="Value"
					value=${this.value}
					@keydown=${ge(this, te, Rs)}
					@input=${ge(this, te, Bs)}
					@change=${ge(this, te, qs)}
					?disabled=${this.disabled}
					?readonly=${this.readonly}
					required=${this.required}
					required-message="Value is missing"></uui-input>
			</umb-form-validation-message>

			${P(
      !this.readonly,
      () => l`
					<uui-button
						compact
						label="${this.localize.term("general_remove")} ${this.value}"
						look="outline"
						?disabled=${this.disabled}
						@click=${ge(this, te, Ws)}>
						<uui-icon name="icon-trash"></uui-icon>
					</uui-button>
				`
    )}
		`;
  }
};
te = /* @__PURE__ */ new WeakSet();
Ws = async function() {
  await ha(this, {
    headline: `Delete ${this.value || "item"}`,
    content: "Are you sure you want to delete this item?",
    color: "danger",
    confirmLabel: "Delete"
  }), this.dispatchEvent(new ua());
};
Bs = function(e) {
  e.stopPropagation();
  const t = e.currentTarget;
  this.value = t.value, this.dispatchEvent(new yi());
};
Rs = function(e) {
  e.stopPropagation();
  const t = e.currentTarget;
  e.key === "Enter" && t.value && this.dispatchEvent(new CustomEvent("enter"));
};
qs = function(e) {
  e.stopPropagation();
  const t = e.currentTarget;
  this.value = t.value, this.dispatchEvent(new d());
};
Vs = function(e) {
  e.stopPropagation();
};
Hs = function(e) {
  e.stopPropagation();
};
Te.styles = [
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
Ft([
  n({ type: Boolean, reflect: !0 })
], Te.prototype, "disabled", 2);
Ft([
  n({ type: Boolean, reflect: !0 })
], Te.prototype, "readonly", 2);
Ft([
  q("#input")
], Te.prototype, "_input", 2);
Te = Ft([
  h("umb-input-multiple-text-string-item")
], Te);
var Xo = Object.getOwnPropertyDescriptor, Yo = (e, t, i, s) => {
  for (var a = s > 1 ? void 0 : s ? Xo(t, i) : t, r = e.length - 1, o; r >= 0; r--)
    (o = e[r]) && (a = o(a) || a);
  return a;
};
let mi = class extends p {
  render() {
    return l`<slot></slot>`;
  }
};
mi.styles = [
  $,
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
mi = Yo([
  h("umb-popover-layout")
], mi);
var Jo = Object.defineProperty, Zo = Object.getOwnPropertyDescriptor, Ns = (e) => {
  throw TypeError(e);
}, Fs = (e, t, i, s) => {
  for (var a = s > 1 ? void 0 : s ? Zo(t, i) : t, r = e.length - 1, o; r >= 0; r--)
    (o = e[r]) && (a = (s ? o(t, i, a) : o(a)) || a);
  return s && a && Jo(t, i, a), a;
}, Qo = (e, t, i) => t.has(e) || Ns("Cannot " + i), jt = (e, t, i) => (Qo(e, t, "read from private field"), i ? i.call(e) : t.get(e)), jo = (e, t, i) => t.has(e) ? Ns("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), Ke;
let It = class extends dr(da) {
  constructor() {
    super(...arguments), this.icon = "", jo(this, Ke, document.createElement("umb-icon"));
  }
  firstUpdated(e) {
    super.firstUpdated(e), this.icon && (jt(this, Ke).setAttribute("slot", "icon"), jt(this, Ke).setAttribute("name", this.icon), this.appendChild(jt(this, Ke)));
  }
};
Ke = /* @__PURE__ */ new WeakMap();
It.styles = [
  ...da.styles,
  u`
			:host {
				padding-top: var(--uui-size-3);
				padding-bottom: var(--uui-size-3);
			}
		`
];
Fs([
  n({ type: String })
], It.prototype, "icon", 2);
It = Fs([
  h("umb-ref-item")
], It);
var en = Object.defineProperty, tn = Object.getOwnPropertyDescriptor, Gs = (e) => {
  throw TypeError(e);
}, Q = (e, t, i, s) => {
  for (var a = s > 1 ? void 0 : s ? tn(t, i) : t, r = e.length - 1, o; r >= 0; r--)
    (o = e[r]) && (a = (s ? o(t, i, a) : o(a)) || a);
  return s && a && en(t, i, a), a;
}, zi = (e, t, i) => t.has(e) || Gs("Cannot " + i), k = (e, t, i) => (zi(e, t, "read from private field"), i ? i.call(e) : t.get(e)), qe = (e, t, i) => t.has(e) ? Gs("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), Tt = (e, t, i, s) => (zi(e, t, "write to private field"), t.set(e, i), i), z = (e, t, i) => (zi(e, t, "access private method"), i), ke, Pt, b, Ks, De, Dt, Xs, Le, Wi, Ys, fi, Js;
let I = class extends p {
  constructor() {
    super(...arguments), qe(this, b), this.lock = "none", this.position = "var(--umb-split-panel-initial-position)", qe(this, ke, 0), qe(this, Pt, 25), this._hasStartPanel = !1, this._hasEndPanel = !1, qe(this, De, !1), qe(this, Le, (e) => {
      e.preventDefault();
      const t = (a) => {
        const { clientX: r } = a, { left: o, width: We } = this.mainElement.getBoundingClientRect(), he = ma(r - o, 0, We), L = s(he, We);
        Tt(this, ke, this.lock === "start" ? L : We - L), z(this, b, Dt).call(this, L);
      }, i = () => {
        document.removeEventListener("pointermove", t), document.removeEventListener("pointerup", i), this.dispatchEvent(new CustomEvent("position-changed", { detail: { position: this.position } }));
      }, s = (a, r) => {
        const o = this.snap?.split(" ");
        if (!o) return a;
        const he = o.map((L) => {
          let ee = parseFloat(L);
          return L.endsWith("%") && (ee = ee / 100 * r), L.startsWith("-") && (ee = r + ee), ee;
        }).reduce((L, ee) => Math.abs(ee - a) < Math.abs(L - a) ? ee : L);
        return he < a + k(this, Pt) && he > a - k(this, Pt) && (a = he), a;
      };
      document.addEventListener("pointermove", t, { passive: !0 }), document.addEventListener("pointerup", i);
    });
  }
  disconnectedCallback() {
    super.disconnectedCallback(), z(this, b, Wi).call(this);
  }
  updated(e) {
    if (super.updated(e), !!k(this, De) && e.has("position")) {
      if (this.lock !== "none") {
        const { width: t } = this.mainElement.getBoundingClientRect();
        let i = parseFloat(this.position);
        this.position.endsWith("%") && (i = i / 100 * t);
        const s = this.lock === "start" ? i : t - i;
        Tt(this, ke, s);
      }
      z(this, b, Xs).call(this);
    }
  }
  render() {
    return l`
			<div id="main">
				<slot
					name="start"
					@slotchange=${z(this, b, fi)}
					style="width: ${this._hasStartPanel ? "100%" : "0"}"></slot>
				<div id="divider">
					<div id="divider-touch-area" tabindex="0" @keydown=${z(this, b, Js)}></div>
				</div>
				<slot name="end" @slotchange=${z(this, b, fi)} style="width: ${this._hasEndPanel ? "100%" : "0"}"></slot>
			</div>
		`;
  }
};
ke = /* @__PURE__ */ new WeakMap();
Pt = /* @__PURE__ */ new WeakMap();
b = /* @__PURE__ */ new WeakSet();
Ks = function() {
  return this._hasStartPanel && this._hasEndPanel;
};
De = /* @__PURE__ */ new WeakMap();
Dt = function(e) {
  const { width: t } = this.mainElement.getBoundingClientRect(), s = ma(e, 0, t) / t * 100;
  this.position = s + "%";
  const a = s.toFixed(0), r = this.localize?.term("general_dividerPosition", [a]) ?? `Divider at ${a}%`;
  this.dividerTouchAreaElement.setAttribute("aria-valuetext", r);
};
Xs = function() {
  let e = this.position, t = "1fr";
  this.lock === "start" && (e = k(this, ke) + "px", t = "1fr"), this.lock === "end" && (e = "1fr", t = k(this, ke) + "px"), this.mainElement.style.gridTemplateColumns = `
      minmax(var(--umb-split-panel-start-min-width), ${e})
      0px
      minmax(var(--umb-split-panel-end-min-width), ${t})
    `;
};
Le = /* @__PURE__ */ new WeakMap();
Wi = function() {
  this.dividerTouchAreaElement.removeEventListener("pointerdown", k(this, Le)), this.dividerTouchAreaElement.removeEventListener("touchstart", k(this, Le)), this.dividerElement.style.display = "none", this.mainElement.style.display = "flex", Tt(this, De, !1);
};
Ys = async function() {
  Tt(this, De, !0), this.mainElement.style.display = "grid", this.mainElement.style.gridTemplateColumns = `${this.position} 0px 1fr`, this.dividerElement.style.display = "unset", this.dividerTouchAreaElement.addEventListener("pointerdown", k(this, Le)), this.dividerTouchAreaElement.addEventListener("touchstart", k(this, Le), { passive: !1 }), await new Promise((a) => requestAnimationFrame(a));
  const { left: e } = this.shadowRoot.querySelector("#divider").getBoundingClientRect(), { left: t, width: i } = this.mainElement.getBoundingClientRect(), s = (e - t) / i * 100;
  this.position = `${s}%`;
};
fi = function(e) {
  const t = e.target, i = t.name;
  if (i === "start" && (this._hasStartPanel = t.assignedElements().length > 0), i === "end" && (this._hasEndPanel = t.assignedElements().length > 0), !k(this, b, Ks)) {
    k(this, De) && z(this, b, Wi).call(this);
    return;
  }
  z(this, b, Ys).call(this);
};
Js = function(e) {
  if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
    const { width: t } = this.mainElement.getBoundingClientRect(), a = (this.dividerElement.getBoundingClientRect().left - this.mainElement.getBoundingClientRect().left) / t * 100, o = 1 * (e.shiftKey ? 10 : 1) * (e.key === "ArrowLeft" ? -1 : 1), he = (a + o) / 100 * this.mainElement.getBoundingClientRect().width;
    z(this, b, Dt).call(this, he);
  }
  if (e.key === "Home" || e.key === "End") {
    e.preventDefault();
    const { width: t } = this.mainElement.getBoundingClientRect(), i = e.key === "Home" ? 0 : t;
    z(this, b, Dt).call(this, i);
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
Q([
  q("#main")
], I.prototype, "mainElement", 2);
Q([
  q("#divider-touch-area")
], I.prototype, "dividerTouchAreaElement", 2);
Q([
  q("#divider")
], I.prototype, "dividerElement", 2);
Q([
  n({ type: String })
], I.prototype, "snap", 2);
Q([
  n({ type: String })
], I.prototype, "lock", 2);
Q([
  n({ type: String, reflect: !0 })
], I.prototype, "position", 2);
Q([
  c()
], I.prototype, "_hasStartPanel", 2);
Q([
  c()
], I.prototype, "_hasEndPanel", 2);
I = Q([
  h("umb-split-panel")
], I);
var an = Object.defineProperty, sn = Object.getOwnPropertyDescriptor, Bi = (e, t, i, s) => {
  for (var a = s > 1 ? void 0 : s ? sn(t, i) : t, r = e.length - 1, o; r >= 0; r--)
    (o = e[r]) && (a = (s ? o(t, i, a) : o(a)) || a);
  return s && a && an(t, i, a), a;
};
let et = class extends p {
  constructor() {
    super(...arguments), this.look = "default", this.divide = !1;
  }
  render() {
    return l`
			<div class=${na({ divide: this.divide, compact: this.look === "compact" })}>
				<slot></slot>
			</div>
		`;
  }
};
et.styles = [
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
Bi([
  n({ type: String })
], et.prototype, "look", 2);
Bi([
  n({ type: Boolean })
], et.prototype, "divide", 2);
et = Bi([
  h("umb-stack")
], et);
var rn = Object.defineProperty, on = Object.getOwnPropertyDescriptor, Zs = (e) => {
  throw TypeError(e);
}, j = (e, t, i, s) => {
  for (var a = s > 1 ? void 0 : s ? on(t, i) : t, r = e.length - 1, o; r >= 0; r--)
    (o = e[r]) && (a = (s ? o(t, i, a) : o(a)) || a);
  return s && a && rn(t, i, a), a;
}, nn = (e, t, i) => t.has(e) || Zs("Cannot " + i), ut = (e, t, i) => (nn(e, t, "read from private field"), i ? i.call(e) : t.get(e)), ln = (e, t, i) => t.has(e) ? Zs("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), we;
class ra extends Event {
  constructor() {
    super("selected", { bubbles: !0, composed: !0 });
  }
}
class oa extends Event {
  constructor() {
    super("deselected", { bubbles: !0, composed: !0 });
  }
}
class hn extends Event {
  constructor() {
    super("ordered", { bubbles: !0, composed: !0 });
  }
}
class un extends Event {
  #e;
  constructor({ itemId: t }) {
    super("sorted", { bubbles: !0, composed: !0 }), this.#e = t;
  }
  getItemId() {
    return this.#e;
  }
}
let T = class extends p {
  constructor() {
    super(), this._items = [], this.columns = [], this.config = {
      allowSelection: !1,
      hideIcon: !1
    }, this.selection = [], this.orderingColumn = "", this.orderingDesc = !1, this._sortable = !1, this._selectionMode = !1, ln(this, we, new Lt(this, {
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
        this.dispatchEvent(new un({ itemId: e.id }));
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
		`, ut(this, we).disable();
  }
  get items() {
    return this._items;
  }
  set items(e) {
    this._items = e, ut(this, we).setModel(e);
  }
  get sortable() {
    return this._sortable;
  }
  set sortable(e) {
    const t = this._sortable;
    t !== e && (this._sortable = e, this._sortable ? ut(this, we).enable() : ut(this, we).disable(), this.requestUpdate("sortable", t));
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
    this.orderingDesc = this.orderingColumn === e.alias ? !this.orderingDesc : !1, this.orderingColumn = e.alias, this.dispatchEvent(new hn());
  }
  _selectAllRows() {
    this.selection = this.items.map((e) => e.id), this._selectionMode = !0, this.dispatchEvent(new ra());
  }
  _deselectAllRows() {
    this.selection = [], this._selectionMode = !1, this.dispatchEvent(new oa());
  }
  _selectRow(e) {
    this.selection = [...this.selection, e], this._selectionMode = this.selection.length > 0, this.dispatchEvent(new ra());
  }
  _deselectRow(e) {
    this.selection = this.selection.filter((t) => t !== e), this._selectionMode = this.selection.length > 0, this.dispatchEvent(new oa());
  }
  render() {
    const e = this.config.allowSelection === !1 && this.config.hideIcon === !0 ? void 0 : "width: 60px";
    return l`
			<uui-table class="uui-text">
				<uui-table-column style=${_(e)}></uui-table-column>
				<uui-table-head>
					${this._renderHeaderCheckboxCell()} ${this.columns.map((t) => this._renderHeaderCell(t))}
				</uui-table-head>
				${_e(this.items, (t) => t.id, this._renderRow)}
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
				${P(
        this.config.allowSelection,
        () => l`
						<uui-checkbox
							aria-label=${this.localize.term("general_selectAll")}
							style="padding: var(--uui-size-4) var(--uui-size-5);"
							@change="${this._handleAllRowsCheckboxChange}"
							?checked=${this.selection.length === this.items.length}></uui-checkbox>
					`
      )}
			</uui-table-head-cell>
		`;
  }
  _renderRowCheckboxCell(e) {
    if (this.sortable === !0)
      return l`
				<uui-table-cell style="text-align: center;">
					<uui-icon name="icon-grip"></uui-icon>
				</uui-table-cell>
			`;
    if (!(this.config.hideIcon && !this.config.allowSelection))
      return l`
			<uui-table-cell style="text-align: center;">
				${P(!this.config.hideIcon, () => l`<umb-icon name="${_(e.icon ?? void 0)}"></umb-icon>`)}
				${P(
        this.config.allowSelection,
        () => l`
						<uui-checkbox
							aria-label=${this.localize.term("buttons_select")}
							@click=${(t) => t.stopPropagation()}
							@change=${(t) => this._handleRowCheckboxChange(t, e)}
							?checked=${this._isSelected(e.id)}></uui-checkbox>
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
we = /* @__PURE__ */ new WeakMap();
T.styles = [
  $,
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
j([
  n({ type: Array, attribute: !1 })
], T.prototype, "_items", 2);
j([
  n({ type: Array, attribute: !1 })
], T.prototype, "columns", 2);
j([
  n({ type: Object, attribute: !1 })
], T.prototype, "config", 2);
j([
  n({ type: Array, attribute: !1 })
], T.prototype, "selection", 2);
j([
  n({ type: String, attribute: !1 })
], T.prototype, "orderingColumn", 2);
j([
  n({ type: Boolean, attribute: !1 })
], T.prototype, "orderingDesc", 2);
j([
  n({ type: Boolean, reflect: !0 })
], T.prototype, "sortable", 1);
j([
  c()
], T.prototype, "_selectionMode", 2);
T = j([
  h("umb-table")
], T);
var cn = Object.getOwnPropertyDescriptor, pn = (e, t, i, s) => {
  for (var a = s > 1 ? void 0 : s ? cn(t, i) : t, r = e.length - 1, o; r >= 0; r--)
    (o = e[r]) && (a = o(a) || a);
  return a;
};
let _i = class extends tt {
  // Note just LitElement, not Umbraco Element.
  render() {
    return l` <uui-loader></uui-loader>`;
  }
};
_i.styles = [
  u`
			:host {
				display: flex;
				width: 100%;
				justify-content: center;
				height: 100%;
				align-items: center;
				opacity: 0;
				animation: fadeIn 240ms 240ms forwards;
			}

			@keyframes fadeIn {
				100% {
					opacity: 100%;
				}
			}
		`
];
_i = pn([
  h("umb-view-loader")
], _i);
export {
  mi as A,
  It as B,
  I as C,
  et as D,
  ra as E,
  oa as F,
  hn as G,
  un as H,
  T as I,
  _i as J,
  Oe as U,
  Me as a,
  Ae as b,
  x as c,
  Ue as d,
  O as e,
  W as f,
  ai as g,
  si as h,
  Ze as i,
  ri as j,
  fe as k,
  Qe as l,
  ni as m,
  B as n,
  E as o,
  je as p,
  Ie as q,
  y as r,
  re as s,
  C as t,
  M as u,
  R as v,
  S as w,
  A as x,
  U as y,
  Te as z
};
//# sourceMappingURL=view-loader.element-REL1MIYj.js.map
