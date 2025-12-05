import { f as q } from "./index-D0fxHn_d.js";
import { UmbTextStyles as W } from "@umbraco-cms/backoffice/style";
import { nothing as I, html as p, ifDefined as T, repeat as Y, css as C, property as g, state as n, query as G, customElement as U } from "@umbraco-cms/backoffice/external/lit";
import { UMB_MODAL_MANAGER_CONTEXT as K, UmbModalBaseElement as X } from "@umbraco-cms/backoffice/modal";
import { UmbDocumentTypeDetailRepository as Z, UMB_DOCUMENT_TYPE_PICKER_MODAL as H } from "@umbraco-cms/backoffice/document-type";
import { UmbChangeEvent as J } from "@umbraco-cms/backoffice/event";
import { UmbLitElement as Q } from "@umbraco-cms/backoffice/lit-element";
import { UmbMediaTypeDetailRepository as j, UMB_MEDIA_TYPE_PICKER_MODAL as ee } from "@umbraco-cms/backoffice/media-type";
import { UmbFormControlMixin as te, UMB_VALIDATION_EMPTY_LOCALIZATION_KEY as ie, UmbValidationContext as ae, umbBindToValidation as oe } from "@umbraco-cms/backoffice/validation";
var le = Object.defineProperty, se = Object.getOwnPropertyDescriptor, k = (e) => {
  throw TypeError(e);
}, s = (e, t, i, a) => {
  for (var o = a > 1 ? void 0 : a ? se(t, i) : t, c = e.length - 1, d; c >= 0; c--)
    (d = e[c]) && (o = (a ? d(t, i, o) : d(o)) || o);
  return a && o && le(t, i, o), o;
}, $ = (e, t, i) => t.has(e) || k("Cannot " + i), u = (e, t, i) => ($(e, t, "read from private field"), t.get(e)), v = (e, t, i) => t.has(e) ? k("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), z = (e, t, i, a) => ($(e, t, "write to private field"), t.set(e, i), i), y = (e, t, i) => ($(e, t, "access private method"), i), _, E, w, h, m, F, B, P, O, S;
let l = class extends te(Q) {
  constructor() {
    super(), v(this, m), v(this, _), this.requiredMessage = ie, this.excludeMediaType = !1, v(this, E, new Z(this)), v(this, w, new j(this)), v(this, h), this._customFields = [], this._systemFields = [
      { alias: "sortOrder", name: this.localize.term("general_sort") },
      { alias: "updateDate", name: this.localize.term("content_updateDate") },
      { alias: "updater", name: this.localize.term("content_updatedBy") },
      { alias: "createDate", name: this.localize.term("content_createDate") },
      { alias: "creator", name: this.localize.term("content_createBy") },
      { alias: "published", name: this.localize.term("content_isPublished") },
      { alias: "contentTypeAlias", name: this.localize.term("content_documentType") }
    ], this.consumeContext(K, (e) => {
      z(this, h, e);
    });
  }
  get required() {
  }
  set required(e) {
    e === !0 ? u(this, _) ?? z(this, _, this.addValidator(
      "valueMissing",
      () => this.requiredMessage,
      () => !this._value
    )) : u(this, _) && this.removeValidator(u(this, _));
  }
  set value(e) {
    const t = this._value;
    this._value = e, this.requestUpdate("value", t), this.dispatchEvent(new J());
  }
  get value() {
    return this._value;
  }
  render() {
    return p`
			<uui-combobox id="preview">
				<uui-combobox-list @change=${y(this, m, P)}>
					<uui-combobox-list-option value="system">
						<strong>${this.localize.term("template_systemFields")}</strong>
					</uui-combobox-list-option>
					<uui-combobox-list-option value="document-type" display-value=${this.localize.term("content_documentType")}>
						<strong> ${this.localize.term("content_documentType")} </strong>
						${this.localize.term("defaultdialogs_treepicker")}
					</uui-combobox-list-option>
					${this.excludeMediaType ? I : p`<uui-combobox-list-option
								value="media-type"
								display-value=${this.localize.term("content_mediatype")}>
								<strong> ${this.localize.term("content_mediatype")} </strong>
								${this.localize.term("defaultdialogs_treepicker")}
							</uui-combobox-list-option>`}
				</uui-combobox-list>
			</uui-combobox>
			${y(this, m, S).call(this)}
		`;
  }
};
_ = /* @__PURE__ */ new WeakMap();
E = /* @__PURE__ */ new WeakMap();
w = /* @__PURE__ */ new WeakMap();
h = /* @__PURE__ */ new WeakMap();
m = /* @__PURE__ */ new WeakSet();
F = async function() {
  if (!u(this, h)) return;
  const i = (await u(this, h).open(this, H, {
    data: {
      hideTreeRoot: !0,
      multiple: !1
    }
  }).onSubmit()).selection[0] ?? "", { data: a } = await u(this, E).requestByUnique(i);
  a && (this._unique = a.unique, this._uniqueName = a.name, this._customFields = a.properties);
};
B = async function() {
  if (!u(this, h)) return;
  const i = (await u(this, h).open(this, ee, {
    data: {
      hideTreeRoot: !0,
      multiple: !1
    }
  }).onSubmit()).selection[0] ?? "", { data: a } = await u(this, w).requestByUnique(i);
  a && (this._unique = a.unique, this._uniqueName = a.name, this._customFields = a.properties);
};
P = function(e) {
  switch (this._type = e.composedPath()[0].value, this.value = void 0, this._valueElement && (this._valueElement.value = ""), this._type) {
    case "document-type":
      y(this, m, F).call(this);
      break;
    case "media-type":
      y(this, m, B).call(this);
      break;
    default:
      this._uniqueName = "", this._unique = "", this._customFields = this._systemFields;
      break;
  }
};
O = function(e) {
  e.stopPropagation();
  const t = e.composedPath()[0].value;
  this.value = this._customFields.find((i) => i.alias === t);
};
S = function() {
  if (!(this._type !== "system" && !this._unique))
    return p`
			<strong>${this.localize.string(this._uniqueName ?? "")}</strong>
			<uui-combobox id="value" value=${T(this.value?.alias)} @change=${y(this, m, O)}>
				<uui-combobox-list>
					${Y(
      this._customFields,
      (e) => e.alias,
      (e) => p`<uui-combobox-list-option value=${T(e.alias)}>${e.alias}</uui-combobox-list-option>`
    )}
				</uui-combobox-list>
			</uui-combobox>
		`;
};
l.styles = [
  C`
			uui-combobox {
				width: 100%;
			}
			strong {
				display: block;
			}
			uui-combobox-list-option {
				padding: calc(var(--uui-size-2, 6px) + 1px);
			}
		`
];
s([
  g({ type: Boolean })
], l.prototype, "required", 1);
s([
  g({ type: String })
], l.prototype, "requiredMessage", 2);
s([
  g({ type: Boolean, attribute: "exclude-media-type", reflect: !0 })
], l.prototype, "excludeMediaType", 2);
s([
  g({ type: Object })
], l.prototype, "value", 1);
s([
  n()
], l.prototype, "_type", 2);
s([
  n()
], l.prototype, "_uniqueName", 2);
s([
  n()
], l.prototype, "_unique", 2);
s([
  G("#value")
], l.prototype, "_valueElement", 2);
s([
  n()
], l.prototype, "_customFields", 2);
l = s([
  U("umb-template-field-dropdown-list")
], l);
var ue = Object.defineProperty, re = Object.getOwnPropertyDescriptor, V = (e) => {
  throw TypeError(e);
}, b = (e, t, i, a) => {
  for (var o = a > 1 ? void 0 : a ? re(t, i) : t, c = e.length - 1, d; c >= 0; c--)
    (d = e[c]) && (o = (a ? d(t, i, o) : d(o)) || o);
  return a && o && ue(t, i, o), o;
}, A = (e, t, i) => t.has(e) || V("Cannot " + i), ne = (e, t, i) => (A(e, t, "read from private field"), i ? i.call(e) : t.get(e)), D = (e, t, i) => t.has(e) ? V("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), x = (e, t, i) => (A(e, t, "access private method"), i), M, f, N, R, L;
let r = class extends X {
  constructor() {
    super(...arguments), D(this, f), D(this, M, new ae(this)), this._haveDefault = !1, this._recursive = !1;
  }
  render() {
    return p`
			<umb-body-layout headline=${this.localize.term("template_insert")}>
				<uui-box>
					<div>
						<umb-property-layout orientation="vertical" label=${this.localize.term("templateEditor_chooseField")}>
							<umb-template-field-dropdown-list
								slot="editor"
								required
								${oe(this)}
								@change=${x(this, f, L)}
								exclude-media-type></umb-template-field-dropdown-list>
						</umb-property-layout>

						<uui-label for="page-field-default-value">
							<umb-localize key="templateEditor_defaultValue">Default value</umb-localize>
						</uui-label>
						${this._haveDefault ? p`<uui-input
									id="page-field-default-value"
									@change=${(e) => this._default = e.target.value}
									label=${this.localize.term("templateEditor_defaultValue")}></uui-input>` : p`<uui-button
									label=${this.localize.term("templateEditor_addDefaultValue")}
									look="placeholder"
									@click=${() => this._haveDefault = !0}></uui-button>`}

						<uui-label for="recursive"><umb-localize key="templateEditor_recursive">Recursive</umb-localize></uui-label>
						<uui-checkbox
							id="recursive"
							label=${this.localize.term("templateEditor_recursiveDescr")}
							@change=${(e) => this._recursive = e.target.checked}
							?disabled=${!this._field}></uui-checkbox>

						<uui-label><umb-localize key="templateEditor_outputSample">Output sample</umb-localize></uui-label>
						<umb-code-block style="max-height:500px;" language="C#" copy
							>${this._field ? q(this._field, this._default, this._recursive) : ""}</umb-code-block
						>
					</div>
				</uui-box>
				<uui-button
					slot="actions"
					@click=${x(this, f, N)}
					look="secondary"
					label=${this.localize.term("general_close")}></uui-button>
				<uui-button
					slot="actions"
					@click=${x(this, f, R)}
					color="positive"
					look="primary"
					.state=${this._submitButtonState}
					label=${this.localize.term("general_submit")}></uui-button>
			</umb-body-layout>
		`;
  }
};
M = /* @__PURE__ */ new WeakMap();
f = /* @__PURE__ */ new WeakSet();
N = function() {
  this.modalContext?.reject();
};
R = async function() {
  this._submitButtonState = "waiting";
  try {
    await ne(this, M).validate(), this._submitButtonState = "success", this.value = { output: q(this._field, this._default, this._recursive) }, this.modalContext?.submit();
  } catch {
    this._submitButtonState = "failed";
  }
};
L = function(e) {
  this._field = e.target.value?.alias;
};
r.styles = [
  W,
  C`
			uui-box > div {
				display: flex;
				flex-direction: column;
				gap: var(--uui-size-space-2);
			}

			uui-label:not(:first-child) {
				margin-top: var(--uui-size-space-6);
			}
		`
];
b([
  n()
], r.prototype, "_field", 2);
b([
  n()
], r.prototype, "_haveDefault", 2);
b([
  n()
], r.prototype, "_default", 2);
b([
  n()
], r.prototype, "_recursive", 2);
b([
  n()
], r.prototype, "_submitButtonState", 2);
r = b([
  U("umb-templating-page-field-builder-modal")
], r);
const ye = r;
export {
  r as UmbTemplatingPageFieldBuilderModalElement,
  ye as default
};
//# sourceMappingURL=templating-page-field-builder-modal.element-uWRtSSXU.js.map
