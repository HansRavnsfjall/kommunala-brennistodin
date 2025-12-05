import { U as i } from "./tiptap-toolbar-element-api-base-BQtOaJBO.js";
class l extends i {
  isActive(e) {
    return e?.isActive("heading", { level: 1 }) === !0;
  }
  execute(e) {
    e?.chain().focus().toggleHeading({ level: 1 }).run();
  }
}
export {
  l as default
};
//# sourceMappingURL=heading1.tiptap-toolbar-api-D1JDDJDH.js.map
