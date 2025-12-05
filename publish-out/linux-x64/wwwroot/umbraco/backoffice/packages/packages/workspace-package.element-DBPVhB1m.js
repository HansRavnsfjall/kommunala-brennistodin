import { UmbTextStyles as m } from "@umbraco-cms/backoffice/style";
import { html as p, css as l, property as u, state as d, customElement as k } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as h } from "@umbraco-cms/backoffice/lit-element";
var _ = Object.defineProperty, g = Object.getOwnPropertyDescriptor, n = (o, a, s, r) => {
  for (var e = r > 1 ? void 0 : r ? g(a, s) : a, i = o.length - 1, c; i >= 0; i--)
    (c = o[i]) && (e = (r ? c(a, s, e) : c(e)) || e);
  return r && e && _(a, s, e), e;
};
let t = class extends h {
  connectedCallback() {
    super.connectedCallback(), this.entityId && this._getPackageData();
  }
  _getPackageData() {
    this._package = {
      id: this.entityId,
      name: "A created package"
    };
  }
  _navigateBack() {
    window.history.pushState({}, "", "section/packages/view/installed");
  }
  _renderHeader() {
    return p`<div class="header" slot="header">
			<uui-button compact @click="${this._navigateBack}">
				<uui-icon name="icon-arrow-left"></uui-icon>
				<span data-mark="input:workspace-name">${this._package.name ?? "Package name"}</span>
			</uui-button>
		</div>`;
  }
  render() {
    return p`<umb-workspace-editor> ${this._renderHeader()} </umb-workspace-editor> `;
  }
};
t.styles = [
  m,
  l`
			.header {
				display: flex;
				font-size: var(--uui-type-h5-size);
			}
		`
];
n([
  u()
], t.prototype, "entityId", 2);
n([
  d()
], t.prototype, "_package", 2);
t = n([
  k("umb-workspace-package")
], t);
export {
  t as UmbWorkspacePackageElement,
  t as element
};
//# sourceMappingURL=workspace-package.element-DBPVhB1m.js.map
