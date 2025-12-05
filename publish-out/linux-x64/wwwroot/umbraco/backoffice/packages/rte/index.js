import { U as c } from "./constants-CCLuR4UJ.js";
import { a as w } from "./constants-CCLuR4UJ.js";
import { property as l, state as h } from "@umbraco-cms/backoffice/external/lit";
import { observeMultiple as y } from "@umbraco-cms/backoffice/observable-api";
import { UmbBlockRteManagerContext as f, UmbBlockRteEntriesContext as b } from "@umbraco-cms/backoffice/block-rte";
import { UmbLitElement as _ } from "@umbraco-cms/backoffice/lit-element";
import { UMB_PROPERTY_CONTEXT as g, UMB_PROPERTY_DATASET_CONTEXT as C } from "@umbraco-cms/backoffice/property";
import { UmbFormControlMixin as k, UmbValidationContext as d, UMB_VALIDATION_EMPTY_LOCALIZATION_KEY as E } from "@umbraco-cms/backoffice/validation";
import { UmbChangeEvent as T } from "@umbraco-cms/backoffice/event";
import { UMB_CONTENT_WORKSPACE_CONTEXT as O } from "@umbraco-cms/backoffice/content";
var x = Object.defineProperty, B = Object.getOwnPropertyDescriptor, a = (n, e, t, r) => {
  for (var s = r > 1 ? void 0 : r ? B(e, t) : e, o = n.length - 1, u; o >= 0; o--)
    (u = n[o]) && (s = (r ? u(e, t, s) : u(s)) || s);
  return r && s && x(e, t, s), s;
};
class i extends k(_) {
  constructor() {
    super(), this.readonly = !1, this._markup = "", this.#t = new f(this), this.#s = new b(this), this.#e = new d(this), this.consumeContext(O, (e) => {
      e ? this.observe(
        y([
          this.#t.blockTypes,
          e.structure.variesByCulture,
          e.structure.variesBySegment
        ]),
        async ([t, r, s]) => {
          t.length > 0 && (r === !1 || s === !1) && (await Promise.all(
            t.map(async (p) => {
              const v = p.contentElementTypeKey;
              await this.#t.contentTypesLoaded;
              const m = await this.#t.getStructure(v);
              return r === !1 && m?.getVariesByCulture() === !0 ? !0 : s === !1 && m?.getVariesBySegment() === !0;
            })
          )).filter((p) => p === !0).length > 0 && (this.setCustomValidity("#blockEditor_blockVariantConfigurationNotSupported"), this.checkValidity());
        },
        "blockTypeConfigurationCheck"
      ) : this.removeUmbControllerByAlias("blockTypeConfigurationCheck");
    }).passContextAliasMatches(), this.consumeContext(g, (e) => {
      this.#o(e);
    }), this.consumeContext(C, (e) => {
      this.#t.setVariantId(e?.getVariantId());
    }), this.observe(
      this.#s.layoutEntries,
      (e) => {
        this.#t.setLayouts(e);
      },
      null
    ), this.addValidator(
      "valueMissing",
      () => this.mandatoryMessage ?? E,
      () => !!this.mandatory && this.value === void 0
    );
  }
  set config(e) {
    if (!e) return;
    this._config = e;
    const t = e.getValueByAlias("blocks") ?? [];
    this.#t.setBlockTypes(t), this.#t.setEditorConfiguration(e);
  }
  set value(e) {
    if (!e) {
      super.value = void 0, this._markup = "", this.#t.setLayouts([]), this.#t.setContents([]), this.#t.setSettings([]), this.#t.setExposes([]);
      return;
    }
    const t = e ? { ...e } : {};
    t.markup ??= "", t.blocks ? t.blocks = { ...t.blocks } : t.blocks ??= { layout: {}, contentData: [], settingsData: [], expose: [] }, t.blocks.layout ??= {}, t.blocks.contentData ??= [], t.blocks.settingsData ??= [], t.blocks.expose ??= [], super.value = t, this._markup !== super.value.markup && (this._markup = super.value.markup), this.#t.setLayouts(t.blocks.layout[c] ?? []), this.#t.setContents(t.blocks.contentData), this.#t.setSettings(t.blocks.settingsData), this.#t.setExposes(t.blocks.expose);
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
  #s;
  #e;
  #o(e) {
    this.observe(
      e?.dataPath,
      (t) => {
        t && (this.#e.setDataPath(t + ".blocks"), this.#e.autoReport());
      },
      "observeDataPath"
    ), this.observe(
      e?.alias,
      (t) => {
        this.#t.setPropertyAlias(t);
      },
      "observePropertyAlias"
    ), this.observe(
      y([
        this.#t.layouts,
        this.#t.contents,
        this.#t.settings,
        this.#t.exposes
      ]),
      ([t, r, s, o]) => {
        t.length === 0 ? super.value?.markup === void 0 ? super.value = void 0 : super.value = {
          ...super.value,
          blocks: {
            layout: {},
            contentData: [],
            settingsData: [],
            expose: []
          }
        } : super.value = {
          markup: this._markup,
          blocks: {
            layout: { [c]: t },
            contentData: r,
            settingsData: s,
            expose: o
          }
        }, super.value?.markup !== void 0 && e?.setValue(super.value);
      },
      "blockManagerObserver"
    );
  }
  _filterUnusedBlocks(e) {
    const t = this.#t.getLayouts().filter((o) => e.indexOf(o.contentKey) === -1), r = t.map((o) => o.contentKey), s = t.map((o) => o.settingsKey).filter((o) => typeof o == "string");
    this.#t.removeManyContent(r), this.#t.removeManySettings(s), this.#t.removeManyLayouts(r);
  }
  _fireChangeEvent() {
    this.dispatchEvent(new T());
  }
}
a([
  l({
    attribute: !1,
    type: Object,
    hasChanged(n, e) {
      return n?.markup !== e?.markup;
    }
  })
], i.prototype, "value", 1);
a([
  l({ type: Boolean, reflect: !0 })
], i.prototype, "readonly", 2);
a([
  l({ type: Boolean })
], i.prototype, "mandatory", 2);
a([
  l({ type: String })
], i.prototype, "mandatoryMessage", 2);
a([
  h()
], i.prototype, "_config", 2);
a([
  h()
], i.prototype, "_value", 1);
a([
  h()
], i.prototype, "_markup", 2);
export {
  w as UMB_BLOCK_RTE_DATA_CONTENT_KEY,
  c as UMB_BLOCK_RTE_PROPERTY_EDITOR_SCHEMA_ALIAS,
  i as UmbPropertyEditorUiRteElementBase
};
//# sourceMappingURL=index.js.map
