import { html as _, property as v, state as h, customElement as u } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as y } from "@umbraco-cms/backoffice/lit-element";
import "./input-markdown.element-B8hukrMy.js";
import { UmbChangeEvent as c } from "@umbraco-cms/backoffice/event";
var w = Object.defineProperty, f = Object.getOwnPropertyDescriptor, m = (e) => {
  throw TypeError(e);
}, i = (e, t, r, n) => {
  for (var a = n > 1 ? void 0 : n ? f(t, r) : t, s = e.length - 1, p; s >= 0; s--)
    (p = e[s]) && (a = (n ? p(t, r, a) : p(a)) || a);
  return n && a && w(t, r, a), a;
}, E = (e, t, r) => t.has(e) || m("Cannot " + r), S = (e, t, r) => t.has(e) ? m("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), g = (e, t, r) => (E(e, t, "access private method"), r), l, d;
let o = class extends y {
  constructor() {
    super(...arguments), S(this, l), this.readonly = !1, this._overlaySize = "small";
  }
  set config(e) {
    e && (this._preview = e.getValueByAlias("preview"), this._overlaySize = e.getValueByAlias("overlaySize") ?? "small");
  }
  render() {
    return _`
			<umb-input-markdown
				.value=${this.value}
				.overlaySize=${this._overlaySize}
				?preview=${this._preview}
				@change=${g(this, l, d)}
				?readonly=${this.readonly}></umb-input-markdown>
		`;
  }
};
l = /* @__PURE__ */ new WeakSet();
d = function(e) {
  this.value = e.target.value, this.dispatchEvent(new c());
};
i([
  v()
], o.prototype, "value", 2);
i([
  v({ type: Boolean, reflect: !0 })
], o.prototype, "readonly", 2);
i([
  h()
], o.prototype, "_preview", 2);
i([
  h()
], o.prototype, "_overlaySize", 2);
o = i([
  u("umb-property-editor-ui-markdown-editor")
], o);
export {
  o as UmbPropertyEditorUIMarkdownEditorElement,
  o as element
};
//# sourceMappingURL=property-editor-ui-markdown-editor.element-CE6WcSFl.js.map
