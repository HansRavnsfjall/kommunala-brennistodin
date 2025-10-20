import { U as m } from "./base.filter-aeoEGVc7.js";
class p extends m {
  filter(r, f, e) {
    return typeof r != "string" || !r.length ? r : (e === "false" && (e = ""), e === "true" && (e = "…"), e = !e && e !== "" ? "…" : e, r.slice(0, f).trim() + e);
  }
}
export {
  p as api
};
//# sourceMappingURL=truncate.filter-CEhpz1wU.js.map
