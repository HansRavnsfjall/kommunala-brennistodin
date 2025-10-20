import { U as d } from "./index-DCV7a8en.js";
import { U as y } from "./property-type-workspace.context-token-Cbb8UB1S.js";
import { UmbTextStyles as v } from "@umbraco-cms/backoffice/style";
import { html as b, css as w, state as u, customElement as _ } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as f } from "@umbraco-cms/backoffice/lit-element";
import { UmbSubmittableWorkspaceContextBase as C, umbObjectToPropertyValueArray as l, UmbWorkspaceIsNewRedirectController as P, UmbWorkspaceIsNewRedirectControllerAlias as T, UmbInvariantWorkspacePropertyDatasetContext as E } from "@umbraco-cms/backoffice/workspace";
import { UmbObjectState as U } from "@umbraco-cms/backoffice/observable-api";
import { UMB_CONTENT_TYPE_WORKSPACE_CONTEXT as x } from "@umbraco-cms/backoffice/content-type";
import { UmbId as O } from "@umbraco-cms/backoffice/id";
import { firstValueFrom as g } from "@umbraco-cms/backoffice/external/rxjs";
import { UmbValidationContext as N } from "@umbraco-cms/backoffice/validation";
var S = Object.defineProperty, V = Object.getOwnPropertyDescriptor, m = (a) => {
  throw TypeError(a);
}, p = (a, t, e, r) => {
  for (var s = r > 1 ? void 0 : r ? V(t, e) : t, i = a.length - 1, o; i >= 0; i--)
    (o = a[i]) && (s = (r ? o(t, e, s) : o(s)) || s);
  return r && s && S(t, e, s), s;
}, c = (a, t, e) => t.has(a) || m("Cannot " + e), D = (a, t, e) => (c(a, t, "read from private field"), t.get(a)), q = (a, t, e) => t.has(a) ? m("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(a) : t.set(a, e), R = (a, t, e, r) => (c(a, t, "write to private field"), t.set(a, e), e), h;
let n = class extends f {
  constructor() {
    super(), q(this, h), this.consumeContext(y, (a) => {
      R(this, h, a), this.observe(a?.isNew, (t) => {
        this._isNew = t;
      }), this.observe(a?.name, (t) => {
        this._name = t;
      }), D(this, h)?.createPropertyDatasetContext(this);
    });
  }
  render() {
    return this._isNew !== void 0 ? b`
					<umb-workspace-editor
						headline=${this.localize.term(
      this._isNew ? "contentTypeEditor_addProperty" : "contentTypeEditor_editProperty",
      [this._name]
    )}>
					</umb-workspace-editor>
				` : "";
  }
};
h = /* @__PURE__ */ new WeakMap();
n.styles = [
  v,
  w`
			:host {
				display: block;
				width: 100%;
				height: 100%;
			}
		`
];
p([
  u()
], n.prototype, "_isNew", 2);
p([
  u()
], n.prototype, "_name", 2);
n = p([
  _("umb-property-type-workspace-editor")
], n);
class z extends C {
  constructor(t, e) {
    super(t, e.manifest.alias), this.IS_PROPERTY_TYPE_WORKSPACE_CONTEXT = !0, this.#t = new U(void 0), this.data = this.#t.asObservable(), this.name = this.#t.asObservablePart((s) => s?.name), this.unique = this.#t.asObservablePart((s) => s?.id), this.values = this.#t.asObservablePart((s) => l(s));
    const r = e.manifest;
    this.#s = r.meta?.entityType, this.validationContext = new N(this), this.addValidationContext(this.validationContext), this.observe(this.unique, (s) => {
      s && this.validationContext.setDataPath(d({ id: s }));
    }), this.#a = this.consumeContext(x, (s) => {
      this.#e = s;
    }).skipHost().asPromise({ preventTimeout: !0 }).catch(() => {
      this.#e = void 0;
    }), this.routes.setRoutes([
      {
        // Would it make more sense to have groupKey before elementTypeKey?
        path: "create/:containerUnique",
        component: n,
        setup: async (s, i) => {
          const o = i.match.params.containerUnique === "null" ? null : i.match.params.containerUnique;
          await this.create(o), new P(
            this,
            this,
            this.getHostElement().shadowRoot.querySelector("umb-router-slot")
          );
        }
      },
      {
        path: "edit/:unique",
        component: n,
        setup: (s, i) => {
          const o = i.match.params.unique;
          this.load(o);
        }
      }
    ]);
  }
  #a;
  #e;
  #s;
  #t;
  async getValues() {
    return l(await g(this.data));
  }
  resetState() {
    super.resetState(), this.#t.setValue(void 0), this.removeUmbControllerByAlias(T), this.removeUmbControllerByAlias("observePropertyTypeData");
  }
  createPropertyDatasetContext(t) {
    return new E(t, this);
  }
  async load(t) {
    this.resetState(), await this.#a, this.observe(
      await this.#e?.structure.propertyStructureById(t),
      (e) => {
        e ? (this.#t.setValue(e), this.setIsNew(!1)) : this.#t.setValue(void 0);
      },
      "observePropertyTypeData"
    );
  }
  async create(t) {
    this.resetState();
    const e = O.new();
    let r = {
      id: e,
      unique: e,
      container: t ? { id: t } : null,
      alias: "",
      name: "",
      description: "",
      variesByCulture: !1,
      variesBySegment: !1,
      validation: {
        mandatory: !1,
        mandatoryMessage: null,
        regEx: null,
        regExMessage: null
      },
      appearance: {
        labelOnTop: !1
      },
      sortOrder: 0
    };
    this.modalContext && (r = { ...r, ...this.modalContext.data.preset }), this.#t.setValue(r), this.setIsNew(!0);
  }
  getData() {
    return this.#t.getValue();
  }
  updateData(t) {
    this.#t?.update(t);
  }
  getUnique() {
    return this.getData().id;
  }
  getEntityType() {
    return this.#s;
  }
  getName() {
    return this.#t.getValue()?.name;
  }
  setName(t) {
    this.updateData({ name: t });
  }
  /**
   * @function propertyValueByAlias
   * @param {string} propertyAlias
   * @returns {Promise<Observable<ReturnType | undefined> | undefined>}
   * @description Get an Observable for the value of this property.
   */
  async propertyValueByAlias(t) {
    return this.#t.asObservablePart((e) => e?.[t]);
  }
  getPropertyValue(t) {
    return this.#t.getValue()?.[t];
  }
  /**
   * @function setPropertyValue
   * @param {string} propertyAlias
   * @param alias
   * @param {PromiseLike<unknown>} value - value can be a promise resolving into the actual value or the raw value it self.
   * @returns {Promise<void>}
   * @description Set the value of this property.
   */
  async setPropertyValue(t, e) {
    const r = this.#t.value;
    r && this.#t.update({ ...r, [t]: e });
  }
  async submit() {
    if (!this.modalContext)
      throw new Error("Needs to be in a modal to submit.");
    const t = this.modalContext.data.contentTypeUnique, e = this.#t.getValue();
    if (!e)
      throw new Error("No data to submit.");
    if (await this.#a, this.#e)
      this.validationContext.report(), await this.#e.structure.insertProperty(t, e), this.setIsNew(!1);
    else
      throw new Error("Failed to find content type context.");
  }
  destroy() {
    this.#t.destroy(), super.destroy();
  }
}
export {
  z as UmbPropertyTypeWorkspaceContext,
  z as api
};
//# sourceMappingURL=property-type-workspace.context-CsfLIm2j.js.map
