import { ImageCropModeModel as D } from "@umbraco-cms/backoffice/external/backend-api";
import { UmbImagingRepository as H } from "../imaging.repository-oDvp8QYt.js";
import { css as q, property as a, state as U, customElement as z, when as E, html as u, nothing as X } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as S } from "@umbraco-cms/backoffice/lit-element";
import { UmbTextStyles as A } from "@umbraco-cms/backoffice/style";
import { UMB_ACTION_EVENT_CONTEXT as Y } from "@umbraco-cms/backoffice/action";
import { UmbEntityUpdatedEvent as x } from "@umbraco-cms/backoffice/entity-action";
import { a as V } from "../media-url.repository-B5RzlWhD.js";
import { a as ct, b as dt, U as pt } from "../constants-C418HnkF.js";
var j = Object.defineProperty, F = Object.getOwnPropertyDescriptor, N = (t) => {
  throw TypeError(t);
}, o = (t, e, i, r) => {
  for (var s = r > 1 ? void 0 : r ? F(e, i) : e, c = t.length - 1, d; c >= 0; c--)
    (d = t[c]) && (s = (r ? d(e, i, s) : d(s)) || s);
  return r && s && j(e, i, s), s;
}, O = (t, e, i) => e.has(t) || N("Cannot " + i), y = (t, e, i) => (O(t, e, "read from private field"), e.get(t)), I = (t, e, i) => e.has(t) ? N("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), J = (t, e, i, r) => (O(t, e, "write to private field"), e.set(t, i), i), p = (t, e, i) => (O(t, e, "access private method"), i), T, m, h, C, P, R, w;
let n = class extends S {
  constructor() {
    super(...arguments), I(this, h), this.unique = "", this.width = 300, this.height = 300, this.mode = D.MIN, this.alt = "", this.icon = "icon-picture", this.loading = "lazy", this._isLoading = !0, this._thumbnailUrl = "", I(this, T, new H(this)), I(this, m);
  }
  render() {
    return E(
      this._isLoading,
      () => p(this, h, P).call(this),
      () => p(this, h, R).call(this)
    );
  }
  connectedCallback() {
    super.connectedCallback(), this.loading === "lazy" ? (J(this, m, new IntersectionObserver((t) => {
      t[0].isIntersecting && (p(this, h, w).call(this), y(this, m)?.disconnect(), p(this, h, C).call(this));
    })), y(this, m).observe(this)) : (p(this, h, w).call(this), p(this, h, C).call(this));
  }
  disconnectedCallback() {
    super.disconnectedCallback(), y(this, m)?.disconnect();
  }
};
T = /* @__PURE__ */ new WeakMap();
m = /* @__PURE__ */ new WeakMap();
h = /* @__PURE__ */ new WeakSet();
C = function() {
  this.consumeContext(Y, (t) => {
    t?.addEventListener(x.TYPE, (e) => {
      e instanceof x && e.getUnique() === this.unique && p(this, h, w).call(this);
    });
  });
};
P = function() {
  return u`<div id="loader"><uui-loader></uui-loader></div>`;
};
R = function() {
  return E(
    this._thumbnailUrl,
    (t) => u`<img id="figure" src=${t} alt=${this.alt} loading=${this.loading} draggable="false" />`,
    () => u`<umb-icon id="icon" name=${this.icon}></umb-icon>`
  );
};
w = async function() {
  if (!this.unique) return;
  this._isLoading = !0;
  const { data: t } = await y(this, T).requestResizedItems([this.unique], {
    height: this.height,
    width: this.width,
    mode: this.mode
  });
  this._thumbnailUrl = t?.[0]?.url ?? "", this._isLoading = !1;
};
n.styles = [
  A,
  q`
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
  a()
], n.prototype, "unique", 2);
o([
  a({ type: Number })
], n.prototype, "width", 2);
o([
  a({ type: Number })
], n.prototype, "height", 2);
o([
  a()
], n.prototype, "mode", 2);
o([
  a()
], n.prototype, "alt", 2);
o([
  a()
], n.prototype, "icon", 2);
o([
  a()
], n.prototype, "loading", 2);
o([
  U()
], n.prototype, "_isLoading", 2);
o([
  U()
], n.prototype, "_thumbnailUrl", 2);
n = o([
  z("umb-imaging-thumbnail")
], n);
var K = Object.defineProperty, Q = Object.getOwnPropertyDescriptor, G = (t) => {
  throw TypeError(t);
}, g = (t, e, i, r) => {
  for (var s = r > 1 ? void 0 : r ? Q(e, i) : e, c = t.length - 1, d; c >= 0; c--)
    (d = t[c]) && (s = (r ? d(e, i, s) : d(s)) || s);
  return r && s && K(e, i, s), s;
}, L = (t, e, i) => e.has(t) || G("Cannot " + i), b = (t, e, i) => (L(t, e, "read from private field"), e.get(t)), $ = (t, e, i) => e.has(t) ? G("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), Z = (t, e, i, r) => (L(t, e, "write to private field"), e.set(t, i), i), v = (t, e, i) => (L(t, e, "access private method"), i), k, _, f, M, W, B;
let l = class extends S {
  constructor() {
    super(...arguments), $(this, f), this.icon = "icon-picture", this.loading = "lazy", this._isLoading = !0, this._imageUrl = "", $(this, k, new V(this)), $(this, _);
  }
  connectedCallback() {
    super.connectedCallback(), this.loading === "lazy" ? (Z(this, _, new IntersectionObserver((t) => {
      t[0].isIntersecting && (v(this, f, M).call(this), b(this, _)?.disconnect());
    })), b(this, _).observe(this)) : v(this, f, M).call(this);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), b(this, _)?.disconnect();
  }
  render() {
    return u` ${v(this, f, B).call(this)} ${E(this._isLoading, () => v(this, f, W).call(this))} `;
  }
};
k = /* @__PURE__ */ new WeakMap();
_ = /* @__PURE__ */ new WeakMap();
f = /* @__PURE__ */ new WeakSet();
M = async function() {
  if (!this.unique) throw new Error("Unique is missing");
  const { data: t } = await b(this, k).requestItems([this.unique]);
  this._imageUrl = t?.[0]?.url ?? "", this._isLoading = !1;
};
W = function() {
  return u`<div id="loader"><uui-loader></uui-loader></div>`;
};
B = function() {
  return this._isLoading ? X : E(
    this._imageUrl,
    () => u`<img
					part="img"
					src="${this._imageUrl}"
					alt="${this.alt ?? ""}"
					loading="${this.loading}"
					draggable="false" />`,
    () => u`<umb-icon id="icon" name="${this.icon}"></umb-icon>`
  );
};
l.styles = [
  A,
  q`
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
g([
  a()
], l.prototype, "unique", 2);
g([
  a()
], l.prototype, "alt", 2);
g([
  a()
], l.prototype, "icon", 2);
g([
  a()
], l.prototype, "loading", 2);
g([
  U()
], l.prototype, "_isLoading", 2);
g([
  U()
], l.prototype, "_imageUrl", 2);
l = g([
  z("umb-media-image")
], l);
export {
  ct as UMB_IMAGING_REPOSITORY_ALIAS,
  dt as UMB_IMAGING_STORE_ALIAS,
  pt as UMB_IMAGING_STORE_CONTEXT,
  H as UmbImagingRepository,
  n as UmbImagingThumbnailElement,
  l as UmbMediaImageElement
};
//# sourceMappingURL=index.js.map
