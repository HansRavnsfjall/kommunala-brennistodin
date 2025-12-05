import { html as c, ifDefined as b, css as v, query as E, customElement as g } from "@umbraco-cms/backoffice/external/lit";
import { UmbModalBaseElement as C } from "@umbraco-cms/backoffice/modal";
var y = Object.defineProperty, $ = Object.getOwnPropertyDescriptor, u = (e) => {
  throw TypeError(e);
}, m = (e, t, o, d) => {
  for (var i = d > 1 ? void 0 : d ? $(t, o) : t, s = e.length - 1, l; s >= 0; s--)
    (l = e[s]) && (i = (d ? l(t, o, i) : l(i)) || i);
  return d && i && y(t, o, i), i;
}, x = (e, t, o) => t.has(e) || u("Cannot " + o), w = (e, t, o) => t.has(e) ? u("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, o), n = (e, t, o) => (x(e, t, "access private method"), o), a, h, f, _, p;
let r = class extends C {
  constructor() {
    super(...arguments), w(this, a);
  }
  render() {
    return c`
			<umb-body-layout .headline=${this.data?.headline ?? "Code Editor"}>
				<div id="editor-box">${n(this, a, p).call(this)}</div>
				<uui-button
					slot="actions"
					label=${this.localize.term("general_cancel")}
					@click=${n(this, a, f)}></uui-button>
				<uui-button
					slot="actions"
					color=${this.data?.color || "positive"}
					look="primary"
					label=${this.localize.string(this.data?.confirmLabel) || this.localize.term("general_submit")}
					@click=${n(this, a, h)}></uui-button>
			</umb-body-layout>
		`;
  }
};
a = /* @__PURE__ */ new WeakSet();
h = function() {
  this.value = { content: this._codeEditor?.editor?.monacoEditor?.getValue() ?? "" }, this.modalContext?.submit();
};
f = function() {
  this.modalContext?.reject();
};
_ = function() {
  this.data?.formatOnLoad && setTimeout(() => {
    this._codeEditor?.editor?.monacoEditor?.getAction("editor.action.formatDocument")?.run();
  }, 100);
};
p = function() {
  return c`
			<umb-code-editor
				language=${b(this.data?.language)}
				.code=${this.data?.content ?? ""}
				@loaded=${n(this, a, _)}></umb-code-editor>
		`;
};
r.styles = [
  v`
			#editor-box {
				padding: var(--uui-box-default-padding, var(--uui-size-space-5, 18px));
				height: 100%;
				display: flex;
			}

			umb-code-editor {
				width: 100%;
			}
		`
];
m([
  E("umb-code-editor")
], r.prototype, "_codeEditor", 2);
r = m([
  g("umb-code-editor-modal")
], r);
const z = r;
export {
  r as UmbCodeEditorModalElement,
  z as default
};
//# sourceMappingURL=code-editor-modal.element-CfO3QaFN.js.map
