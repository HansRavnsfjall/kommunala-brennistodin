import { U as t } from "./tiptap-menu-item-api-base-DXuOn0Ew.js";
import { U as e } from "./tiptap-rte.context-token-DQjBmxxS.js";
class i extends t {
  async execute() {
    (await this.getContext(e))?.getEditor()?.chain().focus().addColumnBefore().run();
  }
}
export {
  i as default
};
//# sourceMappingURL=table-column-add-before.action-BGTxipJL.js.map
