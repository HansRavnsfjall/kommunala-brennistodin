import { v as O, a0 as M, a1 as T, a2 as F, y as v } from "./index.js";
import "@umbraco-cms/backoffice/resources";
import "@umbraco-cms/backoffice/id";
import "@umbraco-cms/backoffice/repository";
import { html as _, state as R, customElement as y } from "@umbraco-cms/backoffice/external/lit";
import { UmbModalBaseElement as C, UMB_MODAL_MANAGER_CONTEXT as w } from "@umbraco-cms/backoffice/modal";
import { UMB_FOLDER_CREATE_MODAL as $ } from "@umbraco-cms/backoffice/tree";
import { UMB_ACTION_EVENT_CONTEXT as b } from "@umbraco-cms/backoffice/action";
import { UmbRequestReloadChildrenOfEntityEvent as A } from "@umbraco-cms/backoffice/entity-action";
var D = Object.defineProperty, g = Object.getOwnPropertyDescriptor, h = (e) => {
  throw TypeError(e);
}, d = (e, t, a, i) => {
  for (var o = i > 1 ? void 0 : i ? g(t, a) : t, n = e.length - 1, r; n >= 0; n--)
    (r = e[n]) && (o = (i ? r(t, a, o) : r(o)) || o);
  return i && o && D(t, a, o), o;
}, f = (e, t, a) => t.has(e) || h("Cannot " + a), N = (e, t, a) => (f(e, t, "read from private field"), a ? a.call(e) : t.get(e)), p = (e, t, a) => t.has(e) ? h("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, a), c = (e, t, a) => (f(e, t, "access private method"), a), u, s, E, m;
let l = class extends C {
  constructor() {
    super(...arguments), p(this, s), p(this, u, new O(this)), this._templates = [];
  }
  async connectedCallback() {
    super.connectedCallback();
    const { data: e } = await N(this, u).requestTemplates();
    e && (this._templates = e);
  }
  render() {
    return _`
      <umb-body-layout headline=${this.localize.term("formCreate_title")}>
        <uui-box>
          <uui-menu-item
            href=${c(this, s, m).call(this)}
            label=${this.localize.term("formCreate_newFormMenu")}
            @click=${this._submitModal}
          >
            <uui-icon slot="icon" name="icon-autofill"></uui-icon>
          </uui-menu-item>
          ${this._templates.map(
      (e) => _`<uui-menu-item
                href=${c(this, s, m).call(this, e)}
                label="New ${e.name}..."
                @click=${this._submitModal}
              >
                <uui-icon slot="icon" name="icon-autofill"></uui-icon>
              </uui-menu-item>`
    )}
          <uui-menu-item
            @click=${c(this, s, E)}
            label=${this.localize.term("formCreate_newFolderMenu")}
          >
            <uui-icon slot="icon" name="icon-folder"></uui-icon>
          </uui-menu-item>
        </uui-box>
        <uui-button
          slot="actions"
          id="cancel"
          label=${this.localize.term("general_cancel")}
          @click="${this._rejectModal}"
          >${this.localize.term("general_cancel")}</uui-button
        >
      </umb-body-layout>
    `;
  }
};
u = /* @__PURE__ */ new WeakMap();
s = /* @__PURE__ */ new WeakSet();
E = async function(e) {
  var o;
  if (e.stopPropagation(), !((o = this.data) != null && o.parent))
    throw new Error("A parent is required to create a form");
  const t = await this.getContext(w);
  if (!t) throw new Error("Modal manager not found");
  const a = t.open(
    this,
    $,
    {
      data: {
        folderRepositoryAlias: M,
        parent: this.data.parent
      }
    }
  ), i = this.data.parent;
  a == null || a.onSubmit().then(async () => {
    this._submitModal();
    const n = new A({
      entityType: i.unique ? T : F,
      unique: i.unique
    }), r = await this.getContext(b);
    r == null || r.dispatchEvent(n);
  }).catch(() => {
  });
};
m = function(e) {
  var a, i;
  let t = `section/forms/workspace/${v}/create/parent/${(a = this.data) == null ? void 0 : a.parent.entityType}/${((i = this.data) == null ? void 0 : i.parent.unique) || "null"}`;
  return e && (t = t.replace("/create/", "/createFromTemplate/") + "/" + e.alias), t;
};
d([
  R()
], l.prototype, "_templates", 2);
l = d([
  y("forms-form-create-options-modal")
], l);
const U = l;
export {
  l as FormsFormCreateOptionsModalElement,
  U as default
};
//# sourceMappingURL=form-create-options-modal.element.js.map
