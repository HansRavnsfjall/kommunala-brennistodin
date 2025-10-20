import { a as r } from "./base-CzBFGKJV.js";
import { U as e } from "./character-map-modal.token-Ctie_x2r.js";
import { UMB_MODAL_MANAGER_CONTEXT as i } from "@umbraco-cms/backoffice/modal";
class f extends r {
  async execute(t) {
    if (!t) return;
    const a = await this.getContext(i);
    if (!a) throw new Error("Modal manager not found");
    const o = a.open(this, e);
    if (!o) return;
    const n = await o.onSubmit().catch(() => {
    });
    n && t?.chain().focus().insertContent(n).run();
  }
}
export {
  f as default
};
//# sourceMappingURL=character-map.tiptap-toolbar-api-DGrjfErO.js.map
