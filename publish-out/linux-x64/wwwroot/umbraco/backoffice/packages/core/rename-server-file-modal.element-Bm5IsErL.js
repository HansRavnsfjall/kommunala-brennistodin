import { html as q, css as M, state as U, customElement as x } from "@umbraco-cms/backoffice/external/lit";
import { UmbTextStyles as A } from "@umbraco-cms/backoffice/style";
import { UmbModalBaseElement as C } from "@umbraco-cms/backoffice/modal";
import { UmbExtensionApiInitializer as _ } from "@umbraco-cms/backoffice/extension-api";
import { umbExtensionsRegistry as v } from "@umbraco-cms/backoffice/extension-registry";
import { umbFocus as P } from "@umbraco-cms/backoffice/lit-element";
var k = Object.defineProperty, D = Object.getOwnPropertyDescriptor, y = (t) => {
  throw TypeError(t);
}, w = (t, e, i, o) => {
  for (var a = o > 1 ? void 0 : o ? D(e, i) : e, r = t.length - 1, p; r >= 0; r--)
    (p = t[r]) && (a = (o ? p(e, i, a) : p(a)) || a);
  return o && a && k(e, i, a), a;
}, f = (t, e, i) => e.has(t) || y("Cannot " + i), s = (t, e, i) => (f(t, e, "read from private field"), i ? i.call(t) : e.get(t)), l = (t, e, i) => e.has(t) ? y("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), c = (t, e, i, o) => (f(t, e, "write to private field"), e.set(t, i), i), b = (t, e, i) => (f(t, e, "access private method"), i), n, m, h, d, E, R;
let u = class extends C {
  constructor() {
    super(...arguments), l(this, d), l(this, n), l(this, m), l(this, h), this._name = "";
  }
  connectedCallback() {
    super.connectedCallback(), b(this, d, E).call(this);
  }
  async firstUpdated(t) {
    if (super.firstUpdated(t), !this.data?.unique) throw new Error("Unique identifier is not available");
    if (await s(this, h), !s(this, n)) throw new Error("Item repository is not available");
    const { data: e } = await s(this, n).requestItems([this.data.unique]);
    this._name = e?.[0].name ?? "";
  }
  render() {
    return q`
			<umb-body-layout headline=${"Rename"}>
				<uui-box>
					<uui-form>
						<form id="RenameForm" @submit="${b(this, d, R)}">
							<uui-form-layout-item>
								<uui-label id="nameLabel" for="name" slot="label" required>Name</uui-label>
								<uui-input
									type="text"
									id="name"
									name="name"
									value=${this._name}
									placeholder="Enter new name..."
									required
									required-message="Name is required"
									${P()}></uui-input>
							</uui-form-layout-item>
						</form>
					</uui-form>
				</uui-box>

				<uui-button slot="actions" id="cancel" label="Cancel" @click="${this._rejectModal}"></uui-button>
				<uui-button
					form="RenameForm"
					type="submit"
					slot="actions"
					color="positive"
					look="primary"
					label="Rename"></uui-button>
			</umb-body-layout>
		`;
  }
};
n = /* @__PURE__ */ new WeakMap();
m = /* @__PURE__ */ new WeakMap();
h = /* @__PURE__ */ new WeakMap();
d = /* @__PURE__ */ new WeakSet();
E = function() {
  if (!this.data?.renameRepositoryAlias) throw new Error("A rename repository alias is required");
  if (!this.data?.itemRepositoryAlias) throw new Error("An item repository alias is required");
  c(this, h, Promise.all([
    new _(
      this,
      v,
      this.data.itemRepositoryAlias,
      [this],
      (t, e) => {
        c(this, n, t ? e.api : void 0);
      }
    ).asPromise(),
    new _(
      this,
      v,
      this.data.renameRepositoryAlias,
      [this],
      (t, e) => {
        c(this, m, t ? e.api : void 0);
      }
    ).asPromise()
  ]));
};
R = async function(t) {
  if (t.preventDefault(), !s(this, m)) throw new Error("Rename repository is not available");
  if (!this.data?.unique) throw new Error("Unique identifier is not available");
  const e = t.target;
  if (!e || !e.checkValidity()) return;
  const a = new FormData(e).get("name"), { data: r } = await s(this, m).rename(this.data.unique, a);
  r ? (this.value = {
    name: r.name,
    unique: r.unique
  }, this._submitModal()) : this._rejectModal();
};
u.styles = [
  A,
  M`
			#name {
				width: 100%;
			}
		`
];
w([
  U()
], u.prototype, "_name", 2);
u = w([
  x("umb-rename-modal")
], u);
const I = u;
export {
  u as UmbRenameModalElement,
  I as default
};
//# sourceMappingURL=rename-server-file-modal.element-Bm5IsErL.js.map
