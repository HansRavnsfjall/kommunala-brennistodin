import { U as _ } from "./index-Z0CAdsE6.js";
import { nothing as g, html as k, property as f, state as P, customElement as w } from "@umbraco-cms/backoffice/external/lit";
import { UmbInputBlockTypeElement as C } from "@umbraco-cms/backoffice/block-type";
import { UmbLitElement as U } from "@umbraco-cms/backoffice/lit-element";
import { UmbModalRouteRegistrationController as b } from "@umbraco-cms/backoffice/router";
import { UmbChangeEvent as B } from "@umbraco-cms/backoffice/event";
import { UMB_WORKSPACE_MODAL as R } from "@umbraco-cms/backoffice/workspace";
var O = Object.defineProperty, T = Object.getOwnPropertyDescriptor, v = (t) => {
  throw TypeError(t);
}, s = (t, e, r, n) => {
  for (var o = n > 1 ? void 0 : n ? T(e, r) : e, l = t.length - 1, c; l >= 0; l--)
    (c = t[l]) && (o = (n ? c(e, r, o) : c(o)) || o);
  return n && o && O(e, r, o), o;
}, m = (t, e, r) => e.has(t) || v("Cannot " + r), y = (t, e, r) => (m(t, e, "read from private field"), e.get(t)), d = (t, e, r) => e.has(t) ? v("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), M = (t, e, r, n) => (m(t, e, "write to private field"), e.set(t, r), r), h = (t, e, r) => (m(t, e, "access private method"), r), p, i, E, u;
let a = class extends U {
  constructor() {
    super(), d(this, i), d(this, p), this.value = [], y(this, p)?.destroy(), M(this, p, new b(this, R).addAdditionalPath(_).onSetup(() => ({ data: { entityType: _, preset: {} }, modal: { size: "large" } })).observeRouteBuilder((t) => {
      const e = t({});
      this._workspacePath = e;
    }));
  }
  render() {
    return C ? k`<umb-input-block-type
					.value=${this.value}
					.workspacePath=${this._workspacePath}
					@create=${h(this, i, E)}
					@change=${h(this, i, u)}
					@delete=${h(this, i, u)}></umb-input-block-type>` : g;
  }
};
p = /* @__PURE__ */ new WeakMap();
i = /* @__PURE__ */ new WeakSet();
E = function(t) {
  const e = t.detail.contentElementTypeKey;
  e && y(this, p)?.open({}, "create/" + e + "/null");
};
u = function(t) {
  t.stopPropagation(), this.value = t.target.value, this.dispatchEvent(new B());
};
s([
  f({ attribute: !1 })
], a.prototype, "value", 2);
s([
  f({ type: Object, attribute: !1 })
], a.prototype, "config", 2);
s([
  P()
], a.prototype, "_workspacePath", 2);
a = s([
  w("umb-property-editor-ui-block-rte-type-configuration")
], a);
const L = a;
export {
  a as UmbPropertyEditorUIBlockRteBlockConfigurationElement,
  L as default
};
//# sourceMappingURL=property-editor-ui-block-rte-type-configuration.element-BAE6gpWz.js.map
