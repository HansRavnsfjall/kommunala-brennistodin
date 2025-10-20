import { U as le } from "../content-collection-workspace.context-token-BliQa7Cu.js";
import { b as pe, a as de, c as ce, c as me, U as ye } from "../property-type-based-property.element-BMqRIO7K.js";
import { U as _e, b as ve, a as we } from "../sort-children-of-content-modal.token-DYwtOc5Y.js";
import { U as F } from "../content-workspace.context-token-BMs4lY7q.js";
import { UmbControllerBase as A, UmbContextBase as L } from "@umbraco-cms/backoffice/class-api";
import { createExtensionApi as W } from "@umbraco-cms/backoffice/extension-api";
import { umbExtensionsRegistry as G } from "@umbraco-cms/backoffice/extension-registry";
import { UmbVariantId as p, umbVariantObjectCompare as C, UmbVariantContext as $ } from "@umbraco-cms/backoffice/variant";
import { property as X, state as v, customElement as j, nothing as T, html as Y } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as H } from "@umbraco-cms/backoffice/lit-element";
import { UMB_PROPERTY_DATASET_CONTEXT as q, UmbVariantPropertyGuardManager as P, UmbPropertyValuePresetVariantBuilderController as K } from "@umbraco-cms/backoffice/property";
import { UmbDataPathPropertyValueQuery as N, umbScopeMapperForJsonPaths as S, UmbValidationPropertyPathTranslationController as Q, umbQueryMapperForJsonPaths as z, UmbDataPathVariantQuery as R, UmbServerModelValidatorContext as J, UmbValidationController as Z, UMB_VALIDATION_CONTEXT as tt, UMB_VALIDATION_EMPTY_LOCALIZATION_KEY as et } from "@umbraco-cms/backoffice/validation";
import { UmbEntityWorkspaceDataManager as rt, UmbEntityDetailWorkspaceContextBase as at, UmbWorkspaceSplitViewManager as it } from "@umbraco-cms/backoffice/workspace";
import { appendToFrozenArray as M, jsonStringComparison as E, UmbBasicState as st, UmbBooleanState as nt, mergeObservables as V, createObservablePart as ot, classEqualMemoization as ut, UmbObjectState as lt, UmbArrayState as I } from "@umbraco-cms/backoffice/observable-api";
import { UmbContextToken as ht } from "@umbraco-cms/backoffice/context-api";
import { UmbRoutePathAddendumContext as pt } from "@umbraco-cms/backoffice/router";
import { UmbContentTypeStructureManager as dt } from "@umbraco-cms/backoffice/content-type";
import { UmbReadOnlyVariantGuardManager as ct, UmbDeprecation as mt } from "@umbraco-cms/backoffice/utils";
import { UmbDataTypeItemRepositoryManager as yt, UmbDataTypeDetailRepository as ft } from "@umbraco-cms/backoffice/data-type";
import { UmbLanguageCollectionRepository as _t } from "@umbraco-cms/backoffice/language";
import { map as vt, firstValueFrom as wt } from "@umbraco-cms/backoffice/external/rxjs";
import { umbOpenModal as gt } from "@umbraco-cms/backoffice/modal";
import { UMB_ACTION_EVENT_CONTEXT as U } from "@umbraco-cms/backoffice/action";
import { UmbRequestReloadChildrenOfEntityEvent as Ct, UmbRequestReloadStructureForEntityEvent as Vt, UmbEntityUpdatedEvent as bt } from "@umbraco-cms/backoffice/entity-action";
import { UmbSegmentCollectionRepository as Ot } from "@umbraco-cms/backoffice/segment";
const re = "Umb.Condition.Workspace.ContentHasProperties", ae = "Umb.Section.Content";
function B(l, t) {
  return l.culture === t.culture && l.segment === t.segment;
}
class w extends A {
  /**
   * Merges content variant data based on selected variants and variants to store.
   * @param {UmbContentLikeDetailModel | undefined} persistedData - The persisted content variant data.
   * @param {UmbContentLikeDetailModel} currentData - The current content variant data.
   * @param {Array<UmbVariantId>} selectedVariants - The selected variants.
   * @param {Array<UmbVariantId>} variantsToStore - The variants to store, we sometimes have additional variants that we like to process. This is typically the invariant variant, which we do not want to have as part of the variants data therefore a difference.
   * @returns {Promise<UmbContentLikeDetailModel>} - A promise that resolves to the merged content variant data.
   */
  async process(t, e, a, r) {
    const i = { ...e };
    return i.values = await this.#t(
      t?.values,
      e.values,
      r
    ), e.variants && (i.variants = this.#r(
      t?.variants,
      e.variants,
      a,
      B
    )), this.destroy(), i;
  }
  /**
   * Builds and saves values based on selected variants and variants to store.
   * @param {Array<UmbPotentialContentValueModel> | undefined} persistedValues - The persisted values.
   * @param {Array<UmbPotentialContentValueModel> | undefined} draftValues - The draft values.
   * @param {Array<UmbVariantId>}variantsToStore - The variants to store.
   * @returns {Promise<Array<UmbPotentialContentValueModel>>} - A promise that resolves to the saved values.
   */
  async #t(t, e, a) {
    const r = [...t ?? [], ...e ?? []].filter(
      (i, s, n) => s === n.findIndex((u) => u.alias === i.alias && u.culture === i.culture && u.segment === i.segment)
    );
    return (await Promise.all(
      r.map((i) => {
        const s = t?.find(
          (n) => n.alias === i.alias && n.culture === i.culture && n.segment === i.segment
        );
        if (a.some((n) => n.equal(p.CreateFromPartial(i)))) {
          const n = e?.find(
            (u) => u.alias === i.alias && u.culture === i.culture && u.segment === i.segment
          );
          return this.#e(s, n, a);
        } else
          return Promise.resolve(s);
      })
    )).filter((i) => i !== void 0);
  }
  /**
   * Builds and saves a value based on selected variants and variants to store.
   * @param {UmbPotentialContentValueModel | undefined} persistedValue - The persisted value.
   * @param {UmbPotentialContentValueModel | undefined} draftValue - The draft value.
   * @param {Array<UmbVariantId>} variantsToStore - The variants to store.
   * @returns {Promise<UmbPotentialContentValueModel | undefined>} A promise that resolves to the saved value.
   */
  async #e(t, e, a) {
    const r = e?.editorAlias ?? t?.editorAlias;
    if (!r)
      return console.error(`Editor alias not found for ${r}`, e, t), e;
    if (!e)
      return;
    const i = G.getByTypeAndFilter(
      "propertyValueResolver",
      // TODO: Remove depcrated filter in v.17 [NL]
      (u) => u.forEditorAlias === r || u.meta?.editorAlias === r
    )[0];
    if (!i)
      return e;
    const s = await W(this, i);
    if (!s)
      return e;
    s.manifest = i;
    let n = e;
    if (s.processValues) {
      const u = [];
      t && await s.processValues(t, async (o) => {
        u.push(o);
      });
      let d = 0;
      n = await s.processValues(n, async (o) => {
        const h = u[d++];
        return await this.#t(h, o, a);
      }) ?? n;
    }
    if (s.processVariants) {
      const u = [];
      t && await s.processVariants(t, async (o) => {
        u.push(o);
      });
      let d = 0;
      n = await s.processVariants(n, async (o) => {
        const h = u[d++];
        return await this.#r(
          h,
          o,
          a,
          s.compareVariants ?? B
        );
      }) ?? n;
    }
    return n;
  }
  /**
   * Construct variants property of model.
   * @param {Array<UmbVariantDataModel> | undefined} persistedVariants - The persisted value.
   * @param {Array<UmbVariantDataModel>} draftVariants - The draft value.
   * @param {Array<UmbVariantId>} variantsToStore - The variants to be stored.
   * @param {(UmbVariantDataModel, UmbVariantDataModel) => boolean} compare - The compare method, which compares the unique properties of the variants.
   * @returns {UmbVariantDataModel[]} A new array of variants.
   */
  #r(t, e, a, r) {
    return [...t ?? [], ...e ?? []].filter(
      (s, n, u) => n === u.findIndex((d) => r(d, s))
    ).map((s) => {
      const n = t?.find((u) => r(u, s));
      return a.some((u) => u.compare(s)) ? e?.find((d) => r(d, s)) : n;
    }).filter((s) => s !== void 0);
  }
}
var Tt = Object.defineProperty, Pt = Object.getOwnPropertyDescriptor, x = (l) => {
  throw TypeError(l);
}, f = (l, t, e, a) => {
  for (var r = a > 1 ? void 0 : a ? Pt(t, e) : t, i = l.length - 1, s; i >= 0; i--)
    (s = l[i]) && (r = (a ? s(t, e, r) : s(r)) || r);
  return a && r && Tt(t, e, r), r;
}, St = (l, t, e) => t.has(l) || x("Cannot " + e), Et = (l, t, e) => t.has(l) ? x("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(l) : t.set(l, e), b = (l, t, e) => (St(l, t, "access private method"), e), g, O, k;
let y = class extends H {
  constructor() {
    super(), Et(this, g), this.consumeContext(q, (l) => {
      this._datasetVariantId = l?.getVariantId();
    }), this.consumeContext(F, async (l) => {
      this._workspaceContext = l, b(this, g, O).call(this);
    });
  }
  get alias() {
    return this._alias;
  }
  set alias(l) {
    this._alias = l, b(this, g, O).call(this);
  }
  willUpdate(l) {
    if (super.willUpdate(l), (l.has("_propertyType") || l.has("_datasetVariantId") || l.has("_workspaceContext")) && this._datasetVariantId && this._propertyType && this._workspaceContext) {
      const t = new p(
        this._propertyType.variesByCulture ? this._datasetVariantId.culture : null,
        this._propertyType.variesBySegment ? this._datasetVariantId.segment : null
      );
      this._dataPath = `$.values[${N({
        alias: this._propertyType.alias,
        culture: t.culture,
        segment: t.segment
      })}].value`, this.observe(
        this._workspaceContext.propertyWriteGuard.isPermittedForVariantAndProperty(
          t,
          this._propertyType,
          t
        ),
        (e) => {
          this._writeable = e;
        },
        "observeView"
      );
    }
  }
  render() {
    return this._viewable ? !this._dataPath || this._writeable === void 0 ? T : Y`<umb-property-type-based-property
			data-path=${this._dataPath}
			.property=${this._propertyType}
			?readonly=${!this._writeable}></umb-property-type-based-property>` : T;
  }
};
g = /* @__PURE__ */ new WeakSet();
O = async function() {
  !this._alias || !this._workspaceContext || this.observe(await this._workspaceContext?.structure.propertyStructureByAlias(this._alias), (l) => {
    this._propertyType = l, b(this, g, k).call(this);
  });
};
k = function() {
  if (!this._workspaceContext || !this._propertyType || !this._datasetVariantId) return;
  const l = new p(
    this._propertyType.variesByCulture ? this._datasetVariantId.culture : null,
    this._propertyType.variesBySegment ? this._datasetVariantId.segment : null
  );
  this.observe(
    this._workspaceContext.propertyViewGuard.isPermittedForVariantAndProperty(
      l,
      this._propertyType,
      this._datasetVariantId
    ),
    (t) => {
      this._viewable = t;
    },
    "umbObservePropertyViewGuard"
  );
};
f([
  X({ type: String, attribute: "alias" })
], y.prototype, "alias", 1);
f([
  v()
], y.prototype, "_datasetVariantId", 2);
f([
  v()
], y.prototype, "_dataPath", 2);
f([
  v()
], y.prototype, "_viewable", 2);
f([
  v()
], y.prototype, "_writeable", 2);
f([
  v()
], y.prototype, "_workspaceContext", 2);
f([
  v()
], y.prototype, "_propertyType", 2);
y = f([
  j("umb-content-workspace-property")
], y);
function D(l, t) {
  return l.alias === t.alias && C(l, t);
}
class It extends rt {
  constructor() {
    super(...arguments), this.#t = 0, this.finishPropertyValueChange = () => {
      this.#t--, this.#e();
    };
  }
  _sortCurrentData(t, e) {
    e = super._sortCurrentData(t, e);
    const a = t.values;
    return a && e.values ? {
      ...e,
      values: [...e.values].sort(function(r, i) {
        return a.findIndex((s) => D(s, r)) - a.findIndex((s) => D(s, i));
      })
    } : e;
  }
  #t;
  initiatePropertyValueChange() {
    this.#t++, this._current.mute();
  }
  #e() {
    this.#t === 0 && this._current.unmute();
  }
  setVariesByCulture(t) {
    this._variesByCulture = t;
  }
  setVariesBySegment(t) {
    this._variesBySegment = t;
  }
  setVaries(t) {
    this._varies = t;
  }
  async constructData(t) {
    const e = p.CreateInvariant();
    let a = [e];
    if (this._varies === !1 ? t = [e] : a = [...t, e], this._variesBySegment === !0) {
      const s = this.getCurrent().values.map((n) => n.segment);
      a = [
        ...a,
        ...s.flatMap((n) => a.map((u) => u.toSegment(n)))
      ], t = [
        ...t,
        ...s.flatMap((n) => t.map((u) => u.toSegment(n)))
      ];
    }
    const r = this.getCurrent();
    if (!r) throw new Error("Current data is missing");
    const i = this.getPersisted();
    return await new w(this).process(
      i,
      r,
      t,
      a
    );
  }
}
class Ut extends It {
  //
  //#repository;
  #t;
  constructor(t, e) {
    super(t), this.#t = e;
  }
  _sortCurrentData(t, e) {
    e = super._sortCurrentData(t, e);
    const a = t.variants;
    return a && e.variants ? {
      ...e,
      variants: [...e.variants].sort(function(r, i) {
        return a.findIndex((s) => C(s, r)) - a.findIndex((s) => C(s, i));
      })
    } : e;
  }
  /**
   * Sets the variant scaffold data
   * @param {ModelVariantType} variantScaffold The variant scaffold data
   * @memberof UmbContentWorkspaceDataManager
   */
  setVariantScaffold(t) {
    this.#t = t;
  }
  ensureVariantData(t) {
    this.updateVariantData(t);
  }
  updateVariantData(t, e) {
    if (!this.#t) throw new Error("Variant scaffold data is missing");
    if (this._variesByCulture === !0) {
      if (t.isInvariant())
        return;
      this.#e(t, e);
      return;
    }
    if (this._variesBySegment === !0) {
      t.isInvariant() ? this.#r(e) : this.#e(t, e);
      return;
    }
    if (this._varies === !1) {
      this.#r(e);
      return;
    }
    throw new Error("Varies by culture is missing");
  }
  #e(t, e) {
    const a = this.getCurrent();
    if (!a) throw new Error("Data is missing");
    t.isSegmentInvariant() || (e = { ...e, name: "Segment" });
    const r = a.variants.find((s) => t.compare(s)), i = M(
      a.variants,
      {
        ...this.#t,
        ...t.toObject(),
        ...r,
        ...e
      },
      (s) => t.compare(s)
    );
    this.updateCurrent({ variants: i });
  }
  #r(t) {
    const e = this.getCurrent();
    if (!e) throw new Error("Data is missing");
    const a = p.CreateInvariant(), r = e.variants.find((s) => a.compare(s)), i = [
      {
        ...this.#t,
        ...a.toObject(),
        ...r,
        ...t
      }
    ];
    this.updateCurrent({ variants: i });
  }
  getChangedVariants() {
    const t = this.getPersisted(), e = this.getCurrent();
    if (!e) throw new Error("Current data is missing");
    const a = e?.variants.map((i) => {
      const s = t?.variants.find((n) => p.Create(i).compare(n));
      return {
        culture: i.culture,
        segment: i.segment,
        equal: s ? E(i, s) : !1
      };
    }), r = e?.values.map((i) => {
      const s = t?.values.find((n) => p.Create(i).compare(n));
      return {
        culture: i.culture,
        segment: i.segment,
        equal: s ? E(i, s) : !1
      };
    });
    return a?.concat(r ?? []).filter((i) => i.equal === !1).map((i) => new p(i.culture, i.segment)) ?? [];
  }
}
const Bt = (l) => l.IS_CONTENT === !0, ie = new ht("UmbPropertyDatasetContext", void 0, Bt);
class Dt extends L {
  constructor(t, e, a) {
    super(t, q), this.#a = new st([]), this._propertyVariantIdMap = this.#a.asObservable(), this._readOnly = new nt(!1), this.readOnly = this._readOnly.asObservable(), this.#i = new $(this).inherit(), this._dataOwner = e, this.#t = a ?? p.CreateInvariant(), this.#i.setVariantId(this.#t), this.#e = new Promise((r) => {
      this.#r = r;
    }), this.observe(
      this._dataOwner.readOnlyGuard.isPermittedForVariant(this.#t),
      (r) => {
        this._readOnly.setValue(r);
      },
      null
    ), this.observe(
      this._dataOwner.structure.contentTypeProperties,
      (r) => {
        const i = r.map((s) => ({ alias: s.alias, variantId: this.#s(s) }));
        this.#a.setValue(i), this.#r && (this.#r(), this.#r = void 0, this.#e = void 0);
      },
      null
    );
  }
  #t;
  getVariantId() {
    return this.#t;
  }
  #e;
  #r;
  #a;
  #i;
  getEntityType() {
    return this._dataOwner.getEntityType();
  }
  getUnique() {
    return this._dataOwner.getUnique();
  }
  getReadOnly() {
    return this._readOnly.getValue();
  }
  #s(t) {
    return p.Create({
      culture: t.variesByCulture ? this.#t.culture : null,
      segment: t.variesBySegment ? this.#t.segment : null
    });
  }
  #n;
  // Should it be possible to get the properties as a list of property aliases?
  get properties() {
    return this.#n || (this.#n = V(
      [this._propertyVariantIdMap, this._dataOwner.values],
      this.#o
    )), this.#n;
  }
  #o([t, e]) {
    const a = [];
    if (e)
      for (const r of t) {
        const i = e.find((s) => r.alias === s.alias && r.variantId.compare(s));
        i && a.push(i);
      }
    return a;
  }
  async getProperties() {
    return await this.#e, this.#o([
      this.#a.getValue(),
      this._dataOwner.getValues()
    ]);
  }
  /**
   * @function propertyVariantId
   * @param {string} propertyAlias - The property alias to observe the variantId of.
   * @returns {Promise<Observable<UmbVariantId | undefined> | undefined>} - The observable for this properties variantId.
   * @description Get an Observable for the variant id of this property.
   */
  async propertyVariantId(t) {
    return ot(
      this._propertyVariantIdMap,
      (e) => e.find((a) => a.alias === t)?.variantId,
      ut
    );
  }
  /**
   * @function propertyValueByAlias
   * @param {string} propertyAlias  The alias of the property
   * @returns {Promise<Observable<ReturnType | undefined> | undefined>} - An observable of the property value
   * @description Get an Observable for the value of this property.
   */
  async propertyValueByAlias(t) {
    return await this._dataOwner.isLoaded(), await this.#e, V(
      [await this.propertyVariantId(t), this._dataOwner.values],
      ([e, a]) => e ? a?.find((r) => r?.alias === t && e.compare(r))?.value : void 0
    );
  }
  // TODO: Refactor: Not used currently, but should investigate if we can implement this, to spare some energy.
  async propertyValueByAliasAndVariantId(t, e) {
    return this._dataOwner.propertyValueByAlias(t, e);
  }
  /**
   * @function setPropertyValueByVariant
   * @param {string} propertyAlias - The alias of the property
   * @param {unknown} value - value can be a promise resolving into the actual value or the raw value it self.
   * @param {UmbVariantId} propertyVariantId - The variant id for the value to be set for.
   * @returns {Promise<unknown>} - A promise that resolves once the value has been set.
   * @description Get the value of this property.
   */
  setPropertyValueByVariant(t, e, a) {
    return this._dataOwner.setPropertyValue(t, e, a);
  }
  /**
   * @function setPropertyValue
   * @param {string} propertyAlias - The alias for the value to be set
   * @param {PromiseLike<unknown>} value - value can be a promise resolving into the actual value or the raw value it self.
   * @returns {Promise<void>}
   * @description Set the value of this property.
   */
  async setPropertyValue(t, e) {
    this._dataOwner.initiatePropertyValueChange(), await this.#e;
    const a = this.#a.getValue().find((r) => r.alias === t)?.variantId;
    a && await this._dataOwner.setPropertyValue(t, await e, a), this._dataOwner.finishPropertyValueChange();
  }
  destroy() {
    super.destroy(), this.#a?.destroy(), this.#a = void 0;
  }
}
class se extends Dt {
  constructor(t, e, a) {
    super(t, e, a), this.#t = new pt(this), this.#e = new lt(void 0), this.currentVariant = this.#e.asObservable(), this.name = this.#e.asObservablePart((r) => r?.name), this.culture = this.#e.asObservablePart((r) => r?.culture), this.segment = this.#e.asObservablePart((r) => r?.segment), this.IS_CONTENT = !0, this.#t.setAddendum(a ? a.toString() : ""), this.observe(
      this._dataOwner.variantById(this.getVariantId()),
      async (r) => {
        r && this.#e.setValue(r);
      },
      null
    );
  }
  #t;
  #e;
  getName() {
    return this._dataOwner.getName(this.getVariantId());
  }
  setName(t) {
    this._dataOwner.setName(t, this.getVariantId());
  }
  /**
   * @deprecated Its not clear why we have this. We should either document the need better or get rid of it.
   * @returns {UmbEntityVariantModel | undefined} - gives information about the current variant.
   */
  getVariantInfo() {
    return this._dataOwner.getVariant(this.getVariantId());
  }
}
class At extends A {
  async translate(t, e) {
    return t = await S(t, "$.values", async (a) => await new Q(this).translateProperties(a, e.values, N)), t = await S(t, "$.variants", async (a) => await z(a, e.variants, (r) => R(r))), t;
  }
}
class ne extends at {
  constructor(t, e) {
    super(t, e), this.IS_CONTENT_WORKSPACE_CONTEXT = !0, this.readOnlyGuard = new ct(this), this.propertyViewGuard = new P(this), this.propertyWriteGuard = new P(this), this._data = new Ut(this), this.data = this._data.current, this.values = this._data.createObservablePartOfCurrent((r) => r?.values), this.variants = this._data.createObservablePartOfCurrent((r) => r?.variants ?? []), this.persistedData = this._data.persisted, this.#t = new yt(this), this.splitView = new it(), this.#i = new _t(this), this.#s = new I([], (r) => r.unique), this.languages = this.#s.asObservable(), this.#n = new Ot(this), this.#o = new I([], (r) => r.unique), this._segments = this.#o.asObservable(), this._variantOptionsFilter = (r) => !0, this.#u = [], this.#l = new J(this), this.finishPropertyValueChange = () => {
      this._data.finishPropertyValueChange();
    }, this._saveableVariantsFilter = (r) => this.readOnlyGuard.getIsPermittedForVariant(p.Create(r)) === !1, this.propertyViewGuard.fallbackToPermitted(), this.propertyWriteGuard.fallbackToPermitted(), this.#l.addPathTranslator(At), this._data.setVariantScaffold(e.contentVariantScaffold), this.#d = e.saveModalToken, this.#y = e.contentTypePropertyName;
    const a = new e.contentTypeDetailRepository(this);
    this.#h = e.contentValidationRepository, this.#c = e.skipValidationOnSubmit ? !e.skipValidationOnSubmit : !0, this.#m = e.ignoreValidationResultOnSubmit ?? !1, this.structure = new dt(this, a), this.variesByCulture = this.structure.ownerContentTypeObservablePart((r) => r?.variesByCulture), this.variesBySegment = this.structure.ownerContentTypeObservablePart((r) => r?.variesBySegment), this.varies = this.structure.ownerContentTypeObservablePart(
      (r) => r ? r.variesByCulture || r.variesBySegment : void 0
    ), this.variantOptions = V(
      [this.variesByCulture, this.variesBySegment, this.variants, this.languages, this._segments],
      ([r, i, s, n, u]) => {
        if ((r || i) === void 0)
          return [];
        if (!(r || i))
          return [
            {
              variant: s.find((o) => new p(o.culture, o.segment).isInvariant()),
              language: n.find((o) => o.isDefault),
              culture: null,
              segment: null,
              unique: new p().toString()
            }
          ];
        if (r && !i)
          return n.map((o) => ({
            variant: s.find((h) => h.culture === o.unique),
            language: o,
            culture: o.unique,
            segment: null,
            unique: new p(o.unique).toString()
          }));
        if (!r && i) {
          const o = {
            variant: s.find((c) => new p(c.culture, c.segment).isInvariant()),
            language: n.find((c) => c.isDefault),
            culture: null,
            segment: null,
            unique: new p().toString()
          }, h = u.map((c) => ({
            variant: s.find((m) => m.culture === null && m.segment === c.unique),
            language: n.find((m) => m.isDefault),
            segmentInfo: c,
            culture: null,
            segment: c.unique,
            unique: new p(null, c.unique).toString()
          }));
          return [o, ...h];
        }
        return r && i ? n.flatMap((o) => {
          const h = {
            variant: s.find((m) => m.culture === o.unique),
            language: o,
            culture: o.unique,
            segment: null,
            unique: new p(o.unique).toString()
          }, c = u.map((m) => ({
            variant: s.find((_) => _.culture === o.unique && _.segment === m.unique),
            language: o,
            segmentInfo: m,
            culture: o.unique,
            segment: m.unique,
            unique: new p(o.unique, m.unique).toString()
          }));
          return [h, ...c];
        }) : [];
      }
    ).pipe(vt((r) => r.filter((i) => this._variantOptionsFilter(i)))), this.observe(
      this.variantOptions,
      (r) => {
        r.forEach((i) => {
          if (this.#u.filter((n) => {
            const u = n.getVariantId();
            if (u)
              return u.culture === i.culture && u.segment === i.segment;
          })) {
            const n = new Z(this);
            n.inheritFrom(this.validationContext, "$"), n.setVariantId(p.Create(i)), n.autoReport(), this.#u.push(n);
          }
        });
      },
      null
    ), this.observe(
      this.varies,
      (r) => {
        this._data.setVaries(r), this.#e = r;
      },
      null
    ), this.observe(
      this.variesByCulture,
      (r) => {
        this._data.setVariesByCulture(r), this.#r = r;
      },
      null
    ), this.observe(
      this.variesBySegment,
      (r) => {
        this._data.setVariesBySegment(r), this.#a = r;
      },
      null
    ), this.observe(
      this.structure.contentTypeDataTypeUniques,
      (r) => {
        this.#t.setUniques(r);
      },
      null
    ), this.loadLanguages(), this.#f();
  }
  #t;
  #e;
  #r;
  #a;
  #i;
  #s;
  #n;
  #o;
  #u;
  getVariantValidationContext(t) {
    return this.#u.find((e) => e.getVariantId()?.compare(t));
  }
  #c;
  #m;
  #l;
  #h;
  #p;
  #d;
  #y;
  async loadLanguages() {
    const { data: t } = await this.#i.requestCollection({});
    this.#s.setValue(t?.items ?? []);
  }
  async #f() {
    const { data: t } = await this.#n.requestCollection({});
    this.#o.setValue(t?.items ?? []);
  }
  async _scaffoldProcessData(t) {
    await this.structure.loadType(t[this.#y].unique);
    const e = this.#s.getValue().map((o) => o.unique);
    this.structure.variesBySegment && console.warn("Segments are not yet implemented for preset");
    const a = this.structure.variesBySegment ? [] : void 0, r = new ft(this), i = await this.structure.getContentTypeProperties(), s = await Promise.all(
      i.map(async (o) => {
        const h = (await r.requestByUnique(o.dataType.unique)).data;
        if (!h)
          throw new Error(`DataType of "${o.dataType.unique}" not found.`);
        if (!h.editorUiAlias)
          throw new Error(`DataType of "${o.dataType.unique}" did not have a editorUiAlias.`);
        return {
          alias: o.alias,
          propertyEditorUiAlias: h.editorUiAlias,
          propertyEditorSchemaAlias: h.editorAlias,
          config: h.values,
          typeArgs: {
            variesByCulture: o.variesByCulture,
            variesBySegment: o.variesBySegment
          }
        };
      })
    ), n = new K(this);
    n.setCultures(e), a && n.setSegments(a);
    const u = await n.create(s), d = [...t.values];
    for (let o = 0; o < u.length; o++) {
      const h = u[o], c = p.Create(h), m = d.findIndex((_) => _.alias === h.alias && c.compare(_));
      m > -1 ? d[m] = h : d.push(h);
    }
    return t.values = d, t;
  }
  /**
   * Get the name of a variant
   * @param {UmbVariantId } [variantId] - The variant id
   * @returns { string | undefined} - The name of the variant
   * @memberof UmbContentDetailWorkspaceContextBase
   */
  getName(t) {
    const e = this._data.getCurrent()?.variants;
    if (e)
      return t ? e.find((a) => t.compare(a))?.name : e[0]?.name;
  }
  /**
   * Set the name of a variant
   * @param {string} name - The name of the variant
   * @param {UmbVariantId} [variantId] - The variant id
   * @memberof UmbContentDetailWorkspaceContextBase
   */
  setName(t, e) {
    this._data.updateVariantData(e ?? p.CreateInvariant(), { name: t });
  }
  /**
   * Get an observable for the name of a variant
   * @param {UmbVariantId} [variantId] - The variant id
   * @returns {Observable<string>} - The name of the variant
   * @memberof UmbContentDetailWorkspaceContextBase
   */
  name(t) {
    return this._data.createObservablePartOfCurrent(
      (e) => e?.variants?.find((a) => t?.compare(a))?.name ?? ""
    );
  }
  /* Variants */
  /**
   * Get whether the content varies by culture
   * @returns { boolean | undefined } - If the content varies by culture
   * @memberof UmbContentDetailWorkspaceContextBase
   */
  getVariesByCulture() {
    return this.#r;
  }
  /**
   * Get whether the content varies by segment
   * @returns {boolean | undefined} - If the content varies by segment
   * @memberof UmbContentDetailWorkspaceContextBase
   */
  getVariesBySegment() {
    return this.#a;
  }
  /**
   * Get whether the content varies
   * @returns { boolean | undefined } - If the content varies
   * @memberof UmbContentDetailWorkspaceContextBase
   */
  getVaries() {
    return this.#e;
  }
  /**
   * Get the variant by the given variantId
   * @param {UmbVariantId} variantId - The variant id
   * @returns { Observable<VariantModelType | undefined> } - The variant or undefined if not found
   * @memberof UmbContentDetailWorkspaceContextBase
   */
  variantById(t) {
    return this._data.createObservablePartOfCurrent((e) => e?.variants?.find((a) => t.compare(a)));
  }
  /**
   * Get the variant by the given variantId
   * @param {UmbVariantId} variantId - The variant id
   * @returns { VariantModelType | undefined } - The variant or undefined if not found
   * @memberof UmbContentDetailWorkspaceContextBase
   */
  getVariant(t) {
    return this._data.getCurrent()?.variants?.find((e) => t.compare(e));
  }
  getVariants() {
    return this._data.getCurrent()?.variants;
  }
  /**
   * Observe the property type
   * @param {string} propertyId - The id of the property
   * @returns {Promise<Observable<UmbPropertyTypeModel | undefined>>} - An observable for the property type
   * @memberof UmbContentDetailWorkspaceContextBase
   */
  async propertyStructureById(t) {
    return this.structure.propertyStructureById(t);
  }
  /* Values */
  /**
   * Get the values of the content
   * @returns {Array<UmbElementValueModel> | undefined} - The values of the content
   * @memberof UmbContentDetailWorkspaceContextBase
   */
  getValues() {
    return this._data.getCurrent()?.values;
  }
  /**
   * @function propertyValueByAlias
   * @param {string} propertyAlias - The alias of the property
   * @param {UmbVariantId} variantId - The variant
   * @returns {Promise<Observable<ReturnType | undefined> | undefined>} - An observable for the value of the property
   * @description Get an Observable for the value of this property.
   */
  async propertyValueByAlias(t, e) {
    return this._data.createObservablePartOfCurrent(
      (a) => a?.values?.find((r) => r?.alias === t && (e ? e.compare(r) : !0))?.value
    );
  }
  /**
   * Get the current value of the property with the given alias and variantId.
   * @param {string} alias - The alias of the property
   * @param {UmbVariantId | undefined} variantId - The variant id of the property
   * @returns {ReturnType | undefined} The value or undefined if not set or found.
   */
  getPropertyValue(t, e) {
    const a = this._data.getCurrent();
    if (a)
      return a.values?.find(
        (i) => i.alias === t && (e ? e.compare(i) : !0)
      )?.value;
  }
  /**
   * Set the value of the property with the given alias and variantId.
   * @template ValueType
   * @param {string} alias - The alias of the property
   * @param {ValueType} value - The value to set
   * @param {UmbVariantId} [variantId] - The variant id of the property
   * @memberof UmbContentDetailWorkspaceContextBase
   */
  async setPropertyValue(t, e, a) {
    this.initiatePropertyValueChange(), a ??= p.CreateInvariant();
    const r = await this.structure.getPropertyStructureByAlias(t);
    if (!r)
      throw new Error(`Property alias "${t}" not found.`);
    const i = (await this.#t.getItemByUnique(r.dataType.unique)).propertyEditorSchemaAlias;
    if (!i)
      throw new Error(`Editor Alias of "${r.dataType.unique}" not found.`);
    const s = {
      editorAlias: i,
      // Be aware that this solution is a bit magical, and based on a naming convention.
      // We might want to make this more flexible at some point and get the entityType from somewhere instead of constructing it here.
      entityType: `${this.getEntityType()}-property-value`,
      ...a.toObject(),
      alias: t,
      value: e
    }, n = this.getData();
    if (n) {
      const u = M(
        n.values ?? [],
        s,
        (d) => d.alias === t && a.compare(d)
      );
      this._data.updateCurrent({ values: u }), this._data.ensureVariantData(a);
    }
    this.finishPropertyValueChange();
  }
  initiatePropertyValueChange() {
    this._data.initiatePropertyValueChange();
  }
  /**
   * Gets the changed variant ids
   * @returns {Array<UmbVariantId>} - The changed variant ids
   * @memberof UmbContentDetailWorkspaceContextBase
   */
  getChangedVariants() {
    return this._data.getChangedVariants();
  }
  async _determineVariantOptions() {
    const t = (await wt(this.variantOptions)).filter((h) => h.segment === null), a = this.splitView.getActiveVariants().map((h) => p.Create(h)), r = this._data.getChangedVariants(), i = [...a, ...r], s = i.filter((h) => h.segment !== null).map((h) => h.toSegmentInvariant()), d = [...i, ...s].filter(
      (h) => this.readOnlyGuard.getIsPermittedForVariant(h) === !1
    ).map((h) => h.toString()).filter((h, c, m) => m.indexOf(h) === c), o = [...new Set(d)];
    return {
      options: t,
      selected: o
    };
  }
  /* validation */
  /**
   * Run the mandatory validation for the save data
   * @deprecated Use the public runMandatoryValidationForSaveData instead. Will be removed in v. 17.
   * @protected
   * @param {DetailModelType} saveData - The data to validate
   * @memberof UmbContentDetailWorkspaceContextBase
   */
  async _runMandatoryValidationForSaveData(t, e = []) {
    new mt({
      removeInVersion: "17",
      deprecated: "_runMandatoryValidationForSaveData",
      solution: "Use the public runMandatoryValidationForSaveData instead."
    }).warn(), this.runMandatoryValidationForSaveData(t, e);
  }
  /**
   * Run the mandatory validation for the save data
   * @param {DetailModelType} saveData - The data to validate
   * @memberof UmbContentDetailWorkspaceContextBase
   */
  async runMandatoryValidationForSaveData(t, e = []) {
    if (this.getVariesByCulture() && (e = e.filter((i) => !i.isCultureInvariant())), e.filter((i) => !t.variants.some((s) => i.compare(s))).length > 0)
      throw new Error("One or more selected variants have not been created");
    const r = t.variants.filter((i) => !i.name);
    if (r.length > 0) {
      const i = await this.getContext(tt);
      throw i ? (r.forEach((s) => {
        i.messages.addMessage(
          "client",
          `$.variants[${R(s)}].name`,
          et
        );
      }), new Error(
        "All variants must have a name, these variants are missing a name: " + r.map((s) => (s.culture ?? "invariant") + "_" + (s.segment ?? "")).join(", ")
      )) : new Error("Validation context is missing");
    }
  }
  /**
   * Ask the server to validate the save data
   * @param {DetailModelType} saveData - The data to validate
   * @param {Array<UmbVariantId>} variantIds - The variant ids to validate
   * @memberof UmbContentDetailWorkspaceContextBase
   */
  async askServerToValidate(t, e) {
    if (this.#h)
      if (this.#p ??= new this.#h(this), this.getIsNew()) {
        const a = this._internal_getCreateUnderParent();
        if (!a) throw new Error("Parent is not set");
        await this.#l.askServerForValidation(
          t,
          this.#p.validateCreate(t, a.unique)
        );
      } else
        await this.#l.askServerForValidation(
          t,
          this.#p.validateSave(t, e)
        );
  }
  /**
   * Request a submit of the workspace, in the case of Document Workspaces the validation does not need to be valid for this to be submitted.
   * @returns {Promise<void>} a promise which resolves once it has been completed.
   */
  requestSubmit() {
    return this._handleSubmit();
  }
  submit() {
    return this._handleSubmit();
  }
  /**
   * Request a save of the workspace, in the case of Document Workspaces the validation does not need to be valid for this to be saved.
   * @returns {Promise<void>} a promise which resolves once it has been completed.
   */
  requestSave() {
    return this._handleSave();
  }
  /**
   * Get the data to save
   * @param {Array<UmbVariantId>} variantIds - The variant ids to save
   * @returns {Promise<DetailModelType>}  {Promise<DetailModelType>}
   * @memberof UmbContentDetailWorkspaceContextBase
   */
  constructSaveData(t) {
    return this._data.constructData(t);
  }
  async _handleSubmit() {
    await this._handleSave(), this._closeModal();
  }
  async _handleSave() {
    if (!this.getData())
      throw new Error("Data is missing");
    const { options: e, selected: a } = await this._determineVariantOptions();
    let r = [];
    if (e.length === 0)
      throw new Error("No variants are available");
    if (e.length === 1)
      r.push(p.Create(e[0]));
    else if (this.#d) {
      const s = await gt(this, this.#d, {
        data: {
          options: e,
          pickableFilter: this._saveableVariantsFilter
        },
        value: { selection: a }
      }).catch(() => {
      });
      if (!s?.selection.length) return;
      r = s?.selection.map((n) => p.FromString(n)) ?? [];
    } else
      r = a.map((s) => p.FromString(s));
    const i = await this.constructSaveData(r);
    if (await this.runMandatoryValidationForSaveData(i, r), this.#c) {
      if (await this.askServerToValidate(i, r), await this._validateAndLog().then(
        () => !0,
        () => !1
      ) || this.#m)
        return this.performCreateOrUpdate(r, i);
    } else
      await this.performCreateOrUpdate(r, i);
  }
  /**
   * Perform the create or update of the content
   * @deprecated Use the public performCreateOrUpdate instead. Will be removed in v. 17.
   * @protected
   * @param {Array<UmbVariantId>} variantIds
   * @param {DetailModelType} saveData
   * @memberof UmbContentDetailWorkspaceContextBase
   */
  async _performCreateOrUpdate(t, e) {
    await this.performCreateOrUpdate(t, e);
  }
  /**
   * Perform the create or update of the content
   * @param {Array<UmbVariantId>} variantIds - The variant ids to save
   * @param {DetailModelType} saveData - The data to save
   * @memberof UmbContentDetailWorkspaceContextBase
   */
  async performCreateOrUpdate(t, e) {
    this.getIsNew() ? await this.#_(t, e) : await this.#v(t, e);
  }
  async #_(t, e) {
    if (!this._detailRepository) throw new Error("Detail repository is not set");
    const a = this._internal_getCreateUnderParent();
    if (!a) throw new Error("Parent is not set");
    const { data: r, error: i } = await this._detailRepository.create(e, a.unique);
    if (!r || i)
      throw new Error("Error creating content");
    const s = [...t, p.CreateInvariant()], n = this._data.getCurrent(), u = await new w(this).process(
      n,
      r,
      t,
      s
    );
    this._data.setPersisted(u);
    const d = this._data.getCurrent(), o = await new w(this).process(
      d,
      r,
      t,
      s
    );
    this._data.setCurrent(o), this.setIsNew(!1);
    const h = await this.getContext(U);
    if (!h)
      throw new Error("Event context is missing");
    const c = new Ct({
      entityType: a.entityType,
      unique: a.unique
    });
    h.dispatchEvent(c);
  }
  async #v(t, e) {
    if (!this._detailRepository) throw new Error("Detail repository is not set");
    const { data: a, error: r } = await this._detailRepository.save(e);
    if (!a || r)
      throw new Error("Error saving content");
    const i = [...t, p.CreateInvariant()], s = this._data.getCurrent(), n = await new w(this).process(
      s,
      a,
      t,
      i
    );
    this._data.setPersisted(n);
    const u = this._data.getCurrent(), d = await new w(this).process(
      u,
      a,
      t,
      i
    );
    this._data.setCurrent(d);
    const o = this.getUnique(), h = this.getEntityType(), c = await this.getContext(U);
    if (!c)
      throw new Error("Event context is missing");
    const m = new Vt({ unique: o, entityType: h });
    c.dispatchEvent(m);
    const _ = new bt({
      unique: o,
      entityType: h,
      eventUnique: this._workspaceEventUnique
    });
    c.dispatchEvent(_);
  }
  resetState() {
    super.resetState(), this.structure.clear(), this.readOnlyGuard.clearRules(), this.propertyViewGuard.clearRules(), this.propertyWriteGuard.clearRules(), this.propertyViewGuard.fallbackToPermitted(), this.propertyWriteGuard.fallbackToPermitted();
  }
  destroy() {
    this.structure.destroy(), this.#i.destroy(), super.destroy();
  }
}
export {
  Bt as IsContentPropertyDatasetContext,
  le as UMB_CONTENT_COLLECTION_WORKSPACE_CONTEXT,
  re as UMB_CONTENT_HAS_PROPERTIES_WORKSPACE_CONDITION,
  pe as UMB_CONTENT_PROPERTY_CONTEXT,
  ie as UMB_CONTENT_PROPERTY_DATASET_CONTEXT,
  ae as UMB_CONTENT_SECTION_ALIAS,
  F as UMB_CONTENT_WORKSPACE_CONTEXT,
  de as UMB_PROPERTY_TYPE_BASED_PROPERTY_CONTEXT,
  _e as UMB_SORT_CHILDREN_OF_CONTENT_MODAL,
  ve as UMB_SORT_CHILDREN_OF_CONTENT_MODAL_ALIAS,
  we as UMB_WORKSPACE_HAS_CONTENT_COLLECTION_CONDITION_ALIAS,
  ne as UmbContentDetailWorkspaceContextBase,
  ce as UmbContentPropertyContext,
  se as UmbContentPropertyDatasetContext,
  Ut as UmbContentWorkspaceDataManager,
  y as UmbContentWorkspacePropertyElement,
  Dt as UmbElementPropertyDatasetContext,
  It as UmbElementWorkspaceDataManager,
  w as UmbMergeContentVariantDataController,
  me as UmbPropertyTypeBasedPropertyContext,
  ye as UmbPropertyTypeBasedPropertyElement
};
//# sourceMappingURL=index.js.map
