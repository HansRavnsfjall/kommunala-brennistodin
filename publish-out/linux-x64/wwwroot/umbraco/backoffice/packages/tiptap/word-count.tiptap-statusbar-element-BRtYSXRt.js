import { html as w, state as l, customElement as C } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as f } from "@umbraco-cms/backoffice/lit-element";
var v = Object.defineProperty, m = Object.getOwnPropertyDescriptor, u = (t) => {
  throw TypeError(t);
}, i = (t, r, a, c) => {
  for (var e = c > 1 ? void 0 : c ? m(r, a) : r, n = t.length - 1, d; n >= 0; n--)
    (d = t[n]) && (e = (c ? d(r, a, e) : d(e)) || e);
  return c && e && v(r, a, e), e;
}, b = (t, r, a) => r.has(t) || u("Cannot " + a), h = (t, r, a) => (b(t, r, "read from private field"), a ? a.call(t) : r.get(t)), _ = (t, r, a) => r.has(t) ? u("Cannot add the same private member more than once") : r instanceof WeakSet ? r.add(t) : r.set(t, a), s, p;
let o = class extends f {
  constructor() {
    super(...arguments), this._characters = 0, this._words = 0, this._showCharacters = !1, _(this, s, () => {
      this._characters = this.editor?.storage.characterCount.characters() ?? 0, this._words = this.editor?.storage.characterCount.words() ?? 0;
    }), _(this, p, () => this._showCharacters = !this._showCharacters);
  }
  connectedCallback() {
    super.connectedCallback(), this.editor && (this.editor.on("update", h(this, s)), h(this, s).call(this));
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.editor && this.editor.off("update", h(this, s));
  }
  render() {
    const t = this._showCharacters ? this._characters.toLocaleString() + " " + (this._characters === 1 ? "character" : "characters") : this._words.toLocaleString() + " " + (this._words === 1 ? "word" : "words");
    return w`<uui-button compact label=${t} @click=${h(this, p)}></uui-button>`;
  }
};
s = /* @__PURE__ */ new WeakMap();
p = /* @__PURE__ */ new WeakMap();
i([
  l()
], o.prototype, "_characters", 2);
i([
  l()
], o.prototype, "_words", 2);
i([
  l()
], o.prototype, "_showCharacters", 2);
o = i([
  C("umb-tiptap-statusbar-word-count")
], o);
export {
  o as UmbTiptapStatusbarWordCountElement,
  o as element
};
//# sourceMappingURL=word-count.tiptap-statusbar-element-BRtYSXRt.js.map
