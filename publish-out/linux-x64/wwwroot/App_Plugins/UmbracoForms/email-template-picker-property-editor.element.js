import "@umbraco-cms/backoffice/server-file-system";
import "@umbraco-cms/backoffice/tree";
import { l as P } from "./index.js";
import "./email-template-tree.store.js";
import { when as F, html as v, css as S, property as T, customElement as w } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as C } from "@umbraco-cms/backoffice/lit-element";
var $ = Object.defineProperty, A = Object.getOwnPropertyDescriptor, f = (e) => {
  throw TypeError(e);
}, d = (e, t, r, l) => {
  for (var a = l > 1 ? void 0 : l ? A(t, r) : t, o = e.length - 1, p; o >= 0; o--)
    (p = e[o]) && (a = (l ? p(t, r, a) : p(a)) || a);
  return l && a && $(t, r, a), a;
}, h = (e, t, r) => t.has(e) || f("Cannot " + r), u = (e, t, r) => (h(e, t, "read from private field"), r ? r.call(e) : t.get(e)), _ = (e, t, r) => t.has(e) ? f("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), M = (e, t, r, l) => (h(e, t, "write to private field"), t.set(e, r), r), c = (e, t, r) => (h(e, t, "access private method"), r), i, s, E, g, y;
const O = "forms-email-template-picker-property-editor", m = "Forms/Emails";
let n = class extends C {
  constructor() {
    super(...arguments), _(this, s), _(this, i, "");
  }
  get value() {
    return u(this, i) ?? "";
  }
  set value(e) {
    const t = u(this, i);
    M(this, i, e), this.requestUpdate("value", t);
  }
  render() {
    return v` ${F(
      this.value.length > 0,
      () => v`<div>
            Selected template:
            <strong>${c(this, s, y).call(this)}</strong>
          </div>`
    )}
      <umb-tree
        id="EmailTemplate"
        alias="${P}"
        .props=${{
      hideTreeRoot: !1,
      selectionConfiguration: {
        multiple: !1,
        selection: c(this, s, g).call(this)
      },
      selectableFilter: (e) => !e.isFolder
    }}
        @selection-change=${c(this, s, E)}
      ></umb-tree>`;
  }
};
i = /* @__PURE__ */ new WeakMap();
s = /* @__PURE__ */ new WeakSet();
E = function(e) {
  const r = e.target.getSelection();
  r.length > 0 ? this.value = m + r[0].replace("%25dot%25", ".").replace("%2F", "/") : this.value = "", this.dispatchEvent(new CustomEvent("property-value-change"));
};
g = function() {
  return this.value.length === 0 ? [] : [
    this.value.replace(m, "").replace(".", "%25dot%25").replace("/", "%2F")
  ];
};
y = function() {
  return this.value.replace(m + "/", "");
};
n.styles = [S``];
d([
  T({ type: String })
], n.prototype, "value", 1);
n = d([
  w(O)
], n);
const W = n;
export {
  n as FormsEmailTemplatePickerPropertyUiElement,
  W as default
};
//# sourceMappingURL=email-template-picker-property-editor.element.js.map
