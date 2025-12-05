import { U as t } from "./tiptap-toolbar-element-api-base-BQtOaJBO.js";
class s extends t {
  isActive(e) {
    return e?.isActive({ textAlign: "center" }) === !0;
  }
  execute(e) {
    this.isActive(e) ? e?.chain().focus().unsetTextAlign().run() : e?.chain().focus().setTextAlign("center").run();
  }
}
export {
  s as default
};
//# sourceMappingURL=text-align-center.tiptap-toolbar-api-DTbBpK2K.js.map
