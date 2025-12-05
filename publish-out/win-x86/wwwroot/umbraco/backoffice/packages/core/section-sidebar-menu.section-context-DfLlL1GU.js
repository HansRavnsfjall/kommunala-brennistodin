import { U as n } from "./section-sidebar-menu.global-context.token-DWVyWMEs.js";
import { UmbControllerBase as i, UmbContextBase as o } from "@umbraco-cms/backoffice/class-api";
import { UMB_SECTION_CONTEXT as a } from "@umbraco-cms/backoffice/section";
import { UmbEntityExpansionManager as r } from "@umbraco-cms/backoffice/utils";
import { U as p } from "./section-sidebar-menu.section-context.token-BQxJAXea.js";
class h extends i {
  constructor(s) {
    super(s), this.#s = new r(this), this.expansion = this.#s.expansion, this.consumeContext(a, (t) => {
      this.#i = t, this.#o();
    }), this.consumeContext(n, (t) => {
      this.#t = t, this.#a();
    });
  }
  #s;
  #i;
  #t;
  #n;
  #o() {
    this.observe(this.#i?.alias, (s) => {
      s && (this.#n = s);
    });
  }
  #a() {
    !this.#t || !this.#n || this.observe(this.#t?.expansion.expansionBySectionAlias(this.#n), (s) => {
      this.#s.setExpansion(s);
    });
  }
  /**
   * Checks if an entry is expanded
   * @param {UmbMenuItemExpansionEntryModel} entry The entry to check
   * @returns {Observable<boolean>} True if the entry is expanded
   * @memberof UmbSectionSidebarMenuSectionExpansionManager
   */
  isExpanded(s) {
    return this.#s.isExpanded(s);
  }
  /**
   * Sets the expansion state
   * @param {UmbEntityExpansionModel<UmbMenuItemExpansionEntryModel> | undefined} expansion The expansion state
   * @memberof UmbSectionSidebarMenuSectionExpansionManager
   * @returns {void}
   */
  setExpansion(s) {
    this.#s.setExpansion(s);
    const t = this.#e(s);
    this.#t?.expansion.setExpansion(t);
  }
  /**
   * Gets the expansion state
   * @memberof UmbSectionSidebarMenuSectionExpansionManager
   * @returns {UmbEntityExpansionModel<UmbMenuItemExpansionEntryModel>} The expansion state
   */
  getExpansion() {
    return this.#s.getExpansion();
  }
  /**
   * Opens a menu item
   * @param {UmbMenuItemExpansionEntryModel} entry The item to open
   * @memberof UmbSectionSidebarMenuSectionExpansionManager
   * @returns {Promise<void>}
   */
  async expandItem(s) {
    this.#s.expandItem(s);
    const t = this.#e([s]);
    this.#t?.expansion.expandItem(t[0]);
  }
  /**
   * Expands multiple entities
   * @param {UmbEntityExpansionModel<UmbMenuItemExpansionEntryModel>} entries The entities to open
   * @memberof UmbEntityExpansionManager
   * @returns {void}
   */
  expandItems(s) {
    this.#s.expandItems(s);
    const t = this.#e(s);
    this.#t?.expansion.expandItems(t);
  }
  /**
   * Closes a menu item
   * @param {UmbMenuItemExpansionEntryModel} entry The item to close
   * @memberof UmbSectionSidebarMenuSectionExpansionManager
   * @returns {Promise<void>}
   */
  async collapseItem(s) {
    this.#s.collapseItem(s);
    const t = this.#e([s]);
    this.#t?.expansion.collapseItem(t[0]);
  }
  /**
   * Closes all menu items
   * @memberof UmbSectionSidebarMenuSectionExpansionManager
   * @returns {Promise<void>}
   */
  async collapseAll() {
    const s = this.#e(this.#s.getExpansion());
    this.#s.collapseAll(), this.#t?.expansion.collapseItems(s);
  }
  #e(s) {
    return s.map((t) => ({
      ...t,
      sectionAlias: this.#n
    }));
  }
}
class S extends o {
  constructor(s) {
    super(s, p), this.expansion = new h(this);
  }
}
export {
  S as UmbSectionSidebarMenuSectionContext,
  S as api
};
//# sourceMappingURL=section-sidebar-menu.section-context-DfLlL1GU.js.map
