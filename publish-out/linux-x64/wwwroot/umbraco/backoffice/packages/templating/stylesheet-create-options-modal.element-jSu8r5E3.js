import { j as y } from "./manifests-CkeJWkpV.js";
import "@umbraco-cms/backoffice/server-file-system";
import "@umbraco-cms/backoffice/external/backend-api";
import "@umbraco-cms/backoffice/resources";
import "@umbraco-cms/backoffice/id";
import "@umbraco-cms/backoffice/repository";
import { html as v, customElement as b } from "@umbraco-cms/backoffice/external/lit";
import { UmbModalBaseElement as w } from "@umbraco-cms/backoffice/modal";
import { UmbCreateFolderEntityAction as C } from "@umbraco-cms/backoffice/tree";
var E = Object.getOwnPropertyDescriptor, h = (e) => {
  throw TypeError(e);
}, S = (e, t, a, o) => {
  for (var r = o > 1 ? void 0 : o ? E(t, a) : t, s = e.length - 1, p; s >= 0; s--)
    (p = e[s]) && (r = p(r) || r);
  return r;
}, u = (e, t, a) => t.has(e) || h("Cannot " + a), O = (e, t, a) => (u(e, t, "read from private field"), t.get(e)), d = (e, t, a) => t.has(e) ? h("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, a), $ = (e, t, a, o) => (u(e, t, "write to private field"), t.set(e, a), a), l = (e, t, a) => (u(e, t, "access private method"), a), n, i, m, _, f;
let c = class extends w {
  constructor() {
    super(...arguments), d(this, i), d(this, n);
  }
  connectedCallback() {
    if (super.connectedCallback(), !this.data?.parent) throw new Error("A parent is required to create a folder");
    $(this, n, new C(this, {
      unique: this.data.parent.unique,
      entityType: this.data.parent.entityType,
      meta: {
        icon: "icon-folder",
        label: "New folder...",
        folderRepositoryAlias: y
      }
    }));
  }
  render() {
    return v`
			<umb-body-layout headline="Create Stylesheet">
				<uui-box>
					<!-- TODO: construct url -->
					<uui-menu-item
						href=${`${l(this, i, f).call(this)}/view/code`}
						label=${this.localize.term("create_newStyleSheetFile")}
						@click=${l(this, i, _)}>
						<uui-icon slot="icon" name="icon-palette"></uui-icon>
					</uui-menu-item>

					<uui-menu-item @click=${l(this, i, m)} label="${this.localize.term("create_newFolder")}...">
						<uui-icon slot="icon" name="icon-folder"></uui-icon>
					</uui-menu-item>
				</uui-box>

				<uui-button
					slot="actions"
					id="cancel"
					label=${this.localize.term("general_cancel")}
					@click=${this._rejectModal}></uui-button>
			</umb-body-layout>
		`;
  }
};
n = /* @__PURE__ */ new WeakMap();
i = /* @__PURE__ */ new WeakSet();
m = async function(e) {
  e.stopPropagation(), O(this, n)?.execute().then(() => {
    this._submitModal();
  }).catch(() => {
  });
};
_ = function() {
  this._submitModal();
};
f = function() {
  return `section/settings/workspace/stylesheet/create/parent/${this.data?.parent.entityType}/${this.data?.parent.unique || "null"}`;
};
c = S([
  b("umb-stylesheet-create-options-modal")
], c);
const D = c;
export {
  c as UmbStylesheetCreateOptionsModalElement,
  D as default
};
//# sourceMappingURL=stylesheet-create-options-modal.element-jSu8r5E3.js.map
