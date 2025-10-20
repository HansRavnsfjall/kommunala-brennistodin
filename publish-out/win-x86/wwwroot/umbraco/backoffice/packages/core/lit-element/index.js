import { LitElement as m, property as h, directive as l, AsyncDirective as f, nothing as o } from "@umbraco-cms/backoffice/external/lit";
import { UmbElementMixin as p } from "@umbraco-cms/backoffice/element-api";
var v = Object.defineProperty, u = (e, t, n, x) => {
  for (var s = void 0, r = e.length - 1, d; r >= 0; r--)
    (d = e[r]) && (s = d(t, n, s) || s);
  return s && v(t, n, s), s;
};
class a extends p(m) {
  constructor() {
    super(...arguments), this.dir = "", this.lang = "";
  }
}
u([
  h()
], a.prototype, "dir");
u([
  h()
], a.prototype, "lang");
function c(e, t) {
  if (e === t)
    return !0;
  if (e.shadowRoot) {
    const n = e.shadowRoot.activeElement;
    if (n)
      return c(n, t);
  }
  return !1;
}
class i extends f {
  static #t;
  #e;
  #i;
  render() {
    return o;
  }
  update(t) {
    return this.#e !== t.element && (i.#t = this.#e = t.element, this.#s()), o;
  }
  /**
   * This method tries to set focus, if it did not succeed, it will try again.
   * It always tests against the latest element, because the directive can be used multiple times in the same render.
   * This is NOT needed because the elements focus method isn't ready to be called, but due to something with rendering of the DOM.
   * But I'm not completely sure at this movement why the browser does not accept the focus call.
   * But I have tested that everything is in place for it to be good, so something else must have an effect,
   * setting the focus somewhere else, maybe a re-appending of some sort?
   * cause Lit does not re-render the element but also notice reconnect callback on the directive is not triggered either. [NL]
   */
  #s = () => {
    this.#i && (clearTimeout(this.#i), this.#i = void 0), this.#e && this.#e === i.#t && (this.#e.focus(), c(document.activeElement, this.#e) === !1 ? this.#i = setTimeout(this.#s, 100) : i.#t = void 0);
  };
  disconnected() {
    this.#e === i.#t && (i.#t = void 0), this.#e = void 0;
  }
  //override reconnected() {}
}
const b = l(i);
class y extends f {
  #t;
  render() {
    return o;
  }
  update(t) {
    return this.#t = t.element, o;
  }
  disconnected() {
    this.#t && this.#t.destroy(), this.#t = void 0;
  }
  //override reconnected() {}
}
const w = l(y);
export {
  a as UmbLitElement,
  w as umbDestroyOnDisconnect,
  b as umbFocus
};
//# sourceMappingURL=index.js.map
