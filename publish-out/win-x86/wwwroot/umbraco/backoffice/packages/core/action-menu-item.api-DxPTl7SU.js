import { UmbActionBase as t } from "@umbraco-cms/backoffice/action";
class s extends t {
  /**
   * By specifying the `execute` method, the action will act as a button.
   * @abstract
   * @returns {Promise<void>}
   */
  execute() {
    return Promise.resolve();
  }
}
class c extends s {
  async execute() {
  }
}
export {
  c as UmbActionMenuItemApi,
  s as UmbMenuItemActionApiBase,
  c as default
};
//# sourceMappingURL=action-menu-item.api-DxPTl7SU.js.map
