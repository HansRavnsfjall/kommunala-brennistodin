import { U as t } from "./base.filter-aeoEGVc7.js";
class a extends t {
  filter(s, e) {
    const r = s?.split(/\s+/) ?? [];
    return e && r.length > e ? r.slice(0, e).join(" ") : s;
  }
}
export {
  a as api
};
//# sourceMappingURL=word-limit.filter-DrA3oF9i.js.map
