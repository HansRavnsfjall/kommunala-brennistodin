import { b as F, y as p } from "./index.js";
import { html as v, state as E, customElement as b } from "@umbraco-cms/backoffice/external/lit";
import { UmbModalBaseElement as I } from "@umbraco-cms/backoffice/modal";
import { UmbTemporaryFileRepository as w } from "@umbraco-cms/backoffice/temporary-file";
import { UMB_ACTION_EVENT_CONTEXT as T } from "@umbraco-cms/backoffice/action";
import { tryExecute as $ } from "@umbraco-cms/backoffice/resources";
import { UMB_NOTIFICATION_CONTEXT as M } from "@umbraco-cms/backoffice/notification";
import { UmbRequestReloadChildrenOfEntityEvent as O } from "@umbraco-cms/backoffice/entity-action";
var g = Object.defineProperty, K = Object.getOwnPropertyDescriptor, _ = (t) => {
  throw TypeError(t);
}, h = (t, e, r, i) => {
  for (var o = i > 1 ? void 0 : i ? K(e, r) : e, a = t.length - 1, m; a >= 0; a--)
    (m = t[a]) && (o = (i ? m(e, r, o) : m(o)) || o);
  return i && o && g(e, r, o), o;
}, y = (t, e, r) => e.has(t) || _("Cannot " + r), C = (t, e, r) => (y(t, e, "read from private field"), r ? r.call(t) : e.get(t)), c = (t, e, r) => e.has(t) ? _("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), u = (t, e, r) => (y(t, e, "access private method"), r), n, s, d, f;
const N = "forms-form-import-modal";
let l = class extends I {
  constructor() {
    super(...arguments), c(this, s), c(this, n, new w(this));
  }
  render() {
    return v`
      <umb-body-layout .headline=${this.localize.term("general_import")}>
        <uui-box
          ><p>${this.localize.term("formImport_importInstruction1")}</p>
          <umb-input-upload-field
            @change=${u(this, s, f)}
            ?multiple=${!1}
            .fileExtensions=${["json"]}
            .keys=${this._temporaryFileKey ? [this._temporaryFileKey] : []}
          ></umb-input-upload-field>
          <p>${this.localize.term("formImport_importInstruction2")}</p></uui-box
        >
        <uui-button
          slot="actions"
          label=${this.localize.term("general_cancel")}
          @click="${this._rejectModal}"
        ></uui-button>
        <uui-button
          slot="actions"
          label=${this.localize.term("general_import")}
          look="primary"
          color="positive"
          @click=${u(this, s, d)}
        ></uui-button>
      </umb-body-layout>
    `;
  }
};
n = /* @__PURE__ */ new WeakMap();
s = /* @__PURE__ */ new WeakSet();
d = async function() {
  var o;
  if (!this._temporaryFileKey) throw new Error("file key is missing");
  const { data: t, error: e } = await $(
    this,
    F.postFormImport({
      body: {
        fileKey: this._temporaryFileKey,
        folderId: (o = this.data) == null ? void 0 : o.unique
      }
    }),
    {
      disableNotifications: !0
    }
  );
  if (e) {
    const a = await this.getContext(
      M
    );
    a == null || a.peek("danger", {
      data: { message: "Unable to import form." }
    }), this._rejectModal();
  }
  const r = new O({
    entityType: p,
    unique: null
  }), i = await this.getContext(T);
  i == null || i.dispatchEvent(r), history.pushState(
    {},
    "",
    `/umbraco/section/forms/workspace/${p}/edit/${t}`
  ), this._submitModal();
};
f = async function(t) {
  const e = t.target.value.temporaryFileId;
  !e && this._temporaryFileKey && await C(this, n).delete(this._temporaryFileKey), this._temporaryFileKey = e;
};
h([
  E()
], l.prototype, "_temporaryFileKey", 2);
l = h([
  b(N)
], l);
const A = l;
export {
  l as FormsFormImportModalElement,
  A as default
};
//# sourceMappingURL=form-import-modal.element.js.map
