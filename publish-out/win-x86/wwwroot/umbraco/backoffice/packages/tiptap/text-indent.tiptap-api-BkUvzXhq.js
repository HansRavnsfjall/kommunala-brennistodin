import { U as t } from "./tiptap-extension-api-base-Dc5dmxjn.js";
import { TextIndent as e } from "@umbraco-cms/backoffice/external/tiptap";
class p extends t {
  constructor() {
    super(...arguments), this.getTiptapExtensions = () => [
      // eslint-disable-next-line @typescript-eslint/no-deprecated
      e.configure({
        types: ["div", "heading", "paragraph", "blockquote", "listItem", "orderedList", "bulletList"]
      })
    ];
  }
}
export {
  p as default
};
//# sourceMappingURL=text-indent.tiptap-api-BkUvzXhq.js.map
