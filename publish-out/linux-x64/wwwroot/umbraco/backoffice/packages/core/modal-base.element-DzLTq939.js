import { property as r } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as d } from "@umbraco-cms/backoffice/lit-element";
var m = Object.defineProperty, h = Object.getOwnPropertyDescriptor, o = (u, t, s, a) => {
  for (var e = a > 1 ? void 0 : a ? h(t, s) : t, i = u.length - 1, p; i >= 0; i--)
    (p = u[i]) && (e = (a ? p(t, s, e) : p(e)) || e);
  return a && e && m(t, s, e), e;
};
class l extends d {
  #e = {};
  #t;
  set modalContext(t) {
    this.#t = t, t && this.observe(
      t.value,
      (s) => {
        const a = this.#e;
        this.#e = s, this.requestUpdate("value", a);
      },
      "observeModalContextValue"
    );
  }
  get modalContext() {
    return this.#t;
  }
  set data(t) {
    this._data = t;
  }
  get data() {
    return this._data;
  }
  set value(t) {
    this.#t?.setValue(t);
  }
  get value() {
    return this.#e;
  }
  updateValue(t) {
    this.#t?.updateValue(t);
  }
  /**
   * Submits the modal
   * @protected
   * @memberof UmbModalBaseElement
   */
  _submitModal() {
    this.#t?.submit();
  }
  /**
   * Rejects the modal
   * @param reason
   * @protected
   * @memberof UmbModalBaseElement
   */
  _rejectModal(t) {
    this.#t?.reject(t);
  }
}
o([
  r({ type: Object, attribute: !1 })
], l.prototype, "manifest", 2);
o([
  r({ attribute: !1 })
], l.prototype, "modalContext", 1);
o([
  r({ attribute: !1 })
], l.prototype, "data", 1);
o([
  r({ attribute: !1 })
], l.prototype, "value", 1);
export {
  l as U
};
//# sourceMappingURL=modal-base.element-DzLTq939.js.map
