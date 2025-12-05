import { o as w } from "./manifests-CkeJWkpV.js";
import { html as l, nothing as C, css as b, state as g, customElement as x } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as y } from "@umbraco-cms/backoffice/lit-element";
import { UmbTextStyles as S } from "@umbraco-cms/backoffice/style";
import "@umbraco-cms/backoffice/code-editor";
var W = Object.defineProperty, k = Object.getOwnPropertyDescriptor, u = (e) => {
  throw TypeError(e);
}, v = (e, t, o, i) => {
  for (var r = i > 1 ? void 0 : i ? k(t, o) : t, d = e.length - 1, c; d >= 0; d--)
    (c = e[d]) && (r = (i ? c(t, o, r) : c(r)) || r);
  return i && r && W(t, o, r), r;
}, h = (e, t, o) => t.has(e) || u("Cannot " + o), _ = (e, t, o) => (h(e, t, "read from private field"), t.get(e)), p = (e, t, o) => t.has(e) ? u("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, o), O = (e, t, o, i) => (h(e, t, "write to private field"), t.set(e, o), o), m = (e, t, o) => (h(e, t, "access private method"), o), s, a, f, E;
let n = class extends y {
  constructor() {
    super(), p(this, a), this._content = "", p(this, s), this.consumeContext(w, (e) => {
      O(this, s, e), this.observe(_(this, s)?.content, (t) => {
        this._content = t;
      });
    });
  }
  render() {
    return l` <uui-box>
			<div slot="header" id="code-editor-menu-container"></div>
			${m(this, a, E).call(this)}
		</uui-box>`;
  }
};
s = /* @__PURE__ */ new WeakMap();
a = /* @__PURE__ */ new WeakSet();
f = function(e) {
  const o = e.target.code;
  _(this, s)?.setContent(o);
};
E = function() {
  return this._content === void 0 ? C : l`
			<umb-code-editor
				id="content"
				language="css"
				.code=${this._content ?? ""}
				@input=${m(this, a, f)}></umb-code-editor>
		`;
};
n.styles = [
  S,
  b`
			:host {
				display: block;
				width: 100%;
			}

			umb-code-editor {
				--editor-height: calc(100dvh - 260px);
			}

			uui-box {
				min-height: calc(100dvh - 260px);
				margin: var(--uui-size-layout-1);
				--uui-box-default-padding: 0;
				/* remove header border bottom as code editor looks better in this box */
				--uui-color-divider-standalone: transparent;
			}

			#workspace-header {
				width: 100%;
			}
		`
];
v([
  g()
], n.prototype, "_content", 2);
n = v([
  x("umb-stylesheet-code-editor-workspace-view")
], n);
const V = n;
export {
  n as UmbStylesheetCodeEditorWorkspaceViewElement,
  V as default
};
//# sourceMappingURL=stylesheet-code-editor-workspace-view.element-Db8AOMGp.js.map
