import { unsafeHTML as v, nothing as g, html as m, css as w, state as p, customElement as C } from "@umbraco-cms/backoffice/external/lit";
import { UmbTextStyles as b } from "@umbraco-cms/backoffice/style";
import { UmbModalBaseElement as A } from "@umbraco-cms/backoffice/modal";
import { umbFocus as E } from "@umbraco-cms/backoffice/lit-element";
import { createExtensionApiByAlias as M } from "@umbraco-cms/backoffice/extension-registry";
var R = Object.defineProperty, $ = Object.getOwnPropertyDescriptor, _ = (t) => {
  throw TypeError(t);
}, h = (t, e, i, r) => {
  for (var a = r > 1 ? void 0 : r ? $(e, i) : e, n = t.length - 1, l; n >= 0; n--)
    (l = t[n]) && (a = (r ? l(e, i, a) : l(a)) || a);
  return r && a && R(e, i, a), a;
}, u = (t, e, i) => e.has(t) || _("Cannot " + i), f = (t, e, i) => (u(t, e, "read from private field"), e.get(t)), d = (t, e, i) => e.has(t) ? _("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), x = (t, e, i, r) => (u(t, e, "write to private field"), e.set(t, i), i), T = (t, e, i) => (u(t, e, "access private method"), i), s, c, y;
let o = class extends A {
  constructor() {
    super(...arguments), d(this, c), d(this, s);
  }
  firstUpdated(t) {
    super.firstUpdated(t), T(this, c, y).call(this);
  }
  render() {
    const t = this.localize.string("#actions_trash"), e = this.localize.string("#defaultdialogs_confirmTrash", this._name);
    return m`
			<uui-dialog-layout class="uui-text" headline=${t}>
				<p>${v(e)}</p>

				${this._referencesConfig ? m`<umb-confirm-action-modal-entity-references
							.config=${this._referencesConfig}></umb-confirm-action-modal-entity-references>` : g}

				<uui-button slot="actions" id="cancel" label="Cancel" @click=${this._rejectModal}></uui-button>

				<uui-button
					slot="actions"
					id="confirm"
					color="danger"
					look="primary"
					label=${this.localize.term("actions_trash")}
					@click=${this._submitModal}
					${E()}></uui-button>
			</uui-dialog-layout>
		`;
  }
};
s = /* @__PURE__ */ new WeakMap();
c = /* @__PURE__ */ new WeakSet();
y = async function() {
  if (!this.data) {
    f(this, s)?.destroy();
    return;
  }
  x(this, s, await M(this, this.data.itemRepositoryAlias));
  const { data: t } = await f(this, s).requestItems([this.data.unique]), e = t?.[0];
  if (!e) throw new Error("Item not found.");
  this._name = e.name, this._referencesConfig = {
    unique: this.data.unique,
    itemRepositoryAlias: this.data.itemRepositoryAlias,
    referenceRepositoryAlias: this.data.referenceRepositoryAlias
  };
};
o.styles = [
  b,
  w`
			uui-dialog-layout {
				max-inline-size: 60ch;
			}
		`
];
h([
  p()
], o.prototype, "_name", 2);
h([
  p()
], o.prototype, "_referencesConfig", 2);
o = h([
  C("umb-trash-with-relation-confirm-modal")
], o);
export {
  o as UmbTrashWithRelationConfirmModalElement,
  o as element
};
//# sourceMappingURL=trash-with-relation-modal.element-B-kKwnm8.js.map
