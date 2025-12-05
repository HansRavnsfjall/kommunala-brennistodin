import { a as e } from "./base-CzBFGKJV.js";
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
//# sourceMappingURL=text-align-justify.tiptap-toolbar-api-D9Ew_Ahc.js.map
