var i = (t) => {
  throw TypeError(t);
};
var n = (t, e, o) => e.has(t) || i("Cannot " + o);
var s = (t, e, o) => (n(t, e, "read from private field"), o ? o.call(t) : e.get(t)), l = (t, e, o) => e.has(t) ? i("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, o), a = (t, e, o, u) => (n(t, e, "write to private field"), u ? u.call(t, o) : e.set(t, o), o);
import { tryExecute as y } from "@umbraco-cms/backoffice/resources";
import { $ as p } from "./index.js";
var r;
class S {
  constructor(e) {
    l(this, r);
    a(this, r, e);
  }
  async getCollection() {
    const { data: e, error: o } = await y(
      s(this, r),
      p.getPrevalueSourceType()
    );
    return o ? { error: o } : {
      data: {
        items: e,
        total: e.length
      }
    };
  }
}
r = new WeakMap();
var c;
class C {
  constructor(e) {
    l(this, c);
    a(this, c, new S(e));
  }
  async requestCollection() {
    return s(this, c).getCollection();
  }
  destroy() {
  }
}
c = new WeakMap();
export {
  C as FormsPrevalueSourceTypeCollectionRepository,
  C as default
};
//# sourceMappingURL=prevaluesource-type-collection.repository.js.map
