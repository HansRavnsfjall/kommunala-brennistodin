import { UmbContextToken as f } from "@umbraco-cms/backoffice/context-api";
import { css as w, property as h, state as p, customElement as b, nothing as u, repeat as Pt, html as c, when as At, query as Wt, ref as Ve, ifDefined as vt } from "@umbraco-cms/backoffice/external/lit";
import { UmbTextStyles as C } from "@umbraco-cms/backoffice/style";
import { UmbLitElement as y, umbFocus as Se } from "@umbraco-cms/backoffice/lit-element";
import { UmbPathPattern as Nt } from "@umbraco-cms/backoffice/router";
import { UMB_SECTION_PATH_PATTERN as Te } from "@umbraco-cms/backoffice/section";
import { UmbExtensionsManifestInitializer as Pe, createExtensionElement as Ae, UmbExtensionsElementAndApiInitializer as We, UmbExtensionsApiInitializer as Ne } from "@umbraco-cms/backoffice/extension-api";
import { umbExtensionsRegistry as rt } from "@umbraco-cms/backoffice/extension-registry";
import { UMB_MODAL_CONTEXT as Ue, UmbModalToken as Ie } from "@umbraco-cms/backoffice/modal";
import { UUIInputEvent as Ut } from "@umbraco-cms/backoffice/external/uui";
import { umbBindToValidation as It, UmbDataPathVariantQuery as Me } from "@umbraco-cms/backoffice/validation";
import { UmbContextBase as De } from "@umbraco-cms/backoffice/class-api";
import { UmbNumberState as Be, UmbBooleanState as ze } from "@umbraco-cms/backoffice/observable-api";
import { UmbVariantId as E } from "@umbraco-cms/backoffice/variant";
import { UMB_MARK_ATTRIBUTE_NAME as Mt } from "@umbraco-cms/backoffice/const";
import { UMB_PROPERTY_DATASET_CONTEXT as Re, isNameablePropertyDatasetContext as Le } from "@umbraco-cms/backoffice/property";
const ia = new f("UmbWorkspaceContext"), aa = "Umb.Condition.WorkspaceEntityIsNew", sa = "Umb.Condition.WorkspaceAlias";
var Ke = Object.defineProperty, qe = Object.getOwnPropertyDescriptor, Dt = (t) => {
  throw TypeError(t);
}, K = (t, e, i, s) => {
  for (var a = s > 1 ? void 0 : s ? qe(e, i) : e, r = t.length - 1, l; r >= 0; r--)
    (l = t[r]) && (a = (s ? l(e, i, a) : l(a)) || a);
  return s && a && Ke(e, i, a), a;
}, Xe = (t, e, i) => e.has(t) || Dt("Cannot " + i), Fe = (t, e, i) => e.has(t) ? Dt("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), He = (t, e, i) => (Xe(t, e, "access private method"), i), lt, Bt;
let S = class extends y {
  constructor() {
    super(...arguments), Fe(this, lt), this.look = "secondary", this.color = "default", this.items = [], this._popoverOpen = !1;
  }
  render() {
    return this.items?.length ? c`<uui-button
				id="popover-trigger"
				popovertarget="workspace-action-popover"
				look="${this.look}"
				color="${this.color}"
				label=${this.localize.term("visuallyHiddenTexts_tabExpand")}
				compact>
				<uui-symbol-expand id="expand-symbol" .open=${this._popoverOpen}></uui-symbol-expand>
			</uui-button>
			<uui-popover-container
				id="workspace-action-popover"
				margin="6"
				placement="top-end"
				@toggle=${He(this, lt, Bt)}>
				<umb-popover-layout>
					<uui-scroll-container>
						${Pt(
      this.items,
      (t) => t.alias,
      (t) => t.component
    )}
					</uui-scroll-container>
				</umb-popover-layout>
			</uui-popover-container>` : u;
  }
};
lt = /* @__PURE__ */ new WeakSet();
Bt = function(t) {
  this._popoverOpen = t.newState === "open";
};
S.styles = [
  C,
  w`
			:host {
				--uui-menu-item-flat-structure: 1;
			}

			#expand-symbol {
				/* TODO: remove this hack and use a proper UUI symbol for this */
				transform: rotate(-90deg);
			}

			#expand-symbol[open] {
				transform: rotate(0deg);
			}

			#workspace-action-popover {
				min-width: 200px;
			}

			#popover-trigger {
				--uui-button-padding-top-factor: 0;
				--uui-button-padding-bottom-factor: 0.125;
			}
		`
];
K([
  h()
], S.prototype, "look", 2);
K([
  h()
], S.prototype, "color", 2);
K([
  h({ type: Array, attribute: !1 })
], S.prototype, "items", 2);
K([
  p()
], S.prototype, "_popoverOpen", 2);
S = K([
  b("umb-workspace-action-menu")
], S);
const Ye = new f(
  "UmbWorkspaceContext",
  void 0,
  (t) => t.getUnique !== void 0
), oa = new f("UmbWorkspaceContext", void 0, (t) => "publish" in t), na = new f(
  "UmbWorkspaceContext",
  void 0,
  (t) => "routes" in t
), ra = new f(
  "UmbWorkspaceContext",
  void 0,
  (t) => "requestSubmit" in t && "_internal_createUnderParent" in t
), Ge = new f("UmbWorkspaceContext", void 0, (t) => "requestSubmit" in t), la = new f(
  "UmbWorkspaceContext",
  void 0,
  (t) => "requestSave" in t
), je = new f("UmbWorkspaceContext", void 0, (t) => "variants" in t), Qe = new Nt("workspace/:entityType", Te), Je = new Nt("view/:viewPathname", Qe);
var Ze = Object.defineProperty, ti = Object.getOwnPropertyDescriptor, zt = (t) => {
  throw TypeError(t);
}, $ = (t, e, i, s) => {
  for (var a = s > 1 ? void 0 : s ? ti(e, i) : e, r = t.length - 1, l; r >= 0; r--)
    (l = t[r]) && (a = (s ? l(e, i, a) : l(a)) || a);
  return s && a && Ze(e, i, a), a;
}, ei = (t, e, i) => e.has(t) || zt("Cannot " + i), ii = (t, e, i) => e.has(t) ? zt("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), st = (t, e, i) => (ei(t, e, "access private method"), i), D, Rt, Lt, Kt;
let m = class extends y {
  constructor() {
    super(), ii(this, D), this.headline = "", this.hideNavigation = !1, this.enforceNoFooter = !1, this.loading = !1, this._workspaceViews = [], new Pe(this, rt, "workspaceView", null, (t) => {
      this._workspaceViews = t.map((e) => e.manifest), this._createRoutes();
    });
  }
  _createRoutes() {
    let t = [];
    this._workspaceViews.length > 0 && (t = this._workspaceViews.map((e) => ({
      path: Je.generateLocal({ viewPathname: e.meta.pathname }),
      component: () => Ae(e),
      setup: (i) => {
        i && (i.manifest = e);
      }
    })), t.push({ ...t[0], unique: t[0].path, path: "" }), t.push({
      path: "**",
      component: async () => (await import("@umbraco-cms/backoffice/router")).UmbRouteNotFoundElement
    })), this._routes = t;
  }
  render() {
    return c`
			<umb-body-layout main-no-padding .headline=${this.headline} ?loading=${this.loading}>
				${st(this, D, Lt).call(this)}
				<slot name="header" slot="header"></slot>
				<slot name="action-menu" slot="action-menu"></slot>
				${st(this, D, Rt).call(this)} ${st(this, D, Kt).call(this)}
				<slot></slot>
				${At(
      !this.enforceNoFooter,
      () => c`
						<umb-workspace-footer slot="footer" data-mark="workspace:footer">
							<slot name="footer-info"></slot>
							<slot name="actions" slot="actions" data-mark="workspace:footer-actions"></slot>
						</umb-workspace-footer>
					`
    )}
			</umb-body-layout>
		`;
  }
};
D = /* @__PURE__ */ new WeakSet();
Rt = function() {
  return c`
			${!this.hideNavigation && this._workspaceViews.length > 1 ? c`
						<uui-tab-group slot="navigation" data-mark="workspace:view-links">
							${Pt(
    this._workspaceViews,
    (t) => t.alias,
    (t, e) => (
      // Notice how we use index 0 to determine which workspace that is active with empty path. [NL]
      c`
										<uui-tab
											href="${this._routerPath}/view/${t.meta.pathname}"
											.label="${t.meta.label ? this.localize.string(t.meta.label) : t.name}"
											?active=${"view/" + t.meta.pathname === this._activePath || e === 0 && this._activePath === ""}
											data-mark="workspace:view-link:${t.alias}">
											<umb-icon slot="icon" name=${t.meta.icon}></umb-icon>
											${t.meta.label ? this.localize.string(t.meta.label) : t.name}
										</uui-tab>
									`
    )
  )}
						</uui-tab-group>
					` : u}
		`;
};
Lt = function() {
  return this.backPath ? c`
			<uui-button
				slot="header"
				class="back-button"
				compact
				href=${this.backPath}
				label=${this.localize.term("general_back")}
				data-mark="action:back">
				<uui-icon name="icon-arrow-left"></uui-icon>
			</uui-button>
		` : u;
};
Kt = function() {
  return !this._routes || this._routes.length === 0 ? u : c`
			<umb-router-slot
				inherit-addendum
				id="router-slot"
				.routes=${this._routes}
				@init=${(t) => {
    this._routerPath = t.target.absoluteRouterPath;
  }}
				@change=${(t) => {
    this._activePath = t.target.localActiveViewPath;
  }}></umb-router-slot>
		`;
};
m.styles = [
  C,
  w`
			:host {
				display: block;
				width: 100%;
				height: 100%;
			}

			#router-slot {
				display: flex;
				flex-direction: column;
				height: 100%;
			}

			.back-button {
				margin-right: var(--uui-size-space-4);
			}

			uui-input {
				width: 100%;
			}

			uui-tab-group {
				--uui-tab-divider: var(--uui-color-border);
				border-left: 1px solid var(--uui-color-border);
				border-right: 1px solid var(--uui-color-border);
			}

			umb-extension-slot[slot='actions'] {
				display: flex;
				gap: var(--uui-size-space-2);
			}
		`
];
$([
  h()
], m.prototype, "headline", 2);
$([
  h({ type: Boolean })
], m.prototype, "hideNavigation", 2);
$([
  h({ type: Boolean })
], m.prototype, "enforceNoFooter", 2);
$([
  h({ attribute: "back-path" })
], m.prototype, "backPath", 2);
$([
  h({ type: Boolean })
], m.prototype, "loading", 2);
$([
  p()
], m.prototype, "_workspaceViews", 2);
$([
  p()
], m.prototype, "_routes", 2);
$([
  p()
], m.prototype, "_routerPath", 2);
$([
  p()
], m.prototype, "_activePath", 2);
m = $([
  b("umb-workspace-editor")
], m);
var ai = Object.defineProperty, si = Object.getOwnPropertyDescriptor, qt = (t) => {
  throw TypeError(t);
}, q = (t, e, i, s) => {
  for (var a = s > 1 ? void 0 : s ? si(e, i) : e, r = t.length - 1, l; r >= 0; r--)
    (l = t[r]) && (a = (s ? l(e, i, a) : l(a)) || a);
  return s && a && ai(e, i, a), a;
}, oi = (t, e, i) => e.has(t) || qt("Cannot " + i), ni = (t, e, i) => e.has(t) ? qt("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), Et = (t, e, i) => (oi(t, e, "access private method"), i), j, Xt, Ft;
let T = class extends y {
  constructor() {
    super(), ni(this, j), this._popoverOpen = !1, this.consumeContext(Ye, (t) => {
      this._workspaceContext = t, this.observe(this._workspaceContext?.unique, (e) => {
        this._unique = e, this._entityType = this._workspaceContext?.getEntityType();
      });
    });
  }
  render() {
    return this._unique !== void 0 && this._entityType ? c`
					<uui-button
						id="action-button"
						data-mark="workspace:action-menu-button"
						popovertarget="workspace-entity-action-menu-popover"
						label=${this.localize.term("general_actions")}>
						<uui-symbol-more></uui-symbol-more>
					</uui-button>
					<uui-popover-container
						id="workspace-entity-action-menu-popover"
						placement="bottom-end"
						@toggle=${Et(this, j, Ft)}>
						<umb-popover-layout>
							<uui-scroll-container>
								<umb-entity-action-list
									@action-executed=${Et(this, j, Xt)}
									.entityType=${this._entityType}
									.unique=${this._unique}>
								</umb-entity-action-list>
							</uui-scroll-container>
						</umb-popover-layout>
					</uui-popover-container>
				` : u;
  }
};
j = /* @__PURE__ */ new WeakSet();
Xt = function(t) {
  t.stopPropagation(), this._popover?.hidePopover();
};
Ft = function(t) {
  this._popoverOpen = t.newState === "open";
};
T.styles = [
  C,
  w`
			:host {
				height: 100%;
				margin-left: calc(var(--uui-size-layout-1) * -1);
			}
			:host > uui-button {
				height: 100%;
			}
		`
];
q([
  p()
], T.prototype, "_unique", 2);
q([
  p()
], T.prototype, "_entityType", 2);
q([
  p()
], T.prototype, "_popoverOpen", 2);
q([
  Wt("#workspace-entity-action-menu-popover")
], T.prototype, "_popover", 2);
T = q([
  b("umb-workspace-entity-action-menu")
], T);
var ri = Object.defineProperty, li = Object.getOwnPropertyDescriptor, Ht = (t) => {
  throw TypeError(t);
}, it = (t, e, i, s) => {
  for (var a = s > 1 ? void 0 : s ? li(e, i) : e, r = t.length - 1, l; r >= 0; r--)
    (l = t[r]) && (a = (s ? l(e, i, a) : l(a)) || a);
  return s && a && ri(e, i, a), a;
}, ci = (t, e, i) => e.has(t) || Ht("Cannot " + i), pi = (t, e, i) => (ci(t, e, "read from private field"), i ? i.call(t) : e.get(t)), ui = (t, e, i) => e.has(t) ? Ht("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), ct;
function hi(t) {
  return [{ meta: t.meta }];
}
let P = class extends y {
  constructor() {
    super(), this._withinModal = !1, ui(this, ct, () => {
      this._modalContext?.reject();
    }), this.consumeContext(Ge, (t) => {
      this._isNew = t?.getIsNew();
    }), this.consumeContext(Ue, (t) => {
      this._modalContext = t;
    });
  }
  // TODO: Some event/callback from umb-extension-slot that can be utilized to hide the footer, if empty.
  render() {
    return c`
			<umb-footer-layout>
				<umb-extension-slot type="workspaceFooterApp"></umb-extension-slot>
				<slot></slot>
				${this._modalContext ? c`<uui-button
							slot="actions"
							label=${this._isNew ? "Cancel" : "Close"}
							@click=${pi(this, ct)}></uui-button>` : ""}
				<slot name="actions" slot="actions"></slot>
				<umb-extension-with-api-slot
					slot="actions"
					type="workspaceAction"
					.apiArgs=${hi}></umb-extension-with-api-slot>

				<slot name="actions" slot="actions"></slot>
			</umb-footer-layout>
		`;
  }
};
ct = /* @__PURE__ */ new WeakMap();
P.styles = [
  C,
  w`
			:host {
				display: block;
				width: 100%;
			}

			/* prevents text in action buttons from wrapping */
			umb-extension-with-api-slot {
				text-wrap: nowrap;
			}

			umb-extension-slot[slot='actions'] {
				display: flex;
				gap: var(--uui-size-space-2);
			}
		`
];
it([
  p()
], P.prototype, "_withinModal", 2);
it([
  p()
], P.prototype, "_modalContext", 2);
it([
  p()
], P.prototype, "_isNew", 2);
P = it([
  b("umb-workspace-footer")
], P);
const di = new f(
  "UmbWorkspaceContext",
  void 0,
  (t) => t.getName !== void 0
);
var _i = Object.defineProperty, vi = Object.getOwnPropertyDescriptor, Yt = (t) => {
  throw TypeError(t);
}, at = (t, e, i, s) => {
  for (var a = s > 1 ? void 0 : s ? vi(e, i) : e, r = t.length - 1, l; r >= 0; r--)
    (l = t[r]) && (a = (s ? l(e, i, a) : l(a)) || a);
  return s && a && _i(e, i, a), a;
}, mt = (t, e, i) => e.has(t) || Yt("Cannot " + i), pt = (t, e, i) => (mt(t, e, "read from private field"), e.get(t)), kt = (t, e, i) => e.has(t) ? Yt("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), mi = (t, e, i, s) => (mt(t, e, "write to private field"), e.set(t, i), i), Ot = (t, e, i) => (mt(t, e, "access private method"), i), A, Q, Gt, jt;
let W = class extends y {
  constructor() {
    super(), kt(this, Q), this.readonly = !1, this._name = "", kt(this, A), this.consumeContext(di, (t) => {
      mi(this, A, t), Ot(this, Q, Gt).call(this);
    });
  }
  render() {
    return c`<uui-input
			id="nameInput"
			data-mark="input:workspace-name"
			.value=${this._name}
			@input="${Ot(this, Q, jt)}"
			label=${this.label ?? this.localize.term("placeholders_entername")}
			placeholder=${this.placeholder ?? this.localize.term("placeholders_entername")}
			?readonly=${this.readonly}
			required
			${It(this, "$.name", this._name)}
			${Se()}></uui-input>`;
  }
};
A = /* @__PURE__ */ new WeakMap();
Q = /* @__PURE__ */ new WeakSet();
Gt = function() {
  pt(this, A) && this.observe(
    pt(this, A).name,
    (t) => {
      t !== this._name && (this._name = t ?? "");
    },
    "observeWorkspaceName"
  );
};
jt = function(t) {
  if (t instanceof Ut) {
    const e = t.composedPath()[0];
    typeof e?.value == "string" && pt(this, A)?.setName(e.value);
  }
};
W.styles = [
  C,
  w`
			:host {
				display: contents;
			}

			#nameInput {
				flex: 1 1 auto;
			}
		`
];
at([
  h()
], W.prototype, "label", 2);
at([
  h()
], W.prototype, "placeholder", 2);
at([
  p()
], W.prototype, "_name", 2);
W = at([
  b("umb-workspace-header-name-editable")
], W);
class fi extends De {
  //#variantId = new UmbClassState<UmbVariantId | undefined>(undefined);
  //variantId = this.#variantId.asObservable();
  constructor(e) {
    super(e, Qt), this.#e = new Be(void 0), this.index = this.#e.asObservable(), this.#a = new ze(void 0), this.isNew = this.#a.asObservable(), this.consumeContext(je, (i) => {
      this.#t = i, this._observeVariant(), this.#o();
    }), this.observe(this.index, () => {
      this._observeVariant();
    });
  }
  //
  #i;
  #t;
  getWorkspaceContext() {
    return this.#t;
  }
  #s;
  #e;
  #a;
  #o() {
    this.observe(
      this.#t?.isNew,
      (e) => {
        this.#a.setValue(e ?? !1);
      },
      "umbObserveIsNew"
    );
  }
  _observeVariant() {
    if (!this.#t) return;
    const e = this.#e.getValue();
    e !== void 0 && this.observe(
      this.#t.splitView.activeVariantByIndex(e),
      async (i) => {
        if (this.#i && this.#i.unprovide(), !i) return;
        this.#s?.destroy();
        const s = E.Create(i), a = this.#t?.getVariantValidationContext(s);
        a && (a.provideAt(this), this.#i = a), this.#s = this.#t?.createPropertyDatasetContext(this, s), this.getHostElement().setAttribute(Mt, "workspace-split-view:" + s.toString());
      },
      "_observeActiveVariant"
    );
  }
  switchVariant(e) {
    const i = this.#e.value;
    i !== void 0 && this.#t?.splitView.switchVariant(i, e);
  }
  closeSplitView() {
    const e = this.#e.value;
    e !== void 0 && this.#t?.splitView.closeSplitView(e);
  }
  openSplitView(e) {
    this.#t?.splitView.openSplitView(e);
  }
  getSplitViewIndex() {
    return this.#e.getValue();
  }
  setSplitViewIndex(e) {
    this.#e.setValue(e);
  }
  /**
   *
   * concept this class could have methods to set and get the culture and segment of the active variant? just by using the index.
   */
  /*
  	public destroy(): void {
  
  	}
  	*/
}
const Qt = new f(
  "UmbWorkspaceSplitViewContext"
);
var bi = Object.defineProperty, yi = Object.getOwnPropertyDescriptor, Jt = (t) => {
  throw TypeError(t);
}, _ = (t, e, i, s) => {
  for (var a = s > 1 ? void 0 : s ? yi(e, i) : e, r = t.length - 1, l; r >= 0; r--)
    (l = t[r]) && (a = (s ? l(e, i, a) : l(a)) || a);
  return s && a && bi(e, i, a), a;
}, ft = (t, e, i) => e.has(t) || Jt("Cannot " + i), v = (t, e, i) => (ft(t, e, "read from private field"), e.get(t)), ot = (t, e, i) => e.has(t) ? Jt("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), Vt = (t, e, i, s) => (ft(t, e, "write to private field"), e.set(t, i), i), n = (t, e, i) => (ft(t, e, "access private method"), i), x, g, o, Zt, te, ee, ut, ie, bt, ae, se, X, yt, ht, oe, ne, re, F, H, le, ce, pe, Y, ue, he, de, _e, ve, me, wt, R, L, gt;
let d = class extends y {
  constructor() {
    super(), ot(this, o), this._variantOptions = [], this._cultureVariantOptions = [], this._activeVariants = [], ot(this, x), ot(this, g), this._variantSelectorOpen = !1, this._readOnlyCultures = [], this._variesByCulture = !1, this._variesBySegment = !1, this._expandedVariants = [], this._labelDefault = "", this._variantSorter = (t, e) => 0, this._labelDefault = this.localize.term("general_default"), this.consumeContext(Qt, (t) => {
      Vt(this, x, t);
      const e = v(this, x)?.getWorkspaceContext();
      n(this, o, Zt).call(this, e), n(this, o, te).call(this, e), n(this, o, ut).call(this), this.observe(
        e?.variesBySegment,
        (i) => this._variesBySegment = i ?? !1,
        "umbObserveVariesBySegment"
      ), this.observe(
        e?.variesByCulture,
        (i) => this._variesByCulture = i ?? !1,
        "umbObserveVariesByCulture"
      );
    }), this.consumeContext(Re, (t) => {
      Vt(this, g, t), n(this, o, ee).call(this), n(this, o, ut).call(this);
    });
  }
  render() {
    return this._variantId ? c`
			<uui-input
				id="name-input"
				data-mark="input:entity-name"
				placeholder=${this.localize.term("placeholders_entername")}
				label=${this.localize.term("placeholders_entername")}
				autocomplete="off"
				.value=${n(this, o, me).call(this)}
				@input=${n(this, o, ie)}
				required
				?readonly=${n(this, o, F).call(this, this._activeVariant?.culture ?? null) || n(this, o, H).call(this, this._activeVariant)}
				${It(this, `$.variants[${Me(this._variantId)}].name`, this._name ?? "")}
				${Ve(n(this, o, re))}>
				${n(this, o, ht).call(this) ? c`
							<uui-button
								id="toggle"
								compact
								slot="append"
								popovertarget="popover"
								title=${n(this, o, R).call(this, this._activeVariant)}
								label="Select a variant">
								${n(this, o, R).call(this, this._activeVariant)}
								${n(this, o, L).call(this, this._activeVariant?.culture)}
								<uui-symbol-expand .open=${this._variantSelectorOpen}></uui-symbol-expand>
							</uui-button>
							${this._activeVariants.length > 1 ? c`
										<uui-button slot="append" compact id="variant-close" @click=${n(this, o, se)}>
											<uui-icon name="remove"></uui-icon>
										</uui-button>
									` : ""}
						` : c`<span id="read-only-tag" slot="append"> ${n(this, o, L).call(this, null)} </span>`}
			</uui-input>

			${n(this, o, ht).call(this) ? c`
						<uui-popover-container id="popover" @beforetoggle=${n(this, o, ne)} placement="bottom-end">
							<div id="dropdown">
								<uui-scroll-container>
									${this._cultureVariantOptions.map((t) => n(this, o, he).call(this, t))}
								</uui-scroll-container>
							</div>
						</uui-popover-container>
					` : u}
		` : u;
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _renderVariantDetails(t) {
    return c``;
  }
};
x = /* @__PURE__ */ new WeakMap();
g = /* @__PURE__ */ new WeakMap();
o = /* @__PURE__ */ new WeakSet();
Zt = async function(t) {
  this.observe(
    t?.variantOptions,
    (e) => {
      this._variantOptions = (e ?? []).sort(this._variantSorter), this._cultureVariantOptions = this._variantOptions.filter((i) => i.segment === null), n(this, o, oe).call(this, t);
    },
    "_observeVariantOptions"
  );
};
te = async function(t) {
  this.observe(
    t?.splitView.activeVariantsInfo,
    (e) => {
      e && (this._activeVariants = e.map((i) => E.Create(i)));
    },
    "_observeActiveVariants"
  );
};
ee = async function() {
  v(this, g) && this.observe(
    v(this, g).name,
    (t) => {
      this._name = t;
    },
    "_name"
  );
};
ut = async function() {
  if (!v(this, g) || !v(this, x)) return;
  const t = v(this, x).getWorkspaceContext();
  t && (this._variantId = v(this, g).getVariantId(), this.observe(
    t.variantOptions,
    (e) => {
      const i = e.find(
        (s) => s.culture === this._variantId?.culture && s.segment === this._variantId?.segment
      );
      this._activeVariant = i;
    },
    "umbObserveActiveVariant"
  ));
};
ie = function(t) {
  if (t instanceof Ut) {
    const e = t.composedPath()[0];
    typeof e?.value == "string" && v(this, g) && Le(v(this, g)) && v(this, g).setName(e.value);
  }
};
bt = function(t) {
  v(this, x)?.switchVariant(E.Create(t));
};
ae = function(t) {
  v(this, x)?.openSplitView(E.Create(t));
};
se = function() {
  v(this, x)?.closeSplitView();
};
X = function(t) {
  return this._activeVariants.find((e) => e.equal(t)) !== void 0;
};
yt = function(t, e) {
  return !t.variant && !n(this, o, X).call(this, e);
};
ht = function() {
  return !this._variesByCulture && this._variesBySegment ? this._cultureVariantOptions.length > 1 || this._variantOptions.length > 1 && this._variantOptions[0].variant?.state : this._variantOptions.length > 1;
};
oe = function(t) {
  t ? this._readOnlyCultures = this._variantOptions.filter((e) => t.readOnlyGuard.getIsPermittedForVariant(E.Create(e))).map((e) => e.culture) : this._readOnlyCultures = [];
};
ne = function(t) {
  if (this._variantSelectorOpen = t.newState === "open", !this._popoverElement || !(t.newState === "open")) return;
  const i = this.getBoundingClientRect();
  if (this._popoverElement.style.width = `${i.width}px`, n(this, o, H).call(this, this._activeVariant)) {
    const s = this._cultureVariantOptions.find((r) => r.culture === this._activeVariant?.culture && r.segment === null);
    if (!s) return;
    const a = E.Create(s);
    n(this, o, ce).call(this, a);
  }
};
re = function(t) {
  t && setTimeout(async () => {
    await this.updateComplete, t?.focus();
  }, 200);
};
F = function(t) {
  return this._readOnlyCultures.includes(t);
};
H = function(t) {
  return t?.segment !== null;
};
le = function(t, e) {
  t.stopPropagation(), n(this, o, pe).call(this, e);
};
ce = function(t) {
  n(this, o, Y).call(this, t) || (this._expandedVariants = [...this._expandedVariants, t]);
};
pe = function(t) {
  this._expandedVariants = n(this, o, Y).call(this, t) ? this._expandedVariants.filter((e) => e.equal(t) === !1) : [...this._expandedVariants, t];
};
Y = function(t) {
  return this._expandedVariants.find((e) => e.equal(t)) !== void 0;
};
ue = function(t, e) {
  const i = this._variantOptions.filter(
    (s) => s.culture === e.culture && s.segment !== null
  );
  return t.variant ? i : [];
};
he = function(t) {
  const e = E.Create(t), i = n(this, o, yt).call(this, t, e), s = n(this, o, ue).call(this, t, e);
  return c`
			<div class="variant culture-variant ${n(this, o, X).call(this, e) ? "selected" : ""}">
				${this._variesBySegment && n(this, o, de).call(this, t) && s.length > 0 ? c`<div class="expand-area">${n(this, o, _e).call(this, e)}</div>` : u}

				<button
					class="switch-button ${i ? "add-mode" : ""} ${n(this, o, F).call(this, e.culture) ? "readonly-mode" : ""}"
					@click=${() => n(this, o, bt).call(this, t)}>
					${i ? c`<uui-icon class="add-icon" name="icon-add"></uui-icon>` : u}
					<div class="variant-info">
						<div class="variant-name">
							${n(this, o, wt).call(this, t)}${n(this, o, L).call(this, e.culture)}
						</div>
						<div class="variant-details">
							<span>${this._renderVariantDetails(t)}</span>
						</div>
					</div>
					<div class="specs-info">${n(this, o, R).call(this, t)}</div>
				</button>
				${n(this, o, gt).call(this, t)}
			</div>
			${n(this, o, Y).call(this, e) ? c` ${s.map((a) => n(this, o, ve).call(this, a))} ` : u}
		`;
};
de = function(t) {
  return t.variant?.state && t.variant?.state !== "NotCreated";
};
_e = function(t) {
  return c`
			<uui-button @click=${(e) => n(this, o, le).call(this, e, t)} compact>
				<uui-symbol-expand .open=${n(this, o, Y).call(this, t)}></uui-symbol-expand>
			</uui-button>
		`;
};
ve = function(t) {
  const e = E.Create(t), i = n(this, o, yt).call(this, t, e);
  return c`
			<div class="variant segment-variant ${n(this, o, X).call(this, e) ? "selected" : ""}">
				${i ? u : c`<div class="expand-area"></div>`}
				<button
					class="switch-button ${i ? "add-mode" : ""} ${n(this, o, F).call(this, e.culture) ? "readonly-mode" : ""}"
					@click=${() => n(this, o, bt).call(this, t)}>
					${i ? c`<uui-icon class="add-icon" name="icon-add"></uui-icon>` : u}
					<div class="variant-info">
						<div class="variant-name">
							${n(this, o, wt).call(this, t)}${n(this, o, L).call(this, e.culture)}
						</div>
						<div class="variant-details">
							<span>${this._renderVariantDetails(t)}</span>
						</div>
					</div>
					<div class="specs-info">${n(this, o, R).call(this, t)}</div>
				</button>
				${n(this, o, gt).call(this, t)}
			</div>
		`;
};
me = function() {
  const t = n(this, o, H).call(this, this._activeVariant) && this._activeVariant?.segmentInfo?.name ? this._activeVariant.segmentInfo.name : "";
  return t !== "" ? t : this._name ?? "";
};
wt = function(t) {
  return n(this, o, H).call(this, t) ? t?.segmentInfo?.name ?? this._labelDefault : t.variant?.name ?? t.language.name;
};
R = function(t) {
  return t ? this._variesByCulture && this._variesBySegment ? t.segmentInfo ? `${t.language.name} - ${t.segmentInfo.name}` : t.language.name || this._labelDefault : !this._variesByCulture && this._variesBySegment ? t?.segmentInfo?.name ?? this._labelDefault : t.language.name : "";
};
L = function(t) {
  return t === void 0 ? u : n(this, o, F).call(this, t) ? c`<uui-tag look="secondary">${this.localize.term("general_readOnly")}</uui-tag>` : u;
};
gt = function(t) {
  const e = E.Create(t);
  return c`
			${n(this, o, X).call(this, e) ? u : c`
						<uui-button
							class="split-view"
							label="Open Split view for ${t.language.name}"
							@click=${() => n(this, o, ae).call(this, t)}>
							Open in Split view
						</uui-button>
					`}
		`;
};
d.styles = [
  C,
  w`
			#name-input {
				width: 100%;
			}

			#toggle {
				white-space: nowrap;
			}

			#popover {
				translate: 1px; /* Fixes tiny alignment issue caused by border */
			}

			#dropdown {
				overflow: hidden;
				z-index: -1;
				background-color: var(--uui-combobox-popover-background-color, var(--uui-color-surface));
				border: 1px solid var(--uui-color-border);
				border-radius: var(--uui-border-radius);
				width: 100%;
				height: auto;
				box-sizing: border-box;
				box-shadow: var(--uui-shadow-depth-3);
			}

			#variant-close {
				white-space: nowrap;
			}

			#read-only-tag {
				white-space: nowrap;
				display: flex;
				align-items: center;
				justify-content: center;
			}

			uui-scroll-container {
				max-height: 50dvh;
			}

			.variant {
				position: relative;
				display: flex;
				border-top: 1px solid var(--uui-color-divider-standalone);
			}

			.expand-area {
				position: relative;
				display: block;
				width: var(--uui-size-12);
				align-items: center;
				justify-content: center;
			}

			.expand-area uui-button {
				height: 100%;
				width: 100%;
			}

			uui-symbol-expand {
				background: none;
			}

			.variant:hover > .split-view {
				display: flex;
			}

			.variant:nth-last-of-type(1) {
				margin-bottom: 0;
			}

			.variant.selected:before {
				background-color: var(--uui-color-current);
				border-radius: 0 4px 4px 0;
				bottom: 8px;
				content: '';
				left: 0;
				pointer-events: none;
				position: absolute;
				top: 8px;
				width: 4px;
				z-index: 1;
			}

			.switch-button {
				display: flex;
				align-items: center;
				border: none;
				background: transparent;
				color: var(--uui-color-current-contrast);
				padding: var(--uui-size-space-2) var(--uui-size-space-6);
				font-weight: bold;
				width: 100%;
				text-align: left;
				font-size: 14px;
				cursor: pointer;
			}

			.expand-area + .switch-button {
				padding-left: var(--uui-size-space-3);
			}

			.segment-variant > .switch-button {
				padding-left: var(--uui-size-space-6);
			}

			.switch-button:hover {
				background: var(--uui-color-surface-emphasis);
				color: var(--uui-color-interactive-emphasis);
			}
			.switch-button .variant-info {
				flex-grow: 1;
			}

			.switch-button .variant-details {
				color: var(--uui-color-text-alt);
				font-size: var(--uui-type-small-size);
				font-weight: normal;
			}
			.switch-button .variant-details {
				color: var(--uui-color-text-alt);
				font-size: var(--uui-type-small-size);
				font-weight: normal;
			}
			.switch-button.add-mode .variant-details {
				color: var(--uui-palette-dusty-grey-dark);
			}

			.switch-button .specs-info {
				color: var(--uui-color-text-alt);
				font-size: var(--uui-type-small-size);
				font-weight: normal;
			}
			.switch-button.add-mode .specs-info {
				color: var(--uui-palette-dusty-grey-dark);
			}

			.switch-button i {
				font-weight: normal;
			}

			.switch-button.add-mode {
				position: relative;
				color: var(--uui-palette-dusty-grey-dark);
			}

			.switch-button.add-mode:after {
				border: 1px dashed var(--uui-color-divider-standalone);
				bottom: 0;
				content: '';
				left: 0;
				margin: 2px;
				pointer-events: none;
				position: absolute;
				right: 0;
				top: 0;
				z-index: 1;
			}

			.switch-button .variant-name {
				margin-bottom: var(--uui-size-space-1);
			}

			.switch-button.readonly-mode .variant-name {
				margin-bottom: calc(var(--uui-size-space-1) * -1);
			}

			.add-icon {
				font-size: var(--uui-type-small-size);
				margin-right: 21px;
			}

			.split-view {
				position: absolute;
				top: 0;
				right: 0;
				bottom: 1px;
				display: none;
				background-color: var(--uui-color-surface);
				font-size: var(--uui-type-small-size);
				font-weight: 700;
			}
		`
];
_([
  Wt("#popover")
], d.prototype, "_popoverElement", 2);
_([
  p()
], d.prototype, "_variantOptions", 2);
_([
  p()
], d.prototype, "_cultureVariantOptions", 2);
_([
  p()
], d.prototype, "_activeVariants", 2);
_([
  p()
], d.prototype, "_name", 2);
_([
  p()
], d.prototype, "_activeVariant", 2);
_([
  p()
], d.prototype, "_variantId", 2);
_([
  p()
], d.prototype, "_variantSelectorOpen", 2);
_([
  p()
], d.prototype, "_readOnlyCultures", 2);
_([
  p()
], d.prototype, "_variesByCulture", 2);
_([
  p()
], d.prototype, "_variesBySegment", 2);
_([
  p()
], d.prototype, "_expandedVariants", 2);
_([
  p()
], d.prototype, "_labelDefault", 2);
d = _([
  b("umb-workspace-split-view-variant-selector")
], d);
var wi = Object.defineProperty, gi = Object.getOwnPropertyDescriptor, fe = (t) => {
  throw TypeError(t);
}, I = (t, e, i, s) => {
  for (var a = s > 1 ? void 0 : s ? gi(e, i) : e, r = t.length - 1, l; r >= 0; r--)
    (l = t[r]) && (a = (s ? l(e, i, a) : l(a)) || a);
  return s && a && wi(e, i, a), a;
}, $i = (t, e, i) => e.has(t) || fe("Cannot " + i), xi = (t, e, i) => e.has(t) ? fe("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), St = (t, e, i) => ($i(t, e, "access private method"), i), J, be, ye;
let k = class extends y {
  constructor() {
    super(), xi(this, J), this.displayNavigation = !1, this._variantSelectorSlotHasContent = !1, this._isNew = !1, this.splitViewContext = new fi(this), this.observe(
      this.splitViewContext.isNew,
      (t) => {
        this._isNew = t ?? !1;
      },
      "umbObserveIsNew"
    );
  }
  set splitViewIndex(t) {
    this.splitViewContext.setSplitViewIndex(t);
  }
  get splitViewIndex() {
    return this.splitViewContext.getSplitViewIndex();
  }
  render() {
    return c`
			<umb-workspace-editor
				back-path=${vt(this.backPath)}
				.hideNavigation=${!this.displayNavigation}
				.enforceNoFooter=${!0}>
				<slot id="header" name="variant-selector" slot="header" @slotchange=${St(this, J, be)}>
					${At(
      !this._variantSelectorSlotHasContent,
      () => c`<umb-workspace-split-view-variant-selector></umb-workspace-split-view-variant-selector>`
    )}
				</slot>
				${St(this, J, ye).call(this)}
				<slot name="action-menu" slot="action-menu"></slot>
			</umb-workspace-editor>
		`;
  }
};
J = /* @__PURE__ */ new WeakSet();
be = function(t) {
  this._variantSelectorSlotHasContent = t.target.assignedNodes({ flatten: !0 }).length > 0;
};
ye = function() {
  return this._isNew ? u : this.displayNavigation ? c`<umb-workspace-entity-action-menu
			slot="action-menu"
			data-mark="workspace:action-menu"></umb-workspace-entity-action-menu>` : u;
};
k.styles = [
  C,
  w`
			:host {
				display: block;
				width: 100%;
				height: 100%;
				min-width: 0;
			}

			:host(:not(:last-child)) {
				border-right: 1px solid var(--uui-color-border);
			}

			#header {
				flex: 1 1 auto;
				display: block;
			}
		`
];
I([
  h({ type: Boolean })
], k.prototype, "displayNavigation", 2);
I([
  h({ attribute: "back-path" })
], k.prototype, "backPath", 2);
I([
  h({ type: Number })
], k.prototype, "splitViewIndex", 1);
I([
  p()
], k.prototype, "_variantSelectorSlotHasContent", 2);
I([
  p()
], k.prototype, "_isNew", 2);
k = I([
  b("umb-workspace-split-view")
], k);
var Ci = Object.defineProperty, Ei = Object.getOwnPropertyDescriptor, we = (t, e, i, s) => {
  for (var a = s > 1 ? void 0 : s ? Ei(e, i) : e, r = t.length - 1, l; r >= 0; r--)
    (l = t[r]) && (a = (s ? l(e, i, a) : l(a)) || a);
  return s && a && Ci(e, i, a), a;
};
let Z = class extends y {
  constructor() {
    super(...arguments), this.entityType = "";
  }
  render() {
    return c`
			<div class="uui-text">
				<h4>${this.localize.term("entityDetail_notFoundTitle", this.entityType)}</h4>
				${this.localize.term("entityDetail_notFoundDescription", this.entityType)}
			</div>
		`;
  }
};
Z.styles = [
  C,
  w`
			:host {
				display: block;
				width: 100%;
				height: 100%;
				min-width: 0;
			}

			:host > div {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				height: 100%;
			}

			@keyframes fadeIn {
				100% {
					opacity: 100%;
				}
			}
		`
];
we([
  h({ type: String, attribute: "entity-type" })
], Z.prototype, "entityType", 2);
Z = we([
  b("umb-entity-detail-not-found")
], Z);
const ki = new f(
  "UmbWorkspaceContext",
  void 0,
  (t) => t.IS_ENTITY_DETAIL_WORKSPACE_CONTEXT
);
var Oi = Object.defineProperty, Vi = Object.getOwnPropertyDescriptor, ge = (t) => {
  throw TypeError(t);
}, M = (t, e, i, s) => {
  for (var a = s > 1 ? void 0 : s ? Vi(e, i) : e, r = t.length - 1, l; r >= 0; r--)
    (l = t[r]) && (a = (s ? l(e, i, a) : l(a)) || a);
  return s && a && Oi(e, i, a), a;
}, $t = (t, e, i) => e.has(t) || ge("Cannot " + i), G = (t, e, i) => ($t(t, e, "read from private field"), e.get(t)), Tt = (t, e, i) => e.has(t) ? ge("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), Si = (t, e, i, s) => ($t(t, e, "write to private field"), e.set(t, i), i), Ti = (t, e, i) => ($t(t, e, "access private method"), i), V, dt, $e;
let O = class extends y {
  constructor() {
    super(), Tt(this, dt), this._isLoading = !1, this._exists = !1, this._isNew = !1, Tt(this, V), this.consumeContext(ki, (t) => {
      Si(this, V, t), this.observe(G(this, V)?.entityType, (e) => this._entityType = e), this.observe(G(this, V)?.loading.isOn, (e) => this._isLoading = e ?? !1), this.observe(G(this, V)?.data, (e) => this._exists = !!e), this.observe(G(this, V)?.isNew, (e) => this._isNew = e);
    });
  }
  render() {
    return c` ${!this._exists && !this._isLoading ? c`<umb-entity-detail-not-found entity-type=${vt(this._entityType)}></umb-entity-detail-not-found>` : u}

			<!-- TODO: It is currently on purpose that the workspace editor is always in the DOM, even when it doesn't have data.
			 We currently rely on the entity actions to be available to execute, and we ran into an issue when the entity got deleted; then the DOM got cleared, and the delete action couldn't complete.
			 We need to look into loading the entity actions in the workspace context instead so we don't rely on the DOM.
		 -->
			<umb-workspace-editor
				?loading=${this._isLoading}
				.backPath=${this.backPath}
				class="${this._exists === !1 ? "hide" : ""}">
				<slot name="header" slot="header"></slot>
				${Ti(this, dt, $e).call(this)}
				<slot></slot>
			</umb-workspace-editor>`;
  }
};
V = /* @__PURE__ */ new WeakMap();
dt = /* @__PURE__ */ new WeakSet();
$e = function() {
  return this._isNew ? u : c`<umb-workspace-entity-action-menu
			slot="action-menu"
			data-mark="workspace:action-menu"></umb-workspace-entity-action-menu>`;
};
O.styles = [
  w`
			umb-workspace-editor {
				visibility: visible;
			}

			umb-workspace-editor.hide {
				visibility: hidden;
			}
		`
];
M([
  h({ attribute: "back-path" })
], O.prototype, "backPath", 2);
M([
  p()
], O.prototype, "_entityType", 2);
M([
  p()
], O.prototype, "_isLoading", 2);
M([
  p()
], O.prototype, "_exists", 2);
M([
  p()
], O.prototype, "_isNew", 2);
O = M([
  b("umb-entity-detail-workspace-editor")
], O);
const ca = new f(
  "UmbWorkspaceContext",
  void 0,
  (t) => t.IS_ENTITY_NAMED_DETAIL_WORKSPACE_CONTEXT
);
var Pi = Object.defineProperty, Ai = Object.getOwnPropertyDescriptor, xe = (t, e, i, s) => {
  for (var a = s > 1 ? void 0 : s ? Ai(e, i) : e, r = t.length - 1, l; r >= 0; r--)
    (l = t[r]) && (a = (s ? l(e, i, a) : l(a)) || a);
  return s && a && Pi(e, i, a), a;
};
let tt = class extends y {
  render() {
    return c`
			<uui-box headline=${vt(this.headline ? this.localize.string(this.headline) : void 0)}>
				<slot name="header-actions" slot="header-actions"></slot>
				<div id="container">
					<slot></slot>
				</div>
			</uui-box>
		`;
  }
};
tt.styles = [
  w`
			uui-box {
				--uui-box-default-padding: 0;
			}
		`
];
xe([
  h({ type: String })
], tt.prototype, "headline", 2);
tt = xe([
  b("umb-workspace-info-app-layout")
], tt);
var Wi = Object.defineProperty, Ni = Object.getOwnPropertyDescriptor, Ce = (t, e, i, s) => {
  for (var a = s > 1 ? void 0 : s ? Ni(e, i) : e, r = t.length - 1, l; r >= 0; r--)
    (l = t[r]) && (a = (s ? l(e, i, a) : l(a)) || a);
  return s && a && Wi(e, i, a), a;
};
let N = class extends y {
  get data() {
    return this._data;
  }
  set data(t) {
    if (this._data = t, !t?.inheritValidationLook) {
      const e = this.style;
      e.setProperty("--uui-color-invalid", "var(--uui-color-danger)"), e.setProperty("--uui-color-invalid-emphasis", "var(--uui-color-danger-emphasis)"), e.setProperty("--uui-color-invalid-standalone", "var(--uui-color-danger-standalone)"), e.setProperty("--uui-color-invalid-contrast", "var(--uui-color-danger-contrast)");
    }
  }
  /**
   * TODO: Consider if this binding and events integration is the right for communicating back the modal handler. Or if we should go with some Context API. like a Modal Context API.
   *
   */
  render() {
    return this.data ? c`<umb-workspace .entityType=${this.data.entityType}></umb-workspace>` : "";
  }
};
N.styles = [
  C,
  w`
			:host {
				display: block;
				height: 100%;
			}
		`
];
Ce([
  h({ attribute: !1 })
], N.prototype, "data", 1);
N = Ce([
  b("umb-workspace-modal")
], N);
const Ui = N, pa = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get UmbWorkspaceModalElement() {
    return N;
  },
  default: Ui
}, Symbol.toStringTag, { value: "Module" })), ua = new Ie(
  "Umb.Modal.Workspace",
  {
    modal: {
      type: "sidebar",
      size: "large"
    }
  }
);
var Ii = Object.defineProperty, Mi = Object.getOwnPropertyDescriptor, Ee = (t) => {
  throw TypeError(t);
}, xt = (t, e, i, s) => {
  for (var a = s > 1 ? void 0 : s ? Mi(e, i) : e, r = t.length - 1, l; r >= 0; r--)
    (l = t[r]) && (a = (s ? l(e, i, a) : l(a)) || a);
  return s && a && Ii(e, i, a), a;
}, Ct = (t, e, i) => e.has(t) || Ee("Cannot " + i), et = (t, e, i) => (Ct(t, e, "read from private field"), i ? i.call(t) : e.get(t)), nt = (t, e, i) => e.has(t) ? Ee("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), ke = (t, e, i, s) => (Ct(t, e, "write to private field"), e.set(t, i), i), Di = (t, e, i) => (Ct(t, e, "access private method"), i), z, B, _t, Oe;
const Bi = (t) => [{ manifest: t }];
let U = class extends y {
  constructor() {
    super(...arguments), nt(this, _t), nt(this, z), nt(this, B);
  }
  get entityType() {
    return et(this, B);
  }
  set entityType(t) {
    t === et(this, B) || !t || (ke(this, B, t), Di(this, _t, Oe).call(this, t));
  }
  firstUpdated(t) {
    super.firstUpdated(t), this.setAttribute(Mt, "workspace");
  }
  render() {
    return this._component ?? u;
  }
};
z = /* @__PURE__ */ new WeakMap();
B = /* @__PURE__ */ new WeakMap();
_t = /* @__PURE__ */ new WeakSet();
Oe = function(t) {
  et(this, z) && et(this, z).destroy(), ke(this, z, new We(
    this,
    rt,
    "workspace",
    Bi,
    (e) => e.meta.entityType === t,
    (e) => {
      this._component = e[0]?.component;
      const i = e[0]?.api;
      i && new Ne(i, rt, "workspaceContext", [i]);
    },
    void 0,
    // We can leave the alias to undefined, as we destroy this our selfs.
    void 0,
    () => import("./default-workspace.context-BlDeWTfK.js"),
    { single: !0 }
  ));
};
xt([
  p()
], U.prototype, "_component", 2);
xt([
  h({ type: String, attribute: "entity-type" })
], U.prototype, "entityType", 1);
U = xt([
  b("umb-workspace")
], U);
const ha = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get UmbWorkspaceElement() {
    return U;
  },
  get element() {
    return U;
  }
}, Symbol.toStringTag, { value: "Module" }));
export {
  ua as A,
  Je as B,
  U as C,
  pa as D,
  ha as E,
  Qe as U,
  ia as a,
  je as b,
  la as c,
  Ge as d,
  S as e,
  m as f,
  T as g,
  P as h,
  W as i,
  fi as j,
  Qt as k,
  k as l,
  d as m,
  aa as n,
  sa as o,
  di as p,
  ki as q,
  Ye as r,
  oa as s,
  na as t,
  ra as u,
  ca as v,
  Z as w,
  O as x,
  tt as y,
  N as z
};
//# sourceMappingURL=workspace.element-CAJljmTw.js.map
