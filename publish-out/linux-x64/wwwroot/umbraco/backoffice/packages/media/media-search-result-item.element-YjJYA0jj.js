import { nothing as l, when as u, classMap as p, html as r, css as d, property as h, customElement as b } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as f } from "@umbraco-cms/backoffice/lit-element";
var v = Object.defineProperty, y = Object.getOwnPropertyDescriptor, c = (t, i, n, s) => {
  for (var e = s > 1 ? void 0 : s ? y(i, n) : i, o = t.length - 1, m; o >= 0; o--)
    (m = t[o]) && (e = (s ? m(i, n, e) : m(e)) || e);
  return s && e && v(i, n, e), e;
};
let a = class extends f {
  render() {
    if (!this.item) return l;
    const t = { trashed: this.item.isTrashed };
    return r`
			${u(
      this.item.mediaType.icon ?? this.item.icon,
      (i) => r`<umb-icon name=${i}></umb-icon>`,
      () => r`<uui-icon name="icon-picture"></uui-icon>`
    )}
			<span class=${p(t)}>${this.item.name}</span>
			<div class="extra">
				${u(
      this.item.isTrashed,
      () => r`
						<uui-tag look="secondary">
							<umb-localize key="mediaPicker_trashed">Trashed</umb-localize>
						</uui-tag>
					`
    )}
			</div>
		`;
  }
};
a.styles = [
  d`
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

					&.trashed {
						text-decoration: line-through;
						opacity: 0.6;
					}
				}
			}
		`
];
c([
  h({ type: Object })
], a.prototype, "item", 2);
a = c([
  b("umb-media-search-result-item")
], a);
export {
  a as UmbMediaSearchResultItemElement,
  a as element
};
//# sourceMappingURL=media-search-result-item.element-YjJYA0jj.js.map
