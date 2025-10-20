import { UmbPropertyActionBase as t } from "@umbraco-cms/backoffice/property-action";
import { UMB_PROPERTY_CONTEXT as o } from "@umbraco-cms/backoffice/property";
class s extends t {
  async execute() {
    const e = await this.getContext(o);
    e == null || e.clearValue();
  }
}
export {
  s as ContentmentPropertyActionAllowClearElement,
  s as api
};
//# sourceMappingURL=allow-clear.controller.js.map
