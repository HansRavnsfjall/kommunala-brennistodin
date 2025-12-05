import { styleMap as y, html as f, css as b, state as o, property as _, customElement as w } from "@umbraco-cms/backoffice/external/lit";
import { UmbInputEvent as E, UmbChangeEvent as A } from "@umbraco-cms/backoffice/event";
import { UmbLitElement as C } from "@umbraco-cms/backoffice/lit-element";
import "./code-editor.element-Y_YLZjcC.js";
var W = Object.defineProperty, $ = Object.getOwnPropertyDescriptor, g = (e) => {
  throw TypeError(e);
}, i = (e, t, r, n) => {
  for (var s = n > 1 ? void 0 : n ? $(t, r) : t, l = e.length - 1, u; l >= 0; l--)
    (u = e[l]) && (s = (n ? u(t, r, s) : u(s)) || s);
  return n && s && W(t, r, s), s;
}, v = (e, t, r) => t.has(e) || g("Cannot " + r), d = (e, t, r) => (v(e, t, "read from private field"), r ? r.call(e) : t.get(e)), m = (e, t, r) => t.has(e) ? g("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), N = (e, t, r) => (v(e, t, "access private method"), r), p, h, c;
const U = "umb-property-editor-ui-code-editor";
let a = class extends C {
  constructor() {
    super(...arguments), m(this, h), m(this, p, "javascript"), this._language = d(this, p), this._height = 400, this._lineNumbers = !0, this._minimap = !0, this._wordWrap = !1, this.value = "";
  }
  set config(e) {
    if (!e) return;
    const t = e?.getValueByAlias("language");
    this._language = Array.isArray(t) ? t[0] : t, this._height = Number(e?.getValueByAlias("height")) || 400, this._lineNumbers = e?.getValueByAlias("lineNumbers") ?? !1, this._minimap = e?.getValueByAlias("minimap") ?? !1, this._wordWrap = e?.getValueByAlias("wordWrap") ?? !1;
  }
  render() {
    return f`
			<umb-code-editor
				style=${y({ height: `${this._height}px` })}
				.language=${this._language ?? d(this, p)}
				.code=${this.value ?? ""}
				?disable-line-numbers=${!this._lineNumbers}
				?disable-minimap=${!this._minimap}
				?word-wrap=${this._wordWrap}
				@input=${N(this, h, c)}>
			</umb-code-editor>
		`;
  }
};
p = /* @__PURE__ */ new WeakMap();
h = /* @__PURE__ */ new WeakSet();
c = function(e) {
  e instanceof E && (this.value = e.target.code, this.dispatchEvent(new A()));
};
a.styles = [
  b`
			umb-code-editor {
				border-radius: var(--uui-border-radius);
				border: 1px solid var(--uui-color-divider-emphasis);
			}
		`
];
i([
  o()
], a.prototype, "_language", 2);
i([
  o()
], a.prototype, "_height", 2);
i([
  o()
], a.prototype, "_lineNumbers", 2);
i([
  o()
], a.prototype, "_minimap", 2);
i([
  o()
], a.prototype, "_wordWrap", 2);
i([
  _()
], a.prototype, "value", 2);
i([
  _({ attribute: !1 })
], a.prototype, "config", 1);
a = i([
  w(U)
], a);
export {
  a as UmbPropertyEditorUICodeEditorElement,
  a as element
};
//# sourceMappingURL=property-editor-ui-code-editor.element-DgcBJFj6.js.map
