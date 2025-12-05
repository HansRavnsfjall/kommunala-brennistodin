import "./block-entry.context-token-DG6_TzkT.js";
import { UmbControllerBase as C } from "@umbraco-cms/backoffice/class-api";
import { observeMultiple as l, createObservablePart as m, UmbClassState as v, mergeObservables as O, appendToFrozenArray as E, UmbObjectState as T, UmbStringState as U, UmbBooleanState as P } from "@umbraco-cms/backoffice/observable-api";
import { UmbReadOnlyVariantGuardManager as b, decodeFilePath as V } from "@umbraco-cms/backoffice/utils";
import { UMB_MODAL_MANAGER_CONTEXT as S, UMB_DISCARD_CHANGES_MODAL as I, UMB_MODAL_CONTEXT as D } from "@umbraco-cms/backoffice/modal";
import "@umbraco-cms/backoffice/localization-api";
import "@umbraco-cms/backoffice/router";
import { UmbVariantId as u } from "@umbraco-cms/backoffice/variant";
import { UmbUfmVirtualRenderController as _ } from "@umbraco-cms/backoffice/ufm";
import { b as B, U as k } from "./block-workspace.modal-token-DM3FsY2R.js";
import { UmbDocumentTypeDetailRepository as A } from "@umbraco-cms/backoffice/document-type";
import { UmbContentTypeStructureManager as N } from "@umbraco-cms/backoffice/content-type";
import "@umbraco-cms/backoffice/id";
import { UmbVariantPropertyGuardManager as p } from "@umbraco-cms/backoffice/property";
import "@umbraco-cms/backoffice/language";
import { UmbDataTypeItemRepositoryManager as L } from "@umbraco-cms/backoffice/data-type";
import { U as g } from "./block-workspace.context-token-DTpZ56Fk.js";
import { UmbTextStyles as K } from "@umbraco-cms/backoffice/style";
import { html as M, css as R, state as x, customElement as G } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as W } from "@umbraco-cms/backoffice/lit-element";
import { UmbElementPropertyDatasetContext as q, UmbElementWorkspaceDataManager as H, UmbContentValidationToHintsManager as z } from "@umbraco-cms/backoffice/content";
import { UmbValidationController as F } from "@umbraco-cms/backoffice/validation";
import { UmbHintContext as X } from "@umbraco-cms/backoffice/hint";
import { U as $, a as j } from "./constants-Dj5jHHfK.js";
import { UmbSubmittableWorkspaceContextBase as J, UmbWorkspaceIsNewRedirectController as Q, UmbWorkspaceIsNewRedirectControllerAlias as Y } from "@umbraco-cms/backoffice/workspace";
var Z = Object.defineProperty, tt = Object.getOwnPropertyDescriptor, f = (a, s, t, i) => {
  for (var e = i > 1 ? void 0 : i ? tt(s, t) : s, r = a.length - 1, n; r >= 0; r--)
    (n = a[r]) && (e = (i ? n(s, t, e) : n(e)) || e);
  return i && e && Z(s, t, e), e;
};
let o = class extends W {
  constructor() {
    super(), this._headline = "", this.consumeContext(g, (a) => {
      a ? this.observe(
        l([a.isNew, a.name]),
        ([s, t]) => {
          this._headline = this.localize.term(s ? "general_add" : "general_edit") + " " + this.localize.string(t);
        },
        "observeOwnerContentElementTypeName"
      ) : this.removeUmbControllerByAlias("observeOwnerContentElementTypeName");
    });
  }
  render() {
    return M`<umb-workspace-editor headline=${this._headline}> </umb-workspace-editor> `;
  }
};
o.styles = [
  K,
  R`
			:host {
				display: block;
				width: 100%;
				height: 100%;
			}
		`
];
f([
  x()
], o.prototype, "_headline", 2);
o = f([
  G("umb-block-workspace-editor")
], o);
class et extends q {
  constructor(s, t, i) {
    super(s, t, i), this.name = t.name, this.getName = t.getName, this.culture = m(t.variantId, (e) => e?.culture), this.segment = m(t.variantId, (e) => e?.segment), this.consumeContext(g, (e) => {
      this.observe(
        e?.readOnlyGuard.isPermittedForVariant(t.getVariantId()),
        (r) => {
          this._readOnly.setValue(r ?? !1);
        },
        "umbObserveReadOnlyStates"
      );
    });
  }
}
class y extends C {
  constructor(s, t, i) {
    super(s), this.#t = new H(this), this.data = this.#t.current, this.#a = new Promise((e) => {
      this.#i = e;
    }), this.readOnlyGuard = new b(this), this.#r = new v(void 0), this.variantId = this.#r.asObservable(), this.unique = this.#t.createObservablePartOfCurrent((e) => e?.key), this.contentTypeId = this.#t.createObservablePartOfCurrent((e) => e?.contentTypeKey), this.values = this.#t.createObservablePartOfCurrent((e) => e?.values), this.#s = new L(this), this.structure = new N(
      this,
      new A(this)
    ), this.propertyViewGuard = new p(this), this.propertyWriteGuard = new p(this), this.validation = new F(this), this.finishPropertyValueChange = () => {
      this.#t.finishPropertyValueChange();
    }, this.hints = new X(this, { viewAlias: i }), this.hints.inherit(), new z(this, this.structure, this.validation, this.hints, [
      i
    ]), this.name = s.name, this.getName = () => {
      const e = this.structure.getOwnerContentType()?.name, r = s.getName();
      return e ? `${e} ${r}` : r;
    }, this.propertyViewGuard.fallbackToPermitted(), this.propertyWriteGuard.fallbackToPermitted(), this.observe(this.contentTypeId, (e) => {
      e && this.structure.loadType(e);
    }), this.observe(this.unique, (e) => {
      e && this.validation.setDataPath("$." + t + `[?(@.key == '${e}')]`);
    }), this.observe(
      this.structure.contentTypeDataTypeUniques,
      (e) => {
        this.#s.setUniques(e);
      },
      null
    );
  }
  #t;
  #a;
  #i;
  #r;
  getValues() {
    return this.#t.getCurrent()?.values;
  }
  #s;
  isLoaded() {
    return this.#a;
  }
  resetState() {
    this.#t.clear(), this.propertyViewGuard.clearRules(), this.propertyWriteGuard.clearRules(), this.propertyViewGuard.fallbackToPermitted(), this.propertyWriteGuard.fallbackToPermitted();
  }
  setVariantId(s) {
    this.#r.setValue(s);
  }
  getVariantId() {
    return this.#r.getValue() ?? u.CreateInvariant();
  }
  // TODO: rename to currentData:
  setData(s) {
    this.#t.setPersisted(s), this.#t.setCurrent(s), this.#i();
  }
  getData() {
    return this.#t.getCurrent();
  }
  setPersistedData(s) {
    this.#t.setPersisted(s);
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
  #c(s, t) {
    return t.toVariant(s.variesByCulture, s.variesBySegment);
  }
  // We will implement propertyAlias in the future, when implementing Varying Blocks. [NL]
  async propertyVariantId(s) {
    return O(
      [await this.structure.propertyStructureByAlias(s), this.variantId],
      ([t, i]) => t && i ? this.#c(t, i) : void 0
    );
  }
  /**
   * @function propertyValueByAlias
   * @param {string} propertyAlias - The alias of the property
   * @param {UmbVariantId} variantId - The variant
   * @returns {Promise<Observable<ReturnType | undefined> | undefined>} - An observable for the value of the property
   * @description Get an Observable for the value of this property.
   */
  async propertyValueByAlias(s, t) {
    return this.#t.createObservablePartOfCurrent(
      (i) => i?.values?.find((e) => e?.alias === s && (t ? t.compare(e) : !0))?.value
    );
  }
  /**
   * Get the current value of the property with the given alias and variantId.
   * @param {string} alias - The alias of the property
   * @param {UmbVariantId | undefined} variantId - The variant id of the property
   * @returns {ReturnType | undefined} The value or undefined if not set or found.
   */
  getPropertyValue(s, t) {
    const i = this.#t.getCurrent();
    if (i)
      return i.values?.find(
        (r) => r.alias === s && (t ? t.compare(r) : !0)
      )?.value;
  }
  async setPropertyValue(s, t, i) {
    this.initiatePropertyValueChange(), i ??= u.CreateInvariant();
    const e = await this.structure.getPropertyStructureByAlias(s);
    if (!e)
      throw new Error(`Property alias "${s}" not found.`);
    const n = (await this.#s.getItemByUnique(e.dataType.unique))?.propertyEditorSchemaAlias;
    if (!n)
      throw new Error(`Editor Alias of "${e.dataType.unique}" not found.`);
    const h = { editorAlias: n, ...i.toObject(), alias: s, value: t }, c = this.getData();
    if (c) {
      const w = E(
        c.values ?? [],
        h,
        (d) => d.alias === s && i.compare(d)
      );
      this.#t.updateCurrent({ values: w });
    }
    this.finishPropertyValueChange();
  }
  initiatePropertyValueChange() {
    this.#t.initiatePropertyValueChange();
  }
  createPropertyDatasetContext(s, t) {
    return new et(s, this, t);
  }
  setup(s, t) {
    this.createPropertyDatasetContext(s, t), this.validation.provideAt(s), this.hints.provideAt(s);
  }
  destroy() {
    this.structure.destroy(), super.destroy();
  }
}
class Vt extends J {
  constructor(s, t) {
    super(s, t.manifest.alias), this.IS_BLOCK_WORKSPACE_CONTEXT = !0, this.#e = new T(void 0), this.layout = this.#e.asObservable(), this.unique = this.#e.asObservablePart((e) => e?.contentKey), this.contentKey = this.#e.asObservablePart((e) => e?.contentKey), this.content = new y(this, "contentData", $), this.settings = new y(this, "settingsData", j), this.#n = new U(void 0), this.name = this.#n.asObservable(), this.#m = new _(this), this.#u = new v(void 0), this.variantId = this.#u.asObservable(), this.#y = new P(void 0), this.exposed = this.#y.asObservable(), this.readOnlyGuard = new b(this), this.#p = !1, this.#v = async (e) => {
      const r = e.detail.url;
      if (this.#p)
        return !0;
      if (this._checkWillNavigateAway(r) && this.getHasUnpersistedChanges()) {
        e.preventDefault();
        const h = (await this.getContext(S).catch(() => {
        }))?.open(this, I);
        if (h)
          try {
            return await h.onSubmit(), this.#p = !0, history.pushState({}, "", e.detail.url), !0;
          } catch {
            return !1;
          }
        else
          console.error("No modal manager found!");
      }
      return !0;
    }, this.#O = () => {
      if (this.#o)
        if (this.getIsNew() === !0) {
          const e = this.#e.value?.contentKey;
          e && this.#i?.delete(e);
        } else
          this.#d && this.#t?.setOneLayout(this.#d, this.#s), this.#h && this.#t?.setOneContent(this.#h), this.#l && this.#t?.setOneContent(this.#l);
    };
    const i = t.manifest;
    this.#g = i.meta?.entityType, window.addEventListener("willchangestate", this.#v), this.addValidationContext(this.content.validation), this.addValidationContext(this.settings.validation), this.#b = this.consumeContext(D, (e) => {
      this.#c = e, this.#s = e?.data.originData, e?.onSubmit().catch(this.#O);
    }).asPromise({ preventTimeout: !0 }), this.#a = this.consumeContext(B, (e) => {
      this.#t = e, this.#E();
    }), this.#r = this.consumeContext(k, (e) => {
      this.#i = e;
    }).asPromise({ preventTimeout: !0 }), this.observe(
      this.variantId,
      (e) => {
        this.content.setVariantId(e), this.settings.setVariantId(e);
      },
      null
    ), this.observe(
      l([this.content.values, this.settings.values]),
      async ([e]) => {
        this.#f(e);
      },
      "observeContentForLabelRender"
    ), this.routes.setRoutes([
      {
        path: "create/:elementTypeKey",
        component: o,
        setup: async (e, r) => {
          const n = r.match.params.elementTypeKey;
          await this.create(n), new Q(
            this,
            this,
            this.getHostElement().shadowRoot.querySelector("umb-router-slot")
          );
        }
      },
      {
        path: "edit/:key",
        component: o,
        setup: (e, r) => {
          const n = V(r.match.params.key);
          this.load(n);
        }
      }
    ]);
  }
  //
  #t;
  #a;
  #i;
  #r;
  #s;
  // Set the origin data for this workspace. Example used by inline editing which setups the workspace context it self.
  setOriginData(s) {
    this.#s = s;
  }
  #c;
  #b;
  #g;
  #o;
  #d;
  #h;
  #l;
  #e;
  #n;
  #m;
  #u;
  #y;
  #E() {
    if (!this.#t) return;
    const s = this.#t;
    this.observe(
      s.liveEditingMode,
      (t) => {
        this.#o = t ?? !1;
      },
      "observeLiveEditingMode"
    ), this.observe(
      l([
        s.variantId,
        this.content.structure.variesByCulture,
        this.content.structure.variesBySegment
      ]),
      ([t, i, e]) => {
        !t || i === void 0 || e === void 0 || (!e && !i ? t = u.CreateInvariant() : e ? i || (t = t.toCultureInvariant()) : t = t.toSegmentInvariant(), this.#u.setValue(t));
      },
      "observeVariantIds"
    ), this.removeUmbControllerByAlias("observeHasExpose"), this.observe(
      l([this.contentKey, this.variantId]),
      ([t, i]) => {
        !t || !i || this.observe(
          s.hasExposeOf(t, i),
          (e) => {
            this.#y.setValue(e);
          },
          "observeHasExpose"
        );
      },
      "observeContentKeyAndVariantId"
    ), this.observe(
      // TODO: Again we need to parse on all variants....
      s.readOnlyState.isPermittedForObservableVariant(this.variantId),
      (t) => {
        const i = "UMB_BLOCK_MANAGER_CONTEXT";
        if (t) {
          const e = {
            unique: i,
            variantId: this.#u.getValue()
          };
          this.readOnlyGuard?.addRule(e);
        } else
          this.readOnlyGuard?.removeRule(i);
      },
      "observeIsReadOnly"
    ), this.observe(
      this.content.contentTypeId,
      (t) => {
        this.observe(
          t ? s.blockTypeOf(t) : void 0,
          async (i) => {
            i?.editorSize && (s.getEditorConfiguration()?.find((n) => n.alias === "useInlineEditingAsDefault")?.value || this.setEditorSize(i.editorSize)), await this.content.structure.whenLoaded(), this.#T(i?.label ?? this.content.structure.getOwnerContentTypeName());
          },
          "observeBlockType"
        );
      },
      "observeContentTypeId"
    );
  }
  #T(s) {
    s && (this.#m.markdown = s, this.#f(this.content.getValues()));
  }
  async #f(s) {
    const t = {};
    if (s)
      for (const e of s)
        t[e.alias] = e.value;
    this.#m.value = t, await new Promise((e) => requestAnimationFrame(() => e(!0)));
    const i = this.#m.toString();
    this.#n.setValue(i), this.view.setTitle(i);
  }
  #p;
  #v;
  /**
   * Check if the workspace is about to navigate away.
   * @protected
   * @param {string} newUrl The new url that the workspace is navigating to.
   * @returns { boolean} true if the workspace is navigating away.
   * @memberof UmbEntityWorkspaceContextBase
   */
  _checkWillNavigateAway(s) {
    return !s.includes(this.routes.getActiveLocalPath());
  }
  setEditorSize(s) {
    this.#c?.setModalSize(s);
  }
  resetState() {
    super.resetState(), this.#n.setValue(void 0), this.#e.setValue(void 0), this.#d = void 0, this.#h = void 0, this.#l = void 0, this.content.resetState(), this.settings.resetState(), this.#p = !1, this.removeUmbControllerByAlias(Y);
  }
  async load(s) {
    if (await this.#a, await this.#r, !this.#t || !this.#i)
      throw new Error("Block manager not found");
    this.observe(
      this.#i.layoutOf(s),
      (t) => {
        this.#d ??= t, this.removeUmbControllerByAlias("observeLayoutInitially");
      },
      "observeLayoutInitially"
    ), this.#w(s), this.#o && this.establishLiveSync();
  }
  async create(s) {
    if (await this.#r, await this.#b, !this.#i)
      throw new Error("Block Entries not found");
    if (!this.#s)
      throw new Error("Origin data not defined");
    this.setIsNew(!0);
    const t = await this.#i.create(s, {}, this.#s);
    if (!t)
      throw new Error("Block Entries could not create block");
    if (this.#o) {
      if (!await this.#i.insert(
        t.layout,
        t.content,
        t.settings,
        this.#s
      ))
        throw new Error("Block Entries could not insert block");
      const e = t.layout.contentKey;
      this.#w(e), this.establishLiveSync();
    } else
      this.#e.setValue(t.layout), this.content.setData(t.content), t.settings && this.settings.setData(t.settings);
  }
  #w(s) {
    if (!this.#i)
      throw new Error("Block Entries not found");
    this.observe(
      this.#i.layoutOf(s),
      (t) => {
        this.#e.setValue(t);
        const i = t?.contentKey;
        if (!i)
          return;
        this.observe(
          this.#t.contentOf(i),
          (r) => {
            this.content.setData(r);
          },
          "observeContent"
        ), this.#h || this.observe(
          this.#t.contentOf(i),
          (r) => {
            this.#h ??= r, this.removeUmbControllerByAlias("observeContentInitially");
          },
          "observeContentInitially"
        );
        const e = t?.settingsKey;
        e && (this.observe(
          this.#t.settingsOf(e),
          (r) => {
            this.settings.setData(r);
          },
          "observeSettings"
        ), this.#l || this.observe(
          this.#t.settingsOf(e),
          (r) => {
            this.#l ??= r, this.removeUmbControllerByAlias("observeSettingsInitially");
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
    let s = !0;
    this.observe(
      this.layout,
      (t) => {
        if (t) {
          if (s) {
            s = !1;
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
    return this.#g;
  }
  getName() {
    return "";
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
  async propertyValueByAlias(s) {
    return this.#e.asObservablePart(
      (t) => t?.[s]
    );
  }
  getPropertyValue(s) {
    return this.#e.getValue()?.[s];
  }
  /**
   * @function setPropertyValue
   * @param {string} alias - The alias of the property to set the value of.
   * @param {unknown} value - value can be a promise resolving into the actual value or the raw value it self.
   * @returns {Promise<void>}
   * @description Set the value of this property.
   */
  async setPropertyValue(s, t) {
    const i = this.#e.value;
    i && this.#e.update({ ...i, [s]: await t });
  }
  async submit() {
    const s = this.#e.value, t = this.content.getData();
    if (!s || !this.#t || !this.#i || !t || !this.#s)
      throw new Error("Missing data");
    const i = this.settings.getData();
    if (this.content.setPersistedData(t), i && this.settings.setPersistedData(i), !this.#o)
      if (this.getIsNew() === !0) {
        if (!await this.#i.insert(s, t, i, this.#s))
          throw new Error("Block Entries could not insert block");
      } else
        this.#t.setOneLayout(s, this.#s), t && this.#t.setOneContent(t), i && this.#t.setOneSettings(i);
    this.#C(s.contentKey), this.setIsNew(!1), this.#U();
  }
  #U() {
    this.content.validation.report(), this.settings.validation.report();
  }
  expose() {
    const s = this.#e.value?.contentKey;
    if (!s) throw new Error("Failed to expose block, missing content key.");
    this.#C(s);
  }
  #C(s) {
    const t = this.#u.getValue();
    if (!t) throw new Error("Failed to expose block, missing variant id.");
    this.#t?.setOneExpose(s, t);
  }
  #O;
  destroy() {
    super.destroy(), window.removeEventListener("willchangestate", this.#v), this.#e?.destroy(), this.#n?.destroy(), this.#e = void 0, this.#n = void 0, this.#t = void 0, this.#s = void 0;
  }
}
export {
  Vt as UmbBlockWorkspaceContext,
  Vt as api
};
//# sourceMappingURL=block-workspace.context-BqlzYaSC.js.map
