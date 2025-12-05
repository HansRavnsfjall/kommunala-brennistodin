import { UmbContextToken as M, UmbContextBoundary as P, UmbContextProvider as I } from "@umbraco-cms/backoffice/context-api";
import { UmbLitElement as L } from "@umbraco-cms/backoffice/lit-element";
import { umbExtensionsRegistry as W } from "@umbraco-cms/backoffice/extension-registry";
import { UmbTextStyles as N } from "@umbraco-cms/backoffice/style";
import { customElement as G, html as X } from "@umbraco-cms/backoffice/external/lit";
import { UmbBasicState as g, UmbStringState as j, UmbObjectState as q, appendToFrozenArray as F } from "@umbraco-cms/backoffice/observable-api";
import { UUIModalCloseEvent as C } from "@umbraco-cms/backoffice/external/uui";
import { UMB_ROUTE_CONTEXT as k } from "@umbraco-cms/backoffice/router";
import { loadManifestElement as H, createExtensionElement as $ } from "@umbraco-cms/backoffice/extension-api";
import { UmbContextProxyController as J } from "@umbraco-cms/backoffice/context-proxy";
import { U as y } from "./modal-token-wEQqBBXI.js";
import { UmbControllerBase as K, UmbContextBase as Q } from "@umbraco-cms/backoffice/class-api";
import { umbDeepMerge as Y } from "@umbraco-cms/backoffice/utils";
import { UmbId as Z } from "@umbraco-cms/backoffice/id";
import { UmbViewController as tt } from "@umbraco-cms/backoffice/view";
const w = new M("UmbModalContext");
var et = Object.getOwnPropertyDescriptor, U = (e) => {
  throw TypeError(e);
}, st = (e, t, o, n) => {
  for (var a = n > 1 ? void 0 : n ? et(t, o) : t, r = e.length - 1, u; r >= 0; r--)
    (u = e[r]) && (a = u(a) || a);
  return a;
}, E = (e, t, o) => t.has(e) || U("Cannot " + o), s = (e, t, o) => (E(e, t, "read from private field"), o ? o.call(e) : t.get(e)), d = (e, t, o) => t.has(e) ? U("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, o), p = (e, t, o, n) => (E(e, t, "write to private field"), t.set(e, o), o), m = (e, t, o) => (E(e, t, "access private method"), o), i, c, v, l, f, h, x, V, D, R, S, O, T, b;
let _ = class extends L {
  constructor() {
    super(...arguments), d(this, h), d(this, i), d(this, c, new g(void 0)), d(this, v), d(this, l), d(this, f, (e) => {
      if (s(this, i)?.isResolved() === !1 && s(this, i)?.router) {
        e.stopImmediatePropagation(), e.preventDefault(), s(this, i)._internal_removeCurrentModal();
        return;
      }
      this.element?.removeEventListener(C, s(this, f)), s(this, i)?.reject({ type: "close" });
    }), d(this, b, () => {
      this.destroy();
    });
  }
  async init(e) {
    if (s(this, i) === e) return;
    if (p(this, i, e), !s(this, i)) {
      this.destroy();
      return;
    }
    s(this, i).addEventListener("umb:destroy", s(this, b)), s(this, i).view.provideAt(this), this.element = await m(this, h, x).call(this), this.element.addEventListener(C, s(this, f)), new J(
      this,
      this.element,
      () => s(this, i)?.getHostElement()
    ).setIgnoreContextAliases([w.contextAlias]), s(this, i).onSubmit().then(
      () => {
        this.element?.close();
      },
      () => {
        this.element?.close();
      }
    ), s(this, i).router ? (p(this, l, document.createElement("umb-router-slot")), s(this, l).routes = [
      {
        unique: "_umbEmptyRoute_",
        path: "",
        component: document.createElement("slot")
      }
    ], s(this, l).parent = s(this, i).router) : (p(this, l, document.createElement("div")), s(this, l).style.display = "contents", new P(s(this, l), k).hostConnected()), this.element.appendChild(s(this, l)), m(this, h, R).call(this, s(this, i).alias.toString()), new I(this.element, w, s(this, i)).hostConnected();
  }
  render() {
    return X`${this.element}`;
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.destroy();
  }
  destroy() {
    s(this, c).destroy(), s(this, v)?.destroy(), p(this, v, void 0), s(this, i) && (s(this, i).removeEventListener("umb:destroy", s(this, b)), s(this, i).destroy(), p(this, i, void 0)), super.destroy();
  }
};
i = /* @__PURE__ */ new WeakMap();
c = /* @__PURE__ */ new WeakMap();
v = /* @__PURE__ */ new WeakMap();
l = /* @__PURE__ */ new WeakMap();
f = /* @__PURE__ */ new WeakMap();
h = /* @__PURE__ */ new WeakSet();
x = async function() {
  if (s(this, i).type == "custom" && s(this, i)?.element) {
    const e = await H(s(this, i).element);
    return new e();
  }
  return s(this, i).type === "sidebar" ? m(this, h, V).call(this) : m(this, h, D).call(this);
};
V = function() {
  const e = document.createElement("uui-modal-sidebar");
  return this.observe(
    s(this, i).size,
    (t) => {
      e.size = t;
    },
    "observeSize"
  ), e;
};
D = function() {
  const e = document.createElement("uui-modal-dialog"), t = document.createElement("uui-dialog");
  return e.appendChild(t), e;
};
R = function(e) {
  s(this, v)?.destroy(), this.observe(W.byTypeAndAlias("modal", e), async (t) => {
    if (m(this, h, T).call(this), t) {
      const o = await m(this, h, S).call(this, t);
      o && m(this, h, O).call(this, o);
    }
  });
};
S = async function(e) {
  const t = await $(e);
  if (s(this, i))
    return t && (t.manifest = e, t.data = s(this, i).data, t.modalContext = s(this, i)), t;
};
O = function(e) {
  s(this, l).appendChild(e), s(this, c).setValue(e);
};
T = function() {
  const e = s(this, c).getValue();
  e && (s(this, l).removeChild(e), s(this, c).setValue(void 0));
};
b = /* @__PURE__ */ new WeakMap();
_.styles = [N];
_ = st([
  G("umb-modal")
], _);
class it extends K {
  constructor(t, o, n) {
    super(t), this.type = "dialog", this.router = null, this.#r = new j("small"), this.size = this.#r.asObservable(), this.key = n.modal?.key || Z.new(), this.router = n.router ?? null, this.alias = o, this.view = new tt(this, o.toString());
    let a, r = "small";
    this.alias instanceof y && (this.type = this.alias.getDefaultModal()?.type || this.type, r = this.alias.getDefaultModal()?.size ?? r, this.element = this.alias.getDefaultModal()?.element || this.element, this.backdropBackground = this.alias.getDefaultModal()?.backdropBackground || this.backdropBackground, a = this.alias.getDefaultModal()?.title ?? void 0), this.view.setTitle(a), this.type = n.modal?.type || this.type, r = n.modal?.size ?? r, this.element = n.modal?.element || this.element, this.backdropBackground = n.modal?.backdropBackground || this.backdropBackground, this.#r.setValue(r);
    const u = this.alias instanceof y ? this.alias.getDefaultData() : void 0;
    this.data = Object.freeze(
      // If we have both data and defaultData perform a deep merge
      n.data && u ? Y(n.data, u) : (
        // otherwise pick one of them:
        n.data ?? u
      )
    );
    const B = n.value ?? (this.alias instanceof y ? this.alias.getDefaultValue() : void 0);
    this.#s = new q(B), this.value = this.#s.asObservable(), this.#l = new Promise((z, A) => {
      this.#o = z, this.#n = A;
    });
  }
  //
  // TODO: Come up with a better name:
  #t;
  #i;
  #e;
  #l;
  #o;
  #n;
  #a() {
    this.#o = void 0, this.#n = void 0, this.#e = !0;
  }
  #s;
  #r;
  #h;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  _internal_setCurrentModalPath(t) {
    this.#h = t;
  }
  // eslint-disable-next-line @typescript-eslint/naming-convention
  async _internal_removeCurrentModal() {
    (await this.getContext(k))?._internal_removeModalPath(this.#h);
  }
  forceResolve() {
    if (this.#t) {
      const t = this.#o;
      this.#a(), t?.(this.getValue());
    } else {
      const t = this.#n;
      this.#a(), t?.(this.#i ?? { type: "close" });
    }
  }
  isResolved() {
    return this.#e === !0;
  }
  // note, this methods is private  argument is not defined correctly here, but requires to be fix by appending the OptionalSubmitArgumentIfUndefined type when newing up this class.
  /**
   * Submits this modal, returning with a value to the initiator of the modal.
   * @public
   * @memberof UmbModalContext
   */
  submit() {
    if (this.#e) return;
    if (this.router) {
      this.#t = !0, this._internal_removeCurrentModal();
      return;
    }
    const t = this.#o;
    this.#a(), t?.(this.getValue());
  }
  /**
   * Closes this modal
   * @param reason
   * @public
   * @memberof UmbModalContext
   */
  reject(t) {
    if (this.#e) return;
    if (this.router) {
      this.#t = !1, this.#i = t, this._internal_removeCurrentModal();
      return;
    }
    const o = this.#n;
    this.#a(), o?.(t);
  }
  /**
   * Gives a Promise which will be resolved when this modal is submitted.
   * @returns {Promise<ModalValue>}
   * @public
   * @memberof UmbModalContext
   */
  async onSubmit() {
    return await this.#l;
  }
  /**
   * Gives the current value of this modal.
   * @returns {ModalValue}
   * @public
   * @memberof UmbModalContext
   */
  getValue() {
    return this.#s.getValue();
  }
  /**
   * Sets the current value of this modal.
   * @param value
   * @public
   * @memberof UmbModalContext
   */
  setValue(t) {
    this.#s.setValue(t);
  }
  /**
   * Updates the current value of this modal.
   * @param partialValue
   * @public
   * @memberof UmbModalContext
   */
  updateValue(t) {
    this.#s.update(t);
  }
  /**
   * Updates the size this modal.
   * @param size
   * @public
   * @memberof UmbModalContext
   */
  setModalSize(t) {
    this.#r.setValue(t);
  }
  destroy() {
    this.dispatchEvent(new CustomEvent("umb:destroy")), this.#s.destroy(), this.router = null, this.data = void 0, super.destroy();
  }
}
class Et extends Q {
  constructor(t) {
    super(t, ot), this.#t = new g([]), this.modals = this.#t.asObservable(), this.#e = () => {
      this.#i();
    }, window.addEventListener("navigationsuccess", this.#e);
  }
  #t;
  /**
   * Opens a modal or sidebar modal
   * @public
   * @param {UmbControllerHost} host - The host that the modal should be attached to, this is usually the controller/element that is opening the modal. This additionally acts as the modal origin for the context api.
   * @param {(string | UmbModalToken)} modalAlias - The alias or token of the modal to open
   * @param {UmbModalContextClassArgs} args - The arguments for this setup.
   * @returns {*}  {UmbModalHandler}
   * @memberof UmbModalManagerContext
   */
  open(t, o, n = {}) {
    const a = new it(t, o, n);
    return this.#t.setValue(
      F(this.#t.value, a, (r) => r.key === a.key)
    ), a;
  }
  /**
   * Closes a modal or sidebar modal
   * @private
   * @param {string} key - The key of the modal to close
   * @memberof UmbModalManagerContext
   */
  close(t) {
    const o = this.#t.getValue().find((n) => n.key === t);
    o && o.forceResolve();
  }
  remove(t) {
    this.#t.setValue(this.#t.getValue().filter((o) => o.key !== t));
  }
  /**
   * Closes all modals that is not routable
   * @private
   * @memberof UmbModalManagerContext
   */
  #i() {
    this.#t.getValue().filter((t) => t.router === null).forEach((t) => {
      t.forceResolve();
    });
  }
  #e;
  destroy() {
    super.destroy(), this.#t.destroy(), window.removeEventListener("navigationsuccess", this.#e);
  }
}
const ot = new M(
  "UmbModalManagerContext"
);
export {
  ot as U,
  _ as a,
  w as b,
  Et as c
};
//# sourceMappingURL=modal-manager.context-B1sl36Ce.js.map
