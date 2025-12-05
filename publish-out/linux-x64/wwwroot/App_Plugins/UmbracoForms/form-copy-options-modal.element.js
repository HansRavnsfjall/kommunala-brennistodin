import { v as k, a3 as M, a1 as g, a2 as R } from "./index.js";
import "@umbraco-cms/backoffice/resources";
import "@umbraco-cms/backoffice/id";
import "@umbraco-cms/backoffice/repository";
import { html as $, customElement as z } from "@umbraco-cms/backoffice/external/lit";
import { UmbModalBaseElement as S } from "@umbraco-cms/backoffice/modal";
import { UmbRequestReloadChildrenOfEntityEvent as W } from "@umbraco-cms/backoffice/entity-action";
import { UMB_ACTION_EVENT_CONTEXT as q } from "@umbraco-cms/backoffice/action";
import { UMB_NOTIFICATION_CONTEXT as x } from "@umbraco-cms/backoffice/notification";
var D = Object.getOwnPropertyDescriptor, b = (e) => {
  throw TypeError(e);
}, I = (e, o, t, i) => {
  for (var a = i > 1 ? void 0 : i ? D(o, t) : o, l = e.length - 1, p; l >= 0; l--)
    (p = e[l]) && (a = p(a) || a);
  return a;
}, _ = (e, o, t) => o.has(e) || b("Cannot " + t), r = (e, o, t) => (_(e, o, "read from private field"), t ? t.call(e) : o.get(e)), u = (e, o, t) => o.has(e) ? b("Cannot add the same private member more than once") : o instanceof WeakSet ? o.add(e) : o.set(e, t), F = (e, o, t, i) => (_(e, o, "write to private field"), o.set(e, t), t), U = (e, o, t) => (_(e, o, "access private method"), t), c, n, m, y, T;
let h = class extends S {
  constructor() {
    super(), u(this, y), u(this, c), u(this, n, new k(this)), u(this, m), this.consumeContext(x, (e) => {
      F(this, m, e);
    });
  }
  async connectedCallback() {
    var o;
    if (super.connectedCallback(), !((o = this.data) != null && o.unique)) return;
    const { data: e } = await r(this, n).requestByUnique(
      this.data.unique
    );
    F(this, c, e), this.requestUpdate();
  }
  render() {
    var e;
    return $`
      <umb-body-layout headline=${this.localize.term("formCopy_modalHeadline")}>
        <uui-box>
          <p>Copying form <b>${(e = r(this, c)) == null ? void 0 : e.name}</b></p>
          <uui-form>
            <form id="CopyForm" @submit="${U(this, y, T)}">
              <uui-form-layout-item>
                <uui-label id="NewNameLabel" for="NewName" slot="label"
                  >${this.localize.term("formCopy_enterName")}</uui-label
                >
                <uui-input
                  type="text"
                  id="NewName"
                  name="NewName"
                  placeholder=${this.localize.term("formCopy_enterNewName")}
                ></uui-input>
              </uui-form-layout-item>
              <uui-form-layout-item>
                <uui-checkbox
                  name="CopyWorkflows"
                  label=${this.localize.term("formCopy_alsoCopyWorkflows")}
                  >${this.localize.term(
      "formCopy_alsoCopyWorkflows"
    )}</uui-checkbox
                >
                <div>
                  <small
                    >${this.localize.term(
      "formCopy_mandatoryWorkflowsCopied"
    )}</small
                  >
                </div>
              </uui-form-layout-item>
              <uui-form-layout-item>
                <umb-tree
                  id="CopyToFolder"
                  alias="${M}"
                  .props=${{
      hideTreeRoot: !1,
      selectionConfiguration: {
        multiple: !1
      },
      selectableFilter: (o) => o.isFolder
    }}
                ></umb-tree>
              </uui-form-layout-item>
            </form>
          </uui-form>
        </uui-box>
        <uui-button
          slot="actions"
          id="cancel"
          label=${this.localize.term("general_cancel")}
          @click="${this._rejectModal}"
          >${this.localize.term("general_cancel")}</uui-button
        >
        <uui-button
          form="CopyForm"
          slot="actions"
          type="submit"
          label=${this.localize.term("general_copy")}
          look="primary"
          color="positive"
        ></uui-button>
      </umb-body-layout>
    `;
  }
};
c = /* @__PURE__ */ new WeakMap();
n = /* @__PURE__ */ new WeakMap();
m = /* @__PURE__ */ new WeakMap();
y = /* @__PURE__ */ new WeakSet();
T = async function(e) {
  var C, w, v, E;
  if (e.preventDefault(), !r(this, n))
    throw new Error("Repository is not available");
  if (!((C = this.data) != null && C.unique))
    throw new Error("Unique identifier is not available");
  const o = e.target;
  if (!o || !o.checkValidity()) return;
  const i = new FormData(o), a = i.get("NewName"), l = i.get("CopyWorkflows") === "on", d = ((w = this.shadowRoot) == null ? void 0 : w.getElementById(
    "CopyToFolder"
  )).getSelection()[0], s = d === void 0 ? null : d === null ? "-1" : d, { error: N } = await r(this, n).copyForm(
    this.data.unique,
    l,
    a,
    s
  );
  if (N)
    (E = r(this, m)) == null || E.peek("danger", {
      data: { message: this.localize.term("formCopy_copyError") }
    }), this._rejectModal();
  else {
    const O = new W({
      entityType: s !== "-1" && s ? g : R,
      unique: s === "-1" ? null : s || null
    }), f = await this.getContext(q);
    f == null || f.dispatchEvent(O), (v = r(this, m)) == null || v.peek("positive", {
      data: { message: this.localize.term("formCopy_copySuccess") }
    }), this._submitModal();
  }
};
h = I([
  z("forms-form-copy-options-modal")
], h);
const J = h;
export {
  h as FormsFormCopyOptionsModalElement,
  J as default
};
//# sourceMappingURL=form-copy-options-modal.element.js.map
