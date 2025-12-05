import { UMB_THEME_CONTEXT as M } from "@umbraco-cms/backoffice/themes";
import { css as S, property as o, state as E, customElement as W, createRef as B, when as O, ref as U, html as v, unsafeCSS as N } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as x } from "@umbraco-cms/backoffice/lit-element";
class y extends Event {
  static {
    this.TYPE = "loaded";
  }
  constructor() {
    super(y.TYPE, { bubbles: !0, cancelable: !1 });
  }
}
var d = /* @__PURE__ */ ((t) => (t.Light = "umb-light", t.Dark = "umb-dark", t.HighContrastLight = "umb-hc-light", t.HighContrastDark = "umb-hc-dark", t))(d || {}), D = Object.defineProperty, R = Object.getOwnPropertyDescriptor, C = (t) => {
  throw TypeError(t);
}, s = (t, e, i, c) => {
  for (var l = c > 1 ? void 0 : c ? R(e, i) : e, b = t.length - 1, m; b >= 0; b--)
    (m = t[b]) && (l = (c ? m(e, i, l) : m(l)) || l);
  return c && l && D(e, i, l), l;
}, w = (t, e, i) => e.has(t) || C("Cannot " + i), n = (t, e, i) => (w(t, e, "read from private field"), i ? i.call(t) : e.get(t)), f = (t, e, i) => e.has(t) ? C("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), _ = (t, e, i, c) => (w(t, e, "write to private field"), e.set(t, i), i), p = (t, e, i) => (w(t, e, "access private method"), i), r, u, h, g, L, k;
const T = "umb-code-editor";
let a = class extends x {
  constructor() {
    super(), f(this, h), this.containerRef = B(), f(this, r), this.theme = d.Light, this.language = "javascript", f(this, u, ""), this.readonly = !1, this.disableLineNumbers = !1, this.disableMinimap = !1, this.wordWrap = !1, this.disableFolding = !1, this._loading = !0, this.consumeContext(M, (t) => {
      this.observe(
        t?.theme,
        (e) => {
          this.theme = e ? p(this, h, L).call(this, e) : d.Light;
        },
        "_observeTheme"
      );
    });
  }
  get container() {
    if (!this.containerRef?.value) throw new Error("Container not found");
    return this.containerRef.value;
  }
  get editor() {
    return n(this, r);
  }
  get code() {
    return n(this, u);
  }
  set code(t) {
    const e = n(this, u);
    _(this, u, t), n(this, r) && (n(this, r).value = t), this.requestUpdate("code", e);
  }
  async firstUpdated() {
    const { styles: t } = await import("@umbraco-cms/backoffice/external/monaco-editor");
    this._styles = t;
    const { UmbCodeEditorController: e } = await import("./code-editor.controller-DXLfWzi_.js");
    _(this, r, new e(this, p(this, h, g).call(this))), this._loading = !1, this.dispatchEvent(new y());
  }
  updated(t) {
    (t.has("theme") || t.has("language") || t.has("disableLineNumbers") || t.has("disableMinimap") || t.has("wordWrap") || t.has("readonly") || t.has("code") || t.has("label") || t.has("disableFolding")) && n(this, r)?.updateOptions(p(this, h, g).call(this));
  }
  /**
   * Inserts text at the current cursor position.
   * @param {string} text
   * @memberof UmbCodeEditorElement
   */
  insert(t) {
    n(this, r)?.insert(t);
  }
  /**
   * Finds all occurrence of the given string or matches the given regular expression.
   * @param {string} text
   * @param searchOptions
   * @returns {*}
   * @memberof UmbCodeEditorElement
   */
  find(t, e = {}) {
    return n(this, r)?.find(t, e);
  }
  render() {
    return v`
			${p(this, h, k).call(this)}
			${O(this._loading, () => v`<div id="loader-container"><uui-loader></uui-loader></div>`)}
			<div id="editor-container" ${U(this.containerRef)}></div>
		`;
  }
};
r = /* @__PURE__ */ new WeakMap();
u = /* @__PURE__ */ new WeakMap();
h = /* @__PURE__ */ new WeakSet();
g = function() {
  return {
    language: this.language,
    theme: this.theme,
    ariaLabel: this.label ?? this.localize.term("codeEditor_label"),
    lineNumbers: !this.disableLineNumbers,
    minimap: !this.disableMinimap,
    wordWrap: this.wordWrap ? "on" : "off",
    readOnly: this.readonly,
    folding: !this.disableFolding,
    value: this.code
  };
};
L = function(t) {
  switch (t) {
    case "umb-light-theme":
      return d.Light;
    case "umb-dark-theme":
      return d.Dark;
    case "umb-high-contrast-theme":
      return d.HighContrastLight;
    default:
      return d.Light;
  }
};
k = function() {
  if (this._styles)
    return v`
			<style>
				${N(this._styles)}
			</style>
		`;
};
a.styles = [
  S`
			:host {
				display: block;
			}

			#loader-container {
				display: grid;
				place-items: center;
				min-height: calc(100dvh - 260px);
			}

			#editor-container {
				width: var(--editor-width);
				height: var(--editor-height, 100%);

				--vscode-scrollbar-shadow: #dddddd;
				--vscode-scrollbarSlider-background: var(--uui-color-disabled-contrast);
				--vscode-scrollbarSlider-hoverBackground: rgba(100, 100, 100, 0.7);
				--vscode-scrollbarSlider-activeBackground: rgba(0, 0, 0, 0.6);

				/* a hacky workaround this issue: https://github.com/microsoft/monaco-editor/issues/3217
			   should probably be removed when the issue is fixed */
				.view-lines {
					font-feature-settings: revert !important;
				}
			}
		`
];
s([
  o()
], a.prototype, "theme", 2);
s([
  o()
], a.prototype, "language", 2);
s([
  o()
], a.prototype, "label", 2);
s([
  o()
], a.prototype, "code", 1);
s([
  o({ type: Boolean, attribute: "readonly" })
], a.prototype, "readonly", 2);
s([
  o({ type: Boolean, attribute: "disable-line-numbers" })
], a.prototype, "disableLineNumbers", 2);
s([
  o({ type: Boolean, attribute: "disable-minimap" })
], a.prototype, "disableMinimap", 2);
s([
  o({ type: Boolean, attribute: "word-wrap" })
], a.prototype, "wordWrap", 2);
s([
  o({ type: Boolean, attribute: "disable-folding" })
], a.prototype, "disableFolding", 2);
s([
  E()
], a.prototype, "_loading", 2);
s([
  E()
], a.prototype, "_styles", 2);
a = s([
  W(T)
], a);
export {
  d as C,
  a as U,
  y as a
};
//# sourceMappingURL=code-editor.element-Bq6IgBpV.js.map
