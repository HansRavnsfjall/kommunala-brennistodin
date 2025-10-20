import { UmbModalToken as e } from "@umbraco-cms/backoffice/modal";
import { UMB_TREE_PICKER_MODAL_ALIAS as a } from "@umbraco-cms/backoffice/tree";
const t = new e(
  a,
  {
    modal: {
      type: "sidebar",
      size: "small"
    },
    data: {
      hideTreeRoot: !0,
      treeAlias: "Umb.Tree.Template"
    }
  }
), m = new e("Umb.Modal.Template.QueryBuilder", {
  modal: {
    type: "sidebar",
    size: "large"
  }
});
export {
  t as U,
  m as a
};
//# sourceMappingURL=query-builder-modal.token-wTFAMSqZ.js.map
