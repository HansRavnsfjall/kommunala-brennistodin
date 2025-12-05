import { when as u, html as l, state as f, customElement as m } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as v } from "@umbraco-cms/backoffice/lit-element";
var _ = Object.defineProperty, b = Object.getOwnPropertyDescriptor, h = (t) => {
  throw TypeError(t);
}, d = (t, e, i, o) => {
  for (var s = o > 1 ? void 0 : o ? b(e, i) : e, n = t.length - 1, c; n >= 0; n--)
    (c = t[n]) && (s = (o ? c(e, i, s) : c(s)) || s);
  return o && s && _(e, i, s), s;
}, C = (t, e, i) => e.has(t) || h("Cannot " + i), r = (t, e, i) => (C(t, e, "read from private field"), i ? i.call(t) : e.get(t)), $ = (t, e, i) => e.has(t) ? h("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), a;
let p = class extends v {
  constructor() {
    super(...arguments), this.isActive = !1, $(this, a, () => {
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
    return l`
			<uui-button
				compact
				look=${this.isActive ? "outline" : "default"}
				label=${t}
				title=${t}
				?disabled=${this.api?.isDisabled(this.editor)}
				@click=${() => this.api?.execute(this.editor)}>
				${u(
      this.manifest?.meta.icon,
      (e) => l`<umb-icon name=${e}></umb-icon>`,
      () => l`<span>${t}</span>`
    )}
			</uui-button>
		`;
  }
};
a = /* @__PURE__ */ new WeakMap();
d([
  f()
], p.prototype, "isActive", 2);
p = d([
  m("umb-tiptap-toolbar-button")
], p);
export {
  p as UmbTiptapToolbarButtonElement,
  p as element
};
//# sourceMappingURL=tiptap-toolbar-button.element-CVnmHwBo.js.map
