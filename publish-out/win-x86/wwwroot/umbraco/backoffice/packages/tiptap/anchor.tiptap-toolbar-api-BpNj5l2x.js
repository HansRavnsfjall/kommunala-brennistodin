import { U as i } from "./tiptap-toolbar-element-api-base-BQtOaJBO.js";
import { U as s } from "./anchor-modal.token-BPM0CF21.js";
import { Anchor as e } from "@umbraco-cms/backoffice/external/tiptap";
import { UMB_MODAL_MANAGER_CONTEXT as m } from "@umbraco-cms/backoffice/modal";
class u extends i {
  async execute(t) {
    const o = t?.getAttributes(e.name);
    if (!o) return;
    const a = await this.getContext(m);
    if (!a) throw new Error("Modal manager not found");
    const r = a.open(this, s, { data: { id: o?.id } });
    if (!r) return;
    const n = await r.onSubmit().catch(() => {
    });
    n && t?.chain().insertContent({ type: e.name, attrs: { id: n } }).run();
  }
}
export {
  u as default
};
//# sourceMappingURL=anchor.tiptap-toolbar-api-BpNj5l2x.js.map
