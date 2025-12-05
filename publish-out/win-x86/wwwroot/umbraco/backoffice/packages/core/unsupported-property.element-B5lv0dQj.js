import { css as B, property as h, customElement as M, when as nt, html as v, state as c, nothing as j } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as D } from "@umbraco-cms/backoffice/lit-element";
import { UmbTextStyles as z } from "@umbraco-cms/backoffice/style";
import "@umbraco-cms/backoffice/ufm";
import { UmbContextToken as k } from "@umbraco-cms/backoffice/context-api";
import { UmbContextBase as H } from "@umbraco-cms/backoffice/class-api";
import { UmbStringState as g, UmbArrayState as J, UmbBooleanState as lt, UmbObjectState as Y, UmbDeepState as ht, UmbClassState as G, UmbBasicState as X } from "@umbraco-cms/backoffice/observable-api";
import { UmbVariantId as pt, UmbVariantContext as dt } from "@umbraco-cms/backoffice/variant";
import { UmbChangeEvent as ut } from "@umbraco-cms/backoffice/event";
import { UmbPropertyEditorConfigCollection as vt, UMB_MISSING_PROPERTY_EDITOR_UI_UI_ALIAS as F } from "@umbraco-cms/backoffice/property-editor";
import { UmbReadOnlyStateManager as ct } from "@umbraco-cms/backoffice/utils";
import { createExtensionElement as yt, UmbExtensionsApiInitializer as mt } from "@umbraco-cms/backoffice/extension-api";
import { umbExtensionsRegistry as Q } from "@umbraco-cms/backoffice/extension-registry";
import { UmbObserveValidationStateController as _t, UmbFormControlValidator as bt, UmbBindServerValidationToFormControl as gt } from "@umbraco-cms/backoffice/validation";
import { UMB_MARK_ATTRIBUTE_NAME as ft } from "@umbraco-cms/backoffice/const";
import { UmbRoutePathAddendumContext as Et } from "@umbraco-cms/backoffice/router";
var Ot = Object.defineProperty, Vt = Object.getOwnPropertyDescriptor, Z = (t) => {
  throw TypeError(t);
}, b = (t, e, i, r) => {
  for (var s = r > 1 ? void 0 : r ? Vt(e, i) : e, p = t.length - 1, d; p >= 0; p--)
    (d = t[p]) && (s = (r ? d(e, i, s) : d(s)) || s);
  return r && s && Ot(e, i, s), s;
}, wt = (t, e, i) => e.has(t) || Z("Cannot " + i), Pt = (t, e, i) => e.has(t) ? Z("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), Ut = (t, e, i) => (wt(t, e, "access private method"), i), I, tt;
let m = class extends D {
  constructor() {
    super(...arguments), Pt(this, I), this.alias = "", this.label = "", this.orientation = "horizontal", this.description = "";
  }
  render() {
    return v`
			<div id="headerColumn">
				<uui-label id="label" title=${this.alias} ?required=${this.mandatory}>
					${this.localize.string(this.label)}
					${nt(
      this.invalid,
      () => v`<div id="invalid-badge"><uui-badge color="invalid" attention>!</uui-badge></div>`
    )}
				</uui-label>
				<slot name="action-menu"></slot>
				${Ut(this, I, tt).call(this)}
				<slot name="description"></slot>
			</div>
			<div id="editorColumn">
				<umb-form-validation-message>
					<slot name="editor"></slot>
				</umb-form-validation-message>
			</div>
		`;
  }
};
I = /* @__PURE__ */ new WeakSet();
tt = function() {
  if (!this.description) return;
  const t = { alias: this.alias, label: this.label, description: this.description };
  return v`<umb-ufm-render id="description" .markdown=${this.description} .value=${t}></umb-ufm-render>`;
};
m.styles = [
  z,
  B`
			:host {
				display: grid;
				grid-template-columns: 200px minmax(0, 1fr);
				column-gap: var(--uui-size-layout-2);
				border-bottom: 1px solid var(--uui-color-divider);
				padding: var(--uui-size-layout-1) 0;
			}

			:host(:last-of-type) {
				border-bottom: none;
			}

			:host > div {
				grid-column: span 2;
			}
			/*@container (width > 600px) {*/
			:host(:not([orientation='vertical'])) > div {
				grid-column: span 1;
			}
			/*}*/

			#headerColumn {
				position: relative;
				height: min-content;
				top: var(--umb-property-layout-header-top);
			}
			/*@container (width > 600px) {*/
			:host(:not([orientation='vertical'])) #headerColumn {
				position: sticky;
				top: var(--umb-property-layout-header-top, calc(var(--uui-size-space-2) * -1));
			}
			/*}*/

			:host {
				/* TODO: Temp solution to not get a yellow asterisk when invalid. */
				--umb-temp-uui-color-invalid: var(--uui-color-invalid);
			}

			#label {
				position: relative;
				word-break: break-word;
				/* TODO: Temp solution to not get a yellow asterisk when invalid. */
				--uui-color-invalid: var(--uui-color-danger);
			}
			#invalid-badge {
				display: inline-block;
				position: relative;
				width: 18px;
				height: 1em;
				margin-right: 6px;
			}
			uui-badge {
				//height: var(--uui-color-invalid);
				background-color: var(--umb-temp-uui-color-invalid);
				color: var(--uui-color-invalid-contrast);
			}

			#description {
				color: var(--uui-color-text-alt);
			}

			#editorColumn {
				margin-top: var(--uui-size-space-3);
			}
			/*@container (width > 600px) {*/
			:host(:not([orientation='vertical'])) #editorColumn {
				margin-top: 0;
			}
			/*}*/
		`
];
b([
  h({ type: String })
], m.prototype, "alias", 2);
b([
  h({ type: String })
], m.prototype, "label", 2);
b([
  h({ type: String, reflect: !0 })
], m.prototype, "orientation", 2);
b([
  h({ type: String })
], m.prototype, "description", 2);
b([
  h({ type: Boolean, reflect: !0 })
], m.prototype, "invalid", 2);
b([
  h({ type: Boolean, reflect: !0 })
], m.prototype, "mandatory", 2);
m = b([
  M("umb-property-layout")
], m);
const L = new k("UmbPropertyDatasetContext"), Ct = (t) => "setName" in t, Zt = new k(L.toString(), void 0, Ct);
class St extends H {
  // variant id for a specific property?
  constructor(e) {
    super(e, L), this.#e = new g(void 0), this.name = this.#e.asObservable(), this.#t = new J([], (i) => i.alias), this.properties = this.#t.asObservable(), this.values = this.properties, this.#r = new lt(!1), this.readOnly = this.#r.asObservable(), this.#a = pt.CreateInvariant(), this.#s = new dt(this).inherit(), this.#s.setVariantId(this.getVariantId());
  }
  #e;
  #t;
  #r;
  #a;
  #s;
  getEntityType() {
    return this._entityType;
  }
  getUnique() {
    return this._unique;
  }
  getName() {
    return this.#e.getValue();
  }
  setName(e) {
    this.#e.setValue(e);
  }
  getVariantId() {
    return this.#a;
  }
  /**
   * @function propertyValueByAlias
   * @param {string} propertyAlias - the alias to observe
   * @returns {Promise<Observable<ReturnType | undefined> | undefined>} - an Observable for the value of this property.
   */
  async propertyValueByAlias(e) {
    return this.#t.asObservablePart((i) => {
      const r = i.find((s) => s.alias === e);
      return r ? r.value : void 0;
    });
  }
  /**
   * @function setPropertyValue
   * @param {string} alias - The alias to set this value for
   * @param {PromiseLike<unknown>} value - value can be a promise resolving into the actual value or the raw value it self.
   * @description Set the value of this property.
   */
  setPropertyValue(e, i) {
    this.#t.appendOne({ alias: e, value: i });
  }
  /**
   * @deprecated Use `getProperties`
   * @returns {Array<UmbPropertyValueData>} - Array of properties as objects with alias and value properties.
   */
  getValues() {
    return this.#t.getValue();
  }
  /**
   * @param {Array<UmbPropertyValueData>} properties - Properties array with alias and value properties.
   * @deprecated Use `setProperties`
   */
  setValues(e) {
    this.#t.setValue(e);
  }
  /**
   * @returns {Array<UmbPropertyValueData>} - Array of properties as objects with alias and value properties.
   */
  async getProperties() {
    return this.#t.getValue();
  }
  /**
   * @param {Array<UmbPropertyValueData>} properties - Properties array with alias and value properties.
   */
  setProperties(e) {
    this.#t.setValue(e);
  }
  /**
   * Gets the read-only state of the current variant culture.
   * @returns {*}  {boolean}
   */
  getReadOnly() {
    return this.#r.getValue();
  }
}
var At = Object.defineProperty, xt = Object.getOwnPropertyDescriptor, et = (t) => {
  throw TypeError(t);
}, W = (t, e, i, r) => {
  for (var s = r > 1 ? void 0 : r ? xt(e, i) : e, p = t.length - 1, d; p >= 0; p--)
    (d = t[p]) && (s = (r ? d(e, i, s) : d(s)) || s);
  return r && s && At(e, i, s), s;
}, it = (t, e, i) => e.has(t) || et("Cannot " + i), T = (t, e, i) => (it(t, e, "read from private field"), i ? i.call(t) : e.get(t)), K = (t, e, i) => e.has(t) ? et("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), _ = (t, e, i, r) => (it(t, e, "write to private field"), e.set(t, i), i), u, P;
let x = class extends D {
  constructor() {
    super(), K(this, u, !1), K(this, P, () => {
      T(this, u) ? this.dispatchEvent(new ut()) : _(this, u, !0);
    }), this.addEventListener("change", (t) => {
      t.target !== this && t.stopImmediatePropagation();
    }), this.context = new St(this), _(this, u, !1), this.observe(this.context.name, T(this, P)), _(this, u, !1), this.observe(this.context.properties, T(this, P));
  }
  /**
   * The value of the dataset.
   * @returns {Array<UmbPropertyValueData>} - The value of the dataset
   * @example
   * ```ts
   * const dataSet = [
   * 	{
   * 		alias: 'testAlias',
   * 		value: 'value as a string',
   * 	},
   *  {
   * 		alias: 'anotherAlias',
   * 		value: 123,
   * 	}
   * ]
   *
   * html`
   * <umb-property-dataset .value="${dataSet}">
   * 	<umb-property
   * 		label="My label for this property"
   * 		description="The description to show on the property"
   * 		alias="testAlias"
   * 		property-editor-ui-alias="Umb.PropertyEditorUi.TextBox"
   * 		.config=${...}>
   * 	</umb-property>
   * </umb-property-dataset>
   * `
   * ```
   */
  set value(t) {
    _(this, u, !1), this.context.setValues(t), _(this, u, !0);
  }
  get value() {
    return this.context.getValues();
  }
  /**
   * The name of the dataset, this name varies depending on the use-case. But this is either
   * @property name
   * @type {string}
   * @returns {string}
   * @example
   * ```ts
   * html`
   * <umb-property-dataset name="My variant name">
   * 	...
   * </umb-property-dataset>
   * `
   */
  set name(t) {
    _(this, u, !1), this.context.setName(t), _(this, u, !0);
  }
  get name() {
    return this.context.getName();
  }
  render() {
    return v`<slot></slot>`;
  }
};
u = /* @__PURE__ */ new WeakMap();
P = /* @__PURE__ */ new WeakMap();
W([
  h({ attribute: !1 })
], x.prototype, "value", 1);
W([
  h({ attribute: !1 })
], x.prototype, "name", 1);
x = W([
  M("umb-property-dataset")
], x);
class Mt extends H {
  constructor(e) {
    super(e, Dt), this.#e = new g(void 0), this.alias = this.#e.asObservable(), this.#t = new g(void 0), this.label = this.#t.asObservable(), this.#r = new g(void 0), this.description = this.#r.asObservable(), this.#a = new Y(void 0), this.appearance = this.#a.asObservable(), this.#s = new ht(void 0), this.value = this.#s.asObservable(), this.#l = new J([], (i) => i.alias), this.configValues = this.#l.asObservable(), this.#h = new G(void 0), this.config = this.#h.asObservable(), this.#o = new Y(void 0), this.validation = this.#o.asObservable(), this.validationMandatory = this.#o.asObservablePart((i) => i?.mandatory), this.validationMandatoryMessage = this.#o.asObservablePart((i) => i?.mandatoryMessage), this.#p = new g(void 0), this.dataPath = this.#p.asObservable(), this.#d = new X(void 0), this.editor = this.#d.asObservable(), this.#u = new X(void 0), this.editorManifest = this.#u.asObservable(), this.readOnlyState = new ct(this), this.isReadOnly = this.readOnlyState.isReadOnly, this.#n = new G(void 0), this.variantId = this.#n.asObservable(), this.#v = new g(void 0), this.variantDifference = this.#v.asObservable(), this.consumeContext(L, (i) => {
      this.#i = i, this.setVariantId(i?.getVariantId?.()), this._generateVariantDifferenceString(), this._observeProperty();
    }), this.observe(
      this.alias,
      () => {
        this._observeProperty();
      },
      null
    ), this.observe(
      this.configValues,
      (i) => {
        this.#h.setValue(i ? new vt(i) : void 0);
      },
      null
    ), this.observe(
      this.variantId,
      () => {
        this._generateVariantDifferenceString();
      },
      null
    );
  }
  #e;
  #t;
  #r;
  #a;
  #s;
  #l;
  #h;
  #o;
  #p;
  #d;
  #u;
  /**
   * Set the property editor UI element for this property.
   * @param {UmbPropertyEditorUiElement | undefined} editorElement The property editor UI element
   */
  setEditor(e) {
    this.#d.setValue(e ?? void 0);
  }
  /**
   * Get the property editor UI element for this property.
   * @returns {UmbPropertyEditorUiElement | undefined} The property editor UI element
   */
  getEditor() {
    return this.#d.getValue();
  }
  /**
   * Set the property editor manifest for this property.
   * @param {ManifestPropertyEditorUi | undefined} manifest The property editor manifest
   */
  setEditorManifest(e) {
    this.#u.setValue(e ?? void 0);
  }
  /**
   * Get the property editor manifest for this property.
   * @returns {UmbPropertyEditorUiElement | undefined} The property editor manifest
   */
  getEditorManifest() {
    return this.#u.getValue();
  }
  #n;
  #v;
  #i;
  async _observeProperty() {
    const e = this.#e.getValue();
    !this.#i || !e || (this.observe(
      await this.#i.propertyVariantId?.(e),
      (i) => {
        this.#n.setValue(i);
      },
      "observeVariantId"
    ), this.observe(
      await this.#i.propertyValueByAlias(e),
      (i) => {
        this.#s.setValue(i);
      },
      "observeValue"
    ), this.observe(this.#i.readOnly, (i) => {
      const r = "UMB_DATASET";
      i ? this.readOnlyState.addState({
        unique: r
      }) : this.readOnlyState.removeState(r);
    }));
  }
  _generateVariantDifferenceString() {
    if (!this.#i) return;
    const e = this.#i.getVariantId?.() ?? void 0, i = this.#n.getValue();
    let r;
    e && i && (e.segment !== null && i.segment === null && (e.culture !== null ? r = "content_sharedAcrossCultures" : r = "content_sharedAcrossSegments"), e.culture !== null && i.culture === null && (r = "content_shared")), this.#v.setValue(r);
  }
  /**
   * Set the alias of this property.
   * @param {string | undefined} alias - The alias of the property
   * @memberof UmbPropertyContext
   */
  setAlias(e) {
    this.#e.setValue(e);
  }
  /**
   * Get the alias of this property.
   * @returns {*}  {(string | undefined)}
   * @memberof UmbPropertyContext
   */
  getAlias() {
    return this.#e.getValue();
  }
  /**
   * Set the label of this property.
   * @param {(string | undefined)} label - The label of the property
   * @memberof UmbPropertyContext
   */
  setLabel(e) {
    this.#t.setValue(e);
  }
  /**
   * Get the label of this property.
   * @returns {(string | undefined)} - the label
   * @memberof UmbPropertyContext
   */
  getLabel() {
    return this.#t.getValue();
  }
  /**
   * Set the description of this property.
   * @param {(string | undefined)} description
   * @memberof UmbPropertyContext
   */
  setDescription(e) {
    this.#r.setValue(e);
  }
  /**
   * Get the description of this property.
   * @returns {*}  {(string | undefined)}
   * @memberof UmbPropertyContext
   */
  getDescription() {
    return this.#r.getValue();
  }
  /**
   * Set the appearance of this property.
   * @param {UmbPropertyTypeAppearanceModel | undefined} appearance - the appearance properties of this property
   * @memberof UmbPropertyContext
   */
  setAppearance(e) {
    this.#a.setValue(e);
  }
  /**
   * Get the appearance of this property.
   * @returns {UmbPropertyTypeAppearanceModel | undefined}- the appearance properties of this property
   * @memberof UmbPropertyContext
   */
  getAppearance() {
    return this.#a.getValue();
  }
  /**
   * Set the value of this property.
   * @param {unknown} value - the whole value to be set
   */
  setValue(e) {
    const i = this.#e.getValue();
    !this.#i || !i || this.#i?.setPropertyValue(i, e);
  }
  /**
   * Gets the current value of this property.
   * Notice this is not reactive, you should us the `value` observable for that.
   * @returns {unknown} - the current value of this property
   */
  getValue() {
    return this.#s.getValue();
  }
  /**
   * Set the config of this property.
   * @param {Array<UmbPropertyEditorConfigProperty> | undefined} config - Array of configurations for this property
   * @memberof UmbPropertyContext
   */
  setConfig(e) {
    this.#l.setValue(e ?? []);
  }
  /**
   * Get the config of this property.
   * @returns {Array<UmbPropertyEditorConfigProperty> | undefined} - Array of configurations for this property
   * @memberof UmbPropertyContext
   */
  getConfig() {
    return this.#l.getValue();
  }
  /**
   * Set the variant ID of this property.
   * @param {UmbVariantId | undefined} variantId - The property Variant ID, not necessary the same as the Property Dataset Context VariantId.
   * @memberof UmbPropertyContext
   */
  setVariantId(e) {
    this.#n.setValue(e);
  }
  /**
   * Get the variant ID of this property.
   * @returns {UmbVariantId | undefined} - The property Variant ID, not necessary the same as the Property Dataset Context VariantId.
   * @memberof UmbPropertyContext
   */
  getVariantId() {
    return this.#n.getValue();
  }
  /**
   * Set the validation of this property.
   * @param {UmbPropertyTypeValidationModel | undefined} validation - Object holding the Validation Properties.
   * @memberof UmbPropertyContext
   */
  setValidation(e) {
    this.#o.setValue(e);
  }
  /**
   * Get the validation of this property.
   * @returns {UmbPropertyTypeValidationModel | undefined} - Object holding the Validation Properties.
   * @memberof UmbPropertyContext
   */
  getValidation() {
    return this.#o.getValue();
  }
  /**
   * Get the read only state of this property
   * @returns {boolean} - If property is in read-only mode.
   * @memberof UmbPropertyContext
   */
  getIsReadOnly() {
    return this.readOnlyState.getIsReadOnly();
  }
  setDataPath(e) {
    this.#p.setValue(e);
  }
  getDataPath() {
    return this.#p.getValue();
  }
  /**
   * Reset the value of this property.
   * @memberof UmbPropertyContext
   */
  resetValue() {
    this.setValue(void 0);
  }
  /**
   * Clear the value of this property.
   * @memberof UmbPropertyContext
   */
  clearValue() {
    this.setValue(void 0);
  }
  destroy() {
    super.destroy(), this.#e.destroy(), this.#t.destroy(), this.#r.destroy(), this.#a.destroy(), this.#l.destroy(), this.#s.destroy(), this.#h.destroy(), this.#i = void 0;
  }
}
const Dt = new k("UmbPropertyContext");
var Tt = Object.defineProperty, $t = Object.getOwnPropertyDescriptor, rt = (t) => {
  throw TypeError(t);
}, l = (t, e, i, r) => {
  for (var s = r > 1 ? void 0 : r ? $t(e, i) : e, p = t.length - 1, d; p >= 0; p--)
    (d = t[p]) && (s = (r ? d(e, i, s) : d(s)) || s);
  return r && s && Tt(e, i, s), s;
}, N = (t, e, i) => e.has(t) || rt("Cannot " + i), a = (t, e, i) => (N(t, e, "read from private field"), i ? i.call(t) : e.get(t)), y = (t, e, i) => e.has(t) ? rt("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), f = (t, e, i, r) => (N(t, e, "write to private field"), e.set(t, i), i), $ = (t, e, i) => (N(t, e, "access private method"), i), o, R, U, E, C, S, A, O, V, at, st, ot;
let n = class extends D {
  constructor() {
    super(), y(this, V), this._readonly = !1, this._orientation = "horizontal", this._supportsReadOnly = !1, this._isReadOnly = !1, y(this, o, new Mt(this)), y(this, R, new Et(this)), y(this, U), y(this, E), y(this, C), y(this, S), y(this, A), y(this, O), this._onPropertyEditorChange = (t) => {
      const e = t.composedPath()[0];
      if (this._element !== e) {
        console.error(
          "Property Editor received a Change Event who's target is not the Property Editor Element. Do not make bubble and composed change events."
        );
        return;
      }
      a(this, o).setValue(e.value), t.stopPropagation();
    }, this.observe(
      a(this, o).alias,
      (t) => {
        this._alias = t, a(this, R).setAddendum(t);
      },
      null
    ), this.observe(
      a(this, o).label,
      (t) => {
        this._label = t, this._element && (this._element.name = t);
      },
      null
    ), this.observe(
      a(this, o).description,
      (t) => {
        this._description = t;
      },
      null
    ), this.observe(
      a(this, o).variantDifference,
      (t) => {
        this._variantDifferenceTerm = t;
      },
      null
    ), this.observe(
      a(this, o).appearance,
      (t) => {
        this._orientation = t?.labelOnTop ? "vertical" : "horizontal";
      },
      null
    ), this.observe(
      a(this, o).validationMandatory,
      (t) => {
        this._mandatory = t, this._element && (this._element.mandatory = t);
      },
      null
    ), this.observe(
      a(this, o).isReadOnly,
      (t) => {
        this._isReadOnly = t, this._element && (this._element.readonly = t, this._element.toggleAttribute("readonly", t));
      },
      null
    );
  }
  set label(t) {
    a(this, o).setLabel(t);
  }
  get label() {
    return a(this, o).getLabel();
  }
  set description(t) {
    a(this, o).setDescription(t);
  }
  get description() {
    return a(this, o).getDescription();
  }
  set appearance(t) {
    a(this, o).setAppearance(t);
  }
  get appearance() {
    return a(this, o).getAppearance();
  }
  set alias(t) {
    this.setAttribute(ft, "property:" + t), a(this, o).setAlias(t);
  }
  get alias() {
    return a(this, o).getAlias() ?? "";
  }
  set propertyEditorUiAlias(t) {
    this._propertyEditorUiAlias = t, this._observePropertyEditorUI();
  }
  get propertyEditorUiAlias() {
    return this._propertyEditorUiAlias ?? "";
  }
  set config(t) {
    a(this, o).setConfig(t);
  }
  get config() {
    return a(this, o).getConfig();
  }
  set validation(t) {
    a(this, o).setValidation(t);
  }
  get validation() {
    return a(this, o).getValidation();
  }
  set dataPath(t) {
    a(this, o).setDataPath(t), new _t(this, t, (e) => {
      this._invalid = e;
    });
  }
  get dataPath() {
    return a(this, o).getDataPath();
  }
  set readonly(t) {
    this._readonly = t;
    const e = "UMB_ELEMENT";
    this._readonly ? a(this, o).readOnlyState.addState({
      unique: e
    }) : a(this, o).readOnlyState.removeState(e);
  }
  get readonly() {
    return this._readonly;
  }
  _observePropertyEditorUI() {
    this._propertyEditorUiAlias && this.observe(
      Q.byTypeAndAlias("propertyEditorUi", this._propertyEditorUiAlias),
      (t) => {
        if (!t && this._propertyEditorUiAlias !== F) {
          this._propertyEditorUiAlias = F, this._observePropertyEditorUI();
          return;
        }
        this._gotEditorUI(t);
      },
      "_observePropertyEditorUI"
    );
  }
  async _gotEditorUI(t) {
    if (a(this, O)?.destroy(), a(this, o).setEditor(void 0), a(this, o).setEditorManifest(t ?? void 0), !t)
      return;
    const e = await yt(t);
    if (this._supportsReadOnly = t.meta.supportsReadOnly || !1, e) {
      const i = this._element;
      if (a(this, C)?.destroy(), a(this, S)?.destroy(), a(this, A)?.destroy(), a(this, U)?.destroy(), i?.removeEventListener("change", this._onPropertyEditorChange), i?.removeEventListener("property-value-change", this._onPropertyEditorChange), i?.destroy?.(), this._element = e, a(this, o).setEditor(this._element), this._element) {
        if (this._element.addEventListener("change", this._onPropertyEditorChange), this._element.addEventListener("property-value-change", this._onPropertyEditorChange), this._element.manifest = t, this._element.mandatory = this._mandatory, this._element.name = this._label, f(this, C, this.observe(
          a(this, o).value,
          (r) => {
            this._element.value = r, a(this, E) && (a(this, E).value = r);
          },
          null
        )), f(this, S, this.observe(
          a(this, o).config,
          (r) => {
            r && (this._element.config = r);
          },
          null
        )), f(this, A, this.observe(
          a(this, o).validationMandatoryMessage,
          (r) => {
            r && (this._element.mandatoryMessage = r ?? void 0);
          },
          null
        )), "checkValidity" in this._element) {
          const r = this.dataPath;
          f(this, U, new bt(this, this._element, r)), r && (f(this, E, new gt(
            this,
            this._element,
            r
          )), a(this, E).value = a(this, o).getValue());
        }
        this._element.readonly = this._isReadOnly, this._element.toggleAttribute("readonly", this._isReadOnly), $(this, V, at).call(this, t);
      }
      this.requestUpdate("element", i);
    }
  }
  render() {
    return v`
			<umb-property-layout
				id="layout"
				.alias=${this._alias ?? ""}
				.label=${this._label ?? ""}
				.description=${this._description ?? ""}
				.orientation=${this._orientation ?? "horizontal"}
				?mandatory=${this._mandatory}
				?invalid=${this._invalid}>
				${$(this, V, st).call(this)}
				${this._variantDifferenceTerm ? v`<div id="variant-info" slot="description">
							<uui-tag look="secondary">${this.localize.term(this._variantDifferenceTerm)}</uui-tag>
						</div> ` : ""}
				${$(this, V, ot).call(this)}
			</umb-property-layout>
		`;
  }
};
o = /* @__PURE__ */ new WeakMap();
R = /* @__PURE__ */ new WeakMap();
U = /* @__PURE__ */ new WeakMap();
E = /* @__PURE__ */ new WeakMap();
C = /* @__PURE__ */ new WeakMap();
S = /* @__PURE__ */ new WeakMap();
A = /* @__PURE__ */ new WeakMap();
O = /* @__PURE__ */ new WeakMap();
V = /* @__PURE__ */ new WeakSet();
at = function(t) {
  a(this, O) && a(this, O).destroy(), f(this, O, new mt(
    this,
    Q,
    "propertyContext",
    [],
    (e) => e.forPropertyEditorUis.includes(t.alias)
  ));
};
st = function() {
  return this._propertyEditorUiAlias ? v`
			<umb-property-action-menu
				slot="action-menu"
				id="action-menu"
				.propertyEditorUiAlias=${this._propertyEditorUiAlias}>
			</umb-property-action-menu>
		` : j;
};
ot = function() {
  return v`
			<div id="editor" slot="editor">
				${this._isReadOnly && this._supportsReadOnly === !1 ? v`<div id="overlay"></div>` : j}
				${this._element}
			</div>
		`;
};
n.styles = [
  z,
  B`
			:host {
				display: block;
			}

			p {
				color: var(--uui-color-text-alt);
			}

			#action-menu {
				opacity: 0;
				transition: opacity 90ms;
			}

			#layout:focus-within #action-menu,
			#layout:hover #action-menu,
			#action-menu[open] {
				opacity: 1;
			}

			#variant-info {
				opacity: 0;
				transition: opacity 90ms;
				margin-top: var(--uui-size-space-2);
				margin-left: calc(var(--uui-size-space-1) * -1);
			}

			#layout:focus-within #variant-info,
			#layout:hover #variant-info {
				opacity: 1;
			}

			#editor {
				position: relative;
			}

			#overlay {
				position: absolute;
				top: 0;
				left: 0;
				right: 0;
				bottom: 0;
				background-color: white;
				opacity: 0.5;
				z-index: 1000;
			}
		`
];
l([
  h({ type: String })
], n.prototype, "label", 1);
l([
  h({ type: String })
], n.prototype, "description", 1);
l([
  h({ type: Object, attribute: !1 })
], n.prototype, "appearance", 1);
l([
  h({ type: String })
], n.prototype, "alias", 1);
l([
  h({ type: String, attribute: "property-editor-ui-alias" })
], n.prototype, "propertyEditorUiAlias", 1);
l([
  h({ type: Array, attribute: !1 })
], n.prototype, "config", 1);
l([
  h({ type: Object, attribute: !1 })
], n.prototype, "validation", 1);
l([
  h({ type: String, attribute: "data-path" })
], n.prototype, "dataPath", 1);
l([
  h({ type: Boolean, reflect: !0 })
], n.prototype, "readonly", 1);
l([
  c()
], n.prototype, "_variantDifferenceTerm", 2);
l([
  c()
], n.prototype, "_element", 2);
l([
  c()
], n.prototype, "_invalid", 2);
l([
  c()
], n.prototype, "_alias", 2);
l([
  c()
], n.prototype, "_label", 2);
l([
  c()
], n.prototype, "_description", 2);
l([
  c()
], n.prototype, "_orientation", 2);
l([
  c()
], n.prototype, "_mandatory", 2);
l([
  c()
], n.prototype, "_supportsReadOnly", 2);
l([
  c()
], n.prototype, "_isReadOnly", 2);
n = l([
  M("umb-property")
], n);
var It = Object.defineProperty, Rt = Object.getOwnPropertyDescriptor, q = (t, e, i, r) => {
  for (var s = r > 1 ? void 0 : r ? Rt(e, i) : e, p = t.length - 1, d; p >= 0; p--)
    (d = t[p]) && (s = (r ? d(e, i, s) : d(s)) || s);
  return r && s && It(e, i, s), s;
};
let w = class extends D {
  constructor() {
    super(...arguments), this.alias = "", this.schema = "";
  }
  render() {
    return v`<div id="not-supported">
			<umb-localize key="blockEditor_propertyEditorNotSupported" .args=${[this.alias, this.schema]}></umb-localize>
		</div>`;
  }
};
w.styles = [
  z,
  B`
			:host {
				display: block;
				padding: var(--uui-size-layout-1) 0;
			}

			#not-supported {
				background-color: var(--uui-color-danger);
				color: var(--uui-color-surface);
				padding: var(--uui-size-space-4);
				border-radius: var(--uui-border-radius);
			}
		`
];
q([
  h({ type: String })
], w.prototype, "alias", 2);
q([
  h({ type: String })
], w.prototype, "schema", 2);
w = q([
  M("umb-unsupported-property")
], w);
export {
  Dt as U,
  L as a,
  m as b,
  Mt as c,
  n as d,
  w as e,
  Zt as f,
  St as g,
  x as h,
  Ct as i
};
//# sourceMappingURL=unsupported-property.element-B5lv0dQj.js.map
