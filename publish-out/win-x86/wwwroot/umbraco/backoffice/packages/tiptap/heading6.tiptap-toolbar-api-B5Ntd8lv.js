import { U as i } from "./tiptap-toolbar-element-api-base-BQtOaJBO.js";
class l extends i {
  isActive(e) {
    return e?.isActive("heading", { level: 6 }) === !0;
  }
  execute(e) {
    e?.chain().focus().toggleHeading({ level: 6 }).run();
  }
}
export {
  l as default
};
//# sourceMappingURL=heading6.tiptap-toolbar-api-B5Ntd8lv.js.map
