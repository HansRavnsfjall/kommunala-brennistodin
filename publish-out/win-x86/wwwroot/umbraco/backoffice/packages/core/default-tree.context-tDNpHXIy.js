import { UmbControllerBase as g, UmbContextBase as m } from "@umbraco-cms/backoffice/class-api";
import { UmbArrayState as l, UmbObjectState as a, UmbBooleanState as o } from "@umbraco-cms/backoffice/observable-api";
import { U as T } from "./default-tree.context-token-C7a9fWg9.js";
import { UMB_ACTION_EVENT_CONTEXT as f } from "@umbraco-cms/backoffice/action";
import { umbExtensionsRegistry as c } from "@umbraco-cms/backoffice/extension-registry";
import { UmbExtensionApiInitializer as b } from "@umbraco-cms/backoffice/extension-api";
import { UmbSelectionManager as y, UmbPaginationManager as E, debounce as R, UmbDeprecation as x } from "@umbraco-cms/backoffice/utils";
import { UmbRequestReloadChildrenOfEntityEvent as u } from "@umbraco-cms/backoffice/entity-action";
import { UmbChangeEvent as v } from "@umbraco-cms/backoffice/event";
class V extends g {
  constructor() {
    super(...arguments), this.#t = new l([], (t) => t.unique), this.expansion = this.#t.asObservable();
  }
  #t;
  /**
   * Checks if an entity is expanded
   * @param {UmbEntityModel} entity The entity to check
   * @param {string} entity.entityType The entity type
   * @param {string} entity.unique The unique key
   * @returns {Observable<boolean>} True if the entity is expanded
   * @memberof UmbTreeExpansionManager
   */
  isExpanded(t) {
    return this.#t.asObservablePart(
      (e) => e?.some((s) => s.entityType === t.entityType && s.unique === t.unique)
    );
  }
  /**
   * Sets the expansion state
   * @param {UmbTreeExpansionModel | undefined} expansion The expansion state
   * @memberof UmbTreeExpansionManager
   * @returns {void}
   */
  setExpansion(t) {
    this.#t.setValue(t);
  }
  /**
   * Gets the expansion state
   * @memberof UmbTreeExpansionManager
   * @returns {UmbTreeExpansionModel} The expansion state
   */
  getExpansion() {
    return this.#t.getValue();
  }
  /**
   * Opens a child tree item
   * @param {UmbEntityModel} entity The entity to open
   * @param {string} entity.entityType The entity type
   * @param {string} entity.unique The unique key
   * @memberof UmbTreeExpansionManager
   * @returns {Promise<void>}
   */
  async expandItem(t) {
    this.#t.appendOne(t);
  }
  /**
   * Closes a child tree item
   * @param {UmbEntityModel} entity The entity to close
   * @param {string} entity.entityType The entity type
   * @param {string} entity.unique The unique key
   * @memberof UmbTreeExpansionManager
   * @returns {Promise<void>}
   */
  async collapseItem(t) {
    this.#t.filter((e) => e.entityType !== t.entityType || e.unique !== t.unique);
  }
  /**
   * Closes all child tree items
   * @memberof UmbTreeExpansionManager
   * @returns {Promise<void>}
   */
  async collapseAll() {
    this.#t.setValue([]);
  }
}
class S extends m {
  constructor(t) {
    super(t, T), this.#t = new a({}), this.additionalRequestArgs = this.#t.asObservable(), this.#e = new a(void 0), this.treeRoot = this.#e.asObservable(), this.#s = new l([], (e) => e.unique), this.rootItems = this.#s.asObservable(), this.selectableFilter = () => !0, this.filter = () => !0, this.selection = new y(this), this.pagination = new E(), this.expansion = new V(this), this.#r = new o(!1), this.hideTreeRoot = this.#r.asObservable(), this.#h = new o(void 0), this.expandTreeRoot = this.#h.asObservable(), this.#u = new a(void 0), this.startNode = this.#u.asObservable(), this.#a = new o(!1), this.foldersOnly = this.#a.asObservable(), this.#n = {
      skip: 0,
      take: 50
    }, this.#d = !1, this.#g = new Promise((e) => {
      this.#d ? e() : this.#T = e;
    }), this.loadTree = R(() => this.#f(), 100), this.loadMore = () => this.#f(!0), this.#E = (e) => {
      const s = e.target;
      this.#n.skip = s.getSkip(), this.loadMore();
    }, this.#m = (e) => {
      const s = this.#e.getValue();
      s !== void 0 && e.getUnique() === s.unique && e.getEntityType() === s.entityType && this.loadTree();
    }, this.pagination.setPageSize(this.#n.take), this.#v(), this.pagination.addEventListener(v.TYPE, this.#E), this.#c();
  }
  #t;
  #e;
  #s;
  #r;
  #h;
  #u;
  #a;
  #o;
  #i;
  #p;
  #n;
  #T;
  #d;
  #g;
  // TODO: find a generic way to do this
  #x() {
    this.#i && (this.#d = !0, this.#T?.());
  }
  /**
   * Sets the manifest
   * @param {ManifestTree} manifest
   * @memberof UmbDefaultTreeContext
   */
  set manifest(t) {
    this.#o !== t && (this.#o = t, this.#V(this.#o?.meta.repositoryAlias));
  }
  get manifest() {
    return this.#o;
  }
  /**
   * Returns the manifest.
   * @returns {ManifestTree}
   * @memberof UmbDefaultTreeContext
   * @deprecated Use the `.manifest` property instead.
   */
  getManifest() {
    return new x({
      removeInVersion: "18.0.0",
      deprecated: "getManifest",
      solution: "Use .manifest property instead"
    }).warn(), this.#o;
  }
  getRepository() {
    return this.#i;
  }
  #f(t = !1) {
    if (this.getStartNode()) {
      this.#b(t);
      return;
    }
    if (this.getHideTreeRoot()) {
      this.#b(t);
      return;
    }
    this.#c();
  }
  async #c() {
    await this.#g;
    const { data: t } = await this.#i.requestTreeRoot();
    t && (this.#e.setValue(t), this.pagination.setTotalItems(1), this.getExpandTreeRoot() && this.#y(!0));
  }
  async #b(t = !1) {
    await this.#g;
    const e = t ? this.#n.skip : 0, s = t ? this.#n.take : this.pagination.getCurrentPageNumber() * this.#n.take, n = this.getStartNode(), r = this.#a.getValue(), h = this.#t.getValue(), { data: i } = n?.unique ? await this.#i.requestTreeItemsOf({
      ...h,
      parent: {
        unique: n.unique,
        entityType: n.entityType
      },
      foldersOnly: r,
      skip: e,
      take: s
    }) : await this.#i.requestTreeRootItems({
      ...h,
      foldersOnly: r,
      skip: e,
      take: s
    });
    if (i) {
      if (t) {
        const d = this.#s.getValue();
        this.#s.setValue([...d, ...i.items]);
      } else
        this.#s.setValue(i.items);
      this.pagination.setTotalItems(i.total);
    }
  }
  /**
   * Sets the hideTreeRoot config
   * @param {boolean} hideTreeRoot - Whether to hide the tree root
   * @memberof UmbDefaultTreeContext
   */
  setHideTreeRoot(t) {
    this.#r.setValue(t), this.#l(), this.loadTree();
  }
  /**
   * Gets the hideTreeRoot config
   * @returns {boolean}
   * @memberof UmbDefaultTreeContext
   */
  getHideTreeRoot() {
    return this.#r.getValue();
  }
  /**
   * Sets the startNode config
   * @param {UmbTreeStartNode} startNode
   * @memberof UmbDefaultTreeContext
   */
  setStartNode(t) {
    this.#u.setValue(t), this.#l(), this.loadTree();
  }
  /**
   * Gets the startNode config
   * @returns {UmbTreeStartNode} - The start node
   * @memberof UmbDefaultTreeContext
   */
  getStartNode() {
    return this.#u.getValue();
  }
  /**
   * Sets the foldersOnly config
   * @param {boolean} foldersOnly - Whether to show only folders
   * @memberof UmbDefaultTreeContext
   */
  setFoldersOnly(t) {
    this.#a.setValue(t), this.#l(), this.loadTree();
  }
  /**
   * Gets the foldersOnly config
   * @returns {boolean} - Whether to show only folders
   * @memberof UmbDefaultTreeContext
   */
  getFoldersOnly() {
    return this.#a.getValue();
  }
  /**
   * Updates the requestArgs config and reloads the tree.
   * @param args
   */
  updateAdditionalRequestArgs(t) {
    this.#t.setValue({ ...this.#t.getValue(), ...t }), this.#l(), this.loadTree();
  }
  getAdditionalRequestArgs() {
    return this.#t.getValue();
  }
  /**
   * Sets the expansion state
   * @param {UmbTreeExpansionModel} data - The expansion state
   * @returns {void}
   * @memberof UmbDefaultTreeContext
   */
  setExpansion(t) {
    this.expansion.setExpansion(t);
  }
  /**
   * Gets the expansion state
   * @returns {UmbTreeExpansionModel} - The expansion state
   * @memberof UmbDefaultTreeContext
   */
  getExpansion() {
    return this.expansion.getExpansion();
  }
  /**
   * Sets the expandTreeRoot config
   * @param {boolean} expandTreeRoot - Whether to expand the tree root
   * @memberof UmbDefaultTreeContext
   */
  setExpandTreeRoot(t) {
    this.#h.setValue(t), this.#y(t);
  }
  /**
   * Gets the expandTreeRoot config
   * @returns {boolean | undefined} - Whether to expand the tree root
   * @memberof UmbDefaultTreeContext
   */
  getExpandTreeRoot() {
    return this.#h.getValue();
  }
  #y(t) {
    const e = this.#e.getValue();
    if (!e) return;
    const s = { entityType: e.entityType, unique: e.unique };
    t ? this.expansion.expandItem(s) : this.expansion.collapseItem(s);
  }
  #l() {
    this.#e.setValue(void 0), this.#s.setValue([]), this.pagination.clear();
  }
  #v() {
    this.consumeContext(f, (t) => {
      this.#R(), this.#p = t, this.#p?.addEventListener(
        u.TYPE,
        this.#m
      );
    });
  }
  #E;
  #V(t) {
    if (!t) throw new Error("Tree must have a repository alias.");
    new b(
      this,
      c,
      t,
      [this],
      (e, s) => {
        this.#i = e ? s.api : void 0, this.#x();
      }
    );
  }
  #m;
  #R() {
    this.#p?.removeEventListener(
      u.TYPE,
      this.#m
    );
  }
  destroy() {
    this.#R(), super.destroy();
  }
}
export {
  S as UmbDefaultTreeContext,
  S as api
};
//# sourceMappingURL=default-tree.context-tDNpHXIy.js.map
