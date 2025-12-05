import { U as v, a as p } from "../form-control.mixin-CW-GhKC4.js";
import { b as Lt } from "../form-control.mixin-CW-GhKC4.js";
import { css as $, property as F, customElement as B, repeat as k, unsafeHTML as N, html as T, directive as S, AsyncDirective as L, nothing as V } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as j } from "@umbraco-cms/backoffice/lit-element";
import { UmbContextToken as E } from "@umbraco-cms/backoffice/context-api";
import { UmbId as P } from "@umbraco-cms/backoffice/id";
import { UmbArrayState as R, createObservablePart as c, UmbObjectState as W, defaultMemoization as Y, simpleHashCode as H } from "@umbraco-cms/backoffice/observable-api";
import { U as q } from "../deprecation-SeDYTswO.js";
import { UmbControllerBase as d, UmbContextBase as J } from "@umbraco-cms/backoffice/class-api";
import { createExtensionApi as K } from "@umbraco-cms/backoffice/extension-api";
import { umbExtensionsRegistry as Q } from "@umbraco-cms/backoffice/extension-registry";
import { UmbDeprecation as w } from "@umbraco-cms/backoffice/utils";
var G = Object.defineProperty, z = Object.getOwnPropertyDescriptor, O = (r) => {
  throw TypeError(r);
}, D = (r, t, e, s) => {
  for (var i = s > 1 ? void 0 : s ? z(t, e) : t, a = r.length - 1, n; a >= 0; a--)
    (n = r[a]) && (i = (s ? n(t, e, i) : n(i)) || i);
  return s && i && G(t, e, i), i;
}, Z = (r, t, e) => t.has(r) || O("Cannot " + e), u = (r, t, e) => (Z(r, t, "read from private field"), e ? e.call(r) : t.get(r)), C = (r, t, e) => t.has(r) ? O("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(r) : t.set(r, e), m, g;
let y = class extends j {
  constructor() {
    super(), this._for = null, this._messages = /* @__PURE__ */ new Map(), C(this, m, async (r) => {
      const t = r.composedPath()[0];
      t.pristine === !1 ? this._messages.set(t, this.localize.string(t.validationMessage)) : this._messages.delete(t), this.requestUpdate();
    }), C(this, g, (r) => {
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
    const e = t ?? this, s = this._for;
    s !== e && (s !== null && (s.removeEventListener(v.TYPE, u(this, m)), s.removeEventListener(p.TYPE, u(this, g))), this._for = e, this._for.addEventListener(v.TYPE, u(this, m)), this._for.addEventListener(p.TYPE, u(this, g)));
  }
  render() {
    return T`
			<slot></slot>
			<div id="messages">
				${k(this._messages, (r) => T`<div>${N(r[1])}</div>`)}
				<slot name="message"></slot>
			</div>
		`;
  }
};
m = /* @__PURE__ */ new WeakMap();
g = /* @__PURE__ */ new WeakMap();
y.styles = [
  $`
			#messages {
				color: var(--uui-color-invalid-standalone);
			}
		`
];
D([
  F({ reflect: !1, attribute: !0 })
], y.prototype, "for", 1);
y = D([
  B("umb-form-validation-message")
], y);
const X = "#validation_invalidEmpty", Ot = "#validation_invalidFalse";
function _(r, t) {
  if (t === "$") return r;
  if (t.startsWith("$["))
    return A(r, t.slice(2));
  const e = t.startsWith("$.") ? t.slice(2) : t;
  return b(r, e);
}
function b(r, t) {
  if (!r) return;
  const e = t.match(/\.|\[/);
  if (e === null || e.index === void 0) return r[t];
  const s = t.slice(0, e.index), i = t.slice(e.index + 1);
  if (!s) return;
  const a = r[s];
  return i === void 0 ? a : Array.isArray(a) ? A(a, i) : b(a, i);
}
function A(r, t) {
  if (!r) return;
  const e = t.match(/\]/);
  if (!e) return;
  const s = t.slice(0, e.index);
  if (s.startsWith("?(") && s.endsWith(")")) {
    const i = tt(s), a = r.findIndex(i[0]);
    if (a === -1) return;
    const n = r[a];
    return e.index === void 0 || e.index + 1 >= t.length ? n : b(n, t.slice(e.index + 2)) ?? n;
  } else {
    const i = parseInt(s);
    if (isNaN(i)) return;
    const a = r[i];
    return e.index === void 0 || e.index + 1 >= t.length ? a : b(a, t.slice(e.index + 2)) ?? a;
  }
}
function tt(r) {
  return r.slice(2, -1).split(" && ").map((s) => {
    const [i, a] = s.split(" == "), n = i.slice(2), o = a.slice(1, -1);
    return (h) => h[n] === o;
  });
}
const l = new E("UmbValidationContext");
function f(r, t) {
  return r.indexOf(t) === 0 && (r.length === t.length || r[t.length] === "." || r[t.length] === "[");
}
class et {
  constructor() {
    this.#t = new R([], (t) => t.key), this.messages = this.#t.asObservable(), this.filteredMessages = this.#t.asObservablePart((t) => this.#s ? t.filter(this.#s) : t), this.#i = 0, this.#e = [];
  }
  #s;
  #t;
  getNotFilteredMessages() {
    return this.#t.getValue();
  }
  getMessages() {
    const t = this.#t.getValue();
    return this.#s ? t.filter(this.#s) : t;
  }
  debug(t) {
    this.messages.subscribe((e) => console.log(t, e));
  }
  debugFiltered(t) {
    this.filteredMessages.subscribe((e) => console.log(t, e));
  }
  filter(t) {
    this.#s = t;
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
    return this.getMessages().filter((e) => f(e.path, t));
  }
  getHasMessageOfPathAndBody(t, e) {
    return this.getMessages().some((s) => s.path === t && s.body === e);
  }
  messagesOfPathAndDescendant(t) {
    return c(
      this.filteredMessages,
      (e) => e.filter((s) => f(s.path, t))
    );
  }
  messagesOfTypeAndPath(t, e) {
    return c(
      this.filteredMessages,
      (s) => s.filter((i) => i.type === t && i.path === e)
    );
  }
  messagesOfNotTypeAndPath(t, e) {
    return c(
      this.filteredMessages,
      (s) => s.filter((i) => i.type !== t && i.path === e)
    );
  }
  hasMessagesOfPathAndDescendant(t) {
    return c(
      this.filteredMessages,
      (e) => e.some((s) => f(s.path, t))
    );
  }
  getHasMessagesOfPathAndDescendant(t) {
    return this.getMessages().some(
      (e) => e.path.indexOf(t) === 0 && (e.path.length === t.length || e.path[t.length] === "." || e.path[t.length] === "[")
    );
  }
  addMessage(t, e, s, i = P.new()) {
    e = this.#r(e) ?? e, !this.#t.getValue().find((a) => a.type === t && a.path === e && a.body === s) && (this.initiateChange(), this.#t.appendOne({ type: t, key: i, path: e, body: s }), this.finishChange());
  }
  addMessages(t, e, s) {
    e = this.#r(e) ?? e;
    const i = this.#t.getValue(), a = s.filter(
      (n) => i.find((o) => o.type === t && o.path === e && o.body === n) === void 0
    );
    this.initiateChange(), this.#t.append(a.map((n) => ({ type: t, key: P.new(), path: e, body: n }))), this.finishChange();
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
    this.initiateChange(), this.#t.filter((e) => f(e.path, t)), this.finishChange();
  }
  removeMessagesByTypeAndPath(t, e) {
    this.initiateChange(), this.#t.filter((s) => !(s.type === t && s.path === e)), this.finishChange();
  }
  #r(t) {
    for (const e of this.#e) {
      const s = e.translate(t);
      if (s)
        return this.#r(s) ?? s;
    }
  }
  #e;
  addTranslator(t) {
    this.initiateChange(), this.#e.indexOf(t) === -1 && this.#e.push(t);
    for (const e of this.#t.getValue()) {
      const s = this.#r(e.path);
      s && this.#t.updateOne(e.key, { path: s });
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
function x(r, t, e) {
  if (r.startsWith(t + ".") || r === t)
    return e + r.slice(t.length);
}
const st = /@\.culture == ('[^']*'|null) *&& *@\.segment == ('[^']*'|null)/g;
class it extends d {
  constructor(t) {
    super(t), this.#t = !1, this.#i = new W(void 0), this.#r = [], this.#e = !1, this.#n = !1, this.messages = new et(), this.#m = (e) => {
      if (this.#a) {
        if (this.#a.messages.initiateChange(), this.#l) {
          const s = this.#l.filter((i) => !e.find((a) => a.key === i.key));
          this.#a.messages.removeMessageByKeys(s.map((i) => i.key));
        }
        this.#h === "$" ? this.#a.messages.addMessageObjects(e) : e.forEach((s) => {
          const i = x(s.path, "$", this.#h);
          if (i === void 0)
            throw new Error("Path was not transformed correctly and can therefor not be synced with parent messages.");
          this.#a.messages.addMessage(s.type, i, s.body, s.key);
        }), this.#a.messages.finishChange();
      }
    };
  }
  // The current provider controller, that is providing this context:
  #s;
  #t;
  #i;
  /**
   * @param path
   * @deprecated Use extension type 'propertyValidationPathTranslator' instead. Will be removed in v.17
   * @returns {any} - Returns the translation data for the given path.
   */
  translationDataOf(t) {
    return this.#i.asObservablePart((e) => _(e, t));
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
    return new q({
      removeInVersion: "17",
      deprecated: "getTranslationData",
      solution: "getTranslationData is deprecated."
    }).warn(), this.#i.getValue();
  }
  #r;
  #e;
  #n;
  #a;
  #o;
  #d;
  #l;
  #h;
  #c;
  setVariantId(t) {
    this.#c = t, this.messages?.filter((e) => {
      const s = [...e.path.matchAll(st)];
      return s.length === 0 ? !0 : (
        // Find any bad matches:
        !s.some((i) => {
          const a = i[1] === "null" ? null : i[1].substring(1, i[1].length - 1), n = i[2] === "null" ? null : i[2].substring(1, i[2].length - 1);
          return a !== null && a !== this.#c.culture || n !== this.#c.segment;
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
      this.#u = t, this.#s = t.provideContext(l, this);
    }
  }
  unprovide() {
    this.#s && (this.#t = !0, this.#s.destroy(), this.#s = void 0, this.#t = !1, this.#u = void 0);
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
    if (!(this.#h && this.#h === t)) {
      if (!t) {
        this.#g();
        return;
      }
      this.consumeContext(l, (e) => {
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
    this.#a && this.#a.removeValidator(this), this.#a = t, this.messages.clear(), this.#l = void 0, this.#h = e, this.#f(), this.observe(
      t?.translationDataOf(e),
      (s) => {
        this.setTranslationData(s);
      },
      "observeTranslationData"
    ), this.observe(
      t?.messages.messagesOfPathAndDescendant(e),
      (s) => {
        if (!s) {
          this.messages.clear();
          return;
        }
        if (this.messages.initiateChange(), this.#d) {
          const i = this.#d.filter((a) => !s.find((n) => n.key === a.key));
          this.messages.removeMessageByKeys(i.map((a) => a.key));
        }
        this.#d = s, this.#h === "$" ? this.messages.addMessageObjects(s) : s.forEach((i) => {
          const a = x(i.path, this.#h, "$");
          if (a === void 0)
            throw new Error(
              "Path was not transformed correctly and can therefor not be transfered to the local validation context messages."
            );
          this.messages.addMessage(i.type, a, i.body, i.key);
        }), this.#l = this.messages.getNotFilteredMessages(), this.messages.finishChange();
      },
      "observeParentMessages"
    );
  }
  #g() {
    this.removeUmbControllerByAlias("observeTranslationData"), this.removeUmbControllerByAlias("observeParentMessages"), this.#a && this.#a.removeValidator(this), this.messages.clear(), this.#l = void 0, this.setTranslationData(void 0);
  }
  #f() {
    this.#o && this.#a && this.#a.addValidator(this);
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
    this.#a && (this.#o || this.#m(this.messages.getNotFilteredMessages()));
  }
  #m;
  hostConnected() {
    super.hostConnected(), this.#f();
  }
  hostDisconnected() {
    super.hostDisconnected(), this.#a && this.#a.removeValidator(this);
  }
  /**
   * Get if this context is valid.
   * Notice this does not verify the validity.
   * @returns {boolean}
   */
  get isValid() {
    return this.#n;
  }
  /**
   * Add a validator to this context.
   * This validator will have to be valid for the context to be valid.
   * If the context is in validation mode, the validator will be validated immediately.
   * @param validator { UmbValidator } - The validator to add to this context.
   */
  addValidator(t) {
    if (!this.#r.includes(t)) {
      if (t === this)
        throw new Error("Cannot add it self as validator");
      this.#r.push(t), this.#e && this.validate().catch(() => {
      });
    }
  }
  /**
   * Remove a validator from this context.
   * @param validator {UmbValidator} - The validator to remove from this context.
   */
  removeValidator(t) {
    const e = this.#r.indexOf(t);
    e !== -1 && (this.#r.splice(e, 1), this.#e && this.validate().catch(() => {
    }));
  }
  /**
   * Validate this context, all the validators of this context will be validated.
   * Notice its a recursive check meaning sub validation contexts also validates their validators.
   * @returns succeed {Promise<boolean>} - Returns a promise that resolves to true if the validation succeeded.
   */
  async validate() {
    this.#e = !0;
    const t = this.#r.length === 0 ? !0 : await Promise.all(this.#r.map((i) => i.validate())).then(
      () => !0,
      () => !1
    );
    if (this.#r.length === 0 && t === !1)
      throw new Error("No validators to validate, but validation failed");
    if (this.messages === void 0)
      return Promise.reject();
    const e = this.messages.getHasAnyMessages(), s = e ? !1 : t;
    if (this.#n = s, s === !1) {
      if (e === !1 && t === !1) {
        const i = this.#r.filter((a) => a.isValid === !1);
        console.warn(
          `Missing validation messages to represent why a child validation context is invalid.
					This could be because the Validator does not have a 'data-path' and therefore not able to set a message to the Validation Context.
					These Validators was not valid, one of these did not set a message to represent their state:`,
          i
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
    const t = this.#r.find((e) => !e.isValid);
    t && t.focusFirstInvalidElement();
  }
  /**
   * Reset the validation state of this context.
   */
  reset() {
    this.#e = !1, this.messages.clear(), this.#r.forEach((t) => t.reset());
  }
  #v() {
    this.#r === void 0 || this.#r.length === 0 || (this.#r.forEach((t) => {
      t.destroy();
    }), this.#r = []);
  }
  destroy() {
    super.destroy(), this.#e = !1, this.#t !== !0 && (this.#v(), this.unprovide(), this.messages?.destroy(), this.messages = void 0, this.#a && this.#a.removeValidator(this), this.#l = void 0, this.#d = void 0, this.#a = void 0);
  }
}
class Dt extends it {
  constructor(t) {
    super(t), this.provideContext(l, this);
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
const rt = new E(
  "UmbServerModelValidationContext"
);
class at extends d {
  //
  #s = [];
  #t;
  constructor(t, e) {
    super(t), this.#s = e.pathTranslators, this.#t = e.translationData;
  }
  async translate(t) {
    let e = t.map((s) => s.path);
    for (const s of this.#s) {
      const i = new s(this);
      e = await i.translate(e, this.#t), i.destroy(), t = t.map((a, n) => ({
        ...a,
        // Here we can use the order/index to map back to the message-object.
        path: e[n]
      }));
    }
    return t;
  }
}
async function nt(r, t, e) {
  const s = t.length, i = [], a = [];
  for (let o = 0; o < r.length; o++)
    r[o].indexOf(t) === 0 && (a.push(o), i.push("$" + r[o].substring(s)));
  r = [...r];
  const n = await e(i);
  for (let o = 0; o < n.length; o++)
    r[a[o]] = t + n[o].substring(1);
  return r;
}
async function ot(r, t, e, s) {
  const i = [];
  let a = r.map(
    (n) => {
      if (!n.startsWith("$["))
        throw new Error("Invalid JSON-Path query `" + n + "`. Expected to start with `$[`.");
      const o = n.indexOf("]");
      let h = n.substring(2, o);
      const I = n.substring(o + 1), M = Number(h);
      return isNaN(M) || (h = e(t[M])), i.includes(h) || i.push(h), `$[${h}]${I}`;
    },
    {}
  );
  if (s)
    for (const n of i) {
      const o = _(t, `$[${n}]`);
      a = await nt(
        a,
        `$[${n}]`,
        async (h) => s(h, o)
      );
    }
  return a;
}
class _t extends d {
  /**
   * translates the property data.
   * @param {UmbPropertyValueDataPotentiallyWithEditorAlias} property - The property data.
   * @param paths
   * @param data
   * @param queryConstructor
   * @returns {Promise<UmbPropertyValueDataPotentiallyWithEditorAlias>} - A promise that resolves to the cloned property data.
   */
  async translateProperties(t, e, s) {
    return await ot(t, e, s, async (i, a) => a ? await this.translateProperty(i, a) : i);
  }
  /**
   * translates the property data.
   * @param {Array<string>} propertyPaths - The paths to be translated.
   * @param {UmbPropertyValueDataPotentiallyWithEditorAlias} propertyData - The property data.
   * @returns {Promise<UmbPropertyValueDataPotentiallyWithEditorAlias>} - A promise that resolves to the cloned property data.
   */
  async translateProperty(t, e) {
    const s = e.editorAlias;
    if (!s)
      return console.error(`Editor alias not found for ${e.alias}`), t;
    const i = Q.getByTypeAndFilter(
      "propertyValidationPathTranslator",
      (n) => n.forEditorAlias === s
    )[0];
    if (!i)
      return t;
    const a = await K(this, i);
    return a && (a.manifest = i, t = await a.translate(t, e) ?? t), t;
  }
}
class At extends J {
  #s = [];
  #t;
  #i;
  #r;
  #e;
  #n = !0;
  #a;
  getData() {
    return this.#a;
  }
  constructor(t) {
    super(t, rt), this.consumeContext(l, (e) => {
      this.#e && this.#e.removeValidator(this), this.#e = e, e?.addValidator(this);
    }).asPromise({ preventTimeout: !0 });
  }
  addPathTranslator(t) {
    this.#s.push(t);
  }
  async askServerForValidation(t, e) {
    this.#e?.messages.removeMessagesByType("server"), this.#n = !1, this.#r?.(), this.#t = new Promise((i, a) => {
      this.#i = i, this.#r = a;
    }), this.#a = t;
    const { error: s } = await e;
    if (this.#a !== t)
      return console.warn(
        "Data has changed since validation request was sent to server. This validation request will be rejected."
      ), Promise.reject();
    if (this.#n = !s, this.#n)
      this.#e?.setTranslationData(void 0);
    else {
      if (!this.#e)
        throw new Error("No context available for translation.");
      this.#e.setTranslationData(t);
      let i = [];
      const a = s.problemDetails;
      a?.errors && Object.keys(a.errors).forEach((n) => {
        const o = a.errors[n];
        n.startsWith("$.") || (n.startsWith(".") ? n = "$" + n : n = "$." + n), n.endsWith(".Value") && (n = n.slice(0, -6) + ".value"), o.forEach((h) => i.push({ type: "server", key: P.new(), path: n, body: h }));
      }), i.length > 0 && (i = await new at(this, {
        translationData: this.#a,
        pathTranslators: this.#s
      }).translate(i), this.#e.messages.addMessageObjects(i));
    }
    this.#i?.(), this.#i = void 0, this.#r = void 0;
  }
  get isValid() {
    return this.#n;
  }
  async validate() {
    return this.#t && await this.#t, this.#n ? Promise.resolve() : Promise.reject();
  }
  reset() {
    this.#n = !0, this.#r?.(), this.#i = void 0, this.#r = void 0;
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
const ht = Symbol();
class lt extends d {
  #s;
  #t;
  #i;
  #r = [];
  #e = !1;
  #n;
  set value(t) {
    if (this.#e)
      this.#n = t;
    else if (!Y(this.#n, t)) {
      this.#n = t;
      const e = this.#r.filter((s) => s.type === "server").map((s) => s.key);
      this.#s?.messages?.removeMessageByKeys(e);
    }
  }
  constructor(t, e, s) {
    super(t, "umbFormControlValidation_" + H(s)), this.#t = e, this.consumeContext(l, (i) => {
      this.#s = i, this.observe(
        i?.messages?.messagesOfNotTypeAndPath("client", s),
        (a) => {
          this.#r = a ?? [], this.#e = this.#r.length === 0, this.#e ? this.#o() : this.#a();
        },
        ht
      );
    });
  }
  #a() {
    this.#i || (this.#i = this.#t.addValidator(
      "customError",
      () => this.#r.map((t) => t.body).join(", "),
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
    this.#s = void 0, this.#o(), this.#t = void 0, super.destroy();
  }
}
class dt extends d {
  // The path to the data that this validator is validating.
  #s;
  #t;
  #i;
  #r = !0;
  constructor(t, e, s) {
    super(t), this.#s = s, this.consumeContext(l, (i) => {
      this.#t && this.#t.removeValidator(this), this.#t = i, i?.addValidator(this), s && i?.messages?.getHasMessagesOfPathAndDescendant(s) && (e.pristine = !1);
    }), this.#i = e;
  }
  get isValid() {
    return this.#r;
  }
  #e(t) {
    this.#r !== t && (this.#r = t, this.#s && (t ? this.#t?.messages?.removeMessagesByTypeAndPath("client", this.#s) : this.#t?.messages?.getHasMessageOfPathAndBody(this.#s, this.#i.validationMessage) || this.#t?.messages?.addMessage("client", this.#s, this.#i.validationMessage)));
  }
  #n = this.#e.bind(this, !1);
  #a = this.#e.bind(this, !0);
  validate() {
    return this.#r = this.#i.checkValidity(), this.#r ? Promise.resolve() : Promise.reject();
  }
  /**
   * Resets the validation state of this validator.
   */
  reset() {
    this.#r = !1, this.#i.pristine = !0;
  }
  /*getMessages(): string[] {
  	return [this.#control.validationMessage];
  }*/
  focusFirstInvalidElement() {
    this.#i.focusFirstInvalidElement();
  }
  hostConnected() {
    super.hostConnected(), this.#i.addEventListener(v.TYPE, this.#n), this.#i.addEventListener(p.TYPE, this.#a), this.#t && this.#t.addValidator(this);
  }
  hostDisconnected() {
    super.hostDisconnected(), this.#i && (this.#i.removeEventListener(v.TYPE, this.#n), this.#i.removeEventListener(p.TYPE, this.#a)), this.#t && (this.#t.removeValidator(this), this.#s, this.#t = void 0);
  }
  destroy() {
    super.destroy(), this.#i && (this.#i = void 0);
  }
}
const ct = Symbol();
class Ut extends d {
  constructor(t, e, s, i) {
    super(t, i ?? "observeValidationState_" + e), e && this.consumeContext(l, (a) => {
      this.observe(a?.messages.hasMessagesOfPathAndDescendant(e), s, ct);
    });
  }
}
class It extends d {
  //
  #s;
  #t = !1;
  #i;
  #r;
  #e;
  #n;
  #a = !1;
  #o;
  set value(t) {
    this.#o = t, this.runCheck();
  }
  get value() {
    return this.#o;
  }
  constructor(t, e) {
    super(t), this.#i = e.dataPath, this.#r = e.check ?? ((s) => s == null || s === ""), this.#e = e.message ?? (() => X), this.#n = e.navigateToError, this.consumeContext(l, (s) => {
      this.#s !== s && (this.#s?.removeValidator(this), this.#s = s, this.#s?.addValidator(this), this.runCheck());
    });
  }
  runCheck() {
    this.#t && (this.#a = !this.#r(this.#o), this.#s && this.#i && (this.#a ? this.#s.messages.removeMessagesByTypeAndPath("custom", this.#i) : this.#s.messages.addMessage("custom", this.#i, this.#e())));
  }
  async validate() {
    return this.#t = !0, this.runCheck();
  }
  get isValid() {
    return this.#a;
  }
  reset() {
    this.#a = !1, this.#t = !1;
  }
  /**
   * Focus the first invalid element.
   */
  focusFirstInvalidElement() {
    this.#n?.();
  }
  destroy() {
    !this.#a && this.#i && this.#s?.messages.removeMessagesByTypeAndPath("custom", this.#i), this.#s = void 0, this.#o = void 0, super.destroy();
  }
}
class ut extends L {
  #s;
  #t;
  #i;
  #r;
  #e;
  // For Directives their arguments have to be defined on the Render method, despite them, not being used by the render method. In this case they are used by the update method.
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  render(t, e, s) {
    return V;
  }
  update(t, e) {
    return t.element ? ((this.#i !== t.element || this.#s !== e[0] || this.#t !== e[1]) && (this.#s = e[0], this.#t = e[1], this.#i = t.element, !this.#e && this.#t && (this.#e = new lt(this.#s, this.#i, this.#t)), this.#r = new dt(this.#s, this.#i, this.#t)), this.#e && (this.#e.value = e[2]), V) : V;
  }
  disconnected() {
    this.#r && (this.#r?.destroy(), this.#r = void 0), this.#e && (this.#e.destroy(), this.#e = void 0), this.#i = void 0;
  }
  /*override reconnected() {
  }*/
}
const $t = S(ut);
class ft extends d {
  constructor(t, e) {
    super(t, e), this.consumeContext(l, (s) => {
      this._context?.removeTranslator(this), this._context = s, s?.addTranslator(this);
    });
  }
  hostDisconnected() {
    this._context?.removeTranslator(this), this._context = void 0, super.hostDisconnected();
  }
}
class U extends ft {
  #s;
  #t;
  constructor(t, e, s, i) {
    super(t, i), this.#s = e, this.#t = s;
  }
  translate(t) {
    if (!this._context) return;
    if (t.indexOf(this.#s) !== 0)
      return !1;
    const e = t.indexOf("]");
    if (e === -1)
      return !1;
    const s = parseInt(t.substring(this.#s.length, e));
    if (isNaN(s))
      return !1;
    const i = this.getDataFromIndex(s);
    return i ? this.#s + this.#t(i) + t.substring(t.indexOf("]")) : !1;
  }
}
function mt(r) {
  const t = [`@.alias == '${r.alias}'`];
  return r.culture !== void 0 && t.push(`@.culture == ${r.culture ? `'${r.culture}'` : "null"}`), r.segment !== void 0 && t.push(`@.segment == ${r.segment ? `'${r.segment}'` : "null"}`), `?(${t.join(" && ")})`;
}
class Ft extends U {
  constructor(t) {
    super(t, "$.values[", mt), new w({
      removeInVersion: "17",
      deprecated: "UmbVariantValuesValidationPathTranslator",
      solution: "UmbVariantValuesValidationPathTranslator is deprecated."
    }).warn();
  }
  getDataFromIndex(t) {
    return this._context ? this._context.getTranslationData().values[t] : void 0;
  }
}
function gt(r) {
  const t = [`@.culture == ${r.culture ? `'${r.culture}'` : "null"}`];
  return r.segment !== void 0 && t.push(`@.segment == ${r.segment ? `'${r.segment}'` : "null"}`), `?(${t.join(" && ")})`;
}
class Bt extends U {
  constructor(t) {
    super(t, "$.variants[", gt), new w({
      removeInVersion: "17",
      deprecated: "UmbVariantsValidationPathTranslator",
      solution: "UmbVariantsValidationPathTranslator is deprecated."
    }).warn();
  }
  getDataFromIndex(t) {
    return this._context ? this._context.getTranslationData().variants[t] : void 0;
  }
}
const vt = /@\.([a-zA-Z_$][\w$]*)\s*==\s*['"]([^'"]*)['"]/g;
function kt(r) {
  const t = {};
  let e;
  for (; (e = vt.exec(r)) !== null; )
    t[e[1]] = e[2];
  return t;
}
export {
  _ as GetValueByJsonPath,
  rt as UMB_SERVER_MODEL_VALIDATOR_CONTEXT,
  l as UMB_VALIDATION_CONTEXT,
  X as UMB_VALIDATION_EMPTY_LOCALIZATION_KEY,
  Ot as UMB_VALIDATION_FALSE_LOCALIZATION_KEY,
  U as UmbAbstractArrayValidationPathTranslator,
  lt as UmbBindServerValidationToFormControl,
  mt as UmbDataPathPropertyValueQuery,
  gt as UmbDataPathVariantQuery,
  Lt as UmbFormControlMixin,
  dt as UmbFormControlValidator,
  y as UmbFormValidationMessageElement,
  Ut as UmbObserveValidationStateController,
  At as UmbServerModelValidatorContext,
  Dt as UmbValidationContext,
  it as UmbValidationController,
  v as UmbValidationInvalidEvent,
  et as UmbValidationMessagesManager,
  at as UmbValidationPathTranslationController,
  ft as UmbValidationPathTranslatorBase,
  _t as UmbValidationPropertyPathTranslationController,
  p as UmbValidationValidEvent,
  It as UmbValueValidator,
  Ft as UmbVariantValuesValidationPathTranslator,
  Bt as UmbVariantsValidationPathTranslator,
  kt as extractJsonQueryProps,
  $t as umbBindToValidation,
  ot as umbQueryMapperForJsonPaths,
  nt as umbScopeMapperForJsonPaths
};
//# sourceMappingURL=index.js.map
