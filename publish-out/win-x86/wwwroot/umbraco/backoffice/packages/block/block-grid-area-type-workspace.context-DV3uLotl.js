import { UMB_PROPERTY_CONTEXT as i } from "@umbraco-cms/backoffice/property";
import { UmbSubmittableWorkspaceContextBase as u, umbObjectToPropertyValueArray as o, UmbInvariantWorkspacePropertyDatasetContext as l } from "@umbraco-cms/backoffice/workspace";
import { UmbObjectState as h, UmbArrayState as p, appendToFrozenArray as m } from "@umbraco-cms/backoffice/observable-api";
import { UmbContextToken as c } from "@umbraco-cms/backoffice/context-api";
import { UmbId as y } from "@umbraco-cms/backoffice/id";
import { firstValueFrom as d } from "@umbraco-cms/backoffice/external/rxjs";
class P extends u {
  constructor(t, a) {
    super(t, a.manifest.alias), this.IS_BLOCK_GRID_AREA_TYPE_WORKSPACE_CONTEXT = !0, this.#t = new h(void 0), this.data = this.#t.asObservable(), this.values = this.#t.asObservablePart((e) => o(e)), this.name = this.#t.asObservablePart((e) => e?.alias), this.unique = this.#t.asObservablePart((e) => e?.key), this.#a = new p([], (e) => e.alias), this.properties = this.#a.asObservable(), this.#e = a.manifest.meta?.entityType;
  }
  #e;
  #t;
  async getValues() {
    return o(await d(this.data));
  }
  #a;
  set manifest(t) {
    this.routes.setRoutes([
      {
        path: "edit/:id",
        component: () => import("./block-grid-area-type-workspace-editor.element-B0FD557h.js"),
        setup: (a, e) => {
          const s = e.match.params.id;
          this.load(s);
        }
      },
      {
        path: "create",
        component: () => import("./block-grid-area-type-workspace-editor.element-B0FD557h.js"),
        setup: () => {
          this.create();
        }
      }
    ]);
  }
  resetState() {
    super.resetState(), this.#t.setValue(void 0);
  }
  createPropertyDatasetContext(t) {
    return new l(t, this);
  }
  async load(t) {
    this.resetState(), this.consumeContext(i, (a) => {
      this.observe(
        a?.value,
        (e) => {
          if (e) {
            const s = e.find((n) => n.key === t);
            if (s) {
              this.#t.setValue(s);
              return;
            }
          }
          this.#t.setValue(void 0);
        },
        "observePropertyValue"
      );
    });
  }
  async create() {
    this.resetState();
    let t = {
      key: y.new(),
      alias: "",
      columnSpan: 12,
      rowSpan: 1,
      minAllowed: 0,
      maxAllowed: void 0,
      specifiedAllowance: []
    };
    this.modalContext && (t = { ...t, ...this.modalContext.data.preset }), this.setIsNew(!0), this.#t.setValue(t);
  }
  getData() {
    return this.#t.getValue();
  }
  getUnique() {
    return this.getData().key;
  }
  getEntityType() {
    return this.#e;
  }
  getName() {
    return this.#t.getValue()?.alias;
  }
  // TODO: [v15] ignoring unused name parameter to avoid breaking changes
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setName(t) {
    throw new Error("You cannot set a name of a area-type.");
  }
  /**
   * @function propertyValueByAlias
   * @param {string} propertyAlias
   * @returns {Promise<Observable<ReturnType | undefined> | undefined>}
   * @description Get an Observable for the value of this property.
   */
  async propertyValueByAlias(t) {
    return this.#t.asObservablePart((a) => a?.[t]);
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
  async setPropertyValue(t, a) {
    const e = this.#t.value;
    e && this.#t.update({ ...e, [t]: a });
  }
  async submit() {
    if (!this.#t.value)
      throw new Error("No data to submit.");
    const t = await this.getContext(i);
    if (!t)
      throw new Error("Property context not found.");
    t.setValue(m(t.getValue() ?? [], this.#t.getValue(), (a) => a?.key)), this.setIsNew(!1);
  }
  destroy() {
    this.#t.destroy(), super.destroy();
  }
}
const w = new c(
  "UmbWorkspaceContext",
  void 0,
  (r) => r.IS_BLOCK_GRID_AREA_TYPE_WORKSPACE_CONTEXT
);
export {
  w as UMB_BLOCK_GRID_AREA_TYPE_WORKSPACE_CONTEXT,
  P as UmbBlockGridAreaTypeWorkspaceContext,
  P as default
};
//# sourceMappingURL=block-grid-area-type-workspace.context-DV3uLotl.js.map
