import { U as a } from "./tiptap-toolbar-element-api-base-BQtOaJBO.js";
class l extends a {
  isActive(e, t) {
    return e?.getAttributes("span")?.style?.includes(`font-family: ${t?.data};`) === !0;
  }
  execute(e, t) {
    t?.data && e?.chain().focus().toggleSpanStyle(`font-family: ${t.data};`).run();
  }
}
export {
  l as default
};
//# sourceMappingURL=font-family.tiptap-toolbar-api-DvSN5-KQ.js.map
