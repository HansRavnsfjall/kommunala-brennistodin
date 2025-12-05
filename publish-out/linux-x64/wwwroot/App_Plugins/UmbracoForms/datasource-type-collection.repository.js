var n = (e) => {
  throw TypeError(e);
};
var u = (e, t, o) => t.has(e) || n("Cannot " + o);
var c = (e, t, o) => (u(e, t, "read from private field"), o ? o.call(e) : t.get(e)), s = (e, t, o) => t.has(e) ? n("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, o), l = (e, t, o, i) => (u(e, t, "write to private field"), i ? i.call(e, o) : t.set(e, o), o);
import { tryExecute as y } from "@umbraco-cms/backoffice/resources";
import { _ as p } from "./index.js";
var r;
class S {
  constructor(t) {
    s(this, r);
    l(this, r, t);
  }
  async getCollection() {
    const { data: t, error: o } = await y(
      c(this, r),
      p.getDataSourceType()
    );
    return o ? { error: o } : {
      data: {
        items: t,
        total: t.length
      }
    };
  }
}
r = new WeakMap();
var a;
class D {
  constructor(t) {
    s(this, a);
    l(this, a, new S(
      t
    ));
  }
  async requestCollection() {
    return c(this, a).getCollection();
  }
  destroy() {
  }
}
a = new WeakMap();
export {
  D as FormsDataSourceTypeCollectionRepository,
  D as default
};
//# sourceMappingURL=datasource-type-collection.repository.js.map
