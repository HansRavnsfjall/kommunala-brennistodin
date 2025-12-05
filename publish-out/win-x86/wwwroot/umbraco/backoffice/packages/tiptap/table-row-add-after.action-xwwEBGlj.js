import { U as t } from "./tiptap-menu-item-api-base-DXuOn0Ew.js";
import { U as e } from "./tiptap-rte.context-token-DQjBmxxS.js";
class s extends t {
  async execute() {
    (await this.getContext(e))?.getEditor()?.chain().focus().addRowAfter().run();
  }
}
export {
  s as default
};
//# sourceMappingURL=table-row-add-after.action-xwwEBGlj.js.map
