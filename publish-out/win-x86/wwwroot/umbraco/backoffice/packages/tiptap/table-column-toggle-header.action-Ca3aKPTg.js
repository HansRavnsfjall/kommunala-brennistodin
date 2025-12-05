import { U as t } from "./tiptap-menu-item-api-base-DXuOn0Ew.js";
import { U as e } from "./tiptap-rte.context-token-DQjBmxxS.js";
class i extends t {
  async execute() {
    (await this.getContext(e))?.getEditor()?.chain().focus().toggleHeaderColumn().run();
  }
}
export {
  i as default
};
//# sourceMappingURL=table-column-toggle-header.action-Ca3aKPTg.js.map
