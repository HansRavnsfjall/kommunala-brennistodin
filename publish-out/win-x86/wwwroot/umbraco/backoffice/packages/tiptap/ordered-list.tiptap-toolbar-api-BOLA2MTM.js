import { U as t } from "./tiptap-toolbar-element-api-base-BQtOaJBO.js";
import { OrderedList as r, ListItem as s } from "@umbraco-cms/backoffice/external/tiptap";
class p extends t {
  constructor() {
    super(...arguments), this.getTiptapExtensions = () => [r, s];
  }
  execute(e) {
    e?.chain().focus().toggleOrderedList().run();
  }
}
export {
  p as default
};
//# sourceMappingURL=ordered-list.tiptap-toolbar-api-BOLA2MTM.js.map
