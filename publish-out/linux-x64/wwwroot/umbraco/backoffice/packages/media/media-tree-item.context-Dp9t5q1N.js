import { UmbDefaultTreeItemContext as s } from "@umbraco-cms/backoffice/tree";
import { UmbIsTrashedEntityContext as r } from "@umbraco-cms/backoffice/recycle-bin";
class m extends s {
  #e = new r(this);
  constructor(e) {
    super(e), this.observe(this.treeItem, (t) => {
      this.#e.setIsTrashed(t?.isTrashed || !1);
    });
  }
}
export {
  m as UmbMediaTreeItemContext,
  m as api
};
//# sourceMappingURL=media-tree-item.context-Dp9t5q1N.js.map
