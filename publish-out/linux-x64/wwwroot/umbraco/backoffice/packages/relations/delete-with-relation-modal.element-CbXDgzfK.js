import { unsafeHTML as v, nothing as g, html as d, css as w, state as p, customElement as C } from "@umbraco-cms/backoffice/external/lit";
import { UmbTextStyles as b } from "@umbraco-cms/backoffice/style";
import { UmbModalBaseElement as $ } from "@umbraco-cms/backoffice/modal";
import { umbFocus as A } from "@umbraco-cms/backoffice/lit-element";
import { createExtensionApiByAlias as E } from "@umbraco-cms/backoffice/extension-registry";
var M = Object.defineProperty, R = Object.getOwnPropertyDescriptor, _ = (e) => {
  throw TypeError(e);
}, m = (e, t, i, r) => {
  for (var a = r > 1 ? void 0 : r ? R(t, i) : t, n = e.length - 1, l; n >= 0; n--)
    (l = e[n]) && (a = (r ? l(t, i, a) : l(a)) || a);
  return r && a && M(t, i, a), a;
}, u = (e, t, i) => t.has(e) || _("Cannot " + i), f = (e, t, i) => (u(e, t, "read from private field"), t.get(e)), h = (e, t, i) => t.has(e) ? _("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), x = (e, t, i, r) => (u(e, t, "write to private field"), t.set(e, i), i), U = (e, t, i) => (u(e, t, "access private method"), i), o, c, y;
let s = class extends $ {
  constructor() {
    super(...arguments), h(this, c), h(this, o);
  }
  firstUpdated(e) {
    super.firstUpdated(e), U(this, c, y).call(this);
  }
  render() {
    const e = this.localize.string("#actions_delete"), t = this.localize.string("#defaultdialogs_confirmdelete", this._name);
    return d`
			<uui-dialog-layout class="uui-text" headline=${e}>
				<p>${v(t)}</p>
				${this._referencesConfig ? d`<umb-confirm-action-modal-entity-references
							.config=${this._referencesConfig}></umb-confirm-action-modal-entity-references>` : g}

				<uui-button
					slot="actions"
					id="cancel"
					label=${this.localize.term("general_cancel")}
					@click=${this._rejectModal}></uui-button>

				<uui-button
					slot="actions"
					id="confirm"
					color="danger"
					look="primary"
					label=${this.localize.term("general_delete")}
					@click=${this._submitModal}
					${A()}></uui-button>
			</uui-dialog-layout>
		`;
  }
};
o = /* @__PURE__ */ new WeakMap();
c = /* @__PURE__ */ new WeakSet();
y = async function() {
  if (!this.data) {
    f(this, o)?.destroy();
    return;
  }
  x(this, o, await E(this, this.data.itemRepositoryAlias));
  const { data: e } = await f(this, o).requestItems([this.data.unique]), t = e?.[0];
  if (!t) throw new Error("Item not found.");
  this._name = t.name, this._referencesConfig = {
    unique: this.data.unique,
    itemRepositoryAlias: this.data.itemRepositoryAlias,
    referenceRepositoryAlias: this.data.referenceRepositoryAlias
  };
};
s.styles = [
  b,
  w`
			uui-dialog-layout {
				max-inline-size: 60ch;
			}
		`
];
m([
  p()
], s.prototype, "_name", 2);
m([
  p()
], s.prototype, "_referencesConfig", 2);
s = m([
  C("umb-delete-with-relation-confirm-modal")
], s);
export {
  s as UmbDeleteWithRelationConfirmModalElement,
  s as element
};
//# sourceMappingURL=delete-with-relation-modal.element-CbXDgzfK.js.map
