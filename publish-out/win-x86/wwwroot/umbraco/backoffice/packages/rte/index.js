import { U as m } from "./constants-CCLuR4UJ.js";
import { a as j } from "./constants-CCLuR4UJ.js";
import { observeMultiple as f, jsonStringComparison as g } from "@umbraco-cms/backoffice/observable-api";
import { property as l, state as h } from "@umbraco-cms/backoffice/external/lit";
import { UmbBlockRteManagerContext as d, UmbBlockRteEntriesContext as v } from "@umbraco-cms/backoffice/block-rte";
import { UmbChangeEvent as k } from "@umbraco-cms/backoffice/event";
import { UmbFormControlMixin as b, UmbValidationContext as _, UMB_VALIDATION_EMPTY_LOCALIZATION_KEY as C } from "@umbraco-cms/backoffice/validation";
import { UmbLitElement as E } from "@umbraco-cms/backoffice/lit-element";
import { UmbVariantId as T } from "@umbraco-cms/backoffice/variant";
import { UMB_CONTENT_WORKSPACE_CONTEXT as O } from "@umbraco-cms/backoffice/content";
import { UMB_PROPERTY_CONTEXT as x, UMB_PROPERTY_DATASET_CONTEXT as B } from "@umbraco-cms/backoffice/property";
var M = Object.defineProperty, w = Object.getOwnPropertyDescriptor, r = (u, e, t, s) => {
  for (var i = s > 1 ? void 0 : s ? w(e, t) : e, o = u.length - 1, n; o >= 0; o--)
    (n = u[o]) && (i = (s ? n(e, t, i) : n(i)) || i);
  return s && i && M(e, t, i), i;
};
class a extends b(E) {
  constructor() {
    super(), this.readonly = !1, this._css = {}, this._markup = "", this.#t = new d(this), this.#n = new v(this), this.#o = new _(this), this.#e = /* @__PURE__ */ new Map(), this.#i = /* @__PURE__ */ new Map(), this.#s = /* @__PURE__ */ new Map(), this.consumeContext(O, (e) => {
      e ? this.observe(
        f([
          this.#t.blockTypes,
          e.structure.variesByCulture,
          e.structure.variesBySegment
        ]),
        async ([t, s, i]) => {
          t.length > 0 && (s === !1 || i === !1) && (await Promise.all(
            t.map(async (p) => {
              const y = p.contentElementTypeKey;
              await this.#t.contentTypesLoaded;
              const c = await this.#t.getStructure(y);
              return s === !1 && c?.getVariesByCulture() === !0 ? !0 : i === !1 && c?.getVariesBySegment() === !0;
            })
          )).filter((p) => p === !0).length > 0 && (this.setCustomValidity("#blockEditor_blockVariantConfigurationNotSupported"), this.checkValidity());
        },
        "blockTypeConfigurationCheck"
      ) : this.removeUmbControllerByAlias("blockTypeConfigurationCheck");
    }).passContextAliasMatches(), this.consumeContext(x, (e) => {
      this.#r(e);
    }), this.consumeContext(B, (e) => {
      this.#t.setVariantId(e?.getVariantId());
    }), this.observe(
      this.#n.layoutEntries,
      (e) => {
        this.#t.setLayouts(e);
      },
      null
    ), this.addValidator(
      "valueMissing",
      () => this.mandatoryMessage ?? C,
      () => !!this.mandatory && this.value === void 0
    );
  }
  set config(e) {
    if (!e) return;
    this._config = e;
    const t = e.getValueByAlias("blocks") ?? [];
    this.#t.setBlockTypes(t), this.#t.setEditorConfiguration(e);
    const s = e.getValueByAlias("dimensions");
    this._css = {
      "--umb-rte-max-width": s?.width ? `${s.width}px` : "100%",
      "--umb-rte-height": s?.height ? `${s.height}px` : "unset"
    };
  }
  set value(e) {
    if (!e) {
      super.value = void 0, this._markup = "", this.#t.setLayouts([]), this.#t.setContents([]), this.#t.setSettings([]), this.#t.setExposes([]);
      return;
    }
    const t = e ? { ...e } : {};
    t.markup ??= "", t.blocks ? t.blocks = { ...t.blocks } : t.blocks ??= { layout: {}, contentData: [], settingsData: [], expose: [] }, t.blocks.layout ??= {}, t.blocks.contentData ??= [], t.blocks.settingsData ??= [], t.blocks.expose ??= [], super.value = t, this._markup !== super.value.markup && (this._markup = super.value.markup), this.#t.setLayouts(t.blocks.layout[m] ?? []), this.#t.setContents(t.blocks.contentData), this.#t.setSettings(t.blocks.settingsData), this.#t.setExposes(t.blocks.expose);
  }
  get value() {
    return super.value;
  }
  get _value() {
    return super.value;
  }
  set _value(e) {
    super.value = e;
  }
  #t;
  #n;
  #o;
  #e;
  #i;
  #s;
  #r(e) {
    this.observe(
      e?.dataPath,
      (t) => {
        t && (this.#o.setDataPath(t + ".blocks"), this.#o.autoReport());
      },
      "observeDataPath"
    ), this.observe(
      e?.alias,
      (t) => {
        this.#t.setPropertyAlias(t);
      },
      "observePropertyAlias"
    ), this.observe(
      f([
        this.#t.layouts,
        this.#t.contents,
        this.#t.settings,
        this.#t.exposes
      ]),
      ([t, s, i, o]) => {
        if (t.length === 0)
          if (super.value?.markup === void 0) {
            if (this.value === void 0)
              return;
            super.value = void 0;
          } else {
            const n = {
              ...super.value,
              blocks: {
                layout: {},
                contentData: [],
                settingsData: [],
                expose: []
              }
            };
            if (g(this.value, n))
              return;
            super.value = n;
          }
        else {
          const n = {
            markup: this._markup,
            blocks: {
              layout: { [m]: t },
              contentData: s,
              settingsData: i,
              expose: o
            }
          };
          if (g(this.value, n))
            return;
          super.value = n;
        }
        super.value?.markup !== void 0 && e?.setValue(super.value);
      },
      "blockManagerObserver"
    );
  }
  #a(e) {
    e.length && e.forEach((t) => {
      if (t.contentKey) {
        this.#e.set(t.contentKey, t);
        const s = this.#t.getContentOf(t.contentKey);
        if (s ? this.#i.set(t.contentKey, s) : console.warn(
          `Expected content block for '${t.contentKey}' was not found. This may indicate a data consistency issue.`
        ), t.settingsKey) {
          const i = this.#t.getSettingsOf(t.settingsKey);
          i ? this.#s.set(t.settingsKey, i) : console.warn(
            `Expected settings block for '${t.settingsKey}' was not found. This may indicate a data consistency issue.`
          );
        }
      }
    });
  }
  #u(e) {
    e.length && e.forEach((t) => {
      if (t && this.#e.has(t)) {
        const s = this.#e.get(t);
        if (s) {
          this.#t.setOneLayout(s), this.#e.delete(t);
          const i = this.#i.get(t);
          if (i && (this.#t.setOneContent(i), this.#t.setOneExpose(t, T.CreateInvariant()), this.#i.delete(t)), s.settingsKey && this.#s.has(s.settingsKey)) {
            const o = this.#s.get(s.settingsKey);
            o && (this.#t.setOneSettings(o), this.#s.delete(s.settingsKey));
          }
        }
      }
    });
  }
  _filterUnusedBlocks(e) {
    const t = this.#t.getLayouts().filter((o) => e.indexOf(o.contentKey) === -1);
    this.#u(e), this.#a(t);
    const s = t.map((o) => o.contentKey), i = t.map((o) => o.settingsKey).filter((o) => typeof o == "string");
    this.#t.removeManyContent(s), this.#t.removeManySettings(i), this.#t.removeManyLayouts(s);
  }
  _fireChangeEvent() {
    this.dispatchEvent(new k());
  }
  destroy() {
    super.destroy(), this.#e.clear(), this.#i.clear(), this.#s.clear();
  }
}
r([
  l({
    attribute: !1,
    type: Object,
    hasChanged(u, e) {
      return u?.markup !== e?.markup;
    }
  })
], a.prototype, "value", 1);
r([
  l({ type: Boolean, reflect: !0 })
], a.prototype, "readonly", 2);
r([
  l({ type: Boolean })
], a.prototype, "mandatory", 2);
r([
  l({ type: String })
], a.prototype, "mandatoryMessage", 2);
r([
  h()
], a.prototype, "_config", 2);
r([
  h()
], a.prototype, "_css", 2);
r([
  h()
], a.prototype, "_value", 1);
r([
  h()
], a.prototype, "_markup", 2);
export {
  j as UMB_BLOCK_RTE_DATA_CONTENT_KEY,
  m as UMB_BLOCK_RTE_PROPERTY_EDITOR_SCHEMA_ALIAS,
  a as UmbPropertyEditorUiRteElementBase
};
//# sourceMappingURL=index.js.map
