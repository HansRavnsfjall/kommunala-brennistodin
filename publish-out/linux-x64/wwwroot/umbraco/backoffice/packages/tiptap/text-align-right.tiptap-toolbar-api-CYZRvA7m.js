import { a as e } from "./base-CzBFGKJV.js";
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
//# sourceMappingURL=text-align-right.tiptap-toolbar-api-CYZRvA7m.js.map
