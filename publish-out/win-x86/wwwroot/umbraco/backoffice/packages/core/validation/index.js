import { css as B, property as E, customElement as L, repeat as S, unsafeHTML as N, html as x, directive as j, AsyncDirective as Y, nothing as P } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as R } from "@umbraco-cms/backoffice/lit-element";
import { UmbContextToken as O } from "@umbraco-cms/backoffice/context-api";
import { UmbId as M } from "@umbraco-cms/backoffice/id";
import { UmbArrayState as W, createObservablePart as m, UmbObjectState as H, defaultMemoization as q, simpleHashCode as J } from "@umbraco-cms/backoffice/observable-api";
import { U as K } from "../deprecation-SeDYTswO.js";
import { UmbControllerBase as u, UmbContextBase as Q } from "@umbraco-cms/backoffice/class-api";
import { createExtensionApi as G } from "@umbraco-cms/backoffice/extension-api";
import { umbExtensionsRegistry as z } from "@umbraco-cms/backoffice/extension-registry";
import { UmbDeprecation as D } from "@umbraco-cms/backoffice/utils";
class A extends Event {
  constructor(t) {
    super(t, { bubbles: !0, composed: !1, cancelable: !1 });
  }
}
class l extends A {
  static {
    this.TYPE = "valid";
  }
  constructor() {
    super(l.TYPE);
  }
}
class d extends A {
  static {
    this.TYPE = "invalid";
  }
  constructor() {
    super(d.TYPE);
  }
}
var Z = Object.defineProperty, X = Object.getOwnPropertyDescriptor, U = (r) => {
  throw TypeError(r);
}, I = (r, t, e, i) => {
  for (var s = i > 1 ? void 0 : i ? X(t, e) : t, n = r.length - 1, a; n >= 0; n--)
    (a = r[n]) && (s = (i ? a(t, e, s) : a(s)) || s);
  return i && s && Z(t, e, s), s;
}, tt = (r, t, e) => t.has(r) || U("Cannot " + e), v = (r, t, e) => (tt(r, t, "read from private field"), e ? e.call(r) : t.get(r)), C = (r, t, e) => t.has(r) ? U("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(r) : t.set(r, e), p, y;
let b = class extends R {
  constructor() {
    super(), this._for = null, this._messages = /* @__PURE__ */ new Map(), C(this, p, async (r) => {
      const t = r.composedPath()[0];
      t.pristine === !1 ? this._messages.set(t, this.localize.string(t.validationMessage)) : this._messages.delete(t), this.requestUpdate();
    }), C(this, y, (r) => {
      const t = r.composedPath()[0];
      this._messages.delete(t), this.requestUpdate();
    }), this.for === null && (this.for = this);
  }
  get for() {
    return this._for;
  }
  set for(r) {
    let t = null;
    typeof r == "string" ? t = this.getRootNode()?.getElementById(r) : r instanceof HTMLElement && (t = r);
    const e = t ?? this, i = this._for;
    i !== e && (i !== null && (i.removeEventListener(d.TYPE, v(this, p)), i.removeEventListener(l.TYPE, v(this, y))), this._for = e, this._for.addEventListener(d.TYPE, v(this, p)), this._for.addEventListener(l.TYPE, v(this, y)));
  }
  render() {
    return x`
			<slot></slot>
			<div id="messages">
				${S(this._messages, (r) => x`<div>${N(r[1])}</div>`)}
				<slot name="message"></slot>
			</div>
		`;
  }
};
p = /* @__PURE__ */ new WeakMap();
y = /* @__PURE__ */ new WeakMap();
b.styles = [
  B`
			#messages {
				color: var(--uui-color-invalid-standalone);
			}
		`
];
I([
  E({ reflect: !1, attribute: !0 })
], b.prototype, "for", 1);
b = I([
  L("umb-form-validation-message")
], b);
const At = "#validation_invalidEmpty", Ut = "#validation_invalidFalse";
function F(r, t) {
  if (t === "$") return r;
  if (t.startsWith("$["))
    return $(r, t.slice(2));
  const e = t.startsWith("$.") ? t.slice(2) : t;
  return V(r, e);
}
function V(r, t) {
  if (!r) return;
  const e = t.match(/\.|\[/);
  if (e === null || e.index === void 0) return r[t];
  const i = t.slice(0, e.index), s = t.slice(e.index + 1);
  if (!i) return;
  const n = r[i];
  return s === void 0 ? n : Array.isArray(n) ? $(n, s) : V(n, s);
}
function $(r, t) {
  if (!r) return;
  const e = t.match(/\]/);
  if (!e) return;
  const i = t.slice(0, e.index);
  if (i.startsWith("?(") && i.endsWith(")")) {
    const s = et(i), n = r.findIndex(s[0]);
    if (n === -1) return;
    const a = r[n];
    return e.index === void 0 || e.index + 1 >= t.length ? a : V(a, t.slice(e.index + 2)) ?? a;
  } else {
    const s = parseInt(i);
    if (isNaN(s)) return;
    const n = r[s];
    return e.index === void 0 || e.index + 1 >= t.length ? n : V(n, t.slice(e.index + 2)) ?? n;
  }
}
function et(r) {
  return r.slice(2, -1).split(" && ").map((i) => {
    const [s, n] = i.split(" == "), a = s.slice(2), o = n.slice(1, -1);
    return (h) => h[a] === o;
  });
}
const c = new O("UmbValidationContext");
function g(r, t) {
  return r.indexOf(t) === 0 && (r.length === t.length || r[t.length] === "." || r[t.length] === "[");
}
class st {
  constructor() {
    this.#t = new W([], (t) => t.key), this.messages = this.#t.asObservable(), this.filteredMessages = this.#t.asObservablePart((t) => this.#r ? t.filter(this.#r) : t), this.#i = 0, this.#e = [];
  }
  #r;
  #t;
  getNotFilteredMessages() {
    return this.#t.getValue();
  }
  getMessages() {
    const t = this.#t.getValue();
    return this.#r ? t.filter(this.#r) : t;
  }
  debug(t) {
    this.messages.subscribe((e) => console.log(t, e));
  }
  debugFiltered(t) {
    this.filteredMessages.subscribe((e) => console.log(t, e));
  }
  filter(t) {
    this.#r = t;
  }
  #i;
  initiateChange() {
    this.#i++, this.#t.mute();
  }
  finishChange() {
    this.#i--, this.#i === 0 && this.#t.unmute();
  }
  getHasAnyMessages() {
    return this.getMessages().length !== 0;
  }
  getMessagesOfPathAndDescendant(t) {
    return this.getMessages().filter((e) => g(e.path, t));
  }
  getHasMessageOfPathAndBody(t, e) {
    return this.getMessages().some((i) => i.path === t && i.body === e);
  }
  messagesOfPathAndDescendant(t) {
    return m(
      this.filteredMessages,
      (e) => e.filter((i) => g(i.path, t))
    );
  }
  messagesOfTypeAndPath(t, e) {
    return m(
      this.filteredMessages,
      (i) => i.filter((s) => s.type === t && s.path === e)
    );
  }
  messagesOfNotTypeAndPath(t, e) {
    return m(
      this.filteredMessages,
      (i) => i.filter((s) => s.type !== t && s.path === e)
    );
  }
  hasMessagesOfPathAndDescendant(t) {
    return m(
      this.filteredMessages,
      (e) => e.some((i) => g(i.path, t))
    );
  }
  getHasMessagesOfPathAndDescendant(t) {
    return this.getMessages().some(
      (e) => e.path.indexOf(t) === 0 && (e.path.length === t.length || e.path[t.length] === "." || e.path[t.length] === "[")
    );
  }
  addMessage(t, e, i, s = M.new()) {
    e = this.#s(e) ?? e, !this.#t.getValue().find((n) => n.type === t && n.path === e && n.body === i) && (this.initiateChange(), this.#t.appendOne({ type: t, key: s, path: e, body: i }), this.finishChange());
  }
  addMessages(t, e, i) {
    e = this.#s(e) ?? e;
    const s = this.#t.getValue(), n = i.filter(
      (a) => s.find((o) => o.type === t && o.path === e && o.body === a) === void 0
    );
    this.initiateChange(), this.#t.append(n.map((a) => ({ type: t, key: M.new(), path: e, body: a }))), this.finishChange();
  }
  addMessageObjects(t) {
    this.initiateChange(), this.#t.append(t), this.finishChange();
  }
  removeMessageByKey(t) {
    this.initiateChange(), this.#t.removeOne(t), this.finishChange();
  }
  removeMessageByKeys(t) {
    t.length !== 0 && (this.initiateChange(), this.#t.filter((e) => t.indexOf(e.key) === -1), this.finishChange());
  }
  removeMessagesByType(t) {
    this.initiateChange(), this.#t.filter((e) => e.type !== t), this.finishChange();
  }
  removeMessagesByPath(t) {
    this.initiateChange(), this.#t.filter((e) => e.path !== t), this.finishChange();
  }
  removeMessagesAndDescendantsByPath(t) {
    this.initiateChange(), this.#t.filter((e) => g(e.path, t)), this.finishChange();
  }
  removeMessagesByTypeAndPath(t, e) {
    this.initiateChange(), this.#t.filter((i) => !(i.type === t && i.path === e)), this.finishChange();
  }
  #s(t) {
    for (const e of this.#e) {
      const i = e.translate(t);
      if (i)
        return this.#s(i) ?? i;
    }
  }
  #e;
  addTranslator(t) {
    this.initiateChange(), this.#e.indexOf(t) === -1 && this.#e.push(t);
    for (const e of this.#t.getValue()) {
      const i = this.#s(e.path);
      i && this.#t.updateOne(e.key, { path: i });
    }
    this.finishChange();
  }
  removeTranslator(t) {
    const e = this.#e.indexOf(t);
    e !== -1 && this.#e.splice(e, 1);
  }
  clear() {
    this.#t.setValue([]);
  }
  destroy() {
    this.#e = [], this.#t.destroy();
  }
}
function _(r, t, e) {
  if (r.startsWith(t + ".") || r === t)
    return e + r.slice(t.length);
}
const it = /@\.culture == ('[^']*'|null) *&& *@\.segment == ('[^']*'|null)/g;
class rt extends u {
  constructor(t) {
    super(t), this.#t = !1, this.#i = new H(void 0), this.#s = [], this.#e = !1, this.#a = !1, this.messages = new st(), this.#m = (e) => {
      if (this.#n) {
        if (this.#n.messages.initiateChange(), this.#d) {
          const i = this.#d.filter((s) => !e.find((n) => n.key === s.key));
          this.#n.messages.removeMessageByKeys(i.map((s) => s.key));
        }
        this.#l === "$" ? this.#n.messages.addMessageObjects(e) : e.forEach((i) => {
          const s = _(i.path, "$", this.#l);
          if (s === void 0)
            throw new Error("Path was not transformed correctly and can therefor not be synced with parent messages.");
          this.#n.messages.addMessage(i.type, s, i.body, i.key);
        }), this.#n.messages.finishChange();
      }
    };
  }
  // The current provider controller, that is providing this context:
  #r;
  #t;
  #i;
  /**
   * @param path
   * @deprecated Use extension type 'propertyValidationPathTranslator' instead. Will be removed in v.17
   * @returns {any} - Returns the translation data for the given path.
   */
  translationDataOf(t) {
    return this.#i.asObservablePart((e) => F(e, t));
  }
  /**
   * @param {any} data - The translation data to set.
   * @deprecated Use extension type 'propertyValidationPathTranslator' instead. Will be removed in v.17
   */
  setTranslationData(t) {
    this.#i.setValue(t);
  }
  /**
   * @deprecated Use extension type 'propertyValidationPathTranslator' instead. Will be removed in v.17
   * @returns {any} - Returns the translation data for the given path.
   */
  getTranslationData() {
    return new K({
      removeInVersion: "17",
      deprecated: "getTranslationData",
      solution: "getTranslationData is deprecated."
    }).warn(), this.#i.getValue();
  }
  #s;
  #e;
  #a;
  #n;
  #o;
  #h;
  #d;
  #l;
  #c;
  setVariantId(t) {
    this.#c = t, this.messages?.filter((e) => {
      const i = [...e.path.matchAll(it)];
      return i.length === 0 ? !0 : (
        // Find any bad matches:
        !i.some((s) => {
          const n = s[1] === "null" ? null : s[1].substring(1, s[1].length - 1), a = s[2] === "null" ? null : s[2].substring(1, s[2].length - 1);
          return n !== null && n !== this.#c.culture || a !== this.#c.segment;
        })
      );
    });
  }
  getVariantId() {
    return this.#c;
  }
  /**
   * Add a path translator to this validation context.
   * @param translator
   */
  async addTranslator(t) {
    this.messages?.addTranslator(t);
  }
  /**
   * Remove a path translator from this validation context.
   * @param {UmbValidationMessageTranslator} translator - The translator to remove.
   */
  async removeTranslator(t) {
    this.messages?.removeTranslator(t);
  }
  #u;
  /**
   * Provide this validation context to a specific controller host.
   * This can be used to Host a validation context in a Workspace, but provide it on a certain scope, like a specific Workspace View.
   * @param {UmbClassInterface} controllerHost - The controller host to provide this validation context to.
   */
  provideAt(t) {
    if (this.#u !== t) {
      if (this.unprovide(), this.messages === void 0)
        throw new Error("This Validation Context has been destroyed and can not be provided.");
      this.#u = t, this.#r = t.provideContext(c, this);
    }
  }
  unprovide() {
    this.#r && (this.#t = !0, this.#r.destroy(), this.#r = void 0, this.#t = !1, this.#u = void 0);
  }
  /**
   * Define a specific data path for this validation context.
   * This will turn this validation context into a sub-context of the parent validation context.
   * And thereby make this context inherit the messages from the parent validation context.
   * @see {@link report} Call `report()` to propagate changes to the parent context.
   * @see {@link autoReport} Call `autoReport()` to continuously synchronize changes to the parent context.
   *
   * messages and data will be scoped accordingly to the given data path.
   * @param {string} dataPath - The data path to bind this validation context to.
   * @example
   * ```ts
   * const validationContext = new UmbValidationContext(this);
   * validationContext.setDataPath("$.values[?(@.alias == 'my-property')].value");
   * ```
   *
   * A message with the path: '$.values[?(@.alias == 'my-property')].value.innerProperty', will for above example become '$.innerProperty' for the local Validation Context.
   */
  setDataPath(t) {
    if (!(this.#l && this.#l === t)) {
      if (!t) {
        this.#v();
        return;
      }
      this.consumeContext(c, (e) => {
        this.inheritFrom(e, t);
      }).skipHost();
    }
  }
  /**
   * Inherit from a parent validation context, notice you should only use this method if you have the validation context at hand. Otherwise use setDataPath which uses Context-API to retrieve the right parent.
   * @param {UmbValidationController} parent - The parent validation context to inherit from.
   * @param {string} dataPath - The data path to bind this validation context to.
   */
  inheritFrom(t, e) {
    this.#n && this.#n.removeValidator(this), this.#n = t, this.messages.clear(), this.#d = void 0, this.#l = e, this.#f(), this.observe(
      t?.translationDataOf(e),
      (i) => {
        this.setTranslationData(i);
      },
      "observeTranslationData"
    ), this.observe(
      t?.messages.messagesOfPathAndDescendant(e),
      (i) => {
        if (!i) {
          this.messages.clear();
          return;
        }
        if (this.messages.initiateChange(), this.#h) {
          const s = this.#h.filter((n) => !i.find((a) => a.key === n.key));
          this.messages.removeMessageByKeys(s.map((n) => n.key));
        }
        this.#h = i, this.#l === "$" ? this.messages.addMessageObjects(i) : i.forEach((s) => {
          const n = _(s.path, this.#l, "$");
          if (n === void 0)
            throw new Error(
              "Path was not transformed correctly and can therefor not be transfered to the local validation context messages."
            );
          this.messages.addMessage(s.type, n, s.body, s.key);
        }), this.#d = this.messages.getNotFilteredMessages(), this.messages.finishChange();
      },
      "observeParentMessages"
    );
  }
  #v() {
    this.removeUmbControllerByAlias("observeTranslationData"), this.removeUmbControllerByAlias("observeParentMessages"), this.#n && this.#n.removeValidator(this), this.messages.clear(), this.#d = void 0, this.setTranslationData(void 0);
  }
  #f() {
    this.#o && this.#n && this.#n.addValidator(this);
  }
  /**
   * Continuously synchronize the messages from this context to the parent context.
   */
  autoReport() {
    this.#o = !0, this.#f(), this.observe(this.messages.messages, this.#m, "observeLocalMessages");
  }
  // no need for this method at this movement. [NL]
  /*
  #stopSync() {
  	this.removeUmbControllerByAlias('observeLocalMessages');
  }
  */
  /**
   * Perform a one time transfer of the messages from this context to the parent context.
   */
  report() {
    this.#n && (this.#o || this.#m(this.messages.getNotFilteredMessages()));
  }
  #m;
  hostConnected() {
    super.hostConnected(), this.#f();
  }
  hostDisconnected() {
    super.hostDisconnected(), this.#n && this.#n.removeValidator(this);
  }
  /**
   * Get if this context is valid.
   * Notice this does not verify the validity.
   * @returns {boolean}
   */
  get isValid() {
    return this.#a;
  }
  /**
   * Add a validator to this context.
   * This validator will have to be valid for the context to be valid.
   * If the context is in validation mode, the validator will be validated immediately.
   * @param validator { UmbValidator } - The validator to add to this context.
   */
  addValidator(t) {
    if (!this.#s.includes(t)) {
      if (t === this)
        throw new Error("Cannot add it self as validator");
      this.#s.push(t), this.#e && this.validate();
    }
  }
  /**
   * Remove a validator from this context.
   * @param validator {UmbValidator} - The validator to remove from this context.
   */
  removeValidator(t) {
    const e = this.#s.indexOf(t);
    e !== -1 && (this.#s.splice(e, 1), this.#e && this.validate().catch(() => {
    }));
  }
  /**
   * Validate this context, all the validators of this context will be validated.
   * Notice its a recursive check meaning sub validation contexts also validates their validators.
   * @returns succeed {Promise<boolean>} - Returns a promise that resolves to true if the validation succeeded.
   */
  async validate() {
    this.#e = !0;
    const t = this.#s.length === 0 ? !0 : await Promise.all(this.#s.map((s) => s.validate())).then(
      () => !0,
      () => !1
    );
    if (this.#s.length === 0 && t === !1)
      throw new Error("No validators to validate, but validation failed");
    if (this.messages === void 0)
      return Promise.reject();
    const e = this.messages.getHasAnyMessages(), i = e ? !1 : t;
    if (this.#a = i, i === !1) {
      if (e === !1 && t === !1) {
        const s = this.#s.filter((n) => n.isValid === !1);
        console.warn(
          "Missing validation messages to represent why a child validation context is invalid. These Validators was not valid, one of these did not set a message to represent their state:",
          s
        );
      }
      return this.focusFirstInvalidElement(), Promise.reject();
    }
    return Promise.resolve();
  }
  /**
   * Focus the first invalid element that this context can find.
   */
  focusFirstInvalidElement() {
    const t = this.#s.find((e) => !e.isValid);
    t && t.focusFirstInvalidElement();
  }
  /**
   * Reset the validation state of this context.
   */
  reset() {
    this.#e = !1, this.messages.clear(), this.#s.forEach((t) => t.reset());
  }
  #g() {
    this.#s === void 0 || this.#s.length === 0 || (this.#s.forEach((t) => {
      t.destroy();
    }), this.#s = []);
  }
  destroy() {
    super.destroy(), this.#e = !1, this.#t !== !0 && (this.#g(), this.unprovide(), this.messages?.destroy(), this.messages = void 0, this.#n && this.#n.removeValidator(this), this.#d = void 0, this.#h = void 0, this.#n = void 0);
  }
}
class It extends rt {
  constructor(t) {
    super(t), this.provideContext(c, this);
  }
  /**
   * Provides the validation context to the current host, if not already provided to a different host.
   * @deprecated No need to provide, this happens automatically. (Do notice this was necessary in 14.3.-rc, but removed in 14.3 release)
   * @returns instance {UmbValidationController} - Returns it self.
   */
  provide() {
    return this;
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  provideAt(t) {
    throw new Error(
      "UmbValidationContext cannot be used to provide at a different host. Use the UmbValidationController instead."
    );
  }
}
const nt = new O(
  "UmbServerModelValidationContext"
);
class at extends u {
  //
  #r = [];
  #t;
  constructor(t, e) {
    super(t), this.#r = e.pathTranslators, this.#t = e.translationData;
  }
  async translate(t) {
    let e = t.map((i) => i.path);
    for (const i of this.#r) {
      const s = new i(this);
      e = await s.translate(e, this.#t), s.destroy(), t = t.map((n, a) => ({
        ...n,
        // Here we can use the order/index to map back to the message-object.
        path: e[a]
      }));
    }
    return t;
  }
}
async function ot(r, t, e) {
  const i = t.length, s = [], n = [];
  for (let o = 0; o < r.length; o++)
    r[o].indexOf(t) === 0 && (n.push(o), s.push("$" + r[o].substring(i)));
  r = [...r];
  const a = await e(s);
  for (let o = 0; o < a.length; o++)
    r[n[o]] = t + a[o].substring(1);
  return r;
}
async function ht(r, t, e, i) {
  const s = [];
  let n = r.map(
    (a) => {
      if (!a.startsWith("$["))
        throw new Error("Invalid JSON-Path query `" + a + "`. Expected to start with `$[`.");
      const o = a.indexOf("]");
      let h = a.substring(2, o);
      const f = a.substring(o + 1), T = Number(h);
      return isNaN(T) || (h = e(t[T])), s.includes(h) || s.push(h), `$[${h}]${f}`;
    },
    {}
  );
  if (i)
    for (const a of s) {
      const o = F(t, `$[${a}]`);
      n = await ot(
        n,
        `$[${a}]`,
        async (h) => i(h, o)
      );
    }
  return n;
}
class Ft extends u {
  /**
   * translates the property data.
   * @param {UmbPropertyValueDataPotentiallyWithEditorAlias} property - The property data.
   * @param paths
   * @param data
   * @param queryConstructor
   * @returns {Promise<UmbPropertyValueDataPotentiallyWithEditorAlias>} - A promise that resolves to the cloned property data.
   */
  async translateProperties(t, e, i) {
    return await ht(t, e, i, async (s, n) => n ? await this.translateProperty(s, n) : s);
  }
  /**
   * translates the property data.
   * @param {Array<string>} propertyPaths - The paths to be translated.
   * @param {UmbPropertyValueDataPotentiallyWithEditorAlias} propertyData - The property data.
   * @returns {Promise<UmbPropertyValueDataPotentiallyWithEditorAlias>} - A promise that resolves to the cloned property data.
   */
  async translateProperty(t, e) {
    const i = e.editorAlias;
    if (!i)
      return console.error(`Editor alias not found for ${e.alias}`), t;
    const s = z.getByTypeAndFilter(
      "propertyValidationPathTranslator",
      (a) => a.forEditorAlias === i
    )[0];
    if (!s)
      return t;
    const n = await G(this, s);
    return n && (n.manifest = s, t = await n.translate(t, e) ?? t), t;
  }
}
class $t extends Q {
  #r = [];
  #t;
  #i;
  #s;
  #e;
  #a = !0;
  #n;
  getData() {
    return this.#n;
  }
  constructor(t) {
    super(t, nt), this.consumeContext(c, (e) => {
      this.#e && this.#e.removeValidator(this), this.#e = e, e?.addValidator(this);
    }).asPromise({ preventTimeout: !0 });
  }
  addPathTranslator(t) {
    this.#r.push(t);
  }
  async askServerForValidation(t, e) {
    this.#e?.messages.removeMessagesByType("server"), this.#a = !1, this.#s?.(), this.#t = new Promise((s, n) => {
      this.#i = s, this.#s = n;
    }), this.#n = t;
    const { error: i } = await e;
    if (this.#n !== t)
      return console.warn(
        "Data has changed since validation request was sent to server. This validation request will be rejected."
      ), Promise.reject();
    if (this.#a = !i, this.#a)
      this.#e?.setTranslationData(void 0);
    else {
      if (!this.#e)
        throw new Error("No context available for translation.");
      this.#e.setTranslationData(t);
      let s = [];
      const n = i.problemDetails;
      n?.errors && Object.keys(n.errors).forEach((a) => {
        const o = n.errors[a];
        a.startsWith("$.") || (a.startsWith(".") ? a = "$" + a : a = "$." + a), o.forEach((h) => s.push({ type: "server", key: M.new(), path: a, body: h }));
      }), s.length > 0 && (s = await new at(this, {
        translationData: this.#n,
        pathTranslators: this.#r
      }).translate(s), this.#e.messages.addMessageObjects(s));
    }
    this.#i?.(), this.#i = void 0, this.#s = void 0;
  }
  get isValid() {
    return this.#a;
  }
  async validate() {
    return this.#t && await this.#t, this.#a ? Promise.resolve() : Promise.reject();
  }
  reset() {
    this.#a = !0, this.#s?.(), this.#i = void 0, this.#s = void 0;
  }
  focusFirstInvalidElement() {
  }
  hostConnected() {
    super.hostConnected(), this.#e && this.#e.addValidator(this);
  }
  hostDisconnected() {
    super.hostDisconnected(), this.#e && (this.#e.removeValidator(this), this.#e = void 0);
  }
  destroy() {
    super.destroy();
  }
}
const lt = Symbol();
class dt extends u {
  #r;
  #t;
  #i;
  #s = [];
  #e = !1;
  #a;
  set value(t) {
    if (this.#e)
      this.#a = t;
    else if (!q(this.#a, t)) {
      this.#a = t;
      const e = this.#s.filter((i) => i.type === "server").map((i) => i.key);
      this.#r?.messages?.removeMessageByKeys(e);
    }
  }
  constructor(t, e, i) {
    super(t, "umbFormControlValidation_" + J(i)), this.#t = e, this.consumeContext(c, (s) => {
      this.#r = s, this.observe(
        s?.messages?.messagesOfNotTypeAndPath("client", i),
        (n) => {
          this.#s = n ?? [], this.#e = this.#s.length === 0, this.#e ? this.#o() : this.#n();
        },
        lt
      );
    });
  }
  #n() {
    this.#i || (this.#i = this.#t.addValidator(
      "customError",
      () => this.#s.map((t) => t.body).join(", "),
      () => !this.#e
    )), this.#t.checkValidity();
  }
  #o() {
    !this.#t || !this.#i || (this.#t.removeValidator(this.#i), this.#i = void 0, this.#t.checkValidity());
  }
  validate() {
    return this.#e ? Promise.resolve() : Promise.reject();
  }
  /**
   * Resets the validation state of this validator.
   */
  reset() {
    this.#e = !1, this.#t.pristine = !0;
  }
  /*getMessages(): string[] {
  	return [this.#control.validationMessage];
  }*/
  focusFirstInvalidElement() {
    this.#t.focusFirstInvalidElement();
  }
  destroy() {
    this.#r = void 0, this.#o(), this.#t = void 0, super.destroy();
  }
}
class ct extends u {
  // The path to the data that this validator is validating.
  #r;
  #t;
  #i;
  #s = !0;
  constructor(t, e, i) {
    super(t), this.#r = i, this.consumeContext(c, (s) => {
      this.#t && this.#t.removeValidator(this), this.#t = s, s?.addValidator(this), i && s?.messages?.getHasMessagesOfPathAndDescendant(i) && (e.pristine = !1);
    }), this.#i = e;
  }
  get isValid() {
    return this.#s;
  }
  #e(t) {
    this.#s !== t && (this.#s = t, this.#r && (t ? this.#t?.messages?.removeMessagesByTypeAndPath("client", this.#r) : this.#t?.messages?.getHasMessageOfPathAndBody(this.#r, this.#i.validationMessage) || this.#t?.messages?.addMessage("client", this.#r, this.#i.validationMessage)));
  }
  #a = this.#e.bind(this, !1);
  #n = this.#e.bind(this, !0);
  validate() {
    return this.#s = this.#i.checkValidity(), this.#s ? Promise.resolve() : Promise.reject();
  }
  /**
   * Resets the validation state of this validator.
   */
  reset() {
    this.#s = !1, this.#i.pristine = !0;
  }
  /*getMessages(): string[] {
  	return [this.#control.validationMessage];
  }*/
  focusFirstInvalidElement() {
    this.#i.focusFirstInvalidElement();
  }
  hostConnected() {
    super.hostConnected(), this.#i.addEventListener(d.TYPE, this.#a), this.#i.addEventListener(l.TYPE, this.#n), this.#t && this.#t.addValidator(this);
  }
  hostDisconnected() {
    super.hostDisconnected(), this.#i && (this.#i.removeEventListener(d.TYPE, this.#a), this.#i.removeEventListener(l.TYPE, this.#n)), this.#t && (this.#t.removeValidator(this), this.#r, this.#t = void 0);
  }
  destroy() {
    super.destroy(), this.#i && (this.#i = void 0);
  }
}
const ut = Symbol();
class kt extends u {
  constructor(t, e, i, s) {
    super(t, s ?? "observeValidationState_" + e), e && this.consumeContext(c, (n) => {
      this.observe(n?.messages.hasMessagesOfPathAndDescendant(e), i, ut);
    });
  }
}
class ft extends Y {
  #r;
  #t;
  #i;
  #s;
  #e;
  // For Directives their arguments have to be defined on the Render method, despite them, not being used by the render method. In this case they are used by the update method.
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  render(t, e, i) {
    return P;
  }
  update(t, e) {
    return t.element ? ((this.#i !== t.element || this.#r !== e[0] || this.#t !== e[1]) && (this.#r = e[0], this.#t = e[1], this.#i = t.element, !this.#e && this.#t && (this.#e = new dt(this.#r, this.#i, this.#t)), this.#s = new ct(this.#r, this.#i, this.#t)), this.#e && (this.#e.value = e[2]), P) : P;
  }
  disconnected() {
    this.#s && (this.#s?.destroy(), this.#s = void 0), this.#e && (this.#e.destroy(), this.#e = void 0), this.#i = void 0;
  }
  /*override reconnected() {
  }*/
}
const Bt = j(ft);
var mt = Object.defineProperty, vt = Object.getOwnPropertyDescriptor, w = (r, t, e, i) => {
  for (var s = vt(t, e), n = r.length - 1, a; n >= 0; n--)
    (a = r[n]) && (s = a(t, e, s) || s);
  return s && mt(t, e, s), s;
};
const gt = [
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
function Lt(r, t) {
  class e extends r {
    constructor(...s) {
      super(...s), this.#r = {}, this._pristine = !0, this.#t = t, this.#i = null, this.#s = [], this.#e = [], this.#n = () => this._runValidators, this.#h = () => {
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
      return this.#t;
    }
    set value(s) {
      this.#t = s;
    }
    #r;
    set pristine(s) {
      this._pristine !== s && (this._pristine = s, this._runValidators());
    }
    get pristine() {
      return this._pristine;
    }
    #t;
    #i;
    #s;
    #e;
    /**
     * Get internal form element.
     * This has to be implemented to provide a FormControl Element of choice for the given context. The element is used as anchor for validation-messages.
     * @function getFormElement
     * @returns {HTMLElement | undefined | null} - Returns the form element or undefined if not found.
     */
    getFormElement() {
      return this.#e.find((s) => s.validity.valid === !1);
    }
    /**
     * Focus first element that is invalid.
     * @function focusFirstInvalidElement
     * @returns {HTMLElement | undefined} - Returns the first invalid element or undefined if no invalid elements are found.
     */
    focusFirstInvalidElement() {
      const s = this.#e.find((n) => n.validity.valid === !1);
      s ? "focusFirstInvalidElement" in s ? s.focusFirstInvalidElement() : s.focus() : this.focus();
    }
    disconnectedCallback() {
      super.disconnectedCallback(), this.#a();
    }
    #a() {
      this.#i && this.#i.removeEventListener("submit", this.#h);
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
    addValidator(s, n, a) {
      const o = {
        flagKey: s,
        getMessageMethod: n,
        checkMethod: a,
        weight: gt.indexOf(s)
      };
      return this.#s.push(o), this.#s.sort((h, f) => h.weight > f.weight ? 1 : f.weight > h.weight ? -1 : 0), o;
    }
    /**
     * Remove validation from this form control.
     * @function removeValidator
     * @param {UmbFormControlValidatorConfig} validator - The specific validation configuration to remove.
     */
    removeValidator(s) {
      const n = this.#s.indexOf(s);
      n !== -1 && this.#s.splice(n, 1);
    }
    #n;
    /**
     * @function addFormControlElement
     * @description Important notice if adding a native form control then ensure that its value and thereby validity is updated when value is changed from the outside.
     * @param {UmbNativeFormControlElement} element - element to validate and include as part of this form control association.
     * @returns {void}
     */
    addFormControlElement(s) {
      this.#e.push(s), s.addEventListener(d.TYPE, this.#n), s.addEventListener(l.TYPE, this.#n), this._pristine === !1 && (s.checkValidity(), this._runValidators());
    }
    /**
     * @function removeFormControlElement
     * @param {UmbNativeFormControlElement} element - element to remove as part of this form controls associated controls.
     * @returns {void}
     */
    removeFormControlElement(s) {
      const n = this.#e.indexOf(s);
      n !== -1 && (this.#e.splice(n, 1), s.removeEventListener(d.TYPE, this.#n), s.removeEventListener(l.TYPE, this.#n), this._pristine === !1 && this._runValidators());
    }
    /**
     * @function setCustomValidity
     * @description Set custom validity state, set to empty string to remove the custom message.
     * @param {string} message - The message to be shown
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLObjectElement/setCustomValidity|HTMLObjectElement:setCustomValidity}
     */
    setCustomValidity(s) {
      this._customValidityObject && this.removeValidator(this._customValidityObject), s != null && s !== "" && (this._customValidityObject = this.addValidator(
        "customError",
        () => s,
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
      this.#r = {};
      let s, n;
      this.#s.some((o) => o.checkMethod() ? (this.#r[o.flagKey] = !0, s = o.getMessageMethod(), !0) : !1), s || this.#e.some((o) => {
        let h;
        for (h in o.validity)
          if (h !== "valid" && o.validity[h])
            return this.#r[h] = !0, s = o.validationMessage, n ??= o, !0;
        return !1;
      });
      const a = Object.values(this.#r).includes(!0);
      this.#r.valid = !a, this._internals.setValidity(
        this.#r,
        // Turn messages into an array and join them with a comma. [NL]:
        //[...messages].join(', '),
        s,
        n ?? this.getFormElement() ?? void 0
      ), this.#o();
    }
    #o() {
      this._pristine !== !0 && (this.#r.valid ? this.dispatchEvent(new l()) : this.dispatchEvent(new d()));
    }
    updated(s) {
      super.updated(s), this._runValidators();
    }
    #h;
    formAssociatedCallback() {
      this.#a(), this.#i = this._internals.form, this.#i && (this.#i.hasAttribute("submit-invalid") && (this.pristine = !1), this.#i.addEventListener("submit", this.#h));
    }
    formResetCallback() {
      this.pristine = !0, this.value = this.getInitialValue() ?? this.getDefaultValue();
    }
    getDefaultValue() {
      return t;
    }
    getInitialValue() {
      return this.getAttribute("value");
    }
    checkValidity() {
      this.pristine = !1, this._runValidators();
      for (const s in this.#e)
        if (this.#e[s].checkValidity() === !1)
          return !1;
      return this._internals?.checkValidity();
    }
    // https://developer.mozilla.org/en-US/docs/Web/API/HTMLObjectElement/validity
    get validity() {
      return this.#r;
    }
    get validationMessage() {
      return this._internals?.validationMessage;
    }
  }
  return w([
    E({ reflect: !1 })
  ], e.prototype, "value"), w([
    E({ type: Boolean, reflect: !0 })
  ], e.prototype, "pristine"), e;
}
class pt extends u {
  constructor(t, e) {
    super(t, e), this.consumeContext(c, (i) => {
      this._context?.removeTranslator(this), this._context = i, i?.addTranslator(this);
    });
  }
  hostDisconnected() {
    this._context?.removeTranslator(this), this._context = void 0, super.hostDisconnected();
  }
}
class k extends pt {
  #r;
  #t;
  constructor(t, e, i, s) {
    super(t, s), this.#r = e, this.#t = i;
  }
  translate(t) {
    if (!this._context) return;
    if (t.indexOf(this.#r) !== 0)
      return !1;
    const e = t.indexOf("]");
    if (e === -1)
      return !1;
    const i = parseInt(t.substring(this.#r.length, e));
    if (isNaN(i))
      return !1;
    const s = this.getDataFromIndex(i);
    return s ? this.#r + this.#t(s) + t.substring(t.indexOf("]")) : !1;
  }
}
function yt(r) {
  const t = [`@.alias == '${r.alias}'`];
  return r.culture !== void 0 && t.push(`@.culture == ${r.culture ? `'${r.culture}'` : "null"}`), r.segment !== void 0 && t.push(`@.segment == ${r.segment ? `'${r.segment}'` : "null"}`), `?(${t.join(" && ")})`;
}
class St extends k {
  constructor(t) {
    super(t, "$.values[", yt), new D({
      removeInVersion: "17",
      deprecated: "UmbVariantValuesValidationPathTranslator",
      solution: "UmbVariantValuesValidationPathTranslator is deprecated."
    }).warn();
  }
  getDataFromIndex(t) {
    return this._context ? this._context.getTranslationData().values[t] : void 0;
  }
}
function bt(r) {
  const t = [`@.culture == ${r.culture ? `'${r.culture}'` : "null"}`];
  return r.segment !== void 0 && t.push(`@.segment == ${r.segment ? `'${r.segment}'` : "null"}`), `?(${t.join(" && ")})`;
}
class Nt extends k {
  constructor(t) {
    super(t, "$.variants[", bt), new D({
      removeInVersion: "17",
      deprecated: "UmbVariantsValidationPathTranslator",
      solution: "UmbVariantsValidationPathTranslator is deprecated."
    }).warn();
  }
  getDataFromIndex(t) {
    return this._context ? this._context.getTranslationData().variants[t] : void 0;
  }
}
const Vt = /@\.([a-zA-Z_$][\w$]*)\s*==\s*['"]([^'"]*)['"]/g;
function jt(r) {
  const t = {};
  let e;
  for (; (e = Vt.exec(r)) !== null; )
    t[e[1]] = e[2];
  return t;
}
export {
  F as GetValueByJsonPath,
  nt as UMB_SERVER_MODEL_VALIDATOR_CONTEXT,
  c as UMB_VALIDATION_CONTEXT,
  At as UMB_VALIDATION_EMPTY_LOCALIZATION_KEY,
  Ut as UMB_VALIDATION_FALSE_LOCALIZATION_KEY,
  k as UmbAbstractArrayValidationPathTranslator,
  dt as UmbBindServerValidationToFormControl,
  yt as UmbDataPathPropertyValueQuery,
  bt as UmbDataPathVariantQuery,
  Lt as UmbFormControlMixin,
  ct as UmbFormControlValidator,
  b as UmbFormValidationMessageElement,
  kt as UmbObserveValidationStateController,
  $t as UmbServerModelValidatorContext,
  It as UmbValidationContext,
  rt as UmbValidationController,
  d as UmbValidationInvalidEvent,
  st as UmbValidationMessagesManager,
  at as UmbValidationPathTranslationController,
  pt as UmbValidationPathTranslatorBase,
  Ft as UmbValidationPropertyPathTranslationController,
  l as UmbValidationValidEvent,
  St as UmbVariantValuesValidationPathTranslator,
  Nt as UmbVariantsValidationPathTranslator,
  jt as extractJsonQueryProps,
  Bt as umbBindToValidation,
  ht as umbQueryMapperForJsonPaths,
  ot as umbScopeMapperForJsonPaths
};
//# sourceMappingURL=index.js.map
