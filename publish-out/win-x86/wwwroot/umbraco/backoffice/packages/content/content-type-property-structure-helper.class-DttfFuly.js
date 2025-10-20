import { UmbContextToken as n } from "@umbraco-cms/backoffice/context-api";
import { UmbControllerBase as o } from "@umbraco-cms/backoffice/class-api";
import { UmbArrayState as a, mergeObservables as h } from "@umbraco-cms/backoffice/observable-api";
const m = new n("UmbPropertyTypeContext");
class c extends o {
  constructor(e) {
    super(e), this.#t = new a([], (t) => t.unique), this.propertyStructure = this.#t.asObservable(), this.propertyAliases = this.#t.asObservablePart((t) => t.map((r) => r.alias)), this.#r = new Promise((t) => {
      this.#s = t;
    }), this.#t.sortBy((t, r) => t.sortOrder - r.sortOrder);
  }
  #r;
  #s;
  #e;
  #i;
  #t;
  async contentTypes() {
    if (await this.#r, !!this.#e)
      return this.#e.contentTypes;
  }
  setStructureManager(e) {
    if (!(this.#e === e || !e)) {
      if (this.#e && !e)
        throw new Error(
          "Structure manager is already set, the helpers are not designed to be re-setup with new managers"
        );
      this.#e = e, this.#s?.(void 0), this.#s = void 0, this.#o();
    }
  }
  getStructureManager() {
    return this.#e;
  }
  setContainerId(e) {
    this.#i !== e && (this.#i = e, this.#o());
  }
  getContainerId() {
    return this.#i;
  }
  #n;
  #o() {
    !this.#e || this.#i === void 0 || (this.#i === null ? (this.observe(
      this.#e.propertyStructuresOf(null),
      (e) => {
        this.#t.setValue(e);
      },
      "observePropertyStructures"
    ), this.removeUmbControllerByAlias("_observeContainers")) : this.observe(
      this.#e.containerById(this.#i),
      (e) => {
        e ? (this._containerName = e.name ?? "", this._containerType = e.type, e.parent ? this.observe(
          this.#e.containerById(e.parent.id),
          (t) => {
            t ? (this._parentName = t.name ?? "", this._parentType = t.type, this.#a()) : (this.removeUmbControllerByAlias("_observeContainers"), this._parentName = void 0, this._parentType = void 0);
          },
          "_observeMainParentContainer"
        ) : (this.removeUmbControllerByAlias("_observeMainParentContainer"), this._parentName = null, this._parentType = void 0, this.#a())) : (this.removeUmbControllerByAlias("_observeContainers"), this._containerName = void 0, this._containerType = void 0, this.#t.setValue([]));
      },
      "_observeMainContainer"
    ));
  }
  #a() {
    this._containerName === void 0 || !this._containerType || this._parentName === void 0 || this.observe(
      this.#e.containersByNameAndTypeAndParent(
        this._containerName,
        this._containerType,
        this._parentName,
        this._parentType
      ),
      (e) => {
        if (this.#n) {
          const t = this.#n.filter((i) => !e.some((s) => s.id === i.id)), r = this.#t.getValue().filter((i) => !t.some((s) => s.id === i.container?.id));
          this.#t.setValue(r);
        }
        this.observe(
          h(
            e.map((t) => this.#e.propertyStructuresOf(t.id)),
            (t) => t.flatMap((r) => r)
          ),
          (t) => {
            this.#t.setValue(t);
          },
          "observePropertyStructures"
        ), this.#n = e;
      },
      "_observeContainers"
    );
  }
  async isOwnerProperty(e) {
    if (await this.#r, !!this.#e)
      return this.#e.ownerContentTypeObservablePart(
        (t) => t?.properties.some((r) => r.unique === e)
      );
  }
  async contentTypeOfProperty(e) {
    if (await this.#r, !!this.#e)
      return this.#e.contentTypeOfProperty(e);
  }
  // TODO: consider moving this to another class, to separate 'viewer' from 'manipulator':
  /** Manipulate methods: */
  async insertProperty(e, t) {
    if (await this.#r, !this.#e) return !1;
    const r = { ...e };
    return t && (r.sortOrder = t), await this.#e.insertProperty(null, r), !0;
  }
  async removeProperty(e) {
    return await this.#r, this.#e ? (await this.#e.removeProperty(null, e), !0) : !1;
  }
  // Takes optional arguments as this is easier for the implementation in the view:
  async partialUpdateProperty(e, t) {
    if (await this.#r, !(!this.#e || !e || !t))
      return await this.#e.updateProperty(null, e, t);
  }
}
export {
  m as U,
  c as a
};
//# sourceMappingURL=content-type-property-structure-helper.class-DttfFuly.js.map
