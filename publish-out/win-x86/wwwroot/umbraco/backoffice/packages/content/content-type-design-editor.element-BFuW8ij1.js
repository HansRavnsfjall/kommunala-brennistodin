import { U as X, a as K, b as Y, c as j, d as J } from "./content-type-move-root-containers-into-first-tab-helper.class-CkGOWf1Z.js";
import { UmbContextBase as Q } from "@umbraco-cms/backoffice/class-api";
import { UmbBooleanState as Z } from "@umbraco-cms/backoffice/observable-api";
import "@umbraco-cms/backoffice/repository";
import "@umbraco-cms/backoffice/id";
import "@umbraco-cms/backoffice/utils";
import "@umbraco-cms/backoffice/extension-api";
import "@umbraco-cms/backoffice/extension-registry";
import "@umbraco-cms/backoffice/external/rxjs";
import "@umbraco-cms/backoffice/resources";
import { encodeFolderName as C } from "@umbraco-cms/backoffice/router";
import { html as l, repeat as tt, nothing as et, ifDefined as O, css as it, state as y, customElement as ot } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as nt } from "@umbraco-cms/backoffice/lit-element";
import { CompositionTypeModel as T } from "@umbraco-cms/backoffice/external/backend-api";
import { umbConfirmModal as rt, umbOpenModal as st } from "@umbraco-cms/backoffice/modal";
import { UmbTextStyles as at } from "@umbraco-cms/backoffice/style";
import { UmbSorterController as ut } from "@umbraco-cms/backoffice/sorter";
class ct extends Q {
  constructor(e) {
    super(e, X), this.#t = new Z(!1), this.isSorting = this.#t.asObservable();
  }
  #t;
  getIsSorting() {
    return this.#t.getValue();
  }
  setIsSorting(e) {
    this.#t.setValue(e);
  }
  destroy() {
    this.#t.destroy(), super.destroy();
  }
}
var lt = Object.defineProperty, ht = Object.getOwnPropertyDescriptor, R = (t) => {
  throw TypeError(t);
}, _ = (t, e, i, n) => {
  for (var r = n > 1 ? void 0 : n ? ht(e, i) : e, v = t.length - 1, u; v >= 0; v--)
    (u = t[v]) && (r = (n ? u(e, i, r) : u(r)) || r);
  return n && r && lt(e, i, r), r;
}, k = (t, e, i) => e.has(t) || R("Cannot " + i), o = (t, e, i) => (k(t, e, "read from private field"), i ? i.call(t) : e.get(t)), g = (t, e, i) => e.has(t) ? R("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), b = (t, e, i, n) => (k(t, e, "write to private field"), e.set(t, i), i), c = (t, e, i) => (k(t, e, "access private method"), i), w, s, I, m, p, h, a, U, A, x, S, D, z, E, P, q, G, N, F, W, B;
let f = class extends nt {
  constructor() {
    super(), g(this, a), g(this, w, new ut(this, {
      getUniqueOfElement: (t) => t.getAttribute("data-umb-tab-key"),
      getUniqueOfModel: (t) => t.key,
      identifier: "content-type-tabs-sorter",
      itemSelector: "uui-tab:not(#root-tab)",
      containerSelector: "uui-tab-group",
      disabledItemSelector: ":not([sortable])",
      ignorerSelector: "uui-input",
      resolvePlacement: (t) => t.relatedRect.left + t.relatedRect.width * 0.5 > t.pointerX,
      onChange: ({ model: t }) => {
        this._tabs = t;
      },
      onEnd: ({ item: t }) => {
        const e = this._tabs ?? [], i = e.findIndex(($) => $.key === t.key);
        if (i === -1) return;
        let n = -1;
        i > 0 && e.length > 0 && (n = e[i - 1].sortOrder);
        const r = t.ownerId;
        if (r === void 0)
          throw new Error(
            "OwnerId is not set for the given container, we cannot move containers that are not owned by the current Document."
          );
        o(this, m).partialUpdateContainer(r, {
          sortOrder: ++n
        });
        let v = i + 1, u;
        for (; (u = e[v]) !== void 0 && u.sortOrder <= n; )
          u.ownerId && o(this, m).partialUpdateContainer(u.ownerId, {
            sortOrder: ++n
          }), v++;
      }
    })), g(this, s), g(this, I, new ct(this)), g(this, m, new K(this)), g(this, p), g(this, h), this._hasRootGroups = !1, this._routes = [], this._activePath = "", o(this, w).disable(), this.observe(
      o(this, I).isSorting,
      (t) => {
        this._sortModeActive = t, t ? o(this, w).enable() : o(this, w).disable();
      },
      null
    ), o(this, m).setContainerChildType("Tab"), o(this, m).setIsRoot(!0), this.observe(o(this, m).childContainers, (t) => {
      this._tabs = t, o(this, w).setModel(t), c(this, a, x).call(this);
    }), this.consumeContext(Y, (t) => {
      b(this, s, t), o(this, m).setStructureManager(t?.structure), c(this, a, A).call(this);
    });
  }
  set manifest(t) {
    this._compositionRepositoryAlias = t.meta.compositionRepositoryAlias;
  }
  render() {
    return l`
			<umb-body-layout header-fit-height>
				<div id="header" slot="header">
					<div id="container-list">${this.renderTabsNavigation()} ${c(this, a, F).call(this)}</div>
					${c(this, a, W).call(this)}
				</div>
				<umb-router-slot
					.routes=${this._routes}
					@init=${(t) => {
      this._routerPath = t.target.absoluteRouterPath;
    }}
					@change=${(t) => {
      this._activePath = t.target.absoluteActiveViewPath ?? "";
    }}>
				</umb-router-slot>
			</umb-body-layout>
		`;
  }
  renderTabsNavigation() {
    if (!(!this._tabs || this._tabs.length === 0))
      return l`
			<div id="tabs-group">
				<uui-tab-group>
					${this.renderRootTab()}
					${tt(
        this._tabs,
        (t) => t.ownerId ?? t.ids[0],
        (t) => this.renderTab(t)
      )}
				</uui-tab-group>
			</div>
		`;
  }
  renderRootTab() {
    const t = this._routerPath + "/root", e = t === this._activePath;
    return !this._hasRootGroups && !this._sortModeActive ? et : l`
			<uui-tab
				id="root-tab"
				data-mark="root-tab"
				class=${this._hasRootGroups || e ? "" : "content-tab-is-empty"}
				label=${this.localize.term("general_generic")}
				.active=${e}
				href=${t}
				@dragover=${(i) => c(this, a, N).call(this, i, t)}>
				${this.localize.term("general_generic")}
			</uui-tab>
		`;
  }
  renderTab(t) {
    const e = this._routerPath + "/tab/" + C(t.name && t.name !== "" ? t.name : "-"), i = e === this._activePath, n = !!t.ownerId;
    return l`<uui-tab
			label=${t.name && t.name !== "" ? t.name : "Unnamed"}
			.active=${i}
			href=${e}
			data-umb-tab-id=${O(t.ownerId ?? t.ids[0])}
			data-umb-tab-key=${O(t.key)}
			data-mark="tab:${t.name}"
			?sortable=${n}
			@dragover=${(r) => c(this, a, N).call(this, r, e)}>
			${this.renderTabInner(t, i, n)}
		</uui-tab>`;
  }
  renderTabInner(t, e, i) {
    const n = t.name && t.name !== "", r = n ? t.name : "Unnamed", v = t.ownerId ?? t.ids[0];
    return this._sortModeActive ? l`<div class="tab-inner">
				${i ? l`<uui-icon name="icon-grip" class="drag-${v}"> </uui-icon>${this.localize.string(r)}
							<uui-input
								data-mark="tab:sort-input"
								label="sort order"
								type="number"
								value=${O(t.sortOrder)}
								style="width:50px"
								@change=${(u) => c(this, a, B).call(this, t, u)}></uui-input>` : l`<uui-icon name="icon-merge"></uui-icon>${this.localize.string(r)}`}
			</div>` : e && i ? l`<div class="tab-inner">
				<uui-input
					data-mark="tab:name-input"
					id="input"
					look="placeholder"
					placeholder="Unnamed"
					label=${this.localize.term("settings_tabname")}
					value="${t.name}"
					auto-width
					minlength="1"
					@change=${(u) => c(this, a, P).call(this, u, t)}
					@input=${(u) => c(this, a, P).call(this, u, t)}
					@blur=${(u) => c(this, a, q).call(this, u, t)}>
					${this.renderDeleteFor(t)}
				</uui-input>
			</div>` : i ? l`<div class="not-active">
				<span class=${n ? "" : "invalid"}>${n ? this.localize.string(r) : "Unnamed"}</span>
				${this.renderDeleteFor(t)}
			</div>` : l`<div class="not-active">
				<uui-icon name="icon-merge"></uui-icon>${this.localize.string(r)}
			</div>`;
  }
  renderDeleteFor(t) {
    return l`<uui-button
			data-mark="tab:delete"
			label=${this.localize.term("actions_remove")}
			class="trash"
			slot="append"
			@click=${(e) => {
      e.stopPropagation(), e.preventDefault(), c(this, a, S).call(this, t);
    }}
			compact>
			<uui-icon name="icon-trash"></uui-icon>
		</uui-button>`;
  }
  destroy() {
    b(this, p, void 0), super.destroy();
  }
};
w = /* @__PURE__ */ new WeakMap();
s = /* @__PURE__ */ new WeakMap();
I = /* @__PURE__ */ new WeakMap();
m = /* @__PURE__ */ new WeakMap();
p = /* @__PURE__ */ new WeakMap();
h = /* @__PURE__ */ new WeakMap();
a = /* @__PURE__ */ new WeakSet();
U = function() {
  o(this, I)?.setIsSorting(!this._sortModeActive);
};
A = async function() {
  o(this, s) && this.observe(
    await o(this, s).structure.hasRootContainers("Group"),
    (t) => {
      this._hasRootGroups = t, c(this, a, x).call(this);
    },
    "_observeGroups"
  );
};
x = function() {
  if (!o(this, s) || !this._tabs || this._hasRootGroups === void 0) return;
  const t = [];
  let e;
  if (this._tabs.length > 0 && this._tabs?.forEach((i) => {
    const n = i.name && i.name !== "" ? i.name : "-";
    i.ownerId && i.ownerId === o(this, h) && (e = n), t.push({
      path: `tab/${C(n)}`,
      component: () => import("./content-type-design-editor-tab.element-CbfHB4Kn.js"),
      setup: (r) => {
        b(this, p, r), o(this, p).containerId = i.ownerId ?? i.ids[0];
      }
    });
  }), this._hasRootGroups || this._tabs.length === 0 ? (t.push({
    path: "root",
    component: () => import("./content-type-design-editor-tab.element-CbfHB4Kn.js"),
    setup: (i) => {
      b(this, p, i), o(this, p).containerId = null;
    }
  }), t.push({
    path: "",
    pathMatch: "full",
    redirectTo: "root",
    guards: [() => o(this, h) === void 0]
  })) : t.push({
    path: "",
    pathMatch: "full",
    redirectTo: t[0]?.path,
    guards: [() => o(this, h) === void 0]
  }), t.length !== 0 ? t.push({
    path: "**",
    component: async () => (await import("@umbraco-cms/backoffice/router")).UmbRouteNotFoundElement,
    guards: [() => o(this, h) === void 0],
    setup: () => {
      b(this, p, void 0);
    }
  }) : t.push({
    path: "**",
    component: async () => (await import("@umbraco-cms/backoffice/router")).UmbRouteNotFoundElement,
    setup: () => {
      b(this, p, void 0);
    }
  }), this._routes = t, this._activePath && o(this, p) && t.find((n) => this._routerPath + "/" + n.path === this._activePath)?.setup?.(o(this, p), void 0), e !== void 0 && this._activePath && this._routerPath) {
    const i = this._activePath.split(this._routerPath)[1], n = "/tab/" + C(e);
    i !== n && (this._activePath = this._routerPath + n, window.history.replaceState(null, "", this._activePath));
  }
};
S = async function(t) {
  if (!t || !t.ownerId) return;
  const e = t.name === "" ? "Unnamed" : t.name, i = {
    headline: "Delete tab",
    content: l`<umb-localize key="contentTypeEditor_confirmDeleteTabMessage" .args=${[e]}>
					Are you sure you want to delete the tab <strong>${e}</strong>
				</umb-localize>
				<div style="color:var(--uui-color-danger-emphasis)">
					<umb-localize key="contentTypeEditor_confirmDeleteTabNotice">
						This will delete all items that doesn't belong to a composition.
					</umb-localize>
				</div>`,
    confirmLabel: this.localize.term("actions_delete"),
    color: "danger"
  };
  await rt(this, i), c(this, a, D).call(this, t.ownerId);
};
D = function(t) {
  o(this, s)?.structure.removeContainer(null, t), o(this, h) === t && b(this, h, void 0);
};
z = async function() {
  if (this.shadowRoot?.querySelector("uui-tab[active] uui-input")?.value === "") {
    c(this, a, E).call(this);
    return;
  }
  if (!o(this, s))
    throw new Error("Workspace context has not been found");
  if (!this._tabs) return;
  const e = this._tabs.length, i = e === 0 ? 0 : this._tabs[e - 1].sortOrder + 1, n = await o(this, s).structure.createContainer(null, null, "Tab", i);
  if (e === 0 && new j(this, o(this, s).structure), n) {
    const r = this._routerPath + "/tab/" + C(n.name && n.name !== "" ? n.name : "-");
    window.history.replaceState(null, "", r), c(this, a, E).call(this);
  }
};
E = async function() {
  setTimeout(() => {
    this.shadowRoot?.querySelector("uui-tab[active] uui-input")?.focus();
  }, 100);
};
P = async function(t, e) {
  if (!o(this, s) || !e.ownerId) return;
  b(this, h, e.ownerId);
  let i = t.target.value;
  const n = o(this, s).structure.makeContainerNameUniqueForOwnerContentType(
    e.ownerId,
    i,
    "Tab"
  );
  n != null && (i = n, t.target.value = i), o(this, m).partialUpdateContainer(e.ownerId, {
    name: i
  });
};
q = async function(t, e) {
  if (!o(this, h) || !e.ownerId) return;
  if (t.target?.value === "") {
    const n = o(this, s).structure.makeEmptyContainerName(o(this, h), "Tab");
    t.target.value = n, o(this, m).partialUpdateContainer(e.ownerId, {
      name: n
    });
  }
  b(this, h, void 0);
};
G = async function() {
  if (!o(this, s) || !this._compositionRepositoryAlias) return;
  const t = o(this, s).getUnique();
  if (!t)
    throw new Error("Content Type unique is undefined");
  const e = o(this, s).structure.getOwnerContentType();
  if (!e)
    throw new Error("Owner Content Type not found");
  const n = (await o(this, s).structure.getContentTypeCompositions()).filter(
    (d) => d.compositionType === T.INHERITANCE
  ), r = await o(this, s).structure.getOwnerContentTypeCompositions(), u = r.filter(
    (d) => d.compositionType === T.COMPOSITION
  ).map(
    (d) => d.contentType.unique
  ), $ = r.filter(
    (d) => d.compositionType === T.INHERITANCE
  ), H = await o(this, s).structure.getContentTypePropertyAliases(), L = {
    compositionRepositoryAlias: this._compositionRepositoryAlias,
    unique: t,
    selection: u,
    usedForInheritance: n.map((d) => d.contentType.unique),
    usedForComposition: u,
    isElement: e.isElement,
    currentPropertyAliases: H,
    isNew: o(this, s).getIsNew()
  }, M = await st(this, J, {
    data: L
  }).catch(() => {
  });
  if (!M) return;
  const V = M.selection;
  o(this, s).setCompositions([
    ...$,
    ...V.map((d) => ({
      contentType: { unique: d },
      compositionType: T.COMPOSITION
    }))
  ]);
};
N = function(t, e) {
  this._activePath !== e && (t.preventDefault(), window.history.replaceState(null, "", e));
};
F = function() {
  if (!this._sortModeActive)
    return l`
			<uui-button id="add-tab" data-mark="add-tab-button" @click="${c(this, a, z)}" label="Add tab">
				<uui-icon name="icon-add"></uui-icon>
				Add tab
			</uui-button>
		`;
};
W = function() {
  const t = this._sortModeActive ? this.localize.term("general_reorderDone") : this.localize.term("general_reorder");
  return l`
			<div id="actions">
				${this._compositionRepositoryAlias ? l`
							<uui-button
								data-mark="edit-compositions"
								look="outline"
								label=${this.localize.term("contentTypeEditor_compositions")}
								compact
								@click=${c(this, a, G)}>
								<uui-icon name="icon-merge"></uui-icon>
								${this.localize.term("contentTypeEditor_compositions")}
							</uui-button>
						` : ""}
				<uui-button
					data-mark="toggle-sort-mode"
					look="outline"
					label=${t}
					compact
					@click=${c(this, a, U)}>
					<uui-icon name="icon-height"></uui-icon>
					${t}
				</uui-button>
			</div>
		`;
};
B = function(t, e) {
  if (!e.target.value || !t.ownerId) return;
  const i = Number(e.target.value);
  o(this, m).partialUpdateContainer(t.ownerId, { sortOrder: i });
};
f.styles = [
  at,
  it`
			:host {
				position: relative;
				display: flex;
				flex-direction: column;
				height: 100%;
				--uui-tab-background: var(--uui-color-surface);
			}

			#buttons-wrapper {
				flex: 1;
				display: flex;
				align-items: center;
				justify-content: space-between;
				align-items: stretch;
			}

			[drag-placeholder] {
				opacity: 0.5;
			}

			[drag-placeholder] uui-input {
				visibility: hidden;
			}

			/* TODO: This should be replaced with a general workspace bar — naming is hard */

			#header {
				width: 100%;
				min-height: var(--uui-size-16);
				display: flex;
				align-items: center;
				justify-content: space-between;
				flex-wrap: nowrap;
			}

			#container-list {
				display: flex;
			}

			#tabs-group {
				display: flex;
			}

			#actions {
				display: flex;
				gap: var(--uui-size-space-2);
			}

			uui-tab-group {
				flex-wrap: nowrap;
			}

			uui-tab.content-tab-is-empty {
				align-self: center;
				border-radius: 3px;
				--uui-tab-text: var(--uui-color-text-alt);
				border: dashed 1px var(--uui-color-border-emphasis);
			}

			uui-tab {
				position: relative;
				border-left: 1px hidden transparent;
				border-right: 1px solid var(--uui-color-border);
				background-color: var(--uui-color-surface);
			}

			.tab-inner {
				display: inline-flex;
				align-items: center;
				justify-content: center;
				gap: var(--uui-size-space-2);
				margin-right: calc(var(--uui-size-space-3) * -1);
				pointer-events: none;
			}
			.tab-inner > uui-input {
				pointer-events: auto;
			}

			.not-active uui-button {
				pointer-events: auto;
			}

			.not-active {
				pointer-events: none;
				display: inline-flex;
				padding-left: var(--uui-size-space-3);
				border: 1px solid transparent;
				align-items: center;
				gap: var(--uui-size-space-3);
			}

			.invalid {
				color: var(--uui-color-danger, var(--uui-color-invalid));
			}

			.trash {
				opacity: 1;
				transition: opacity 100ms;
			}

			uui-tab:not(:hover, :focus, :focus-within) .trash {
				opacity: 0;
				transition: opacity 100ms;
			}

			uui-input:not(:focus, :hover, :invalid) {
				border: 1px solid transparent;
			}

			.inherited {
				vertical-align: sub;
			}

			[drag-placeholder] {
				opacity: 0.2;
			}
		`
];
_([
  y()
], f.prototype, "_compositionRepositoryAlias", 2);
_([
  y()
], f.prototype, "_hasRootGroups", 2);
_([
  y()
], f.prototype, "_routes", 2);
_([
  y()
], f.prototype, "_tabs", 2);
_([
  y()
], f.prototype, "_routerPath", 2);
_([
  y()
], f.prototype, "_activePath", 2);
_([
  y()
], f.prototype, "_sortModeActive", 2);
f = _([
  ot("umb-content-type-design-editor")
], f);
const kt = f;
export {
  f as UmbContentTypeDesignEditorElement,
  kt as default
};
//# sourceMappingURL=content-type-design-editor.element-BFuW8ij1.js.map
