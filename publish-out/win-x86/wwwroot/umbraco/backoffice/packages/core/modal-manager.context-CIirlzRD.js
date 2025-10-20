import { UmbContextToken as w, UmbContextBoundary as A, UmbContextProvider as P } from "@umbraco-cms/backoffice/context-api";
import { UmbLitElement as I } from "@umbraco-cms/backoffice/lit-element";
import { umbExtensionsRegistry as L } from "@umbraco-cms/backoffice/extension-registry";
import { UmbTextStyles as W } from "@umbraco-cms/backoffice/style";
import { customElement as N, html as G } from "@umbraco-cms/backoffice/external/lit";
import { UmbBasicState as g, UmbStringState as X, UmbObjectState as j, appendToFrozenArray as q } from "@umbraco-cms/backoffice/observable-api";
import { UUIModalCloseEvent as C } from "@umbraco-cms/backoffice/external/uui";
import { UMB_ROUTE_CONTEXT as k } from "@umbraco-cms/backoffice/router";
import { loadManifestElement as F, createExtensionElement as H } from "@umbraco-cms/backoffice/extension-api";
import { UmbContextProxyController as $ } from "@umbraco-cms/backoffice/context-proxy";
import { U as y } from "./modal-token-wEQqBBXI.js";
import { UmbId as J } from "@umbraco-cms/backoffice/id";
import { UmbControllerBase as K, UmbContextBase as Q } from "@umbraco-cms/backoffice/class-api";
import { umbDeepMerge as Y } from "@umbraco-cms/backoffice/utils";
const M = new w("UmbModalContext");
var Z = Object.getOwnPropertyDescriptor, U = (t) => {
  throw TypeError(t);
}, ee = (t, e, n, o) => {
  for (var a = o > 1 ? void 0 : o ? Z(e, n) : e, l = t.length - 1, v; l >= 0; l--)
    (v = t[l]) && (a = v(a) || a);
  return a;
}, E = (t, e, n) => e.has(t) || U("Cannot " + n), s = (t, e, n) => (E(t, e, "read from private field"), n ? n.call(t) : e.get(t)), d = (t, e, n) => e.has(t) ? U("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, n), c = (t, e, n, o) => (E(t, e, "write to private field"), e.set(t, n), n), m = (t, e, n) => (E(t, e, "access private method"), n), i, u, p, r, f, h, x, V, D, R, O, S, B, b;
let _ = class extends I {
  constructor() {
    super(...arguments), d(this, h), d(this, i), d(this, u, new g(void 0)), d(this, p), d(this, r), d(this, f, (t) => {
      if (s(this, i)?.isResolved() === !1 && s(this, i)?.router) {
        t.stopImmediatePropagation(), t.preventDefault(), s(this, i)._internal_removeCurrentModal();
        return;
      }
      this.element?.removeEventListener(C, s(this, f)), s(this, i)?.reject({ type: "close" });
    }), d(this, b, () => {
      this.destroy();
    });
  }
  async init(t) {
    if (s(this, i) === t) return;
    if (c(this, i, t), !s(this, i)) {
      this.destroy();
      return;
    }
    s(this, i).addEventListener("umb:destroy", s(this, b)), this.element = await m(this, h, x).call(this), this.element.addEventListener(C, s(this, f)), new $(
      this,
      this.element,
      () => s(this, i)?.getHostElement()
    ).setIgnoreContextAliases([M.contextAlias]), s(this, i).onSubmit().then(
      () => {
        this.element?.close();
      },
      () => {
        this.element?.close();
      }
    ), s(this, i).router ? (c(this, r, document.createElement("umb-router-slot")), s(this, r).routes = [
      {
        unique: "_umbEmptyRoute_",
        path: "",
        component: document.createElement("slot")
      }
    ], s(this, r).parent = s(this, i).router) : (c(this, r, document.createElement("div")), s(this, r).style.display = "contents", new A(s(this, r), k).hostConnected()), this.element.appendChild(s(this, r)), m(this, h, R).call(this, s(this, i).alias.toString()), new P(this.element, M, s(this, i)).hostConnected();
  }
  render() {
    return G`${this.element}`;
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.destroy();
  }
  destroy() {
    s(this, u).destroy(), s(this, p)?.destroy(), c(this, p, void 0), s(this, i) && (s(this, i).removeEventListener("umb:destroy", s(this, b)), s(this, i).destroy(), c(this, i, void 0)), super.destroy();
  }
};
i = /* @__PURE__ */ new WeakMap();
u = /* @__PURE__ */ new WeakMap();
p = /* @__PURE__ */ new WeakMap();
r = /* @__PURE__ */ new WeakMap();
f = /* @__PURE__ */ new WeakMap();
h = /* @__PURE__ */ new WeakSet();
x = async function() {
  if (s(this, i).type == "custom" && s(this, i)?.element) {
    const t = await F(s(this, i).element);
    return new t();
  }
  return s(this, i).type === "sidebar" ? m(this, h, V).call(this) : m(this, h, D).call(this);
};
V = function() {
  const t = document.createElement("uui-modal-sidebar");
  return this.observe(
    s(this, i).size,
    (e) => {
      t.size = e;
    },
    "observeSize"
  ), t;
};
D = function() {
  const t = document.createElement("uui-modal-dialog"), e = document.createElement("uui-dialog");
  return t.appendChild(e), t;
};
R = function(t) {
  s(this, p)?.destroy(), this.observe(L.byTypeAndAlias("modal", t), async (e) => {
    if (m(this, h, B).call(this), e) {
      const n = await m(this, h, O).call(this, e);
      n && m(this, h, S).call(this, n);
    }
  });
};
O = async function(t) {
  const e = await H(t);
  if (s(this, i))
    return e && (e.manifest = t, e.data = s(this, i).data, e.modalContext = s(this, i)), e;
};
S = function(t) {
  s(this, r).appendChild(t), s(this, u).setValue(t);
};
B = function() {
  const t = s(this, u).getValue();
  t && (s(this, r).removeChild(t), s(this, u).setValue(void 0));
};
b = /* @__PURE__ */ new WeakMap();
_.styles = [W];
_ = ee([
  N("umb-modal")
], _);
class te extends K {
  constructor(e, n, o) {
    super(e), this.type = "dialog", this.router = null, this.#r = new X("small"), this.size = this.#r.asObservable(), this.key = o.modal?.key || J.new(), this.router = o.router ?? null, this.alias = n;
    let a = "small";
    this.alias instanceof y && (this.type = this.alias.getDefaultModal()?.type || this.type, a = this.alias.getDefaultModal()?.size ?? a, this.element = this.alias.getDefaultModal()?.element || this.element, this.backdropBackground = this.alias.getDefaultModal()?.backdropBackground || this.backdropBackground), this.type = o.modal?.type || this.type, a = o.modal?.size ?? a, this.element = o.modal?.element || this.element, this.backdropBackground = o.modal?.backdropBackground || this.backdropBackground, this.#r.setValue(a);
    const l = this.alias instanceof y ? this.alias.getDefaultData() : void 0;
    this.data = Object.freeze(
      // If we have both data and defaultData perform a deep merge
      o.data && l ? Y(o.data, l) : (
        // otherwise pick one of them:
        o.data ?? l
      )
    );
    const v = o.value ?? (this.alias instanceof y ? this.alias.getDefaultValue() : void 0);
    this.#s = new j(v), this.value = this.#s.asObservable(), this.#l = new Promise((T, z) => {
      this.#n = T, this.#o = z;
    });
  }
  //
  // TODO: Come up with a better name:
  #e;
  #i;
  #t;
  #l;
  #n;
  #o;
  #a() {
    this.#n = void 0, this.#o = void 0, this.#t = !0;
  }
  #s;
  #r;
  #h;
  _internal_setCurrentModalPath(e) {
    this.#h = e;
  }
  async _internal_removeCurrentModal() {
    (await this.getContext(k))?._internal_removeModalPath(this.#h);
  }
  forceResolve() {
    if (this.#e) {
      const e = this.#n;
      this.#a(), e?.(this.getValue());
    } else {
      const e = this.#o;
      this.#a(), e?.(this.#i ?? { type: "close" });
    }
  }
  isResolved() {
    return this.#t === !0;
  }
  // note, this methods is private  argument is not defined correctly here, but requires to be fix by appending the OptionalSubmitArgumentIfUndefined type when newing up this class.
  /**
   * Submits this modal, returning with a value to the initiator of the modal.
   * @public
   * @memberof UmbModalContext
   */
  submit() {
    if (this.#t) return;
    if (this.router) {
      this.#e = !0, this._internal_removeCurrentModal();
      return;
    }
    const e = this.#n;
    this.#a(), e?.(this.getValue());
  }
  /**
   * Closes this modal
   * @param reason
   * @public
   * @memberof UmbModalContext
   */
  reject(e) {
    if (this.#t) return;
    if (this.router) {
      this.#e = !1, this.#i = e, this._internal_removeCurrentModal();
      return;
    }
    const n = this.#o;
    this.#a(), n?.(e);
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
  setValue(e) {
    this.#s.setValue(e);
  }
  /**
   * Updates the current value of this modal.
   * @param partialValue
   * @public
   * @memberof UmbModalContext
   */
  updateValue(e) {
    this.#s.update(e);
  }
  /**
   * Updates the size this modal.
   * @param size
   * @public
   * @memberof UmbModalContext
   */
  setModalSize(e) {
    this.#r.setValue(e);
  }
  destroy() {
    this.dispatchEvent(new CustomEvent("umb:destroy")), this.#s.destroy(), this.router = null, this.data = void 0, super.destroy();
  }
}
class be extends Q {
  constructor(e) {
    super(e, se), this.#e = new g([]), this.modals = this.#e.asObservable(), this.#t = () => {
      this.#i();
    }, window.addEventListener("navigationsuccess", this.#t);
  }
  #e;
  /**
   * Opens a modal or sidebar modal
   * @public
   * @param {UmbControllerHost} host - The host that the modal should be attached to, this is usually the controller/element that is opening the modal. This additionally acts as the modal origin for the context api.
   * @param {(string | UmbModalToken)} modalAlias - The alias or token of the modal to open
   * @param {UmbModalContextClassArgs} args - The arguments for this setup.
   * @returns {*}  {UmbModalHandler}
   * @memberof UmbModalManagerContext
   */
  open(e, n, o = {}) {
    const a = new te(e, n, o);
    return this.#e.setValue(
      q(this.#e.value, a, (l) => l.key === a.key)
    ), a;
  }
  /**
   * Closes a modal or sidebar modal
   * @private
   * @param {string} key - The key of the modal to close
   * @memberof UmbModalManagerContext
   */
  close(e) {
    const n = this.#e.getValue().find((o) => o.key === e);
    n && n.forceResolve();
  }
  remove(e) {
    this.#e.setValue(this.#e.getValue().filter((n) => n.key !== e));
  }
  /**
   * Closes all modals that is not routable
   * @private
   * @memberof UmbModalManagerContext
   */
  #i() {
    this.#e.getValue().filter((e) => e.router === null).forEach((e) => {
      e.forceResolve();
    });
  }
  #t;
  destroy() {
    super.destroy(), this.#e.destroy(), window.removeEventListener("navigationsuccess", this.#t);
  }
}
const se = new w(
  "UmbModalManagerContext"
);
export {
  se as U,
  _ as a,
  M as b,
  be as c
};
//# sourceMappingURL=modal-manager.context-CIirlzRD.js.map
