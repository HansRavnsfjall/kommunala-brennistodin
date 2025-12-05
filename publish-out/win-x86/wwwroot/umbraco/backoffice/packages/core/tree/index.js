import { css as v, customElement as u, html as y, property as g } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as T } from "@umbraco-cms/backoffice/lit-element";
import { U as oe, c as ne, d as ae, h as me, i as ue, a as le, e as ce, j as pe, b as _e, f as he, g as de } from "../update-folder.action-COxnl6zu.js";
import { U as be, a as Ee } from "../tree-picker-modal.token-CxLbH2eO.js";
import { tryExecute as l } from "@umbraco-cms/backoffice/resources";
import { UmbRepositoryBase as D } from "@umbraco-cms/backoffice/repository";
import { of as f } from "@umbraco-cms/backoffice/external/rxjs";
import { UmbDeprecation as A } from "@umbraco-cms/backoffice/utils";
import { UmbStoreBase as S } from "@umbraco-cms/backoffice/store";
import { UmbArrayState as x, createObservablePart as M } from "@umbraco-cms/backoffice/observable-api";
import { UmbDefaultTreeElement as ye } from "../default-tree.element-fgMsmaPG.js";
import { UmbDefaultTreeContext as Oe } from "../default-tree.context-Be9CM-3y.js";
import { U as we } from "../default-tree.context-token-C7a9fWg9.js";
import { UmbDuplicateToEntityAction as ge } from "../duplicate-to.action-DRm4yyqh.js";
import { UmbReloadTreeItemChildrenEntityAction as Ae } from "../reload-tree-item-children.action-C0Xp9rFl.js";
import { c as xe, b as Me, U as Ce, a as Re } from "../tree-item-element-base-mu8pGzwR.js";
import { UmbSortChildrenOfEntityAction as Be } from "../sort-children-of.action-ibpnREXq.js";
import { UmbSortChildrenOfModalElement as qe, UmbSortChildrenOfModalElement as Fe } from "../sort-children-of-modal.element-Cs83_Yer.js";
import { UmbTextStyles as C } from "@umbraco-cms/backoffice/style";
import { UmbExtensionElementAndApiSlotElementBase as O, umbExtensionsRegistry as R } from "@umbraco-cms/backoffice/extension-registry";
import { UmbDefaultTreeItemContext as ze } from "../tree-item-default.context-C4ufWM7q.js";
import { UmbDefaultTreeItemElement as ke } from "../tree-item-default.element-C_yOdFx9.js";
import { UmbMenuItemTreeDefaultElement as Ke } from "../tree-menu-item.element-D3-R3-95.js";
var P = Object.getOwnPropertyDescriptor, B = (i, e, t, r) => {
  for (var s = r > 1 ? void 0 : r ? P(e, t) : e, o = i.length - 1, n; o >= 0; o--)
    (n = i[o]) && (s = n(s) || s);
  return s;
};
let c = class extends T {
  render() {
    return y`<uui-button
			data-mark="tree:load-more"
			id="load-more"
			look="secondary"
			.label=${this.localize.term("actions_loadMore")}></uui-button>`;
  }
};
c.styles = v`
		:host {
			position: relative;
			display: block;
			padding-left: var(--uui-size-space-3);
			margin-right: var(--uui-size-space-2);
			margin-bottom: var(--uui-size-layout-2);
			margin-left: calc(var(--uui-menu-item-indent, 0) * var(--uui-size-4));
		}
		uui-button {
			width: 100%;
			height: var(--uui-size---uui-size-layout-3);
			--uui-box-border-radius: calc(var(--uui-border-radius) * 2);
		}
	`;
