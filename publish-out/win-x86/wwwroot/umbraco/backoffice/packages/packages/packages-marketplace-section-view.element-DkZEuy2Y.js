import { html as p, css as _, state as u, customElement as g } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as k } from "@umbraco-cms/backoffice/lit-element";
import { UmbPackageRepository as w } from "@umbraco-cms/backoffice/package";
var y = Object.defineProperty, U = Object.getOwnPropertyDescriptor, d = (e) => {
  throw TypeError(e);
}, m = (e, t, a, o) => {
  for (var r = o > 1 ? void 0 : o ? U(t, a) : t, s = e.length - 1, l; s >= 0; s--)
    (l = e[s]) && (r = (o ? l(t, a, r) : l(r)) || r);
  return o && r && y(t, a, r), r;
}, f = (e, t, a) => t.has(e) || d("Cannot " + a), P = (e, t, a) => (f(e, t, "read from private field"), a ? a.call(e) : t.get(e)), h = (e, t, a) => t.has(e) ? d("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, a), b = (e, t, a) => (f(e, t, "access private method"), a), n, c, v;
let i = class extends k {
  constructor() {
    super(), h(this, c), h(this, n, new w(this)), b(this, c, v).call(this);
  }
  render() {
    return this._marketplaceUrl ? p`
			<div id="container">
				<iframe
					src=${this._marketplaceUrl}
					title="Umbraco Marketplace"
					allowfullscreen
					allow="geolocation; autoplay; clipboard-write; encrypted-media">
				</iframe>
			</div>
		` : p`<div id="loader"><uui-loader></uui-loader></div>`;
  }
};
n = /* @__PURE__ */ new WeakMap();
c = /* @__PURE__ */ new WeakSet();
v = async function() {
  const e = await P(this, n).configuration();
  this.observe(
    e,
    (t) => {
      this._marketplaceUrl = t.marketplaceUrl;
    },
    "_observeConfiguration"
  );
};
i.styles = [
  _`
			:host {
				height: 100%;
				display: block;
			}

			#loader {
				height: 100%;
				display: flex;
				align-items: center;
				justify-content: center;
			}

			#container {
				height: 100%;
				display: flex;
				align-items: stretch;
			}

			iframe {
				width: 100%;
				height: 100%;
				overflow: hidden;
				border: none;
			}
		`
];
m([
  u()
], i.prototype, "_marketplaceUrl", 2);
i = m([
  g("umb-packages-marketplace-section-view")
], i);
const S = i;
export {
  i as UmbPackagesMarketplaceSectionViewElement,
  S as default
};
//# sourceMappingURL=packages-marketplace-section-view.element-DkZEuy2Y.js.map
