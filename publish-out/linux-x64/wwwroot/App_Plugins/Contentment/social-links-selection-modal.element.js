import { html as o, repeat as v, css as _, customElement as y } from "@umbraco-cms/backoffice/external/lit";
import { UmbModalToken as f, UmbModalBaseElement as g } from "@umbraco-cms/backoffice/modal";
var k = Object.getOwnPropertyDescriptor, d = (e) => {
  throw TypeError(e);
}, w = (e, t, n, c) => {
  for (var a = c > 1 ? void 0 : c ? k(t, n) : t, r = e.length - 1, u; r >= 0; r--)
    (u = e[r]) && (a = u(a) || a);
  return a;
}, b = (e, t, n) => t.has(e) || d("Cannot " + n), z = (e, t, n) => t.has(e) ? d("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), s = (e, t, n) => (b(e, t, "access private method"), n), i, m, p, h;
const E = new f("Umb.Contentment.Modal.SocialLinks.Selection", {
  modal: {
    type: "dialog"
  }
});
let l = class extends g {
  constructor() {
    super(...arguments), z(this, i);
  }
  render() {
    return o`
			<uui-dialog-layout .headline=${this.localize.term("contentment_selectSocialNetwork")}>
				${s(this, i, p).call(this)}
				<uui-button
					slot="actions"
					label=${this.localize.term("general_cancel")}
					@click=${this._rejectModal}></uui-button>
			</uui-dialog-layout>
		`;
  }
};
i = /* @__PURE__ */ new WeakSet();
m = function(e) {
  this.value = { name: e.name, network: e.network, url: e.url }, this._submitModal();
};
p = function() {
  var e, t;
  return (t = (e = this.data) == null ? void 0 : e.items) != null && t.length ? o`
			<div id="wrapper">
				${v(
    this.data.items,
    (n) => n.network,
    (n) => s(this, i, h).call(this, n)
  )}
			</div>
		` : o`
				<umb-localize key="contentment_emptySocialNetworks">There are no social networks to select.</umb-localize>
			`;
};
h = function(e) {
  return o`
			<uui-button look="outline" label="Change social network" @click=${() => s(this, i, m).call(this, e)}>
				<div class="inner">
					<div class="icon" style="background-color: ${e.backgroundColor};">
						<uui-icon name=${e.icon} style="--uui-icon-color: ${e.iconColor};"></uui-icon>
					</div>
					<span>${e.name}</span>
				</div>
			</uui-button>
		`;
};
l.styles = [
  _`
			#wrapper {
				display: grid;
				grid-template-columns: repeat(auto-fill, minmax(var(--uui-size-40), 1fr));
				gap: var(--uui-size-layout-1);
				margin: var(--uui-size-layout-2);
				place-items: start;
				justify-content: space-between;

				max-width: 45vw;
			}

			.inner {
				display: flex;
				flex-direction: column;
				align-items: stretch;
				justify-content: space-between;
				gap: var(--uui-size-2);
				margin-top: var(--uui-size-2);
			}

			.icon {
				border-radius: var(--uui-size-2);
				font-size: var(--uui-size-layout-3);
				height: var(--uui-size-40);
				width: var(--uui-size-40);

				display: flex;
				justify-content: center;
				align-items: center;
			}
		`
];
l = w([
  y("contentment-property-editor-ui-social-links-selection-modal")
], l);
export {
  E as CONTENTMENT_SOCIAL_LINKS_SELECTION_MODAL,
  l as ContentmentPropertyEditorUISocialLinksSelectionModalElement,
  l as element
};
//# sourceMappingURL=social-links-selection-modal.element.js.map
