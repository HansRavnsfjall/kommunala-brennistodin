import { css as I, state as v, property as l, customElement as q, nothing as M, map as E, html as d, when as U, repeat as it, unsafeCSS as ot } from "@umbraco-cms/backoffice/external/lit";
import { UmbExtensionsElementAndApiInitializer as at, UmbExtensionsElementInitializer as st, loadManifestApi as nt } from "@umbraco-cms/backoffice/extension-api";
import { umbExtensionsRegistry as D } from "@umbraco-cms/backoffice/extension-registry";
import { Editor as lt } from "@umbraco-cms/backoffice/external/tiptap";
import { UmbChangeEvent as pt } from "@umbraco-cms/backoffice/event";
import { UmbLitElement as R } from "@umbraco-cms/backoffice/lit-element";
import { UmbFormControlMixin as dt } from "@umbraco-cms/backoffice/validation";
import "./cascading-menu-popover.element-DfSD_Rcp.js";
var ut = Object.defineProperty, ht = Object.getOwnPropertyDescriptor, F = (t) => {
  throw TypeError(t);
}, y = (t, e, r, o) => {
  for (var i = o > 1 ? void 0 : o ? ht(e, r) : e, a = t.length - 1, s; a >= 0; a--)
    (s = t[a]) && (i = (o ? s(e, r, i) : s(i)) || i);
  return o && i && ut(e, r, i), i;
}, H = (t, e, r) => e.has(t) || F("Cannot " + r), w = (t, e, r) => (H(t, e, "read from private field"), e.get(t)), W = (t, e, r) => e.has(t) ? F("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), A = (t, e, r, o) => (H(t, e, "write to private field"), e.set(t, r), r), ct = (t, e, r) => (H(t, e, "access private method"), r), $, u, B, X;
let h = class extends R {
  constructor() {
    super(...arguments), W(this, B), W(this, $, !1), W(this, u), this.readonly = !1, this.toolbar = [[[]]];
  }
  connectedCallback() {
    super.connectedCallback(), A(this, $, !0), ct(this, B, X).call(this);
  }
  disconnectedCallback() {
    A(this, $, !1), w(this, u)?.destroy(), A(this, u, void 0), super.disconnectedCallback();
  }
  render() {
    return this.toolbar.flat(2).length ? E(
      this.toolbar,
      (t) => d`
				<div class="row">
					${E(
        t,
        (e) => d`<div class="group">${E(e, (r) => this._lookup?.get(r) ?? M)}</div>`
      )}
				</div>
			`
    ) : M;
  }
};
$ = /* @__PURE__ */ new WeakMap();
u = /* @__PURE__ */ new WeakMap();
B = /* @__PURE__ */ new WeakSet();
X = function() {
  w(this, $) && (w(this, u)?.destroy(), A(this, u, new at(
    this,
    D,
    "tiptapToolbarExtension",
    [],
    (t) => this.toolbar.flat(2).includes(t.alias),
    (t) => {
      this._lookup = new Map(
        t.map((e) => (e.component?.setAttribute("data-mark", `action:tiptap-toolbar:${e.alias}`), [e.alias, e.component]))
      );
    },
    void 0,
    void 0,
    () => import("./default-tiptap-toolbar-api-D-CoaOsg.js")
  )), w(this, u).apiProperties = { configuration: this.configuration }, w(this, u).elementProperties = { editor: this.editor, configuration: this.configuration });
};
h.styles = I`
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

			background-color: var(--uui-color-surface);
			color: var(--color-text);
			font-size: var(--uui-type-default-size);

			display: flex;
			flex-direction: column;

			position: sticky;
			top: var(--umb-tiptap-top,-25px);
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

			.group {
				display: inline-flex;
				flex-wrap: wrap;
				align-items: stretch;

				&:not(:last-child)::after {
					content: '';
					background-color: var(--uui-color-border);
					width: 1px;
					place-self: center;
					height: 22px;
					margin: 0 var(--uui-size-3);
				}
			}
		}
	`;
y([
  v()
], h.prototype, "_lookup", 2);
y([
  l({ type: Boolean, reflect: !0 })
], h.prototype, "readonly", 2);
y([
  l({ attribute: !1 })
], h.prototype, "editor", 2);
y([
  l({ attribute: !1 })
], h.prototype, "configuration", 2);
y([
  l({ attribute: !1 })
], h.prototype, "toolbar", 2);
h = y([
  q("umb-tiptap-toolbar")
], h);
var ft = Object.defineProperty, bt = Object.getOwnPropertyDescriptor, Y = (t) => {
  throw TypeError(t);
}, g = (t, e, r, o) => {
  for (var i = o > 1 ? void 0 : o ? bt(e, r) : e, a = t.length - 1, s; a >= 0; a--)
    (s = t[a]) && (i = (o ? s(e, r, i) : s(i)) || i);
  return o && i && ft(e, r, i), i;
}, L = (t, e, r) => e.has(t) || Y("Cannot " + r), k = (t, e, r) => (L(t, e, "read from private field"), r ? r.call(t) : e.get(t)), T = (t, e, r) => e.has(t) ? Y("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), x = (t, e, r, o) => (L(t, e, "write to private field"), e.set(t, r), r), _t = (t, e, r) => (L(t, e, "access private method"), r), C, _, P, V, J;
let c = class extends R {
  constructor() {
    super(...arguments), T(this, V), T(this, C, !1), T(this, _), this.readonly = !1, T(this, P, [[], []]);
  }
  set statusbar(t) {
    typeof t == "string" ? t = [[], [t]] : Array.isArray(t) && t.length === 1 && (t = [[], t[0]]), x(this, P, t);
  }
  get statusbar() {
    return k(this, P);
  }
  connectedCallback() {
    super.connectedCallback(), x(this, C, !0), _t(this, V, J).call(this);
  }
  disconnectedCallback() {
    x(this, C, !1), k(this, _)?.destroy(), x(this, _, void 0), super.disconnectedCallback();
  }
  render() {
    return this.statusbar.flat().length ? E(
      this.statusbar,
      (t) => d`<div class="area">${E(t, (e) => this._lookup?.get(e) ?? M)}</div>`
    ) : M;
  }
};
C = /* @__PURE__ */ new WeakMap();
_ = /* @__PURE__ */ new WeakMap();
P = /* @__PURE__ */ new WeakMap();
V = /* @__PURE__ */ new WeakSet();
J = function() {
  k(this, C) && (k(this, _)?.destroy(), x(this, _, new st(
    this,
    D,
    "tiptapStatusbarExtension",
    (t) => this.statusbar.flat().includes(t.alias),
    (t) => {
      this._lookup = new Map(
        t.map((e) => (e.component?.setAttribute("data-mark", `action:tiptap-statusbar:${e.alias}`), [e.alias, e.component]))
      );
    }
  )), k(this, _).properties = { editor: this.editor, configuration: this.configuration });
};
c.styles = I`
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
			border: 1px solid var(--uui-color-border);
			border-top-left-radius: 0;
			border-top-right-radius: 0;
			border-top: 0;

			min-height: var(--uui-size-layout-1);
			max-height: var(--uui-size-layout-2);

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
g([
  v()
], c.prototype, "_lookup", 2);
g([
  l({ type: Boolean, reflect: !0 })
], c.prototype, "readonly", 2);
g([
  l({ attribute: !1 })
], c.prototype, "editor", 2);
g([
  l({ attribute: !1 })
], c.prototype, "configuration", 2);
g([
  l({ attribute: !1 })
], c.prototype, "statusbar", 1);
c = g([
  q("umb-tiptap-statusbar")
], c);
var vt = Object.defineProperty, yt = Object.getOwnPropertyDescriptor, K = (t) => {
  throw TypeError(t);
}, p = (t, e, r, o) => {
  for (var i = o > 1 ? void 0 : o ? yt(e, r) : e, a = t.length - 1, s; a >= 0; a--)
    (s = t[a]) && (i = (o ? s(e, r, i) : s(i)) || i);
  return o && i && vt(e, r, i), i;
}, G = (t, e, r) => e.has(t) || K("Cannot " + r), S = (t, e, r) => (G(t, e, "read from private field"), r ? r.call(t) : e.get(t)), z = (t, e, r) => e.has(t) ? K("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), Q = (t, e, r, o) => (G(t, e, "write to private field"), e.set(t, r), r), m = (t, e, r) => (G(t, e, "access private method"), r), O, b, f, Z, j, tt, et, rt;
const gt = "Umb.Tiptap.RichTextEssentials", N = "/css";
let n = class extends dt(R) {
  constructor() {
    super(), z(this, f), z(this, O, /* @__PURE__ */ new Set(["/umbraco/backoffice/css/rte-content.css"])), z(this, b, ""), this.readonly = !1, this._extensions = [], this._styles = [], this._toolbar = [[[]]], this._statusbar = [[], []], this.addValidator(
      "valueMissing",
      () => this.requiredMessage ?? "Value is required",
      () => !!this.required && this.isEmpty()
    );
  }
  set value(t) {
    t !== S(this, b) && (Q(this, b, t), this._editor && this._editor.commands.setContent(t));
  }
  get value() {
    return S(this, b);
  }
  async firstUpdated() {
    await Promise.all([await m(this, f, Z).call(this), await m(this, f, j).call(this)]);
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
			${U(t, () => d`<div id="loader"><uui-loader></uui-loader></div>`)}
			${U(!t, () => d`${m(this, f, tt).call(this)}${m(this, f, et).call(this)}`)}
			<div id="editor" data-mark="input:tiptap-rte"></div>
			${U(!t, () => m(this, f, rt).call(this))}
		`;
  }
};
O = /* @__PURE__ */ new WeakMap();
b = /* @__PURE__ */ new WeakMap();
f = /* @__PURE__ */ new WeakSet();
Z = async function() {
  const t = this.configuration?.getValueByAlias("extensions") ?? [];
  if (!t.includes(gt)) {
    const { api: e } = await import("./rich-text-essentials.tiptap-api-C7v7tNIy.js");
    this._extensions.push(new e(this));
  }
  await new Promise((e) => {
    this.observe(D.byTypeAndAliases("tiptapExtension", t), async (r) => {
      for (const o of r)
        if (o.api) {
          const i = await nt(o.api);
          i && this._extensions.push(new i(this));
        }
      e();
    });
  });
};
j = async function() {
  const t = this.shadowRoot?.querySelector("#editor");
  if (!t) return;
  const e = this.configuration?.getValueByAlias("dimensions");
  e?.width && this.setAttribute("style", `max-width: ${e.width}px;`), e?.height && t.setAttribute("style", `height: ${e.height}px;`);
  const r = this.configuration?.getValueByAlias("stylesheets");
  r?.length && r.forEach((i) => {
    const a = i.startsWith("http") || i.startsWith(N) ? i : `${N}${i}`;
    S(this, O).add(a);
  }), this._toolbar = this.configuration?.getValueByAlias("toolbar") ?? [[[]]], this._statusbar = this.configuration?.getValueByAlias("statusbar") ?? [];
  const o = [];
  this._extensions.forEach((i) => {
    const a = i.getTiptapExtensions({ configuration: this.configuration });
    a?.length && o.push(...a);
    const s = i.getStyles();
    s && this._styles.push(s);
  }), this._editor = new lt({
    element: t,
    editable: !this.readonly,
    extensions: o,
    content: S(this, b),
    //enableContentCheck: true,
    onBeforeCreate: ({ editor: i }) => {
      this._extensions.forEach((a) => a.setEditor(i));
    },
    onContentError: ({ error: i }) => {
      console.error("contentError", [i.message, i.cause]);
    },
    onUpdate: ({ editor: i }) => {
      Q(this, b, i.getHTML()), this._runValidators(), this.dispatchEvent(new pt());
    }
  });
};
tt = function() {
  if (this._styles?.length)
    return d`
			${it(
      S(this, O),
      (t) => t,
      (t) => d`<link rel="stylesheet" href="${t}" />`
    )}
			<style>
				${this._styles.map((t) => ot(t))}
			</style>
		`;
};
et = function() {
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
rt = function() {
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
n.styles = [
  I`
			:host {
				display: block;
				position: relative;
				z-index: 0;
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
				border: 1px solid var(--umb-tiptap-edge-border-color, var(--uui-color-border));
				padding: 1rem;
				box-sizing: border-box;
				height: 100%;
				width: 100%;
				max-width: 100%;

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

			umb-tiptap-toolbar + #editor {
				border-top: 0;
				border-top-left-radius: 0;
				border-top-right-radius: 0;
			}
		`
];
p([
  l({ type: String })
], n.prototype, "value", 1);
p([
  l({ attribute: !1 })
], n.prototype, "configuration", 2);
p([
  l({ type: Boolean })
], n.prototype, "required", 2);
p([
  l({ type: String })
], n.prototype, "requiredMessage", 2);
p([
  l({ type: Boolean, reflect: !0 })
], n.prototype, "readonly", 2);
p([
  v()
], n.prototype, "_editor", 2);
p([
  v()
], n.prototype, "_extensions", 2);
p([
  v()
], n.prototype, "_styles", 2);
p([
  v()
], n.prototype, "_toolbar", 2);
p([
  v()
], n.prototype, "_statusbar", 2);
n = p([
  q("umb-input-tiptap")
], n);
export {
  n as U
};
//# sourceMappingURL=input-tiptap.element-CUaX4v9f.js.map
