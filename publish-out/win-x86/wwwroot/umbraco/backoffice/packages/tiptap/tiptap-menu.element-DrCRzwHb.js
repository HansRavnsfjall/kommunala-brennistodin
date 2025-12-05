import { css as l, property as p, customElement as c, when as f, html as o } from "@umbraco-cms/backoffice/external/lit";
import { UmbMenuElement as b } from "@umbraco-cms/backoffice/menu";
var d = Object.defineProperty, h = Object.getOwnPropertyDescriptor, a = (r, t, i, u) => {
  for (var e = u > 1 ? void 0 : u ? h(t, i) : t, m = r.length - 1, n; m >= 0; m--)
    (n = r[m]) && (e = (u ? n(t, i, e) : n(e)) || e);
  return u && e && d(t, i, e), e;
};
let s = class extends b {
  render() {
    return o`
			${f(
      this.menuAlias || this.manifest?.alias,
      (r) => o`
					<umb-extension-with-api-slot
						type="menuItem"
						default-element="umb-action-menu-item"
						.filter=${(t) => t.meta.menus.includes(r)}></umb-extension-with-api-slot>
				`
    )}
		`;
  }
};
s.styles = [
  l`
			:host {
				--uui-menu-item-flat-structure: 1;

				display: flex;
				flex-direction: column;

				background-color: var(--uui-color-surface);
				border-radius: var(--uui-border-radius);
				box-shadow: var(--uui-shadow-depth-3);
			}
		`
];
a([
  p()
], s.prototype, "menuAlias", 2);
s = a([
  c("umb-tiptap-menu")
], s);
export {
  s as U
};
//# sourceMappingURL=tiptap-menu.element-DrCRzwHb.js.map
