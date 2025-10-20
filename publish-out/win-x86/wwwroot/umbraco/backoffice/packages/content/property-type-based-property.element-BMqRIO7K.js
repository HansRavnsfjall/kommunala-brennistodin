import { UmbContextToken as m } from "@umbraco-cms/backoffice/context-api";
import { UmbContextBase as c } from "@umbraco-cms/backoffice/class-api";
import { UmbObjectState as E } from "@umbraco-cms/backoffice/observable-api";
import { css as T, property as a, state as y, customElement as v, html as l, ifDefined as b } from "@umbraco-cms/backoffice/external/lit";
import { UmbDataTypeDetailRepository as f } from "@umbraco-cms/backoffice/data-type";
import { umbExtensionsRegistry as P } from "@umbraco-cms/backoffice/extension-registry";
import { UmbLitElement as U } from "@umbraco-cms/backoffice/lit-element";
import { UmbTextStyles as A } from "@umbraco-cms/backoffice/style";
import { UMB_UNSUPPORTED_EDITOR_SCHEMA_ALIASES as d } from "@umbraco-cms/backoffice/property";
const S = new m(
  "UmbPropertyTypeBasedPropertyContext"
), I = new m(
  "UmbPropertyTypeBasedPropertyContext"
);
class w extends c {
  constructor(t) {
    super(t, S), this.#t = new E(void 0), this.dataType = this.#t.asObservable();
  }
  #t;
  setDataType(t) {
    this.#t.setValue(t);
  }
}
var O = Object.defineProperty, D = Object.getOwnPropertyDescriptor, u = (e) => {
  throw TypeError(e);
}, i = (e, t, r, p) => {
  for (var s = p > 1 ? void 0 : p ? D(t, r) : t, n = e.length - 1, h; n >= 0; n--)
    (h = e[n]) && (s = (p ? h(t, r, s) : h(s)) || s);
  return p && s && O(t, r, s), s;
}, C = (e, t, r) => t.has(e) || u("Cannot " + r), B = (e, t, r) => (C(e, t, "read from private field"), r ? r.call(e) : t.get(e)), R = (e, t, r) => t.has(e) ? u("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), _;
let o = class extends U {
  constructor() {
    super(...arguments), this.readonly = !1, this._dataTypeDetailRepository = new f(this), R(this, _, new w(this));
  }
  set property(e) {
    const t = this._property;
    this._property = e, this._property?.dataType.unique !== t?.dataType.unique && this._observeDataType(this._property?.dataType.unique);
  }
  get property() {
    return this._property;
  }
  get ownerEntityType() {
    return this._ownerEntityType;
  }
  set ownerEntityType(e) {
    this._ownerEntityType = e;
  }
  async _checkSchemaSupport() {
    !this._ownerEntityType || !this._propertyEditorSchemaAlias || this._ownerEntityType in d && (this._isUnsupported = d[this._ownerEntityType].includes(
      this._propertyEditorSchemaAlias
    ));
  }
  async _observeDataType(e) {
    this._dataTypeObserver?.destroy(), e && (await this._dataTypeDetailRepository.requestByUnique(e), this._dataTypeObserver = this.observe(
      await this._dataTypeDetailRepository.byUnique(e),
      (t) => {
        const r = t ? { unique: t.unique } : void 0;
        B(this, _).setDataType(r), this._dataTypeValues = t?.values, this._propertyEditorUiAlias = t?.editorUiAlias || void 0, this._propertyEditorSchemaAlias = t?.editorAlias || void 0, this._checkSchemaSupport(), !this._propertyEditorUiAlias && t?.editorAlias ? this.observe(
          P.byTypeAndAlias("propertyEditorSchema", t.editorAlias),
          (p) => {
            p && (this._propertyEditorUiAlias = p?.meta.defaultPropertyEditorUiAlias, this.removeUmbControllerByAlias("_observePropertyEditorSchema"));
          },
          "_observePropertyEditorSchema"
        ) : this.removeUmbControllerByAlias("_observePropertyEditorSchema");
      },
      "_observeDataType"
    ));
  }
  render() {
    if (!(!this._propertyEditorUiAlias || !this._property?.alias))
      return this._isUnsupported ? l`<umb-unsupported-property
				.alias=${this._property.alias}
				.schema=${this._propertyEditorSchemaAlias}></umb-unsupported-property>` : l`
			<umb-property
				.dataPath=${this.dataPath}
				.alias=${this._property.alias}
				.label=${this._property.name}
				.description=${this._property.description ?? void 0}
				.appearance=${this._property.appearance}
				property-editor-ui-alias=${b(this._propertyEditorUiAlias)}
				.config=${this._dataTypeValues}
				.validation=${this._property.validation}
				?readonly=${this.readonly}>
			</umb-property>
		`;
  }
};
_ = /* @__PURE__ */ new WeakMap();
o.styles = [
  A,
  T`
			:host {
				display: block;
			}
		`
];
i([
  a({ type: Object, attribute: !1 })
], o.prototype, "property", 1);
i([
  a({ type: String, attribute: "data-path" })
], o.prototype, "dataPath", 2);
i([
  a({ type: String })
], o.prototype, "ownerEntityType", 1);
i([
  a({ type: Boolean, reflect: !0 })
], o.prototype, "readonly", 2);
i([
  y()
], o.prototype, "_propertyEditorUiAlias", 2);
i([
  y()
], o.prototype, "_propertyEditorSchemaAlias", 2);
i([
  y()
], o.prototype, "_isUnsupported", 2);
i([
  y()
], o.prototype, "_dataTypeValues", 2);
o = i([
  v("umb-property-type-based-property")
], o);
export {
  o as U,
  S as a,
  I as b,
  w as c
};
//# sourceMappingURL=property-type-based-property.element-BMqRIO7K.js.map
