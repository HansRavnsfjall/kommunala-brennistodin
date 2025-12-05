import { UmbControllerBase as s } from "@umbraco-cms/backoffice/class-api";
class r extends s {
  #t = !1;
  get permitted() {
    return this.#t;
  }
  set permitted(t) {
    t !== this.#t && (this.#t = t, this.#e(t));
  }
  #e;
  constructor(t, e) {
    super(t), this.config = e.config, this.#e = e.onChange;
  }
  destroy() {
    super.destroy(), this.config = void 0, this.#e = void 0;
  }
}
class o extends r {
  #t;
  constructor(t, e) {
    super(t, e), this.startApprove();
  }
  startApprove() {
    clearTimeout(this.#t), this.#t = setTimeout(() => {
      this.permitted = !0, this.startDisapprove();
    }, parseInt(this.config.frequency));
  }
  startDisapprove() {
    clearTimeout(this.#t), this.#t = setTimeout(() => {
      this.permitted = !1, this.startApprove();
    }, parseInt(this.config.frequency));
  }
  destroy() {
    clearTimeout(this.#t), super.destroy();
  }
}
const a = {
  type: "condition",
  name: "Switch Condition",
  alias: "Umb.Condition.Switch",
  api: o
};
export {
  o as U,
  r as a,
  a as m
};
//# sourceMappingURL=switch.condition-BRc-UvRa.js.map
