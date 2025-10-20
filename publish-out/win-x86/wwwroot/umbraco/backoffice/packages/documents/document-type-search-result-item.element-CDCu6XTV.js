import { nothing as l, when as a, html as s, css as c, property as d, customElement as b } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as f } from "@umbraco-cms/backoffice/lit-element";
var h = Object.defineProperty, v = Object.getOwnPropertyDescriptor, p = (t, i, m, r) => {
  for (var e = r > 1 ? void 0 : r ? v(i, m) : i, u = t.length - 1, o; u >= 0; u--)
    (o = t[u]) && (e = (r ? o(i, m, e) : o(e)) || e);
  return r && e && h(i, m, e), e;
};
let n = class extends f {
  render() {
    return this.item ? s`
			${a(
      this.item.icon,
      (t) => s`<umb-icon name=${t}></umb-icon>`,
      () => s`<uui-icon name="icon-document"></uui-icon>`
    )}
			<span>${this.item.name}</span>
			<div class="extra">
				${a(
      this.item.isElement,
      () => s`
						<uui-tag look="secondary">
							<umb-localize key="contentTypeEditor_elementType">Element Type</umb-localize>
						</uui-tag>
					`
    )}
			</div>
		` : l;
  }
};
n.styles = [
  c`
			:host {
				border-radius: var(--uui-border-radius);
				outline-offset: -3px;
				padding: var(--uui-size-space-3) var(--uui-size-space-5);

				display: flex;
				gap: var(--uui-size-space-3);
				align-items: center;

				width: 100%;

				> span {
					flex: 1;
				}
			}
		`
];
p([
  d({ type: Object })
], n.prototype, "item", 2);
n = p([
  b("umb-document-type-search-result-item")
], n);
export {
  n as UmbDocumentTypeSearchResultItemElement,
  n as element
};
//# sourceMappingURL=document-type-search-result-item.element-CDCu6XTV.js.map
