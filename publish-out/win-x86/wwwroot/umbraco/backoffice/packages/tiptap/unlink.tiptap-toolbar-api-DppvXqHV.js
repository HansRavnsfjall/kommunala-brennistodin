import { U as s } from "./tiptap-toolbar-element-api-base-BQtOaJBO.js";
class n extends s {
  constructor() {
    super(...arguments), this.isActive = (i) => i?.isActive("umbLink") === !0, this.isDisabled = (i) => !this.isActive(i);
  }
  execute(i) {
    i?.chain().focus().unsetUmbLink().run();
  }
}
export {
  n as default
};
//# sourceMappingURL=unlink.tiptap-toolbar-api-DppvXqHV.js.map
