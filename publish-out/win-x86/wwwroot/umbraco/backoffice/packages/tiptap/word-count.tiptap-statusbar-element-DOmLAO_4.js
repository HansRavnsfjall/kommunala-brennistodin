import { html as w, state as _, customElement as C } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as f } from "@umbraco-cms/backoffice/lit-element";
var v = Object.defineProperty, m = Object.getOwnPropertyDescriptor, u = (t) => {
  throw TypeError(t);
}, h = (t, r, a, c) => {
  for (var e = c > 1 ? void 0 : c ? m(r, a) : r, n = t.length - 1, p; n >= 0; n--)
    (p = t[n]) && (e = (c ? p(r, a, e) : p(e)) || e);
  return c && e && v(r, a, e), e;
}, b = (t, r, a) => r.has(t) || u("Cannot " + a), i = (t, r, a) => (b(t, r, "read from private field"), a ? a.call(t) : r.get(t)), d = (t, r, a) => r.has(t) ? u("Cannot add the same private member more than once") : r instanceof WeakSet ? r.add(t) : r.set(t, a), s, l;
let o = class extends f {
  constructor() {
    super(...arguments), this._characters = 0, this._words = 0, this._showCharacters = !1, d(this, s, () => {
      this._characters = this.editor?.storage.characterCount.characters() ?? 0, this._words = this.editor?.storage.characterCount.words() ?? 0;
    }), d(this, l, () => this._showCharacters = !this._showCharacters);
  }
  connectedCallback() {
    super.connectedCallback(), this.editor && (this.editor.on("update", i(this, s)), i(this, s).call(this));
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.editor && this.editor.off("update", i(this, s));
  }
  render() {
    const t = this._showCharacters ? this.localize.term("tiptap_statusbar_characters", this._characters) : this.localize.term("tiptap_statusbar_words", this._words);
    return w`<uui-button compact label=${t} @click=${i(this, l)}></uui-button>`;
  }
};
s = /* @__PURE__ */ new WeakMap();
l = /* @__PURE__ */ new WeakMap();
h([
  _()
], o.prototype, "_characters", 2);
h([
  _()
], o.prototype, "_words", 2);
h([
  _()
], o.prototype, "_showCharacters", 2);
o = h([
  C("umb-tiptap-statusbar-word-count")
], o);
export {
  o as UmbTiptapStatusbarWordCountElement,
  o as element
};
//# sourceMappingURL=word-count.tiptap-statusbar-element-DOmLAO_4.js.map
