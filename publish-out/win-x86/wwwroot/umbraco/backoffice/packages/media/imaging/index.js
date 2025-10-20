import { ImageCropModeModel as D } from "@umbraco-cms/backoffice/external/backend-api";
import { UmbImagingRepository as B } from "../imaging.repository-Cr_RO0yc.js";
import { css as k, property as n, state as w, customElement as x, when as U, html as l, nothing as S } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as z } from "@umbraco-cms/backoffice/lit-element";
import { UmbTextStyles as q } from "@umbraco-cms/backoffice/style";
import { a as H } from "../media-url.repository-B5RzlWhD.js";
import { a as st, b as nt, U as ot } from "../constants-C418HnkF.js";
var X = Object.defineProperty, Y = Object.getOwnPropertyDescriptor, A = (t) => {
  throw TypeError(t);
}, o = (t, e, i, s) => {
  for (var a = s > 1 ? void 0 : s ? Y(e, i) : e, c = t.length - 1, d; c >= 0; c--)
    (d = t[c]) && (a = (s ? d(e, i, a) : d(a)) || a);
  return s && a && X(e, i, a), a;
}, O = (t, e, i) => e.has(t) || A("Cannot " + i), y = (t, e, i) => (O(t, e, "read from private field"), e.get(t)), $ = (t, e, i) => e.has(t) ? A("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), j = (t, e, i, s) => (O(t, e, "write to private field"), e.set(t, i), i), f = (t, e, i) => (O(t, e, "access private method"), i), E, u, g, P, G, M;
let r = class extends z {
  constructor() {
    super(...arguments), $(this, g), this.unique = "", this.width = 300, this.height = 300, this.mode = D.MIN, this.alt = "", this.icon = "icon-picture", this.loading = "lazy", this._isLoading = !0, this._thumbnailUrl = "", $(this, E, new B(this)), $(this, u);
  }
  render() {
    return l` ${f(this, g, G).call(this)} ${U(this._isLoading, () => f(this, g, P).call(this))} `;
  }
  connectedCallback() {
    super.connectedCallback(), this.loading === "lazy" ? (j(this, u, new IntersectionObserver((t) => {
      t[0].isIntersecting && (f(this, g, M).call(this), y(this, u)?.disconnect());
    })), y(this, u).observe(this)) : f(this, g, M).call(this);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), y(this, u)?.disconnect();
  }
};
E = /* @__PURE__ */ new WeakMap();
u = /* @__PURE__ */ new WeakMap();
g = /* @__PURE__ */ new WeakSet();
P = function() {
  return l`<div id="loader"><uui-loader></uui-loader></div>`;
};
G = function() {
  return this._isLoading ? S : U(
    this._thumbnailUrl,
    () => l`<img
					id="figure"
					src="${this._thumbnailUrl}"
					alt="${this.alt}"
					loading="${this.loading}"
					draggable="false" />`,
    () => l`<umb-icon id="icon" name="${this.icon}"></umb-icon>`
  );
};
M = async function() {
  const { data: t } = await y(this, E).requestThumbnailUrls(
    [this.unique],
    this.height,
    this.width,
    this.mode
  );
  this._thumbnailUrl = t?.[0]?.url ?? "", this._isLoading = !1;
};
r.styles = [
  q,
  k`
			:host {
				display: block;
				position: relative;
				overflow: hidden;
				display: flex;
				justify-content: center;
				align-items: center;
				width: 100%;
				height: 100%;
			}

			#loader {
				display: flex;
				justify-content: center;
				align-items: center;
				height: 100%;
				width: 100%;
			}

			#figure {
				display: block;
				width: 100%;
				height: 100%;
				object-fit: cover;

				background-image: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill-opacity=".1"><path d="M50 0h50v50H50zM0 50h50v50H0z"/></svg>');
				background-size: 10px 10px;
				background-repeat: repeat;
			}

			#icon {
				width: 100%;
				height: 100%;
				font-size: var(--uui-size-8);
			}
		`
];
o([
  n()
], r.prototype, "unique", 2);
o([
  n({ type: Number })
], r.prototype, "width", 2);
o([
  n({ type: Number })
], r.prototype, "height", 2);
o([
  n()
], r.prototype, "mode", 2);
o([
  n()
], r.prototype, "alt", 2);
o([
  n()
], r.prototype, "icon", 2);
o([
  n()
], r.prototype, "loading", 2);
o([
  w()
], r.prototype, "_isLoading", 2);
o([
  w()
], r.prototype, "_thumbnailUrl", 2);
r = o([
  x("umb-imaging-thumbnail")
], r);
var F = Object.defineProperty, J = Object.getOwnPropertyDescriptor, R = (t) => {
  throw TypeError(t);
}, p = (t, e, i, s) => {
  for (var a = s > 1 ? void 0 : s ? J(e, i) : e, c = t.length - 1, d; c >= 0; c--)
    (d = t[c]) && (a = (s ? d(e, i, a) : d(a)) || a);
  return s && a && F(e, i, a), a;
}, L = (t, e, i) => e.has(t) || R("Cannot " + i), b = (t, e, i) => (L(t, e, "read from private field"), e.get(t)), I = (t, e, i) => e.has(t) ? R("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), K = (t, e, i, s) => (L(t, e, "write to private field"), e.set(t, i), i), v = (t, e, i) => (L(t, e, "access private method"), i), T, _, m, C, W, N;
let h = class extends z {
  constructor() {
    super(...arguments), I(this, m), this.icon = "icon-picture", this.loading = "lazy", this._isLoading = !0, this._imageUrl = "", I(this, T, new H(this)), I(this, _);
  }
  connectedCallback() {
    super.connectedCallback(), this.loading === "lazy" ? (K(this, _, new IntersectionObserver((t) => {
      t[0].isIntersecting && (v(this, m, C).call(this), b(this, _)?.disconnect());
    })), b(this, _).observe(this)) : v(this, m, C).call(this);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), b(this, _)?.disconnect();
  }
  render() {
    return l` ${v(this, m, N).call(this)} ${U(this._isLoading, () => v(this, m, W).call(this))} `;
  }
};
T = /* @__PURE__ */ new WeakMap();
_ = /* @__PURE__ */ new WeakMap();
m = /* @__PURE__ */ new WeakSet();
C = async function() {
  if (!this.unique) throw new Error("Unique is missing");
  const { data: t } = await b(this, T).requestItems([this.unique]);
  this._imageUrl = t?.[0]?.url ?? "", this._isLoading = !1;
};
W = function() {
  return l`<div id="loader"><uui-loader></uui-loader></div>`;
};
N = function() {
  return this._isLoading ? S : U(
    this._imageUrl,
    () => l`<img
					part="img"
					src="${this._imageUrl}"
					alt="${this.alt ?? ""}"
					loading="${this.loading}"
					draggable="false" />`,
    () => l`<umb-icon id="icon" name="${this.icon}"></umb-icon>`
  );
};
h.styles = [
  q,
  k`
			:host {
				display: contents;
			}

			#loader {
				display: flex;
				justify-content: center;
				align-items: center;
				height: 100%;
				width: 100%;
			}

			#icon {
				width: 100%;
				height: 100%;
				font-size: var(--uui-size-8);
			}
		`
];
p([
  n()
], h.prototype, "unique", 2);
p([
  n()
], h.prototype, "alt", 2);
p([
  n()
], h.prototype, "icon", 2);
p([
  n()
], h.prototype, "loading", 2);
p([
  w()
], h.prototype, "_isLoading", 2);
p([
  w()
], h.prototype, "_imageUrl", 2);
h = p([
  x("umb-media-image")
], h);
export {
  st as UMB_IMAGING_REPOSITORY_ALIAS,
  nt as UMB_IMAGING_STORE_ALIAS,
  ot as UMB_IMAGING_STORE_CONTEXT,
  B as UmbImagingRepository,
  r as UmbImagingThumbnailElement,
  h as UmbMediaImageElement
};
//# sourceMappingURL=index.js.map
