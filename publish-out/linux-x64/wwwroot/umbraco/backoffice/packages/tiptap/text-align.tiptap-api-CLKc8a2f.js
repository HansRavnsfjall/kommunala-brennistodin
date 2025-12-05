import { U as t } from "./base-CzBFGKJV.js";
import { TextAlign as e } from "@umbraco-cms/backoffice/external/tiptap";
class p extends t {
  constructor() {
    super(...arguments), this.getTiptapExtensions = () => [
      e.configure({
        types: ["heading", "paragraph", "blockquote", "orderedList", "bulletList", "codeBlock"]
      })
    ];
  }
}
export {
  p as default
};
//# sourceMappingURL=text-align.tiptap-api-CLKc8a2f.js.map
