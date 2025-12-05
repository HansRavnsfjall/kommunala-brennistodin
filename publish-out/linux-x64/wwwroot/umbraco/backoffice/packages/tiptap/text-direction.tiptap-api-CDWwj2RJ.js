import { U as t } from "./base-CzBFGKJV.js";
import { TextDirection as e } from "@umbraco-cms/backoffice/external/tiptap";
class r extends t {
  constructor() {
    super(...arguments), this.getTiptapExtensions = () => [
      e.configure({
        types: ["heading", "paragraph", "blockquote", "orderedList", "bulletList"]
      })
    ];
  }
}
export {
  r as default
};
//# sourceMappingURL=text-direction.tiptap-api-CDWwj2RJ.js.map
