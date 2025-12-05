import { o as r } from "./member-group-picker-modal.element-I2C8EUhz.js";
import { UmbEntityActionBase as o } from "@umbraco-cms/backoffice/entity-action";
class i extends o {
  constructor(t, e) {
    super(t, e);
  }
  async execute() {
    history.pushState(null, "", r + "/create");
  }
}
export {
  i as UmbCreateMemberGroupEntityAction,
  i as api
};
//# sourceMappingURL=create-member-group.action-BBO-V6y3.js.map
