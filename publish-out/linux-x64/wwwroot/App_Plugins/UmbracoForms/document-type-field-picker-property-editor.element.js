import { c as y, j as f, i as P } from "./index.js";
import { F as g } from "./prevaluesource-workspace.context-token.js";
import { html as E, property as T, state as u, customElement as C } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as A } from "@umbraco-cms/backoffice/lit-element";
import { tryExecute as O } from "@umbraco-cms/backoffice/resources";
var F = Object.defineProperty, S = Object.getOwnPropertyDescriptor, m = (e) => {
  throw TypeError(e);
}, p = (e, t, i, n) => {
  for (var r = n > 1 ? void 0 : n ? S(t, i) : t, c = e.length - 1, h; c >= 0; c--)
    (h = e[c]) && (r = (n ? h(t, i, r) : h(r)) || r);
  return n && r && F(t, i, r), r;
}, D = (e, t, i) => t.has(e) || m("Cannot " + i), R = (e, t, i) => t.has(e) ? m("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), o = (e, t, i) => (D(e, t, "access private method"), i), s, _, l, v, d;
const w = "forms-document-type-field-picker-property-editor";
let a = class extends A {
  constructor() {
    super(), R(this, s), this.value = "", this._settingProvidingDocTypeAlias = "", this._properties = [], o(this, s, _).call(this);
  }
  set config(e) {
    this._settingProvidingDocTypeAlias = (e == null ? void 0 : e.getValueByAlias("settingProvidingDocTypeAlias")) || "";
  }
  render() {
    return E`
      <uui-select
        id="field"
        @change=${o(this, s, d)}
        .options=${[
      ...["Id", "Key", "Name"].map((e) => ({
        name: e,
        value: e,
        group: this.localize.term("formPropertyEditors_standardFields"),
        selected: this.value === e || !this.value && e === "Name"
      })),
      ...this._properties.map((e) => ({
        name: e.value,
        value: e.id,
        group: this.localize.term("formPropertyEditors_customFields"),
        selected: this.value === e.id
      }))
    ]}
      >
      </uui-select>
    `;
  }
};
s = /* @__PURE__ */ new WeakSet();
_ = function() {
  this.consumeContext(y, (e) => {
    e && o(this, s, l).call(this, e);
  }), this.consumeContext(f, (e) => {
    e && o(this, s, l).call(this, e);
  }), this.consumeContext(g, (e) => {
    e && o(this, s, l).call(this, e);
  });
};
l = function(e) {
  this.observe(e.data, async (t) => {
    if (this._settingProvidingDocTypeAlias.length === 0) return;
    const i = t == null ? void 0 : t.settings[this._settingProvidingDocTypeAlias];
    i && await o(this, s, v).call(this, i);
  });
};
v = async function(e) {
  const { data: t } = await O(
    this,
    P.getPickerDocumentTypeByAliasProperties({
      path: { alias: e }
    })
  );
  t && (this._properties = t);
};
d = function(e) {
  const t = e.target.value.toString();
  t !== this.value && (this.value = t, this.dispatchEvent(new CustomEvent("property-value-change")));
};
p([
  T()
], a.prototype, "value", 2);
p([
  u()
], a.prototype, "_settingProvidingDocTypeAlias", 2);
p([
  u()
], a.prototype, "_properties", 2);
a = p([
  C(w)
], a);
const x = a;
export {
  a as FormsDocumentTypeFieldPickerPropertyUiElement,
  x as default
};
//# sourceMappingURL=document-type-field-picker-property-editor.element.js.map
