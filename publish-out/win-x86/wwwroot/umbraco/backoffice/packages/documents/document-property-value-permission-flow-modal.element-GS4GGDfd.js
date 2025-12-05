import { F as h } from "./manifests-BfVrApfB.js";
import { html as d, state as b, customElement as v } from "@umbraco-cms/backoffice/external/lit";
import { UmbModalBaseElement as y, UMB_MODAL_MANAGER_CONTEXT as E } from "@umbraco-cms/backoffice/modal";
import { UMB_DOCUMENT_TYPE_TREE_ALIAS as T } from "@umbraco-cms/backoffice/document-type";
var f = Object.defineProperty, M = Object.getOwnPropertyDescriptor, u = (e) => {
  throw TypeError(e);
}, p = (e, t, o, r) => {
  for (var s = r > 1 ? void 0 : r ? M(t, o) : t, n = e.length - 1, i; n >= 0; n--)
    (i = e[n]) && (s = (r ? i(t, o, s) : i(s)) || s);
  return r && s && f(t, o, s), s;
}, P = (e, t, o) => t.has(e) || u("Cannot " + o), g = (e, t, o) => t.has(e) ? u("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, o), c = (e, t, o) => (P(e, t, "access private method"), o), a, _, m;
let l = class extends y {
  constructor() {
    super(...arguments), g(this, a), this._selection = [];
  }
  render() {
    return d`
			<umb-body-layout headline="Choose Document Type">
				<uui-box>
					<umb-tree
						@selection-change=${c(this, a, m)}
						.props=${{
      hideTreeRoot: !0,
      hideTreeItemActions: !0
    }}
						alias=${T}></umb-tree>
				</uui-box>
				<div slot="actions">
					<uui-button label=${this.localize.term("general_close")} @click=${this._rejectModal}></uui-button>
					<uui-button
						label="${this.localize.term("general_next")}"
						look="primary"
						color="positive"
						@click=${c(this, a, _)}
						?disabled=${this._selection.length === 0}></uui-button>
				</div>
			</umb-body-layout>
		`;
  }
};
a = /* @__PURE__ */ new WeakSet();
_ = async function() {
  if (this._selection.length === 0)
    throw new Error("No document type selected");
  const e = { unique: this._selection[0] }, t = await this.getContext(E);
  if (!t)
    throw new Error("Could not get modal manager context");
  const o = t.open(this, h, {
    data: {
      documentType: e,
      preset: {
        verbs: this.data?.preset?.verbs
      },
      pickableFilter: this.data?.pickablePropertyTypeFilter
    }
  });
  try {
    const r = await o.onSubmit();
    this.updateValue({
      documentType: e,
      propertyType: r.propertyType,
      verbs: r.verbs
    }), this._submitModal();
  } catch (r) {
    console.error(r);
  }
};
m = function(e) {
  const o = e.target.getSelection();
  this._selection = [...o];
};
p([
  b()
], l.prototype, "_selection", 2);
l = p([
  v("umb-document-property-value-user-permission-flow-modal")
], l);
export {
  l as UmbDocumentPropertyValueUserPermissionFlowModalElement,
  l as element
};
//# sourceMappingURL=document-property-value-permission-flow-modal.element-GS4GGDfd.js.map
