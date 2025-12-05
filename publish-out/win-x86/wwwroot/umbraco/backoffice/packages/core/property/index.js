import { a as y } from "../unsupported-property.element-B5lv0dQj.js";
import { f as q, U as D, c as N, g as T, h as F, d as L, b as Y, e as k, i as $ } from "../unsupported-property.element-B5lv0dQj.js";
import { U as X, a as H } from "../constants-mZK85u7C.js";
import { UmbValueValidator as p } from "@umbraco-cms/backoffice/validation";
import { UmbGuardManagerBase as h } from "@umbraco-cms/backoffice/utils";
import { UmbControllerBase as P } from "@umbraco-cms/backoffice/class-api";
import { createExtensionApi as c } from "@umbraco-cms/backoffice/extension-api";
import { umbExtensionsRegistry as d } from "@umbraco-cms/backoffice/extension-registry";
import { U as A } from "../variant-id.class-DtPIPk7p.js";
const C = {
  block: ["Umbraco.ImageCropper"]
};
class B extends p {
  //
  #e;
  constructor(e, t) {
    super(e, t), this.#e = t.propertyAlias, this.consumeContext(y, async (s) => {
      this.observe(
        await s?.propertyValueByAlias(this.#e),
        (r) => {
          this.value = r;
        },
        "observeDatasetValue"
      );
    });
  }
}
function f(l, e) {
  return l.propertyType?.unique === e.unique || l.propertyType === void 0;
}
class R extends h {
  /**
   * Checks if the property is permitted for the given property type
   * @param {UmbReferenceByUnique} propertyType
   * @returns {Observable<boolean>} - Observable that emits true if the property is permitted
   * @memberof UmbPropertyGuardManager
   */
  isPermittedForProperty(e) {
    return this._rules.asObservablePart((t) => this.#e(t, e));
  }
  /**
   * Checks if the property is permitted for the given property type
   * @param {UmbReferenceByUnique} propertyType
   * @returns {boolean} - Returns true if the property is permitted
   * @memberof UmbPropertyGuardManager
   */
  getIsPermittedForProperty(e) {
    return this.#e(this.getRules(), e);
  }
  #e(e, t) {
    return e.filter((s) => s.permitted === !1).some((s) => f(s, t)) ? !1 : e.filter((s) => s.permitted === !0).some((s) => f(s, t)) ? !0 : this._fallback;
  }
}
function m(l, e, t, s) {
  return (l.variantId === void 0 || l.variantId.culture === e.culture) && (l.propertyType === void 0 || l.propertyType.unique === t.unique) && (l.datasetVariantId === void 0 || l.datasetVariantId.culture === s.culture);
}
class S extends h {
  /**
   * Checks if the variant and propertyType is permitted.
   * @param {UmbVariantId} variantId - The variant id to check.
   * @param {UmbReferenceByUnique} propertyType - The property type to check.
   * @param {UmbVariantId} datasetVariantId - The dataset variant id to check.
   * @returns {Observable<boolean>} - Returns an observable that emits true if the variant and propertyType is permitted, false otherwise.
   * @memberof UmbVariantPropertyGuardManager
   */
  isPermittedForVariantAndProperty(e, t, s) {
    return this._rules.asObservablePart(
      (r) => this.#e(r, e, t, s)
    );
  }
  /**
   * Checks if the variant and propertyType is permitted.
   * @param {UmbVariantId} variantId - The variant id to check.
   * @param {UmbReferenceByUnique} propertyType - The property type to check.
   * @param {UmbVariantId} datasetVariantId - The dataset variant id to check.
   * @returns {boolean} - Returns true if the variant and propertyType is permitted, false otherwise.
   * @memberof UmbVariantPropertyGuardManager
   */
  getIsPermittedForVariantAndProperty(e, t, s) {
    return this.#e(this._rules.getValue(), e, t, s);
  }
  #e(e, t, s, r) {
    return e.filter((a) => a.permitted === !1).some((a) => m(a, t, s, r)) ? !1 : e.filter((a) => a.permitted === !0).some((a) => m(a, t, s, r)) ? !0 : this._fallback;
  }
}
class I extends P {
  /**
   * Clones the property data.
   * @param {UmbPropertyValueDataPotentiallyWithEditorAlias} property - The property data.
   * @returns {Promise<UmbPropertyValueDataPotentiallyWithEditorAlias>} - A promise that resolves to the cloned property data.
   */
  async clone(e) {
    const t = await this.#e(e);
    return this.destroy(), t ?? e;
  }
  async #e(e) {
    const t = await this.#t(e);
    return await this.#r(t);
  }
  async #t(e) {
    const t = e.editorAlias;
    if (!t)
      return console.error(`Editor alias not found for ${e.alias}`), e;
    const s = d.getByTypeAndFilter(
      "propertyValueCloner",
      (i) => i.forEditorAlias === t
    )[0];
    if (!s)
      return e;
    const r = await c(this, s);
    if (!r)
      return e;
    r.manifest = s;
    let a = e;
    if (r.cloneValue) {
      const i = await r.cloneValue(e.value);
      i && (a = { ...e, value: i });
    }
    return a;
  }
  async #r(e) {
    const t = e.editorAlias;
    if (!t)
      return e;
    const s = d.getByTypeAndFilter(
      "propertyValueResolver",
      // TODO: Remove depcrated filter option in v.17 [NL]
      (a) => a.forEditorAlias === t || a.meta?.editorAlias === t
    )[0];
    if (!s)
      return e;
    const r = await c(this, s);
    return r ? (r.manifest = s, r.processValues ? await r.processValues(e, async (a) => await Promise.all(
      a.map(async (o) => await this.#e(o) ?? o)
    )) ?? e : e) : e;
  }
}
class V extends P {
  #e;
  setValues(e) {
    this._existingValues = e;
  }
  /**
   * Clones the property data.
   * @param {UmbPropertyValueDataPotentiallyWithEditorAlias} propertyTypes - Data about the properties to make a preset for.
   * @param createArgs
   * @returns {Promise<UmbPropertyValueDataPotentiallyWithEditorAlias>} - A promise that resolves to the cloned property data.
   */
  async create(e, t) {
    this.#e = {
      entityType: t?.entityType ?? "needs to be parsed to the UmbPropertyValuePresetBuilderController, this is not present because of a custom legacy implementation",
      entityUnique: t?.entityUnique ?? "needs to be parsed to the UmbPropertyValuePresetBuilderController, this is not present because of a custom legacy implementation",
      entityTypeUnique: t?.entityTypeUnique
    }, (!t?.entityUnique || !t?.entityType) && console.warn(
      "entityUnique or entityType was not provided for UmbPropertyValuePresetBuilderController.create in the second argument. This will be required in v.17.0 and must be provided when calling create()."
    );
    const r = (await Promise.all(e.map(this.#t))).flatMap((a) => a);
    return this.destroy(), r;
  }
  #t = async (e) => {
    const t = e.propertyEditorSchemaAlias, s = e.propertyEditorUiAlias;
    if (!s)
      throw new Error(`propertyEditorUiAlias was not defined in ${e}`);
    let r;
    t && s ? r = (n) => n.forPropertyEditorSchemaAlias === t || n.forPropertyEditorUiAlias === s : r = (n) => n.forPropertyEditorUiAlias === s;
    const a = d.getByTypeAndFilter("propertyValuePreset", r), i = (await Promise.all(
      a.map(
        (n) => c(this, n).then((u) => (u && (u.manifest = u), u))
      )
    )).filter((n) => n !== void 0), o = await this._generatePropertyValues(i, e);
    for (const n of i)
      n.destroy();
    return o;
  };
  async _generatePropertyValues(e, t) {
    const s = {
      value: this._existingValues?.find((a) => a.alias === t.alias)?.value
    }, r = await this._generatePropertyValue(e, t, s);
    return r ? [r] : [];
  }
  async _generatePropertyValue(e, t, s) {
    let r = s.value;
    if (r === void 0) {
      const a = {
        ...this.#e,
        alias: t.alias,
        propertyEditorUiAlias: t.propertyEditorUiAlias,
        propertyEditorSchemaAlias: t.propertyEditorSchemaAlias,
        ...s
      };
      for (const i of e) {
        if (!i.processValue)
          throw new Error(`'processValue()' method is not defined in the api: ${i.constructor.name}`);
        r = await i.processValue(r, t.config, t.typeArgs, a);
      }
    }
    if (r !== void 0)
      return t.propertyEditorSchemaAlias ? {
        editorAlias: t.propertyEditorSchemaAlias,
        alias: t.alias,
        value: r
      } : {
        alias: t.alias,
        value: r
      };
  }
}
class O extends V {
  #e = [];
  // Always declare the default segment (null)
  #t = [null];
  // TODO: We properly need to break this, as Engage needs to control which Segments are available for each culture, maybe investigate the option to go about a new option to just parse options.? Break in v.17.0 [NL]
  setCultures(e) {
    this.#e = e;
  }
  setSegments(e) {
    this.#t = [null, ...e];
  }
  async _generatePropertyValues(e, t) {
    const s = [];
    if (t.typeArgs.variesBySegment && t.typeArgs.variesByCulture) {
      if (this.#e.length === 0)
        throw new Error("Cultures must be set when varying by culture.");
      for (const r of this.#e)
        for (const a of this.#t) {
          const i = await this._generatePropertyValue(
            e,
            t,
            this.#r(t.alias, r, a)
          );
          i && (i.culture = r, i.segment = a, s.push(i));
        }
    } else if (t.typeArgs.variesByCulture) {
      if (this.#e.length === 0)
        throw new Error("Cultures must be set when varying by culture.");
      for (const r of this.#e) {
        const a = await this._generatePropertyValue(
          e,
          t,
          this.#r(t.alias, r, null)
        );
        a && (a.culture = r, a.segment = null, s.push(a));
      }
    } else if (t.typeArgs.variesBySegment)
      for (const r of this.#t) {
        const a = await this._generatePropertyValue(
          e,
          t,
          this.#r(t.alias, null, r)
        );
        a && (a.culture = null, a.segment = r, s.push(a));
      }
    else {
      const r = await this._generatePropertyValue(
        e,
        t,
        this.#r(t.alias, null, null)
      );
      r && (r.culture = null, r.segment = null, s.push(r));
    }
    return s;
  }
  #r(e, t, s) {
    const r = new A(t, s);
    return {
      variantId: r,
      value: this._existingValues?.find((i) => i.alias === e && r.compare(i))?.value
    };
  }
}
export {
  q as UMB_NAMEABLE_PROPERTY_DATASET_CONTEXT,
  D as UMB_PROPERTY_CONTEXT,
  y as UMB_PROPERTY_DATASET_CONTEXT,
  X as UMB_PROPERTY_HAS_VALUE_CONDITION_ALIAS,
  C as UMB_UNSUPPORTED_EDITOR_SCHEMA_ALIASES,
  H as UMB_WRITABLE_PROPERTY_CONDITION_ALIAS,
  N as UmbPropertyContext,
  T as UmbPropertyDatasetContextBase,
  F as UmbPropertyDatasetElement,
  B as UmbPropertyDatasetPropertyValidator,
  L as UmbPropertyElement,
  R as UmbPropertyGuardManager,
  Y as UmbPropertyLayoutElement,
  I as UmbPropertyValueCloneController,
  V as UmbPropertyValuePresetBuilderController,
  O as UmbPropertyValuePresetVariantBuilderController,
  k as UmbUnsupportedPropertyElement,
  S as UmbVariantPropertyGuardManager,
  $ as isNameablePropertyDatasetContext
};
//# sourceMappingURL=index.js.map
