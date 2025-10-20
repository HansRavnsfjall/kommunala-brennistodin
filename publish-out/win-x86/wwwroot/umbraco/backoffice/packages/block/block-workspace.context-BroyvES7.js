import { U as w } from "./block-entry.context-token-DG6_TzkT.js";
import { UmbControllerBase as C } from "@umbraco-cms/backoffice/class-api";
import { observeMultiple as l, createObservablePart as d, UmbClassState as y, mergeObservables as O, appendToFrozenArray as E, UmbObjectState as T, UmbStringState as P, UmbBooleanState as U } from "@umbraco-cms/backoffice/observable-api";
import { UmbReadOnlyVariantGuardManager as b, decodeFilePath as V } from "@umbraco-cms/backoffice/utils";
import { UMB_MODAL_MANAGER_CONTEXT as S, UMB_DISCARD_CHANGES_MODAL as D, UMB_MODAL_CONTEXT as k } from "@umbraco-cms/backoffice/modal";
import "@umbraco-cms/backoffice/localization-api";
import "@umbraco-cms/backoffice/router";
import { UmbVariantId as u } from "@umbraco-cms/backoffice/variant";
import "@umbraco-cms/backoffice/ufm";
import { a as B, U as I } from "./block-manager.context-token-DnrQaIqt.js";
import { UmbDocumentTypeDetailRepository as _ } from "@umbraco-cms/backoffice/document-type";
import { UmbContentTypeStructureManager as A } from "@umbraco-cms/backoffice/content-type";
import "@umbraco-cms/backoffice/id";
import { UmbVariantPropertyGuardManager as m } from "@umbraco-cms/backoffice/property";
import "@umbraco-cms/backoffice/language";
import { UmbDataTypeItemRepositoryManager as N } from "@umbraco-cms/backoffice/data-type";
import { U as v } from "./index-jGJQ3LmE.js";
import { UmbTextStyles as M } from "@umbraco-cms/backoffice/style";
import { html as K, css as L, state as x, customElement as R } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as G } from "@umbraco-cms/backoffice/lit-element";
import { UmbElementPropertyDatasetContext as W, UmbElementWorkspaceDataManager as q } from "@umbraco-cms/backoffice/content";
import { UmbValidationController as H } from "@umbraco-cms/backoffice/validation";
import { UmbSubmittableWorkspaceContextBase as z, UmbWorkspaceIsNewRedirectController as X, UmbWorkspaceIsNewRedirectControllerAlias as F } from "@umbraco-cms/backoffice/workspace";
var j = Object.defineProperty, $ = Object.getOwnPropertyDescriptor, g = (n, e, t, s) => {
  for (var i = s > 1 ? void 0 : s ? $(e, t) : e, r = n.length - 1, a; r >= 0; r--)
    (a = n[r]) && (i = (s ? a(e, t, i) : a(i)) || i);
  return s && i && j(e, t, i), i;
};
let o = class extends G {
  constructor() {
    super(), this._headline = "", this.consumeContext(v, (n) => {
      n ? this.observe(
        l([
          n.isNew,
          n.content.structure.ownerContentTypeObservablePart((e) => e?.name)
        ]),
        ([e, t]) => {
          this._headline = this.localize.term(e ? "general_add" : "general_edit") + " " + this.localize.string(t);
        },
        "observeOwnerContentElementTypeName"
      ) : this.removeUmbControllerByAlias("observeOwnerContentElementTypeName");
    });
  }
  render() {
    return K`<umb-workspace-editor headline=${this._headline}> </umb-workspace-editor> `;
  }
};
o.styles = [
  M,
  L`
			:host {
				display: block;
				width: 100%;
				height: 100%;
			}
		`
];
g([
  x()
], o.prototype, "_headline", 2);
o = g([
  R("umb-block-workspace-editor")
], o);
class Y extends W {
  constructor(e, t, s) {
    super(e, t, s), this.name = t.name, this.getName = t.getName, this.culture = d(t.variantId, (i) => i?.culture), this.segment = d(t.variantId, (i) => i?.segment), this.consumeContext(v, (i) => {
      this.observe(
        i?.readOnlyGuard.isPermittedForVariant(t.getVariantId()),
        (r) => {
          this._readOnly.setValue(r ?? !1);
        },
        "umbObserveReadOnlyStates"
      );
    });
  }
}
class p extends C {
  constructor(e, t) {
    super(e), this.#t = new q(this), this.data = this.#t.current, this.#o = new Promise((s) => {
      this.#i = s;
    }), this.readOnlyGuard = new b(this), this.#r = new y(void 0), this.variantId = this.#r.asObservable(), this.unique = this.#t.createObservablePartOfCurrent((s) => s?.key), this.contentTypeId = this.#t.createObservablePartOfCurrent((s) => s?.contentTypeKey), this.values = this.#t.createObservablePartOfCurrent((s) => s?.values), this.#s = new N(this), this.#a = /* @__PURE__ */ new Map(), this.structure = new A(
      this,
      new _(this)
    ), this.propertyViewGuard = new m(this), this.propertyWriteGuard = new m(this), this.validation = new H(this), this.finishPropertyValueChange = () => {
      this.#t.finishPropertyValueChange();
    }, this.name = e.name, this.getName = e.getName, this.propertyViewGuard.fallbackToPermitted(), this.propertyWriteGuard.fallbackToPermitted(), this.observe(this.contentTypeId, (s) => {
      s && this.structure.loadType(s);
    }), this.observe(this.unique, (s) => {
      s && this.validation.setDataPath("$." + t + `[?(@.key == '${s}')]`);
    }), this.observe(
      this.structure.contentTypeDataTypeUniques,
      (s) => {
        this.#s.setUniques(s);
      },
      null
    ), this.observe(
      this.#s.items,
      (s) => {
        this.#a = new Map(
          s.map((i) => [i.unique, i.propertyEditorSchemaAlias])
        );
      },
      null
    );
  }
  #t;
  #o;
  #i;
  #r;
  getValues() {
    return this.#t.getCurrent()?.values;
  }
  #s;
  #a;
  isLoaded() {
    return this.#o;
  }
  resetState() {
    this.#t.clear(), this.propertyViewGuard.clearRules(), this.propertyWriteGuard.clearRules(), this.propertyViewGuard.fallbackToPermitted(), this.propertyWriteGuard.fallbackToPermitted();
  }
  setVariantId(e) {
    this.#r.setValue(e);
  }
  getVariantId() {
    return this.#r.getValue() ?? u.CreateInvariant();
  }
  // TODO: rename to currentData:
  setData(e) {
    this.#t.setPersisted(e), this.#t.setCurrent(e), this.#i();
  }
  getData() {
    return this.#t.getCurrent();
  }
  setPersistedData(e) {
    this.#t.setPersisted(e);
  }
  /**
   * Check if there are unpersisted changes.
   * @returns { boolean } true if there are unpersisted changes.
   */
  getHasUnpersistedChanges() {
    return this.#t.getHasUnpersistedChanges();
  }
  getUnique() {
    return this.getData()?.key;
  }
  getEntityType() {
    return "element";
  }
  getContentTypeId() {
    return this.getData()?.contentTypeKey;
  }
  #d(e, t) {
    return t.toVariant(e.variesByCulture, e.variesBySegment);
  }
  // We will implement propertyAlias in the future, when implementing Varying Blocks. [NL]
  async propertyVariantId(e) {
    return O(
      [await this.structure.propertyStructureByAlias(e), this.variantId],
      ([t, s]) => t && s ? this.#d(t, s) : void 0
    );
  }
  /**
   * @function propertyValueByAlias
   * @param {string} propertyAlias - The alias of the property
   * @param {UmbVariantId} variantId - The variant
   * @returns {Promise<Observable<ReturnType | undefined> | undefined>} - An observable for the value of the property
   * @description Get an Observable for the value of this property.
   */
  async propertyValueByAlias(e, t) {
    return this.#t.createObservablePartOfCurrent(
      (s) => s?.values?.find((i) => i?.alias === e && (t ? t.compare(i) : !0))?.value
    );
  }
  /**
   * Get the current value of the property with the given alias and variantId.
   * @param {string} alias - The alias of the property
   * @param {UmbVariantId | undefined} variantId - The variant id of the property
   * @returns {ReturnType | undefined} The value or undefined if not set or found.
   */
  getPropertyValue(e, t) {
    const s = this.#t.getCurrent();
    if (s)
      return s.values?.find(
        (r) => r.alias === e && (t ? t.compare(r) : !0)
      )?.value;
  }
  async setPropertyValue(e, t, s) {
    this.initiatePropertyValueChange(), s ??= u.CreateInvariant();
    const i = await this.structure.getPropertyStructureByAlias(e);
    if (!i)
      throw new Error(`Property alias "${e}" not found.`);
    const r = this.#a.get(i.dataType.unique);
    if (!r)
      throw new Error(`Editor Alias of "${i.dataType.unique}" not found.`);
    const a = { editorAlias: r, ...s.toObject(), alias: e, value: t }, h = this.getData();
    if (h) {
      const f = E(
        h.values ?? [],
        a,
        (c) => c.alias === e && s.compare(c)
      );
      this.#t.updateCurrent({ values: f });
    }
    this.finishPropertyValueChange();
  }
  initiatePropertyValueChange() {
    this.#t.initiatePropertyValueChange();
  }
  createPropertyDatasetContext(e, t) {
    return new Y(e, this, t);
  }
  setup(e, t) {
    this.createPropertyDatasetContext(e, t), this.validation.provideAt(e);
  }
  destroy() {
    this.structure.destroy(), super.destroy();
  }
}
class wt extends z {
  constructor(e, t) {
    super(e, t.manifest.alias), this.IS_BLOCK_WORKSPACE_CONTEXT = !0, this.#e = new T(void 0), this.layout = this.#e.asObservable(), this.unique = this.#e.asObservablePart((i) => i?.contentKey), this.contentKey = this.#e.asObservablePart((i) => i?.contentKey), this.content = new p(this, "contentData"), this.settings = new p(this, "settingsData"), this.#n = new P(void 0), this.name = this.#n.asObservable(), this.#c = new y(void 0), this.variantId = this.#c.asObservable(), this.#y = new U(void 0), this.exposed = this.#y.asObservable(), this.readOnlyGuard = new b(this), this.#p = !1, this.#b = async (i) => {
      const r = i.detail.url;
      if (this.#p)
        return !0;
      if (this._checkWillNavigateAway(r) && this.getHasUnpersistedChanges()) {
        i.preventDefault();
        const h = (await this.getContext(S).catch(() => {
        }))?.open(this, D);
        if (h)
          try {
            return await h.onSubmit(), this.#p = !0, history.pushState({}, "", i.detail.url), !0;
          } catch {
            return !1;
          }
        else
          console.error("No modal manager found!");
      }
      return !0;
    }, this.#w = () => {
      if (this.#h)
        if (this.getIsNew() === !0) {
          const i = this.#e.value?.contentKey;
          i && this.#i?.delete(i);
        } else
          this.#m && this.#t?.setOneLayout(this.#m, this.#s), this.#l && this.#t?.setOneContent(this.#l), this.#u && this.#t?.setOneContent(this.#u);
    };
    const s = t.manifest;
    this.#v = s.meta?.entityType, window.addEventListener("willchangestate", this.#b), this.addValidationContext(this.content.validation), this.addValidationContext(this.settings.validation), this.#d = this.consumeContext(k, (i) => {
      this.#a = i, this.#s = i?.data.originData, i?.onSubmit().catch(this.#w);
    }).asPromise({ preventTimeout: !0 }), this.#o = this.consumeContext(B, (i) => {
      this.#t = i, this.#C();
    }), this.#r = this.consumeContext(I, (i) => {
      this.#i = i;
    }).asPromise({ preventTimeout: !0 }), this.consumeContext(w, (i) => {
      this.#n.setValue(i?.getName());
    }), this.observe(this.variantId, (i) => {
      this.content.setVariantId(i), this.settings.setVariantId(i);
    }), this.routes.setRoutes([
      {
        path: "create/:elementTypeKey",
        component: o,
        setup: async (i, r) => {
          const a = r.match.params.elementTypeKey;
          await this.create(a), new X(
            this,
            this,
            this.getHostElement().shadowRoot.querySelector("umb-router-slot")
          );
        }
      },
      {
        path: "edit/:key",
        component: o,
        setup: (i, r) => {
          const a = V(r.match.params.key);
          this.load(a);
        }
      }
    ]);
  }
  //
  #t;
  #o;
  #i;
  #r;
  #s;
  // Set the origin data for this workspace. Example used by inline editing which setups the workspace context it self.
  setOriginData(e) {
    this.#s = e;
  }
  #a;
  #d;
  #v;
  #h;
  #m;
  #l;
  #u;
  #e;
  #n;
  #c;
  #y;
  #C() {
    if (!this.#t) return;
    const e = this.#t;
    this.observe(
      e.liveEditingMode,
      (t) => {
        this.#h = t ?? !1;
      },
      "observeLiveEditingMode"
    ), this.observe(
      l([
        e.variantId,
        this.content.structure.variesByCulture,
        this.content.structure.variesBySegment
      ]),
      ([t, s, i]) => {
        !t || s === void 0 || i === void 0 || (!i && !s ? t = u.CreateInvariant() : i ? s || (t = t.toCultureInvariant()) : t = t.toSegmentInvariant(), this.#c.setValue(t));
      },
      "observeVariantIds"
    ), this.removeUmbControllerByAlias("observeHasExpose"), this.observe(
      l([this.contentKey, this.variantId]),
      ([t, s]) => {
        !t || !s || this.observe(
          e.hasExposeOf(t, s),
          (i) => {
            this.#y.setValue(i);
          },
          "observeHasExpose"
        );
      },
      "observeContentKeyAndVariantId"
    ), this.observe(
      // TODO: Again we need to parse on all variants....
      e.readOnlyState.isPermittedForObservableVariant(this.variantId),
      (t) => {
        const s = "UMB_BLOCK_MANAGER_CONTEXT";
        if (t) {
          const i = {
            unique: s,
            variantId: this.#c.getValue()
          };
          this.readOnlyGuard?.addRule(i);
        } else
          this.readOnlyGuard?.removeRule(s);
      },
      "observeIsReadOnly"
    ), this.observe(
      this.content.contentTypeId,
      (t) => {
        this.observe(
          t ? e.blockTypeOf(t) : void 0,
          (s) => {
            s?.editorSize && this.setEditorSize(s.editorSize);
          },
          "observeBlockType"
        );
      },
      "observeContentTypeId"
    );
  }
  #p;
  #b;
  /**
   * Check if the workspace is about to navigate away.
   * @protected
   * @param {string} newUrl The new url that the workspace is navigating to.
   * @returns { boolean} true if the workspace is navigating away.
   * @memberof UmbEntityWorkspaceContextBase
   */
  _checkWillNavigateAway(e) {
    return !e.includes(this.routes.getActiveLocalPath());
  }
  setEditorSize(e) {
    this.#a?.setModalSize(e);
  }
  resetState() {
    super.resetState(), this.#n.setValue(void 0), this.#e.setValue(void 0), this.#m = void 0, this.#l = void 0, this.#u = void 0, this.content.resetState(), this.settings.resetState(), this.#p = !1, this.removeUmbControllerByAlias(F);
  }
  async load(e) {
    if (await this.#o, await this.#r, !this.#t || !this.#i)
      throw new Error("Block manager not found");
    this.observe(
      this.#i.layoutOf(e),
      (t) => {
        this.#m ??= t, this.removeUmbControllerByAlias("observeLayoutInitially");
      },
      "observeLayoutInitially"
    ), this.#g(e), this.#h && this.establishLiveSync();
  }
  async create(e) {
    if (await this.#r, await this.#d, !this.#i)
      throw new Error("Block Entries not found");
    if (!this.#s)
      throw new Error("Origin data not defined");
    this.setIsNew(!0);
    const t = await this.#i.create(e, {}, this.#s);
    if (!t)
      throw new Error("Block Entries could not create block");
    if (this.#h) {
      if (!await this.#i.insert(
        t.layout,
        t.content,
        t.settings,
        this.#s
      ))
        throw new Error("Block Entries could not insert block");
      const i = t.layout.contentKey;
      this.#g(i), this.establishLiveSync();
    } else
      this.#e.setValue(t.layout), this.content.setData(t.content), t.settings && this.settings.setData(t.settings);
  }
  #g(e) {
    if (!this.#i)
      throw new Error("Block Entries not found");
    this.observe(
      this.#i.layoutOf(e),
      (t) => {
        this.#e.setValue(t);
        const s = t?.contentKey;
        if (!s)
          return;
        this.observe(
          this.#t.contentOf(s),
          (r) => {
            this.content.setData(r);
          },
          "observeContent"
        ), this.#l || this.observe(
          this.#t.contentOf(s),
          (r) => {
            this.#l ??= r, this.removeUmbControllerByAlias("observeContentInitially");
          },
          "observeContentInitially"
        );
        const i = t?.settingsKey;
        i && (this.observe(
          this.#t.settingsOf(i),
          (r) => {
            this.settings.setData(r);
          },
          "observeSettings"
        ), this.#u || this.observe(
          this.#t.settingsOf(i),
          (r) => {
            this.#u ??= r, this.removeUmbControllerByAlias("observeSettingsInitially");
          },
          "observeSettingsInitially"
        ));
      },
      "observeLayout"
    );
  }
  /**
   * Establishes live synchronization of the block's layout, content, and settings data.
   * This method observes local changes in the layout, content, and settings data and pushes those updates to the block manager.
   * This method is used in live editing mode to ensure that changes made to the block's data are immediately reflected
   * in the backoffice UI.
   */
  establishLiveSync() {
    let e = !0;
    this.observe(
      this.layout,
      (t) => {
        if (t) {
          if (e) {
            e = !1;
            return;
          }
          this.#t?.setOneLayout(t, this.#s);
        }
      },
      "observeThisLayout"
    ), this.observe(
      this.content.data,
      (t) => {
        t && this.#t?.setOneContent(t);
      },
      "observeThisContent"
    ), this.observe(
      this.settings.data,
      (t) => {
        t && this.#t?.setOneSettings(t);
      },
      "observeThisSettings"
    );
  }
  getData() {
    return this.#e.getValue();
  }
  getUnique() {
    return this.getData().contentKey;
  }
  getEntityType() {
    return this.#v;
  }
  getName() {
    return "block name content element type here...";
  }
  /**
   * Check if there are unpersisted changes.
   * @returns { boolean } true if there are unpersisted changes.
   */
  getHasUnpersistedChanges() {
    return this.content.getHasUnpersistedChanges() || this.settings.getHasUnpersistedChanges();
  }
  /**
   * @function propertyValueByAlias
   * @param {string} propertyAlias - The alias of the property to get the value of.
   * @returns {Promise<Observable<ReturnType | undefined> | undefined>} - The value of the property.
   * @description Get an Observable for the value of this property.
   */
  async propertyValueByAlias(e) {
    return this.#e.asObservablePart(
      (t) => t?.[e]
    );
  }
  getPropertyValue(e) {
    return this.#e.getValue()?.[e];
  }
  /**
   * @function setPropertyValue
   * @param {string} alias - The alias of the property to set the value of.
   * @param {unknown} value - value can be a promise resolving into the actual value or the raw value it self.
   * @returns {Promise<void>}
   * @description Set the value of this property.
   */
  async setPropertyValue(e, t) {
    const s = this.#e.value;
    s && this.#e.update({ ...s, [e]: await t });
  }
  async submit() {
    const e = this.#e.value, t = this.content.getData();
    if (!e || !this.#t || !this.#i || !t || !this.#s)
      throw new Error("Missing data");
    const s = this.settings.getData();
    if (this.content.setPersistedData(t), s && this.settings.setPersistedData(s), !this.#h)
      if (this.getIsNew() === !0) {
        if (!await this.#i.insert(e, t, s, this.#s))
          throw new Error("Block Entries could not insert block");
      } else
        this.#t.setOneLayout(e, this.#s), t && this.#t.setOneContent(t), s && this.#t.setOneSettings(s);
    this.#f(e.contentKey), this.setIsNew(!1), this.#O();
  }
  #O() {
    this.content.validation.report(), this.settings.validation.report();
  }
  expose() {
    const e = this.#e.value?.contentKey;
    if (!e) throw new Error("Failed to expose block, missing content key.");
    this.#f(e);
  }
  #f(e) {
    const t = this.#c.getValue();
    if (!t) throw new Error("Failed to expose block, missing variant id.");
    this.#t?.setOneExpose(e, t);
  }
  #w;
  destroy() {
    super.destroy(), window.removeEventListener("willchangestate", this.#b), this.#e?.destroy(), this.#n?.destroy(), this.#e = void 0, this.#n = void 0, this.#t = void 0, this.#s = void 0;
  }
}
export {
  wt as UmbBlockWorkspaceContext,
  wt as api
};
//# sourceMappingURL=block-workspace.context-BroyvES7.js.map
