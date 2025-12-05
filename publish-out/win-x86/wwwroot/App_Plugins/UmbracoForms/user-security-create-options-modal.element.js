import { W as T, V as C, a7 as $ } from "./index.js";
import "@umbraco-cms/backoffice/id";
import "@umbraco-cms/backoffice/resources";
import "@umbraco-cms/backoffice/repository";
import { when as m, html as c, customElement as R } from "@umbraco-cms/backoffice/external/lit";
import { UmbModalBaseElement as g } from "@umbraco-cms/backoffice/modal";
import { UMB_ACTION_EVENT_CONTEXT as M } from "@umbraco-cms/backoffice/action";
import { UmbRequestReloadChildrenOfEntityEvent as O } from "@umbraco-cms/backoffice/entity-action";
var b = Object.getOwnPropertyDescriptor, y = (e) => {
  throw TypeError(e);
}, k = (e, t, s, u) => {
  for (var l = u > 1 ? void 0 : u ? b(t, s) : t, h = e.length - 1, f; h >= 0; h--)
    (f = e[h]) && (l = f(l) || l);
  return l;
}, _ = (e, t, s) => t.has(e) || y("Cannot " + s), a = (e, t, s) => (_(e, t, "read from private field"), s ? s.call(e) : t.get(e)), d = (e, t, s) => t.has(e) ? y("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, s), I = (e, t, s, u) => (_(e, t, "write to private field"), t.set(e, s), s), o = (e, t, s) => (_(e, t, "access private method"), s), r, n, i, v, E, S, U, w;
const F = "forms-user-security-create-options-modal";
let p = class extends g {
  constructor() {
    super(), d(this, i), d(this, r, []), d(this, n, new T(this)), o(this, i, v).call(this);
  }
  render() {
    return c`
      <umb-body-layout
        headline=${this.localize.term("formSecurity_createTitle")}
      >
        <uui-box>
          <p>${this.localize.term("formSecurity_createUserRecordNote")}</p>
          ${m(
      a(this, r).length === 0,
      () => c`<p>
                ${this.localize.term("formSecurity_allUsersHaveRecords")}
              </p>`
    )}
          ${m(
      a(this, r).length > 0,
      () => c`
              <uui-select
                id="users"
                label="User"
                .options=${a(this, r).map((e) => ({
        name: e.name,
        value: e.id
      }))}
              ></uui-select>
            `
    )}
        </uui-box>
        <uui-button
          slot="actions"
          label=${this.localize.term("general_cancel")}
          @click=${this._rejectModal}
        ></uui-button>
        ${m(
      a(this, r).length > 0,
      () => c`
            <uui-button
              slot="actions"
              label=${this.localize.term("general_create")}
              look="primary"
              color="positive"
              @click=${o(this, i, E)}
            ></uui-button>
          `
    )}
      </umb-body-layout>
    `;
  }
};
r = /* @__PURE__ */ new WeakMap();
n = /* @__PURE__ */ new WeakMap();
i = /* @__PURE__ */ new WeakSet();
v = async function() {
  const { data: e } = await a(this, n).requestUsersToAssign();
  I(this, r, e), this.requestUpdate();
};
E = async function() {
  const e = o(this, i, S).call(this);
  await o(this, i, U).call(this, e), o(this, i, w).call(this), this._submitModal(), history.pushState(
    {},
    "",
    `/umbraco/section/forms/workspace/${C}/edit/${e}/view/permissions`
  );
};
S = function() {
  var t;
  return ((t = this.shadowRoot) == null ? void 0 : t.getElementById(
    "users"
  )).value.toString();
};
U = async function(e) {
  const { data: t } = await a(this, n).createScaffold({ unique: e });
  t && await a(this, n).create(t, null);
};
w = async function() {
  const e = new O({
    entityType: $,
    unique: "207c2294-970b-4e1f-82fd-ae8996ef171d"
    // Matches Umbraco.Forms.Web.Controllers.ManagementApi.Security.Tree.SecurityTreeControllerBase.UsersFolderId
  }), t = await this.getContext(M);
  t == null || t.dispatchEvent(e);
};
p = k([
  R(F)
], p);
const A = p;
export {
  p as FormsUserSecurityCreateOptionsModalElement,
  A as default
};
//# sourceMappingURL=user-security-create-options-modal.element.js.map
