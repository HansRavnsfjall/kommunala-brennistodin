import { a as i } from "./base-CzBFGKJV.js";
import { U as s } from "./anchor-modal.token-BPM0CF21.js";
import { Anchor as e } from "@umbraco-cms/backoffice/external/tiptap";
import { UMB_MODAL_MANAGER_CONTEXT as m } from "@umbraco-cms/backoffice/modal";
class u extends i {
  async execute(t) {
    const a = t?.getAttributes(e.name);
    if (!a) return;
    const o = await this.getContext(m);
    if (!o) throw new Error("Modal manager not found");
    const r = o.open(this, s, { data: { id: a?.id } });
    if (!r) return;
    const n = await r.onSubmit().catch(() => {
    });
    n && t?.chain().insertContent({ type: e.name, attrs: { id: n } }).run();
  }
}
export {
  u as default
};
//# sourceMappingURL=anchor.tiptap-toolbar-api-CvS2NZ4Y.js.map
