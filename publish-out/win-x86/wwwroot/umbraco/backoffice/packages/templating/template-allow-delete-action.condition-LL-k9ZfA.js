import { UmbConditionBase as s } from "@umbraco-cms/backoffice/extension-registry";
import { UMB_TREE_ITEM_CONTEXT as n } from "@umbraco-cms/backoffice/tree";
class a extends s {
  constructor(e, t) {
    super(e, t), this.consumeContext(n, (o) => {
      this.observe(
        o?.hasChildren,
        (i) => {
          this.permitted = i === !1;
        },
        "_templateAllowDeleteActionCondition"
      );
    });
  }
}
export {
  a as UmbTemplateAllowDeleteActionCondition,
  a as api
};
//# sourceMappingURL=template-allow-delete-action.condition-LL-k9ZfA.js.map
