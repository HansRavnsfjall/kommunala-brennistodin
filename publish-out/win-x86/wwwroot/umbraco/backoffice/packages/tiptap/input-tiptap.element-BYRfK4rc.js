import { U as _t } from "./tiptap-rte.context-token-DQjBmxxS.js";
import { UmbContextBase as mt } from "@umbraco-cms/backoffice/class-api";
import { css as D, property as n, customElement as L, nothing as G, repeat as x, html as d, when as R, unsafeCSS as gt, state as z } from "@umbraco-cms/backoffice/external/lit";
import { UmbExtensionsElementAndApiInitializer as yt, UmbExtensionsElementInitializer as wt, loadManifestApi as xt } from "@umbraco-cms/backoffice/extension-api";
import { umbExtensionsRegistry as H } from "@umbraco-cms/backoffice/extension-registry";
import { Editor as Et } from "@umbraco-cms/backoffice/external/tiptap";
import { UmbChangeEvent as $t } from "@umbraco-cms/backoffice/event";
import { UmbLitElement as N } from "@umbraco-cms/backoffice/lit-element";
import { UmbFormControlMixin as kt } from "@umbraco-cms/backoffice/validation";
import { debounce as j } from "@umbraco-cms/backoffice/utils";
import "./cascading-menu-popover.element-Ce2vE90e.js";
class Ct extends mt {
  #t;
  constructor(e) {
    super(e, _t);
  }
  getEditor() {
    return this.#t;
  }
  setEditor(e) {
    this.#t = e;
  }
}
var Tt = Object.defineProperty, St = Object.getOwnPropertyDescriptor, tt = (t) => {
  throw TypeError(t);
}, U = (t, e, r, i) => {
  for (var a = i > 1 ? void 0 : i ? St(e, r) : e, o = t.length - 1, p; o >= 0; o--)
    (p = t[o]) && (a = (i ? p(e, r, a) : p(a)) || a);
  return i && a && Tt(e, r, a), a;
}, X = (t, e, r) => e.has(t) || tt("Cannot " + r), u = (t, e, r) => (X(t, e, "read from private field"), e.get(t)), E = (t, e, r) => e.has(t) ? tt("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), B = (t, e, r, i) => (X(t, e, "write to private field"), e.set(t, r), r), A = (t, e, r) => (X(t, e, "access private method"), r), C, F, c, M, v, et, rt, it, at, ot;
let m = class extends N {
  constructor() {
    super(...arguments), E(this, v), E(this, C, !1), E(this, F, j(() => this.requestUpdate(), 100)), E(this, c), E(this, M, /* @__PURE__ */ new Map()), this.readonly = !1, this.toolbar = [[[]]];
  }
  connectedCallback() {
    super.connectedCallback(), B(this, C, !0), A(this, v, et).call(this);
  }
  disconnectedCallback() {
    B(this, C, !1), u(this, c)?.destroy(), B(this, c, void 0), super.disconnectedCallback();
  }
  render() {
    return this.toolbar.flat(2).length ? A(this, v, rt).call(this, this.toolbar) : G;
  }
};
C = /* @__PURE__ */ new WeakMap();
F = /* @__PURE__ */ new WeakMap();
c = /* @__PURE__ */ new WeakMap();
M = /* @__PURE__ */ new WeakMap();
v = /* @__PURE__ */ new WeakSet();
et = function() {
  u(this, C) && (u(this, c)?.destroy(), B(this, c, new yt(
    this,
    H,
    "tiptapToolbarExtension",
    [],
    (t) => this.toolbar.flat(2).includes(t.alias),
    (t) => {
      t.forEach((e) => {
        u(this, M).has(e.alias) || (e.component?.setAttribute("data-mark", `action:tiptap-toolbar:${e.alias}`), u(this, M).set(e.alias, e.component), u(this, F).call(this));
      });
    },
    void 0,
    void 0,
    () => import("./default-tiptap-toolbar-api-BUWuIrD7.js")
  )), u(this, c).apiProperties = { configuration: this.configuration }, u(this, c).elementProperties = { editor: this.editor, configuration: this.configuration });
};
rt = function(t) {
  return x(t, (e) => d`<div class="row">${A(this, v, it).call(this, e)}</div>`);
};
it = function(t) {
  return x(t, (e) => d`<div class="group">${A(this, v, at).call(this, e)}</div>`);
};
at = function(t) {
  return x(t, (e) => u(this, M)?.get(e) ?? A(this, v, ot).call(this, e));
};
ot = function(t) {
  return d`<span class="skeleton" role="none" title="Loading '${t}'"></span>`;
};
m.styles = D`
		:host([readonly]) {
			pointer-events: none;
			background-color: var(--uui-color-surface-alt);
		}

		:host {
			border-radius: var(--uui-border-radius);
			border: 1px solid var(--uui-color-border);
			border-bottom-left-radius: 0;
			border-bottom-right-radius: 0;

			border-top-color: var(--umb-tiptap-edge-border-color, var(--uui-color-border));
			border-left-color: var(--umb-tiptap-edge-border-color, var(--uui-color-border));
			border-right-color: var(--umb-tiptap-edge-border-color, var(--uui-color-border));
			box-sizing: border-box;

			background-color: var(--uui-color-surface);
			color: var(--color-text);
			font-size: var(--uui-type-default-size);

			display: flex;
			flex-direction: column;

			position: sticky;
			top: var(--umb-tiptap-top, -25px);
			left: 0;
			right: 0;
			padding: var(--uui-size-3);
			z-index: 9999999;

			box-shadow:
				0 2px 2px -2px rgba(34, 47, 62, 0.1),
				0 8px 8px -4px rgba(34, 47, 62, 0.07);
		}

		.row {
			display: flex;
			flex-direction: row;
			flex-wrap: wrap;

			min-height: var(--uui-size-12, 36px);

			.group {
				display: inline-flex;
				flex-wrap: wrap;
				align-items: stretch;

				min-height: var(--uui-size-12, 36px);

				&:not(:last-child)::after {
					content: '';
					background-color: var(--uui-color-border);
					width: 1px;
					place-self: center;
					height: var(--uui-size-7, 21px);
					margin: 0 var(--uui-size-3);
				}
			}
		}

		.skeleton {
			background-color: var(--uui-color-background);
			height: var(--uui-size-12, 36px);
			width: var(--uui-size-10, 30px);
			margin-left: 1px;
		}
	`;
U([
  n({ type: Boolean, reflect: !0 })
], m.prototype, "readonly", 2);
U([
  n({ attribute: !1 })
], m.prototype, "editor", 2);
U([
  n({ attribute: !1 })
], m.prototype, "configuration", 2);
U([
  n({ attribute: !1 })
], m.prototype, "toolbar", 2);
m = U([
  L("umb-tiptap-toolbar")
], m);
var At = Object.defineProperty, Mt = Object.getOwnPropertyDescriptor, st = (t) => {
  throw TypeError(t);
}, W = (t, e, r, i) => {
  for (var a = i > 1 ? void 0 : i ? Mt(e, r) : e, o = t.length - 1, p; o >= 0; o--)
    (p = t[o]) && (a = (i ? p(e, r, a) : p(a)) || a);
  return i && a && At(e, r, a), a;
}, Y = (t, e, r) => e.has(t) || st("Cannot " + r), h = (t, e, r) => (Y(t, e, "read from private field"), r ? r.call(t) : e.get(t)), y = (t, e, r) => e.has(t) ? st("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), k = (t, e, r, i) => (Y(t, e, "write to private field"), e.set(t, r), r), V = (t, e, r) => (Y(t, e, "access private method"), r), T, J, _, P, q, S, nt, lt, pt;
let g = class extends N {
  constructor() {
    super(...arguments), y(this, S), y(this, T, !1), y(this, J, j(() => this.requestUpdate(), 100)), y(this, _), y(this, P, /* @__PURE__ */ new Map()), this.readonly = !1, y(this, q, [[], []]);
  }
  set statusbar(t) {
    typeof t == "string" ? t = [[], [t]] : Array.isArray(t) && t.length === 1 && (t = [[], t[0]]), k(this, q, t);
  }
  get statusbar() {
    return h(this, q);
  }
  connectedCallback() {
    super.connectedCallback(), k(this, T, !0), V(this, S, nt).call(this);
  }
  disconnectedCallback() {
    k(this, T, !1), h(this, _)?.destroy(), k(this, _, void 0), super.disconnectedCallback();
  }
  render() {
    return this.statusbar.flat().length ? V(this, S, lt).call(this, this.statusbar) : G;
  }
};
T = /* @__PURE__ */ new WeakMap();
J = /* @__PURE__ */ new WeakMap();
_ = /* @__PURE__ */ new WeakMap();
P = /* @__PURE__ */ new WeakMap();
q = /* @__PURE__ */ new WeakMap();
S = /* @__PURE__ */ new WeakSet();
nt = function() {
  h(this, T) && (h(this, _)?.destroy(), k(this, _, new wt(
    this,
    H,
    "tiptapStatusbarExtension",
    (t) => this.statusbar.flat().includes(t.alias),
    (t) => {
      t.forEach((e) => {
        h(this, P).has(e.alias) || (e.component?.setAttribute("data-mark", `action:tiptap-statusbar:${e.alias}`), h(this, P).set(e.alias, e.component), h(this, J).call(this));
      });
    }
  )), h(this, _).properties = { editor: this.editor, configuration: this.configuration });
};
lt = function(t) {
  return x(t, (e) => d`<div class="area">${V(this, S, pt).call(this, e)}</div>`);
};
pt = function(t) {
  return x(t, (e) => h(this, P)?.get(e) ?? G);
};
g.styles = D`
		:host([readonly]) {
			display: none;
		}

		:host {
			--uui-button-height: var(--uui-size-layout-2);

			display: flex;
			flex-wrap: wrap;
			align-items: center;
			justify-content: space-between;

			border-radius: var(--uui-border-radius);
			border: 1px solid var(--umb-tiptap-edge-border-color, var(--uui-color-border));
			border-top-left-radius: 0;
			border-top-right-radius: 0;
			border-top: 0;
			box-sizing: border-box;

			min-height: var(--uui-size-layout-1);
			max-height: calc(var(--uui-size-layout-2) + var(--uui-size-1));

			padding: 0 var(--uui-size-3);

			> p {
				margin: 0;
			}

			.area {
				display: inline-flex;
				flex-wrap: wrap;
				align-items: stretch;
			}
		}
	`;
W([
  n({ type: Boolean, reflect: !0 })
], g.prototype, "readonly", 2);
W([
  n({ attribute: !1 })
], g.prototype, "editor", 2);
W([
  n({ attribute: !1 })
], g.prototype, "configuration", 2);
W([
  n({ attribute: !1 })
], g.prototype, "statusbar", 1);
g = W([
  L("umb-tiptap-statusbar")
], g);
var Pt = Object.defineProperty, zt = Object.getOwnPropertyDescriptor, dt = (t) => {
  throw TypeError(t);
}, l = (t, e, r, i) => {
  for (var a = i > 1 ? void 0 : i ? zt(e, r) : e, o = t.length - 1, p; o >= 0; o--)
    (p = t[o]) && (a = (i ? p(e, r, a) : p(a)) || a);
  return i && a && Pt(e, r, a), a;
}, K = (t, e, r) => e.has(t) || dt("Cannot " + r), w = (t, e, r) => (K(t, e, "read from private field"), r ? r.call(t) : e.get(t)), O = (t, e, r) => e.has(t) ? dt("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), ut = (t, e, r, i) => (K(t, e, "write to private field"), e.set(t, r), r), $ = (t, e, r) => (K(t, e, "access private method"), r), Q, I, b, f, ht, ct, ft, bt, vt;
const Ut = "Umb.Tiptap.RichTextEssentials", Z = "/css";
let s = class extends kt(N) {
  constructor() {
    super(), O(this, f), O(this, Q, new Ct(this)), O(this, I, /* @__PURE__ */ new Set(["/umbraco/backoffice/css/rte-content.css"])), O(this, b, ""), this.readonly = !1, this._extensions = [], this._styles = [], this._toolbar = [[[]]], this._statusbar = [[], []], this.addValidator(
      "valueMissing",
      () => this.requiredMessage ?? "Value is required",
      () => !!this.required && this.isEmpty()
    );
  }
  set value(t) {
    t !== w(this, b) && (ut(this, b, t), this._editor && this._editor.commands.setContent(t));
  }
  get value() {
    return w(this, b);
  }
  async firstUpdated() {
    await Promise.all([await $(this, f, ht).call(this), await $(this, f, ct).call(this)]);
  }
  /**
   * Checks if the editor is empty.
   * @returns {boolean} returns true if the editor contains no markup
   */
  isEmpty() {
    return this._editor?.isEmpty ?? !1;
  }
  render() {
    const t = !this._editor && !this._extensions?.length;
    return d`
			${R(t, () => d`<div id="loader"><uui-loader></uui-loader></div>`)}
			${R(!t, () => d`${$(this, f, ft).call(this)}${$(this, f, bt).call(this)}`)}
			<div id="editor" data-mark="input:tiptap-rte" ?data-loaded=${!t}></div>
			${R(!t, () => $(this, f, vt).call(this))}
		`;
  }
  destroy() {
    this._editor?.destroy(), this._editor = void 0;
  }
};
Q = /* @__PURE__ */ new WeakMap();
I = /* @__PURE__ */ new WeakMap();
b = /* @__PURE__ */ new WeakMap();
f = /* @__PURE__ */ new WeakSet();
ht = async function() {
  const t = this.configuration?.getValueByAlias("extensions") ?? [];
  if (!t.includes(Ut)) {
    const { default: e } = await import("./rich-text-essentials.tiptap-api-Cleda1MR.js");
    this._extensions.push(new e(this));
  }
  await new Promise((e) => {
    this.observe(H.byTypeAndAliases("tiptapExtension", t), async (r) => {
      for (const i of r)
        if (i.api) {
          const a = await xt(i.api);
          if (a) {
            const o = new a(this);
            o.manifest = i, this._extensions.push(o);
          }
        }
      e();
    });
  });
};
ct = async function() {
  const t = this.shadowRoot?.querySelector("#editor");
  if (!t) return;
  const e = this.configuration?.getValueByAlias("stylesheets");
  e?.length && e.forEach((i) => {
    const a = i.startsWith("http") || i.startsWith(Z) ? i : `${Z}${i}`;
    w(this, I).add(a);
  }), this._toolbar = this.configuration?.getValueByAlias("toolbar") ?? [[[]]], this._statusbar = this.configuration?.getValueByAlias("statusbar") ?? [];
  const r = [];
  this._extensions.forEach((i) => {
    const a = i.getTiptapExtensions({ configuration: this.configuration });
    a?.length && r.push(...a);
    const o = i.getStyles();
    o && this._styles.push(o);
  }), this._editor = new Et({
    element: t,
    editable: !this.readonly,
    editorProps: {
      attributes: {
        "aria-label": this.label || this.localize.term("rte_label"),
        "aria-required": this.required ? "true" : "false"
      }
    },
    extensions: r,
    content: w(this, b),
    injectCSS: !1,
    // Prevents injecting CSS into `window.document`, as it never applies to the shadow DOM. [LK]
    //enableContentCheck: true,
    onBeforeCreate: ({ editor: i }) => {
      this._extensions.forEach((a) => a.setEditor(i));
    },
    onContentError: ({ error: i }) => {
      console.error("contentError", [i.message, i.cause]);
    },
    onUpdate: ({ editor: i }) => {
      ut(this, b, i.getHTML()), this._runValidators(), this.dispatchEvent(new $t());
    }
  }), w(this, Q).setEditor(this._editor);
};
ft = function() {
  if (this._styles?.length)
    return d`
			${x(
      w(this, I),
      (t) => t,
      (t) => d`<link rel="stylesheet" href=${t} />`
    )}
			<style>
				${this._styles.map((t) => gt(t))}
			</style>
		`;
};
bt = function() {
  if (this._toolbar.flat(2).length)
    return d`
			<umb-tiptap-toolbar
				data-mark="tiptap-toolbar"
				.toolbar=${this._toolbar}
				.editor=${this._editor}
				.configuration=${this.configuration}
				?readonly=${this.readonly}>
			</umb-tiptap-toolbar>
		`;
};
vt = function() {
  if (this._statusbar.flat().length)
    return d`
			<umb-tiptap-statusbar
				data-mark="tiptap-statusbar"
				.statusbar=${this._statusbar}
				.editor=${this._editor}
				.configuration=${this.configuration}
				?readonly=${this.readonly}>
			</umb-tiptap-statusbar>
		`;
};
s.styles = [
  D`
			:host {
				display: block;
				position: relative;
				z-index: 0;

				width: var(--umb-rte-width, unset);
				min-width: var(--umb-rte-min-width, unset);
				max-width: var(--umb-rte-max-width, 100%);
			}

			:host(:hover) {
				--umb-tiptap-edge-border-color: var(--uui-color-border-standalone);
			}

			:host(:focus),
			:host(:focus-within) {
				--umb-tiptap-edge-border-color: var(--uui-color-border-emphasis);
			}

			:host([readonly]) {
				pointer-events: none;

				#editor {
					background-color: var(--uui-color-surface-alt);
				}
			}

			#loader {
				display: flex;
				align-items: center;
				justify-content: center;
			}

			:host(:invalid:not([pristine])),
			/* polyfill support */
			:host(:not([pristine])[internals-invalid]) {
				--umb-tiptap-edge-border-color: var(--uui-color-invalid);
				#editor {
					border-color: var(--uui-color-invalid);
				}
			}

			#editor {
				display: flex;
				overflow: auto;
				border-radius: var(--uui-border-radius);
				border: 1px solid transparent;
				padding: 1rem;
				box-sizing: border-box;

				height: var(--umb-rte-height, 100%);
				min-height: var(--umb-rte-min-height, 100%);
				max-height: var(--umb-rte-max-height, 100%);

				width: 100%;
				max-width: 100%;

				&[data-loaded] {
					border-color: var(--umb-tiptap-edge-border-color, var(--uui-color-border));
				}

				> .tiptap {
					height: 100%;
					width: 100%;
					outline: none;
					white-space: wrap;
					min-width: 0;

					p:first-of-type {
						margin-top: 0;
					}

					.is-editor-empty:first-child::before {
						color: var(--uui-color-text);
						opacity: 0.55;
						content: attr(data-placeholder);
						float: left;
						height: 0;
						pointer-events: none;
					}
				}

				&:has(+ umb-tiptap-statusbar) {
					border-bottom-left-radius: 0;
					border-bottom-right-radius: 0;
				}
			}

			#editor,
			umb-tiptap-toolbar,
			umb-tiptap-statusbar {
				transition: border-color 120ms ease-out;
			}

			umb-tiptap-toolbar + #editor {
				border-top: 0;
				border-top-left-radius: 0;
				border-top-right-radius: 0;
			}
		`
];
l([
  n({ type: String })
], s.prototype, "value", 1);
l([
  n({ attribute: !1 })
], s.prototype, "configuration", 2);
l([
  n()
], s.prototype, "label", 2);
l([
  n({ type: Boolean })
], s.prototype, "required", 2);
l([
  n({ type: String })
], s.prototype, "requiredMessage", 2);
l([
  n({ type: Boolean, reflect: !0 })
], s.prototype, "readonly", 2);
l([
  z()
], s.prototype, "_editor", 2);
l([
  z()
], s.prototype, "_extensions", 2);
l([
  z()
], s.prototype, "_styles", 2);
l([
  z()
], s.prototype, "_toolbar", 2);
l([
  z()
], s.prototype, "_statusbar", 2);
s = l([
  L("umb-input-tiptap")
], s);
export {
  s as U,
  Ct as a
};
//# sourceMappingURL=input-tiptap.element-BYRfK4rc.js.map
