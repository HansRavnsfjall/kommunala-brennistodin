import { a } from "./base-CzBFGKJV.js";
class l extends a {
  isActive(e) {
    return e?.isActive("heading", { level: 2 }) === !0;
  }
  execute(e) {
    e?.chain().focus().toggleHeading({ level: 2 }).run();
  }
}
export {
  l as default
};
//# sourceMappingURL=heading2.tiptap-toolbar-api-BudDmNQW.js.map
