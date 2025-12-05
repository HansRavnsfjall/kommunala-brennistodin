import { U as a } from "./section-sidebar-menu.global-context.token-DWVyWMEs.js";
import { UmbEntityExpansionManager as i } from "@umbraco-cms/backoffice/utils";
import { UmbContextBase as o } from "@umbraco-cms/backoffice/class-api";
class r extends i {
  /**
   * Returns an observable of the expansion state filtered by section alias.
   * @param {string} sectionAlias The alias of the section to filter by.
   * @returns {Observable<UmbSectionMenuItemExpansionEntryModel[]>} An observable of the expansion state for the specified section alias.
   * @memberof UmbSectionSidebarMenuAppExpansionManager
   */
  expansionBySectionAlias(e) {
    return this._expansion.asObservablePart(
      (s) => s.filter((t) => t.sectionAlias === e)
    );
  }
}
class b extends o {
  constructor(e) {
    super(e, a), this.expansion = new r(this);
  }
}
export {
  b as UmbSectionSidebarMenuGlobalContext,
  b as api
};
//# sourceMappingURL=section-sidebar-menu.global-context-CqW3tc6X.js.map
