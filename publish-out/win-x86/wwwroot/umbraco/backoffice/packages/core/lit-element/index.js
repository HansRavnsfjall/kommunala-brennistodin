import { U as a } from "../lit-element.element-DSl77dV-.js";
import { directive as o, AsyncDirective as h, nothing as i } from "@umbraco-cms/backoffice/external/lit";
function d(s, t) {
  if (s === t)
    return !0;
  if (s.shadowRoot) {
    const n = s.shadowRoot.activeElement;
    if (n)
      return d(n, t);
  }
  return !1;
}
class e extends h {
  static #t;
  #e;
  #s;
  render() {
    return i;
  }
  update(t) {
    return this.#e !== t.element && (e.#t = this.#e = t.element, this.#i()), i;
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
  #i = () => {
    this.#s && (clearTimeout(this.#s), this.#s = void 0), this.#e && this.#e === e.#t && (this.#e.focus(), d(document.activeElement, this.#e) === !1 ? this.#s = setTimeout(this.#i, 100) : e.#t = void 0);
  };
  disconnected() {
    this.#e === e.#t && (e.#t = void 0), this.#e = void 0;
  }
  //override reconnected() {}
}
const f = o(e);
class r extends h {
  #t;
  render() {
    return i;
  }
  update(t) {
    return this.#t = t.element, i;
  }
  disconnected() {
    this.#t && this.#t.destroy(), this.#t = void 0;
  }
  //override reconnected() {}
}
const u = o(r);
export {
  a as UmbLitElement,
  u as umbDestroyOnDisconnect,
  f as umbFocus
};
//# sourceMappingURL=index.js.map
