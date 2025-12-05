import { U as e } from "./tiptap-toolbar-element-api-base-BQtOaJBO.js";
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
//# sourceMappingURL=text-direction-ltr.tiptap-toolbar-api-DIh_5PSk.js.map
