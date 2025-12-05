import { U as _ } from "./ufm.context-ej9QaPDH.js";
import { a as X, b as G, b as q, u as z } from "./ufm.context-ej9QaPDH.js";
import { U as w } from "./ufm-render.context-DsMm52fq.js";
import { a as J } from "./ufm-render.context-DsMm52fq.js";
import { css as x, property as c, customElement as C, until as y, unsafeHTML as E, nothing as k } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as b } from "@umbraco-cms/backoffice/lit-element";
import { UmbTextStyles as g } from "@umbraco-cms/backoffice/style";
import { U as Q, a as Y } from "./ufm-element-base-CIbtrvQg.js";
import { UmbControllerBase as M } from "@umbraco-cms/backoffice/class-api";
import { U as $ } from "./base.filter-aeoEGVc7.js";
var R = Object.defineProperty, T = Object.getOwnPropertyDescriptor, v = (e) => {
  throw TypeError(e);
}, f = (e, t, r, s) => {
  for (var o = s > 1 ? void 0 : s ? T(t, r) : t, m = e.length - 1, l; m >= 0; m--)
    (l = e[m]) && (o = (s ? l(t, r, o) : l(o)) || o);
  return s && o && R(t, r, o), o;
}, u = (e, t, r) => t.has(e) || v("Cannot " + r), h = (e, t, r) => (u(e, t, "read from private field"), r ? r.call(e) : t.get(e)), d = (e, t, r) => t.has(e) ? v("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), B = (e, t, r, s) => (u(e, t, "write to private field"), t.set(e, r), r), O = (e, t, r) => (u(e, t, "access private method"), r), i, a, p, U;
const S = "umb-ufm-render";
let n = class extends b {
  constructor() {
    super(), d(this, p), d(this, i, new w(this)), this.inline = !1, d(this, a), this.consumeContext(_, (e) => {
      B(this, a, e);
    });
  }
  // No reactive property declaration cause its causing a re-render that is not needed. This just works as a shortcut to set the values on the context. [NL]
  set value(e) {
    h(this, i).setValue(e);
  }
  get value() {
    return h(this, i).getValue();
  }
  toString() {
    return this.shadowRoot?.textContent ?? "";
  }
  render() {
    return y(O(this, p, U).call(this));
  }
};
i = /* @__PURE__ */ new WeakMap();
a = /* @__PURE__ */ new WeakMap();
p = /* @__PURE__ */ new WeakSet();
U = async function() {
  if (!h(this, a) || !this.markdown) return null;
  const e = await h(this, a).parse(this.markdown, this.inline);
  return e ? E(e) : k;
};
n.styles = [
  g,
  x`
			* {
				max-width: 100%;
				word-wrap: break-word;
			}

			pre {
				overflow: auto;
			}

			:host > :first-child {
				margin-block-start: 0;
			}

			:host > :last-child {
				margin-block-end: 0;
			}
		`
];
f([
  c({ type: Boolean })
], n.prototype, "inline", 2);
f([
  c()
], n.prototype, "markdown", 2);
n = f([
  C(S)
], n);
class V extends M {
  #t;
  #e(t) {
    if (!t) return "";
    const r = [];
    return r.push(t.shadowRoot?.textContent ?? t.textContent ?? ""), t.shadowRoot !== null && Array.from(t.shadowRoot.children).forEach((s) => {
      r.push(this.#e(s));
    }), t.children !== null && Array.from(t.children).forEach((s) => {
      r.push(this.#e(s));
    }), r.filter((s) => s).join(" ");
  }
  set markdown(t) {
    this.#r = t, this.#t && (this.#t.markdown = t);
  }
  get markdown() {
    return this.#r;
  }
  #r;
  set value(t) {
    this.#s = t, this.#t && (this.#t.value = t);
  }
  get value() {
    return this.#s;
  }
  #s;
  hostConnected() {
    const t = new n();
    t.inline = !0, t.style.visibility = "hidden", t.markdown = this.#r, t.value = this.#s, this.getHostElement().appendChild(t), this.#t = t;
  }
  hostDisconnected() {
    this.#t?.remove();
  }
  toString() {
    return this.#e(this.#t);
  }
  destroy() {
    super.destroy(), this.#t?.destroy(), this.#t = void 0;
  }
}
export {
  _ as UMB_UFM_CONTEXT,
  J as UMB_UFM_RENDER_CONTEXT,
  X as UmbMarked,
  Q as UmbUfmComponentBase,
  G as UmbUfmContext,
  Y as UmbUfmElementBase,
  $ as UmbUfmFilterBase,
  n as UmbUfmRenderElement,
  V as UmbUfmVirtualRenderController,
  q as api,
  n as element,
  z as ufm
};
//# sourceMappingURL=index.js.map
