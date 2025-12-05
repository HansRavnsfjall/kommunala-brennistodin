import { UmbActionBase as Lt, UMB_ACTION_EVENT_CONTEXT as dt } from "@umbraco-cms/backoffice/action";
import { U as Gs } from "../workspace-action-menu.element-DYa1t5-x.js";
import { b as ze, c as Ft, d as Le, a as Fe, U as He } from "../constants-CUqy5m1J.js";
import { h as Ys, i as Qs, j as Js, e as Zs, f as ta, g as ea } from "../constants-CUqy5m1J.js";
import { UmbBooleanState as ht, UmbBasicState as Wt, mergeObservables as Ke, UmbNumberState as Xe, UmbClassState as Ge, observeMultiple as je, UmbArrayState as Ht, UmbStringState as Ye, UmbObjectState as _t, jsonStringComparison as Qe } from "@umbraco-cms/backoffice/observable-api";
import { a as Je } from "../paths-BcqA3SeO.js";
import { U as sa } from "../paths-BcqA3SeO.js";
import { UmbViewContext as Kt } from "@umbraco-cms/backoffice/view";
import { UmbContextToken as R } from "@umbraco-cms/backoffice/context-api";
import { UmbContextBase as ut, UmbControllerBase as gt } from "@umbraco-cms/backoffice/class-api";
import { UmbExtensionsManifestInitializer as Ze, createExtensionElement as ti, UmbExtensionApiInitializer as ei } from "@umbraco-cms/backoffice/extension-api";
import { umbExtensionsRegistry as Xt } from "@umbraco-cms/backoffice/extension-registry";
import { css as E, property as v, state as u, customElement as x, when as Gt, html as h, nothing as p, repeat as ii, query as si, ref as ai, ifDefined as ct } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as V, umbFocus as ri } from "@umbraco-cms/backoffice/lit-element";
import { UmbTextStyles as U } from "@umbraco-cms/backoffice/style";
import { UMB_MODAL_CONTEXT as jt, umbOpenModal as ni, UMB_DISCARD_CHANGES_MODAL as oi, UmbModalToken as li } from "@umbraco-cms/backoffice/modal";
import { UmbGuardManagerBase as hi, UmbStateManager as Dt, UmbDeprecation as ui, umbUrlPatternToString as ci, ensurePathEndsWithSlash as di } from "@umbraco-cms/backoffice/utils";
import { UUIInputEvent as Yt } from "@umbraco-cms/backoffice/external/uui";
import { umbBindToValidation as Qt, UmbDataPathVariantQuery as pi, UmbValidationContext as vi } from "@umbraco-cms/backoffice/validation";
import { UmbVariantId as _, UmbVariantContext as mi } from "@umbraco-cms/backoffice/variant";
import { UMB_MARK_ATTRIBUTE_NAME as _i } from "@umbraco-cms/backoffice/const";
import { UMB_PROPERTY_DATASET_CONTEXT as Jt, isNameablePropertyDatasetContext as fi } from "@umbraco-cms/backoffice/property";
import { UMB_HINT_CONTEXT as bi } from "@umbraco-cms/backoffice/hint";
import { UmbEntityContext as yi } from "@umbraco-cms/backoffice/entity";
import { UmbEntityUpdatedEvent as tt, UmbRequestReloadStructureForEntityEvent as Rt, UmbRequestReloadChildrenOfEntityEvent as wi } from "@umbraco-cms/backoffice/entity-action";
import { UmbId as gi } from "@umbraco-cms/backoffice/id";
import { UmbApiError as Ci } from "@umbraco-cms/backoffice/resources";
import { UmbWorkspaceModalElement as ra } from "../workspace-modal.element-Hou9-as0.js";
import { UmbWorkspaceElement as oa, UmbWorkspaceElement as la } from "../workspace.element-tg2OuAH5.js";
class Ns extends Lt {
  /**
   * By specifying the href, the action will act as a link.
   * The `execute` method will not be called.
   * @abstract
   * @returns {string | undefined}
   */
  getHref() {
    return Promise.resolve(void 0);
  }
  /**
   * By specifying the `execute` method, the action will act as a button.
   * @abstract
   * @returns {Promise<void>}
   */
  execute() {
    return Promise.resolve();
  }
}
class Zt extends Lt {
  constructor() {
    super(...arguments), this._isDisabled = new ht(!1), this.isDisabled = this._isDisabled.asObservable();
  }
  /**
   * By specifying the href, the action will act as a link.
   * The `execute` method will not be called.
   * @abstract
   * @returns {string | undefined}
   */
  getHref() {
    return Promise.resolve(void 0);
  }
  /**
   * By specifying the `execute` method, the action will act as a button.
   * @abstract
   * @returns {Promise<void>}
   */
  execute() {
    return Promise.resolve();
  }
  /**
   * Disables the action.
   * @memberof UmbWorkspaceActionBase
   */
  disable() {
    this._isDisabled.setValue(!0);
  }
  /**
   * Enables the action.
   * @memberof UmbWorkspaceActionBase
   */
  enable() {
    this._isDisabled.setValue(!1);
  }
}
class As extends Zt {
  constructor(t, i) {
    super(t, i), this._retrieveWorkspaceContext = this.consumeContext(
      i.workspaceContextToken ?? ze,
      (s) => {
        this._workspaceContext = s, this.#t(), this._gotWorkspaceContext();
      }
    ).asPromise().catch(() => {
    });
  }
  #t() {
    this.observe(
      this._workspaceContext?.unique,
      (t) => {
        t === void 0 ? this.disable() : this.enable();
      },
      "saveWorkspaceActionUniqueObserver"
    );
  }
  _gotWorkspaceContext() {
  }
  async execute() {
    await this._retrieveWorkspaceContext, await this._workspaceContext?.requestSave();
  }
}
class Ws extends Zt {
  constructor(t, i) {
    super(t, i), this._retrieveWorkspaceContext = this.consumeContext(
      i.workspaceContextToken ?? Ft,
      (s) => {
        this._workspaceContext = s, this.#t(), this._gotWorkspaceContext();
      }
    ).asPromise();
  }
  #t() {
    this.observe(
      this._workspaceContext?.unique,
      (t) => {
        t === void 0 ? this.disable() : this.enable();
      },
      "saveWorkspaceActionUniqueObserver"
    );
  }
  _gotWorkspaceContext() {
  }
  async execute() {
    return await this._retrieveWorkspaceContext, await this._workspaceContext.requestSubmit();
  }
}
class Ei extends Kt {
  constructor(t, i) {
    super(t, i.alias), this.IS_WORKSPACE_VIEW_CONTEXT = !0, this.manifest = i;
  }
}
const xi = new R("UmbWorkspaceViewContext");
class Vi extends ut {
  constructor(t) {
    super(t, xi), this.#e = new Wt([]), this.#i = new Wt([]), this.views = Ke(
      [this.#e.asObservable(), this.#i.asObservable()],
      ([i, s]) => {
        let a = this.#s;
        const r = a.filter((c) => {
          const d = i.some((Z) => Z.alias === c.manifest.alias);
          return d || c.destroy(), d;
        });
        return r.length !== i.length && (a = [...r], i.filter((c) => !r.some((d) => d.manifest.alias === c.alias)).forEach((c) => {
          const d = new Ei(this, c);
          d.setVariantId(this.#a), d.setTitle(c.meta.label), d.inherit(), a.push(d);
        })), a.forEach((c) => {
          const d = s.find((Z) => Z.alias === c.manifest.alias);
          d && Object.keys(d).some((At) => c.manifest[At] !== d[At]) && (c.manifest = {
            ...c.manifest,
            ...d,
            meta: { ...c.manifest.meta, ...d.meta }
          });
        }), a.sort((c, d) => (d.manifest.weight || 0) - (c.manifest.weight || 0)), this.#s = a, a;
      },
      // Custom memoize method, to check context instance and manifest instance:
      (i, s) => i === s && s.some(
        (a) => a.manifest === i.find((r) => r.manifest.alias === a.manifest.alias)?.manifest
      )
    ), this.#s = new Array(), this.#t = new Ze(
      this,
      Xt,
      "workspaceView",
      null,
      (i) => {
        this.#e.setValue(i.map((s) => s.manifest));
      }
    ).asPromise();
  }
  //
  #t;
  #e;
  #i;
  #s;
  #a;
  setVariantId(t) {
    this.#a = t, this.#s.forEach((i) => {
      i.hints.updateScaffold({ variantId: t });
    });
  }
  setOverrides(t) {
    this.#i.setValue(t ?? []);
  }
  async getViewContext(t) {
    return await this.#t, this.#s.find((i) => i.manifest.alias === t);
  }
}
var Oi = Object.defineProperty, Pi = Object.getOwnPropertyDescriptor, te = (e) => {
  throw TypeError(e);
}, w = (e, t, i, s) => {
  for (var a = s > 1 ? void 0 : s ? Pi(t, i) : t, r = e.length - 1, n; r >= 0; r--)
    (n = e[r]) && (a = (s ? n(t, i, a) : n(a)) || a);
  return s && a && Oi(t, i, a), a;
}, Ct = (e, t, i) => t.has(e) || te("Cannot " + i), W = (e, t, i) => (Ct(e, t, "read from private field"), i ? i.call(e) : t.get(e)), et = (e, t, i) => t.has(e) ? te("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), ee = (e, t, i, s) => (Ct(e, t, "write to private field"), t.set(e, i), i), A = (e, t, i) => (Ct(e, t, "access private method"), i), z, at, $, ft, H, ie, se, ae, re;
let f = class extends V {
  constructor() {
    super(), et(this, $), et(this, z, new Vi(this)), et(this, at, []), this.headline = "", this.hideNavigation = !1, this.enforceNoFooter = !1, this.loading = !1, this._workspaceViews = [], this._hintMap = /* @__PURE__ */ new Map(), et(this, H), this.observe(
      W(this, z).views,
      (e) => {
        this._workspaceViews = e, A(this, $, ft).call(this), A(this, $, ie).call(this);
      },
      null
    );
  }
  get variantId() {
    return this._variantId;
  }
  set variantId(e) {
    e && this._variantId?.equal(e) || (this._variantId = e, W(this, z).setVariantId(e), A(this, $, ft).call(this));
  }
  set overrides(e) {
    W(this, z).setOverrides(e);
  }
  get overrides() {
  }
  render() {
    return h`
			<umb-body-layout main-no-padding .headline=${this.headline} ?loading=${this.loading}>
				${A(this, $, ae).call(this)}
				<slot name="header" slot="header"></slot>
				<slot name="action-menu" slot="action-menu"></slot>
				${A(this, $, se).call(this)} ${A(this, $, re).call(this)}
				<slot></slot>
				${Gt(
      !this.enforceNoFooter,
      () => h`
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
z = /* @__PURE__ */ new WeakMap();
at = /* @__PURE__ */ new WeakMap();
$ = /* @__PURE__ */ new WeakSet();
ft = function() {
  W(this, at).forEach((e) => e.destroy()), this._hintMap = /* @__PURE__ */ new Map(), ee(this, at, this._workspaceViews.map(
    (e, t) => this.observe(
      e.firstHintOfVariant,
      (i) => {
        i ? this._hintMap.set(e.manifest.alias, i) : this._hintMap.delete(e.manifest.alias), this.requestUpdate("_hintMap");
      },
      "umbObserveState_" + t
    )
  ));
};
H = /* @__PURE__ */ new WeakMap();
ie = function() {
  let e = [];
  this._workspaceViews.length > 0 && (e = this._workspaceViews.map((t) => {
    const i = t.manifest;
    return {
      path: Je.generateLocal({ viewPathname: i.meta.pathname }),
      component: () => ti(i),
      setup: (s) => {
        W(this, H) !== t && W(this, H)?.unprovide(), s && (ee(this, H, t), t.provideAt(s), s.manifest = i);
      }
    };
  }), e.push({ ...e[0], unique: e[0].path, path: "" })), e.push({
    path: "**",
    component: async () => (await import("@umbraco-cms/backoffice/router")).UmbRouteNotFoundElement
  }), this._routes = e;
};
se = function() {
  return h`
			${!this.hideNavigation && this._workspaceViews.length > 1 ? h`
						<uui-tab-group slot="navigation" data-mark="workspace:view-links">
							${ii(
    this._workspaceViews,
    (e) => e.manifest.alias,
    (e, t) => {
      const i = e.manifest, s = i.meta.label ? this.localize.string(i.meta.label) : i.name, a = this._hintMap.get(i.alias), r = "view/" + i.meta.pathname === this._activePath || t === 0 && this._activePath === "";
      return h`
										<uui-tab
											href="${this._routerPath}/view/${i.meta.pathname}"
											.label=${s}
											?active=${r}
											data-mark="workspace:view-link:${i.alias}">
											<div slot="icon">
												<umb-icon name=${i.meta.icon}></umb-icon> ${a && !r ? h`<umb-badge .color=${a.color ?? "default"} ?attention=${a.color === "invalid"}
															>${a.text}</umb-badge
														>` : p}
											</div>
											${s}
										</uui-tab>
									`;
    }
  )}
						</uui-tab-group>
					` : p}
		`;
};
ae = function() {
  return this.backPath ? h`
			<uui-button
				slot="header"
				class="back-button"
				compact
				href=${this.backPath}
				label=${this.localize.term("general_back")}
				data-mark="action:back">
				<uui-icon name="icon-arrow-left"></uui-icon>
			</uui-button>
		` : p;
};
re = function() {
  return !this._routes || this._routes.length === 0 || !this._workspaceViews || this._workspaceViews.length === 0 ? p : h`
			<umb-router-slot
				inherit-addendum
				id="router-slot"
				.routes=${this._routes}
				@init=${(e) => {
    this._routerPath = e.target.absoluteRouterPath;
  }}
				@change=${(e) => {
    this._activePath = e.target.localActiveViewPath;
  }}></umb-router-slot>
		`;
};
f.styles = [
  U,
  E`
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

			div[slot='icon'] {
				position: relative;
			}

			umb-badge {
				font-size: var(--uui-type-small-size);
				right: -1.5em;
			}

			umb-extension-slot[slot='actions'] {
				display: flex;
				gap: var(--uui-size-space-2);
			}
		`
];
w([
  v()
], f.prototype, "headline", 2);
w([
  v({ type: Boolean })
], f.prototype, "hideNavigation", 2);
w([
  v({ type: Boolean })
], f.prototype, "enforceNoFooter", 2);
w([
  v({ attribute: "back-path" })
], f.prototype, "backPath", 2);
w([
  v({ type: Boolean })
], f.prototype, "loading", 2);
w([
  v({ attribute: !1 })
], f.prototype, "variantId", 1);
w([
  v({ attribute: !1 })
], f.prototype, "overrides", 1);
w([
  u()
], f.prototype, "_workspaceViews", 2);
w([
  u()
], f.prototype, "_hintMap", 2);
w([
  u()
], f.prototype, "_routes", 2);
w([
  u()
], f.prototype, "_routerPath", 2);
w([
  u()
], f.prototype, "_activePath", 2);
f = w([
  x("umb-workspace-editor")
], f);
const Ds = new R(
  "UmbViewContext",
  void 0,
  (e) => e.IS_WORKSPACE_VIEW_CONTEXT
);
var Si = Object.defineProperty, $i = Object.getOwnPropertyDescriptor, Et = (e, t, i, s) => {
  for (var a = s > 1 ? void 0 : s ? $i(t, i) : t, r = e.length - 1, n; r >= 0; r--)
    (n = e[r]) && (a = (s ? n(t, i, a) : n(a)) || a);
  return s && a && Si(t, i, a), a;
};
let K = class extends V {
  constructor() {
    super(), this.consumeContext(Le, (e) => {
      this._workspaceContext = e, this.observe(this._workspaceContext?.unique, (t) => {
        this._unique = t, this._entityType = this._workspaceContext?.getEntityType();
      });
    });
  }
  render() {
    return this._entityType ? this._unique === void 0 ? p : h`<umb-entity-actions-dropdown
			data-mark="workspace:action-menu-button"
			label=${this.localize.term("general_actions")}>
			<uui-symbol-more slot="label"></uui-symbol-more>
		</umb-entity-actions-dropdown>` : p;
  }
};
K.styles = [
  U,
  E`
			:host {
				height: 100%;
				margin-left: calc(var(--uui-size-layout-1) * -1);
			}

			umb-entity-actions-dropdown {
				height: 100%;
			}
		`
];
Et([
  u()
], K.prototype, "_unique", 2);
Et([
  u()
], K.prototype, "_entityType", 2);
K = Et([
  x("umb-workspace-entity-action-menu")
], K);
var Ti = Object.defineProperty, Ui = Object.getOwnPropertyDescriptor, ne = (e) => {
  throw TypeError(e);
}, xt = (e, t, i, s) => {
  for (var a = s > 1 ? void 0 : s ? Ui(t, i) : t, r = e.length - 1, n; r >= 0; r--)
    (n = e[r]) && (a = (s ? n(t, i, a) : n(a)) || a);
  return s && a && Ti(t, i, a), a;
}, ki = (e, t, i) => t.has(e) || ne("Cannot " + i), Ii = (e, t, i) => (ki(e, t, "read from private field"), i ? i.call(e) : t.get(e)), Ni = (e, t, i) => t.has(e) ? ne("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), bt;
function Ai(e) {
  return [{ meta: e.meta }];
}
let X = class extends V {
  constructor() {
    super(), Ni(this, bt, () => {
      this._modalContext?.reject();
    }), this.consumeContext(Ft, (e) => {
      this._isNew = e?.getIsNew();
    }), this.consumeContext(jt, (e) => {
      this._modalContext = e;
    });
  }
  // TODO: Some event/callback from umb-extension-slot that can be utilized to hide the footer, if empty.
  render() {
    return h`
			<umb-footer-layout>
				<umb-extension-slot type="workspaceFooterApp"></umb-extension-slot>
				<slot></slot>
				${this._modalContext ? h`<uui-button
							slot="actions"
							label=${this._isNew ? "Cancel" : "Close"}
							@click=${Ii(this, bt)}></uui-button>` : ""}

				<slot name="actions" slot="actions"></slot>
				<umb-extension-with-api-slot
					slot="actions"
					type="workspaceAction"
					.apiArgs=${Ai}></umb-extension-with-api-slot>
			</umb-footer-layout>
		`;
  }
};
bt = /* @__PURE__ */ new WeakMap();
X.styles = [
  U,
  E`
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
xt([
  u()
], X.prototype, "_modalContext", 2);
xt([
  u()
], X.prototype, "_isNew", 2);
X = xt([
  x("umb-workspace-footer")
], X);
const Wi = new R(
  "UmbWorkspaceContext",
  void 0,
  (e) => e.getName !== void 0
);
class Di extends hi {
  isPermittedForName() {
    return this._rules.asObservablePart((t) => this.#t(t));
  }
  #t(t) {
    return t.some((i) => i.permitted === !1) ? !1 : t.some((i) => i.permitted === !0) ? !0 : this._fallback;
  }
}
var Ri = Object.defineProperty, Mi = Object.getOwnPropertyDescriptor, oe = (e) => {
  throw TypeError(e);
}, j = (e, t, i, s) => {
  for (var a = s > 1 ? void 0 : s ? Mi(t, i) : t, r = e.length - 1, n; r >= 0; r--)
    (n = e[r]) && (a = (s ? n(t, i, a) : n(a)) || a);
  return s && a && Ri(t, i, a), a;
}, Vt = (e, t, i) => t.has(e) || oe("Cannot " + i), rt = (e, t, i) => (Vt(e, t, "read from private field"), t.get(e)), Mt = (e, t, i) => t.has(e) ? oe("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), Bi = (e, t, i, s) => (Vt(e, t, "write to private field"), t.set(e, i), i), pt = (e, t, i) => (Vt(e, t, "access private method"), i), k, L, le, he, ue;
let I = class extends V {
  constructor() {
    super(), Mt(this, L), this.readonly = !1, this._name = "", this._isWritableName = !0, Mt(this, k), this.consumeContext(Wi, (e) => {
      Bi(this, k, e), pt(this, L, he).call(this), pt(this, L, le).call(this);
    });
  }
  render() {
    return h`<uui-input
			id="nameInput"
			data-mark="input:workspace-name"
			.value=${this._name}
			@input="${pt(this, L, ue)}"
			label=${this.label ?? this.localize.term("placeholders_entername")}
			placeholder=${this.placeholder ?? this.localize.term("placeholders_entername")}
			?readonly=${this.readonly || !this._isWritableName}
			required
			${Qt(this, "$.name", this._name)}
			${ri()}></uui-input>`;
  }
};
k = /* @__PURE__ */ new WeakMap();
L = /* @__PURE__ */ new WeakSet();
le = function() {
  this.observe(
    rt(this, k)?.nameWriteGuard?.isPermittedForName(),
    (e) => {
      this._isWritableName = e ?? !0;
    },
    "umbObserveWorkspaceNameWriteGuardRules"
  );
};
he = function() {
  rt(this, k) && this.observe(
    rt(this, k).name,
    (e) => {
      e !== this._name && (this._name = e ?? "");
    },
    "observeWorkspaceName"
  );
};
ue = function(e) {
  if (e instanceof Yt) {
    const t = e.composedPath()[0];
    typeof t?.value == "string" && rt(this, k)?.setName(t.value);
  }
};
I.styles = [
  U,
  E`
			:host {
				display: contents;
			}

			#nameInput {
				flex: 1 1 auto;
			}
		`
];
j([
  v()
], I.prototype, "label", 2);
j([
  v()
], I.prototype, "placeholder", 2);
j([
  u()
], I.prototype, "_name", 2);
j([
  u()
], I.prototype, "_isWritableName", 2);
I = j([
  x("umb-workspace-header-name-editable")
], I);
class qi extends ut {
  constructor(t) {
    super(t, ce), this.#s = new Xe(void 0), this.index = this.#s.asObservable(), this.#a = new ht(void 0), this.isNew = this.#a.asObservable(), this.#r = new Ge(void 0), this.variantId = this.#r.asObservable(), this.consumeContext(Fe, (i) => {
      this.#e = i, this.#o(), this.#n();
    }), this.observe(
      this.index,
      () => {
        this.#o();
      },
      null
    );
  }
  //
  #t;
  #e;
  getWorkspaceContext() {
    return this.#e;
  }
  #i;
  #s;
  #a;
  #r;
  #n() {
    this.observe(
      this.#e?.isNew,
      (t) => {
        this.#a.setValue(t ?? !1);
      },
      "umbObserveIsNew"
    );
  }
  #o() {
    if (!this.#e) return;
    const t = this.#s.getValue();
    t !== void 0 && this.observe(
      this.#e.splitView.activeVariantByIndex(t),
      async (i) => {
        if (this.#t && this.#t.unprovide(), !i) return;
        this.#i?.destroy();
        const s = _.Create(i);
        this.#r.setValue(s);
        const a = this.#e?.getVariantValidationContext(s);
        a && (a.provideAt(this), this.#t = a), this.#i = this.#e?.createPropertyDatasetContext(this, s), this.getHostElement().setAttribute(_i, "workspace-split-view:" + s.toString());
      },
      "_observeActiveVariant"
    );
  }
  switchVariant(t) {
    const i = this.#s.value;
    i !== void 0 && this.#e?.splitView.switchVariant(i, t);
  }
  closeSplitView() {
    const t = this.#s.value;
    t !== void 0 && this.#e?.splitView.closeSplitView(t);
  }
  openSplitView(t) {
    this.#e?.splitView.openSplitView(t);
  }
  getSplitViewIndex() {
    return this.#s.getValue();
  }
  setSplitViewIndex(t) {
    this.#s.setValue(t);
  }
  /**
   *
   * concept this class could have methods to set and get the culture and segment of the active variant? just by using the index.
   */
  destroy() {
    this.#a.destroy(), this.#r.destroy(), this.#s.destroy(), this.#t?.unprovide(), this.#i?.destroy(), this.#e = void 0, this.#t = void 0, this.#i = void 0, super.destroy();
  }
}
const ce = new R(
  "UmbWorkspaceSplitViewContext"
);
var zi = Object.defineProperty, Li = Object.getOwnPropertyDescriptor, de = (e) => {
  throw TypeError(e);
}, b = (e, t, i, s) => {
  for (var a = s > 1 ? void 0 : s ? Li(t, i) : t, r = e.length - 1, n; r >= 0; r--)
    (n = e[r]) && (a = (s ? n(t, i, a) : n(a)) || a);
  return s && a && zi(t, i, a), a;
}, Ot = (e, t, i) => t.has(e) || de("Cannot " + i), y = (e, t, i) => (Ot(e, t, "read from private field"), t.get(e)), vt = (e, t, i) => t.has(e) ? de("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), Bt = (e, t, i, s) => (Ot(e, t, "write to private field"), t.set(e, i), i), l = (e, t, i) => (Ot(e, t, "access private method"), i), O, C, o, pe, ve, me, _e, yt, fe, be, Pt, ye, we, M, St, wt, $t, ge, Ce, Y, Q, Ee, Tt, xe, J, Ve, Oe, Ut, Pe, Se, $e, Te, kt, D, G, It;
let m = class extends V {
  constructor() {
    super(), vt(this, o), this._variantOptions = [], this._cultureVariantOptions = [], this._activeVariants = [], vt(this, O), vt(this, C), this._variantSelectorOpen = !1, this._readOnlyCultures = [], this._variesByCulture = !1, this._variesBySegment = !1, this._expandedVariants = [], this._labelDefault = "", this._variantSorter = (e, t) => 0, this._hintMap = /* @__PURE__ */ new Map(), this._labelDefault = this.localize.term("general_default"), this.consumeContext(ce, (e) => {
      Bt(this, O, e);
      const t = y(this, O)?.getWorkspaceContext();
      l(this, o, ve).call(this, t), l(this, o, me).call(this, t), l(this, o, yt).call(this), l(this, o, fe).call(this, t), this.observe(
        t?.variesBySegment,
        (i) => this._variesBySegment = i ?? !1,
        "umbObserveVariesBySegment"
      ), this.observe(
        t?.variesByCulture,
        (i) => this._variesByCulture = i ?? !1,
        "umbObserveVariesByCulture"
      );
    }), this.consumeContext(Jt, (e) => {
      Bt(this, C, e), l(this, o, _e).call(this), l(this, o, yt).call(this);
    }), this.consumeContext(bi, (e) => {
      this.observe(
        e?.descendingHints(),
        (t) => {
          this._hintMap.clear(), t?.forEach((i) => {
            if (l(this, o, pe).call(this, i) && i.variantId) {
              const s = this._hintMap.get(i.variantId.toString());
              (!s || s.weight < i.weight) && this._hintMap.set(i.variantId.toString(), i);
            }
          }), this.requestUpdate("_hintMap");
        },
        "umbObserveHints"
      );
    });
  }
  render() {
    if (!this._variantId) return p;
    let e;
    return this._activeVariant && (e = Array.from(this._hintMap.values()).sort((i, s) => (s.weight || 0) - (i.weight || 0)).find((i) => i.variantId ? !i.variantId.isInvariant() && l(this, o, M).call(this, i.variantId) === !1 : !1)), h`
			<uui-input
				id="name-input"
				data-mark="input:entity-name"
				placeholder=${this.localize.term("placeholders_entername")}
				label=${this.localize.term("placeholders_entername")}
				autocomplete="off"
				.value=${l(this, o, Te).call(this)}
				@input=${l(this, o, be)}
				required
				?readonly=${l(this, o, Y).call(this, this._activeVariant?.culture ?? null) || l(this, o, Q).call(this, this._activeVariant)}
				${Qt(this, `$.variants[${pi(this._variantId)}].name`, this._name ?? "")}
				${ai(l(this, o, Ce))}>
				${l(this, o, wt).call(this) ? h`
							<uui-button
								id="toggle"
								compact
								slot="append"
								popovertarget="popover"
								title=${l(this, o, D).call(this, this._activeVariant)}
								label=${this._variantSelectorOpen ? this.localize.term("buttons_closeVersionSelector") : this.localize.term("buttons_openVersionSelector")}>
								${l(this, o, D).call(this, this._activeVariant)}
								${l(this, o, G).call(this, this._activeVariant?.culture)}
								<uui-symbol-expand .open=${this._variantSelectorOpen}></uui-symbol-expand>
							</uui-button>
							${this._variantSelectorOpen ? p : l(this, o, Ut).call(this, e)}
							${this._activeVariants.length > 1 ? h`
										<uui-button slot="append" compact id="variant-close" @click=${l(this, o, we)}>
											<uui-icon name="remove"></uui-icon>
										</uui-button>
									` : ""}
						` : h`<span id="read-only-tag" slot="append"> ${l(this, o, G).call(this, null)} </span>`}
			</uui-input>

			${l(this, o, wt).call(this) ? h`
						<uui-popover-container id="popover" @beforetoggle=${l(this, o, ge)} placement="bottom-end">
							<div id="dropdown">
								<uui-scroll-container>
									${this._cultureVariantOptions.map((t) => l(this, o, Oe).call(this, t))}
								</uui-scroll-container>
							</div>
						</uui-popover-container>
					` : p}
		`;
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _renderVariantDetails(e) {
    return h``;
  }
};
O = /* @__PURE__ */ new WeakMap();
C = /* @__PURE__ */ new WeakMap();
o = /* @__PURE__ */ new WeakSet();
pe = function(e) {
  return e && "variantId" in e;
};
ve = async function(e) {
  this.observe(
    e?.variantOptions,
    (t) => {
      this._variantOptions = (t ?? []).sort(this._variantSorter), this._cultureVariantOptions = this._variantOptions.filter((i) => i.segment === null), l(this, o, $t).call(this, e);
    },
    "_observeVariantOptions"
  ), e ? this.observe(
    je([
      e.variesByCulture,
      e.variesBySegment,
      e.variantOptions
    ]),
    ([t, i, s]) => {
      t === !1 && i === !0 && s.length > 1 && l(this, o, Tt).call(this, _.Create(s[0]));
    },
    "_observeExpandFirstVariantIfSegmentOnly"
  ) : this.removeUmbControllerByAlias("_observeExpandFirstVariantIfSegmentOnly");
};
me = async function(e) {
  this.observe(
    e?.splitView.activeVariantsInfo,
    (t) => {
      t && (this._activeVariants = t.map((i) => _.Create(i)));
    },
    "_observeActiveVariants"
  );
};
_e = async function() {
  y(this, C) && this.observe(
    y(this, C).name,
    (e) => {
      this._name = e;
    },
    "_name"
  );
};
yt = async function() {
  if (!y(this, C) || !y(this, O)) return;
  const e = y(this, O).getWorkspaceContext();
  e && (this._variantId = y(this, C).getVariantId(), this.observe(
    e.variantOptions,
    (t) => {
      const i = t.find(
        (s) => s.culture === this._variantId?.culture && s.segment === this._variantId?.segment
      );
      this._activeVariant = i;
    },
    "umbObserveActiveVariant"
  ));
};
fe = function(e) {
  this.observe(
    e?.readOnlyGuard.rules,
    () => l(this, o, $t).call(this, e),
    "umbObserveReadOnlyGuardRules"
  );
};
be = function(e) {
  if (e instanceof Yt) {
    const t = e.composedPath()[0];
    typeof t?.value == "string" && y(this, C) && fi(y(this, C)) && y(this, C).setName(t.value);
  }
};
Pt = function(e) {
  y(this, O)?.switchVariant(_.Create(e));
};
ye = function(e) {
  y(this, O)?.openSplitView(_.Create(e));
};
we = function() {
  y(this, O)?.closeSplitView();
};
M = function(e) {
  return this._activeVariants.find((t) => t.equal(e)) !== void 0;
};
St = function(e, t) {
  return !e.variant && !l(this, o, M).call(this, t);
};
wt = function() {
  return !this._variesByCulture && this._variesBySegment ? this._cultureVariantOptions.length > 1 || this._variantOptions.length > 1 && this._variantOptions[0].variant?.state : this._variantOptions.length > 1;
};
$t = function(e) {
  e ? this._readOnlyCultures = this._variantOptions.filter((t) => e.readOnlyGuard.getIsPermittedForVariant(_.Create(t))).map((t) => t.culture) : this._readOnlyCultures = [];
};
ge = function(e) {
  if (this._variantSelectorOpen = e.newState === "open", !this._popoverElement || !(e.newState === "open")) return;
  const i = this.getBoundingClientRect();
  if (this._popoverElement.style.width = `${i.width}px`, l(this, o, Q).call(this, this._activeVariant)) {
    const s = this._cultureVariantOptions.find((r) => r.culture === this._activeVariant?.culture && r.segment === null);
    if (!s) return;
    const a = _.Create(s);
    l(this, o, Tt).call(this, a);
  }
};
Ce = function(e) {
  e && setTimeout(async () => {
    await this.updateComplete, e?.focus();
  }, 200);
};
Y = function(e) {
  return this._readOnlyCultures.includes(e);
};
Q = function(e) {
  return e?.segment !== null;
};
Ee = function(e, t) {
  e.stopPropagation(), l(this, o, xe).call(this, t);
};
Tt = function(e) {
  l(this, o, J).call(this, e) || (this._expandedVariants = [...this._expandedVariants, e]);
};
xe = function(e) {
  this._expandedVariants = l(this, o, J).call(this, e) ? this._expandedVariants.filter((t) => t.equal(e) === !1) : [...this._expandedVariants, e];
};
J = function(e) {
  return this._expandedVariants.find((t) => t.equal(e)) !== void 0;
};
Ve = function(e, t) {
  const i = this._variantOptions.filter(
    (s) => s.culture === t.culture && s.segment !== null
  );
  return e.variant ? i : [];
};
Oe = function(e) {
  const t = _.Create(e), i = l(this, o, St).call(this, e, t), s = l(this, o, Ve).call(this, e, t), a = this._hintMap.get(t.toString()), r = l(this, o, M).call(this, t);
  return h`
			<div class="variant culture-variant ${r ? "selected" : ""}">
				${this._variesBySegment && l(this, o, Pe).call(this, e) && s.length > 0 ? h`<div class="expand-area">${l(this, o, Se).call(this, t)}</div>` : p}

				<button
					class="switch-button ${i ? "add-mode" : ""} ${l(this, o, Y).call(this, t.culture) ? "readonly-mode" : ""}"
					@click=${() => l(this, o, Pt).call(this, e)}>
					${i ? h`<uui-icon class="add-icon" name="icon-add"></uui-icon>` : p}
					<div class="variant-info">
						<div class="variant-name">
							${l(this, o, kt).call(this, e)}${l(this, o, G).call(this, t.culture)}
						</div>
						<div class="variant-details">
							<span>${this._renderVariantDetails(e)}</span>
						</div>
					</div>
					<div class="specs-info">${l(this, o, D).call(this, e)}</div>
				</button>
				${l(this, o, Ut).call(this, r ? void 0 : a)} ${l(this, o, It).call(this, e)}
			</div>
			${l(this, o, J).call(this, t) ? h` ${s.map((n) => l(this, o, $e).call(this, n))} ` : p}
		`;
};
Ut = function(e) {
  return e ? h` <umb-badge slot="append" .color=${e.color ?? "default"} ?attention=${e.color === "invalid"}
			>${e.text}</umb-badge
		>` : p;
};
Pe = function(e) {
  return e.variant?.state && e.variant?.state !== "NotCreated";
};
Se = function(e) {
  return h`
			<uui-button @click=${(t) => l(this, o, Ee).call(this, t, e)} compact>
				<uui-symbol-expand .open=${l(this, o, J).call(this, e)}></uui-symbol-expand>
			</uui-button>
		`;
};
$e = function(e) {
  const t = _.Create(e), i = l(this, o, St).call(this, e, t);
  return h`
			<div class="variant segment-variant ${l(this, o, M).call(this, t) ? "selected" : ""}">
				${i ? p : h`<div class="expand-area"></div>`}
				<button
					class="switch-button ${i ? "add-mode" : ""} ${l(this, o, Y).call(this, t.culture) ? "readonly-mode" : ""}"
					@click=${() => l(this, o, Pt).call(this, e)}>
					${i ? h`<uui-icon class="add-icon" name="icon-add"></uui-icon>` : p}
					<div class="variant-info">
						<div class="variant-name">
							${l(this, o, kt).call(this, e)}${l(this, o, G).call(this, t.culture)}
						</div>
						<div class="variant-details">
							<span>${this._renderVariantDetails(e)}</span>
						</div>
					</div>
					<div class="specs-info">${l(this, o, D).call(this, e)}</div>
				</button>
				${l(this, o, It).call(this, e)}
			</div>
		`;
};
Te = function() {
  const e = l(this, o, Q).call(this, this._activeVariant) && this._activeVariant?.segmentInfo?.name ? this._activeVariant.segmentInfo.name : "";
  return e !== "" ? e : this._name ?? "";
};
kt = function(e) {
  return l(this, o, Q).call(this, e) ? e?.segmentInfo?.name ?? this._labelDefault : e.variant?.name && e.variant?.name.trim() !== "" ? e.variant?.name : e.language.name;
};
D = function(e) {
  return e ? this._variesByCulture && this._variesBySegment ? e.segmentInfo ? `${e.language.name} - ${e.segmentInfo.name}` : e.language.name || this._labelDefault : !this._variesByCulture && this._variesBySegment ? e?.segmentInfo?.name ?? this._labelDefault : e.language.name : "";
};
G = function(e) {
  return e === void 0 ? p : l(this, o, Y).call(this, e) ? h`<uui-tag look="secondary">${this.localize.term("general_readOnly")}</uui-tag>` : p;
};
It = function(e) {
  const t = _.Create(e);
  return h`
			${l(this, o, M).call(this, t) ? p : h`
						<uui-button
							class="split-view"
							label=${this.localize.term("content_openSplitViewForVariant", l(this, o, D).call(this, e))}
							@click=${() => l(this, o, ye).call(this, e)}>
							${this.localize.term("buttons_openInSplitView")}
						</uui-button>
					`}
		`;
};
m.styles = [
  U,
  E`
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

			.variant:hover > .split-view,
			.variant:focus > .split-view,
			.variant:focus-within > .split-view {
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
b([
  si("#popover")
], m.prototype, "_popoverElement", 2);
b([
  u()
], m.prototype, "_variantOptions", 2);
b([
  u()
], m.prototype, "_cultureVariantOptions", 2);
b([
  u()
], m.prototype, "_activeVariants", 2);
b([
  u()
], m.prototype, "_name", 2);
b([
  u()
], m.prototype, "_activeVariant", 2);
b([
  u()
], m.prototype, "_variantId", 2);
b([
  u()
], m.prototype, "_variantSelectorOpen", 2);
b([
  u()
], m.prototype, "_readOnlyCultures", 2);
b([
  u()
], m.prototype, "_variesByCulture", 2);
b([
  u()
], m.prototype, "_variesBySegment", 2);
b([
  u()
], m.prototype, "_expandedVariants", 2);
b([
  u()
], m.prototype, "_labelDefault", 2);
b([
  u()
], m.prototype, "_hintMap", 2);
m = b([
  x("umb-workspace-split-view-variant-selector")
], m);
var Fi = Object.defineProperty, Hi = Object.getOwnPropertyDescriptor, Ue = (e) => {
  throw TypeError(e);
}, S = (e, t, i, s) => {
  for (var a = s > 1 ? void 0 : s ? Hi(t, i) : t, r = e.length - 1, n; r >= 0; r--)
    (n = e[r]) && (a = (s ? n(t, i, a) : n(a)) || a);
  return s && a && Fi(t, i, a), a;
}, Ki = (e, t, i) => t.has(e) || Ue("Cannot " + i), Xi = (e, t, i) => t.has(e) ? Ue("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), qt = (e, t, i) => (Ki(e, t, "access private method"), i), st, ke, Ie;
let g = class extends V {
  constructor() {
    super(), Xi(this, st), this.loading = !1, this.displayNavigation = !1, this._variantSelectorSlotHasContent = !1, this._isNew = !1, this.splitViewContext = new qi(this), this.observe(
      this.splitViewContext.isNew,
      (e) => {
        this._isNew = e ?? !1;
      },
      null
    ), this.observe(
      this.splitViewContext.variantId,
      (e) => {
        this._variantId = e;
      },
      null
    );
  }
  set splitViewIndex(e) {
    this.splitViewContext.setSplitViewIndex(e);
  }
  get splitViewIndex() {
    return this.splitViewContext.getSplitViewIndex();
  }
  render() {
    return h`
			<umb-workspace-editor
				.loading=${this.loading}
				back-path=${ct(this.backPath)}
				.hideNavigation=${!this.displayNavigation}
				.variantId=${this._variantId}
				.overrides=${this.overrides}
				.enforceNoFooter=${!0}>
				<slot id="icon" name="icon" slot="header"></slot>
				<slot id="header" name="variant-selector" slot="header" @slotchange=${qt(this, st, ke)}>
					${Gt(
      !this._variantSelectorSlotHasContent,
      () => h`<umb-workspace-split-view-variant-selector></umb-workspace-split-view-variant-selector>`
    )}
				</slot>
				${qt(this, st, Ie).call(this)}
				<slot name="action-menu" slot="action-menu"></slot>
			</umb-workspace-editor>
		`;
  }
};
st = /* @__PURE__ */ new WeakSet();
ke = function(e) {
  this._variantSelectorSlotHasContent = e.target.assignedNodes({ flatten: !0 }).length > 0;
};
Ie = function() {
  return this._isNew ? p : this.displayNavigation ? h`<umb-workspace-entity-action-menu
			slot="action-menu"
			data-mark="workspace:action-menu"></umb-workspace-entity-action-menu>` : p;
};
g.styles = [
  U,
  E`
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

			#icon {
				display: inline-block;
				font-size: var(--uui-size-6);
				margin-right: var(--uui-size-space-4);
			}
		`
];
S([
  v({ type: Boolean })
], g.prototype, "loading", 2);
S([
  v({ type: Boolean })
], g.prototype, "displayNavigation", 2);
S([
  v({ attribute: "back-path" })
], g.prototype, "backPath", 2);
S([
  v({ attribute: !1 })
], g.prototype, "overrides", 2);
S([
  v({ type: Number })
], g.prototype, "splitViewIndex", 1);
S([
  u()
], g.prototype, "_variantSelectorSlotHasContent", 2);
S([
  u()
], g.prototype, "_isNew", 2);
S([
  u()
], g.prototype, "_variantId", 2);
g = S([
  x("umb-workspace-split-view")
], g);
var Gi = Object.defineProperty, ji = Object.getOwnPropertyDescriptor, Ne = (e, t, i, s) => {
  for (var a = s > 1 ? void 0 : s ? ji(t, i) : t, r = e.length - 1, n; r >= 0; r--)
    (n = e[r]) && (a = (s ? n(t, i, a) : n(a)) || a);
  return s && a && Gi(t, i, a), a;
};
let nt = class extends V {
  constructor() {
    super(...arguments), this.entityType = "";
  }
  render() {
    return h`
			<div class="uui-text">
				<h4>${this.localize.term("entityDetail_forbiddenTitle", this.entityType)}</h4>
				${this.localize.term("entityDetail_forbiddenDescription", this.entityType)}
			</div>
		`;
  }
};
nt.styles = [
  U,
  E`
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
Ne([
  v({ type: String, attribute: "entity-type" })
], nt.prototype, "entityType", 2);
nt = Ne([
  x("umb-entity-detail-forbidden")
], nt);
var Yi = Object.defineProperty, Qi = Object.getOwnPropertyDescriptor, Ae = (e, t, i, s) => {
  for (var a = s > 1 ? void 0 : s ? Qi(t, i) : t, r = e.length - 1, n; r >= 0; r--)
    (n = e[r]) && (a = (s ? n(t, i, a) : n(a)) || a);
  return s && a && Yi(t, i, a), a;
};
let ot = class extends V {
  constructor() {
    super(...arguments), this.entityType = "";
  }
  render() {
    return h`
			<div class="uui-text">
				<h4>${this.localize.term("entityDetail_notFoundTitle", this.entityType)}</h4>
				${this.localize.term("entityDetail_notFoundDescription", this.entityType)}
			</div>
		`;
  }
};
ot.styles = [
  U,
  E`
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
Ae([
  v({ type: String, attribute: "entity-type" })
], ot.prototype, "entityType", 2);
ot = Ae([
  x("umb-entity-detail-not-found")
], ot);
const Ji = new R(
  "UmbWorkspaceContext",
  void 0,
  (e) => e.IS_ENTITY_DETAIL_WORKSPACE_CONTEXT
);
var Zi = Object.defineProperty, ts = Object.getOwnPropertyDescriptor, We = (e) => {
  throw TypeError(e);
}, N = (e, t, i, s) => {
  for (var a = s > 1 ? void 0 : s ? ts(t, i) : t, r = e.length - 1, n; r >= 0; r--)
    (n = e[r]) && (a = (s ? n(t, i, a) : n(a)) || a);
  return s && a && Zi(t, i, a), a;
}, Nt = (e, t, i) => t.has(e) || We("Cannot " + i), B = (e, t, i) => (Nt(e, t, "read from private field"), t.get(e)), zt = (e, t, i) => t.has(e) ? We("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), es = (e, t, i, s) => (Nt(e, t, "write to private field"), t.set(e, i), i), mt = (e, t, i) => (Nt(e, t, "access private method"), i), T, F, De, Re, Me;
let P = class extends V {
  constructor() {
    super(), zt(this, F), this._isLoading = !1, this._isForbidden = !1, this._exists = !1, this._isNew = !1, zt(this, T), this.consumeContext(Ji, (e) => {
      es(this, T, e), this.observe(B(this, T)?.entityType, (t) => this._entityType = t), this.observe(B(this, T)?.loading.isOn, (t) => this._isLoading = t ?? !1), this.observe(B(this, T)?.forbidden.isOn, (t) => this._isForbidden = t ?? !1), this.observe(B(this, T)?.data, (t) => this._exists = !!t), this.observe(B(this, T)?.isNew, (t) => this._isNew = t);
    });
  }
  render() {
    return h` ${mt(this, F, De).call(this)} ${mt(this, F, Re).call(this)}

			<!-- TODO: It is currently on purpose that the workspace editor is always in the DOM, even when it doesn't have data.
			 We currently rely on the entity actions to be available to execute, and we ran into an issue when the entity got deleted; then the DOM got cleared, and the delete action couldn't complete.
			 We need to look into loading the entity actions in the workspace context instead so we don't rely on the DOM.
		 -->
			<umb-workspace-editor
				?loading=${this._isLoading}
				.backPath=${this.backPath}
				class="${this._exists === !1 ? "hide" : ""}">
				<slot name="header" slot="header"></slot>
				${mt(this, F, Me).call(this)}
				<slot></slot>
			</umb-workspace-editor>`;
  }
};
T = /* @__PURE__ */ new WeakMap();
F = /* @__PURE__ */ new WeakSet();
De = function() {
  return !this._isLoading && this._isForbidden ? h`<umb-entity-detail-forbidden
				entity-type=${ct(this._entityType)}></umb-entity-detail-forbidden>` : p;
};
Re = function() {
  return !this._isLoading && !this._exists ? h`<umb-entity-detail-not-found
				entity-type=${ct(this._entityType)}></umb-entity-detail-not-found>` : p;
};
Me = function() {
  return this._isNew ? p : h`<umb-workspace-entity-action-menu
			slot="action-menu"
			data-mark="workspace:action-menu"></umb-workspace-entity-action-menu>`;
};
P.styles = [
  E`
			umb-workspace-editor {
				visibility: visible;
			}

			umb-workspace-editor.hide {
				visibility: hidden;
			}
		`
];
N([
  v({ attribute: "back-path" })
], P.prototype, "backPath", 2);
N([
  u()
], P.prototype, "_entityType", 2);
N([
  u()
], P.prototype, "_isLoading", 2);
N([
  u()
], P.prototype, "_isForbidden", 2);
N([
  u()
], P.prototype, "_exists", 2);
N([
  u()
], P.prototype, "_isNew", 2);
P = N([
  x("umb-entity-detail-workspace-editor")
], P);
class is extends gt {
  constructor() {
    super(...arguments), this.#t = new Ht([], (t) => t.path), this.routes = this.#t.asObservable(), this.#e = new Ye("");
  }
  #t;
  #e;
  /**
   * Set the routes for the workspace.
   * @param {Array<UmbRoute>} routes The routes for the workspace.
   * @memberof UmbWorkspaceRouteManager
   */
  setRoutes(t) {
    const i = [...t];
    t.length > 0 && i.push({
      path: "**",
      component: async () => (await import("@umbraco-cms/backoffice/router")).UmbRouteNotFoundElement
    });
    const s = i.map((a) => {
      const r = a.setup;
      return a.setup = (n, c) => {
        this.#e.setValue(c.match.fragments.consumed), r && r(n, c);
      }, a;
    });
    this.#t.setValue([...s]);
  }
  /**
   * Get the routes for the workspace.
   * @returns {Array<UmbRoute>} The routes for the workspace.
   * @memberof UmbWorkspaceRouteManager
   */
  getRoutes() {
    return this.#t.getValue();
  }
  /**
   * Get the active local path.
   * @returns {*}  {string}
   * @memberof UmbWorkspaceRouteManager
   */
  getActiveLocalPath() {
    return this.#e.getValue();
  }
}
class Be extends ut {
  /*
  	Concept notes: [NL]
  	Considerations are, if we bring a dirty state (observable) we need to maintain it all the time.
  	This might be too heavy process, so we might want to consider just having a get dirty state method.
  */
  //#isDirty = new UmbBooleanState(undefined);
  //isDirty = this.#isNew.asObservable();
  constructor(t, i) {
    super(t, He.toString()), this.#t = [], this.view = new Kt(this, null), this.#a = new ht(void 0), this.isNew = this.#a.asObservable(), this.routes = new is(this), this.#r = (s) => {
      this.#e && (this.#s?.(s), this.#e = void 0, this.#i = void 0, this.#s = void 0);
    }, this.#n = () => {
      this.#i?.(), this.#e = void 0, this.#i = void 0, this.#s = void 0;
    }, this.#o = () => {
      this.#n(), this._closeModal();
    }, this.workspaceAlias = i, this.consumeContext(jt, (s) => {
      this.modalContext = s;
    }), this.view.shortcuts.addOne({
      key: "s",
      modifier: !0,
      action: () => this.requestSubmit(),
      label: "#general_submit"
    });
  }
  #t;
  /**
   * Appends a validation context to the workspace.
   * @param context
   */
  addValidationContext(t) {
    this.#t.push(t);
  }
  #e;
  #i;
  #s;
  #a;
  resetState() {
    this.#t.forEach((t) => t.reset()), this.#a.setValue(void 0);
  }
  getIsNew() {
    return this.#a.getValue();
  }
  setIsNew(t) {
    this.#a.setValue(t);
  }
  /**
   * If a Workspace has multiple validation contexts, then this method can be overwritten to return the correct one.
   * @returns Promise that resolves to void when the validation is complete.
   */
  async validate() {
    return await Promise.all(this.#t.map((t) => t.validate()));
  }
  async requestSubmit() {
    return this.validateAndSubmit(
      () => this.submit(),
      (t) => this.invalidSubmit(t)
    );
  }
  async _validateAndLog() {
    await this.validate().catch(async () => (console.warn(
      "Validation failed because of these validation messages still begin present: ",
      this.#t.flatMap((t) => t.messages.getMessages())
    ), Promise.reject()));
  }
  async validateAndSubmit(t, i) {
    return this.#e ? this.#e : (this.#e = new Promise((s, a) => {
      this.#i = s, this.#s = a;
    }), this._validateAndLog().then(
      async () => {
        t().then(this.#o, this.#r);
      },
      async (s) => {
        i(s).then(this.#n, this.#r);
      }
    ), await this.#e);
  }
  #r;
  #n;
  #o;
  _closeModal() {
    this.modalContext && (this.modalContext?.setValue(this.getData()), this.modalContext?.submit());
  }
  invalidSubmit(t) {
    return Promise.reject(t);
  }
  destroy() {
    this.#a.destroy(), this.routes.destroy(), super.destroy(), this.#e = void 0, this.#i = void 0, this.#s = void 0, this.#t.forEach((t) => t.destroy()), this.#t = [];
  }
}
class Rs extends Be {
}
class ss extends gt {
  constructor() {
    super(...arguments), this._persisted = new _t(void 0), this._current = new _t(void 0), this.persisted = this._persisted.asObservable(), this.current = this._current.asObservable();
  }
  _sortCurrentData(t, i) {
    return i;
  }
  /**
   * Gets persisted data
   * @returns {(ModelType | undefined)}
   * @memberof UmbSubmittableWorkspaceDataManager
   */
  getPersisted() {
    return this._persisted.getValue();
  }
  /**
   * Sets the persisted data
   * @param {(ModelType | undefined)} data
   * @memberof UmbSubmittableWorkspaceDataManager
   */
  setPersisted(t) {
    this._persisted.setValue(t);
  }
  /**
   * Updates the persisted data
   * @param {Partial<ModelType>} partialData
   * @memberof UmbSubmittableWorkspaceDataManager
   */
  updatePersisted(t) {
    this._persisted.update(t);
  }
  /**
   * Creates an observable part of the persisted data
   * @template ReturnType
   * @param {(MappingFunction<ModelType | undefined, ReturnType>)} mappingFunction
   * @returns {*}
   * @memberof UmbEntityWorkspaceDataManager
   */
  createObservablePartOfPersisted(t) {
    return this._persisted.asObservablePart(t);
  }
  /**
   * Gets the current data
   * @returns {(ModelType | undefined)}
   * @memberof UmbSubmittableWorkspaceDataManager
   */
  getCurrent() {
    return this._current.getValue();
  }
  /**
   * Sets the current data
   * @param {(ModelType | undefined)} data
   * @memberof UmbSubmittableWorkspaceDataManager
   */
  setCurrent(t) {
    if (t) {
      const i = this._persisted.getValue();
      i && (t = this._sortCurrentData(i, t));
    }
    this._current.setValue(t);
  }
  /**
   * Updates the current data
   * @param {Partial<ModelType>} partialData
   * @memberof UmbSubmittableWorkspaceDataManager
   */
  updateCurrent(t) {
    if (t) {
      const i = this._persisted.getValue();
      i && (t = this._sortCurrentData(i, t));
    }
    this._current.update(t);
  }
  /**
   * Creates an observable part of the current data
   * @template ReturnType
   * @param {(MappingFunction<ModelType | undefined, ReturnType>)} mappingFunction
   * @returns {*}
   * @memberof UmbEntityWorkspaceDataManager
   */
  createObservablePartOfCurrent(t) {
    return this._current.asObservablePart(t);
  }
  /**
   * Checks if there are unpersisted changes
   * @returns {*}
   * @memberof UmbSubmittableWorkspaceDataManager
   */
  getHasUnpersistedChanges() {
    const t = this._persisted.getValue(), i = this._current.getValue(), s = Qe(t, i) === !1;
    return s && console.warn("Changes detected based on JSON comparison between", t, "and", i), s;
  }
  /**
   * Resets the current data to the persisted data
   * @memberof UmbSubmittableWorkspaceDataManager
   */
  resetCurrent() {
    this._current.setValue(this._persisted.getValue());
  }
  /**
   * Clears the data
   * @memberof UmbSubmittableWorkspaceDataManager
   */
  clear() {
    this._persisted.setValue(void 0), this._current.setValue(void 0);
  }
  destroy() {
    this._persisted?.destroy(), this._current?.destroy(), this._persisted = void 0, this._current = void 0, super.destroy();
  }
}
const it = "umbLoadingEntityDetail", as = "umbForbiddenEntityDetail";
class rs extends Be {
  constructor(t, i) {
    super(t, i.workspaceAlias), this.IS_ENTITY_DETAIL_WORKSPACE_CONTEXT = !0, this._data = new ss(this), this.#t = new yi(this), this.entityType = this.#t.entityType, this.unique = this.#t.unique, this.data = this._data.current, this.persistedData = this._data.persisted, this.loading = new Dt(this), this.forbidden = new Dt(this), this.#i = new _t(void 0), this._internal_createUnderParent = this.#i.asObservable(), this._internal_createUnderParentEntityUnique = this.#i.asObservablePart(
      (s) => s ? s.unique : void 0
    ), this._internal_createUnderParentEntityType = this.#i.asObservablePart(
      (s) => s ? s.entityType : void 0
    ), this.parentUnique = this.#i.asObservablePart(
      (s) => s ? s.unique : void 0
    ), this.parentEntityType = this.#i.asObservablePart(
      (s) => s ? s.entityType : void 0
    ), this.validationContext = new vi(this), this.#a = !1, this.#r = new Promise((s) => {
      this.#a ? s() : this.#s = s;
    }), this.#n = !1, this.#o = async (s) => {
      const a = s.detail.url;
      if (this.#n)
        return !0;
      if (this._checkWillNavigateAway(a) && this.getHasUnpersistedChanges()) {
        s.preventDefault();
        try {
          return await ni(this, oi), this.#n = !0, history.pushState({}, "", s.detail.url), !0;
        } catch {
          return !1;
        }
      }
      return !0;
    }, this._workspaceEventUnique = gi.new(), this.#l = (s) => {
      const a = s.getUnique(), r = s.getEntityType(), n = s.getEventUnique();
      r === this.getEntityType() && a === this.getUnique() && n !== this._workspaceEventUnique && this.reload();
    }, this.addValidationContext(this.validationContext), this.#t.setEntityType(i.entityType), window.addEventListener("willchangestate", this.#o), this.#u(i.detailRepositoryAlias), this.consumeContext(dt, (s) => {
      this.#e = s, this.#e?.removeEventListener(
        tt.TYPE,
        this.#l
      ), this.#e?.addEventListener(
        tt.TYPE,
        this.#l
      );
    });
  }
  #t;
  #e;
  #i;
  #s;
  #a;
  #r;
  /**
   * Get the entity type
   * @returns { string } The entity type
   */
  getEntityType() {
    const t = this.#t.getEntityType();
    if (!t) throw new Error("Entity type is not set");
    return t;
  }
  /**
   * Get the current data
   * @returns { DetailModelType | undefined } The entity context
   */
  getData() {
    return this._data.getCurrent();
  }
  /**
   * Get the persisted data
   * @returns { DetailModelType | undefined } The persisted data
   */
  getPersistedData() {
    return this._data.getPersisted();
  }
  /**
   * Get the unique
   * @returns { string | undefined } The unique identifier
   */
  getUnique() {
    return this.#t.getUnique();
  }
  setUnique(t) {
    this.#t.setUnique(t);
  }
  /**
   * Gets the parent that a new entity will be created under.
   * @returns { UmbEntityModel | undefined } The parent entity
   */
  // eslint-disable-next-line @typescript-eslint/naming-convention
  _internal_getCreateUnderParent() {
    return this.#i.getValue();
  }
  /**
   * Sets the parent that a new entity will be created under.
   * @param {UmbEntityModel} parent The parent entity
   */
  // eslint-disable-next-line @typescript-eslint/naming-convention
  _internal_setCreateUnderParent(t) {
    this.#i.setValue(t);
  }
  /**
   * Get the parent
   * @deprecated Will be removed in v.18: Use UMB_PARENT_ENTITY_CONTEXT instead to get the parent both when creating and editing.
   * @returns { UmbEntityModel | undefined } The parent entity
   */
  getParent() {
    return this.#i.getValue();
  }
  /**
   * Set the parent
   * @deprecated Will be removed in v.18.
   * @param { UmbEntityModel } parent The parent entity
   */
  setParent(t) {
    this.#i.setValue(t);
  }
  /**
   * Get the parent unique
   * @deprecated Will be removed in v.18: Use UMB_PARENT_ENTITY_CONTEXT instead to get the parent both when creating and editing.
   * @returns { string | undefined } The parent unique identifier
   */
  getParentUnique() {
    return this.#i.getValue()?.unique;
  }
  /**
   * Get the parent entity type
   * @deprecated Will be removed in v.18
   * @returns { string | undefined } The parent entity type
   */
  getParentEntityType() {
    return this.#i.getValue()?.entityType;
  }
  async load(t) {
    if (t === this.getUnique() && this._getDataPromise)
      return await this._getDataPromise;
    this.resetState(), this.setIsNew(!1), this.#t.setUnique(t), this.loading.addState({ unique: it, message: `Loading ${this.getEntityType()} Details` }), await this.#r, this._getDataPromise = this._detailRepository.requestByUnique(t);
    const i = await this._getDataPromise, { data: s, error: a, asObservable: r } = i;
    if (a)
      this.removeUmbControllerByAlias("umbEntityDetailTypeStoreObserver"), Ci.isUmbApiError(a) && (a.status === 401 || a.status === 403) && this.forbidden.addState({ unique: as, message: a.message });
    else if (s) {
      const n = await this._processIncomingData(s);
      this._data.setPersisted(n), this._data.setCurrent(n), this.observe(r?.(), (c) => this.#c(c), "umbEntityDetailTypeStoreObserver");
    }
    return this.loading.removeState(it), i;
  }
  /**
   * Reload the workspace data
   * @returns { Promise<void> } The promise of the reload
   */
  async reload() {
    const t = this.getUnique();
    if (!t) throw new Error("Unique is not set");
    const { data: i } = await this._detailRepository.requestByUnique(t);
    i && (this._data.setPersisted(i), this._data.setCurrent(i));
  }
  /**
   * Method to check if the workspace data is loaded.
   * @returns { Promise<any> | undefined } true if the workspace data is loaded.
   * @memberof UmbEntityWorkspaceContextBase
   */
  isLoaded() {
    return this._getDataPromise;
  }
  /**
   * Create a data scaffold
   * @param {CreateArgsType} args The arguments to create the scaffold.
   * @param {UmbEntityModel} args.parent The parent entity.
   * @param {UmbEntityUnique} args.parent.unique The unique identifier of the parent entity.
   * @param {string} args.parent.entityType The entity type of the parent entity.
   * @param {Partial<DetailModelType>} args.preset The preset data.
   * @returns { Promise<any> | undefined } The data of the scaffold.
   */
  async createScaffold(t) {
    this.resetState(), this.loading.addState({ unique: it, message: `Creating ${this.getEntityType()} scaffold` }), await this.#r, this.setParent(t.parent), this._internal_setCreateUnderParent(t.parent);
    const i = this._detailRepository.createScaffold(t.preset);
    this._getDataPromise = i;
    let { data: s } = await i;
    return s && (s = await this._processIncomingData(s), s = await this._scaffoldProcessData(s), this.modalContext && (s = { ...s, ...this.modalContext.data.preset }), this.setIsNew(!0), this.#t.setUnique(s.unique), this._data.setPersisted(s), this._data.setCurrent(s)), this.loading.removeState(it), s;
  }
  /**
   * @deprecated Override `_processIncomingData` instead. `_scaffoldProcessData` will be removed in v.18.
   * @param {DetailModelType} data - The data to process.
   * @returns {Promise<DetailModelType>} The processed data.
   */
  async _scaffoldProcessData(t) {
    return t;
  }
  async _processIncomingData(t) {
    return t;
  }
  async submit() {
    await this.#r;
    const t = this.getData();
    if (!t)
      throw new Error("Data is not set");
    if (t.unique === void 0)
      throw new Error("Unique is not set");
    if (this.getIsNew()) {
      const i = this.#i.getValue();
      if (i?.unique === void 0) throw new Error("Parent unique is missing");
      if (!i.entityType) throw new Error("Parent entity type is missing");
      await this._create(t, i);
    } else
      await this._update(t);
  }
  /**
   * Deletes the entity.
   * @param unique The unique identifier of the entity to delete.
   */
  async delete(t) {
    await this.#r, await this._detailRepository.delete(t);
  }
  /**
   * Check if the workspace is about to navigate away.
   * @protected
   * @param {string} newUrl The new url that the workspace is navigating to.
   * @returns { boolean} true if the workspace is navigating away.
   * @memberof UmbEntityWorkspaceContextBase
   */
  _checkWillNavigateAway(t) {
    return !t.includes(this.routes.getActiveLocalPath());
  }
  async _create(t, i) {
    if (!this._detailRepository) throw new Error("Detail repository is not set");
    const { error: s, data: a } = await this._detailRepository.create(t, i.unique);
    if (s || !a)
      throw s?.message ?? "Repository did not return data after create.";
    this.#t.setUnique(a.unique), this._data.setPersisted(a), this._data.setCurrent(a), this.setIsNew(!1);
    const r = await this.getContext(dt);
    if (!r) throw new Error("Event context not found.");
    const n = new Rt({
      entityType: i.entityType,
      unique: i.unique
    });
    r.dispatchEvent(n);
    const c = new wi({
      entityType: i.entityType,
      unique: i.unique
    });
    r.dispatchEvent(c);
  }
  async _update(t) {
    const { error: i, data: s } = await this._detailRepository.save(t);
    if (i || !s)
      throw i?.message ?? "Repository did not return data after create.";
    this._data.setPersisted(s), this._data.setCurrent(s);
    const a = this.getUnique(), r = this.getEntityType(), n = await this.getContext(dt);
    if (!n) throw new Error("Event context not found.");
    const c = new Rt({ unique: a, entityType: r });
    n.dispatchEvent(c);
    const d = new tt({
      unique: a,
      entityType: r,
      eventUnique: this._workspaceEventUnique
    });
    n.dispatchEvent(d);
  }
  #n;
  #o;
  /**
   * Check if there are unpersisted changes.
   * @returns { boolean } true if there are unpersisted changes.
   */
  getHasUnpersistedChanges() {
    return this._data.getHasUnpersistedChanges();
  }
  // @deprecated use getHasUnpersistedChanges instead, will be removed in v17.0
  _getHasUnpersistedChanges() {
    return new ui({
      removeInVersion: "17",
      deprecated: "_getHasUnpersistedChanges",
      solution: "use public getHasUnpersistedChanges instead."
    }).warn(), this.getHasUnpersistedChanges();
  }
  resetState() {
    super.resetState(), this.loading.clear(), this.forbidden.clear(), this._data.clear(), this.#n = !1, this._getDataPromise = void 0;
  }
  #h() {
    this._detailRepository && (this.#a = !0, this.#s?.());
  }
  #u(t) {
    if (!t) throw new Error("Entity Workspace must have a repository alias.");
    new ei(
      this,
      Xt,
      t,
      [],
      (i, s) => {
        this._detailRepository = i ? s.api : void 0, this.#h();
      }
    );
  }
  #c(t) {
    t || this._data.clear();
  }
  #l;
  destroy() {
    window.removeEventListener("willchangestate", this.#o), this.#e?.removeEventListener(
      tt.TYPE,
      this.#l
    ), this._detailRepository?.destroy(), this.#t.destroy(), this._getDataPromise = void 0, super.destroy();
  }
}
const Ms = new R(
  "UmbWorkspaceContext",
  void 0,
  (e) => e.IS_ENTITY_NAMED_DETAIL_WORKSPACE_CONTEXT
);
class Bs extends rs {
  constructor(t, i) {
    super(t, i), this.IS_ENTITY_NAMED_DETAIL_WORKSPACE_CONTEXT = !0, this.name = this._data.createObservablePartOfCurrent((s) => s?.name), this.nameWriteGuard = new Di(this), this.nameWriteGuard.fallbackToPermitted(), this.observe(
      this.name,
      (s) => {
        this.view.setTitle(s);
      },
      null
    );
  }
  getName() {
    return this._data.getCurrent()?.name;
  }
  setName(t) {
    this._data.updateCurrent({ name: t });
  }
}
const ns = Symbol("IsNewRedirectControllerAlias");
class qs extends gt {
  constructor(t, i, s) {
    super(t, ns), this.observe(i.isNew, (a) => {
      this.timeout && clearTimeout(this.timeout), a === !1 && (this.timeout = setTimeout(() => {
        const r = i.getUnique();
        if (s && r) {
          const n = s.absoluteRouterPath;
          if (n) {
            const c = ci(di(n) + "edit/:id", {
              id: r
            });
            this.destroy();
            const d = window.location.href;
            if (s.localActiveViewPath === void 0 || s.localActiveViewPath === "" || !d.includes(s.localActiveViewPath))
              return;
            window.history.replaceState(null, "", c);
          }
        }
        this.timeout = void 0;
      }, 500));
    });
  }
  destroy() {
    super.destroy(), this.timeout && (clearTimeout(this.timeout), this.timeout = void 0);
  }
}
const q = "_&_";
class zs {
  constructor() {
    this.#t = new Ht([], (t) => t.index).sortBy(
      (t, i) => (t.index || 0) - (i.index || 0)
    ), this.activeVariantsInfo = this.#t.asObservable(), this.splitViewActive = this.#t.asObservablePart((t) => t.length > 1);
  }
  #t;
  getWorkspaceRoute() {
    return this._routeBase;
  }
  setWorkspaceRoute(t) {
    this._routeBase = t;
  }
  setActiveVariant(t, i, s) {
    this.#t.appendOneAt({ index: t, culture: i ?? null, segment: s ?? null }, t);
  }
  getActiveVariants() {
    return this.#t.getValue();
  }
  removeActiveVariant(t) {
    this.getActiveVariants().length > 1 && this.#t.removeOne(t);
  }
  activeVariantByIndex(t) {
    return this.#t.asObservablePart((i) => i.find((s) => s.index === t) || void 0);
  }
  switchVariant(t, i) {
    const s = this.getWorkspaceRoute();
    if (s) {
      const a = this.getActiveVariants();
      if (a && t < a.length) {
        const r = [...a];
        r[t] = { index: t, culture: i.culture, segment: i.segment };
        const n = r.map((d) => _.Create(d).toString()).join(q), c = this.#i();
        return history.pushState(null, "", `${s}/${n}${c}`), !0;
      }
    }
    return !1;
  }
  openSplitView(t) {
    const i = this.getActiveVariants()[0], s = this.getWorkspaceRoute();
    return i && s ? (history.pushState(
      null,
      "",
      `${s}/${_.Create(i)}${q}${t}`
    ), !0) : !1;
  }
  closeSplitView(t) {
    const i = this.getWorkspaceRoute();
    if (i) {
      const s = this.getActiveVariants();
      if (s && t < s.length) {
        const r = s.filter((n) => n.index !== t).map((n) => _.Create(n)).join(q);
        return history.pushState(null, "", `${i}/${r}`), !0;
      }
    }
    return !1;
  }
  setVariantParts(t) {
    t.split(q).forEach((s, a) => {
      this.handleVariantFolderPart(a, s);
    });
  }
  handleVariantFolderPart(t, i) {
    const s = _.FromString(i);
    this.setActiveVariant(t, s.culture, s.segment);
  }
  #e() {
    const t = this.getWorkspaceRoute(), s = this.getActiveVariants().map((a) => _.Create(a).toString()).join(q);
    return `${t}/${s}`;
  }
  #i() {
    const i = new URL(window.location.href).pathname, s = this.#e();
    return s && i.startsWith(s) ? i.substring(s.length) : "";
  }
}
var os = Object.defineProperty, ls = Object.getOwnPropertyDescriptor, qe = (e, t, i, s) => {
  for (var a = s > 1 ? void 0 : s ? ls(t, i) : t, r = e.length - 1, n; r >= 0; r--)
    (n = e[r]) && (a = (s ? n(t, i, a) : n(a)) || a);
  return s && a && os(t, i, a), a;
};
let lt = class extends V {
  render() {
    return h`
			<uui-box headline=${ct(this.headline ? this.localize.string(this.headline) : void 0)}>
				<slot name="header-actions" slot="header-actions"></slot>
				<div id="container">
					<slot></slot>
				</div>
			</uui-box>
		`;
  }
};
lt.styles = [
  E`
			uui-box {
				--uui-box-default-padding: 0;
			}
		`
];
qe([
  v({ type: String })
], lt.prototype, "headline", 2);
lt = qe([
  x("umb-workspace-info-app-layout")
], lt);
const Ls = new li(
  "Umb.Modal.Workspace",
  {
    modal: {
      type: "sidebar",
      size: "large"
    }
  }
);
function Fs(e) {
  if (e)
    return Object.keys(e).map((t) => ({
      alias: t,
      value: e[t]
    }));
}
class Hs extends ut {
  constructor(t, i) {
    super(t, Jt), this.#t = new ht(!1), this.readOnly = this.#t.asObservable(), this.#i = new mi(this).inherit(), this.#e = i, this.name = this.#e.name, this.#i.setVariantId(this.getVariantId());
  }
  #t;
  #e;
  #i;
  // default data:
  getVariantId() {
    return _.CreateInvariant();
  }
  getEntityType() {
    return this.#e.getEntityType();
  }
  getUnique() {
    return this.#e.getUnique();
  }
  getName() {
    return this.#e.getName();
  }
  setName(t) {
    this.#e.setName(t);
  }
  get properties() {
    return this.#e.values;
  }
  getProperties() {
    return this.#e.getValues();
  }
  /**
   * @function propertyValueByAlias
   * @param {string} propertyAlias
   * @returns {Promise<Observable<ReturnType | undefined> | undefined>}
   * @description Get an Observable for the value of this property.
   */
  async propertyValueByAlias(t) {
    return await this.#e.propertyValueByAlias(t);
  }
  /**
   * @param {string} propertyAlias - The alias of the property
   * @param {unknown} value - The value to be set for this property
   * @returns {Promise<void>} - an promise which resolves once the value has been set.
   */
  async setPropertyValue(t, i) {
    return this.#e.setPropertyValue(t, i);
  }
  getReadOnly() {
    return this.#t.getValue();
  }
}
export {
  Ji as UMB_ENTITY_DETAIL_WORKSPACE_CONTEXT,
  Ms as UMB_ENTITY_NAMED_DETAIL_WORKSPACE_CONTEXT,
  Le as UMB_ENTITY_WORKSPACE_CONTEXT,
  Wi as UMB_NAMABLE_WORKSPACE_CONTEXT,
  Ys as UMB_PUBLISHABLE_WORKSPACE_CONTEXT,
  Qs as UMB_ROUTABLE_WORKSPACE_CONTEXT,
  ze as UMB_SAVEABLE_WORKSPACE_CONTEXT,
  Js as UMB_SUBMITTABLE_TREE_ENTITY_WORKSPACE_CONTEXT,
  Ft as UMB_SUBMITTABLE_WORKSPACE_CONTEXT,
  Fe as UMB_VARIANT_WORKSPACE_CONTEXT,
  Zs as UMB_WORKSPACE_CONDITION_ALIAS,
  He as UMB_WORKSPACE_CONTEXT,
  xi as UMB_WORKSPACE_EDITOR_CONTEXT,
  ta as UMB_WORKSPACE_ENTITY_IS_NEW_CONDITION_ALIAS,
  ea as UMB_WORKSPACE_ENTITY_TYPE_CONDITION_ALIAS,
  Ls as UMB_WORKSPACE_MODAL,
  sa as UMB_WORKSPACE_PATH_PATTERN,
  ce as UMB_WORKSPACE_SPLIT_VIEW_CONTEXT,
  Ds as UMB_WORKSPACE_VIEW_CONTEXT,
  Je as UMB_WORKSPACE_VIEW_PATH_PATTERN,
  Rs as UmbEditableWorkspaceContextBase,
  nt as UmbEntityDetailForbiddenElement,
  ot as UmbEntityDetailNotFoundElement,
  rs as UmbEntityDetailWorkspaceContextBase,
  P as UmbEntityDetailWorkspaceEditorElement,
  Bs as UmbEntityNamedDetailWorkspaceContextBase,
  ss as UmbEntityWorkspaceDataManager,
  Hs as UmbInvariantWorkspacePropertyDatasetContext,
  As as UmbSaveWorkspaceAction,
  Ws as UmbSubmitWorkspaceAction,
  Be as UmbSubmittableWorkspaceContextBase,
  Zt as UmbWorkspaceActionBase,
  Gs as UmbWorkspaceActionMenuElement,
  Ns as UmbWorkspaceActionMenuItemBase,
  Vi as UmbWorkspaceEditorContext,
  f as UmbWorkspaceEditorElement,
  oa as UmbWorkspaceElement,
  K as UmbWorkspaceEntityActionMenuElement,
  X as UmbWorkspaceFooterLayoutElement,
  I as UmbWorkspaceHeaderNameEditableElement,
  lt as UmbWorkspaceInfoAppLayoutElement,
  qs as UmbWorkspaceIsNewRedirectController,
  ns as UmbWorkspaceIsNewRedirectControllerAlias,
  ra as UmbWorkspaceModalElement,
  is as UmbWorkspaceRouteManager,
  qi as UmbWorkspaceSplitViewContext,
  g as UmbWorkspaceSplitViewElement,
  zs as UmbWorkspaceSplitViewManager,
  m as UmbWorkspaceSplitViewVariantSelectorElement,
  la as element,
  Fs as umbObjectToPropertyValueArray
};
//# sourceMappingURL=index.js.map
