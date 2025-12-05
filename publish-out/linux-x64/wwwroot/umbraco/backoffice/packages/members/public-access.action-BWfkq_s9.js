import { U as n } from "./public-access-modal.token-BxDc1N0G.js";
import { UmbEntityActionBase as s, UmbRequestReloadStructureForEntityEvent as a, UmbRequestReloadChildrenOfEntityEvent as o } from "@umbraco-cms/backoffice/entity-action";
import { umbOpenModal as r } from "@umbraco-cms/backoffice/modal";
import { UMB_ACTION_EVENT_CONTEXT as u } from "@umbraco-cms/backoffice/action";
class p extends s {
  async execute() {
    if (!this.args.unique) throw new Error("Unique is not available");
    await r(this, n, { data: { unique: this.args.unique } }), this.#t();
  }
  async #t() {
    const t = await this.getContext(u);
    if (!t)
      throw new Error("Action event context is not available");
    const e = new a({
      unique: this.args.unique,
      entityType: this.args.entityType
    }), i = new o({
      unique: this.args.unique,
      entityType: this.args.entityType
    });
    t.dispatchEvent(e), t.dispatchEvent(i);
  }
}
export {
  p as UmbDocumentPublicAccessEntityAction,
  p as api
};
//# sourceMappingURL=public-access.action-BWfkq_s9.js.map
