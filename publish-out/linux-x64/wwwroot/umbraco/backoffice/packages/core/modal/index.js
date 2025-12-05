import { U as r } from "../modal-manager.context-CIirlzRD.js";
import { b as x, a as O, c as w } from "../modal-manager.context-CIirlzRD.js";
import { UmbControllerBase as l } from "@umbraco-cms/backoffice/class-api";
import { U as a } from "../modal-token-wEQqBBXI.js";
import { UmbConfirmModalElement as u } from "../confirm-modal.element-COhIMOef.js";
import { UmbDiscardChangesModalElement as g, UmbDiscardChangesModalElement as h } from "../discard-changes-modal.element-DU89FGO1.js";
import { m as B } from "../manifest-BUE-nSaI.js";
import { U as I } from "../modal-base.element-DzLTq939.js";
class m extends l {
  async open(o, t = {}) {
    const n = await this.getContext(r);
    if (!n)
      throw this.destroy(), new Error("Modal manager not found.");
    return await n.open(this, o, t).onSubmit().finally(() => {
      this.destroy();
    });
  }
}
function b(e, o, t = {}) {
  return new m(e).open(o, t);
}
const s = new a("Umb.Modal.Confirm", {
  modal: {
    type: "dialog"
  }
});
function p(e, o) {
  return new m(e).open(s, { data: o });
}
const C = new a("Umb.Modal.DiscardChanges", {
  modal: {
    type: "dialog"
  }
}), f = new a(
  "Umb.Modal.ErrorViewer",
  {
    modal: {
      type: "sidebar",
      size: "medium"
    }
  }
), E = new a(
  "Umb.Modal.ItemPicker",
  {
    modal: {
      type: "sidebar",
      size: "small"
    }
  }
);
export {
  s as UMB_CONFIRM_MODAL,
  C as UMB_DISCARD_CHANGES_MODAL,
  f as UMB_ERROR_VIEWER_MODAL,
  E as UMB_ITEM_PICKER_MODAL,
  x as UMB_MODAL_CONTEXT,
  r as UMB_MODAL_MANAGER_CONTEXT,
  u as UmbConfirmModalElement,
  g as UmbDiscardChangesModalElement,
  I as UmbModalBaseElement,
  O as UmbModalElement,
  w as UmbModalManagerContext,
  a as UmbModalToken,
  m as UmbOpenModalController,
  h as element,
  B as manifests,
  p as umbConfirmModal,
  b as umbOpenModal
};
//# sourceMappingURL=index.js.map
