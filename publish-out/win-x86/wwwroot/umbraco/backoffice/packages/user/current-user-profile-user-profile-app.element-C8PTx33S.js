import { html as p, css as u, customElement as m } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as a } from "@umbraco-cms/backoffice/lit-element";
import { UmbTextStyles as f } from "@umbraco-cms/backoffice/style";
var c = Object.getOwnPropertyDescriptor, b = (s, i, n, o) => {
  for (var e = o > 1 ? void 0 : o ? c(i, n) : i, t = s.length - 1, l; t >= 0; t--)
    (l = s[t]) && (e = l(e) || e);
  return e;
};
let r = class extends a {
  render() {
    return p`
			<uui-box .headline=${this.localize.term("user_yourProfile")}>
				<umb-extension-with-api-slot id="actions" type="currentUserAction"></umb-extension-with-api-slot>
			</uui-box>
		`;
  }
};
r.styles = [
  f,
  u`
			#actions {
				display: flex;
				flex-wrap: wrap;
				flex-direction: row;
				gap: var(--uui-size-space-2);
			}
		`
];
r = b([
  m("umb-current-user-profile-user-profile-app")
], r);
const P = r;
export {
  r as UmbCurrentUserProfileUserProfileAppElement,
  P as default
};
//# sourceMappingURL=current-user-profile-user-profile-app.element-C8PTx33S.js.map
