import { U as N, a as I, b as g } from "../menu-item-layout.element-j-U3XX9c.js";
import { UmbContextToken as m } from "@umbraco-cms/backoffice/context-api";
import { createExtensionApiByAlias as T } from "@umbraco-cms/backoffice/extension-registry";
import { UmbContextBase as l } from "@umbraco-cms/backoffice/class-api";
import { UMB_SUBMITTABLE_TREE_ENTITY_WORKSPACE_CONTEXT as U } from "@umbraco-cms/backoffice/workspace";
import { UmbArrayState as b, UmbObjectState as q } from "@umbraco-cms/backoffice/observable-api";
import { UmbParentEntityContext as E, UmbAncestorsEntityContext as w } from "@umbraco-cms/backoffice/entity";
const C = new m(
  "UmbWorkspaceContext",
  "UmbMenuStructure"
);
class d extends l {
  constructor(n, e) {
    super(n, C), this.#e = new b([], (t) => t.unique), this.structure = this.#e.asObservable(), this.#n = new q(void 0), this.parent = this.#n.asObservable(), this.#i = new E(this), this.#r = new w(this), this.provideContext("UmbMenuStructureWorkspaceContext", this), this.#s = e, this.consumeContext(U, (t) => {
      this.#t = t, this.observe(this.#t?.unique, (s) => {
        s && this.#a();
      });
    });
  }
  #t;
  #s;
  #e;
  #n;
  #i;
  #r;
  async #a() {
    let n = [];
    const e = await T(
      this,
      this.#s.treeRepositoryAlias
    ), { data: t } = await e.requestTreeRoot();
    t && (n = [
      {
        unique: t.unique,
        entityType: t.entityType,
        name: t.name,
        isFolder: t.isFolder
      }
    ]);
    const s = this.#t?.getIsNew(), u = s ? this.#t?._internal_createUnderParentEntityType : this.#t?.entityType, o = await this.observe(u, () => {
    })?.asPromise();
    if (!o) throw new Error("Entity type is not available");
    if (o !== t?.entityType) {
      const c = s ? this.#t?._internal_createUnderParentEntityUnique : this.#t?.unique, r = await this.observe(c, () => {
      })?.asPromise();
      if (!r) throw new Error("Unique is not available");
      const { data: a } = await e.requestTreeItemAncestors({ treeItem: { unique: r, entityType: o } });
      if (a) {
        const p = a.map((i) => ({
          unique: i.unique,
          entityType: i.entityType,
          name: i.name,
          isFolder: i.isFolder
        }));
        n.push(...p), this.#e.setValue(n), this.#o(n), this.#u(a);
      }
    }
  }
  #o(n) {
    const e = n.filter((s) => s.unique !== this.#t?.getUnique()).pop();
    this.#n.setValue(e);
    const t = e ? {
      unique: e.unique,
      entityType: e.entityType
    } : void 0;
    this.#i.setParent(t);
  }
  /* Notice: ancestors are based on the server "data" ancestors and are not based on the full Menu (UI) structure.
  	This will mean that any item placed in the data root will not have any ancestors. But will have a parent based on the UI structure.
  */
  #u(n) {
    const e = n.map((t) => ({
      unique: t.unique,
      entityType: t.entityType
    })).filter((t) => t.unique !== this.#t?.getUnique());
    this.#r.setAncestors(e);
  }
}
const _ = new m(
  "UmbWorkspaceContext",
  "UmbMenuStructure",
  (h) => "IS_MENU_VARIANT_STRUCTURE_WORKSPACE_CONTEXT" in h
);
class O extends l {
  constructor(n, e) {
    super(n, _), this.#e = new b([], (t) => t.unique), this.structure = this.#e.asObservable(), this.#n = new q(void 0), this.parent = this.#n.asObservable(), this.#i = new E(this), this.#r = new w(this), this.IS_MENU_VARIANT_STRUCTURE_WORKSPACE_CONTEXT = !0, this.provideContext("UmbMenuStructureWorkspaceContext", this), this.#s = e, this.consumeContext(U, (t) => {
      this.#t = t, this.observe(
        this.#t?.unique,
        (s) => {
          s && this.#a();
        },
        "observeUnique"
      );
    });
  }
  //
  #t;
  #s;
  #e;
  #n;
  #i;
  #r;
  async #a() {
    const n = this.#t?.getIsNew(), e = n ? this.#t?._internal_createUnderParentEntityUnique : this.#t?.unique, t = n ? this.#t?._internal_createUnderParentEntityType : this.#t?.entityType;
    let s = [];
    const u = await this.observe(e, () => {
    })?.asPromise();
    if (u === void 0) throw new Error("Unique is not available");
    const o = await this.observe(t, () => {
    })?.asPromise();
    if (!o) throw new Error("Entity type is not available");
    const c = await T(
      this,
      this.#s.treeRepositoryAlias
    ), { data: r } = await c.requestTreeRoot();
    r && (s = [
      {
        unique: r.unique,
        entityType: r.entityType,
        variants: [{ name: r.name, culture: null, segment: null }]
      }
    ]);
    const { data: a } = await c.requestTreeItemAncestors({ treeItem: { unique: u, entityType: o } });
    if (a) {
      const p = a.map((i) => ({
        unique: i.unique,
        entityType: i.entityType,
        variants: i.variants.map((y) => ({
          name: y.name,
          culture: y.culture,
          segment: y.segment
        }))
      }));
      s.push(...p), this.#e.setValue(s), this.#o(s), this.#u(a);
    }
  }
  #o(n) {
    const e = n.filter((s) => s.unique !== this.#t?.getUnique()).pop();
    this.#n.setValue(e);
    const t = e ? {
      unique: e.unique,
      entityType: e.entityType
    } : void 0;
    this.#i.setParent(t);
  }
  /* Notice: ancestors are based on the server "data" ancestors and are not based on the full Menu (UI) structure.
  	This will mean that any item placed in the data root will not have any ancestors. But will have a parent based on the UI structure.
  */
  #u(n) {
    const e = n.map((t) => ({
      unique: t.unique,
      entityType: t.entityType
    })).filter((t) => t.unique !== this.#t?.getUnique());
    this.#r.setAncestors(e);
  }
}
export {
  C as UMB_MENU_STRUCTURE_WORKSPACE_CONTEXT,
  _ as UMB_MENU_VARIANT_STRUCTURE_WORKSPACE_CONTEXT,
  N as UmbMenuElement,
  I as UmbMenuItemDefaultElement,
  g as UmbMenuItemLayoutElement,
  d as UmbMenuTreeStructureWorkspaceContextBase,
  O as UmbMenuVariantTreeStructureWorkspaceContextBase
};
//# sourceMappingURL=index.js.map
