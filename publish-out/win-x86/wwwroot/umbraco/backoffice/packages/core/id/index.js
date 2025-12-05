const c = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/i;
function r(n) {
  return typeof n == "string" && c.test(n);
}
const e = [];
for (let n = 0; n < 256; ++n)
  e.push((n + 256).toString(16).slice(1));
function i(n, t = 0) {
  return (e[n[t + 0]] + e[n[t + 1]] + e[n[t + 2]] + e[n[t + 3]] + "-" + e[n[t + 4]] + e[n[t + 5]] + "-" + e[n[t + 6]] + e[n[t + 7]] + "-" + e[n[t + 8]] + e[n[t + 9]] + "-" + e[n[t + 10]] + e[n[t + 11]] + e[n[t + 12]] + e[n[t + 13]] + e[n[t + 14]] + e[n[t + 15]]).toLowerCase();
}
let u;
const a = new Uint8Array(16);
function y() {
  if (!u) {
    if (typeof crypto > "u" || !crypto.getRandomValues)
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    u = crypto.getRandomValues.bind(crypto);
  }
  return u(a);
}
const m = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), o = { randomUUID: m };
function p(n, t, d) {
  n = n || {};
  const f = n.random ?? n.rng?.() ?? y();
  if (f.length < 16)
    throw new Error("Random bytes length must be >= 16");
  return f[6] = f[6] & 15 | 64, f[8] = f[8] & 63 | 128, i(f);
}
function g(n, t, d) {
  return o.randomUUID && !n ? o.randomUUID() : p(n);
}
class l {
  static new() {
    return g();
  }
  static validate(t) {
    return r(t);
  }
}
export {
  l as UmbId
};
//# sourceMappingURL=index.js.map
