import { U as t } from "./tiptap-menu-item-api-base-DXuOn0Ew.js";
import { U as e } from "./tiptap-rte.context-token-DQjBmxxS.js";
class c extends t {
  async execute() {
    (await this.getContext(e))?.getEditor()?.chain().focus().splitCell().run();
  }
}
export {
  c as default
};
//# sourceMappingURL=table-cell-split.action-liqlsqm2.js.map
