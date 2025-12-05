var i = (r) => {
  throw TypeError(r);
};
var n = (r, e, o) => e.has(r) || i("Cannot " + o);
var l = (r, e, o) => (n(r, e, "read from private field"), o ? o.call(r) : e.get(r)), u = (r, e, o) => e.has(r) ? i("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(r) : e.set(r, o), a = (r, e, o, t) => (n(r, e, "write to private field"), t ? t.call(r, o) : e.set(r, o), o);
import { tryExecute as S } from "@umbraco-cms/backoffice/resources";
import { A as m } from "./index.js";
var c;
class v {
  constructor(e) {
    u(this, c);
    a(this, c, e);
  }
  async getCollection(e) {
    const { data: o, error: t } = await S(
      l(this, c),
      m.getPrevalueSource({ query: e })
    );
    return t ? { error: t } : { data: o };
  }
}
c = new WeakMap();
var s;
class p {
  constructor(e) {
    u(this, s);
    a(this, s, new v(
      e
    ));
  }
  async requestCollection(e) {
    return l(this, s).getCollection(e);
  }
  destroy() {
  }
}
s = new WeakMap();
export {
  p as FormsPrevalueSourceCollectionRepository,
  p as default
};
//# sourceMappingURL=prevaluesource-collection.repository.js.map
