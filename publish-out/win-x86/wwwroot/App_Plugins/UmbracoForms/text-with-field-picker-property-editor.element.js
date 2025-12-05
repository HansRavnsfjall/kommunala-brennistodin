import { c as W } from "./index.js";
import { html as E, css as R, state as A, property as I, customElement as U } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as D } from "@umbraco-cms/backoffice/lit-element";
var b = Object.defineProperty, K = Object.getOwnPropertyDescriptor, k = (t) => {
  throw TypeError(t);
}, M = (t, e, l, h) => {
  for (var n = h > 1 ? void 0 : h ? K(e, l) : e, g = t.length - 1, m; g >= 0; g--)
    (m = t[g]) && (n = (h ? m(e, l, n) : m(n)) || n);
  return h && n && b(e, l, n), n;
}, w = (t, e, l) => e.has(t) || k("Cannot " + l), r = (t, e, l) => (w(t, e, "read from private field"), l ? l.call(t) : e.get(t)), d = (t, e, l) => e.has(t) ? k("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, l), o = (t, e, l, h) => (w(t, e, "write to private field"), e.set(t, l), l), s = (t, e, l) => (w(t, e, "access private method"), l), u, v, a, i, C, x, P, T, y, $, _, p, O, f;
const L = "text-with-field-picker-property-editor", F = "FREE_TEXT", S = "FIELD_PICKER";
let c = class extends D {
  constructor() {
    super(), d(this, i), d(this, u), d(this, v, []), this.inputMode = "", d(this, a, ""), this.consumeContext(W, (t) => {
      o(this, u, t), s(this, i, C).call(this);
    });
  }
  get value() {
    return this.inputMode = s(this, i, p).call(this, r(this, a)) ? S : F, r(this, a);
  }
  set value(t) {
    const e = r(this, a);
    o(this, a, t), this.requestUpdate("value", e);
  }
  render() {
    return E`
      <uui-button-group>
        <uui-button
          label="Free text"
          look=${s(this, i, f).call(this) ? "primary" : "secondary"}
          color="default"
          @click=${() => s(this, i, x).call(this, F)}
        ></uui-button>
        <uui-button
          label="Select field"
          look=${s(this, i, f).call(this) ? "secondary" : "primary"}
          color="default"
          @click=${() => s(this, i, x).call(this, S)}
        ></uui-button>
      </uui-button-group>
      ${s(this, i, f).call(this) ? E`
            <div class="text-with-field-picker-margin-div">
              <uui-input
                type="text"
                .value=${r(this, a)}
                @change=${(t) => s(this, i, P).call(this, t)}
              >
              </uui-input>
            </div>
          ` : E`
            <div class="text-with-field-picker-margin-div">
              <uui-select
                .options=${r(this, v).map((t) => ({
      name: t.caption,
      value: t.alias,
      selected: t.alias === s(this, i, _).call(this, r(this, a))
    })) ?? []}
                placeholder="Select a field"
                @change=${(t) => s(this, i, T).call(this, t)}
              >
              </uui-select>
            </div>
          `}
    `;
  }
};
u = /* @__PURE__ */ new WeakMap();
v = /* @__PURE__ */ new WeakMap();
a = /* @__PURE__ */ new WeakMap();
i = /* @__PURE__ */ new WeakSet();
C = function() {
  o(this, v, r(this, u).getAllFields());
};
x = function(t) {
  this.inputMode = t;
};
P = function(t) {
  const e = t.target.value.toString();
  s(this, i, O).call(this, e) ? o(this, a, s(this, i, _).call(this, e)) : o(this, a, e), s(this, i, y).call(this);
};
T = function(t) {
  o(this, a, s(this, i, $).call(this, t.target.value.toString())), s(this, i, y).call(this);
};
y = function() {
  this.dispatchEvent(new CustomEvent("property-value-change"));
};
$ = function(t) {
  return t ? s(this, i, p).call(this, t) ? t : `{${t}}` : "";
};
_ = function(t) {
  return s(this, i, p).call(this, t) ? t.substring(1, r(this, a).length - 1) : t;
};
p = function(t) {
  const e = new RegExp(/^{\w+}$/gi);
  return !!t && e.test(t);
};
O = function(t) {
  return s(this, i, p).call(this, t) ? r(this, u).getAllFields().map(
    (l) => l.alias
  ).includes(s(this, i, _).call(this, t)) : !1;
};
f = function() {
  return this.inputMode === F;
};
c.styles = [
  R`
      .text-with-field-picker-margin-div {
        margin-top: var(--uui-size-3);
      }
    `
];
M([
  A()
], c.prototype, "inputMode", 2);
M([
  I()
], c.prototype, "value", 1);
c = M([
  U(L)
], c);
const N = c;
export {
  c as FormsTextWithFieldPickerPropertyUiElement,
  N as default
};
//# sourceMappingURL=text-with-field-picker-property-editor.element.js.map
