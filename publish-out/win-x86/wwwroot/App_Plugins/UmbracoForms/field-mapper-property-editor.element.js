import { c as E } from "./index.js";
import { when as A, html as _, css as P, property as W, customElement as V } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as U } from "@umbraco-cms/backoffice/lit-element";
var N = Object.defineProperty, z = Object.getOwnPropertyDescriptor, y = (e) => {
  throw TypeError(e);
}, S = (e, i, t, p) => {
  for (var r = p > 1 ? void 0 : p ? z(i, t) : i, v = e.length - 1, g; v >= 0; v--)
    (g = e[v]) && (r = (p ? g(i, t, r) : g(r)) || r);
  return p && r && N(i, t, r), r;
}, b = (e, i, t) => i.has(e) || y("Cannot " + t), s = (e, i, t) => (b(e, i, "read from private field"), t ? t.call(e) : i.get(e)), c = (e, i, t) => i.has(e) ? y("Cannot add the same private member more than once") : i instanceof WeakSet ? i.add(e) : i.set(e, t), d = (e, i, t, p) => (b(e, i, "write to private field"), i.set(e, t), t), l = (e, i, t) => (b(e, i, "access private method"), t), h, u, n, f, a, C, w, x, F, M, O, $, k, o;
const D = "forms-field-mapper-property-editor";
let m = class extends U {
  constructor() {
    super(), c(this, a), c(this, h), c(this, u, ""), c(this, n, []), c(this, f, []), this.consumeContext(E, (e) => {
      d(this, h, e), l(this, a, w).call(this);
    });
  }
  get value() {
    return s(this, u);
  }
  set value(e) {
    const i = s(this, u);
    d(this, u, e), this.requestUpdate("value", i), l(this, a, C).call(this, e);
  }
  async connectedCallback() {
    super.connectedCallback();
  }
  render() {
    return _`
      ${A(
      s(this, n).length > 0,
      () => _` <div class="umb-forms-mappings">
            <div class="umb-forms-mapping-header">
              <div class="umb-forms-mapping-field -no-margin-left">Alias</div>
              <div class="umb-forms-mapping-field">Form value</div>
              <div class="umb-forms-mapping-field">Static value</div>
              <div class="umb-forms-mapping-remove -no-margin-right"></div>
            </div>

            ${s(this, n).map(
        (e, i) => _`
                <div class="umb-forms-mapping">
                  <div class="umb-forms-mapping-field -no-margin-left">
                    <uui-input
                      type="text"
                      label="Alias"
                      placeholder="Alias"
                      .value=${e.alias}
                      @change=${(t) => l(this, a, F).call(this, t, i)}
                    ></uui-input>
                  </div>

                  <div class="umb-forms-mapping-field">
                    <uui-select
                      .options=${l(this, a, x).call(this, e.value)}
                      placeholder="Map a field"
                      @change=${(t) => l(this, a, M).call(this, t, i)}
                    >
                    </uui-select>
                  </div>

                  <div class="umb-forms-mapping-field">
                    <uui-input
                      type="text"
                      label="Static value"
                      placeholder="Static value"
                      .value=${e.staticValue}
                      @change=${(t) => l(this, a, O).call(this, t, i)}
                    ></uui-input>
                  </div>

                  <div class="umb-forms-mapping-remove -no-margin-right">
                    <uui-button
                      label=${this.localize.term("general_delete")}
                      look="secondary"
                      color="default"
                      @click=${() => l(this, a, $).call(this, i)}
                    >
                      <uui-icon name="icon-delete"></uui-icon>
                    </uui-button>
                  </div>
                </div>
              `
      )}
          </div>`
    )}

      <uui-button
        label="add"
        look="secondary"
        color="default"
        @click=${l(this, a, k)}
      >
        <uui-icon name="icon-add"></uui-icon>
      </uui-button>
    `;
  }
};
h = /* @__PURE__ */ new WeakMap();
u = /* @__PURE__ */ new WeakMap();
n = /* @__PURE__ */ new WeakMap();
f = /* @__PURE__ */ new WeakMap();
a = /* @__PURE__ */ new WeakSet();
C = function(e) {
  e && e.length > 0 && d(this, n, JSON.parse(e));
};
w = function() {
  const i = s(this, h).getAllFields().map((t) => ({ name: t.caption, value: t.id }));
  i.unshift({ name: "Map a field", value: "" }), d(this, f, i);
};
x = function(e) {
  return s(this, f).map((i) => ({
    ...i,
    selected: i.value === e ? !0 : void 0
  }));
};
F = function(e, i) {
  const t = e.target.value.toString();
  s(this, n)[i].alias = t, l(this, a, o).call(this);
};
M = function(e, i) {
  const t = e.target.value.toString();
  s(this, n)[i].value = t, l(this, a, o).call(this);
};
O = function(e, i) {
  const t = e.target.value.toString();
  s(this, n)[i].staticValue = t, l(this, a, o).call(this);
};
$ = function(e) {
  s(this, n).splice(e, 1), l(this, a, o).call(this);
};
k = function() {
  s(this, n).push({ alias: "", value: "", staticValue: "" }), l(this, a, o).call(this);
};
o = function() {
  this.value = JSON.stringify(s(this, n)), this.dispatchEvent(new CustomEvent("property-value-change"));
};
m.styles = [
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
S([
  W({ type: String })
], m.prototype, "value", 1);
m = S([
  V(D)
], m);
const q = m;
export {
  m as FormsFieldMapperPropertyUiElement,
  q as default
};
//# sourceMappingURL=field-mapper-property-editor.element.js.map
