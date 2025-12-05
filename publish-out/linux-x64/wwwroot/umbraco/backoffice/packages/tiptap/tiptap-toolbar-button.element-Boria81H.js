import { ifDefined as f, when as u, html as c, state as m, customElement as v } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as b } from "@umbraco-cms/backoffice/lit-element";
var _ = Object.defineProperty, C = Object.getOwnPropertyDescriptor, p = (t) => {
  throw TypeError(t);
}, d = (t, e, i, o) => {
  for (var s = o > 1 ? void 0 : o ? C(e, i) : e, n = t.length - 1, l; n >= 0; n--)
    (l = t[n]) && (s = (o ? l(e, i, s) : l(s)) || s);
  return o && s && _(e, i, s), s;
}, $ = (t, e, i) => e.has(t) || p("Cannot " + i), r = (t, e, i) => ($(t, e, "read from private field"), i ? i.call(t) : e.get(t)), A = (t, e, i) => e.has(t) ? p("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), a;
let h = class extends b {
  constructor() {
    super(...arguments), this.isActive = !1, A(this, a, () => {
      this.api && this.editor && this.manifest && (this.isActive = this.api.isActive(this.editor));
    });
  }
  connectedCallback() {
    super.connectedCallback(), this.editor && (this.editor.on("selectionUpdate", r(this, a)), this.editor.on("update", r(this, a)));
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.editor && (this.editor.off("selectionUpdate", r(this, a)), this.editor.off("update", r(this, a)));
  }
  render() {
    const t = this.localize.string(this.manifest?.meta.label);
    return c`
			<uui-button
				compact
				look=${this.isActive ? "outline" : "default"}
				label=${f(this.manifest?.meta.label)}
				title=${t}
				?disabled=${this.api && this.editor && this.api.isDisabled(this.editor)}
				@click=${() => this.api?.execute(this.editor)}>
				${u(
      this.manifest?.meta.icon,
      (e) => c`<umb-icon name=${e}></umb-icon>`,
      () => c`<span>${t}</span>`
    )}
			</uui-button>
		`;
  }
};
a = /* @__PURE__ */ new WeakMap();
d([
  m()
], h.prototype, "isActive", 2);
h = d([
  v("umb-tiptap-toolbar-button")
], h);
export {
  h as UmbTiptapToolbarButtonElement,
  h as element
};
//# sourceMappingURL=tiptap-toolbar-button.element-Boria81H.js.map
