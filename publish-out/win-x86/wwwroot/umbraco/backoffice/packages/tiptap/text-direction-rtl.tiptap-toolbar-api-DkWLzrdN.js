import { U as e } from "./tiptap-toolbar-element-api-base-BQtOaJBO.js";
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
//# sourceMappingURL=text-direction-rtl.tiptap-toolbar-api-DkWLzrdN.js.map
