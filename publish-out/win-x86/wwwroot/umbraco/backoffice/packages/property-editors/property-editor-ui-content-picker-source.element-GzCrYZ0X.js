import { html as v, property as u, customElement as h } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as y } from "@umbraco-cms/backoffice/lit-element";
import "./input-content-picker-source.element-CNuKYha7.js";
import { UmbChangeEvent as l } from "@umbraco-cms/backoffice/event";
var _ = Object.defineProperty, f = Object.getOwnPropertyDescriptor, m = (e) => {
  throw TypeError(e);
}, s = (e, t, r, a) => {
  for (var o = a > 1 ? void 0 : a ? f(t, r) : t, c = e.length - 1, i; c >= 0; c--)
    (i = e[c]) && (o = (a ? i(t, r, o) : i(o)) || o);
  return a && o && _(t, r, o), o;
}, E = (e, t, r) => t.has(e) || m("Cannot " + r), P = (e, t, r) => t.has(e) ? m("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), b = (e, t, r) => (E(e, t, "access private method"), r), p, d;
let n = class extends y {
  constructor() {
    super(...arguments), P(this, p);
  }
  render() {
    return v`<umb-input-content-picker-source
			@change=${b(this, p, d)}
			.type=${this.value?.type ?? "content"}
			.nodeId=${this.value?.id}
			.dynamicRoot=${this.value?.dynamicRoot}></umb-input-content-picker-source>`;
  }
};
p = /* @__PURE__ */ new WeakSet();
d = function(e) {
  const t = e.target;
  this.value = {
    type: t.type,
    id: t.nodeId,
    dynamicRoot: t.dynamicRoot
  }, this.dispatchEvent(new l());
};
s([
  u({ type: Object })
], n.prototype, "value", 2);
s([
  u({ type: Object, attribute: !1 })
], n.prototype, "config", 2);
n = s([
  h("umb-property-editor-ui-content-picker-source")
], n);
const w = n;
export {
  n as UmbPropertyEditorUIContentPickerSourceElement,
  w as default
};
//# sourceMappingURL=property-editor-ui-content-picker-source.element-GzCrYZ0X.js.map
