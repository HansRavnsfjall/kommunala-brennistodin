import { U as i } from "./tiptap-toolbar-element-api-base-BQtOaJBO.js";
class l extends i {
  isActive(e) {
    return e?.isActive("heading", { level: 2 }) === !0;
  }
  execute(e) {
    e?.chain().focus().toggleHeading({ level: 2 }).run();
  }
}
export {
  l as default
};
//# sourceMappingURL=heading2.tiptap-toolbar-api-BdWrEJNw.js.map
