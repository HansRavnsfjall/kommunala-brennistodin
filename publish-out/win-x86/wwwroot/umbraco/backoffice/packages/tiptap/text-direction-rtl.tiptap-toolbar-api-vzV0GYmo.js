import { a as e } from "./base-CzBFGKJV.js";
class r extends e {
  constructor() {
    super(...arguments), this.isActive = (t) => t?.isActive({ textDirection: "rtl" }) === !0;
  }
  execute(t) {
    this.isActive(t) ? t?.chain().focus().unsetTextDirection().run() : t?.chain().focus().setTextDirection("rtl").run();
  }
}
export {
  r as default
};
//# sourceMappingURL=text-direction-rtl.tiptap-toolbar-api-vzV0GYmo.js.map
