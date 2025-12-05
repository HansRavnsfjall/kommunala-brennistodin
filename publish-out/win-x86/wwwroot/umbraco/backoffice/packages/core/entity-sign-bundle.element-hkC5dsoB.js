import { U as S } from "./lit-element.element-DSl77dV-.js";
import { css as A, property as z, state as U, customElement as F, html as w, nothing as b, repeat as M } from "@umbraco-cms/backoffice/external/lit";
import { UmbExtensionsElementAndApiInitializer as W } from "@umbraco-cms/backoffice/extension-api";
import { umbExtensionsRegistry as L } from "@umbraco-cms/backoffice/extension-registry";
var P = Object.defineProperty, C = Object.getOwnPropertyDescriptor, k = (e) => {
  throw TypeError(e);
}, u = (e, t, i, a) => {
  for (var r = a > 1 ? void 0 : a ? C(t, i) : t, v = e.length - 1, m; v >= 0; v--)
    (m = e[v]) && (r = (a ? m(t, i, r) : m(r)) || r);
  return a && r && P(t, i, r), r;
}, E = (e, t, i) => t.has(e) || k("Cannot " + i), s = (e, t, i) => (E(e, t, "read from private field"), i ? i.call(e) : t.get(e)), o = (e, t, i) => t.has(e) ? k("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), d = (e, t, i, a) => (E(e, t, "write to private field"), t.set(e, i), i), c = (e, t, i) => (E(e, t, "access private method"), i), l, p, f, T, n, _, y, g, x, $, O;
let h = class extends S {
  constructor() {
    super(), o(this, n), o(this, l), o(this, p), this._labels = /* @__PURE__ */ new Map(), this._open = !1, o(this, f, []), o(this, T, (e) => !(e.forEntityTypes && !e.forEntityTypes.includes(s(this, l)) || e.forEntityFlags && !e.forEntityFlags.some((t) => s(this, p)?.includes(t)))), o(this, g, () => {
      this._open || c(this, n, y).call(this, !0, 240);
    }), o(this, x, () => {
      this._open ? c(this, n, y).call(this, !1, 360) : this._hoverTimer && (clearTimeout(this._hoverTimer), this._hoverTimer = void 0);
    }), this.addEventListener("mouseenter", s(this, g)), this.addEventListener("mouseleave", s(this, x));
  }
  get entityType() {
    return s(this, l);
  }
  set entityType(e) {
    s(this, l) !== e && (d(this, l, e), c(this, n, _).call(this));
  }
  get entityFlags() {
    return s(this, p)?.map((e) => ({ alias: e }));
  }
  set entityFlags(e) {
    const t = e?.map((i) => i.alias);
    s(this, p)?.join(",") !== t?.join(",") && (d(this, p, t), c(this, n, _).call(this));
  }
  render() {
    return w`
			<slot></slot>
			${c(this, n, $).call(this)}
		`;
  }
};
l = /* @__PURE__ */ new WeakMap();
p = /* @__PURE__ */ new WeakMap();
f = /* @__PURE__ */ new WeakMap();
T = /* @__PURE__ */ new WeakMap();
n = /* @__PURE__ */ new WeakSet();
_ = function() {
  if (!s(this, l) || !s(this, p)) {
    this.removeUmbControllerByAlias("extensionsInitializer"), this._signs = [];
    return;
  }
  new W(
    this,
    L,
    "entitySign",
    (e) => [{ meta: e.meta }],
    s(this, T),
    (e) => {
      s(this, f).forEach((t) => this.removeUmbController(t)), d(this, f, []), e.forEach((t) => {
        if (t.api?.label) {
          const i = this.observe(
            t.api.label,
            (a) => {
              this._labels.set(t.alias, a), this.requestUpdate("_labels");
            },
            "_observeSignLabelOf_" + t.alias
          );
          s(this, f).push(i);
        } else t.api?.getLabel && (this._labels.set(t.alias, t.api.getLabel() ?? ""), this.requestUpdate("_labels"));
      }), this._signs = e;
    },
    "extensionsInitializer"
  );
};
y = function(e, t) {
  this._hoverTimer && clearTimeout(this._hoverTimer), this._hoverTimer = window.setTimeout(() => {
    this._open = e, this.requestUpdate(), this._hoverTimer = void 0;
  }, t);
};
g = /* @__PURE__ */ new WeakMap();
x = /* @__PURE__ */ new WeakMap();
$ = function() {
  return !this._signs || this._signs.length === 0 ? b : this._signs?.[0] ? w`<div class="infobox ${this._open ? "is-open" : ""}" style=${`--count:${this._signs.length}`}>
			${c(this, n, O).call(this)}
		</div>` : b;
};
O = function() {
  return this._signs ? M(
    this._signs,
    (e) => e.alias,
    (e, t) => w`<div class="sign-container ${t > 1 ? "hide-in-overview" : ""}" style=${`--i:${t}`}>
							<span class="badge-icon">${e.component}</span><span class="label">${this._labels.get(e.alias)}</span>
						</div>`
  ) : b;
};
h.styles = [
  A`
			:host {
				anchor-name: --entity-sign;
				position: relative;
				--offset-h: 12px; /* 22px / 16 */
				--row-h: 1.36rem; /* 22px / 16 */
				--icon-w: 0.75rem; /* 12px / 16 */
				--pad-x: 0.25rem; /*  4px / 16 */
				--ease: cubic-bezier(0.1, 0, 0.3, 1);
				--ease-bounce: cubic-bezier(0.175, 0.885, 0.32, 1.275);
			}

			.infobox {
				position: absolute;
				top: 100%;
				margin-top: calc(-12px + var(--offset-h));
				left: 100%;
				margin-left: -6px;
				background-color: transparent;
				padding: var(--uui-size-2);
				padding-left: var(--uui-size-3);
				font-size: 8px;
				clip-path: inset(-10px calc(100% - 30px) calc(100% - 10px) -20px);
				transition:
					background-color 80ms 40ms linear,
					clip-path 120ms var(--ease-bounce),
					font-size 120ms var(--ease);
				/*will-change: clip-path;*/
				min-height: fit-content;
			}
			.infobox::before {
				content: '';
				position: absolute;
				top: 0;
				left: 0;
				right: 100%;
				bottom: 100%;
				opacity: 0;
				border-radius: 3px;
				box-shadow: var(--uui-shadow-depth-2);
				display: none;
				transition:
					right 120ms var(--ease-bounce),
					bottom 120ms var(--ease-bounce),
					opacity 120ms linear,
					display 0 120ms;
			}

			.infobox > .sign-container {
				display: flex;
				align-items: start;
				gap: 3px;
				position: relative;
				transform: translate(calc((var(--i) * -5px) - 10px), calc((-1 * var(--i) * var(--row-h)) - var(--offset-h)));
				transition:
					transform 120ms var(--ease),
					visibility 0ms linear 120ms opacity 120ms linear;
				z-index: calc(var(--count) - var(--i));
				/*will-change: transform;*/
				pointer-events: none;
			}
			.infobox > .sign-container.hide-in-overview {
				visibility: hidden;
			}

			.infobox .sign-container .label {
				opacity: 0;
				transition: opacity 120ms;
			}

			/*OPEN STATE -- Prevent the hover state in firefox(until support of the position-anchor)*/
			@supports (position-anchor: --any-check) {
				.infobox {
					position: fixed;
					position-anchor: --entity-sign;
					top: anchor(bottom);
					left: anchor(right);
					z-index: 1;
				}
				.infobox.is-open {
					z-index: 10;
					background-color: var(--uui-color-surface);
					font-size: 12px;
					color: var(--uui-color-text);
					clip-path: inset(-6px);
					--umb-sign-bundle-bg: var(--uui-color-surface);
				}
				.infobox.is-open::before {
					right: 0;
					bottom: 0;
					opacity: 100;
					background-color: var(--uui-color-surface);
					display: block;
					transition:
						right 120ms var(--ease-bounce),
						bottom 120ms var(--ease-bounce),
						opacity 120ms var(--ease),
						display 0 0;
				}
				.infobox.is-open > .sign-container {
					transform: none;
					align-items: center;
					transition: transform 120ms var(--ease);
					visibility: visible;
				}
				.infobox.is-open .sign-container .label {
					opacity: 1;
					pointer-events: auto;
				}
			}
		`
];
u([
  z({ type: String, attribute: "entity-type", reflect: !1 })
], h.prototype, "entityType", 1);
u([
  z({ type: Array, attribute: !1 })
], h.prototype, "entityFlags", 1);
u([
  U()
], h.prototype, "_signs", 2);
u([
  U()
], h.prototype, "_labels", 2);
h = u([
  F("umb-entity-sign-bundle")
], h);
export {
  h as U
};
//# sourceMappingURL=entity-sign-bundle.element-hkC5dsoB.js.map