c = B([
  u("umb-tree-load-more-button")
], c);
class ee {
  #e;
  #r;
  #i;
  #s;
  #t;
  /**
   * Creates an instance of UmbTreeServerDataSourceBase.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @param args
   * @memberof UmbTreeServerDataSourceBase
   */
  constructor(e, t) {
    this.#e = e, this.#r = t.getRootItems, this.#i = t.getChildrenOf, this.#s = t.getAncestorsOf, this.#t = t.mapper;
  }
  /**
   * Fetches the root items for the tree from the server
   * @param {UmbTreeRootItemsRequestArgs} args
   * @returns {*}
   * @memberof UmbTreeServerDataSourceBase
   */
  async getRootItems(e) {
    const { data: t, error: r } = await l(this.#e, this.#r(e));
    if (t) {
      const s = t?.items.map((o) => this.#t(o));
      return { data: { total: t.total, items: s } };
    }
    return { error: r };
  }
  /**
   * Fetches the children of a given parent unique from the server
   * @param {UmbTreeChildrenOfRequestArgs} args
   * @returns {*}
   * @memberof UmbTreeServerDataSourceBase
   */
  async getChildrenOf(e) {
    if (e.parent.unique === void 0) throw new Error("Parent unique is missing");
    const { data: t, error: r } = await l(this.#e, this.#i(e));
    if (t) {
      const s = t?.items.map((o) => this.#t(o));
      return { data: { total: t.total, items: s } };
    }
    return { error: r };
  }
  /**
   * Fetches the ancestors of a given item from the server
   * @param {UmbTreeAncestorsOfRequestArgs} args
   * @returns {*}
   * @memberof UmbTreeServerDataSourceBase
   */
  async getAncestorsOf(e) {
    if (!e.treeItem.entityType) throw new Error("Parent unique is missing");
    const { data: t, error: r } = await l(this.#e, this.#s(e));
    return t ? { data: t?.map((o) => this.#t(o)) } : { error: r };
  }
}
class te extends D {
  /**
   * Creates an instance of UmbTreeRepositoryBase.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @param {UmbTreeDataSourceConstructor<TreeItemType>} treeSourceConstructor - The constructor for the tree data source
   * @param {(string | UmbContextToken<any, any> | undefined)} treeStoreContextAlias - The context alias for the tree store, if any
   * @memberof UmbTreeRepositoryBase
   */
  constructor(e, t, r) {
    super(e), this._treeSource = new t(this), r ? (r.toString().startsWith("Umb") === !1 && new A({
      deprecated: `TreeRepository "${this.constructor.name}" is using a tree store context with alias "${r.toString()}".`,
      removeInVersion: "18.0.0",
      solution: "You do not need to supply a tree store context alias, as the tree repository will be queried each time it is needed."
    }).warn(), this._init = this.consumeContext(r, (s) => {
      this._treeStore = s;
    }).asPromise({ preventTimeout: !0 }).catch(() => {
    })) : this._init = Promise.resolve();
  }
  /**
   * Requests root items of a tree
   * @param args
   * @returns {*}
   * @memberof UmbTreeRepositoryBase
   */
  async requestTreeRootItems(e) {
    await this._init;
    const { data: t, error: r } = await this._treeSource.getRootItems(e);
    return this._treeStore ? (t && this._treeStore.appendItems(t.items), { data: t, error: r, asObservable: () => this._treeStore?.rootItems }) : {
      data: t,
      error: r,
      // Return an observable that does not emit any items, since the store is not available
      asObservable: () => {
      }
    };
  }
  /**
   * Requests tree items of a given parent
   * @param {(string | null)} parentUnique
   * @param args
   * @returns {*}
   * @memberof UmbTreeRepositoryBase
   */
  async requestTreeItemsOf(e) {
    if (!e.parent) throw new Error("Parent is missing");
    if (e.parent.unique === void 0) throw new Error("Parent unique is missing");
    if (e.parent.entityType === null) throw new Error("Parent entity type is missing");
    await this._init;
    const { data: t, error: r } = await this._treeSource.getChildrenOf(e);
    return this._treeStore ? (t && this._treeStore.appendItems(t.items), { data: t, error: r, asObservable: () => this._treeStore?.childrenOf(e.parent.unique) }) : {
      data: t,
      error: r,
      // Return an observable that does not emit any items, since the store is not available
      asObservable: () => {
      }
    };
  }
  /**
   * Requests ancestors of a given item
   * @param {UmbTreeAncestorsOfRequestArgs} args
   * @returns {*}
   * @memberof UmbTreeRepositoryBase
   */
  async requestTreeItemAncestors(e) {
    if (e.treeItem.unique === void 0) throw new Error("Descendant unique is missing");
    await this._init;
    const { data: t, error: r } = await this._treeSource.getAncestorsOf(e);
    return { data: t, error: r };
  }
  /**
   * Returns a promise with an observable of tree root items
   * @returns {*}
   * @memberof UmbTreeRepositoryBase
   * @deprecated Use `requestTreeRootItems` instead. This method requires the tree store to be available, which is not always the case. It will be removed in Umbraco 18.
   */
  async rootTreeItems() {
    return await this._init, this._treeStore?.rootItems ?? f([]);
  }
  /**
   * Returns a promise with an observable of children items of a given parent
   * @param {(string | null)} parentUnique
   * @returns {*}
   * @memberof UmbTreeRepositoryBase
   * @deprecated Use `requestTreeItemsOf` instead. This method requires the tree store to be available, which is not always the case. It will be removed in Umbraco 18.
   */
  async treeItemsOf(e) {
    if (e === void 0) throw new Error("Parent unique is missing");
    return await this._init, this._treeStore?.childrenOf(e) ?? f([]);
  }
}
class re extends S {
  constructor(e, t) {
    super(e, t, new x([], (r) => r.unique)), this.rootItems = this._data.asObservablePart((r) => r.filter((s) => s.parent.unique === null));
  }
  /**
   * Returns an observable to observe the children of a given parent
   * @param {(string | null)} parentUnique
   * @returns {*}
   * @memberof UmbUniqueTreeStore
   */
  childrenOf(e) {
    return this._data.asObservablePart((t) => t.filter((r) => r.parent.unique === e));
  }
}
var L = Object.getOwnPropertyDescriptor, q = (i, e, t, r) => {
  for (var s = r > 1 ? void 0 : r ? L(e, t) : e, o = i.length - 1, n; o >= 0; o--)
    (n = i[o]) && (s = n(s) || s);
  return s;
};
let p = class extends T {
  render() {
    return y`<umb-workspace-editor>
			<umb-icon id="icon" slot="header" name="icon-folder"></umb-icon>
			<umb-workspace-header-name-editable slot="header"></umb-workspace-header-name-editable>
		</umb-workspace-editor>`;
  }
};
p.styles = [
  C,
  v`
			#icon {
				display: inline-block;
				font-size: var(--uui-size-6);
				margin-right: var(--uui-size-space-4);
			}
		`
];
p = q([
  u("umb-folder-workspace-editor")
], p);
var F = Object.defineProperty, N = Object.getOwnPropertyDescriptor, U = (i) => {
  throw TypeError(i);
}, w = (i, e, t, r) => {
  for (var s = r > 1 ? void 0 : r ? N(e, t) : e, o = i.length - 1, n; o >= 0; o--)
    (n = i[o]) && (s = (r ? n(e, t, s) : n(s)) || s);
  return r && s && F(e, t, s), s;
}, d = (i, e, t) => e.has(i) || U("Cannot " + t), m = (i, e, t) => (d(i, e, "read from private field"), t ? t.call(i) : e.get(i)), b = (i, e, t) => e.has(i) ? U("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(i) : e.set(i, t), z = (i, e, t, r) => (d(i, e, "write to private field"), e.set(i, t), t), $ = (i, e, t) => (d(i, e, "access private method"), t), a, _, I;
let h = class extends O {
  constructor() {
    super(...arguments), b(this, _), b(this, a);
  }
  get entityType() {
    return m(this, a);
  }
  set entityType(i) {
    z(this, a, i), $(this, _, I).call(this);
  }
  getExtensionType() {
    return "treeItem";
  }
  getDefaultElementName() {
    return "umb-default-tree-item";
  }
};
a = /* @__PURE__ */ new WeakMap();
_ = /* @__PURE__ */ new WeakSet();
I = function() {
  if (!m(this, a)) return;
  const i = (e) => m(this, a) ? e.forEntityTypes.includes(m(this, a)) : !1;
  this.observe(
    // TODO: what should we do if there are multiple tree items for an entity type?
    // This method gets all extensions based on a type, then filters them based on the entity type. and then we get the alias of the first one [NL]
    M(
      R.byTypeAndFilter(this.getExtensionType(), i),
      (e) => e[0]?.alias
    ),
    (e) => {
      this.alias = e;
    },
    "umbObserveAlias"
  );
};
w([
  g({ type: String, reflect: !0 })
], h.prototype, "entityType", 1);
h = w([
  u("umb-tree-item")
], h);
var k = Object.getOwnPropertyDescriptor, W = (i, e, t, r) => {
  for (var s = r > 1 ? void 0 : r ? k(e, t) : e, o = i.length - 1, n; o >= 0; o--)
    (n = i[o]) && (s = n(s) || s);
  return s;
};
let E = class extends O {
  getExtensionType() {
    return "tree";
  }
  getDefaultElementName() {
    return "umb-default-tree";
  }
  getSelection() {
    return this._element?.getSelection?.() ?? [];
  }
  getExpansion() {
    return this._element?.getExpansion?.() ?? [];
  }
};
E = W([
  u("umb-tree")
], E);
export {
  oe as UMB_DUPLICATE_TO_MODAL,
  ne as UMB_DUPLICATE_TO_MODAL_ALIAS,
  ae as UMB_ENTITY_ACTION_SORT_CHILDREN_OF_KIND_MANIFEST,
  me as UMB_FOLDER_CREATE_MODAL,
  ue as UMB_FOLDER_UPDATE_MODAL,
  le as UMB_SORT_CHILDREN_OF_MODAL,
  ce as UMB_SORT_CHILDREN_OF_MODAL_ALIAS,
  we as UMB_TREE_CONTEXT,
  xe as UMB_TREE_ITEM_CONTEXT,
  pe as UMB_TREE_ITEM_DEFAULT_KIND_MANIFEST,
  be as UMB_TREE_PICKER_MODAL,
  Ee as UMB_TREE_PICKER_MODAL_ALIAS,
  _e as UmbCreateFolderEntityAction,
  Oe as UmbDefaultTreeContext,
  ye as UmbDefaultTreeElement,
  ze as UmbDefaultTreeItemContext,
  ke as UmbDefaultTreeItemElement,
  he as UmbDeleteFolderEntityAction,
  ge as UmbDuplicateToEntityAction,
  p as UmbFolderWorkspaceEditorElement,
  Ke as UmbMenuItemTreeDefaultElement,
  Ae as UmbReloadTreeItemChildrenEntityAction,
  Me as UmbRequestReloadTreeItemChildrenEvent,
  Be as UmbSortChildrenOfEntityAction,
  qe as UmbSortChildrenOfModalElement,
  E as UmbTreeElement,
  Ce as UmbTreeItemContextBase,
  h as UmbTreeItemElement,
  Re as UmbTreeItemElementBase,
  c as UmbTreeLoadMoreButtonElement,
  te as UmbTreeRepositoryBase,
  ee as UmbTreeServerDataSourceBase,
  re as UmbUniqueTreeStore,
  de as UmbUpdateFolderEntityAction,
  Fe as element
};
//# sourceMappingURL=index.js.map
