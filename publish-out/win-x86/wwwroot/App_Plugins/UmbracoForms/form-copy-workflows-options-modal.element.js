import { v as M, a3 as O } from "./index.js";
import "@umbraco-cms/backoffice/resources";
import "@umbraco-cms/backoffice/id";
import "@umbraco-cms/backoffice/repository";
import { when as f, html as n, unsafeHTML as q, css as T, state as F, customElement as A } from "@umbraco-cms/backoffice/external/lit";
import { UmbModalBaseElement as R } from "@umbraco-cms/backoffice/modal";
import { UMB_NOTIFICATION_CONTEXT as x } from "@umbraco-cms/backoffice/notification";
var D = Object.defineProperty, U = Object.getOwnPropertyDescriptor, v = (e) => {
  throw TypeError(e);
}, b = (e, t, o, c) => {
  for (var a = c > 1 ? void 0 : c ? U(t, o) : t, _ = e.length - 1, w; _ >= 0; _--)
    (w = e[_]) && (a = (c ? w(t, o, a) : w(a)) || a);
  return c && a && D(t, o, a), a;
}, W = (e, t, o) => t.has(e) || v("Cannot " + o), i = (e, t, o) => (W(e, t, "read from private field"), o ? o.call(e) : t.get(e)), p = (e, t, o) => t.has(e) ? v("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, o), $ = (e, t, o, c) => (W(e, t, "write to private field"), t.set(e, o), o), r = (e, t, o) => (W(e, t, "access private method"), o), s, u, m, l, y, k, C, g, E, z, S, d;
let h = class extends R {
  constructor() {
    super(), p(this, l), p(this, s), this._selectedWorkflows = [], p(this, u, new M(this)), p(this, m), this.consumeContext(x, (e) => {
      $(this, m, e);
    });
  }
  async connectedCallback() {
    var t;
    if (super.connectedCallback(), !((t = this.data) != null && t.unique)) return;
    const { data: e } = await i(this, u).requestByUnique(
      this.data.unique
    );
    e && ($(this, s, e), this._selectedWorkflows = r(this, l, y).call(this, e).map((o) => o.id), this.requestUpdate());
  }
  render() {
    return n` ${f(
      i(this, s),
      () => n`
        <umb-body-layout
          headline=${this.localize.term("formCopyWorkflows_title")}
        >
          <uui-box>
            <p>
              <b
                >${this.localize.term(
        "formCopyWorkflows_subtitle",
        i(this, s).name
      )}</b
              >
            </p>
            ${f(
        !r(this, l, k).call(this, i(this, s)),
        () => n`<p>
                  ${this.localize.term("formCopyWorkflows_noWorkflows")}
                </p>`
      )}
            ${f(
        r(this, l, k).call(this, i(this, s)),
        () => n`
                <p>
                  ${this.localize.term("formCopyWorkflows_selectedWorkflows")}
                </p>

                <uui-table>
                  <uui-table-head>
                    <uui-table-head-cell
                      >${this.localize.term(
          "formCopyWorkflows_stage"
        )}</uui-table-head-cell
                    >
                    <uui-table-head-cell
                      >${this.localize.term(
          "formEntries_workflowAuditName"
        )}</uui-table-head-cell
                    >
                    <uui-table-head-cell
                      >${this.localize.term(
          "formEntries_workflowAuditType"
        )}</uui-table-head-cell
                    >
                    <uui-table-head-cell
                      >${this.localize.term(
          "formCopyWorkflows_selected"
        )}?</uui-table-head-cell
                    >
                  </uui-table-head>

                  ${r(this, l, d).call(this, i(this, s).formWorkflows.onSubmit, "onSubmit")}
                  ${r(this, l, d).call(this, i(this, s).formWorkflows.onApprove, "onApprove")}
                  ${r(this, l, d).call(this, i(this, s).formWorkflows.onReject, "onReject")}
                </uui-table>

                ${f(
          this._destinationForm,
          () => n` <p>
                      ${q(
            this.localize.term(
              "formCopyWorkflows_selectedDestinationForm",
              this._destinationForm.name
            )
          )}
                      <small
                        >(<button
                          type="button"
                          @click=${r(this, l, z)}
                        >
                          ${this.localize.term(
            "formCopyWorkflows_selectAnotherForm"
          )}</button
                        >)</small
                      >
                    </p>`
        )}
                ${f(
          !this._destinationForm,
          () => n` <p>
                        ${this.localize.term(
            "formCopyWorkflows_destinationForm"
          )}
                      </p>
                      <umb-tree
                        id="CopyToFolder"
                        alias="${O}"
                        .props=${{
            hideTreeRoot: !0,
            selectionConfiguration: {
              multiple: !1
            },
            selectableFilter: (e) => !e.isFolder && e.unique !== i(this, s).unique
          }}
                        @selection-change=${r(this, l, E)}
                      ></umb-tree>`
        )}
              `
      )}
          </uui-box>
          <uui-button
            slot="actions"
            id="cancel"
            label=${this.localize.term("general_cancel")}
            @click=${this._rejectModal}
            >${this.localize.term("general_cancel")}</uui-button
          >
          <uui-button
            form="CopyForm"
            slot="actions"
            type="submit"
            label=${this.localize.term("general_copy")}
            look="primary"
            color="positive"
            @click=${r(this, l, S)}
            ?disabled=${!i(this, s) || !this._destinationForm || this._selectedWorkflows.length === 0}
          ></uui-button>
        </umb-body-layout>
      `
    )}`;
  }
};
s = /* @__PURE__ */ new WeakMap();
u = /* @__PURE__ */ new WeakMap();
m = /* @__PURE__ */ new WeakMap();
l = /* @__PURE__ */ new WeakSet();
y = function(e) {
  return e.formWorkflows.onSubmit.concat(e.formWorkflows.onApprove).concat(e.formWorkflows.onReject);
};
k = function(e) {
  return r(this, l, y).call(this, e).length > 0;
};
C = function(e) {
  return this._selectedWorkflows.includes(e);
};
g = function(e) {
  const t = this._selectedWorkflows.indexOf(e);
  t >= 0 ? this._selectedWorkflows.splice(t, 1) : this._selectedWorkflows.push(e), this.requestUpdate();
};
E = async function(e) {
  const o = e.target.getSelection();
  if (o.length > 0 && o[0] != i(this, s).id) {
    const c = o[0], { data: a } = await i(this, u).requestByUnique(c);
    a ? this._destinationForm = a : this._destinationForm = null;
  } else
    this._destinationForm = null;
  this.dispatchEvent(new CustomEvent("property-value-change"));
};
z = function() {
  this._destinationForm = null;
};
S = async function() {
  var t, o;
  if (!i(this, u))
    throw new Error("Repository is not available");
  if (!i(this, s)) throw new Error("Source form is not available");
  if (!this._destinationForm)
    throw new Error("Destination form is not available");
  const { error: e } = await i(this, u).copyFormWorkflows(
    i(this, s).unique,
    this._destinationForm.unique,
    this._selectedWorkflows
  );
  e ? ((o = i(this, m)) == null || o.peek("danger", {
    data: {
      message: this.localize.term("formCopyWorkflows_copiedWorkflowsError")
    }
  }), this._rejectModal()) : ((t = i(this, m)) == null || t.peek("positive", {
    data: {
      message: this.localize.term(
        "formCopyWorkflows_copiedWorkflowsSuccess"
      )
    }
  }), this._submitModal());
};
d = function(e, t) {
  return n` ${e.map(
    (o) => n`<uui-table-row>
          <uui-table-cell
            >${this.localize.term("formWorkflows_" + t)}</uui-table-cell
          >
          <uui-table-cell>${o.name}</uui-table-cell>
          <uui-table-cell>${o.workflowTypeName}</uui-table-cell>
          <uui-table-cell>
            <uui-toggle
              ?checked=${r(this, l, C).call(this, o.id)}
              @change=${() => r(this, l, g).call(this, o.id)}
            ></uui-toggle>
          </uui-table-cell>
        </uui-table-row>`
  )}`;
};
h.styles = [
  T`
      small a {
        text-decoration: underline;
        cursor: pointer;
      }
    `
];
b([
  F()
], h.prototype, "_selectedWorkflows", 2);
b([
  F()
], h.prototype, "_destinationForm", 2);
h = b([
  A("forms-form-copy-workflows-options-modal")
], h);
const G = h;
export {
  h as FormsFormCopyWorkflowsOptionsModalElement,
  G as default
};
//# sourceMappingURL=form-copy-workflows-options-modal.element.js.map
