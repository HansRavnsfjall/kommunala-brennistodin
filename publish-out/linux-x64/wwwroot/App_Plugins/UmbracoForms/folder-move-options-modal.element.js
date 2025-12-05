import { a4 as E, a3 as b, a1 as y, a2 as O } from "./index.js";
import "@umbraco-cms/backoffice/id";
import "@umbraco-cms/backoffice/resources";
import "@umbraco-cms/backoffice/repository";
import { unsafeHTML as w, html as R, state as p, customElement as S } from "@umbraco-cms/backoffice/external/lit";
import { UmbModalBaseElement as g } from "@umbraco-cms/backoffice/modal";
import { UmbRequestReloadChildrenOfEntityEvent as C } from "@umbraco-cms/backoffice/entity-action";
import { UMB_ACTION_EVENT_CONTEXT as $ } from "@umbraco-cms/backoffice/action";
var q = Object.defineProperty, D = Object.getOwnPropertyDescriptor, v = (e) => {
  throw TypeError(e);
}, f = (e, t, o, a) => {
  for (var i = a > 1 ? void 0 : a ? D(t, o) : t, l = e.length - 1, n; l >= 0; l--)
    (n = e[l]) && (i = (a ? n(t, o, i) : n(i)) || i);
  return a && i && q(t, o, i), i;
}, M = (e, t, o) => t.has(e) || v("Cannot " + o), d = (e, t, o) => (M(e, t, "read from private field"), o ? o.call(e) : t.get(e)), _ = (e, t, o) => t.has(e) ? v("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, o), s = (e, t, o) => (M(e, t, "access private method"), o), u, r, F, h, T, m;
let c = class extends g {
  constructor() {
    super(...arguments), _(this, r), _(this, u, new E(this)), this._canSubmit = !1;
  }
  async connectedCallback() {
    var t;
    if (super.connectedCallback(), !((t = this.data) != null && t.unique)) return;
    const e = await d(this, u).requestByUnique(this.data.unique);
    this._folderToMove = e.data;
  }
  render() {
    var e;
    return R`
      <umb-body-layout
        headline=${this.localize.term("formMove_folderMoveModalHeadline")}
      >
        <uui-box>
          <p>
            ${w(
      this.localize.term("formMove_title", (e = this._folderToMove) == null ? void 0 : e.name)
    )}
          </p>
          <uui-form>
            <form id="MoveFolder" @submit=${s(this, r, T)}>
              <uui-form-layout-item>
                <umb-tree
                  id="MoveToFolder"
                  alias=${b}
                  .props=${{
      hideTreeRoot: !1,
      selectionConfiguration: {
        multiple: !1
      },
      selectableFilter: (t) => t.isFolder
    }}
                  @selection-change=${s(this, r, F)}
                ></umb-tree>
              </uui-form-layout-item>
            </form>
          </uui-form>
        </uui-box>
        <uui-button
          slot="actions"
          label=${this.localize.term("general_cancel")}
          @click=${this._rejectModal}
          >${this.localize.term("general_cancel")}</uui-button
        >
        <uui-button
          form="MoveFolder"
          ?disabled=${!this._canSubmit}
          slot="actions"
          type="submit"
          label="Move"
          look="primary"
          color="positive"
        ></uui-button>
      </umb-body-layout>
    `;
  }
};
u = /* @__PURE__ */ new WeakMap();
r = /* @__PURE__ */ new WeakSet();
F = function() {
  const e = s(this, r, h).call(this);
  this._canSubmit = e !== void 0;
};
h = function() {
  var t;
  return ((t = this.shadowRoot) == null ? void 0 : t.getElementById(
    "MoveToFolder"
  )).getSelection()[0];
};
T = async function(e) {
  var l;
  if (e.preventDefault(), !d(this, u))
    throw new Error("Repository is not available");
  if (!((l = this.data) != null && l.unique))
    throw new Error("Unique identifier is not available");
  const t = e.target;
  if (!t || !t.checkValidity()) return;
  const a = s(this, r, h).call(this), { error: i } = await d(this, u).moveFolder(
    this.data.unique,
    a
  );
  if (i)
    this._rejectModal();
  else {
    const n = this._folderToMove.parentUnique;
    await s(this, r, m).call(this, n), await s(this, r, m).call(this, a), this._submitModal();
  }
};
m = async function(e) {
  const t = new C({
    entityType: e ? y : O,
    unique: e || null
  }), o = await this.getContext($);
  o == null || o.dispatchEvent(t);
};
f([
  p()
], c.prototype, "_folderToMove", 2);
f([
  p()
], c.prototype, "_canSubmit", 2);
c = f([
  S("forms-folder-move-options-modal")
], c);
const I = c;
export {
  c as FormsFolderMoveOptionsModalElement,
  I as default
};
//# sourceMappingURL=folder-move-options-modal.element.js.map
