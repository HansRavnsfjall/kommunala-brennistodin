import { U as i } from "./tiptap-toolbar-element-api-base-BQtOaJBO.js";
class l extends i {
  isActive(e) {
    return e?.isActive("heading", { level: 4 }) === !0;
  }
  execute(e) {
    e?.chain().focus().toggleHeading({ level: 4 }).run();
  }
}
export {
  l as default
};
//# sourceMappingURL=heading4.tiptap-toolbar-api-BZ433G24.js.map
