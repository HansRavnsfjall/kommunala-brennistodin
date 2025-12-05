import { c as f } from "./index.js";
import { LitElement as h, html as w, css as E, state as x, customElement as y } from "@umbraco-cms/backoffice/external/lit";
import { UmbElementMixin as C } from "@umbraco-cms/backoffice/element-api";
var O = Object.defineProperty, W = Object.getOwnPropertyDescriptor, l = (e) => {
  throw TypeError(e);
}, m = (e, t, r, s) => {
  for (var a = s > 1 ? void 0 : s ? W(t, r) : t, n = e.length - 1, c; n >= 0; n--)
    (c = e[n]) && (a = (s ? c(t, r, a) : c(a)) || a);
  return s && a && O(t, r, a), a;
}, p = (e, t, r) => t.has(e) || l("Cannot " + r), d = (e, t, r) => (p(e, t, "read from private field"), t.get(e)), _ = (e, t, r) => t.has(e) ? l("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), F = (e, t, r, s) => (p(e, t, "write to private field"), t.set(e, r), r), b = (e, t, r) => (p(e, t, "access private method"), r), o, v, u;
const k = "workspace-view-form-advanced";
let i = class extends C(h) {
  constructor() {
    super(), _(this, v), _(this, o), this.consumeContext(f, (e) => {
      F(this, o, e), b(this, v, u).call(this);
    });
  }
  render() {
    return w`<uui-box>
      <forms-advanced-validation-rules></forms-advanced-validation-rules>
    </uui-box>`;
  }
};
o = /* @__PURE__ */ new WeakMap();
v = /* @__PURE__ */ new WeakSet();
u = function() {
  d(this, o) && this.observe(d(this, o).data, async (e) => {
    e && (this._form = e);
  });
};
i.styles = [
  E`
      :host {
        display: block;
        padding: var(--uui-size-layout-1);
      }

      uui-box + uui-box {
        margin-top: var(--uui-size-layout-1);
      }
    `
];
m([
  x()
], i.prototype, "_form", 2);
i = m([
  y(k)
], i);
const S = i;
export {
  i as UmbWorkspaceViewFormAdvancedElement,
  S as default
};
//# sourceMappingURL=workspace-view-form-advanced.element.js.map
