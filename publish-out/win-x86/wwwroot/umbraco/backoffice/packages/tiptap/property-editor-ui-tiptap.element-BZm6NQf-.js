import { styleMap as c, html as h, css as m, customElement as d } from "@umbraco-cms/backoffice/external/lit";
import { UmbPropertyEditorUiRteElementBase as v } from "@umbraco-cms/backoffice/rte";
import "./input-tiptap.element-BYRfK4rc.js";
var y = Object.getOwnPropertyDescriptor, l = (t) => {
  throw TypeError(t);
}, _ = (t, e, r, i) => {
  for (var s = i > 1 ? void 0 : i ? y(e, r) : e, a = t.length - 1, p; a >= 0; a--)
    (p = t[a]) && (s = p(s) || s);
  return s;
}, g = (t, e, r) => e.has(t) || l("Cannot " + r), b = (t, e, r) => e.has(t) ? l("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), f = (t, e, r) => (g(t, e, "access private method"), r), n, u;
let o = class extends v {
  constructor() {
    super(...arguments), b(this, n);
  }
  firstUpdated(t) {
    super.firstUpdated(t), this.addFormControlElement(this.shadowRoot.querySelector("umb-input-tiptap"));
  }
  render() {
    return h`
			<umb-input-tiptap
				style=${c(this._css)}
				.configuration=${this._config}
				.label=${this.name}
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
  const r = t.target.value, i = [], s = new RegExp(
    /<umb-rte-block(?:-inline)?(?: class="(?:.[^"]*)")? data-content-key="(?<key>.[^"]*)">(?:<!--Umbraco-Block-->)?<\/umb-rte-block(?:-inline)?>/gi
  );
  let a;
  for (; (a = s.exec(r)) !== null; )
    a.groups?.key && i.push(a.groups.key);
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
  }, this._filterUnusedBlocks(i), this._fireChangeEvent();
};
o.styles = m`
		:host(:invalid:not([pristine])) umb-input-tiptap {
			--umb-tiptap-edge-border-color: var(--uui-color-invalid);
		}
	`;
o = _([
  d("umb-property-editor-ui-tiptap")
], o);
export {
  o as UmbPropertyEditorUiTiptapElement,
  o as element
};
//# sourceMappingURL=property-editor-ui-tiptap.element-BZm6NQf-.js.map
