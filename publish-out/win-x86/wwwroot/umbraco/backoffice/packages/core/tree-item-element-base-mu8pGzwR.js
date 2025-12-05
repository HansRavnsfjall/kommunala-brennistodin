import "./default-tree.element-fgMsmaPG.js";
import { UmbContextBase as E } from "@umbraco-cms/backoffice/class-api";
import { UmbPaginationManager as w, debounce as S, UmbDeprecation as q } from "@umbraco-cms/backoffice/utils";
import { U as I } from "./default-tree.context-token-C7a9fWg9.js";
import { UMB_ACTION_EVENT_CONTEXT as P } from "@umbraco-cms/backoffice/action";
import { umbExtensionsRegistry as O } from "@umbraco-cms/backoffice/extension-registry";
import "@umbraco-cms/backoffice/extension-api";
import { UmbEntityActionEvent as $, UmbHasChildrenEntityContext as U, UmbRequestReloadChildrenOfEntityEvent as g, UmbRequestReloadStructureForEntityEvent as f } from "@umbraco-cms/backoffice/entity-action";
import { UmbObjectState as A, UmbArrayState as V, UmbBooleanState as a, UmbStringState as L } from "@umbraco-cms/backoffice/observable-api";
import { UmbChangeEvent as N } from "@umbraco-cms/backoffice/event";
import { map as _ } from "@umbraco-cms/backoffice/external/rxjs";
import { UmbContextToken as R } from "@umbraco-cms/backoffice/context-api";
import { UMB_SECTION_CONTEXT as k, UMB_SECTION_SIDEBAR_CONTEXT as H } from "@umbraco-cms/backoffice/section";
import { UmbParentEntityContext as M } from "@umbraco-cms/backoffice/entity";
import { ensureSlash as C } from "@umbraco-cms/backoffice/router";
import { ifDefined as v, html as h, nothing as d, repeat as B, css as F, property as b, state as r } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as Y } from "@umbraco-cms/backoffice/lit-element";
import { UmbTextStyles as D } from "@umbraco-cms/backoffice/style";
class p extends $ {
  static {
    this.TYPE = "request-reload-tree-item-children";
  }
  constructor(e) {
    super(p.TYPE, e);
  }
}
class ce extends E {
  constructor(e) {
    super(e, T), this.pagination = new w(), this._treeItem = new A(void 0), this.treeItem = this._treeItem.asObservable(), this.#t = new V([], (t) => t.unique), this.childItems = this.#t.asObservable(), this.#i = new a(!1), this.hasChildren = this.#i.asObservable(), this.#s = new a(!1), this.isLoading = this.#s.asObservable(), this.#r = new a(!1), this.isSelectable = this.#r.asObservable(), this.#a = new a(!1), this.isSelectableContext = this.#a.asObservable(), this.#l = new a(!1), this.isSelected = this.#l.asObservable(), this.#o = new a(!1), this.isActive = this.#o.asObservable(), this.#u = new a(!1), this.hasActions = this.#u.asObservable(), this.#d = new L(""), this.path = this.#d.asObservable(), this.#m = new a(!1), this.isOpen = this.#m.asObservable(), this.#p = new a(!1), this.foldersOnly = this.#p.asObservable(), this.#b = new U(this), this.#T = new M(this), this.#h = {
      skip: 0,
      take: 50
    }, this.loadChildren = () => this.#x(), this.loadMore = () => this.#x(!0), this.#c = (t) => {
      t.getUnique() === this.unique && t.getEntityType() === this.entityType && this.loadChildren();
    }, this.#y = async (t) => {
      this.unique && t.getUnique() === this.unique && t.getEntityType() === this.entityType && (this.parentTreeItemContext ? this.parentTreeItemContext.loadChildren() : this.treeContext?.loadTree());
    }, this.#q = (t) => {
      const n = t.target;
      this.#h.skip = n.getSkip(), this.loadMore();
    }, this.#g = S(() => this.#f(), 100), this.#_ = () => {
      this.#n?.removeEventListener(
        p.TYPE,
        this.#c
      ), this.#n?.removeEventListener(
        g.TYPE,
        this.#c
      ), this.#n?.removeEventListener(
        f.TYPE,
        this.#y
      );
    }, this.pagination.setPageSize(this.#h.take), this.#I(), this.pagination.addEventListener(N.TYPE, this.#q), window.addEventListener("navigationend", this.#g);
  }
  #e;
  #t;
  #i;
  #s;
  #r;
  #a;
  #l;
  #o;
  #u;
  #d;
  #m;
  #p;
  #C;
  #v;
  #n;
  #b;
  #T;
  #h;
  /**
   * Sets the manifest
   * @param {ManifestCollection} manifest
   * @memberof UmbCollectionContext
   */
  set manifest(e) {
    this.#e !== e && (this.#e = e);
  }
  get manifest() {
    return this.#e;
  }
  /**
   * Returns the manifest.
   * @returns {ManifestCollection}
   * @memberof UmbCollectionContext
   * @deprecated Use the `.manifest` property instead.
   */
  getManifest() {
    return new q({
      removeInVersion: "18.0.0",
      deprecated: "getManifest",
      solution: "Use .manifest property instead"
    }).warn(), this.#e;
  }
  setTreeItem(e) {
    if (!e) {
      this._treeItem.setValue(void 0);
      return;
    }
    if (e.unique === void 0) throw new Error("Could not create tree item context, unique is missing");
    if (this.unique = e.unique, !e.entityType) throw new Error("Could not create tree item context, tree item type is missing");
    this.entityType = e.entityType;
    const t = e.hasChildren || !1;
    this.#i.setValue(t), this.#b.setHasChildren(t);
    const n = e.parent ? {
      entityType: e.parent.entityType,
      unique: e.parent.unique
    } : void 0;
    this.#T.setParent(n), this._treeItem.setValue(e), this.#O(), this.#E(), this.#w(), this.#S();
  }
  async #x(e = !1) {
    if (this.unique === void 0) throw new Error("Could not request children, unique key is missing");
    if (this.entityType === void 0) throw new Error("Could not request children, entity type is missing");
    const t = this.treeContext?.getRepository();
    if (!t) throw new Error("Could not request children, repository is missing");
    this.#s.setValue(!0);
    const n = e ? this.#h.skip : 0, o = e ? this.#h.take : this.pagination.getCurrentPageNumber() * this.#h.take, l = this.#p.getValue(), u = this.treeContext?.getAdditionalRequestArgs(), { data: c } = await t.requestTreeItemsOf({
      parent: {
        unique: this.unique,
        entityType: this.entityType
      },
      foldersOnly: l,
      skip: n,
      take: o,
      ...u
    });
    if (c) {
      if (e) {
        const x = this.#t.getValue();
        this.#t.setValue([...x, ...c.items]);
      } else
        this.#t.setValue(c.items);
      const y = c.total > 0;
      this.#i.setValue(y), this.#b.setHasChildren(y), this.pagination.setTotalItems(c.total);
    }
    this.#s.setValue(!1);
  }
  toggleContextMenu() {
    if (!this.getTreeItem() || !this.entityType || this.unique === void 0)
      throw new Error("Could not request children, tree item is not set");
    this.#v?.toggleContextMenu(this.getHostElement(), {
      entityType: this.entityType,
      unique: this.unique,
      headline: this.getTreeItem()?.name || ""
    });
  }
  /**
   * Selects the tree item
   * @memberof UmbTreeItemContextBase
   * @returns {void}
   */
  select() {
    if (this.unique === void 0) throw new Error("Could not select. Unique is missing");
    this.treeContext?.selection.select(this.unique);
  }
  /**
   * Deselects the tree item
   * @memberof UmbTreeItemContextBase
   * @returns {void}
   */
  deselect() {
    if (this.unique === void 0) throw new Error("Could not deselect. Unique is missing");
    this.treeContext?.selection.deselect(this.unique);
  }
  showChildren() {
    const e = this.entityType, t = this.unique;
    if (!e)
      throw new Error("Could not show children, entity type is missing");
    if (t === void 0)
      throw new Error("Could not show children, unique is missing");
    this.treeContext?.expansion.expandItem({ entityType: e, unique: t });
  }
  hideChildren() {
    const e = this.entityType, t = this.unique;
    if (!e)
      throw new Error("Could not show children, entity type is missing");
    if (t === void 0)
      throw new Error("Could not show children, unique is missing");
    this.treeContext?.expansion.collapseItem({ entityType: e, unique: t });
  }
  async #I() {
    this.consumeContext(k, (e) => {
      this.#C = e, this.#S();
    }), this.consumeContext(H, (e) => {
      this.#v = e;
    }), this.consumeContext(I, (e) => {
      this.treeContext = e, this.#E(), this.#w(), this.#P(), this.#$();
    }), this.consumeContext(T, (e) => {
      this.parentTreeItemContext = e;
    }).skipHost(), this.consumeContext(P, (e) => {
      this.#_(), this.#n = e, this.#n?.addEventListener(
        p.TYPE,
        this.#c
      ), this.#n?.addEventListener(
        g.TYPE,
        this.#c
      ), this.#n?.addEventListener(
        f.TYPE,
        this.#y
      );
    });
  }
  getTreeItem() {
    return this._treeItem.getValue();
  }
  #E() {
    this.treeContext && this.observe(
      this.treeContext.selection.selectable,
      (e) => {
        if (this.#a.setValue(e), e === !0) {
          const t = this.treeContext?.selectableFilter?.(this.getTreeItem()) ?? !0;
          this.#r.setValue(t), this.#f();
        }
      },
      "observeIsSelectable"
    );
  }
  #w() {
    !this.treeContext || !this.unique || this.observe(
      this.treeContext.selection.selection.pipe(_((e) => e.includes(this.unique))),
      (e) => {
        this.#l.setValue(e);
      },
      "observeIsSelected"
    );
  }
  #P() {
    this.unique !== void 0 && this.observe(
      this.treeContext?.foldersOnly,
      (e) => {
        this.#p.setValue(e ?? !1);
      },
      "observeFoldersOnly"
    );
  }
  #S() {
    this.observe(
      this.#C?.pathname,
      (e) => {
        if (!e || !this.entityType || this.unique === void 0) return;
        const t = this.constructPath(e, this.entityType, this.unique);
        this.#d.setValue(t), this.#f();
      },
      "observeSectionPath"
    );
  }
  #O() {
    this.observe(
      O.byType("entityAction").pipe(_((e) => e.filter((t) => t.forEntityTypes.includes(this.entityType)))),
      (e) => {
        this.#u.setValue(e.length > 0);
      },
      "observeActions"
    );
  }
  #$() {
    this.unique !== void 0 && this.entityType && this.observe(
      this.treeContext?.expansion.isExpanded({ entityType: this.entityType, unique: this.unique }),
      (e) => {
        e && this.#i.getValue() && this.#m.getValue() === !1 && this.loadChildren(), this.#m.setValue(e ?? !1);
      },
      "observeExpansion"
    );
  }
  #c;
  #y;
  #q;
  #g;
  #f() {
    if (this.#r.getValue()) {
      this.#o.setValue(!1);
      return;
    }
    const t = C(window.location.pathname), n = C(this.#d.getValue()), o = t.includes(n);
    this.#o.setValue(o);
  }
  // TODO: use router context
  constructPath(e, t, n) {
    return `section/${e}/workspace/${t}/edit/${n}`;
  }
  #_;
  destroy() {
    this.#_(), window.removeEventListener("navigationend", this.#g), super.destroy();
  }
}
const T = new R("UmbTreeItemContext");
var j = Object.defineProperty, X = Object.getOwnPropertyDescriptor, i = (m, e, t, n) => {
  for (var o = n > 1 ? void 0 : n ? X(e, t) : e, l = m.length - 1, u; l >= 0; l--)
    (u = m[l]) && (o = (n ? u(e, t, o) : u(o)) || o);
  return n && o && j(e, t, o), o;
};
class s extends Y {
  constructor() {
    super(...arguments), this.hideActions = !1, this._isActive = !1, this._isLoading = !1, this._isSelectableContext = !1, this._isSelectable = !1, this._isSelected = !1, this._hasChildren = !1, this._isOpen = !1, this._iconSlotHasChildren = !1, this._totalPages = 1, this._currentPage = 1, this.#i = (e) => {
      e.stopPropagation();
      const t = this._currentPage = this._currentPage + 1;
      this.#e?.pagination.setCurrentPageNumber(t);
    }, this.#s = (e) => e.target.assignedNodes({ flatten: !0 }).length > 0;
  }
  set item(e) {
    this._item = e, this._extractFlags(e), this._item && (this._label = this.localize.string(this._item?.name ?? ""), this.#t());
  }
  get item() {
    return this._item;
  }
  /**
   * @param item - The item from which to extract flags.
   * @description This method is called whenever the `item` property is set. It extracts the flags from the item and assigns them to the `_flags` state property.
   * This method is in some cases overridden in subclasses to customize how flags are extracted!
   */
  _extractFlags(e) {
    this._flags = e?.flags ?? [];
  }
  set api(e) {
    this.#e = e, this.#e && (this.observe(this.#e.childItems, (t) => this._childItems = t), this.observe(this.#e.hasChildren, (t) => this._hasChildren = t), this.observe(this.#e.isActive, (t) => this._isActive = t), this.observe(this.#e.isOpen, (t) => this._isOpen = t), this.observe(this.#e.isLoading, (t) => this._isLoading = t), this.observe(this.#e.isSelectableContext, (t) => this._isSelectableContext = t), this.observe(this.#e.isSelectable, (t) => this._isSelectable = t), this.observe(this.#e.isSelected, (t) => this._isSelected = t), this.observe(this.#e.path, (t) => this._href = t), this.observe(this.#e.pagination.currentPage, (t) => this._currentPage = t), this.observe(this.#e.pagination.totalPages, (t) => this._totalPages = t), this.#t());
  }
  get api() {
    return this.#e;
  }
  #e;
  #t() {
    this.#e && this._item && this.#e.setTreeItem(this._item);
  }
  _handleSelectedItem(e) {
    e.stopPropagation(), this.#e?.select();
  }
  _handleDeselectedItem(e) {
    e.stopPropagation(), this.#e?.deselect();
  }
  _onShowChildren(e) {
    e.stopPropagation(), this.#e?.showChildren();
  }
  _onHideChildren(e) {
    e.stopPropagation(), this.#e?.hideChildren();
  }
  #i;
  // Note: Currently we want to prevent opening when the item is in a selectable context, but this might change in the future.
  // If we like to be able to open items in selectable context, then we might want to make it as a menu item action, so you have to click ... and chose an action called 'Edit'
  render() {
    const e = this._isOpen ? "visuallyHiddenTexts_collapseChildItems" : "visuallyHiddenTexts_expandChildItems";
    return h`
			<uui-menu-item
				@show-children=${this._onShowChildren}
				@hide-children=${this._onHideChildren}
				@selected=${this._handleSelectedItem}
				@deselected=${this._handleDeselectedItem}
				?active=${this._isActive}
				?disabled=${this._isSelectableContext && !this._isSelectable}
				?selectable=${this._isSelectable}
				?selected=${this._isSelected}
				.loading=${this._isLoading}
				.hasChildren=${this._hasChildren}
				.showChildren=${this._isOpen}
				.caretLabel=${this.localize.term(e) + " " + this._label}
				label=${v(this._label)}
				href=${v(this._isSelectableContext ? void 0 : this._href)}>
				${this.renderIconContainer()} ${this.renderLabel()} ${this.#l()} ${this.#o()}
				<slot></slot>
				${this.#u()}
			</uui-menu-item>
		`;
  }
  #s;
  renderIconContainer() {
    return h`
			<div id="icon-container" slot="icon">
				<slot
					name="icon"
					@slotchange=${(e) => {
      this._iconSlotHasChildren = this.#s(e);
    }}></slot>
				${this.#r()}
			</div>
		`;
  }
  #r() {
    return this._item ? h`<umb-entity-sign-bundle .entityType=${this._item.entityType} .entityFlags=${this._flags}
					>${this._iconSlotHasChildren ? d : this.#a()}</umb-entity-sign-bundle
				>` : d;
  }
  #a() {
    const e = this._getIconName(), t = this._item?.isFolder;
    return e ? h`<umb-icon name="${this._getIconToRender(e)}"></umb-icon>` : t ? h`<umb-icon name="icon-folder"></umb-icon>` : h`<umb-icon name="icon-circle-dotted"></umb-icon>`;
  }
  _getIconToRender(e) {
    const t = e.split(" ")[0];
    return this._isActive || this._isSelected ? t : e;
  }
  _getIconName() {
    return this._item?.icon;
  }
  renderLabel() {
    return h`<slot name="label" slot="label"></slot>`;
  }
  #l() {
    return this.hideActions ? d : !this.#e || !this._item ? d : h`
			<umb-entity-actions-bundle
				slot="actions"
				.entityType=${this.#e.entityType}
				.unique=${this.#e.unique}
				.label=${this._label}>
			</umb-entity-actions-bundle>
		`;
  }
  #o() {
    return h`
			${this._childItems ? B(
      this._childItems,
      (e, t) => e.name + "___" + t,
      (e) => h`
							<umb-tree-item
								.entityType=${e.entityType}
								.props=${{ hideActions: this.hideActions, item: e }}></umb-tree-item>
						`
    ) : ""}
		`;
  }
  #u() {
    return this._totalPages <= 1 || this._currentPage === this._totalPages ? d : h` <umb-tree-load-more-button @click=${this.#i}></umb-tree-load-more-button> `;
  }
  static {
    this.styles = [
      D,
      F`
			#icon-container {
				position: relative;
				font-size: 15px;
			}

			uui-menu-item {
				--umb-sign-bundle-bg: var(--uui-color-surface);
			}

			uui-menu-item:hover {
				--umb-sign-bundle-bg: var(--uui-color-surface-emphasis);
			}

			uui-menu-item[active],
			uui-menu-item[selected] {
				--umb-sign-bundle-bg: var(--uui-color-current);
			}

			uui-menu-item[selected]:hover,
			uui-menu-item[active]:hover {
				--umb-sign-bundle-bg: var(--uui-color-current-emphasis);
			}

			#label {
				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;
			}
		`
    ];
  }
}
i([
  b({ type: Object, attribute: !1 })
], s.prototype, "item", 1);
i([
  r()
], s.prototype, "_flags", 2);
i([
  r()
], s.prototype, "_label", 2);
i([
  b({ type: Object, attribute: !1 })
], s.prototype, "api", 1);
i([
  b({ type: Boolean, attribute: !1 })
], s.prototype, "hideActions", 2);
i([
  r()
], s.prototype, "_isActive", 2);
i([
  r()
], s.prototype, "_childItems", 2);
i([
  r()
], s.prototype, "_href", 2);
i([
  r()
], s.prototype, "_isLoading", 2);
i([
  r()
], s.prototype, "_isSelectableContext", 2);
i([
  r()
], s.prototype, "_isSelectable", 2);
i([
  r()
], s.prototype, "_isSelected", 2);
i([
  r()
], s.prototype, "_hasChildren", 2);
i([
  r()
], s.prototype, "_isOpen", 2);
i([
  r()
], s.prototype, "_iconSlotHasChildren", 2);
i([
  r()
], s.prototype, "_totalPages", 2);
i([
  r()
], s.prototype, "_currentPage", 2);
export {
  ce as U,
  s as a,
  p as b,
  T as c
};
//# sourceMappingURL=tree-item-element-base-mu8pGzwR.js.map
