import { DocumentService as i } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecute as a } from "@umbraco-cms/backoffice/resources";
import { UmbRepositoryBase as u } from "@umbraco-cms/backoffice/repository";
class m {
  #t;
  /**
   * Creates an instance of UmbAuditLogServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbAuditLogServerDataSource
   */
  constructor(t) {
    this.#t = t;
  }
  /**
   * Get the audit log for a document
   * @param {UmbAuditLogRequestArgs} args
   * @returns {*}
   * @memberof UmbDocumentAuditLogServerDataSource
   */
  async getAuditLog(t) {
    const { data: r, error: s } = await a(
      this.#t,
      i.getDocumentByIdAuditLog({
        path: { id: t.unique },
        query: {
          orderDirection: t.orderDirection,
          // TODO: Fix type cast
          sinceDate: t.sinceDate,
          skip: t.skip,
          take: t.take
        }
      })
    );
    return r ? { data: { items: r.items.map((e) => ({
      user: { unique: e.user.id },
      timestamp: e.timestamp,
      logType: e.logType,
      // TODO: Fix type cast
      comment: e.comment,
      parameters: e.parameters
    })), total: r.total } } : { error: s };
  }
}
class y extends u {
  #t;
  /**
   * Creates an instance of UmbDocumentAuditLogRepository.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbDocumentAuditLogRepository
   */
  constructor(t) {
    super(t), this.#t = new m(t);
  }
  /**
   * Request the audit log for a document
   * @param {UmbAuditLogRequestArgs} args
   * @returns {*}
   * @memberof UmbDocumentAuditLogRepository
   */
  async requestAuditLog(t) {
    return this.#t.getAuditLog(t);
  }
}
export {
  y as U
};
//# sourceMappingURL=document-audit-log.repository-CxaYaS1s.js.map
