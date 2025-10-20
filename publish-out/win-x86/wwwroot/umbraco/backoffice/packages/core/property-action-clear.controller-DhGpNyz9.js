import { U as e } from "./property-action-base-DoDWw2x7.js";
import { UMB_PROPERTY_CONTEXT as r } from "@umbraco-cms/backoffice/property";
class n extends e {
  async execute() {
    const t = await this.getContext(r);
    t && t.clearValue();
  }
}
export {
  n as UmbClearPropertyAction,
  n as default
};
//# sourceMappingURL=property-action-clear.controller-DhGpNyz9.js.map
