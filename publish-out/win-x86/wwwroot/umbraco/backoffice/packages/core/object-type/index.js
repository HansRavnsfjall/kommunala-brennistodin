import { ObjectTypesService as _ } from "@umbraco-cms/backoffice/external/backend-api";
import { UmbControllerBase as y } from "@umbraco-cms/backoffice/class-api";
import { tryExecute as d } from "@umbraco-cms/backoffice/resources";
import { html as f, query as E, property as w, state as O, customElement as C } from "@umbraco-cms/backoffice/external/lit";
import { UUIFormControlMixin as U } from "@umbraco-cms/backoffice/external/uui";
import { UmbLitElement as g } from "@umbraco-cms/backoffice/lit-element";
class T extends y {
  #e;
  constructor(e) {
    super(e), this.#e = e;
  }
  async #t() {
    return d(this.#e, _.getObjectTypes({}));
  }
  async read() {
    const { data: e, error: r } = await this.#t();
    return { data: e, error: r };
  }
}
var b = Object.defineProperty, x = Object.getOwnPropertyDescriptor, v = (t) => {
  throw TypeError(t);
}, i = (t, e, r, n) => {
  for (var s = n > 1 ? void 0 : n ? x(e, r) : e, p = t.length - 1, c; p >= 0; p--)
    (c = t[p]) && (s = (n ? c(e, r, s) : c(s)) || s);
  return n && s && b(e, r, s), s;
}, l = (t, e, r) => e.has(t) || v("Cannot " + r), P = (t, e, r) => (l(t, e, "read from private field"), r ? r.call(t) : e.get(t)), h = (t, e, r) => e.has(t) ? v("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), S = (t, e, r, n) => (l(t, e, "write to private field"), e.set(t, r), r), j = (t, e, r) => (l(t, e, "access private method"), r), a, u, m;
let o = class extends U(g, "") {
  constructor() {
    super(), h(this, u), this._options = [], h(this, a), S(this, a, new T(this)), P(this, a).read().then(({ data: t }) => {
      t && (this._options = t.items.map((e) => ({ value: e.id, name: e.name ?? "" })));
    });
  }
  set value(t) {
    this.select.value = t;
  }
  get value() {
    return this.select.value;
  }
  getFormElement() {
  }
  render() {
    return f`<uui-select .options=${this._options} @change=${j(this, u, m)}></uui-select> `;
  }
};
a = /* @__PURE__ */ new WeakMap();
u = /* @__PURE__ */ new WeakSet();
m = function() {
  this.dispatchEvent(new CustomEvent("change"));
};
o.styles = [];
i([
  E("uui-select")
], o.prototype, "select", 2);
i([
  w()
], o.prototype, "value", 1);
i([
  O()
], o.prototype, "_options", 2);
o = i([
  C("umb-input-object-type")
], o);
export {
  o as UmbInputObjectTypeElement,
  T as UmbObjectTypeRepository
};
//# sourceMappingURL=index.js.map
