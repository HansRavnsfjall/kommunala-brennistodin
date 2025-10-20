import { U as e } from "./base.filter-aeoEGVc7.js";
class n extends e {
  filter(t) {
    if (!t) return "";
    const r = typeof t == "object" && Object.hasOwn(t, "markup") ? t.markup : t;
    return new DOMParser().parseFromString(r, "text/html").body.textContent ?? "";
  }
}
export {
  n as api
};
//# sourceMappingURL=strip-html.filter-DJeGiLco.js.map
