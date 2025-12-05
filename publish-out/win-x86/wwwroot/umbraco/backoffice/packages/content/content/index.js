import { U as _e } from "../content-collection-workspace.context-token-BkMq2Z0s.js";
import { UmbObjectState as b, UmbBooleanState as R, appendToFrozenArray as x, jsonStringComparison as E, UmbBasicState as X, mergeObservables as T, createObservablePart as H, classEqualMemoization as Y, UmbArrayState as I, observeMultiple as K } from "@umbraco-cms/backoffice/observable-api";
import { UmbControllerBase as C, UmbContextBase as z } from "@umbraco-cms/backoffice/class-api";
import { UmbDataTypeDetailRepository as k, UmbDataTypeItemRepositoryManager as Q } from "@umbraco-cms/backoffice/data-type";
import { UmbPropertyEditorConfigCollection as J } from "@umbraco-cms/backoffice/property-editor";
import { b as Ce, a as Ve, c as be, c as Te, U as Oe } from "../property-type-based-property.element-BMqRIO7K.js";
import { U as Se, b as Ee, a as Ie } from "../sort-children-of-content-modal.token-DYwtOc5Y.js";
import { U as Z } from "../content-workspace.context-token-BMs4lY7q.js";
import { createExtensionApi as tt } from "@umbraco-cms/backoffice/extension-api";
import { umbExtensionsRegistry as et } from "@umbraco-cms/backoffice/extension-registry";
import { UmbVariantId as c, umbVariantObjectCompare as O, UmbVariantContext as at } from "@umbraco-cms/backoffice/variant";
import { property as rt, state as w, customElement as it, nothing as V, html as st } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as nt } from "@umbraco-cms/backoffice/lit-element";
import { UMB_PROPERTY_DATASET_CONTEXT as F, UmbVariantPropertyGuardManager as U, UmbPropertyValuePresetVariantBuilderController as ot } from "@umbraco-cms/backoffice/property";
import { UmbDataPathPropertyValueQuery as W, umbScopeMapperForJsonPaths as B, UmbValidationPropertyPathTranslationController as ut, umbQueryMapperForJsonPaths as lt, UmbDataPathVariantQuery as L, extractJsonQueryProps as ht, UmbServerModelValidatorContext as ct, UmbValidationController as dt, UMB_VALIDATION_CONTEXT as pt, UMB_VALIDATION_EMPTY_LOCALIZATION_KEY as mt } from "@umbraco-cms/backoffice/validation";
import { UMB_CURRENT_USER_CONTEXT as yt } from "@umbraco-cms/backoffice/current-user";
import { UmbEntityWorkspaceDataManager as ft, UmbEntityDetailWorkspaceContextBase as vt, UmbWorkspaceSplitViewManager as wt } from "@umbraco-cms/backoffice/workspace";
import { UmbContextToken as _t } from "@umbraco-cms/backoffice/context-api";
import { UmbRoutePathAddendumContext as gt } from "@umbraco-cms/backoffice/router";
import { map as Ct, firstValueFrom as D } from "@umbraco-cms/backoffice/external/rxjs";
import { umbOpenModal as Vt } from "@umbraco-cms/backoffice/modal";
import { UmbContentTypeStructureManager as bt } from "@umbraco-cms/backoffice/content-type";
import { UmbReadOnlyVariantGuardManager as Tt, UmbDeprecation as Ot } from "@umbraco-cms/backoffice/utils";
import { UmbRequestReloadStructureForEntityEvent as A, UmbRequestReloadChildrenOfEntityEvent as Pt, UmbEntityUpdatedEvent as St } from "@umbraco-cms/backoffice/entity-action";
import { UmbLanguageCollectionRepository as Et } from "@umbraco-cms/backoffice/language";
import { UmbSegmentCollectionRepository as It } from "@umbraco-cms/backoffice/segment";
import { UMB_ACTION_EVENT_CONTEXT as q } from "@umbraco-cms/backoffice/action";
class Ut extends C {
  constructor(t, e, i) {
    super(t), this.#a = new b(void 0), this.collectionConfig = this.#a.asObservable(), this.#r = new b(void 0), this.manifestOverrides = this.#r.asObservable(), this.#i = new R(!1), this.hasCollection = this.#i.asObservable(), this.#s = new k(this), this.#t = t, this.#e = i, this.observe(
      i ? e.ownerContentType : void 0,
      async (a) => {
        this.#i.setValue(!!a?.collection);
        const r = a?.collection?.unique;
        r && (this.#s.requestByUnique(r), this.observe(
          await this.#s.byUnique(r),
          (s) => {
            this.#n(s);
          },
          "_observeConfigDataType"
        ));
      },
      null
    );
  }
  #t;
  #e;
  #a;
  #r;
  #i;
  #s;
  getCollectionAlias() {
    return this.#e;
  }
  #n(t) {
    if (!t) {
      this.#a.setValue(void 0), this.#r.setValue(void 0);
      return;
    }
    const e = new J(t.values), i = Number(e.getValueByAlias("pageSize"));
    this.#a.setValue({
      unique: this.#t.getUnique(),
      layouts: e?.getValueByAlias("layouts"),
      orderBy: e?.getValueByAlias("orderBy") ?? "updateDate",
      orderDirection: e?.getValueByAlias("orderDirection") ?? "asc",
      pageSize: isNaN(i) ? 50 : i,
      userDefinedProperties: e?.getValueByAlias("includeProperties")
    });
    const a = {
      alias: "Umb.WorkspaceView.Content.Collection",
      meta: {}
    }, r = e?.getValueByAlias("icon");
    r && r !== "" && (a.meta.icon = r);
    const s = e?.getValueByAlias("tabName");
    s && s !== "" && (a.meta.label = s), e?.getValueByAlias("showContentFirst") === !0 && (a.weight = 150), this.#r.setValue(a);
  }
}
const de = "Umb.Condition.Workspace.ContentHasProperties", pe = "Umb.Section.Content";
function N(u, t) {
  return u.culture === t.culture && u.segment === t.segment;
}
class _ extends C {
  /**
   * Merges content variant data based on selected variants and variants to store.
   * @param {UmbContentLikeDetailModel | undefined} persistedData - The persisted content variant data.
   * @param {UmbContentLikeDetailModel} currentData - The current content variant data.
   * @param {Array<UmbVariantId>} selectedVariants - The selected variants.
   * @param {Array<UmbVariantId>} variantsToStore - The variants to store, we sometimes have additional variants that we like to process. This is typically the invariant variant, which we do not want to have as part of the variants data therefore a difference.
   * @returns {Promise<UmbContentLikeDetailModel>} - A promise that resolves to the merged content variant data.
   */
  async process(t, e, i, a) {
    const r = { ...e };
    return r.values = await this.#t(
      t?.values,
      e.values,
      a
    ), e.variants && (r.variants = this.#a(
      t?.variants,
      e.variants,
      i,
      N
    )), this.destroy(), r;
  }
  /**
   * Builds and saves values based on selected variants and variants to store.
   * @param {Array<UmbPotentialContentValueModel> | undefined} persistedValues - The persisted values.
   * @param {Array<UmbPotentialContentValueModel> | undefined} draftValues - The draft values.
   * @param {Array<UmbVariantId>}variantsToStore - The variants to store.
   * @returns {Promise<Array<UmbPotentialContentValueModel>>} - A promise that resolves to the saved values.
   */
  async #t(t, e, i) {
    const a = [...t ?? [], ...e ?? []].filter(
      (r, s, n) => s === n.findIndex((o) => o.alias === r.alias && o.culture === r.culture && o.segment === r.segment)
    );
    return (await Promise.all(
      a.map((r) => {
        const s = t?.find(
          (n) => n.alias === r.alias && n.culture === r.culture && n.segment === r.segment
        );
        if (i.some((n) => n.equal(c.CreateFromPartial(r)))) {
          const n = e?.find(
            (o) => o.alias === r.alias && o.culture === r.culture && o.segment === r.segment
          );
          return this.#e(s, n, i);
        } else
          return Promise.resolve(s);
      })
    )).filter((r) => r !== void 0);
  }
  /**
   * Builds and saves a value based on selected variants and variants to store.
   * @param {UmbPotentialContentValueModel | undefined} persistedValue - The persisted value.
   * @param {UmbPotentialContentValueModel | undefined} draftValue - The draft value.
   * @param {Array<UmbVariantId>} variantsToStore - The variants to store.
   * @returns {Promise<UmbPotentialContentValueModel | undefined>} A promise that resolves to the saved value.
   */
  async #e(t, e, i) {
    const a = e?.editorAlias ?? t?.editorAlias;
    if (!a)
      return console.error(`Editor alias not found for ${a}`, e, t), e;
    if (!e)
      return;
    const r = et.getByTypeAndFilter(
      "propertyValueResolver",
      // TODO: Remove depcrated filter in v.17 [NL]
      (o) => o.forEditorAlias === a || o.meta?.editorAlias === a
    )[0];
    if (!r)
      return e;
    const s = await tt(this, r);
    if (!s)
      return e;
    s.manifest = r;
    let n = e;
    if (s.processValues) {
      const o = [];
      t && await s.processValues(t, async (l) => {
        o.push(l);
      });
      let p = 0;
      n = await s.processValues(n, async (l) => {
        const h = o[p++];
        return await this.#t(h, l, i);
      }) ?? n;
    }
    if (s.processVariants) {
      const o = [];
      t && await s.processVariants(t, async (l) => {
        o.push(l);
      });
      let p = 0;
      n = await s.processVariants(n, async (l) => {
        const h = o[p++];
        return await this.#a(
          h,
          l,
          i,
          s.compareVariants ?? N
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
  #a(t, e, i, a) {
    return [...t ?? [], ...e ?? []].filter(
      (s, n, o) => n === o.findIndex((p) => a(p, s))
    ).map((s) => {
      const n = t?.find((o) => a(o, s));
      return i.some((o) => o.compare(s)) ? e?.find((p) => a(p, s)) : n;
    }).filter((s) => s !== void 0);
  }
}
var Bt = Object.defineProperty, Dt = Object.getOwnPropertyDescriptor, $ = (u) => {
  throw TypeError(u);
}, f = (u, t, e, i) => {
  for (var a = i > 1 ? void 0 : i ? Dt(t, e) : t, r = u.length - 1, s; r >= 0; r--)
    (s = u[r]) && (a = (i ? s(t, e, a) : s(a)) || a);
  return i && a && Bt(t, e, a), a;
}, At = (u, t, e) => t.has(u) || $("Cannot " + e), qt = (u, t, e) => t.has(u) ? $("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(u) : t.set(u, e), P = (u, t, e) => (At(u, t, "access private method"), e), g, S, G;
let y = class extends nt {
  constructor() {
    super(), qt(this, g), this._hasAccessToSensitiveData = !1, this.consumeContext(F, (u) => {
      this._datasetVariantId = u?.getVariantId();
    }), this.consumeContext(Z, async (u) => {
      this._workspaceContext = u, P(this, g, S).call(this);
    }), this.consumeContext(yt, (u) => {
      this.observe(u?.hasAccessToSensitiveData, (t) => {
        this._hasAccessToSensitiveData = t === !0;
      });
    });
  }
  get alias() {
    return this._alias;
  }
  set alias(u) {
    this._alias = u, P(this, g, S).call(this);
  }
  willUpdate(u) {
    if (super.willUpdate(u), (u.has("_propertyType") || u.has("_datasetVariantId") || u.has("_workspaceContext")) && this._datasetVariantId && this._propertyType && this._workspaceContext) {
      const t = new c(
        this._propertyType.variesByCulture ? this._datasetVariantId.culture : null,
        this._propertyType.variesBySegment ? this._datasetVariantId.segment : null
      );
      this._dataPath = `$.values[${W({
        alias: this._propertyType.alias,
        culture: t.culture,
        segment: t.segment
      })}].value`, this.observe(
        this._workspaceContext.propertyWriteGuard.isPermittedForVariantAndProperty(
          t,
          this._propertyType,
          this._datasetVariantId
        ),
        (e) => {
          this._writeable = e;
        },
        "observeView"
      );
    }
  }
  render() {
    return this._viewable ? !this._dataPath || this._writeable === void 0 ? V : !this._hasAccessToSensitiveData && this._propertyType?.isSensitive ? V : st`<umb-property-type-based-property
			data-path=${this._dataPath}
			.property=${this._propertyType}
			?readonly=${!this._writeable}></umb-property-type-based-property>` : V;
  }
};
g = /* @__PURE__ */ new WeakSet();
S = async function() {
  !this._alias || !this._workspaceContext || this.observe(await this._workspaceContext?.structure.propertyStructureByAlias(this._alias), (u) => {
    this._propertyType = u, P(this, g, G).call(this);
  });
};
G = function() {
  if (!this._workspaceContext || !this._propertyType || !this._datasetVariantId) return;
  const u = new c(
    this._propertyType.variesByCulture ? this._datasetVariantId.culture : null,
    this._propertyType.variesBySegment ? this._datasetVariantId.segment : null
  );
  this.observe(
    this._workspaceContext.propertyViewGuard.isPermittedForVariantAndProperty(
      u,
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
  rt({ type: String, attribute: "alias" })
], y.prototype, "alias", 1);
f([
  w()
], y.prototype, "_datasetVariantId", 2);
f([
  w()
], y.prototype, "_dataPath", 2);
f([
  w()
], y.prototype, "_viewable", 2);
f([
  w()
], y.prototype, "_writeable", 2);
f([
  w()
], y.prototype, "_workspaceContext", 2);
f([
  w()
], y.prototype, "_propertyType", 2);
f([
  w()
], y.prototype, "_hasAccessToSensitiveData", 2);
y = f([
  it("umb-content-workspace-property")
], y);
function M(u, t) {
  return u.alias === t.alias && O(u, t);
}
class Nt extends ft {
  constructor() {
    super(...arguments), this.#t = 0, this.finishPropertyValueChange = () => {
      this.#t--, this.#e();
    };
  }
  _sortCurrentData(t, e) {
    e = super._sortCurrentData(t, e);
    const i = t.values;
    return i && e.values ? {
      ...e,
      values: [...e.values].sort(function(a, r) {
        return i.findIndex((s) => M(s, a)) - i.findIndex((s) => M(s, r));
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
    const e = c.CreateInvariant();
    let i = [e];
    this._varies === !1 ? t = [e] : i = [...t, e];
    const a = this.getCurrent();
    if (!a) throw new Error("Current data is missing");
    if (this._variesBySegment === !0) {
      const s = a.values.map((n) => n.segment).filter((n) => n);
      i = [
        ...i,
        ...s.flatMap((n) => i.map((o) => o.toSegment(n)))
      ], t = [
        ...t,
        ...s.flatMap((n) => t.map((o) => o.toSegment(n)))
      ];
    }
    const r = this.getPersisted();
    return await new _(this).process(
      r,
      a,
      t,
      i
    );
  }
}
class Mt extends Nt {
  //
  //#repository;
  #t;
  constructor(t, e) {
    super(t), this.#t = e;
  }
  _sortCurrentData(t, e) {
    e = super._sortCurrentData(t, e);
    const i = t.variants;
    return i && e.variants ? {
      ...e,
      variants: [...e.variants].sort(function(a, r) {
        return i.findIndex((s) => O(s, a)) - i.findIndex((s) => O(s, r));
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
      t.isInvariant() ? this.#a(e) : this.#e(t, e);
      return;
    }
    if (this._varies === !1) {
      this.#a(e);
      return;
    }
    throw new Error("Varies by culture is missing");
  }
  #e(t, e) {
    const i = this.getCurrent();
    if (!i) throw new Error("Data is missing");
    t.isSegmentInvariant() || (e = { ...e, name: "Segment" });
    const a = i.variants.find((s) => t.compare(s)), r = x(
      i.variants,
      {
        ...this.#t,
        ...t.toObject(),
        ...a,
        ...e
      },
      (s) => t.compare(s)
    );
    this.updateCurrent({ variants: r });
  }
  #a(t) {
    const e = this.getCurrent();
    if (!e) throw new Error("Data is missing");
    const i = c.CreateInvariant(), a = e.variants.find((s) => i.compare(s)), r = [
      {
        ...this.#t,
        ...i.toObject(),
        ...a,
        ...t
      }
    ];
    this.updateCurrent({ variants: r });
  }
  getChangedVariants() {
    const t = this.getPersisted(), e = this.getCurrent();
    if (!e) throw new Error("Current data is missing");
    const i = e?.variants.map((r) => {
      const s = t?.variants.find((n) => c.Create(r).compare(n));
      return {
        culture: r.culture,
        segment: r.segment,
        equal: s ? E(r, s) : !1
      };
    }), a = e?.values.map((r) => {
      const s = t?.values.find((n) => c.Create(r).compare(n));
      return {
        culture: r.culture,
        segment: r.segment,
        equal: s ? E(r, s) : !1
      };
    });
    return i?.concat(a ?? []).filter((r) => r.equal === !1).map((r) => new c(r.culture, r.segment)) ?? [];
  }
}
const Rt = (u) => u.IS_CONTENT === !0, me = new _t("UmbPropertyDatasetContext", void 0, Rt);
class xt extends z {
  constructor(t, e, i) {
    super(t, F), this.#r = new X([]), this._propertyVariantIdMap = this.#r.asObservable(), this._readOnly = new R(!1), this.readOnly = this._readOnly.asObservable(), this.#i = new at(this).inherit(), this._dataOwner = e, this.#t = i ?? c.CreateInvariant(), this.#i.setVariantId(this.#t), this.#e = new Promise((a) => {
      this.#a = a;
    }), this.observe(
      this._dataOwner.readOnlyGuard.isPermittedForVariant(this.#t),
      (a) => {
        this._readOnly.setValue(a);
      },
      null
    ), this.observe(
      this._dataOwner.structure.contentTypeProperties,
      (a) => {
        const r = a.map((s) => ({ alias: s.alias, variantId: this.#s(s) }));
        this.#r.setValue(r), this.#a && (this.#a(), this.#a = void 0, this.#e = void 0);
      },
      null
    );
  }
  #t;
  getVariantId() {
    return this.#t;
  }
  #e;
  #a;
  #r;
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
    return c.Create({
      culture: t.variesByCulture ? this.#t.culture : null,
      segment: t.variesBySegment ? this.#t.segment : null
    });
  }
  #n;
  // Should it be possible to get the properties as a list of property aliases?
  get properties() {
    return this.#n || (this.#n = T(
      [this._propertyVariantIdMap, this._dataOwner.values],
      this.#o
    )), this.#n;
  }
  #o([t, e]) {
    const i = [];
    if (e)
      for (const a of t) {
        const r = e.find((s) => a.alias === s.alias && a.variantId.compare(s));
        r && i.push(r);
      }
    return i;
  }
  async getProperties() {
    return await this.#e, this.#o([
      this.#r.getValue(),
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
    return H(
      this._propertyVariantIdMap,
      (e) => e.find((i) => i.alias === t)?.variantId,
      Y
    );
  }
  /**
   * @function propertyValueByAlias
   * @param {string} propertyAlias  The alias of the property
   * @returns {Promise<Observable<ReturnType | undefined> | undefined>} - An observable of the property value
   * @description Get an Observable for the value of this property.
   */
  async propertyValueByAlias(t) {
    return await this._dataOwner.isLoaded(), await this.#e, T(
      [await this.propertyVariantId(t), this._dataOwner.values],
      ([e, i]) => e ? i?.find((a) => a?.alias === t && e.compare(a))?.value : void 0
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
  setPropertyValueByVariant(t, e, i) {
    return this._dataOwner.setPropertyValue(t, e, i);
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
    const i = this.#r.getValue().find((a) => a.alias === t)?.variantId;
    i && await this._dataOwner.setPropertyValue(t, await e, i), this._dataOwner.finishPropertyValueChange();
  }
  destroy() {
    super.destroy(), this.#r?.destroy(), this.#r = void 0;
  }
}
class ye extends xt {
  constructor(t, e, i) {
    super(t, e, i), this.#t = new gt(this), this.#e = new b(void 0), this.currentVariant = this.#e.asObservable(), this.name = this.#e.asObservablePart((a) => a?.name), this.culture = this.#e.asObservablePart((a) => a?.culture), this.segment = this.#e.asObservablePart((a) => a?.segment), this.IS_CONTENT = !0, this.#t.setAddendum(i ? i.toString() : ""), this.observe(
      this._dataOwner.variantById(this.getVariantId()),
      async (a) => {
        a && this.#e.setValue(a);
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
class kt extends C {
  async translate(t, e) {
    return t = await B(t, "$.values", async (i) => await new ut(this).translateProperties(i, e.values, W)), t = await B(t, "$.variants", async (i) => await lt(i, e.variants, (a) => L(a))), t;
  }
}
class Ft extends C {
  /*workspace.hints.addOne({
  		unique: 'exampleHintFromToggleAction',
  		path: ['Umb.WorkspaceView.Document.Edit'],
  		text: 'Hi',
  		color: 'invalid',
  		weight: 100,
  	});
  
  	TODO:
  	* Maintaine structural awareness of all Properties.
  	* Observe validation messages for all Properties, and turn them into Hints as fitting.
  	*/
  #t = /* @__PURE__ */ new Set();
  #e = [];
  constructor(t, e, i, a, r = ["Umb.WorkspaceView.Document.Edit"]) {
    super(t), this.observe(e.contentTypeMergedContainers, (s) => {
      this.#e = s;
    }), this.observe(i.messages.messagesOfPathAndDescendant("$.values"), (s) => {
      s.forEach((n) => {
        if (this.#t.has(n.key)) return;
        const o = Wt(n.path);
        if (!o) return;
        const p = ht(o), l = p.alias, h = c.CreateFromPartial(p);
        e.getPropertyStructureByAlias(l).then((d) => {
          if (!d) return;
          let m = [];
          if (d.container) {
            const v = this.#e.find((j) => j.ids.includes(d.container.id));
            if (v)
              m = v.path;
            else
              throw new Error(
                `Could not find the declared container of id "${d.container.id}" for property with alias: "${d.alias}"`
              );
          }
          a.addOne({
            unique: n.key,
            path: [...r, ...m],
            text: "!",
            /*label: message.body,*/
            color: "invalid",
            weight: 1e3,
            variantId: h
          }), this.#t.add(n.key);
        });
      }), this.#t.forEach((n) => {
        s.some((o) => o.key === n) || (this.#t.delete(n), a.removeOne(n));
      });
    });
  }
}
function Wt(u) {
  const t = u.indexOf("[");
  if (t === -1) return null;
  const e = u.indexOf("]", t + 1);
  return e === -1 ? null : u.substring(t + 1, e);
}
class fe extends vt {
  constructor(t, e) {
    super(t, e), this.IS_CONTENT_WORKSPACE_CONTEXT = !0, this.readOnlyGuard = new Tt(this), this.propertyViewGuard = new U(this), this.propertyWriteGuard = new U(this), this._data = new Mt(this), this.data = this._data.current, this.values = this._data.createObservablePartOfCurrent((a) => a?.values), this.variants = this._data.createObservablePartOfCurrent((a) => a?.variants ?? []), this.persistedData = this._data.persisted, this.#t = new Q(this), this.splitView = new wt(), this.#i = new Et(this), this.#s = new I([], (a) => a.unique), this.languages = this.#s.asObservable(), this.#n = new It(this), this.#o = new I([], (a) => a.unique), this._segments = this.#o.asObservable(), this._variantOptionsFilter = (a) => !0, this.#u = [], this.#l = new ct(this), this.finishPropertyValueChange = () => {
      this._data.finishPropertyValueChange();
    }, this._saveableVariantsFilter = (a) => this.readOnlyGuard.getIsPermittedForVariant(c.Create(a)) === !1, this.propertyViewGuard.fallbackToPermitted(), this.propertyWriteGuard.fallbackToPermitted(), this.#l.addPathTranslator(kt), this._data.setVariantScaffold(e.contentVariantScaffold), this.#d = e.saveModalToken, this.#p = e.contentTypePropertyName;
    const i = new e.contentTypeDetailRepository(this);
    this.#h = e.contentValidationRepository, this.#m = e.skipValidationOnSubmit ? !e.skipValidationOnSubmit : !0, this.#y = e.ignoreValidationResultOnSubmit ?? !1, this.structure = new bt(this, i), this.variesByCulture = this.structure.ownerContentTypeObservablePart((a) => a?.variesByCulture), this.variesBySegment = this.structure.ownerContentTypeObservablePart((a) => a?.variesBySegment), this.varies = this.structure.ownerContentTypeObservablePart(
      (a) => a ? a.variesByCulture || a.variesBySegment : void 0
    ), this.collection = new Ut(
      this,
      this.structure,
      e.collectionAlias
    ), new Ft(
      this,
      this.structure,
      this.validationContext,
      this.view.hints
    ), this.variantOptions = T(
      [this.variesByCulture, this.variesBySegment, this.variants, this.languages, this._segments],
      ([a, r, s, n, o]) => {
        if ((a || r) === void 0)
          return [];
        if (!(a || r))
          return [
            {
              variant: s.find((l) => new c(l.culture, l.segment).isInvariant()),
              language: n.find((l) => l.isDefault),
              culture: null,
              segment: null,
              unique: new c().toString()
            }
          ];
        if (a && !r)
          return n.map((l) => ({
            variant: s.find((h) => h.culture === l.unique),
            language: l,
            culture: l.unique,
            segment: null,
            unique: new c(l.unique).toString()
          }));
        if (!a && r) {
          const l = {
            variant: s.find((d) => new c(d.culture, d.segment).isInvariant()),
            language: n.find((d) => d.isDefault),
            culture: null,
            segment: null,
            unique: new c().toString()
          }, h = o.map((d) => ({
            variant: s.find((m) => m.culture === null && m.segment === d.unique),
            language: n.find((m) => m.isDefault),
            segmentInfo: d,
            culture: null,
            segment: d.unique,
            unique: new c(null, d.unique).toString()
          }));
          return [l, ...h];
        }
        return a && r ? n.flatMap((l) => {
          const h = {
            variant: s.find((m) => m.culture === l.unique),
            language: l,
            culture: l.unique,
            segment: null,
            unique: new c(l.unique).toString()
          }, d = o.map((m) => ({
            variant: s.find((v) => v.culture === l.unique && v.segment === m.unique),
            language: l,
            segmentInfo: m,
            culture: l.unique,
            segment: m.unique,
            unique: new c(l.unique, m.unique).toString()
          }));
          return [h, ...d];
        }) : [];
      }
    ).pipe(Ct((a) => a.filter((r) => this._variantOptionsFilter(r)))), this.observe(
      this.variantOptions,
      (a) => {
        a.forEach((r) => {
          if (!this.#u.some((n) => {
            const o = n.getVariantId();
            if (o)
              return o.culture === r.culture && o.segment === r.segment;
          })) {
            const n = new dt(this);
            n.inheritFrom(this.validationContext, "$"), n.setVariantId(c.Create(r)), n.autoReport(), this.#u.push(n);
          }
        });
      },
      null
    ), this.observe(
      K([this.splitView.activeVariantByIndex(0), this.variants]),
      ([a, r]) => {
        const s = r.find(
          (n) => n.culture === a?.culture && n.segment === a?.segment
        )?.name;
        this.view.setTitle(s);
      },
      null
    ), this.observe(
      this.varies,
      (a) => {
        this._data.setVaries(a), this.#e = a;
      },
      null
    ), this.observe(
      this.variesByCulture,
      (a) => {
        this._data.setVariesByCulture(a), this.#a = a;
      },
      null
    ), this.observe(
      this.variesBySegment,
      (a) => {
        this._data.setVariesBySegment(a), this.#r = a;
      },
      null
    ), this.observe(
      this.structure.contentTypeDataTypeUniques,
      (a) => {
        this.#t.setUniques(a);
      },
      null
    ), this.loadLanguages(), this.#f();
  }
  #t;
  #e;
  #a;
  #r;
  #i;
  #s;
  #n;
  #o;
  #u;
  getVariantValidationContext(t) {
    return this.#u.find((e) => e.getVariantId()?.compare(t));
  }
  #m;
  #y;
  #l;
  #h;
  #c;
  #d;
  #p;
  async loadLanguages() {
    const { data: t } = await this.#i.requestCollection({});
    this.#s.setValue(t?.items ?? []);
  }
  async #f() {
    const { data: t } = await this.#n.requestCollection({});
    this.#o.setValue(t?.items ?? []);
  }
  /**
   * @deprecated Call `_processIncomingData` instead. `_scaffoldProcessData` will be removed in v.18.
   */
  _scaffoldProcessData(t) {
    return this._processIncomingData(t);
  }
  async _processIncomingData(t) {
    const e = t[this.#p].unique;
    if (!e)
      throw new Error(`Could not find content type unique on property '${this.#p}'`);
    await this.structure.loadType(e);
    const i = this.#s.getValue().map((l) => l.unique);
    this.structure.variesBySegment && console.warn("Segments are not yet implemented for preset");
    const a = this.structure.variesBySegment ? [] : void 0, r = new k(this), s = await this.structure.getContentTypeProperties(), n = await Promise.all(
      s.map(async (l) => {
        const h = (await r.requestByUnique(l.dataType.unique)).data;
        if (!h)
          throw new Error(`DataType of "${l.dataType.unique}" not found.`);
        if (!h.editorUiAlias)
          throw new Error(`DataType of "${l.dataType.unique}" did not have a editorUiAlias.`);
        return {
          alias: l.alias,
          propertyEditorUiAlias: h.editorUiAlias,
          propertyEditorSchemaAlias: h.editorAlias,
          config: h.values,
          typeArgs: {
            variesByCulture: l.variesByCulture,
            variesBySegment: l.variesBySegment
          }
        };
      })
    ), o = new ot(this);
    o.setCultures(i), a && o.setSegments(a), o.setValues(t.values);
    const p = await o.create(n, {
      entityType: this.getEntityType(),
      entityUnique: t.unique,
      entityTypeUnique: e
    });
    return { ...t, values: p };
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
      return t ? e.find((i) => t.compare(i))?.name : e[0]?.name;
  }
  /**
   * Set the name of a variant
   * @param {string} name - The name of the variant
   * @param {UmbVariantId} [variantId] - The variant id
   * @memberof UmbContentDetailWorkspaceContextBase
   */
  setName(t, e) {
    this._data.updateVariantData(e ?? c.CreateInvariant(), { name: t });
  }
  /**
   * Get an observable for the name of a variant
   * @param {UmbVariantId} [variantId] - The variant id
   * @returns {Observable<string>} - The name of the variant
   * @memberof UmbContentDetailWorkspaceContextBase
   */
  name(t) {
    return this._data.createObservablePartOfCurrent(
      (e) => e?.variants?.find((i) => t?.compare(i))?.name ?? ""
    );
  }
  /* Variants */
  /**
   * Get whether the content varies by culture
   * @returns { boolean | undefined } - If the content varies by culture
   * @memberof UmbContentDetailWorkspaceContextBase
   */
  getVariesByCulture() {
    return this.#a;
  }
  /**
   * Get whether the content varies by segment
   * @returns {boolean | undefined} - If the content varies by segment
   * @memberof UmbContentDetailWorkspaceContextBase
   */
  getVariesBySegment() {
    return this.#r;
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
    return this._data.createObservablePartOfCurrent((e) => e?.variants?.find((i) => t.compare(i)));
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
      (i) => i?.values?.find((a) => a?.alias === t && (e ? e.compare(a) : !0))?.value
    );
  }
  /**
   * Get the current value of the property with the given alias and variantId.
   * @param {string} alias - The alias of the property
   * @param {UmbVariantId | undefined} variantId - The variant id of the property
   * @returns {ReturnType | undefined} The value or undefined if not set or found.
   */
  getPropertyValue(t, e) {
    const i = this._data.getCurrent();
    if (i)
      return i.values?.find(
        (r) => r.alias === t && (e ? e.compare(r) : !0)
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
  async setPropertyValue(t, e, i) {
    this.initiatePropertyValueChange(), i ??= c.CreateInvariant();
    const a = await this.structure.getPropertyStructureByAlias(t);
    if (!a)
      throw new Error(`Property alias "${t}" not found.`);
    const r = (await this.#t.getItemByUnique(a.dataType.unique)).propertyEditorSchemaAlias;
    if (!r)
      throw new Error(`Editor Alias of "${a.dataType.unique}" not found.`);
    const s = {
      editorAlias: r,
      // Be aware that this solution is a bit magical, and based on a naming convention.
      // We might want to make this more flexible at some point and get the entityType from somewhere instead of constructing it here.
      entityType: `${this.getEntityType()}-property-value`,
      ...i.toObject(),
      alias: t,
      value: e
    }, n = this.getData();
    if (n) {
      const o = x(
        n.values ?? [],
        s,
        (p) => p.alias === t && i.compare(p)
      );
      if (this._data.updateCurrent({ values: o }), this.getVariesByCulture() && a.variesByCulture === !1 && a.variesBySegment === !0) {
        const p = await D(this.variantOptions);
        for (const l of p)
          l.segment === i.segment && this._data.ensureVariantData(c.Create(l));
      } else
        this._data.ensureVariantData(i);
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
    const t = (await D(this.variantOptions)).filter((h) => h.segment === null), i = this.splitView.getActiveVariants().map((h) => c.Create(h)), a = this._data.getChangedVariants(), r = [...i, ...a], s = r.filter((h) => h.segment !== null).map((h) => h.toSegmentInvariant()), p = [...r, ...s].filter(
      (h) => this.readOnlyGuard.getIsPermittedForVariant(h) === !1
    ).map((h) => h.toString()).filter((h, d, m) => m.indexOf(h) === d), l = [...new Set(p)];
    return {
      options: t,
      selected: l
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
    new Ot({
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
    if (this.getVariesByCulture() && (e = e.filter((r) => !r.isCultureInvariant())), e.filter((r) => !t.variants.some((s) => r.compare(s))).length > 0)
      throw new Error("One or more selected variants have not been created");
    const a = t.variants.filter((r) => !r.name);
    if (a.length > 0) {
      const r = await this.getContext(pt);
      throw r ? (a.forEach((s) => {
        r.messages.addMessage(
          "client",
          `$.variants[${L(s)}].name`,
          mt
        );
      }), new Error(
        "All variants must have a name, these variants are missing a name: " + a.map((s) => (s.culture ?? "invariant") + "_" + (s.segment ?? "")).join(", ")
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
      if (this.#c ??= new this.#h(this), this.getIsNew()) {
        const i = this._internal_getCreateUnderParent();
        if (!i) throw new Error("Parent is not set");
        await this.#l.askServerForValidation(
          t,
          this.#c.validateCreate(t, i.unique)
        );
      } else
        await this.#l.askServerForValidation(
          t,
          this.#c.validateSave(t, e)
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
   * @returns {Promise<void>} A promise which resolves once it has been completed.
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
    const { options: e, selected: i } = await this._determineVariantOptions();
    let a = [];
    if (e.length === 0)
      throw new Error("No variants are available");
    if (e.length === 1)
      a.push(c.Create(e[0]));
    else if (this.#d) {
      const s = await Vt(this, this.#d, {
        data: {
          options: e,
          pickableFilter: this._saveableVariantsFilter
        },
        value: { selection: i }
      }).catch(() => {
      });
      if (!s?.selection.length)
        return Promise.reject("Cannot save without selecting at least one variant.");
      a = s?.selection.map((n) => c.FromString(n)) ?? [];
    } else
      a = i.map((s) => c.FromString(s));
    const r = await this.constructSaveData(a);
    if (await this.runMandatoryValidationForSaveData(r, a), this.#m)
      if (await this.askServerToValidate(r, a), await this._validateAndLog().then(
        () => !0,
        () => !1
      ) || this.#y)
        await this.performCreateOrUpdate(a, r);
      else
        return Promise.reject("Validation issues prevent saving");
    else
      await this.performCreateOrUpdate(a, r);
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
    this.getIsNew() ? await this.#v(t, e) : await this.#w(t, e);
  }
  async #v(t, e) {
    if (!this._detailRepository) throw new Error("Detail repository is not set");
    const i = this._internal_getCreateUnderParent();
    if (!i) throw new Error("Parent is not set");
    const { data: a, error: r } = await this._detailRepository.create(e, i.unique);
    if (!a || r)
      throw new Error("Error creating content");
    const s = [...t, c.CreateInvariant()], n = this._data.getCurrent(), o = await new _(this).process(
      n,
      a,
      t,
      s
    );
    this._data.setPersisted(o);
    const p = this._data.getCurrent(), l = await new _(this).process(
      p,
      a,
      t,
      s
    );
    this._data.setCurrent(l), this.setIsNew(!1);
    const h = await this.getContext(q);
    if (!h)
      throw new Error("Event context is missing");
    const d = new A({
      entityType: i.entityType,
      unique: i.unique
    });
    h.dispatchEvent(d);
    const m = new Pt({
      entityType: i.entityType,
      unique: i.unique
    });
    h.dispatchEvent(m);
  }
  async #w(t, e) {
    if (!this._detailRepository) throw new Error("Detail repository is not set");
    const { data: i, error: a } = await this._detailRepository.save(e);
    if (!i || a)
      throw new Error("Error saving content");
    const r = [...t, c.CreateInvariant()], s = this._data.getCurrent(), n = await new _(this).process(
      s,
      i,
      t,
      r
    );
    this._data.setPersisted(n);
    const o = this._data.getCurrent(), p = await new _(this).process(
      o,
      i,
      t,
      r
    );
    this._data.setCurrent(p);
    const l = this.getUnique(), h = this.getEntityType(), d = await this.getContext(q);
    if (!d)
      throw new Error("Event context is missing");
    const m = new A({ unique: l, entityType: h });
    d.dispatchEvent(m);
    const v = new St({
      unique: l,
      entityType: h,
      eventUnique: this._workspaceEventUnique
    });
    d.dispatchEvent(v);
  }
  resetState() {
    super.resetState(), this.structure.clear(), this.readOnlyGuard.clearRules(), this.propertyViewGuard.clearRules(), this.propertyWriteGuard.clearRules(), this.propertyViewGuard.fallbackToPermitted(), this.propertyWriteGuard.fallbackToPermitted();
  }
  destroy() {
    this.structure.destroy(), this.#i.destroy(), super.destroy();
  }
}
export {
  Rt as IsContentPropertyDatasetContext,
  _e as UMB_CONTENT_COLLECTION_WORKSPACE_CONTEXT,
  de as UMB_CONTENT_HAS_PROPERTIES_WORKSPACE_CONDITION,
  Ce as UMB_CONTENT_PROPERTY_CONTEXT,
  me as UMB_CONTENT_PROPERTY_DATASET_CONTEXT,
  pe as UMB_CONTENT_SECTION_ALIAS,
  Z as UMB_CONTENT_WORKSPACE_CONTEXT,
  Ve as UMB_PROPERTY_TYPE_BASED_PROPERTY_CONTEXT,
  Se as UMB_SORT_CHILDREN_OF_CONTENT_MODAL,
  Ee as UMB_SORT_CHILDREN_OF_CONTENT_MODAL_ALIAS,
  Ie as UMB_WORKSPACE_HAS_CONTENT_COLLECTION_CONDITION_ALIAS,
  Ut as UmbContentCollectionManager,
  fe as UmbContentDetailWorkspaceContextBase,
  be as UmbContentPropertyContext,
  ye as UmbContentPropertyDatasetContext,
  Ft as UmbContentValidationToHintsManager,
  Mt as UmbContentWorkspaceDataManager,
  y as UmbContentWorkspacePropertyElement,
  xt as UmbElementPropertyDatasetContext,
  Nt as UmbElementWorkspaceDataManager,
  _ as UmbMergeContentVariantDataController,
  Te as UmbPropertyTypeBasedPropertyContext,
  Oe as UmbPropertyTypeBasedPropertyElement
};
//# sourceMappingURL=index.js.map
