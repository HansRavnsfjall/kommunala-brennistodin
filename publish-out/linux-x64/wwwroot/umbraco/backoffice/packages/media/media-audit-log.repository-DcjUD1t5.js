import { MediaService as a } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecute as s } from "@umbraco-cms/backoffice/resources";
import { UmbRepositoryBase as u } from "@umbraco-cms/backoffice/repository";
class m {
  #e;
  /**
   * Creates an instance of UmbAuditLogServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbAuditLogServerDataSource
   */
  constructor(e) {
    this.#e = e;
  }
  /**
   * Get the audit log for a Media
   * @param {UmbAuditLogRequestArgs} args
   * @returns {*}
   * @memberof UmbMediaAuditLogServerDataSource
   */
  async getAuditLog(e) {
    const { data: r, error: i } = await s(
      this.#e,
      a.getMediaByIdAuditLog({
        path: { id: e.unique },
        query: {
          orderDirection: e.orderDirection,
          // TODO: fix this type cast
          sinceDate: e.sinceDate,
          skip: e.skip,
          take: e.take
        }
      })
    );
    return r ? { data: { items: r.items.map((t) => ({
      user: { unique: t.user.id },
      timestamp: t.timestamp,
      logType: t.logType,
      // TODO: fix this type cast
      comment: t.comment,
      parameters: t.parameters
    })), total: r.total } } : { error: i };
  }
}
class y extends u {
  #e;
  /**
   * Creates an instance of UmbMediaAuditLogRepository.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbMediaAuditLogRepository
   */
  constructor(e) {
    super(e), this.#e = new m(e);
  }
  /**
   * Request the audit log for a Media
   * @param {UmbAuditLogRequestArgs} args
   * @returns {*}
   * @memberof UmbMediaAuditLogRepository
   */
  async requestAuditLog(e) {
    return this.#e.getAuditLog(e);
  }
}
export {
  y as U
};
//# sourceMappingURL=media-audit-log.repository-DcjUD1t5.js.map
