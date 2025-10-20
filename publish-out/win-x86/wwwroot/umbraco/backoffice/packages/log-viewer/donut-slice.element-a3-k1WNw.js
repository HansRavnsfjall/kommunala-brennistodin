import { UmbTextStyles as O } from "@umbraco-cms/backoffice/style";
import { css as X, property as p, queryAssignedElements as Y, query as B, state as c, customElement as C, LitElement as D, html as W, svg as $ } from "@umbraco-cms/backoffice/external/lit";
import { clamp as F } from "@umbraco-cms/backoffice/utils";
var G = Object.defineProperty, K = Object.getOwnPropertyDescriptor, M = (t) => {
  throw TypeError(t);
}, a = (t, e, o, i) => {
  for (var r = i > 1 ? void 0 : i ? K(e, o) : e, h = t.length - 1, n; h >= 0; h--)
    (n = t[h]) && (r = (i ? n(e, o, r) : n(r)) || r);
  return i && r && G(e, o, r), r;
}, w = (t, e, o) => e.has(t) || M("Cannot " + o), _ = (t, e, o) => (w(t, e, "read from private field"), o ? o.call(t) : e.get(t)), g = (t, e, o) => e.has(t) ? M("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, o), L = (t, e, o, i) => (w(t, e, "write to private field"), e.set(t, o), o), d = (t, e, o) => (w(t, e, "access private method"), o), u, l, S, v, A, U, x, b, P, E, z, N;
let s = class extends D {
  constructor() {
    super(...arguments), g(this, l), this.radius = 45, this.borderSize = 20, this.svgSize = 100, this.description = "", this.hideDetailBox = !1, this.circles = [], this.viewBox = 100, this._posY = 0, this._posX = 0, this._detailName = "", this._detailAmount = 0, this._detailColor = "black", this._totalAmount = 0, this._detailKind = "", g(this, u), g(this, b, (t) => {
      const e = _(this, u) ? t.clientX - _(this, u)?.left : 0, o = _(this, u) ? t.clientY - _(this, u)?.top : 0;
      this._posX = e - 10, this._posY = o - 70;
    });
  }
  static percentToDegrees(t) {
    return t * 3.6;
  }
  firstUpdated() {
    L(this, u, this._container.getBoundingClientRect());
  }
  willUpdate(t) {
    if (t.has("radius") || t.has("borderSize") || t.has("svgSize")) {
      if (this.borderSize > this.radius)
        throw new Error("Border size cannot be bigger than radius");
      d(this, l, v).call(this);
    }
  }
  render() {
    return W` <div id="container" @mousemove=${_(this, b)}>
				<svg viewBox="0 0 ${this.viewBox} ${this.viewBox}" role="list">${d(this, l, N).call(this)}</svg>
				<div
					id="details-box"
					style="--pos-y: ${this._posY}px; --pos-x: ${this._posX}px; --umb-donut-detail-color: ${this._detailColor}">
					<div id="details-title"><uui-icon name="icon-record"></uui-icon>${this._detailName}</div>
					<span>${this._detailAmount} ${this._detailKind}</span>
				</div>
			</div>
			<slot @slotchange=${d(this, l, v)} @slice-update=${d(this, l, v)}></slot>`;
  }
};
u = /* @__PURE__ */ new WeakMap();
l = /* @__PURE__ */ new WeakSet();
S = function(t) {
  if (this._totalAmount === 0) return 0;
  const e = Math.round(100 * t / this._totalAmount);
  return F(e, 0, 99);
};
v = function(t = null) {
  this._totalAmount = this._slices.reduce((e, o) => e + o.amount, 0), t?.stopPropagation(), this.circles = d(this, l, A).call(this, this._slices.map((e) => ({
    percent: d(this, l, S).call(this, e.amount),
    number: e.amount,
    color: e.color,
    name: e.name,
    kind: e.kind
  })));
};
A = function(t) {
  let e = 0;
  return t.map((o) => {
    const i = {
      ...o,
      commands: d(this, l, U).call(this, o, this.radius, this.svgSize, this.borderSize),
      offset: e * 3.6 * -1
    };
    return e += o.percent, i;
  });
};
U = function(t, e, o, i) {
  const r = s.percentToDegrees(t.percent), h = r > 180 ? 1 : 0, n = e - i, f = [];
  return f.push(`M ${o / 2 + e} ${o / 2}`), f.push(`A ${e} ${e} 0 ${h} 0 ${d(this, l, x).call(this, r, e, o)}`), f.push(`L ${d(this, l, x).call(this, r, n, o)}`), f.push(`A ${n} ${n} 0 ${h} 1 ${o / 2 + n} ${o / 2}`), f.join(" ");
};
x = function(t, e, o) {
  const i = Math.cos(t * Math.PI / 180), r = Math.sin(t * Math.PI / 180), h = i * e + o / 2, n = r * -e + o / 2;
  return [h, n].join(" ");
};
b = /* @__PURE__ */ new WeakMap();
P = function(t) {
  const o = t.target.dataset.index, i = this.circles[o];
  this._detailName = i.name, this._detailAmount = i.number, this._detailColor = i.color, this._detailKind = i.kind;
};
E = function(t) {
  this.hideDetailBox || (d(this, l, P).call(this, t), this._detailsBox.classList.add("show"));
};
z = function() {
  this.hideDetailBox || this._detailsBox.classList.remove("show");
};
N = function() {
  return $`
				<filter id="erode" x="-20%" y="-20%" width="140%" height="140%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" color-interpolation-filters="linearRGB">
					<feMorphology operator="erode" radius="0.5 0.5" x="0%" y="0%" width="100%" height="100%" in="SourceGraphic" result="morphology"/>
				</filter>
				<filter id="filter" x="-20%" y="-20%" width="140%" height="140%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" color-interpolation-filters="linearRGB">
					<feColorMatrix
						type="matrix"
						values="1.8 0 0 0 0
						0 1.8 0 0 0
						0 0 1.8 0 0
						0 0 0 500 -20" x="0%" y="0%" width="100%" height="100%" in="merge1" result="colormatrix2"/>
					<feMorphology operator="erode" radius="0.5 0.5" x="0%" y="0%" width="100%" height="100%" in="colormatrix2" result="morphology2"/>
					<feFlood flood-color="#ffffff" flood-opacity="0.3" x="0%" y="0%" width="100%" height="100%" result="flood3"/>
					<feComposite in="flood3" in2="SourceAlpha" operator="in" x="0%" y="0%" width="100%" height="100%" result="composite3"/>
					<feMorphology operator="erode" radius="1 1" x="0%" y="0%" width="100%" height="100%" in="composite3" result="morphology1"/>
					<feMerge x="0%" y="0%" width="100%" height="100%" result="merge1">
						<feMergeNode in="morphology2"/>
						<feMergeNode in="morphology1"/>
					</feMerge>
					<feDropShadow stdDeviation="1 1" in="merge1" dx="0" dy="0" flood-color="#000" flood-opacity="0.8" x="0%" y="0%" width="100%" height="100%" result="dropShadow1"/>
				</filter>
				<desc>${this.description}</desc>
					${this.circles.map(
    (t, e) => $`
								<path
								class="circle"

								data-index="${e}"
									fill="${t.color}"
									role="listitem"
									d="${t.commands}"
									transform="rotate(${t.offset} ${this.viewBox / 2} ${this.viewBox / 2})">
								</path>
								<path
								data-index="${e}"
								@mouseenter=${d(this, l, E)}
								@mouseleave=${d(this, l, z)}
									class="highlight"
									fill="${t.color}"
									role="listitem"
									d="${t.commands}"
									transform="rotate(${t.offset} ${this.viewBox / 2} ${this.viewBox / 2})">
								</path>`
  )}

        `;
};
s.styles = [
  O,
  X`
			path {
				pointer-events: visibleFill;
			}
			.circle {
				filter: url(#erode);
			}

			.highlight {
				transition: opacity 200ms linear;
				filter: url(#filter);
				opacity: 0;
			}

			.highlight:hover {
				opacity: 0.5;
			}

			#container {
				position: relative;
				width: 200px;
			}

			#details-box {
				background: #ffffffe6;
				border: 1px solid var(--uui-color-border-standalone);
				border-radius: var(--uui-border-radius);
				box-sizing: border-box;
				top: 0;
				left: 0;
				position: absolute;
				opacity: 0;
				padding: 0.5em;
				line-height: 1.5;
				font-size: var(--uui-type-small-size);
				box-shadow: var(--uui-shadow-depth-1);
				transform: translate3d(var(--pos-x), var(--pos-y), 0);
				transition: transform 0.2s cubic-bezier(0.02, 1.23, 0.79, 1.08);
				transition: opacity 150ms linear;
			}

			#details-box.show {
				opacity: 1;
			}

			#details-box uui-icon {
				/* optically correct alignment */
				color: var(--umb-donut-detail-color);
				margin-right: 0.2em;
			}

			#details-title {
				font-weight: bold;
				display: flex;
				align-items: center;
			}
		`
];
a([
  p({ type: Number })
], s.prototype, "radius", 2);
a([
  p({ type: Number, attribute: "border-size" })
], s.prototype, "borderSize", 2);
a([
  p({ type: Number, attribute: "svg-size" })
], s.prototype, "svgSize", 2);
a([
  p()
], s.prototype, "description", 2);
a([
  p({ type: Boolean })
], s.prototype, "hideDetailBox", 2);
a([
  Y({ selector: "umb-donut-slice" })
], s.prototype, "_slices", 2);
a([
  B("#container")
], s.prototype, "_container", 2);
a([
  B("#details-box")
], s.prototype, "_detailsBox", 2);
a([
  c()
], s.prototype, "circles", 2);
a([
  c()
], s.prototype, "viewBox", 2);
a([
  c()
], s.prototype, "_posY", 2);
a([
  c()
], s.prototype, "_posX", 2);
a([
  c()
], s.prototype, "_detailName", 2);
a([
  c()
], s.prototype, "_detailAmount", 2);
a([
  c()
], s.prototype, "_detailColor", 2);
a([
  c()
], s.prototype, "_totalAmount", 2);
a([
  c()
], s.prototype, "_detailKind", 2);
s = a([
  C("umb-donut-chart")
], s);
var R = Object.defineProperty, T = Object.getOwnPropertyDescriptor, y = (t, e, o, i) => {
  for (var r = i > 1 ? void 0 : i ? T(e, o) : e, h = t.length - 1, n; h >= 0; h--)
    (n = t[h]) && (r = (i ? n(e, o, r) : n(r)) || r);
  return i && r && R(e, o, r), r;
};
let m = class extends D {
  constructor() {
    super(...arguments), this.amount = 0, this.color = "red", this.name = "", this.kind = "";
  }
  willUpdate() {
    this.dispatchEvent(new CustomEvent("slice-update", { composed: !0, bubbles: !0 }));
  }
};
y([
  p({ type: Number })
], m.prototype, "amount", 2);
y([
  p()
], m.prototype, "color", 2);
y([
  p()
], m.prototype, "name", 2);
y([
  p()
], m.prototype, "kind", 2);
m = y([
  C("umb-donut-slice")
], m);
export {
  s as U,
  m as a
};
//# sourceMappingURL=donut-slice.element-a3-k1WNw.js.map
