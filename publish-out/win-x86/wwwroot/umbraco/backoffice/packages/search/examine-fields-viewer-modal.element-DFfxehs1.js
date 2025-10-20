import { nothing as n, html as o, css as d, customElement as c } from "@umbraco-cms/backoffice/external/lit";
import { UmbTextStyles as m } from "@umbraco-cms/backoffice/style";
import { UmbModalBaseElement as b } from "@umbraco-cms/backoffice/modal";
var h = Object.getOwnPropertyDescriptor, p = (e, i, s, u) => {
  for (var l = u > 1 ? void 0 : u ? h(i, s) : i, a = e.length - 1, r; a >= 0; a--)
    (r = e[a]) && (l = r(l) || l);
  return l;
};
let t = class extends b {
  _handleClose() {
    this.modalContext?.reject();
  }
  render() {
    return this.data ? o`
			<umb-body-layout headline="${this.data?.name}">
				<uui-scroll-container id="field-viewer">
					<span>
						<uui-table>
							<uui-table-head>
								<uui-table-head-cell> Field </uui-table-head-cell>
								<uui-table-head-cell> Value </uui-table-head-cell>
							</uui-table-head>
							${Object.values(this.data.searchResult.fields ?? []).map((e) => o`<uui-table-row>
									<uui-table-cell> ${e.name} </uui-table-cell>
									<uui-table-cell> ${e.values?.join(", ")} </uui-table-cell>
								</uui-table-row>`)}
						</uui-table>
					</span>
				</uui-scroll-container>
				<div slot="actions">
					<uui-button
						look="primary"
						label=${this.localize.term("general_close")}
						@click=${this._rejectModal}></uui-button>
				</div>
			</umb-body-layout>
		` : n;
  }
};
t.styles = [
  m,
  d`
			:host {
				display: relative;
			}

			span {
				display: block;
				padding-right: var(--uui-size-space-5);
			}

			uui-scroll-container {
				overflow-y: scroll;
				max-height: 100%;
				min-height: 0;
			}
		`
];
t = p([
  c("umb-examine-fields-viewer-modal")
], t);
const w = t;
export {
  t as UmbExamineFieldsViewerModalElement,
  w as default
};
//# sourceMappingURL=examine-fields-viewer-modal.element-DFfxehs1.js.map
