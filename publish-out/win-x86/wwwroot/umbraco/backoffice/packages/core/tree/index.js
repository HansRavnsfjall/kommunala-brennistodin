import { U as V, c as Z, d as k, f as ee, g as te, a as re, e as ie, j as se, b as ne, h as oe, i as ae } from "../sort-children-of-modal.token-CXKQZTL5.js";
import { U as ue, a as le } from "../tree-picker-modal.token-CxLbH2eO.js";
import { tryExecute as a } from "@umbraco-cms/backoffice/resources";
import { UmbRepositoryBase as O } from "@umbraco-cms/backoffice/repository";
import { of as p } from "@umbraco-cms/backoffice/external/rxjs";
import { UmbStoreBase as U } from "@umbraco-cms/backoffice/store";
import { UmbArrayState as I, createObservablePart as v } from "@umbraco-cms/backoffice/observable-api";
import { UmbDefaultTreeElement as pe } from "../default-tree.element-Bpzs0ILI.js";
import { UmbDefaultTreeContext as he } from "../default-tree.context-tDNpHXIy.js";
import { U as Ee } from "../default-tree.context-token-C7a9fWg9.js";
import { UmbDuplicateToEntityAction as ye } from "../duplicate-to.action-BktSnwKo.js";
import { UmbReloadTreeItemChildrenEntityAction as be } from "../reload-tree-item-children.action-C0Xp9rFl.js";
import { c as Ue, b as Ie, U as ve, a as Ae } from "../tree-item-element-base-Dc0PseYz.js";
import { UmbSortChildrenOfEntityAction as De } from "../sort-children-of.action-BAzYR5i_.js";
import { UmbSortChildrenOfModalElement as Ce, UmbSortChildrenOfModalElement as Re } from "../sort-children-of-modal.element-Cs83_Yer.js";
import { property as h, customElement as _, nothing as A, html as S } from "@umbraco-cms/backoffice/external/lit";
import { UmbExtensionElementAndApiSlotElementBase as c, umbExtensionsRegistry as E } from "@umbraco-cms/backoffice/extension-registry";
import { UmbDefaultTreeItemContext as Me } from "../tree-item-default.context-D1DGStAT.js";
import { UmbDefaultTreeItemElement as Pe } from "../tree-item-default.element-BGQE9dyg.js";
import { UmbLitElement as D } from "@umbraco-cms/backoffice/lit-element";
class Y {
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
    const { data: t, error: r } = await a(this.#e, this.#r(e));
    if (t) {
      const i = t?.items.map((n) => this.#t(n));
      return { data: { total: t.total, items: i } };
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
    const { data: t, error: r } = await a(this.#e, this.#i(e));
    if (t) {
      const i = t?.items.map((n) => this.#t(n));
      return { data: { total: t.total, items: i } };
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
    const { data: t, error: r } = await a(this.#e, this.#s(e));
    return t ? { data: t?.map((n) => this.#t(n)) } : { error: r };
  }
}
class z extends O {
  /**
   * Creates an instance of UmbTreeRepositoryBase.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @param {UmbTreeDataSourceConstructor<TreeItemType>} treeSourceConstructor
   * @param {(string | UmbContextToken<any, any>)} treeStoreContextAlias
   * @memberof UmbTreeRepositoryBase
   */
  constructor(e, t, r) {
    super(e), this._treeSource = new t(this), this._init = this.consumeContext(r, (i) => {
      this._treeStore = i;
    }).asPromise({ preventTimeout: !0 }).catch(() => {
    });
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
    return this._treeStore ? (t && this._treeStore.appendItems(t.items), { data: t, error: r, asObservable: () => this._treeStore.rootItems }) : {};
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
    return this._treeStore ? (t && this._treeStore.appendItems(t.items), { data: t, error: r, asObservable: () => this._treeStore.childrenOf(e.parent.unique) }) : {};
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
   */
  async rootTreeItems() {
    return await this._init, this._treeStore ? this._treeStore.rootItems : p([]);
  }
  /**
   * Returns a promise with an observable of children items of a given parent
   * @param {(string | null)} parentUnique
   * @returns {*}
   * @memberof UmbTreeRepositoryBase
   */
  async treeItemsOf(e) {
    if (e === void 0) throw new Error("Parent unique is missing");
    return await this._init, this._treeStore ? this._treeStore.childrenOf(e) : p([]);
  }
}
class G extends U {
  constructor(e, t) {
    super(e, t, new I([], (r) => r.unique)), this.rootItems = this._data.asObservablePart((r) => r.filter((i) => i.parent.unique === null));
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
var w = Object.defineProperty, C = Object.getOwnPropertyDescriptor, T = (s) => {
  throw TypeError(s);
}, y = (s, e, t, r) => {
  for (var i = r > 1 ? void 0 : r ? C(e, t) : e, n = s.length - 1, o; n >= 0; n--)
    (o = s[n]) && (i = (r ? o(e, t, i) : o(i)) || i);
  return r && i && w(e, t, i), i;
}, R = (s, e, t) => e.has(s) || T("Cannot " + t), x = (s, e, t) => e.has(s) ? T("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(s) : e.set(s, t), M = (s, e, t) => (R(s, e, "access private method"), t), m, d;
let u = class extends c {
  constructor() {
    super(...arguments), x(this, m);
  }
  get entityType() {
    return this._entityType;
  }
  set entityType(s) {
    this._entityType = s, M(this, m, d).call(this);
  }
  getExtensionType() {
    return "treeItem";
  }
  getDefaultElementName() {
    return "umb-default-tree-item";
  }
};
m = /* @__PURE__ */ new WeakSet();
d = function() {
  if (!this._entityType) return;
  const s = (e) => this._entityType ? e.forEntityTypes.includes(this._entityType) : !1;
  this.observe(
    // TODO: what should we do if there are multiple tree items for an entity type?
    // This method gets all extensions based on a type, then filters them based on the entity type. and then we get the alias of the first one [NL]
    v(
      E.byTypeAndFilter(this.getExtensionType(), s),
      (e) => e[0]?.alias
    ),
    (e) => {
      this.alias = e;
    },
    "umbObserveAlias"
  );
};
y([
  h({ type: String, reflect: !0 })
], u.prototype, "entityType", 1);
u = y([
  _("umb-tree-item")
], u);
var g = Object.defineProperty, P = Object.getOwnPropertyDescriptor, b = (s, e, t, r) => {
  for (var i = r > 1 ? void 0 : r ? P(e, t) : e, n = s.length - 1, o; n >= 0; n--)
    (o = s[n]) && (i = (r ? o(e, t, i) : o(i)) || i);
  return r && i && g(e, t, i), i;
};
const B = {
  type: "kind",
  alias: "Umb.Kind.Tree",
  matchKind: "tree",
  matchType: "menuItem",
  manifest: {
    type: "menuItem",
    elementName: "umb-menu-item-tree-default"
  }
};
E.register(B);
let l = class extends D {
  render() {
    return this.manifest ? S`
					<umb-tree
						alias=${this.manifest?.meta.treeAlias}
						.props=${{
      hideTreeRoot: this.manifest?.meta.hideTreeRoot === !0,
      selectionConfiguration: {
        selectable: !1,
        multiple: !1
      }
    }}></umb-tree>
				` : A;
  }
};
b([
  h({ type: Object })
], l.prototype, "manifest", 2);
l = b([
  _("umb-menu-item-tree-default")
], l);
var L = Object.getOwnPropertyDescriptor, q = (s, e, t, r) => {
  for (var i = r > 1 ? void 0 : r ? L(e, t) : e, n = s.length - 1, o; n >= 0; n--)
    (o = s[n]) && (i = o(i) || i);
  return i;
};
let f = class extends c {
  getExtensionType() {
    return "tree";
  }
  getDefaultElementName() {
    return "umb-default-tree";
  }
  getSelection() {
    return this._element?.getSelection?.() ?? [];
  }
};
f = q([
  _("umb-tree")
], f);
export {
  V as UMB_DUPLICATE_TO_MODAL,
  Z as UMB_DUPLICATE_TO_MODAL_ALIAS,
  k as UMB_ENTITY_ACTION_SORT_CHILDREN_OF_KIND_MANIFEST,
  ee as UMB_FOLDER_CREATE_MODAL,
  te as UMB_FOLDER_UPDATE_MODAL,
  re as UMB_SORT_CHILDREN_OF_MODAL,
  ie as UMB_SORT_CHILDREN_OF_MODAL_ALIAS,
  Ee as UMB_TREE_CONTEXT,
  Ue as UMB_TREE_ITEM_CONTEXT,
  se as UMB_TREE_ITEM_DEFAULT_KIND_MANIFEST,
  ue as UMB_TREE_PICKER_MODAL,
  le as UMB_TREE_PICKER_MODAL_ALIAS,
  ne as UmbCreateFolderEntityAction,
  he as UmbDefaultTreeContext,
  pe as UmbDefaultTreeElement,
  Me as UmbDefaultTreeItemContext,
  Pe as UmbDefaultTreeItemElement,
  oe as UmbDeleteFolderEntityAction,
  ye as UmbDuplicateToEntityAction,
  l as UmbMenuItemTreeDefaultElement,
  be as UmbReloadTreeItemChildrenEntityAction,
  Ie as UmbRequestReloadTreeItemChildrenEvent,
  De as UmbSortChildrenOfEntityAction,
  Ce as UmbSortChildrenOfModalElement,
  f as UmbTreeElement,
  ve as UmbTreeItemContextBase,
  u as UmbTreeItemElement,
  Ae as UmbTreeItemElementBase,
  z as UmbTreeRepositoryBase,
  Y as UmbTreeServerDataSourceBase,
  G as UmbUniqueTreeStore,
  ae as UmbUpdateFolderEntityAction,
  Re as element
};
//# sourceMappingURL=index.js.map
