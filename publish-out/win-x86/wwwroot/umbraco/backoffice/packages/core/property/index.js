import { e as O, U as S, g as M, b as T, f as N, h as D, c as L, a as x, d as F, i as Y } from "../unsupported-property.element-BTNx3nHS.js";
import { U as G, a as $ } from "../constants-mZK85u7C.js";
import { UmbGuardManagerBase as A } from "@umbraco-cms/backoffice/utils";
import { UmbControllerBase as P } from "@umbraco-cms/backoffice/class-api";
import { createExtensionApi as f } from "@umbraco-cms/backoffice/extension-api";
import { umbExtensionsRegistry as d } from "@umbraco-cms/backoffice/extension-registry";
import { U as c } from "../variant-id.class-CbSg1vyg.js";
const b = {
  block: ["Umbraco.ImageCropper", "Umbraco.UploadField"]
};
function m(i, e) {
  return i.propertyType?.unique === e.unique || i.propertyType === void 0;
}
class v extends A {
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
    return e.filter((r) => r.permitted === !1).some((r) => m(r, t)) ? !1 : e.filter((r) => r.permitted === !0).some((r) => m(r, t)) ? !0 : this._fallback;
  }
}
function h(i, e, t, r) {
  return (i.variantId === void 0 || i.variantId.culture === e.culture) && (i.propertyType === void 0 || i.propertyType.unique === t.unique) && (i.datasetVariantId === void 0 || i.datasetVariantId.culture === r.culture);
}
class g extends A {
  /**
   * Checks if the variant and propertyType is permitted.
   * @param {UmbVariantId} variantId - The variant id to check.
   * @param {UmbReferenceByUnique} propertyType - The property type to check.
   * @param {UmbVariantId} datasetVariantId - The dataset variant id to check.
   * @returns {Observable<boolean>} - Returns an observable that emits true if the variant and propertyType is permitted, false otherwise.
   * @memberof UmbVariantPropertyGuardManager
   */
  isPermittedForVariantAndProperty(e, t, r) {
    return this._rules.asObservablePart(
      (s) => this.#e(s, e, t, r)
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
  getIsPermittedForVariantAndProperty(e, t, r) {
    return this.#e(this._rules.getValue(), e, t, r);
  }
  #e(e, t, r, s) {
    return e.filter((a) => a.permitted === !1).some((a) => h(a, t, r, s)) ? !1 : e.filter((a) => a.permitted === !0).some((a) => h(a, t, r, s)) ? !0 : this._fallback;
  }
}
class C extends P {
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
    const r = d.getByTypeAndFilter(
      "propertyValueCloner",
      (n) => n.forEditorAlias === t
    )[0];
    if (!r)
      return e;
    const s = await f(this, r);
    if (!s)
      return e;
    s.manifest = r;
    let a = e;
    if (s.cloneValue) {
      const n = await s.cloneValue(e.value);
      n && (a = { ...e, value: n });
    }
    return a;
  }
  async #r(e) {
    const t = e.editorAlias;
    if (!t)
      return e;
    const r = d.getByTypeAndFilter(
      "propertyValueResolver",
      // TODO: Remove depcrated filter option in v.17 [NL]
      (a) => a.forEditorAlias === t || a.meta?.editorAlias === t
    )[0];
    if (!r)
      return e;
    const s = await f(this, r);
    return s ? (s.manifest = r, s.processValues ? await s.processValues(e, async (a) => await Promise.all(
      a.map(async (o) => await this.#e(o) ?? o)
    )) ?? e : e) : e;
  }
}
const E = Object.freeze({});
class p extends P {
  /**
   * Clones the property data.
   * @param {UmbPropertyValueDataPotentiallyWithEditorAlias} propertyTypes - Data about the properties to make a preset for.
   * @returns {Promise<UmbPropertyValueDataPotentiallyWithEditorAlias>} - A promise that resolves to the cloned property data.
   */
  async create(e) {
    const r = (await Promise.all(e.map(this.#e))).flatMap((s) => s);
    return this.destroy(), r;
  }
  #e = async (e) => {
    const t = e.propertyEditorSchemaAlias, r = e.propertyEditorUiAlias;
    if (!r)
      throw new Error(`propertyEditorUiAlias was not defined in ${e}`);
    let s;
    t && r ? s = (l) => l.forPropertyEditorSchemaAlias === t || l.forPropertyEditorUiAlias === r : s = (l) => l.forPropertyEditorUiAlias === r;
    const a = d.getByTypeAndFilter("propertyValuePreset", s), n = (await Promise.all(
      a.map(
        (l) => f(this, l).then((u) => (u && (u.manifest = u), u))
      )
    )).filter((l) => l !== void 0), o = await this._generatePropertyValues(n, e);
    for (const l of n)
      l.destroy();
    return o;
  };
  async _generatePropertyValues(e, t) {
    const r = await this._generatePropertyValue(e, t, E);
    return r ? [r] : [];
  }
  async _generatePropertyValue(e, t, r) {
    let s;
    for (const a of e) {
      if (!a.processValue)
        throw new Error(`'processValue()' method is not defined in the api: ${a.constructor.name}`);
      s = await a.processValue(s, t.config, t.typeArgs, r);
    }
    if (s !== void 0)
      return t.propertyEditorSchemaAlias ? {
        editorAlias: t.propertyEditorSchemaAlias,
        alias: t.alias,
        value: s
      } : {
        alias: t.alias,
        value: s
      };
  }
}
class B extends p {
  #e = [];
  // Always declare the default segment (null)
  #t = [null];
  setCultures(e) {
    this.#e = e;
  }
  setSegments(e) {
    this.#t = [null, ...e];
  }
  async _generatePropertyValues(e, t) {
    const r = [];
    if (t.typeArgs.variesBySegment && t.typeArgs.variesByCulture) {
      if (this.#e.length === 0)
        throw new Error("Cultures must be set when varying by culture.");
      for (const s of this.#e)
        for (const a of this.#t) {
          const n = await this._generatePropertyValue(e, t, {
            variantId: new c(s, a)
          });
          n && (n.culture = s, n.segment = a, r.push(n));
        }
    } else if (t.typeArgs.variesByCulture) {
      if (this.#e.length === 0)
        throw new Error("Cultures must be set when varying by culture.");
      for (const s of this.#e) {
        const a = await this._generatePropertyValue(e, t, {
          variantId: new c(s)
        });
        a && (a.culture = s, a.segment = null, r.push(a));
      }
    } else if (t.typeArgs.variesBySegment)
      for (const s of this.#t) {
        const a = await this._generatePropertyValue(e, t, {
          variantId: new c(null, s)
        });
        a && (a.culture = null, a.segment = s, r.push(a));
      }
    else {
      const s = await this._generatePropertyValue(e, t, {});
      s && (s.culture = null, s.segment = null, r.push(s));
    }
    return r;
  }
}
export {
  O as UMB_NAMEABLE_PROPERTY_DATASET_CONTEXT,
  S as UMB_PROPERTY_CONTEXT,
  M as UMB_PROPERTY_DATASET_CONTEXT,
  G as UMB_PROPERTY_HAS_VALUE_CONDITION_ALIAS,
  b as UMB_UNSUPPORTED_EDITOR_SCHEMA_ALIASES,
  $ as UMB_WRITABLE_PROPERTY_CONDITION_ALIAS,
  T as UmbPropertyContext,
  N as UmbPropertyDatasetContextBase,
  D as UmbPropertyDatasetElement,
  L as UmbPropertyElement,
  v as UmbPropertyGuardManager,
  x as UmbPropertyLayoutElement,
  C as UmbPropertyValueCloneController,
  p as UmbPropertyValuePresetBuilderController,
  B as UmbPropertyValuePresetVariantBuilderController,
  F as UmbUnsupportedPropertyElement,
  g as UmbVariantPropertyGuardManager,
  Y as isNameablePropertyDatasetContext
};
//# sourceMappingURL=index.js.map
