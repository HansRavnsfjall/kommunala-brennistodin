import { UMB_THEME_CONTEXT as W } from "@umbraco-cms/backoffice/themes";
import { css as S, property as n, state as k, customElement as B, createRef as O, when as U, ref as N, html as g, unsafeCSS as x } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as D } from "@umbraco-cms/backoffice/lit-element";
class w extends Event {
  static {
    this.TYPE = "loaded";
  }
  constructor() {
    super(w.TYPE, { bubbles: !0, cancelable: !1 });
  }
}
var d = /* @__PURE__ */ ((t) => (t.Light = "umb-light", t.Dark = "umb-dark", t.HighContrastLight = "umb-hc-light", t.HighContrastDark = "umb-hc-dark", t))(d || {}), T = Object.defineProperty, F = Object.getOwnPropertyDescriptor, C = (t) => {
  throw TypeError(t);
}, s = (t, e, i, c) => {
  for (var l = c > 1 ? void 0 : c ? F(e, i) : e, f = t.length - 1, v; f >= 0; f--)
    (v = t[f]) && (l = (c ? v(e, i, l) : v(l)) || l);
  return c && l && T(e, i, l), l;
}, _ = (t, e, i) => e.has(t) || C("Cannot " + i), r = (t, e, i) => (_(t, e, "read from private field"), i ? i.call(t) : e.get(t)), b = (t, e, i) => e.has(t) ? C("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), E = (t, e, i, c) => (_(t, e, "write to private field"), e.set(t, i), i), m = (t, e, i) => (_(t, e, "access private method"), i), u, o, p, h, y, L, M;
const H = "umb-code-editor";
let a = class extends D {
  constructor() {
    super(), b(this, h), b(this, u, O()), b(this, o), this.theme = d.Light, this.language = "javascript", b(this, p, ""), this.readonly = !1, this.disableLineNumbers = !1, this.disableMinimap = !1, this.wordWrap = !1, this.disableFolding = !1, this._loading = !0, this.consumeContext(W, (t) => {
      this.observe(
        t?.theme,
        (e) => {
          this.theme = e ? m(this, h, L).call(this, e) : d.Light;
        },
        "_observeTheme"
      );
    });
  }
  get container() {
    if (!r(this, u)?.value) throw new Error("Container not found");
    return r(this, u).value;
  }
  get editor() {
    return r(this, o);
  }
  get code() {
    return r(this, p);
  }
  set code(t) {
    const e = r(this, p);
    E(this, p, t), r(this, o) && (r(this, o).value = t), this.requestUpdate("code", e);
  }
  async firstUpdated() {
    const { styles: t } = await import("@umbraco-cms/backoffice/external/monaco-editor");
    this._styles = t;
    const { UmbCodeEditorController: e } = await import("./code-editor.controller-DXLfWzi_.js");
    E(this, o, new e(this, m(this, h, y).call(this))), this._loading = !1, this.dispatchEvent(new w());
  }
  updated(t) {
    (t.has("theme") || t.has("language") || t.has("disableLineNumbers") || t.has("disableMinimap") || t.has("wordWrap") || t.has("readonly") || t.has("code") || t.has("label") || t.has("disableFolding")) && r(this, o)?.updateOptions(m(this, h, y).call(this));
  }
  /**
   * Inserts text at the current cursor position.
   * @param {string} text
   * @memberof UmbCodeEditorElement
   */
  insert(t) {
    r(this, o)?.insert(t);
  }
  /**
   * Finds all occurrence of the given string or matches the given regular expression.
   * @param {string} text
   * @param searchOptions
   * @returns {*}
   * @memberof UmbCodeEditorElement
   */
  find(t, e = {}) {
    return r(this, o)?.find(t, e);
  }
  render() {
    return g`
			${m(this, h, M).call(this)}
			${U(this._loading, () => g`<div id="loader-container"><uui-loader></uui-loader></div>`)}
			<div id="editor-container" ${N(r(this, u))}></div>
		`;
  }
};
u = /* @__PURE__ */ new WeakMap();
o = /* @__PURE__ */ new WeakMap();
p = /* @__PURE__ */ new WeakMap();
h = /* @__PURE__ */ new WeakSet();
y = function() {
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
M = function() {
  if (this._styles)
    return g`
			<style>
				${x(this._styles)}
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
  n()
], a.prototype, "theme", 2);
s([
  n()
], a.prototype, "language", 2);
s([
  n()
], a.prototype, "label", 2);
s([
  n()
], a.prototype, "code", 1);
s([
  n({ type: Boolean, attribute: "readonly" })
], a.prototype, "readonly", 2);
s([
  n({ type: Boolean, attribute: "disable-line-numbers" })
], a.prototype, "disableLineNumbers", 2);
s([
  n({ type: Boolean, attribute: "disable-minimap" })
], a.prototype, "disableMinimap", 2);
s([
  n({ type: Boolean, attribute: "word-wrap" })
], a.prototype, "wordWrap", 2);
s([
  n({ type: Boolean, attribute: "disable-folding" })
], a.prototype, "disableFolding", 2);
s([
  k()
], a.prototype, "_loading", 2);
s([
  k()
], a.prototype, "_styles", 2);
a = s([
  B(H)
], a);
export {
  d as C,
  a as U,
  w as a
};
//# sourceMappingURL=code-editor.element-Y_YLZjcC.js.map
