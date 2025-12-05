import { a as V, c as K, U as L, b as F, d as j } from "../menu-item-layout.element-DPT7Hbjy.js";
import { UmbActionMenuItemApi as Y, UmbMenuItemActionApiBase as z } from "../action-menu-item.api-DxPTl7SU.js";
import { UmbContextToken as T } from "@umbraco-cms/backoffice/context-api";
import "../section-sidebar-menu.element-BXQpqNZq.js";
import { U as J } from "../section-sidebar-menu.global-context.token-DWVyWMEs.js";
import { U as l } from "../section-sidebar-menu.section-context.token-BQxJAXea.js";
import { createExtensionApiByAlias as E } from "@umbraco-cms/backoffice/extension-registry";
import { UmbContextBase as U } from "@umbraco-cms/backoffice/class-api";
import { UMB_SUBMITTABLE_TREE_ENTITY_WORKSPACE_CONTEXT as b } from "@umbraco-cms/backoffice/workspace";
import { UmbArrayState as d, UmbObjectState as C } from "@umbraco-cms/backoffice/observable-api";
import { UmbParentEntityContext as q, UmbAncestorsEntityContext as _ } from "@umbraco-cms/backoffice/entity";
import { linkEntityExpansionEntries as x } from "@umbraco-cms/backoffice/utils";
import { UMB_MODAL_CONTEXT as M } from "@umbraco-cms/backoffice/modal";
const f = new T(
  "UmbWorkspaceContext",
  "UmbMenuStructure"
);
class g extends U {
  constructor(i, e) {
    super(i, f), this.#e = new d([], (t) => t.unique), this.structure = this.#e.asObservable(), this.#s = new C(void 0), this.parent = this.#s.asObservable(), this.#i = new q(this), this.#n = new _(this), this.#r = !1, this.provideContext("UmbMenuStructureWorkspaceContext", this), this.#o = e, this.consumeContext(M, (t) => {
      this.#r = t !== void 0;
    }), this.consumeContext(l, (t) => {
      this.#a = t;
    }), this.consumeContext(b, (t) => {
      this.#t = t, this.observe(this.#t?.unique, (s) => {
        s && this.#u();
      }), this.observe(this.#t?.isNew, (s) => {
        s !== void 0 && this.#u();
      });
    });
  }
  #t;
  #o;
  #e;
  #s;
  #i;
  #n;
  #a;
  #r;
  async #u() {
    const i = this.#t?.getIsNew(), e = i ? this.#t?._internal_createUnderParentEntityUnique : this.#t?.unique, t = i ? this.#t?._internal_createUnderParentEntityType : this.#t?.entityType;
    let s = [];
    const o = await this.observe(e, () => {
    })?.asPromise();
    if (o === void 0) throw new Error("Unique is not available");
    const n = await this.observe(t, () => {
    })?.asPromise();
    if (!n) throw new Error("Entity type is not available");
    const h = await E(
      this,
      this.#o.treeRepositoryAlias
    ), { data: r } = await h.requestTreeRoot();
    if (r && (s = [
      {
        unique: r.unique,
        entityType: r.entityType,
        name: r.name,
        isFolder: r.isFolder
      }
    ]), !(n === r?.entityType)) {
      const { data: u } = await h.requestTreeItemAncestors({ treeItem: { unique: o, entityType: n } });
      if (u) {
        const c = u.map((a) => ({
          unique: a.unique,
          entityType: a.entityType,
          name: a.name,
          isFolder: a.isFolder
        }));
        this.#c(u), s.push(...c);
      }
    }
    this.#e.setValue(s), this.#h(s);
    const p = this.manifest?.meta?.menuItemAlias;
    p && !this.#r && this.#m(s, p);
  }
  #h(i) {
    const e = i.filter((s) => s.unique !== this.#t?.getUnique()).pop();
    this.#s.setValue(e);
    const t = e ? {
      unique: e.unique,
      entityType: e.entityType
    } : void 0;
    this.#i.setParent(t);
  }
  /* Notice: ancestors are based on the server "data" ancestors and are not based on the full Menu (UI) structure.
  	This will mean that any item placed in the data root will not have any ancestors. But will have a parent based on the UI structure.
  */
  #c(i) {
    const e = i.map((t) => ({
      unique: t.unique,
      entityType: t.entityType
    })).filter((t) => t.unique !== this.#t?.getUnique());
    this.#n.setAncestors(e);
  }
  #m(i, e) {
    const o = x(i).filter((n) => n.unique !== this.#t?.getUnique()).map((n) => ({
      ...n,
      menuItemAlias: e
    }));
    this.#a?.expansion.expandItems(o);
  }
  destroy() {
    super.destroy(), this.#e.destroy(), this.#s.destroy(), this.#i.destroy(), this.#n.destroy();
  }
}
const A = new T(
  "UmbWorkspaceContext",
  "UmbMenuStructure",
  (y) => "IS_MENU_VARIANT_STRUCTURE_WORKSPACE_CONTEXT" in y
);
class W extends U {
  constructor(i, e) {
    super(i, A), this.#e = new d([], (t) => t.unique), this.structure = this.#e.asObservable(), this.#s = new C(void 0), this.parent = this.#s.asObservable(), this.#i = new q(this), this.#n = new _(this), this.#r = !1, this.IS_MENU_VARIANT_STRUCTURE_WORKSPACE_CONTEXT = !0, this.provideContext("UmbMenuStructureWorkspaceContext", this), this.#o = e, this.consumeContext(M, (t) => {
      this.#r = t !== void 0;
    }), this.consumeContext(l, (t) => {
      this.#a = t;
    }), this.consumeContext(b, (t) => {
      this.#t = t, this.observe(
        this.#t?.unique,
        (s) => {
          s && this.#u();
        },
        "observeUnique"
      );
    });
  }
  #t;
  #o;
  #e;
  #s;
  #i;
  #n;
  #a;
  #r;
  async #u() {
    const i = this.#t?.getIsNew(), e = i ? this.#t?._internal_createUnderParentEntityUnique : this.#t?.unique, t = i ? this.#t?._internal_createUnderParentEntityType : this.#t?.entityType;
    let s = [];
    const o = await this.observe(e, () => {
    })?.asPromise();
    if (o === void 0) throw new Error("Unique is not available");
    const n = await this.observe(t, () => {
    })?.asPromise();
    if (!n) throw new Error("Entity type is not available");
    const h = await E(
      this,
      this.#o.treeRepositoryAlias
    ), { data: r } = await h.requestTreeRoot();
    r && (s = [
      {
        unique: r.unique,
        entityType: r.entityType,
        variants: [{ name: r.name, culture: null, segment: null }]
      }
    ]);
    const { data: m } = await h.requestTreeItemAncestors({ treeItem: { unique: o, entityType: n } });
    if (m) {
      const p = m.map((c) => ({
        unique: c.unique,
        entityType: c.entityType,
        variants: c.variants.map((a) => ({
          name: a.name,
          culture: a.culture,
          segment: a.segment
        }))
      }));
      s.push(...p), this.#e.setValue(s), this.#h(s), this.#c(m);
      const u = this.manifest?.meta?.menuItemAlias;
      u && !this.#r && this.#m(s, u);
    }
  }
  #h(i) {
    const e = i.filter((s) => s.unique !== this.#t?.getUnique()).pop();
    this.#s.setValue(e);
    const t = e ? {
      unique: e.unique,
      entityType: e.entityType
    } : void 0;
    this.#i.setParent(t);
  }
  /* Notice: ancestors are based on the server "data" ancestors and are not based on the full Menu (UI) structure.
  	This will mean that any item placed in the data root will not have any ancestors. But will have a parent based on the UI structure.
  */
  #c(i) {
    const e = i.map((t) => ({
      unique: t.unique,
      entityType: t.entityType
    })).filter((t) => t.unique !== this.#t?.getUnique());
    this.#n.setAncestors(e);
  }
  #m(i, e) {
    const o = x(i).filter((n) => n.unique !== this.#t?.getUnique()).map((n) => ({
      ...n,
      menuItemAlias: e
    }));
    this.#a?.expansion.expandItems(o);
  }
  destroy() {
    super.destroy(), this.#e.destroy(), this.#s.destroy(), this.#i.destroy(), this.#n.destroy();
  }
}
export {
  V as UMB_MENU_CONTEXT,
  K as UMB_MENU_ITEM_CONTEXT,
  f as UMB_MENU_STRUCTURE_WORKSPACE_CONTEXT,
  A as UMB_MENU_VARIANT_STRUCTURE_WORKSPACE_CONTEXT,
  J as UMB_SECTION_SIDEBAR_MENU_GLOBAL_CONTEXT,
  l as UMB_SECTION_SIDEBAR_MENU_SECTION_CONTEXT,
  Y as UmbActionMenuItemApi,
  L as UmbMenuElement,
  z as UmbMenuItemActionApiBase,
  F as UmbMenuItemDefaultElement,
  j as UmbMenuItemLayoutElement,
  g as UmbMenuTreeStructureWorkspaceContextBase,
  W as UmbMenuVariantTreeStructureWorkspaceContextBase
};
//# sourceMappingURL=index.js.map
