import { U as e } from "./tiptap-toolbar-element-api-base-BQtOaJBO.js";
class n extends e {
  isActive(t) {
    return t?.isActive({ textAlign: "right" }) === !0;
  }
  execute(t) {
    this.isActive(t) ? t?.chain().focus().unsetTextAlign().run() : t?.chain().focus().setTextAlign("right").run();
  }
}
export {
  n as default
};
//# sourceMappingURL=text-align-right.tiptap-toolbar-api-mPXQcwDm.js.map
