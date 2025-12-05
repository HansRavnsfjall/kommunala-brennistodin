import { unsafeHTML as f, nothing as d, html as c, css as p, state as _, customElement as g } from "@umbraco-cms/backoffice/external/lit";
import { UmbTextStyles as b } from "@umbraco-cms/backoffice/style";
import { UmbModalBaseElement as y } from "@umbraco-cms/backoffice/modal";
import { umbFocus as v } from "@umbraco-cms/backoffice/lit-element";
var C = Object.defineProperty, $ = Object.getOwnPropertyDescriptor, u = (e) => {
  throw TypeError(e);
}, m = (e, t, i, s) => {
  for (var a = s > 1 ? void 0 : s ? $(t, i) : t, o = e.length - 1, n; o >= 0; o--)
    (n = e[o]) && (a = (s ? n(t, i, a) : n(a)) || a);
  return s && a && C(t, i, a), a;
}, k = (e, t, i) => t.has(e) || u("Cannot " + i), M = (e, t, i) => t.has(e) ? u("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), E = (e, t, i) => (k(e, t, "access private method"), i), l, h;
let r = class extends y {
  constructor() {
    super(...arguments), M(this, l);
  }
  firstUpdated(e) {
    super.firstUpdated(e), E(this, l, h).call(this);
  }
  render() {
    const e = this.localize.string("#actions_trash");
    return c`
			<uui-dialog-layout class="uui-text" headline=${e}>
				<p>${f(this.localize.string("#defaultdialogs_confirmBulkTrash", this.data?.uniques.length))}</p>
				${this._referencesConfig ? c`<umb-confirm-bulk-action-modal-entity-references
							.config=${this._referencesConfig}></umb-confirm-bulk-action-modal-entity-references>` : d}

				<uui-button slot="actions" id="cancel" label="Cancel" @click=${this._rejectModal}></uui-button>

				<uui-button
					slot="actions"
					id="confirm"
					color="danger"
					look="primary"
					label=${this.localize.term("actions_trash")}
					@click=${this._submitModal}
					${v()}></uui-button>
			</uui-dialog-layout>
		`;
  }
};
l = /* @__PURE__ */ new WeakSet();
h = async function() {
  this.data && (this._referencesConfig = {
    uniques: this.data.uniques,
    itemRepositoryAlias: this.data.itemRepositoryAlias,
    referenceRepositoryAlias: this.data.referenceRepositoryAlias
  });
};
r.styles = [
  b,
  p`
			uui-dialog-layout {
				max-inline-size: 60ch;
			}
		`
];
m([
  _()
], r.prototype, "_referencesConfig", 2);
r = m([
  g("umb-bulk-trash-with-relation-confirm-modal")
], r);
export {
  r as UmbBulkTrashWithRelationConfirmModalElement,
  r as element
};
//# sourceMappingURL=bulk-trash-with-relation-modal.element-CJDtVSeN.js.map
