import { UMB_UFM_CONTEXT as C } from "./ufm.context-CodmBAew.js";
import { UmbMarked as le, UmbUfmContext as pe, UmbUfmContext as me } from "./ufm.context-CodmBAew.js";
import { U as M, a as D } from "./ufm-render.context-DsMm52fq.js";
import { css as $, property as y, customElement as x, until as P, unsafeHTML as R, nothing as S, state as B } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as T } from "@umbraco-cms/backoffice/lit-element";
import { UmbTextStyles as F } from "@umbraco-cms/backoffice/style";
import { U as fe, a as ce } from "./ufm-element-base-nPz4MeAx.js";
import { EvalAstFactory as W, Parser as A } from "@umbraco-cms/backoffice/external/heximal-expressions";
import { UmbLruCache as L } from "@umbraco-cms/backoffice/cache";
import { UmbControllerBase as V } from "@umbraco-cms/backoffice/class-api";
import { U as ve } from "./base.filter-aeoEGVc7.js";
import { u as we } from "./marked-ufm.plugin-BPsEFTAZ.js";
import { u as Ee } from "./marked-ufmjs.plugin-0rM2Tt_X.js";
var X = Object.defineProperty, G = Object.getOwnPropertyDescriptor, g = (t) => {
  throw TypeError(t);
}, _ = (t, e, r, s) => {
  for (var o = s > 1 ? void 0 : s ? G(e, r) : e, a = t.length - 1, n; a >= 0; a--)
    (n = t[a]) && (o = (s ? n(e, r, o) : n(o)) || o);
  return s && o && X(e, r, o), o;
}, w = (t, e, r) => e.has(t) || g("Cannot " + r), p = (t, e, r) => (w(t, e, "read from private field"), r ? r.call(t) : e.get(t)), d = (t, e, r) => e.has(t) ? g("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), H = (t, e, r, s) => (w(t, e, "write to private field"), e.set(t, r), r), J = (t, e, r) => (w(t, e, "access private method"), r), l, h, c, b;
let i = class extends T {
  constructor() {
    super(), d(this, c), d(this, l, new M(this)), this.inline = !1, d(this, h), this.consumeContext(C, (t) => {
      H(this, h, t);
    });
  }
  // No reactive property declaration because it's causing a re-render that is not needed.
  // This just works as a shortcut to set the values on the context. [NL]
  set value(t) {
    p(this, l).setValue(t);
  }
  get value() {
    return p(this, l).getValue();
  }
  toString() {
    return this.shadowRoot?.textContent ?? "";
  }
  render() {
    return P(J(this, c, b).call(this));
  }
};
l = /* @__PURE__ */ new WeakMap();
h = /* @__PURE__ */ new WeakMap();
c = /* @__PURE__ */ new WeakSet();
b = async function() {
  if (!p(this, h) || !this.markdown) return null;
  const t = await p(this, h).parse(this.markdown, this.inline);
  return t ? R(t) : S;
};
i.styles = [
  F,
  $`
			:host {
				position: relative;
			}

			* {
				max-width: 100%;
				word-wrap: break-word;
			}

			pre {
				overflow: auto;
			}

			code {
				font-family: var(--uui-font-monospace, monospace);
				white-space: pre-wrap;
				background-color: var(--uui-color-background);
				border-radius: var(--uui-border-radius);
				padding: 0.2em 0.4em;
			}

			:host > :first-child {
				margin-block-start: 0;
			}

			:host > :last-child {
				margin-block-end: 0;
			}
		`
];
_([
  y({ type: Boolean })
], i.prototype, "inline", 2);
_([
  y()
], i.prototype, "markdown", 2);
i = _([
  x("umb-ufm-render")
], i);
var j = Object.defineProperty, q = Object.getOwnPropertyDescriptor, N = (t) => {
  throw TypeError(t);
}, O = (t, e, r, s) => {
  for (var o = s > 1 ? void 0 : s ? q(e, r) : e, a = t.length - 1, n; a >= 0; a--)
    (n = t[a]) && (o = (s ? n(e, r, o) : n(o)) || o);
  return s && o && j(e, r, o), o;
}, U = (t, e, r) => e.has(t) || N("Cannot " + r), z = (t, e, r) => (U(t, e, "read from private field"), e.get(t)), E = (t, e, r) => e.has(t) ? N("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), I = (t, e, r, s) => (U(t, e, "write to private field"), e.set(t, r), r), K = (t, e, r) => (U(t, e, "access private method"), r), m, u, k;
const Q = new W(), f = new L(1e3);
let v = class extends T {
  constructor() {
    super(), E(this, u), E(this, m), this.consumeContext(C, (t) => {
      I(this, m, t);
    }), this.consumeContext(D, (t) => {
      this.observe(
        t?.value,
        (e) => {
          this.value = K(this, u, k).call(this, this.textContent ?? "", e);
        },
        "observeValue"
      );
    });
  }
  render() {
    return (Array.isArray(this.value) ? this.value : [this.value]).join(", ");
  }
};
m = /* @__PURE__ */ new WeakMap();
u = /* @__PURE__ */ new WeakSet();
k = function(t, e) {
  const r = z(this, m)?.getFilters() ?? [], s = Object.fromEntries(r.map((n) => [n.alias, n.filter])), o = { ...e, ...s };
  let a = f.get(t);
  if (a === void 0 && !f.has(t)) {
    try {
      a = new A(t, Q).parse();
    } catch {
      console.error(`Error parsing expression: \`${t}\``);
    }
    f.set(t, a);
  }
  return a?.evaluate(o) ?? "";
};
O([
  B()
], v.prototype, "value", 2);
v = O([
  x("umb-ufm-js-expression")
], v);
class ne extends V {
  #e;
  #t(e) {
    if (!e) return "";
    const r = [];
    if (e.shadowRoot)
      for (const s of e.shadowRoot.childNodes)
        s.nodeType === Node.ELEMENT_NODE ? r.push(this.#t(s)) : s.nodeType === Node.TEXT_NODE && r.push(s.textContent ?? "");
    else
      for (const s of e.childNodes)
        s.nodeType === Node.ELEMENT_NODE ? r.push(this.#t(s)) : s.nodeType === Node.TEXT_NODE && r.push(s.textContent ?? "");
    return r.filter((s) => s).join("");
  }
  set markdown(e) {
    this.#r = e, this.#e && (this.#e.markdown = e);
  }
  get markdown() {
    return this.#r;
  }
  #r;
  set value(e) {
    this.#s = e, this.#e && (this.#e.value = e);
  }
  get value() {
    return this.#s;
  }
  #s;
  hostConnected() {
    const e = new i();
    e.inline = !0, e.style.visibility = "hidden", e.markdown = this.#r, e.value = this.#s, this.getHostElement().appendChild(e), this.#e = e;
  }
  hostDisconnected() {
    this.#e?.remove();
  }
  toString() {
    return this.#t(this.#e);
  }
  destroy() {
    super.destroy(), this.#e?.destroy(), this.#e = void 0;
  }
}
export {
  C as UMB_UFM_CONTEXT,
  D as UMB_UFM_RENDER_CONTEXT,
  le as UmbMarked,
  fe as UmbUfmComponentBase,
  pe as UmbUfmContext,
  ce as UmbUfmElementBase,
  ve as UmbUfmFilterBase,
  v as UmbUfmJsExpressionElement,
  i as UmbUfmRenderElement,
  ne as UmbUfmVirtualRenderController,
  me as api,
  i as element,
  we as ufm,
  Ee as ufmjs
};
//# sourceMappingURL=index.js.map
