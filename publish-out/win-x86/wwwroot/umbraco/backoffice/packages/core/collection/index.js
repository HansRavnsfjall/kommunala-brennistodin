import { UmbControllerBase as vt, UmbContextBase as qt } from "@umbraco-cms/backoffice/class-api";
import { UmbExtensionsManifestInitializer as Bt, createExtensionElement as pt, UmbExtensionApiInitializer as Wt } from "@umbraco-cms/backoffice/extension-api";
import { umbExtensionsRegistry as nt, UmbExtensionElementAndApiSlotElementBase as Ft } from "@umbraco-cms/backoffice/extension-registry";
import { UmbArrayState as V, UmbObjectState as G, UmbStringState as kt, UmbNumberState as Yt, UmbBasicState as Kt, observeMultiple as Gt } from "@umbraco-cms/backoffice/observable-api";
import { U as O } from "../collection-default.context-token-BaKj_eMl.js";
import { UmbChangeEvent as Xt } from "@umbraco-cms/backoffice/event";
import { UmbPaginationManager as Jt, UmbSelectionManager as jt, UmbDeprecation as Ht, debounce as Qt } from "@umbraco-cms/backoffice/utils";
import { UmbRequestReloadStructureForEntityEvent as B, UmbRequestReloadChildrenOfEntityEvent as W } from "@umbraco-cms/backoffice/entity-action";
import { UMB_ACTION_EVENT_CONTEXT as Zt } from "@umbraco-cms/backoffice/action";
import { UmbParentEntityContext as te, UMB_ENTITY_CONTEXT as X } from "@umbraco-cms/backoffice/entity";
import { UMB_WORKSPACE_MODAL as ee, UMB_ENTITY_WORKSPACE_CONTEXT as ie } from "@umbraco-cms/backoffice/workspace";
import { UmbModalRouteRegistrationController as se, UMB_ROUTE_CONTEXT as ne } from "@umbraco-cms/backoffice/router";
import { css as b, state as l, customElement as c, nothing as _, html as a, property as q, query as oe, repeat as re } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as u } from "@umbraco-cms/backoffice/lit-element";
import { UmbTextStyles as L } from "@umbraco-cms/backoffice/style";
import { UmbCollectionBulkActionPermissionCondition as ai } from "../collection-bulk-action-permission.condition-HByQ2FvB.js";
import { UmbCollectionAliasCondition as ci } from "../collection-alias.condition-pEdHH8TG.js";
import { a as ui, b as pi, U as _i } from "../collection-action-button.element-TmHU9Eph.js";
import { UmbPickerContext as ae } from "@umbraco-cms/backoffice/picker";
import { UmbCollectionWorkspaceViewElement as fi, UmbCollectionWorkspaceViewElement as vi } from "../collection-workspace-view.element-BSGEziPX.js";
class le extends vt {
  constructor(e) {
    super(e), this.#t = new V([], (i) => i.alias), this.views = this.#t.asObservable(), this.#e = new G(void 0), this.currentView = this.#e.asObservable(), this.#i = new V([], (i) => i.path), this.routes = this.#i.asObservable(), this.#s = new kt(""), this.rootPathName = this.#s.asObservable(), setTimeout(() => {
      const i = new URL(window.location.href);
      this.#s.setValue(i.pathname.substring(0, i.pathname.lastIndexOf("/")));
    }, 100);
  }
  #t;
  #e;
  #i;
  #s;
  #n;
  setConfig(e) {
    this.#n = e.defaultViewAlias, this.#o(e.manifestFilter);
  }
  // Views
  /**
   * Sets the current view.
   * @param {ManifestCollectionView} view
   * @memberof UmbCollectionContext
   */
  setCurrentView(e) {
    this.#e.setValue(e);
  }
  /**
   * Returns the current view.
   * @returns {ManifestCollectionView}
   * @memberof UmbCollectionContext
   */
  getCurrentView() {
    return this.#e.getValue();
  }
  #o(e) {
    return new Bt(
      this,
      nt,
      "collectionView",
      e ?? null,
      (i) => {
        const n = i.map((s) => s.manifest);
        this.#t.setValue(n), this.#r(n);
      }
    );
  }
  #r(e) {
    let i = [];
    if (e && e.length > 0) {
      const s = e.find((o) => o.alias === this.#n) ?? e[0];
      i = e.map((o) => ({
        path: `${o.meta.pathName}`,
        component: () => pt(o),
        setup: () => {
          this.setCurrentView(o);
        }
      })), i.length > 0 && (i.push({
        unique: s.alias,
        path: "",
        component: () => pt(s),
        setup: () => {
          this.setCurrentView(s);
        }
      }), i.push({
        path: "**",
        component: async () => (await import("@umbraco-cms/backoffice/router")).UmbRouteNotFoundElement
      }));
    }
    this.#i.setValue(i);
  }
}
const F = "umb-collection-view";
class ce extends qt {
  constructor(e, i, n = {}) {
    super(e, O), this.#t = { pageSize: 50 }, this._loading = new G(!1), this.loading = this._loading.asObservable(), this._items = new V([], (s) => s.unique), this.items = this._items.asObservable(), this._totalItems = new Yt(0), this.totalItems = this._totalItems.asObservable(), this._filter = new G({}), this.filter = this._filter.asObservable(), this.#e = new Kt(void 0), this.workspacePathBuilder = this.#e.asObservable(), this.#i = new V([], (s) => s.alias), this.userDefinedProperties = this.#i.asObservable(), this.#s = new V([], (s) => s.collectionView), this.viewLayouts = this.#s.asObservable(), this.pagination = new Jt(), this.selection = new jt(this), this.view = new le(this), this.#c = !1, this._init = new Promise((s) => {
      this.#c ? s() : this.#r = s;
    }), this.#u = new te(this), this._configured = !1, this.#_ = (s) => {
      const r = { skip: s.target.getSkip() };
      this.setFilter(r);
    }, this.#a = (s) => {
      this._items.getValue().some((x) => x.unique === s.getUnique()) && this.requestCollection();
    }, this.#l = async (s) => {
      const o = await this.getContext(X);
      if (!o) return;
      const r = o.getUnique(), x = o.getEntityType();
      r === s.getUnique() && x === s.getEntityType() && this.requestCollection();
    }, this.#n = i, this.#o = n, this.pagination.addEventListener(Xt.TYPE, this.#_), this.#m(), this.consumeContext(X, (s) => {
      const o = s?.getUnique(), r = s?.getEntityType(), x = o && r ? {
        unique: o,
        entityType: r
      } : void 0;
      this.#u?.setParent(x);
    });
  }
  #t;
  #e;
  #i;
  #s;
  #n;
  #o;
  #r;
  #c;
  #h;
  #u;
  setupView(e) {
    new se(e, ee).addAdditionalPath("entity/:entityType").onSetup((i) => ({ data: { entityType: i.entityType, preset: {} } })).onReject(() => {
      this.requestCollection();
    }).onSubmit(() => {
      this.requestCollection();
    }).observeRouteBuilder((i) => {
      this.#e.setValue(i);
    });
  }
  async #m() {
    this.consumeContext(Zt, (e) => {
      this.#h = e, e?.removeEventListener(
        B.TYPE,
        this.#a
      ), e?.removeEventListener(
        W.TYPE,
        this.#l
      ), e?.addEventListener(
        B.TYPE,
        this.#a
      ), e?.addEventListener(
        W.TYPE,
        this.#l
      );
    });
  }
  _configure() {
    if (!this.#t) return;
    this.selection.setMultiple(!0), this.#t.pageSize && this.pagination.setPageSize(this.#t.pageSize);
    const e = this._filter.getValue();
    this._filter.setValue({
      ...this.#o,
      ...this.#t,
      ...e,
      skip: e.skip ?? 0,
      take: this.#t.pageSize
    }), this.#i.setValue(this.#t?.userDefinedProperties ?? []);
    const i = { defaultViewAlias: this.#n };
    if (this.#t.layouts && this.#t.layouts.length > 0) {
      this.#s.setValue(this.#t.layouts);
      const n = this.#t.layouts.map((s) => s.collectionView);
      i.manifestFilter = (s) => n.includes(s.alias);
    }
    this.view.setConfig(i), this._configured = !0;
  }
  #f() {
    this._repository && (this.#c = !0, this.#r?.());
  }
  #p(e) {
    if (!e) throw new Error("Tree must have a repository alias.");
    new Wt(
      this,
      nt,
      e,
      [this._host],
      (i, n) => {
        this._repository = i ? n.api : void 0, this.#f();
      }
    );
  }
  #_;
  /**
   * Sets the configuration for the collection.
   * @param {UmbCollectionConfiguration} config
   * @memberof UmbCollectionContext
   */
  setConfig(e) {
    this.#t = e;
  }
  getConfig() {
    return this.#t;
  }
  set manifest(e) {
    this._manifest !== e && (this._manifest = e, this.#p(this._manifest?.meta.repositoryAlias));
  }
  get manifest() {
    return this._manifest;
  }
  getEmptyLabel() {
    return this.manifest?.meta.noItemsLabel ?? this.#t?.noItemsLabel ?? "#collection_noItemsTitle";
  }
  /**
   * Requests the collection from the repository.
   * @returns {*}
   * @memberof UmbCollectionContext
   */
  async requestCollection() {
    if (await this._init, this._configured || this._configure(), !this._repository) throw new Error(`Missing repository for ${this._manifest}`);
    this._loading.setValue(!0);
    const e = this._filter.getValue(), { data: i } = await this._repository.requestCollection(e);
    i && (this._items.setValue(i.items), this._totalItems.setValue(i.total), this.pagination.setTotalItems(i.total)), this._loading.setValue(!1);
  }
  /**
   * Sets the filter for the collection and refreshes the collection.
   * @param {Partial<FilterModelType>} filter
   * @memberof UmbCollectionContext
   */
  setFilter(e) {
    this._filter.setValue({ ...this._filter.getValue(), ...e }), this.requestCollection();
  }
  updateFilter(e) {
    this._filter.setValue({ ...this._filter.getValue(), ...e });
  }
  getLastSelectedView(e) {
    if (!e) return;
    const i = JSON.parse(localStorage.getItem(F) ?? "{}") ?? {};
    if (i)
      return i[e];
  }
  setLastSelectedView(e, i) {
    if (!e) return;
    const n = JSON.parse(localStorage.getItem(F) ?? "{}") ?? {};
    n && (n[e] = i, localStorage.setItem(F, JSON.stringify(n)));
  }
  #a;
  #l;
  destroy() {
    this.#h?.removeEventListener(
      B.TYPE,
      this.#a
    ), this.#h?.removeEventListener(
      W.TYPE,
      this.#l
    ), super.destroy();
  }
  /**
   * Sets the manifest for the collection.
   * @param {ManifestCollection} manifest
   * @memberof UmbCollectionContext
   * @deprecated Use set the `.manifest` property instead.
   */
  setManifest(e) {
    this._manifest !== e && (this._manifest = e, this._manifest && this.#p(this._manifest.meta.repositoryAlias));
  }
  /**
   * Returns the manifest for the collection.
   * @returns {ManifestCollection}
   * @memberof UmbCollectionContext
   * @deprecated Use the `.manifest` property instead.
   */
  getManifest() {
    return new Ht({
      removeInVersion: "18.0.0",
      deprecated: "getManifest",
      solution: "Use .manifest property instead"
    }).warn(), this._manifest;
  }
  /**
   * Returns the items in the collection.
   * @returns {Array<CollectionItemType>} - The items in the collection.
   */
  getItems() {
    return this._items.getValue();
  }
}
var he = Object.defineProperty, ue = Object.getOwnPropertyDescriptor, dt = (t) => {
  throw TypeError(t);
}, D = (t, e, i, n) => {
  for (var s = n > 1 ? void 0 : n ? ue(e, i) : e, o = t.length - 1, r; o >= 0; o--)
    (r = t[o]) && (s = (n ? r(e, i, s) : r(s)) || s);
  return n && s && he(e, i, s), s;
}, ot = (t, e, i) => e.has(t) || dt("Cannot " + i), E = (t, e, i) => (ot(t, e, "read from private field"), i ? i.call(t) : e.get(t)), _t = (t, e, i) => e.has(t) ? dt("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), pe = (t, e, i, n) => (ot(t, e, "write to private field"), e.set(t, i), i), U = (t, e, i) => (ot(t, e, "access private method"), i), h, f, bt, gt, Ct, yt, wt;
const _e = {
  type: "kind",
  alias: "Umb.Kind.Collection.Default",
  matchKind: "default",
  matchType: "collection",
  manifest: {
    type: "collection",
    kind: "default",
    elementName: "umb-collection-default",
    api: ce
  }
};
nt.register(_e);
let v = class extends u {
  constructor() {
    super(), _t(this, f), _t(this, h), this._routes = [], this._hasItems = !1, this._isDoneLoading = !1, this.consumeContext(O, async (t) => {
      pe(this, h, t), U(this, f, bt).call(this), U(this, f, gt).call(this), U(this, f, Ct).call(this), await E(this, h)?.requestCollection(), this._isDoneLoading = !0;
    });
  }
  render() {
    return this._routes ? a`
					<umb-body-layout header-transparent class=${this._hasItems ? "has-items" : ""}>
						<umb-router-slot id="router" .routes=${this._routes}></umb-router-slot>
						${this.renderToolbar()} ${this._hasItems ? U(this, f, yt).call(this) : U(this, f, wt).call(this)}
					</umb-body-layout>
				` : _;
  }
  renderToolbar() {
    return a`<umb-collection-toolbar slot="header"></umb-collection-toolbar>`;
  }
  renderPagination() {
    return a`<umb-collection-pagination></umb-collection-pagination>`;
  }
  renderSelectionActions() {
    return a`<umb-collection-selection-actions slot="footer"></umb-collection-selection-actions>`;
  }
};
h = /* @__PURE__ */ new WeakMap();
f = /* @__PURE__ */ new WeakSet();
bt = function() {
  E(this, h) && this.observe(
    E(this, h).view.routes,
    (t) => {
      this._routes = t;
    },
    "umbCollectionRoutesObserver"
  );
};
gt = function() {
  E(this, h) && this.observe(
    E(this, h).totalItems,
    (t) => {
      this._hasItems = t > 0;
    },
    "umbCollectionTotalItemsObserver"
  );
};
Ct = function() {
  this._emptyLabel = E(this, h)?.getEmptyLabel();
};
yt = function() {
  return a`${this.renderPagination()} ${this.renderSelectionActions()}`;
};
wt = function() {
  return this._isDoneLoading ? a`
			<div id="empty-state" class="uui-text">
				<h4>${this.localize.string(this._emptyLabel)}</h4>
			</div>
		` : _;
};
v.styles = [
  L,
  b`
			:host {
				display: flex;
				flex-direction: column;
				box-sizing: border-box;
				gap: var(--uui-size-space-5);
				height: 100%;
			}

			#router {
				visibility: hidden;
			}

			.has-items #router {
				visibility: visible;
			}

			#empty-state {
				height: 80%;
				align-content: center;
				text-align: center;
			}

			router-slot {
				width: 100%;
				height: 100%;
			}
		`
];
D([
  l()
], v.prototype, "_routes", 2);
D([
  l()
], v.prototype, "_hasItems", 2);
D([
  l()
], v.prototype, "_isDoneLoading", 2);
D([
  l()
], v.prototype, "_emptyLabel", 2);
v = D([
  c("umb-collection-default")
], v);
var me = Object.defineProperty, fe = Object.getOwnPropertyDescriptor, Et = (t) => {
  throw TypeError(t);
}, rt = (t, e, i, n) => {
  for (var s = n > 1 ? void 0 : n ? fe(e, i) : e, o = t.length - 1, r; o >= 0; o--)
    (r = t[o]) && (s = (n ? r(e, i, s) : r(s)) || s);
  return n && s && me(e, i, s), s;
}, at = (t, e, i) => e.has(t) || Et("Cannot " + i), P = (t, e, i) => (at(t, e, "read from private field"), i ? i.call(t) : e.get(t)), k = (t, e, i) => e.has(t) ? Et("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), mt = (t, e, i, n) => (at(t, e, "write to private field"), e.set(t, i), i), M = (t, e, i) => (at(t, e, "access private method"), i), C, y, g, J, j;
let z = class extends Ft {
  constructor() {
    super(...arguments), k(this, g), k(this, C), k(this, y);
  }
  getExtensionType() {
    return "collection";
  }
  getDefaultElementName() {
    return "umb-collection-default";
  }
  set config(t) {
    mt(this, C, t), M(this, g, J).call(this);
  }
  get config() {
    return P(this, C);
  }
  set filter(t) {
    mt(this, y, t), M(this, g, j).call(this);
  }
  get filter() {
    return P(this, y);
  }
  apiChanged(t) {
    super.apiChanged(t), M(this, g, J).call(this), M(this, g, j).call(this);
  }
};
C = /* @__PURE__ */ new WeakMap();
y = /* @__PURE__ */ new WeakMap();
g = /* @__PURE__ */ new WeakSet();
J = function() {
  !P(this, C) || !this._api || this._api.setConfig(P(this, C));
};
j = function() {
  !P(this, y) || !this._api || this._api.setFilter(P(this, y));
};
rt([
  q({ type: Object, attribute: !1 })
], z.prototype, "config", 1);
rt([
  q({ type: Object, attribute: !1 })
], z.prototype, "filter", 1);
z = rt([
  c("umb-collection")
], z);
var ve = Object.defineProperty, de = Object.getOwnPropertyDescriptor, Pt = (t, e, i, n) => {
  for (var s = n > 1 ? void 0 : n ? de(e, i) : e, o = t.length - 1, r; o >= 0; o--)
    (r = t[o]) && (s = (n ? r(e, i, s) : r(s)) || s);
  return n && s && ve(e, i, s), s;
};
let H = class extends u {
  constructor() {
    super(...arguments), this.value = !1;
  }
  render() {
    return this.value ? a`<uui-icon name="icon-check"></uui-icon>` : _;
  }
};
Pt([
  q({ attribute: !1 })
], H.prototype, "value", 2);
H = Pt([
  c("umb-boolean-table-column-view")
], H);
var be = Object.defineProperty, ge = Object.getOwnPropertyDescriptor, Ot = (t, e, i, n) => {
  for (var s = n > 1 ? void 0 : n ? ge(e, i) : e, o = t.length - 1, r; o >= 0; o--)
    (r = t[o]) && (s = (n ? r(e, i, s) : r(s)) || s);
  return n && s && be(e, i, s), s;
};
let Q = class extends u {
  render() {
    if (!this.value) return _;
    const t = new Date(this.value);
    return a`${t.toLocaleString()}`;
  }
};
Ot([
  q({ attribute: !1 })
], Q.prototype, "value", 2);
Q = Ot([
  c("umb-date-table-column-view")
], Q);
var Ce = Object.getOwnPropertyDescriptor, ye = (t, e, i, n) => {
  for (var s = n > 1 ? void 0 : n ? Ce(e, i) : e, o = t.length - 1, r; o >= 0; o--)
    (r = t[o]) && (s = r(s) || s);
  return s;
};
let Z = class extends u {
  render() {
    return a`<umb-extension-slot type="collectionAction"></umb-extension-slot>`;
  }
};
Z.styles = [
  b`
			:host {
				display: contents;
			}
		`
];
Z = ye([
  c("umb-collection-action-bundle")
], Z);
var we = Object.getOwnPropertyDescriptor, $t = (t) => {
  throw TypeError(t);
}, Ee = (t, e, i, n) => {
  for (var s = n > 1 ? void 0 : n ? we(e, i) : e, o = t.length - 1, r; o >= 0; o--)
    (r = t[o]) && (s = r(s) || s);
  return s;
}, lt = (t, e, i) => e.has(t) || $t("Cannot " + i), xt = (t, e, i) => (lt(t, e, "read from private field"), i ? i.call(t) : e.get(t)), Y = (t, e, i) => e.has(t) ? $t("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), Pe = (t, e, i, n) => (lt(t, e, "write to private field"), e.set(t, i), i), Oe = (t, e, i) => (lt(t, e, "access private method"), i), N, ct, tt, Ut;
let et = class extends u {
  constructor() {
    super(), Y(this, tt), Y(this, N), Y(this, ct, Qt((t) => xt(this, N)?.setFilter({ filter: t }), 500)), this.consumeContext(O, (t) => {
      Pe(this, N, t);
    });
  }
  render() {
    return a`
			<uui-input
				label=${this.localize.term("general_search")}
				placeholder=${this.localize.term("placeholders_search")}
				@input=${Oe(this, tt, Ut)}></uui-input>
		`;
  }
};
N = /* @__PURE__ */ new WeakMap();
ct = /* @__PURE__ */ new WeakMap();
tt = /* @__PURE__ */ new WeakSet();
Ut = function(t) {
  const e = t.target.value ?? "";
  xt(this, ct).call(this, e);
};
et.styles = [
  b`
			:host {
				display: flex;
			}

			uui-input {
				width: 100%;
			}
		`
];
et = Ee([
  c("umb-collection-filter-field")
], et);
var $e = Object.defineProperty, xe = Object.getOwnPropertyDescriptor, Tt = (t) => {
  throw TypeError(t);
}, A = (t, e, i, n) => {
  for (var s = n > 1 ? void 0 : n ? xe(e, i) : e, o = t.length - 1, r; o >= 0; o--)
    (r = t[o]) && (s = (n ? r(e, i, s) : r(s)) || s);
  return n && s && $e(e, i, s), s;
}, Ue = (t, e, i) => e.has(t) || Tt("Cannot " + i), Te = (t, e, i) => e.has(t) ? Tt("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), Se = (t, e, i) => (Ue(t, e, "access private method"), i), it, St;
function Ve(t, e) {
  return [{ entityType: t, meta: e.meta }];
}
let d = class extends u {
  constructor() {
    super(), Te(this, it), this._totalItems = 0, this._selectionLength = 0, this._apiProps = {}, this._selection = [], this.consumeContext(O, (t) => {
      this._collectionContext = t, this._observeCollectionContext();
    }), this.consumeContext(X, (t) => {
      this._entityType = t?.getEntityType();
    });
  }
  _handleKeyDown(t) {
    t.key === "Enter" && this._handleClearSelection();
  }
  _handleClearSelection() {
    this._collectionContext?.selection.clearSelection();
  }
  _observeCollectionContext() {
    this._collectionContext && (this.observe(
      this._collectionContext.totalItems,
      (t) => {
        this._totalItems = t;
      },
      "umbTotalItemsObserver"
    ), this.observe(
      this._collectionContext.selection.selection,
      (t) => {
        this._selectionLength = t.length, this._selection = t, this._apiProps = { selection: this._selection };
      },
      "umbSelectionObserver"
    ));
  }
  _renderSelectionCount() {
    return a`<div>${this._selectionLength} of ${this._totalItems} selected</div>`;
  }
  render() {
    return this._selectionLength === 0 ? _ : a`
			<div id="container">
				<div id="selection-info">
					<uui-button
						@click=${this._handleClearSelection}
						@keydown=${this._handleKeyDown}
						label=${this.localize.term("buttons_clearSelection")}
						look="secondary"></uui-button>
					${this._renderSelectionCount()}
				</div>

				<umb-extension-with-api-slot
					id="actions"
					type="entityBulkAction"
					default-element="umb-entity-bulk-action"
					.apiProps=${this._apiProps}
					.apiArgs=${(t) => Ve(this._entityType, t)}
					@action-executed=${Se(this, it, St)}>
				</umb-extension-with-api-slot>
			</div>
		`;
  }
};
it = /* @__PURE__ */ new WeakSet();
St = function(t) {
  t.stopPropagation(), this._collectionContext?.selection.clearSelection();
};
d.styles = [
  L,
  b`
			:host {
				width: 100%;
				margin-right: calc(
					-1 * var(--uui-size-space-6)
				); // compensate for the padding on the container. TODO: make a better solution
			}

			#container {
				display: flex;
				gap: var(--uui-size-3);
				width: 100%;
				padding: var(--uui-size-space-4) var(--uui-size-space-6);
				background-color: var(--uui-color-selected);
				color: var(--uui-color-selected-contrast);
				align-items: center;
				box-sizing: border-box;
				justify-content: space-between;
			}
			#selection-info,
			#actions {
				display: flex;
				align-items: center;
				box-sizing: border-box;
				gap: var(--uui-size-3);
			}
		`
];
A([
  l()
], d.prototype, "_entityType", 2);
A([
  l()
], d.prototype, "_totalItems", 2);
A([
  l()
], d.prototype, "_selectionLength", 2);
A([
  l()
], d.prototype, "_apiProps", 2);
d = A([
  c("umb-collection-selection-actions")
], d);
var Ie = Object.getOwnPropertyDescriptor, Le = (t, e, i, n) => {
  for (var s = n > 1 ? void 0 : n ? Ie(e, i) : e, o = t.length - 1, r; o >= 0; o--)
    (r = t[o]) && (s = r(s) || s);
  return s;
};
let st = class extends u {
  render() {
    return a`
			<umb-collection-action-bundle></umb-collection-action-bundle>
			<div id="slot"><slot></slot></div>
			<umb-collection-view-bundle></umb-collection-view-bundle>
		`;
  }
};
st.styles = [
  L,
  b`
			:host {
				display: flex;
				gap: var(--uui-size-space-5);
				justify-content: space-between;
				width: 100%;
			}
			#slot {
				flex: 1;
			}
		`
];
st = Le([
  c("umb-collection-toolbar")
], st);
var De = Object.defineProperty, Ae = Object.getOwnPropertyDescriptor, Vt = (t) => {
  throw TypeError(t);
}, $ = (t, e, i, n) => {
  for (var s = n > 1 ? void 0 : n ? Ae(e, i) : e, o = t.length - 1, r; o >= 0; o--)
    (r = t[o]) && (s = (n ? r(e, i, s) : r(s)) || s);
  return n && s && De(e, i, s), s;
}, ht = (t, e, i) => e.has(t) || Vt("Cannot " + i), T = (t, e, i) => (ht(t, e, "read from private field"), e.get(t)), ft = (t, e, i) => e.has(t) ? Vt("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), Me = (t, e, i, n) => (ht(t, e, "write to private field"), e.set(t, i), i), R = (t, e, i) => (ht(t, e, "access private method"), i), p, w, It, Lt, Dt, At;
let m = class extends u {
  constructor() {
    super(), ft(this, w), this._views = [], ft(this, p), this.consumeContext(ne, (t) => {
      this.observe(t?.activePath, (e) => {
        this._collectionRootPathName = e;
      });
    }), this.consumeContext(O, (t) => {
      Me(this, p, t), R(this, w, It).call(this);
    }), this.consumeContext(ie, (t) => {
      this._entityUnique = t?.getUnique() ?? "";
    });
  }
  render() {
    return this._currentView ? this._views.length <= 1 ? _ : a`
			<uui-button compact popovertarget="collection-view-bundle-popover" label="status">
				<umb-icon name=${this._currentView.icon}></umb-icon>
			</uui-button>
			<uui-popover-container id="collection-view-bundle-popover" placement="bottom-end">
				<umb-popover-layout>
					<div class="filter-dropdown">
						${re(
      this._views,
      (t) => t.alias,
      (t) => R(this, w, At).call(this, t)
    )}
					</div>
				</umb-popover-layout>
			</uui-popover-container>
		` : _;
  }
};
p = /* @__PURE__ */ new WeakMap();
w = /* @__PURE__ */ new WeakSet();
It = function() {
  T(this, p) && (this.observe(
    T(this, p).view.currentView,
    (t) => {
      t && (this._currentView = this._views.find((e) => e.alias === t.alias));
    },
    "umbCurrentCollectionViewObserver"
  ), this.observe(
    Gt([T(this, p).view.views, T(this, p).viewLayouts]),
    ([t, e]) => {
      !t?.length && !e?.length || (this._views = R(this, w, Lt).call(this, t, e));
    },
    "umbCollectionViewsAndLayoutsObserver"
  ));
};
Lt = function(t, e) {
  if (e.length > 0) {
    const i = [];
    return e.forEach((n) => {
      const s = t.find((o) => o.alias === n.collectionView);
      s && i.push({
        alias: s.alias,
        label: n.name ?? s.meta.label,
        icon: n.icon ?? s.meta.icon,
        pathName: s.meta.pathName
      });
    }), i;
  }
  return t.map((i) => ({
    alias: i.alias,
    label: i.meta.label,
    icon: i.meta.icon,
    pathName: i.meta.pathName
  }));
};
Dt = function(t) {
  T(this, p)?.setLastSelectedView(this._entityUnique, t.alias), setTimeout(() => {
    this._popover?.hidePopover();
  }, 100);
};
At = function(t) {
  return a`
			<uui-menu-item
				label=${t.label}
				href="${this._collectionRootPathName}/${t.pathName}"
				@click-label=${() => R(this, w, Dt).call(this, t)}
				?active=${t.alias === this._currentView?.alias}>
				<umb-icon slot="icon" name=${t.icon}></umb-icon>
			</uui-menu-item>
		`;
};
m.styles = [
  L,
  b`
			:host {
				--uui-button-content-align: left;
				--uui-menu-item-flat-structure: 1;
				display: contents;
			}

			.filter-dropdown {
				padding: var(--uui-size-space-3);
			}
		`
];
$([
  l()
], m.prototype, "_views", 2);
$([
  l()
], m.prototype, "_currentView", 2);
$([
  l()
], m.prototype, "_collectionRootPathName", 2);
$([
  l()
], m.prototype, "_entityUnique", 2);
$([
  oe("#collection-view-bundle-popover")
], m.prototype, "_popover", 2);
m = $([
  c("umb-collection-view-bundle")
], m);
var Ne = Object.defineProperty, ze = Object.getOwnPropertyDescriptor, Mt = (t) => {
  throw TypeError(t);
}, ut = (t, e, i, n) => {
  for (var s = n > 1 ? void 0 : n ? ze(e, i) : e, o = t.length - 1, r; o >= 0; o--)
    (r = t[o]) && (s = (n ? r(e, i, s) : r(s)) || s);
  return n && s && Ne(e, i, s), s;
}, Re = (t, e, i) => e.has(t) || Mt("Cannot " + i), qe = (t, e, i) => e.has(t) ? Mt("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), K = (t, e, i) => (Re(t, e, "access private method"), i), S, Nt, zt, Rt;
let I = class extends u {
  constructor() {
    super(), qe(this, S), this._totalPages = 1, this._currentPage = 1, this.consumeContext(O, (t) => {
      this._collectionContext = t, K(this, S, Nt).call(this), K(this, S, zt).call(this);
    });
  }
  render() {
    return this._totalPages <= 1 ? _ : a`<uui-pagination
			.current=${this._currentPage}
			.total=${this._totalPages}
			firstlabel=${this.localize.term("general_first")}
			previouslabel=${this.localize.term("general_previous")}
			nextlabel=${this.localize.term("general_next")}
			lastlabel=${this.localize.term("general_last")}
			@change=${K(this, S, Rt)}></uui-pagination>`;
  }
};
S = /* @__PURE__ */ new WeakSet();
Nt = function() {
  this.observe(
    this._collectionContext?.pagination.currentPage,
    (t) => {
      this._currentPage = t ?? 1;
    },
    "umbCurrentPageObserver"
  );
};
zt = function() {
  this.observe(
    this._collectionContext?.pagination.totalPages,
    (t) => {
      this._totalPages = t ?? 1;
    },
    "umbTotalPagesObserver"
  );
};
Rt = function(t) {
  this._collectionContext?.pagination.setCurrentPageNumber(t.target.current);
};
I.styles = [
  L,
  b`
			:host {
				display: contents;
			}

			uui-pagination {
				display: block;
				margin-top: var(--uui-size-layout-1);
			}
		`
];
ut([
  l()
], I.prototype, "_totalPages", 2);
ut([
  l()
], I.prototype, "_currentPage", 2);
I = ut([
  c("umb-collection-pagination")
], I);
class si extends ae {
  constructor(e) {
    super(e);
  }
}
class ni extends vt {
}
export {
  ui as UMB_COLLECTION_ALIAS_CONDITION,
  pi as UMB_COLLECTION_BULK_ACTION_PERMISSION_CONDITION,
  O as UMB_COLLECTION_CONTEXT,
  ni as UmbCollectionActionBase,
  Z as UmbCollectionActionBundleElement,
  _i as UmbCollectionActionElement,
  ci as UmbCollectionAliasCondition,
  ai as UmbCollectionBulkActionPermissionCondition,
  v as UmbCollectionDefaultElement,
  z as UmbCollectionElement,
  et as UmbCollectionFilterFieldElement,
  si as UmbCollectionItemPickerContext,
  I as UmbCollectionPaginationElement,
  d as UmbCollectionSelectionActionsElement,
  st as UmbCollectionToolbarElement,
  m as UmbCollectionViewBundleElement,
  fi as UmbCollectionWorkspaceViewElement,
  ce as UmbDefaultCollectionContext,
  si as api,
  vi as element
};
//# sourceMappingURL=index.js.map
