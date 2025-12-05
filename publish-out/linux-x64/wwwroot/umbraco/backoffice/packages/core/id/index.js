const d = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/i;
function c(n) {
  return typeof n == "string" && d.test(n);
}
const e = [];
for (let n = 0; n < 256; ++n)
  e.push((n + 256).toString(16).slice(1));
function i(n, t = 0) {
  return (e[n[t + 0]] + e[n[t + 1]] + e[n[t + 2]] + e[n[t + 3]] + "-" + e[n[t + 4]] + e[n[t + 5]] + "-" + e[n[t + 6]] + e[n[t + 7]] + "-" + e[n[t + 8]] + e[n[t + 9]] + "-" + e[n[t + 10]] + e[n[t + 11]] + e[n[t + 12]] + e[n[t + 13]] + e[n[t + 14]] + e[n[t + 15]]).toLowerCase();
}
let u;
const r = new Uint8Array(16);
function a() {
  if (!u) {
    if (typeof crypto > "u" || !crypto.getRandomValues)
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    u = crypto.getRandomValues.bind(crypto);
  }
  return u(r);
}
const y = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), o = { randomUUID: y };
function m(n, t, p) {
  if (o.randomUUID && !n)
    return o.randomUUID();
  n = n || {};
  const f = n.random ?? n.rng?.() ?? a();
  if (f.length < 16)
    throw new Error("Random bytes length must be >= 16");
  return f[6] = f[6] & 15 | 64, f[8] = f[8] & 63 | 128, i(f);
}
class g {
  static new() {
    return m();
  }
  static validate(t) {
    return c(t);
  }
}
export {
  g as UmbId
};
//# sourceMappingURL=index.js.map
