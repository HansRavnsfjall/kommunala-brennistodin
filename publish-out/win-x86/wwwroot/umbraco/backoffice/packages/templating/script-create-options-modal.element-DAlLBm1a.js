import { n as v } from "./manifests-CH0eoEje.js";
import "@umbraco-cms/backoffice/server-file-system";
import "@umbraco-cms/backoffice/external/backend-api";
import "@umbraco-cms/backoffice/resources";
import "@umbraco-cms/backoffice/id";
import "@umbraco-cms/backoffice/repository";
import { html as y, customElement as C } from "@umbraco-cms/backoffice/external/lit";
import { UmbModalBaseElement as b } from "@umbraco-cms/backoffice/modal";
import { UmbCreateFolderEntityAction as w } from "@umbraco-cms/backoffice/tree";
var E = Object.getOwnPropertyDescriptor, m = (t) => {
  throw TypeError(t);
}, O = (t, e, i, o) => {
  for (var a = o > 1 ? void 0 : o ? E(e, i) : e, s = t.length - 1, p; s >= 0; s--)
    (p = t[s]) && (a = p(a) || a);
  return a;
}, u = (t, e, i) => e.has(t) || m("Cannot " + i), k = (t, e, i) => (u(t, e, "read from private field"), e.get(t)), d = (t, e, i) => e.has(t) ? m("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), M = (t, e, i, o) => (u(t, e, "write to private field"), e.set(t, i), i), c = (t, e, i) => (u(t, e, "access private method"), i), n, r, h, _, f;
let l = class extends b {
  constructor() {
    super(...arguments), d(this, r), d(this, n);
  }
  connectedCallback() {
    if (super.connectedCallback(), !this.data?.parent) throw new Error("A parent is required to create a folder");
    M(this, n, new w(this, {
      unique: this.data.parent.unique,
      entityType: this.data.parent.entityType,
      meta: {
        icon: "icon-folder",
        label: "New folder...",
        folderRepositoryAlias: v
      }
    }));
  }
  render() {
    return y`
			<umb-body-layout headline="Create Script">
				<uui-box>
					<!-- TODO: construct url -->
					<uui-menu-item href=${c(this, r, f).call(this)} label="New Javascript file" @click=${c(this, r, _)}>
						<uui-icon slot="icon" name="icon-document-js"></uui-icon>}
					</uui-menu-item>

					<uui-menu-item @click=${c(this, r, h)} label="New Folder...">
						<uui-icon slot="icon" name="icon-folder"></uui-icon>}
					</uui-menu-item>
				</uui-box>

				<uui-button slot="actions" id="cancel" label="Cancel" @click="${this._rejectModal}"></uui-button>
			</umb-body-layout>
		`;
  }
};
n = /* @__PURE__ */ new WeakMap();
r = /* @__PURE__ */ new WeakSet();
h = async function(t) {
  t.stopPropagation(), k(this, n)?.execute().then(() => {
    this._submitModal();
  }).catch(() => {
  });
};
_ = function() {
  this._submitModal();
};
f = function() {
  return `section/settings/workspace/script/create/parent/${this.data?.parent.entityType}/${this.data?.parent.unique || "null"}`;
};
l = O([
  C("umb-script-create-options-modal")
], l);
const R = l;
export {
  l as UmbScriptCreateOptionsModalElement,
  R as default
};
//# sourceMappingURL=script-create-options-modal.element-DAlLBm1a.js.map
