import { property as u } from "@umbraco-cms/backoffice/external/lit";
class f extends Event {
  constructor(e) {
    super(e, { bubbles: !0, composed: !1, cancelable: !1 });
  }
}
class o extends f {
  static {
    this.TYPE = "invalid";
  }
  constructor() {
    super(o.TYPE);
  }
}
class h extends f {
  static {
    this.TYPE = "valid";
  }
  constructor() {
    super(h.TYPE);
  }
}
var p = Object.defineProperty, m = Object.getOwnPropertyDescriptor, c = (l, e, r, v) => {
  for (var t = m(e, r), i = l.length - 1, n; i >= 0; i--)
    (n = l[i]) && (t = n(e, r, t) || t);
  return t && p(e, r, t), t;
};
const E = [
  "customError",
  "valueMissing",
  "badInput",
  "typeMismatch",
  "patternMismatch",
  "rangeOverflow",
  "rangeUnderflow",
  "stepMismatch",
  "tooLong",
  "tooShort"
];
function V(l, e) {
  class r extends l {
    constructor(...t) {
      super(...t), this.#i = {}, this._pristine = !0, this.#a = e, this.#s = null, this.#e = [], this.#t = [], this.#r = () => this._runValidators, this.#n = () => {
        this.pristine = !1;
      }, this._internals = this.attachInternals(), this.addEventListener("blur", () => {
        this.checkValidity();
      });
    }
    static {
      this.formAssociated = !0;
    }
    // Do not 'reflect' as the attribute value is used as fallback. [NL]
    get value() {
      return this.#a;
    }
    set value(t) {
      this.#a = t;
    }
    #i;
    set pristine(t) {
      this._pristine !== t && (this._pristine = t, this._runValidators());
    }
    get pristine() {
      return this._pristine;
    }
    #a;
    #s;
    #e;
    #t;
    /**
     * Get internal form element.
     * This has to be implemented to provide a FormControl Element of choice for the given context. The element is used as anchor for validation-messages.
     * @function getFormElement
     * @returns {HTMLElement | undefined | null} - Returns the form element or undefined if not found.
     */
    getFormElement() {
      return this.#t.find((t) => t.validity.valid === !1);
    }
    /**
     * Focus first element that is invalid.
     * @function focusFirstInvalidElement
     * @returns {HTMLElement | undefined} - Returns the first invalid element or undefined if no invalid elements are found.
     */
    focusFirstInvalidElement() {
      const t = this.#t.find((i) => i.validity.valid === !1);
      t ? "focusFirstInvalidElement" in t ? t.focusFirstInvalidElement() : t.focus() : this.focus();
    }
    disconnectedCallback() {
      super.disconnectedCallback(), this.#l();
    }
    #l() {
      this.#s && this.#s.removeEventListener("submit", this.#n);
    }
    /**
     * Add validation, to validate this Form Control.
     * See https://developer.mozilla.org/en-US/docs/Web/API/ValidityState for available Validator FlagTypes.
     * @example
     * this.addValidator(
     *  'tooLong',
     *  () => 'This input contains too many characters',
     *  () => this._value.length > 10
     * );
     * @function addValidator
     * @param {FlagTypes} flagKey the type of validation.
     * @param {method} getMessageMethod method to retrieve relevant message. Is executed every time the validator is re-executed.
     * @param {method} checkMethod method to determine if this validator should invalidate this form control. Return true if this should prevent submission.
     * @returns {UmbFormControlValidatorConfig} - The added validator configuration.
     */
    addValidator(t, i, n) {
      const s = {
        flagKey: t,
        getMessageMethod: i,
        checkMethod: n,
        weight: E.indexOf(t)
      };
      return this.#e.push(s), this.#e.sort((a, d) => a.weight > d.weight ? 1 : d.weight > a.weight ? -1 : 0), s;
    }
    /**
     * Remove validation from this form control.
     * @function removeValidator
     * @param {UmbFormControlValidatorConfig} validator - The specific validation configuration to remove.
     */
    removeValidator(t) {
      const i = this.#e.indexOf(t);
      i !== -1 && this.#e.splice(i, 1);
    }
    #r;
    /**
     * @function addFormControlElement
     * @description Important notice if adding a native form control then ensure that its value and thereby validity is updated when value is changed from the outside.
     * @param {UmbNativeFormControlElement} element - element to validate and include as part of this form control association.
     * @returns {void}
     */
    addFormControlElement(t) {
      if (!t)
        throw new Error("Element is null or undefined");
      if (!t.validity)
        throw console.log(t), new Error("Element is not a Form Control");
      this.#t.includes(t) || (this.#t.push(t), t.addEventListener(o.TYPE, this.#r), t.addEventListener(h.TYPE, this.#r), this._pristine === !1 && (t.checkValidity(), this._runValidators()));
    }
    /**
     * @function removeFormControlElement
     * @param {UmbNativeFormControlElement} element - element to remove as part of this form controls associated controls.
     * @returns {void}
     */
    removeFormControlElement(t) {
      const i = this.#t.indexOf(t);
      i !== -1 && (this.#t.splice(i, 1), t.removeEventListener(o.TYPE, this.#r), t.removeEventListener(h.TYPE, this.#r), this._pristine === !1 && this._runValidators());
    }
    /**
     * @function setCustomValidity
     * @description Set custom validity state, set to empty string to remove the custom message.
     * @param {string} message - The message to be shown
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLObjectElement/setCustomValidity|HTMLObjectElement:setCustomValidity}
     */
    setCustomValidity(t) {
      this._customValidityObject && this.removeValidator(this._customValidityObject), t != null && t !== "" && (this._customValidityObject = this.addValidator(
        "customError",
        () => t,
        () => !0
      )), this._runValidators();
    }
    /**
     * @function _runValidators
     * @description Run all validators and set the validityState of this form control.
     * Run this method when you want to re-run all validators.
     * This can be relevant if you have a validators that is using values that is not triggering the Lit Updated Callback.
     * Such are mainly properties that are not declared as a Lit state and or Lit property.
     */
    _runValidators() {
      this.#i = {};
      let t, i;
      this.#e.some((s) => s.checkMethod() ? (this.#i[s.flagKey] = !0, t = s.getMessageMethod(), !0) : !1), t || this.#t.some((s) => {
        let a;
        for (a in s.validity)
          if (a !== "valid" && s.validity[a])
            return this.#i[a] = !0, t = s.validationMessage, i ??= s, !0;
        return !1;
      });
      const n = Object.values(this.#i).includes(!0);
      this.#i.valid = !n, this._internals.setValidity(this.#i, t, i ?? this.getFormElement() ?? void 0), this.#o();
    }
    #o() {
      this._pristine !== !0 && (this.#i.valid ? this.dispatchEvent(new h()) : this.dispatchEvent(new o()));
    }
    updated(t) {
      super.updated(t), this._runValidators();
    }
    #n;
    formAssociatedCallback() {
      this.#l(), this.#s = this._internals.form, this.#s && (this.#s.hasAttribute("submit-invalid") && (this.pristine = !1), this.#s.addEventListener("submit", this.#n));
    }
    formResetCallback() {
      this.pristine = !0, this.value = this.getInitialValue() ?? this.getDefaultValue();
    }
    getDefaultValue() {
      return e;
    }
    getInitialValue() {
      return this.getAttribute("value");
    }
    checkValidity() {
      this.pristine = !1, this._runValidators();
      for (const t in this.#t)
        if (this.#t[t].checkValidity() === !1)
          return !1;
      return this._internals?.checkValidity();
    }
    // https://developer.mozilla.org/en-US/docs/Web/API/HTMLObjectElement/validity
    get validity() {
      return this.#i;
    }
    get validationMessage() {
      return this._internals?.validationMessage;
    }
  }
  return c([
    u({ reflect: !1 })
  ], r.prototype, "value"), c([
    u({ type: Boolean, reflect: !0 })
  ], r.prototype, "pristine"), r;
}
export {
  o as U,
  h as a,
  V as b
};
//# sourceMappingURL=form-control.mixin-CW-GhKC4.js.map
