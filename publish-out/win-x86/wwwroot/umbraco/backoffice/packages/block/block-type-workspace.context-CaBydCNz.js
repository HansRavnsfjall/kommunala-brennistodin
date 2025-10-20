import { U as v } from "./block-type-workspace.context-token-C9eNrOiR.js";
import { UmbTextStyles as _ } from "@umbraco-cms/backoffice/style";
import { html as f, css as T, state as w, customElement as C } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as E } from "@umbraco-cms/backoffice/lit-element";
import { UmbRepositoryItemsManager as P } from "@umbraco-cms/backoffice/repository";
import { UMB_DOCUMENT_TYPE_ITEM_REPOSITORY_ALIAS as O } from "@umbraco-cms/backoffice/document-type";
import { UMB_PROPERTY_CONTEXT as g } from "@umbraco-cms/backoffice/property";
import { UmbSubmittableWorkspaceContextBase as k, umbObjectToPropertyValueArray as m, UmbWorkspaceIsNewRedirectController as U, UmbWorkspaceIsNewRedirectControllerAlias as x, UmbInvariantWorkspacePropertyDatasetContext as K } from "@umbraco-cms/backoffice/workspace";
import { UmbObjectState as V, appendToFrozenArray as S } from "@umbraco-cms/backoffice/observable-api";
import { firstValueFrom as N } from "@umbraco-cms/backoffice/external/rxjs";
var R = Object.defineProperty, W = Object.getOwnPropertyDescriptor, u = (s) => {
  throw TypeError(s);
}, y = (s, t, e, r) => {
  for (var a = r > 1 ? void 0 : r ? W(t, e) : t, o = s.length - 1, i; o >= 0; o--)
    (i = s[o]) && (a = (r ? i(t, e, a) : i(a)) || a);
  return r && a && R(t, e, a), a;
}, d = (s, t, e) => t.has(s) || u("Cannot " + e), l = (s, t, e) => (d(s, t, "read from private field"), t.get(s)), c = (s, t, e) => t.has(s) ? u("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(s) : t.set(s, e), A = (s, t, e, r) => (d(s, t, "write to private field"), t.set(s, e), e), h, p;
let n = class extends E {
  constructor() {
    super(), c(this, h, new P(this, O)), c(this, p), this.consumeContext(v, (s) => {
      A(this, p, s), l(this, p)?.createPropertyDatasetContext(this), this.observe(l(this, p)?.unique, (t) => {
        t && l(this, h).setUniques([t]);
      });
    }), this.observe(l(this, h).items, (s) => {
      const t = s[0];
      t && (this._name = t.name);
    });
  }
  render() {
    return f`
			<umb-workspace-editor headline=${this.localize.term("blockEditor_blockConfigurationOverlayTitle", [this._name])}>
			</umb-workspace-editor>
		`;
  }
};
h = /* @__PURE__ */ new WeakMap();
p = /* @__PURE__ */ new WeakMap();
n.styles = [
  _,
  T`
			:host {
				display: block;
				width: 100%;
				height: 100%;
			}
		`
];
y([
  w()
], n.prototype, "_name", 2);
n = y([
  C("umb-block-type-workspace-editor")
], n);
class G extends k {
  constructor(t, e) {
    super(t, e.manifest.alias), this.IS_BLOCK_TYPE_WORKSPACE_CONTEXT = !0, this.#t = new V(void 0), this.data = this.#t.asObservable(), this.name = this.#t.asObservablePart(() => "block type"), this.unique = this.#t.asObservablePart((a) => a?.contentElementTypeKey), this.values = this.#t.asObservablePart((a) => m(a));
    const r = e.manifest;
    this.#r = r.meta?.entityType, this.#s = this.consumeContext(g, (a) => {
      this.#e = a;
    }).asPromise({ preventTimeout: !0 }), this.routes.setRoutes([
      {
        // Would it make more sense to have groupKey before elementTypeKey?
        path: "create/:elementTypeKey/:groupKey",
        component: n,
        setup: async (a, o) => {
          const i = o.match.params.elementTypeKey, b = o.match.params.groupKey === "null" ? null : o.match.params.groupKey;
          await this.create(i, b), new U(
            this,
            this,
            this.getHostElement().shadowRoot.querySelector("umb-router-slot")
          );
        }
      },
      {
        path: "edit/:id",
        component: n,
        setup: (a, o) => {
          const i = o.match.params.id;
          this.load(i);
        }
      }
    ]);
  }
  #s;
  #e;
  #r;
  #t;
  async getValues() {
    return m(await N(this.data));
  }
  resetState() {
    super.resetState(), this.#t.setValue(void 0), this.removeUmbControllerByAlias(x);
  }
  createPropertyDatasetContext(t) {
    return new K(t, this);
  }
  async load(t) {
    this.resetState(), await this.#s, this.observe(
      this.#e?.value,
      (e) => {
        if (e) {
          const r = e.find((a) => a.contentElementTypeKey === t);
          if (r) {
            this.#t.setValue(r);
            return;
          }
        }
        this.#t.setValue(void 0);
      },
      "observePropertyValue"
    );
  }
  async create(t, e) {
    this.resetState();
    let r = {
      contentElementTypeKey: t
    };
    this.modalContext && (r = { ...r, ...this.modalContext.data.preset }), e && (r.groupKey = e), this.setIsNew(!0), this.#t.setValue(r);
  }
  getData() {
    return this.#t.getValue();
  }
  getUnique() {
    return this.getData().contentElementTypeKey;
  }
  getEntityType() {
    return this.#r;
  }
  getName() {
    return "block name content element type here...";
  }
  // TODO: [v15] ignoring unused name parameter to avoid breaking changes
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setName(t) {
    console.warn("You cannot set a name of a block type.");
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
   * @param {string} alias
   * @param {unknown} value - value can be a promise resolving into the actual value or the raw value it self.
   * @returns {Promise<void>}
   * @description Set the value of this property.
   */
  async setPropertyValue(t, e) {
    const r = this.#t.value;
    r && this.#t.update({ ...r, [t]: e });
  }
  async submit() {
    if (!this.#t.value)
      throw new Error("No data to submit.");
    if (await this.#s, !this.#e)
      throw new Error("Property context is not available.");
    this.#e.setValue(
      S(
        this.#e.getValue() ?? [],
        this.#t.getValue(),
        (t) => t?.contentElementTypeKey
      )
    ), this.setIsNew(!1);
  }
  destroy() {
    this.#t.destroy(), super.destroy();
  }
}
export {
  G as UmbBlockTypeWorkspaceContext,
  G as api
};
//# sourceMappingURL=block-type-workspace.context-CaBydCNz.js.map
