import { U as s } from "./tiptap-toolbar-element-api-base-BQtOaJBO.js";
class o extends s {
  isActive(e, t) {
    return e?.getAttributes("span")?.style?.includes(`font-size: ${t?.data};`) === !0;
  }
  execute(e, t) {
    t?.data && e?.chain().focus().toggleSpanStyle(`font-size: ${t.data};`).run();
  }
}
export {
  o as default
};
//# sourceMappingURL=font-size.tiptap-toolbar-api-CB5vT-QZ.js.map
