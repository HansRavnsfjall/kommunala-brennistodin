import { U as t } from "./tiptap-extension-api-base-Dc5dmxjn.js";
import { TextDirection as e } from "@umbraco-cms/backoffice/external/tiptap";
class r extends t {
  constructor() {
    super(...arguments), this.getTiptapExtensions = () => [
      // eslint-disable-next-line @typescript-eslint/no-deprecated
      e.configure({
        types: ["heading", "paragraph", "blockquote", "orderedList", "bulletList"]
      })
    ];
  }
}
export {
  r as default
};
//# sourceMappingURL=text-direction.tiptap-api-C3ANK0Xz.js.map
