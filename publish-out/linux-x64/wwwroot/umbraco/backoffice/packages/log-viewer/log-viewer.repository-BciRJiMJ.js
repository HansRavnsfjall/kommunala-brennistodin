import { LogViewerService as r } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecute as a } from "@umbraco-cms/backoffice/resources";
class n {
  #e;
  /**
   * Creates an instance of UmbLogSearchesServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbLogSearchesServerDataSource
   */
  constructor(e) {
    this.#e = e;
  }
  /**
   * Grabs all the log viewer saved searches from the server
   * @param {{ skip?: number; take?: number }} { skip = 0, take = 100 }
   * @returns {*}
   * @memberof UmbLogSearchesServerDataSource
   */
  async getAllSavedSearches({ skip: e = 0, take: t = 100 }) {
    return await a(this.#e, r.getLogViewerSavedSearch({ query: { skip: e, take: t } }));
  }
  /**
   * Get a log viewer saved search by name from the server
   * @param {{ name: string }} { name }
   * @returns {*}
   * @memberof UmbLogSearchesServerDataSource
   */
  async getSavedSearchByName({ name: e }) {
    return await a(this.#e, r.getLogViewerSavedSearchByName({ path: { name: e } }));
  }
  /**
   *	Post a new log viewer saved search to the server
   * @param {{ body?: SavedLogSearch }} { body }
   * @returns {*}
   * @memberof UmbLogSearchesServerDataSource
   */
  async postLogViewerSavedSearch({ name: e, query: t }) {
    return await a(this.#e, r.postLogViewerSavedSearch({ body: { name: e, query: t } }));
  }
  /**
   * Remove a log viewer saved search by name from the server
   * @param {{ name: string }} { name }
   * @returns {*}
   * @memberof UmbLogSearchesServerDataSource
   */
  async deleteSavedSearchByName({ name: e }) {
    return await a(this.#e, r.deleteLogViewerSavedSearchByName({ path: { name: e } }));
  }
}
class L {
  #e;
  /**
   * Creates an instance of UmbLogMessagesServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbLogMessagesServerDataSource
   */
  constructor(e) {
    this.#e = e;
  }
  /**
   * Grabs all the loggers from the server
   * @param {{ skip?: number; take?: number }} { skip = 0, take = 100 }
   * @returns {*}
   * @memberof UmbLogMessagesServerDataSource
   */
  async getLogViewerLevel({ skip: e = 0, take: t = 100 }) {
    return await a(this.#e, r.getLogViewerLevel({ query: { skip: e, take: t } }));
  }
  /**
   * Grabs all the number of different log messages from the server
   * @param {{ skip?: number; take?: number }} { skip = 0, take = 100 }
   * @returns {*}
   * @memberof UmbLogMessagesServerDataSource
   */
  async getLogViewerLevelCount({ startDate: e, endDate: t }) {
    return await a(
      this.#e,
      r.getLogViewerLevelCount({
        query: { startDate: e, endDate: t }
      })
    );
  }
  /**
   *	Grabs all the log messages from the server
   * @param {{
   * 		skip?: number;
   * 		take?: number;
   * 		orderDirection?: DirectionModel;
   * 		filterExpression?: string;
   * 		logLevel?: Array<LogLevelModel>;
   * 		startDate?: string;
   * 		endDate?: string;
   * 	}} {
   * 		skip = 0,
   * 		take = 100,
   * 		orderDirection,
   * 		filterExpression,
   * 		logLevel,
   * 		startDate,
   * 		endDate,
   * 	}
   * @returns {*}
   * @memberof UmbLogMessagesServerDataSource
   */
  async getLogViewerLogs({
    skip: e = 0,
    take: t = 100,
    orderDirection: s,
    filterExpression: i,
    logLevel: g,
    startDate: o,
    endDate: c
  }) {
    return await a(
      this.#e,
      r.getLogViewerLog({
        query: {
          skip: e,
          take: t,
          orderDirection: s,
          filterExpression: i,
          logLevel: g?.length ? g : void 0,
          startDate: o,
          endDate: c
        }
      })
    );
  }
  /**
   * Grabs all the log message templates from the server
   * @param {{
   * 		skip?: number;
   * 		take?: number;
   * 		startDate?: string;
   * 		endDate?: string;
   * 	}} {
   * 		skip,
   * 		take = 100,
   * 		startDate,
   * 		endDate,
   * 	}
   * @returns {*}
   * @memberof UmbLogMessagesServerDataSource
   */
  async getLogViewerMessageTemplate({
    skip: e,
    take: t = 100,
    startDate: s,
    endDate: i
  }) {
    return await a(
      this.#e,
      r.getLogViewerMessageTemplate({
        query: { skip: e, take: t, startDate: s, endDate: i }
      })
    );
  }
  async getLogViewerValidateLogsSize({ startDate: e, endDate: t }) {
    return await a(
      this.#e,
      r.getLogViewerValidateLogsSize({
        query: { startDate: e, endDate: t }
      })
    );
  }
}
class w {
  #e;
  #r;
  #t;
  constructor(e) {
    this.#e = e, this.#r = new n(this.#e), this.#t = new L(this.#e);
  }
  async getSavedSearches({ skip: e, take: t }) {
    return this.#r.getAllSavedSearches({ skip: e, take: t });
  }
  async saveSearch({ name: e, query: t }) {
    return this.#r.postLogViewerSavedSearch({ name: e, query: t });
  }
  async removeSearch({ name: e }) {
    return this.#r.deleteSavedSearchByName({ name: e });
  }
  async getMessageTemplates({
    skip: e,
    take: t,
    startDate: s,
    endDate: i
  }) {
    return this.#t.getLogViewerMessageTemplate({ skip: e, take: t, startDate: s, endDate: i });
  }
  async getLogCount({ startDate: e, endDate: t }) {
    return this.#t.getLogViewerLevelCount({ startDate: e, endDate: t });
  }
  async getLogs({
    skip: e = 0,
    take: t = 100,
    orderDirection: s,
    filterExpression: i,
    logLevel: g,
    startDate: o,
    endDate: c
  }) {
    return this.#t.getLogViewerLogs({
      skip: e,
      take: t,
      orderDirection: s,
      filterExpression: i,
      logLevel: g,
      startDate: o,
      endDate: c
    });
  }
  async getLogLevels({ skip: e = 0, take: t = 100 }) {
    return this.#t.getLogViewerLevel({ skip: e, take: t });
  }
  async getLogViewerValidateLogsSize({ startDate: e, endDate: t }) {
    return this.#t.getLogViewerValidateLogsSize({ startDate: e, endDate: t });
  }
}
export {
  w as U
};
//# sourceMappingURL=log-viewer.repository-BciRJiMJ.js.map
