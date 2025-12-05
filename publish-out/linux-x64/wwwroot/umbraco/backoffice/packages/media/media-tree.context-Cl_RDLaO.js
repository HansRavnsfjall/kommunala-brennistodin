import { UMB_PROPERTY_TYPE_BASED_PROPERTY_CONTEXT as s } from "@umbraco-cms/backoffice/content";
import { UmbDefaultTreeContext as r } from "@umbraco-cms/backoffice/tree";
class p extends r {
  constructor(e) {
    super(e), this.consumeContext(s, (t) => {
      this.observe(t?.dataType, (o) => {
        this.updateAdditionalRequestArgs({ dataType: o });
      });
    });
  }
}
export {
  p as UmbMediaTreeContext,
  p as api
};
//# sourceMappingURL=media-tree.context-Cl_RDLaO.js.map
