import "./default-tree.element-Bpzs0ILI.js";
import { UmbContextBase as E } from "@umbraco-cms/backoffice/class-api";
import { UmbObjectState as w, UmbArrayState as x, UmbBooleanState as a, UmbStringState as S } from "@umbraco-cms/backoffice/observable-api";
import { U as q } from "./default-tree.context-token-C7a9fWg9.js";
import { UMB_ACTION_EVENT_CONTEXT as P } from "@umbraco-cms/backoffice/action";
import { umbExtensionsRegistry as I } from "@umbraco-cms/backoffice/extension-registry";
import "@umbraco-cms/backoffice/extension-api";
import { UmbPaginationManager as O, debounce as $, UmbDeprecation as A } from "@umbraco-cms/backoffice/utils";
import { UmbEntityActionEvent as U, UmbHasChildrenEntityContext as V, UmbRequestReloadChildrenOfEntityEvent as C, UmbRequestReloadStructureForEntityEvent as f } from "@umbraco-cms/backoffice/entity-action";
import { UmbChangeEvent as L } from "@umbraco-cms/backoffice/event";
import { map as _ } from "@umbraco-cms/backoffice/external/rxjs";
import { UmbContextToken as R } from "@umbraco-cms/backoffice/context-api";
import { UMB_SECTION_CONTEXT as k, UMB_SECTION_SIDEBAR_CONTEXT as N } from "@umbraco-cms/backoffice/section";
import { UmbParentEntityContext as H } from "@umbraco-cms/backoffice/entity";
import { ensureSlash as g } from "@umbraco-cms/backoffice/router";
import { property as b, state as o, ifDefined as M, html as h, nothing as p, repeat as B } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as Y } from "@umbraco-cms/backoffice/lit-element";
class m extends U {
  static {
    this.TYPE = "request-reload-tree-item-children";
  }
  constructor(e) {
    super(m.TYPE, e);
  }
}
class ae extends E {
  constructor(e) {
    super(e, v), this.pagination = new O(), this._treeItem = new w(void 0), this.treeItem = this._treeItem.asObservable(), this.#t = new x([], (t) => t.unique), this.childItems = this.#t.asObservable(), this.#i = new a(!1), this.hasChildren = this.#i.asObservable(), this.#s = new a(!1), this.isLoading = this.#s.asObservable(), this.#o = new a(!1), this.isSelectable = this.#o.asObservable(), this.#a = new a(!1), this.isSelectableContext = this.#a.asObservable(), this.#l = new a(!1), this.isSelected = this.#l.asObservable(), this.#r = new a(!1), this.isActive = this.#r.asObservable(), this.#m = new a(!1), this.hasActions = this.#m.asObservable(), this.#c = new S(""), this.path = this.#c.asObservable(), this.#d = new a(!1), this.isOpen = this.#d.asObservable(), this.#p = new a(!1), this.foldersOnly = this.#p.asObservable(), this.#b = new V(this), this.#T = new H(this), this.#h = {
      skip: 0,
      take: 50
    }, this.loadChildren = () => this.#E(), this.loadMore = () => this.#E(!0), this.#u = (t) => {
      t.getUnique() === this.unique && t.getEntityType() === this.entityType && this.loadChildren();
    }, this.#y = async (t) => {
      this.unique && t.getUnique() === this.unique && t.getEntityType() === this.entityType && (this.parentTreeItemContext ? this.parentTreeItemContext.loadChildren() : this.treeContext?.loadTree());
    }, this.#q = (t) => {
      const i = t.target;
      this.#h.skip = i.getSkip(), this.loadMore();
    }, this.#C = $(() => this.#f(), 100), this.#_ = () => {
      this.#n?.removeEventListener(
        m.TYPE,
        this.#u
      ), this.#n?.removeEventListener(
        C.TYPE,
        this.#u
      ), this.#n?.removeEventListener(
        f.TYPE,
        this.#y
      );
    }, this.pagination.setPageSize(this.#h.take), this.#P(), this.pagination.addEventListener(L.TYPE, this.#q), window.addEventListener("navigationend", this.#C);
  }
  #e;
  #t;
  #i;
  #s;
  #o;
  #a;
  #l;
  #r;
  #m;
  #c;
  #d;
  #p;
  #g;
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
    return new A({
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
    const i = e.parent ? {
      entityType: e.parent.entityType,
      unique: e.parent.unique
    } : void 0;
    this.#T.setParent(i), this._treeItem.setValue(e), this.#O(), this.#w(), this.#x(), this.#S();
  }
  async #E(e = !1) {
    if (this.unique === void 0) throw new Error("Could not request children, unique key is missing");
    if (this.entityType === void 0) throw new Error("Could not request children, entity type is missing");
    const t = this.treeContext?.getRepository();
    if (!t) throw new Error("Could not request children, repository is missing");
    this.#s.setValue(!0);
    const i = e ? this.#h.skip : 0, r = e ? this.#h.take : this.pagination.getCurrentPageNumber() * this.#h.take, l = this.#p.getValue(), u = this.treeContext?.getAdditionalRequestArgs(), { data: c } = await t.requestTreeItemsOf({
      parent: {
        unique: this.unique,
        entityType: this.entityType
      },
      foldersOnly: l,
      skip: i,
      take: r,
      ...u
    });
    if (c) {
      if (e) {
        const T = this.#t.getValue();
        this.#t.setValue([...T, ...c.items]);
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
  async #P() {
    this.consumeContext(k, (e) => {
      this.#g = e, this.#S();
    }), this.consumeContext(N, (e) => {
      this.#v = e;
    }), this.consumeContext(q, (e) => {
      this.treeContext = e, this.#w(), this.#x(), this.#I(), this.#$();
    }), this.consumeContext(v, (e) => {
      this.parentTreeItemContext = e;
    }).skipHost(), this.consumeContext(P, (e) => {
      this.#_(), this.#n = e, this.#n?.addEventListener(
        m.TYPE,
        this.#u
      ), this.#n?.addEventListener(
        C.TYPE,
        this.#u
      ), this.#n?.addEventListener(
        f.TYPE,
        this.#y
      );
    });
  }
  getTreeItem() {
    return this._treeItem.getValue();
  }
  #w() {
    this.treeContext && this.observe(
      this.treeContext.selection.selectable,
      (e) => {
        if (this.#a.setValue(e), e === !0) {
          const t = this.treeContext?.selectableFilter?.(this.getTreeItem()) ?? !0;
          this.#o.setValue(t), this.#f();
        }
      },
      "observeIsSelectable"
    );
  }
  #x() {
    !this.treeContext || !this.unique || this.observe(
      this.treeContext.selection.selection.pipe(_((e) => e.includes(this.unique))),
      (e) => {
        this.#l.setValue(e);
      },
      "observeIsSelected"
    );
  }
  #I() {
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
      this.#g?.pathname,
      (e) => {
        if (!e || !this.entityType || this.unique === void 0) return;
        const t = this.constructPath(e, this.entityType, this.unique);
        this.#c.setValue(t), this.#f();
      },
      "observeSectionPath"
    );
  }
  #O() {
    this.observe(
      I.byType("entityAction").pipe(_((e) => e.filter((t) => t.forEntityTypes.includes(this.entityType)))),
      (e) => {
        this.#m.setValue(e.length > 0);
      },
      "observeActions"
    );
  }
  #$() {
    this.unique !== void 0 && this.entityType && this.observe(
      this.treeContext?.expansion.isExpanded({ entityType: this.entityType, unique: this.unique }),
      (e) => {
        e && this.#i.getValue() && this.#d.getValue() === !1 && this.loadChildren(), this.#d.setValue(e ?? !1);
      },
      "observeExpansion"
    );
  }
  #u;
  #y;
  #q;
  #C;
  #f() {
    if (this.#o.getValue()) {
      this.#r.setValue(!1);
      return;
    }
    const t = g(window.location.pathname), i = g(this.#c.getValue()), r = t.includes(i);
    this.#r.setValue(r);
  }
  // TODO: use router context
  constructPath(e, t, i) {
    return `section/${e}/workspace/${t}/edit/${i}`;
  }
  #_;
  destroy() {
    this.#_(), window.removeEventListener("navigationend", this.#C), super.destroy();
  }
}
const v = new R("UmbTreeItemContext");
var D = Object.defineProperty, F = Object.getOwnPropertyDescriptor, s = (d, e, t, i) => {
  for (var r = i > 1 ? void 0 : i ? F(e, t) : e, l = d.length - 1, u; l >= 0; l--)
    (u = d[l]) && (r = (i ? u(e, t, r) : u(r)) || r);
  return i && r && D(e, t, r), r;
};
class n extends Y {
  constructor() {
    super(...arguments), this.hideActions = !1, this._isActive = !1, this._isLoading = !1, this._isSelectableContext = !1, this._isSelectable = !1, this._isSelected = !1, this._hasChildren = !1, this._isOpen = !1, this._iconSlotHasChildren = !1, this._totalPages = 1, this._currentPage = 1, this.#i = (e) => {
      e.stopPropagation();
      const t = this._currentPage = this._currentPage + 1;
      this.#e?.pagination.setCurrentPageNumber(t);
    }, this.#s = (e) => e.target.assignedNodes({ flatten: !0 }).length > 0;
  }
  set item(e) {
    this._item = e, this._item && (this._label = this.localize.string(this._item?.name ?? ""), this.#t());
  }
  get item() {
    return this._item;
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
				.caretLabel=${this.localize.term("visuallyHiddenTexts_expandChildItems") + " " + this._label}
				label=${this._label}
				href="${M(this._isSelectableContext ? void 0 : this._href)}">
				${this.renderIconContainer()} ${this.renderLabel()} ${this.#a()} ${this.#l()}
				<slot></slot>
				${this.#r()}
			</uui-menu-item>
		`;
  }
  #s;
  renderIconContainer() {
    return h`
			<slot
				name="icon"
				slot="icon"
				@slotchange=${(e) => {
      this._iconSlotHasChildren = this.#s(e);
    }}></slot>
			${this._iconSlotHasChildren ? p : this.#o()}
		`;
  }
  #o() {
    const e = this._item?.icon, t = this._item?.isFolder, i = e?.split(" ")[0];
    return e && i ? h`<umb-icon slot="icon" name="${this._isActive ? i : e}"></umb-icon>` : t ? h`<umb-icon slot="icon" name="icon-folder"></umb-icon>` : h`<umb-icon slot="icon" name="icon-circle-dotted"></umb-icon>`;
  }
  renderLabel() {
    return h`<slot name="label" slot="label"></slot>`;
  }
  #a() {
    return this.hideActions ? p : !this.#e || !this._item ? p : h`
			<umb-entity-actions-bundle
				slot="actions"
				.entityType=${this.#e.entityType}
				.unique=${this.#e.unique}
				.label=${this.localize.term("actions_viewActionsFor", [this._label])}>
			</umb-entity-actions-bundle>
		`;
  }
  #l() {
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
  #r() {
    return this._totalPages <= 1 || this._currentPage === this._totalPages ? p : h` <uui-button @click=${this.#i} label="Load more"></uui-button> `;
  }
}
s([
  b({ type: Object, attribute: !1 })
], n.prototype, "item", 1);
s([
  o()
], n.prototype, "_label", 2);
s([
  b({ type: Object, attribute: !1 })
], n.prototype, "api", 1);
s([
  b({ type: Boolean, attribute: !1 })
], n.prototype, "hideActions", 2);
s([
  o()
], n.prototype, "_isActive", 2);
s([
  o()
], n.prototype, "_childItems", 2);
s([
  o()
], n.prototype, "_href", 2);
s([
  o()
], n.prototype, "_isLoading", 2);
s([
  o()
], n.prototype, "_isSelectableContext", 2);
s([
  o()
], n.prototype, "_isSelectable", 2);
s([
  o()
], n.prototype, "_isSelected", 2);
s([
  o()
], n.prototype, "_hasChildren", 2);
s([
  o()
], n.prototype, "_isOpen", 2);
s([
  o()
], n.prototype, "_iconSlotHasChildren", 2);
s([
  o()
], n.prototype, "_totalPages", 2);
s([
  o()
], n.prototype, "_currentPage", 2);
export {
  ae as U,
  n as a,
  m as b,
  v as c
};
//# sourceMappingURL=tree-item-element-base-Dc0PseYz.js.map
