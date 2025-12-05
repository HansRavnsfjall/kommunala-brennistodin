import { U as i } from "./tiptap-toolbar-element-api-base-BQtOaJBO.js";
class l extends i {
  isActive(e) {
    return e?.isActive("heading", { level: 3 }) === !0;
  }
  execute(e) {
    e?.chain().focus().toggleHeading({ level: 3 }).run();
  }
}
export {
  l as default
};
//# sourceMappingURL=heading3.tiptap-toolbar-api-D5gieFbU.js.map
