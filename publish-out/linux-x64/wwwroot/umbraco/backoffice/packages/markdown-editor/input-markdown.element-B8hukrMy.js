import { html as c, nothing as M, when as S, unsafeHTML as $, css as I, property as f, query as H, state as P, customElement as U } from "@umbraco-cms/backoffice/external/lit";
import { createExtensionApi as z } from "@umbraco-cms/backoffice/extension-api";
import { marked as B } from "@umbraco-cms/backoffice/external/marked";
import { monaco as s } from "@umbraco-cms/backoffice/external/monaco-editor";
import { umbExtensionsRegistry as q } from "@umbraco-cms/backoffice/extension-registry";
import { UmbChangeEvent as R } from "@umbraco-cms/backoffice/event";
import { UmbLitElement as O } from "@umbraco-cms/backoffice/lit-element";
import { UmbTextStyles as D } from "@umbraco-cms/backoffice/style";
import { umbOpenModal as T } from "@umbraco-cms/backoffice/modal";
import { UmbMediaUrlRepository as W, UMB_MEDIA_PICKER_MODAL as F } from "@umbraco-cms/backoffice/media";
import { UmbCodeEditorLoadedEvent as Q } from "@umbraco-cms/backoffice/code-editor";
import { UmbFormControlMixin as Y } from "@umbraco-cms/backoffice/validation";
import { sanitizeHTML as G } from "@umbraco-cms/backoffice/utils";
var J = Object.defineProperty, X = Object.getOwnPropertyDescriptor, E = (t) => {
  throw TypeError(t);
}, h = (t, o, r, n) => {
  for (var u = n > 1 ? void 0 : n ? X(o, r) : o, b = t.length - 1, p; b >= 0; b--)
    (p = t[b]) && (u = (n ? p(o, r, u) : p(u)) || u);
  return n && u && J(o, r, u), u;
}, C = (t, o, r) => o.has(t) || E("Cannot " + r), e = (t, o, r) => (C(t, o, "read from private field"), r ? r.call(t) : o.get(t)), g = (t, o, r) => o.has(t) ? E("Cannot add the same private member more than once") : o instanceof WeakSet ? o.add(t) : o.set(t, r), L = (t, o, r, n) => (C(t, o, "write to private field"), o.set(t, r), r), a = (t, o, r) => (C(t, o, "access private method"), r), m, i, y, d, A, v, _, k, x, N, w, K;
let l = class extends Y(
  O
) {
  constructor() {
    super(...arguments), g(this, d), this.preview = !1, g(this, m, !1), g(this, i), this._actionExtensions = [], g(this, y, new W(this));
  }
  getFormElement() {
    return this._codeEditor;
  }
  get readonly() {
    return e(this, m);
  }
  set readonly(t) {
    L(this, m, t), e(this, i)?.monacoEditor?.updateOptions({ readOnly: e(this, m) });
  }
  _focusEditor() {
    e(this, i)?.monacoEditor?.focus();
  }
  _insertLine() {
    const t = e(this, i)?.getSelections()[0];
    if (!t) return;
    const o = e(this, i)?.monacoModel?.getLineMaxColumn(t.endLineNumber) ?? 1;
    o === 1 ? e(this, i)?.insertAtPosition(`---
`, {
      lineNumber: t.endLineNumber,
      column: 1
    }) : e(this, i)?.insertAtPosition(`

---
`, {
      lineNumber: t.endLineNumber,
      column: o
    }), this._focusEditor();
  }
  _insertBetweenSelection(t, o, r) {
    this._focusEditor();
    const n = e(this, i)?.getSelections()[0];
    if (!n) return;
    const u = e(this, i)?.getValueInRange({
      startLineNumber: n.startLineNumber,
      endLineNumber: n.endLineNumber,
      startColumn: n.startColumn - t.length,
      endColumn: n.endColumn + o.length
    });
    u?.startsWith(t) && u.endsWith(o) && u.length > t.length + o.length ? (e(this, i)?.select({ ...n, startColumn: n.startColumn + t.length }), e(this, i)?.monacoEditor?.executeEdits("", [
      {
        range: {
          startColumn: n.startColumn - t.length,
          startLineNumber: n.startLineNumber,
          endColumn: n.startColumn,
          endLineNumber: n.startLineNumber
        },
        text: ""
      },
      {
        range: {
          startColumn: n.endColumn + t.length,
          startLineNumber: n.startLineNumber,
          endColumn: n.endColumn,
          endLineNumber: n.startLineNumber
        },
        text: ""
      }
    ])) : (e(this, i)?.insertAtPosition(t, {
      lineNumber: n.startLineNumber,
      column: n.startColumn
    }), e(this, i)?.insertAtPosition(o, {
      lineNumber: n.endLineNumber,
      column: n.endColumn + t.length
    }), e(this, i)?.select({
      startLineNumber: n.startLineNumber,
      endLineNumber: n.endLineNumber,
      startColumn: n.startColumn + t.length,
      endColumn: n.endColumn + t.length
    })), n.startColumn === n.endColumn && n.startLineNumber === n.endLineNumber && (r && e(this, i)?.insertAtPosition(r, {
      lineNumber: n.startLineNumber,
      column: n.startColumn + t.length
    }), e(this, i)?.select({
      startLineNumber: n.startLineNumber,
      endLineNumber: n.endLineNumber,
      startColumn: n.startColumn + t.length,
      endColumn: n.startColumn + t.length + (r?.length ?? 0)
    }));
  }
  _insertAtCurrentLine(t) {
    this._focusEditor();
    const o = e(this, i)?.getSelections()[0];
    if (!o) return;
    const r = e(this, i)?.getValueInRange({
      ...o,
      startLineNumber: o.startLineNumber - 1
    }), n = e(this, i)?.getValueInRange({ ...o, startColumn: 1 });
    if (n?.startsWith(t) || n?.match(/^[1-9]\d*\.\s.*/))
      e(this, i)?.monacoEditor?.executeEdits("", [
        {
          range: {
            startColumn: 1,
            startLineNumber: o.startLineNumber,
            endColumn: 1 + t.length,
            endLineNumber: o.startLineNumber
          },
          text: ""
        }
      ]);
    else if (t.match(/^[1-9]\d*\.\s.*/) && r?.match(/^[1-9]\d*\.\s.*/)) {
      const u = parseInt(r, 10);
      e(this, i)?.insertAtPosition(`${u + 1}. `, {
        lineNumber: o.startLineNumber,
        column: 1
      });
    } else
      e(this, i)?.insertAtPosition(t, {
        lineNumber: o.startLineNumber,
        column: 1
      });
  }
  _insertQuote() {
    const t = e(this, i)?.getSelections()[0];
    if (!t) return;
    let o = t.startLineNumber;
    for (o; o <= t.endLineNumber; o++)
      e(this, i)?.getValueInRange({
        startLineNumber: o,
        endLineNumber: o,
        startColumn: 1,
        endColumn: 3
      })?.startsWith("> ") || e(this, i)?.insertAtPosition("> ", {
        lineNumber: o,
        column: 1
      });
    this._focusEditor();
  }
  render() {
    return c`
			${a(this, d, w).call(this)}

			<umb-code-editor
				language="markdown"
				.code=${this.value}
				disable-line-numbers
				disable-minimap
				disable-folding
				@input=${a(this, d, N)}
				@keypress=${a(this, d, x)}
				@loaded=${a(this, d, A)}>
			</umb-code-editor>

			${a(this, d, K).call(this)}
		`;
  }
};
m = /* @__PURE__ */ new WeakMap();
i = /* @__PURE__ */ new WeakMap();
y = /* @__PURE__ */ new WeakMap();
d = /* @__PURE__ */ new WeakSet();
A = function(t) {
  if (t.type === Q.TYPE)
    try {
      L(this, i, this._codeEditor?.editor), e(this, i)?.monacoEditor?.updateOptions({ readOnly: e(this, m) }), this.observe(q.byType("monacoMarkdownEditorAction"), (o) => {
        o.forEach(async (r) => {
          const n = await z(this, r, [this]);
          n && (n.manifest = r);
          const u = {
            id: r.alias ?? n.getUnique(),
            label: this.localize.string(r.meta?.label ?? n.getLabel()),
            icon: r.meta?.icon,
            keybindings: n.getKeybindings(),
            run: async () => await n.execute({ editor: e(this, i), overlaySize: this.overlaySize })
          };
          e(this, i)?.monacoEditor?.addAction(u), this._actionExtensions.push(u), this.requestUpdate("_actionExtensions");
        });
      }), a(this, d, v).call(this);
    } catch (o) {
      console.error(o);
    }
};
v = function() {
  e(this, i)?.monacoEditor?.addAction({
    label: "Add Heading H1",
    id: "h1",
    keybindings: [s.KeyMod.CtrlCmd | s.KeyMod.Shift | s.KeyCode.Digit1],
    run: () => this._insertAtCurrentLine("# ")
  }), e(this, i)?.monacoEditor?.addAction({
    label: "Add Heading H2",
    id: "h2",
    keybindings: [s.KeyMod.CtrlCmd | s.KeyMod.Shift | s.KeyCode.Digit2],
    run: () => this._insertAtCurrentLine("## ")
  }), e(this, i)?.monacoEditor?.addAction({
    label: "Add Heading H3",
    id: "h3",
    keybindings: [s.KeyMod.CtrlCmd | s.KeyMod.Shift | s.KeyCode.Digit3],
    run: () => this._insertAtCurrentLine("### ")
  }), e(this, i)?.monacoEditor?.addAction({
    label: "Add Heading H4",
    id: "h4",
    keybindings: [s.KeyMod.CtrlCmd | s.KeyMod.Shift | s.KeyCode.Digit4],
    run: () => this._insertAtCurrentLine("#### ")
  }), e(this, i)?.monacoEditor?.addAction({
    label: "Add Heading H5",
    id: "h5",
    keybindings: [s.KeyMod.CtrlCmd | s.KeyMod.Shift | s.KeyCode.Digit5],
    run: () => this._insertAtCurrentLine("##### ")
  }), e(this, i)?.monacoEditor?.addAction({
    label: "Add Heading H6",
    id: "h6",
    keybindings: [s.KeyMod.CtrlCmd | s.KeyMod.Shift | s.KeyCode.Digit6],
    run: () => this._insertAtCurrentLine("###### ")
  }), e(this, i)?.monacoEditor?.addAction({
    label: "Add Bold Text",
    id: "b",
    keybindings: [s.KeyMod.CtrlCmd | s.KeyCode.KeyB],
    run: () => this._insertBetweenSelection("**", "**", "Your Bold Text")
  }), e(this, i)?.monacoEditor?.addAction({
    label: "Add Italic Text",
    id: "i",
    keybindings: [s.KeyMod.CtrlCmd | s.KeyCode.KeyI],
    run: () => this._insertBetweenSelection("*", "*", "Your Italic Text")
  }), e(this, i)?.monacoEditor?.addAction({
    label: "Add Quote",
    id: "q",
    keybindings: [s.KeyMod.CtrlCmd | s.KeyMod.Shift | s.KeyCode.Period],
    run: () => this._insertQuote()
  }), e(this, i)?.monacoEditor?.addAction({
    label: "Add Ordered List",
    id: "ol",
    keybindings: [s.KeyMod.CtrlCmd | s.KeyMod.Shift | s.KeyCode.Digit7],
    run: () => this._insertAtCurrentLine("1. ")
  }), e(this, i)?.monacoEditor?.addAction({
    label: "Add Unordered List",
    id: "ul",
    keybindings: [s.KeyMod.CtrlCmd | s.KeyMod.Shift | s.KeyCode.Digit8],
    run: () => this._insertAtCurrentLine("- ")
  }), e(this, i)?.monacoEditor?.addAction({
    label: "Add Code",
    id: "code",
    keybindings: [s.KeyMod.CtrlCmd | s.KeyCode.KeyE],
    run: () => this._insertBetweenSelection("`", "`", "Code")
  }), e(this, i)?.monacoEditor?.addAction({
    label: "Add Fenced Code",
    id: "fenced-code",
    run: () => this._insertBetweenSelection("```", "```", "Code")
  }), e(this, i)?.monacoEditor?.addAction({
    label: "Add Horizontal Line",
    id: "line",
    run: () => this._insertLine()
  }), e(this, i)?.monacoEditor?.addAction({
    label: "Add Image",
    id: "image",
    //keybindings: [monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyJ], // What keybinding would be good for image?
    run: () => a(this, d, k).call(this)
    // TODO: Update when media picker is complete.
  });
};
_ = function(t, o) {
  if (t.stopPropagation(), !e(this, i)?.monacoEditor?.getAction(o.id)) throw new Error(`Action ${o.id} not found in the editor.`);
  e(this, i)?.monacoEditor?.getAction(o.id)?.run();
};
k = async function() {
  const t = e(this, i)?.getSelections()[0];
  if (!t) return;
  const o = e(this, i)?.getValueInRange(t) || "enter image description here";
  this._focusEditor();
  const r = await T(this, F).catch(() => {
  }).finally(() => this._focusEditor());
  if (!r) return;
  const n = r.selection.filter((p) => p !== null), { data: u } = await e(this, y).requestItems(n), b = u?.length ? u[0].url ?? "URL" : "URL";
  e(this, i)?.monacoEditor?.executeEdits("", [
    {
      range: t,
      text: `![${o}](${b})`
    }
  ]), e(this, i)?.select({
    startColumn: t.startColumn + 2,
    endColumn: t.startColumn + o.length + 2,
    // +2 because of ![
    endLineNumber: t.startLineNumber,
    startLineNumber: t.startLineNumber
  });
};
x = function(t) {
  if (t.key !== "Enter") return;
  const o = e(this, i)?.getSelections()[0];
  if (!o) return;
  const r = e(this, i)?.getValueInRange({ ...o, startColumn: 1 }).trimStart();
  if (r) {
    if (r.startsWith("- ") && r.length > 2)
      requestAnimationFrame(() => e(this, i)?.insert("- "));
    else if (r.match(/^[1-9]\d*\.\s.*/) && r.length > 3) {
      const n = parseInt(r, 10);
      requestAnimationFrame(() => e(this, i)?.insert(`${n + 1}. `));
    }
  }
};
N = function(t) {
  t.stopPropagation(), this.value = e(this, i)?.value ?? "", this.dispatchEvent(new R());
};
w = function() {
  return this.readonly ? M : c`
			<div id="toolbar">
				<div id="buttons">
					<uui-button-group>
						<uui-button
							compact
							look="default"
							label="Heading"
							title="Heading, &lt;Ctrl+Shift+1&gt;"
							@click=${() => e(this, i)?.monacoEditor?.getAction("h1")?.run()}>
							<umb-icon name="icon-heading-1"></umb-icon>
						</uui-button>
						<uui-button
							compact
							look="default"
							label="Bold"
							title="Bold, &lt;Ctrl+B&gt;"
							@click=${() => e(this, i)?.monacoEditor?.getAction("b")?.run()}>
							<umb-icon name="icon-bold"></umb-icon>
						</uui-button>
						<uui-button
							compact
							look="default"
							label="Italic"
							title="Italic, &lt;Ctrl+I&gt;"
							@click=${() => e(this, i)?.monacoEditor?.getAction("i")?.run()}>
							<umb-icon name="icon-italic"></umb-icon>
						</uui-button>
					</uui-button-group>

					<uui-button-group>
						<uui-button
							compact
							look="default"
							label="Blockquote"
							title="Blockquote, &lt;Ctrl+Shift+.&gt;"
							@click=${() => e(this, i)?.monacoEditor?.getAction("q")?.run()}>
							<uui-icon name="icon-blockquote"></uui-icon>
						</uui-button>
						<uui-button
							compact
							look="default"
							label="Ordered List"
							title="Ordered List, &lt;Ctrl+Shift+7&gt;"
							@click=${() => e(this, i)?.monacoEditor?.getAction("ol")?.run()}>
							<uui-icon name="icon-ordered-list"></uui-icon>
						</uui-button>
						<uui-button
							compact
							look="default"
							label="Unordered List"
							title="Unordered List, &lt;Ctrl+Shift+8&gt;"
							@click=${() => e(this, i)?.monacoEditor?.getAction("ul")?.run()}>
							<uui-icon name="icon-bulleted-list"></uui-icon>
						</uui-button>
					</uui-button-group>
					<uui-button-group>
						<uui-button
							compact
							look="default"
							label="Code"
							title="Code, &lt;Ctrl+E&gt;"
							@click=${() => e(this, i)?.monacoEditor?.getAction("code")?.run()}>
							<uui-icon name="icon-code"></uui-icon>
						</uui-button>
						<uui-button
							compact
							look="default"
							label="Horizontal Rule"
							title="Horizontal Rule"
							@click=${() => e(this, i)?.monacoEditor?.getAction("line")?.run()}>
							<uui-icon name="icon-horizontal-rule"></uui-icon>
						</uui-button>
						<uui-button
							compact
							look="default"
							label="Image"
							title="Image"
							@click=${() => e(this, i)?.monacoEditor?.getAction("image")?.run()}>
							<uui-icon name="icon-picture"></uui-icon>
						</uui-button>
					</uui-button-group>

					<uui-button-group>
						${this._actionExtensions.map(
    (t) => c`
								<uui-button
									compact
									look="default"
									label=${this.localize.string(t.label)}
									title=${this.localize.string(t.label)}
									@click=${(o) => a(this, d, _).call(this, o, t)}>
									${S(
      t.icon,
      () => c`<uui-icon name=${t.icon}></uui-icon>`,
      () => c`<span>${this.localize.string(t.label)}</span>`
    )}
								</uui-button>
							`
  )}
					</uui-button-group>
				</div>
				<div id="actions">
					<uui-button-group>
						<uui-button
							compact
							label="Press F1 for all actions"
							title="Press F1 for all actions"
							@click=${() => {
    this._focusEditor(), e(this, i)?.monacoEditor?.trigger("", "editor.action.quickCommand", "");
  }}>
							<uui-key>F1</uui-key>
						</uui-button>
					</uui-button-group>
				</div>
			</div>
		`;
};
K = function() {
  if (!this.preview || !this.value) return;
  const t = B.parse(this.value), o = t ? G(t) : "";
  return c`<uui-scroll-container id="preview">${$(o)}</uui-scroll-container>`;
};
l.styles = [
  D,
  I`
			:host {
				display: flex;
				flex-direction: column;
			}

			#toolbar {
				display: flex;
				justify-content: space-between;
				align-items: center;

				border-radius: var(--uui-border-radius);
				border: 1px solid var(--uui-color-border);
				border-bottom: 0;
				border-bottom-left-radius: 0;
				border-bottom-right-radius: 0;
				box-shadow:
					0 2px 2px -2px rgba(34, 47, 62, 0.1),
					0 8px 8px -4px rgba(34, 47, 62, 0.07);

				background-color: var(--uui-color-surface-alt);
				color: var(--color-text);

				position: sticky;
				top: -25px;
				left: 0px;
				right: 0px;
				padding: var(--uui-size-3);
				z-index: 9999999;

				uui-key {
					text-transform: uppercase;
				}
			}

			#buttons {
				flex: 1;
				display: flex;
				flex-wrap: wrap;
				align-items: center;

				uui-button-group:not(:last-child)::after {
					content: '';
					background-color: var(--uui-color-border);
					width: 1px;
					place-self: center;
					height: 22px;
					margin: 0 var(--uui-size-3);
				}
			}

			umb-code-editor {
				height: 200px;
				border-radius: var(--uui-border-radius);
				border: 1px solid var(--uui-color-border);
				border-top: 0;
				border-top-left-radius: 0;
				border-top-right-radius: 0;
				padding-top: var(--uui-size-3);
			}

			#preview {
				max-height: 400px;
			}

			#preview blockquote {
				border-left: 2px solid var(--uui-color-default-emphasis);
				margin-inline: 0;
				padding-inline: var(--uui-size-3);
			}

			#preview img {
				max-width: 100%;
			}

			#preview hr {
				border: none;
				border-bottom: 1px solid var(--uui-palette-cocoa-black);
			}

			#preview p > code,
			#preview pre {
				border: 1px solid var(--uui-color-divider-emphasis);
				border-radius: var(--uui-border-radius);
				padding: 0 var(--uui-size-1);
				background-color: var(--uui-color-background);
			}
		`
];
h([
  f({ type: Boolean })
], l.prototype, "preview", 2);
h([
  f()
], l.prototype, "overlaySize", 2);
h([
  f({ type: Boolean, reflect: !0 })
], l.prototype, "readonly", 1);
h([
  H("umb-code-editor")
], l.prototype, "_codeEditor", 2);
h([
  P()
], l.prototype, "_actionExtensions", 2);
l = h([
  U("umb-input-markdown")
], l);
export {
  l as U
};
//# sourceMappingURL=input-markdown.element-B8hukrMy.js.map
