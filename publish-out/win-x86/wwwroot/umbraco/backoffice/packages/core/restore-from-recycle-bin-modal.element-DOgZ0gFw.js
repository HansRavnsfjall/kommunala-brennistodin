import { html as r, css as A, state as _, customElement as $ } from "@umbraco-cms/backoffice/external/lit";
import { UmbTextStyles as M } from "@umbraco-cms/backoffice/style";
import { UmbModalBaseElement as k, umbOpenModal as D } from "@umbraco-cms/backoffice/modal";
import { createExtensionApiByAlias as v } from "@umbraco-cms/backoffice/extension-registry";
var B = Object.defineProperty, O = Object.getOwnPropertyDescriptor, b = (t) => {
  throw TypeError(t);
}, c = (t, e, i, l) => {
  for (var a = l > 1 ? void 0 : l ? O(e, i) : e, h = t.length - 1, d; h >= 0; h--)
    (d = t[h]) && (a = (l ? d(e, i, a) : d(a)) || a);
  return l && a && B(e, i, a), a;
}, w = (t, e, i) => e.has(t) || b("Cannot " + i), m = (t, e, i) => (w(t, e, "read from private field"), i ? i.call(t) : e.get(t)), y = (t, e, i) => e.has(t) ? b("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), S = (t, e, i, l) => (w(t, e, "write to private field"), e.set(t, i), i), o = (t, e, i) => (w(t, e, "access private method"), i), u, n, R, p, q, C, f, E, I;
const T = "umb-restore-from-recycle-bin-modal";
let s = class extends k {
  constructor() {
    super(...arguments), y(this, n), this._isAutomaticRestore = !1, y(this, u);
  }
  async firstUpdated(t) {
    if (super.firstUpdated(t), !this.data?.unique) throw new Error("Cannot restore an item without a unique identifier.");
    this._restoreItem = await o(this, n, p).call(this, this.data.unique);
    const e = await o(this, n, R).call(this);
    e !== void 0 && (this.setDestination(e), this._isAutomaticRestore = !0);
  }
  async setDestination(t) {
    if (t === null && (this._destinationItem = {
      name: "ROOT"
    }, o(this, n, f).call(this, {
      unique: null,
      entityType: "unknown"
    })), t) {
      if (this._destinationItem = await o(this, n, p).call(this, t), !this._destinationItem) throw new Error("Cant find destination item.");
      o(this, n, f).call(this, {
        unique: this._destinationItem.unique,
        entityType: this._destinationItem.entityType
      });
    }
  }
  render() {
    return r`
			<umb-body-layout headline="Restore">
				<uui-box>
					${this._isAutomaticRestore ? r` Restore ${this._restoreItem?.name} to ${this._destinationItem?.name}` : o(this, n, E).call(this)}
				</uui-box>
				${o(this, n, I).call(this)}
			</umb-body-layout>
		`;
  }
};
u = /* @__PURE__ */ new WeakMap();
n = /* @__PURE__ */ new WeakSet();
R = async function() {
  if (!this.data?.unique) throw new Error("Cannot restore an item without a unique identifier.");
  if (!this.data?.recycleBinRepositoryAlias)
    throw new Error("Cannot restore an item without a recycle bin repository alias.");
  S(this, u, await v(
    this,
    this.data.recycleBinRepositoryAlias
  ));
  const { data: t } = await m(this, u).requestOriginalParent({
    unique: this.data.unique
  });
  if (t !== void 0)
    return t ? t.unique : null;
};
p = async function(t) {
  if (!this.data?.itemRepositoryAlias) throw new Error("Cannot restore an item without an item repository alias.");
  const e = await v(this, this.data.itemRepositoryAlias), { data: i } = await e.requestItems([t]);
  return i?.[0];
};
q = async function() {
  if (!this.data?.pickerModal) throw new Error("Cannot select a destination without a picker modal.");
  const { selection: t } = await D(this, this.data.pickerModal, {
    data: {
      multiple: !1
    }
  });
  if (t.length > 0) {
    const e = t[0];
    this.setDestination(e);
  }
};
C = async function() {
  if (!this.value.destination) throw new Error("Cannot restore an item without a destination.");
  if (!m(this, u)) throw new Error("Cannot restore an item without a destination.");
  if (!this.data?.unique) throw new Error("Cannot restore an item without a unique identifier.");
  const { error: t } = await m(this, u).requestRestore({
    unique: this.data.unique,
    destination: { unique: this.value.destination.unique }
  });
  t || this._submitModal();
};
f = function(t) {
  this.updateValue({ destination: t });
};
E = function() {
  return r`
			<h4>Cannot automatically restore this item.</h4>
			<p>There is no location where this item can be automatically restored. You can select a new location below.</p>
			<h5>Restore to:</h5>
			${this._destinationItem ? r`<uui-ref-node name=${this._destinationItem.name}>
						<uui-action-bar slot="actions">
							<uui-button @click=${() => this._destinationItem = void 0} label="Remove"
								>${this.localize.term("general_remove")}</uui-button
							>
						</uui-action-bar>
					</uui-ref-node>` : r` <uui-button id="placeholder" look="placeholder" @click=${o(this, n, q)}
						>Select location</uui-button
					>`}
		`;
};
I = function() {
  return r`
			<uui-button slot="actions" id="cancel" label="Cancel" @click="${this._rejectModal}"></uui-button>
			<uui-button slot="actions" color="positive" look="primary" label="Restore" @click=${o(this, n, C)}></uui-button>
		`;
};
s.styles = [
  M,
  A`
			#placeholder {
				width: 100%;
			}
		`
];
c([
  _()
], s.prototype, "_isAutomaticRestore", 2);
c([
  _()
], s.prototype, "_restoreItem", 2);
c([
  _()
], s.prototype, "_destinationItem", 2);
s = c([
  $(T)
], s);
const F = s;
export {
  s as UmbRestoreFromRecycleBinModalElement,
  F as default
};
//# sourceMappingURL=restore-from-recycle-bin-modal.element-DOgZ0gFw.js.map
