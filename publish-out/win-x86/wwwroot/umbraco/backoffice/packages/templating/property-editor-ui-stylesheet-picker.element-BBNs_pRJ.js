import { html as P, property as _, customElement as E } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as U } from "@umbraco-cms/backoffice/lit-element";
import { UmbServerFilePathUniqueSerializer as S } from "@umbraco-cms/backoffice/server-file-system";
import { UmbChangeEvent as w } from "@umbraco-cms/backoffice/event";
var g = Object.defineProperty, C = Object.getOwnPropertyDescriptor, f = (e) => {
  throw TypeError(e);
}, u = (e, t, r, s) => {
  for (var a = s > 1 ? void 0 : s ? C(t, r) : t, h = e.length - 1, l; h >= 0; h--)
    (l = e[h]) && (a = (s ? l(t, r, a) : l(a)) || a);
  return s && a && g(t, r, a), a;
}, m = (e, t, r) => t.has(e) || f("Cannot " + r), n = (e, t, r) => (m(e, t, "read from private field"), r ? r.call(e) : t.get(e)), c = (e, t, r) => t.has(e) ? f("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), y = (e, t, r, s) => (m(e, t, "write to private field"), t.set(e, r), r), O = (e, t, r) => (m(e, t, "access private method"), r), p, i, v, d;
let o = class extends U {
  constructor() {
    super(...arguments), c(this, v), c(this, p, new S()), c(this, i, []);
  }
  set value(e) {
    e && y(this, i, e.map((t) => n(this, p).toUnique(t)));
  }
  get value() {
    return n(this, i) ? n(this, i).map((e) => n(this, p).toServerPath(e)) : [];
  }
  render() {
    return P`<umb-stylesheet-input @change=${O(this, v, d)} .selection=${n(this, i)}></umb-stylesheet-input>`;
  }
};
p = /* @__PURE__ */ new WeakMap();
i = /* @__PURE__ */ new WeakMap();
v = /* @__PURE__ */ new WeakSet();
d = function(e) {
  const t = e.target;
  y(this, i, t.selection ?? []), this.dispatchEvent(new w());
};
u([
  _({ type: Array })
], o.prototype, "value", 1);
u([
  _({ type: Object, attribute: !1 })
], o.prototype, "config", 2);
o = u([
  E("umb-property-editor-ui-stylesheet-picker")
], o);
const I = o;
export {
  o as UmbPropertyEditorUIStylesheetPickerElement,
  I as default
};
//# sourceMappingURL=property-editor-ui-stylesheet-picker.element-BBNs_pRJ.js.map
