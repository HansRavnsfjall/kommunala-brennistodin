import { v as b, a3 as E, a1 as y, a2 as O } from "./index.js";
import "@umbraco-cms/backoffice/resources";
import "@umbraco-cms/backoffice/id";
import "@umbraco-cms/backoffice/repository";
import { unsafeHTML as w, html as R, state as v, customElement as S } from "@umbraco-cms/backoffice/external/lit";
import { UmbModalBaseElement as $ } from "@umbraco-cms/backoffice/modal";
import { UmbRequestReloadChildrenOfEntityEvent as g } from "@umbraco-cms/backoffice/entity-action";
import { UMB_ACTION_EVENT_CONTEXT as C } from "@umbraco-cms/backoffice/action";
var q = Object.defineProperty, D = Object.getOwnPropertyDescriptor, p = (e) => {
  throw TypeError(e);
}, h = (e, t, o, r) => {
  for (var i = r > 1 ? void 0 : r ? D(t, o) : t, s = e.length - 1, n; s >= 0; s--)
    (n = e[s]) && (i = (r ? n(t, o, i) : n(i)) || i);
  return r && i && q(t, o, i), i;
}, M = (e, t, o) => t.has(e) || p("Cannot " + o), c = (e, t, o) => (M(e, t, "read from private field"), o ? o.call(e) : t.get(e)), _ = (e, t, o) => t.has(e) ? p("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, o), l = (e, t, o) => (M(e, t, "access private method"), o), m, a, F, f, T, d;
let u = class extends $ {
  constructor() {
    super(...arguments), _(this, a), _(this, m, new b(this)), this._canSubmit = !1;
  }
  async connectedCallback() {
    var t;
    if (super.connectedCallback(), !((t = this.data) != null && t.unique)) return;
    const { data: e } = await c(this, m).requestByUnique(
      this.data.unique
    );
    this._formToMove = e;
  }
  render() {
    var e;
    return R`
      <umb-body-layout
        headline=${this.localize.term("formMove_formMoveModalHeadline")}
      >
        <uui-box>
          <p>
            ${w(
      this.localize.term("formMove_title", (e = this._formToMove) == null ? void 0 : e.name)
    )}
          </p>
          <uui-form>
            <form id="MoveForm" @submit="${l(this, a, T)}">
              <uui-form-layout-item>
                <umb-tree
                  id="MoveToFolder"
                  alias="${E}"
                  .props=${{
      hideTreeRoot: !1,
      selectionConfiguration: {
        multiple: !1
      },
      selectableFilter: (t) => t.isFolder
    }}
                  @selection-change=${l(this, a, F)}
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
          form="MoveForm"
          ?disabled=${!this._canSubmit}
          slot="actions"
          type="submit"
          label=${this.localize.term("formMove_moveButtonLabel")}
          look="primary"
          color="positive"
        ></uui-button>
      </umb-body-layout>
    `;
  }
};
m = /* @__PURE__ */ new WeakMap();
a = /* @__PURE__ */ new WeakSet();
F = function() {
  const e = l(this, a, f).call(this);
  this._canSubmit = e !== void 0;
};
f = function() {
  var t;
  return ((t = this.shadowRoot) == null ? void 0 : t.getElementById(
    "MoveToFolder"
  )).getSelection()[0];
};
T = async function(e) {
  var s, n;
  if (e.preventDefault(), !c(this, m))
    throw new Error("Repository is not available");
  if (!((s = this.data) != null && s.unique))
    throw new Error("Unique identifier is not available");
  const t = e.target;
  if (!t || !t.checkValidity()) return;
  const r = l(this, a, f).call(this), { error: i } = await c(this, m).moveForm(
    this.data.unique,
    r
  );
  i ? this._rejectModal() : (await l(this, a, d).call(this, (n = this._formToMove) == null ? void 0 : n.parentUnique), await l(this, a, d).call(this, r), this._submitModal());
};
d = async function(e) {
  const t = new g({
    entityType: e ? y : O,
    unique: e
  }), o = await this.getContext(C);
  o == null || o.dispatchEvent(t);
};
h([
  v()
], u.prototype, "_formToMove", 2);
h([
  v()
], u.prototype, "_canSubmit", 2);
u = h([
  S("forms-form-move-options-modal")
], u);
const I = u;
export {
  u as FormsFormMoveOptionsModalElement,
  I as default
};
//# sourceMappingURL=form-move-options-modal.element.js.map
