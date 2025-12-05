import { m } from "./member-group-picker-modal.element-I2C8EUhz.js";
import { UmbTextStyles as a } from "@umbraco-cms/backoffice/style";
import { html as u, css as c, state as d, customElement as b } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as f } from "@umbraco-cms/backoffice/lit-element";
var x = Object.defineProperty, h = Object.getOwnPropertyDescriptor, p = (i, t, l, o) => {
  for (var e = o > 1 ? void 0 : o ? h(t, l) : t, s = i.length - 1, n; s >= 0; s--)
    (n = i[s]) && (e = (o ? n(t, l, e) : n(e)) || e);
  return o && e && x(t, l, e), e;
};
let r = class extends f {
  constructor() {
    super(), this._unique = "", this.consumeContext(m, async (i) => {
      this._workspaceContext = i, this._unique = this._workspaceContext?.getUnique() ?? "";
    });
  }
  render() {
    return u` <div id="left-column">
				<uui-box headline=${this.localize.term("content_membergroup")}>
					<div id="no-properties">
						<umb-localize key="member_memberGroupNoProperties">
							Member groups have no additional properties for editing.
						</umb-localize>
					</div>
				</uui-box>
			</div>

			<div id="right-column">
				<uui-box headline=${this.localize.term("general_general")}>
					<div class="property">
						<b><umb-localize key="general_id">Id</umb-localize></b>
						<span>${this._unique}</span>
					</div>
				</uui-box>
			</div>`;
  }
};
r.styles = [
  a,
  c`
			#no-properties {
				display: flex;
				justify-content: center;
				align-items: center;
				color: var(--uui-color-text);
				opacity: 0.5;
			}
			#left-column {
				/* Is there a way to make the wrapped right column grow only when wrapped? */
				flex: 9999 1 500px;
			}
			#right-column {
				flex: 1 1 350px;
				display: flex;
				flex-direction: column;
				gap: var(--uui-size-space-4);
			}
			:host {
				display: flex;
				gap: var(--uui-size-space-4);
				padding: var(--uui-size-space-4);
			}
			.property {
				display: flex;
				flex-direction: column;
			}
		`
];
p([
  d()
], r.prototype, "_unique", 2);
r = p([
  b("umb-member-type-workspace-view-member-info")
], r);
const w = r;
export {
  r as UmbMemberTypeWorkspaceViewMemberInfoElement,
  w as default
};
//# sourceMappingURL=member-type-workspace-view-info.element-Baqh5SFY.js.map
