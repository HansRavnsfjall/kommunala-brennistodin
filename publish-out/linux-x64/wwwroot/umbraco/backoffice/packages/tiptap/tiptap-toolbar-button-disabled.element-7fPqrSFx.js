import { UmbTiptapToolbarButtonElement as r } from "./tiptap-toolbar-button.element-Boria81H.js";
import { when as b, html as a, customElement as u } from "@umbraco-cms/backoffice/external/lit";
var c = Object.getOwnPropertyDescriptor, p = (t, o, m, l) => {
  for (var e = l > 1 ? void 0 : l ? c(o, m) : o, i = t.length - 1, n; i >= 0; i--)
    (n = t[i]) && (e = n(e) || e);
  return e;
};
let s = class extends r {
  render() {
    const t = this.localize.string(this.manifest?.meta.label);
    return a`
			<uui-button
				compact
				look="default"
				label=${t}
				title=${t}
				?disabled=${!this.isActive}
				@click=${() => this.api?.execute(this.editor)}>
				${b(
      this.manifest?.meta.icon,
      () => a`<umb-icon name=${this.manifest.meta.icon}></umb-icon>`,
      () => a`<span>${t}</span>`
    )}
			</uui-button>
		`;
  }
};
s = p([
  u("umb-tiptap-toolbar-button-disabled")
], s);
export {
  s as UmbTiptapToolbarButtonDisabledElement,
  s as element
};
//# sourceMappingURL=tiptap-toolbar-button-disabled.element-7fPqrSFx.js.map
