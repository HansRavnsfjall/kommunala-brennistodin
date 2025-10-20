import { styleMap as _, ifDefined as p, html as c, css as v, property as n, state as m, customElement as x } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as f } from "@umbraco-cms/backoffice/lit-element";
import { UmbFormControlMixin as g, UMB_VALIDATION_EMPTY_LOCALIZATION_KEY as w } from "@umbraco-cms/backoffice/validation";
import { UmbTextStyles as E } from "@umbraco-cms/backoffice/style";
import { UmbChangeEvent as $ } from "@umbraco-cms/backoffice/event";
var C = Object.defineProperty, U = Object.getOwnPropertyDescriptor, d = (e) => {
  throw TypeError(e);
}, s = (e, t, r, i) => {
  for (var o = i > 1 ? void 0 : i ? U(t, r) : t, h = e.length - 1, u; h >= 0; h--)
    (u = e[h]) && (o = (i ? u(t, r, o) : u(o)) || o);
  return i && o && C(t, r, o), o;
}, b = (e, t, r) => t.has(e) || d("Cannot " + r), A = (e, t, r) => t.has(e) ? d("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), M = (e, t, r) => (b(e, t, "access private method"), r), l, y;
let a = class extends g(f, void 0) {
  constructor() {
    super(...arguments), A(this, l), this.readonly = !1, this.mandatoryMessage = w, this._css = {};
  }
  set config(e) {
    this._maxChars = Number(e?.getValueByAlias("maxChars")) || void 0, this._rows = Number(e?.getValueByAlias("rows")) || void 0;
    const t = Number(e?.getValueByAlias("minHeight")) || void 0, r = Number(e?.getValueByAlias("maxHeight")) || void 0;
    this._css = {
      "--uui-textarea-min-height": t ? `${t}px` : "reset",
      "--uui-textarea-max-height": r ? `${r}px` : "33vh"
    };
  }
  firstUpdated() {
    this.addFormControlElement(this.shadowRoot.querySelector("uui-textarea"));
  }
  focus() {
    return this.shadowRoot?.querySelector("uui-textarea")?.focus();
  }
  render() {
    return c`
			<uui-textarea
				.label=${this.localize.term("general_fieldFor", [this.name])}
				style=${_(this._css)}
				.autoHeight=${!this._rows}
				maxlength=${p(this._maxChars)}
				rows=${p(this._rows)}
				.value=${this.value ?? ""}
				@input=${M(this, l, y)}
				?required=${this.mandatory}
				.requiredMessage=${this.mandatoryMessage}
				?readonly=${this.readonly}></uui-textarea>
		`;
  }
};
l = /* @__PURE__ */ new WeakSet();
y = function(e) {
  const t = e.target.value;
  t !== this.value && (this.value = t, this.dispatchEvent(new $()));
};
a.styles = [
  E,
  v`
			uui-textarea {
				width: 100%;
			}
		`
];
s([
  n({ type: Boolean, reflect: !0 })
], a.prototype, "readonly", 2);
s([
  n({ type: Boolean })
], a.prototype, "mandatory", 2);
s([
  n({ type: String })
], a.prototype, "mandatoryMessage", 2);
s([
  n({ type: String })
], a.prototype, "name", 2);
s([
  m()
], a.prototype, "_maxChars", 2);
s([
  m()
], a.prototype, "_rows", 2);
s([
  m()
], a.prototype, "_css", 2);
a = s([
  x("umb-property-editor-ui-textarea")
], a);
const S = a;
export {
  a as UmbPropertyEditorUITextareaElement,
  S as default
};
//# sourceMappingURL=property-editor-ui-textarea.element-6dUGfO7d.js.map
