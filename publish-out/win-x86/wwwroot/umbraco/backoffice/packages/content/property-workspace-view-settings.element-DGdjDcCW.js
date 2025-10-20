import "@umbraco-cms/backoffice/workspace";
import "./paths-DIxbxVeb.js";
import { U as Z } from "./property-type-workspace.context-token-Cbb8UB1S.js";
import { html as r, nothing as p, css as H, state as u, query as Y, customElement as F } from "@umbraco-cms/backoffice/external/lit";
import { generateAlias as _ } from "@umbraco-cms/backoffice/utils";
import { umbBindToValidation as g } from "@umbraco-cms/backoffice/validation";
import { UmbLitElement as K, umbFocus as X } from "@umbraco-cms/backoffice/lit-element";
import { UmbTextStyles as j } from "@umbraco-cms/backoffice/style";
import { UMB_CONTENT_TYPE_WORKSPACE_CONTEXT as J } from "@umbraco-cms/backoffice/content-type";
var Q = Object.defineProperty, ee = Object.getOwnPropertyDescriptor, f = (e) => {
  throw TypeError(e);
}, s = (e, t, o, c) => {
  for (var l = c > 1 ? void 0 : c ? ee(t, o) : t, h = e.length - 1, m; h >= 0; h--)
    (m = e[h]) && (l = (c ? m(t, o, l) : m(l)) || l);
  return c && l && Q(t, o, l), l;
}, v = (e, t, o) => t.has(e) || f("Cannot " + o), te = (e, t, o) => (v(e, t, "read from private field"), t.get(e)), y = (e, t, o) => t.has(e) ? f("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, o), ae = (e, t, o, c) => (v(e, t, "write to private field"), t.set(e, o), o), i = (e, t, o) => (v(e, t, "access private method"), o), d, a, b, $, T, z, C, V, x, w, k, E, O, S, A, M, B, D, L, I, P, U, N, q, R, W, G;
let n = class extends K {
  constructor() {
    super(), y(this, a), y(this, d), this._customValidationOptions = [
      {
        name: this.localize.term("validation_validateNothing"),
        value: "!NOVALIDATION!",
        selected: !0
      },
      {
        name: this.localize.term("validation_validateAsEmail"),
        value: "[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+"
      },
      {
        name: this.localize.term("validation_validateAsNumber"),
        value: "^[0-9]*$"
      },
      {
        name: this.localize.term("validation_validateAsUrl"),
        value: "https?://[a-zA-Z0-9-.]+\\.[a-zA-Z]{2,}"
      },
      {
        name: this.localize.term("validation_enterCustomValidation"),
        value: ".+"
      }
    ], this._aliasLocked = !0, this._autoGenerateAlias = !0, this.consumeContext(Z, (e) => {
      ae(this, d, e), this.observe(
        e?.data,
        (t) => {
          !this._data && t?.alias && (this._autoGenerateAlias = !1), this._data = t;
        },
        "observeData"
      );
    }), this.consumeContext(J, (e) => {
      this.observe(
        e?.variesByCulture,
        (t) => this._contentTypeVariesByCulture = t
      ), this.observe(
        e?.variesBySegment,
        (t) => this._contentTypeVariesBySegment = t
      ), this._entityType = e?.getEntityType();
    }).passContextAliasMatches();
  }
  updateValue(e) {
    te(this, d)?.updateData(e);
  }
  render() {
    if (this._data)
      return r`
			<uui-box class="uui-text">
				<div class="container">
					<umb-form-validation-message>
						<uui-input
							id="name-input"
							data-mark="input:entity-name"
							name="name"
							label=${this.localize.term("placeholders_entername")}
							placeholder=${this.localize.term("placeholders_entername")}
							.value=${this._data?.name}
							@input=${i(this, a, b)}
							required
							${g(this, "$.name")}
							${X()}>
							<!-- TODO: validation for bad characters -->
						</uui-input>
					</umb-form-validation-message>
					<umb-form-validation-message>
						<uui-input-lock
							id="alias-input"
							name="alias"
							label=${this.localize.term("placeholders_enterAlias")}
							placeholder=${this.localize.term("placeholders_enterAlias")}
							.value=${this._data?.alias}
							?locked=${this._aliasLocked}
							required
							${g(this, "$.alias")}
							@input=${i(this, a, $)}
							@lock-change=${i(this, a, S)}>
						</uui-input-lock>
					</umb-form-validation-message>
					<uui-textarea
						id="description-input"
						name="description"
						@input=${i(this, a, T)}
						label=${this.localize.term("placeholders_enterDescription")}
						placeholder=${this.localize.term("placeholders_enterDescription")}
						.value=${this._data?.description}
						auto-height></uui-textarea>
				</div>
				<umb-form-validation-message>
					<umb-data-type-flow-input
						.value=${this._data?.dataType?.unique ?? ""}
						@change=${i(this, a, z)}
						required
						${g(this, "$.dataType.unique")}></umb-data-type-flow-input>
				</umb-form-validation-message>
				<hr />
				<div class="container">
					<b><umb-localize key="validation_validation">Validation</umb-localize></b>
					${i(this, a, N).call(this)}
					<p style="margin-bottom: 0">
						<umb-localize key="validation_customValidation">Custom validation</umb-localize>
					</p>
					${i(this, a, q).call(this)}
				</div>
				${i(this, a, R).call(this)}
				<umb-property-layout label="#contentTypeEditor_displaySettingsHeadline" orientation="vertical">
					<div id="appearances" slot="editor">${i(this, a, P).call(this)} ${i(this, a, U).call(this)}</div>
				</umb-property-layout>

				${i(this, a, I).call(this)}
			</uui-box>
		`;
  }
};
d = /* @__PURE__ */ new WeakMap();
a = /* @__PURE__ */ new WeakSet();
b = function(e) {
  this.updateValue({ name: e.target.value.toString() }), this._aliasLocked && this._autoGenerateAlias && this.updateValue({ alias: _(this._data?.name ?? "") });
};
$ = function() {
  const e = _(this._aliasInput.value.toString());
  this.updateValue({ alias: e });
};
T = function(e) {
  this.updateValue({ description: e.target.value.toString() });
};
z = function(e) {
  const t = e.target.value.toString();
  this.updateValue({ dataType: { unique: t } });
};
C = function(e) {
  const t = e.target.checked;
  this.updateValue({
    validation: { ...this._data?.validation, mandatory: t }
  });
};
V = function(e) {
  const t = e.target.value.toString();
  this.updateValue({
    validation: { ...this._data?.validation, mandatory: this._data?.validation.mandatory ?? !1, mandatoryMessage: t }
  });
};
x = function() {
  this._data?.appearance?.labelOnTop === !0 && this.updateValue({
    appearance: { ...this._data?.appearance, labelOnTop: !1 }
  });
};
w = function() {
  this._data?.appearance?.labelOnTop !== !0 && this.updateValue({
    appearance: { ...this._data?.appearance, labelOnTop: !0 }
  });
};
k = function(e) {
  const t = this._data?.visibility?.memberCanEdit ?? !1;
  this.updateValue({ visibility: { memberCanView: e.target.checked, memberCanEdit: t } });
};
E = function(e) {
  const t = this._data?.visibility?.memberCanView ?? !1;
  this.updateValue({ visibility: { memberCanEdit: e.target.checked, memberCanView: t } });
};
O = function(e) {
  this.updateValue({ isSensitive: e.target.checked });
};
S = function() {
  this._aliasLocked = !this._aliasLocked, this._aliasLocked && !this._data?.alias ? this._autoGenerateAlias = !0 : this._autoGenerateAlias = !1;
};
A = function(e) {
  const t = e.target.value.toString(), o = t !== "!NOVALIDATION!" ? t : null;
  this.updateValue({
    validation: { ...this._data?.validation, mandatory: this._data?.validation.mandatory ?? !1, regEx: o }
  });
};
M = function(e) {
  const t = e.target.value.toString(), o = t !== "!NOVALIDATION!" ? t : null;
  this._customValidationOptions.find((l) => (l.selected = l.value === t, l.selected)) === void 0 && (this._customValidationOptions[4].selected = !0, this.requestUpdate("_customValidationOptions")), this.updateValue({
    validation: { ...this._data?.validation, mandatory: this._data?.validation.mandatory ?? !1, regEx: o }
  });
};
B = function(e) {
  const t = e.target.value.toString();
  this.updateValue({
    validation: { ...this._data?.validation, mandatory: this._data?.validation.mandatory ?? !1, regExMessage: t }
  });
};
D = function(e) {
  const t = e.target.checked;
  this.updateValue({ variesByCulture: !t });
};
L = function(e) {
  const t = e.target.checked;
  this.updateValue({ variesBySegment: !t });
};
I = function() {
  return this._entityType !== "member-type" ? p : r` <hr />
			<div class="container">
				<b style="margin-bottom: var(--uui-size-space-3)">
					<umb-localize key="general_options">Options</umb-localize>
				</b>
				<div class="options">
					<uui-toggle
						?checked=${this._data?.visibility?.memberCanView}
						@change=${i(this, a, k)}
						label=${this.localize.term("contentTypeEditor_showOnMemberProfile")}></uui-toggle>
					<small>
						<umb-localize key="contentTypeEditor_showOnMemberProfileDescription">
							Allow this property value to be displayed on the member profile page
						</umb-localize>
					</small>

					<uui-toggle
						?checked=${this._data?.visibility?.memberCanEdit}
						@change=${i(this, a, E)}
						label=${this.localize.term("contentTypeEditor_memberCanEdit")}></uui-toggle>
					<small>
						<umb-localize key="contentTypeEditor_memberCanEditDescription">
							Allow this property value to be edited by the member on their profile page
						</umb-localize>
					</small>

					<uui-toggle
						?checked=${this._data?.isSensitive}
						@change=${i(this, a, O)}
						label=${this.localize.term("contentTypeEditor_isSensitiveData")}></uui-toggle>
					<small>
						<umb-localize key="contentTypeEditor_isSensitiveDataDescription">
							Hide this property value from content editors that don't have access to view sensitive information
						</umb-localize>
					</small>
				</div>
			</div>`;
};
P = function() {
  return r`<button
			type="button"
			@click=${i(this, a, x)}
			class="appearance left ${this._data?.appearance?.labelOnTop ? "" : "selected"}">
			<svg width="200" height="48" viewBox="0 0 200 60" fill="none" xmlns="http://www.w3.org/2000/svg">
				<rect width="94" height="14" rx="6" fill="currentColor" />
				<rect y="22" width="64" height="9" rx="4" fill="currentColor" fill-opacity="0.4" />
				<rect x="106" width="94" height="60" rx="5" fill="currentColor" fill-opacity="0.4" />
			</svg>
			<label class="appearance-label">
				<umb-localize key="contentTypeEditor_displaySettingsLabelOnLeft">Label to the left</umb-localize>
			</label>
		</button>`;
};
U = function() {
  return r`
			<button
				type="button"
				@click=${i(this, a, w)}
				class="appearance top ${this._data?.appearance?.labelOnTop ? "selected" : ""}">
				<svg width="140" height="48" viewBox="0 0 140 60" fill="none" xmlns="http://www.w3.org/2000/svg">
					<rect width="90" height="14" rx="6" fill="currentColor" />
					<rect y="22" width="64" height="9" rx="4" fill="currentColor" fill-opacity="0.4" />
					<rect y="42" width="140" height="36" rx="5" fill="currentColor" fill-opacity="0.4" />
				</svg>
				<label class="appearance-label">
					<umb-localize key="contentTypeEditor_displaySettingsLabelOnTop">Label above (full-width)</umb-localize>
				</label>
			</button>
		`;
};
N = function() {
  return r`<div style="display: flex; justify-content: space-between">
				<label for="mandatory">
					<umb-localize key="validation_fieldIsMandatory">Field is mandatory</umb-localize>
				</label>
				<uui-toggle
					@change=${i(this, a, C)}
					id="mandatory"
					.checked=${this._data?.validation?.mandatory ?? !1}
					slot="editor"></uui-toggle>
			</div>
			${this._data?.validation?.mandatory ? r`<uui-input
						name="mandatory-message"
						value=${this._data.validation?.mandatoryMessage ?? ""}
						@change=${i(this, a, V)}
						style="margin-top: var(--uui-size-space-1)"
						id="mandatory-message"
						placeholder=${this.localize.term("validation_mandatoryMessage")}
						label=${this.localize.term("validation_mandatoryMessage")}></uui-input>` : ""}`;
};
q = function() {
  return r`<uui-select
				style="margin-top: var(--uui-size-space-1)"
				@change=${i(this, a, A)}
				.options=${this._customValidationOptions}></uui-select>

			${this._data?.validation?.regEx !== null ? r`
						<uui-input
							name="pattern"
							style="margin-bottom: var(--uui-size-space-1); margin-top: var(--uui-size-space-5);"
							@change=${i(this, a, M)}
							placeholder=${this.localize.term("validation_validationRegExp")}
							label=${this.localize.term("validation_validationRegExp")}
							.value=${this._data?.validation?.regEx ?? ""}></uui-input>
						<uui-textarea
							name="pattern-message"
							@change=${i(this, a, B)}
							placeholder=${this.localize.term("validation_validationRegExpMessage")}
							label=${this.localize.term("validation_validationRegExpMessage")}
							.value=${this._data?.validation?.regExMessage ?? ""}></uui-textarea>
					` : p} `;
};
R = function() {
  return this._contentTypeVariesByCulture || this._contentTypeVariesBySegment ? r` <umb-property-layout label="#contentTypeEditor_variantsHeading" orientation="vertical">
					<umb-stack slot="editor" look="compact">
						${this._contentTypeVariesByCulture ? i(this, a, W).call(this) : p}
						${this._contentTypeVariesBySegment ? i(this, a, G).call(this) : p}
					</umb-stack>
				</umb-property-layout>` : "";
};
W = function() {
  return r`
			<div>
				<uui-toggle
					@change=${i(this, a, D)}
					.checked=${!(this._data?.variesByCulture ?? !1)}
					label="Shared across cultures"></uui-toggle>
			</div>
		`;
};
G = function() {
  return r`
			<div>
				<uui-toggle
					@change=${i(this, a, L)}
					.checked=${!(this._data?.variesBySegment ?? !1)}
					label="Shared across segments"></uui-toggle>
			</div>
		`;
};
n.styles = [
  j,
  H`
			:host {
				display: block;
				padding: var(--uui-size-layout-1);
			}
			#alias-input,
			#label-input,
			#description-input {
				width: 100%;
			}

			#alias-input {
				border-color: transparent;
				background: var(--uui-color-surface);
			}

			#label-input {
				font-weight: bold; /* TODO: UUI Input does not support bold text yet */
				--uui-input-border-color: transparent;
			}
			#label-input input {
				font-weight: bold;
				--uui-input-border-color: transparent;
			}

			#description-input {
				--uui-textarea-border-color: transparent;
				font-weight: 0.5rem; /* TODO: Cant change font size of UUI textarea yet */
			}

			#appearances {
				display: flex;
				gap: var(--uui-size-layout-1);
				max-width: 350px;
				margin: 0 auto;
			}
			.appearance {
				position: relative;
				display: flex;
				border: 1px solid var(--uui-color-border-standalone);
				background-color: transparent;
				padding: var(--uui-size-space-4) var(--uui-size-space-5);
				align-items: center;
				border-radius: var(--uui-border-radius);
				opacity: 0.8;
				flex-direction: column;
				justify-content: space-between;
				gap: var(--uui-size-space-3);
			}
			.appearance-label {
				font-size: 0.8rem;
				line-height: 1;
				font-weight: bold;
				pointer-events: none;
			}
			.appearance.left {
				flex-grow: 1;
			}
			.appearance.top {
				flex-shrink: 1;
			}
			.appearance svg {
				display: flex;
				width: 100%;
				color: var(--uui-color-text);
			}
			.appearance:not(.selected):hover {
				border-color: var(--uui-color-border-emphasis);
				cursor: pointer;
				opacity: 1;
			}
			.appearance.selected {
				background-color: var(--uui-color-surface);
				border-color: var(--uui-color-selected);
				color: var(--uui-color-selected);
				opacity: 1;
			}
			.appearance.selected svg {
				color: var(--uui-color-selected);
			}
			.appearance.selected::after {
				content: '';
				position: absolute;
				inset: 0;
				border-radius: 6px;
				opacity: 0.1;
				background-color: var(--uui-color-selected);
			}
			hr {
				border: none;
				border-top: 1px solid var(--uui-color-divider);
				margin-top: var(--uui-size-space-6);
				margin-bottom: var(--uui-size-space-5);
			}
			uui-input {
				width: 100%;
			}
			uui-input:focus-within {
				z-index: 1;
			}
			uui-input-lock:focus-within {
				z-index: 1;
			}
			.container {
				display: flex;
				flex-direction: column;
			}
			uui-form,
			form {
				display: block;
				height: 100%;
			}
		`
];
s([
  u()
], n.prototype, "_customValidationOptions", 2);
s([
  u()
], n.prototype, "_data", 2);
s([
  u()
], n.prototype, "_aliasLocked", 2);
s([
  u()
], n.prototype, "_autoGenerateAlias", 2);
s([
  u()
], n.prototype, "_contentTypeVariesByCulture", 2);
s([
  u()
], n.prototype, "_contentTypeVariesBySegment", 2);
s([
  Y("#alias-input")
], n.prototype, "_aliasInput", 2);
s([
  u()
], n.prototype, "_entityType", 2);
n = s([
  F("umb-property-type-workspace-view-settings")
], n);
const pe = n;
export {
  n as UmbPropertyTypeWorkspaceViewSettingsElement,
  pe as default
};
//# sourceMappingURL=property-workspace-view-settings.element-DGdjDcCW.js.map
