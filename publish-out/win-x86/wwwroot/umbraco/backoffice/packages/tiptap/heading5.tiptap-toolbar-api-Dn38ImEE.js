import { U as i } from "./tiptap-toolbar-element-api-base-BQtOaJBO.js";
class l extends i {
  isActive(e) {
    return e?.isActive("heading", { level: 5 }) === !0;
  }
  execute(e) {
    e?.chain().focus().toggleHeading({ level: 5 }).run();
  }
}
export {
  l as default
};
//# sourceMappingURL=heading5.tiptap-toolbar-api-Dn38ImEE.js.map
