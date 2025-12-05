import { UmbUserCollectionRepository as y } from "./user-collection.repository-CsIysBwS.js";
import { UmbTextStyles as k } from "@umbraco-cms/backoffice/style";
import { ifDefined as C, html as p, css as M, state as w, customElement as g } from "@umbraco-cms/backoffice/external/lit";
import { UmbModalBaseElement as x } from "@umbraco-cms/backoffice/modal";
import { UmbSelectionManager as E } from "@umbraco-cms/backoffice/utils";
var P = Object.defineProperty, S = Object.getOwnPropertyDescriptor, _ = (e) => {
  throw TypeError(e);
}, f = (e, t, s, n) => {
  for (var o = n > 1 ? void 0 : n ? S(t, s) : t, u = e.length - 1, m; u >= 0; u--)
    (m = e[u]) && (o = (n ? m(t, s, o) : m(o)) || o);
  return n && o && P(t, s, o), o;
}, v = (e, t, s) => t.has(e) || _("Cannot " + s), a = (e, t, s) => (v(e, t, "read from private field"), s ? s.call(e) : t.get(e)), d = (e, t, s) => t.has(e) ? _("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, s), h = (e, t, s) => (v(e, t, "access private method"), s), i, c, r, b, U, $;
let l = class extends x {
  constructor() {
    super(...arguments), d(this, r), this._users = [], d(this, i, new E(this)), d(this, c, new y(this));
  }
  connectedCallback() {
    super.connectedCallback(), a(this, i).setMultiple(this.data?.multiple ?? !1), a(this, i).setSelection(this.value?.selection ?? []);
  }
  firstUpdated(e) {
    super.firstUpdated(e), h(this, r, b).call(this);
  }
  render() {
    return p`
			<umb-body-layout headline=${this.localize.term("defaultdialogs_chooseUsers")}>
				<uui-box>
					${this._users.map(
      (e) => p`
							<uui-menu-item
								label=${C(e.name)}
								selectable
								@selected=${() => a(this, i).select(e.unique)}
								@deselected=${() => a(this, i).deselect(e.unique)}
								?selected=${a(this, i).isSelected(e.unique)}>
								<umb-user-avatar
									slot="icon"
									.name=${e.name}
									.kind=${e.kind}
									.imgUrls=${e.avatarUrls}></umb-user-avatar>
							</uui-menu-item>
						`
    )}
				</uui-box>
				<div slot="actions">
					<uui-button label=${this.localize.term("general_close")} @click=${h(this, r, $)}></uui-button>
					<uui-button
						label=${this.localize.term("general_choose")}
						look="primary"
						color="positive"
						@click=${h(this, r, U)}></uui-button>
				</div>
			</umb-body-layout>
		`;
  }
};
i = /* @__PURE__ */ new WeakMap();
c = /* @__PURE__ */ new WeakMap();
r = /* @__PURE__ */ new WeakSet();
b = async function() {
  if (!a(this, c)) return;
  const { data: e } = await a(this, c).requestCollection();
  e && (this._users = e.items);
};
U = function() {
  this.value = { selection: a(this, i).getSelection() }, this.modalContext?.submit();
};
$ = function() {
  this.modalContext?.reject();
};
l.styles = [
  k,
  M`
			umb-user-avatar {
				font-size: 12px;
			}
		`
];
f([
  w()
], l.prototype, "_users", 2);
l = f([
  g("umb-user-picker-modal")
], l);
const R = l;
export {
  l as UmbUserPickerModalElement,
  R as default
};
//# sourceMappingURL=user-picker-modal.element-AMd6yLO_.js.map
