import { c as R, i as w } from "./index.js";
import { when as z, html as y, css as q, property as J, customElement as K } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as B } from "@umbraco-cms/backoffice/lit-element";
import { tryExecute as x } from "@umbraco-cms/backoffice/resources";
var G = Object.defineProperty, L = Object.getOwnPropertyDescriptor, P = (e) => {
  throw TypeError(e);
}, C = (e, t, s, p) => {
  for (var o = p > 1 ? void 0 : p ? L(t, s) : t, _ = e.length - 1, g; _ >= 0; _--)
    (g = e[_]) && (o = (p ? g(t, s, o) : g(o)) || o);
  return p && o && G(t, s, o), o;
}, b = (e, t, s) => t.has(e) || P("Cannot " + s), a = (e, t, s) => (b(e, t, "read from private field"), s ? s.call(e) : t.get(e)), c = (e, t, s) => t.has(e) ? P("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, s), u = (e, t, s, p) => (b(e, t, "write to private field"), t.set(e, s), s), l = (e, t, s) => (b(e, t, "access private method"), s), f, d, n, v, m, i, F, M, $, O, E, V, D, k, T, S, W, N, U, A, r;
const X = "forms-document-mapper-property-editor";
let h = class extends B {
  constructor() {
    super(), c(this, i), c(this, f), c(this, d, ""), c(this, n, l(this, i, F).call(this)), c(this, v, []), c(this, m, []), this.consumeContext(R, (e) => {
      u(this, f, e), l(this, i, O).call(this), l(this, i, V).call(this);
    });
  }
  get value() {
    return a(this, d);
  }
  set value(e) {
    const t = a(this, d);
    u(this, d, e), this.requestUpdate("value", t), l(this, i, M).call(this, e);
  }
  async connectedCallback() {
    super.connectedCallback();
  }
  render() {
    return y` <div>
      <uui-select
        .options=${l(this, i, D).call(this)}
        placeholder="Choose type"
        @change=${l(this, i, k)}
      >
      </uui-select>

      ${z(
      a(this, n).doctype.length > 0,
      () => y`
          <div class="umb-forms__save-as-node">
            <div class="umb-forms__save-as-node__head">
              <div class="umb-forms__save-as-node-field">
                <strong><small>Property</small></strong>
              </div>
              <div class="umb-forms__save-as-node-field">
                <strong><small>Field value</small></strong>
              </div>
              <div class="umb-forms__save-as-node-field">
                <strong><small>Static value</small></strong>
              </div>
            </div>

            <div class="umb-forms__save-as-node-group">
              <div class="umb-forms__save-as-node-field">
                <small>Node Name</small>
              </div>

              <div class="umb-forms__save-as-node-field">
                <uui-select
                  .options=${l(this, i, S).call(this, a(this, n).nameField)}
                  placeholder="Select form field"
                  @change=${l(this, i, W)}
                >
                </uui-select>
              </div>

              <div class="umb-forms__save-as-node-field">
                <uui-input
                  type="text"
                  label="Static value"
                  placeholder="Static value"
                  .value=${a(this, n).nameStaticValue || ""}
                  @change=${l(this, i, N)}
                ></uui-input>
              </div>
            </div>

            ${a(this, n).properties.map((e, t) => y` <div class="umb-forms__save-as-node-group">
                <div class="umb-forms__save-as-node-field">
                  <small>${e.value}</small>
                </div>

                <div class="umb-forms__save-as-node-field">
                  <uui-select
                    .options=${l(this, i, S).call(this, e.field)}
                    placeholder="Map a field"
                    @change=${(s) => l(this, i, U).call(this, s, t)}
                  >
                  </uui-select>
                </div>

                <div class="umb-forms__save-as-node-field">
                  <uui-input
                    type="text"
                    label="Static value"
                    placeholder="Static value"
                    .value=${e.staticValue}
                    @change=${(s) => l(this, i, A).call(this, s, t)}
                  >
                    ></uui-input
                  >
                </div>
              </div>`)}
          </div>
        `
    )}
    </div>`;
  }
};
f = /* @__PURE__ */ new WeakMap();
d = /* @__PURE__ */ new WeakMap();
n = /* @__PURE__ */ new WeakMap();
v = /* @__PURE__ */ new WeakMap();
m = /* @__PURE__ */ new WeakMap();
i = /* @__PURE__ */ new WeakSet();
F = function() {
  return {
    doctype: "",
    nameField: "",
    nameStaticValue: "",
    properties: []
  };
};
M = function(e) {
  e && e.length > 0 && (u(this, n, JSON.parse(e)), l(this, i, $).call(this));
};
$ = function() {
  for (let e = 0; e < a(this, n).properties.length; e++) {
    const t = a(this, n).properties[e];
    delete t.$$hashKey;
  }
};
O = async function() {
  const { data: e } = await x(
    this,
    w.getPickerDocumentType()
  );
  e && (u(this, v, e), await l(this, i, E).call(this), this.requestUpdate());
};
E = async function() {
  if (a(this, n).doctype.length === 0) return;
  const e = {
    doctypeAlias: a(this, n).doctype,
    currentProperties: a(this, n).properties
  }, { data: t } = await x(
    this,
    w.postPickerDocumentTypeMappingsRefresh({ body: e })
  );
  t && (a(this, n).properties = t, l(this, i, r).call(this));
};
V = function() {
  const t = a(this, f).getAllFields().map((s) => ({ name: s.caption, value: s.id }));
  t.unshift({ name: "Select form field", value: "" }), u(this, m, t);
};
D = function() {
  return a(this, v).map((e) => ({
    name: e.value,
    value: e.id,
    selected: e.id === a(this, n).doctype ? !0 : void 0
  }));
};
k = async function(e) {
  const t = e.target.value.toString();
  a(this, n).doctype = t, await l(this, i, T).call(this, t), l(this, i, r).call(this);
};
T = async function(e) {
  if (a(this, n).properties = [], e.length === 0) return;
  const { data: t } = await x(
    this,
    w.getPickerDocumentTypeByAliasProperties({
      path: { alias: e }
    })
  );
  t && (a(this, n).properties = t.map((s) => ({ id: s.id, value: s.value, staticValue: "", field: "" })), l(this, i, r).call(this));
};
S = function(e) {
  return a(this, m).map((t) => ({
    ...t,
    selected: e && t.value === e ? !0 : void 0
  }));
};
W = function(e) {
  const t = e.target.value.toString();
  a(this, n).nameField = t.length > 0 ? t : void 0, l(this, i, r).call(this);
};
N = function(e) {
  const t = e.target.value.toString();
  a(this, n).nameStaticValue = t.length > 0 ? t : void 0, l(this, i, r).call(this);
};
U = function(e, t) {
  const s = e.target.value.toString();
  a(this, n).properties[t].field = s, l(this, i, r).call(this);
};
A = function(e, t) {
  const s = e.target.value.toString();
  a(this, n).properties[t].staticValue = s, l(this, i, r).call(this);
};
r = function() {
  this.value = JSON.stringify(a(this, n)), this.dispatchEvent(new CustomEvent("property-value-change"));
};
h.styles = [
  q`
      .umb-forms__save-as-node {
        flex-wrap: wrap;
        margin-top: 20px;
      }

      .umb-forms__save-as-node-group {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        padding: 5px 0;
      }

      .umb-forms__save-as-node__head {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        width: 100%;
      }

      .umb-forms__save-as-node-field {
        display: flex;
        align-items: center;
        flex: 0 0 37%;
        margin: 3px;
      }

      .umb-forms__save-as-node-field:first-of-type {
        flex: 0 0 20%;
      }

      .umb-forms__save-as-node .-full-width {
        width: 100%;
      }
    `
];
C([
  J({ type: String })
], h.prototype, "value", 1);
h = C([
  K(X)
], h);
const Z = h;
export {
  h as FormsDocumentMapperPropertyUiElement,
  Z as default
};
//# sourceMappingURL=document-mapper-property-editor.element.js.map
