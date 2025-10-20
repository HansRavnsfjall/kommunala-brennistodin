import { UmbPropertyEditorUiRteElementBase as c } from "@umbraco-cms/backoffice/rte";
import { html as h, css as d, customElement as m } from "@umbraco-cms/backoffice/external/lit";
import "./input-tiptap.element-CUaX4v9f.js";
var v = Object.getOwnPropertyDescriptor, l = (t) => {
  throw TypeError(t);
}, y = (t, e, r, s) => {
  for (var i = s > 1 ? void 0 : s ? v(e, r) : e, a = t.length - 1, p; a >= 0; a--)
    (p = t[a]) && (i = p(i) || i);
  return i;
}, _ = (t, e, r) => e.has(t) || l("Cannot " + r), g = (t, e, r) => e.has(t) ? l("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), f = (t, e, r) => (_(t, e, "access private method"), r), n, u;
let o = class extends c {
  constructor() {
    super(...arguments), g(this, n);
  }
  firstUpdated(t) {
    super.firstUpdated(t), this.addFormControlElement(this.shadowRoot.querySelector("umb-input-tiptap"));
  }
  render() {
    return h`
			<umb-input-tiptap
				.configuration=${this._config}
				.requiredMessage=${this.mandatoryMessage}
				.value=${this._markup}
				?readonly=${this.readonly}
				?required=${this.mandatory}
				@change=${f(this, n, u)}></umb-input-tiptap>
		`;
  }
};
n = /* @__PURE__ */ new WeakSet();
u = function(t) {
  const e = t.target, r = e.value;
  if (e.isEmpty()) {
    this.value = void 0, this._fireChangeEvent();
    return;
  }
  const s = [], i = new RegExp(
    /<umb-rte-block(?:-inline)?(?: class="(?:.[^"]*)")? data-content-key="(?<key>.[^"]*)">(?:<!--Umbraco-Block-->)?<\/umb-rte-block(?:-inline)?>/gi
  );
  let a;
  for (; (a = i.exec(r)) !== null; )
    a.groups?.key && s.push(a.groups.key);
  this.value ? this.value = {
    ...this.value,
    markup: r
  } : this.value = {
    markup: r,
    blocks: {
      layout: {},
      contentData: [],
      settingsData: [],
      expose: []
    }
  }, this._filterUnusedBlocks(s), this._fireChangeEvent();
};
o.styles = d`
		:host(:invalid:not([pristine])) umb-input-tiptap {
			--umb-tiptap-edge-border-color: var(--uui-color-invalid);
		}
	`;
o = y([
  m("umb-property-editor-ui-tiptap")
], o);
export {
  o as UmbPropertyEditorUiTiptapElement,
  o as element
};
//# sourceMappingURL=property-editor-ui-tiptap.element-BDJ_Mkw6.js.map
