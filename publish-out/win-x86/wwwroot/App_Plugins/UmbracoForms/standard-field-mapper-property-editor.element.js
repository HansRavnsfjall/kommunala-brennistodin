import { html as v, css as P, property as E, customElement as N } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as C } from "@umbraco-cms/backoffice/lit-element";
var U = Object.defineProperty, k = Object.getOwnPropertyDescriptor, _ = (e) => {
  throw TypeError(e);
}, y = (e, i, t, m) => {
  for (var l = m > 1 ? void 0 : m ? k(i, t) : i, f = e.length - 1, c; f >= 0; f--)
    (c = e[f]) && (l = (m ? c(i, t, l) : c(l)) || l);
  return m && l && U(i, t, l), l;
}, h = (e, i, t) => i.has(e) || _("Cannot " + t), r = (e, i, t) => (h(e, i, "read from private field"), t ? t.call(e) : i.get(e)), u = (e, i, t) => i.has(e) ? _("Cannot add the same private member more than once") : i instanceof WeakSet ? i.add(e) : i.set(e, t), b = (e, i, t, m) => (h(e, i, "write to private field"), i.set(e, t), t), s = (e, i, t) => (h(e, i, "access private method"), t), p, n, a, F, x, o, S, w, $, M, g;
const D = "forms-standard-field-mapper-property-editor";
let d = class extends C {
  constructor() {
    super(...arguments), u(this, a), u(this, p, ""), u(this, n, []);
  }
  get value() {
    return r(this, p);
  }
  set value(e) {
    const i = r(this, p);
    b(this, p, e), this.requestUpdate("value", i), s(this, a, F).call(this, e);
  }
  async connectedCallback() {
    super.connectedCallback();
  }
  render() {
    return v`<div class="umb-forms-mappings">
      <div class="umb-forms-mapping-header">
        <div class="umb-forms-mapping-field -no-margin-left">Field</div>
        <div class="umb-forms-mapping-field">Include?</div>
        <div class="umb-forms-mapping-field -no-margin-right">Key</div>
      </div>

      ${r(this, n).map(
      (e, i) => v` <div class="umb-forms-mapping">
            <div class="umb-forms-mapping-field -no-margin-left">
              <span>${s(this, a, w).call(this, e.field)}</span>
            </div>
            <div
              class="umb-forms-mapping-field"
              data-umb-standard-field-mapping-include="${e.field}"
            >
              <uui-toggle
                ?checked=${e.include}
                @change=${() => s(this, a, $).call(this, i)}
              ></uui-toggle>
            </div>
            <div
              class="umb-forms-mapping-field -no-margin-right"
              data-umb-standard-field-mapping-key-name="${e.field}"
            >
              <uui-input
                type="text"
                label="Key"
                placeholder="Key name"
                .value=${e.keyName || ""}
                @change=${(t) => s(this, a, M).call(this, t, i)}
              ></uui-input>
            </div>
          </div>`
    )}
    </div>`;
  }
};
p = /* @__PURE__ */ new WeakMap();
n = /* @__PURE__ */ new WeakMap();
a = /* @__PURE__ */ new WeakSet();
F = function(e) {
  e && e.length > 0 && (b(this, n, JSON.parse(e)), s(this, a, x).call(this)), s(this, a, o).call(this, "FormId"), s(this, a, o).call(this, "FormName"), s(this, a, o).call(this, "PageUrl"), s(this, a, o).call(this, "SubmissionDate");
};
x = function() {
  for (let e = 0; e < r(this, n).length; e++) {
    const i = r(this, n)[e];
    delete i.$$hashKey;
  }
};
o = function(e) {
  s(this, a, S).call(this, e) || r(this, n).push({
    field: e,
    include: !1
  });
};
S = function(e) {
  return r(this, n).find((i) => i.field == e) !== void 0;
};
w = function(e) {
  switch (e) {
    case "FormId":
      return "Form ID";
    case "FormName":
      return "Form name";
    case "PageUrl":
      return "Page URL";
    case "SubmissionDate":
      return "Submission date/time";
    default:
      return e;
  }
};
$ = function(e) {
  r(this, n)[e].include = !r(this, n)[e].include, s(this, a, g).call(this);
};
M = function(e, i) {
  const t = e.target.value.toString();
  t.length > 0 ? r(this, n)[i].keyName = t : r(this, n)[i].keyName = void 0, s(this, a, g).call(this);
};
g = function() {
  this.value = JSON.stringify(r(this, n)), this.dispatchEvent(new CustomEvent("property-value-change"));
};
d.styles = [
  P`
      .umb-forms-mappings {
        display: flex;
        flex-direction: column;
      }

      .umb-forms-mapping-header {
        display: flex;
        flex-direction: row;
        font-weight: bold;
      }

      .umb-forms-mapping {
        display: flex;
        flex-direction: row;
        margin-bottom: 5px;
        align-items: center;
      }

      .umb-forms-mapping-field {
        flex: 1 1 33%;
        margin: 5px;
      }

      .umb-forms-mapping-field input,
      .umb-forms-mapping-field select {
        margin-bottom: 0;
      }

      .umb-forms-mapping-field.-no-margin-left {
        margin-left: 0;
      }

      .umb-forms-mapping-remove {
        flex: 1 1 20px;
        margin: 5px;
      }

      .umb-forms-mapping-remove.-no-margin-right {
        margin-right: 0;
      }
    `
];
y([
  E({ type: String })
], d.prototype, "value", 1);
d = y([
  N(D)
], d);
const K = d;
export {
  d as FormsStandardFieldMapperPropertyUiElement,
  K as default
};
//# sourceMappingURL=standard-field-mapper-property-editor.element.js.map
