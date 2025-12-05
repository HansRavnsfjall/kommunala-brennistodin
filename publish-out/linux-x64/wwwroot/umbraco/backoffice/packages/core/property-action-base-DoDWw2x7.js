import { UmbActionBase as e } from "@umbraco-cms/backoffice/action";
class s extends e {
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
  s as U
};
//# sourceMappingURL=property-action-base-DoDWw2x7.js.map
