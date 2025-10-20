import { UmbActionBase as e } from "@umbraco-cms/backoffice/action";
const r = "entityCreateOptionAction";
class i extends e {
  /**
   * By specifying the href, the action will act as a link.
   * The `execute` method will not be called.
   * @abstract
   * @returns {string | undefined} - A promise which resolves into a HREF string or undefined.
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
  r as UMB_EXTENSION_TYPE_ENTITY_CREATE_OPTION_ACTION,
  i as UmbEntityCreateOptionActionBase
};
//# sourceMappingURL=index.js.map
