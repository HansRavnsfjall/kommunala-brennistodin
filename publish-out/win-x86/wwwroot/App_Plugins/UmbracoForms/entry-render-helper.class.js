var D = (r) => {
  throw TypeError(r);
};
var m = (r, t, e) => t.has(r) || D("Cannot " + e);
var p = (r, t, e) => (m(r, t, "read from private field"), e ? e.call(r) : t.get(r)), s = (r, t, e) => t.has(r) ? D("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(r) : t.set(r, e), g = (r, t, e, a) => (m(r, t, "write to private field"), a ? a.call(r, e) : t.set(r, e), e), i = (r, t, e) => (m(r, t, "access private method"), e);
import { UmbLocalizationController as b } from "@umbraco-cms/backoffice/localization-api";
import { D as w, h as x } from "./index.js";
var o, c, h, n, V, P, y, F;
class N {
  constructor(t, e) {
    s(this, n);
    s(this, o);
    s(this, c);
    s(this, h, []);
    g(this, o, t), g(this, c, new b(p(this, o))), g(this, h, e);
  }
  getRenderValue(t, e) {
    switch (e) {
      case "date":
        return i(this, n, V).call(this, t, x);
      case "datetime":
        return i(this, n, V).call(this, t, w);
      case "number":
        return t.value;
      case "file":
        return i(this, n, P).call(this, t);
      default:
        return i(this, n, y).call(this, t);
    }
  }
}
o = new WeakMap(), c = new WeakMap(), h = new WeakMap(), n = new WeakSet(), V = function(t, e) {
  try {
    return t.value && t.value.toString().length > 0 ? p(this, c).date(t.value.toString(), e) : "";
  } catch {
    return t.value;
  }
}, P = function(t) {
  return t.value ? t.value.toString().split(", ").map((a) => a.replace(/^.*[\\/]/, "")).join(", ") : "";
}, y = function(t) {
  if (!t.value || t.value.toString().length === 0)
    return "";
  const e = i(this, n, F).call(this, t.fieldId);
  if (e.length === 0)
    return t.value.toString();
  const a = e.find((u) => u.value === t.value);
  if (a)
    return a.caption && a.caption.length > 0 ? a.caption : t.value;
  const S = Array.isArray(t.value) ? t.value : t.value.toString().split(", ");
  let v = "";
  for (let u = 0; u < S.length; u++) {
    u > 0 && (v += ", ");
    const f = S[u].trim(), l = e.find((d) => d.value === f);
    l != null && l.caption && l.caption.length > 0 ? v += l.caption : v += f;
  }
  return v;
}, F = function(t) {
  const e = p(this, h).find(
    (a) => a.id === t
  );
  return e ? e.prevalues : [];
};
export {
  N as E
};
//# sourceMappingURL=entry-render-helper.class.js.map
