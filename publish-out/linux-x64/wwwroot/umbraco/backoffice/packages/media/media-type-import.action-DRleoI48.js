import { g as n } from "./constants-DT5L-WXf.js";
import { UMB_ACTION_EVENT_CONTEXT as i } from "@umbraco-cms/backoffice/action";
import { UmbEntityActionBase as o, UmbRequestReloadChildrenOfEntityEvent as a } from "@umbraco-cms/backoffice/entity-action";
import { umbOpenModal as s } from "@umbraco-cms/backoffice/modal";
class p extends o {
  async execute() {
    await s(this, n, {
      data: { unique: this.args.unique }
    }).catch(() => {
    });
    const t = await this.getContext(i);
    if (!t)
      throw new Error("Action event context not found.");
    const e = new a({
      unique: this.args.unique,
      entityType: this.args.entityType
    });
    t.dispatchEvent(e);
  }
}
export {
  p as UmbImportMediaTypeEntityAction,
  p as default
};
//# sourceMappingURL=media-type-import.action-DRleoI48.js.map
