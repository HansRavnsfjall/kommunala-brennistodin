import { c as w } from "./manifests-BfVrApfB.js";
import { repeat as E, html as d, state as p, customElement as M } from "@umbraco-cms/backoffice/external/lit";
import { UmbModalBaseElement as $, UMB_MODAL_MANAGER_CONTEXT as I } from "@umbraco-cms/backoffice/modal";
import { UmbDocumentTypeDetailRepository as U } from "@umbraco-cms/backoffice/document-type";
import { UMB_ENTITY_USER_PERMISSION_MODAL as g } from "@umbraco-cms/backoffice/user-permission";
var C = Object.defineProperty, D = Object.getOwnPropertyDescriptor, _ = (e) => {
  throw TypeError(e);
}, l = (e, t, o, r) => {
  for (var s = r > 1 ? void 0 : r ? D(t, o) : t, u = e.length - 1, c; u >= 0; u--)
    (c = e[u]) && (s = (r ? c(t, o, s) : c(s)) || s);
  return r && s && C(t, o, s), s;
}, y = (e, t, o) => t.has(e) || _("Cannot " + o), q = (e, t, o) => (y(e, t, "read from private field"), o ? o.call(e) : t.get(e)), h = (e, t, o) => t.has(e) ? _("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, o), n = (e, t, o) => (y(e, t, "access private method"), o), m, i, f, v, b, T, P;
let a = class extends $ {
  constructor() {
    super(...arguments), h(this, i), this._documentTypeProperties = [], this._selectedItem = null, this._pickableFilter = () => !0, h(this, m, new U(this));
  }
  async firstUpdated() {
    if (!this.data?.documentType?.unique)
      throw new Error("Document type unique is required");
    this._pickableFilter = this.data.pickableFilter ?? this._pickableFilter;
    const { data: e } = await q(this, m).requestByUnique(this.data.documentType.unique);
    this._documentTypeProperties = e?.properties ?? [], this._documentTypeName = e?.name;
  }
  render() {
    return d`<umb-body-layout headline="Choose Property">
			<uui-box>
				${this._documentTypeProperties.length > 0 ? E(
      this._documentTypeProperties,
      (e) => e.unique,
      (e) => d`
								<uui-ref-node
									name=${e.name ?? ""}
									detail=${n(this, i, b).call(this, e)}
									?selectable=${this._pickableFilter(e)}
									select-only
									@selected=${(t) => n(this, i, f).call(this, t, e)}
									@deselected=${(t) => n(this, i, v).call(this, t)}
									?selected=${this._selectedItem?.unique === e.unique}
									?disabled=${!this._pickableFilter(e)}>
									<uui-icon slot="icon" name="icon-settings"></uui-icon>
								</uui-ref-node>
							`
    ) : d`There are no properties to choose from.`}
			</uui-box>
			<div slot="actions">
				<uui-button label="Close" @click=${this._rejectModal}></uui-button>
				<uui-button
					label="${this.localize.term("general_next")}"
					look="primary"
					color="positive"
					@click=${n(this, i, T)}
					?disabled=${!this._selectedItem}></uui-button>
			</div>
		</umb-body-layout> `;
  }
};
m = /* @__PURE__ */ new WeakMap();
i = /* @__PURE__ */ new WeakSet();
f = function(e, t) {
  e.stopPropagation(), this._selectedItem = t;
};
v = function(e) {
  e.stopPropagation(), this._selectedItem = null;
};
b = function(e) {
  const t = e.validation?.mandatory ? " - Mandatory" : "", o = e.variesByCulture ? " - Varies by culture" : "", r = e.variesBySegment ? " - Varies by segment" : "";
  return `${e.alias} ${t} ${o} ${r}`;
};
T = function() {
  if (!this._selectedItem)
    throw new Error("Could not proceed, no property was selected");
  n(this, i, P).call(this);
};
P = async function() {
  if (!this._selectedItem)
    throw new Error("Could not open permissions modal, no property was provided");
  const e = `Permissions for ${this._documentTypeName}: ${this._selectedItem.name}`, t = await this.getContext(I);
  if (!t)
    throw new Error("Could not open permissions modal, modal manager is not available");
  const o = t.open(this, g, {
    data: {
      entityType: w,
      headline: e,
      preset: {
        allowedVerbs: this.data?.preset?.verbs ?? []
      }
    }
  });
  try {
    const r = await o.onSubmit();
    this.updateValue({
      propertyType: { unique: this._selectedItem.unique },
      verbs: r.allowedVerbs
    }), this._submitModal();
  } catch (r) {
    console.log(r);
  }
};
l([
  p()
], a.prototype, "_documentTypeProperties", 2);
l([
  p()
], a.prototype, "_documentTypeName", 2);
l([
  p()
], a.prototype, "_selectedItem", 2);
l([
  p()
], a.prototype, "_pickableFilter", 2);
a = l([
  M("umb-document-property-value-user-permission-flow-property-type-modal")
], a);
export {
  a as UmbDocumentPropertyValueUserPermissionFlowPropertyTypeModalElement,
  a as element
};
//# sourceMappingURL=property-type-modal.element-eMOjRR3_.js.map
