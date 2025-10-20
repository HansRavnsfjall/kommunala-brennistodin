import { a as t } from "./base-CzBFGKJV.js";
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
//# sourceMappingURL=text-align-left.tiptap-toolbar-api-DCvsL4lu.js.map
