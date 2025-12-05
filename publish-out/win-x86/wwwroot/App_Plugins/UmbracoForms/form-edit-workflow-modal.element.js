import { P as z, C as L, F as D, a as x, b as F } from "./index.js";
import { when as m, html as p, css as O, state as f, customElement as N } from "@umbraco-cms/backoffice/external/lit";
import { UmbModalBaseElement as M } from "@umbraco-cms/backoffice/modal";
import { tryExecute as P } from "@umbraco-cms/backoffice/resources";
import { UMB_NOTIFICATION_CONTEXT as A } from "@umbraco-cms/backoffice/notification";
import { UmbId as I } from "@umbraco-cms/backoffice/id";
var R = Object.defineProperty, U = Object.getOwnPropertyDescriptor, y = (t) => {
  throw TypeError(t);
}, h = (t, e, i, s) => {
  for (var n = s > 1 ? void 0 : s ? U(e, i) : e, d = t.length - 1, o; d >= 0; d--)
    (o = t[d]) && (n = (s ? o(e, i, n) : o(n)) || n);
  return s && n && R(e, i, n), n;
}, v = (t, e, i) => e.has(t) || y("Cannot " + i), r = (t, e, i) => (v(t, e, "read from private field"), i ? i.call(t) : e.get(t)), g = (t, e, i) => e.has(t) ? y("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), B = (t, e, i, s) => (v(t, e, "write to private field"), e.set(t, i), i), c = (t, e, i) => (v(t, e, "access private method"), i), a, w, l, _, b, k, $, C, S, T, E, W, V;
const H = "form-edit-workflow-modal";
let u = class extends M {
  constructor() {
    super(...arguments), g(this, l), g(this, a), g(this, w, ["onSubmit", "onApprove", "onReject"]), this._settingValues = [], this._settingsConfig = [], this._settingsConfigLoaded = !1, this._conditionEnabled = !1;
  }
  async connectedCallback() {
    var t, e;
    super.connectedCallback(), B(this, a, new z(
      this,
      this.data.workflowType,
      "formProviderWorkflows"
    )), await r(this, a).loadSettingValueConverterApis(), await c(this, l, _).call(this), this._settingsConfig = await r(this, a).getSettingsConfig(
      this._settingValues,
      this.data.workflowType.settings
    ), this._settingsConfigLoaded = !0, this._conditionEnabled = ((e = (t = this.value) == null ? void 0 : t.condition) == null ? void 0 : e.enabled) ?? !1;
  }
  render() {
    var t, e, i, s, n, d;
    return p`<umb-body-layout
      headline=${this.localize.term("formEdit_editWorkflow")}
    >
      <div id="main">
        <uui-box>
          <umb-property-layout
            alias="name"
            .label=${this.localize.term("formWorkflows_workflowNameLabel")}
            .description=${this.localize.term(
      "formWorkflows_workflowNameDescription"
    )}
          >
            <uui-input
              slot="editor"
              .value=${(t = this.value) == null ? void 0 : t.name}
              @change=${c(this, l, b)}
              label="name"
            ></uui-input>
          </umb-property-layout>

          <umb-property-layout
            alias="workflowType"
            .label=${this.localize.term("formWorkflows_workflowTypeLabel")}
            .description=${this.localize.term(
      "formWorkflows_workflowTypeDescription"
    )}
          >
            <div slot="editor" id="workflowType">
              <span class="icon"
                ><uui-icon name=${((e = this.data) == null ? void 0 : e.workflowType.icon) ?? ""}></uui-icon
              ></span>
              <div class="info">
                <div>${(i = this.data) == null ? void 0 : i.workflowType.name}</div>
                <small>${(s = this.data) == null ? void 0 : s.workflowType.description}</small>
              </div>
            </div>
          </umb-property-layout>

          <umb-property-layout
            alias="active"
            .label=${this.localize.term("formWorkflows_activeLabel")}
            .description=${this.localize.term(
      "formWorkflows_activeDescription"
    )}
          >
            <uui-toggle
              slot="editor"
              ?checked=${(n = this.value) == null ? void 0 : n.active}
              @change=${c(this, l, $)}
              label="${this.localize.term("formWorkflows_activeLabel")}"
            ></uui-toggle>
          </umb-property-layout>

          <umb-property-layout
            alias="sensitiveData"
            .label=${this.localize.term(
      "formWorkflows_includeSensitiveDataLabel"
    )}
            .description=${this.localize.term(
      "formWorkflows_includeSensitiveDataDescription"
    )}
          >
            <uui-toggle
              slot="editor"
              ?checked=${(d = this.value) == null ? void 0 : d.includeSensitiveData}
              @change=${c(this, l, k)}
              label="${this.localize.term(
      "formWorkflows_includeSensitiveDataLabel"
    )}"
            ></uui-toggle>
          </umb-property-layout>

          ${m(
      this.data && !this.data.isNew,
      () => p`<umb-property-layout alias="stage" label="Stage">
                <uui-select
                  label="Stage"
                  slot="editor"
                  @change=${c(this, l, C)}
                  .options=${r(this, w).map((o) => ({
        name: o,
        value: o,
        selected: this.value.collectionName === o
      }))}
                >
                </uui-select>
              </umb-property-layout>`
    )}
          ${m(
      r(this, a) && this.value && this._settingsConfigLoaded,
      () => p` <umb-property-dataset
                .value=${this._settingValues}
                @change=${c(this, l, S)}
              >
                ${this.data.workflowType.settings.map(
        (o) => p`
                    <umb-property
                      ?inert=${o.isReadOnly}
                      label=${r(this, a).getLocalizedSettingDetail(
          o,
          "Label",
          o.name
        )}
                      description=${r(this, a).getLocalizedSettingDetail(
          o,
          "Description",
          o.description
        )}
                      alias=${o.alias}
                      .config=${r(this, a).getPropertyConfigForSetting(
          this._settingsConfig,
          o
        )}
                      .appearance=${r(this, a).getPropertyAppearanceForSetting(
          o.view
        )}
                      property-editor-ui-alias=${o.view}
                    >
                    </umb-property>
                  `
      )}
              </umb-property-dataset>`
    )}

          <umb-property-layout
            alias="conditions"
            .label=${this.localize.term("formConditions_title")}
          >
            <div slot="editor">
              <uui-toggle
                ?checked=${this._conditionEnabled}
                .label=${this._conditionEnabled ? "On" : "Off"}
                @change=${c(this, l, T)}
              ></uui-toggle>
              ${m(
      this._conditionEnabled,
      () => {
        var o;
        return p`<form-edit-conditions
                    .value=${this.value.condition}
                    .fields=${((o = this.data) == null ? void 0 : o.fields) ?? []}
                    .appliedTo=${L.WORKFLOW}
                    @change=${c(this, l, W)}
                  ></form-edit-conditions>`;
      }
    )}
            </div>
          </umb-property-layout>
        </uui-box>
      </div>
      <div slot="actions">
        <uui-button
          label=${this.localize.term("general_close")}
          @click=${this._rejectModal}
        ></uui-button>
        <uui-button
          color="positive"
          look="primary"
          label=${this.localize.term("general_submit")}
          @click=${c(this, l, V)}
        ></uui-button>
      </div>
    </umb-body-layout>`;
  }
};
a = /* @__PURE__ */ new WeakMap();
w = /* @__PURE__ */ new WeakMap();
l = /* @__PURE__ */ new WeakSet();
_ = async function() {
  var e;
  const t = { ...this.value.settings };
  (e = this.data) == null || e.workflowType.settings.forEach((i) => {
    t[i.alias] || (t[i.alias] = i.defaultValue);
  }), this._settingValues = await r(this, a).getSettingValues(t);
};
b = function(t) {
  var i;
  const e = t.target.value.toString();
  (i = this.modalContext) == null || i.updateValue({ name: e });
};
k = function(t) {
  var i;
  const e = t.target.checked;
  (i = this.modalContext) == null || i.updateValue({ includeSensitiveData: e });
};
$ = function(t) {
  var i;
  const e = t.target.checked;
  (i = this.modalContext) == null || i.updateValue({ active: e });
};
C = function(t) {
  var i;
  const e = t.target.value.toString();
  (i = this.modalContext) == null || i.updateValue({ collectionName: e });
};
S = async function(t) {
  const e = t.target.value;
  this._settingValues = e;
};
T = function(t) {
  var i;
  this._conditionEnabled = t.target.checked;
  const e = structuredClone(this.value.condition) || c(this, l, E).call(this);
  e.enabled = this._conditionEnabled, (i = this.modalContext) == null || i.updateValue({ condition: e });
};
E = function() {
  return {
    id: I.new(),
    enabled: !1,
    actionType: x.SHOW,
    logicType: D.ALL,
    rules: []
  };
};
W = function(t) {
  var i;
  const e = t.target.value;
  (i = this.modalContext) == null || i.updateValue({ condition: e });
};
V = async function() {
  var s;
  const t = await r(this, a).getUpdatedSettingsForPersistence(
    this._settingValues,
    this.data.workflowType.settings
  ), e = {
    path: {
      id: this.data.workflowType.id
    },
    body: {
      name: this.value.name,
      settings: t
    }
  }, { error: i } = await P(
    this,
    F.postFormWorkflowByIdValidateSettings(e),
    {
      disableNotifications: !0
    }
  );
  if (i) {
    const n = r(this, a).createValidationErrorNotification(
      "formWorkflows_saveFailedTitle",
      i
    ), d = await this.getContext(
      A
    );
    d == null || d.peek("danger", n);
  } else
    (s = this.modalContext) == null || s.updateValue({ settings: t }), this._submitModal();
};
u.styles = [
  O`
      [inert] {
        opacity: 0.5;
      }

			#workflowType {
				text-decoration: none;
				color: inherit;
				align-self: stretch;
				line-height: normal;

				display: flex;
				position: relative;
				align-items: center;
			}

      #workflowType .icon {
        margin-right: 10px;
      }

      #workflowType .icon uui-icon {
        width: 1.6em;
        height: 1.6em;
    `
];
h([
  f()
], u.prototype, "_settingValues", 2);
h([
  f()
], u.prototype, "_settingsConfig", 2);
h([
  f()
], u.prototype, "_settingsConfigLoaded", 2);
h([
  f()
], u.prototype, "_conditionEnabled", 2);
u = h([
  N(H)
], u);
const Y = u;
export {
  u as FormsEditWorkflowModalElement,
  Y as default
};
//# sourceMappingURL=form-edit-workflow-modal.element.js.map
