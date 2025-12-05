import { nothing as a, html as l, css as c, property as p, customElement as u } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as d } from "@umbraco-cms/backoffice/lit-element";
var f = Object.defineProperty, g = Object.getOwnPropertyDescriptor, b = (m, t, r, n) => {
  for (var e = n > 1 ? void 0 : n ? g(t, r) : t, i = m.length - 1, s; i >= 0; i--)
    (s = m[i]) && (e = (n ? s(t, r, e) : s(e)) || e);
  return n && e && f(t, r, e), e;
};
let o = class extends d {
  render() {
    return this.manifest ? l`<umb-icon
					.name=${this.manifest.meta.iconName ?? "icon-circle-dotted"}
					.color=${this.manifest.meta.iconColorAlias}></umb-icon>` : a;
  }
};
o.styles = [
  c`
			umb-icon {
				filter: drop-shadow(-1px 0 0 var(--umb-sign-bundle-bg)) drop-shadow(0 -1px 0 var(--umb-sign-bundle-bg))
					drop-shadow(0 1px 0 var(--umb-sign-bundle-bg));
			}
			umb-icon::before {
				content: '';
				position: absolute;
				z-index: -1;
				border-radius: 50%;
				inset: 2px;
				background-color: var(--umb-sign-bundle-bg);
			}
		`
];
b([
  p({ type: Object, attribute: !1 })
], o.prototype, "manifest", 2);
o = b([
  u("umb-entity-sign-icon")
], o);
export {
  o as UmbEntitySignIconElement,
  o as element
};
//# sourceMappingURL=entity-sign-icon.element-DunMvZQz.js.map
