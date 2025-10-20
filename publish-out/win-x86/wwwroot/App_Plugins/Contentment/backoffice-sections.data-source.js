var r = (e) => {
  throw TypeError(e);
};
var m = (e, s, t) => s.has(e) || r("Cannot " + t);
var n = (e, s, t) => (m(e, s, "read from private field"), t ? t.call(e) : s.get(e)), i = (e, s, t) => s.has(e) ? r("Cannot add the same private member more than once") : s instanceof WeakSet ? s.add(e) : s.set(e, t), c = (e, s, t, a) => (m(e, s, "write to private field"), a ? a.call(e, t) : s.set(e, t), t);
import { umbExtensionsRegistry as b } from "@umbraco-cms/backoffice/extension-registry";
import { UmbControllerBase as l } from "@umbraco-cms/backoffice/class-api";
var o;
class y extends l {
  constructor(t, a) {
    super(t, a);
    i(this, o);
    this.observe(b.byType("section"), (p) => {
      c(this, o, p);
    });
  }
  async getItems() {
    var t;
    return ((t = n(this, o)) == null ? void 0 : t.map((a) => ({
      name: a.meta.label,
      value: a.meta.pathname
    }))) ?? [];
  }
}
o = new WeakMap();
export {
  y as ContentmentUmbracoBackofficeSectionsDataSourceApi,
  y as api
};
//# sourceMappingURL=backoffice-sections.data-source.js.map
