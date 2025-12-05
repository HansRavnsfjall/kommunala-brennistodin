import { nothing as v, html as h, css as P, property as y, state as g, customElement as E } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as D } from "@umbraco-cms/backoffice/lit-element";
import { UmbChangeEvent as u } from "@umbraco-cms/backoffice/event";
var $ = Object.defineProperty, w = Object.getOwnPropertyDescriptor, d = (t) => {
  throw TypeError(t);
}, l = (t, e, a, n) => {
  for (var r = n > 1 ? void 0 : n ? w(e, a) : e, o = t.length - 1, p; o >= 0; o--)
    (p = t[o]) && (r = (n ? p(e, a, r) : p(r)) || r);
  return n && r && $(e, a, r), r;
}, k = (t, e, a) => e.has(t) || d("Cannot " + a), C = (t, e, a) => e.has(t) ? d("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, a), c = (t, e, a) => (k(t, e, "access private method"), a), s, m, _, f;
const R = "forms-date-picker-relative-property-editor";
let i = class extends D {
  constructor() {
    super(...arguments), C(this, s), this.readonly = !1, this.value = "", this._type = "None";
  }
  async connectedCallback() {
    super.connectedCallback(), this.value !== "" && (this._type = isNaN(this.value) ? "Date" : "Relative");
  }
  render() {
    return h`
      <uui-select
        .options=${[
      {
        name: this.localize.term("formPropertyEditors_datePickerTypeNone"),
        value: "None",
        selected: this._type === "None"
      },
      {
        name: this.localize.term(
          "formPropertyEditors_datePickerTypeRelative"
        ),
        value: "Relative",
        selected: this._type === "Relative"
      },
      {
        name: this.localize.term("formPropertyEditors_datePickerTypeDate"),
        value: "Date",
        selected: this._type === "Date"
      }
    ]}
        @change=${c(this, s, m)}
        ?readonly=${this.readonly}
      >
      </uui-select>
      ${this._type === "Relative" ? h`
            <uui-input
              type="number"
              .value=${this.value}
              @change=${c(this, s, _)}
              ?readonly=${this.readonly}
            >
            </uui-input>
          ` : v}
      ${this._type === "Date" ? h` <umb-input-date
            label=${this.localize.term("placeholders_enterdate")}
            .value=${this.value}
            .type="date"
            @change=${c(this, s, f)}
            ?readonly=${this.readonly}
          >
          </umb-input-date>` : v}
    `;
  }
};
s = /* @__PURE__ */ new WeakSet();
m = function(t) {
  const e = t.target.value;
  if (e !== this._type) {
    switch (this._type = e, this._type) {
      case "Relative":
        this.value = "0";
        break;
      case "Date":
        this.value = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
        break;
      default:
        this.value = "";
        break;
    }
    this.dispatchEvent(new u());
  }
};
_ = function(t) {
  const e = t.target.value;
  e !== this.value && (this.value = e, this.dispatchEvent(new u()));
};
f = function(t) {
  const e = t.target.value.toString();
  e !== this.value && (this.value = e, this.dispatchEvent(new u()));
};
i.styles = [
  P`
      uui-select {
        vertical-align: top;
      }
    `
];
l([
  y({ type: Boolean, reflect: !0 })
], i.prototype, "readonly", 2);
l([
  y()
], i.prototype, "value", 2);
l([
  g()
], i.prototype, "_type", 2);
i = l([
  E(R)
], i);
const O = i;
export {
  i as FormsDatePickerRelativePropertyUiElement,
  O as default
};
//# sourceMappingURL=date-picker-relative-property-editor.element.js.map
