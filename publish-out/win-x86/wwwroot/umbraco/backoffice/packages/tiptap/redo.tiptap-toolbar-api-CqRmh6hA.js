import { U as s } from "./tiptap-toolbar-element-api-base-BQtOaJBO.js";
class o extends s {
  constructor() {
    super(...arguments), this.isActive = (e) => e?.can().redo() === !0, this.isDisabled = (e) => !this.isActive(e);
  }
  execute(e) {
    e?.chain().focus().redo().run();
  }
}
export {
  o as default
};
//# sourceMappingURL=redo.tiptap-toolbar-api-CqRmh6hA.js.map
