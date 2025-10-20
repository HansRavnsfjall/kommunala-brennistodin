import { a as t } from "./base-CzBFGKJV.js";
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
//# sourceMappingURL=ordered-list.tiptap-toolbar-api-CRHxAt_D.js.map
