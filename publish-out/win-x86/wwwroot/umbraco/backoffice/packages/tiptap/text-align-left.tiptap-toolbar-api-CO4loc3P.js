import { U as t } from "./tiptap-toolbar-element-api-base-BQtOaJBO.js";
class n extends t {
  isActive(e) {
    return e?.isActive({ textAlign: "left" }) === !0;
  }
  execute(e) {
    this.isActive(e) ? e?.chain().focus().unsetTextAlign().run() : e?.chain().focus().setTextAlign("left").run();
  }
}
export {
  n as default
};
//# sourceMappingURL=text-align-left.tiptap-toolbar-api-CO4loc3P.js.map
