import { nothing as d, map as f, html as m, css as _, state as v, customElement as u } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as E } from "@umbraco-cms/backoffice/lit-element";
var C = Object.defineProperty, w = Object.getOwnPropertyDescriptor, c = (t) => {
  throw TypeError(t);
}, h = (t, e, a, r) => {
  for (var s = r > 1 ? void 0 : r ? w(e, a) : e, n = t.length - 1, l; n >= 0; n--)
    (l = t[n]) && (s = (r ? l(e, a, s) : l(s)) || s);
  return r && s && C(e, a, s), s;
}, y = (t, e, a) => e.has(t) || c("Cannot " + a), p = (t, e, a) => (y(t, e, "read from private field"), a ? a.call(t) : e.get(t)), L = (t, e, a) => e.has(t) ? c("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, a), i;
let o = class extends E {
  constructor() {
    super(...arguments), L(this, i, () => {
      let t = this.editor?.view.domAtPos(this.editor.state.selection.from).node;
      for (this._path = []; t && this.editor?.view.dom.contains(t); ) {
        if (t.nodeType === t.ELEMENT_NODE && t instanceof HTMLElement) {
          let e = t.nodeName.toLocaleLowerCase();
          t.id && (e += `#${t.id}`), t.classList.length && (e += `${["", ...t.classList].join(".")}`), this._path.push(e);
        }
        if (!t.parentElement) break;
        t = t.parentElement;
      }
      this._path.reverse().shift();
    });
  }
  connectedCallback() {
    super.connectedCallback(), this.editor && (this.editor.on("selectionUpdate", p(this, i)), p(this, i).call(this));
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.editor && this.editor.off("selectionUpdate", p(this, i));
  }
  render() {
    return this._path ? f(this._path, (t) => m`<code>${t}</code>`) : d;
  }
};
i = /* @__PURE__ */ new WeakMap();
o.styles = [
  _`
			:host {
				display: flex;
				gap: 0.5rem;

				font-size: var(--uui-type-small-size);
				color: var(--uui-color-text-alt);
			}

			code:not(:last-of-type)::after {
				content: '>';
				margin-left: 0.5rem;
			}
		`
];
h([
  v()
], o.prototype, "_path", 2);
o = h([
  u("umb-tiptap-statusbar-element-path")
], o);
export {
  o as UmbTiptapStatusbarElementPathElement,
  o as element
};
//# sourceMappingURL=element-path.tiptap-statusbar-element-0oK27Kye.js.map
