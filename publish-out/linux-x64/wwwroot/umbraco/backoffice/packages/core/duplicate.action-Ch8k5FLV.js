import { U as e } from "./entity-action-base-C1FfYSbT.js";
import { U as a } from "./request-reload-structure-for-entity.event-CHtdC9hO.js";
import { createExtensionApiByAlias as n } from "@umbraco-cms/backoffice/extension-registry";
import { UMB_ACTION_EVENT_CONTEXT as o } from "@umbraco-cms/backoffice/action";
class y extends e {
  async execute() {
    if (!this.args.unique) throw new Error("Unique is not available");
    if (!this.args.entityType) throw new Error("Entity Type is not available");
    const t = await n(
      this,
      this.args.meta.duplicateRepositoryAlias
    );
    if (!t) throw new Error("Duplicate repository is not available");
    const { error: i } = await t.requestDuplicate({
      unique: this.args.unique
    });
    if (i)
      throw i;
    this.#t();
  }
  async #t() {
    const t = await this.getContext(o);
    if (!t)
      throw new Error("Action event context is not available");
    const i = new a({
      unique: this.args.unique,
      entityType: this.args.entityType
    });
    t.dispatchEvent(i);
  }
}
export {
  y as UmbDuplicateEntityAction,
  y as api
};
//# sourceMappingURL=duplicate.action-Ch8k5FLV.js.map
