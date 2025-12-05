import { c as ae, d as ue, e as q, f as ne, R as ce } from "./index.js";
import { tryExecute as de } from "@umbraco-cms/backoffice/resources";
import "@umbraco-cms/backoffice/class-api";
import "@umbraco-cms/backoffice/router";
import "@umbraco-cms/backoffice/external/rxjs";
import { E as he } from "./entry-render-helper.class.js";
import { repeat as me, when as v, html as n, unsafeHTML as fe, css as pe, state as be, customElement as ve } from "@umbraco-cms/backoffice/external/lit";
import { UmbModalBaseElement as _e, umbConfirmModal as ye } from "@umbraco-cms/backoffice/modal";
import { UMB_NOTIFICATION_CONTEXT as we } from "@umbraco-cms/backoffice/notification";
var ge = Object.defineProperty, Ee = Object.getOwnPropertyDescriptor, T = (e) => {
  throw TypeError(e);
}, W = (e, t, i, l) => {
  for (var s = l > 1 ? void 0 : l ? Ee(t, i) : t, a = e.length - 1, u; a >= 0; a--)
    (u = e[a]) && (s = (l ? u(t, i, s) : u(s)) || s);
  return l && s && ge(t, i, s), s;
}, z = (e, t, i) => t.has(e) || T("Cannot " + i), c = (e, t, i) => (z(e, t, "read from private field"), i ? i.call(e) : t.get(e)), p = (e, t, i) => t.has(e) ? T("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), h = (e, t, i, l) => (z(e, t, "write to private field"), t.set(e, i), i), r = (e, t, i) => (z(e, t, "access private method"), i), f, g, E, _, b, S, o, U, B, N, j, H, w, $, D, G, X, K, C, y, P, I, J, Q, Y, x, Z, ee, te, R, ie, le, oe, re, se;
const $e = "form-entry-details-modal";
let k = class extends _e {
  constructor() {
    super(), p(this, o), p(this, f), p(this, g, []), p(this, E, []), this._editModeActive = !1, p(this, _, []), p(this, b, {}), p(this, S), this.consumeContext(ae, (e) => {
      h(this, f, e);
    }), this.consumeContext(ue, (e) => {
      e && this.observe(e.userSecurity, (t) => {
        h(this, S, t);
      });
    });
  }
  async connectedCallback() {
    super.connectedCallback(), await r(this, o, te).call(this), await r(this, o, ie).call(this);
  }
  render() {
    return n`<umb-body-layout
      headline=${this.localize.term("formEntries_entryDetails")}
    >
      <uui-box
        headline=${this.localize.term("formEntries_formSubmissionHeadline")}
      >
        <umb-property-dataset
          id="formSubmissionFields"
          .value=${r(this, o, B).call(this)}
        >
          ${me(
      r(this, o, U).call(this),
      (e) => e.fieldId,
      (e) => n`<umb-property
                  .label=${r(this, o, G).call(this, e) ?? ""}
                  alias=${e.fieldId}
                  .config=${r(this, o, K).call(this, e)}
                  property-editor-ui-alias="${this._editModeActive ? r(this, o, X).call(this, e) ?? "Umb.PropertyEditorUi.Label" : "Umb.PropertyEditorUi.Label"}"
                >
                </umb-property>
                ${v(
        r(this, o, J).call(this, e.fieldId),
        () => n`<div class="validation-error">
                      ${r(this, o, Q).call(this, e.fieldId).map(
          (t) => n`<div>${t}</div>`
        )}
                    </div>`
      )} `
    )}
        </umb-property-dataset>
        ${r(this, o, se).call(this)}
      </uui-box>

      <uui-box headline=${this.localize.term("general_general")}>
        <umb-property-layout
          label=${this.localize.term("formEntries_submittedOn")}
        >
          <div slot="editor">${this.value.created.toLocaleString()}</div>
        </umb-property-layout>
        ${v(
      this.value.updated !== this.value.created,
      () => n`<umb-property-layout
              label=${this.localize.term("formEntries_updatedOn")}
            >
              <div slot="editor">${this.value.updated.toLocaleString()}</div>
            </umb-property-layout>`
    )}
        ${v(
      this.value.pageName && this.value.pageName.length > 0,
      () => n`<umb-property-layout
              label=${this.localize.term("formEntries_fromPage")}
            >
              <div slot="editor" id="document">
                <span>${this.value.pageName}</span>
                <uui-button
                  look="primary"
                  color="default"
                  @click=${r(this, o, oe)}
                  label=${this.localize.term("formEntries_goToDocument")}
                ></uui-button>
              </div>
            </umb-property-layout>`
    )}
        ${r(this, o, re).call(this)}

        <umb-property-layout label=${this.localize.term("formEntries_state")}>
          <div slot="editor">${this.value.state}</div>
        </umb-property-layout>
        <umb-property-layout label=${this.localize.term("general_id")}>
          <div slot="editor">${this.value.id}</div>
        </umb-property-layout>
        <umb-property-layout
          label=${this.localize.term("formEntries_uniqueId")}
        >
          <div slot="editor">${this.value.unique}</div>
        </umb-property-layout>
      </uui-box>

      ${v(
      c(this, g).length > 0,
      () => n`<uui-box
            headline=${this.localize.term("formEntries_workflowAudit")}
          >
            <uui-table>
              <uui-table-head>
                <uui-table-head-cell>
                  ${this.localize.term("formEntries_workflowAuditName")}
                </uui-table-head-cell>
                <uui-table-head-cell>
                  ${this.localize.term("formEntries_workflowAuditType")}
                </uui-table-head-cell>
                <uui-table-head-cell>
                  ${this.localize.term("formEntries_workflowAuditExecutedOn")}
                </uui-table-head-cell>
                <uui-table-head-cell>
                  ${this.localize.term(
        "formEntries_workflowAuditExecutionStage"
      )}
                </uui-table-head-cell>
                <uui-table-head-cell>
                  ${this.localize.term("formEntries_workflowAuditResult")}
                </uui-table-head-cell>
                <uui-table-head-cell></uui-table-head-cell>
              </uui-table-head>
              ${c(this, g).map(
        (e) => n`<uui-table-row>
                    <uui-table-cell>${e.name}</uui-table-cell>
                    <uui-table-cell>${e.typeName}</uui-table-cell>
                    <uui-table-cell
                      >${e.executedOn.toLocaleString()}</uui-table-cell
                    >
                    <uui-table-cell>
                      ${this.localize.term(
          "formEntries_workflowExecutionStage" + e.executionStage
        )}
                    </uui-table-cell>
                    <uui-table-cell>${e.result}</uui-table-cell>
                    <uui-table-cell>
                      <uui-button
                        label=${this.localize.term("formEntries_runWorkflow")}
                        @click="${() => r(this, o, le).call(this, e.workflowKey)}"
                      >
                        ${this.localize.term(
          e.result === "Completed" ? "formEntries_workflowAuditRunAgain" : e.result === "SkippedDueToConditions" ? "formEntries_workflowAuditRunAnyway" : "formEntries_workflowAuditRetry"
        )}
                      </uui-button>
                    </uui-table-cell>
                  </uui-table-row>`
      )}
            </uui-table>
          </uui-box>`
    )}
      ${v(
      c(this, E).length > 0,
      () => n`<uui-box
            headline=${this.localize.term("formEntries_recordAudit")}
          >
            <uui-table>
              <uui-table-head>
                <uui-table-head-cell
                  >${this.localize.term(
        "formEntries_updatedOn"
      )}</uui-table-head-cell
                >
                <uui-table-head-cell
                  >${this.localize.term(
        "formEntries_updatedBy"
      )}</uui-table-head-cell
                >
              </uui-table-head>
              ${c(this, E).map(
        (e) => n`<uui-table-row>
                    <uui-table-cell
                      >${e.updatedOn.toLocaleString()}</uui-table-cell
                    >
                    <uui-table-cell>${e.updatedBy}</uui-table-cell>
                  </uui-table-row>`
      )}
            </uui-table>
          </uui-box>`
    )}
      <!-- submitting is intentional to ensure result is returned to the callee, indicating whether
      the collection should be updated (ie modal had saved changes) -->
      <uui-button
        slot="actions"
        label=${this.localize.term("general_close")}
        @click=${this._submitModal}
      ></uui-button>
    </umb-body-layout>`;
  }
};
f = /* @__PURE__ */ new WeakMap();
g = /* @__PURE__ */ new WeakMap();
E = /* @__PURE__ */ new WeakMap();
_ = /* @__PURE__ */ new WeakMap();
b = /* @__PURE__ */ new WeakMap();
S = /* @__PURE__ */ new WeakMap();
o = /* @__PURE__ */ new WeakSet();
U = function() {
  return this.value.fields.filter((e) => !r(this, o, D).call(this, e));
};
B = function() {
  return r(this, o, U).call(this).map((t) => ({
    alias: t.fieldId,
    value: this._editModeActive ? r(this, o, H).call(this, t) : r(this, o, N).call(this, t)
  }));
};
N = function(e) {
  var l;
  const t = r(this, o, y).call(this, e);
  if (!t)
    return n`${e.value}`;
  const i = new he(
    this,
    ((l = this.data) == null ? void 0 : l.fieldPrevalues) || []
  );
  if (t.view === "file")
    return fe(r(this, o, j).call(this, e));
  {
    const s = i.getRenderValue(
      e,
      t.view
    );
    return n`${s}`;
  }
};
j = function(e) {
  const t = ["jpg", "jpeg", "png", "gif", "bmp"];
  if (!e.value)
    return "";
  const i = e.value.toString().split(", ");
  let l = "";
  for (let s = 0; s < i.length; s++) {
    const a = i[s], u = a.substring(a.lastIndexOf(".") + 1).toLowerCase();
    if (l += "<div>", t.indexOf(u) >= 0)
      l += `<a target="_blank" href="${a}"><img src="${a}" width="200" /></a>`;
    else {
      const d = a.substring(a.lastIndexOf("/") + 1);
      l += `<a target="_blank" href="${a}">${d}</a>`;
    }
    l += "</div>";
  }
  return l;
};
H = function(e) {
  var l, s;
  const t = r(this, o, y).call(this, e);
  if (!t)
    return null;
  const i = ((l = e.value) == null ? void 0 : l.toString()) || "";
  switch (t.editView) {
    case "Umb.PropertyEditorUi.Toggle":
      return i.toLowerCase() === "true";
    case "Umb.PropertyEditorUi.Dropdown": {
      const a = r(this, o, C).call(this, t.alias);
      if (((s = a == null ? void 0 : a.settings.AllowMultipleSelections) == null ? void 0 : s.toLowerCase()) === "true") {
        const u = r(this, o, w).call(this, e.fieldId, i.split(",").map((d) => d.trim()));
        return this._editModeActive ? u : u.join(", ");
      } else
        return r(this, o, w).call(this, e.fieldId, [i]);
    }
    case "Umb.PropertyEditorUi.RadioButtonList":
      return r(this, o, w).call(this, e.fieldId, [i])[0];
    case "Umb.PropertyEditorUi.CheckBoxList": {
      const a = r(this, o, w).call(this, e.fieldId, i.split(",").map((u) => u.trim()));
      return this._editModeActive ? a : a.join(", ");
    }
    case "Umb.PropertyEditorUi.DatePicker":
      return this._editModeActive ? i.replace("T", " ") : new Date(i).toLocaleDateString();
    default:
      return i;
  }
};
w = function(e, t) {
  const i = [];
  for (let l = 0; l < t.length; l++) {
    const s = t[l];
    if (s.length === 0)
      continue;
    const u = r(this, o, $).call(this, e).find((F) => F.value === s), d = u != null && u.caption && u.caption.length > 0 ? u == null ? void 0 : u.caption : s;
    i.push(d);
  }
  return i;
};
$ = function(e) {
  var t, i;
  return ((i = (t = this.data) == null ? void 0 : t.fieldPrevalues.find((l) => l.id === e)) == null ? void 0 : i.prevalues) || [];
};
D = function(e) {
  const t = (l) => "0123456789abcdef".includes(l.toLowerCase());
  return !((l) => (l = l.replace(/-/g, ""), l.length === 32 && [...l].every(t)))(e.fieldId);
};
G = function(e) {
  const t = r(this, o, y).call(this, e);
  return t == null ? void 0 : t.name;
};
X = function(e) {
  const t = r(this, o, y).call(this, e);
  return t == null ? void 0 : t.editView;
};
K = function(e) {
  var l;
  const t = [];
  if (!this._editModeActive)
    return t;
  const i = r(this, o, y).call(this, e);
  if (!i)
    return t;
  switch (i.editView) {
    case "Umb.PropertyEditorUi.Dropdown": {
      const s = r(this, o, C).call(this, i.alias);
      s && t.push(
        {
          alias: "multiple",
          value: ((l = s.settings.AllowMultipleSelections) == null ? void 0 : l.toLowerCase()) === "true"
        },
        {
          alias: "items",
          value: r(this, o, $).call(this, s.id).map(
            (a) => a.caption && a.caption.length > 0 ? a.caption : a.value
          )
        }
      );
      break;
    }
    case "Umb.PropertyEditorUi.RadioButtonList":
    case "Umb.PropertyEditorUi.CheckBoxList": {
      const s = r(this, o, C).call(this, i.alias);
      s && t.push({
        alias: "items",
        value: r(this, o, $).call(this, s.id).map(
          (a) => a.caption && a.caption.length > 0 ? a.caption : a.value
        )
      });
      break;
    }
  }
  return t;
};
C = function(e) {
  var i;
  return (((i = c(this, f)) == null ? void 0 : i.getAllFields()) || []).find((l) => l.alias === e);
};
y = function(e) {
  return r(this, o, P).call(this, e.fieldId);
};
P = function(e) {
  var t;
  return (t = this.data) == null ? void 0 : t.schema.find((i) => i.id === e);
};
I = function() {
  this._editModeActive = !this._editModeActive, this._editModeActive ? h(this, _, r(this, o, U).call(this)) : h(this, _, []), h(this, b, {});
};
J = function(e) {
  var t;
  return ((t = c(this, b)[e]) == null ? void 0 : t.length) > 0;
};
Q = function(e) {
  return c(this, b)[e];
};
Y = async function() {
  var F, V, O, L;
  const e = [], t = c(this, _), i = r(this, o, Z).call(this);
  for (let m = 0; m < t.length; m++) {
    const A = t[m], M = i[m];
    A.value !== M.values.join(",") && e.push(M);
  }
  if (e.length === 0) {
    r(this, o, x).call(this);
    return;
  }
  const l = {
    path: {
      recordId: ((F = this.value) == null ? void 0 : F.unique) || "",
      formId: ((V = c(this, f)) == null ? void 0 : V.getUnique()) || ""
    },
    body: e
  }, { error: s } = await de(
    this,
    ce.putFormByFormIdRecordByRecordId(l),
    {
      disableNotifications: !0
    }
  );
  if (s) {
    h(this, b, s.body.errors), this.requestUpdate();
    return;
  }
  r(this, o, x).call(this);
  const a = {
    data: {
      message: this.localize.term("formEntries_updateRecordSuccess")
    }
  }, u = await this.getContext(we);
  u == null || u.peek("positive", a);
  const d = structuredClone((O = this.value) == null ? void 0 : O.fields);
  for (let m = 0; m < e.length; m++) {
    const A = e[m];
    d.find((M) => M.fieldId === A.fieldId).value = A.values;
  }
  (L = this.modalContext) == null || L.updateValue({ fields: d, updateCollection: !0 });
};
x = function() {
  this._editModeActive = !1, h(this, b, {}), h(this, _, []);
};
Z = function() {
  var i;
  const e = (i = this.shadowRoot) == null ? void 0 : i.getElementById(
    "formSubmissionFields"
  );
  if (!e)
    throw new Error("Could not find form submission fields element.");
  const t = [];
  for (let l = 0; l < e.value.length; l++) {
    const s = e.value[l];
    t.push({
      fieldId: s.alias,
      values: r(this, o, ee).call(this, s.alias, s)
    });
  }
  return t;
};
ee = function(e, t) {
  const i = r(this, o, P).call(this, t.alias);
  if (!i)
    return [];
  switch (i.editView) {
    case "Umb.PropertyEditorUi.Dropdown":
    case "Umb.PropertyEditorUi.RadioButtonList":
    case "Umb.PropertyEditorUi.CheckBoxList": {
      const l = Array.isArray(t.value) ? t.value : [t.value];
      if (l.length === 0)
        return [];
      const s = r(this, o, $).call(this, e);
      return l.map((a) => {
        const u = s.find(
          (d) => d.caption === a
        );
        return u ? u.value : a;
      });
    }
    default:
      return [t.value];
  }
};
te = async function() {
  var l;
  const e = (l = c(this, f)) == null ? void 0 : l.getUnique();
  if (!e) return;
  const t = this.value.unique, i = new q(this);
  await r(this, o, R).call(this, i, e, t);
};
R = async function(e, t, i) {
  var s;
  const l = await e.requestCollection({ formId: t, recordId: i });
  h(this, g, ((s = l == null ? void 0 : l.data) == null ? void 0 : s.items) || []), this.requestUpdate();
};
ie = async function() {
  var s, a;
  const e = (s = c(this, f)) == null ? void 0 : s.getUnique();
  if (!e) return;
  const t = this.value.unique, l = await new ne(this).requestCollection({ formId: e, recordId: t });
  h(this, E, ((a = l == null ? void 0 : l.data) == null ? void 0 : a.items) || []), this.requestUpdate();
};
le = async function(e) {
  var s;
  const t = (s = c(this, f)) == null ? void 0 : s.getUnique();
  if (!t) return;
  const i = this.value.unique;
  await ye(this, {
    headline: this.localize.term(
      "formEntries_workflowAuditRetryConfirmTitle"
    ),
    content: this.localize.term(
      "formEntries_workflowAuditRetryConfirmMessage"
    ),
    confirmLabel: this.localize.term("general_yes"),
    color: "positive"
  });
  const l = new q(this);
  await l.executeWorkflow(t, i, e), await r(this, o, R).call(this, l, t, i);
};
oe = function() {
  history.pushState(
    {},
    "",
    `/umbraco/section/content/workspace/document/edit/${this.value.documentUnique}`
  ), this._rejectModal();
};
re = function() {
  var t;
  if (!((t = this.value.member) != null && t.unique)) return null;
  const e = () => {
    history.pushState(
      {},
      "",
      `/umbraco/section/member-management/workspace/member/edit/${this.value.member.unique}`
    ), this._rejectModal();
  };
  return n` <umb-property-layout
      label=${this.localize.term("formEntries_member")}
    >
      <uui-ref-node-member
        slot="editor"
        name=${this.value.member.name}
        group-name=${this.value.member.email}
      >
        <uui-action-bar slot="actions">
          <uui-button
            label=${this.localize.term("general_edit")}
            @click=${e}
          ></uui-button>
        </uui-action-bar>
      </uui-ref-node-member>
    </umb-property-layout>`;
};
se = function() {
  var e;
  return (e = c(this, S)) != null && e.userSecurity.editEntries ? n`<div id="edit">
      ${v(
    this._editModeActive,
    () => n` <uui-button
              @click=${r(this, o, I)}
              look="default"
              label=${this.localize.term("general_cancel")}
            ></uui-button>
            <uui-button
              @click=${r(this, o, Y)}
              look="primary"
              color="positive"
              label=${this.localize.term("buttons_save")}
            ></uui-button>`,
    () => n`<uui-button
            @click=${r(this, o, I)}
            look="primary"
            label=${this.localize.term("general_edit")}
          ></uui-button>`
  )}
    </div>` : null;
};
k.styles = [
  pe`
      uui-box {
        display: block;
      }
      uui-box + uui-box {
        margin-top: var(--uui-size-layout-1);
      }

      uui-table {
        width: 100%;
      }

      .validation-error {
        color: red;
      }

      #document {
        display: flex;
        justify-content: space-between;
      }

      #document uui-button {
        margin-left: var(--uui-size-6);
      }

      #edit {
        display: flex;
        justify-content: end;
        column-gap: var(--uui-size-3);
      }
    `
];
W([
  be()
], k.prototype, "_editModeActive", 2);
k = W([
  ve($e)
], k);
const ze = k;
export {
  k as FormsEntryDetailsModalElement,
  ze as default
};
//# sourceMappingURL=form-entry-details-modal.element.js.map
