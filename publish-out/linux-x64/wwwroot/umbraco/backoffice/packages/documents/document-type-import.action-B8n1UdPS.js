import { h as n } from "./constants-D9L2jSGX.js";
import { UMB_ACTION_EVENT_CONTEXT as i } from "@umbraco-cms/backoffice/action";
import { UmbEntityActionBase as o, UmbRequestReloadChildrenOfEntityEvent as a } from "@umbraco-cms/backoffice/entity-action";
import { umbOpenModal as s } from "@umbraco-cms/backoffice/modal";
class p extends o {
  async execute() {
    await s(this, n, {
      data: { unique: this.args.unique }
    });
    const t = await this.getContext(i);
    if (!t)
      throw new Error("Action event context is not available");
    const e = new a({
      unique: this.args.unique,
      entityType: this.args.entityType
    });
    t.dispatchEvent(e);
  }
}
export {
  p as UmbImportDocumentTypeEntityAction,
  p as default
};
//# sourceMappingURL=document-type-import.action-B8n1UdPS.js.map
