import { p as o, l as a, e as s } from "./manifests-BfVrApfB.js";
import { UmbDuplicateDocumentRepository as r } from "./document-duplicate.repository-Cz6LQokO.js";
import { umbOpenModal as u } from "@umbraco-cms/backoffice/modal";
import { UMB_ACTION_EVENT_CONTEXT as c } from "@umbraco-cms/backoffice/action";
import { UmbEntityActionBase as l, UmbRequestReloadChildrenOfEntityEvent as E } from "@umbraco-cms/backoffice/entity-action";
class w extends l {
  async execute() {
    if (!this.args.unique) throw new Error("Unique is not available");
    if (!this.args.entityType) throw new Error("Entity Type is not available");
    const t = await u(this, o, {
      data: {
        unique: this.args.unique,
        entityType: this.args.entityType
      }
    }), e = t.destination.unique;
    if (e === void 0) throw new Error("Destination Unique is not available");
    const n = new r(this), { error: i } = await n.requestDuplicate({
      unique: this.args.unique,
      destination: { unique: e },
      relateToOriginal: t.relateToOriginal,
      includeDescendants: t.includeDescendants
    });
    if (i)
      throw i;
    this.#t(e);
  }
  async #t(t) {
    const e = await this.getContext(c);
    if (!e)
      throw new Error("Action event context is not available");
    const n = t === null ? a : s, i = new E({
      unique: t,
      entityType: n
    });
    e.dispatchEvent(i);
  }
}
export {
  w as UmbDuplicateDocumentEntityAction,
  w as api
};
//# sourceMappingURL=duplicate-document.action-BJq0XsPT.js.map
