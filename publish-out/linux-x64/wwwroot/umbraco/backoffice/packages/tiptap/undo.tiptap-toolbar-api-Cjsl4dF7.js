import { a as t } from "./base-CzBFGKJV.js";
class a extends t {
  constructor() {
    super(...arguments), this.isActive = (s) => s?.can().undo() === !0, this.isDisabled = (s) => !this.isActive(s);
  }
  execute(s) {
    s?.chain().focus().undo().run();
  }
}
export {
  a as default
};
//# sourceMappingURL=undo.tiptap-toolbar-api-Cjsl4dF7.js.map
