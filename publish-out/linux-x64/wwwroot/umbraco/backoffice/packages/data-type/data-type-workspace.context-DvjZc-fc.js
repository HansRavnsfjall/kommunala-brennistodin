import { d as p, t as u, f as d, N as c } from "./constants-DE93IEgK.js";
import { html as y, css as m, customElement as A } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as E } from "@umbraco-cms/backoffice/lit-element";
import { UmbEntityNamedDetailWorkspaceContextBase as b, UmbWorkspaceIsNewRedirectController as g, UmbInvariantWorkspacePropertyDatasetContext as f } from "@umbraco-cms/backoffice/workspace";
import { UmbArrayState as P, UmbStringState as h, appendToFrozenArray as U } from "@umbraco-cms/backoffice/observable-api";
import { umbExtensionsRegistry as l } from "@umbraco-cms/backoffice/extension-registry";
var _ = Object.getOwnPropertyDescriptor, v = (o, t, e, r) => {
  for (var s = r > 1 ? void 0 : r ? _(t, e) : t, i = o.length - 1, a; i >= 0; i--)
    (a = o[i]) && (s = a(s) || s);
  return s;
};
let n = class extends E {
  constructor() {
    super(), this.consumeContext(p, (o) => {
      o?.createPropertyDatasetContext(this);
    });
  }
  render() {
    return y`
			<umb-entity-detail-workspace-editor>
				<umb-workspace-header-name-editable slot="header"></umb-workspace-header-name-editable>
			</umb-entity-detail-workspace-editor>
		`;
  }
};
n.styles = [
  m`
			:host {
				display: block;
				width: 100%;
				height: 100%;
			}
		`
];
n = v([
  A("umb-data-type-workspace-editor")
], n);
class I extends b {
  constructor(t) {
    super(t, {
      workspaceAlias: c,
      entityType: d,
      detailRepositoryAlias: u
    }), this.propertyEditorUiAlias = this._data.createObservablePartOfCurrent((e) => e?.editorUiAlias), this.propertyEditorSchemaAlias = this._data.createObservablePartOfCurrent((e) => e?.editorAlias), this.values = this._data.createObservablePartOfCurrent((e) => e?.values), this.#t = new P([], (e) => e.alias).sortBy(
      (e, r) => (e.weight || 0) - (r.weight || 0)
    ), this.properties = this.#t.asObservable(), this.#e = [], this.#r = [], this.#s = [], this.#i = [], this.#a = null, this.#n = new h(null), this.propertyEditorUiIcon = this.#n.asObservable(), this.#h = new h(null), this.propertyEditorUiName = this.#h.asObservable(), this.#d(), this.#u(), this.routes.setRoutes([
      {
        path: "create/parent/:entityType/:parentUnique",
        component: n,
        setup: async (e, r) => {
          const s = r.match.params.entityType, i = r.match.params.parentUnique === "null" ? null : r.match.params.parentUnique;
          await this.createScaffold({ parent: { entityType: s, unique: i } }), new g(
            this,
            this,
            this.getHostElement().shadowRoot.querySelector("umb-router-slot")
          );
        }
      },
      {
        path: "edit/:unique",
        component: n,
        setup: (e, r) => {
          const s = r.match.params.unique;
          this.load(s);
        }
      }
    ]);
  }
  async getValues() {
    return this._data.getCurrent()?.values;
  }
  #t;
  #e;
  #r;
  #s;
  #i;
  #a;
  #o;
  #n;
  #h;
  resetState() {
    super.resetState(), this.#s = [], this.#i = [], this.#e = [], this.#r = [], this.#o = void 0, this.#p();
  }
  // Hold the last set property editor ui alias, so we know when it changes, so we can reset values. [NL]
  #l;
  #u() {
    this.observe(
      this.propertyEditorUiAlias,
      async (t) => {
        this.#i = [], this.#r = [], t !== void 0 && this.#y(t);
      },
      "editorUiAlias"
    );
  }
  #d() {
    return this.observe(
      this.propertyEditorSchemaAlias,
      (t) => {
        this.#s = [], this.#e = [], this.#c(t);
      },
      "schemaAlias"
    );
  }
  #c(t) {
    if (!t) {
      this.removeUmbControllerByAlias("schema");
      return;
    }
    this.observe(
      t ? l.byTypeAndAlias("propertyEditorSchema", t) : void 0,
      (e) => {
        this.#s = (e?.meta.settings?.properties ?? []).map((r, s) => ({
          ...r,
          weight: r.weight ?? s
        })), this.#e = e?.meta.settings?.defaultData || [], this.#a = e?.meta.defaultPropertyEditorUiAlias || null, this.#a && this.getPropertyEditorUiAlias() === null && this.setPropertyEditorUiAlias(this.#a), this.#p();
      },
      "schema"
    );
  }
  #y(t) {
    if (!t) {
      this.removeUmbControllerByAlias("editorUi");
      return;
    }
    this.observe(
      l.byTypeAndAlias("propertyEditorUi", t),
      (e) => {
        this.#n.setValue(e?.meta.icon || null), this.#h.setValue(e?.name || null), this.#i = (e?.meta.settings?.properties ?? []).map((r, s) => ({
          ...r,
          weight: r.weight ?? 1e3 + s
        })), this.#r = e?.meta.settings?.defaultData || [], this.setPropertyEditorSchemaAlias(e?.meta.propertyEditorSchemaAlias), this.#p();
      },
      "editorUi"
    );
  }
  #p() {
    if (this.#s && this.#i) {
      this.#t.setValue(this.#s), this.#t.append(this.#i);
      const t = this.#l;
      this.#l = this.getPropertyEditorUiAlias(), (this.getIsNew() || t && t !== this.#l) && this.#m();
    }
  }
  #m() {
    if (!this.#e || !this.#r) return;
    const t = this._data.getCurrent();
    if (!t) return;
    this.#o = [
      ...this.#e,
      ...this.#r
    ];
    const e = [];
    for (const r of this.#t.getValue()) {
      const s = t.values?.find((a) => a.alias === r.alias);
      if (s) {
        e.push(s);
        continue;
      }
      const i = this.#o.find((a) => a.alias === r.alias);
      i && e.push(i);
    }
    this._data.updatePersisted({ values: e }), this._data.updateCurrent({ values: e });
  }
  getPropertyDefaultValue(t) {
    return this.#o?.find((e) => e.alias === t)?.value;
  }
  createPropertyDatasetContext(t) {
    return new f(t, this);
  }
  getPropertyEditorSchemaAlias() {
    return this._data.getCurrent()?.editorAlias;
  }
  setPropertyEditorSchemaAlias(t) {
    this._data.updateCurrent({ editorAlias: t });
  }
  getPropertyEditorUiAlias() {
    return this._data.getCurrent()?.editorUiAlias;
  }
  setPropertyEditorUiAlias(t) {
    this._data.updateCurrent({ editorUiAlias: t });
  }
  /**
   * @function propertyValueByAlias
   * @param {string} propertyAlias
   * @returns {Promise<Observable<ReturnType | undefined> | undefined>}
   * @description Get an Observable for the value of this property.
   */
  async propertyValueByAlias(t) {
    return await this._getDataPromise, this._data.createObservablePartOfCurrent(
      (e) => e?.values?.find((r) => r.alias === t)?.value
    );
  }
  getPropertyValue(t) {
    return this._data.getCurrent()?.values?.find((e) => e.alias === t)?.value ?? this.getPropertyDefaultValue(t);
  }
  // TODO: its not called a property in the model, but we do consider this way in our front-end
  async setPropertyValue(t, e) {
    await this._getDataPromise;
    const r = { alias: t, value: e }, s = this._data.getCurrent();
    if (s) {
      const i = U(s.values || [], r, (a) => a.alias);
      this._data.updateCurrent({ values: i });
    }
  }
  destroy() {
    this.#t.destroy(), this.#n.destroy(), this.#h.destroy(), super.destroy();
  }
}
export {
  I as UmbDataTypeWorkspaceContext,
  I as api
};
//# sourceMappingURL=data-type-workspace.context-DvjZc-fc.js.map
