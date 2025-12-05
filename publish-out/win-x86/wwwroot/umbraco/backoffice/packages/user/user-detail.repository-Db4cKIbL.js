import { U as r } from "./user-detail.server.data-source-DVHJFs0I.js";
import { f as t } from "./constants-DjdF3T-M.js";
import { UmbDetailRepositoryBase as a } from "@umbraco-cms/backoffice/repository";
class l extends a {
  constructor(e) {
    super(e, r, t);
  }
  /**
   * Creates a new User detail
   * @param {UmbUserDetailModel} model
   * @returns {*}
   * @memberof UmbUserDetailRepository
   */
  async create(e) {
    return super.create(e, null);
  }
  /**
   * Requests the detail for the given unique
   * @param unique
   * @returns {*}
   * @memberof UmbUserDetailRepository
   */
  requestCalculateStartNodes(e) {
    return this.detailDataSource.calculateStartNodes(e);
  }
}
export {
  l as UmbUserDetailRepository,
  l as default
};
//# sourceMappingURL=user-detail.repository-Db4cKIbL.js.map
