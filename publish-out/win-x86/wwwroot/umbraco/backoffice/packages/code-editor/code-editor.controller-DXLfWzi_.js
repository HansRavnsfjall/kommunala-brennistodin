import { monaco as r } from "@umbraco-cms/backoffice/external/monaco-editor";
import { UmbInputEvent as d, UmbChangeEvent as u } from "@umbraco-cms/backoffice/event";
import { UmbControllerBase as c } from "@umbraco-cms/backoffice/class-api";
const m = {
  base: "vs",
  inherit: !0,
  // can also be false to completely replace the builtin rules
  rules: [],
  colors: {}
}, b = {
  base: "vs-dark",
  inherit: !0,
  // can also be false to completely replace the builtin rules
  rules: [],
  colors: {}
}, g = {
  base: "vs",
  inherit: !0,
  // can also be false to completely replace the builtin rules
  rules: [],
  colors: {}
}, f = {
  base: "vs-dark",
  inherit: !0,
  // can also be false to completely replace the builtin rules
  rules: [],
  colors: {
    "editor.background": "#21262e"
  }
}, E = {
  "umb-dark": f,
  "umb-light": g,
  "umb-hc-light": m,
  "umb-hc-dark": b
};
class j extends c {
  #e;
  #t;
  /**
   * The monaco editor object. This is the actual monaco editor object. It is exposed for advanced usage, but mind the fact that editor might be swapped in the future for a different library, so use on your own responsibility. For more information see [monaco editor API](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.IStandaloneCodeEditor.html).
   * @readonly
   * @memberof UmbCodeEditor
   */
  get monacoEditor() {
    return this.#t;
  }
  #o = {};
  /**
   * The options used to create the editor.
   * @readonly
   * @type {CodeEditorConstructorOptions}
   * @memberof UmbCodeEditor
   */
  get options() {
    return this.#o;
  }
  #s = {
    automaticLayout: !0,
    scrollBeyondLastLine: !1,
    scrollbar: {
      verticalScrollbarSize: 5
    },
    // disable this, as it does not work with shadow dom properly.
    colorDecorators: !1
  };
  #r = null;
  /**
   * Provides the current position of the cursor.
   * @readonly
   * @memberof UmbCodeEditor
   */
  get position() {
    return this.#r;
  }
  #n = [];
  /**
   * Provides positions of all the secondary cursors.
   * @readonly
   * @memberof UmbCodeEditor
   */
  get secondaryPositions() {
    return this.#n;
  }
  /**
   * Provides the current value of the editor.
   * @memberof UmbCodeEditor
   */
  get value() {
    return this.#t ? this.#t.getValue() : "";
  }
  set value(t) {
    if (!this.#t) throw new Error("Editor object not found");
    const e = this.value ?? "";
    t !== e && this.#t.setValue(t ?? "");
  }
  /**
   * Provides the current model of the editor. For advanced usage. Bare in mind that in case of the monaco library being swapped in the future, this might not be available. For more information see [monaco editor model API](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.ITextModel.html).
   * @readonly
   * @memberof UmbCodeEditor
   */
  get monacoModel() {
    return this.#t ? this.#t.getModel() : null;
  }
  /**
   * Creates an instance of UmbCodeEditor. You should instantiate this class through the `UmbCodeEditorHost` interface and that should happen when inside DOM nodes of the host container are available, otherwise the editor will not be able to initialize, for example in lit `firstUpdated` lifecycle hook. It will make host emit change and input events when the value of the editor changes.
   * @param {UmbCodeEditorHost} host
   * @param {CodeEditorConstructorOptions} [options]
   * @memberof UmbCodeEditor
   */
  constructor(t, e) {
    super(t), this.#o = { ...e }, this.#e = t, this.#h(), this.#d(e);
  }
  #h() {
    Object.entries(E).forEach(([t, e]) => {
      this.#a(t, e);
    });
  }
  #a(t, e) {
    r.editor.defineTheme(t, e);
  }
  #l() {
    this.#t?.onDidChangeModelContent(() => {
      this.#e.code = this.value ?? "", this.#e.dispatchEvent(new d());
    }), this.#t?.onDidChangeModel(() => {
      this.#e.dispatchEvent(new u());
    }), this.#t?.onDidChangeCursorPosition((t) => {
      this.#r = t.position, this.#n = t.secondaryPositions;
    });
  }
  #i(t) {
    const e = Object.prototype.hasOwnProperty.call(t, "lineNumbers"), o = Object.prototype.hasOwnProperty.call(t, "minimap"), i = Object.prototype.hasOwnProperty.call(t, "lightbulb");
    return {
      ...t,
      lineNumbers: e ? t.lineNumbers ? "on" : "off" : void 0,
      minimap: o ? t.minimap ? { enabled: !0 } : { enabled: !1 } : void 0,
      lightbulb: i ? t.lightbulb ? { enabled: r.editor.ShowLightbulbIconMode.On } : { enabled: r.editor.ShowLightbulbIconMode.Off } : void 0
    };
  }
  /**
   * Updates the options of the editor. This is useful for updating the options after the editor has been created.
   * @param {CodeEditorConstructorOptions} newOptions
   * @memberof UmbCodeEditor
   */
  updateOptions(t) {
    if (!this.#t) throw new Error("Editor object not found");
    this.#o = { ...this.#o, ...t }, this.#t.updateOptions(this.#i(t));
  }
  #d(t = {}) {
    if (!this.#e.container) throw new Error("Container not found");
    if (this.#e.container.hasChildNodes()) throw new Error("Editor container should be empty");
    const e = { ...this.#s, ...this.#i(t) };
    this.#t = r.editor.create(this.#e.container, e), this.#l();
  }
  /**
   * Provides the current selections of the editor.
   * @returns {*}  {UmbCodeEditorSelection[]}
   * @memberof UmbCodeEditor
   */
  getSelections() {
    return this.#t ? this.#t.getSelections() ?? [] : [];
  }
  /**
   * Provides the current positions of the cursor or multiple cursors.
   * @returns {*}  {(UmbCodeEditorCursorPosition | null)}
   * @memberof UmbCodeEditor
   */
  getPositions() {
    return this.#t ? this.#t.getPosition() : null;
  }
  /**
   * Inserts text at the current cursor position or multiple cursor positions.
   * @param {string} text
   * @memberof UmbCodeEditor
   */
  insert(t) {
    if (!this.#t) throw new Error("Editor object not found");
    const e = this.#t.getSelections() ?? [];
    e?.length > 0 && this.#t.executeEdits(
      null,
      e.map((o) => ({ range: o, text: t }))
    );
  }
  /**
   * Looks for a string or matching strings in the editor and returns the ranges of the found strings. Can use regex, case sensitive and more. If you want regex set the isRegex to true in the options.
   * @param {string} searchString
   * @param {CodeEditorSearchOptions} [searchOptions]
   * @returns {*}  {UmbCodeEditorRange[]}
   * @memberof UmbCodeEditor
   */
  find(t, e = {}) {
    if (!this.#t) throw new Error("Editor object not found");
    const o = {
      searchOnlyEditableRange: !1,
      isRegex: !1,
      matchCase: !1,
      wordSeparators: null,
      captureMatches: !1
    }, { searchOnlyEditableRange: i, isRegex: s, matchCase: h, wordSeparators: a, captureMatches: l } = {
      ...o,
      ...e
    };
    return this.monacoModel?.findMatches(t, i, s, h, a, l).map((n) => ({
      startLineNumber: n.range.startLineNumber,
      startColumn: n.range.startColumn,
      endLineNumber: n.range.endLineNumber,
      endColumn: n.range.endColumn
    })) ?? [];
  }
  /**
   * Returns the value of the editor for a given range.
   * @param {UmbCodeEditorRange} range
   * @returns {*}  {string}
   * @memberof UmbCodeEditor
   */
  getValueInRange(t) {
    if (!this.#t) throw new Error("Editor object not found");
    return this.monacoModel?.getValueInRange(t) ?? "";
  }
  /**
   * Inserts text at a given position.
   * @param {string} text
   * @param {UmbCodeEditorCursorPosition} position
   * @memberof UmbCodeEditor
   */
  insertAtPosition(t, e) {
    if (!this.#t) throw new Error("Editor object not found");
    this.#t.executeEdits(null, [
      {
        range: {
          startLineNumber: e.lineNumber,
          startColumn: e.column,
          endLineNumber: e.lineNumber,
          endColumn: e.column
        },
        text: t
      }
    ]);
  }
  /**
   * Selects a range of text in the editor.
   * @param {UmbCodeEditorRange} range
   * @memberof UmbCodeEditor
   */
  select(t) {
    if (!this.#t) throw new Error("Editor object not found");
    this.#t.setSelection(t);
  }
  /**
   * Changes the theme of the editor.
   * @template T
   * @param {(CodeEditorTheme | T)} theme
   * @memberof UmbCodeEditor
   */
  setTheme(t) {
    if (!this.#t) throw new Error("Editor object not found");
    r.editor.setTheme(t);
  }
  /**
   * Runs callback on change of model content. (for example when typing)
   * @param {() => void} callback
   * @memberof UmbCodeEditor
   */
  onChangeModelContent(t) {
    if (!this.#t) throw new Error("Editor object not found");
    this.#t.onDidChangeModelContent(() => {
      t();
    });
  }
  /**
   * Runs callback on change of model (when the entire model is replaced	)
   * @param {() => void} callback
   * @memberof UmbCodeEditor
   */
  onDidChangeModel(t) {
    if (!this.#t) throw new Error("Editor object not found");
    this.#t.onDidChangeModel(() => {
      t();
    });
  }
  /**
   * Runs callback on change of cursor position. Gives as parameter the new position.
   * @param {((e: UmbCodeEditorCursorPositionChangedEvent | undefined) => void)} callback
   * @memberof UmbCodeEditor
   */
  onDidChangeCursorPosition(t) {
    if (!this.#t) throw new Error("Editor object not found");
    this.#t.onDidChangeCursorPosition((e) => {
      t(e);
    });
  }
  /**
   * Runs callback on change of cursor selection. Gives as parameter the new selection.
   * @param {((e: UmbCodeEditorCursorSelectionChangedEvent | undefined) => void)} callback
   * @memberof UmbCodeEditor
   */
  onDidChangeCursorSelection(t) {
    if (!this.#t) throw new Error("Editor object not found");
    this.#t.onDidChangeCursorSelection((e) => {
      t(e);
    });
  }
}
export {
  j as UmbCodeEditorController
};
//# sourceMappingURL=code-editor.controller-DXLfWzi_.js.map
