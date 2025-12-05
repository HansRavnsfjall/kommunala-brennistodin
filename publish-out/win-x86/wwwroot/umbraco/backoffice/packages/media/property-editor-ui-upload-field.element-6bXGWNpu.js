import { html as h, state as u, customElement as f } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as _ } from "@umbraco-cms/backoffice/lit-element";
import { UmbChangeEvent as v } from "@umbraco-cms/backoffice/event";
import { UmbFormControlMixin as E } from "@umbraco-cms/backoffice/validation";
import "./input-upload-field.element-DEgpG3Zz.js";
var c = Object.defineProperty, U = Object.getOwnPropertyDescriptor, p = (t) => {
  throw TypeError(t);
}, d = (t, e, r, o) => {
  for (var i = o > 1 ? void 0 : o ? U(e, r) : e, n = t.length - 1, a; n >= 0; n--)
    (a = t[n]) && (i = (o ? a(e, r, i) : a(i)) || i);
  return o && i && c(e, r, i), i;
}, y = (t, e, r) => e.has(t) || p("Cannot " + r), b = (t, e, r) => e.has(t) ? p("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), C = (t, e, r) => (y(t, e, "access private method"), r), l, m;
let s = class extends E(_) {
  constructor() {
    super(...arguments), b(this, l);
  }
  set config(t) {
    t && (this._fileExtensions = t.getValueByAlias("fileExtensions"), this._fileExtensions?.length && (this._fileExtensions = this._fileExtensions.map(
      (e) => e.startsWith(".") || e.includes("/") ? e : `.${e}`
    )));
  }
  firstUpdated() {
    this.addFormControlElement(this.shadowRoot.querySelector("umb-input-upload-field"));
  }
  render() {
    return h`
			<umb-input-upload-field
				.allowedFileExtensions=${this._fileExtensions}
				.value=${this.value}
				@change=${C(this, l, m)}>
			</umb-input-upload-field>
		`;
  }
};
l = /* @__PURE__ */ new WeakSet();
m = function(t) {
  this.value = t.target.value, this.dispatchEvent(new v());
};
d([
  u()
], s.prototype, "_fileExtensions", 2);
s = d([
  f("umb-property-editor-ui-upload-field")
], s);
const $ = s;
export {
  s as UmbPropertyEditorUIUploadFieldElement,
  $ as default
};
//# sourceMappingURL=property-editor-ui-upload-field.element-6bXGWNpu.js.map
