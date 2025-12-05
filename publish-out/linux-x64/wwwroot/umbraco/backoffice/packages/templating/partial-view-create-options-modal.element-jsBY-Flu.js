import { i as v, a as b } from "./partial-view-workspace.context-token-DmMOFZmM.js";
import "@umbraco-cms/backoffice/workspace";
import { html as y, customElement as C } from "@umbraco-cms/backoffice/external/lit";
import { UmbModalBaseElement as E, umbOpenModal as M } from "@umbraco-cms/backoffice/modal";
import { UmbCreateFolderEntityAction as P } from "@umbraco-cms/backoffice/tree";
var A = Object.getOwnPropertyDescriptor, d = (t) => {
  throw TypeError(t);
}, O = (t, e, a, l) => {
  for (var r = l > 1 ? void 0 : l ? A(e, a) : e, c = t.length - 1, m; c >= 0; c--)
    (m = t[c]) && (r = m(r) || r);
  return r;
}, u = (t, e, a) => e.has(t) || d("Cannot " + a), k = (t, e, a) => (u(t, e, "read from private field"), a ? a.call(t) : e.get(t)), p = (t, e, a) => e.has(t) ? d("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, a), $ = (t, e, a, l) => (u(t, e, "write to private field"), e.set(t, a), a), n = (t, e, a) => (u(t, e, "access private method"), a), o, i, h, _, f, w;
let s = class extends E {
  constructor() {
    super(...arguments), p(this, i), p(this, o);
  }
  connectedCallback() {
    if (super.connectedCallback(), !this.data?.parent) throw new Error("A parent unique is required to create a folder");
    $(this, o, new P(this, {
      unique: this.data.parent.unique,
      entityType: this.data.parent.entityType,
      meta: {
        icon: "icon-folder",
        label: this.localize.term("create_newFolder") + "...",
        folderRepositoryAlias: v
      }
    }));
  }
  render() {
    return y`
			<umb-body-layout headline="Create Partial View">
				<uui-box>
					<!-- TODO: construct url -->
					<uui-menu-item
						href=${n(this, i, w).call(this)}
						label=${this.localize.term("create_newEmptyPartialView")}
						@click=${n(this, i, f)}>
						<uui-icon slot="icon" name="icon-document-html"></uui-icon>
					</uui-menu-item>

					<uui-menu-item
						@click=${n(this, i, _)}
						label="${this.localize.term("create_newPartialViewFromSnippet")}...">
						<uui-icon slot="icon" name="icon-document-html"></uui-icon>
					</uui-menu-item>

					<uui-menu-item @click=${n(this, i, h)} label="${this.localize.term("create_newFolder")}...">
						<uui-icon slot="icon" name="icon-folder"></uui-icon>
					</uui-menu-item>
				</uui-box>

				<uui-button
					slot="actions"
					id="cancel"
					label=${this.localize.term("buttons_confirmActionCancel")}
					@click="${this._rejectModal}"></uui-button>
			</umb-body-layout>
		`;
  }
};
o = /* @__PURE__ */ new WeakMap();
i = /* @__PURE__ */ new WeakSet();
h = async function(t) {
  t.stopPropagation(), await k(this, o)?.execute().then(() => this._submitModal()).catch(() => {
  });
};
_ = async function(t) {
  if (t.stopPropagation(), !this.data?.parent) throw new Error("A parent is required to create a folder");
  M(this, b, {
    data: {
      parent: this.data.parent
    }
  }).then(() => this._submitModal()).catch(() => {
  });
};
f = function() {
  this._submitModal();
};
w = function() {
  return `section/settings/workspace/partial-view/create/parent/${this.data?.parent.entityType}/${this.data?.parent.unique || "null"}`;
};
s = O([
  C("umb-partial-view-create-options-modal")
], s);
const I = s;
export {
  s as UmbPartialViewCreateOptionsModalElement,
  I as default
};
//# sourceMappingURL=partial-view-create-options-modal.element-jsBY-Flu.js.map
