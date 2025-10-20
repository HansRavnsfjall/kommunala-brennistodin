import { UmbModalToken as C } from "@umbraco-cms/backoffice/modal";
import { UmbContextToken as a } from "@umbraco-cms/backoffice/context-api";
import { UmbControllerBase as l } from "@umbraco-cms/backoffice/class-api";
import { UmbArrayState as o } from "@umbraco-cms/backoffice/observable-api";
const f = new C("Umb.Modal.CompositionPicker", {
  modal: {
    type: "sidebar",
    size: "small"
  }
}), y = new a("UmbContentTypeDesignEditorContext"), T = new a(
  "UmbWorkspaceContext",
  void 0,
  (r) => r.IS_CONTENT_TYPE_WORKSPACE_CONTEXT
);
class O extends l {
  constructor(t) {
    super(t), this.#i = "Group", this.#l = [], this.#r = new o([], (e) => e.id), this.containers = this.#r.asObservable(), this.#d = new o([], (e) => e.id), this.mergedContainers = this.#d.asObservable(), this.#n = [], this.#h = new o([], (e) => e.id), this.hasProperties = this.#h.asObservablePart((e) => e.some((s) => s.has)), this.#f = (e) => {
      let s = this.#T(e);
      s = s.filter((i, n, d) => n === d.findIndex((h) => h.name === i.name && h.type === i.type)), this.#d.setValue(s);
    }, this.#e = new Promise((e) => {
      this.#o = e;
    }), this.#d.sortBy((e, s) => (e.sortOrder || 0) - (s.sortOrder || 0)), this.observe(this.containers, this.#f, null);
  }
  #e;
  #o;
  #s;
  #i;
  #t;
  #l;
  #r;
  #d;
  #n;
  #h;
  setStructureManager(t) {
    if (!(this.#t === t || !t)) {
      if (this.#t && !t)
        throw new Error(
          "Structure manager is already set, the helpers are not designed to be re-setup with new managers"
        );
      this.#t = t, this.#o?.(void 0), this.#o = void 0, this.#p();
    }
  }
  getStructureManager() {
    return this.#t;
  }
  setIsRoot(t) {
    t === !0 && this.setContainerId(null);
  }
  getIsRoot() {
    return this.#s === null;
  }
  setContainerId(t) {
    this.#s !== t && (this.#s = t, this.#p());
  }
  getContainerId() {
    return this.#s;
  }
  setContainerChildType(t) {
    this.#i !== t && (this.#i = t, this.#p());
  }
  getContainerChildType() {
    return this.#i;
  }
  #C;
  #u;
  #a;
  #m;
  #p() {
    !this.#t || this.#s === void 0 || (this.#s === null ? (this.#v(null), this.#y(), this.removeUmbControllerByAlias("_observeContainers")) : this.observe(
      this.#t.containerById(this.#s),
      (t) => {
        t ? (this.#C = t.name ?? "", this.#u = t.type, t.parent ? this.observe(
          this.#t.containerById(t.parent.id),
          (e) => {
            e ? (this.#a = e.name ?? "", this.#m = e.type, this.#b()) : (this.removeUmbControllerByAlias("_observeContainers"), this.#a = void 0, this.#m = void 0);
          },
          "_observeMainParentContainer"
        ) : (this.removeUmbControllerByAlias("_observeMainParentContainer"), this.#a = null, this.#m = void 0, this.#b())) : (this.removeUmbControllerByAlias("_observeContainers"), this.#C = void 0, this.#u = void 0, this.#h.setValue([]));
      },
      "_observeMainContainer"
    ));
  }
  #b() {
    this.#C === void 0 || !this.#u || this.#a === void 0 || this.observe(
      this.#t.containersByNameAndTypeAndParent(
        this.#C,
        this.#u,
        this.#a,
        this.#m
      ),
      (t) => {
        this.#h.setValue([]), this.#r.setValue([]), this.#l.forEach((e) => e.destroy()), this.#l = [], t.forEach((e) => {
          this.#v(e.id), this.#l.push(
            this.observe(
              this.#t.containersOfParentId(e.id, this.#i),
              (s) => {
                this.#n = this.#t.getOwnerContainers(this.#i, this.#s) ?? [], this.#r.filter(
                  (i) => i.parent?.id !== e.id || s.some((n) => n.id === i.id)
                ), this.#r.append(s);
              },
              "_observeGroupsOf_" + e.id
            )
          );
        });
      },
      "_observeContainers"
    );
  }
  #y() {
    !this.#t || !this.#i || this.#s === void 0 || this.observe(
      this.#t.rootContainers(this.#i),
      (t) => {
        this.#n = this.#t.getOwnerContainers(this.#i, this.#s) ?? [], this.#r.setValue(t);
      },
      "_observeRootContainers"
    );
  }
  #v(t) {
    !this.#t || t === void 0 || this.observe(
      this.#t.hasPropertyStructuresOf(t),
      (e) => {
        this.#h.appendOne({ id: t, has: e });
      },
      "_observePropertyStructureOfGroup" + t
    );
  }
  #T(t) {
    return this.#n.length > 0 ? t.filter(
      (e) => !this.#n.some(
        (s) => (
          // Then if this is not the owner container but matches one by name & type, then we do not want it.
          s.id !== e.id && s.name === e.name && s.type === e.type
        )
      )
    ) : t;
  }
  #f;
  /**
   * Returns true if the container is an owner container.
   * @param containerId
   */
  isOwnerChildContainer(t) {
    if (!(!this.#t || !t))
      return this.#n.some((e) => e.id === t);
  }
  getContentTypeOfContainer(t) {
    if (!(!this.#t || !t))
      return this.#t.getContentTypeOfContainer(t);
  }
  containersByNameAndType(t, e) {
    return this.#r.asObservablePart((s) => s.filter((i) => i.name === t && i.type === e));
  }
  /** Manipulate methods: */
  /*async insertContainer(container: UmbPropertyTypeContainerModel, sortOrder = 0) {
  		await this.#init;
  		if (!this.#structure) return false;
  
  		const newContainer = { ...container, sortOrder };
  
  		await this.#structure.insertContainer(null, newContainer);
  		return true;
  	}*/
  async addContainer(t, e) {
    this.#t && await this.#t.createContainer(null, t, this.#i, e);
  }
  async removeContainer(t) {
    return await this.#e, this.#t ? (await this.#t.removeContainer(null, t), !0) : !1;
  }
  async partialUpdateContainer(t, e) {
    if (await this.#e, !(!this.#t || !t || !e))
      return await this.#t.updateContainer(null, t, e);
  }
}
const u = Symbol("moveRootContainersHelper");
class c extends l {
  #e;
  constructor(t, e) {
    super(t, u), this.#e = e, this.#o();
  }
  async #o() {
    this.#e && (await this.observe(
      this.#e.ownerContainersOf("Tab", null),
      (t) => {
        if (t?.length === 1) {
          const e = t[0].id;
          this.#e?.getOwnerContainers("Group", null)?.forEach((i) => {
            this.#e?.updateContainer(null, i.id, { parent: { id: e } });
          }), this.destroy();
        }
      },
      "_observeMainContainer"
    ).asPromise(), this.destroy());
  }
  destroy() {
    super.destroy(), this.#e = void 0;
  }
}
export {
  y as U,
  O as a,
  T as b,
  c,
  f as d
};
//# sourceMappingURL=content-type-move-root-containers-into-first-tab-helper.class-BMcf-7X5.js.map
