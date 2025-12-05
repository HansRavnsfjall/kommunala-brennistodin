import { U as $ } from "./dynamic-root.repository-DO0J7Qvd.js";
import { html as d, nothing as x, repeat as k, css as q, property as I, state as a, customElement as N } from "@umbraco-cms/backoffice/external/lit";
import { UmbChangeEvent as R } from "@umbraco-cms/backoffice/event";
import { umbConfirmModal as D } from "@umbraco-cms/backoffice/modal";
import { UmbLitElement as B } from "@umbraco-cms/backoffice/lit-element";
import { UmbFormControlMixin as O } from "@umbraco-cms/backoffice/validation";
import { UMB_ANCESTORS_ENTITY_CONTEXT as z } from "@umbraco-cms/backoffice/entity";
import { UMB_DOCUMENT_ENTITY_TYPE as E } from "@umbraco-cms/backoffice/document";
import { UMB_MEDIA_ENTITY_TYPE as S } from "@umbraco-cms/backoffice/media";
import { UMB_MEMBER_ENTITY_TYPE as A } from "@umbraco-cms/backoffice/member";
import { UmbPropertyEditorUiInteractionMemoryManager as Y } from "@umbraco-cms/backoffice/property-editor";
import "./input-content.element-CeMJkRLf.js";
var W = Object.defineProperty, F = Object.getOwnPropertyDescriptor, U = (t) => {
  throw TypeError(t);
}, s = (t, e, i, o) => {
  for (var r = o > 1 ? void 0 : o ? F(e, i) : e, h = t.length - 1, y; h >= 0; h--)
    (y = t[h]) && (r = (o ? y(e, i, r) : y(r)) || r);
  return o && r && W(e, i, r), r;
}, g = (t, e, i) => e.has(t) || U("Cannot " + i), l = (t, e, i) => (g(t, e, "read from private field"), i ? i.call(t) : e.get(t)), u = (t, e, i) => e.has(t) ? U("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), V = (t, e, i, o) => (g(t, e, "write to private field"), e.set(t, i), i), c = (t, e, i) => (g(t, e, "access private method"), i), _, M, f, p, m, v, T, b, C, P, w;
let n = class extends O(B, void 0) {
  constructor() {
    super(), u(this, m), this.readonly = !1, this._type = "content", this._min = 0, this._minMessage = "", this._max = 1 / 0, this._maxMessage = "", this._interactionMemories = [], u(this, _), u(this, M, new $(this)), u(this, f, {
      content: E,
      media: S,
      member: A
    }), u(this, p, new Y(this, {
      memoryUniquePrefix: "UmbContentPicker"
    })), this.observe(l(this, p).memoriesForPropertyEditor, (t) => {
      this._interactionMemories = t ?? [];
    });
  }
  set config(t) {
    if (l(this, p).setPropertyEditorConfig(t), !t) return;
    const e = t.getValueByAlias("startNode");
    e && (this._type = e.type, this._rootUnique = e.id, this._rootEntityType = l(this, f)[e.type], V(this, _, e.dynamicRoot), this._invalidData = this.value?.filter((i) => i.type !== this._rootEntityType), this._invalidData?.length && (this.readonly = !0)), this._min = c(this, m, v).call(this, t.getValueByAlias("minNumber"), 0), this._max = c(this, m, v).call(this, t.getValueByAlias("maxNumber"), 1 / 0), this._allowedContentTypeUniques = t.getValueByAlias("filter"), this._minMessage = `${this.localize.term("validation_minCount")} ${this._min} ${this.localize.term("validation_items")}`, this._maxMessage = `${this.localize.term("validation_maxCount")} ${this._max} ${this.localize.term("validation_itemsSelected")}`, (this._min > 0 || this._max < 1 / 0) && this.checkValidity();
  }
  firstUpdated(t) {
    super.firstUpdated(t), this.addFormControlElement(this.shadowRoot.querySelector("umb-input-content")), c(this, m, T).call(this), this._min && this._max && this._min > this._max && console.warn(
      "Property (Content Picker) has been misconfigured, 'minNumber' is greater than 'maxNumber'. Please correct your data type configuration.",
      this
    );
  }
  focus() {
    return this.shadowRoot?.querySelector("umb-input-content")?.focus();
  }
  render() {
    const t = this._rootUnique && this._rootEntityType ? { unique: this._rootUnique, entityType: this._rootEntityType } : void 0;
    return d`
			<umb-input-content
				.selection=${this.value ?? []}
				.type=${this._type}
				.min=${this._min}
				.minMessage=${this._minMessage}
				.max=${this._max}
				.maxMessage=${this._maxMessage}
				.startNode=${t}
				.allowedContentTypeIds=${this._allowedContentTypeUniques ?? ""}
				?readonly=${this.readonly}
				@change=${c(this, m, b)}
				.interactionMemories=${this._interactionMemories}
				@interaction-memories-change=${c(this, m, P)}>
			</umb-input-content>
			${c(this, m, w).call(this)}
		`;
  }
};
_ = /* @__PURE__ */ new WeakMap();
M = /* @__PURE__ */ new WeakMap();
f = /* @__PURE__ */ new WeakMap();
p = /* @__PURE__ */ new WeakMap();
m = /* @__PURE__ */ new WeakSet();
v = function(t, e) {
  const i = Number(t);
  return !isNaN(i) && i > 0 ? i : e;
};
T = async function() {
  if (this._rootUnique || !l(this, _)) return;
  const e = (await this.getContext(z))?.getAncestors(), [i, o] = e?.slice(-2).map((h) => h.unique) ?? [], r = await l(this, M).requestRoot(l(this, _), o, i);
  r && r.length > 0 && (this._rootUnique = r[0]);
};
b = function(t) {
  this.value = t.target.selection, this.dispatchEvent(new R());
};
C = async function() {
  await D(this, {
    color: "danger",
    headline: "#contentPicker_unsupportedRemove",
    content: "#defaultdialogs_confirmSure",
    confirmLabel: "#actions_remove"
  }), this.value = this.value?.filter((t) => t.type === this._rootEntityType), this._invalidData = void 0, this.readonly = !1;
};
P = async function(t) {
  const i = t.target.interactionMemories;
  i && i.length > 0 ? await l(this, p).saveMemoriesForPropertyEditor(i) : await l(this, p).deleteMemoriesForPropertyEditor();
};
w = function() {
  if (!this._invalidData?.length) return x;
  const t = Object.groupBy(this._invalidData, (o) => o.type), e = Object.keys(t).sort((o, r) => o.localeCompare(r)).map((o) => ({ key: o, items: t[o] })), i = (o) => o === E ? "content" : o;
  return d`
			<div id="messages">
				${k(
    e,
    (o) => o.key,
    (o) => d`
						<p>
							<umb-localize key="contentPicker_unsupportedHeadline" .args=${[o.key]}>
								<strong>Unsupported ${o.key} items</strong><br />
								The following content is no longer supported in this Editor.
							</umb-localize>
						</p>
						<umb-input-content readonly .selection=${o.items} .type=${i(o.key)}></umb-input-content>
						<p>
							<umb-localize key="contentPicker_unsupportedMessage">
								If you still require this content, please contact your administrator. Otherwise you can remove it.
							</umb-localize>
						</p>
						<uui-button
							color="danger"
							look="outline"
							label=${this.localize.term("contentPicker_unsupportedRemove")}
							@click=${c(this, m, C)}></uui-button>
					`
  )}
			</div>
		`;
};
n.styles = [
  q`
			#messages {
				color: var(--uui-color-danger-standalone);
			}
		`
];
s([
  I({ type: Boolean, reflect: !0 })
], n.prototype, "readonly", 2);
s([
  a()
], n.prototype, "_type", 2);
s([
  a()
], n.prototype, "_min", 2);
s([
  a()
], n.prototype, "_minMessage", 2);
s([
  a()
], n.prototype, "_max", 2);
s([
  a()
], n.prototype, "_maxMessage", 2);
s([
  a()
], n.prototype, "_allowedContentTypeUniques", 2);
s([
  a()
], n.prototype, "_rootUnique", 2);
s([
  a()
], n.prototype, "_rootEntityType", 2);
s([
  a()
], n.prototype, "_invalidData", 2);
s([
  a()
], n.prototype, "_interactionMemories", 2);
n = s([
  N("umb-property-editor-ui-content-picker")
], n);
export {
  n as UmbPropertyEditorUIContentPickerElement,
  n as element
};
//# sourceMappingURL=property-editor-ui-content-picker.element-Cx3pxP8i.js.map
