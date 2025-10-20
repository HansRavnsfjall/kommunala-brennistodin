import { UMB_PROPERTY_TYPE_BASED_PROPERTY_CONTEXT as s } from "@umbraco-cms/backoffice/content";
import { UmbDefaultTreeContext as r } from "@umbraco-cms/backoffice/tree";
class m extends r {
  constructor(t) {
    super(t), this.consumeContext(s, (e) => {
      this.observe(e?.dataType, (o) => {
        this.updateAdditionalRequestArgs({ dataType: o });
      });
    });
  }
}
export {
  m as UmbDocumentTreeContext,
  m as api
};
//# sourceMappingURL=document-tree.context-IXbezNmf.js.map
