import { when as _, html as h, property as F, state as n, customElement as $ } from "@umbraco-cms/backoffice/external/lit";
import { splitStringToArray as T } from "@umbraco-cms/backoffice/utils";
import { UmbLitElement as E } from "@umbraco-cms/backoffice/lit-element";
var g = Object.defineProperty, C = Object.getOwnPropertyDescriptor, y = (e) => {
  throw TypeError(e);
}, o = (e, t, r, s) => {
  for (var a = s > 1 ? void 0 : s ? C(t, r) : t, u = e.length - 1, d; u >= 0; u--)
    (d = e[u]) && (a = (s ? d(t, r, a) : d(a)) || a);
  return s && a && g(t, r, a), a;
}, p = (e, t, r) => t.has(e) || y("Cannot " + r), v = (e, t, r) => (p(e, t, "read from private field"), r ? r.call(e) : t.get(e)), P = (e, t, r) => t.has(e) ? y("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), I = (e, t, r, s) => (p(e, t, "write to private field"), t.set(e, r), r), c = (e, t, r) => (p(e, t, "access private method"), r), i, m, f, w, k;
const b = "forms-form-details-property-editor";
let l = class extends E {
  constructor() {
    super(...arguments), P(this, m), P(this, i, {
      formId: null,
      theme: null,
      redirectToPageId: null
    }), this._includeThemePicker = !1, this._includeRedirectPicker = !1, this._allowedForms = [], this._allowedFolders = [];
  }
  set value(e) {
    I(this, i, e ? structuredClone(e) : v(this, i));
  }
  get value() {
    return v(this, i);
  }
  set config(e) {
    this._includeThemePicker = (e == null ? void 0 : e.getValueByAlias("includeThemePicker")) || !1, this._includeRedirectPicker = (e == null ? void 0 : e.getValueByAlias("includeRedirectPicker")) || !1, this._allowedFolders = (e == null ? void 0 : e.getValueByAlias("allowedFolders")) || [], this._allowedForms = (e == null ? void 0 : e.getValueByAlias("allowedForms")) || [];
  }
  render() {
    var e;
    return h`
      <umb-property-layout
        alias="form"
        .label=${this.localize.term("formPicker_form")}
      >
        <forms-input-form
          id="form"
          .selection=${(e = this.value) != null && e.formId ? T(this.value.formId) : []}
          .multiple=${!1}
          .allowedFolders=${this._allowedFolders}
          .allowedForms=${this._allowedForms}
          @change=${c(this, m, f)}
          slot="editor"
        ></forms-input-form>
      </umb-property-layout>

      ${_(
      this._includeThemePicker,
      () => {
        var t;
        return h` <umb-property-layout
            alias="theme"
            .label=${this.localize.term("formPicker_theme")}
          >
            <forms-input-theme
              @change=${c(this, m, w)}
              .value=${((t = this.value) == null ? void 0 : t.theme) || ""}
              slot="editor"
            ></forms-input-theme>
          </umb-property-layout>`;
      }
    )}
      ${_(
      this._includeRedirectPicker,
      () => {
        var t;
        return h`
          <umb-property-layout
            alias="theme"
            .label=${this.localize.term("formPicker_redirectToPage")}
            .description=${this.localize.term(
          "formPicker_redirectToPageDescription"
        )}
          >
            <umb-input-document
              slot="editor"
              .value=${((t = this.value) == null ? void 0 : t.redirectToPageId) || ""}
              max="1"
              @change=${c(this, m, k)}
            ></umb-input-document>
          </umb-property-layout>
        `;
      }
    )}
    `;
  }
};
i = /* @__PURE__ */ new WeakMap();
m = /* @__PURE__ */ new WeakSet();
f = function(e) {
  const t = e.target;
  this.value.formId = t.selection.length > 0 ? t.selection[0] : null, this.dispatchEvent(new CustomEvent("property-value-change"));
};
w = function(e) {
  const t = e.target;
  this.value.theme = t.value, this.dispatchEvent(new CustomEvent("property-value-change"));
};
k = function(e) {
  const t = e.target.value;
  this.value.redirectToPageId = t !== "" ? t : null, this.dispatchEvent(new CustomEvent("property-value-change"));
};
o([
  F({ type: Object })
], l.prototype, "value", 1);
o([
  n()
], l.prototype, "_includeThemePicker", 2);
o([
  n()
], l.prototype, "_includeRedirectPicker", 2);
o([
  n()
], l.prototype, "_allowedForms", 2);
o([
  n()
], l.prototype, "_allowedFolders", 2);
l = o([
  $(b)
], l);
const O = l;
export {
  l as FormsFormDetailsPickerPropertyPickerElement,
  O as default
};
//# sourceMappingURL=form-details-picker-property-editor.element.js.map
