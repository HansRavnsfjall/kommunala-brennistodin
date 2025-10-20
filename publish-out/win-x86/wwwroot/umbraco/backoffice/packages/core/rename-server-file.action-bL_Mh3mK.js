import { U as a } from "./manifests-FzOUH899.js";
import { UmbModalToken as o, umbOpenModal as u } from "@umbraco-cms/backoffice/modal";
import { UmbEntityActionEvent as m, UmbEntityActionBase as E, UmbRequestReloadStructureForEntityEvent as c } from "@umbraco-cms/backoffice/entity-action";
import { UMB_ACTION_EVENT_CONTEXT as y } from "@umbraco-cms/backoffice/action";
const l = new o(
  a,
  {
    modal: {
      type: "sidebar",
      size: "small"
    }
  }
);
class n extends m {
  static {
    this.TYPE = "server-file-renamed";
  }
  constructor(e) {
    super(n.TYPE, e);
  }
  getNewUnique() {
    return this._args.newUnique;
  }
  getNewName() {
    return this._args.newName;
  }
}
class i extends E {
  async execute() {
    if (!this.args.unique) throw new Error("Unique is required to rename an entity");
    const e = await u(this, l, {
      data: {
        unique: this.args.unique,
        renameRepositoryAlias: this.args.meta.renameRepositoryAlias,
        itemRepositoryAlias: this.args.meta.itemRepositoryAlias
      }
    }), t = await this.getContext(y);
    if (!t)
      throw new Error("Event context not found.");
    const s = new c({
      unique: this.args.unique,
      entityType: this.args.entityType
    });
    t.dispatchEvent(s);
    const r = new n({
      unique: this.args.unique,
      entityType: this.args.entityType,
      newName: e.name,
      newUnique: e.unique
    });
    t.dispatchEvent(r);
  }
}
const w = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  UmbRenameEntityAction: i,
  default: i
}, Symbol.toStringTag, { value: "Module" }));
export {
  n as U,
  i as a,
  l as b,
  w as r
};
//# sourceMappingURL=rename-server-file.action-bL_Mh3mK.js.map
