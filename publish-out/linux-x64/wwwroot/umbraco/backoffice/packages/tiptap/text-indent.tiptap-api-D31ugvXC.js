import { U as t } from "./base-CzBFGKJV.js";
import { TextIndent as e } from "@umbraco-cms/backoffice/external/tiptap";
class p extends t {
  constructor() {
    super(...arguments), this.getTiptapExtensions = () => [
      e.configure({
        types: ["div", "heading", "paragraph", "blockquote", "listItem", "orderedList", "bulletList"]
      })
    ];
  }
}
export {
  p as default
};
//# sourceMappingURL=text-indent.tiptap-api-D31ugvXC.js.map
