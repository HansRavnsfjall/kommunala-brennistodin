import { a as e } from "./base-CzBFGKJV.js";
class r extends e {
  constructor() {
    super(...arguments), this.isActive = (t) => t?.isActive({ textDirection: "ltr" }) === !0 || t?.isActive({ textDirection: "auto" }) === !0;
  }
  execute(t) {
    this.isActive(t) ? t?.chain().focus().unsetTextDirection().run() : t?.chain().focus().setTextDirection("ltr").run();
  }
}
export {
  r as default
};
//# sourceMappingURL=text-direction-ltr.tiptap-toolbar-api-DoU-ui8V.js.map
