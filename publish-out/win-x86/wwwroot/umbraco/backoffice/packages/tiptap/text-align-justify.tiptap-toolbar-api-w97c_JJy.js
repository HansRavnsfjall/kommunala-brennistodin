import { U as e } from "./tiptap-toolbar-element-api-base-BQtOaJBO.js";
class n extends e {
  isActive(t) {
    return t?.isActive({ textAlign: "justify" }) === !0;
  }
  execute(t) {
    this.isActive(t) ? t?.chain().focus().unsetTextAlign().run() : t?.chain().focus().setTextAlign("justify").run();
  }
}
export {
  n as default
};
//# sourceMappingURL=text-align-justify.tiptap-toolbar-api-w97c_JJy.js.map
