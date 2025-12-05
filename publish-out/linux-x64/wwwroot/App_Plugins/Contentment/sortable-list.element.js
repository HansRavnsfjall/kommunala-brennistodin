import { css as Rt, property as O, customElement as Bt, when as Ht, html as H, state as Se, unsafeHTML as vn, classMap as bn, styleMap as yn, LitElement as _n, nothing as En } from "@umbraco-cms/backoffice/external/lit";
import { UmbChangeEvent as wn } from "@umbraco-cms/backoffice/event";
import { UmbLitElement as ie } from "@umbraco-cms/backoffice/lit-element";
import { UMB_ICON_PICKER_MODAL as Dn } from "@umbraco-cms/backoffice/icon";
import { UMB_MODAL_MANAGER_CONTEXT as Sn } from "@umbraco-cms/backoffice/modal";
import { UmbTextStyles as Cn } from "@umbraco-cms/backoffice/style";
import { createExtensionElement as Tn } from "@umbraco-cms/backoffice/extension-api";
import { umbExtensionsRegistry as On } from "@umbraco-cms/backoffice/extension-registry";
import { UmbFormControlMixin as In, UMB_VALIDATION_EMPTY_LOCALIZATION_KEY as Pn } from "@umbraco-cms/backoffice/validation";
var xn = Object.defineProperty, An = Object.getOwnPropertyDescriptor, We = (e) => {
  throw TypeError(e);
}, ae = (e, t, n, o) => {
  for (var r = o > 1 ? void 0 : o ? An(t, n) : t, i = e.length - 1, a; i >= 0; i--)
    (a = e[i]) && (r = (o ? a(t, n, r) : a(r)) || r);
  return o && r && xn(t, n, r), r;
}, Nn = (e, t, n) => t.has(e) || We("Cannot " + n), Mn = (e, t, n) => t.has(e) ? We("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), Ue = (e, t, n) => (Nn(e, t, "access private method"), n), Qt, ze, He;
let yt = class extends ie {
  constructor() {
    super(...arguments), Mn(this, Qt), this.defaultIcon = "", this.size = "large";
  }
  render() {
    return H`
			<uui-button
				look=${this.value ? "outline" : "placeholder"}
				label=${this.localize.term("defaultdialogs_selectIcon")}
				?compact=${this.size === "small"}
				@click=${Ue(this, Qt, ze)}>
				${Ht(
      this.value || this.defaultIcon,
      (e) => H`<umb-icon name=${e}></umb-icon>`,
      () => H`<uui-icon name="add" style="--uui-icon-color: var(--uui-color-disabled-contrast);"></uui-icon>`
    )}
			</uui-button>
		`;
  }
};
Qt = /* @__PURE__ */ new WeakSet();
ze = async function() {
  const e = await this.getContext(Sn), t = Ue(this, Qt, He).call(this, this.value), n = e == null ? void 0 : e.open(this, Dn, { value: t }), o = await (n == null ? void 0 : n.onSubmit().catch(() => {
  }));
  o && (this.value = `${o.icon} color-${o.color}`, this.dispatchEvent(new wn()));
};
He = function(e) {
  const [t, n] = (e == null ? void 0 : e.split(" ")) ?? [];
  return { icon: t, color: n == null ? void 0 : n.replace("color-", "") };
};
yt.styles = [
  Rt`
			uui-button:not([compact]) {
				font-size: var(--uui-size-layout-2);
				height: var(--uui-size-layout-4);
				width: var(--uui-size-layout-4);
			}
		`
];
ae([
  O({ attribute: "default-icon" })
], yt.prototype, "defaultIcon", 2);
ae([
  O()
], yt.prototype, "size", 2);
ae([
  O()
], yt.prototype, "value", 2);
yt = ae([
  Bt("contentment-icon-picker")
], yt);
var $n = Object.defineProperty, Fn = Object.getOwnPropertyDescriptor, Ge = (e) => {
  throw TypeError(e);
}, ht = (e, t, n, o) => {
  for (var r = o > 1 ? void 0 : o ? Fn(t, n) : t, i = e.length - 1, a; i >= 0; i--)
    (a = e[i]) && (r = (o ? a(t, n, r) : a(r)) || r);
  return o && r && $n(t, n, r), r;
}, Rn = (e, t, n) => t.has(e) || Ge("Cannot " + n), Bn = (e, t, n) => t.has(e) ? Ge("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), ue = (e, t, n) => (Rn(e, t, "access private method"), n), Ot, je, Ve, qe;
let Q = class extends ie {
  constructor() {
    super(...arguments), Bn(this, Ot), this._hasSlottedContent = !1, this.compact = !1, this.type = "transparent";
  }
  render() {
    return H`
			<div id="box" class=${ue(this, Ot, je).call(this)} style=${ue(this, Ot, Ve).call(this)}>
				${Ht(
      this.icon,
      (e) => H`<umb-icon name=${e} style="color: var(--uui-color-${this.type}-contrast);"></umb-icon>`
    )}
				<div>
					${Ht(this.heading, (e) => H`<h5>${e}</h5>`)}
					${Ht(this.message, (e) => H`<div>${vn(e)}</div>`)}
					<slot @slotchange=${ue(this, Ot, qe)}></slot>
				</div>
			</div>
		`;
  }
};
Ot = /* @__PURE__ */ new WeakSet();
je = function() {
  return bn({
    "uui-text": !0,
    compact: this.compact || !this.heading || !this.message && !this._hasSlottedContent
  });
};
Ve = function() {
  return yn({
    backgroundColor: `var(--uui-color-${this.type})`,
    color: `var(--uui-color-${this.type}-contrast)`,
    borderColor: `var(--uui-color-${this.type}-standalone)`,
    "--uui-color-interactive": `var(--uui-color-${this.type}-contrast)`,
    "--uui-color-interactive-emphasis": `var(--uui-color-${this.type}-contrast)`
  });
};
qe = function(e) {
  this._hasSlottedContent = e.target.assignedNodes({ flatten: !0 }).length > 0;
};
Q.styles = [
  Cn,
  Rt`
			:host {
				display: block;
			}

			#box {
				display: flex;
				align-items: flex-start;
				justify-content: flex-start;
				gap: 1rem;

				background-color: var(--uui-color-surface);
				color: var(--uui-color-text);

				border-color: var(--uui-color-surface);
				border-radius: calc(var(--uui-border-radius) * 2);

				box-shadow: var(--uui-shadow-depth-1);

				padding: 1rem;

				> div {
					flex: 1;
				}

				> umb-icon {
					font-size: 2.5rem;
				}

				&.compact {
					align-items: center;

					> umb-icon {
						font-size: 2rem;
					}
				}
			}

			.uui-text p,
			.uui-text ::slotted(p) {
				margin: 0.5rem 0;

				&:only-child {
					margin: 0;
				}
			}

			.uui-text p:last-child:not(:only-child),
			.uui-text ::slotted(p:last-child:not(:only-child)) {
				margin-bottom: 0.25rem;
			}

			details > summary {
				cursor: pointer;
				font-weight: bold;
			}
		`
];
ht([
  Se()
], Q.prototype, "_hasSlottedContent", 2);
ht([
  O({ type: Boolean })
], Q.prototype, "compact", 2);
ht([
  O()
], Q.prototype, "heading", 2);
ht([
  O()
], Q.prototype, "icon", 2);
ht([
  O()
], Q.prototype, "message", 2);
ht([
  O()
], Q.prototype, "type", 2);
Q = ht([
  Bt("contentment-info-box")
], Q);
var Yn = Object.getOwnPropertyDescriptor, Xn = (e, t, n, o) => {
  for (var r = o > 1 ? void 0 : o ? Yn(t, n) : t, i = e.length - 1, a; i >= 0; i--)
    (a = e[i]) && (r = a(r) || r);
  return r;
};
let ye = class extends _n {
  render() {
    return H`
			<img
				src="/App_Plugins/Contentment/lee-was-here.svg"
				alt="Lee was here"
				width="115"
				height="55" />
		`;
  }
};
ye.styles = [
  Rt`
			:host {
				height: 55px;
				width: 115px;
			}
		`
];
ye = Xn([
  Bt("lee-was-here")
], ye);
var Ln = Object.defineProperty, kn = Object.getOwnPropertyDescriptor, Ke = (e) => {
  throw TypeError(e);
}, V = (e, t, n, o) => {
  for (var r = o > 1 ? void 0 : o ? kn(t, n) : t, i = e.length - 1, a; i >= 0; i--)
    (a = e[i]) && (r = (o ? a(t, n, r) : a(r)) || r);
  return o && r && Ln(t, n, r), r;
}, Ce = (e, t, n) => t.has(e) || Ke("Cannot " + n), Gt = (e, t, n) => (Ce(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Ae = (e, t, n) => t.has(e) ? Ke("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), Ne = (e, t, n, o) => (Ce(e, t, "write to private field"), t.set(e, n), n), Ze = (e, t, n) => (Ce(e, t, "access private method"), n), it, Jt, Qe, Je;
let X = class extends In(ie) {
  constructor() {
    super(), Ae(this, Jt), this.mandatory = !1, this.mandatoryMessage = Pn, Ae(this, it), this.readonly = !1, this._undefined = !1, this.addValidator(
      "valid",
      () => "#errors_propertyHasErrors",
      () => !0
    );
  }
  set propertyEditorUiAlias(e) {
    Ne(this, it, e), Ze(this, Jt, Qe).call(this);
  }
  get propertyEditorUiAlias() {
    return Gt(this, it);
  }
  set value(e) {
    super.value = e, this._element && (this._element.value = e);
  }
  get value() {
    return super.value;
  }
  // Disable the Shadow DOM for this element; as event propagation needs to pass-through.
  createRenderRoot() {
    return this;
  }
  render() {
    return this._element ? this._element : this._undefined ? H`<lee-was-here></lee-was-here>` : En;
  }
  destroy() {
    super.destroy(), Ne(this, it, void 0), this._element = void 0, this._undefined = !1;
  }
};
it = /* @__PURE__ */ new WeakMap();
Jt = /* @__PURE__ */ new WeakSet();
Qe = function() {
  Gt(this, it) && this.observe(
    On.byTypeAndAlias("propertyEditorUi", Gt(this, it)),
    (e) => {
      e ? Ze(this, Jt, Je).call(this, e) : (console.error(`Failed to find manifest for property editor UI alias: ${Gt(this, it)}`), this._undefined = !0);
    },
    "_observePropertyEditorUI"
  );
};
Je = async function(e) {
  if (!e) return;
  const t = await Tn(e, "lee-was-here");
  t || (console.error(`Failed to create extension element for manifest: ${e}`), this._undefined = !0);
  const n = this._element;
  this._element = t, this._element && (this._element.mandatory = this.mandatory, this._element.mandatoryMessage = this.mandatoryMessage, this._element.manifest = e, this._element.readonly = this.readonly, this._element.value = this.value, this._element.name = this.name, this.config && (this._element.config = this.config), "validity" in this._element && this.addFormControlElement(this._element), this.dispatchEvent(new CustomEvent("loaded"))), this.requestUpdate("_element", n);
};
X.styles = [
  Rt`
			:host {
				display: contents;
			}
		`
];
V([
  O({ attribute: !1 })
], X.prototype, "config", 2);
V([
  O({ type: Boolean })
], X.prototype, "mandatory", 2);
V([
  O({ type: String })
], X.prototype, "mandatoryMessage", 2);
V([
  O()
], X.prototype, "name", 2);
V([
  O({ type: String, attribute: "property-editor-ui-alias" })
], X.prototype, "propertyEditorUiAlias", 1);
V([
  O({ type: Boolean, reflect: !0 })
], X.prototype, "readonly", 2);
V([
  O()
], X.prototype, "value", 1);
V([
  Se()
], X.prototype, "_element", 2);
V([
  Se()
], X.prototype, "_undefined", 2);
X = V([
  Bt("contentment-property-editor-ui")
], X);
/**!
 * Sortable 1.15.6
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function Me(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    t && (o = o.filter(function(r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), n.push.apply(n, o);
  }
  return n;
}
function j(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Me(Object(n), !0).forEach(function(o) {
      Wn(e, o, n[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Me(Object(n)).forEach(function(o) {
      Object.defineProperty(e, o, Object.getOwnPropertyDescriptor(n, o));
    });
  }
  return e;
}
function jt(e) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? jt = function(t) {
    return typeof t;
  } : jt = function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, jt(e);
}
function Wn(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function J() {
  return J = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var o in n)
        Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
    }
    return e;
  }, J.apply(this, arguments);
}
function Un(e, t) {
  if (e == null) return {};
  var n = {}, o = Object.keys(e), r, i;
  for (i = 0; i < o.length; i++)
    r = o[i], !(t.indexOf(r) >= 0) && (n[r] = e[r]);
  return n;
}
function zn(e, t) {
  if (e == null) return {};
  var n = Un(e, t), o, r;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (r = 0; r < i.length; r++)
      o = i[r], !(t.indexOf(o) >= 0) && Object.prototype.propertyIsEnumerable.call(e, o) && (n[o] = e[o]);
  }
  return n;
}
var Hn = "1.15.6";
function Z(e) {
  if (typeof window < "u" && window.navigator)
    return !!/* @__PURE__ */ navigator.userAgent.match(e);
}
var tt = Z(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i), Yt = Z(/Edge/i), $e = Z(/firefox/i), At = Z(/safari/i) && !Z(/chrome/i) && !Z(/android/i), Te = Z(/iP(ad|od|hone)/i), tn = Z(/chrome/i) && Z(/android/i), en = {
  capture: !1,
  passive: !1
};
function v(e, t, n) {
  e.addEventListener(t, n, !tt && en);
}
function g(e, t, n) {
  e.removeEventListener(t, n, !tt && en);
}
function te(e, t) {
  if (t) {
    if (t[0] === ">" && (t = t.substring(1)), e)
      try {
        if (e.matches)
          return e.matches(t);
        if (e.msMatchesSelector)
          return e.msMatchesSelector(t);
        if (e.webkitMatchesSelector)
          return e.webkitMatchesSelector(t);
      } catch {
        return !1;
      }
    return !1;
  }
}
function nn(e) {
  return e.host && e !== document && e.host.nodeType ? e.host : e.parentNode;
}
function U(e, t, n, o) {
  if (e) {
    n = n || document;
    do {
      if (t != null && (t[0] === ">" ? e.parentNode === n && te(e, t) : te(e, t)) || o && e === n)
        return e;
      if (e === n) break;
    } while (e = nn(e));
  }
  return null;
}
var Fe = /\s+/g;
function R(e, t, n) {
  if (e && t)
    if (e.classList)
      e.classList[n ? "add" : "remove"](t);
    else {
      var o = (" " + e.className + " ").replace(Fe, " ").replace(" " + t + " ", " ");
      e.className = (o + (n ? " " + t : "")).replace(Fe, " ");
    }
}
function h(e, t, n) {
  var o = e && e.style;
  if (o) {
    if (n === void 0)
      return document.defaultView && document.defaultView.getComputedStyle ? n = document.defaultView.getComputedStyle(e, "") : e.currentStyle && (n = e.currentStyle), t === void 0 ? n : n[t];
    !(t in o) && t.indexOf("webkit") === -1 && (t = "-webkit-" + t), o[t] = n + (typeof n == "string" ? "" : "px");
  }
}
function bt(e, t) {
  var n = "";
  if (typeof e == "string")
    n = e;
  else
    do {
      var o = h(e, "transform");
      o && o !== "none" && (n = o + " " + n);
    } while (!t && (e = e.parentNode));
  var r = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
  return r && new r(n);
}
function on(e, t, n) {
  if (e) {
    var o = e.getElementsByTagName(t), r = 0, i = o.length;
    if (n)
      for (; r < i; r++)
        n(o[r], r);
    return o;
  }
  return [];
}
function G() {
  var e = document.scrollingElement;
  return e || document.documentElement;
}
function T(e, t, n, o, r) {
  if (!(!e.getBoundingClientRect && e !== window)) {
    var i, a, l, s, u, f, d;
    if (e !== window && e.parentNode && e !== G() ? (i = e.getBoundingClientRect(), a = i.top, l = i.left, s = i.bottom, u = i.right, f = i.height, d = i.width) : (a = 0, l = 0, s = window.innerHeight, u = window.innerWidth, f = window.innerHeight, d = window.innerWidth), (t || n) && e !== window && (r = r || e.parentNode, !tt))
      do
        if (r && r.getBoundingClientRect && (h(r, "transform") !== "none" || n && h(r, "position") !== "static")) {
          var b = r.getBoundingClientRect();
          a -= b.top + parseInt(h(r, "border-top-width")), l -= b.left + parseInt(h(r, "border-left-width")), s = a + i.height, u = l + i.width;
          break;
        }
      while (r = r.parentNode);
    if (o && e !== window) {
      var E = bt(r || e), y = E && E.a, _ = E && E.d;
      E && (a /= _, l /= y, d /= y, f /= _, s = a + f, u = l + d);
    }
    return {
      top: a,
      left: l,
      bottom: s,
      right: u,
      width: d,
      height: f
    };
  }
}
function Re(e, t, n) {
  for (var o = at(e, !0), r = T(e)[t]; o; ) {
    var i = T(o)[n], a = void 0;
    if (a = r >= i, !a) return o;
    if (o === G()) break;
    o = at(o, !1);
  }
  return !1;
}
function _t(e, t, n, o) {
  for (var r = 0, i = 0, a = e.children; i < a.length; ) {
    if (a[i].style.display !== "none" && a[i] !== p.ghost && (o || a[i] !== p.dragged) && U(a[i], n.draggable, e, !1)) {
      if (r === t)
        return a[i];
      r++;
    }
    i++;
  }
  return null;
}
function Oe(e, t) {
  for (var n = e.lastElementChild; n && (n === p.ghost || h(n, "display") === "none" || t && !te(n, t)); )
    n = n.previousElementSibling;
  return n || null;
}
function Y(e, t) {
  var n = 0;
  if (!e || !e.parentNode)
    return -1;
  for (; e = e.previousElementSibling; )
    e.nodeName.toUpperCase() !== "TEMPLATE" && e !== p.clone && (!t || te(e, t)) && n++;
  return n;
}
function Be(e) {
  var t = 0, n = 0, o = G();
  if (e)
    do {
      var r = bt(e), i = r.a, a = r.d;
      t += e.scrollLeft * i, n += e.scrollTop * a;
    } while (e !== o && (e = e.parentNode));
  return [t, n];
}
function Gn(e, t) {
  for (var n in e)
    if (e.hasOwnProperty(n)) {
      for (var o in t)
        if (t.hasOwnProperty(o) && t[o] === e[n][o]) return Number(n);
    }
  return -1;
}
function at(e, t) {
  if (!e || !e.getBoundingClientRect) return G();
  var n = e, o = !1;
  do
    if (n.clientWidth < n.scrollWidth || n.clientHeight < n.scrollHeight) {
      var r = h(n);
      if (n.clientWidth < n.scrollWidth && (r.overflowX == "auto" || r.overflowX == "scroll") || n.clientHeight < n.scrollHeight && (r.overflowY == "auto" || r.overflowY == "scroll")) {
        if (!n.getBoundingClientRect || n === document.body) return G();
        if (o || t) return n;
        o = !0;
      }
    }
  while (n = n.parentNode);
  return G();
}
function jn(e, t) {
  if (e && t)
    for (var n in t)
      t.hasOwnProperty(n) && (e[n] = t[n]);
  return e;
}
function ce(e, t) {
  return Math.round(e.top) === Math.round(t.top) && Math.round(e.left) === Math.round(t.left) && Math.round(e.height) === Math.round(t.height) && Math.round(e.width) === Math.round(t.width);
}
var Nt;
function rn(e, t) {
  return function() {
    if (!Nt) {
      var n = arguments, o = this;
      n.length === 1 ? e.call(o, n[0]) : e.apply(o, n), Nt = setTimeout(function() {
        Nt = void 0;
      }, t);
    }
  };
}
function Vn() {
  clearTimeout(Nt), Nt = void 0;
}
function an(e, t, n) {
  e.scrollLeft += t, e.scrollTop += n;
}
function ln(e) {
  var t = window.Polymer, n = window.jQuery || window.Zepto;
  return t && t.dom ? t.dom(e).cloneNode(!0) : n ? n(e).clone(!0)[0] : e.cloneNode(!0);
}
function sn(e, t, n) {
  var o = {};
  return Array.from(e.children).forEach(function(r) {
    var i, a, l, s;
    if (!(!U(r, t.draggable, e, !1) || r.animated || r === n)) {
      var u = T(r);
      o.left = Math.min((i = o.left) !== null && i !== void 0 ? i : 1 / 0, u.left), o.top = Math.min((a = o.top) !== null && a !== void 0 ? a : 1 / 0, u.top), o.right = Math.max((l = o.right) !== null && l !== void 0 ? l : -1 / 0, u.right), o.bottom = Math.max((s = o.bottom) !== null && s !== void 0 ? s : -1 / 0, u.bottom);
    }
  }), o.width = o.right - o.left, o.height = o.bottom - o.top, o.x = o.left, o.y = o.top, o;
}
var M = "Sortable" + (/* @__PURE__ */ new Date()).getTime();
function qn() {
  var e = [], t;
  return {
    captureAnimationState: function() {
      if (e = [], !!this.options.animation) {
        var o = [].slice.call(this.el.children);
        o.forEach(function(r) {
          if (!(h(r, "display") === "none" || r === p.ghost)) {
            e.push({
              target: r,
              rect: T(r)
            });
            var i = j({}, e[e.length - 1].rect);
            if (r.thisAnimationDuration) {
              var a = bt(r, !0);
              a && (i.top -= a.f, i.left -= a.e);
            }
            r.fromRect = i;
          }
        });
      }
    },
    addAnimationState: function(o) {
      e.push(o);
    },
    removeAnimationState: function(o) {
      e.splice(Gn(e, {
        target: o
      }), 1);
    },
    animateAll: function(o) {
      var r = this;
      if (!this.options.animation) {
        clearTimeout(t), typeof o == "function" && o();
        return;
      }
      var i = !1, a = 0;
      e.forEach(function(l) {
        var s = 0, u = l.target, f = u.fromRect, d = T(u), b = u.prevFromRect, E = u.prevToRect, y = l.rect, _ = bt(u, !0);
        _ && (d.top -= _.f, d.left -= _.e), u.toRect = d, u.thisAnimationDuration && ce(b, d) && !ce(f, d) && // Make sure animatingRect is on line between toRect & fromRect
        (y.top - d.top) / (y.left - d.left) === (f.top - d.top) / (f.left - d.left) && (s = Zn(y, b, E, r.options)), ce(d, f) || (u.prevFromRect = f, u.prevToRect = d, s || (s = r.options.animation), r.animate(u, y, d, s)), s && (i = !0, a = Math.max(a, s), clearTimeout(u.animationResetTimer), u.animationResetTimer = setTimeout(function() {
          u.animationTime = 0, u.prevFromRect = null, u.fromRect = null, u.prevToRect = null, u.thisAnimationDuration = null;
        }, s), u.thisAnimationDuration = s);
      }), clearTimeout(t), i ? t = setTimeout(function() {
        typeof o == "function" && o();
      }, a) : typeof o == "function" && o(), e = [];
    },
    animate: function(o, r, i, a) {
      if (a) {
        h(o, "transition", ""), h(o, "transform", "");
        var l = bt(this.el), s = l && l.a, u = l && l.d, f = (r.left - i.left) / (s || 1), d = (r.top - i.top) / (u || 1);
        o.animatingX = !!f, o.animatingY = !!d, h(o, "transform", "translate3d(" + f + "px," + d + "px,0)"), this.forRepaintDummy = Kn(o), h(o, "transition", "transform " + a + "ms" + (this.options.easing ? " " + this.options.easing : "")), h(o, "transform", "translate3d(0,0,0)"), typeof o.animated == "number" && clearTimeout(o.animated), o.animated = setTimeout(function() {
          h(o, "transition", ""), h(o, "transform", ""), o.animated = !1, o.animatingX = !1, o.animatingY = !1;
        }, a);
      }
    }
  };
}
function Kn(e) {
  return e.offsetWidth;
}
function Zn(e, t, n, o) {
  return Math.sqrt(Math.pow(t.top - e.top, 2) + Math.pow(t.left - e.left, 2)) / Math.sqrt(Math.pow(t.top - n.top, 2) + Math.pow(t.left - n.left, 2)) * o.animation;
}
var pt = [], de = {
  initializeByDefault: !0
}, Xt = {
  mount: function(t) {
    for (var n in de)
      de.hasOwnProperty(n) && !(n in t) && (t[n] = de[n]);
    pt.forEach(function(o) {
      if (o.pluginName === t.pluginName)
        throw "Sortable: Cannot mount plugin ".concat(t.pluginName, " more than once");
    }), pt.push(t);
  },
  pluginEvent: function(t, n, o) {
    var r = this;
    this.eventCanceled = !1, o.cancel = function() {
      r.eventCanceled = !0;
    };
    var i = t + "Global";
    pt.forEach(function(a) {
      n[a.pluginName] && (n[a.pluginName][i] && n[a.pluginName][i](j({
        sortable: n
      }, o)), n.options[a.pluginName] && n[a.pluginName][t] && n[a.pluginName][t](j({
        sortable: n
      }, o)));
    });
  },
  initializePlugins: function(t, n, o, r) {
    pt.forEach(function(l) {
      var s = l.pluginName;
      if (!(!t.options[s] && !l.initializeByDefault)) {
        var u = new l(t, n, t.options);
        u.sortable = t, u.options = t.options, t[s] = u, J(o, u.defaults);
      }
    });
    for (var i in t.options)
      if (t.options.hasOwnProperty(i)) {
        var a = this.modifyOption(t, i, t.options[i]);
        typeof a < "u" && (t.options[i] = a);
      }
  },
  getEventProperties: function(t, n) {
    var o = {};
    return pt.forEach(function(r) {
      typeof r.eventProperties == "function" && J(o, r.eventProperties.call(n[r.pluginName], t));
    }), o;
  },
  modifyOption: function(t, n, o) {
    var r;
    return pt.forEach(function(i) {
      t[i.pluginName] && i.optionListeners && typeof i.optionListeners[n] == "function" && (r = i.optionListeners[n].call(t[i.pluginName], o));
    }), r;
  }
};
function Qn(e) {
  var t = e.sortable, n = e.rootEl, o = e.name, r = e.targetEl, i = e.cloneEl, a = e.toEl, l = e.fromEl, s = e.oldIndex, u = e.newIndex, f = e.oldDraggableIndex, d = e.newDraggableIndex, b = e.originalEvent, E = e.putSortable, y = e.extraEventProperties;
  if (t = t || n && n[M], !!t) {
    var _, L = t.options, q = "on" + o.charAt(0).toUpperCase() + o.substr(1);
    window.CustomEvent && !tt && !Yt ? _ = new CustomEvent(o, {
      bubbles: !0,
      cancelable: !0
    }) : (_ = document.createEvent("Event"), _.initEvent(o, !0, !0)), _.to = a || n, _.from = l || n, _.item = r || n, _.clone = i, _.oldIndex = s, _.newIndex = u, _.oldDraggableIndex = f, _.newDraggableIndex = d, _.originalEvent = b, _.pullMode = E ? E.lastPutMode : void 0;
    var x = j(j({}, y), Xt.getEventProperties(o, t));
    for (var k in x)
      _[k] = x[k];
    n && n.dispatchEvent(_), L[q] && L[q].call(t, _);
  }
}
var Jn = ["evt"], N = function(t, n) {
  var o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = o.evt, i = zn(o, Jn);
  Xt.pluginEvent.bind(p)(t, n, j({
    dragEl: c,
    parentEl: S,
    ghostEl: m,
    rootEl: w,
    nextEl: ft,
    lastDownEl: Vt,
    cloneEl: D,
    cloneHidden: rt,
    dragStarted: It,
    putSortable: I,
    activeSortable: p.active,
    originalEvent: r,
    oldIndex: vt,
    oldDraggableIndex: Mt,
    newIndex: B,
    newDraggableIndex: ot,
    hideGhostForTarget: fn,
    unhideGhostForTarget: hn,
    cloneNowHidden: function() {
      rt = !0;
    },
    cloneNowShown: function() {
      rt = !1;
    },
    dispatchSortableEvent: function(l) {
      A({
        sortable: n,
        name: l,
        originalEvent: r
      });
    }
  }, i));
};
function A(e) {
  Qn(j({
    putSortable: I,
    cloneEl: D,
    targetEl: c,
    rootEl: w,
    oldIndex: vt,
    oldDraggableIndex: Mt,
    newIndex: B,
    newDraggableIndex: ot
  }, e));
}
var c, S, m, w, ft, Vt, D, rt, vt, B, Mt, ot, kt, I, gt = !1, ee = !1, ne = [], ct, W, fe, he, Ye, Xe, It, mt, $t, Ft = !1, Wt = !1, qt, P, pe = [], _e = !1, oe = [], le = typeof document < "u", Ut = Te, Le = Yt || tt ? "cssFloat" : "float", to = le && !tn && !Te && "draggable" in document.createElement("div"), un = function() {
  if (le) {
    if (tt)
      return !1;
    var e = document.createElement("x");
    return e.style.cssText = "pointer-events:auto", e.style.pointerEvents === "auto";
  }
}(), cn = function(t, n) {
  var o = h(t), r = parseInt(o.width) - parseInt(o.paddingLeft) - parseInt(o.paddingRight) - parseInt(o.borderLeftWidth) - parseInt(o.borderRightWidth), i = _t(t, 0, n), a = _t(t, 1, n), l = i && h(i), s = a && h(a), u = l && parseInt(l.marginLeft) + parseInt(l.marginRight) + T(i).width, f = s && parseInt(s.marginLeft) + parseInt(s.marginRight) + T(a).width;
  if (o.display === "flex")
    return o.flexDirection === "column" || o.flexDirection === "column-reverse" ? "vertical" : "horizontal";
  if (o.display === "grid")
    return o.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
  if (i && l.float && l.float !== "none") {
    var d = l.float === "left" ? "left" : "right";
    return a && (s.clear === "both" || s.clear === d) ? "vertical" : "horizontal";
  }
  return i && (l.display === "block" || l.display === "flex" || l.display === "table" || l.display === "grid" || u >= r && o[Le] === "none" || a && o[Le] === "none" && u + f > r) ? "vertical" : "horizontal";
}, eo = function(t, n, o) {
  var r = o ? t.left : t.top, i = o ? t.right : t.bottom, a = o ? t.width : t.height, l = o ? n.left : n.top, s = o ? n.right : n.bottom, u = o ? n.width : n.height;
  return r === l || i === s || r + a / 2 === l + u / 2;
}, no = function(t, n) {
  var o;
  return ne.some(function(r) {
    var i = r[M].options.emptyInsertThreshold;
    if (!(!i || Oe(r))) {
      var a = T(r), l = t >= a.left - i && t <= a.right + i, s = n >= a.top - i && n <= a.bottom + i;
      if (l && s)
        return o = r;
    }
  }), o;
}, dn = function(t) {
  function n(i, a) {
    return function(l, s, u, f) {
      var d = l.options.group.name && s.options.group.name && l.options.group.name === s.options.group.name;
      if (i == null && (a || d))
        return !0;
      if (i == null || i === !1)
        return !1;
      if (a && i === "clone")
        return i;
      if (typeof i == "function")
        return n(i(l, s, u, f), a)(l, s, u, f);
      var b = (a ? l : s).options.group.name;
      return i === !0 || typeof i == "string" && i === b || i.join && i.indexOf(b) > -1;
    };
  }
  var o = {}, r = t.group;
  (!r || jt(r) != "object") && (r = {
    name: r
  }), o.name = r.name, o.checkPull = n(r.pull, !0), o.checkPut = n(r.put), o.revertClone = r.revertClone, t.group = o;
}, fn = function() {
  !un && m && h(m, "display", "none");
}, hn = function() {
  !un && m && h(m, "display", "");
};
le && !tn && document.addEventListener("click", function(e) {
  if (ee)
    return e.preventDefault(), e.stopPropagation && e.stopPropagation(), e.stopImmediatePropagation && e.stopImmediatePropagation(), ee = !1, !1;
}, !0);
var dt = function(t) {
  if (c) {
    t = t.touches ? t.touches[0] : t;
    var n = no(t.clientX, t.clientY);
    if (n) {
      var o = {};
      for (var r in t)
        t.hasOwnProperty(r) && (o[r] = t[r]);
      o.target = o.rootEl = n, o.preventDefault = void 0, o.stopPropagation = void 0, n[M]._onDragOver(o);
    }
  }
}, oo = function(t) {
  c && c.parentNode[M]._isOutsideThisEl(t.target);
};
function p(e, t) {
  if (!(e && e.nodeType && e.nodeType === 1))
    throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(e));
  this.el = e, this.options = t = J({}, t), e[M] = this;
  var n = {
    group: null,
    sort: !0,
    disabled: !1,
    store: null,
    handle: null,
    draggable: /^[uo]l$/i.test(e.nodeName) ? ">li" : ">*",
    swapThreshold: 1,
    // percentage; 0 <= x <= 1
    invertSwap: !1,
    // invert always
    invertedSwapThreshold: null,
    // will be set to same as swapThreshold if default
    removeCloneOnHide: !0,
    direction: function() {
      return cn(e, this.options);
    },
    ghostClass: "sortable-ghost",
    chosenClass: "sortable-chosen",
    dragClass: "sortable-drag",
    ignore: "a, img",
    filter: null,
    preventOnFilter: !0,
    animation: 0,
    easing: null,
    setData: function(a, l) {
      a.setData("Text", l.textContent);
    },
    dropBubble: !1,
    dragoverBubble: !1,
    dataIdAttr: "data-id",
    delay: 0,
    delayOnTouchOnly: !1,
    touchStartThreshold: (Number.parseInt ? Number : window).parseInt(window.devicePixelRatio, 10) || 1,
    forceFallback: !1,
    fallbackClass: "sortable-fallback",
    fallbackOnBody: !1,
    fallbackTolerance: 0,
    fallbackOffset: {
      x: 0,
      y: 0
    },
    // Disabled on Safari: #1571; Enabled on Safari IOS: #2244
    supportPointer: p.supportPointer !== !1 && "PointerEvent" in window && (!At || Te),
    emptyInsertThreshold: 5
  };
  Xt.initializePlugins(this, e, n);
  for (var o in n)
    !(o in t) && (t[o] = n[o]);
  dn(t);
  for (var r in this)
    r.charAt(0) === "_" && typeof this[r] == "function" && (this[r] = this[r].bind(this));
  this.nativeDraggable = t.forceFallback ? !1 : to, this.nativeDraggable && (this.options.touchStartThreshold = 1), t.supportPointer ? v(e, "pointerdown", this._onTapStart) : (v(e, "mousedown", this._onTapStart), v(e, "touchstart", this._onTapStart)), this.nativeDraggable && (v(e, "dragover", this), v(e, "dragenter", this)), ne.push(this.el), t.store && t.store.get && this.sort(t.store.get(this) || []), J(this, qn());
}
p.prototype = /** @lends Sortable.prototype */
{
  constructor: p,
  _isOutsideThisEl: function(t) {
    !this.el.contains(t) && t !== this.el && (mt = null);
  },
  _getDirection: function(t, n) {
    return typeof this.options.direction == "function" ? this.options.direction.call(this, t, n, c) : this.options.direction;
  },
  _onTapStart: function(t) {
    if (t.cancelable) {
      var n = this, o = this.el, r = this.options, i = r.preventOnFilter, a = t.type, l = t.touches && t.touches[0] || t.pointerType && t.pointerType === "touch" && t, s = (l || t).target, u = t.target.shadowRoot && (t.path && t.path[0] || t.composedPath && t.composedPath()[0]) || s, f = r.filter;
      if (fo(o), !c && !(/mousedown|pointerdown/.test(a) && t.button !== 0 || r.disabled) && !u.isContentEditable && !(!this.nativeDraggable && At && s && s.tagName.toUpperCase() === "SELECT") && (s = U(s, r.draggable, o, !1), !(s && s.animated) && Vt !== s)) {
        if (vt = Y(s), Mt = Y(s, r.draggable), typeof f == "function") {
          if (f.call(this, t, s, this)) {
            A({
              sortable: n,
              rootEl: u,
              name: "filter",
              targetEl: s,
              toEl: o,
              fromEl: o
            }), N("filter", n, {
              evt: t
            }), i && t.preventDefault();
            return;
          }
        } else if (f && (f = f.split(",").some(function(d) {
          if (d = U(u, d.trim(), o, !1), d)
            return A({
              sortable: n,
              rootEl: d,
              name: "filter",
              targetEl: s,
              fromEl: o,
              toEl: o
            }), N("filter", n, {
              evt: t
            }), !0;
        }), f)) {
          i && t.preventDefault();
          return;
        }
        r.handle && !U(u, r.handle, o, !1) || this._prepareDragStart(t, l, s);
      }
    }
  },
  _prepareDragStart: function(t, n, o) {
    var r = this, i = r.el, a = r.options, l = i.ownerDocument, s;
    if (o && !c && o.parentNode === i) {
      var u = T(o);
      if (w = i, c = o, S = c.parentNode, ft = c.nextSibling, Vt = o, kt = a.group, p.dragged = c, ct = {
        target: c,
        clientX: (n || t).clientX,
        clientY: (n || t).clientY
      }, Ye = ct.clientX - u.left, Xe = ct.clientY - u.top, this._lastX = (n || t).clientX, this._lastY = (n || t).clientY, c.style["will-change"] = "all", s = function() {
        if (N("delayEnded", r, {
          evt: t
        }), p.eventCanceled) {
          r._onDrop();
          return;
        }
        r._disableDelayedDragEvents(), !$e && r.nativeDraggable && (c.draggable = !0), r._triggerDragStart(t, n), A({
          sortable: r,
          name: "choose",
          originalEvent: t
        }), R(c, a.chosenClass, !0);
      }, a.ignore.split(",").forEach(function(f) {
        on(c, f.trim(), me);
      }), v(l, "dragover", dt), v(l, "mousemove", dt), v(l, "touchmove", dt), a.supportPointer ? (v(l, "pointerup", r._onDrop), !this.nativeDraggable && v(l, "pointercancel", r._onDrop)) : (v(l, "mouseup", r._onDrop), v(l, "touchend", r._onDrop), v(l, "touchcancel", r._onDrop)), $e && this.nativeDraggable && (this.options.touchStartThreshold = 4, c.draggable = !0), N("delayStart", this, {
        evt: t
      }), a.delay && (!a.delayOnTouchOnly || n) && (!this.nativeDraggable || !(Yt || tt))) {
        if (p.eventCanceled) {
          this._onDrop();
          return;
        }
        a.supportPointer ? (v(l, "pointerup", r._disableDelayedDrag), v(l, "pointercancel", r._disableDelayedDrag)) : (v(l, "mouseup", r._disableDelayedDrag), v(l, "touchend", r._disableDelayedDrag), v(l, "touchcancel", r._disableDelayedDrag)), v(l, "mousemove", r._delayedDragTouchMoveHandler), v(l, "touchmove", r._delayedDragTouchMoveHandler), a.supportPointer && v(l, "pointermove", r._delayedDragTouchMoveHandler), r._dragStartTimer = setTimeout(s, a.delay);
      } else
        s();
    }
  },
  _delayedDragTouchMoveHandler: function(t) {
    var n = t.touches ? t.touches[0] : t;
    Math.max(Math.abs(n.clientX - this._lastX), Math.abs(n.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1)) && this._disableDelayedDrag();
  },
  _disableDelayedDrag: function() {
    c && me(c), clearTimeout(this._dragStartTimer), this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function() {
    var t = this.el.ownerDocument;
    g(t, "mouseup", this._disableDelayedDrag), g(t, "touchend", this._disableDelayedDrag), g(t, "touchcancel", this._disableDelayedDrag), g(t, "pointerup", this._disableDelayedDrag), g(t, "pointercancel", this._disableDelayedDrag), g(t, "mousemove", this._delayedDragTouchMoveHandler), g(t, "touchmove", this._delayedDragTouchMoveHandler), g(t, "pointermove", this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function(t, n) {
    n = n || t.pointerType == "touch" && t, !this.nativeDraggable || n ? this.options.supportPointer ? v(document, "pointermove", this._onTouchMove) : n ? v(document, "touchmove", this._onTouchMove) : v(document, "mousemove", this._onTouchMove) : (v(c, "dragend", this), v(w, "dragstart", this._onDragStart));
    try {
      document.selection ? Kt(function() {
        document.selection.empty();
      }) : window.getSelection().removeAllRanges();
    } catch {
    }
  },
  _dragStarted: function(t, n) {
    if (gt = !1, w && c) {
      N("dragStarted", this, {
        evt: n
      }), this.nativeDraggable && v(document, "dragover", oo);
      var o = this.options;
      !t && R(c, o.dragClass, !1), R(c, o.ghostClass, !0), p.active = this, t && this._appendGhost(), A({
        sortable: this,
        name: "start",
        originalEvent: n
      });
    } else
      this._nulling();
  },
  _emulateDragOver: function() {
    if (W) {
      this._lastX = W.clientX, this._lastY = W.clientY, fn();
      for (var t = document.elementFromPoint(W.clientX, W.clientY), n = t; t && t.shadowRoot && (t = t.shadowRoot.elementFromPoint(W.clientX, W.clientY), t !== n); )
        n = t;
      if (c.parentNode[M]._isOutsideThisEl(t), n)
        do {
          if (n[M]) {
            var o = void 0;
            if (o = n[M]._onDragOver({
              clientX: W.clientX,
              clientY: W.clientY,
              target: t,
              rootEl: n
            }), o && !this.options.dragoverBubble)
              break;
          }
          t = n;
        } while (n = nn(n));
      hn();
    }
  },
  _onTouchMove: function(t) {
    if (ct) {
      var n = this.options, o = n.fallbackTolerance, r = n.fallbackOffset, i = t.touches ? t.touches[0] : t, a = m && bt(m, !0), l = m && a && a.a, s = m && a && a.d, u = Ut && P && Be(P), f = (i.clientX - ct.clientX + r.x) / (l || 1) + (u ? u[0] - pe[0] : 0) / (l || 1), d = (i.clientY - ct.clientY + r.y) / (s || 1) + (u ? u[1] - pe[1] : 0) / (s || 1);
      if (!p.active && !gt) {
        if (o && Math.max(Math.abs(i.clientX - this._lastX), Math.abs(i.clientY - this._lastY)) < o)
          return;
        this._onDragStart(t, !0);
      }
      if (m) {
        a ? (a.e += f - (fe || 0), a.f += d - (he || 0)) : a = {
          a: 1,
          b: 0,
          c: 0,
          d: 1,
          e: f,
          f: d
        };
        var b = "matrix(".concat(a.a, ",").concat(a.b, ",").concat(a.c, ",").concat(a.d, ",").concat(a.e, ",").concat(a.f, ")");
        h(m, "webkitTransform", b), h(m, "mozTransform", b), h(m, "msTransform", b), h(m, "transform", b), fe = f, he = d, W = i;
      }
      t.cancelable && t.preventDefault();
    }
  },
  _appendGhost: function() {
    if (!m) {
      var t = this.options.fallbackOnBody ? document.body : w, n = T(c, !0, Ut, !0, t), o = this.options;
      if (Ut) {
        for (P = t; h(P, "position") === "static" && h(P, "transform") === "none" && P !== document; )
          P = P.parentNode;
        P !== document.body && P !== document.documentElement ? (P === document && (P = G()), n.top += P.scrollTop, n.left += P.scrollLeft) : P = G(), pe = Be(P);
      }
      m = c.cloneNode(!0), R(m, o.ghostClass, !1), R(m, o.fallbackClass, !0), R(m, o.dragClass, !0), h(m, "transition", ""), h(m, "transform", ""), h(m, "box-sizing", "border-box"), h(m, "margin", 0), h(m, "top", n.top), h(m, "left", n.left), h(m, "width", n.width), h(m, "height", n.height), h(m, "opacity", "0.8"), h(m, "position", Ut ? "absolute" : "fixed"), h(m, "zIndex", "100000"), h(m, "pointerEvents", "none"), p.ghost = m, t.appendChild(m), h(m, "transform-origin", Ye / parseInt(m.style.width) * 100 + "% " + Xe / parseInt(m.style.height) * 100 + "%");
    }
  },
  _onDragStart: function(t, n) {
    var o = this, r = t.dataTransfer, i = o.options;
    if (N("dragStart", this, {
      evt: t
    }), p.eventCanceled) {
      this._onDrop();
      return;
    }
    N("setupClone", this), p.eventCanceled || (D = ln(c), D.removeAttribute("id"), D.draggable = !1, D.style["will-change"] = "", this._hideClone(), R(D, this.options.chosenClass, !1), p.clone = D), o.cloneId = Kt(function() {
      N("clone", o), !p.eventCanceled && (o.options.removeCloneOnHide || w.insertBefore(D, c), o._hideClone(), A({
        sortable: o,
        name: "clone"
      }));
    }), !n && R(c, i.dragClass, !0), n ? (ee = !0, o._loopId = setInterval(o._emulateDragOver, 50)) : (g(document, "mouseup", o._onDrop), g(document, "touchend", o._onDrop), g(document, "touchcancel", o._onDrop), r && (r.effectAllowed = "move", i.setData && i.setData.call(o, r, c)), v(document, "drop", o), h(c, "transform", "translateZ(0)")), gt = !0, o._dragStartId = Kt(o._dragStarted.bind(o, n, t)), v(document, "selectstart", o), It = !0, window.getSelection().removeAllRanges(), At && h(document.body, "user-select", "none");
  },
  // Returns true - if no further action is needed (either inserted or another condition)
  _onDragOver: function(t) {
    var n = this.el, o = t.target, r, i, a, l = this.options, s = l.group, u = p.active, f = kt === s, d = l.sort, b = I || u, E, y = this, _ = !1;
    if (_e) return;
    function L(Tt, mn) {
      N(Tt, y, j({
        evt: t,
        isOwner: f,
        axis: E ? "vertical" : "horizontal",
        revert: a,
        dragRect: r,
        targetRect: i,
        canSort: d,
        fromSortable: b,
        target: o,
        completed: x,
        onMove: function(xe, gn) {
          return zt(w, n, c, r, xe, T(xe), t, gn);
        },
        changed: k
      }, mn));
    }
    function q() {
      L("dragOverAnimationCapture"), y.captureAnimationState(), y !== b && b.captureAnimationState();
    }
    function x(Tt) {
      return L("dragOverCompleted", {
        insertion: Tt
      }), Tt && (f ? u._hideClone() : u._showClone(y), y !== b && (R(c, I ? I.options.ghostClass : u.options.ghostClass, !1), R(c, l.ghostClass, !0)), I !== y && y !== p.active ? I = y : y === p.active && I && (I = null), b === y && (y._ignoreWhileAnimating = o), y.animateAll(function() {
        L("dragOverAnimationComplete"), y._ignoreWhileAnimating = null;
      }), y !== b && (b.animateAll(), b._ignoreWhileAnimating = null)), (o === c && !c.animated || o === n && !o.animated) && (mt = null), !l.dragoverBubble && !t.rootEl && o !== document && (c.parentNode[M]._isOutsideThisEl(t.target), !Tt && dt(t)), !l.dragoverBubble && t.stopPropagation && t.stopPropagation(), _ = !0;
    }
    function k() {
      B = Y(c), ot = Y(c, l.draggable), A({
        sortable: y,
        name: "change",
        toEl: n,
        newIndex: B,
        newDraggableIndex: ot,
        originalEvent: t
      });
    }
    if (t.preventDefault !== void 0 && t.cancelable && t.preventDefault(), o = U(o, l.draggable, n, !0), L("dragOver"), p.eventCanceled) return _;
    if (c.contains(t.target) || o.animated && o.animatingX && o.animatingY || y._ignoreWhileAnimating === o)
      return x(!1);
    if (ee = !1, u && !l.disabled && (f ? d || (a = S !== w) : I === this || (this.lastPutMode = kt.checkPull(this, u, c, t)) && s.checkPut(this, u, c, t))) {
      if (E = this._getDirection(t, o) === "vertical", r = T(c), L("dragOverValid"), p.eventCanceled) return _;
      if (a)
        return S = w, q(), this._hideClone(), L("revert"), p.eventCanceled || (ft ? w.insertBefore(c, ft) : w.appendChild(c)), x(!0);
      var $ = Oe(n, l.draggable);
      if (!$ || lo(t, E, this) && !$.animated) {
        if ($ === c)
          return x(!1);
        if ($ && n === t.target && (o = $), o && (i = T(o)), zt(w, n, c, r, o, i, t, !!o) !== !1)
          return q(), $ && $.nextSibling ? n.insertBefore(c, $.nextSibling) : n.appendChild(c), S = n, k(), x(!0);
      } else if ($ && ao(t, E, this)) {
        var lt = _t(n, 0, l, !0);
        if (lt === c)
          return x(!1);
        if (o = lt, i = T(o), zt(w, n, c, r, o, i, t, !1) !== !1)
          return q(), n.insertBefore(c, lt), S = n, k(), x(!0);
      } else if (o.parentNode === n) {
        i = T(o);
        var z = 0, st, wt = c.parentNode !== n, F = !eo(c.animated && c.toRect || r, o.animated && o.toRect || i, E), Dt = E ? "top" : "left", et = Re(o, "top", "top") || Re(c, "top", "top"), St = et ? et.scrollTop : void 0;
        mt !== o && (st = i[Dt], Ft = !1, Wt = !F && l.invertSwap || wt), z = so(t, o, i, E, F ? 1 : l.swapThreshold, l.invertedSwapThreshold == null ? l.swapThreshold : l.invertedSwapThreshold, Wt, mt === o);
        var K;
        if (z !== 0) {
          var ut = Y(c);
          do
            ut -= z, K = S.children[ut];
          while (K && (h(K, "display") === "none" || K === m));
        }
        if (z === 0 || K === o)
          return x(!1);
        mt = o, $t = z;
        var Ct = o.nextElementSibling, nt = !1;
        nt = z === 1;
        var Lt = zt(w, n, c, r, o, i, t, nt);
        if (Lt !== !1)
          return (Lt === 1 || Lt === -1) && (nt = Lt === 1), _e = !0, setTimeout(io, 30), q(), nt && !Ct ? n.appendChild(c) : o.parentNode.insertBefore(c, nt ? Ct : o), et && an(et, 0, St - et.scrollTop), S = c.parentNode, st !== void 0 && !Wt && (qt = Math.abs(st - T(o)[Dt])), k(), x(!0);
      }
      if (n.contains(c))
        return x(!1);
    }
    return !1;
  },
  _ignoreWhileAnimating: null,
  _offMoveEvents: function() {
    g(document, "mousemove", this._onTouchMove), g(document, "touchmove", this._onTouchMove), g(document, "pointermove", this._onTouchMove), g(document, "dragover", dt), g(document, "mousemove", dt), g(document, "touchmove", dt);
  },
  _offUpEvents: function() {
    var t = this.el.ownerDocument;
    g(t, "mouseup", this._onDrop), g(t, "touchend", this._onDrop), g(t, "pointerup", this._onDrop), g(t, "pointercancel", this._onDrop), g(t, "touchcancel", this._onDrop), g(document, "selectstart", this);
  },
  _onDrop: function(t) {
    var n = this.el, o = this.options;
    if (B = Y(c), ot = Y(c, o.draggable), N("drop", this, {
      evt: t
    }), S = c && c.parentNode, B = Y(c), ot = Y(c, o.draggable), p.eventCanceled) {
      this._nulling();
      return;
    }
    gt = !1, Wt = !1, Ft = !1, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), Ee(this.cloneId), Ee(this._dragStartId), this.nativeDraggable && (g(document, "drop", this), g(n, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), At && h(document.body, "user-select", ""), h(c, "transform", ""), t && (It && (t.cancelable && t.preventDefault(), !o.dropBubble && t.stopPropagation()), m && m.parentNode && m.parentNode.removeChild(m), (w === S || I && I.lastPutMode !== "clone") && D && D.parentNode && D.parentNode.removeChild(D), c && (this.nativeDraggable && g(c, "dragend", this), me(c), c.style["will-change"] = "", It && !gt && R(c, I ? I.options.ghostClass : this.options.ghostClass, !1), R(c, this.options.chosenClass, !1), A({
      sortable: this,
      name: "unchoose",
      toEl: S,
      newIndex: null,
      newDraggableIndex: null,
      originalEvent: t
    }), w !== S ? (B >= 0 && (A({
      rootEl: S,
      name: "add",
      toEl: S,
      fromEl: w,
      originalEvent: t
    }), A({
      sortable: this,
      name: "remove",
      toEl: S,
      originalEvent: t
    }), A({
      rootEl: S,
      name: "sort",
      toEl: S,
      fromEl: w,
      originalEvent: t
    }), A({
      sortable: this,
      name: "sort",
      toEl: S,
      originalEvent: t
    })), I && I.save()) : B !== vt && B >= 0 && (A({
      sortable: this,
      name: "update",
      toEl: S,
      originalEvent: t
    }), A({
      sortable: this,
      name: "sort",
      toEl: S,
      originalEvent: t
    })), p.active && ((B == null || B === -1) && (B = vt, ot = Mt), A({
      sortable: this,
      name: "end",
      toEl: S,
      originalEvent: t
    }), this.save()))), this._nulling();
  },
  _nulling: function() {
    N("nulling", this), w = c = S = m = ft = D = Vt = rt = ct = W = It = B = ot = vt = Mt = mt = $t = I = kt = p.dragged = p.ghost = p.clone = p.active = null, oe.forEach(function(t) {
      t.checked = !0;
    }), oe.length = fe = he = 0;
  },
  handleEvent: function(t) {
    switch (t.type) {
      case "drop":
      case "dragend":
        this._onDrop(t);
        break;
      case "dragenter":
      case "dragover":
        c && (this._onDragOver(t), ro(t));
        break;
      case "selectstart":
        t.preventDefault();
        break;
    }
  },
  /**
   * Serializes the item into an array of string.
   * @returns {String[]}
   */
  toArray: function() {
    for (var t = [], n, o = this.el.children, r = 0, i = o.length, a = this.options; r < i; r++)
      n = o[r], U(n, a.draggable, this.el, !1) && t.push(n.getAttribute(a.dataIdAttr) || co(n));
    return t;
  },
  /**
   * Sorts the elements according to the array.
   * @param  {String[]}  order  order of the items
   */
  sort: function(t, n) {
    var o = {}, r = this.el;
    this.toArray().forEach(function(i, a) {
      var l = r.children[a];
      U(l, this.options.draggable, r, !1) && (o[i] = l);
    }, this), n && this.captureAnimationState(), t.forEach(function(i) {
      o[i] && (r.removeChild(o[i]), r.appendChild(o[i]));
    }), n && this.animateAll();
  },
  /**
   * Save the current sorting
   */
  save: function() {
    var t = this.options.store;
    t && t.set && t.set(this);
  },
  /**
   * For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree.
   * @param   {HTMLElement}  el
   * @param   {String}       [selector]  default: `options.draggable`
   * @returns {HTMLElement|null}
   */
  closest: function(t, n) {
    return U(t, n || this.options.draggable, this.el, !1);
  },
  /**
   * Set/get option
   * @param   {string} name
   * @param   {*}      [value]
   * @returns {*}
   */
  option: function(t, n) {
    var o = this.options;
    if (n === void 0)
      return o[t];
    var r = Xt.modifyOption(this, t, n);
    typeof r < "u" ? o[t] = r : o[t] = n, t === "group" && dn(o);
  },
  /**
   * Destroy
   */
  destroy: function() {
    N("destroy", this);
    var t = this.el;
    t[M] = null, g(t, "mousedown", this._onTapStart), g(t, "touchstart", this._onTapStart), g(t, "pointerdown", this._onTapStart), this.nativeDraggable && (g(t, "dragover", this), g(t, "dragenter", this)), Array.prototype.forEach.call(t.querySelectorAll("[draggable]"), function(n) {
      n.removeAttribute("draggable");
    }), this._onDrop(), this._disableDelayedDragEvents(), ne.splice(ne.indexOf(this.el), 1), this.el = t = null;
  },
  _hideClone: function() {
    if (!rt) {
      if (N("hideClone", this), p.eventCanceled) return;
      h(D, "display", "none"), this.options.removeCloneOnHide && D.parentNode && D.parentNode.removeChild(D), rt = !0;
    }
  },
  _showClone: function(t) {
    if (t.lastPutMode !== "clone") {
      this._hideClone();
      return;
    }
    if (rt) {
      if (N("showClone", this), p.eventCanceled) return;
      c.parentNode == w && !this.options.group.revertClone ? w.insertBefore(D, c) : ft ? w.insertBefore(D, ft) : w.appendChild(D), this.options.group.revertClone && this.animate(c, D), h(D, "display", ""), rt = !1;
    }
  }
};
function ro(e) {
  e.dataTransfer && (e.dataTransfer.dropEffect = "move"), e.cancelable && e.preventDefault();
}
function zt(e, t, n, o, r, i, a, l) {
  var s, u = e[M], f = u.options.onMove, d;
  return window.CustomEvent && !tt && !Yt ? s = new CustomEvent("move", {
    bubbles: !0,
    cancelable: !0
  }) : (s = document.createEvent("Event"), s.initEvent("move", !0, !0)), s.to = t, s.from = e, s.dragged = n, s.draggedRect = o, s.related = r || t, s.relatedRect = i || T(t), s.willInsertAfter = l, s.originalEvent = a, e.dispatchEvent(s), f && (d = f.call(u, s, a)), d;
}
function me(e) {
  e.draggable = !1;
}
function io() {
  _e = !1;
}
function ao(e, t, n) {
  var o = T(_t(n.el, 0, n.options, !0)), r = sn(n.el, n.options, m), i = 10;
  return t ? e.clientX < r.left - i || e.clientY < o.top && e.clientX < o.right : e.clientY < r.top - i || e.clientY < o.bottom && e.clientX < o.left;
}
function lo(e, t, n) {
  var o = T(Oe(n.el, n.options.draggable)), r = sn(n.el, n.options, m), i = 10;
  return t ? e.clientX > r.right + i || e.clientY > o.bottom && e.clientX > o.left : e.clientY > r.bottom + i || e.clientX > o.right && e.clientY > o.top;
}
function so(e, t, n, o, r, i, a, l) {
  var s = o ? e.clientY : e.clientX, u = o ? n.height : n.width, f = o ? n.top : n.left, d = o ? n.bottom : n.right, b = !1;
  if (!a) {
    if (l && qt < u * r) {
      if (!Ft && ($t === 1 ? s > f + u * i / 2 : s < d - u * i / 2) && (Ft = !0), Ft)
        b = !0;
      else if ($t === 1 ? s < f + qt : s > d - qt)
        return -$t;
    } else if (s > f + u * (1 - r) / 2 && s < d - u * (1 - r) / 2)
      return uo(t);
  }
  return b = b || a, b && (s < f + u * i / 2 || s > d - u * i / 2) ? s > f + u / 2 ? 1 : -1 : 0;
}
function uo(e) {
  return Y(c) < Y(e) ? 1 : -1;
}
function co(e) {
  for (var t = e.tagName + e.className + e.src + e.href + e.textContent, n = t.length, o = 0; n--; )
    o += t.charCodeAt(n);
  return o.toString(36);
}
function fo(e) {
  oe.length = 0;
  for (var t = e.getElementsByTagName("input"), n = t.length; n--; ) {
    var o = t[n];
    o.checked && oe.push(o);
  }
}
function Kt(e) {
  return setTimeout(e, 0);
}
function Ee(e) {
  return clearTimeout(e);
}
le && v(document, "touchmove", function(e) {
  (p.active || gt) && e.cancelable && e.preventDefault();
});
p.utils = {
  on: v,
  off: g,
  css: h,
  find: on,
  is: function(t, n) {
    return !!U(t, n, t, !1);
  },
  extend: jn,
  throttle: rn,
  closest: U,
  toggleClass: R,
  clone: ln,
  index: Y,
  nextTick: Kt,
  cancelNextTick: Ee,
  detectDirection: cn,
  getChild: _t,
  expando: M
};
p.get = function(e) {
  return e[M];
};
p.mount = function() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  t[0].constructor === Array && (t = t[0]), t.forEach(function(o) {
    if (!o.prototype || !o.prototype.constructor)
      throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(o));
    o.utils && (p.utils = j(j({}, p.utils), o.utils)), Xt.mount(o);
  });
};
p.create = function(e, t) {
  return new p(e, t);
};
p.version = Hn;
var C = [], Pt, we, De = !1, ge, ve, re, xt;
function ho() {
  function e() {
    this.defaults = {
      scroll: !0,
      forceAutoScrollFallback: !1,
      scrollSensitivity: 30,
      scrollSpeed: 10,
      bubbleScroll: !0
    };
    for (var t in this)
      t.charAt(0) === "_" && typeof this[t] == "function" && (this[t] = this[t].bind(this));
  }
  return e.prototype = {
    dragStarted: function(n) {
      var o = n.originalEvent;
      this.sortable.nativeDraggable ? v(document, "dragover", this._handleAutoScroll) : this.options.supportPointer ? v(document, "pointermove", this._handleFallbackAutoScroll) : o.touches ? v(document, "touchmove", this._handleFallbackAutoScroll) : v(document, "mousemove", this._handleFallbackAutoScroll);
    },
    dragOverCompleted: function(n) {
      var o = n.originalEvent;
      !this.options.dragOverBubble && !o.rootEl && this._handleAutoScroll(o);
    },
    drop: function() {
      this.sortable.nativeDraggable ? g(document, "dragover", this._handleAutoScroll) : (g(document, "pointermove", this._handleFallbackAutoScroll), g(document, "touchmove", this._handleFallbackAutoScroll), g(document, "mousemove", this._handleFallbackAutoScroll)), ke(), Zt(), Vn();
    },
    nulling: function() {
      re = we = Pt = De = xt = ge = ve = null, C.length = 0;
    },
    _handleFallbackAutoScroll: function(n) {
      this._handleAutoScroll(n, !0);
    },
    _handleAutoScroll: function(n, o) {
      var r = this, i = (n.touches ? n.touches[0] : n).clientX, a = (n.touches ? n.touches[0] : n).clientY, l = document.elementFromPoint(i, a);
      if (re = n, o || this.options.forceAutoScrollFallback || Yt || tt || At) {
        be(n, this.options, l, o);
        var s = at(l, !0);
        De && (!xt || i !== ge || a !== ve) && (xt && ke(), xt = setInterval(function() {
          var u = at(document.elementFromPoint(i, a), !0);
          u !== s && (s = u, Zt()), be(n, r.options, u, o);
        }, 10), ge = i, ve = a);
      } else {
        if (!this.options.bubbleScroll || at(l, !0) === G()) {
          Zt();
          return;
        }
        be(n, this.options, at(l, !1), !1);
      }
    }
  }, J(e, {
    pluginName: "scroll",
    initializeByDefault: !0
  });
}
function Zt() {
  C.forEach(function(e) {
    clearInterval(e.pid);
  }), C = [];
}
function ke() {
  clearInterval(xt);
}
var be = rn(function(e, t, n, o) {
  if (t.scroll) {
    var r = (e.touches ? e.touches[0] : e).clientX, i = (e.touches ? e.touches[0] : e).clientY, a = t.scrollSensitivity, l = t.scrollSpeed, s = G(), u = !1, f;
    we !== n && (we = n, Zt(), Pt = t.scroll, f = t.scrollFn, Pt === !0 && (Pt = at(n, !0)));
    var d = 0, b = Pt;
    do {
      var E = b, y = T(E), _ = y.top, L = y.bottom, q = y.left, x = y.right, k = y.width, $ = y.height, lt = void 0, z = void 0, st = E.scrollWidth, wt = E.scrollHeight, F = h(E), Dt = E.scrollLeft, et = E.scrollTop;
      E === s ? (lt = k < st && (F.overflowX === "auto" || F.overflowX === "scroll" || F.overflowX === "visible"), z = $ < wt && (F.overflowY === "auto" || F.overflowY === "scroll" || F.overflowY === "visible")) : (lt = k < st && (F.overflowX === "auto" || F.overflowX === "scroll"), z = $ < wt && (F.overflowY === "auto" || F.overflowY === "scroll"));
      var St = lt && (Math.abs(x - r) <= a && Dt + k < st) - (Math.abs(q - r) <= a && !!Dt), K = z && (Math.abs(L - i) <= a && et + $ < wt) - (Math.abs(_ - i) <= a && !!et);
      if (!C[d])
        for (var ut = 0; ut <= d; ut++)
          C[ut] || (C[ut] = {});
      (C[d].vx != St || C[d].vy != K || C[d].el !== E) && (C[d].el = E, C[d].vx = St, C[d].vy = K, clearInterval(C[d].pid), (St != 0 || K != 0) && (u = !0, C[d].pid = setInterval((function() {
        o && this.layer === 0 && p.active._onTouchMove(re);
        var Ct = C[this.layer].vy ? C[this.layer].vy * l : 0, nt = C[this.layer].vx ? C[this.layer].vx * l : 0;
        typeof f == "function" && f.call(p.dragged.parentNode[M], nt, Ct, e, re, C[this.layer].el) !== "continue" || an(C[this.layer].el, nt, Ct);
      }).bind({
        layer: d
      }), 24))), d++;
    } while (t.bubbleScroll && b !== s && (b = at(b, !1)));
    De = u;
  }
}, 30), pn = function(t) {
  var n = t.originalEvent, o = t.putSortable, r = t.dragEl, i = t.activeSortable, a = t.dispatchSortableEvent, l = t.hideGhostForTarget, s = t.unhideGhostForTarget;
  if (n) {
    var u = o || i;
    l();
    var f = n.changedTouches && n.changedTouches.length ? n.changedTouches[0] : n, d = document.elementFromPoint(f.clientX, f.clientY);
    s(), u && !u.el.contains(d) && (a("spill"), this.onSpill({
      dragEl: r,
      putSortable: o
    }));
  }
};
function Ie() {
}
Ie.prototype = {
  startIndex: null,
  dragStart: function(t) {
    var n = t.oldDraggableIndex;
    this.startIndex = n;
  },
  onSpill: function(t) {
    var n = t.dragEl, o = t.putSortable;
    this.sortable.captureAnimationState(), o && o.captureAnimationState();
    var r = _t(this.sortable.el, this.startIndex, this.options);
    r ? this.sortable.el.insertBefore(n, r) : this.sortable.el.appendChild(n), this.sortable.animateAll(), o && o.animateAll();
  },
  drop: pn
};
J(Ie, {
  pluginName: "revertOnSpill"
});
function Pe() {
}
Pe.prototype = {
  onSpill: function(t) {
    var n = t.dragEl, o = t.putSortable, r = o || this.sortable;
    r.captureAnimationState(), n.parentNode && n.parentNode.removeChild(n), r.animateAll();
  },
  drop: pn
};
J(Pe, {
  pluginName: "removeOnSpill"
});
p.mount(new ho());
p.mount(Pe, Ie);
var po = Object.defineProperty, mo = Object.getOwnPropertyDescriptor, se = (e, t, n, o) => {
  for (var r = o > 1 ? void 0 : o ? mo(t, n) : t, i = e.length - 1, a; i >= 0; i--)
    (a = e[i]) && (r = (o ? a(t, n, r) : a(r)) || r);
  return o && r && po(t, n, r), r;
};
let Et = class extends ie {
  constructor() {
    super(...arguments), this.disabled = !1;
  }
  firstUpdated() {
    let e;
    p.create(this, {
      animation: 150,
      disabled: this.disabled,
      draggable: this.itemSelector,
      handle: this.handleSelector,
      onStart: (t) => {
        e = t.item.previousSibling;
      },
      onEnd: (t) => {
        e == null || e.after(t.item), this.dispatchEvent(new CustomEvent("sort-end", { detail: t }));
      }
    });
  }
  render() {
    return H`<slot></slot>`;
  }
};
Et.styles = [
  Rt`
			:host(.uui-ref-list) {
				/* Copied from https://github.com/umbraco/Umbraco.UI/blob/v1.12.2/packages/uui-ref-list/lib/uui-ref-list.element.ts#L19-L29 */
				::slotted(*:not(:first-child)) {
					margin-top: 1px;
				}
				::slotted(*:not(:first-child))::before {
					content: '';
					position: absolute;
					top: -1px;
					left: 0;
					right: 0;
					border-top: 1px solid var(--uui-color-border);
				}
			}
		`
];
se([
  O({ type: Boolean })
], Et.prototype, "disabled", 2);
se([
  O({ attribute: "handle-selector" })
], Et.prototype, "handleSelector", 2);
se([
  O({ attribute: "item-selector" })
], Et.prototype, "itemSelector", 2);
Et = se([
  Bt("contentment-sortable-list")
], Et);
//# sourceMappingURL=sortable-list.element.js.map
