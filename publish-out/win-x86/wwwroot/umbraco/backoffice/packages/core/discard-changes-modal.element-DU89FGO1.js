import { U as u } from "./modal-base.element-DzLTq939.js";
import { customElement as m, html as n } from "@umbraco-cms/backoffice/external/lit";
import { UmbTextStyles as c } from "@umbraco-cms/backoffice/style";
var d = Object.getOwnPropertyDescriptor, p = (a, o, i, r) => {
  for (var e = r > 1 ? void 0 : r ? d(o, i) : o, t = a.length - 1, s; t >= 0; t--)
    (s = a[t]) && (e = s(e) || e);
  return e;
};
let l = class extends u {
  render() {
    return n`
			<uui-dialog-layout class="uui-text" headline=${this.localize.term("prompt_unsavedChanges")}>
				<umb-localize key="prompt_unsavedChangesWarning"></umb-localize>
				<uui-button
					slot="actions"
					id="cancel"
					label=${this.localize.term("prompt_stay")}
					@click=${this._rejectModal}></uui-button>
				<uui-button
					slot="actions"
					id="confirm"
					color="danger"
					look="primary"
					label=${this.localize.term("prompt_discardChanges")}
					@click=${this._submitModal}></uui-button>
			</uui-dialog-layout>
		`;
  }
};
l.styles = [c];
l = p([
  m("umb-discard-changes-modal")
], l);
export {
  l as UmbDiscardChangesModalElement,
  l as element
};
//# sourceMappingURL=discard-changes-modal.element-DU89FGO1.js.map
