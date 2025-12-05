import { U as m } from "./base.filter-aeoEGVc7.js";
class p extends m {
  filter(f, r, e) {
    return typeof f != "string" || (f = f.trim(), !f.length || f.length <= r) ? f : (e === "false" && (e = ""), e === "true" && (e = "…"), e = !e && e !== "" ? "…" : e, f.slice(0, r).trim() + e);
  }
}
export {
  p as UmbUfmTruncateFilterApi,
  p as api
};
//# sourceMappingURL=truncate.filter-tuGfYtWH.js.map
