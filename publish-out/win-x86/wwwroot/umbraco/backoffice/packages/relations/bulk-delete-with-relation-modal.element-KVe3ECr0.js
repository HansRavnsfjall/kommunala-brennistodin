import { unsafeHTML as f, nothing as h, html as c, css as p, state as _, customElement as g } from "@umbraco-cms/backoffice/external/lit";
import { UmbTextStyles as b } from "@umbraco-cms/backoffice/style";
import { UmbModalBaseElement as y } from "@umbraco-cms/backoffice/modal";
import { umbFocus as v } from "@umbraco-cms/backoffice/lit-element";
var C = Object.defineProperty, $ = Object.getOwnPropertyDescriptor, u = (e) => {
  throw TypeError(e);
}, m = (e, t, i, s) => {
  for (var a = s > 1 ? void 0 : s ? $(t, i) : t, r = e.length - 1, n; r >= 0; r--)
    (n = e[r]) && (a = (s ? n(t, i, a) : n(a)) || a);
  return s && a && C(t, i, a), a;
}, k = (e, t, i) => t.has(e) || u("Cannot " + i), M = (e, t, i) => t.has(e) ? u("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), D = (e, t, i) => (k(e, t, "access private method"), i), l, d;
let o = class extends y {
  constructor() {
    super(...arguments), M(this, l);
  }
  firstUpdated(e) {
    super.firstUpdated(e), D(this, l, d).call(this);
  }
  render() {
    const e = this.localize.string("#actions_delete");
    return c`
			<uui-dialog-layout class="uui-text" headline=${e}>
				<p>${f(this.localize.string("#defaultdialogs_confirmBulkDelete", this.data?.uniques.length))}</p>
				${this._referencesConfig ? c`<umb-confirm-bulk-action-modal-entity-references
							.config=${this._referencesConfig}></umb-confirm-bulk-action-modal-entity-references>` : h}

				<uui-button slot="actions" id="cancel" label="Cancel" @click=${this._rejectModal}></uui-button>

				<uui-button
					slot="actions"
					id="confirm"
					color="danger"
					look="primary"
					label=${this.localize.term("actions_delete")}
					@click=${this._submitModal}
					${v()}></uui-button>
			</uui-dialog-layout>
		`;
  }
};
l = /* @__PURE__ */ new WeakSet();
d = async function() {
  this.data && (this._referencesConfig = {
    uniques: this.data.uniques,
    itemRepositoryAlias: this.data.itemRepositoryAlias,
    referenceRepositoryAlias: this.data.referenceRepositoryAlias
  });
};
o.styles = [
  b,
  p`
			uui-dialog-layout {
				max-inline-size: 60ch;
			}
		`
];
m([
  _()
], o.prototype, "_referencesConfig", 2);
o = m([
  g("umb-bulk-delete-with-relation-confirm-modal")
], o);
export {
  o as UmbBulkDeleteWithRelationConfirmModalElement,
  o as element
};
//# sourceMappingURL=bulk-delete-with-relation-modal.element-KVe3ECr0.js.map
