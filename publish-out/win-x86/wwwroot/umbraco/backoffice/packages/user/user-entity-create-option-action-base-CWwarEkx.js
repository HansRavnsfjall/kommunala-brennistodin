import { l as n } from "./constants-BH7VsFPT.js";
import { UMB_ACTION_EVENT_CONTEXT as i } from "@umbraco-cms/backoffice/action";
import { UmbRequestReloadChildrenOfEntityEvent as o } from "@umbraco-cms/backoffice/entity-action";
import { UmbEntityCreateOptionActionBase as s } from "@umbraco-cms/backoffice/entity-create-option-action";
import { umbOpenModal as r } from "@umbraco-cms/backoffice/modal";
class d extends s {
  #t;
  constructor(t, e) {
    super(t, e), this.#t = e.kind;
  }
  async execute() {
    await r(this, n, {
      data: {
        user: {
          kind: this.#t
        }
      }
    }).then(() => {
      this.#e();
    }).catch(async () => {
      this.#e();
    });
  }
  async #e() {
    const t = await this.getContext(i);
    if (!t) throw new Error("Event context not found");
    const e = new o({
      entityType: this.args.entityType,
      unique: this.args.unique
    });
    t.dispatchEvent(e);
  }
}
export {
  d as U
};
//# sourceMappingURL=user-entity-create-option-action-base-CWwarEkx.js.map
