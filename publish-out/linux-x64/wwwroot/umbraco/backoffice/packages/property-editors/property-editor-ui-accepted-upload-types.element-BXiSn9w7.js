import { UmbPropertyEditorUIMultipleTextStringElement as v } from "./property-editor-ui-multiple-text-string.element-D5OJ-Oln.js";
import { customElement as E } from "@umbraco-cms/backoffice/external/lit";
import { UmbTemporaryFileConfigRepository as _ } from "@umbraco-cms/backoffice/temporary-file";
var U = Object.getOwnPropertyDescriptor, h = (e) => {
  throw TypeError(e);
}, y = (e, t, a, n) => {
  for (var s = n > 1 ? void 0 : n ? U(t, a) : t, i = e.length - 1, d; i >= 0; i--)
    (d = e[i]) && (s = d(s) || s);
  return s;
}, m = (e, t, a) => t.has(e) || h("Cannot " + a), p = (e, t, a) => (m(e, t, "read from private field"), a ? a.call(e) : t.get(e)), c = (e, t, a) => t.has(e) ? h("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, a), w = (e, t, a) => (m(e, t, "access private method"), a), l, r, u;
let o = class extends v {
  constructor() {
    super(...arguments), c(this, r), c(this, l, new _(this));
  }
  async connectedCallback() {
    super.connectedCallback(), await p(this, l).initialized, this.observe(p(this, l).all(), (e) => {
      e && w(this, r, u).call(this, e);
    });
  }
};
l = /* @__PURE__ */ new WeakMap();
r = /* @__PURE__ */ new WeakSet();
u = function(e) {
  this.addValidator(
    "badInput",
    () => {
      let t = this.localize.term("validation_invalidExtensions");
      return e.allowedUploadedFileExtensions.length && (t += `<br>${this.localize.term("validation_allowedExtensions")} ${e.allowedUploadedFileExtensions.join(", ")}`), e.disallowedUploadedFilesExtensions.length && (t += `<br>${this.localize.term("validation_disallowedExtensions")} ${e.disallowedUploadedFilesExtensions.join(", ")}`), t;
    },
    () => {
      const t = this.value;
      return t ? !!(e.allowedUploadedFileExtensions.length && !e.allowedUploadedFileExtensions.some((a) => t.includes(a)) || e.disallowedUploadedFilesExtensions.some((a) => t.includes(a))) : !1;
    }
  );
};
o = y([
  E("umb-property-editor-ui-accepted-upload-types")
], o);
const C = o;
export {
  o as UmbPropertyEditorUIAcceptedUploadTypesElement,
  C as default
};
//# sourceMappingURL=property-editor-ui-accepted-upload-types.element-BXiSn9w7.js.map
