import { html as n, css as m, state as c, customElement as b } from "@umbraco-cms/backoffice/external/lit";
import { UmbTextStyles as d } from "@umbraco-cms/backoffice/style";
import { UmbModalBaseElement as p } from "@umbraco-cms/backoffice/modal";
var h = Object.defineProperty, _ = Object.getOwnPropertyDescriptor, u = (s, o, r, l) => {
  for (var e = l > 1 ? void 0 : l ? _(o, r) : o, a = s.length - 1, i; a >= 0; a--)
    (i = s[a]) && (e = (l ? i(o, r, e) : i(e)) || e);
  return l && e && h(o, r, e), e;
};
let t = class extends p {
  constructor() {
    super(...arguments), this._serverUpgradeCheck = null;
  }
  render() {
    return n`
			<uui-dialog>
				<uui-dialog-layout headline=${this.localize.term("general_newVersionAvailable")}>
					${this.data?.comment}

					<uui-button
						@click=${this._submitModal}
						slot="actions"
						look="secondary"
						label=${this.localize.term("general_close")}></uui-button>

					${this.data?.downloadUrl ? n` <uui-button
								.href=${this.data.downloadUrl}
								target="_blank"
								slot="actions"
								look="primary"
								color="positive"
								label=${this.localize.term("general_readMore")}>
								<umb-localize key="general_readMore">Read more</umb-localize>
								<umb-icon slot="extra" name="icon-out"></umb-icon>
							</uui-button>` : ""}
				</uui-dialog-layout>
			</uui-dialog>
		`;
  }
};
t.styles = [
  d,
  m`
			umb-icon {
				margin-left: var(--uui-size-2);
			}
		`
];
u([
  c()
], t.prototype, "_serverUpgradeCheck", 2);
t = u([
  b("umb-new-version")
], t);
const w = t;
export {
  t as UmbNewVersionElement,
  w as default
};
//# sourceMappingURL=new-version.element-CgHZBcSS.js.map
