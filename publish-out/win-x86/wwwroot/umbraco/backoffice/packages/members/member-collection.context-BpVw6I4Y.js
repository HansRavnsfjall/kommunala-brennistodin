import { l as t } from "./manifests-KIVuOqdB.js";
import { UmbDefaultCollectionContext as o } from "@umbraco-cms/backoffice/collection";
class l extends o {
  constructor(e) {
    super(e, t);
  }
  /**
   * Sets the member type filter for the collection and refreshes the collection.
   * @param {Array<string>} selection
   * @memberof UmbMemberCollectionContext
   */
  setMemberTypeFilter(e) {
    this.setFilter({ memberTypeId: e });
  }
}
export {
  l as UmbMemberCollectionContext,
  l as api
};
//# sourceMappingURL=member-collection.context-BpVw6I4Y.js.map
