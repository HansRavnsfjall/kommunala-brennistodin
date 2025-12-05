import { U as a } from "../shortcut.controller-DP5FqSf8.js";
import { UmbContextToken as o } from "@umbraco-cms/backoffice/context-api";
import { UmbStringState as c, UmbClassState as u, mergeObservables as d } from "@umbraco-cms/backoffice/observable-api";
import { UmbControllerBase as v } from "@umbraco-cms/backoffice/class-api";
import { UmbHintController as l } from "@umbraco-cms/backoffice/hint";
import { UmbLocalizationController as f } from "@umbraco-cms/backoffice/localization-api";
const n = new o("UmbViewContext");
class s extends v {
  constructor(t, i) {
    super(t), this.#i = !1, this.#f = new f(this), this.#s = !0, this.#a = !1, this.#e = !1, this.#u = new c(void 0), this.computedTitle = this.#u.asObservable(), this.#v = new u(void 0), this.variantId = this.#v.asObservable(), this.shortcuts = new a(this), this.#h = [], this.viewAlias = i, this.hints = new l(this, {
      viewAlias: i
    }), this.firstHintOfVariant = d([this.variantId, this.hints.hints], ([e, r]) => e ? r.find(
      (h) => h.variantId ? h.variantId.equal(e) || h.variantId.isInvariant() : !0
    ) : r[0]), this.#o = this.consumeContext(n, (e) => {
      this.#m || (e && this.#_(e), e && this.#i && this.#s && this._internal_requestActivate());
    }).skipHost();
  }
  //
  static #r;
  #i;
  #n;
  #o;
  #l;
  #f;
  #s;
  #a;
  get isActive() {
    return this.#a;
  }
  #T() {
    this.#a = !0, this.#e ? this.#t?._internal_activate() : (s.#r && s.#r !== this && (s.#r._internal_deactivate(), s.#r = void 0), s.#r = this);
  }
  #p() {
    this.#a = !1, this.#e || s.#r === this && (s.#r = void 0);
  }
  #e;
  #m;
  #t;
  #c;
  #u;
  #v;
  #_(t) {
    this.#t !== t && (this.#t = t, this.#e && this.#I());
  }
  setVariantId(t) {
    this.#v.setValue(t), this.hints.updateScaffold({ variantId: t });
  }
  setTitle(t) {
    this.#c !== t && (this.#c = t, this.#C(), this.#d());
  }
  provideAt(t) {
    this.#l !== t && (this.unprovide(), this.#s = !0, this.#l = t, this.#n = t.provideContext(n, this), this.hints.provideAt(t), this.shortcuts.provideAt(t), this.#i && this._internal_requestActivate());
  }
  unprovide() {
    this.#n && (this.#n.destroy(), this.#n = void 0), this.hints.unprovide(), this.shortcuts.unprovide(), this._internal_deactivate(), this.#A();
  }
  hostConnected() {
    const t = this.isActive, i = this.#i;
    this.#i = !0, super.hostConnected(), i || this.#t?._internal_addChild(this), this.#s && !t && this._internal_requestActivate();
  }
  hostDisconnected() {
    const t = this.#i;
    this.#i = !1, t && this.#t?._internal_removeChild(this), this._internal_deactivate(), super.hostDisconnected(), this.#s = !0, this.#A();
  }
  isInheriting() {
    return this.#e;
  }
  inherit() {
    this.#e = !0;
  }
  inheritFrom(t) {
    this.#e = !0, this.#m = !0, this.#o?.destroy(), this.#o = void 0, this.#_(t);
  }
  #I() {
    this.observe(
      this.#t?.variantId,
      (t) => {
        this.setVariantId(t);
      },
      "observeParentVariantId"
    ), this.observe(
      this.#t?.computedTitle,
      () => {
        this.#C(), this.#n && this.#t && this.isActive && this.#d();
      },
      "observeParentTitle"
    ), this.hints.inheritFrom(this.#t?.hints);
  }
  #A() {
    this.#e || this.#t && this.#t._internal_requestActivate();
  }
  /**
   * @internal
   * Notify that a view context has been activated.
   */
  // eslint-disable-next-line @typescript-eslint/naming-convention
  _internal_requestActivate() {
    if (!this.#n)
      return !1;
    if (this.#s = !0, this.isActive)
      return !0;
    if (this.#i === !1) {
      if (!this.#t)
        throw new Error("Cannot activate a view that is not attached to the DOM.");
    } else {
      let t = this.#h.length;
      for (; t--; )
        if (this.#h[t]._internal_requestActivate())
          return !0;
      if (this.#s && this.#i)
        return this._internal_activate(), !0;
    }
    return !1;
  }
  /**
   * @internal
   * Notify that a view context has been activated.
   */
  // eslint-disable-next-line @typescript-eslint/naming-convention
  _internal_activate() {
    this.#i && (this.#s = !0, this.#T(), this.#d(), this.shortcuts.activate());
  }
  /**
   * @internal
   * Deactivate the view context.
   * We cannot conclude that this means the parent should be activated, it can be because of a child being activated.
   */
  // eslint-disable-next-line @typescript-eslint/naming-convention
  _internal_deactivate() {
    this.isActive && (this.#s = !1, this.#h.forEach((t) => {
      t.isInheriting() && t._internal_deactivate();
    }), this.shortcuts.deactivate(), this.#p());
  }
  #d() {
    if (!this.#a || this.#b())
      return;
    const t = this.getComputedTitle();
    document.title = (t ? t + " | " : "") + "Umbraco";
  }
  #C() {
    const t = [];
    this.#e && this.#t && t.push(this.#t.getComputedTitle()), this.#c && t.push(this.#f.string(this.#c)), this.#u.setValue(t.length > 0 ? t.join(" | ") : void 0);
  }
  getComputedTitle() {
    return this.#u.getValue();
  }
  #h;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  _internal_addChild(t) {
    this.#h.push(t), this.isActive && t._internal_activate();
  }
  // eslint-disable-next-line @typescript-eslint/naming-convention
  _internal_removeChild(t) {
    const i = this.#h.indexOf(t);
    i !== -1 && this.#h.splice(i, 1), this.#a && !this.#b() && this.#d();
  }
  #b() {
    return this.#h.some((t) => t.isActive);
  }
  destroy() {
    this.#e = !1, this.#p(), this.#s = !1, this.provideAt = void 0, this.unprovide(), super.destroy(), this.#o = void 0;
  }
}
class I extends s {
  constructor(t, i) {
    super(t, i), this.provideAt(t);
  }
}
export {
  n as UMB_VIEW_CONTEXT,
  I as UmbViewContext,
  s as UmbViewController
};
//# sourceMappingURL=index.js.map
