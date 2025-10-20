import { html as s, css as m, state as n } from "@umbraco-cms/backoffice/external/lit";
import { UmbTextStyles as u } from "@umbraco-cms/backoffice/style";
import { UmbModalBaseElement as d } from "@umbraco-cms/backoffice/modal";
import { UmbExtensionApiInitializer as c } from "@umbraco-cms/backoffice/extension-api";
import { umbExtensionsRegistry as f } from "@umbraco-cms/backoffice/extension-registry";
import { umbFocus as b } from "@umbraco-cms/backoffice/lit-element";
var p = Object.defineProperty, h = (r, t, e, l) => {
  for (var i = void 0, o = r.length - 1, a; o >= 0; o--)
    (a = r[o]) && (i = a(t, e, i) || i);
  return i && p(t, e, i), i;
};
class y extends d {
  constructor() {
    super(...arguments), this._isNew = !1;
  }
  connectedCallback() {
    super.connectedCallback(), this.#e();
  }
  #e() {
    if (!this.data?.folderRepositoryAlias) throw new Error("A folder repository alias is required");
    new c(
      this,
      f,
      this.data.folderRepositoryAlias,
      [this],
      (t, e) => {
        this.folderRepository = t ? e.api : void 0, this.folderRepository && this.init();
      }
    );
  }
  async #t(t) {
    t.preventDefault();
    const e = t.target;
    if (!e || !e.checkValidity()) return;
    const o = new FormData(e).get("name");
    this.onFormSubmit({ name: o });
  }
  render() {
    return s`
			<umb-body-layout headline=${this.localize.term(this._isNew ? "actions_folderCreate" : "actions_folderRename")}>
				<uui-box>
					<uui-form>
						<form id="FolderForm" @submit="${this.#t}">
							<uui-form-layout-item>
								<uui-label id="nameLabel" for="name" slot="label" required>
									<umb-localize key="create_enterFolderName">Enter folder name</umb-localize>
								</uui-label>
								<uui-input
									type="text"
									id="name"
									name="name"
									.label=${this.localize.term("create_enterFolderName")}
									.value="${this.value?.folder?.name || ""}"
									required
									${b()}></uui-input>
							</uui-form-layout-item>
						</form>
					</uui-form>
				</uui-box>

				<uui-button
					slot="actions"
					id="cancel"
					label=${this.localize.term("buttons_confirmActionCancel")}
					@click="${this._rejectModal}"></uui-button>
				<uui-button
					form="FolderForm"
					type="submit"
					slot="actions"
					id="confirm"
					color="positive"
					look="primary"
					label=${this.localize.term(this._isNew ? "actions_folderCreate" : "actions_folderRename")}></uui-button>
			</umb-body-layout>
		`;
  }
  static {
    this.styles = [
      u,
      m`
			#name {
				width: 100%;
			}
		`
    ];
  }
}
h([
  n()
], y.prototype, "_isNew");
export {
  y as U
};
//# sourceMappingURL=folder-modal-element-base-BzOKRBrY.js.map
