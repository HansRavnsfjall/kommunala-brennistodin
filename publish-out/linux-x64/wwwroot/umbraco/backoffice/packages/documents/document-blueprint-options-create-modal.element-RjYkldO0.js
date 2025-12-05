import { p as v } from "./paths-BF32ZUyU.js";
import { UmbDocumentBlueprintFolderRepository as w } from "./document-blueprint-folder.repository-Dggs5KIG.js";
import { UmbTextStyles as C } from "@umbraco-cms/backoffice/style";
import { html as E, css as U, state as B, customElement as M } from "@umbraco-cms/backoffice/external/lit";
import { UmbModalBaseElement as T } from "@umbraco-cms/backoffice/modal";
import { UmbSelectionChangeEvent as z } from "@umbraco-cms/backoffice/event";
import { UmbCreateFolderEntityAction as D } from "@umbraco-cms/backoffice/tree";
var O = Object.defineProperty, S = Object.getOwnPropertyDescriptor, h = (e) => {
  throw TypeError(e);
}, _ = (e, t, a, r) => {
  for (var i = r > 1 ? void 0 : r ? S(t, a) : t, s = e.length - 1, c; s >= 0; s--)
    (c = e[s]) && (i = (r ? c(t, a, i) : c(i)) || i);
  return r && i && O(t, a, i), i;
}, p = (e, t, a) => t.has(e) || h("Cannot " + a), b = (e, t, a) => (p(e, t, "read from private field"), a ? a.call(e) : t.get(e)), u = (e, t, a) => t.has(e) ? h("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, a), x = (e, t, a, r) => (p(e, t, "write to private field"), t.set(e, a), a), d = (e, t, a) => (p(e, t, "access private method"), a), l, m, o, f, y;
let n = class extends T {
  constructor() {
    super(...arguments), u(this, o), u(this, l), u(this, m, new w(this));
  }
  async connectedCallback() {
    if (super.connectedCallback(), !this.data?.parent) throw new Error("A parent is required to create a folder");
    if (this.data.parent.unique) {
      const { data: e } = await b(this, m).requestByUnique(this.data.parent.unique.toString());
      this._parentName = e?.name ?? this.localize.term("general_unknown");
    } else
      this._parentName = this.localize.term("treeHeaders_contentBlueprints");
    x(this, l, new D(this, {
      unique: this.data.parent.unique,
      entityType: this.data.parent.entityType,
      meta: {
        icon: "icon-folder",
        label: this.localize.term("create_newFolder"),
        folderRepositoryAlias: v
      }
    }));
  }
  render() {
    return E`
			<umb-body-layout headline=${this.localize.term("actions_createblueprint")}>
				<uui-box headline=${this.localize.term("blueprints_createBlueprintFolderUnder", this._parentName)}>
					<uui-menu-item @click=${d(this, o, f)} label=${this.localize.term("create_newFolder") + "..."}>
						<uui-icon slot="icon" name="icon-folder"></uui-icon>
					</uui-menu-item>
				</uui-box>
				<uui-box headline=${this.localize.term("blueprints_createBlueprintItemUnder", this._parentName)}>
					<umb-localize key="create_createContentBlueprint">
						Select the Document Type you want to make a Document Blueprint for
					</umb-localize>
					<umb-tree
						alias="Umb.Tree.DocumentType"
						.props=${{
      hideTreeRoot: !0,
      selectableFilter: (e) => e.isElement == !1
    }}
						@selected=${d(this, o, y)}></umb-tree>
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
l = /* @__PURE__ */ new WeakMap();
m = /* @__PURE__ */ new WeakMap();
o = /* @__PURE__ */ new WeakSet();
f = async function(e) {
  e.stopPropagation(), b(this, l)?.execute().then(() => {
    this._submitModal();
  }).catch(() => {
  });
};
y = function(e) {
  e.stopPropagation();
  const t = e.target;
  this.value = { documentTypeUnique: t.getSelection()[0] }, this.modalContext?.dispatchEvent(new z()), this._submitModal();
};
n.styles = [
  C,
  U`
			uui-box:first-child {
				margin-bottom: var(--uui-size-6);
			}
		`
];
_([
  B()
], n.prototype, "_parentName", 2);
n = _([
  M("umb-document-blueprint-options-create-modal")
], n);
const R = n;
export {
  n as UmbDocumentBlueprintOptionsCreateModalElement,
  R as default
};
//# sourceMappingURL=document-blueprint-options-create-modal.element-RjYkldO0.js.map
