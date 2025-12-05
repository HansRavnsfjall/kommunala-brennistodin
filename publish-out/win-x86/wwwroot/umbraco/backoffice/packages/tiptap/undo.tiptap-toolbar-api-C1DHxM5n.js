import { U as t } from "./tiptap-toolbar-element-api-base-BQtOaJBO.js";
class o extends t {
  constructor() {
    super(...arguments), this.isActive = (s) => s?.can().undo() === !0, this.isDisabled = (s) => !this.isActive(s);
  }
  execute(s) {
    s?.chain().focus().undo().run();
  }
}
export {
  o as default
};
//# sourceMappingURL=undo.tiptap-toolbar-api-C1DHxM5n.js.map
