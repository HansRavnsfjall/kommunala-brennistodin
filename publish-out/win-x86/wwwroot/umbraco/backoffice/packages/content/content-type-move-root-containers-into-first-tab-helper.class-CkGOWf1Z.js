import { UmbModalToken as C } from "@umbraco-cms/backoffice/modal";
import { UmbContextToken as a } from "@umbraco-cms/backoffice/context-api";
import { UmbControllerBase as l } from "@umbraco-cms/backoffice/class-api";
import { UmbArrayState as o, UmbBooleanState as u } from "@umbraco-cms/backoffice/observable-api";
const y = new C("Umb.Modal.CompositionPicker", {
  modal: {
    type: "sidebar",
    size: "small"
  }
}), c = new a("UmbContentTypeDesignEditorContext"), O = new a(
  "UmbWorkspaceContext",
  void 0,
  (r) => r.IS_CONTENT_TYPE_WORKSPACE_CONTEXT
);
class g extends l {
  constructor(e) {
    super(e), this.#s = "Group", this.#l = [], this.#r = new o([], (t) => t.id), this.#d = new o([], (t) => t.id), this.#C = new o([], (t) => t.key), this.childContainers = this.#C.asObservable(), this.#o = [], this.#u = new u(!1), this.hasProperties = this.#u.asObservable(), this.#v = !1, this.#g = (t) => {
      let s = this.#_(t);
      s = s.filter((i, n, d) => n === d.findIndex((h) => h.name === i.name && h.type === i.type)), this.#d.setValue(s);
    }, this.#i = new Promise((t, s) => {
      this.#n = t, this.#a = s;
    }), this.#C.sortBy((t, s) => (t.sortOrder || 0) - (s.sortOrder || 0)), this.#d.sortBy((t, s) => (t.sortOrder || 0) - (s.sortOrder || 0));
  }
  #i;
  #n;
  #a;
  #t;
  #s;
  #e;
  #l;
  #r;
  get containers() {
    return this.#c(), this.#r.asObservable();
  }
  #d;
  get mergedContainers() {
    return this.#c(), this.#d.asObservable();
  }
  #C;
  #o;
  #u;
  #v;
  #c() {
    this.#v || (console.log(
      "Pst. we will be deprecating 'mergedContainers' and 'containers' in v.17.0, feel free to use them until v.18.0. But please use 'childContainers'"
    ), this.#v = !0, this.#f(), this.observe(this.containers, this.#g, null));
  }
  setStructureManager(e) {
    if (!(this.#e === e || !e)) {
      if (this.#e && !e)
        throw this.#a?.(), this.#n = void 0, this.#a = void 0, new Error(
          "Structure manager is already set, the helpers are not designed to be re-setup with new managers"
        );
      this.#e = e, this.#n?.(void 0), this.#n = void 0, this.#a = void 0, this.#y(), this.#f();
    }
  }
  getStructureManager() {
    return this.#e;
  }
  setIsRoot(e) {
    e === !0 && this.setContainerId(null);
  }
  getIsRoot() {
    return this.#t === null;
  }
  setContainerId(e) {
    this.#t !== e && (this.#t = e, this.#y(), this.#f());
  }
  getContainerId() {
    return this.#t;
  }
  setContainerChildType(e) {
    this.#s !== e && (this.#s = e, this.#y(), this.#f());
  }
  getContainerChildType() {
    return this.#s;
  }
  #y() {
    const e = this.#t !== void 0 && this.#s ? this.#e?.mergedContainersOfParentIdAndType(this.#t, this.#s) : void 0;
    if (this.observe(
      e,
      (t) => {
        this.#C.setValue(t ?? []);
      },
      "observeChildContainers"
    ), this.#t === null)
      this.removeUmbControllerByAlias("observeParentContainer"), this.observe(
        this.#e?.hasPropertyStructuresOfRoot(),
        (t) => {
          this.#u.setValue(t ?? !1);
        },
        "observeProperties"
      );
    else {
      const t = this.#t !== void 0 && this.#s ? this.#e?.mergedContainersOfId(this.#t) : void 0;
      this.observe(
        t,
        (s) => {
          this.observe(
            s ? this.#e?.hasPropertyStructuresOfGroupIds(s.ids ?? []) : void 0,
            (i) => {
              this.#u.setValue(i ?? !1);
            },
            "observeProperties"
          );
        },
        "observeParentContainer"
      );
    }
  }
  // LEGACY properties:
  #b;
  #m;
  #h;
  #p;
  // LEGACY method:
  #f() {
    this.#v && (!this.#e || this.#t === void 0 || (this.#t === null ? (this.#T(), this.removeUmbControllerByAlias("_observeContainers")) : this.observe(
      this.#e.containerById(this.#t),
      (e) => {
        e ? (this.#b = e.name ?? "", this.#m = e.type, e.parent ? this.observe(
          this.#e.containerById(e.parent.id),
          (t) => {
            t ? (this.#h = t.name ?? "", this.#p = t.type, this.#O()) : (this.removeUmbControllerByAlias("_observeContainers"), this.#h = void 0, this.#p = void 0);
          },
          "_observeMainParentContainer"
        ) : (this.removeUmbControllerByAlias("_observeMainParentContainer"), this.#h = null, this.#p = void 0, this.#O())) : (this.removeUmbControllerByAlias("_observeContainers"), this.#b = void 0, this.#m = void 0);
      },
      "_observeMainContainer"
    )));
  }
  // LEGACY method:
  #O() {
    this.#b === void 0 || !this.#m || this.#h === void 0 || this.observe(
      this.#e.containersByNameAndTypeAndParent(
        this.#b,
        this.#m,
        this.#h,
        this.#p
      ),
      (e) => {
        this.#r.setValue([]), this.#l.forEach((t) => t.destroy()), this.#l = [], e.forEach((t) => {
          this.#l.push(
            this.observe(
              this.#e.containersOfParentId(t.id, this.#s),
              (s) => {
                this.#o = this.#e.getOwnerContainers(this.#s, this.#t) ?? [], this.#r.filter(
                  (i) => i.parent?.id !== t.id || s.some((n) => n.id === i.id)
                ), this.#r.append(s);
              },
              "_observeGroupsOf_" + t.id
            )
          );
        });
      },
      "_observeContainers"
    );
  }
  // LEGACY method:
  #T() {
    !this.#e || !this.#s || this.#t === void 0 || this.observe(
      this.#e.rootContainers(this.#s),
      (e) => {
        this.#o = this.#e.getOwnerContainers(this.#s, this.#t) ?? [], this.#r.setValue(e);
      },
      "_observeRootContainers"
    );
  }
  /*
  	#observeHasPropertiesOf(groupId?: string | null) {
  		if (!this.#structure || groupId === undefined) return;
  
  		this.observe(
  			this.#structure.hasPropertyStructuresOf(groupId),
  			(hasProperties) => {
  				this.#hasProperties.appendOne({ id: groupId, has: hasProperties });
  			},
  			'_observePropertyStructureOfGroup' + groupId,
  		);
  	}
  		*/
  // LEGACY method:
  #_(e) {
    return this.#o.length > 0 ? e.filter(
      (t) => !this.#o.some(
        (s) => (
          // Then if this is not the owner container but matches one by name & type, then we do not want it.
          s.id !== t.id && s.name === t.name && s.type === t.type
        )
      )
    ) : e;
  }
  #g;
  /**
   * Returns true if the container is an owner container.
   * @param containerId
   */
  isOwnerChildContainer(e) {
    if (!(!this.#e || !e))
      return this.#e.isOwnerContainer(e);
  }
  getContentTypeOfContainer(e) {
    if (!(!this.#e || !e))
      return this.#e.getContentTypeOfContainer(e);
  }
  containersByNameAndType(e, t) {
    return this.#r.asObservablePart((s) => s.filter((i) => i.name === e && i.type === t));
  }
  /** Manipulate methods: */
  /*async insertContainer(container: UmbPropertyTypeContainerModel, sortOrder = 0) {
  		await this.#init;
  		if (!this.#structure) return false;
  
  		const newContainer = { ...container, sortOrder };
  
  		await this.#structure.insertContainer(null, newContainer);
  		return true;
  	}*/
  async addContainer(e, t) {
    this.#e && await this.#e.createContainer(null, e, this.#s, t);
  }
  async removeContainer(e) {
    return await this.#i, this.#e ? (await this.#e.removeContainer(null, e), !0) : !1;
  }
  async partialUpdateContainer(e, t) {
    if (await this.#i, !(!this.#e || !e || !t))
      return await this.#e.updateContainer(null, e, t);
  }
}
const v = Symbol("moveRootContainersHelper");
class T extends l {
  #i;
  constructor(e, t) {
    super(e, v), this.#i = t, this.#n();
  }
  async #n() {
    this.#i && (await this.observe(
      this.#i.ownerContainersOf("Tab", null),
      (e) => {
        if (e?.length === 1) {
          const t = e[0].id;
          this.#i?.getOwnerContainers("Group", null)?.forEach((i) => {
            this.#i?.updateContainer(null, i.id, { parent: { id: t } });
          }), this.destroy();
        }
      },
      "_observeMainContainer"
    ).asPromise(), this.destroy());
  }
  destroy() {
    super.destroy(), this.#i = void 0;
  }
}
export {
  c as U,
  g as a,
  O as b,
  T as c,
  y as d
};
//# sourceMappingURL=content-type-move-root-containers-into-first-tab-helper.class-CkGOWf1Z.js.map
