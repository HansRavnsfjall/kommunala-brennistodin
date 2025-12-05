import { U as e } from "./tiptap-menu-item-api-base-DXuOn0Ew.js";
import { U as t } from "./tiptap-rte.context-token-DQjBmxxS.js";
class s extends e {
  async execute() {
    (await this.getContext(t))?.getEditor()?.chain().focus().toggleHeaderCell().run();
  }
}
export {
  s as default
};
//# sourceMappingURL=table-cell-toggle-header.action-CbkMu-Ma.js.map
