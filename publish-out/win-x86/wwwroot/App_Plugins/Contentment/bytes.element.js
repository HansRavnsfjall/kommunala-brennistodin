import { state as c, property as h, customElement as u } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as v } from "@umbraco-cms/backoffice/lit-element";
var d = Object.defineProperty, f = Object.getOwnPropertyDescriptor, m = (e) => {
  throw TypeError(e);
}, n = (e, t, r, s) => {
  for (var o = s > 1 ? void 0 : s ? f(t, r) : t, i = e.length - 1, l; i >= 0; i--)
    (l = e[i]) && (o = (s ? l(t, r, o) : l(o)) || o);
  return s && o && d(t, r, o), o;
}, y = (e, t, r) => t.has(e) || m("Cannot " + r), B = (e, t, r) => t.has(e) ? m("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), E = (e, t, r) => (y(e, t, "access private method"), r), p, _;
let a = class extends v {
  constructor() {
    super(...arguments), B(this, p), this._decimals = 0, this._kilo = 1024, this.value = 0;
  }
  set config(e) {
    if (!e) return;
    const t = e.getValueByAlias("decimals");
    this._decimals = t != null && t.from && t.from > 0 ? t.from : 2;
    const r = Number(e.getValueByAlias("kilo"));
    this._kilo = r > 0 ? r : 1024;
  }
  render() {
    return E(this, p, _).call(this, this.value);
  }
};
p = /* @__PURE__ */ new WeakSet();
_ = function(e) {
  if (!e) return "0 Bytes";
  const t = this._kilo || 1024, r = this._decimals || 0, s = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"], o = Math.floor(Math.log(e) / Math.log(t));
  return Number.parseFloat((e / Math.pow(t, o)).toFixed(r)) + " " + s[o];
};
n([
  c()
], a.prototype, "_decimals", 2);
n([
  c()
], a.prototype, "_kilo", 2);
n([
  h({ type: Number })
], a.prototype, "value", 2);
a = n([
  u("contentment-property-editor-ui-bytes")
], a);
export {
  a as ContentmentPropertyEditorUIBytesElement,
  a as element
};
//# sourceMappingURL=bytes.element.js.map
