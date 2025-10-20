import { css as u, property as m, customElement as p, nothing as c, html as b } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as y } from "@umbraco-cms/backoffice/lit-element";
import { UmbModalToken as _ } from "@umbraco-cms/backoffice/modal";
var f = Object.defineProperty, h = Object.getOwnPropertyDescriptor, l = (a, t, s, o) => {
  for (var e = o > 1 ? void 0 : o ? h(t, s) : t, r = a.length - 1, i; r >= 0; r--)
    (i = a[r]) && (e = (o ? i(t, s, e) : i(e)) || e);
  return o && e && f(t, s, e), e;
};
let n = class extends y {
  render() {
    return this.contentTypeName ? b`<uui-button look="secondary"
					><uui-icon name="icon-add"></uui-icon>
					<umb-localize key="blockEditor_createThisFor" .args=${[this.contentTypeName]}></umb-localize
				></uui-button>` : c;
  }
};
n.styles = [
  u`
			:host {
				position: absolute;
				inset: 0;
			}

			uui-button {
				position: absolute;
				inset: 0;
				opacity: 0.8;
			}

			:host:hover uui-button {
				opacity: 1;
			}
		`
];
l([
  m({ attribute: !1 })
], n.prototype, "contentTypeName", 2);
n = l([
  p("umb-block-overlay-expose-button")
], n);
const U = new _(
  "Umb.Modal.BlockCatalogue",
  {
    modal: {
      type: "sidebar",
      size: "small"
    }
  }
);
export {
  U,
  n as a
};
//# sourceMappingURL=block-catalogue-modal.token-CqYZWuQE.js.map
