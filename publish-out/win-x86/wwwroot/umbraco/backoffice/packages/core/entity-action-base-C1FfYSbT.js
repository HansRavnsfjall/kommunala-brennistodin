import { UmbActionBase as e } from "@umbraco-cms/backoffice/action";
class o extends e {
  /**
   * By specifying the href, the action will act as a link.
   * The `execute` method will not be called.
   * @abstract
   * @returns {string | undefined}
   */
  getHref() {
    return Promise.resolve(void 0);
  }
  /**
   * By specifying the `execute` method, the action will act as a button.
   * @abstract
   * @returns {Promise<void>}
   */
  execute() {
    return Promise.resolve();
  }
}
export {
  o as U
};
//# sourceMappingURL=entity-action-base-C1FfYSbT.js.map
