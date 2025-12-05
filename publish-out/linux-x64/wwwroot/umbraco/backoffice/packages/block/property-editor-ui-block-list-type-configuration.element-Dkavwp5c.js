import "./input-block-type.element-CMYE0OTx.js";
import { U as d } from "./constants-DzGYudYo.js";
import { html as g, property as f, state as P, customElement as k } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as w } from "@umbraco-cms/backoffice/lit-element";
import { UMB_WORKSPACE_MODAL as C } from "@umbraco-cms/backoffice/workspace";
import { UmbModalRouteRegistrationController as U } from "@umbraco-cms/backoffice/router";
import { UmbChangeEvent as b } from "@umbraco-cms/backoffice/event";
var B = Object.defineProperty, O = Object.getOwnPropertyDescriptor, m = (t) => {
  throw TypeError(t);
}, p = (t, e, r, i) => {
  for (var o = i > 1 ? void 0 : i ? O(e, r) : e, l = t.length - 1, c; l >= 0; l--)
    (c = t[l]) && (o = (i ? c(e, r, o) : c(o)) || o);
  return i && o && B(e, r, o), o;
}, _ = (t, e, r) => e.has(t) || m("Cannot " + r), y = (t, e, r) => (_(t, e, "read from private field"), e.get(t)), v = (t, e, r) => e.has(t) ? m("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), L = (t, e, r, i) => (_(t, e, "write to private field"), e.set(t, r), r), h = (t, e, r) => (_(t, e, "access private method"), r), s, n, E, u;
let a = class extends w {
  constructor() {
    super(), v(this, n), v(this, s), this.value = [], y(this, s)?.destroy(), L(this, s, new U(this, C).addAdditionalPath(d).onSetup(() => ({ data: { entityType: d, preset: {} }, modal: { size: "large" } })).observeRouteBuilder((t) => {
      const e = t({});
      this._workspacePath = e;
    }));
  }
  render() {
    return g`<umb-input-block-type
			.value=${this.value}
			.workspacePath=${this._workspacePath}
			@create=${h(this, n, E)}
			@delete=${h(this, n, u)}
			@change=${h(this, n, u)}></umb-input-block-type>`;
  }
};
s = /* @__PURE__ */ new WeakMap();
n = /* @__PURE__ */ new WeakSet();
E = function(t) {
  const e = t.detail.contentElementTypeKey;
  e && y(this, s)?.open({}, "create/" + e + "/null");
};
u = function(t) {
  t.stopPropagation(), this.value = t.target.value, this.dispatchEvent(new b());
};
p([
  f({ attribute: !1 })
], a.prototype, "value", 2);
p([
  f({ type: Object, attribute: !1 })
], a.prototype, "config", 2);
p([
  P()
], a.prototype, "_workspacePath", 2);
a = p([
  k("umb-property-editor-ui-block-list-type-configuration")
], a);
const I = a;
export {
  a as UmbPropertyEditorUIBlockListBlockConfigurationElement,
  I as default
};
//# sourceMappingURL=property-editor-ui-block-list-type-configuration.element-Dkavwp5c.js.map
