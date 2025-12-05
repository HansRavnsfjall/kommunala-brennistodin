import { e as M } from "./manifests-BfVrApfB.js";
import { html as P, property as u, state as c, customElement as U } from "@umbraco-cms/backoffice/external/lit";
import { UmbChangeEvent as g } from "@umbraco-cms/backoffice/event";
import { UmbLitElement as x } from "@umbraco-cms/backoffice/lit-element";
import { UmbPropertyEditorUiInteractionMemoryManager as I } from "@umbraco-cms/backoffice/property-editor";
var w = Object.defineProperty, C = Object.getOwnPropertyDescriptor, y = (t) => {
  throw TypeError(t);
}, a = (t, e, r, s) => {
  for (var o = s > 1 ? void 0 : s ? C(e, r) : e, h = t.length - 1, d; h >= 0; h--)
    (d = t[h]) && (o = (s ? d(e, r, o) : d(o)) || o);
  return s && o && w(e, r, o), o;
}, v = (t, e, r) => e.has(t) || y("Cannot " + r), p = (t, e, r) => (v(t, e, "read from private field"), r ? r.call(t) : e.get(t)), _ = (t, e, r) => e.has(t) ? y("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), l = (t, e, r) => (v(t, e, "access private method"), r), n, m, f, E;
let i = class extends x {
  constructor() {
    super(), _(this, m), this.readonly = !1, this._min = 0, this._max = 1, this._interactionMemories = [], _(this, n, new I(this, {
      memoryUniquePrefix: "UmbDocumentPicker"
    })), this.observe(p(this, n).memoriesForPropertyEditor, (t) => {
      this._interactionMemories = t ?? [];
    });
  }
  set config(t) {
    if (p(this, n).setPropertyEditorConfig(t), !t) return;
    const e = t.getValueByAlias("validationLimit");
    e && (this._min = e.min && e.min > 0 ? e.min : 0, this._max = e.max && e.max > 0 ? e.max : 1), this._startNodeId = t.getValueByAlias("startNodeId");
  }
  render() {
    const t = this._startNodeId ? { unique: this._startNodeId, entityType: M } : void 0;
    return P`
			<umb-input-document
				.min=${this._min}
				.max=${this._max}
				.startNode=${t}
				.value=${this.value}
				@change=${l(this, m, f)}
				?readonly=${this.readonly}
				.interactionMemories=${this._interactionMemories}
				@interaction-memories-change=${l(this, m, E)}>
			</umb-input-document>
		`;
  }
};
n = /* @__PURE__ */ new WeakMap();
m = /* @__PURE__ */ new WeakSet();
f = function(t) {
  this.value = t.target.value, this.dispatchEvent(new g());
};
E = async function(t) {
  const r = t.target.interactionMemories;
  r && r.length > 0 ? await p(this, n).saveMemoriesForPropertyEditor(r) : await p(this, n).deleteMemoriesForPropertyEditor();
};
a([
  u()
], i.prototype, "value", 2);
a([
  u({ type: Boolean, reflect: !0 })
], i.prototype, "readonly", 2);
a([
  c()
], i.prototype, "_min", 2);
a([
  c()
], i.prototype, "_max", 2);
a([
  c()
], i.prototype, "_startNodeId", 2);
a([
  c()
], i.prototype, "_interactionMemories", 2);
i = a([
  U("umb-property-editor-ui-document-picker")
], i);
const O = i;
export {
  i as UmbPropertyEditorUIDocumentPickerElement,
  O as default
};
//# sourceMappingURL=property-editor-ui-document-picker.element-CaVj22Re.js.map
