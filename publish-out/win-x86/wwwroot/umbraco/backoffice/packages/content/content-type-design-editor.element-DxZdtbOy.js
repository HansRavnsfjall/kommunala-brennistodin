import { U as X, a as K, b as Y, c as J, d as Q } from "./content-type-move-root-containers-into-first-tab-helper.class-BMcf-7X5.js";
import { UmbContextBase as Z } from "@umbraco-cms/backoffice/class-api";
import { UmbBooleanState as j } from "@umbraco-cms/backoffice/observable-api";
import "@umbraco-cms/backoffice/repository";
import "@umbraco-cms/backoffice/id";
import "@umbraco-cms/backoffice/utils";
import "@umbraco-cms/backoffice/extension-api";
import "@umbraco-cms/backoffice/extension-registry";
import "@umbraco-cms/backoffice/external/rxjs";
import { html as l, repeat as tt, nothing as et, ifDefined as x, css as it, state as y, customElement as ot } from "@umbraco-cms/backoffice/external/lit";
import { encodeFolderName as C } from "@umbraco-cms/backoffice/router";
import { UmbLitElement as nt } from "@umbraco-cms/backoffice/lit-element";
import { CompositionTypeModel as w } from "@umbraco-cms/backoffice/external/backend-api";
import { umbConfirmModal as rt, umbOpenModal as st } from "@umbraco-cms/backoffice/modal";
import { UmbTextStyles as at } from "@umbraco-cms/backoffice/style";
import { UmbSorterController as ut } from "@umbraco-cms/backoffice/sorter";
class ct extends Z {
  constructor(e) {
    super(e, X), this.#t = new j(!1), this.isSorting = this.#t.asObservable();
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
var lt = Object.defineProperty, ht = Object.getOwnPropertyDescriptor, U = (t) => {
  throw TypeError(t);
}, _ = (t, e, i, n) => {
  for (var r = n > 1 ? void 0 : n ? ht(e, i) : e, c = t.length - 1, b; c >= 0; c--)
    (b = t[c]) && (r = (n ? b(e, i, r) : b(r)) || r);
  return n && r && lt(e, i, r), r;
}, N = (t, e, i) => e.has(t) || U("Cannot " + i), o = (t, e, i) => (N(t, e, "read from private field"), i ? i.call(t) : e.get(t)), g = (t, e, i) => e.has(t) ? U("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), v = (t, e, i, n) => (N(t, e, "write to private field"), e.set(t, i), i), u = (t, e, i) => (N(t, e, "access private method"), i), T, a, $, h, m, p, s, A, I, M, S, D, k, O, E, z, q, P, G, F, W;
let f = class extends nt {
  constructor() {
    super(), g(this, s), g(this, T, new ut(this, {
      getUniqueOfElement: (t) => t.getAttribute("data-umb-tab-id"),
      getUniqueOfModel: (t) => t.id,
      identifier: "content-type-tabs-sorter",
      itemSelector: "uui-tab",
      containerSelector: "uui-tab-group",
      disabledItemSelector: ":not([sortable])",
      resolvePlacement: (t) => t.relatedRect.left + t.relatedRect.width * 0.5 > t.pointerX,
      onChange: ({ model: t }) => {
        this._tabs = t;
      },
      onEnd: ({ item: t }) => {
        const e = this._tabs ?? [], i = e.findIndex((b) => b.id === t.id);
        if (i === -1) return;
        let n = -1;
        i > 0 && e.length > 0 && (n = e[i - 1].sortOrder), o(this, h).partialUpdateContainer(t.id, {
          sortOrder: ++n
        });
        let r = i + 1, c;
        for (; (c = e[r]) !== void 0 && c.sortOrder <= n; )
          o(this, h).partialUpdateContainer(c.id, {
            sortOrder: ++n
          }), r++;
      }
    })), g(this, a), g(this, $, new ct(this)), g(this, h, new K(this)), g(this, m), g(this, p), this._hasRootGroups = !1, this._routes = [], this._activePath = "", o(this, T).disable(), this.observe(
      o(this, $).isSorting,
      (t) => {
        this._sortModeActive = t, t ? o(this, T).enable() : o(this, T).disable();
      },
      null
    ), o(this, h).setContainerChildType("Tab"), o(this, h).setIsRoot(!0), this.observe(o(this, h).mergedContainers, (t) => {
      this._tabs = t, o(this, T).setModel(t), u(this, s, M).call(this);
    }), this.consumeContext(Y, (t) => {
      v(this, a, t), o(this, h).setStructureManager(t?.structure), u(this, s, I).call(this);
    });
  }
  set manifest(t) {
    this._compositionRepositoryAlias = t.meta.compositionRepositoryAlias;
  }
  render() {
    return l`
			<umb-body-layout header-fit-height>
				<div id="header" slot="header">
					<div id="container-list">${this.renderTabsNavigation()} ${u(this, s, G).call(this)}</div>
					${u(this, s, F).call(this)}
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
        (t) => t.id,
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
				@dragover=${(i) => u(this, s, P).call(this, i, t)}>
				${this.localize.term("general_generic")}
			</uui-tab>
		`;
  }
  renderTab(t) {
    const e = this._routerPath + "/tab/" + C(t.name && t.name !== "" ? t.name : "-"), i = e === this._activePath, n = o(this, h).isOwnerChildContainer(t.id) ?? !1;
    return l`<uui-tab
			label=${t.name && t.name !== "" ? t.name : "Unnamed"}
			.active=${i}
			href=${e}
			data-umb-tab-id=${x(t.id)}
			data-mark="tab:${t.name}"
			?sortable=${n}
			@dragover=${(r) => u(this, s, P).call(this, r, e)}>
			${this.renderTabInner(t, i, n)}
		</uui-tab>`;
  }
  renderTabInner(t, e, i) {
    const n = t.name && t.name !== "", r = n ? t.name : "Unnamed";
    return this._sortModeActive ? l`<div class="tab">
				${i ? l`<uui-icon name="icon-grip" class="drag-${t.id}"> </uui-icon>${r}
							<uui-input
								label="sort order"
								type="number"
								value=${x(t.sortOrder)}
								style="width:50px"
								@change=${(c) => u(this, s, W).call(this, t, c)}></uui-input>` : l`<uui-icon name="icon-merge"></uui-icon>${t.name}`}
			</div>` : e && i ? l`<div class="tab">
				<uui-input
					id="input"
					look="placeholder"
					placeholder="Unnamed"
					label=${t.name}
					value="${t.name}"
					auto-width
					minlength="1"
					@change=${(c) => u(this, s, E).call(this, c, t)}
					@input=${(c) => u(this, s, E).call(this, c, t)}
					@blur=${(c) => u(this, s, z).call(this, c, t)}>
					${this.renderDeleteFor(t)}
				</uui-input>
			</div>` : i ? l`<div class="not-active">
				<span class=${n ? "" : "invaild"}>${n ? t.name : "Unnamed"}</span> ${this.renderDeleteFor(
      t
    )}
			</div>` : l`<div class="not-active"><uui-icon name="icon-merge"></uui-icon>${t.name}</div>`;
  }
  renderDeleteFor(t) {
    return l`<uui-button
			label=${this.localize.term("actions_remove")}
			class="trash"
			slot="append"
			@click=${(e) => {
      e.stopPropagation(), e.preventDefault(), u(this, s, S).call(this, t);
    }}
			compact>
			<uui-icon name="icon-trash"></uui-icon>
		</uui-button>`;
  }
  destroy() {
    v(this, m, void 0), super.destroy();
  }
};
T = /* @__PURE__ */ new WeakMap();
a = /* @__PURE__ */ new WeakMap();
$ = /* @__PURE__ */ new WeakMap();
h = /* @__PURE__ */ new WeakMap();
m = /* @__PURE__ */ new WeakMap();
p = /* @__PURE__ */ new WeakMap();
s = /* @__PURE__ */ new WeakSet();
A = function() {
  o(this, $)?.setIsSorting(!this._sortModeActive);
};
I = async function() {
  o(this, a) && this.observe(
    await o(this, a).structure.hasRootContainers("Group"),
    (t) => {
      this._hasRootGroups = t, u(this, s, M).call(this);
    },
    "_observeGroups"
  );
};
M = function() {
  if (!o(this, a) || !this._tabs || this._hasRootGroups === void 0) return;
  const t = [];
  let e;
  if (this._tabs.length > 0 && this._tabs?.forEach((i) => {
    const n = i.name && i.name !== "" ? i.name : "-";
    i.id === o(this, p) && (e = n), t.push({
      path: `tab/${C(n)}`,
      component: () => import("./content-type-design-editor-tab.element-BlPF0LYA.js"),
      setup: (r) => {
        v(this, m, r), o(this, m).containerId = i.id;
      }
    });
  }), this._hasRootGroups || this._tabs.length === 0 ? (t.push({
    path: "root",
    component: () => import("./content-type-design-editor-tab.element-BlPF0LYA.js"),
    setup: (i) => {
      v(this, m, i), o(this, m).containerId = null;
    }
  }), t.push({
    path: "",
    pathMatch: "full",
    redirectTo: "root",
    guards: [() => o(this, p) === void 0]
  })) : t.push({
    path: "",
    pathMatch: "full",
    redirectTo: t[0]?.path,
    guards: [() => o(this, p) === void 0]
  }), t.length !== 0 ? t.push({
    path: "**",
    component: async () => (await import("@umbraco-cms/backoffice/router")).UmbRouteNotFoundElement,
    guards: [() => o(this, p) === void 0],
    setup: () => {
      v(this, m, void 0);
    }
  }) : t.push({
    path: "**",
    component: async () => (await import("@umbraco-cms/backoffice/router")).UmbRouteNotFoundElement,
    setup: () => {
      v(this, m, void 0);
    }
  }), this._routes = t, this._activePath && o(this, m) && t.find((n) => this._routerPath + "/" + n.path === this._activePath)?.setup?.(o(this, m), void 0), e !== void 0 && this._activePath && this._routerPath) {
    const i = this._activePath.split(this._routerPath)[1], n = "/tab/" + C(e);
    i !== n && (this._activePath = this._routerPath + n, window.history.replaceState(null, "", this._activePath));
  }
};
S = async function(t) {
  if (!t) return;
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
  await rt(this, i), u(this, s, D).call(this, t?.id);
};
D = function(t) {
  t && (o(this, a)?.structure.removeContainer(null, t), o(this, p) === t && v(this, p, void 0));
};
k = async function() {
  if (this.shadowRoot?.querySelector("uui-tab[active] uui-input")?.value === "") {
    u(this, s, O).call(this);
    return;
  }
  if (!o(this, a))
    throw new Error("Workspace context has not been found");
  if (!this._tabs) return;
  const e = this._tabs.length, i = e === 0 ? 0 : this._tabs[e - 1].sortOrder + 1, n = await o(this, a).structure.createContainer(null, null, "Tab", i);
  if (e === 0 && new J(this, o(this, a).structure), n) {
    const r = this._routerPath + "/tab/" + C(n.name && n.name !== "" ? n.name : "-");
    window.history.replaceState(null, "", r), u(this, s, O).call(this);
  }
};
O = async function() {
  setTimeout(() => {
    this.shadowRoot?.querySelector("uui-tab[active] uui-input")?.focus();
  }, 100);
};
E = async function(t, e) {
  v(this, p, e.id);
  let i = t.target.value;
  const n = o(this, a)?.structure.makeContainerNameUniqueForOwnerContentType(
    e.id,
    i,
    "Tab"
  );
  n != null && (i = n, t.target.value = i), o(this, h).partialUpdateContainer(e.id, {
    name: i
  });
};
z = async function(t, e) {
  if (!o(this, p)) return;
  if (t.target?.value === "") {
    const n = o(this, a).structure.makeEmptyContainerName(o(this, p), "Tab");
    t.target.value = n, o(this, h).partialUpdateContainer(e.id, {
      name: n
    });
  }
  v(this, p, void 0);
};
q = async function() {
  if (!o(this, a) || !this._compositionRepositoryAlias) return;
  const t = o(this, a).getUnique();
  if (!t)
    throw new Error("Content Type unique is undefined");
  const e = o(this, a).structure.getOwnerContentType();
  if (!e)
    throw new Error("Owner Content Type not found");
  const n = (await o(this, a).structure.getContentTypeCompositions()).filter(
    (d) => d.compositionType === w.INHERITANCE
  ), r = await o(this, a).structure.getOwnerContentTypeCompositions(), b = r.filter(
    (d) => d.compositionType === w.COMPOSITION
  ).map(
    (d) => d.contentType.unique
  ), B = r.filter(
    (d) => d.compositionType === w.INHERITANCE
  ), H = await o(this, a).structure.getContentTypePropertyAliases(), L = {
    compositionRepositoryAlias: this._compositionRepositoryAlias,
    unique: t,
    selection: b,
    usedForInheritance: n.map((d) => d.contentType.unique),
    usedForComposition: b,
    isElement: e.isElement,
    currentPropertyAliases: H,
    isNew: o(this, a).getIsNew()
  }, R = await st(this, Q, {
    data: L
  }).catch(() => {
  });
  if (!R) return;
  const V = R.selection;
  o(this, a).setCompositions([
    ...B,
    ...V.map((d) => ({
      contentType: { unique: d },
      compositionType: w.COMPOSITION
    }))
  ]);
};
P = function(t, e) {
  this._activePath !== e && (t.preventDefault(), window.history.replaceState(null, "", e));
};
G = function() {
  if (!this._sortModeActive)
    return l`
			<uui-button id="add-tab" @click="${u(this, s, k)}" label="Add tab">
				<uui-icon name="icon-add"></uui-icon>
				Add tab
			</uui-button>
		`;
};
F = function() {
  const t = this._sortModeActive ? this.localize.term("general_reorderDone") : this.localize.term("general_reorder");
  return l`
			<div id="actions">
				${this._compositionRepositoryAlias ? l`
							<uui-button
								look="outline"
								label=${this.localize.term("contentTypeEditor_compositions")}
								compact
								@click=${u(this, s, q)}>
								<uui-icon name="icon-merge"></uui-icon>
								${this.localize.term("contentTypeEditor_compositions")}
							</uui-button>
						` : ""}
				<uui-button look="outline" label=${t} compact @click=${u(this, s, A)}>
					<uui-icon name="icon-height"></uui-icon>
					${t}
				</uui-button>
			</div>
		`;
};
W = function(t, e) {
  if (!e.target.value || !t.id) return;
  const i = Number(e.target.value);
  o(this, h).partialUpdateContainer(t.id, { sortOrder: i });
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

			.invaild {
				color: var(--uui-color-danger, var(--uui-color-invalid));
			}

			.trash {
				opacity: 1;
				transition: opacity 100ms;
			}

			uui-tab:not(:hover, :focus) .trash {
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
const Mt = f;
export {
  f as UmbContentTypeDesignEditorElement,
  Mt as default
};
//# sourceMappingURL=content-type-design-editor.element-DxZdtbOy.js.map
