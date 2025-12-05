import { UmbContextToken as s } from "@umbraco-cms/backoffice/context-api";
import { UmbControllerBase as i } from "@umbraco-cms/backoffice/class-api";
import { UmbArrayState as n } from "@umbraco-cms/backoffice/observable-api";
const p = new s("UmbPropertyTypeContext");
class y extends i {
  constructor(t) {
    super(t), this.#s = new n([], (r) => r.unique), this.propertyStructure = this.#s.asObservable(), this.propertyAliases = this.#s.asObservablePart((r) => r.map((e) => e.alias)), this.#r = new Promise((r) => {
      this.#i = r;
    }), this.#s.sortBy((r, e) => r.sortOrder - e.sortOrder);
  }
  #r;
  #i;
  #t;
  #e;
  #s;
  async contentTypes() {
    if (await this.#r, !!this.#t)
      return this.#t.contentTypes;
  }
  setStructureManager(t) {
    if (!(this.#t === t || !t)) {
      if (this.#t && !t)
        throw new Error(
          "Structure manager is already set, the helpers are not designed to be re-setup with new managers"
        );
      this.#t = t, this.#i?.(void 0), this.#i = void 0, this.#n();
    }
  }
  getStructureManager() {
    return this.#t;
  }
  setContainerId(t) {
    this.#e !== t && (this.#e = t, this.#n());
  }
  getContainerId() {
    return this.#e;
  }
  #n() {
    this.observe(
      this.#e ? this.#t?.mergedContainersOfId(this.#e) : void 0,
      (t) => {
        this.observe(
          t ? this.#t?.propertyStructuresOfGroupIds(t.ids ?? []) : void 0,
          (r) => {
            this.#s.setValue(r ?? []);
          },
          "observeProperties"
        );
      },
      "observeContainer"
    );
  }
  async isOwnerProperty(t) {
    if (await this.#r, !!this.#t)
      return this.#t.ownerContentTypeObservablePart(
        (r) => r?.properties.some((e) => e.unique === t)
      );
  }
  async contentTypeOfProperty(t) {
    if (await this.#r, !!this.#t)
      return this.#t.contentTypeOfProperty(t);
  }
  // TODO: consider moving this to another class, to separate 'viewer' from 'manipulator':
  /** Manipulate methods: */
  async insertProperty(t, r) {
    if (await this.#r, !this.#t) return !1;
    const e = { ...t };
    return r && (e.sortOrder = r), await this.#t.insertProperty(null, e), !0;
  }
  async removeProperty(t) {
    return await this.#r, this.#t ? (await this.#t.removeProperty(null, t), !0) : !1;
  }
  // Takes optional arguments as this is easier for the implementation in the view:
  async partialUpdateProperty(t, r) {
    if (await this.#r, !(!this.#t || !t || !r))
      return await this.#t.updateProperty(null, t, r);
  }
}
export {
  p as U,
  y as a
};
//# sourceMappingURL=content-type-property-structure-helper.class-jQi1Hj18.js.map
